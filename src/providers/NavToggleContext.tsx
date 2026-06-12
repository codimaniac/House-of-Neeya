"use client"

import { createContext, ReactNode, useContext, useState } from "react";

const NavToggleContext = createContext({
    isOpen: false,
    toggleNav: () => {},
    closeNav: () => {}
});

export const NavToggleProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false)
  
  return (
    <NavToggleContext.Provider value={{ isOpen, toggleNav, closeNav }}>
      {children}
    </NavToggleContext.Provider>
  );
};

export const useNavToggle = () => useContext(NavToggleContext)