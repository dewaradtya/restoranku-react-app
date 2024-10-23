import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Ayu Setiawan",
    text: "Makanan di RestoranKu sangat lezat! Pengalaman kuliner yang tak terlupakan.",
    rating: 5,
  },
  {
    id: 2,
    name: "Budi Santoso",
    text: "Pelayanan yang ramah dan cepat. Tempat yang nyaman untuk bersantai.",
    rating: 4,
  },
  {
    id: 3,
    name: "Citra Dewi",
    text: "Menu variatif dan rasa yang luar biasa. Pasti akan kembali lagi!",
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Apa Kata Pelanggan Kami</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
            >
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
              <div className="flex justify-between items-center mt-4">
                <span className="font-semibold text-gray-800">{testimonial.name}</span>
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <span key={index} className="text-yellow-500">&#9733;</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
