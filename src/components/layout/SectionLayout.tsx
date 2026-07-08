import cn from "@/lib/cn";
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

type SectionParagraphProps = {
  children: ReactNode;
  className?: string;
};

const SectionLayout = ({ children, className }: SectionLayoutProps) => {
  return (
    <section className={cn("px-5 py-12 md:px-10 md:py-24 lg:px-15 lg:py-30", className)}>
      {children}
    </section>
  );
};

const SectionTag = ({ children, className }: SectionTagProps) => {
  return (
    <div className={cn("uppercase text-[10px] text-primary mb-2 tracking-[0.22em]", className)}>
      {children}
    </div>
  );
};

const SectionHeading = ({ children, className }: SectionHeadingProps) => {
  return (
    <h2 className={cn("font-serif text-[clamp(28px,5vw,52px)] mb-2", className)}>
      {children}
    </h2>
  );
};

const SectionSubheading = ({ children, className }: SectionSubheadingProps) => {
  return (
    <p className={cn("text-[14px] font-sans font-light leading-[1.7] max-w-130 mx-auto mt-6 mb-10", className)}>{children}</p>
  );
};

function SectionParagraph({ children, className }: SectionParagraphProps) {
  return <p className={cn("text-sm md:text-base text-foreground/70 mb-6", className)}>{children}</p>;
}

SectionLayout.Tag = SectionTag;
SectionLayout.Heading = SectionHeading;
SectionLayout.Subheading = SectionSubheading;
SectionLayout.Paragraph = SectionParagraph;

export default SectionLayout;
