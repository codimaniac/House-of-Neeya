import { create } from "zustand";
import { Product } from "@/features/product/types/product.types";

type WishlistState = {
  items: Product[];
  isInWishlist: (productId: string) => boolean;
  toggleWishlist: (product: Product) => void;
};

export const useWishlistStore = create<WishlistState>((set, get) => ({
  items: [],
  isInWishlist: (productId) => get().items.some((item) => item.id === productId),
  toggleWishlist: (product) =>
    set((state) => {
      const exists = state.items.some((item) => item.id === product.id);
      return {
        items: exists
          ? state.items.filter((item) => item.id !== product.id)
          : [...state.items, product],
      };
    }),
}));