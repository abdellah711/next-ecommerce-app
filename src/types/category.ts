import { Product, Image } from "./product";

export interface Category {
  id: number;
  attributes: Attributes;
}

interface Attributes {
  name: string;
  subtitle?: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image?: {
    data: Image;
  }
}

export interface CategoryDetails {
  id: number;
  attributes: Attributes & { products: Products, image: Image };
}

interface Products {
  data: Product[];
}