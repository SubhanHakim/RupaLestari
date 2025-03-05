import React, { useState } from "react";
import {
  FaChevronCircleDown,
  FaChevronDown,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";
import { FaHeartCircleCheck } from "react-icons/fa6";

const Bestseller = () => {
  const [isOpen, setIsOpen] = useState(false);
  const categories = ["ALL", "SHORTS", "JACKETS", "SHOES", "T-SHIRT"];
  return (
    <div className="relative pt-20 max-w-7xl pb-7 mx-auto">
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#89939E33] to-[#31343833]"></div>

      <div className="flex justify-between items-center">
        <h1 className="text-[#263238] mr-2 font-bold text-3xl md:text-4xl">
          BESTSELLER
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
          <div className="relative md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full text-white bg-[#263238] hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 flex items-center justify-between"
            >
              Select Category <FaChevronDown className="ml-2" />
            </button>

            {isOpen && (
              <div className="absolute left-0 mt-2 w-full bg-white divide-y divide-gray-100 rounded-lg shadow-lg z-10">
                <ul className="py-2 text-sm text-gray-700">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        onClick={() => {
                          setIsOpen(false);
                          console.log(category);
                        }}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="hidden md:flex space-x-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 border-1 text-sm font-semibold rounded-full transition
      ${
        category === "ALL"
          ? "border-[#263238] text-white bg-[#263238] hover:text-white"
          : "border-[#89939E] text-[#89939E] hover:bg-[#89939E] hover:text-white"
      }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-9 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl overflow-hidden w-full flex flex-col justify-between"
          >
            <div>
              <img
                src="./img/categories.png"
                alt="Nama Produk"
                className="w-full h-56 sm:h-60 md:h-74 object-cover rounded-2xl"
              />
            </div>
            <div className="py-3 flex flex-col flex-grow">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-sm text-gray-600">Brand Baju</h2>
                  <h1 className="text-lg font-semibold text-[#263238]">
                    Nama Produk
                  </h1>
                </div>
                <FaRegHeart className="text-[#263238] text-xl stroke-[#263238]" />
              </div>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-[#66BB69] font-bold text-md">Rp. 200.000</p>
                <p className="text-xs text-[#E53835]">12 item left</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bestseller;
