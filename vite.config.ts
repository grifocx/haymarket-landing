import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { Plugin } from 'vite';
import { getPageMeta, BASE_URL } from './src/pageMeta';
import { sitemapPlugin } from './plugins/sitemap';
import { indexNowPlugin } from './plugins/indexnow';

const securityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};

function securityHeadersPlugin(): Plugin {
  return {
    name: 'security-headers',
    configureServer(server) {
      server.middlewares.use((_req, res, next) => {
        for (const [key, value] of Object.entries(securityHeaders)) {
          res.setHeader(key, value);
        }
        next();
      });
    },
  };
}

function escapeAttr(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function injectHeadTags(html: string, route: string): string {
  const meta = getPageMeta(route);
  const canonical = `${BASE_URL}${meta.canonicalPath === '/' ? '' : meta.canonicalPath}`;
  const ogImage = meta.ogImage ?? `${BASE_URL}/og-image.png`;
  const title = escapeAttr(meta.title);
  const description = escapeAttr(meta.description);

  return html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${meta.title}</title>`)
    .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/, `<meta name="description" content="${description}" />`)
    .replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${title}" />`)
    .replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${description}" />`)
    .replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:title" content="${title}" />`
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:description" content="${description}" />`
    )
    .replace(/<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/, `<meta property="og:image" content="${ogImage}" />`)
    .replace(/<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/, `<meta name="twitter:image" content="${ogImage}" />`);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), securityHeadersPlugin(), sitemapPlugin(), indexNowPlugin()],
  resolve: {
    alias: {
      // react-helmet-async ships CJS as "main"; force its ESM build so the
      // SSR pre-render bundle can be imported by Node with named exports
      'react-helmet-async': new URL('./node_modules/react-helmet-async/lib/index.esm.js', import.meta.url).pathname,
    },
  },
  ssgOptions: {
    script: 'async',
    dirStyle: 'nested',
    formatting: 'none',
    entry: 'src/main.tsx',
    onBeforePageRender: (route, indexHTML) => injectHeadTags(indexHTML, route),
  },
});
