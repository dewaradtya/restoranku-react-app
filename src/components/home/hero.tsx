import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaUtensils } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white py-20 px-4"
      id="hero"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">
        <motion.div
          className="w-full md:w-1/2 space-y-8 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block p-3 bg-green-100 rounded-full">
            <FaUtensils className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-stone-800 tracking-tight leading-tight">
            Nikmati Cita Rasa <span className="text-green-600">RestoranKu</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-md">
            Pengalaman kuliner yang memikat indera, menciptakan kenangan tak
            terlupakan di setiap hidangan.
          </p>
          <div className="pt-4">
            <Link
              to="/menu"
              className="px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-full hover:bg-green-700 transition-colors duration-300 inline-flex items-center gap-2"
            >
              Jelajahi Menu
              <FaArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative">
            <img
              src="/food.jpeg"
              alt="Hidangan Lezat RestoranKu"
              className="w-full h-auto rounded-2xl shadow-xl object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-md">
              <p className="text-yellow-500 font-bold text-xl">4.9 ⭐️</p>
              <p className="text-stone-600">Penilaian Pelanggan</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
