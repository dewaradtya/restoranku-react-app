import React from 'react';
import CareerHero from './career-hero';
import CompanyValues from './company-values';
import JobListings from './job-listings';

const Careers = () => {
  return (
    <div className="min-h-screen">
      <CareerHero />
      <CompanyValues />
      <JobListings />
    </div>
  );
};

export default Careers;
