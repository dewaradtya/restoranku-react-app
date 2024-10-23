import React from 'react';

interface CategoryProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const Category: React.FC<CategoryProps> = ({ 
  categories, 
  selectedCategory, 
  setSelectedCategory 
}) => {
  return (
    <div className="w-full sm:w-3/4">
      <div className="flex space-x-2 px-2 overflow-x-auto pb-2
                    snap-x snap-mandatory">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`
              px-3 py-1.5 snap-start rounded-3xl text-sm font-medium whitespace-nowrap
              min-w-fit transform transition-colors duration-200
              sm:px-4 sm:py-2
              md:px-5 md:py-2 md:text-base
              ${
                selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'border border-gray-100 text-gray-800 hover:border-gray-200'
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;