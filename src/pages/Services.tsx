import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Info } from 'lucide-react';
import { Layout } from '../components/Layout';
import { BackToTop } from '../components/BackToTop';
import { servicePackages } from '../serviceIndex';
import { CommonQuestions } from '../components/CommonQuestions';
import { scrollToSection } from '../utils/helpers';

function formatPrice(pkg: { price: number; price_note: string }): string {
  return pkg.price_note ? `$${pkg.price} ${pkg.price_note}` : `$${pkg.price}`;
}

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

  const pricesUpdated = __PRICES_UPDATED__;

  return (
    <Layout>
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
            Expert bike maintenance and repair services to keep you rolling smoothly. From quick tune-ups to complete overhauls, our certified mechanics are here to help.
          </p>
        </div>
      </section>

      <section className="pb-4 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-gray-500 text-center">
            Prices updated: {pricesUpdated}
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

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="font-montserrat text-lg text-[#144D3A] mb-8 text-center">
            Typical turnaround: 5 days October–February, 10 days March–July.
          </p>

          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-[#144D3A]">
                  <th scope="col" className="font-montserrat font-bold text-[#144D3A] py-4 pr-4">Service</th>
                  <th scope="col" className="font-montserrat font-bold text-[#144D3A] py-4 pr-4">Price</th>
                  <th scope="col" className="font-montserrat font-bold text-[#144D3A] py-4 pr-4">What's included</th>
                  <th scope="col" className="font-montserrat font-bold text-[#144D3A] py-4">Turnaround</th>
                </tr>
              </thead>
              <tbody>
                {servicePackages.map((pkg, i) => (
                  <tr key={pkg.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <th scope="row" className="font-montserrat font-bold text-[#144D3A] py-4 pr-4 align-top">{pkg.name}</th>
                    <td className="py-4 pr-4 align-top text-[#144D3A] font-semibold whitespace-nowrap">{formatPrice(pkg)}</td>
                    <td className="py-4 pr-4 align-top text-gray-600 leading-relaxed">{pkg.included}</td>
                    <td className="py-4 align-top text-gray-600">{pkg.turnaround || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards */}
          <div className="md:hidden space-y-4">
            {servicePackages.map((pkg) => (
              <div key={pkg.id} className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
                <div className="bg-[#144D3A] px-4 py-3 flex justify-between items-center">
                  <h3 className="font-montserrat font-bold text-white">{pkg.name}</h3>
                  <span className="font-montserrat font-bold text-white">{formatPrice(pkg)}</span>
                </div>
                <div className="p-4 space-y-2">
                  <p className="text-gray-600 leading-relaxed">{pkg.included}</p>
                  {pkg.turnaround && (
                    <p className="text-sm text-gray-500">Turnaround: {pkg.turnaround}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CommonQuestions topics={['service-repair']} heading="Common questions about service" />

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
