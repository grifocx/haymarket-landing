import { X, Phone, Check } from 'lucide-react';
import { useState, useEffect } from 'react';

interface PhoneModalProps {
  isOpen: boolean;
  onClose: () => void;
  phoneNumber: string;
  displayNumber: string;
}

export function PhoneModal({ isOpen, onClose, phoneNumber, displayNumber }: PhoneModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative animate-slideUp">
        <button
          onClick={onClose}
          aria-label="Close phone modal"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          <div className="bg-[#73BB44] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Phone className="w-10 h-10 text-white" />
          </div>

          <h2 className="font-montserrat text-3xl font-bold text-[#144D3A] mb-4">
            Call Haymarket Bicycles
          </h2>

          <div className="bg-gray-50 rounded-2xl p-6 mb-6">
            <p className="text-sm text-gray-600 mb-2">Phone Number</p>
            <p className="font-montserrat text-3xl font-bold text-[#144D3A]">
              {displayNumber}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleCopy}
              aria-label="Copy phone number to clipboard"
              className="flex-1 font-montserrat bg-gray-100 text-[#144D3A] px-6 py-3 rounded-full hover:bg-gray-200 transition-all font-bold flex items-center justify-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5" />
                  Copied!
                </>
              ) : (
                'Copy Number'
              )}
            </button>
            <a
              href={`tel:${phoneNumber}`}
              aria-label="Call Haymarket Bicycles now"
              className="flex-1 font-montserrat bg-[#F36E32] text-white px-6 py-3 rounded-full hover:bg-[#e05d21] transition-all font-bold text-center"
            >
              Call Now
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            Available Tue-Sat: 11AM-6PM | Sun: 12PM-5PM
          </p>
        </div>
      </div>
    </div>
  );
}
