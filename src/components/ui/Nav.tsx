"use client";

import Link from "next/link";
import { ReactNode, useEffect } from "react";
import Overlay from "./Overlay";
import { useNavToggle } from "@/providers/NavToggleContext";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

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
      className={`hidden md:flex items-center gap-5 md:gap-9 text-xs lg:gap-12 lg:text-sm ${className}`}
    >
      {children}
    </ul>
  );
}

function NavSideMenu({ children, className }: NavSideMenuProps) {
  const { isOpen, closeNav } = useNavToggle();

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);

    return ()=> {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen])

  return (
    <>
      <Overlay
        className={`z-999 ${isOpen ? "block" : "hidden"}`}
        onClick={closeNav}
      ></Overlay>
      <aside
        className={`fixed inset-0 z-1000 w-4/5 md:hidden transition-all duration-300 ${isOpen ? "left-0" : "-left-full"}`}
      >
        <div
          className={`fixed flex flex-col justify-center bg-background text-foreground h-dvh py-8 gap-12 text-sm md:hidden ${className}`}
        >
          {children}
        </div>
      </aside>
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
      <li className="flex gap-4 items-center hover:text-primary text-sm font-light">{children}</li>
    </Link>
  );
}

function NavSideItem({
  href,
  children,
  className,
  closeMenuOnClick,
}: NavItemProps) {
  const { closeNav } = useNavToggle();
  const pathname = usePathname();

  return (
    <button className={cn("peer/menu-button group/menu-button flex w-full items-center gap-2 overflow-hidden rounded-sm px-3 py-4 text-left text-sm ring-sidebar-ring outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pr-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! hover:bg-accent/10 hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-open:hover:bg-sidebar-accent data-open:hover:text-sidebar-accent-foreground data-active:bg-accent/10 data-active:font-medium data-active:text-sidebar-accent-foreground data-active:border-l-2 data-active:border-l-accent [&_svg]:size-4 [&_svg]:shrink-0 [&>span:last-child]:truncate", className, pathname === href ? "bg-accent/10 border-l-2 border-l-accent" : "")}>
      <Link
        href={href}
        onClick={closeMenuOnClick ? closeNav : undefined}
        className="flex gap-2 items-center"
      >
        {children}
      </Link>
    </button>
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
    <div className={cn(`flex items-center justify-center border border-primary/30 hover:bg-accent hover:text-background rounded-full gap-4 p-2`, className)}>
      <Link
        href={href}
      >
        {children}
      </Link>
    </div>
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
Nav.SideItem = NavSideItem;
Nav.Actions = NavActions;
Nav.Hamburger = NavHamburger;
Nav.SocialIcons = NavSocialIcons;
Nav.SocialIcon = NavSocialIcon;
Nav.SideFooter = NavSideFooter;

export default Nav;
