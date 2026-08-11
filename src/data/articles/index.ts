import type { Article } from "@/types";

import { vslProduct1 } from "./vsl/vsl-product-1";
import { tslIngaNikolaevna } from "./tsl/tsl-inga-nikolaevna";
import { tslParasit } from "./tsl/tsl-parasits";
import { vslProduct2 } from "./vsl/vsl-product-2";

export const articles: Article[] = [
  vslProduct1,
  vslProduct2,
  tslIngaNikolaevna,
  tslParasit,
];

export function getArticlesByType(type: Article["type"]): Article[] {
  return articles.filter((article) => article.type === type);
}

export function getCategoriesByType(type: Article["type"]): string[] {
  return [
    ...new Set(
      articles
        .filter((article) => article.type === type)
        .map((article) => article.category),
    ),
  ];
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((article) => article.category === category);
}
