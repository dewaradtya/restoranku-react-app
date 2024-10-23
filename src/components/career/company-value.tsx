import React from 'react';

const CompanyValue = ({ icon, title, description }) => {
  return (
    <div className="text-center p-6 border border-gray-300 rounded-lg shadow-sm">
      <div className="flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default CompanyValue;
