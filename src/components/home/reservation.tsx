import React, { useState } from "react";
import ImageSection from "../reservation/image";
import ReservationForm from "../reservation/form";
import ConfirmationMessage from "../reservation/confirmation";
import { motion } from "framer-motion";

const Reservation = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (formData) => {
    console.log(formData);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-16 px-4 bg-green-800 min-h-screen" id="reservation">
      <motion.div className="max-w-6xl mx-auto" initial="hidden" animate="visible">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <ImageSection />
          <motion.div className="w-full lg:w-1/2">
            {submitted ? <ConfirmationMessage /> : <ReservationForm onSubmit={handleFormSubmit} />}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Reservation;
