import type { Article } from "../../../types";

export const vslProduct1: Article = {
  id: "vsl-inga-nikolaevna",
  slug: "vsl",
  type: "VSL",
  category: "Видеоистории",
  title:
    "Я думала, что активная жизнь осталась в прошлом… Пока старый знакомый не рассказал мне об этом рецепте",
  description: "Узнайте, как вылечить суставы.",
  heroImage: "https://bbvalery.b-cdn.net/images/tsl/inga/hero.jpg",

  video: {
    type: "bunny",
    url: "https://player.mediadelivery.net/embed/725227/80f5c21c-bc66-499e-b5ac-a8151a5709e9",
  },

  images: [
    "https://bbvalery.b-cdn.net/images/vsl/1.jpg",
    "https://bbvalery.b-cdn.net/images/vsl/2.jpg",
    "https://bbvalery.b-cdn.net/images/vsl/3.jpg",
  ],

  benefits: [
    "Лучшие средство для суставов",
    "Здоровые суставы",
    "Забудете о боли",
  ],
};
