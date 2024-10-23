import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaClock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ArtikelCard = ({ artikel }) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/artikel/${artikel.id}`);
  };

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-md"
      layout
    >
      <div className="relative">
        <img src={artikel.image} alt={artikel.title} className="w-full h-56 object-cover" />
      </div>
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
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="text-gray-600 mb-4"
        >
          {artikel.excerpt}
        </motion.p>
        <motion.button
          onClick={handleReadMore}
          className="inline-flex items-center text-green-600 hover:text-green-800 transition-colors duration-200"
          whileHover={{ x: 5 }}
        >
          Lihat Selengkapnya
          <FaArrowRight className="w-4 h-4 ml-1" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ArtikelCard;
