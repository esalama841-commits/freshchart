import MainSlider from "@/components/MainSlider/page";
import CategorySlider from "@/components/CategorySlider/page";
import FeaturedProducts from "@/components/FeaturedProducts/page";

export default function Home() {
  return (
    <main>
      <MainSlider />
      <CategorySlider />
      <FeaturedProducts />
    </main>
  );
}