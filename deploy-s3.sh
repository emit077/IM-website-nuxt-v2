#!/usr/bin/env sh
# Deploy the Nuxt static export to S3, then record a dated git release.
#
# Credentials come from the environment or a local .env — never hardcode keys.
#
# Required:
#   AWS_ACCESS_KEY_ID
#   AWS_SECRET_ACCESS_KEY
#   S3_BUCKET
#
# Optional:
#   AWS_DEFAULT_REGION              default: ap-south-1
#   CLOUDFRONT_DISTRIBUTION_ID      invalidate after sync when set
#   NUXT_APP_BASE_URL               default: /
#   NUXT_PUBLIC_API_URL             default: http://13.234.192.144 (from .env.production)
#   SKIP_GIT_RELEASE=1              skip the release commit and tag
#   PUSH_RELEASE=1                  push the release commit and tag to origin
#
# Usage:
#   npm run deploy:s3
#   ./deploy-s3.sh

set -e
ROOT=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
cd "$ROOT"

if [ -f "$ROOT/.env" ]; then
  echo "Loading environment from .env"
  set -a
  # shellcheck disable=SC1091
  . "$ROOT/.env"
  set +a
fi

if [ -f "$ROOT/.env.production" ]; then
  echo "Loading environment from .env.production"
  set -a
  # shellcheck disable=SC1091
  . "$ROOT/.env.production"
  set +a
fi

export AWS_ACCESS_KEY_ID="${AWS_ACCESS_KEY_ID:?set AWS_ACCESS_KEY_ID}"
export AWS_SECRET_ACCESS_KEY="${AWS_SECRET_ACCESS_KEY:?set AWS_SECRET_ACCESS_KEY}"
export AWS_DEFAULT_REGION="${AWS_DEFAULT_REGION:-ap-south-1}"

BUCKET="${S3_BUCKET:?set S3_BUCKET e.g. my-site-bucket}"
DISTRIBUTION_ID="${CLOUDFRONT_DISTRIBUTION_ID:-}"

export NODE_ENV=production
export NUXT_APP_BASE_URL="${NUXT_APP_BASE_URL:-/}"
export NUXT_PUBLIC_API_URL="${NUXT_PUBLIC_API_URL:-http://13.234.192.144}"

OUT="$ROOT/.output/public"
RELEASE_STAMP=$(date +%Y-%m-%d-%H%M)
RELEASE_LABEL=$(date +'%Y-%m-%d %H:%M')
RELEASE_TAG="release-${RELEASE_STAMP}"

if ! command -v aws >/dev/null 2>&1; then
  echo "error: aws CLI is not installed" >&2
  exit 1
fi

if pgrep -f '[n]uxt dev' >/dev/null 2>&1; then
  echo "warning: nuxt dev appears to be running — generate may hang; stop it if deploy stalls." >&2
fi

echo "Building static site (base: $NUXT_APP_BASE_URL, api: $NUXT_PUBLIC_API_URL)..."
rm -rf "$OUT"
npm run generate &
GEN_PID=$!

# `nuxt generate` can hang after writing files. Wait until the static
# payload is actually complete (nuxt/ + public assets), not just index.html.
# Killing too early uploads HTML-only and every image/script 404s on S3.
i=0
idle=0
last_html_count=-1
MAX_WAIT=600
IDLE_DONE=30

while kill -0 "$GEN_PID" 2>/dev/null; do
  i=$((i + 1))
  if [ "$i" -gt "$MAX_WAIT" ]; then
    echo "error: timed out waiting for nuxt generate (pid $GEN_PID)" >&2
    kill "$GEN_PID" 2>/dev/null || true
    sleep 2
    kill -9 "$GEN_PID" 2>/dev/null || true
    break
  fi

  html_count=0
  if [ -d "$OUT" ]; then
    html_count=$(find "$OUT" -name 'index.html' | wc -l | tr -d ' ')
  fi

  if [ -f "$OUT/index.html" ] && [ -d "$OUT/nuxt" ] && [ -d "$OUT/assets" ]; then
    if [ "$html_count" = "$last_html_count" ]; then
      idle=$((idle + 1))
    else
      idle=0
      last_html_count=$html_count
    fi
    if [ "$idle" -ge "$IDLE_DONE" ]; then
      echo "Generate output looks complete; stopping hung process pid $GEN_PID..."
      kill "$GEN_PID" 2>/dev/null || true
      sleep 2
      kill -9 "$GEN_PID" 2>/dev/null || true
      break
    fi
  else
    idle=0
    last_html_count=$html_count
  fi

  sleep 1
