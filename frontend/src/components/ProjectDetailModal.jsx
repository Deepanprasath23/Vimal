import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Wrench, Sparkles, CheckCircle2, Layers } from 'lucide-react';

export default function ProjectDetailModal({ project, onClose, onSelectProject }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  const softwareList = project.software_list || project.software.split(',').map(s => s.strip ? s.strip() : s.trim());

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md z-40"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl bg-[#0e0e14] border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-50 my-auto max-h-[90vh] flex flex-col"
        >
          {/* Top Bar Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#12121c]">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-mono tracking-widest uppercase">
                {project.category}
              </span>
              <span className="text-gray-400 text-xs font-mono">{project.year}</span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close project modal"
              className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
            
            {/* Project Thumbnail */}
            <div className="w-full">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full rounded-2xl border border-white/10 object-cover"
              />
            </div>

            {/* Title & Metadata Header */}
            <div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display uppercase tracking-wide">
                {project.title}
              </h2>
              <p className="mt-2 text-gray-300 text-base leading-relaxed font-light">
                {project.short_description}
              </p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 p-4 rounded-xl bg-white/5 border border-white/10 text-xs font-mono">
                <div className="flex items-center gap-2 text-gray-300">
                  <User className="w-4 h-4 text-amber-400" />
                  <div>
                    <div className="text-gray-500 text-[10px] uppercase">Role</div>
                    <div className="font-semibold text-white">{project.role || "Video Editor & Designer"}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <div>
                    <div className="text-gray-500 text-[10px] uppercase">Year</div>
                    <div className="font-semibold text-white">{project.year}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-300">
                  <Wrench className="w-4 h-4 text-amber-400" />
                  <div>
                    <div className="text-gray-500 text-[10px] uppercase">Category</div>
                    <div className="font-semibold text-white">{project.category}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/10">
              
              {/* Left Column: Overview & Creative Approach */}
              <div className="space-y-6">
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-amber-400 mb-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Creative Approach</span>
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-light bg-black/30 p-4 rounded-lg border border-white/5">
                    {project.creative_approach || project.full_description}
                  </p>
                </div>

                {project.editing_techniques && (
                  <div>
                    <h3 className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-amber-400 mb-2">
                      <Layers className="w-4 h-4" />
                      <span>Editing Techniques</span>
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed font-light bg-black/30 p-4 rounded-lg border border-white/5">
                      {project.editing_techniques}
                    </p>
                  </div>
                )}
              </div>

              {/* Right Column: Software Used & Outcome */}
              <div className="space-y-6">
                <div>
                  <h3 className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-amber-400 mb-2">
                    <Wrench className="w-4 h-4" />
                    <span>Software & Tools</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {softwareList.map((sw, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono"
                      >
                        {sw}
                      </span>
                    ))}
                  </div>
                </div>

                {project.project_outcome && (
                  <div>
                    <h3 className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-amber-400 mb-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Project Outcome</span>
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed font-light bg-black/30 p-4 rounded-lg border border-white/5">
                      {project.project_outcome}
                    </p>
                  </div>
                )}
              </div>

            </div>

          </div>

          {/* Footer Close Action */}
          <div className="p-4 border-t border-white/10 bg-[#12121c] flex items-center justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-md bg-white/10 text-white hover:bg-white/20 text-xs font-mono uppercase tracking-widest transition-colors"
            >
              Close Project
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
