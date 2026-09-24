import React from 'react';
import { motion } from 'framer-motion';
import { Film, Smartphone, Sparkles, Share2, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    icon: Film,
    number: '01',
    title: 'Cinematic Video Editing',
    description: 'Transform raw footage into polished cinematic videos with precise narrative pacing, seamless L/J cuts, and custom color grading.'
  },
  {
    icon: Smartphone,
    number: '02',
    title: 'Short-form Editing',
    description: 'Create high-engagement Reels, Shorts, and TikTok content using fast-paced jump cuts, kinetic captions, and punchy sound design.'
  },
  {
    icon: Sparkles,
    number: '03',
    title: 'Motion Graphics',
    description: 'Create animated titles, typography, seamless visual transitions, 2D HUD overlays, and custom logo reveals in After Effects.'
  },
  {
    icon: Share2,
    number: '04',
    title: 'Social Media Content',
    description: 'Create visually engaging promotional video assets optimized specifically for modern social media platforms and brand channels.'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#09090e] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>What I Offer</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight uppercase">
            SERVICES & <span className="text-amber-400">SOLUTIONS</span>
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base max-w-xl font-light">
            Dedicated post-production services tailored to bring your creative visual ideas to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-8 rounded-2xl bg-[#111118] border border-white/10 hover:border-amber-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-display font-extrabold text-gray-600 group-hover:text-amber-400 transition-colors">
                      {svc.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-display mb-3 group-hover:text-amber-300 transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    {svc.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-amber-400">
                  <span>Custom Workflow</span>
                  <a href="#contact" className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
