import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Sparkles } from 'lucide-react';
import { fetchProjects } from '../services/api';

const CATEGORIES = ['All', 'Cinematic', 'Short-form', 'Motion Graphics'];

export default function SelectedWorkSection({ onSelectProject }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    fetchProjects(activeCategory).then((data) => {
      if (isMounted) {
        setProjects(data);
        setLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, [activeCategory]);

  return (
    <section id="work" className="py-24 bg-[#070709] relative film-grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Portfolio Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight uppercase">
              SELECTED <span className="text-amber-400">WORK</span>
            </h2>
            <p className="mt-2 text-gray-400 text-sm sm:text-base max-w-xl font-light">
              Demonstrating narrative pacing, color grading, sound synchronization, and kinetic graphic design.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-[#121219] border border-white/10">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                    isActive ? 'text-black font-bold' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryTab"
                      className="absolute inset-0 bg-amber-400 rounded-lg shadow-md"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="h-96 rounded-xl bg-white/5 animate-pulse border border-white/10" />
            ))}
          </div>
        ) : (
          /* Projects Grid */
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {projects.map((project) => {
                const isHovered = hoveredProjectId === project.id;
                const softwareTags = project.software_list || (project.software ? project.software.split(',') : []);

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    onMouseEnter={() => setHoveredProjectId(project.id)}
                    onMouseLeave={() => setHoveredProjectId(null)}
                    onClick={() => onSelectProject(project)}
                    className="group relative bg-[#111117] border border-white/10 rounded-xl overflow-hidden shadow-xl hover:border-amber-500/50 transition-all duration-500 flex flex-col cursor-pointer"
                  >
                    {/* Project Thumbnail */}
                    <div className="relative aspect-cinematic bg-black overflow-hidden">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                      />

                      {/* Vignette Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-amber-400 text-[10px] font-mono tracking-widest uppercase">
                          {project.category}
                        </span>
                        <span className="px-2 py-0.5 rounded-xs bg-black/60 backdrop-blur-md text-gray-400 text-[10px] font-mono">
                          {project.year}
                        </span>
                      </div>
                    </div>

                    {/* Card Content Info */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white font-display group-hover:text-amber-400 transition-colors line-clamp-1">
                          {project.title}
                        </h3>

                        <p className="mt-2 text-gray-400 text-xs leading-relaxed font-light line-clamp-2">
                          {project.short_description}
                        </p>
                      </div>

                      {/* Software Badges & Action */}
                      <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                        <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                          {softwareTags.slice(0, 2).map((sw, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 rounded-xs bg-white/5 border border-white/10 text-gray-400 text-[10px] font-mono"
                            >
                              {sw.trim()}
                            </span>
                          ))}
                          {softwareTags.length > 2 && (
                            <span className="px-1.5 py-0.5 rounded-xs bg-white/5 text-gray-500 text-[10px] font-mono">
                              +{softwareTags.length - 2}
                            </span>
                          )}
                        </div>

                        <span className="inline-flex items-center gap-1 text-xs font-mono uppercase text-amber-400 font-semibold group-hover:translate-x-1 transition-transform">
                          <span>View</span>
                          <Eye className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

      </div>
    </section>
  );
}
