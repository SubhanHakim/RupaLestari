import Bestseller from "../Components/Bestseller/Bestseller";
import Categories from "../Components/Categories/Categories";
import Hero from "../Components/Heros/Hero";
import Navbar from "../Components/Navbar/Navbar";

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
        </div>
    </div>
  )
};

export default Home;
