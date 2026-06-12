"use client";

import Link from "next/link";
import { ReactNode } from "react";
import Overlay from "../shared/Overlay";
import { useNavToggle } from "@/providers/NavToggleContext";

interface NavProps {
  children: ReactNode;
  classname?: string;
}

interface NavLogoProps {
  href: string;
  children: ReactNode;
  classname?: string;
}

interface NavMenuProps {
  children: ReactNode;
  classname?: string;
}

interface NavSideMenuProps {
  children: ReactNode;
  classname?: string;
}

interface NavItemProps {
  href: string;
  children: ReactNode;
  classname?: string;
}

interface NavActionsProps {
  children: ReactNode;
  classname?: string;
}

interface NavHamburgerProps {
  children: ReactNode;
  classname?: string;
}

interface NavSocialIconsProps {
  children: ReactNode;
  classname?: string;
}

interface NavSocialIconProps {
  children: ReactNode;
  classname?: string;
}

interface NavSideFooterProps {
  children: ReactNode;
  classname?: string;
}

const Nav = ({ children, classname }: NavProps) => {
  return (
    <nav
      className={`flex items-center justify-between px-5 md:px-15 lg:px-25 py-4 border-b border-b-[#1c1c1a1a] ${classname}`}
    >
      {children}
    </nav>
  );
};

function NavLogo({ href, children, classname }: NavLogoProps) {
  return (
    <Link href={href} className={`${classname}`}>
      {children}
    </Link>
  );
}

function NavMenu({ children, classname }: NavMenuProps) {
  return (
    <ul className={`hidden md:flex items-center gap-12 text-sm ${classname}`}>
      {children}
    </ul>
  );
}

function NavSideMenu({ children, classname }: NavSideMenuProps) {
  const { isOpen, closeNav } = useNavToggle();
  return (
    <>
      <Overlay
        className={`md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        onClick={closeNav}
      ></Overlay>
      <div className={`fixed inset-0 w-4/5 md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <ul
          className={`flex flex-col justify-center items-center bg-foreground text-background h-full p-12 gap-12 text-sm md:hidden ${classname}`}
        >
          {children}
        </ul>
      </div>
    </>
  );
}

function NavItem({ href, children, classname }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`relative after:transition-all after:content-[""] after:block after:h-px after:w-0 after:bg-primary hover:after:w-full ${classname}`}
    >
      <li className="hover:text-primary">{children}</li>
    </Link>
  );
}

function NavActions({ children, classname }: NavActionsProps) {
  return (
    <div className={`hidden md:flex items-center gap-6 ${classname}`}>
      {children}
    </div>
  );
}

function NavHamburger({ children, classname }: NavHamburgerProps) {
  const { toggleNav } = useNavToggle();
  return (
    <div
      className={`flex md:hidden items-center gap-6 ${classname}`}
      onClick={toggleNav}
    >
      {children}
    </div>
  );
}

function NavSocialIcons({ children, classname }: NavSocialIconsProps) {
  return <div className={`flex gap-4 ${classname}`}>{children}</div>;
}

function NavSocialIcon({ children, classname }: NavSocialIconProps) {
  return (
    <div
      className={`flex items-center justify-center border border-primary/30 rounded-full gap-4 p-2 ${classname}`}
    >
      {children}
    </div>
  );
}

function NavSideFooter({ children, classname }: NavSideFooterProps) {
  return (
    <div className={`flex flex-col self-baseline mt-auto gap-6 ${classname}`}>
      {children}
    </div>
  );
}

Nav.Logo = NavLogo;
Nav.Menu = NavMenu;
Nav.SideMenu = NavSideMenu;
Nav.Item = NavItem;
Nav.Actions = NavActions;
Nav.Hamburger = NavHamburger;
Nav.SocialIcons = NavSocialIcons;
Nav.SocialIcon = NavSocialIcon;
Nav.SideFooter = NavSideFooter;

export default Nav;
