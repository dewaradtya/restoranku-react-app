import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const ConfirmationMessage = () => (
  <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-green-500/50 p-8 rounded-2xl text-center">
    <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
      <FaCheck className="w-8 h-8 text-green-900" />
    </div>
    <h3 className="text-2xl font-bold text-white mb-2">Reservasi Berhasil!</h3>
    <p className="text-green-100">Terima kasih telah melakukan reservasi. Konfirmasi akan dikirim melalui email.</p>
  </motion.div>
);

export default ConfirmationMessage;
