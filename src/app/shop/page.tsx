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
import ProductFilter from "@/features/product/components/ProductFilter";
import { Product } from "@/features/product/types/product.types";
import { FilterIcon, FilterXIcon, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import Select from "@/components/ui/SelectInput";
import {
  FilterToggleProvider,
  useFilterToggle,
} from "@/features/product/provider/filterMenuToggleContext";

export default function Home() {
  return (
    <FilterToggleProvider>
      <Shop />
    </FilterToggleProvider>
  );
}

function Shop() {
  const { isOpen, toggleFilter } = useFilterToggle();
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
      <SectionLayout className="relative text-center overflow-hidden !py-8">
        <div className="flex flex-col items-center justify-center">
          <SectionLayout.Tag className="mb-0">Collection</SectionLayout.Tag>
          <SectionLayout.Heading className="italic text-[clamp(36px,6vw,68px)]">
            The Shop
          </SectionLayout.Heading>
        </div>
      </SectionLayout>
      <SectionLayout className="flex flex-col md:flex-row gap-8">
        {isOpen && <ProductFilter isOpen={isOpen} />}
        {loading ? (
          <div className="flex flex-col w-full @container">
            <div className="flex flex-col md:flex-row w-full md:items-center md:justify-between gap-4 my-4 py-2 text-xs text-foreground/60">
              <div className="flex items-center gap-4">
                {isOpen ? (
                  <FilterXIcon
                    width={18}
                    strokeWidth={1.5}
                    className="cursor-pointer hover:text-foreground"
                    onClick={toggleFilter}
                  />
                ) : (
                  <FilterIcon
                    width={18}
                    strokeWidth={1.5}
                    className="cursor-pointer hover:text-foreground"
                    onClick={toggleFilter}
                  />
                )}{" "}
                Showing {products.length} products
              </div>
              <Select className="text-xs">
                <option value="featured" className="text-xs w-12">
                  Sort by: Featured
                </option>
                <option value="featured" className="text-xs w-12">
                  Sort by: Price (Low to High)
                </option>
                <option value="featured" className="text-xs w-12">
                  Sort by: Price (High to Low)
                </option>
                <option value="featured" className="text-xs w-12">
                  Sort by: Name (A- Z)
                </option>
              </Select>
            </div>
            <ProductGrid>
              {[...Array(12)].map((_, index) => {
                return <ProductCardLoader key={index} />;
              })}
            </ProductGrid>
          </div>
        ) : (
          <div className="flex flex-col w-full @container">
            <div className="flex flex-col md:flex-row w-full md:items-center md:justify-between gap-4 my-4 py-2 text-xs text-foreground/60">
              <div className="flex items-center gap-4">
                {isOpen ? (
                  <FilterXIcon
                    width={18}
                    strokeWidth={1.5}
                    className="cursor-pointer hover:text-foreground"
                    onClick={toggleFilter}
                  />
                ) : (
                  <FilterIcon
                    width={18}
                    strokeWidth={1.5}
                    className="cursor-pointer hover:text-foreground"
                    onClick={toggleFilter}
                  />
                )}{" "}
                Showing {products.length} products
              </div>
              <Select className="text-xs">
                <option value="featured" className="text-xs w-12">
                  Sort by: Featured
                </option>
                <option value="featured" className="text-xs w-12">
                  Sort by: Price (Low to High)
                </option>
                <option value="featured" className="text-xs w-12">
                  Sort by: Price (High to Low)
                </option>
                <option value="featured" className="text-xs w-12">
                  Sort by: Name (A- Z)
                </option>
              </Select>
            </div>
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
                                <ProductCard.Tag key={tag}>
                                  {tag}
                                </ProductCard.Tag>
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
                              onClick={() =>
                                addToCart({
                                  ...product,
                                  color: selectedOption.color,
                                  size: selectedOption.size,
                                  quantity: 0,
                                })
                              }
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
          </div>
        )}
      </SectionLayout>
    </>
  );
}
