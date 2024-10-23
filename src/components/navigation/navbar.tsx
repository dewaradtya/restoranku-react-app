import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaHome,
  FaShoppingCart,
  FaRegUser,
  FaPhoneAlt,
  FaRegListAlt,
  FaRegCalendar,
} from "react-icons/fa";
import Cart from "../cart/cart";
import { getCartItems } from "../../utils/cart";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const [cartItems, setCartItems] = useState([]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const totalItemsInCart = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navItems = [
    { name: "Home", icon: FaHome, link: "/" },
    { name: "Menu", icon: FaRegListAlt, link: "/menu" },
    { name: "Artikel", icon: FaRegCalendar, link: "/artikel" },
    { name: "Contact", icon: FaPhoneAlt, link: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all py-5 duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold text-green-600 tracking-wide"
          >
            RestoranKu
          </Link>
          <div className="hidden md:flex flex-grow justify-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className={`text-sm uppercase tracking-wider transition-colors duration-300 ${
                  location.pathname === item.link
                    ? "text-green-600"
                    : "text-stone-600 hover:text-green-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/profile" className="text-stone-600 hover:text-green-600">
              <FaRegUser className="h-5 w-5" />
            </Link>
            <button
              onClick={openCart}
              className="relative text-stone-600 hover:text-green-600"
            >
              <FaShoppingCart className="h-5 w-5" />
              {totalItemsInCart > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1">
                  {totalItemsInCart}
                </span>
              )}
            </button>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-green-600"
          >
            <FaBars className="h-5 w-5" />
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className={`flex items-center space-x-2 px-4 py-3 transition-colors duration-300 ${
                location.pathname === item.link
                  ? "text-green-600 bg-green-50"
                  : "text-stone-600 hover:bg-stone-100"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          ))}
          <div className="border-t">
            <Link
              to="/profile"
              className="flex items-center space-x-2 px-4 py-3 transition-colors duration-300 text-stone-600 hover:bg-stone-100"
            >
              <FaRegUser className="h-5 w-5" />
              <span>Profile</span>
            </Link>
            <button
              onClick={openCart}
              className="flex items-center space-x-2 px-4 py-3 w-full transition-colors duration-300 text-stone-600 hover:bg-stone-100"
            >
              <FaShoppingCart className="h-5 w-5" />
              <span>Cart</span>
            </button>
          </div>
        </div>
      )}
      <Cart isOpen={isCartOpen} onClose={closeCart} />
    </nav>
  );
};

export default Navbar;
