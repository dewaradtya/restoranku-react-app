import React from 'react';
import { motion } from 'framer-motion';

const VisionMission = () => {
    const cards = [
      {
        title: "Visi",
        content: "Menjadi restoran terdepan yang dikenal atas inovasi kuliner dan layanan pelanggan terbaik di Indonesia.",
        icon: () => (
          <svg className="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
      },
      {
        title: "Misi",
        content: [
          "Menyajikan hidangan berkualitas dengan bahan-bahan terbaik.",
          "Menciptakan lingkungan kerja yang inklusif dan mendukung.",
          "Memberikan pelayanan yang ramah dan cepat kepada setiap pelanggan.",
          "Mendukung komunitas lokal dan berkontribusi positif terhadap lingkungan."
        ],
        icon: () => (
          <svg className="w-12 h-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
          </svg>
        )
      }
    ];
  
    return (
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Visi dan Misi Kami
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col items-center">
                  {card.icon()}
                  <h3 className="text-2xl font-bold mt-6 mb-4">{card.title}</h3>
                  {Array.isArray(card.content) ? (
                    <ul className="space-y-3">
                      {card.content.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                            <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600 text-center">{card.content}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default VisionMission;
