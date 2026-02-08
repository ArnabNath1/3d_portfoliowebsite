
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, GraduationCap, Microscope, Sparkles } from 'lucide-react';
import { RESEARCH_INTERESTS } from '../constants';

export const Home = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 pt-12 pb-24">
      {/* Hero Section */}
      <section className="text-center mb-32 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8"
        >
          <Sparkles size={14} />
          Available for Opportunities
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">Arnab Nath</h2>
          <p className="text-indigo-400 font-semibold text-xl md:text-2xl">Software Engineer @ LTIMindtree | AI & ML Specialist</p>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-8xl font-bold text-white mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          I build <span className="text-gradient">AI Systems</span><br/>that scale.
        </motion.h1>
        
        <motion.p 
          className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          Computer Science graduate specializing in AI & Machine Learning. 
          Expert in building reproducible ML pipelines and GenAI systems for production environments.
        </motion.p>

        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <a href="#/contact" className="group flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold transition-all shadow-lg shadow-indigo-500/25">
            Get in touch
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex items-center gap-3 ml-2">
            <a href="https://github.com/ArnabNath1" target="_blank" className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all text-slate-400 hover:text-white"><Github size={22} /></a>
            <a href="https://www.linkedin.com/in/arnabnath07/" target="_blank" className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all text-slate-400 hover:text-white"><Linkedin size={22} /></a>
          </div>
        </motion.div>
      </section>

      {/* Stats/Quick Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
        <motion.div 
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="glass-card p-8 rounded-3xl"
        >
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6">
            <GraduationCap size={28} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Education</h3>
          <p className="text-slate-400 font-medium">B.Tech in CSE (AI & ML)</p>
          <p className="text-indigo-400/80 text-sm">CGPA: 9.02 • Haldia Institute of Tech</p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="glass-card p-8 rounded-3xl"
        >
          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6">
            <Microscope size={28} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Research Focus</h3>
          <p className="text-slate-400 leading-relaxed">
            Specializing in climate modeling, spatio-temporal analysis, and explainable AI systems for high-stakes production.
          </p>
        </motion.div>
      </div>

      {/* Research Interests Staggered */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-indigo-500/50"></span>
          Research Interests
        </h2>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {RESEARCH_INTERESTS.map((interest, idx) => (
            <motion.div 
              key={idx} 
              variants={item}
              className="group flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.04] transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-indigo-500/40 group-hover:bg-indigo-500 transition-colors"></div>
              <span className="text-slate-400 group-hover:text-slate-200 font-medium transition-colors">{interest}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};
