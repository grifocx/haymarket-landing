import { Bike, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServiceCard } from '../components/ServiceCard';
import { bikeServices } from '../services';

export function Services() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-3">
              <img src="/Haymarket Bicycles Logo 2024_Social Icon - X - 400px.png" alt="Haymarket Bicycles - Bicycle Repair Services in Haymarket, VA" className="h-14 w-14" width="56" height="56" />
              <span className="font-montserrat text-2xl font-bold text-[#144D3A]">Haymarket Bicycles</span>
            </Link>

            <Link
              to="/"
              className="font-montserrat flex items-center gap-2 text-[#144D3A] hover:text-[#73BB44] transition-colors font-bold"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

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
            className="font-montserrat inline-block bg-[#F36E32] text-white px-10 py-4 rounded-full hover:bg-[#e05d21] transition-all transform hover:scale-105 font-bold text-lg shadow-lg"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      <footer className="bg-[#144D3A] py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="font-montserrat text-xl font-bold text-white">Haymarket Bicycles</span>
          </div>
          <p className="text-white/60">
            © 2025 Haymarket Bicycles. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
