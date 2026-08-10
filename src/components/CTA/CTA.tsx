import { ArrowDown, ShoppingCart } from "lucide-react";

interface CTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  variant?: "dark" | "light";
}

export default function CTA({
  title = "Готовы изменить свою жизнь?",
  subtitle = "Присоединяйтесь к тысячам довольных клиентов. Ограниченное предложение.",
  buttonText = "Заказать сейчас",
  variant = "dark",
}: CTAProps) {
  const scrollToForm = () => {
    const el = document.getElementById("purchase-form");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const isDark = variant === "dark";

  return (
    <section
      className={`py-16 lg:py-20 ${isDark ? "bg-[#0d0d0c]" : "bg-[#fff0e8]"}`}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={`text-3xl lg:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-[#0d0d0c]"}`}
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h2>
        <p className={`text-lg mb-8 ${isDark ? "text-white/60" : "text-[#0d0d0c]/60"}`}>
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToForm}
            className="flex items-center justify-center gap-2.5 bg-[#e8530a] hover:bg-[#c4420a] text-white px-8 py-4 rounded-xl text-base font-bold shadow-xl shadow-[#e8530a]/30 hover:shadow-[#e8530a]/50 active:scale-95 transition-all duration-200 w-full sm:w-auto"
            aria-label={buttonText}
          >
            <ShoppingCart size={18} aria-hidden="true" />
            {buttonText}
          </button>
          <button
            onClick={scrollToForm}
            className={`flex items-center gap-2 text-sm font-medium ${isDark ? "text-white/50 hover:text-white/80" : "text-[#0d0d0c]/50 hover:text-[#0d0d0c]/80"} transition-colors`}
            aria-label="Перейти к форме заказа"
          >
            <ArrowDown size={16} aria-hidden="true" />
            Перейти к форме
          </button>
        </div>
      </div>
    </section>
  );
}
