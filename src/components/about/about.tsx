import React from 'react';
import AboutHero from './about-hero';
import VisionMission from './vision-mission';
import TeamSection from './team-section';

const Abouts = () => {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <VisionMission />
      <TeamSection />
    </div>
  );
};

export default Abouts;
