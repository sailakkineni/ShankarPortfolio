import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, FileText, Zap, ShieldCheck, Activity, Server, Cpu, Layers } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [pulseActive, setPulseActive] = useState(false);

  const handlePulse = () => {
    setPulseActive(true);
    setTimeout(() => setPulseActive(false), 2000);
  };

  return (
    <section id="overview" className="relative pt-28 pb-10 sm:pb-12 flex items-center overflow-hidden">
      {/* Background Hero Photo Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src={personalInfo.heroBgImage} 
          alt="Sai Shankar Ambient Background" 
          className="w-full h-full object-cover object-center opacity-15 filter grayscale blur-[2px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070a12] via-[#070a12]/85 to-[#070a12]/95"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#070a12]/60 to-[#070a12]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10 relative">
        
        {/* Left Column Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Status Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
              MORGAN STANLEY • SENIOR ENGINEER
            </span>

            <a
              href={personalInfo.awsBadgeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs font-medium hover:bg-amber-500/20 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              AWS CERTIFIED DEVELOPER
            </a>
          </div>

          {/* Title Header */}
          <h1 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-3 leading-[1.08]">
            Sai Shankar
          </h1>

          <h2 className="text-lg sm:text-2xl font-sans font-semibold text-slate-300 mb-4 leading-relaxed">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">High-Throughput Financial</span> & Cloud Systems.
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-normal mb-8 leading-relaxed">
            Senior Software Engineer with 5+ years of experience designing and operating mission-critical backend microservices, Kafka event streaming pipelines, and cloud infrastructure processing 10M+ daily requests with 99.99% availability.
          </p>

          {/* Key Metrics Counter Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl mb-8">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="bg-[#0d1322]/90 backdrop-blur-md border border-slate-800 rounded-xl p-3.5 text-center hover:border-blue-500/40 transition-colors shadow-lg">
                <div className="text-xl sm:text-2xl font-bold font-sans text-blue-400 mb-0.5">
                  {stat.value}
                </div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#architecture"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2"
            >
              <Zap className="w-4 h-4 fill-white" />
              Interactive Architecture
            </a>

            <button
              onClick={onOpenResume}
              className="px-6 py-3 rounded-xl bg-[#0d1322] border border-slate-700 text-slate-200 hover:text-white hover:border-blue-500 font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              View Resume
            </button>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 font-mono text-xs font-bold uppercase tracking-wider transition-all"
            >
              Contact
            </a>
          </div>
        </motion.div>

        {/* Right Column: Profile Display Headshot + Telemetry Node */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col items-center justify-center gap-4"
        >
          {/* Profile Display Headshot Card */}
          <div className="w-full bg-[#0d1322]/90 backdrop-blur-xl border border-slate-800 rounded-2xl p-4 shadow-xl relative group hover:border-blue-500/50 transition-all flex items-center gap-4">
            <div className="relative shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-blue-500/60 p-0.5 shadow-lg shadow-blue-500/20">
                <img 
                  src={personalInfo.displayProfileImage} 
                  alt="Sai Shankar Display Headshot" 
                  className="w-full h-full object-cover object-top rounded-lg"
                />
              </div>
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#0d1322] shadow"></span>
            </div>

            <div>
              <h3 className="font-sans font-bold text-white text-base sm:text-lg">Sai Shankar</h3>
              <p className="text-xs font-mono text-blue-400 font-medium mb-0.5">Senior Software Engineer</p>
              <p className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                <span>Morgan Stanley</span> • <span>New York, NY</span>
              </p>
            </div>
          </div>

          {/* Interactive Live Pipeline Node */}
          <div className="w-full bg-[#0d1322]/90 backdrop-blur-xl border border-slate-800 rounded-2xl p-5 relative overflow-hidden shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-blue-400" />
                <span className="font-mono text-xs text-white font-bold tracking-wider uppercase">Live Pipeline State</span>
              </div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] font-semibold">
                <Activity className="w-3 h-3 animate-pulse" /> 10M+ REQS/DAY
              </span>
            </div>

            {/* Pipeline Telemetry Items */}
            <div className="space-y-2.5 font-mono text-xs">
              <div className="p-2.5 rounded-lg bg-[#070a12] border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400">Ingestion Topic:</span>
                <span className="text-blue-400 font-semibold">pricing.realtime.v1</span>
              </div>

              <div className="p-2.5 rounded-lg bg-[#070a12] border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400">Microservices:</span>
                <span className="text-cyan-400 font-semibold">Java 17 / Spring Boot</span>
              </div>

              <div className="p-2.5 rounded-lg bg-[#070a12] border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400">Optimization:</span>
                <span className="text-emerald-400 font-semibold">-35% Latency Boost</span>
              </div>

              <div className="p-2.5 rounded-lg bg-[#070a12] border border-slate-800 flex items-center justify-between">
                <span className="text-slate-400">Availability:</span>
                <span className="text-amber-400 font-semibold">99.99% SLA Uptime</span>
              </div>
            </div>

            {/* Simulated Event Trigger */}
            <div className="mt-4 pt-3 border-t border-slate-800">
              <button
                onClick={handlePulse}
                className={`w-full py-2.5 rounded-lg font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
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
