import { Star } from "lucide-react";
import type { Testimonial } from "@/types";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Оценка: ${rating} из 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "text-[#e8530a] fill-[#e8530a]" : "text-[#e8e2da] fill-[#e8e2da]"}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  if (testimonials.length === 0) return null;

  return (
    <section className="py-16 lg:py-20 bg-[#faf8f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl lg:text-4xl font-bold text-[#0d0d0c] mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Что говорят клиенты
          </h2>
          <p className="text-[#8a8073]">Реальные отзывы реальных людей</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="bg-white rounded-2xl p-6 border border-[#e8e2da] shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <StarRating rating={t.rating} />
              <blockquote className="mt-4 text-[#0d0d0c]/80 text-sm leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="mt-5 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  loading="lazy"
                  className="w-10 h-10 rounded-full object-cover bg-[#f0ede7]"
                />
                <div>
                  <p className="text-sm font-semibold text-[#0d0d0c]">{t.name}</p>
                  <p className="text-xs text-[#8a8073]">{t.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
