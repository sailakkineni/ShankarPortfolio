import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Search, ChevronRight, Layers, ExternalLink } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function ExperienceSection() {
  const [activeCompanyIndex, setActiveCompanyIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const currentExp = experiences[activeCompanyIndex];

  const filteredHighlights = currentExp.highlights.filter(h =>
    searchQuery === '' || h.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="experience" className="py-8 sm:py-12 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest px-3 py-1 rounded bg-blue-500/10 border border-blue-500/20">
            02. Career History
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-sans text-white">
            Where I've Worked
          </h2>
          <div className="h-[1px] bg-slate-800 flex-grow ml-4"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Company Selector Column */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Select Position
            </span>

            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-2 lg:pb-0">
              {experiences.map((exp, idx) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveCompanyIndex(idx)}
                  className={`p-3.5 rounded-xl text-left font-sans transition-all border flex flex-col gap-0.5 shrink-0 lg:shrink ${
                    activeCompanyIndex === idx
                      ? 'bg-[#0d1322] border-blue-500 text-white shadow-xl shadow-blue-500/10'
                      : 'bg-[#070a12] border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm sm:text-base">{exp.company}</span>
                    {activeCompanyIndex === idx && <ChevronRight className="w-4 h-4 text-blue-400 hidden lg:block" />}
                  </div>
                  <span className="text-xs font-mono text-blue-400">{exp.role}</span>
                  <span className="text-[11px] font-mono text-slate-400">{exp.period}</span>
                </button>
              ))}
            </div>

            {/* Keyword Search Filter Card */}
            <div className="p-3.5 rounded-xl bg-[#0d1322] border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                <Search className="w-3.5 h-3.5 text-blue-400" />
                <span>Search Highlights</span>
              </div>
              <input
                type="text"
                placeholder="Search (e.g. Kafka, Latency, AWS)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 bg-[#070a12] border border-slate-800 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          {/* Detailed Experience Card */}
          <div className="lg:col-span-8">
            <motion.div
              key={currentExp.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-[#0d1322] border border-slate-800 rounded-2xl p-5 sm:p-8 shadow-xl"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-800 mb-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-white mb-1">
                    {currentExp.role} <span className="text-blue-400">@ {currentExp.company}</span>
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      {currentExp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-blue-400" />
                      {currentExp.location}
                    </span>
                  </div>
                </div>

                <a
                  href="#architecture"
                  className="px-3.5 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-semibold hover:bg-blue-600 hover:text-white transition-all self-start sm:self-center flex items-center gap-1.5"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>View Topology</span>
                </a>
              </div>

              {/* Highlights List */}
              <div className="space-y-3 mb-6">
                {filteredHighlights.length > 0 ? (
                  filteredHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3 text-slate-300">
                      <span className="text-blue-400 text-xs mt-1 shrink-0">▹</span>
                      <p className="text-xs sm:text-sm leading-relaxed font-normal text-slate-300">
                        {highlight}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-xs font-mono text-amber-400 py-3">
                    No highlights match "{searchQuery}". Try clearing search filter.
                  </p>
                )}
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-4 border-t border-slate-800">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2.5">
                  Technologies Used:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentExp.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 bg-[#070a12] text-slate-300 border border-slate-800 text-xs font-mono rounded-lg hover:border-blue-500/40 hover:text-blue-400 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
