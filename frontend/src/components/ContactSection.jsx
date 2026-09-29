import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#07070a] relative film-grain">
      {/* Background glow accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono tracking-widest uppercase mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight uppercase">
            LET'S CREATE <span className="text-amber-400">SOMETHING.</span>
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base max-w-xl font-light">
            Have a project, idea, or creative concept? Let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="w-full max-w-2xl mx-auto space-y-8">
            <div className="p-8 rounded-2xl bg-[#0e0e15] border border-white/10 shadow-xl space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white font-display uppercase tracking-wide">
                  Vimal Raj K
                </h3>
                <p className="text-amber-400 text-sm font-mono mt-1">
                  Video Editor | Motion Graphics Designer
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10 text-sm">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-[10px] font-mono uppercase">Location</div>
                    <div className="font-semibold text-white">Coimbatore, India</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-[10px] font-mono uppercase">Email Address</div>
                    <a href="mailto:vraj92063@gmail.com" className="font-semibold text-white hover:text-amber-400 transition-colors">
                      vraj92063@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-[10px] font-mono uppercase">Mobile Number</div>
                    <a href="tel:8148779699" className="font-semibold text-white hover:text-amber-400 transition-colors">
                      8148779699
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=vraj92063%40gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-amber-500 text-black font-bold text-xs uppercase tracking-widest hover:bg-amber-400 transition-all shadow-md"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Me</span>
                </a>
              </div>
            </div>

            {/* Turnaround Commitment Card */}
            <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-xs font-mono text-gray-300 flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-amber-400 animate-ping shrink-0" />
              <div>
                <span className="text-white font-bold uppercase">Fast Response: </span>
                <span>Inquiries are typically answered within 12–24 hours.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
