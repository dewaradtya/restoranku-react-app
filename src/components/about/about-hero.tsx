import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <div className="relative py-24 bg-gradient-to-b from-green-50 to-white overflow-hidden">
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-6xl font-bold mb-6 text-green-600">
            Tentang Kami
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Kami adalah perusahaan yang berdedikasi dalam memberikan pengalaman kuliner terbaik 
            dan menciptakan inovasi dalam setiap layanan kami.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHero;
