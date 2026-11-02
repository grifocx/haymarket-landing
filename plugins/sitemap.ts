import fs from 'node:fs';
import path from 'node:path';
import type { Plugin } from 'vite';
import { pageMeta, BASE_URL } from '../src/pageMeta';

// which source file's mtime drives lastmod for each route
const routeSourceFile: Record<string, string[]> = {
  '/': ['src/pages/Home.tsx', 'src/reviews.ts'],
  '/catalog': ['src/pages/Catalog.tsx', 'src/products.ts'],
  '/services': ['src/pages/Services.tsx', 'src/services.ts'],
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

export function sitemapPlugin(): Plugin {
  return {
    name: 'generate-sitemap',
    apply: 'build',
    closeBundle() {
      const root = process.cwd();
      const outDir = path.join(root, 'dist');
      if (!fs.existsSync(outDir)) return;

      const urls = Object.keys(pageMeta)
        .map((route) => {
          const loc = route === '/' ? `${BASE_URL}/` : `${BASE_URL}${route}`;
          return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastModForRoute(root, route)}</lastmod>\n  </url>`;
        })
        .join('\n');

      const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
      fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xml, 'utf-8');
    },
  };
}
