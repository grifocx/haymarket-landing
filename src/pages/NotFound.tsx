import { Link } from 'react-router-dom';
import { Home, Wrench, Package } from 'lucide-react';
import { SEO } from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 Page Not Found | Haymarket Bicycles"
        description="The page you're looking for could not be found. Visit our home page to explore our bike shop services and products."
        noindex={true}
      />
      <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-neutral-800 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
          >
            <Home size={20} />
            Back to Home
          </Link>
          <Link
            to="/services"
            className="flex items-center gap-2 px-6 py-3 bg-neutral-100 text-neutral-900 rounded-lg hover:bg-neutral-200 transition-colors font-medium"
          >
            <Wrench size={20} />
            View Services
          </Link>
          <Link
            to="/catalog"
            className="flex items-center gap-2 px-6 py-3 bg-neutral-100 text-neutral-900 rounded-lg hover:bg-neutral-200 transition-colors font-medium"
          >
            <Package size={20} />
            Browse Catalog
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200">
          <p className="text-neutral-600 mb-4">Need help? We're here for you!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
            <a
              href="tel:+17037541911"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Call us: (703) 754-1911
            </a>
            <span className="hidden sm:inline text-neutral-400">|</span>
            <a
              href="mailto:info@haymarketbicycles.com"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Email: info@haymarketbicycles.com
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
