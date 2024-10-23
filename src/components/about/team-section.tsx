import React from 'react';
import TeamMember from './team-member';
import { motion } from 'framer-motion';

const TeamSection = () => {
    const teamMembers = [
      {
        name: 'John Doe',
        position: 'CEO & Founder',
        description: 'John adalah pendiri perusahaan yang berpengalaman lebih dari 15 tahun dalam industri kuliner.',
        image: '/person.jpg',
      },
      {
        name: 'Jane Smith',
        position: 'Head of Marketing',
        description: 'Jane bertanggung jawab atas strategi pemasaran dan pengembangan brand perusahaan.',
        image: '/person2.jpg',
      },
      {
        name: 'Michael Brown',
        position: 'Head Chef',
        description: 'Michael adalah kepala koki yang ahli dalam menciptakan hidangan inovatif dan lezat.',
        image: '/chef.jpg',
      },
    ];
  
    return (
      <div className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Tim Kami
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                {...member}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
export default TeamSection;
