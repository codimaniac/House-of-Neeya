export type ProductCategory = "Men's Footewear" | "Women's Footwear" | "Clothing" | "Handbags";

export type ProductTags = "New" | "Featured" | "Sales" | "Best-Seller";

export interface ProductVariants {
    id: string;
    color?: string;
    size?: string;
    stock: number;
}

export interface ProductImage {
    id: string;
    src: string;
    alt: string;
}

export interface Product {
    id: string;
    name: string;
    slug: string;
    description: string;

    category: ProductCategory;
    brand: string;

    price: number;
    discountedPrice?: number;

    images: ProductImage[];
    variants?: ProductVariants[];

    rating: number;
    reviewCount: number;

    tags?: ProductTags[];

    isFeatured?: boolean;
    isNewArrival?: boolean;

    stock: number;
    sku: string;

    createdAt: string;
    updatedAt: string;
}

export type LatestProduct = Pick<
  Product,
  | "id"
  | "name"
  | "description"
  | "category"
  | "price"
  | "discountedPrice"
  | "images"
  | "tags"
>;