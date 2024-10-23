import React from 'react';
import { FaArrowRight, FaBook, FaChevronRight, FaComment, FaEnvelope, FaExternalLinkAlt, FaHeadset, FaPhone, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactSection = () => {
    const contactMethods = [
      {
        icon: FaPhone,
        title: 'Telepon',
        description: 'Bicara langsung dengan tim support kami',
        action: '+1 234 567 890',
        availability: '24/7'
      },
      {
        icon: FaEnvelope,
        title: 'Email',
        description: 'Kirim pertanyaan Anda melalui email',
        action: 'inforestoranku@gmail.com',
        availability: 'Respon dalam 24 jam'
      },
      {
        icon: FaComment,
        title: 'Live Chat',
        description: 'Chat langsung dengan tim kami',
        action: 'Mulai Chat',
        availability: 'Online 09.00 - 17.00'
      }
    ];
  
    return (
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Masih Butuh Bantuan?</h2>
          <p className="text-gray-600 text-center mb-12">Tim support kami siap membantu Anda</p>
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white text-center p-8 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 mb-6">
                  <method.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <div className="font-medium text-green-600 mb-2">{method.action}</div>
                <p className="text-sm text-gray-500">{method.availability}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default ContactSection;