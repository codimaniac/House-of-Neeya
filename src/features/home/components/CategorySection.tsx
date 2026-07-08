import SectionLayout from "@/components/layout/SectionLayout";
import CategoryCard from "@/features/product/components/CategoryCard";

interface Category {
  name: string;
  src: string;
  alt: string;
};

const CategorySection = () => {
  const categories: Category[] = [
    {
      name: "Women's Foottwear",
      src: "https://res.cloudinary.com/dagamvlju/image/upload/v1782663463/women-s-day-still-life-with-makeup-jewelry_d6jbwv.jpg",
      alt: "Vintage Shirt",
    },
    {
      name: "Men's Footwear",
      src: "https://res.cloudinary.com/dagamvlju/image/upload/v1782663463/pair-brown-leather-boots_s0jjud.jpg",
      alt: "Vintage Shirt",
    },
    {
      name: "Clothing",
      src: "https://res.cloudinary.com/dagamvlju/image/upload/f_auto,q_auto/IMG-20260604-WA0048_m1lp9f",
      alt: "Vintage Shirt",
    },
    {
      name: "Handbags",
      src: "https://res.cloudinary.com/dagamvlju/image/upload/v1782662893/black-bag-with-scarf_ojmsr2.jpg",
      alt: "Vintage Shirt",
    },
  ];
  return (
    <SectionLayout className="flex flex-col items-center bg-white">
      <SectionLayout.Tag>Explore</SectionLayout.Tag>
      <SectionLayout.Heading>Shop by Category</SectionLayout.Heading>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {categories.map((category, key) => {
          return (
            <CategoryCard key={key}>
              <CategoryCard.Image
                src={category.src}
                alt={category.alt}
              />
              <CategoryCard.Details>
                <CategoryCard.Name>{category.name}</CategoryCard.Name>
                <CategoryCard.Link href="/shop">Shop Now →</CategoryCard.Link>
              </CategoryCard.Details>
            </CategoryCard>
          );
        })}
      </div>
    </SectionLayout>
  );
};

export default CategorySection;
