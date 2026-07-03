import React from 'react';
import { MapPin, Mail } from 'lucide-react';

export default function Footer() {
  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="w-full bg-[#030914] border-t border-white/5 py-16 px-6 md:px-12 relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        
        {/* Top footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* 1. Brand Logo & Pitch */}
          <div className="flex flex-col text-left">
            <div className="font-spaceGrotesk text-2xl font-black tracking-wider text-white mb-4">
              HACK<span className="text-accentBlue">FUSION</span>
            </div>
            <p className="text-textSecondary text-xs sm:text-sm leading-relaxed max-w-sm">
              A state-level initiative empowering youth innovation and entrepreneurship, hosted at the VETIAS Erode campus under nodal sponsorship of StartupTN.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div className="flex flex-col text-left md:pl-10">
            <h3 className="font-spaceGrotesk text-base font-bold text-white mb-4 tracking-wide uppercase">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {['home', 'about', 'tracks', 'timeline', 'prizes'].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => handleNavClick(link)}
                    className="text-textSecondary hover:text-white transition-colors duration-200 text-xs sm:text-sm capitalize text-left"
                  >
                    {link === 'prizes' ? 'Prizes & Perks' : link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Venue & Contact Info */}
          <div className="flex flex-col text-left">
            <h3 className="font-spaceGrotesk text-base font-bold text-white mb-4 tracking-wide uppercase">
              Venue & Inquiries
            </h3>
            
            <div className="flex flex-col gap-4 text-xs sm:text-sm text-textSecondary">
              <a 
                href="https://www.google.com/maps?ll=11.323796,77.675389&z=15&t=m&hl=en&gl=IN&mapclient=embed&cid=9813310701461210882"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-white transition-colors duration-200"
              >
                <MapPin size={18} className="text-accentBlue mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-white block font-medium hover:text-accentBlue transition-colors">VET Institute of Arts and Science</strong>
                  Thindal, Erode,<br />Tamil Nadu - 638 012.
                </div>
              </a>
              
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-accentBlue flex-shrink-0" />
                <div>
                  <strong className="text-white block font-medium">Email Support</strong>
                  hackfusion@vetias.ac.in
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Separator */}
        <div className="h-[1px] w-full bg-white/5"></div>

        {/* Bottom copyright row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-textSecondary text-center sm:text-left">
          <div className="flex flex-col gap-2">
            <p>&copy; 2026 HackFusion. All Rights Reserved.</p>
            <p>
              In Collaboration with <span className="text-white">StartupTN</span>, Our Kadai & <span className="text-white">TNJUG</span> | Host Venue: <span className="text-white">VETIAS</span>
            </p>
          </div>
          
          {/* Creative Credit Section */}
          <div className="font-spaceGrotesk text-xs sm:text-sm font-semibold flex items-center justify-center sm:justify-start gap-2 bg-gradient-to-r from-accentBlue/10 via-accentPurple/10 to-accentCyan/10 border border-white/10 rounded-full px-5 py-2.5 shadow-[0_0_15px_rgba(45,127,249,0.1)] hover:shadow-[0_0_25px_rgba(124,92,255,0.25)] hover:border-white/20 transition-all duration-300 relative group overflow-hidden select-none">
            
            {/* Glowing background flow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-accentBlue/25 via-accentPurple/25 to-accentCyan/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            
            {/* Pulsing indicator dot */}
            <span className="w-1.5 h-1.5 rounded-full bg-accentCyan animate-pulse shadow-[0_0_8px_#00E5FF]"></span>
            
            <span className="text-textSecondary uppercase tracking-wider text-[10px] sm:text-xs">Created by</span>
            
            <div className="flex items-center gap-1.5">
              <a 
                href="https://www.linkedin.com/in/sachin-s-3bb415315/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accentCyan hover:text-white hover:underline transition-colors duration-200 font-bold"
              >
                Sachin S
              </a>
              <span className="text-white/25">&amp;</span>
              <a 
                href="https://www.linkedin.com/in/mithun-r-986983316/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accentPurple hover:text-white hover:underline transition-colors duration-200 font-bold"
              >
                Mithun R
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
