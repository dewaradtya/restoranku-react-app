import React from "react";

const EventImage = ({ promo }) => {
  return (
    <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
      <img
        src={promo.image}
        alt={promo.title}
        className="w-full h-96 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="absolute top-0 left-0 right-0 p-4">
        <div className="flex justify-end items-center">
          <p className="ml-4 rounded-full backdrop-blur-lg p-2 bg-black bg-opacity-20 text-white text-xs">
            Only on 10 Oct - 10 Nov 2024
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white text-xl font-semibold">{promo.title}</h3>
        <p className="text-white text-6xl mb-6 font-semibold">{promo.disc}%</p>
        <p className="text-white text-sm">*With terms and condition</p>
      </div>
    </div>
  );
};

export default EventImage;
