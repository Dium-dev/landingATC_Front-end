import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Blog from "@/components/Blog";
import BrandsCarousel from "@/components/BrandsCarousel";

export default function Home() {
  return (
    <main>
      <Banner />
      <Categories />
      <BrandsCarousel />
      <Blog />
    </main>
  );
}
