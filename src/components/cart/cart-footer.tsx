import React from 'react';

interface CartFooterProps {
  totalPrice: number;
  onCheckout: () => void;
}

export const CartFooter: React.FC<CartFooterProps> = ({ totalPrice, onCheckout }) => {
  return (
    <div className="p-4 border-t">
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-semibold">Total:</span>
        <span className="text-xl font-bold text-green-800">
          {totalPrice.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </span>
      </div>
      <button
        className="w-full bg-green-800 text-white py-2 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors duration-300"
        onClick={onCheckout}
      >
        Checkout
      </button>
    </div>
  );
};
