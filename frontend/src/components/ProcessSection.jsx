import React from 'react';
import { motion } from 'framer-motion';
import { Search, Scissors, Sparkles, Send, Workflow } from 'lucide-react';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Understand',
    icon: Search,
    description: 'Analyze the creative objective, review raw footage, select key takes, and align on tone, pacing, and visual reference style.'
  },
  {
    step: '02',
    title: 'Edit',
    icon: Scissors,
    description: 'Assemble the assembly cut, refine narrative flow, execute precise frame cuts, align sound hits, and establish visual rhythm.'
  },
  {
    step: '03',
    title: 'Design',
    icon: Sparkles,
    description: 'Layer kinetic typography, visual effects, color grading, lower thirds, seamless transitions, and final audio mix polish.'
  },
  {
    step: '04',
    title: 'Deliver',
    icon: Send,
    description: 'Export pristine ProRes / H.264 masters optimized specifically for web, social content, campaign delivery, or high-res presentation.'
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-[#07070a] relative film-grain border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono tracking-widest uppercase mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>Workflow & Pacing</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight uppercase">
            MY <span className="text-amber-400">PROCESS</span>
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base max-w-xl font-light">
            A structured four-step post-production pipeline to turn raw clips into compelling stories.
          </p>
        </div>

        {/* Process Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((ps, idx) => {
            const Icon = ps.icon;
            return (
              <motion.div
                key={ps.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative p-6 rounded-2xl bg-[#0e0e15] border border-white/10 hover:border-amber-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-md border border-amber-500/20">
                      STEP {ps.step}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-white/5 text-gray-300 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-amber-400" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white font-display mb-3 uppercase tracking-wide">
                    {ps.title}
                  </h3>

                  <p className="text-gray-400 text-xs leading-relaxed font-light">
                    {ps.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  Phase 0{idx + 1}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
