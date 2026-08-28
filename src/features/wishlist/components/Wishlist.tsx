import SideMenu from "@/components/layout/SideMenu"
import EmptyWishlist from "./EmptyWishlist"
import { Heart, X } from "lucide-react"
import { useCartStore } from "@/features/cart/store/cartStore"
import { useWishlistStore } from "../store/wishlistStore"
import ProductGrid from "@/features/product/components/ProductGrid"
import ProductCard from "@/features/product/components/ProductCard"
import { Button } from "@/components"

const Wishlist = () => {
  const { addToCart } = useCartStore();
  const { items, isInWishlist, toggleWishlist } = useWishlistStore();
  const isEmpty = items.length === 0
  return (
    <>
      <div className="flex items-center justify-between w-full text-foreground border-b border-foreground/20 px-5 py-7.5">
        <div className="flex items-baseline gap-3">
          <div className="font-serif text-3xl italic text-accent">Your</div>
          <div className="text-2xl font-light tracking-wide">Wishlist</div>
        </div>
        <SideMenu.CloseSideMenu>
          <X size={24} />
        </SideMenu.CloseSideMenu>
      </div>
      { isEmpty ? <EmptyWishlist /> : <div className="px-5 py-2 overflow-y-auto scroll-smooth">
            <ProductGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              {items.map((wishlistedProduct) => {
                const inWishlist = isInWishlist(wishlistedProduct.id);

                return (
                  <ProductCard key={wishlistedProduct.id}>
                    {(selectedOption, handleClick) => {
                      return (
                        <>
                          <ProductCard.Image
                            src={wishlistedProduct.images.src}
                            alt={wishlistedProduct.images.alt}
                          />
                          <ProductCard.Tags>
                            {wishlistedProduct.tags?.map((tag) => {
                              return (
                                <ProductCard.Tag key={tag}>{tag}</ProductCard.Tag>
                              );
                            })}
                          </ProductCard.Tags>
                          <ProductCard.Wishlist
                            isActive={inWishlist}
                            onClick={() => toggleWishlist(wishlistedProduct)}
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
                              {wishlistedProduct.variants?.map((variant, key) => {
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
                              {wishlistedProduct.category}
                            </ProductCard.Category>
                            <ProductCard.Name>{wishlistedProduct.name}</ProductCard.Name>
                            <ProductCard.Price product={wishlistedProduct} />
                            <ProductCard.Description>
                              {wishlistedProduct.description}
                            </ProductCard.Description>
                            <Button
                              variant="secondary"
                              onClick={() => addToCart({...wishlistedProduct, color: selectedOption.color, size: selectedOption.size, quantity: 0})}
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
            </ProductGrid></div> }
    </>
  )
}

function WishlistItem() {
    return (
        <div className=""></div>
    )
}

Wishlist.Item = WishlistItem

export default Wishlist