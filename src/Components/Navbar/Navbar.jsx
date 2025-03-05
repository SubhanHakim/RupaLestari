import { useState, useEffect } from "react";
import { FaShoppingCart, FaRegUser, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 ${
        scrolling ? "bg-[#2C3E50] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold text-white">RupaLestari</div>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li className="border-b border-gray-400 hover:text-gray-300 transition cursor-pointer text-white">
            Home
          </li>
          <li className="hover:text-gray-300 transition cursor-pointer text-white">
            Challenge
          </li>
          <li className="hover:text-gray-300 transition cursor-pointer text-white">
            Article
          </li>
          <li className="hover:text-gray-300 transition cursor-pointer text-white">
            Blog
          </li>
          <li className="hover:text-gray-300 transition cursor-pointer text-white">
            Contact
          </li>
        </ul>

        <div className="hidden md:flex space-x-6">
          <FaShoppingCart className="text-xl text-white cursor-pointer hover:text-gray-300 transition" />
          <FaRegUser className="text-xl text-white cursor-pointer hover:text-gray-300 transition" />
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#2C3E50] shadow-md p-4">
          <ul className="flex flex-col space-y-4 text-lg font-medium text-white">
            <li className="border-b border-gray-400 hover:text-gray-300 transition cursor-pointer">
              Home
            </li>
            <li className="hover:text-gray-300 transition cursor-pointer">
              Challenge
            </li>
            <li className="hover:text-gray-300 transition cursor-pointer">
              Article
            </li>
            <li className="hover:text-gray-300 transition cursor-pointer">
              Blog
            </li>
            <li className="hover:text-gray-300 transition cursor-pointer">
              Contact
            </li>
          </ul>
          <div className="flex justify-center space-x-6 mt-4">
            <FaShoppingCart className="text-xl text-white cursor-pointer hover:text-gray-300 transition" />
            <FaRegUser className="text-xl text-white cursor-pointer hover:text-gray-300 transition" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
