import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
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
      <Footer />
    </main>
  );
}
