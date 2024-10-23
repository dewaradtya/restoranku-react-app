import React, { useState } from 'react';
import Search from './search';
import Category from './category';
import List from './list';
import artikels from './data';

const Artikel = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(artikels.map(artikel => artikel.category))];

  const filteredArtikels = artikels
    .filter(artikel => artikel.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(artikel => selectedCategory === 'All' || artikel.category === selectedCategory);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Artikel-artikel Menarik</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Temukan tips dan cerita menarik seputar kuliner yang menggugah selera.
        </p>
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Category 
            categories={categories} 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory} 
          />
        </div>

        <List filteredArtikels={filteredArtikels} />
      </div>
    </section>
  );
};

export default Artikel;
