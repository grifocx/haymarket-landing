import { Star } from 'lucide-react';
import { Review } from '../reviews';

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100 flex flex-col">
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-[#F5E100] fill-current" />
        ))}
      </div>
      <p className="text-gray-700 leading-relaxed italic flex-1 mb-5">
        "{review.text}"
      </p>
      <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
        <span className="font-montserrat font-bold text-[#144D3A] text-sm">{review.name}</span>
        <span className="text-gray-400 text-xs">{review.date}</span>
      </div>
    </div>
  );
}
