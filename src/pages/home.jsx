import Bestseller from "../Components/Bestseller/Bestseller";
import Categories from "../Components/Categories/Categories";
import Hero from "../Components/Heros/Hero";
import Navbar from "../Components/Navbar/Navbar";
import HeroMid from "../Components/Hero2";
import Trends from "../Components/Trends";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#2C3E50]">
        <Hero />
      </div>
      <div className="px-3">
        <Categories />
        <Bestseller />
        <HeroMid />
        <Trends />
      </div>
    </div>
  );
};

export default Home;
