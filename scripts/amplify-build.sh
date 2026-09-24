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
if [ -f "$ROOT/.env.production" ]; then
  set -a
  # shellcheck disable=SC1091
  . "$ROOT/.env.production"
  set +a
fi
# Django API origin for /api/website/* (override in Amplify env vars if needed)
export NUXT_PUBLIC_API_URL="${NUXT_PUBLIC_API_URL:-http://13.234.192.144}"

rm -rf "$ROOT/.output"

echo "Starting nuxt generate (baseURL=$NUXT_APP_BASE_URL)..."
npm run generate &
GEN_PID=$!

# Wait until HTML, client assets, and public assets are on disk.
# Stopping at the first index.html uploads a site whose /nuxt/*.js files 404.
i=0
idle=0
last_html_count=-1
MAX_WAIT=600
IDLE_DONE=20

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
  mkdir -p "$OUT"
  cp -R "$ROOT/public/assets" "$OUT/assets"
fi

if [ ! -d "$OUT/nuxt" ] && [ -d "$ROOT/.nuxt/dist/client/nuxt" ]; then
  echo "Copying client build nuxt/ into output..."
  mkdir -p "$OUT"
  cp -R "$ROOT/.nuxt/dist/client/nuxt" "$OUT/nuxt"
fi

if [ ! -f "$OUT/index.html" ] || [ ! -d "$OUT/nuxt" ] || [ ! -d "$OUT/assets" ]; then
  echo "error: incomplete generate output (need index.html, nuxt/, and assets/)" >&2
  ls -la "$OUT" >&2 || true
  exit 1
fi

echo "Amplify build ready → $OUT"
ls -la "$OUT/index.html" "$OUT/nuxt" | head -20
