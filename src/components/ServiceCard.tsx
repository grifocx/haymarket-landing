import { Service } from '../services';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden border-t-4" style={{ borderColor: service.highlightColor }}>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-[#144D3A] flex-1">
            {service.title}
          </h3>
          <div
            className="px-4 py-2 rounded-full text-white font-bold shadow-md ml-4 flex-shrink-0"
            style={{ backgroundColor: service.highlightColor }}
          >
            {service.cost}
          </div>
        </div>

        <p className="text-[#144D3A]/70 leading-relaxed mb-6">
          {service.description}
        </p>

        <button className="w-full bg-[#F36E32] text-white px-6 py-3 rounded-lg hover:bg-[#e05d21] transition-all transform hover:scale-105 font-semibold shadow-lg">
          Book This Service
        </button>
      </div>
    </div>
  );
}
