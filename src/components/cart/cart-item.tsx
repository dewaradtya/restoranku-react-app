import React from "react";
import { motion } from "framer-motion";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { removeCartItem } from "../../utils/cart";

interface CartItemProps {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
  onUpdateQuantity: (id: number, change: number) => void;
  onRemoveItem: (id: number) => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  quantity,
  price,
  image,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  const handleRemoveItem = () => {
    removeCartItem(id);
    onRemoveItem(id);
  };

  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex items-center rounded-lg p-2"
    >
      <img
        src={image}
        alt={name}
        className="w-16 h-16 object-cover rounded-md mr-2"
      />
      <div className="flex-grow flex flex-col">
        <span className="font-medium">{name}</span>
        <span className="text-gray-600">
          {price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}{" "}
          x {quantity}
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <button onClick={() => onUpdateQuantity(id, -1)} className="text-black">
          <FaMinus className="h-4 w-4" />
        </button>
        <button onClick={() => onUpdateQuantity(id, 1)} className="text-black">
          <FaPlus className="h-4 w-4" />
        </button>
        <button onClick={handleRemoveItem} className="text-red-600">
          <FaTrash className="h-4 w-4" />
        </button>
      </div>
    </motion.li>
  );
};
