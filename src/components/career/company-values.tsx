import React from 'react';
import { FaUsers, FaBuilding, FaGraduationCap } from 'react-icons/fa';
import CompanyValue from './company-value';

const companyValues = [
  {
    icon: <FaUsers className="w-12 h-12 mb-4 text-green-800" />,
    title: 'Kerja Tim',
    description: 'Kami menghargai kolaborasi dan kerja sama tim dalam mencapai tujuan bersama.',
  },
  {
    icon: <FaBuilding className="w-12 h-12 mb-4 text-green-800" />,
    title: 'Lingkungan Inklusif',
    description: 'Menciptakan suasana kerja yang ramah dan mendukung perkembangan setiap karyawan.',
  },
  {
    icon: <FaGraduationCap className="w-12 h-12 mb-4 text-green-800" />,
    title: 'Pengembangan Karir',
    description: 'Kesempatan untuk berkembang dan meningkatkan kemampuan profesional.',
  },
];

const CompanyValues = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Budaya Perusahaan Kami</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {companyValues.map((value, index) => (
          <CompanyValue key={index} icon={value.icon} title={value.title} description={value.description} />
        ))}
      </div>
    </div>
  );
};

export default CompanyValues;
