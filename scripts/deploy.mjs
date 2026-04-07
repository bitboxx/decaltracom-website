#!/usr/bin/env node
// Cross-platform deploy script for Cloudflare Pages.
// Loads .env, checks auth, then builds and deploys via wrangler.

import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';

function loadEnvFile(path) {
  if (!existsSync(path)) return;
  const content = readFileSync(path, 'utf8');
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

function run(commandLine) {
  const result = spawnSync(commandLine, { stdio: 'inherit', shell: true });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

function runQuiet(commandLine) {
  const result = spawnSync(commandLine, { stdio: 'pipe', shell: true });
  return result.status === 0;
}

loadEnvFile('.env');

if (!process.env.CLOUDFLARE_API_TOKEN) {
  if (!runQuiet('yarn wrangler whoami')) {
    console.error('Error: Not authenticated to Cloudflare.');
    console.error(
      'Set CLOUDFLARE_API_TOKEN in .env or run: yarn wrangler login',
    );
    process.exit(1);
  }
}

run('yarn build');
run('yarn wrangler pages deploy dist --project-name decaltra');
