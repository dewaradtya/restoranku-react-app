import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Item = ({ item, index }) => {
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/menu/${item.id}`);
  };

  const formatRupiah = (price) => {
    return price.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative">
        <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-stone-800 mb-2">{item.name}</h3>
        <p className="text-stone-600 text-sm mb-4">{item.description}</p>
        <div className="flex justify-between items-center">
          <p className="text-green-600 font-bold text-lg">{formatRupiah(item.price)}</p>
          <button
            onClick={handleDetails}
            className="text-green-600 font-semibold flex items-center transition-colors duration-300 hover:text-green-700"
          >
            Selengkapnya <FaArrowRight className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Item;
