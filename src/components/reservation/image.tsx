import React from "react";
import { FaUtensils } from "react-icons/fa";

const ImageSection = () => (
  <div className="w-full lg:w-1/2 space-y-8">
    <div className="relative">
      <img
        src="/resto.jpg"
        alt="Signature Dish"
        className="rounded-2xl shadow-2xl w-full object-cover h-[400px]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent rounded-2xl">
        <div className="absolute bottom-0 p-8 text-white">
          <h3 className="text-2xl font-bold mb-2">Pengalaman Bersantap Istimewa</h3>
          <p className="text-green-100">Nikmati hidangan spesial kami dalam suasana yang elegan</p>
        </div>
      </div>
    </div>

    <div className="bg-green-500/50 p-6 rounded-xl">
      <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
        <FaUtensils className="text-green-400" />
        Informasi Reservasi
      </h4>
      <ul className="space-y-3 text-green-100">
        <li>• Reservasi tersedia untuk makan siang dan makan malam</li>
        <li>• Mohon hadir 15 menit sebelum waktu reservasi</li>
        <li>• Konfirmasi akan dikirim melalui email</li>
      </ul>
    </div>
  </div>
);

export default ImageSection;
