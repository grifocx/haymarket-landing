import { Bike, MapPin, Clock, Phone, Mail, Wrench, ShoppingBag, Users, Star, Zap, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { PhoneModal } from '../components/PhoneModal';
import { BackToTop } from '../components/BackToTop';
import { StoreHours } from '../components/StoreHours';
import { SEO } from '../components/SEO';
import { ReviewCard } from '../components/ReviewCard';
import { reviews, totalReviewCount } from '../reviews';
import { isMobileDevice, scrollToSection } from '../utils/helpers';

export function Home() {
  const [phoneModalOpen, setPhoneModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  }, [location]);

  const handleCallClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isMobileDevice()) {
      e.preventDefault();
      setPhoneModalOpen(true);
    }
  };

  return (
    <Layout>
      <SEO />

      <section className="pt-32 pb-20 px-4 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: "url('/Haymarket Bicycles Logo 2024_Color Bar without Name.png')" }}
        ></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="inline-block bg-[#F5E100] text-[#144D3A] px-4 py-2 rounded-full text-sm font-semibold">
              Since 2007
            </div>
            <StoreHours />
          </div>
          <h1 className="font-montserrat text-5xl md:text-7xl font-extrabold text-[#144D3A] mb-6 leading-tight">
            Haymarket's Neighborhood Bicycle Shop
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Serving Northern Virginia's cycling community for 19 years with expert service, quality bikes, and a community of cycling enthusiasts.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => scrollToSection('services')} aria-label="View our services" className="font-montserrat bg-[#F36E32] text-white px-8 py-4 rounded-full hover:bg-[#e05d21] transition-all transform hover:scale-105 font-bold text-lg shadow-lg min-h-[3rem]">
              Our Services
            </button>
            <button onClick={() => scrollToSection('products')} aria-label="View our products" className="font-montserrat bg-[#73BB44] text-white px-8 py-4 rounded-full hover:bg-[#5fa535] transition-all transform hover:scale-105 font-bold text-lg shadow-lg min-h-[3rem]">
              Our Products
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-8 px-4 border-y border-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4">
            <div className="bg-[#F36E32] p-3 rounded-lg min-w-[3rem] min-h-[3rem] flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-montserrat font-bold text-[#144D3A] text-lg">Visit Us</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=4414+Costello+Way+Haymarket+VA+20169"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#F36E32] hover:underline transition-colors cursor-pointer"
              >
                4414 Costello Way, Haymarket, VA 20169
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-[#73BB44] p-3 rounded-lg min-w-[3rem] min-h-[3rem] flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-montserrat font-bold text-[#144D3A] text-lg">Store Hours</p>
              <p className="text-gray-600">Tue-Sat: 11AM-6PM | Sun: 12PM-5PM</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-[#F5E100] p-3 rounded-lg min-w-[3rem] min-h-[3rem] flex items-center justify-center">
              <Phone className="w-6 h-6 text-[#144D3A]" />
            </div>
            <div>
              <p className="font-montserrat font-bold text-[#144D3A] text-lg">Call Us</p>
              <a
                href="tel:7037541911"
                onClick={handleCallClick}
                className="text-gray-600 hover:text-[#F36E32] transition-colors cursor-pointer"
              >
                (703) 754-1911
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-5xl font-extrabold text-[#144D3A] mb-4">Professional Bicycle Services in Haymarket</h2>
            <p className="text-xl text-[#144D3A]/70 max-w-2xl mx-auto">
              Expert care for every bike and rider in Northern Virginia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-200">
              <div className="bg-[#F36E32] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-montserrat text-2xl font-bold text-[#144D3A] mb-4">Repairs & Maintenance</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                From flat tires to complete overhauls, our certified mechanics keep your bike running smoothly.
              </p>
              <ul className="space-y-2 text-gray-600">
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

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-200">
              <div className="bg-[#73BB44] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-montserrat text-2xl font-bold text-[#144D3A] mb-4">E-Bike Specialists</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Power up your ride with knowledgeable e-bike sales and service.
              </p>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#73BB44] rounded-full"></div>
                  Premium e-bike sales & demos
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#73BB44] rounded-full"></div>
                  Battery service & diagnostics
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#73BB44] rounded-full"></div>
                  Motor & electrical system repairs
                </li>
              </ul>
              <p className="text-sm text-gray-500 italic border-t border-gray-200 pt-4">
                We service e-bikes from major bicycle manufacturers with standard bicycle components.{' '}
                <Link to="/services#ebike-requirements" className="text-[#73BB44] hover:text-[#5fa535] underline">
                  View requirements
                </Link>
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-200">
              <div className="bg-[#F5E100] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-[#144D3A]" />
              </div>
              <h3 className="font-montserrat text-2xl font-bold text-[#144D3A] mb-4">Fitting & Consultations</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Get the perfect fit for maximum comfort and performance on every ride.
              </p>
              <ul className="space-y-2 text-gray-600">
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
              className="font-montserrat inline-block bg-[#F36E32] text-white px-10 py-4 rounded-full hover:bg-[#e05d21] transition-all transform hover:scale-105 font-bold text-lg shadow-lg min-h-[3rem]"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-5xl font-extrabold text-[#144D3A] mb-4">Premium Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quality bikes and accessories for every rider
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-200">
              <div className="bg-[#F36E32] w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Bike className="w-12 h-12 text-white" />
              </div>
              <h3 className="font-montserrat text-xl font-bold text-[#144D3A] text-center mb-2">Road Bikes</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Speed and efficiency for the open road
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-200">
              <div className="bg-[#73BB44] w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Bike className="w-12 h-12 text-white" />
              </div>
              <h3 className="font-montserrat text-xl font-bold text-[#144D3A] text-center mb-2">Mountain Bikes</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Conquer trails with confidence
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-200">
              <div className="bg-[#F5E100] w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Bike className="w-12 h-12 text-[#144D3A]" />
              </div>
              <h3 className="font-montserrat text-xl font-bold text-[#144D3A] text-center mb-2">Electric Bikes</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Powered rides for effortless journeys
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-200">
              <div className="bg-[#CBD92A] w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <ShoppingBag className="w-12 h-12 text-[#144D3A]" />
              </div>
              <h3 className="font-montserrat text-xl font-bold text-[#144D3A] text-center mb-2">Accessories</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Helmets, locks, lights, and more
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/catalog"
              className="font-montserrat inline-block bg-[#F36E32] text-white px-10 py-4 rounded-full hover:bg-[#e05d21] transition-all transform hover:scale-105 font-bold text-lg shadow-lg min-h-[3rem]"
            >
              View Full Catalog
            </Link>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-5xl font-extrabold text-[#144D3A] mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
              Real feedback from real riders in the Haymarket community
            </p>
            <a
              href="https://reviews.listen360.com/haymarket-bicycles"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border-2 border-[#144D3A] text-[#144D3A] px-6 py-2 rounded-full font-montserrat font-bold text-sm hover:bg-[#144D3A] hover:text-white transition-all"
            >
              <Star className="w-4 h-4 fill-current text-[#F5E100]" />
              {totalReviewCount.toLocaleString()} Reviews on Listen360
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://reviews.listen360.com/haymarket-bicycles"
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat inline-flex items-center gap-2 bg-[#144D3A] text-white px-10 py-4 rounded-full hover:bg-[#0d3326] transition-all transform hover:scale-105 font-bold text-lg shadow-lg"
            >
              Read All {totalReviewCount.toLocaleString()} Reviews
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <section id="story" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-montserrat text-5xl font-extrabold text-[#144D3A] mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded in 2007, Haymarket Bicycles began with a simple mission: to deliver exceptional hospitality and service to our community. What started as a small repair shop has grown into Northern Virginia's trusted full-service bike destination.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Haymarket Bicycles core principles center around approaching the cycling industry differently. Exemplary treatment of the customer is the number one priority. All too many bicycle shops have impersonal and unapproachable atmospheres. Haymarket Bicycles was founded on the idea to be different; every customer, whether a first-time bike buyer or world-class racer, is to be treated well, with their individual wants and needs addressed with care and respect.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Haymarket Bicycles has become renowned for their expertise of all manner of bicycles, and customer service that is second to none. Our staff brings decades of combined experience to help you find the perfect bike, maintain your ride, and discover the joy of cycling. Whether you're a weekend warrior, daily commuter, or competitive racer, we're here to keep you rolling with confidence.
              </p>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="font-montserrat text-4xl font-extrabold text-[#F36E32] mb-2">19+</div>
                  <div className="font-montserrat text-gray-600 font-bold">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="font-montserrat text-4xl font-extrabold text-[#73BB44] mb-2">15K+</div>
                  <div className="font-montserrat text-gray-600 font-bold">Happy Riders</div>
                </div>
                <div className="text-center">
                  <div className="font-montserrat text-4xl font-extrabold text-[#CBD92A] mb-2">2000+</div>
                  <div className="font-montserrat text-gray-600 font-bold">Bikes Sold</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-lg">
                <div className="flex items-center gap-2 mb-6">
                  <Star className="w-6 h-6 text-[#F5E100] fill-current" />
                  <Star className="w-6 h-6 text-[#F5E100] fill-current" />
                  <Star className="w-6 h-6 text-[#F5E100] fill-current" />
                  <Star className="w-6 h-6 text-[#F5E100] fill-current" />
                  <Star className="w-6 h-6 text-[#F5E100] fill-current" />
                </div>
                <p className="text-[#144D3A] text-lg leading-relaxed mb-4 italic">
                  "I've purchased three bikes from Haymarket Bicycles and had installations, repairs, and service on several occasions. I'm always impressed with their awesome customer service and knowledgeable mechanics."
                </p>
                <p className="text-gray-600 font-semibold">— Dale S., Local Cyclist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-5xl font-extrabold text-[#144D3A] mb-4">Visit Us at Haymarket Bicycles</h2>
            <p className="text-xl text-gray-600">Conveniently located to serve Haymarket, Gainesville, and Northern Virginia</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <a
              href="https://www.google.com/maps/search/?api=1&query=4414+Costello+Way+Haymarket+VA+20169"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-[#F5E100] transition-all shadow-sm hover:shadow-md block group min-h-[11rem]"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#F5E100] w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-8 h-8 text-[#144D3A]" />
                </div>
                <h3 className="font-montserrat text-xl font-bold text-[#144D3A] mb-3">Location</h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-[#F36E32] transition-colors">
                  4414 Costello Way<br />
                  Haymarket, VA 20169
                </p>
              </div>
            </a>

            <a
              href="tel:7037541911"
              onClick={handleCallClick}
              className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-[#73BB44] transition-all shadow-sm hover:shadow-md min-h-[11rem] block cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#73BB44] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-montserrat text-xl font-bold text-[#144D3A] mb-3">Phone</h3>
                <p className="text-gray-600 hover:text-[#73BB44] transition-colors leading-relaxed">
                  (703) 754-1911
                </p>
              </div>
            </a>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-[#F36E32] transition-all shadow-sm hover:shadow-md min-h-[11rem]">
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#F36E32] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-montserrat text-xl font-bold text-[#144D3A] mb-3">Email</h3>
                <a href="mailto:info@haymarketbicycles.com" className="text-gray-600 hover:text-[#F36E32] transition-colors leading-relaxed cursor-pointer">
                  info@haymarketbicycles.com
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-[#CBD92A] transition-all shadow-sm hover:shadow-md min-h-[11rem]">
              <div className="flex flex-col items-center text-center">
                <div className="bg-[#CBD92A] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-[#144D3A]" />
                </div>
                <h3 className="font-montserrat text-xl font-bold text-[#144D3A] mb-3">Store Hours</h3>
                <div className="text-gray-600 text-sm leading-relaxed space-y-1">
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
            <p className="text-gray-600 text-lg mb-6">
              Thanks for stopping by. We're here to help with all your cycling needs!
            </p>
            <a
              href="tel:7037541911"
              onClick={handleCallClick}
              className="font-montserrat inline-block bg-[#F36E32] text-white px-10 py-4 rounded-full hover:bg-[#e05d21] transition-all transform hover:scale-105 font-bold text-lg shadow-lg cursor-pointer min-h-[3rem]"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      <PhoneModal
        isOpen={phoneModalOpen}
        onClose={() => setPhoneModalOpen(false)}
        phoneNumber="7037541911"
        displayNumber="(703) 754-1911"
      />

      <BackToTop />
    </Layout>
  );
}
