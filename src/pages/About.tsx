import { Link } from 'react-router-dom';
import { Wrench, Bike, MapPin } from 'lucide-react';
import { Layout } from '../components/Layout';
import { BackToTop } from '../components/BackToTop';

// Facts sourced from content/about.md — do not invent or extend here.
export function About() {
  return (
    <Layout>
      <section className="pt-32 pb-16 px-4 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="font-montserrat text-5xl md:text-6xl font-extrabold text-[#144D3A] mb-6">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Haymarket Bicycles is an independent, locally owned bicycle shop in Haymarket, Virginia — not part of a chain or franchise. We opened in 2007 and have served Northern Virginia's cycling community for 19 years.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
            <div className="bg-[#F36E32] w-14 h-14 rounded-xl flex items-center justify-center mb-5">
              <Bike className="w-7 h-7 text-white" />
            </div>
            <h2 className="font-montserrat text-2xl font-bold text-[#144D3A] mb-4">Brands We Carry</h2>
            <ul className="space-y-2 text-gray-600">
              <li>Trek — road, mountain, and city bikes</li>
              <li>Aventon — electric bikes</li>
              <li>Time — gravel bikes</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
            <div className="bg-[#73BB44] w-14 h-14 rounded-xl flex items-center justify-center mb-5">
              <Wrench className="w-7 h-7 text-white" />
            </div>
            <h2 className="font-montserrat text-2xl font-bold text-[#144D3A] mb-4">Services We Offer</h2>
            <ul className="space-y-2 text-gray-600">
              <li>Tune-ups (Levels 1, 2, and 3)</li>
              <li>Drivetrain cleaning and ultrasonic bath</li>
              <li>Flat tire and tubeless tire service</li>
              <li>Suspension service</li>
              <li>Bike and e-bike assembly</li>
              <li>E-bike service</li>
              <li>Custom bike fitting</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
            <div className="bg-[#F5E100] w-14 h-14 rounded-xl flex items-center justify-center mb-5">
              <MapPin className="w-7 h-7 text-[#144D3A]" />
            </div>
            <h2 className="font-montserrat text-2xl font-bold text-[#144D3A] mb-4">Towns We Serve</h2>
            <ul className="space-y-2 text-gray-600">
              <li>Haymarket</li>
              <li>Gainesville</li>
              <li>Northern Virginia area communities</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat text-3xl font-bold text-[#144D3A] mb-4">
            Come Visit the Shop
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Stop by to talk bikes, schedule a service, or take a test ride.
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
