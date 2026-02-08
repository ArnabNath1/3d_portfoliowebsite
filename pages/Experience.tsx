
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { EXPERIENCES } from '../constants';

export const Experience = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-20 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Career <span className="text-indigo-400">Path</span></h1>
        <p className="text-slate-400 text-lg">My professional journey in the technology industry.</p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent opacity-20 ml-[11px]"></div>
        
        <div className="space-y-16">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="relative pl-12"
            >
              <div className="absolute left-0 top-1 w-[22px] h-[22px] rounded-full bg-[#030303] border-4 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] z-10"></div>
              
              <div className="glass-card p-8 rounded-3xl group">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">{exp.role}</h2>
                    <div className="flex items-center gap-4 mt-2 text-slate-400 text-sm font-medium">
                      <span className="flex items-center gap-1.5"><Briefcase size={16} className="text-indigo-500/50" /> {exp.company}</span>
                      <span className="flex items-center gap-1.5"><MapPin size={16} className="text-indigo-500/50" /> {exp.location}</span>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-indigo-500/10 rounded-full text-indigo-400 text-xs font-bold flex items-center gap-2">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                </div>

                <div className="space-y-4">
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-4">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500/40 shrink-0"></div>
                      <p className="text-slate-400 leading-relaxed text-sm md:text-base">{ach}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
