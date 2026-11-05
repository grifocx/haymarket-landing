import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';
import type { Plugin } from 'vite';
import { pageMeta, BASE_URL } from '../src/pageMeta';
import { loadAnswers } from './answers';

const INDEXNOW_KEY = 'caceea23bf8cbf9745cb827c4cfd7027';
const INDEXNOW_ENDPOINT = 'api.indexnow.org';
// file mtime (seconds) recorded on the previous build; missing on first run
const STATE_FILE = 'node_modules/.indexnow-state.json';

interface State {
  [route: string]: number;
}

function readState(root: string): State {
  try {
    return JSON.parse(fs.readFileSync(path.join(root, STATE_FILE), 'utf-8'));
  } catch {
    return {};
  }
}

const STATIC_CONTENT_FILES = [
  'src/pages/Home.tsx',
  'src/pages/Catalog.tsx',
  'src/pages/Services.tsx',
  'src/products.ts',
  'src/services.ts',
  'src/reviews.ts',
];

const ANSWERS_FILES = ['src/pages/Answers.tsx', 'src/pages/AnswerPage.tsx'];

function newestMtime(root: string, files: string[]): number {
  let newest = 0;
  for (const f of files) {
    try {
      const m = fs.statSync(path.join(root, f)).mtimeMs;
      if (m > newest) newest = m;
    } catch {
      // missing file: skip
    }
  }
  return newest;
}

function changedUrls(root: string): string[] {
  const prev = readState(root);
  const next: State = {};
  const changed: string[] = [];

  for (const route of Object.keys(pageMeta)) {
    const newest = route === '/answers' ? newestMtime(root, ANSWERS_FILES) : newestMtime(root, STATIC_CONTENT_FILES);
    next[route] = newest;
    if (!prev[route] || newest > prev[route]) {
      changed.push(route === '/' ? `${BASE_URL}/` : `${BASE_URL}${route}`);
    }
  }

  for (const answer of loadAnswers(root)) {
    const route = `/answers/${answer.slug}`;
    const newest = fs.statSync(path.join(root, answer.sourceFile)).mtimeMs;
    next[route] = newest;
    if (!prev[route] || newest > prev[route]) {
      changed.push(`${BASE_URL}${route}`);
    }
  }

  // page component changes touch every answers URL
  const answersNewest = newestMtime(root, ANSWERS_FILES);
  if (answersNewest > 0 && prev['/answers'] && answersNewest > prev['/answers']) {
    for (const answer of loadAnswers(root)) {
      const url = `${BASE_URL}/answers/${answer.slug}`;
      if (!changed.includes(url)) changed.push(url);
    }
  }

  fs.mkdirSync(path.dirname(path.join(root, STATE_FILE)), { recursive: true });
  fs.writeFileSync(path.join(root, STATE_FILE), JSON.stringify(next, null, 2), 'utf-8');
  return changed;
}

function pingIndexNow(urls: string[]): void {
  const payload = JSON.stringify({
    host: new URL(BASE_URL).host,
    key: INDEXNOW_KEY,
    keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  });

  const req = https.request(
    {
      hostname: INDEXNOW_ENDPOINT,
      path: '/IndexNow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(payload),
      },
    },
    (res) => {
      console.log(`[indexnow] pinged ${urls.length} URL(s), status ${res.statusCode}`);
    }
  );
  req.on('error', (err) => {
    console.warn(`[indexnow] ping failed (non-fatal): ${err.message}`);
  });
  req.write(payload);
  req.end();
}

export function indexNowPlugin(): Plugin {
  return {
    name: 'indexnow-ping',
    apply: 'build',
    closeBundle() {
      if (process.env.DISABLE_INDEXNOW === '1') return;
      if (process.env.NETLIFY !== 'true' && process.env.CI !== 'true') {
        console.log('[indexnow] skipped outside CI/Netlify');
        return;
      }
      const changed = changedUrls(process.cwd());
      if (changed.length === 0) {
        console.log('[indexnow] no changed URLs to submit');
        return;
      }
      pingIndexNow(changed);
    },
  };
}
