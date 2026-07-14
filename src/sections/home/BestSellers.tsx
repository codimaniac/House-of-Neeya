import { Button } from "@/components";
import SectionLayout from "@/components/layout/SectionLayout";
import ProductCard from "@/features/product/components/ProductCard";
import ProductGrid from "@/features/product/components/ProductGrid";
import { LatestProduct } from "@/features/product/types/product.types";
import { Heart } from "lucide-react";

const BestSellers = () => {
  const latestProducts: LatestProduct[] = [
    {
      id: "CLT-001",
      name: "Spilled Ink Vintage Shirt",
      description:
        "Ultra-lightweight cotton-rayon blend designed for ultimate comfort in warm weather",
      category: "Clothing",
      price: 12500,
      discountedPrice: undefined,
      images: {
        id: "img-001",
        src: "https://res.cloudinary.com/dagamvlju/image/upload/q_auto/f_auto/v1781863746/IMG-20260604-WA0005_tswqwq.jpg",
        alt: "Vintage Shirt",
      },
      tags: ["New"],
    },
    {
      id: "CLT-002",
      name: "Flowery Vintage Shirt",
      description:
        "Ultra-lightweight cotton-rayon blend designed for ultimate comfort in warm weather",
      category: "Clothing",
      price: 12500,
      discountedPrice: undefined,
      images: {
        id: "img-002",
        src: "https://res.cloudinary.com/dagamvlju/image/upload/q_auto/f_auto/v1781863746/IMG-20260604-WA0023_nlh91a.jpg",
        alt: "Vintage Shirt",
      },
      tags: ["New", "Best-Seller"],
    },
    {
      id: "CLT-003",
      name: "Hollow Man Vintage Shirt",
      description:
        "Ultra-lightweight cotton-rayon blend designed for ultimate comfort in warm weather",
      category: "Clothing",
      price: 12500,
      discountedPrice: undefined,
      images: {
        id: "img-003",
        src: "https://res.cloudinary.com/dagamvlju/image/upload/q_auto/f_auto/v1781863746/IMG-20260604-WA0007_ozxk5c.jpg",
        alt: "Vintage Shirt",
      },
      tags: ["New", "Sales"],
    },
    {
      id: "CLT-004",
      name: "Mystery Man Vintage Shirt",
      description:
        "Ultra-lightweight cotton-rayon blend designed for ultimate comfort in warm weather",
      category: "Clothing",
      price: 12500,
      discountedPrice: undefined,
      images: {
        id: "img-004",
        src: "https://res.cloudinary.com/dagamvlju/image/upload/f_auto,q_auto/IMG-20260604-WA0048_m1lp9f",
        alt: "Vintage Shirt",
      },
      tags: ["New", "Featured"],
    },
  ];

  return (
    <SectionLayout className="flex flex-col items-center bg-white">
      <SectionLayout.Tag>Most Loved</SectionLayout.Tag>
      <SectionLayout.Heading>Best Sellers</SectionLayout.Heading>
      <SectionLayout.Subheading className="text-center text-foreground/40">
        The pieces our customers keep coming back for.
      </SectionLayout.Subheading>
      <ProductGrid>
        {latestProducts.map((latestProduct, key) => {
          return (
            <ProductCard key={key}>
              <ProductCard.Image
                src={latestProduct.images.src}
                alt={latestProduct.images.alt}
              />
              <ProductCard.Tags>
                {latestProduct.tags?.map((tag, key) => {
                  return <ProductCard.Tag key={key}>{tag}</ProductCard.Tag>;
                })}
              </ProductCard.Tags>
              <ProductCard.Wishlist>
                <Heart size={16} className="fill-red-600 stroke-red-600" />
              </ProductCard.Wishlist>
              <ProductCard.Content>
                <ProductCard.Category>
                  {latestProduct.category}
                </ProductCard.Category>
                <ProductCard.Name>{latestProduct.name}</ProductCard.Name>
                <ProductCard.Price product={latestProduct} />
                <ProductCard.Description>
                  {latestProduct.description}
                </ProductCard.Description>
                <Button variant="secondary">Add to Cart</Button>
              </ProductCard.Content>
            </ProductCard>
          );
        })}
      </ProductGrid>
    </SectionLayout>
  );
};

export default BestSellers;
