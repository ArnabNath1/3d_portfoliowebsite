
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Users } from 'lucide-react';
import { PUBLICATIONS } from '../constants';

export const Publications = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-12 text-center md:text-left">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Reserach <span className="text-indigo-400">Publications</span>
        </motion.h1>
        <p className="text-slate-400 text-lg">Academic contributions and peer-reviewed studies.</p>
      </div>

      <div className="space-y-8">
        {PUBLICATIONS.map((pub, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            className="glass-card rounded-3xl p-8 hover:border-indigo-500/30 transition-all group"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="hidden md:flex flex-col items-center justify-center w-16 h-16 rounded-2xl bg-indigo-500/10 text-indigo-400 shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                <BookOpen size={32} />
              </div>
              
              <div className="flex-grow">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h2 className="text-2xl font-bold text-white leading-tight group-hover:text-indigo-400 transition-colors">
                    {pub.title}
                  </h2>
                  <a href={pub.link} target="_blank" className="p-2 text-slate-500 hover:text-white hover:bg-white/5 rounded-full transition-all shrink-0">
                    <ExternalLink size={20} />
                  </a>
                </div>

                <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                  <Users size={16} className="text-indigo-500/50" />
                  <span className="italic font-medium">{pub.authors}</span>
                </div>

                <p className="text-slate-400 text-base leading-relaxed mb-6">
                  {pub.description}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    {pub.publisher}
                  </span>
                  <div className="px-3 py-1 bg-indigo-500/10 rounded-full text-xs font-bold text-indigo-400">
                    {pub.year}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
