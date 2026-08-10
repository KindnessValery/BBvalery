import { useRef } from "react";

interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryTabs({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative">
      {/* Fade edges on mobile */}
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#faf8f4] to-transparent pointer-events-none z-10 md:hidden" />

      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide pb-1"
        role="tablist"
        aria-label="Категории"
      >
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isActive}
              onClick={() => onCategoryChange(cat)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 border ${
                isActive
                  ? "bg-[#0d0d0c] text-white border-[#0d0d0c]"
                  : "bg-white text-[#0d0d0c]/70 border-[#e8e2da] hover:border-[#0d0d0c]/30 hover:text-[#0d0d0c]"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
