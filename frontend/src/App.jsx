import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SelectedWorkSection from './components/SelectedWorkSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import JourneySection from './components/JourneySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectDetailModal from './components/ProjectDetailModal';
import { fetchProfile } from './services/api';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetchProfile().then(data => setProfile(data));
  }, []);

  return (
    <div className="min-h-screen bg-[#070709] text-gray-100 selection:bg-amber-500/30 selection:text-amber-200">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <SelectedWorkSection onSelectProject={(proj) => setSelectedProject(proj)} />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <ProcessSection />
        <JourneySection />
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <Footer profile={profile} />

      {/* Detailed Project View Modal */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />
      )}
    </div>
  );
}
