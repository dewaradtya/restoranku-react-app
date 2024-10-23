import React from "react";
import { FaSearch } from "react-icons/fa";

const CareerHero = () => {
  return (
    <div className="relative bg-gradient-to-br from-green-300 via-green-400 to-green-500 py-24">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Bergabunglah dengan Tim Kami
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Mari menjadi bagian dari perjalanan kami dalam menciptakan
            pengalaman kuliner yang tak terlupakan
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerHero;
