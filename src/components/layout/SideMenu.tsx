import { ReactNode } from "react";
import Overlay from "../ui/Overlay";
import {
  type SideMenu,
  useSideMenuToggle,
} from "@/providers/SideMenuToggleContext";
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
};

const SideMenu = (({ children, className }: SideMenuProps) => {
  const { activeMenu, isOpen, closeSideMenu } = useSideMenuToggle();
  return (
    <>
      <Overlay
        className={`z-999 ${isOpen ? "block" : "hidden"}`}
        onClick={closeSideMenu}
      ></Overlay>
      <div
        className={`fixed inset-y-0 z-1000 md:w-2/5 transition-all duration-300 ${isOpen ? "right-0" : "right-[-200%]"} ${className}`}
      >
        <div
          className={`flex flex-col bg-background text-foreground h-dvh gap-4 text-sm ${className}`}
        >
          {children(activeMenu)}
        </div>
      </div>
    </>
  );
}) as SideMenuComponent;

function OpenSideMenu({ children, menu }: OpenSideMenuProps) {
  const { items: cartItems } = useCartStore();
  const { items: wishlistItems } = useWishlistStore();
  const { openSideMenu } = useSideMenuToggle();
  return (
    <div className="relative cursor-pointer" onClick={() => openSideMenu(menu)}>
      {children}
      <div className="flex justify-center items-center absolute -top-1/4 -right-3/4 w-3 h-3 p-2 rounded-full bg-background text-foreground text-xs">
        {menu === "cart" ? cartItems.length : wishlistItems.length}
      </div>
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
