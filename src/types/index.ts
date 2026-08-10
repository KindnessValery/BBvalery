export interface ProductVariant {
  id: string;
  name: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  image: string;
  variants: ProductVariant[];
}

export interface ArticleContentBlock {
  type: "text" | "dialogue" | "image" | "heading";
  speaker?: string;
  text?: string;
  src?: string;
  alt?: string;
}

export interface Article {
  id: string;
  slug: string;
  type: "VSL" | "TSL";
  category: string;
  title: string;
  description: string;
  heroImage: string;

  video?: {
    type: "youtube" | "vimeo" | "mp4" | "bunny";
    url: string;
    poster?: string;
  };

  images: string[];
  benefits: string[];
  content?: ArticleContentBlock[];
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  avatar?: string;
  location?: string;
  role?: string;
  rating: number;
}

export type TabType = "VSL" | "TSL";
