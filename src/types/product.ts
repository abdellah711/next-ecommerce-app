import { Category } from "./category";

export interface Product {
    id: number;
    attributes: ProductAttributes;
}

export interface ProductDetails {
    id: number;
    attributes: ProductAttributes & { images: Image[] };
}

interface ProductAttributes {
    title: string;
    short_description: string;
    stock: number;
    price: number;
    old_price?: number;
    description: string;
    featured: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    colors?: string[];
    sizes?: string[]; 
    featured_image: {
        data: Image;
    }
    category?: {
        data: Category;
    },
    images?: {
        data: Image[];
    }
}


export interface Image {
    id: number;
    attributes: Attributes;
}

interface Attributes {
    name: string;
    alternativeText?: any;
    caption?: any;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: any;
    provider: string;
    provider_metadata?: any;
    createdAt: string;
    updatedAt: string;
}

interface Formats {
    thumbnail: Thumbnail;
}

interface Thumbnail {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path?: any;
    width: number;
    height: number;
    size: number;
    url: string;
}