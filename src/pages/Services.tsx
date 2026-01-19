import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Info } from 'lucide-react';
import { Layout } from '../components/Layout';
import { ServiceCard } from '../components/ServiceCard';
import { BackToTop } from '../components/BackToTop';
import { SEO } from '../components/SEO';
import { bikeServices } from '../services';
import { scrollToSection } from '../utils/helpers';

export function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  }, [location]);

  return (
    <Layout>
      <SEO
        title="Bike Repair & Service | Haymarket Bicycles | Expert Bicycle Maintenance in VA"
        description="Professional bicycle repair and maintenance services in Haymarket, VA. From tune-ups to complete overhauls, wheel building, custom builds, and professional fitting. Certified mechanics serving Northern Virginia since 2007."
        keywords="bike repair Haymarket VA, bicycle service Northern Virginia, bike tune-up Haymarket, wheel truing Gainesville, custom bike builds Virginia, professional bike fitting, bicycle maintenance Haymarket, bike mechanic near me"
        canonicalUrl="https://haymarketbicycles.com/services"
      />

      <section className="pt-32 pb-16 px-4 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('/Haymarket Bicycles Logo 2024_Color Bar without Name.png')" }}
        ></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="font-montserrat text-5xl md:text-6xl font-extrabold text-[#144D3A] mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert bike maintenance and repair services to keep you rolling smoothly. From quick tune-ups to complete overhauls, our certified mechanics are here to help. Here are some of our most popular service offerings:
          </p>
        </div>
      </section>

      <section id="ebike-requirements" className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-l-4 border-[#73BB44] rounded-lg shadow-md p-6">
            <div className="flex items-start gap-4">
              <div className="bg-[#73BB44]/10 p-3 rounded-lg flex-shrink-0">
                <Info className="w-6 h-6 text-[#73BB44]" />
              </div>
              <div>
                <h3 className="font-montserrat text-xl font-bold text-[#144D3A] mb-3">
                  E-Bike Service Requirements
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To ensure the highest quality service and safety, we service e-bikes with a standard removable seat post and functional bicycle drivetrain from major bicycle manufacturers. We are unable to service scooters, electric motorcycles, throttle-only 'mopeds,' or models with integrated foot-pegs instead of pedals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bikeServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat text-3xl font-bold text-[#144D3A] mb-4">
            Ready for Service?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Stop by our shop or give us a call to schedule your bike service today!
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
