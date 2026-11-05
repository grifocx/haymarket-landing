import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { Plugin } from 'vite';
import { getPageMeta, BASE_URL } from './src/pageMeta';
import { sitemapPlugin } from './plugins/sitemap';
import { indexNowPlugin } from './plugins/indexnow';
import { loadAnswers } from './plugins/answers';
import { TOPICS, TOPIC_LABELS } from './src/answersData';

function toScriptTag(json: unknown): string {
  const serialized = JSON.stringify(json)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
  return `<script type="application/ld+json">${serialized}</script>`;
}

// The template ships a site-wide FAQPage schema on every route. On answer
// pages it is replaced by the per-page FAQPage built from that page's question.
function stripGlobalFaqPage(html: string): string {
  // tempered non-greedy so only the FAQPage script is removed, not neighbors
  return html.replace(
    /<script type="application\/ld\+json">(?:(?!<\/script>)[\s\S])*?"@type":\s*"FAQPage"(?:(?!<\/script>)[\s\S])*?<\/script>/,
    ''
  );
}

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
  const normalizedRoute = route.startsWith('/') ? route : `/${route}`;
  let meta;
  let jsonLd: unknown[] = [];
  let stripFaq = false;

  if (normalizedRoute === '/answers') {
    meta = getPageMeta(route);
    jsonLd = [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Answers', item: `${BASE_URL}/answers` },
        ],
      },
    ];
  } else if (normalizedRoute.startsWith('/answers/topic/')) {
    const topicSlug = normalizedRoute.replace(/^\/answers\/topic\//, '');
    const topics = TOPICS as readonly string[];
    if (!topics.includes(topicSlug)) {
      throw new Error(`Unknown answer topic "${topicSlug}" (route ${normalizedRoute})`);
    }
    const topic = topicSlug as (typeof TOPICS)[number];
    const topicLabel = TOPIC_LABELS[topic];
    const url = `${BASE_URL}/answers/topic/${topicSlug}`;
    meta = {
      title: `${topicLabel} — Bike Answers | Haymarket Bicycles`,
      description: `Questions and answers from Haymarket Bicycles about ${topicLabel.toLowerCase()} — straight from the shop in Haymarket, VA.`,
      canonicalPath: `/answers/topic/${topicSlug}`,
    };
    jsonLd = [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Answers', item: `${BASE_URL}/answers` },
          { '@type': 'ListItem', position: 3, name: topicLabel, item: url },
        ],
      },
    ];
  } else if (normalizedRoute.startsWith('/answers/')) {
    const slug = normalizedRoute.replace(/^\/answers\//, '');
    const answer = loadAnswers().find((a) => a.slug === slug);
    if (!answer) {
      throw new Error(`No answer file found for slug "${slug}" (route ${route})`);
    }
    const url = `${BASE_URL}/answers/${answer.slug}`;
    meta = {
      title: `${answer.title} | Haymarket Bicycles`,
      description: answer.description,
      canonicalPath: `/answers/${answer.slug}`,
    };
    jsonLd = [
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: answer.title,
            acceptedAnswer: { '@type': 'Answer', text: answer.answerSummary },
          },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Answers', item: `${BASE_URL}/answers` },
          { '@type': 'ListItem', position: 3, name: answer.title, item: url },
        ],
      },
    ];
    stripFaq = true;
  } else {
    meta = getPageMeta(route);
  }

  const canonical = `${BASE_URL}${meta.canonicalPath === '/' ? '' : meta.canonicalPath}`;
  const ogImage = meta.ogImage ?? `${BASE_URL}/og-image.png`;
  const title = escapeAttr(meta.title);
  const description = escapeAttr(meta.description);

  let result = html
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

  if (stripFaq) {
    result = stripGlobalFaqPage(result);
  }

  if (jsonLd.length > 0) {
    result = result.replace('</head>', `${jsonLd.map(toScriptTag).join('\n    ')}\n  </head>`);
  }

  return result;
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
