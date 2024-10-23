import React from 'react';
import { FaPhone, FaMapPin, FaClock } from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaPhone className="w-5 h-5" />,
    title: "Hubungi Kami",
    content: "+1 234 567 890",
  },
  {
    icon: <FaMapPin className="w-5 h-5" />,
    title: "Lokasi",
    content: "123 Business Street",
  },
  {
    icon: <FaClock className="w-5 h-5" />,
    title: "Jam Kerja",
    content: "Sen - Jum, 09.00 - 17.00",
  },
];

const ContactInfoCard = ({ icon, title, content }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-md transition-shadow duration-300">
    <div className="flex items-center space-x-4">
      <div className="bg-green-100 p-3 rounded-full text-green-600">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-gray-800">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  </div>
);

const ContactInfo = () => (
  <div className="space-y-6">
    {contactInfo.map((info, index) => (
      <ContactInfoCard key={index} {...info} />
    ))}
  </div>
);

export default ContactInfo;
