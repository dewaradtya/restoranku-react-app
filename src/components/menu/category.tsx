import React from "react";

const Category = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="w-1/4 p-6">
      <h2 className="text-2xl font-bold mb-6">Menu</h2>
      <ul className="space-y-4">
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`cursor-pointer p-2 rounded-lg hover:bg-green-100 transition ${
              selectedCategory === category ? "bg-green-300" : ""
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
