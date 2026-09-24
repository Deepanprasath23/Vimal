import React from 'react';
import { motion } from 'framer-motion';
import { Video, Layers, Cpu, Sparkles, CheckCircle } from 'lucide-react';

const VIDEO_EDITING_SKILLS = [
  'Cinematic Editing',
  'Short-form Editing',
  'Storytelling',
  'Color Correction',
  'Video Transitions',
  'Sound Synchronization'
];

const MOTION_GRAPHICS_SKILLS = [
  'Motion Design',
  'Typography Animation',
  'Visual Effects',
  'Title Animations',
  'Social Media Graphics'
];

const SOFTWARE_ECOSYSTEM = [
  {
    name: 'Adobe After Effects',
    short: 'Ae',
    color: 'from-purple-500/20 to-indigo-500/10',
    borderColor: 'border-purple-500/30',
    accentColor: 'text-purple-400',
    description: 'Kinetic typography, shape animations, 2D HUDs, rotoscoping, expression scripting, and visual effects.'
  },
  {
    name: 'Adobe Premiere Pro',
    short: 'Pr',
    color: 'from-pink-500/20 to-purple-500/10',
    borderColor: 'border-pink-500/30',
    accentColor: 'text-pink-400',
    description: 'Multicam assemblies, rough & fine cuts, Lumetri color matching, L/J cut sound design, speed ramping.'
  },
  {
    name: 'Adobe Photoshop',
    short: 'Ps',
    color: 'from-blue-500/20 to-cyan-500/10',
    borderColor: 'border-blue-500/30',
    accentColor: 'text-cyan-400',
    description: 'High-res thumbnail design, texture overlays, digital matte cutouts, asset prep for After Effects.'
  },
  {
    name: 'Adobe Illustrator',
    short: 'Ai',
    color: 'from-amber-500/20 to-orange-500/10',
    borderColor: 'border-amber-500/30',
    accentColor: 'text-amber-400',
    description: 'Vector logo preparation, clean shape layer design, typography vector layouts for animation.'
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-[#07070a] relative film-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono tracking-widest uppercase mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight uppercase">
            SKILLS & <span className="text-amber-400">SOFTWARE</span>
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base max-w-xl font-light">
            Combining technical software proficiency with visual storytelling principles.
          </p>
        </div>

        {/* Software Cards Ecosystem (Featured Grid) */}
        <div className="mb-16">
          <h3 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Primary Creative Software</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOFTWARE_ECOSYSTEM.map((sw, idx) => (
              <motion.div
                key={sw.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative p-6 rounded-xl bg-gradient-to-b ${sw.color} border ${sw.borderColor} backdrop-blur-md shadow-xl flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`w-12 h-12 rounded-lg bg-black/60 border ${sw.borderColor} ${sw.accentColor} font-display font-extrabold text-lg flex items-center justify-center shadow-md`}>
                      {sw.short}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider bg-black/40 px-2 py-0.5 rounded-sm">
                      Creative Cloud
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white font-display mb-2">
                    {sw.name}
                  </h4>

                  <p className="text-gray-300 text-xs leading-relaxed font-light">
                    {sw.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Video Editing */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-[#0f0f16] border border-white/10 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                <Video className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-display uppercase tracking-wide">
                  Video Editing
                </h3>
                <p className="text-gray-400 text-xs font-light">Narrative pacing & audio synchronization</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {VIDEO_EDITING_SKILLS.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2.5 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-amber-500/30 transition-colors"
                >
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-xs font-mono text-gray-200">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Motion Graphics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl bg-[#0f0f16] border border-white/10 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-display uppercase tracking-wide">
                  Motion Graphics
                </h3>
                <p className="text-gray-400 text-xs font-light">Keyframe design & visual enhancements</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {MOTION_GRAPHICS_SKILLS.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2.5 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-amber-500/30 transition-colors"
                >
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-xs font-mono text-gray-200">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
