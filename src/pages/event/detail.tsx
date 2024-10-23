import React from "react";
import { useParams } from "react-router-dom";
import { events } from "../../components/event/data";
import EventImage from "../../components/event/image";
import EventTerms from "../../components/event/terms";
import Event from "../../components/home/event";

const EventDetail = () => {
  const { id } = useParams();
  const promo = id ? events.find((event) => event.id === parseInt(id)) : null;

  if (!promo) {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Error! </strong>
        <span className="block sm:inline">Promotion not found</span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="w-full max-w-4xl mx-auto overflow-hidden">
        <EventImage promo={promo} />
        <div className="p-6">
          <p className="text-lg mb-6">{promo.description}</p>
          <EventTerms terms={promo.termsAndConditions} />
        </div>
      </div>
      <Event />
    </div>
  );
};

export default EventDetail;