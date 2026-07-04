import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ShieldCheck, Zap, Award } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '5', label: 'Challenge Tracks' },
    { value: '07', label: 'August 2026' },
    { value: '6', label: 'Max Team Size' },
    { value: '100%', label: 'Free Registration' }
  ];

  return (
    <section id="about" className="relative w-full py-20 px-6 md:px-12 bg-[#071322]/20 border-b border-white/5 scroll-mt-20">
      <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(45,127,249,0.1)_0%,rgba(45,127,249,0)_70%)] -z-10"></div>
      <div className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(124,92,255,0.1)_0%,rgba(124,92,255,0)_70%)] -z-10"></div>
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left side: Content & Stats */}
        <div className="w-full lg:w-1/2 flex flex-col text-left">
          <span className="text-accentCyan font-spaceGrotesk text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-3">
            Overview
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-spaceGrotesk text-white mb-6 uppercase tracking-wider">
            ABOUT HACKFUSION 2026
          </h2>
          <p className="text-[#A9B3C1] font-inter text-base leading-relaxed mb-6">
            We bridge the gap between academic learning and industry implementation. Hack the Present, Shape the Future.
            HackFusion 2026 is designed to encourage participants to move beyond building prototypes and instead create solutions that can evolve into real-world products, startups, public services, or community-driven platforms.
          </p>

          {/* Graphical Highlights Sub-card */}
          <div className="glass-card rounded-2xl p-6 border-white/10 relative overflow-hidden mb-8">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accentBlue/5 rounded-full blur-xl"></div>
            <h3 className="font-spaceGrotesk text-lg font-bold text-white mb-3">
              <span className="bg-gradient-to-r from-accentBlue to-accentCyan bg-clip-text text-transparent">
                Empowering Bright Minds
              </span>
            </h3>
            <p className="text-[#A9B3C1] text-sm leading-relaxed mb-4">
              HackFusion 2026 is a social-impact-focused innovation hackathon organized by VET Institute of Arts and Science (VETIAS) in collaboration with StartupTN and the Tamil Nadu Java User Group (TNJUG).
            </p>
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#071322]/40 border border-white/5">
              <MessageSquare className="text-accentCyan flex-shrink-0 mt-0.5" size={18} />
              <p className="text-xs text-accentCyan italic font-medium leading-normal">
                "Cross-disciplinary teams are encouraged to foster innovation and diverse perspectives."
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="glass-card rounded-xl p-4 border-white/5 text-center flex flex-col justify-center items-center relative overflow-hidden"
              >
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-accentBlue/5 rounded-full blur-lg"></div>
                <span className="font-spaceGrotesk text-2xl sm:text-3xl font-black text-white block mb-1">
                  {stat.value}
                </span>
                <span className="text-[#A9B3C1] text-[10px] sm:text-xs tracking-wider uppercase font-semibold leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side: Futuristic Image Mockup */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <motion.div 
            className="relative w-full max-w-[500px]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            {/* Ambient Purple/Blue Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accentBlue/20 to-accentPurple/20 rounded-[28px] filter blur-xl opacity-80 -z-10"></div>
            
            {/* Visual Screen Container */}
            <div className="relative rounded-[28px] p-2 glass-panel border-white/15 overflow-hidden shadow-2xl">
              <img 
                src="/assets/images/about_hero_image.png" 
                alt="HackFusion Developer Platform" 
                className="w-full h-auto object-cover rounded-[20px] aspect-[4/3] filter brightness-95 contrast-105"
              />
              
              {/* Highlight Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071322]/40 via-transparent to-white/5 pointer-events-none rounded-[20px]"></div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
