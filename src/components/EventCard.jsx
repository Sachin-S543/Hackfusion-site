import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Trophy, ArrowRight, Download, Upload } from 'lucide-react';

export default function EventCard() {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScCQPEPiyCjwCh6hwjfO0QaDMjrZFRSv2V1bvIjD7GY7j__1Q/viewform?usp=publish-editor";
  const downloadTemplateUrl = "/HackFusion Template.pptx";
  const uploadTemplateUrl = "https://forms.gle/nf2kEGKAT1NkF8uA7";

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-6 mb-16 relative z-20">
      <motion.div 
        className="glass-card rounded-[22px] p-6 lg:p-8 flex flex-col xl:flex-row xl:items-center justify-between gap-6 md:gap-8 border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
      >
        {/* Info Grid (4 columns on desktop, responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1.35fr_1fr_1fr] gap-6 xl:gap-8 flex-grow">
          
          {/* 1. Date */}
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-accentBlue/10 border border-accentBlue/20 flex items-center justify-center text-accentBlue flex-shrink-0">
              <Calendar size={22} />
            </div>
            <div>
              <span className="block text-[10px] tracking-[0.1em] text-textSecondary uppercase font-spaceGrotesk font-semibold">
                Date
              </span>
              <span className="text-white text-base lg:text-lg font-bold font-spaceGrotesk">
                Aug 7, 2026
              </span>
            </div>
          </div>

          {/* 2. Venue */}
          <div className="flex flex-col text-left md:border-l md:border-white/5 md:pl-12 justify-center">
            <span className="block text-[10px] tracking-[0.1em] text-textSecondary uppercase font-spaceGrotesk font-semibold mb-2 w-12 text-center pl-0.5">
              Venue
            </span>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accentPurple/10 border border-accentPurple/20 flex items-center justify-center text-accentPurple flex-shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <a 
                  href="https://www.google.com/maps?ll=11.323796,77.675389&z=15&t=m&hl=en&gl=IN&mapclient=embed&cid=9813310701461210882"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-accentPurple/10 border border-accentPurple/20 text-xs font-bold text-white hover:bg-accentPurple/20 hover:text-accentCyan hover:border-accentCyan/30 transition-all duration-300 shadow-[0_0_10px_rgba(124,92,255,0.15)] whitespace-nowrap"
                >
                  <span className="text-accentPurple font-black">VETIAS</span>, Erode
                </a>
                <span className="block text-[9px] text-[#A9B3C1] mt-1.5 italic font-medium tracking-wide">
                  (Click for location)
                </span>
              </div>
            </div>
          </div>

          {/* 3. Team Size */}
          <div className="flex items-center gap-4 text-left lg:border-l lg:border-white/5 lg:pl-6">
            <div className="w-12 h-12 rounded-xl bg-accentCyan/10 border border-accentCyan/20 flex items-center justify-center text-accentCyan flex-shrink-0">
              <Users size={22} />
            </div>
            <div>
              <span className="block text-[10px] tracking-[0.1em] text-textSecondary uppercase font-spaceGrotesk font-semibold">
                Team Size
              </span>
              <span className="block text-white text-base font-bold font-spaceGrotesk leading-tight">
                Max 6 Members
              </span>
              <span className="text-[10px] text-textSecondary">
                (4 Students + 2 Mentors)
              </span>
            </div>
          </div>

          {/* 4. Cash Prizes */}
          <div className="flex items-center gap-4 text-left lg:border-l lg:border-white/5 lg:pl-6">
            <div className="w-12 h-12 rounded-xl bg-accentGold/10 border border-accentGold/20 flex items-center justify-center text-accentGold flex-shrink-0">
              <Trophy size={22} />
            </div>
            <div>
              <span className="block text-[10px] tracking-[0.1em] text-textSecondary uppercase font-spaceGrotesk font-semibold">
                Cash Prizes
              </span>
              <span className="block text-accentCyan text-base font-bold font-spaceGrotesk leading-tight">
                Exciting Rewards
              </span>
              <span className="text-[10px] text-textSecondary">
                & Internships
              </span>
            </div>
          </div>

        </div>

        {/* 5. Button & Templates (Right aligned) */}
        <div className="xl:pl-6 xl:border-l xl:border-white/5 flex-shrink-0 flex flex-col gap-3 items-center">
          <motion.a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 rounded-xl font-spaceGrotesk text-xs font-bold text-white bg-gradient-to-r from-accentBlue via-[#4785FF] to-accentPurple shadow-[0_4px_20px_rgba(45,127,249,0.35)] hover:shadow-[0_4px_30px_rgba(45,127,249,0.6)] hover:brightness-105 transition-all duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Register Your Team <ArrowRight size={15} />
          </motion.a>
          
          <div className="flex items-center justify-center gap-3 text-xs font-spaceGrotesk font-bold text-textSecondary select-none">
            <a 
              href={downloadTemplateUrl}
              download="HackFusion Template.pptx"
              className="flex items-center gap-1 hover:text-[#00E5FF] transition-colors duration-300"
            >
              <Download size={13} />
              Download Template
            </a>
            <span className="text-white/10">|</span>
            <a 
              href={uploadTemplateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[#00E5FF] transition-colors duration-300"
            >
              <Upload size={13} />
              Upload Template
            </a>
          </div>
        </div>

      </motion.div>
    </div>
  );
}
