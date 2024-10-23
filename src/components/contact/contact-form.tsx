import React, { useState } from 'react';
import { FaUser, FaMailBulk, FaEnvelope } from "react-icons/fa";
import FormField from './form-field';
import SubmissionSuccess from './submission';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleReset = () => setSubmitted(false);

  if (submitted) {
    return <SubmissionSuccess onReset={handleReset} />;
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-8 space-y-6">
      <FormField
        id="name"
        type="text"
        label="Nama Anda"
        icon={FaUser}
        value={formData.name}
        onChange={handleChange}
        onFocus={() => setFocused("name")}
        onBlur={() => setFocused("")}
        focused={focused}
      />

      <FormField
        id="email"
        type="email"
        label="Alamat Email"
        icon={FaMailBulk}
        value={formData.email}
        onChange={handleChange}
        onFocus={() => setFocused("email")}
        onBlur={() => setFocused("")}
        focused={focused}
      />

      <FormField
        id="message"
        type="textarea"
        label="Pesan Anda"
        icon={FaEnvelope}
        value={formData.message}
        onChange={handleChange}
        onFocus={() => setFocused("message")}
        onBlur={() => setFocused("")}
        focused={focused}
        rows={5}
      />

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-3 px-6 rounded-lg text-lg font-medium 
                 hover:bg-green-700 active:bg-green-800 
                 transform hover:scale-[1.02] active:scale-[0.98] 
                 transition-all duration-300"
      >
        Kirim Pesan
      </button>
    </form>
  );
};

export default ContactForm;