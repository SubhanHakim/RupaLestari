import React from "react";

const Hero = () => {
  return (
    <section className="relative max-w-7xl mx-auto h-screen flex items-center px-9 bg-cover bg-center">
      <div className="z-10 w-full max-w-7xl mx-auto px-9 text-center md:text-left ">
        <h1 className="text-white max-w-3xl text-5xl md:text-7xl lg:text-8xl  font-bold font-serif">
          Thrift Trend And Treasure!
        </h1>
        <button className="mt-6 px-5 py-2 bg-white text-black text-xl font-semibold rounded-full shadow-lg hover:bg-gray-300 transition">
          Shop Now
        </button>
      </div>

      <div className="absolute inset-0 flex justify-end items-end">
        <img
          src="./img/heros.png"
          alt="Logo"
          className="h-auto w-[100%] md:w-[50%] sm:w-[80%] lg:w-[43%] object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
