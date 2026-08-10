"use client";

import { Button } from "@/components";
import SectionLayout from "@/components/layout/SectionLayout";
import PageNavigator from "@/components/ui/PageNavigator";
import { useCartStore } from "@/features/cart/store/cartStore";
import { useWishlistStore } from "@/features/wishlist/store/wishlistStore";
import { getProducts } from "@/features/product/api/product.services";
import ProductCard from "@/features/product/components/ProductCard";
import ProductCardLoader from "@/features/product/components/ProductCardLoader";
import ProductGrid from "@/features/product/components/ProductGrid";
import { Product } from "@/features/product/types/product.types";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { addToCart } = useCartStore();
  const { isInWishlist, toggleWishlist } = useWishlistStore();

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  return (
    <>
      <SectionLayout className="relative text-center bg-foreground overflow-hidden after:content-[''] after:absolute after:-bottom-px after:inset-x-0 after:h-10 after:bg-background after:[clip-path:ellipse(55%_100%_at_50%_100%)]">
        <div className="flex flex-col items-center justify-center">
          <SectionLayout.Tag className="mb-0">The Collection</SectionLayout.Tag>
          <SectionLayout.Heading className="text-background italic text-[clamp(36px,6vw,68px)]">
            Shop
          </SectionLayout.Heading>
          <SectionLayout.Subheading className="text-background my-0">
            Curated by Neeya . {products.length} Pieces
          </SectionLayout.Subheading>
        </div>
      </SectionLayout>
      <SectionLayout>
        {loading ? (
          <ProductGrid>
            {[...Array(12)].map((_, index) => {
              return <ProductCardLoader key={index} />;
            })}
          </ProductGrid>
        ) : (
          <>
            <ProductGrid>
              {products.map((product) => {
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
            <PageNavigator
              onPageClick={(pageNumber) =>
                console.log("Page number:", pageNumber)
              }
              onNextPage={() => console.log("Next Page")}
              onPrevPage={() => console.log("Next Page")}
              currentPage={1}
              totalPages={4}
            />
          </>
        )}
      </SectionLayout>
    </>
  );
}