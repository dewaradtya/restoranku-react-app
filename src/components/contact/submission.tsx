import React from 'react';
import { FaCheckCircle } from "react-icons/fa";

const SubmissionSuccess = ({ onReset }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg text-center space-y-4 animate-fade-in">
    <div className="flex justify-center">
      <FaCheckCircle className="w-16 h-16 text-green-500" />
    </div>
    <h3 className="text-2xl font-bold text-gray-800">
      Terima Kasih!
    </h3>
    <p className="text-gray-600">
      Pesan Anda telah berhasil terkirim. Kami akan kembali ke kamu segera!
    </p>
    <button
      onClick={onReset}
      className="text-green-600 hover:text-green-700 font-medium"
    >
      Kirim pesan lain
    </button>
  </div>
);

export default SubmissionSuccess;