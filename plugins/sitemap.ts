import fs from 'node:fs';
import path from 'node:path';
import type { Plugin } from 'vite';
import { pageMeta, BASE_URL } from '../src/pageMeta';
import { loadAnswers } from './answers';
import { TOPICS } from '../src/answersData';

// which source file's mtime drives lastmod for each route
const routeSourceFile: Record<string, string[]> = {
  '/': ['src/pages/Home.tsx', 'src/reviews.ts'],
  '/catalog': ['src/pages/Catalog.tsx', 'src/products.ts'],
  '/services': ['src/pages/Services.tsx', 'src/services.ts'],
  '/answers': ['src/pages/Answers.tsx'],
};

function lastModForRoute(root: string, route: string): string {
  const files = routeSourceFile[route] ?? ['src/pages/Home.tsx'];
  let newest = 0;
  for (const f of files) {
    try {
      const mtime = fs.statSync(path.join(root, f)).mtimeMs;
      if (mtime > newest) newest = mtime;
    } catch {
      // missing file: skip
    }
  }
  if (newest === 0) return new Date().toISOString().slice(0, 10);
  return new Date(newest).toISOString().slice(0, 10);
}

// answer pages use the updated date from their own frontmatter
function lastModForAnswer(answer: { updated: string }): string {
  return answer.updated;
}

export function sitemapPlugin(): Plugin {
  return {
    name: 'generate-sitemap',
    apply: 'build',
    closeBundle() {
      const root = process.cwd();
      const outDir = path.join(root, 'dist');
      if (!fs.existsSync(outDir)) return;

      const staticUrls = Object.keys(pageMeta).map((route) => {
        const loc = route === '/' ? `${BASE_URL}/` : `${BASE_URL}${route}`;
        return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastModForRoute(root, route)}</lastmod>\n  </url>`;
      });

      const topicUrls = TOPICS.map(
        (topic) =>
          `  <url>\n    <loc>${BASE_URL}/answers/topic/${topic}</loc>\n    <lastmod>${lastModForRoute(root, '/answers')}</lastmod>\n  </url>`
      );

      const answerUrls = loadAnswers(root).map(
        (answer) =>
          `  <url>\n    <loc>${BASE_URL}/answers/${answer.slug}</loc>\n    <lastmod>${lastModForAnswer(answer)}</lastmod>\n  </url>`
      );

      const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
        ...staticUrls,
        ...topicUrls,
        ...answerUrls,
      ].join('\n')}\n</urlset>\n`;
      fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xml, 'utf-8');
    },
  };
}
