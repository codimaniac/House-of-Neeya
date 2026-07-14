import formatCurrency from "@/lib/formatCurrency";
import Image from "next/image";
import React from "react";
import { Product } from "../types/product.types";

type ProductCardProps = { children: React.ReactNode; className?: string };

type ProductImageProps = { src: string; alt: string; className?: string };

type ProductTagsProps = { children: React.ReactNode; className?: string };

type ProductTagProps = { children: React.ReactNode; className?: string };

type ProductWishlistProps = { children: React.ReactNode; className?: string };

type ProductCardContentProps = {
  children: React.ReactNode;
  className?: string;
};

type ProductCategoryProps = { children: React.ReactNode; className?: string };

type ProductNameProps = { children: React.ReactNode; className?: string };

type ProductPriceProps = { product: Partial<Product>; className?: string };

type ProductDescriptionProps = {
  children: React.ReactNode;
  className?: string;
};

type ProductColorProps = { children: React.ReactNode; className?: string };

type ProductSizeProps = { children: React.ReactNode; className?: string };

const ProductCard = ({ children, className }: ProductCardProps) => {
  return (
    <div
      className={`overflow-hidden relative w-full rounded-lg transition-all ease-in-out hover:shadow-lg hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
};

function ProductImage({ src, alt, className }: ProductImageProps) {
  return (
    <div className="relative aspect-4/5 w-full">
      <Image src={src} className={`object-cover ${className}`} alt={alt} fill />
    </div>
  );
}

function ProductTags({ children, className }: ProductTagsProps) {
  return (
    <div
      className={`absolute top-0 m-2 md:m-3 lg:m-4 flex flex-wrap gap-2 text-[8px] w-25 ${className}`}
    >
      {children}
    </div>
  );
}

function ProductTag({ children, className }: ProductTagProps) {
  return (
    <span
      className={`block py-1 px-2 uppercase rounded-sm bg-background/70 tracking-[0.22em] ${className}`}
    >
      {children}
    </span>
  );
}

function ProductWishlist({ children, className }: ProductWishlistProps) {
  return (
    <div
      className={`absolute flex top-0 right-0 m-2 md:m-3 lg:m-4 text-[8px] cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
}

function ProductCardContent({ children, className }: ProductCardContentProps) {
  return (
    <div className={`flex flex-col gap-2 p-2 md:p-3 lg:p-4 ${className}`}>
      {children}
    </div>
  );
}

function ProductCategory({ children, className }: ProductCategoryProps) {
  return (
    <div
      className={`uppercase text-[10px] text-foreground/60 tracking-[0.22em] ${className}`}
    >
      {children}
    </div>
  );
}

function ProductName({ children, className }: ProductNameProps) {
  return (
    <div
      className={`text-sm md:text-base lg:text-lg font-serif font-bold text-foreground line-clamp-1 ${className}`}
    >
      {children}
    </div>
  );
}

function ProductPrice({ product, className }: ProductPriceProps) {
  return (
    <div className="flex gap-4">
      {product.discountedPrice && (
        <div
          className={`text-[10px] md:text-xs lg:text-sm text-foreground ${className}`}
        >
          {formatCurrency(product.discountedPrice)}
        </div>
      )}
      <div
        className={`text-[10px] md:text-xs lg:text-sm text-foreground ${className} ${product.discountedPrice ? `line-through text-foreground/50` : undefined}`}
      >
        {product.price && formatCurrency(product.price)}
      </div>
    </div>
  );
}

function ProductDescription({ children, className }: ProductDescriptionProps) {
  return (
    <div
      className={`text-xs md:text-sm text-foreground/60 line-clamp-2 ${className}`}
    >
      {children}
    </div>
  );
}

function ProductColor({ children, className }: ProductColorProps) {
  return (
    <div className={`flex flex-col gap-4 p-6 ${className}`}>{children}</div>
  );
}

function ProductSize({ children, className }: ProductSizeProps) {
  return (
    <div className={`flex flex-col gap-4 p-6 ${className}`}>{children}</div>
  );
}

ProductCard.Image = ProductImage;
ProductCard.Tags = ProductTags;
ProductCard.Tag = ProductTag;
ProductCard.Wishlist = ProductWishlist;
ProductCard.Content = ProductCardContent;
ProductCard.Category = ProductCategory;
ProductCard.Name = ProductName;
ProductCard.Price = ProductPrice;
ProductCard.Description = ProductDescription;
ProductCard.Color = ProductColor;
ProductCard.Size = ProductSize;

export default ProductCard;
