import React from 'react';
import { FaBook, FaChevronRight, FaHeadset, FaUserTie } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Topics = () => {
    const topics = [
      {
        title: 'Cara Memulai',
        description: 'Panduan lengkap untuk pengguna baru',
        icon: FaBook,
        badge: 'Populer',
        link: '/faq'
      },
      {
        title: 'FAQ',
        description: 'Pertanyaan yang sering diajukan para pengguna',
        icon: FaHeadset,
        badge: 'Baru',
        link: '/faq'
      },
      {
        title: 'Lowongan',
        description: 'Informasi mengenai lowongan kami yang tersedia saat ini',
        icon: FaUserTie ,
        link: '/karir'
      }
    ];
  
    return (
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Topik Populer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-green-50 group-hover:bg-green-100 transition-colors duration-300">
                    <topic.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg">{topic.title}</h3>
                      {topic.badge && (
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                          {topic.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-4">{topic.description}</p>
                    <Link to={topic.link} className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
                      Pelajari lebih lanjut
                      <FaChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default Topics;