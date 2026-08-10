import { ShoppingCart, ChevronDown } from "lucide-react";
import type { TabType } from "@/types";

interface HeroProps {
  activeTab: TabType;
}

const heroContent = {
  VSL: {
    eyebrow: "Видео-презентации",
    title: "Продукты, которые\nменяют жизни",
    subtitle:
      "Смотрите видео, изучайте продукты и принимайте решения на основе реальных результатов.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=800&fit=crop&auto=format",
  },
  TSL: {
    eyebrow: "Текстовые страницы",
    title: "Решения для\nвашего здоровья",
    subtitle:
      "Подробные материалы о продуктах с клиническими данными и реальными отзывами.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&h=800&fit=crop&auto=format",
  },
};

export default function Hero({ activeTab }: HeroProps) {
  const content = heroContent[activeTab];

  const scrollToList = () => {
    const el = document.getElementById("article-list");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToForm = () => {
    const el = document.getElementById("purchase-form");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center bg-[#0d0d0c] overflow-hidden pt-16 lg:pt-20"
      aria-label={`${activeTab} раздел`}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={content.image}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0c] via-[#0d0d0c]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0c] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#e8530a]/20 border border-[#e8530a]/30 text-[#e8530a] text-xs font-semibold uppercase tracking-widest">
              {content.eyebrow}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 whitespace-pre-line"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {content.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-white/60 mb-10 max-w-xl leading-relaxed">
            {content.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={scrollToForm}
              className="flex items-center justify-center gap-2.5 bg-[#e8530a] hover:bg-[#c4420a] text-white px-7 py-4 rounded-xl text-base font-bold shadow-xl shadow-[#e8530a]/30 hover:shadow-[#e8530a]/50 active:scale-95 transition-all duration-200"
              aria-label="Купить сейчас"
            >
              <ShoppingCart size={18} aria-hidden="true" />
              Купить сейчас
            </button>
            <button
              onClick={scrollToList}
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white px-7 py-4 rounded-xl text-base font-semibold border border-white/10 hover:border-white/20 active:scale-95 transition-all duration-200"
              aria-label="Смотреть материалы"
            >
              Смотреть материалы
              <ChevronDown size={18} aria-hidden="true" />
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10">
            {[
              { value: "50K+", label: "Довольных клиентов" },
              { value: "94%", label: "Положительных отзывов" },
              { value: "30 дней", label: "Гарантия возврата" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {value}
                </p>
                <p className="text-sm text-white/40">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
