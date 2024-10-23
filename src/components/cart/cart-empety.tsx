import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

export const EmptyCart: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-500">
      <FaShoppingCart className="h-16 w-16 mb-2" />
      <p>Keranjang Anda kosong.</p>
    </div>
  );
};