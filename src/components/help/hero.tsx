import React from 'react';
import { FaSearch } from 'react-icons/fa';

const HelpHero = () => {
  return (
    <div className="relative bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 py-24">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Bagaimana kami dapat membantu?
          </h1>
          <div className="relative mt-8 max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Cari bantuan..."
              className="w-full p-4 rounded-full text-lg bg-white/90 backdrop-blur-sm border-0 focus:outline-none focus:ring-2 focus:ring-yellow-100 shadow-lg pl-14"
            />
            <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpHero