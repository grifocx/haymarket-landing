import { Phone, MessageCircle } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export function StickyMobileCTA() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleContactClick = () => {
    if (isHome) {
      const element = document.getElementById('contact');
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#contact');
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="flex gap-2 p-2.5">
        <a
          href="tel:7037541911"
          aria-label="Call Haymarket Bicycles at (703) 754-1911"
          className="flex-1 flex items-center justify-center gap-2 bg-[#F36E32] text-white py-3 rounded-xl font-montserrat font-bold text-sm hover:bg-[#e05d21] transition-colors min-h-[3rem]"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
        <button
          onClick={handleContactClick}
          aria-label="Go to contact section"
          className="flex-1 flex items-center justify-center gap-2 bg-[#144D3A] text-white py-3 rounded-xl font-montserrat font-bold text-sm hover:bg-[#0d3326] transition-colors min-h-[3rem]"
        >
          <MessageCircle className="w-5 h-5" />
          Contact Us
        </button>
      </div>
    </div>
  );
}
