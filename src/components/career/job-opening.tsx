import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const JobOpening = ({ job }) => {
  return (
    <div className="p-6 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="mb-4">
        <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
        <div className="flex gap-2 mb-4">
          <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full">{job.type}</span>
          <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full">{job.location}</span>
          <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-full">{job.department}</span>
        </div>
      </div>

      <p className="text-gray-600 mb-6">{job.description}</p>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2">Kualifikasi:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {job.requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Cara Melamar:</h4>
          <div className="flex items-center gap-2 text-green-800">
            <FaEnvelope className="w-4 h-4" />
            <span>{job.howToApply}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOpening;
