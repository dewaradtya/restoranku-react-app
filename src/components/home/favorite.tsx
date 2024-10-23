import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import menuItems from "../../components/menu/data";
import { useNavigate } from "react-router-dom";

const Favorite = () => {
  const navigate = useNavigate();

  const limitedMenu = menuItems.Makanan.slice(0, 5);

  const handleDetails = (id) => {
    navigate(`/menu/${id}`);
  };

  const formatRupiah = (price) => {
    return price.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };

  return (
    <section className="py-16 px-4" id="favorite-menu">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            Menu Favorit Kami
          </h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto">
            Nikmati hidangan spesial pilihan kami yang telah memikat hati para pelanggan
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {limitedMenu.map((menu, index) => (
            <motion.div
              key={menu.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative">
                <img
                  src={menu.image}
                  alt={menu.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 left-0 bg-green-500 text-white px-3 py-1 rounded-br-lg text-sm font-semibold">
                  Favorit
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-stone-800 mb-2">
                  {menu.name}
                </h3>
                <p className="text-stone-600 text-sm mb-4 line-clamp-2">
                  {menu.description}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-green-600 font-bold text-lg">
                  {formatRupiah(menu.price)}
                  </p>
                  <button
                    onClick={() => handleDetails(menu.id)}
                    className="text-green-600 font-semibold flex items-center transition-colors duration-300 hover:text-green-700"
                  >
                    Selengkapnya <FaArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Favorite;
