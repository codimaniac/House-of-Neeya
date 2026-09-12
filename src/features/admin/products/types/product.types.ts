import {
  Product,
  ProductVariant,
} from "@/features/product/types/product.types";

type DraftVariant = Omit<ProductVariant, "id">;

export type ProductDraft = Omit<
  Product,
  | "id"
  | "rating"
  | "reviewCount"
  | "createdAt"
  | "updatedAt"
  | "image"
  | "variants"
> & {
  image: { src: string; alt: string };
  variants: DraftVariant[];
};
