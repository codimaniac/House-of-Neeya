import type { ReactNode } from "react";

type SectionLayoutProps = {
  children: ReactNode;
  className?: string;
};

type SectionTagProps = {
  children: ReactNode;
  className?: string;
};

type SectionHeadingProps = {
  children: ReactNode;
  className?: string;
};

type SectionSubheadingProps = {
  children: ReactNode;
  className?: string;
};

const SectionLayout = ({ children, className }: SectionLayoutProps) => {
  return (
    <section className={`px-5 py-12 md:px-10 md:py-24 lg:px-15 lg:py-30 ${className}`}>
      {children}
    </section>
  );
};

const SectionTag = ({ children, className }: SectionTagProps) => {
  return (
    <div className={`uppercase text-[10px] text-primary mb-2 tracking-[0.22em] ${className}`}>
      {children}
    </div>
  );
};

const SectionHeading = ({ children, className }: SectionHeadingProps) => {
  return (
    <h2 className={`font-serif text-[clamp(28px,5vw,52px)] mb-2 ${className}`}>
      {children}
    </h2>
  );
};

const SectionSubheading = ({ children, className }: SectionSubheadingProps) => {
  return (
    <p className={`text-[14px] font-sans font-light leading-[1.7] max-w-130 mx-auto mt-6 mb-10 ${className}`}>{children}</p>
  );
};

SectionLayout.Tag = SectionTag;
SectionLayout.Heading = SectionHeading;
SectionLayout.Subheading = SectionSubheading;

export default SectionLayout;
