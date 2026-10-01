import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SystemArchitecture from './components/SystemArchitecture';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import ResumeModal from './components/ResumeModal';
import Footer from './components/Footer';

function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-300 font-sans selection:bg-blue-500 selection:text-white antialiased overflow-x-hidden">
      
      {/* Resume Viewer Overlay */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      {/* Top Header Navbar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Flow - Seamless Tight Spacing */}
      <main className="flex flex-col gap-0 pb-8">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <AboutSection />
        <ExperienceSection />
        <SystemArchitecture />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
