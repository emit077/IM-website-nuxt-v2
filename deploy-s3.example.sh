#!/usr/bin/env sh
# Example S3 deploy — copy to deploy-s3.sh and fill credentials locally.
# deploy-s3.sh is gitignored; do not commit real AWS keys.
#
# Usage:
#   cp deploy-s3.example.sh deploy-s3.sh
#   # edit deploy-s3.sh or export AWS_* below
#   ./deploy-s3.sh

set -e
ROOT=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
cd "$ROOT"

# Prefer environment / AWS profile — never hardcode keys in a committed file.
export AWS_ACCESS_KEY_ID="${AWS_ACCESS_KEY_ID:?set AWS_ACCESS_KEY_ID}"
export AWS_SECRET_ACCESS_KEY="${AWS_SECRET_ACCESS_KEY:?set AWS_SECRET_ACCESS_KEY}"
export AWS_DEFAULT_REGION="${AWS_DEFAULT_REGION:-ap-south-1}"

BUCKET="${S3_BUCKET:?set S3_BUCKET e.g. my-site-bucket}"
DISTRIBUTION_ID="${CLOUDFRONT_DISTRIBUTION_ID:-}"

export NODE_ENV=production
export NUXT_APP_BASE_URL="${NUXT_APP_BASE_URL:-/}"
export NUXT_PUBLIC_API_URL="${NUXT_PUBLIC_API_URL:-http://127.0.0.1:8000}"

OUT="$ROOT/.output/public"

echo "Building static site (base: $NUXT_APP_BASE_URL, api: $NUXT_PUBLIC_API_URL)..."
rm -rf "$OUT"
npm run generate &
GEN_PID=$!

i=0
while [ ! -f "$OUT/index.html" ]; do
  i=$((i + 1))
  if [ "$i" -gt 300 ]; then
    echo "error: timed out waiting for $OUT/index.html" >&2
    kill "$GEN_PID" 2>/dev/null || true
    exit 1
  fi
  if ! kill -0 "$GEN_PID" 2>/dev/null; then
    wait "$GEN_PID" || true
    break
  fi
  sleep 1
done

if [ ! -f "$OUT/index.html" ]; then
  echo "error: $OUT/index.html missing after generate" >&2
  exit 1
fi

if kill -0 "$GEN_PID" 2>/dev/null; then
  sleep 5
  if kill -0 "$GEN_PID" 2>/dev/null; then
    echo "Generate finished writing output but process hung; terminating pid $GEN_PID..."
    kill "$GEN_PID" 2>/dev/null || true
    sleep 2
    kill -9 "$GEN_PID" 2>/dev/null || true
  fi
  wait "$GEN_PID" 2>/dev/null || true
fi

echo "Syncing to s3://$BUCKET ..."
aws s3 sync "$OUT" "s3://$BUCKET" --delete

if [ -n "$DISTRIBUTION_ID" ]; then
  echo "Invalidating CloudFront distribution $DISTRIBUTION_ID ..."
  aws cloudfront create-invalidation --distribution-id "$DISTRIBUTION_ID" --paths '/*'
fi

echo "Done → s3://$BUCKET"
