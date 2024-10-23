import React, { useState } from "react";
import { useParams } from "react-router-dom";
import menuItems from "../../components/menu/data";
import { FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";
import { addToCart } from "../../utils/cart";

const MenuDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);

  const allItems = [
    ...menuItems.Makanan,
    ...menuItems.Minuman,
    ...menuItems.Dessert,
  ];

  const item = id ? allItems.find((item) => item.id === parseInt(id)) : undefined;

  if (!item) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-3xl font-bold text-gray-800">Item tidak ditemukan!</p>
      </div>
    );
  }

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1));
  
  const handleAddToCart = () => {
    addToCart(item, quantity);
    console.log(`Added ${quantity} ${item.name} to cart`);
    alert(`Berhasil menambahkan ${quantity} ${item.name} ke keranjang!`);
  };

  const formatRupiah = (price) => {
    return price.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };

  return (
    <div className="container mx-auto py-20 px-4 min-h-screen flex items-center">
      <div className="rounded-3xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-4 text-gray-800">{item.name}</h1>
              <p className="text-3xl font-semibold mb-6 text-green-600">{formatRupiah(item.price)}</p>
              <h2 className="text-2xl font-semibold mb-3 text-gray-700">Deskripsi Produk</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">{item.description}</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between bg-gray-100 rounded-full p-2">
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDecrement} 
                  className="bg-white text-green-600 p-3 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <FaMinus className="h-5 w-5" />
                </motion.button>
                <input 
                  type="text" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 text-center bg-transparent text-xl font-semibold" 
                />
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  onClick={handleIncrement} 
                  className="bg-white text-green-600 p-3 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <FaPlus className="h-5 w-5" />
                </motion.button>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-green-600 text-white py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-green-700 transition-colors duration-300 flex items-center justify-center space-x-2" 
                onClick={handleAddToCart}
              >
                <FaShoppingCart className="h-5 w-5" />
                <span>Tambahkan ke Keranjang</span>
              </motion.button>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDetail;
