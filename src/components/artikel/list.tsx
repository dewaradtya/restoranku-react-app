import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArtikelCard from './card';

const ArtikelList = ({ filteredArtikels }) => {
  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      layout
    >
      <AnimatePresence>
        {filteredArtikels.map((artikel) => (
          <motion.div
            key={artikel.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ArtikelCard artikel={artikel} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default ArtikelList;
