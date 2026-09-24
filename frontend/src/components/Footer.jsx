import React from 'react';
import { Film, Mail, MapPin, ArrowUp } from 'lucide-react';

export default function Footer({ profile }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = profile?.social_links || {
    instagram: import.meta.env.VITE_INSTAGRAM_URL || "https://instagram.com",
    linkedin: import.meta.env.VITE_LINKEDIN_URL || "https://linkedin.com",
    behance: import.meta.env.VITE_BEHANCE_URL || "https://behance.net"
  };

  return (
    <footer className="bg-[#050508] border-t border-white/10 pt-16 pb-12 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5 items-center">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <a href="#" className="flex items-center gap-2 text-white font-display font-extrabold text-xl uppercase tracking-widest">
              <div className="w-8 h-8 rounded-md bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Film className="w-4 h-4" />
              </div>
              <span>VIMAL RAJ <span className="text-amber-400 font-light">K</span></span>
            </a>
            
            <p className="text-xs font-mono text-gray-400">
              Video Editor | Motion Graphics Designer • Coimbatore, India
            </p>
            <p className="text-xs text-gray-500 font-light">
              Crafting cinematic stories, high-retention short-form edits, and kinetic motion visuals.
            </p>
          </div>

          {/* Social Links & Contact */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-between gap-4">
            <div className="flex items-center gap-3">
              {/* Instagram SVG */}
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-amber-400/50 hover:text-amber-400 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              )}

              {/* LinkedIn SVG */}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-amber-400/50 hover:text-amber-400 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.73a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z"/>
                  </svg>
                </a>
              )}

              <a
                href="mailto:vraj92063@gmail.com"
                aria-label="Send Email"
                className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 hover:bg-amber-500 hover:text-black transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <a
              href="mailto:vraj92063@gmail.com"
              className="text-xs font-mono text-gray-300 hover:text-amber-400 transition-colors"
            >
              vraj92063@gmail.com
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-500 gap-4">
          <div>
            © 2026 Vimal Raj K. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Coimbatore, TN, India</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-gray-400 hover:text-amber-400 transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
