import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Loader2, CheckCircle, AlertCircle, Film, ArrowUpRight } from 'lucide-react';
import { sendContactMessage } from '../services/api';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project_type: 'Cinematic Video Editing',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitting: false, success: false, error: 'Please fill in all required fields.', message: '' });
      return;
    }

    setStatus({ submitting: true, success: false, error: null, message: '' });

    const res = await sendContactMessage(formData);

    if (res.success) {
      setStatus({
        submitting: false,
        success: true,
        error: null,
        message: res.message || 'Thank you! Your message has been sent successfully. Vimal will contact you soon.'
      });
      setFormData({
        name: '',
        email: '',
        project_type: 'Cinematic Video Editing',
        message: ''
      });
    } else {
      setStatus({
        submitting: false,
        success: false,
        error: res.error || 'Failed to send message. Please try emailing directly.',
        message: ''
      });
    }
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8">
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
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4">
                <a
                  href="mailto:vraj92063@gmail.com"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-amber-500 text-black font-bold text-xs uppercase tracking-widest hover:bg-amber-400 transition-all shadow-md"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Me</span>
                </a>

                <a
                  href="#work"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white/5 border border-white/15 text-white font-semibold text-xs uppercase tracking-widest hover:bg-white/10 transition-all"
                >
                  <Film className="w-4 h-4 text-amber-400" />
                  <span>View My Work</span>
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

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-2xl bg-[#0e0e15] border border-white/10 shadow-2xl space-y-6"
            >
              <h3 className="text-xl font-bold text-white font-display uppercase tracking-wide">
                Send a Message
              </h3>

              {/* Status Notifications */}
              {status.success && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}

              {status.error && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{status.error}</span>
                </div>
              )}

              {/* Name & Email inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-gray-400 mb-2">
                    Your Name <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white text-sm focus:border-amber-400 focus:outline-hidden transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-gray-400 mb-2">
                    Your Email <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white text-sm focus:border-amber-400 focus:outline-hidden transition-colors"
                  />
                </div>
              </div>

              {/* Project Type Select */}
              <div>
                <label className="block text-xs font-mono uppercase text-gray-400 mb-2">
                  Project Type
                </label>
                <select
                  name="project_type"
                  value={formData.project_type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white text-sm focus:border-amber-400 focus:outline-hidden transition-colors"
                >
                  <option value="Cinematic Video Editing" className="bg-[#111]">Cinematic Video Editing</option>
                  <option value="Short-form / Reels Editing" className="bg-[#111]">Short-form / Reels Editing</option>
                  <option value="Motion Graphics & Titles" className="bg-[#111]">Motion Graphics & Titles</option>
                  <option value="Full Post-Production Package" className="bg-[#111]">Full Post-Production Package</option>
                  <option value="Other Creative Project" className="bg-[#111]">Other Creative Project</option>
                </select>
              </div>

              {/* Message Area */}
              <div>
                <label className="block text-xs font-mono uppercase text-gray-400 mb-2">
                  Project Details / Message <span className="text-amber-400">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, raw footage length, deadline, and creative vision..."
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white text-sm focus:border-amber-400 focus:outline-hidden transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.submitting}
                className="w-full py-3.5 rounded-lg bg-amber-500 text-black font-bold text-xs uppercase tracking-widest hover:bg-amber-400 disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-xl shadow-amber-500/10 cursor-pointer"
              >
                {status.submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
