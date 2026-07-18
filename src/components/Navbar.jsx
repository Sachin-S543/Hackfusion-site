import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Menu, X, Download, Upload } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Tracks', id: 'tracks' },
    { label: 'Timeline', id: 'timeline' },
    { label: 'Prizes & Perks', id: 'prizes' },
    { label: 'Sponsors', id: 'sponsors' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  // Scroll spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScCQPEPiyCjwCh6hwjfO0QaDMjrZFRSv2V1bvIjD7GY7j__1Q/viewform?usp=publish-editor";
  const downloadTemplateUrl = "/HackFusion Template.pptx";
  const uploadTemplateUrl = "https://forms.gle/nf2kEGKAT1NkF8uA7";

  return (
    <nav className="w-full sticky top-4 flex justify-center z-50 px-4">
      {/* Main glassmorphic navbar bar */}
      <div className="w-full max-w-6xl glass-panel rounded-full py-2 px-6 flex items-center justify-between shadow-glassGlow border-white/10">
        
        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 mx-auto pl-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative font-spaceGrotesk text-sm font-semibold tracking-wide transition-colors duration-300 py-2 ${
                activeSection === item.id 
                  ? 'text-white' 
                  : 'text-[#A9B3C1] hover:text-white'
              }`}
            >
              {item.label}
              
              {/* Active Indicator Dot */}
              {activeSection === item.id && (
                <motion.span 
                  layoutId="activeDot"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-accentBlue rounded-full shadow-[0_0_8px_#2D7FF9]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Brand logo name on Mobile only to justify spacing */}
        <div className="md:hidden font-spaceGrotesk font-black text-lg tracking-wider bg-gradient-to-r from-white to-[#A9B3C1] bg-clip-text text-transparent">
          HACK<span className="text-accentBlue">FUSION</span>
        </div>

        <div className="hidden md:flex flex-col items-center gap-2">
          <button
            disabled
            className="flex items-center gap-2 px-5 py-2 rounded-full font-spaceGrotesk text-xs lg:text-sm font-bold text-white/40 bg-white/5 border border-white/10 cursor-not-allowed select-none"
          >
            Registration Closed
          </button>
          
          <div className="flex items-center gap-2 text-white select-none">
            <motion.a 
              href={downloadTemplateUrl}
              download="HackFusion Template.pptx"
              className="flex items-center gap-2 px-5 py-2 rounded-full font-spaceGrotesk text-xs lg:text-sm font-bold text-white bg-gradient-to-r from-accentBlue to-[#526DFF] shadow-[0_4px_15px_rgba(45,127,249,0.35)] hover:shadow-[0_4px_25px_rgba(45,127,249,0.55)] hover:brightness-105 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={15} />
              Download Template
            </motion.a>
            <motion.a 
              href={uploadTemplateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-full font-spaceGrotesk text-xs lg:text-sm font-bold text-white bg-gradient-to-r from-[#526DFF] to-accentPurple shadow-[0_4px_15px_rgba(124,92,255,0.35)] hover:shadow-[0_4px_25px_rgba(124,92,255,0.55)] hover:brightness-105 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Upload size={15} />
              Upload Template
            </motion.a>
          </div>
        </div>

        {/* Mobile menu trigger */}
        <button 
          className="md:hidden p-2 text-white hover:text-accentCyan transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <motion.div 
          className="absolute top-16 left-4 right-4 glass-panel border border-white/10 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl md:hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left font-spaceGrotesk text-base font-semibold tracking-wide py-1 border-b border-white/5 pb-2 ${
                activeSection === item.id ? 'text-accentCyan' : 'text-[#A9B3C1]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            disabled
            className="flex items-center justify-center gap-2 w-full py-3 rounded-full font-spaceGrotesk font-bold text-white/40 bg-white/5 border border-white/10 mt-2 cursor-not-allowed select-none"
          >
            Registration Closed
          </button>
          
          <div className="grid grid-cols-2 gap-3 mt-2">
            <a
              href={downloadTemplateUrl}
              download="HackFusion Template.pptx"
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-full font-spaceGrotesk text-xs font-bold text-white bg-gradient-to-r from-accentBlue to-[#526DFF] shadow-[0_2px_10px_rgba(45,127,249,0.25)] hover:shadow-[0_2px_15px_rgba(45,127,249,0.45)] hover:brightness-105 transition-all duration-300"
            >
              <Download size={12} />
              Download Template
            </a>
            <a
              href={uploadTemplateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-full font-spaceGrotesk text-xs font-bold text-white bg-gradient-to-r from-[#526DFF] to-accentPurple shadow-[0_2px_10px_rgba(124,92,255,0.25)] hover:shadow-[0_2px_15px_rgba(124,92,255,0.45)] hover:brightness-105 transition-all duration-300"
            >
              <Upload size={12} />
              Upload Template
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
