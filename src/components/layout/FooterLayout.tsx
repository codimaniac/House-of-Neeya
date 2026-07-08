import Image from "next/image";
import Logo from "@/assets/Logo-Primary-Dark.png";
import Footer from "../ui/Footer";
import { CalendarDaysIcon, Clock, Mail, MapIcon, PhoneCall } from "lucide-react";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6"

const FooterLayout = () => {
  return (
    <Footer>
      <Footer.Section className="flex-col lg:flex-row md:justify-between gap-8! mb-12">
        <Footer.StoreInfo>
          <Footer.Logo href="/">
            <Image src={Logo} alt="House of Neeya Logo" height={100} />
          </Footer.Logo>
          <Footer.StoreSlogan>
            Your curated fashion destination for footwear, clothing, and handbags. Style. Delivered.
          </Footer.StoreSlogan>
          <Footer.SocialIcons>
            <Footer.SocialIcon href="/">
              <FaWhatsapp size={16}/>
            </Footer.SocialIcon>
            <Footer.SocialIcon href="/">
              <FaTiktok size={16}/>
            </Footer.SocialIcon>
            <Footer.SocialIcon href="/">
              <FaFacebook size={16}/>
            </Footer.SocialIcon>
            <Footer.SocialIcon href="/">
              <FaInstagram size={16}/>
            </Footer.SocialIcon>
          </Footer.SocialIcons>
        </Footer.StoreInfo>
        <Footer.Section className="flex-col md:flex-row flex-1 justify-between">
          <Footer.Section className="flex-col">
            <Footer.SectionTitle>Shop</Footer.SectionTitle>
            <Footer.LinkList>
              <Footer.Link href="/shop">Women&apos;s Footwear</Footer.Link>
              <Footer.Link href="/shop">Men&apos;s Footwear</Footer.Link>
              <Footer.Link href="/shop">Clothing</Footer.Link>
              <Footer.Link href="/shop">Handbags</Footer.Link>
              <Footer.Link href="/shop">New Arrivals</Footer.Link>
              <Footer.Link href="/shop">Sale</Footer.Link>
            </Footer.LinkList>
          </Footer.Section>
          <Footer.Section className="flex-col">
            <Footer.SectionTitle>Info</Footer.SectionTitle>
            <Footer.LinkList>
              <Footer.Link href="/shop">About Us</Footer.Link>
              <Footer.Link href="/shop">Our Story</Footer.Link>
              <Footer.Link href="/shop">Contact</Footer.Link>
              <Footer.Link href="/shop">FAQ</Footer.Link>
              <Footer.Link href="/shop">Shipping</Footer.Link>
              <Footer.Link href="/shop">Returns</Footer.Link>
            </Footer.LinkList>
          </Footer.Section>
          <Footer.Section className="flex-col">
            <Footer.SectionTitle>Contact</Footer.SectionTitle>
            <Footer.LinkList>
              <Footer.Link href="mailto:anthoniachiamaka01@gmail.com">
                <Mail size={12}/> anthoniachiamaka01@gmail.com
              </Footer.Link>
              <Footer.Link href="tel:+2349131199267">
                <PhoneCall size={12} /> +234 913 119 9267
              </Footer.Link>
              <Footer.Link href="/">
                <MapIcon size={12} /> Abuja, Nigeria
              </Footer.Link>
              <Footer.Link href="/">
                <CalendarDaysIcon size={12}/> Mon - Sat
              </Footer.Link>
              <Footer.Link href="/">
                <Clock size={12}/> 8am - 8pm WAT
              </Footer.Link>
            </Footer.LinkList>
          </Footer.Section>
        </Footer.Section>
      </Footer.Section>
      <Footer.CopyrightInfo>
        <Footer.Copyright companyName="House of Neeya" />
        <Footer.Credit  companyName="Dev. Naza" href="https://devnaza.netlify.app" />
        <Footer.Tagline>Style • Curated • Delivered</Footer.Tagline>
      </Footer.CopyrightInfo>
    </Footer>
  );
};

export default FooterLayout;
