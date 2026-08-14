"use client";

import AnnouncementBanner from "../shared/AnnouncementBanner";
// import Logo from "@/assets/Logo-Primary-Light.png";
import LogoLight from "@/assets/Logo-Primary-Light.png";
import Nav from "../ui/Nav";
import Image from "next/image";
import {
  Heart,
  CircleUser,
  MenuIcon,
  X,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import { NavToggleProvider } from "@/providers/NavToggleContext";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import SideMenu from "./SideMenu";
import { SideMenuProvider } from "@/providers/SideMenuToggleContext";
import Cart from "@/features/cart/components/Cart";
import Wishlist from "@/features/wishlist/components/Wishlist";

const announcement = [
  "New collection just dropped - shop now 🔥",
  "Free shipping on orders over ₦50,000 🚢",
  "Get 20% off selected items this week 🎉",
  "Pay securely with card or bank transfer 💳",
];

const NavBar = () => {
  const pathName = usePathname();

  return (
    <div className="sticky top-0 inset-x-0 z-1000">
      <AnnouncementBanner announcement={announcement} />
      <NavToggleProvider>
        <SideMenuProvider>
          <header>
            <Nav className="bg-background text-foreground">
              <Nav.Hamburger className="mr-12">
                <MenuIcon width={18} strokeWidth={1.5} />
              </Nav.Hamburger>
              <Nav.Logo href="/">
                <Image src={LogoLight} alt="House of Neeya Logo" height={50} />
              </Nav.Logo>
              <Nav.Menu className="uppercase text-sm">
                <Nav.Item
                  href="/"
                  className={
                    pathName === "/" ? "text-primary after:w-full" : undefined
                  }
                >
                  Home
                </Nav.Item>
                <Nav.Item
                  href="/shop"
                  className={
                    pathName === "/shop"
                      ? "text-primary after:w-full"
                      : undefined
                  }
                >
                  Shop
                </Nav.Item>
                <Nav.Item
                  href="/about"
                  className={
                    pathName === "/about"
                      ? "text-primary after:w-full"
                      : undefined
                  }
                >
                  About
                </Nav.Item>
                <Nav.Item
                  href="/contact"
                  className={
                    pathName === "/contact"
                      ? "text-primary after:w-full"
                      : undefined
                  }
                >
                  Contact
                </Nav.Item>
              </Nav.Menu>
              <Nav.SideMenu className="uppercase">
                <div className="flex items-center justify-between w-full">
                  <Nav.Logo href="/">
                    <Image
                      src={LogoLight}
                      alt="House of Neeya Logo"
                      height={70}
                    />
                  </Nav.Logo>
                  <Nav.CloseMenu>
                    <X size={32} />
                  </Nav.CloseMenu>
                </div>
                <Nav.Item href="/" className="mt-auto" closeMenuOnClick>
                  Home
                </Nav.Item>
                <Nav.Item href="/shop" closeMenuOnClick>
                  Shop
                </Nav.Item>
                <Nav.Item href="/about" closeMenuOnClick>
                  About
                </Nav.Item>
                <Nav.Item href="/contact" closeMenuOnClick>
                  Contact
                </Nav.Item>
                <Nav.SideFooter>
                  <p className="text-sm font-light">Follow us</p>
                  <Nav.SocialIcons>
                    <Nav.SocialIcon href="/">
                      <FaWhatsapp size={18} strokeWidth={1.5} />
                    </Nav.SocialIcon>
                    <Nav.SocialIcon href="/">
                      <FaTiktok size={18} strokeWidth={1.5} />
                    </Nav.SocialIcon>
                    <Nav.SocialIcon href="/">
                      <FaFacebook size={18} strokeWidth={1.5} />
                    </Nav.SocialIcon>
                    <Nav.SocialIcon href="/">
                      <FaInstagram size={18} strokeWidth={1.5} />
                    </Nav.SocialIcon>
                  </Nav.SocialIcons>
                </Nav.SideFooter>
              </Nav.SideMenu>
              <Nav.Actions>
                <SideMenu.OpenSideMenu menu="cart">
                  <ShoppingCart width={18} strokeWidth={1.5} />
                </SideMenu.OpenSideMenu>
                <SideMenu.OpenSideMenu menu="wishlist">
                  <Heart width={18} strokeWidth={1.5} />
                </SideMenu.OpenSideMenu>
                <Link href="/profile">
                  <CircleUser width={18} strokeWidth={1.5} />
                </Link>
              </Nav.Actions>
              <SideMenu>
                {
                  (activeMenu) => (activeMenu === "cart" ? <Cart /> : <Wishlist />)
                }
              </SideMenu>
            </Nav>
          </header>
        </SideMenuProvider>
      </NavToggleProvider>
    </div>
  );
};

export default NavBar;
