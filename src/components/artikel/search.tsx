import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative w-full md:w-1/4 mb-4 md:mb-0">
      <input
        type="text"
        placeholder="Cari artikel..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full py-2 px-4 pr-10 rounded-full border-2 border-gray-300 focus:outline-none focus:border-green-500"
      />
      <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  );
};

export default Search;
