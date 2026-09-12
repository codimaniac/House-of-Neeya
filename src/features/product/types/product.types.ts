export type ProductCategory =
  | "Men's Footwear"
  | "Women's Footwear"
  | "Clothing"
  | "Handbags";

export type ProductTag = "New" | "Featured" | "Sales" | "Best-Seller";

export interface ProductVariant {
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

  image: ProductImage;
  variants?: ProductVariant[];

  rating: number;
  reviewCount: number;

  tags?: ProductTag[];

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
  | "image"
  | "tags"
>;
