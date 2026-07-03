import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      q: 'Who is eligible to participate in HackFusion?',
      a: 'All students currently enrolled in undergraduate or postgraduate courses in Engineering, Arts & Science, Polytechnic colleges, and recognized Universities are welcome. Cross-disciplinary teams are highly encouraged!'
    },
    {
      q: 'What is the required team structure, and are mentors mandatory?',
      a: 'Each participating team consists of exactly 4 Student Innovators and can include up to 2 Mentors. You can choose between two mentorship options: Option 1 (1 Industry Professional + 1 Faculty Mentor) or Option 2 (2 Industry Professionals). Mentors guide teams through practical deployment, industry standards, and constraints.'
    },
    {
      q: 'What is the cost of registration for the event?',
      a: 'Participation in HackFusion 2026 is 100% free. Food, accommodation during the event, labs access, and high-speed Wi-Fi are fully sponsored by our organizers.'
    },
    {
      q: 'What are the prizes and perks for the participants?',
      a: 'Top teams will win lucrative cash prizes. Additionally, select participants receive corporate internship offers, direct startup incubation support via StartupTN, and all participants receive official credentials and certifications.'
    },
    {
      q: 'What is the selection process for the final hackathon?',
      a: 'After registrations close, teams submit a conceptual PPT detailing their problem statements and tech stack. A panel of jury experts evaluates ideas and shortlists the best teams for the physical hackathon at VETIAS campus.'
    }
  ];

  return (
    <section id="faq" className="relative w-full py-20 px-6 md:px-12 scroll-mt-20 border-b border-white/5 bg-[#071322]/10">
      <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-accentCyan/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accentCyan font-spaceGrotesk text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-3 block">
            Clarifications
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-spaceGrotesk text-white uppercase tracking-wider mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-textSecondary max-w-xl mx-auto text-sm sm:text-base">
            Have queries about rules, mentoring requirements, or logistics? Find answers here.
          </p>
        </div>

        {/* FAQ Accordions Wrapper */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx}
                className={`glass-card rounded-2xl border transition-all duration-300 ${
                  isOpen ? 'border-accentCyan/30 bg-[#0c1a36]' : 'border-white/5 bg-white/[0.02] hover:border-white/15'
                }`}
              >
                {/* Header */}
                <button
                  className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => setActiveIndex(isOpen ? null : idx)}
                >
                  <span className={`font-spaceGrotesk text-sm sm:text-base font-bold tracking-wide transition-colors duration-300 ${
                    isOpen ? 'text-accentCyan' : 'text-white'
                  }`}>
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 ml-4 ${isOpen ? 'text-accentCyan' : 'text-[#A9B3C1]'}`}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                {/* Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-[#A9B3C1] text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
