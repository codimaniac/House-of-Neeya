"use client"

import { Button } from "@/components";
import SectionLayout from "@/components/layout/SectionLayout";
import { useCartStore } from "@/features/cart/store/cartStore";
import ProductCard from "@/features/product/components/ProductCard";
import ProductGrid from "@/features/product/components/ProductGrid";
import { products } from "@/features/product/data/products";
import { Product } from "@/features/product/types/product.types";
import { useWishlistStore } from "@/features/wishlist/store/wishlistStore";
import { Heart } from "lucide-react";

const NewArrivalsSection = () => {
  const { isInWishlist, toggleWishlist } = useWishlistStore();
  const { addToCart } = useCartStore();
  const latestProducts: Product[] = products.slice(0, 4);

  return (
    <SectionLayout className="flex flex-col items-center @container">
      <SectionLayout.Tag>Just Dropped</SectionLayout.Tag>
      <SectionLayout.Heading>New Arrivals</SectionLayout.Heading>
      <ProductGrid>
                    {latestProducts.map((product) => {
                      const inWishlist = isInWishlist(product.id);
      
                      return (
                        <ProductCard key={product.id}>
                          {(selectedOption, handleClick) => {
                            return (
                              <>
                                <ProductCard.Image
                                  src={product.images.src}
                                  alt={product.images.alt}
                                />
                                <ProductCard.Tags>
                                  {product.tags?.map((tag) => {
                                    return (
                                      <ProductCard.Tag key={tag}>{tag}</ProductCard.Tag>
                                    );
                                  })}
                                </ProductCard.Tags>
                                <ProductCard.Wishlist
                                  isActive={inWishlist}
                                  onClick={() => toggleWishlist(product)}
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
                                    {product.variants?.map((variant, key) => {
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
                                    {product.category}
                                  </ProductCard.Category>
                                  <ProductCard.Name>{product.name}</ProductCard.Name>
                                  <ProductCard.Price product={product} />
                                  <ProductCard.Description>
                                    {product.description}
                                  </ProductCard.Description>
                                  <Button
                                    variant="secondary"
                                    onClick={() => addToCart({...product, color: selectedOption.color, size: selectedOption.size, quantity: 0})}
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

export default NewArrivalsSection;
