import React from 'react';
import { motion } from 'framer-motion';
import { 
  Navigation, 
  GraduationCap, 
  ShoppingBag, 
  Package, 
  MessageSquare, 
  Droplets, 
  Leaf, 
  Compass, 
  Snowflake, 
  Zap, 
  Code2, 
  Lightbulb,
  Cpu,
  Factory,
  ShieldCheck
} from 'lucide-react';

export default function Tracks() {
  const challengeTracks = [
    {
      title: 'Smart Mobility & Sustainable Transportation',
      icon: Navigation,
      color: 'text-accentBlue border-accentBlue/25 bg-accentBlue/5',
      desc: 'Optimize urban transit systems, last-mile connectivity, and smart route planning using sustainable green technologies.',
      areas: ['Traffic optimization', 'EV charging microgrids', 'Public transport planning', 'Transit efficiency']
    },
    {
      title: 'Inclusive Education & Digital Learning',
      icon: GraduationCap,
      color: 'text-accentPurple border-accentPurple/25 bg-accentPurple/5',
      desc: 'Build AI-powered tutoring systems, personalized learning paths, and digital tools for rural or underserved communities.',
      areas: ['Rural school enablement', 'AI tutoring models', 'Personalized pathways', 'Inclusive access tech']
    },
    {
      title: 'Affordable Retail & Consumer Commerce',
      icon: ShoppingBag,
      color: 'text-accentGold border-accentGold/25 bg-accentGold/5',
      desc: 'Empower small retail businesses with smart inventory systems, localized commerce solutions, and supply chain transparency.',
      areas: ['D2C local commerce', 'Inventory automation', 'Supply chain visibility', 'Small business fintech']
    },
    {
      title: 'Intelligent Public Distribution & Food Security',
      icon: Package,
      color: 'text-accentCyan border-accentCyan/25 bg-accentCyan/5',
      desc: 'Ensure equitable resource allocation, transparent ration distribution, and secure biometric beneficiary verification.',
      areas: ['Smart PDS solutions', 'Fraud mitigation systems', 'Inventory tracking', 'Resource optimization']
    },
    {
      title: 'Digital Governance & Unified Citizen Grievance Management',
      icon: MessageSquare,
      color: 'text-[#F43F5E] border-[#F43F5E]/25 bg-[#F43F5E]/5',
      desc: 'Provide unified portals for grievance submission, smart complaint routing, and real-time response dashboards.',
      areas: ['Citizen portal development', 'Auto routing algorithms', 'Transparency dashboards', 'Civic feedback tools']
    },
    {
      title: 'Textile Dyeing Pollution Monitoring & Management',
      icon: Droplets,
      color: 'text-emerald-400 border-emerald-400/25 bg-emerald-400/5',
      desc: 'Implement automated IoT sensors to monitor, alert, and report pH and chemical effluent levels in dyeing facility discharges.',
      areas: ['IoT chemical sensors', 'River effluent alerting', 'Compliance portal', 'Sustainable textile tech']
    },
    {
      title: 'Digital Carbon Footprint Tracker',
      icon: Leaf,
      color: 'text-teal-400 border-teal-400/25 bg-teal-400/5',
      desc: 'Allow organizations and individual citizens to calculate, log, and benchmark their energy usage and CO2 emissions.',
      areas: ['Carbon emissions log', 'Real-time energy tracking', 'SaaS benchmark dashboard', 'Offset calculators']
    },
    {
      title: 'Smart Tourism & Cultural Heritage',
      icon: Compass,
      color: 'text-indigo-400 border-indigo-400/25 bg-indigo-400/5',
      desc: 'Preserve cultural landmarks and enhance visitor engagement using AR/VR visual guides and smart heritage trails.',
      areas: ['AR site visual guides', 'Heritage digital archive', 'Visitor engagement portals', 'Smart travel booking']
    },
    {
      title: 'Food Loss & Cold Chain Management',
      icon: Snowflake,
      color: 'text-sky-400 border-sky-400/25 bg-sky-400/5',
      desc: 'Prevent agricultural waste by monitoring perishable crop temperature levels and route durations across supply chains.',
      areas: ['Perishable temp sensors', 'Supply chain cold logs', 'Predictive shelf life analytics', 'Waste minimization']
    },
    {
      title: 'Renewable Energy & Energy Efficiency',
      icon: Zap,
      color: 'text-amber-500 border-amber-500/25 bg-amber-500/5',
      desc: 'Manage solar/wind grid energy output, predict grid load spikes, and monitor real-time consumption levels.',
      areas: ['Solar/wind grid logs', 'Load spike forecasting', 'Smart home dashboards', 'Energy saving automation']
    },
    {
      title: 'Software Development Challenge (SDC)',
      icon: Code2,
      color: 'text-fuchsia-400 border-fuchsia-400/25 bg-fuchsia-400/5',
      desc: 'Solve high-performance computing, clean API development, database optimization, or algorithmic speed problems.',
      areas: ['High performance code', 'Database optimization', 'Clean REST/GraphQL APIs', 'Scalable systems']
    },
    {
      title: 'Open Innovation',
      icon: Lightbulb,
      color: 'text-yellow-400 border-yellow-400/25 bg-yellow-400/5',
      desc: 'Present any original tech-based prototype or business model solving real-world challenges outside predefined tracks.',
      areas: ['Out of the box ideas', 'Custom tech stacks', 'Startup pitch decks', 'Social impact solutions']
    }
  ];

  // Two-dimensional array (matrix) representing the 3-row centered layout
  const techThemesMatrix = [
    [
      {
        title: 'AI & Machine Learning',
        icon: Cpu,
        points: ['Generative AI', 'Agentic AI', 'Intelligent Automation', 'Predictive Analytics']
      },
      {
        title: 'Industry 4.0',
        icon: Factory,
        points: ['Smart Manufacturing', 'Industrial IoT', 'Digital Twins', 'Intelligent Operations']
      }
    ],
    [
      {
        title: 'EV/PV & Emerging Tech',
        icon: Zap,
        points: ['Sustainable Innovation', 'Smart Infrastructure', 'EV / Photovoltaics', 'Future-Ready Ecosystems']
      },
      {
        title: 'Next-Gen Security',
        icon: ShieldCheck,
        points: ['Post-Quantum Cryptography', 'Next-Generation Cybersec', 'Secure Communications', 'Quantum-Resistant Arch']
      }
    ],
    [
      {
        title: 'General Dev Stack',
        icon: Code2,
        points: ['Cloud & Web Platforms', 'Mobile Apps & IoT', 'Blockchain & API Dev', 'Open Source Tech']
      }
    ]
  ];

  return (
    <section id="tracks" className="relative w-full py-20 px-6 md:px-12 scroll-mt-20 border-b border-white/5">
      <div className="absolute top-[30%] right-[-5%] w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(0,229,255,0.05)_0%,rgba(0,229,255,0)_70%)] -z-10 animate-pulse-slow"></div>
      
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accentCyan font-spaceGrotesk text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-3 block">
            Focus Areas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-spaceGrotesk text-white uppercase tracking-wider mb-4">
            CHALLENGE TRACKS
          </h2>
          <p className="text-textSecondary max-w-2xl mx-auto text-sm sm:text-base">
            Participants will choose one of the following key domains to design and develop their solutions.
          </p>
        </div>

        {/* Challenge Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {challengeTracks.map((track, i) => {
            const Icon = track.icon;
            return (
              <motion.div
                key={i}
                className="glass-card rounded-2xl p-6 border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group text-left"
                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' }}
              >
                <div>
                  {/* Icon Block */}
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${track.color}`}>
                    <Icon size={22} />
                  </div>
                  
                  {/* Title & Desc */}
                  <h3 className="font-spaceGrotesk text-base sm:text-lg font-bold text-white mb-3 tracking-wide leading-snug">
                    {track.title}
                  </h3>
                  <p className="text-[#A9B3C1] text-xs leading-relaxed mb-6">
                    {track.desc}
                  </p>
                </div>

                {/* Sub-areas Tags */}
                <div>
                  <div className="h-[1px] w-full bg-white/5 mb-4"></div>
                  <div className="flex flex-wrap gap-1.5">
                    {track.areas.map((area, idx) => (
                      <span 
                        key={idx} 
                        className="text-[9px] sm:text-[10px] font-semibold font-spaceGrotesk px-2 py-0.5 rounded bg-white/5 text-[#A9B3C1] border border-white/5 hover:border-white/15 hover:text-white transition-colors duration-200"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Themes Section */}
        <div className="pt-8 border-t border-white/5">
          <div className="text-center mb-12">
            <span className="text-accentCyan font-spaceGrotesk text-xs font-bold tracking-[0.2em] uppercase mb-2 block">
              Core Enablers
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-spaceGrotesk text-white uppercase tracking-wider mb-3">
              TECHNOLOGY THEMES
            </h3>
            <p className="text-textSecondary max-w-xl mx-auto text-xs sm:text-sm">
              Explore emerging technologies to inspire and build your solutions.
            </p>
          </div>

          {/* Center-aligned 3-row layout rendered from 2D array matrix */}
          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {techThemesMatrix.map((row, rIdx) => (
              <div key={rIdx} className="flex flex-wrap justify-center gap-6 w-full">
                {row.map((theme, cIdx) => {
                  const Icon = theme.icon;
                  return (
                    <motion.div 
                      key={cIdx}
                      className="glass-card rounded-xl p-5 border-white/5 relative hover:border-white/15 transition-all duration-300 w-full sm:w-[280px] text-left"
                      whileHover={{ y: -2 }}
                    >
                      <div className="text-accentCyan mb-4 flex items-center gap-2">
                        <Icon size={18} />
                        <h4 className="font-spaceGrotesk text-xs sm:text-sm font-bold text-white tracking-wide">
                          {theme.title}
                        </h4>
                      </div>
                      <ul className="flex flex-col gap-2 pl-4 list-disc text-left">
                        {theme.points.map((pt, idx) => (
                          <li key={idx} className="text-[#A9B3C1] text-[11px] font-medium hover:text-white transition-colors">
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
