import React from "react";
import { motion } from "framer-motion";

const TimeSlot = ({ time, selected, onClick }) => (
  <motion.button
    type="button"
    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${
                  selected
                    ? "bg-green-400 text-green-900"
                    : "bg-green-900/50 text-green-100 hover:bg-green-700"
                }`}
    onClick={() => onClick(time)}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {time}
  </motion.button>
);

export default TimeSlot;
