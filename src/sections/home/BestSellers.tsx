"use client"

import { Button } from "@/components";
import SectionLayout from "@/components/layout/SectionLayout";
import ProductCard from "@/features/product/components/ProductCard";
import ProductGrid from "@/features/product/components/ProductGrid";
import { Product } from "@/features/product/types/product.types";
import { useWishlistStore } from "@/features/wishlist/store/wishlistStore";
import { useCartStore } from "@/features/cart/store/cartStore";
import { Heart } from "lucide-react";
import { products } from "@/features/product/data/products";

const BestSellers = () => {
  const { isInWishlist, toggleWishlist } = useWishlistStore();
  const { addToCart } = useCartStore();
  const bestSellingProducts: Product[] = products.slice(0, 4)

  return (
    <SectionLayout className="flex flex-col items-center bg-white">
      <SectionLayout.Tag>Most Loved</SectionLayout.Tag>
      <SectionLayout.Heading>Best Sellers</SectionLayout.Heading>
      <SectionLayout.Subheading className="text-center text-foreground/40">
        The pieces our customers keep coming back for.
      </SectionLayout.Subheading>
      <ProductGrid>
              {bestSellingProducts.map((bestSellingProduct) => {
                const inWishlist = isInWishlist(bestSellingProduct.id);

                return (
                  <ProductCard key={bestSellingProduct.id}>
                    {(selectedOption, handleClick) => {
                      return (
                        <>
                          <ProductCard.Image
                            src={bestSellingProduct.images.src}
                            alt={bestSellingProduct.images.alt}
                          />
                          <ProductCard.Tags>
                            {bestSellingProduct.tags?.map((tag) => {
                              return (
                                <ProductCard.Tag key={tag}>{tag}</ProductCard.Tag>
                              );
                            })}
                          </ProductCard.Tags>
                          <ProductCard.Wishlist
                            isActive={inWishlist}
                            onClick={() => toggleWishlist(bestSellingProduct)}
                          >
                            <Heart
                              size={16}
                              className={
                                inWishlist
                                  ? "fill-red-600 stroke-red-600"
                                  : "fill-none stroke-foreground"
                              }
                            />
                          </ProductCard.Wishlist>
                          <ProductCard.VariantSelector>
                            <ProductCard.VariantGroup>
                              {bestSellingProduct.variants?.map((variant, key) => {
                                return (
                                  variant && (
                                    <ProductCard.VariantOption
                                      key={key}
                                      variant={variant}
                                      selectedOption={selectedOption}
                                      handleClick={() => handleClick(variant)}
                                    />
                                  )
                                );
                              })}
                            </ProductCard.VariantGroup>
                          </ProductCard.VariantSelector>
                          <ProductCard.Content>
                            <ProductCard.Category>
                              {bestSellingProduct.category}
                            </ProductCard.Category>
                            <ProductCard.Name>{bestSellingProduct.name}</ProductCard.Name>
                            <ProductCard.Price product={bestSellingProduct} />
                            <ProductCard.Description>
                              {bestSellingProduct.description}
                            </ProductCard.Description>
                            <Button
                              variant="secondary"
                              onClick={() => addToCart({...bestSellingProduct, color: selectedOption.color, size: selectedOption.size, quantity: 0})}
                            >
                              Add to Cart
                            </Button>
                          </ProductCard.Content>
                        </>
                      );
                    }}
                  </ProductCard>
                );
              })}
            </ProductGrid>
    </SectionLayout>
  );
};

export default BestSellers;
