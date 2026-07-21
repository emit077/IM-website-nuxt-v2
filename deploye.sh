#!/usr/bin/env sh
# Deploy Nuxt static export to GitHub Pages.
#
# Repo:  emit077/IM-website-nuxt-v2
# URL:   https://emit077.github.io/IM-website-nuxt-v2/
#
# GitHub Settings → Pages:
#   Source: Deploy from branch
#   Branch: gh-pages (or set GITHUB_PAGES_BRANCH)
#   Folder: / (root)
#
# Usage: npm run deploy   (or ./deploye.sh)

set -e
ROOT=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
cd "$ROOT"

ORIGIN=$(git -C "$ROOT" remote get-url origin 2>/dev/null) || {
  echo "error: no git remote 'origin'" >&2
  exit 1
}

REPO=$(basename "$ORIGIN" .git)
REPO=${REPO%.git}
BRANCH=${GITHUB_PAGES_BRANCH:-gh-pages}

if [ -z "${NUXT_APP_BASE_URL:-}" ]; then
  export NUXT_APP_BASE_URL="/${REPO}/"
fi

export NODE_ENV=production

OUT="$ROOT/.output/public"

# Concurrent `nuxt dev` can leave `nuxt generate` hanging after a successful build.
if pgrep -f '[n]uxt dev' >/dev/null 2>&1; then
  echo "warning: nuxt dev appears to be running — generate may hang; stop it if deploy stalls." >&2
fi

echo "Building static site (repo: $REPO, base: $NUXT_APP_BASE_URL)..."
# Nuxt generate sometimes never exits after writing .output/public (open handles).
# Run it in the background and continue once the static site is ready.
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

# Give Nitro a moment to finish writing, then stop a hung generate process.
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

touch "$OUT/.nojekyll"

# GitHub Pages rejects symlinks in the deployment artifact.
echo "Cleaning build output..."
find "$OUT" -name '.DS_Store' -delete
find "$OUT" -name 'Thumbs.db' -delete
rm -f "$OUT/_nuxt/builds/meta/dev.json"

for link in $(find "$OUT" -type l); do
  target=$(python3 -c 'import os, sys; print(os.path.realpath(sys.argv[1]))' "$link") || {
    echo "error: could not resolve symlink: $link" >&2
    exit 1
  }
  if [ ! -e "$target" ]; then
    echo "error: broken symlink: $link -> $target" >&2
    exit 1
  fi
  rm "$link"
  if [ -d "$target" ]; then
    cp -R "$target" "$link"
  else
    cp "$target" "$link"
  fi
done

WORK=$(mktemp -d)
cleanup() {
  rm -rf "$WORK"
}
trap cleanup EXIT

echo "Preparing $BRANCH branch..."
if git ls-remote --heads origin "$BRANCH" | grep -q "$BRANCH"; then
  git clone --depth 1 --branch "$BRANCH" "$ORIGIN" "$WORK"
else
  git clone --depth 1 "$ORIGIN" "$WORK"
  git -C "$WORK" checkout --orphan "$BRANCH"
  git -C "$WORK" rm -rf . >/dev/null 2>&1 || true
fi

echo "Syncing build output..."
find "$WORK" -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
cp -R "$OUT/." "$WORK/"
touch "$WORK/.nojekyll"

echo "Publishing to origin:$BRANCH"
git -C "$WORK" add -A
if git -C "$WORK" diff --cached --quiet; then
  echo "No changes to deploy."
  exit 0
fi

git -C "$WORK" commit -m "Deploy $(date -u +%Y-%m-%dT%H:%MZ)"
git -C "$WORK" push origin "HEAD:$BRANCH"

echo "Done → https://emit077.github.io/${REPO}/ (branch: $BRANCH, folder: /)"
echo "GitHub Pages may take 1–2 minutes to publish after the deployment workflow succeeds."
