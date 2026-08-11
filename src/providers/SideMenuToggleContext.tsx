"use client"

import { createContext, useContext, useState, ReactNode } from "react"

export type SideMenu = "cart" | "wishlist" | null

type SideMenuContextType = {
  activeMenu: SideMenu;
  openSideMenu: (menu: Exclude<SideMenu, null>) => void;
  closeSideMenu: () => void;
  isOpen: boolean;
}

const SideMenuContext = createContext<SideMenuContextType>({
    activeMenu: null,
    openSideMenu: () => {},
    closeSideMenu: () => {},
    isOpen: false,
})

export const SideMenuProvider = ({ children }: { children: ReactNode }) => {
  const [activeMenu, setActiveMenu] = useState<SideMenu>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const openSideMenu = (menu: Exclude<SideMenu, null>) => {
    setActiveMenu(menu)
    setIsOpen(true)
  };
  const closeSideMenu = () => setIsOpen(false);

  return (
    <SideMenuContext.Provider value={{ activeMenu, openSideMenu, closeSideMenu, isOpen }}>
      {children}
    </SideMenuContext.Provider>
  );

}

export const useSideMenuToggle = () => useContext(SideMenuContext)