import type { Product } from "../../types";

export const product1: Product = {
  id: "product-1",
  name: "Premium Subscription",
  price: 49,
  currency: "EUR",
  image: "/images/products/product-1.webp",

  variants: [
    {
      id: "single",
      name: "1 шт.",
      price: 49,
    },
    {
      id: "double",
      name: "2 шт.",
      price: 79,
    },
    {
      id: "triple",
      name: "3 шт.",
      price: 99,
    },
  ],
};
