import React, { useState, useEffect } from 'react';
import { FaBell, FaGift } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const PromoModal = ({ isOpen, promoMessage, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 backdrop-blur-sm">
      <div 
        className={`relative w-full max-w-md transform transition-all duration-300 ${
          isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mx-4">
          <div className="bg-gradient-to-r from-green-600 to-green-500 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FaGift className="w-6 h-6 text-white" />
              <h2 className="text-xl font-bold text-white">Promo Spesial!</h2>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-green-100 transition-colors"
            >
              <FaX className="w-4 h-4" />
            </button>
          </div>

          <div className="p-6">
            <div className="bg-green-50 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <FaBell className="w-5 h-5 text-green-600 mt-0.5" />
                <p className="text-gray-700 leading-relaxed">{promoMessage}</p>
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Nanti Saja
              </button>
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2.5 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Lihat Promo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoModal;
