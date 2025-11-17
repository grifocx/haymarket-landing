import { Bike } from 'lucide-react';

export function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-bounce mb-4">
          <Bike className="w-16 h-16 text-[#F36E32] mx-auto" />
        </div>
        <p className="font-montserrat text-xl font-bold text-[#144D3A]">Loading...</p>
      </div>
    </div>
  );
}
