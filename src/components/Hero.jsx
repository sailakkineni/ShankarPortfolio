import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, FileText, Zap, ShieldCheck, Activity, Server, Cpu, Layers, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import heroBg from '../assets/bg-hero.jpg';

export default function Hero({ onOpenResume }) {
  const [pulseActive, setPulseActive] = useState(false);

  const handlePulse = () => {
    setPulseActive(true);
    setTimeout(() => setPulseActive(false), 2000);
  };

  return (
    <section id="overview" className="relative pt-28 pb-16 lg:py-28 min-h-[88vh] flex items-center overflow-hidden">
      {/* Ambient Full Intro Background Photo Wallpaper */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src={heroBg} 
          alt="Sai Shankar Ambient Background Wallpaper" 
          className="w-full h-full object-cover object-[center_25%] opacity-20 filter saturate-120 blur-[2px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070a12] via-[#070a12]/90 to-[#070a12]/75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#070a12] via-transparent to-[#070a12]/80"></div>
        <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px]"></div>
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

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-normal mb-8 leading-relaxed">
            Senior Software Engineer with 5+ years of experience designing and operating mission-critical backend microservices, Kafka event streaming pipelines, and cloud infrastructure processing 10M+ daily requests with 99.99% availability.
          </p>

          {/* Key Metrics Counter Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 w-full max-w-2xl mb-8">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="bg-[#0d1322]/90 backdrop-blur-md border border-slate-800 rounded-xl p-4 text-center hover:border-blue-500/40 transition-all shadow-xl group">
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
              className="px-7 py-3.5 rounded-xl bg-[#0d1322] border border-slate-700 text-slate-200 hover:text-white hover:border-blue-500 font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 hover:-translate-y-0.5"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              View Resume
            </button>

            <a
              href="#contact"
              className="px-7 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 font-mono text-xs font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5"
            >
              Contact
            </a>
          </div>
        </motion.div>

        {/* Right Column: High-Visibility Intro Picture Showcase & System Telemetry Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative"
        >
          <div className="w-full max-w-md lg:max-w-none rounded-3xl p-2 bg-gradient-to-b from-blue-500/30 via-slate-800/50 to-slate-900/80 shadow-2xl relative overflow-hidden group">
            
            {/* Glowing Accent Ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity"></div>

            {/* High-Visibility Wallpaper Portrait */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[14/10] bg-[#070a12]">
              <img 
                src={heroBg} 
                alt="Sai Shankar Senior Software Engineer Wallpaper" 
                className="w-full h-full object-cover object-[center_20%] saturate-110 contrast-105 group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Subtle Bottom Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070a12] via-[#070a12]/30 to-transparent"></div>

              {/* Status Overlay Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#070a12]/80 backdrop-blur-md border border-slate-700/80 text-blue-400 font-mono text-[11px] font-semibold">
                  <Activity className="w-3.5 h-3.5 text-blue-400 animate-pulse" /> 10M+ REQS / DAY
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 text-emerald-300 font-mono text-[11px] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> 99.99% SLA
                </span>
              </div>
            </div>

            {/* Live Pipeline Telemetry Footer Card */}
            <div className="p-4 sm:p-5 bg-[#0d1322]/95 backdrop-blur-md rounded-b-2xl border-t border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Server className="w-4 h-4 text-blue-400" />
                  <span className="font-mono text-xs text-white font-bold tracking-wider uppercase">Live Pipeline Node</span>
                </div>
                <span className="font-mono text-[11px] text-cyan-400">Java 17 / Kafka</span>
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
