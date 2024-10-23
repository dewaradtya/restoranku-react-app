import React, { useState } from "react";
import Item from "./item";
import Category from "./category";
import menuItems from "./data";

const Menus = () => {
  const [selectedCategory, setSelectedCategory] = useState("Makanan");

  const categories = ["Makanan", "Minuman", "Dessert"];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow py-16">
        <Category
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="w-3/4 p-6">
          <h2 className="text-3xl font-bold mb-6">{selectedCategory}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems[selectedCategory].map((item, index) => (
              <Item key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menus;