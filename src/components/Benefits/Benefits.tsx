import { CheckCircle2 } from "lucide-react";

interface BenefitsProps {
  benefits: string[];
  title?: string;
}

export default function Benefits({ benefits, title = "Почему это работает" }: BenefitsProps) {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl lg:text-4xl font-bold text-[#0d0d0c] text-center mb-12"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="flex items-start gap-3 bg-[#faf8f4] rounded-xl p-4 border border-[#e8e2da]"
            >
              <CheckCircle2
                size={20}
                className="text-[#e8530a] flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span className="text-[#0d0d0c] font-medium text-sm leading-snug">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
