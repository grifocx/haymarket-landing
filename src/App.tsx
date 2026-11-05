import { StrictMode } from 'react';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import type { RouteRecord } from 'vite-react-ssg';
import { answers } from './answers';
import { TOPICS } from './answersData';

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: (
      <StrictMode>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </StrictMode>
    ),
    children: [
      {
        index: true,
        lazy: () => import('./pages/Home').then((m) => ({ Component: m.Home })),
      },
      {
        path: 'catalog',
        lazy: () => import('./pages/Catalog').then((m) => ({ Component: m.Catalog })),
      },
      {
        path: 'services',
        lazy: () => import('./pages/Services').then((m) => ({ Component: m.Services })),
      },
      {
        path: 'about',
        lazy: () => import('./pages/About').then((m) => ({ Component: m.About })),
      },
      {
        path: 'answers',
        lazy: () => import('./pages/Answers').then((m) => ({ Component: m.Answers })),
      },
      {
        path: 'answers/topic/:topic',
        lazy: () => import('./pages/AnswerTopicPage').then((m) => ({ Component: m.AnswerTopicPage })),
        getStaticPaths: () => TOPICS.map((t) => `/answers/topic/${t}`),
      },
      {
        path: 'answers/:slug',
        lazy: () => import('./pages/AnswerPage').then((m) => ({ Component: m.AnswerPage })),
        getStaticPaths: () => answers.map((a) => `/answers/${a.slug}`),
      },
      {
        path: '*',
        lazy: () => import('./pages/NotFound').then((m) => ({ Component: m.default })),
      },
    ],
  },
];

// Expands the dynamic answers route into one pre-rendered page per answer file.
export function includedRoutes(paths: string[]): string[] {
  const out: string[] = [];
  for (const p of paths) {
    if (p.includes(':slug')) {
      out.push(...answers.map((a) => `/answers/${a.slug}`));
    } else if (p.includes(':topic')) {
      out.push(...TOPICS.map((t) => `/answers/topic/${t}`));
    } else {
      out.push(p);
    }
  }
  return out;
}
