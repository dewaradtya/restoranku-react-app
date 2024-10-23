import React from 'react';
import { FaTimes } from "react-icons/fa";

interface CartHeaderProps {
  onClose: () => void;
}

export const CartHeader: React.FC<CartHeaderProps> = ({ onClose }) => {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <h1 className="text-xl font-semibold text-green-800">Keranjang</h1>
      <button onClick={onClose}>
        <FaTimes className="h-5 w-5 text-gray-700" />
      </button>
    </div>
  );
};