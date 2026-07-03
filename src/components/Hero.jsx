import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[90vh] flex flex-col items-center justify-center py-12 px-4 overflow-hidden">
      {/* Background Glows Specific to Hero */}
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] max-w-[800px] h-[350px] bg-gradient-to-r from-accentBlue/20 via-accentPurple/25 to-accentCyan/15 blur-[120px] rounded-full -z-10 animate-pulse-slow"></div>

      {/* Hero Layout Container */}
      <div className="relative w-full max-w-5xl flex flex-col items-center justify-center text-center z-10">
        
        {/* Floating Code Asset (Left Side) */}
        <motion.div 
          className="absolute left-[-2%] top-[10%] hidden lg:flex flex-col items-center select-none"
          animate={{
            y: [0, -15, 0],
            rotate: [-8, -5, -8],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Glass Card containing code icon */}
          <div className="relative w-20 h-20 rounded-2xl glass-panel border-white/10 flex items-center justify-center shadow-blueGlow transform rotate-[-8deg]">
            <span className="font-spaceGrotesk text-2xl font-bold text-accentCyan text-glow-cyan">&lt;/&gt;</span>
            
            {/* Soft background glow */}
            <div className="absolute inset-0 bg-accentBlue/5 rounded-2xl filter blur-sm -z-10"></div>
          </div>
          {/* Cyber circuit paths */}
          <svg width="100" height="100" className="absolute top-16 left-10 opacity-35 -z-20" viewBox="0 0 100 100" fill="none">
            <path d="M 0,0 L 40,40 L 40,80" stroke="#2D7FF9" strokeWidth="1.5" strokeDasharray="3 3"/>
            <circle cx="40" cy="80" r="3" fill="#00E5FF"/>
          </svg>
        </motion.div>

        {/* Floating 3D Purple Cube (Right Side) */}
        <motion.div 
          className="absolute right-[-4%] top-[12%] hidden lg:flex flex-col items-center select-none"
          animate={{
            y: [0, 18, 0],
            rotate: [12, 16, 12],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Transparent Purple Cube SVG */}
          <div className="w-24 h-24 filter drop-shadow-[0_0_20px_rgba(124,92,255,0.45)]">
            <svg viewBox="0 0 100 100" width="100%" height="100%">
              {/* Top Face */}
              <polygon points="50,15 85,32 50,50 15,32" fill="rgba(124, 92, 255, 0.25)" stroke="#7C5CFF" strokeWidth="1.5" />
              {/* Left Face */}
              <polygon points="15,32 50,50 50,85 15,67" fill="rgba(124, 92, 255, 0.35)" stroke="#7C5CFF" strokeWidth="1.5" />
              {/* Right Face */}
              <polygon points="50,50 85,32 85,67 50,85" fill="rgba(124, 92, 255, 0.45)" stroke="#7C5CFF" strokeWidth="1.5" />
              
              {/* Inner Glowing Core */}
              <circle cx="50" cy="50" r="8" fill="#00E5FF" className="animate-pulse shadow-cyanGlow" />
            </svg>
          </div>
        </motion.div>

        {/* Huge event title "HACK FUSION" */}
        <div className="flex flex-col items-center">
          {/* HACK - Metallic 3D Block Text */}
          <motion.h1 
            className="font-spaceGrotesk text-[64px] sm:text-[105px] md:text-[140px] lg:text-[160px] font-black tracking-[4px] sm:tracking-[8px] leading-none uppercase select-none metallic-text drop-shadow-[0_8px_30px_rgba(45,127,249,0.3)]"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            HACK
          </motion.h1>

          {/* FUSION - Brush Neon script overlay */}
          <motion.h1 
            className="font-permanentMarker text-[60px] sm:text-[100px] md:text-[130px] lg:text-[150px] tracking-[3px] sm:tracking-[6px] leading-[0.8] select-none -mt-3 sm:-mt-8 bg-gradient-to-r from-accentCyan via-accentBlue via-accentPurple to-[#F43F5E] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(124,92,255,0.55)]"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          >
            FUSION
          </motion.h1>
        </div>

        {/* COLLABORATE. INNOVATE. IMPACT. Subtitle */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-8 font-spaceGrotesk text-xs sm:text-sm md:text-base font-bold tracking-[0.25em] uppercase select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className="text-accentBlue text-glow-blue">COLLABORATE.</span>
          <span className="text-accentPurple drop-shadow-[0_0_10px_rgba(124,92,255,0.4)]">INNOVATE.</span>
          <span className="text-accentCyan text-glow-cyan">IMPACT.</span>
        </motion.div>

        {/* Divider: ─── • OUR ORGANISERS • ─── */}
        <motion.div 
          className="flex items-center justify-center gap-4 text-[#A9B3C1] font-spaceGrotesk font-semibold text-[10px] sm:text-xs tracking-[0.25em] uppercase mt-12 mb-5 select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-white/20"></div>
          <span>OUR ORGANISERS</span>
          <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-white/20"></div>
        </motion.div>

        {/* Organisers Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4 relative z-10">
          
          {/* StartupTN */}
          <motion.div
            className="relative inline-flex"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-white rounded-2xl px-6 py-4 flex items-center justify-center shadow-[0_10px_30px_rgba(255,255,255,0.1)] border border-white/20 h-[86px] sm:h-[105px] w-auto min-w-[140px] sm:min-w-[180px]">
              <img 
                src="/assets/images/startuptn_logo.png" 
                alt="StartupTN Logo" 
                className="h-[40px] sm:h-[50px] w-auto object-contain"
              />
            </div>
            <div className="absolute inset-[-4px] bg-gradient-to-r from-accentBlue/25 to-accentPurple/25 blur-md rounded-2xl -z-10 opacity-70"></div>
          </motion.div>

          {/* Our Kadai */}
          <motion.div
            className="relative inline-flex"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-white rounded-2xl px-6 py-4 flex items-center justify-center shadow-[0_10px_30px_rgba(255,255,255,0.1)] border border-white/20 h-[86px] sm:h-[105px] w-auto min-w-[110px] sm:min-w-[140px]">
              <img 
                src="/assets/images/our_kadai_logo.png" 
                alt="Our Kadai Logo" 
                className="h-[40px] sm:h-[50px] w-auto object-contain"
              />
            </div>
            <div className="absolute inset-[-4px] bg-gradient-to-r from-accentPurple/25 to-accentCyan/25 blur-md rounded-2xl -z-10 opacity-70"></div>
          </motion.div>

          {/* Tamil JUG */}
          <motion.div
            className="relative inline-flex"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-white rounded-2xl px-6 py-4 flex items-center justify-center shadow-[0_10px_30px_rgba(255,255,255,0.1)] border border-white/20 h-[86px] sm:h-[105px] w-auto min-w-[110px] sm:min-w-[140px]">
              <img 
                src="/assets/images/tnjug_logo.png" 
                alt="Tamil JUG Logo" 
                className="h-[60px] sm:h-[75px] w-auto object-contain"
              />
            </div>
            <div className="absolute inset-[-4px] bg-gradient-to-r from-accentCyan/25 to-accentBlue/25 blur-md rounded-2xl -z-10 opacity-70"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
