import { Menu, X } from 'lucide-react';
import { useState, useEffect, ReactNode } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { StickyMobileCTA } from './StickyMobileCTA';

interface LayoutProps {
  children: ReactNode;
  showNavigation?: boolean;
}

export function Layout({ children, showNavigation = true }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const scrollToSection = (id: string) => {
    if (!isHome) {
      navigate(`/#${id}`);
      setMobileMenuOpen(false);
      return;
    }
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-white">
      {showNavigation && (
        <nav className="fixed top-0 w-full bg-white shadow-md z-50 transition-all">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <Link to="/" className="flex items-center gap-3">
                <img
                  src="/Haymarket Bicycles Logo 2024_Patch - Color - Vertical.png"
                  alt="Haymarket Bicycles - Premier Bike Shop in Haymarket, Virginia"
                  width="64"
                  height="64"
                  className="h-16 w-auto"
                />
                <span className="font-montserrat text-2xl font-extrabold text-[#144D3A]">
                  Haymarket Bicycles
                </span>
              </Link>

              {isHome ? (
                <>
                  <div className="hidden md:flex items-center gap-8">
                    <button
                      onClick={(e) => handleNavClick(e, 'services')}
                      aria-label="Navigate to services section"
                      className="font-montserrat text-[#144D3A] hover:text-[#73BB44] transition-colors font-bold"
                    >
                      Services
                    </button>
                    <button
                      onClick={(e) => handleNavClick(e, 'products')}
                      aria-label="Navigate to products section"
                      className="font-montserrat text-[#144D3A] hover:text-[#73BB44] transition-colors font-bold"
                    >
                      Products
                    </button>
                    <button
                      onClick={(e) => handleNavClick(e, 'story')}
                      aria-label="Navigate to our story section"
                      className="font-montserrat text-[#144D3A] hover:text-[#73BB44] transition-colors font-bold"
                    >
                      Our Story
                    </button>
                    <button
                      onClick={(e) => handleNavClick(e, 'contact')}
                      aria-label="Navigate to contact section"
                      className="font-montserrat bg-[#F36E32] text-white px-6 py-2.5 rounded-full hover:bg-[#e05d21] transition-colors font-bold shadow-md"
                    >
                      Contact Us
                    </button>
                  </div>

                  <button
                    className="md:hidden text-[#144D3A]"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    onKeyDown={(e) => handleKeyDown(e, () => setMobileMenuOpen(!mobileMenuOpen))}
                    aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={mobileMenuOpen}
                  >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </button>
                </>
              ) : (
                <Link
                  to="/"
                  aria-label="Navigate back to home page"
                  className="font-montserrat flex items-center gap-2 text-[#144D3A] hover:text-[#73BB44] transition-colors font-bold"
                >
                  ← Back to Home
                </Link>
              )}
            </div>
          </div>

          {mobileMenuOpen && isHome && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-4 py-4 space-y-3">
                <button
                  onClick={(e) => handleNavClick(e, 'services')}
                  onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('services'))}
                  className="block w-full text-left text-[#144D3A] hover:text-[#73BB44] py-2 font-medium"
                >
                  Services
                </button>
                <button
                  onClick={(e) => handleNavClick(e, 'products')}
                  onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('products'))}
                  className="block w-full text-left text-[#144D3A] hover:text-[#73BB44] py-2 font-medium"
                >
                  Products
                </button>
                <button
                  onClick={(e) => handleNavClick(e, 'story')}
                  onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('story'))}
                  className="block w-full text-left text-[#144D3A] hover:text-[#73BB44] py-2 font-medium"
                >
                  Our Story
                </button>
                <button
                  onClick={(e) => handleNavClick(e, 'contact')}
                  onKeyDown={(e) => handleKeyDown(e, () => scrollToSection('contact'))}
                  className="block w-full text-left text-[#144D3A] hover:text-[#73BB44] py-2 font-medium"
                >
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </nav>
      )}

      <main>{children}</main>

      <footer className="bg-[#144D3A] py-12 px-4 pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto">
          {isHome ? (
            <>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="mb-4">
                    <span className="font-montserrat text-xl font-bold text-white">
                      Haymarket Bicycles
                    </span>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    Your trusted partner for all things cycling. Quality bikes, expert service, passionate people.
                  </p>
                </div>
                <div>
                  <h4 className="font-montserrat text-white font-bold text-lg mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li>
                      <button
                        onClick={(e) => handleNavClick(e, 'services')}
                        className="text-white/70 hover:text-[#73BB44] transition-colors"
                      >
                        Services
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={(e) => handleNavClick(e, 'products')}
                        className="text-white/70 hover:text-[#73BB44] transition-colors"
                      >
                        Products
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={(e) => handleNavClick(e, 'story')}
                        className="text-white/70 hover:text-[#73BB44] transition-colors"
                      >
                        Our Story
                      </button>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-montserrat text-white font-bold text-lg mb-4">Connect</h4>
                  <p className="text-white/70 mb-2">
                    Follow us for cycling tips, events, and special offers!
                  </p>
                  <div className="flex gap-4 mt-4">
                    <a
                      href="https://www.facebook.com/HaymarketBicycles/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#F36E32] rounded-full flex items-center justify-center hover:bg-[#e05d21] transition-colors cursor-pointer"
                    >
                      <span className="text-white font-bold">f</span>
                    </a>
                    <a
                      href="https://www.instagram.com/haymarketbikes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#F5E100] rounded-full flex items-center justify-center hover:bg-[#e5d100] transition-colors cursor-pointer"
                    >
                      <span className="text-[#144D3A] font-bold">ig</span>
                    </a>
                    <a
                      href="https://www.tiktok.com/@haymarketbicycles"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#73BB44] rounded-full flex items-center justify-center hover:bg-[#5fa535] transition-colors cursor-pointer"
                    >
                      <span className="text-white font-bold">tt</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="border-t border-white/20 pt-8 text-center">
                <p className="text-white/60">© 2026 Haymarket Bicycles. All rights reserved.</p>
              </div>
            </>
          ) : (
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="font-montserrat text-xl font-bold text-white">
                  Haymarket Bicycles
                </span>
              </div>
              <p className="text-white/60">© 2026 Haymarket Bicycles. All rights reserved.</p>
            </div>
          )}
        </div>
      </footer>

      <StickyMobileCTA />
    </div>
  );
}
