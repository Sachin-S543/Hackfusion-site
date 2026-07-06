import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

export default function Timeline() {
  const milestones = [
    {
      date: 'July 6, 2026',
      title: 'Registration Opens',
      desc: 'Online registrations kick off. Set up your cross-disciplinary team of 4 students and invite your professional mentor.'
    },
    {
      date: 'July 25, 2026',
      title: 'Concept PPT Submission',
      desc: 'Submit your project ideas in PPT format detailing problem statement, proposed technology stack, and business potential.'
    },
    {
      date: 'August 1, 2026',
      title: 'Shortlist Announcement',
      desc: 'The jury of industry experts selects the top teams to proceed to the physical hacking stage at the college campus.'
    },
    {
      date: 'August 7, 2026',
      title: 'The Grand Finale',
      desc: 'Non-stop coding, prototyping, mentorship check-ins, and final pitch presentations before the jury panels.',
      timings: '9:00 a.m. to 7:00 p.m.'
    }
  ];

  return (
    <section id="timeline" className="relative w-full py-20 px-6 md:px-12 scroll-mt-20 border-b border-white/5 bg-[#071322]/10">
      <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(124,92,255,0.05)_0%,rgba(124,92,255,0)_70%)] -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accentCyan font-spaceGrotesk text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-3 block">
            Milestones
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-spaceGrotesk text-white uppercase tracking-wider mb-4">
            HACKATHON ROADMAP
          </h2>
          <p className="text-textSecondary max-w-2xl mx-auto text-sm sm:text-base">
            Mark these crucial dates down so your team doesn't miss out on submissions.
          </p>
        </div>

        {/* Vertical Timeline container */}
        <div className="relative border-l-2 border-dashed border-white/10 md:border-l-0 max-w-3xl mx-auto pl-6 md:pl-0">
          
          {/* Central Vertical Solid Line (Desktop) */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accentBlue via-accentPurple to-accentCyan hidden md:block"></div>
          
          <div className="flex flex-col gap-12">
            {milestones.map((milestone, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className="relative flex flex-col md:flex-row items-start md:items-center w-full">
                  
                  {/* Timeline Node Dot */}
                  {/* On Mobile: aligned left at the border. On Desktop: aligned in the center. */}
                  <div className="absolute left-[-32px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-[#071322] border-2 border-accentCyan z-10 flex items-center justify-center shadow-[0_0_8px_#00E5FF]">
                    <div className="w-1.5 h-1.5 rounded-full bg-accentCyan animate-ping"></div>
                  </div>

                  {/* Content card: on desktop occupies half width, alternates left/right. On mobile occupies full width. */}
                  <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-end md:pr-12 md:mr-auto' : 'md:justify-start md:pl-12 md:ml-auto'}`}>
                    <motion.div 
                      className="glass-card rounded-2xl p-6 border-white/10 text-left w-full shadow-lg hover:border-white/20 duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className={`inline-block text-xs font-bold font-spaceGrotesk mb-2 px-2.5 py-1 rounded border ${isEven ? 'text-accentCyan bg-accentCyan/5 border-accentCyan/15' : 'text-accentPurple bg-accentPurple/5 border-accentPurple/15'}`}>
                        {milestone.date}
                      </span>
                      <h3 className="font-spaceGrotesk text-lg font-bold text-white mb-2">
                        {milestone.date === 'August 7, 2026' ? (
                          <span className="bg-gradient-to-r from-accentBlue to-accentPurple bg-clip-text text-transparent">{milestone.title}</span>
                        ) : milestone.title}
                      </h3>
                      <p className="text-[#A9B3C1] text-xs sm:text-sm leading-relaxed">
                        {milestone.desc}
                      </p>
                      {milestone.timings && (
                        <div className="flex items-center gap-2 mt-3 text-accentPurple text-xs sm:text-sm font-medium">
                          <Clock size={16} className="text-accentPurple flex-shrink-0" />
                          <span>
                            <span className="font-semibold text-accentPurple">Timings:</span>{' '}
                            <span className="text-[#A9B3C1]">{milestone.timings}</span>
                          </span>
                        </div>
                      )}
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
