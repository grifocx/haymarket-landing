import { StrictMode } from 'react';
import { Outlet } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary';
import type { RouteRecord } from 'vite-react-ssg';

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
        path: '*',
        lazy: () => import('./pages/NotFound').then((m) => ({ Component: m.NotFound })),
      },
    ],
  },
];
