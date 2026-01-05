import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { LoadingSpinner } from './components/LoadingSpinner';

const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const Catalog = lazy(() => import('./pages/Catalog').then(module => ({ default: module.Catalog })));
const Services = lazy(() => import('./pages/Services').then(module => ({ default: module.Services })));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
