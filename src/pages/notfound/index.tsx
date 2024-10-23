import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col justify-center items-center p-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="relative">
          <h1 className="text-8xl font-bold text-green-600 opacity-10">404</h1>
          <h1 className="text-8xl font-bold text-green-600 absolute top-1 left-1/2 -translate-x-1/2">
            404
          </h1>
        </div>

        <div className="mt-8 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Ups! Halaman Tidak Ditemukan
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Kami telah mencari ke mana-mana, tetapi tidak dapat menemukan apa
            yang Anda cari. Mari kita kembalikan ke jalur yang benar!
          </p>

          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors duration-200 gap-2"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
