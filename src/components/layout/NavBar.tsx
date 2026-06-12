"use client";

import AnnouncementBanner from "./AnnouncementBanner";
import Logo from "@/app/Logo-Primary-Light.png";
import LogoDark from "@/app/Logo-Primary-Dark.png";
import Nav from "./Nav";
import Image from "next/image";
import {
  ShoppingCart,
  Heart,
  CircleUser,
  MenuIcon,
  ShoppingCartIcon,
} from "lucide-react";
import Link from "next/link";
import { NavToggleProvider } from "@/providers/NavToggleContext";

const NavBar = () => {
  return (
    <>
      <AnnouncementBanner />
      <NavToggleProvider>
        <header>
          <Nav>
            <Nav.Logo href="/">
              <Image src={Logo} alt="House of Neeya Logo" height={70} />
            </Nav.Logo>
            <Nav.Menu classname="uppercase text-sm">
              <Nav.Item href="/">Home</Nav.Item>
              <Nav.Item href="/shop">Shop</Nav.Item>
              <Nav.Item href="/about">About</Nav.Item>
              <Nav.Item href="/contact">Contact</Nav.Item>
            </Nav.Menu>
            <Nav.SideMenu>
              <Nav.Logo href="/">
                <Image src={LogoDark} alt="House of Neeya Logo" height={70} />
              </Nav.Logo>
              <Nav.Item href="/" classname="mt-auto">
                Home
              </Nav.Item>
              <Nav.Item href="/shop">Shop</Nav.Item>
              <Nav.Item href="/about">About</Nav.Item>
              <Nav.Item href="/contact">Contact</Nav.Item>
              <Nav.SideFooter>
                <p className="uppercase text-sm font-light">Follow us</p>
                <Nav.SocialIcons>
                  <Nav.SocialIcon>
                    <ShoppingCartIcon size={16} />
                  </Nav.SocialIcon>
                  <Nav.SocialIcon>
                    <ShoppingCartIcon size={16} />
                  </Nav.SocialIcon>
                  <Nav.SocialIcon>
                    <ShoppingCartIcon size={16} />
                  </Nav.SocialIcon>
                  <Nav.SocialIcon>
                    <ShoppingCartIcon size={16} />
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
              <Link href="/profie">
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
