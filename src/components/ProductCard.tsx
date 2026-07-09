import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden">
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div
          className="font-montserrat absolute top-4 right-4 px-4 py-2 rounded-full text-white font-bold shadow-lg"
          style={{ backgroundColor: product.highlightColor }}
        >
          {product.price}
        </div>
      </div>

      <div className="p-6">
        <div className="font-montserrat text-sm font-bold text-[#F36E32] mb-2 uppercase tracking-wide">
          {product.category}
        </div>

        <h3 className="font-montserrat text-2xl font-bold text-[#144D3A] mb-3">
          {product.name}
        </h3>

        <p className="text-[#144D3A]/70 leading-relaxed mb-4">
          {product.description}
        </p>

        <div className="space-y-2 mb-6">
          {product.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="w-5 h-5 text-[#73BB44] flex-shrink-0 mt-0.5" />
              <span className="text-[#144D3A]/70 text-sm">{feature}</span>
            </div>
          ))}
        </div>

        <Link
          to="/#contact"
          aria-label={`Contact us for details about the ${product.name}`}
          className="font-montserrat block w-full text-center bg-[#F36E32] text-white px-6 py-3 rounded-lg hover:bg-[#e05d21] transition-all transform hover:scale-105 font-bold shadow-lg"
        >
          Contact Us for Details
        </Link>
      </div>
    </div>
  );
}
