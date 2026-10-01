import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#070a12]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-3.5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 p-[1px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
            <div className="w-full h-full bg-[#0d1322] rounded-[11px] flex items-center justify-center font-mono font-bold text-white text-sm">
              {personalInfo.initials}
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors text-base">
              {personalInfo.name}
            </span>
            <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Morgan Stanley • Sr. Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 font-sans text-sm">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-300 hover:text-blue-400 font-medium transition-colors py-1"
            >
              {item.label}
            </a>
          ))}

          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/10 border border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all font-mono text-xs font-semibold uppercase tracking-wider"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume PDF</span>
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="px-3 py-1.5 rounded bg-blue-600/10 border border-blue-500/40 text-blue-400 text-xs font-mono font-medium"
          >
            Resume
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0d1322]/95 border-b border-slate-800 px-6 py-6 backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-4 font-sans text-sm">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-300 hover:text-blue-400 py-2 border-b border-slate-800/60"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full mt-2 py-3 rounded-lg bg-blue-600 text-white font-mono text-xs font-semibold uppercase tracking-wider text-center"
              >
                View Full Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
