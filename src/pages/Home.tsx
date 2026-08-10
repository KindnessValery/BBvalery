import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { articles } from "../data/articles";
import { Link } from "react-router";

export function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = (searchParams.get("tab") || "VSL") as "VSL" | "TSL";
  const [activeCategory, setActiveCategory] = useState("Все");

  const categories = [
    "Все",
    ...Array.from(
      new Set(
        articles.filter((a) => a.type === activeTab).map((a) => a.category),
      ),
    ),
  ];

  // Reset category on tab change
  useEffect(() => {
    setActiveCategory("Все");
  }, [activeTab]);

  const filteredArticles = articles.filter((a) => {
    if (a.type !== activeTab) return false;
    if (activeCategory !== "Все" && a.category !== activeCategory) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Откройте лучшие продукты
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Выберите формат, который подходит именно вам.
        </p>
      </div>

      {/* Main Tabs */}
      <div className="flex justify-center space-x-4 mb-8">
        {(["VSL", "TSL"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setSearchParams({ tab })}
            className={`px-8 py-3 rounded-full font-bold text-lg transition-all ${activeTab === tab ? "bg-blue-600 text-white shadow-lg" : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Category Tabs */}
      {categories.length > 1 && (
        <div className="flex overflow-x-auto pb-4 mb-8 space-x-2 no-scrollbar justify-start md:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full font-medium transition-colors ${activeCategory === cat ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <Link
            key={article.id}
            to={`/${article.type.toLowerCase()}/${article.slug}`}
            className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all flex flex-col"
          >
            <div className="aspect-video bg-gray-200 relative overflow-hidden">
              {article.heroImage ? (
                <img
                  src={article.heroImage}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Нет фото
                </div>
              )}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-blue-600">
                {article.category}
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-6 flex-1 line-clamp-3">
                {article.description}
              </p>
              <span className="inline-block bg-blue-50 text-blue-700 font-semibold px-4 py-2 rounded-lg text-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                Подробнее &rarr;
              </span>
            </div>
          </Link>
        ))}
        {filteredArticles.length === 0 && (
          <div className="col-span-full py-20 text-center text-gray-500 text-lg">
            В этой категории пока нет продуктов.
          </div>
        )}
      </div>
    </div>
  );
}
