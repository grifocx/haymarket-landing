import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ProductCard } from '../components/ProductCard';
import { BackToTop } from '../components/BackToTop';
import { SEO } from '../components/SEO';
import { featuredProducts } from '../products';

export function Catalog() {
  return (
    <Layout>
      <SEO
        title="Featured Bikes Catalog | Haymarket Bicycles | Quality Bikes in Haymarket, VA"
        description="Browse our curated selection of premium bicycles at Haymarket Bicycles. Featuring road bikes, mountain bikes, electric bikes, and more. Expert guidance to help you find the perfect bike for your riding style in Northern Virginia."
        keywords="buy bikes Haymarket VA, Trek bikes Virginia, road bikes Haymarket, mountain bikes Gainesville, electric bikes Northern Virginia, bike shop catalog, bicycle sales Haymarket, premium bikes Virginia"
        canonicalUrl="https://haymarketbicycles.com/catalog"
      />

      <section className="pt-32 pb-16 px-4 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('/Haymarket Bicycles Logo 2024_Color Bar without Name.png')" }}
        ></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="font-montserrat text-5xl md:text-6xl font-extrabold text-[#144D3A] mb-6">
            Featured Bikes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our hand-picked selection of bikes. Each model has been carefully chosen to represent the best in its category, offering exceptional quality and value for riders of all levels.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat text-3xl font-bold text-[#144D3A] mb-4">
            Ready to Find Your Perfect Ride?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Visit our store for a test ride or contact us to discuss which bike is right for you.
          </p>
          <Link
            to="/#contact"
            className="font-montserrat inline-block bg-[#F36E32] text-white px-10 py-4 rounded-full hover:bg-[#e05d21] transition-all transform hover:scale-105 font-bold text-lg shadow-lg min-h-[3rem]"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      <BackToTop />
    </Layout>
  );
}
