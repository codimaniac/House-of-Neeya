import SideMenu from "@/components/layout/SideMenu"
import EmptyWishlist from "./EmptyWishlist"
import { X } from "lucide-react"

const Wishlist = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full text-foreground bg-background border-b border-foreground/20 px-5 py-7.5">
        <div className="flex items-baseline gap-3">
          <div className="font-serif text-3xl italic text-accent">Your</div>
          <div className="text-2xl font-light tracking-wide">Wishlist</div>
        </div>
        <SideMenu.CloseSideMenu>
          <X size={24} />
        </SideMenu.CloseSideMenu>
      </div>
      <EmptyWishlist />
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