
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Calendar, Code2 } from 'lucide-react';
import { PROJECTS } from '../constants';

export const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Featured <span className="text-indigo-400">Projects</span>
        </motion.h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          A collection of research-backed AI systems and robust full-stack applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05, duration: 0.3 }}
            className="glass-card group rounded-3xl overflow-hidden flex flex-col h-full"
          >
            <div className="p-8 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] text-indigo-400 font-bold uppercase tracking-widest">
                  {project.period}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a href={project.github} target="_blank" className="text-slate-500 hover:text-white transition-colors">
                      <Github size={20} />
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" className="text-slate-500 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {project.description.map((desc, i) => (
                  <li key={i} className="text-sm text-slate-400 flex items-start gap-3 leading-relaxed">
                    <span className="min-w-[4px] h-[4px] rounded-full bg-indigo-500 mt-2"></span>
                    {desc}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-indigo-500/5 rounded-full text-[10px] font-bold text-indigo-300/80 border border-indigo-500/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
