#!/usr/bin/env sh
# Deploy Nuxt static export to GitHub Pages.
#
# Repo:  emit077/IM-website-nuxt-v2
# URL:   https://emit077.github.io/IM-website-nuxt-v2/
#
# GitHub Settings → Pages:
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

if [ -z "${NUXT_APP_BASE_URL:-}" ]; then
  export NUXT_APP_BASE_URL="/${REPO}/"
fi

echo "Building static site (repo: $REPO, base: $NUXT_APP_BASE_URL)..."
npm run generate

OUT="$ROOT/.output/public"
if [ ! -f "$OUT/index.html" ]; then
  echo "error: $OUT/index.html missing after generate" >&2
  exit 1
fi

touch "$OUT/.nojekyll"

# GitHub Pages rejects symlinks in the deployment artifact. Nitro can turn
# public/ symlinks into absolute paths that break on Actions runners.
echo "Resolving symlinks in build output..."
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

BRANCH=${GITHUB_PAGES_BRANCH:-gh-pages}

echo "Publishing to origin:$BRANCH"
cd "$OUT"
rm -rf .git
git init -b "$BRANCH"
git add -A
git commit -m "Deploy $(date -u +%Y-%m-%dT%H:%MZ)"
git remote add origin "$ORIGIN"
git push -f origin "HEAD:refs/heads/$BRANCH"
cd "$ROOT"
rm -rf "$OUT/.git"

echo "Done → https://emit077.github.io/${REPO}/ (branch: $BRANCH, folder: /)"
