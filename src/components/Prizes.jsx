import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Briefcase, Sparkles, Award, Coffee, Rocket } from 'lucide-react';

export default function Prizes() {
  const otherPrizes = [
    {
      title: 'Career Boost',
      value: 'Internships',
      desc: 'Opportunities for top-tier performers.',
      icon: Briefcase,
      color: 'text-accentBlue border-accentBlue/20 bg-accentBlue/5',
      glow: 'shadow-[0_0_15px_rgba(45,127,249,0.25)]'
    },
    {
      title: 'Incubation Support',
      value: 'Mentorship',
      desc: 'Direct corporate and industry mentorship with StartupTN nodal network.',
      icon: Sparkles,
      color: 'text-accentPurple border-accentPurple/20 bg-accentPurple/5',
      glow: 'shadow-[0_0_15px_rgba(124,92,255,0.25)]'
    },
    {
      title: 'All Participants',
      value: 'Certificates',
      desc: 'Official participation credentials from StartupTN & VETIAS.',
      icon: Award,
      color: 'text-accentCyan border-accentCyan/20 bg-accentCyan/5',
      glow: 'shadow-[0_0_15px_rgba(0,229,255,0.25)]'
    }
  ];

  const logistics = [
    {
      title: 'Free Meals & Refreshments',
      desc: 'Freshly prepared food, energy drinks, and tea served around the clock to keep your spirits high.',
      icon: Coffee
    },
    {
      title: 'StartupTN Access',
      desc: 'Selected team prototypes can pitch to the Tamil Nadu state incubation wing for grant-in-aid reviews.',
      icon: Rocket
    }
  ];

  return (
    <section id="prizes" className="relative w-full py-20 px-6 md:px-12 scroll-mt-20 border-b border-white/5 bg-[#071322]/20">
      <div className="absolute bottom-[10%] left-[-5%] w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(45,127,249,0.05)_0%,rgba(45,127,249,0)_70%)] -z-10 animate-pulse-slow"></div>
      
      <div className="max-w-6xl mx-auto">
        
        {/* Header Block (Full Width) */}
        <div className="text-left mb-12">
          <span className="text-accentCyan font-spaceGrotesk text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-3 block">
            Rewards
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-spaceGrotesk text-white uppercase tracking-wider mb-4">
            PRIZES & RECOGNITIONS
          </h2>
          <p className="text-textSecondary max-w-xl text-sm sm:text-base">
            We reward innovation and execution with exciting incentives to help you continue your startup journey.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 w-full">
          
          {/* Left Column: Prizes Cards & Diagram */}
          <div className="w-full lg:w-2/3 flex flex-col text-left">

          {/* Trophy Prizes Diagram Block */}
          <div className="glass-card rounded-[22px] p-6 sm:p-8 border-white/10 w-full mb-10 relative overflow-hidden flex flex-col items-center">
            
            {/* Diagram Title */}
            <h3 className="font-spaceGrotesk text-base sm:text-lg font-bold text-white mb-6 uppercase tracking-wider bg-gradient-to-r from-accentGold to-white bg-clip-text text-transparent">
              Cash Prizes Breakdown
            </h3>

            {/* Tree Grid Row */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 w-full max-w-3xl relative py-4">
              
              {/* Left Wing: Arts & Science */}
              <motion.div 
                className="glass-card border-white/5 rounded-2xl p-5 text-left w-full md:w-[250px] shadow-[0_4px_25px_rgba(124,92,255,0.12)] border-l-4 border-l-accentPurple relative"
                whileHover={{ y: -2 }}
              >
                <h4 className="font-spaceGrotesk text-sm sm:text-base font-bold text-accentPurple mb-4 uppercase tracking-wider">
                  Arts & Science
                </h4>
                <div className="flex flex-col gap-2.5">
                  <div className="flex justify-between items-center text-xs border-b border-white/5 pb-2">
                    <span className="text-textSecondary">First Prize</span>
                    <span className="text-white font-bold font-spaceGrotesk">₹10,000</span>
                  </div>
                  <div className="flex justify-between items-center text-xs border-b border-white/5 pb-2">
                    <span className="text-textSecondary">Second Prize</span>
                    <span className="text-white font-bold font-spaceGrotesk">₹7,500</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-textSecondary">Third Prize</span>
                    <span className="text-white font-bold font-spaceGrotesk">₹5,000</span>
                  </div>
                </div>
              </motion.div>

              {/* Center Wing: Glowing Trophy Design */}
              <div className="flex flex-col items-center justify-center relative flex-shrink-0 my-4 md:my-0">
                {/* Glowing Outer Ring */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accentGold/10 border-2 border-accentGold flex items-center justify-center text-accentGold animate-pulse shadow-[0_0_30px_rgba(255,200,87,0.35)] z-10 relative">
                  <Trophy size={32} />
                  
                  {/* Left Connector Line (Desktop) */}
                  <div className="hidden md:block absolute right-full top-1/2 -translate-y-1/2 w-[45px] lg:w-[65px] h-[2px] bg-gradient-to-l from-accentGold to-accentPurple/50 -z-10"></div>
                  
                  {/* Right Connector Line (Desktop) */}
                  <div className="hidden md:block absolute left-full top-1/2 -translate-y-1/2 w-[45px] lg:w-[65px] h-[2px] bg-gradient-to-r from-accentGold to-accentBlue/50 -z-10"></div>
                </div>
                <span className="text-[9px] text-accentGold font-bold font-spaceGrotesk tracking-[0.25em] uppercase mt-3 select-none">
                  Stream Pools
                </span>
              </div>

              {/* Right Wing: Engineering */}
              <motion.div 
                className="glass-card border-white/5 rounded-2xl p-5 text-left w-full md:w-[250px] shadow-[0_4px_25px_rgba(45,127,249,0.12)] border-r-4 border-r-accentBlue relative"
                whileHover={{ y: -2 }}
              >
                <h4 className="font-spaceGrotesk text-sm sm:text-base font-bold text-accentBlue mb-4 uppercase tracking-wider">
                  Engineering
                </h4>
                <div className="flex flex-col gap-2.5">
                  <div className="flex justify-between items-center text-xs border-b border-white/5 pb-2">
                    <span className="text-textSecondary">First Prize</span>
                    <span className="text-white font-bold font-spaceGrotesk">₹10,000</span>
                  </div>
                  <div className="flex justify-between items-center text-xs border-b border-white/5 pb-2">
                    <span className="text-textSecondary">Second Prize</span>
                    <span className="text-white font-bold font-spaceGrotesk">₹7,500</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-textSecondary">Third Prize</span>
                    <span className="text-white font-bold font-spaceGrotesk">₹5,000</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Secondary Prizes List */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            {otherPrizes.map((prize, i) => {
              const Icon = prize.icon;
              return (
                <motion.div
                  key={i}
                  className={`glass-card rounded-2xl p-5 border-white/10 flex flex-col items-start text-left relative overflow-hidden group ${prize.glow}`}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${prize.color}`}>
                    <Icon size={18} />
                  </div>
                  <span className="text-[9px] font-semibold tracking-wider text-textSecondary uppercase font-spaceGrotesk block mb-1">
                    {prize.title}
                  </span>
                  <h3 className="text-base font-black font-spaceGrotesk text-white mb-1.5 leading-none">
                    {prize.value}
                  </h3>
                  <p className="text-[#A9B3C1] text-xs leading-relaxed">
                    {prize.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
          </div>

          {/* Right Column: Support & Logistics */}
          <div className="w-full lg:w-1/3 flex flex-col text-left">
            <h3 className="font-spaceGrotesk text-xl sm:text-2xl font-bold text-white mb-8 tracking-wide">
              Event Support & Logistics
            </h3>
            
            <div className="flex flex-col gap-8 w-full">
              {logistics.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex gap-4 items-start text-left">
                    <div className="w-10 h-10 rounded-lg bg-accentCyan/10 border border-accentCyan/20 text-accentCyan flex items-center justify-center flex-shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-spaceGrotesk text-base font-bold text-white mb-1.5 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[#A9B3C1] text-xs sm:text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
