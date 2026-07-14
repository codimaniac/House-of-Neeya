import { Marquee } from "@/components";
import {
  BestSellers,
  CategorySection,
  Hero,
  NewArrivalsSection,
  Newsletter,
  ReviewSection,
  TheNeeyaWay,
} from "@/sections/home";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee tagline="Style • Curated • Delivered • New Arrivals • Free Shipping •" />
      <CategorySection />
      <NewArrivalsSection />
      <TheNeeyaWay />
      <BestSellers />
      <ReviewSection />
      <Newsletter />
    </>
  );
}
