import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Blog from "@/components/Blog";
import BrandsCarousel from "@/components/BrandsCarousel";
import { Reviews } from "@/components/Reviews";
import { ReviewsSkeleton } from "@/components/Reviews/ReviewsSkeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Banner />
      <Categories />
      <BrandsCarousel />
      <Blog />
      <Suspense fallback={<ReviewsSkeleton />}>
        <Reviews />
      </Suspense>
    </main>
  );
}
