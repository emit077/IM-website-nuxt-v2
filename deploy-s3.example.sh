#!/usr/bin/env sh
# Example / documentation for ./deploy-s3.sh
#
# The real script reads credentials from the environment or a local .env file.
# Do not put AWS keys in this repo.
#
# Required in .env or the shell:
#   AWS_ACCESS_KEY_ID=
#   AWS_SECRET_ACCESS_KEY=
#   S3_BUCKET=
#
# Optional:
#   AWS_DEFAULT_REGION=ap-south-1
#   CLOUDFRONT_DISTRIBUTION_ID=
#   NUXT_PUBLIC_API_URL=https://13.234.192.144
#   NUXT_APP_BASE_URL=/
#   SKIP_GIT_RELEASE=1
#   PUSH_RELEASE=1
#
# Usage:
#   npm run deploy:s3
#   ./deploy-s3.sh

exec "$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)/deploy-s3.sh"
