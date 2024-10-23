import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white py-12 overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 ml-4 relative sm:left-10">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Tentang Kami</h2>
          <p className="text-sm w-3/4 sm:w-full">
            Restoranku adalah aplikasi untuk memberikan kemudahan pada pelanggan
            dalam mendapatkan informasi dan memesan makanan dan minuman.
          </p>
          <p className="text-sm">Lokasi: Malang, Jawa Timur, Indonesia</p>
          <p className="text-sm">Email: inforestoranku@gmail.com</p>
        </div>

        <div className="space-y-4 relative md:left-10 lg:left-[5rem]">
          <h2 className="text-2xl font-semibold">Menu Lainnya</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/help" className="text-sm hover:text-green-400">
                Help
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-sm hover:text-green-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/karir" className="text-sm hover:text-green-400">
                Karir
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-sm hover:text-green-400">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Newsletter</h2>
          <p className="text-sm w-3/4">
            Mari berlangganan dan dapatkan informasi terbaru,
            pembaruan dan promosi.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Masukkan Email Anda"
              className="text-black py-2 px-3 rounded-l-md focus:outline-none"
            />
            <button className="bg-green-300 text-black py-2 px-4 rounded-r-md transition duration-300 ease-in-out">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>

      <div className="mr-20 text-end text-sm">
        &copy; 2024 Restoranku. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
