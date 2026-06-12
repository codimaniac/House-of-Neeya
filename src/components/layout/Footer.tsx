import Link from "next/link";
import { ReactNode } from "react";

interface FooterProps {
  children: ReactNode;
  classname?: string;
}

interface FooterSectionProps {
  children: ReactNode;
  classname?: string;
}

interface FooterSectionTitleProps {
  children: ReactNode;
  classname?: string;
}

interface FooterStoreInfoProps {
  children: ReactNode;
  classname?: string;
}

interface FooterStoreSloganProps {
  children: ReactNode;
  classname?: string;
}

interface FooterSocialIconsProps {
  children: ReactNode;
  classname?: string;
}

interface FooterSocialIconProps {
  children: ReactNode;
  classname?: string;
}

interface FooterLogoProps {
  href: string;
  children: ReactNode;
  classname?: string;
}

interface FooterLinkListProps {
  children: ReactNode;
  classname?: string;
}

interface FooterLinkProps {
  href: string;
  children: ReactNode;
  classname?: string;
}

interface FooterCopyrightInfoProps {
  children: ReactNode;
  classname?: string;
}

interface FooterCopyrightProps {
  companyName: string;
  classname?: string;
}

interface FooterCreditProps {
  href: string;
  companyName: string;
  classname?: string;
}

interface FooterTaglineProps {
  children: ReactNode;
  classname?: string;
}



const Footer = ({ children, classname }: FooterProps) => {
  return (
    <footer
      className={`bg-foreground text-background mt-auto pt-16 pb-8 px-5 md:px-15 lg:px-25 ${classname}`}
    >
      {children}
    </footer>
  );
};

function FooterSection({ children, classname }: FooterSectionProps) {
  return <div className={`flex gap-6 ${classname}`}>{children}</div>;
}

function FooterSectionTitle({ children, classname }: FooterSectionTitleProps) {
  return <h3 className={`uppercase text-primary text-xs ${classname}`}>{children}</h3>;
}

function FooterStoreInfo({ children, classname }: FooterStoreInfoProps) {
  return <div className={`flex flex-col gap-6 max-w-75 ${classname}`}>{children}</div>;
}

function FooterStoreSlogan({ children, classname }: FooterStoreSloganProps) {
  return <p className={`text-xs text-background/50 leading-[2em] ${classname}`}>{children}</p>;
}

function FooterSocialIcons({ children, classname }: FooterSocialIconsProps) {
  return <div className={`flex gap-4 ${classname}`}>{children}</div>;
}

function FooterSocialIcon({ children, classname }: FooterSocialIconProps) {
  return <div className={`flex items-center justify-center border border-primary/30 rounded-full gap-4 p-2 ${classname}`}>{children}</div>;
}

function FooterLogo({ href, children, classname }: FooterLogoProps) {
  return (
    <Link href={href} className={`${classname}`}>
      {children}
    </Link>
  );
}

function FooterLinkList({ children, classname }: FooterLinkListProps) {
  return (
    <ul className={`flex flex-col gap-3 text-xs ${classname}`}>
      {children}
    </ul>
  );
}

function FooterLink({ href, children, classname }: FooterLinkProps) {
  return (
    <Link
      href={href}      
    >
      <li className={`flex items-center gap-2 text-background/60 hover:text-primary ${classname}`}>{children}</li>
    </Link>
  );
}

function FooterCopyrightInfo({ children, classname }: FooterCopyrightInfoProps) {
  return (
    <p className={`flex flex-wrap justify-center gap-6 md:justify-between border-t border-t-background/12 text-[8px] pt-6 ${classname}`}>
        {children}
    </p>
  );
}

function FooterCopyright({ companyName, classname }: FooterCopyrightProps) {
    const currentYear = new Date().getFullYear();
  return (
    <span className={`text-background/30 text-[11px] ${classname}`}>&copy; {currentYear} {companyName}. All right reserved.</span>
  );
}

function FooterCredit({ href, companyName, classname }: FooterCreditProps) {
  return (
    <span className={`text-background/30 text-[11px] ${classname}`}>Designed and Developed by <Link href={href} className="border-b border-background/30">{companyName}</Link></span>
  );
}

function FooterTagline({ children, classname }: FooterTaglineProps) {
  return (
    <span className={`font-serif italic text-background/30 text-[11px] ${classname}`}>{children}</span>
  );
}

Footer.Logo = FooterLogo;
Footer.Section = FooterSection;
Footer.SectionTitle = FooterSectionTitle;
Footer.StoreInfo = FooterStoreInfo;
Footer.StoreSlogan = FooterStoreSlogan;
Footer.SocialIcons = FooterSocialIcons;
Footer.SocialIcon = FooterSocialIcon;
Footer.LinkList = FooterLinkList;
Footer.Link = FooterLink;
Footer.CopyrightInfo = FooterCopyrightInfo;
Footer.Copyright = FooterCopyright;
Footer.Credit = FooterCredit;
Footer.Tagline = FooterTagline;

export default Footer;
