import { Product } from "@/features/product/types/product.types";
import { CartProduct } from "../types/cart.types";

interface ProductToCartMapperProps {
  product: Product;
  color: string;
  size: string;
  quantity: number;
}

export const productToCartMapper = ({
  product,
  color,
  size,
  quantity = 0,
}: ProductToCartMapperProps): CartProduct => {
  return (
    product && {
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      discountedPrice: product.discountedPrice,
      image: product.image,
      stock: product.stock,
      tags: product.tags,
      color,
      size,
      quantity,
    }
  );
};
