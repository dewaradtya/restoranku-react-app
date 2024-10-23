import React from 'react';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';

const Categories = () => {
    const categories = [
      {
        title: 'Akun & Keamanan',
        articles: [
          'Cara mengubah password',
          'Pengaturan privasi akun',
          'Verifikasi dua langkah'
        ]
      },
      {
        title: 'Pembayaran',
        articles: [
          'Metode pembayaran',
          'Pengembalian dana',
          'Masalah pembayaran'
        ]
      },
      {
        title: 'Pengiriman',
        articles: [
          'Cara melacak pesanan',
          'Estimasi waktu pengiriman',
          'Biaya pengiriman'
        ]
      },
      {
        title: 'Produk & Pesanan',
        articles: [
          'Cara membatalkan pesanan',
          'Pengembalian produk',
          'Status pesanan'
        ]
      }
    ];
  
    return (
      <div className="py-16 bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-12">Kategori Bantuan</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-yellow-200 transition-all duration-300">
                <h3 className="font-semibold text-xl mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.articles.map((article, idx) => (
                    <li key={idx}>
                      <button className="text-gray-600 hover:text-yellow-600 flex items-center group w-full text-left">
                        <FaArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {article}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
                <button className="mt-6 text-yellow-600 hover:text-yellow-700 font-medium inline-flex items-center">
                  Lihat semua
                  <FaExternalLinkAlt className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default Categories;