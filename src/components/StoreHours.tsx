import { Clock } from 'lucide-react';
import { isStoreOpen } from '../utils/helpers';

export function StoreHours() {
  const open = isStoreOpen();

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border-2 border-gray-200">
      <Clock className={`w-5 h-5 ${open ? 'text-[#73BB44]' : 'text-gray-400'}`} />
      <span className="font-montserrat font-bold text-sm">
        {open ? (
          <span className="text-[#73BB44]">Open Now</span>
        ) : (
          <span className="text-gray-600">Closed</span>
        )}
      </span>
    </div>
  );
}
