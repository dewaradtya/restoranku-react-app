import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getCartItems, clearCart } from "../../utils/cart";
import { CartHeader } from "./cart-header";
import { EmptyCart } from "./cart-empety";
import { CartItem } from "./cart-item";
import { CartFooter } from "./cart-footer";

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const updateQuantity = (id: number, change: number) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: Math.max(1, item.quantity + change) };
        }
        return item;
      });
    });
  };

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Kamu yakin ingin checkout?");
    clearCart(); 
    setCartItems([]); 
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 flex flex-col"
        >
          <CartHeader onClose={onClose} />

          <div className="flex-grow overflow-y-auto p-4">
            {cartItems.length === 0 ? (
              <EmptyCart />
            ) : (
              <ul className="space-y-4">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    {...item}
                    onUpdateQuantity={updateQuantity}
                    onRemoveItem={removeItem}
                  />
                ))}
              </ul>
            )}
          </div>

          <CartFooter totalPrice={totalPrice} onCheckout={handleCheckout} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cart;
