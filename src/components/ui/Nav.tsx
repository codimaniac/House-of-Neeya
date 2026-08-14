"use client";

import Link from "next/link";
import { ReactNode } from "react";
import Overlay from "./Overlay";
import { useNavToggle } from "@/providers/NavToggleContext";

interface NavProps {
  children: ReactNode;
  className?: string;
}

interface NavLogoProps {
  href: string;
  children: ReactNode;
  className?: string;
}

interface NavMenuProps {
  children: ReactNode;
  className?: string;
}

interface NavSideMenuProps {
  children: ReactNode;
  className?: string;
}

interface NavCloseMenuProps {
  children: ReactNode;
  className?: string;
}

interface NavItemProps {
  href: string;
  children: ReactNode;
  className?: string;
  closeMenuOnClick?: boolean;
}

interface NavActionsProps {
  children: ReactNode;
  className?: string;
}

interface NavHamburgerProps {
  children: ReactNode;
  className?: string;
}

interface NavSocialIconsProps {
  children: ReactNode;
  className?: string;
}

interface NavSocialIconProps {
  href: string;
  children: ReactNode;
  className?: string;
}

interface NavSideFooterProps {
  children: ReactNode;
  className?: string;
}

const Nav = ({ children, className }: NavProps) => {
  return (
    <nav
      className={`flex items-center md:justify-between px-5 md:px-10 lg:px-15 py-4 shadow-xs shadow-foreground/10 ${className}`}
    >
      {children}
    </nav>
  );
};

function NavLogo({ href, children, className }: NavLogoProps) {
  return (
    <Link href={href} className={`${className}`}>
      {children}
    </Link>
  );
}

function NavMenu({ children, className }: NavMenuProps) {
  return (
    <ul
      className={`hidden md:flex items-center gap-9 text-xs lg:gap-12 lg:text-sm ${className}`}
    >
      {children}
    </ul>
  );
}

function NavSideMenu({ children, className }: NavSideMenuProps) {
  const { isOpen, closeNav } = useNavToggle();
  return (
    <>
      <Overlay
        className={`z-999 ${isOpen ? "block" : "hidden"}`}
        onClick={closeNav}
      ></Overlay>
      <div
        className={`fixed inset-0 z-1000 w-4/5 md:hidden transition-all duration-300 ${isOpen ? "left-0" : "-left-full"}`}
      >
        <ul
          className={`flex flex-col justify-center bg-foreground text-background h-dvh px-5 py-12 gap-12 text-sm md:hidden ${className}`}
        >
          {children}
        </ul>
      </div>
    </>
  );
}

function NavCloseMenu({ children }: NavCloseMenuProps) {
  const { closeNav } = useNavToggle();
  return (
    <button onClick={closeNav} className="cursor-pointer">
      {children}
    </button>
  );
}

function NavItem({
  href,
  children,
  className,
  closeMenuOnClick,
}: NavItemProps) {
  const { closeNav } = useNavToggle();

  return (
    <Link
      href={href}
      onClick={closeMenuOnClick ? closeNav : undefined}
      className={`relative after:transition-all after:content-[""] after:block after:h-px after:w-0 after:bg-primary hover:after:w-full ${className}`}
    >
      <li className="hover:text-primary font-light">{children}</li>
    </Link>
  );
}

function NavActions({ children, className }: NavActionsProps) {
  return (
    <div className={`flex items-center gap-6 not-md:ml-auto font-light ${className}`}>
      {children}
    </div>
  );
}

function NavHamburger({ children, className }: NavHamburgerProps) {
  const { toggleNav } = useNavToggle();
  return (
    <div
      className={`flex md:hidden items-center gap-6 ${className}`}
      onClick={toggleNav}
    >
      {children}
    </div>
  );
}

function NavSocialIcons({ children, className }: NavSocialIconsProps) {
  return <div className={`flex gap-4 ${className}`}>{children}</div>;
}

function NavSocialIcon({ href, children, className }: NavSocialIconProps) {
  return (
    <Link
      href={href}
      className={`flex items-center justify-center border border-primary/30 rounded-full gap-4 p-2 ${className}`}
    >
      {children}
    </Link>
  );
}

function NavSideFooter({ children, className }: NavSideFooterProps) {
  return (
    <div className={`flex flex-col self-baseline mt-auto gap-6 ${className}`}>
      {children}
    </div>
  );
}

Nav.Logo = NavLogo;
Nav.Menu = NavMenu;
Nav.SideMenu = NavSideMenu;
Nav.CloseMenu = NavCloseMenu;
Nav.Item = NavItem;
Nav.Actions = NavActions;
Nav.Hamburger = NavHamburger;
Nav.SocialIcons = NavSocialIcons;
Nav.SocialIcon = NavSocialIcon;
Nav.SideFooter = NavSideFooter;

export default Nav;
