import { Product } from "@/features/product/types/product.types";

export type CartProduct = Pick<
  Product,
  | "id"
  | "name"
  | "category"
  | "price"
  | "discountedPrice"
  | "images"
  | "stock"
  | "tags"
> & {
    color: string;
    size: string;
    quantity: number;
}