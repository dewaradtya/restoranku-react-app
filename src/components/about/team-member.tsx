import React from 'react';
import { motion } from 'framer-motion';

const TeamMember = ({ image, name, position, description }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <div className="aspect-w-1 aspect-h-1">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-green-600 font-medium mb-3">{position}</p>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </motion.div>
    );
  };

export default TeamMember;
