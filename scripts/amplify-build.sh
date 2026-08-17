#!/usr/bin/env sh
# Hang-safe static generate for AWS Amplify.
# Nuxt/Nitro often leaves open handles after writing .output/public, so the
# process never exits and Amplify hits "Build timed out".

set -e
ROOT=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
cd "$ROOT"

OUT="$ROOT/.output/public"
export NODE_ENV=production
export NUXT_TELEMETRY_DISABLED=1
# Amplify Hosting at domain root
export NUXT_APP_BASE_URL="${NUXT_APP_BASE_URL:-/}"
# Django API origin for /api/website/* (set in Amplify env vars for production)
export NUXT_PUBLIC_API_URL="${NUXT_PUBLIC_API_URL:-http://127.0.0.1:8000}"

rm -rf "$ROOT/.output"

echo "Starting nuxt generate (baseURL=$NUXT_APP_BASE_URL)..."
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

# Allow Nitro to finish flushing files, then stop a hung generate process.
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

echo "Amplify build ready → $OUT"
ls -la "$OUT/index.html"
