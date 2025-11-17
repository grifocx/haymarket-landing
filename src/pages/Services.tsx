import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ServiceCard } from '../components/ServiceCard';
import { BackToTop } from '../components/BackToTop';
import { bikeServices } from '../services';

export function Services() {
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
            Ready to Book Your Service?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Stop by our shop or give us a call to schedule your bike service appointment.
          </p>
          <Link
            to="/"
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
