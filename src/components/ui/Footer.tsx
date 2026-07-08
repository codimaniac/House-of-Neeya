import Link from "next/link";
import { ReactNode } from "react";

interface FooterProps {
  children: ReactNode;
  className?: string;
}

interface FooterSectionProps {
  children: ReactNode;
  className?: string;
}

interface FooterSectionTitleProps {
  children: ReactNode;
  className?: string;
}

interface FooterStoreInfoProps {
  children: ReactNode;
  className?: string;
}

interface FooterStoreSloganProps {
  children: ReactNode;
  className?: string;
}

interface FooterSocialIconsProps {
  children: ReactNode;
  className?: string;
}

interface FooterSocialIconProps {
  href: string;
  children: ReactNode;
  className?: string;
}

interface FooterLogoProps {
  href: string;
  children: ReactNode;
  className?: string;
}

interface FooterLinkListProps {
  children: ReactNode;
  className?: string;
}

interface FooterLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

interface FooterCopyrightInfoProps {
  children: ReactNode;
  className?: string;
}

interface FooterCopyrightProps {
  companyName: string;
  className?: string;
}

interface FooterCreditProps {
  href: string;
  companyName: string;
  className?: string;
}

interface FooterTaglineProps {
  children: ReactNode;
  className?: string;
}

const Footer = ({ children, className }: FooterProps) => {
  return (
    <footer
      className={`bg-foreground text-background mt-auto pt-16 pb-8 px-5 md:px-10 lg:px-10 ${className}`}
    >
      {children}
    </footer>
  );
};

function FooterSection({ children, className }: FooterSectionProps) {
  return <div className={`flex gap-6 ${className}`}>{children}</div>;
}

function FooterSectionTitle({ children, className }: FooterSectionTitleProps) {
  return (
    <h3 className={`uppercase text-primary text-xs ${className}`}>
      {children}
    </h3>
  );
}

function FooterStoreInfo({ children, className }: FooterStoreInfoProps) {
  return (
    <div className={`flex flex-col gap-6 max-w-75 ${className}`}>
      {children}
    </div>
  );
}

function FooterStoreSlogan({ children, className }: FooterStoreSloganProps) {
  return (
    <p className={`text-xs text-background/50 leading-[2em] ${className}`}>
      {children}
    </p>
  );
}

function FooterSocialIcons({ children, className }: FooterSocialIconsProps) {
  return <div className={`flex gap-4 ${className}`}>{children}</div>;
}

function FooterSocialIcon({
  href,
  children,
  className,
}: FooterSocialIconProps) {
  return (
    <Link
      href={href}
      className={`flex items-center justify-center border border-primary/30 rounded-full gap-4 p-2 ${className}`}
    >
      {children}
    </Link>
  );
}

function FooterLogo({ href, children, className }: FooterLogoProps) {
  return (
    <Link href={href} className={`${className}`}>
      {children}
    </Link>
  );
}

function FooterLinkList({ children, className }: FooterLinkListProps) {
  return (
    <ul className={`flex flex-col gap-3 text-xs ${className}`}>{children}</ul>
  );
}

function FooterLink({ href, children, className }: FooterLinkProps) {
  return (
    <Link href={href}>
      <li
        className={`flex items-center gap-2 text-background/60 hover:text-primary ${className}`}
      >
        {children}
      </li>
    </Link>
  );
}

function FooterCopyrightInfo({
  children,
  className,
}: FooterCopyrightInfoProps) {
  return (
    <p
      className={`flex flex-wrap justify-center gap-6 md:justify-between border-t border-t-background/12 text-[8px] pt-6 ${className}`}
    >
      {children}
    </p>
  );
}

function FooterCopyright({ companyName, className }: FooterCopyrightProps) {
  const currentYear = new Date().getFullYear();
  return (
    <span className={`text-background/30 text-[11px] ${className}`}>
      &copy; {currentYear} {companyName}. All right reserved.
    </span>
  );
}

function FooterCredit({ href, companyName, className }: FooterCreditProps) {
  return (
    <span className={`text-background/30 text-[11px] ${className}`}>
      Designed and Developed by{" "}
      <Link href={href} className="border-b border-background/30">
        {companyName}
      </Link>
    </span>
  );
}

function FooterTagline({ children, className }: FooterTaglineProps) {
  return (
    <span
      className={`font-serif italic text-background/30 text-[11px] ${className}`}
    >
      {children}
    </span>
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