done

wait "$GEN_PID" 2>/dev/null || true

if [ ! -d "$OUT/assets" ] && [ -d "$ROOT/public/assets" ]; then
  echo "Copying public/assets into build output..."
  cp -R "$ROOT/public/assets" "$OUT/assets"
fi

if [ ! -d "$OUT/nuxt" ]; then
  if [ -d "$ROOT/.nuxt/dist/client/nuxt" ]; then
    echo "Copying client build nuxt/ into output..."
    mkdir -p "$OUT"
    cp -R "$ROOT/.nuxt/dist/client/nuxt" "$OUT/nuxt"
  elif [ -d "$ROOT/.nuxt/dist/client" ]; then
    echo "Copying client build into output..."
    mkdir -p "$OUT"
    cp -R "$ROOT/.nuxt/dist/client/." "$OUT/"
  fi
fi

if [ ! -f "$OUT/index.html" ] || [ ! -d "$OUT/nuxt" ] || [ ! -d "$OUT/assets" ]; then
  echo "error: incomplete generate output (need index.html, nuxt/, and assets/)" >&2
  ls -la "$OUT" >&2 || true
  exit 1
fi

echo "Cleaning build output..."
find "$OUT" -name '.DS_Store' -delete
find "$OUT" -name 'Thumbs.db' -delete

echo "Syncing to s3://$BUCKET ..."
aws s3 sync "$OUT" "s3://$BUCKET" --delete

if [ -n "$DISTRIBUTION_ID" ]; then
  echo "Invalidating CloudFront distribution $DISTRIBUTION_ID ..."
  aws cloudfront create-invalidation --distribution-id "$DISTRIBUTION_ID" --paths '/*'
fi

echo "Deployed → s3://$BUCKET"

if [ "${SKIP_GIT_RELEASE:-}" = "1" ]; then
  echo "Skipping git release (SKIP_GIT_RELEASE=1)."
  exit 0
fi

if ! git -C "$ROOT" rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "warning: not a git repository; skipping release commit/tag." >&2
  exit 0
fi

echo "Recording release $RELEASE_TAG ($RELEASE_LABEL)..."

# Stage tracked updates and new files; .env / .output stay ignored.
git -C "$ROOT" add -A

if git -C "$ROOT" diff --cached --quiet; then
  echo "No source changes to commit."
else
  git -C "$ROOT" commit -m "$(cat <<EOF
Release ${RELEASE_LABEL}

Deployed the latest static build to s3://${BUCKET}.
EOF
)"
fi

if git -C "$ROOT" rev-parse "$RELEASE_TAG" >/dev/null 2>&1; then
  echo "warning: tag $RELEASE_TAG already exists; skipping tag." >&2
else
  git -C "$ROOT" tag -a "$RELEASE_TAG" -m "Release ${RELEASE_LABEL} — s3://${BUCKET}"
  echo "Tagged $RELEASE_TAG"
fi

if [ "${PUSH_RELEASE:-}" = "1" ]; then
  BRANCH=$(git -C "$ROOT" rev-parse --abbrev-ref HEAD)
  echo "Pushing $BRANCH and $RELEASE_TAG to origin..."
  git -C "$ROOT" push origin "HEAD:$BRANCH"
  git -C "$ROOT" push origin "$RELEASE_TAG"
fi

echo "Done → s3://$BUCKET · $RELEASE_TAG"
