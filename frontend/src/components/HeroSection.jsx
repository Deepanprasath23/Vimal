import React from 'react';
import { motion } from 'framer-motion';
import { Film } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden film-grain">
      {/* Dark Ambient Gradient Background & Lens Highlights */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070709] via-[#0d0d14] to-[#070709] pointer-events-none" />
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Grid line background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Typography & Hero Info */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-400 text-xs font-mono tracking-widest uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>Coimbatore, India • Available for Projects</span>
          </motion.div>

          {/* Name & Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none mb-4 font-display uppercase"
          >
            VIMAL RAJ <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 font-light">K</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-3 text-lg sm:text-xl font-medium text-gray-300 mb-6 tracking-wide"
          >
            <span className="text-amber-400 font-semibold">Video Editor</span>
            <span className="text-gray-600">|</span>
            <span className="text-gray-300">Motion Graphics Designer</span>
          </motion.div>

          {/* Supporting Pitch */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-gray-400 text-base sm:text-lg max-w-2xl font-light leading-relaxed mb-8 border-l-2 border-amber-500/40 pl-4 italic"
          >
            "Cinematic stories. Powerful visuals. Thoughtful motion."
          </motion.p>

          {/* Primary Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-md bg-amber-500 text-black font-bold text-xs uppercase tracking-widest hover:bg-amber-400 transition-all duration-300 shadow-xl shadow-amber-500/20 active:scale-95"
            >
              <Film className="w-4 h-4" />
              <span>View My Work</span>
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-white/5 border border-white/15 text-white font-semibold text-xs uppercase tracking-widest hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
            >
              <span>Contact Me</span>
            </a>
          </motion.div>

          {/* Software Badge Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center gap-6 pt-6 border-t border-white/10 text-xs text-gray-400"
          >
            <span className="font-mono text-gray-500 uppercase tracking-widest">Primary Tools:</span>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded-sm bg-white/5 border border-white/10 text-gray-300 font-mono text-[11px]">After Effects</span>
              <span className="px-2.5 py-1 rounded-sm bg-white/5 border border-white/10 text-gray-300 font-mono text-[11px]">Premiere Pro</span>
              <span className="px-2.5 py-1 rounded-sm bg-white/5 border border-white/10 text-gray-300 font-mono text-[11px]">Photoshop</span>
              <span className="px-2.5 py-1 rounded-sm bg-white/5 border border-white/10 text-gray-300 font-mono text-[11px]">Illustrator</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
