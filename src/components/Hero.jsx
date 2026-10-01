import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FileText, Zap, ShieldCheck, Activity, Server, CheckCircle2, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import heroBgStudio from '../assets/bg-hero.jpg';
import heroBgGlasses from '../assets/bg-hero-glasses.jpg';

export default function Hero({ onOpenResume }) {
  const [pulseActive, setPulseActive] = useState(false);
  const [photoStyle, setPhotoStyle] = useState('studio'); // 'studio' or 'glasses'

  const handlePulse = () => {
    setPulseActive(true);
    setTimeout(() => setPulseActive(false), 2000);
  };

  const activePhoto = photoStyle === 'studio' ? heroBgStudio : heroBgGlasses;

  return (
    <section id="overview" className="relative pt-28 pb-16 lg:py-28 min-h-[92vh] flex items-center overflow-hidden bg-[#070a12]">
      
      {/* Dynamic Ambient Glow & Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 lg:gap-12 items-center z-10 relative">
        
        {/* Left Column Text & Headlines */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Status Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
              MORGAN STANLEY • SENIOR ENGINEER
            </span>

            <a
              href={personalInfo.awsBadgeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs font-semibold hover:bg-amber-500/20 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              AWS CERTIFIED DEVELOPER
            </a>
          </div>

          {/* Main Title Header */}
          <h1 className="font-sans text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-4 leading-[1.05]">
            Sai Shankar
          </h1>

          <h2 className="text-xl sm:text-3xl font-sans font-semibold text-slate-200 mb-6 leading-relaxed">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">High-Throughput Financial</span> & Cloud Systems.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-normal mb-8 leading-relaxed drop-shadow-md">
            Senior Software Engineer with 5+ years of experience designing and operating mission-critical backend microservices, Kafka event streaming pipelines, and cloud infrastructure processing 10M+ daily requests with 99.99% availability.
          </p>

          {/* Key Metrics Counter Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 w-full max-w-2xl mb-8">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="bg-[#0d1322]/85 backdrop-blur-md border border-slate-800/90 rounded-xl p-4 text-center hover:border-blue-500/40 transition-all shadow-xl group">
                <div className="text-2xl sm:text-3xl font-bold font-sans text-blue-400 group-hover:text-cyan-400 transition-colors mb-1">
                  {stat.value}
                </div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#architecture"
              className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2 hover:-translate-y-0.5"
            >
              <Zap className="w-4 h-4 fill-white" />
              Interactive Architecture
            </a>

            <button
              onClick={onOpenResume}
              className="px-7 py-3.5 rounded-xl bg-[#0d1322]/90 backdrop-blur-md border border-slate-700 text-slate-200 hover:text-white hover:border-blue-500 font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 hover:-translate-y-0.5"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              View Resume
            </button>

            <a
              href="#contact"
              className="px-7 py-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 font-mono text-xs font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5"
            >
              Contact
            </a>
          </div>
        </motion.div>

        {/* Right Column: 100% Unobscured Executive Wallpaper Portrait Canvas */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative"
        >
          <div className="w-full max-w-md lg:max-w-none rounded-3xl p-2 bg-gradient-to-b from-blue-500/30 via-slate-800/50 to-slate-900/80 shadow-2xl relative overflow-hidden group">
            
            {/* Glowing Accent Ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity"></div>

            {/* Photo Style Selector Header Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#070a12]/90 backdrop-blur-md border-b border-slate-800 rounded-t-2xl z-20 relative">
              <span className="font-mono text-xs text-slate-300 font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" /> Executive Look
              </span>

              <div className="inline-flex items-center p-0.5 rounded-full bg-[#0d1322] border border-slate-800 font-mono text-[10px]">
                <button
                  onClick={() => setPhotoStyle('studio')}
                  className={`px-2.5 py-0.5 rounded-full transition-all ${
                    photoStyle === 'studio' 
                      ? 'bg-blue-600 text-white font-semibold shadow-sm' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Studio Suit
                </button>
                <button
                  onClick={() => setPhotoStyle('glasses')}
                  className={`px-2.5 py-0.5 rounded-full transition-all ${
                    photoStyle === 'glasses' 
                      ? 'bg-blue-600 text-white font-semibold shadow-sm' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Glasses Look
                </button>
              </div>
            </div>

            {/* 100% Unobscured Crystal-Clear Portrait Frame */}
            <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[14/11] bg-[#070a12]">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={photoStyle}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  src={activePhoto} 
                  alt="Sai Shankar Executive Portrait" 
                  className="w-full h-full object-cover object-[center_20%] saturate-110 contrast-105 group-hover:scale-105 transition-transform duration-700"
                />
              </AnimatePresence>

              {/* Status Overlay Badges floating at top corners */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#070a12]/80 backdrop-blur-md border border-slate-700/80 text-blue-400 font-mono text-[11px] font-semibold shadow-md">
                  <Activity className="w-3.5 h-3.5 text-blue-400 animate-pulse" /> 10M+ REQS / DAY
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 text-emerald-300 font-mono text-[11px] font-semibold shadow-md">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 99.99% SLA
                </span>
              </div>
            </div>

            {/* Compact System Telemetry Control Bar beneath the photo */}
            <div className="p-4 bg-[#0d1322]/95 backdrop-blur-md rounded-b-2xl border-t border-slate-800 space-y-3">
              <div className="flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <Server className="w-4 h-4 text-blue-400" />
                  <span className="font-bold uppercase tracking-wider text-white">Live Pipeline Node</span>
                </div>
                <span className="text-cyan-400 font-semibold">Java 17 • Kafka Cluster</span>
              </div>

              <button
                onClick={handlePulse}
                className={`w-full py-2.5 rounded-xl font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                  pulseActive
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50'
                    : 'bg-blue-600/10 border border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white'
                }`}
              >
                <Zap className={`w-3.5 h-3.5 ${pulseActive ? 'animate-bounce' : ''}`} />
                {pulseActive ? 'Propagating Event Payload...' : 'Test Event Ingestion Stream'}
              </button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
