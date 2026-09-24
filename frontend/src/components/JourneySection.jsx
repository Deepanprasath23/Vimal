import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target, Code, Film, Sparkles, BookOpen } from 'lucide-react';

export default function JourneySection() {
  return (
    <section className="py-20 bg-[#0a0a0f] relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#11111a] via-[#151522] to-[#11111a] border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Background Highlight */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Narrative */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono tracking-widest uppercase mb-4">
                <Rocket className="w-3.5 h-3.5" />
                <span>Currently Building</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display uppercase tracking-tight mb-4">
                MY JOURNEY & <span className="text-amber-400">CREATIVE EXPERIMENTS</span>
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light mb-6">
                As a passionate video editor and motion graphics designer, I am actively honing my craft through personal creative projects, editing challenges, sound design studies, and complex After Effects kinetic experiments. 
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-gray-300">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-black/40 border border-white/5">
                  <Film className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Spec Projects</div>
                    <div className="text-gray-400 text-[11px]">Creating mock trailers & short-form vertical edits</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-black/40 border border-white/5">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Motion R&D</div>
                    <div className="text-gray-400 text-[11px]">Mastering AE Expressions, HUD UI, and 3D camera sweeps</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Callout Box */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-black/50 border border-amber-500/20 text-center">
              <BookOpen className="w-8 h-8 text-amber-400 mb-3" />
              <div className="text-white font-display font-bold text-lg mb-1">Open for Opportunities</div>
              <p className="text-gray-400 text-xs font-light mb-4">
                Ready to collaborate on client projects, agency contracts, or full-time video editing roles.
              </p>
              <a
                href="#contact"
                className="w-full py-2.5 rounded-lg bg-amber-500 text-black font-bold text-xs uppercase tracking-widest hover:bg-amber-400 transition-colors shadow-md"
              >
                Let's Build Together
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
