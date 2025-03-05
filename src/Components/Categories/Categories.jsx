import React from "react";

const Categories = () => {
  return (
    <div className="relative sm:pt-20 pt-10 max-w-7xl pb-10 mx-auto">
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#89939E33] to-[#31343833]"></div>

      <div className="flex justify-between items-center">
        <h1 className="text-[#263238] font-bold text-3xl mr-2 md:text-4xl">
          BROWSE CATEGORIES
        </h1>
        <div className="flex space-x-1 md:space-x-3">
          <button className="md:px-6 md:py-2 px-3 py-1 text-sm md:text-md border-2 border-[#263238] text-[#263238] font-semibold rounded-md hover:bg-[#263238] hover:text-white transition">
            MEN
          </button>
          <button className="md:px-6 md:py-2 px-3 py-1 text-sm md:text-md text-[#263238] font-semibold">
            WOMEN
          </button>
        </div>
      </div>

      <div className="mt-9 flex gap-6 mx-auto justify-center overflow-hidden">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`rounded-3xl overflow-hidden shadow-lg bg-white transition-all duration-300
            ${index === 3 ? "hidden lg:block" : ""} 
            ${index === 2 ? "hidden md:block" : ""} 
            ${index === 1 ? "hidden sm:block" : ""}`}
          >
            <div className="relative">
              <img
                src="./img/categories.png"
                alt="Blazers"
                className="h-[413px] w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent backdrop-blur-lg p-4">
                <h2 className="text-white text-2xl font-semibold">Blazers</h2>
                <p className="text-white text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
