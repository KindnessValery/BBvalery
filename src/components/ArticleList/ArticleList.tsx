import { useState, useMemo } from "react";
import type { Article, TabType } from "@/types";
import { getArticlesByType, getCategoriesByType } from "@/data/articles";
import CategoryTabs from "@/components/CategoryTabs/CategoryTabs";
import ArticleCard from "@/components/ArticleCard/ArticleCard";

interface ArticleListProps {
  type: TabType;
}

export default function ArticleList({ type }: ArticleListProps) {
  const [activeCategory, setActiveCategory] = useState("Все");

  const categories = useMemo(() => getCategoriesByType(type), [type]);
  const allArticles = useMemo(() => getArticlesByType(type), [type]);

  const filtered: Article[] = useMemo(() => {
    if (activeCategory === "Все") return allArticles;
    return allArticles.filter((a) => a.category === activeCategory);
  }, [allArticles, activeCategory]);

  return (
    <section className="py-16 lg:py-24 bg-[#faf8f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <h2
                className="text-3xl lg:text-4xl font-bold text-[#0d0d0c] mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {type === "VSL" ? "Видео-презентации" : "Текстовые страницы"}
              </h2>
              <p className="text-[#8a8073]">
                {filtered.length}{" "}
                {filtered.length === 1
                  ? "материал"
                  : filtered.length < 5
                  ? "материала"
                  : "материалов"}
              </p>
            </div>
            <CategoryTabs
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-[#8a8073] text-lg">
              В этой категории пока нет материалов.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
