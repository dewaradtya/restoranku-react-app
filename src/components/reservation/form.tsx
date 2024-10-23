import React, { useState } from "react";
import InputField from "./input-field";
import TimeSlot from "./time-slot";
import { motion } from "framer-motion";
import { FaUser, FaCalendar, FaUsers } from "react-icons/fa";

const timeSlots = ["11:00", "12:00", "13:00", "14:00", "17:00", "18:00", "19:00", "20:00"];

const ReservationForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: 2,
    specialRequests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTimeSelect = (time) => {
    setFormData((prev) => ({ ...prev, time }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-green-500/50 p-8 rounded-2xl">
      <h2 className="text-3xl font-bold text-white mb-8">Buat Reservasi</h2>

      <InputField
        icon={FaUser}
        label="Nama Lengkap"
        type="text"
        name="name"
        placeholder="Masukkan nama Anda"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <InputField
        icon={FaCalendar}
        label="Tanggal Reservasi"
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        min={new Date().toISOString().split("T")[0]}
        required
      />

      <div className="mb-6">
        <label className="block text-green-100 text-sm font-medium mb-2">Waktu Reservasi</label>
        <div className="grid grid-cols-4 gap-2">
          {timeSlots.map((time) => (
            <TimeSlot key={time} time={time} selected={formData.time === time} onClick={handleTimeSelect} />
          ))}
        </div>
      </div>

      <InputField
        icon={FaUsers}
        label="Jumlah Tamu"
        type="text"
        name="guests"
        min="1"
        max="10"
        value={formData.guests}
        onChange={handleChange}
        required
      />

      <div className="mb-6">
        <label className="block text-green-100 text-sm font-medium mb-2">Permintaan Khusus</label>
        <textarea
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          className="w-full p-3 border border-green-600 rounded-lg bg-green-900/50 text-white placeholder-green-300 focus:ring-2 focus:ring-green-400 focus:border-green-400 transition duration-200"
          placeholder="Sebutkan jika ada permintaan khusus..."
        />
      </div>

      <motion.button
        type="submit"
        className="w-full bg-green-200 text-green-900 py-3 px-6 rounded-lg font-semibold hover:bg-green-100 transition duration-200"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Konfirmasi Reservasi
      </motion.button>
    </form>
  );
};

export default ReservationForm;
