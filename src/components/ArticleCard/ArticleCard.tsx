import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import type { Article } from "@/types";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const href = `/${article.type.toLowerCase()}/${article.slug}`;

  return (
    <Link
      to={href}
      className="group block bg-white rounded-2xl overflow-hidden border border-[#e8e2da] shadow-sm hover:shadow-xl transition-all duration-300"
      aria-label={`Подробнее: ${article.title}`}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-gray-100">
        {article.heroImage ? (
          <img
            src={article.heroImage}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-gray-400">
            Нет изображения
          </div>
        )}

        {/* Type */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full bg-white/90 text-xs font-bold text-gray-900">
            {article.type}
          </span>
        </div>

        {/* Category */}
        <div className="absolute bottom-3 left-3">
          <span className="px-3 py-1 rounded-full bg-black/70 text-xs font-medium text-white">
            {article.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="text-lg font-semibold text-[#0d0d0c] leading-snug mb-2 line-clamp-2 group-hover:text-[#e8530a] transition-colors duration-200"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {article.title}
        </h3>

        <p className="text-sm text-[#8a8073] line-clamp-2 mb-4">
          {article.description}
        </p>

        <div className="flex items-center gap-1 text-sm font-semibold text-[#e8530a]">
          Подробнее
          <ArrowRight
            size={14}
            className="group-hover:translate-x-1 transition-transform duration-200"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  );
}
