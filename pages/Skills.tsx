
import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants';

export const Skills = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Technical <span className="text-indigo-400">Stack</span></h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Mastering the tools of modern AI and scalable backend infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {SKILL_CATEGORIES.map((category, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold">
                {idx + 1}
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">{category.category}</h2>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill, sIdx) => (
                <motion.div 
                  key={sIdx}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                  className="flex flex-col items-center justify-center gap-3 p-6 bg-white/[0.02] border border-white/5 rounded-2xl transition-all"
                >
                  <div className="text-indigo-400 p-2 bg-indigo-500/5 rounded-lg">
                    {skill.icon}
                  </div>
                  <span className="text-slate-300 text-xs font-bold uppercase tracking-wider">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
