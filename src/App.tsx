import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";
import Navbar from "./components/navigation/navbar";
import Home from "./pages/home/page";
import Footer from "./components/footer";
import Profile from "./pages/profile/page";
import Menu from "./pages/menu/page";
import MenuDetail from "./pages/menu/detail";
import ScrollTop from "./components/scrolltop";
import ArtikelDetail from "./pages/artikel/detail";
import Artikels from "./pages/artikel/page";
import Contact from "./pages/contact/page";
import EventDetail from "./pages/event/detail";
import NotFound from "./pages/notfound";
import Faq from "./pages/faq/page";
import Career from "./pages/career/page";
import About from "./pages/about/page";
import HelpCenter from "./pages/help/page";
import PromoModal from "./components/promo";
import promos from "./components/promo/data";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [promoMessage, setPromoMessage] = useState("");

  const showRandomPromo = () => {
    const randomIndex = Math.floor(Math.random() * promos.length);
    setPromoMessage(promos[randomIndex].message);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      showRandomPromo();
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <ScrollTop />
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/:id" element={<MenuDetail />} />
            <Route path="/artikel" element={<Artikels />} />
            <Route path="/artikel/:id" element={<ArtikelDetail />} />
            <Route path="/event/:id" element={<EventDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/karir" element={<Career />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />

        <Link
          to="/help"
          className="fixed bottom-4 right-4 bg-green-600 text-white p-2 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 hover:scale-105"
        >
          <FaQuestion className="w-5 h-5" />
        </Link>

        <PromoModal
          isOpen={isModalOpen}
          promoMessage={promoMessage}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </Router>
  );
};

export default App;