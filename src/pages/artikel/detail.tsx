import React from "react";
import { Link, useParams } from "react-router-dom";
import artikels from "../../components/artikel/data";
import { FaCalendar, FaTag } from "react-icons/fa";

const ArtikelDetail = () => {
    const { id } = useParams();
    const artikel = id ? artikels.find((artikel) => artikel.id === parseInt(id)) : null;
    
    if (!artikel) return <div className="text-center text-2xl mt-20">artikel not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <article className="overflow-hidden">
        <img
          src={artikel.image}
          alt={artikel.title}
          className="w-full h-96 object-cover"
        />
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{artikel.title}</h1>
          <div className="flex items-center text-sm text-gray-600 mb-6">
            <span className="flex items-center mr-4">
              <FaCalendar className="w-4 h-4 mr-1" />
              {artikel.date}
            </span>
            <span className="flex items-center">
              <FaTag className="w-4 h-4 mr-1" />
              {artikel.category}
            </span>
          </div>
          <div className="prose prose-lg max-w-none">
            <p>{artikel.content}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArtikelDetail;