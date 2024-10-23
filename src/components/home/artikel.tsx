import React, { useState } from 'react';
import { FaArrowRight, FaClock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import artikels from '../artikel/data';

const ArtikelCard = ({ artikel }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/artikel/${artikel.id}`);
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <img src={artikel.image} alt={artikel.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-semibold bg-green-100 text-green-800 rounded-full px-3 py-1">
            {artikel.category}
          </span>
          <div className="flex items-center text-gray-500">
            <FaClock className="w-4 h-4 mr-1" />
            <span className="text-sm">{artikel.date}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{artikel.title}</h3>
        <p className="text-gray-600 mb-4">{artikel.excerpt}</p>
        <button
          onClick={handleReadMore}
          className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors duration-200"
        >
          Lihat Selengkapnya
          <FaArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
};

const Artikel = () => {
  const limitedArtikels = artikels.slice(0, 6);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center sm:text-left mb-4 px-2">Artikel Terbaru</h2>
        <p className="text-left text-gray-600 mb-12 max-w-2xl">
          Temukan tips dan cerita menarik seputar kuliner yang menggugah selera.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {limitedArtikels.map((artikel) => (
            <ArtikelCard key={artikel.id} artikel={artikel} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/artikel"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200"
          >
            Lihat Semua Artikel
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Artikel;
