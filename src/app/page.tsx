import MainSlider from "../components/MainSlider/page";
import CategorySlider from "../components/CategorySlider/page";
import Featuredproducts from "../components/Featuredproducts/page";
export default function Home() {
  return (
    <main>
      <MainSlider />
      <CategorySlider />
      <Featuredproducts />
    </main>
  );
}