import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaClock,
  FaLeaf,
  FaCreditCard,
  FaCalendar,
  FaTshirt,
} from "react-icons/fa";

const FaqItem = ({ question, answer, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 px-4 last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between gap-4 text-left hover:bg-gray-50/50 transition-colors duration-200"
      >
        <div className="flex items-center gap-4">
          <div className="hidden md:flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100">
            {icon && <icon.type className="h-5 w-5 text-green-600" />}
          </div>
          <span className="text-lg font-medium text-gray-900">{question}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-gray-500"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 pl-20 text-gray-600">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = () => {
  const faqData = [
    {
      question: "Apa kebijakan reservasi Anda?",
      answer:
        "Reservasi dapat dilakukan melalui website kami atau langsung di restoran. Kami mohon agar Anda tiba 15 menit sebelum waktu yang dijadwalkan. Untuk rombongan lebih dari 6 orang, silakan menghubungi kami langsung.",
      icon: <FaClock />,
    },
    {
      question: "Apakah kamu menawarkan pilihan vegetarian?",
      answer:
        "Ya, kami menawarkan berbagai hidangan vegetarian. Menu kami dengan jelas menandai pilihan vegetarian, dan koki kami dengan senang hati mengakomodasi pembatasan diet. Harap informasikan kepada server Anda tentang persyaratan spesifik apa pun.",
      icon: <FaLeaf />,
    },
    {
      question: "Metode pembayaran apa yang Anda terima?",
      answer:
        "Kami menerima semua kartu kredit/debit utama, pembayaran seluler (termasuk Apple Pay dan Google Pay), dan uang tunai. Untuk grup atau acara besar, kami juga menawarkan opsi pembayaran faktur.",
      icon: <FaCreditCard />,
    },
    {
      question: "Bisakah saya memesan untuk acara khusus?",
      answer:
        "Tentu saja! Kami mengkhususkan diri dalam menyelenggarakan acara khusus mulai dari perayaan intim hingga pertemuan perusahaan besar. Tim acara kami akan bekerja dengan Anda untuk menciptakan pengalaman yang disesuaikan dengan kebutuhan dan anggaran Anda.",
      icon: <FaCalendar />,
    },
    {
      question: "Apa kode berpakaianmu?",
      answer:
        "Meskipun kami tidak menerapkan aturan berpakaian yang ketat, kami merekomendasikan pakaian kasual yang cerdas. Kami ingin para tamu merasa nyaman dengan tetap menjaga suasana canggih di restoran kami.",
      icon: <FaTshirt />,
    },
  ];

  return (
    <section className="py-20 px-4">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">FAQ</h2>
            <p className="text-gray-600">
              Temukan jawaban atas pertanyaan umum tentang layanan kami. Jika
              Anda memerlukan bantuan lebih lanjut, jangan ragu untuk
              menghubungi kami secara langsung.
            </p>
          </motion.div>
        </div>

        <div className="bg-white rounded-xl shadow-lg">
          {faqData.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              icon={faq.icon}
            />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-600">
            Still have questions?
            <a
              href="#contact"
              className="text-blue-600 hover:text-blue-700 hover:underline ml-1 font-medium"
            >
              Contact our support team
            </a>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Faq;
