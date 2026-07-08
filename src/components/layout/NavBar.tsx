"use client";

import AnnouncementBanner from "../shared/AnnouncementBanner";
// import Logo from "@/assets/Logo-Primary-Light.png";
import LogoDark from "@/assets/Logo-Primary-Dark.png";
import Nav from "../ui/Nav";
import Image from "next/image";
import { ShoppingCart, Heart, CircleUser, MenuIcon, X } from "lucide-react";
import Link from "next/link";
import { NavToggleProvider } from "@/providers/NavToggleContext";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const announcement = [
  "New collection just dropped - shop now 🔥",
  "Free shipping on orders over ₦50,000 🚢",
  "Get 20% off selected items this week 🎉",
  "Pay securely with card or bank transfer 💳",
];

const NavBar = () => {
  const pathName = usePathname()

  return (
    <>
      <AnnouncementBanner announcement={announcement} />
      <NavToggleProvider>
        <header>
          <Nav classname="bg-foreground text-background">
            <Nav.Logo href="/">
              <Image src={LogoDark} alt="House of Neeya Logo" height={70} />
            </Nav.Logo>
            <Nav.Menu classname="uppercase text-sm">
              <Nav.Item href="/" classname={pathName === "/" ? "text-primary after:w-full" : undefined}>Home</Nav.Item>
              <Nav.Item href="/shop" classname={pathName === "/shop" ? "text-primary after:w-full" : undefined}>Shop</Nav.Item>
              <Nav.Item href="/about" classname={pathName === "/about" ? "text-primary after:w-full" : undefined}>About</Nav.Item>
              <Nav.Item href="/contact" classname={pathName === "/contact" ? "text-primary after:w-full" : undefined}>Contact</Nav.Item>
            </Nav.Menu>
            <Nav.SideMenu classname="uppercase">
              <div className="flex items-center justify-between w-full">
                <Nav.Logo href="/">
                  <Image src={LogoDark} alt="House of Neeya Logo" height={70} />
                </Nav.Logo>
                <Nav.CloseMenu>
                  <X size={32} />
                </Nav.CloseMenu>
              </div>
              <Nav.Item href="/" classname="mt-auto" closeMenuOnClick>
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
                    <FaWhatsapp size={16} />
                  </Nav.SocialIcon>
                  <Nav.SocialIcon href="/">
                    <FaTiktok size={16} />
                  </Nav.SocialIcon>
                  <Nav.SocialIcon href="/">
                    <FaFacebook size={16} />
                  </Nav.SocialIcon>
                  <Nav.SocialIcon href="/">
                    <FaInstagram size={16} />
                  </Nav.SocialIcon>
                </Nav.SocialIcons>
              </Nav.SideFooter>
            </Nav.SideMenu>
            <Nav.Actions>
              <Link href="/cart">
                <ShoppingCart width={20} />
              </Link>
              <Link href="/wishlist">
                <Heart width={20} />
              </Link>
              <Link href="/profile">
                <CircleUser width={20} />
              </Link>
            </Nav.Actions>
            <Nav.Hamburger>
              <MenuIcon width={20} />
            </Nav.Hamburger>
          </Nav>
        </header>
      </NavToggleProvider>
    </>
  );
};

export default NavBar;
