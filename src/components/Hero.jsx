import { motion } from 'framer-motion';
import { FileText, Zap, ShieldCheck, Activity, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import heroBg from '../assets/bg-hero.jpg';

export default function Hero({ onOpenResume }) {
  return (
    <section id="overview" className="relative pt-28 pb-16 lg:py-28 min-h-[90vh] flex items-center overflow-hidden bg-[#070a12]">
      
      {/* Background Image Layer (Positioned on the Right, Blending Seamlessly into #070a12 on the Left) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-end">
        <div className="w-full lg:w-[52%] h-full relative">
          <img 
            src={heroBg} 
            alt="Sai Shankar Executive Portrait" 
            className="w-full h-full object-cover object-[center_18%] opacity-95 filter saturate-[1.08] contrast-[1.05]"
          />

          {/* Seamless Gradient Blends: Blends photo color into solid #070a12 on the left & top/bottom */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070a12] via-[#070a12]/75 via-40% to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#070a12] via-transparent to-[#070a12]/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#070a12]/80 via-transparent to-[#070a12] lg:hidden"></div>
        </div>
      </div>

      {/* Main Grid Content Layer */}
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 lg:gap-12 items-center z-10 relative">
        
        {/* Left Column Text & Headlines Spanning Over Blended Background */}
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
              <div key={idx} className="bg-[#0d1322]/90 backdrop-blur-md border border-slate-800/90 rounded-xl p-4 text-center hover:border-blue-500/40 transition-all shadow-xl group">
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

        {/* Right Column: Clean Open Space so face shows up 100% un-obscured on the right side */}
        <div className="lg:col-span-5 hidden lg:flex flex-col justify-end items-end h-full min-h-[480px] pointer-events-none">
          {/* Subtle Bottom Floating Telemetry Pill */}
          <div className="p-3.5 rounded-2xl bg-[#0d1322]/80 backdrop-blur-md border border-slate-800/90 text-xs font-mono text-slate-300 flex items-center gap-3 shadow-2xl pointer-events-auto">
            <span className="flex items-center gap-1.5 text-blue-400 font-semibold">
              <Activity className="w-4 h-4 animate-pulse text-blue-400" /> 10M+ REQS/DAY
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 99.99% SLA
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
