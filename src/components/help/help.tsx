import React from 'react';
import Topics from './topic';
import Categories from './category';
import ContactSection from './contact';
import HelpHero from './hero';

const Help = () => {
    return (
      <div className="min-h-screen bg-white">
        <HelpHero />
        <Topics />
        <Categories />
        <ContactSection />
      </div>
    );
  };
  
  export default Help;