import { Bike, MapPin, Clock, Phone, Mail, Wrench, ShoppingBag, Users, Star, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-[#144D3A] shadow-lg z-50 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <Bike className="w-10 h-10 text-[#F5E100]" />
              <span className="text-2xl font-bold text-white">Velocity Cycles</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-[#F5E100] transition-colors font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection('products')} className="text-white hover:text-[#F5E100] transition-colors font-medium">
                Products
              </button>
              <button onClick={() => scrollToSection('story')} className="text-white hover:text-[#F5E100] transition-colors font-medium">
                Our Story
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-[#F36E32] text-white px-6 py-2.5 rounded-full hover:bg-[#e05d21] transition-colors font-semibold">
                Contact Us
              </button>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#144D3A] border-t border-[#73BB44]">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('services')} className="block w-full text-left text-white hover:text-[#F5E100] py-2 font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection('products')} className="block w-full text-left text-white hover:text-[#F5E100] py-2 font-medium">
                Products
              </button>
              <button onClick={() => scrollToSection('story')} className="block w-full text-left text-white hover:text-[#F5E100] py-2 font-medium">
                Our Story
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-white hover:text-[#F5E100] py-2 font-medium">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </nav>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-[#144D3A] via-[#1a6048] to-[#144D3A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Haymarket's Neighborhood Bicycle Shop Since 2007
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Serving Northern Virginia's cycling community for 18 years with expert service, quality bikes, and community of cycling enthusiasts.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => scrollToSection('products')} className="bg-[#F36E32] text-white px-8 py-4 rounded-full hover:bg-[#e05d21] transition-all transform hover:scale-105 font-semibold text-lg shadow-lg">
                  Shop Now
                </button>
                <button onClick={() => scrollToSection('services')} className="bg-[#F5E100] text-[#144D3A] px-8 py-4 rounded-full hover:bg-[#e5d100] transition-all transform hover:scale-105 font-semibold text-lg shadow-lg">
                  Our Services
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#73BB44]/20 rounded-full w-96 h-96 mx-auto flex items-center justify-center backdrop-blur-sm border-4 border-[#F5E100]">
                <Bike className="w-48 h-48 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F36E32] py-8 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4 text-white">
            <MapPin className="w-8 h-8 flex-shrink-0" />
            <div>
              <p className="font-semibold text-lg">Visit Us</p>
              <p className="text-white/90">123 Pedal Lane, Biketown, BT 12345</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-white">
            <Clock className="w-8 h-8 flex-shrink-0" />
            <div>
              <p className="font-semibold text-lg">Store Hours</p>
              <p className="text-white/90">Tue-Sat: 11AM-6PM | Sun: 12PM-5PM</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-white">
            <Phone className="w-8 h-8 flex-shrink-0" />
            <div>
              <p className="font-semibold text-lg">Call Us</p>
              <p className="text-white/90">(555) BIKE-NOW</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#144D3A] mb-4">Professional Bicycle Services in Haymarket</h2>
            <p className="text-xl text-[#144D3A]/70 max-w-2xl mx-auto">
              Expert care for every bike and rider in Northern Virginia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-[#F36E32]">
              <div className="bg-[#144D3A] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8 text-[#73BB44]" />
              </div>
              <h3 className="text-2xl font-bold text-[#144D3A] mb-4">Repairs & Maintenance</h3>
              <p className="text-[#144D3A]/70 leading-relaxed mb-4">
                From flat tires to complete overhauls, our certified mechanics keep your bike running smoothly.
              </p>
              <ul className="space-y-2 text-[#144D3A]/70">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#F36E32] rounded-full"></div>
                  Tune-ups & adjustments
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#F36E32] rounded-full"></div>
                  Wheel truing & building
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#F36E32] rounded-full"></div>
                  Brake & gear servicing
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-[#73BB44]">
              <div className="bg-[#144D3A] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Bike className="w-8 h-8 text-[#73BB44]" />
              </div>
              <h3 className="text-2xl font-bold text-[#144D3A] mb-4">Custom Builds</h3>
              <p className="text-[#144D3A]/70 leading-relaxed mb-4">
                Design your dream bike with our expert guidance and premium components.
              </p>
              <ul className="space-y-2 text-[#144D3A]/70">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#73BB44] rounded-full"></div>
                  Personalized consultations
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#73BB44] rounded-full"></div>
                  Frame fitting & selection
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#73BB44] rounded-full"></div>
                  Component customization
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-[#F5E100]">
              <div className="bg-[#144D3A] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-[#73BB44]" />
              </div>
              <h3 className="text-2xl font-bold text-[#144D3A] mb-4">Fitting & Consultations</h3>
              <p className="text-[#144D3A]/70 leading-relaxed mb-4">
                Get the perfect fit for maximum comfort and performance on every ride.
              </p>
              <ul className="space-y-2 text-[#144D3A]/70">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#F5E100] rounded-full"></div>
                  Professional bike fitting
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#F5E100] rounded-full"></div>
                  Riding style assessment
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#F5E100] rounded-full"></div>
                  Equipment recommendations
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block bg-[#F36E32] text-white px-10 py-4 rounded-full hover:bg-[#e05d21] transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-4 bg-gradient-to-br from-[#144D3A] to-[#1a6048]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Premium Products</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Quality bikes and accessories for every rider
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="bg-[#F36E32] w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Bike className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#144D3A] text-center mb-2">Road Bikes</h3>
              <p className="text-[#144D3A]/70 text-center text-sm leading-relaxed">
                Speed and efficiency for the open road
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="bg-[#73BB44] w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Bike className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#144D3A] text-center mb-2">Mountain Bikes</h3>
              <p className="text-[#144D3A]/70 text-center text-sm leading-relaxed">
                Conquer trails with confidence
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="bg-[#F5E100] w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Bike className="w-12 h-12 text-[#144D3A]" />
              </div>
              <h3 className="text-xl font-bold text-[#144D3A] text-center mb-2">Electric Bikes</h3>
              <p className="text-[#144D3A]/70 text-center text-sm leading-relaxed">
                Powered rides for effortless journeys
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="bg-[#73BB44] w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <ShoppingBag className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#144D3A] text-center mb-2">Accessories</h3>
              <p className="text-[#144D3A]/70 text-center text-sm leading-relaxed">
                Helmets, locks, lights, and more
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/catalog"
              className="inline-block bg-[#F36E32] text-white px-10 py-4 rounded-full hover:bg-[#e05d21] transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
            >
              View Full Catalog
            </Link>
          </div>
        </div>
      </section>

      <section id="story" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-[#144D3A] mb-6">Our Story</h2>
              <p className="text-lg text-[#144D3A]/80 leading-relaxed mb-6">
                Founded in 2010, Velocity Cycles began with a simple mission: to share our passion for cycling with our community. What started as a small repair shop has grown into a full-service bike destination.
              </p>
              <p className="text-lg text-[#144D3A]/80 leading-relaxed mb-6">
                We believe that cycling is more than just transportation—it's a lifestyle, a sport, and a way to connect with the world around us. Whether you're a seasoned racer or just learning to ride, we're here to support your journey.
              </p>
              <p className="text-lg text-[#144D3A]/80 leading-relaxed mb-8">
                Our team of passionate cyclists brings decades of combined experience to help you find the perfect bike, maintain your ride, and discover the joy of cycling.
              </p>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#F36E32] mb-2">15+</div>
                  <div className="text-[#144D3A]/70 font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#F36E32] mb-2">10K+</div>
                  <div className="text-[#144D3A]/70 font-medium">Happy Riders</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#F36E32] mb-2">500+</div>
                  <div className="text-[#144D3A]/70 font-medium">Bikes Sold</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#144D3A] to-[#73BB44] rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Star className="w-8 h-8 text-[#F5E100] fill-current" />
                    <Star className="w-8 h-8 text-[#F5E100] fill-current" />
                    <Star className="w-8 h-8 text-[#F5E100] fill-current" />
                    <Star className="w-8 h-8 text-[#F5E100] fill-current" />
                    <Star className="w-8 h-8 text-[#F5E100] fill-current" />
                  </div>
                  <p className="text-[#144D3A] text-lg leading-relaxed mb-4 italic">
                    "The team at Velocity Cycles helped me find the perfect bike for my daily commute. Their expertise and friendly service made all the difference!"
                  </p>
                  <p className="text-[#144D3A]/70 font-semibold">— Sarah M., Local Cyclist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-[#144D3A] to-[#1a6048]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Visit Us at Haymarket Bicycles</h2>
            <p className="text-xl text-white/80">Conveniently located to serve Haymarket, Gainesville, and Northern Virginia</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#F5E100] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-[#144D3A]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Location</h3>
                <p className="text-white/80 leading-relaxed">
                  123 Pedal Lane<br />
                  Biketown, BT 12345
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#73BB44] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Phone</h3>
                <p className="text-white/80 leading-relaxed">
                  (555) BIKE-NOW<br />
                  (555) 245-3669
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#F36E32] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Email</h3>
                <p className="text-white/80 leading-relaxed">
                  info@velocitycycles.com
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#F5E100] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-[#144D3A]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Store Hours</h3>
                <div className="text-white/80 text-sm leading-relaxed space-y-1">
                  <div className="flex justify-between gap-3">
                    <span className="font-medium">Monday:</span>
                    <span>Closed</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="font-medium">Tue - Sat:</span>
                    <span>11AM - 6PM</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="font-medium">Sunday:</span>
                    <span>12PM - 5PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-white/90 text-lg mb-6">
              We're here to help with all your cycling needs!
            </p>
            <a
              href="tel:5552453669"
              className="inline-block bg-[#F36E32] text-white px-10 py-4 rounded-full hover:bg-[#e05d21] transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#144D3A] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Bike className="w-8 h-8 text-[#F5E100]" />
                <span className="text-xl font-bold text-white">Velocity Cycles</span>
              </div>
              <p className="text-white/70 leading-relaxed">
                Your trusted partner for all things cycling. Quality bikes, expert service, passionate people.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('services')} className="text-white/70 hover:text-[#F5E100] transition-colors">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('products')} className="text-white/70 hover:text-[#F5E100] transition-colors">
                    Products
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('story')} className="text-white/70 hover:text-[#F5E100] transition-colors">
                    Our Story
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Connect</h4>
              <p className="text-white/70 mb-2">Follow us for cycling tips, events, and special offers!</p>
              <div className="flex gap-4 mt-4">
                <div className="w-10 h-10 bg-[#F36E32] rounded-full flex items-center justify-center hover:bg-[#e05d21] transition-colors cursor-pointer">
                  <span className="text-white font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-[#F36E32] rounded-full flex items-center justify-center hover:bg-[#e05d21] transition-colors cursor-pointer">
                  <span className="text-white font-bold">in</span>
                </div>
                <div className="w-10 h-10 bg-[#F36E32] rounded-full flex items-center justify-center hover:bg-[#e05d21] transition-colors cursor-pointer">
                  <span className="text-white font-bold">ig</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-white/60">
              © 2024 Velocity Cycles. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
