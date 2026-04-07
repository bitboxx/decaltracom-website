#!/usr/bin/env bash
set -euo pipefail

# Load .env if present (so CLOUDFLARE_API_TOKEN can live there)
if [ -f .env ]; then
  set -a
  # shellcheck disable=SC1091
  . ./.env
  set +a
fi

# Auth check: token in env, else fall back to wrangler login state
if [ -z "${CLOUDFLARE_API_TOKEN:-}" ]; then
  if ! yarn dlx wrangler whoami > /dev/null 2>&1; then
    echo 'Error: Not authenticated to Cloudflare.' >&2
    echo 'Set CLOUDFLARE_API_TOKEN in .env or run: yarn dlx wrangler login' >&2
    exit 1
  fi
fi

yarn build
yarn dlx wrangler pages deploy dist --project-name decaltra
