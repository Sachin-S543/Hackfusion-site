import React from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const partners = [
    { name: 'IQAC', src: '/assets/images/iqac_logo.png' },
    { name: 'SDG Goals', src: '/assets/images/sdg_logo.png' },
    { name: 'Innovation Hub', src: '/assets/images/innovation_hub_logo.png' },
  ];

  return (
    <header className="w-full py-5 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 z-40 relative border-b border-white/5 bg-[#071322]/40 backdrop-blur-md">
      {/* Left side: VETIAS College Brand */}
      <div className="flex items-center">
        <motion.img 
          src="/assets/images/vetias_logo_new.png" 
          alt="VETIAS Logo" 
          className="h-[65px] md:h-[70px] w-auto object-contain bg-white rounded-xl px-4 py-1.5 shadow-md border border-white/20"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      {/* Vertical divider on desktop, horizontal on mobile */}
      <div className="hidden lg:block h-12 w-[1px] bg-white/15 mx-4" />

      {/* Right side: Partner Logos */}
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            className="relative"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, filter: 'drop-shadow(0 0 10px rgba(0, 229, 255, 0.4))' }}
          >
            {partner.name === 'Innovation Hub' ? (
              <div className="w-[45px] md:w-[52px] h-[45px] md:h-[52px] rounded-full bg-white flex items-center justify-center border border-white/20 shadow-md overflow-hidden select-none">
                <img 
                  src={partner.src} 
                  alt={partner.name} 
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <img 
                src={partner.src} 
                alt={partner.name} 
                className="h-[45px] md:h-[52px] w-auto object-contain rounded-md filter brightness-95 hover:brightness-100 transition-all duration-300"
              />
            )}
          </motion.div>
        ))}
      </div>
    </header>
  );
}
