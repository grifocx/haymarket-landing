import { Link } from 'react-router-dom';
import { Home, Wrench, Package } from 'lucide-react';
import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';

export default function NotFound() {
  return (
    <Layout>
      <SEO
        title="404 Page Not Found | Haymarket Bicycles"
        description="The page you're looking for could not be found. Visit our home page to explore our bike shop services and products."
        noindex={true}
      />
      <div className="pt-32 pb-20 min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <div className="mb-8">
            <h1 className="font-montserrat text-8xl font-extrabold text-[#144D3A] mb-4">404</h1>
            <h2 className="font-montserrat text-3xl font-bold text-[#144D3A] mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="font-montserrat flex items-center gap-2 px-6 py-3 bg-[#F36E32] text-white rounded-full hover:bg-[#e05d21] transition-colors font-bold shadow-md"
            >
              <Home size={20} />
              Back to Home
            </Link>
            <Link
              to="/services"
              className="font-montserrat flex items-center gap-2 px-6 py-3 bg-gray-100 text-[#144D3A] rounded-full hover:bg-gray-200 transition-colors font-bold"
            >
              <Wrench size={20} />
              View Services
            </Link>
            <Link
              to="/catalog"
              className="font-montserrat flex items-center gap-2 px-6 py-3 bg-gray-100 text-[#144D3A] rounded-full hover:bg-gray-200 transition-colors font-bold"
            >
              <Package size={20} />
              Browse Catalog
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Need help? We're here for you!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <a
                href="tel:+17037541911"
                className="text-[#F36E32] hover:text-[#e05d21] font-medium"
              >
                Call us: (703) 754-1911
              </a>
              <span className="hidden sm:inline text-gray-400">|</span>
              <a
                href="mailto:info@haymarketbicycles.com"
                className="text-[#F36E32] hover:text-[#e05d21] font-medium"
              >
                Email: info@haymarketbicycles.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
