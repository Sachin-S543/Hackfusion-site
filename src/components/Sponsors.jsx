import React from 'react';
import { motion } from 'framer-motion';

export default function Sponsors() {
  const partners = [
    {
      name: 'VETIAS',
      role: 'Host Institution & Venue',
      src: '/assets/images/vetias_logo_new.png',
      url: 'https://vetias.ac.in/'
    },
    {
      name: 'StartupTN',
      role: 'Main Co-Organizer',
      src: '/assets/images/startuptn_logo.png',
      url: 'https://startuptn.in/'
    },
    {
      name: 'IQAC',
      role: 'Quality Assurance Partner',
      src: '/assets/images/iqac_logo.png'
    },
    {
      name: 'Innovation Hub',
      role: 'Incubation Partner',
      src: '/assets/images/innovation_hub_logo.png'
    },
    {
      name: 'SDG Goals',
      role: 'Sustainability Framework',
      src: '/assets/images/sdg_logo.png'
    },
    {
      name: 'TNJUG',
      role: 'Ecosystem Tech Partner',
      src: '/assets/images/tnjug_logo.png'
    },
    {
      name: 'Our Kadai',
      role: 'Technology Collaborator',
      src: '/assets/images/our_kadai_logo.png'
    }
  ];

  return (
    <section id="sponsors" className="relative w-full py-20 px-6 md:px-12 scroll-mt-20 border-b border-white/5 bg-[#071322]/10">
      <div className="absolute top-[30%] left-[5%] w-[350px] h-[350px] bg-[radial-gradient(circle,rgba(124,92,255,0.05)_0%,rgba(124,92,255,0)_70%)] -z-10 animate-pulse-slow"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accentCyan font-spaceGrotesk text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-3 block">
            Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-spaceGrotesk text-white uppercase tracking-wider mb-4">
            CO-ORGANISERS & SPONSORS
          </h2>
          <p className="text-textSecondary max-w-xl mx-auto text-sm">
            Empowered by government, academic, and technology community organizations.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              className="glass-card rounded-2xl p-6 border-white/5 flex flex-col items-center justify-between text-center relative group"
              whileHover={{ y: -4, border: '1px solid rgba(255, 255, 255, 0.12)' }}
              transition={{ duration: 0.3 }}
            >
              {/* Soft background blue radial glow on hover */}
              <div className="absolute inset-0 bg-accentBlue/0 group-hover:bg-accentBlue/5 rounded-2xl transition-all duration-300 -z-10"></div>
              
              {/* Logo block */}
              <div className="h-24 w-full flex items-center justify-center mb-4 bg-white rounded-xl p-2 shadow-md border border-white/10 select-none">
                <img 
                  src={partner.src} 
                  alt={partner.name} 
                  className="max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Title & Role */}
              <div>
                <h4 className="font-spaceGrotesk text-sm font-bold text-white tracking-wide mb-1">
                  {partner.name}
                </h4>
                <p className="text-textSecondary text-[11px] uppercase tracking-wider font-semibold">
                  {partner.role}
                </p>
              </div>

              {/* Link if available */}
              {partner.url && (
                <a 
                  href={partner.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="absolute inset-0 z-10"
                  aria-label={`Visit ${partner.name}`}
                ></a>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
