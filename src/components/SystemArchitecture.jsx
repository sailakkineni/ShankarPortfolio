import { useState } from 'react';
import { motion } from 'framer-motion';
import { Server, Cpu, Database, ShieldCheck, Zap, Activity, Layers, Play, CheckCircle2, RefreshCw, ArrowRight, Sparkles } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function SystemArchitecture() {
  const [selectedCompanyId, setSelectedCompanyId] = useState('morgan-stanley');
  const [simulating, setSimulating] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const activeExp = experiences.find(e => e.id === selectedCompanyId) || experiences[0];

  const handleRunSimulation = () => {
    if (simulating) return;
    setSimulating(true);
    setActiveStep(1);

    const t1 = setTimeout(() => setActiveStep(2), 700);
    const t2 = setTimeout(() => setActiveStep(3), 1400);
    const t3 = setTimeout(() => setActiveStep(4), 2100);
    const t4 = setTimeout(() => {
      setActiveStep(5);
      setSimulating(false);
    }, 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  };

  return (
    <section id="architecture" className="py-8 sm:py-12 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-4 mb-1.5">
              <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest px-3 py-1 rounded bg-blue-500/10 border border-blue-500/20">
                03. Blueprint
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-sans text-white">
                System Topology & Architecture
              </h2>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-2xl font-normal">
              Interactive flow topologies demonstrating high-throughput event processing, asynchronous microservices, and database tuning.
            </p>
          </div>

          {/* Selector Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-[#0d1322] rounded-xl border border-slate-800 shrink-0">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => {
                  setSelectedCompanyId(exp.id);
                  setActiveStep(0);
                }}
                className={`px-3.5 py-1.5 rounded-lg font-mono text-xs font-semibold transition-all flex items-center gap-2 ${
                  selectedCompanyId === exp.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <Server className="w-3.5 h-3.5" />
                <span>{exp.company}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Stage Card */}
        <div className="bg-[#0d1322] border border-slate-800 rounded-2xl p-5 sm:p-8 shadow-2xl relative overflow-hidden">
          
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/80 mb-6">
            <div>
              <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider block mb-0.5">
                Active Architecture Spec • {activeExp.company}
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-sans text-white">
                {activeExp.topology.title}
              </h3>
            </div>

            <button
              onClick={handleRunSimulation}
              disabled={simulating}
              className={`px-4 py-2 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
                simulating
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/40 cursor-wait'
                  : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30'
              }`}
            >
              {simulating ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  Processing Stream...
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-white" />
                  Simulate Event Pulse
                </>
              )}
            </button>
          </div>

          {/* Node Flow Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
            {activeExp.topology.nodes.map((node, index) => {
              const stepNum = index + 1;
              const isActive = activeStep === stepNum;
              const isDone = activeStep > stepNum;

              return (
                <div key={index} className="relative flex flex-col items-center">
                  <div
                    className={`w-full p-4 rounded-xl bg-[#070a12] border-2 transition-all flex flex-col justify-between h-full ${
                      isActive
                        ? 'border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] bg-blue-500/5'
                        : isDone
                        ? 'border-emerald-500/60'
                        : 'border-slate-800'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-blue-400">
                          STEP 0{stepNum}
                        </span>
                        {isDone ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-blue-400 animate-ping' : 'bg-slate-700'}`} />
                        )}
                      </div>

                      <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">
                        {node.title}
                      </h4>
                      <p className="text-[10px] font-mono text-blue-400 mb-2">
                        {node.role}
                      </p>
                    </div>

                    <div className="mt-2 pt-2 border-t border-slate-800/80">
                      <span className="text-[10px] font-mono text-slate-400 leading-tight block">
                        {node.tech}
                      </span>
                    </div>
                  </div>

                  {index < activeExp.topology.nodes.length - 1 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 items-center justify-center">
                      <ArrowRight className={`w-4 h-4 ${activeStep > stepNum ? 'text-emerald-400' : activeStep === stepNum ? 'text-blue-400 animate-pulse' : 'text-slate-700'}`} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Log Status Footer */}
          <div className="mt-6 p-3.5 rounded-xl bg-[#070a12] border border-slate-800 font-mono text-xs text-slate-300 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
              <span>
                {activeStep === 0 && "Click 'Simulate Event Pulse' to test payload propagation across system nodes."}
                {activeStep === 1 && "▶ [Ingress] Validating security tokens (OAuth 2.0 / JWT)..."}
                {activeStep === 2 && "▶ [Kafka] Publishing transaction payload to distributed brokers..."}
                {activeStep === 3 && "▶ [Services] Executing Spring Boot async processing workers..."}
                {activeStep === 4 && "▶ [Database] Performing partitioned Oracle / MongoDB persistence..."}
                {activeStep === 5 && "✔ [Telemetry] Complete! Latency optimized (-35%), 99.99% availability."}
              </span>
            </div>

            <div className="flex items-center gap-3 text-[11px] text-slate-400">
              <span>Latency: <strong className="text-blue-400">&lt;50ms</strong></span>
              <span>Availability: <strong className="text-emerald-400">99.99%</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
