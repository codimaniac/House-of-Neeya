import Image from "next/image";
import Link from "next/link";
import React from "react";

type CategoryCardProps = { children: React.ReactNode; className?: string };

type CategoryImageProps = { src: string; alt: string; className?: string };

type CategoryDetailsProps = { children: React.ReactNode; className?: string };

type CategoryNameProps = { children: React.ReactNode; className?: string };

type CategoryLinkProps = { children: React.ReactNode; href: string; className?: string };

const CategoryCard = ({ children, className }: CategoryCardProps) => {
  return (
    <div
      className={`relative aspect-4/5 w-full rounded-lg overflow-hidden transition-all ease-in-out hover:shadow-lg hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
};

function CategoryImage({ src, alt, className }: CategoryImageProps) {
  return (
    <Image src={src} alt={alt} className={`object-cover ${className}`} fill />
  );
}

function CategoryDetails({children, className}: CategoryDetailsProps) {
    return (
        <div className={`absolute bottom-0 left-0 p-3 flex flex-col gap-2 bg-linear-to-t from-foreground/70 to-transparent w-full h-full ${className}`}>
            {children}
        </div>
    )
}

function CategoryName({ children, className }: CategoryNameProps) {
  return (
    <span
      className={`text-background font-bold font-serif mt-auto ${className}`}
    >
      {children}
    </span>
  );
}

function CategoryLink({ children, href, className }: CategoryLinkProps) {
  return (
    <Link
      className={`uppercase text-[10px] text-primary tracking-[0.22em] border-b border-b-primary pb-2 w-fit ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
}

CategoryCard.Image = CategoryImage;
CategoryCard.Details = CategoryDetails;
CategoryCard.Name = CategoryName;
CategoryCard.Link = CategoryLink;

export default CategoryCard;
