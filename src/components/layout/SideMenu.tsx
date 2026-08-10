import { ReactNode } from "react";
import Overlay from "../ui/Overlay";
import { type SideMenu, useSideMenuToggle } from "@/providers/SideMenuToggleContext";
import { useCartStore } from "@/features/cart/store/cartStore";
import { useWishlistStore } from "@/features/wishlist/store/wishlistStore";

interface SideMenuProps {
  children: (activeMenu: SideMenu) => ReactNode;
  className?: string;
}

interface OpenSideMenuProps {
  children: ReactNode; 
  menu: Exclude<SideMenu, null>;
}

interface CloseSideMenuProps {
  children: ReactNode;
}

type SideMenuComponent = React.FC<SideMenuProps> & {
  OpenSideMenu: typeof OpenSideMenu;
  CloseSideMenu: typeof CloseSideMenu;
}

const SideMenu = (({ children, className }: SideMenuProps) => {
  const { activeMenu, closeSideMenu } = useSideMenuToggle();
  return (
    <>
      <Overlay
        className={`z-999 ${activeMenu ? "block" : "hidden"}`}
        onClick={closeSideMenu}
      ></Overlay>
      <div
        className={`fixed inset-y-0 z-1000 md:w-2/5 transition-all duration-300 ${activeMenu ? "right-0" : "-right-full"} ${className}`}
      >
        <ul
          className={`flex flex-col bg-background text-foreground h-full gap-4 text-sm ${className}`}
        >
          {children(activeMenu)}
        </ul>
      </div>
    </>
  );
}) as SideMenuComponent 

function OpenSideMenu({children, menu}: OpenSideMenuProps) {
  const { items: cartItems } = useCartStore();
  const { items: wishlistItems } = useWishlistStore();
  const { activeMenu, openSideMenu } = useSideMenuToggle();
  return (
    <div className="relative cursor-pointer" onClick={() => openSideMenu(menu)}>
      {children}
      <div className="flex justify-center items-center absolute -top-1/4 -right-3/4 w-3 h-3 p-2 rounded-full bg-background text-foreground text-xs">{cartItems.length}</div>
    </div>
  );
}

function CloseSideMenu({ children }: CloseSideMenuProps) {
  const { closeSideMenu } = useSideMenuToggle();
  return (
    <button onClick={closeSideMenu} className="cursor-pointer">
      {children}
    </button>
  );
}

SideMenu.OpenSideMenu = OpenSideMenu;
SideMenu.CloseSideMenu = CloseSideMenu;

export default SideMenu;
