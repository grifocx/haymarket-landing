import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { scrollToTop } from '../utils/helpers';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-24 md:bottom-8 right-4 md:right-8 bg-[#F36E32] text-white p-4 rounded-full shadow-lg hover:bg-[#e05d21] transition-all transform hover:scale-110 z-40 animate-fadeIn"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}
