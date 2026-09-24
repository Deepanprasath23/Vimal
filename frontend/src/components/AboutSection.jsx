import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Camera, Film, Compass, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#09090e] relative overflow-hidden border-t border-white/5">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait Viewfinder Frame Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-[#13131b] border border-white/15 p-3 shadow-2xl amber-glow">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-black flex flex-col items-center justify-center p-6 text-center group">
                
                {/* Simulated Portrait Image or Styled Camera Viewfinder */}
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
                  alt="Vimal Raj K Portrait Placeholder"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />

                {/* Viewfinder Graphic Overlay */}
                <div className="absolute inset-4 border border-white/20 pointer-events-none rounded-lg flex flex-col justify-between p-3">
                  <div className="flex justify-between text-[10px] font-mono text-amber-400">
                    <span>REC [●] 4K</span>
                    <span>FPS 23.976</span>
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-gray-400">
                    <span>50mm f/1.8</span>
                    <span>COIMBATORE, IN</span>
                  </div>
                </div>

                {/* Replaceable Note Badge */}
                <div className="relative z-10 bg-black/80 backdrop-blur-md px-4 py-3 rounded-lg border border-amber-500/30 text-xs font-mono text-amber-300 shadow-lg mt-auto">
                  <Camera className="w-4 h-4 mx-auto mb-1 text-amber-400" />
                  <span>Vimal Raj K</span>
                  <div className="text-[10px] text-gray-400">Portrait Placeholder • Easily Replaceable</div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono tracking-widest uppercase mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>About Me</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight uppercase mb-6">
              CREATIVE VISUAL <span className="text-amber-400">STORYTELLER</span>
            </h2>

            <div className="prose prose-invert max-w-none space-y-4 text-gray-300 text-base sm:text-lg font-light leading-relaxed">
              <p className="border-l-2 border-amber-500 pl-4 text-white font-normal italic">
                "I’m Vimal Raj K, a passionate video editor and motion graphics designer from Coimbatore. I enjoy turning raw footage into engaging visual stories through cinematic editing, creative transitions and motion design."
              </p>
              
              <p className="text-gray-400 text-sm sm:text-base">
                As a dedicated fresher in post-production, I combine technical software mastery with an artistic ear for narrative timing, color harmony, and sound sync. Whether editing long-form cinematic films or high-retention short-form social reels, my focus remains constant: crafting visuals that command attention.
              </p>
            </div>

            {/* Quick Facts Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 w-full">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>Location</span>
                </div>
                <div className="text-white font-semibold text-sm">Coimbatore, India</div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase mb-1">
                  <Briefcase className="w-4 h-4" />
                  <span>Experience</span>
                </div>
                <div className="text-white font-semibold text-sm">Fresher (Skill-Focused)</div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase mb-1">
                  <Film className="w-4 h-4" />
                  <span>Core Focus</span>
                </div>
                <div className="text-white font-semibold text-sm">Cinematic & Motion</div>
              </div>
            </div>

            {/* Core Competencies Checklist */}
            <div className="mt-8 pt-6 border-t border-white/10 w-full flex flex-wrap gap-4 text-xs font-mono text-gray-300">
              <span className="flex items-center gap-1.5 bg-amber-500/10 px-3 py-1.5 rounded-md border border-amber-500/20 text-amber-300">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Cinematic Video Editing
              </span>
              <span className="flex items-center gap-1.5 bg-amber-500/10 px-3 py-1.5 rounded-md border border-amber-500/20 text-amber-300">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Short-form / Reels Editing
              </span>
              <span className="flex items-center gap-1.5 bg-amber-500/10 px-3 py-1.5 rounded-md border border-amber-500/20 text-amber-300">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Motion Graphics Design
              </span>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
