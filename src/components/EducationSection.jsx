import { motion } from 'framer-motion';
import { GraduationCap, Award, ExternalLink, CheckCircle2, BookOpen, MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import { education, certifications } from '../data/portfolioData';

export default function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-16" />

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-14">
          <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20">
            05. Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white">
            Education & Certifications
          </h2>
          <div className="h-[1px] bg-slate-800 flex-grow ml-4 hidden sm:block"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Sleek Executive Academic Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5 mb-8">
              <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-sans text-white">
                Academic Degrees Timeline
              </h3>
            </div>

            {/* Vertical Timeline Container */}
            <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-blue-500 before:via-cyan-500 before:to-slate-800">
              
              {education.map((edu, idx) => (
                <motion.div 
                  key={edu.id || idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative group"
                >
                  {/* Timeline Glowing Node Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-4 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#070a12] shadow-lg shadow-blue-500/50 group-hover:scale-125 transition-transform" />

                  {/* Degree Card */}
                  <div className="bg-[#0d1322] border border-slate-800/90 rounded-2xl p-6 sm:p-7 hover:border-blue-500/40 transition-all shadow-xl group-hover:-translate-y-0.5">
                    
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-[11px] font-semibold mb-2">
                          {edu.year}
                        </span>
                        <h4 className="text-xl font-bold font-sans text-white group-hover:text-blue-300 transition-colors leading-snug">
                          {edu.degree}
                        </h4>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-[#070a12] px-3 py-1.5 rounded-lg border border-slate-800">
                        <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    <p className="text-sm font-semibold text-cyan-400 mb-4 font-sans">
                      {edu.institution}
                    </p>

                    {/* Focus Area Pill */}
                    {edu.focus && (
                      <div className="mb-4 p-3 rounded-xl bg-[#070a12]/80 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-blue-400 shrink-0" />
                        <span><strong className="text-white">Core Focus:</strong> {edu.focus}</span>
                      </div>
                    )}

                    {/* Bullet Highlights */}
                    {edu.highlights && (
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-normal">
                        {edu.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                  </div>
                </motion.div>
              ))}

            </div>
          </div>

          {/* Right Column: Industry Certifications & Verified Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5 mb-8">
              <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-sans text-white">
                Verified Certifications
              </h3>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="bg-[#0d1322] border border-amber-500/30 hover:border-amber-500/60 rounded-2xl p-6 sm:p-7 transition-all shadow-xl group relative overflow-hidden"
                >
                  {/* Subtle Background Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none"></div>

                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3.5">
                      <div className="p-3.5 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/30 shrink-0 group-hover:scale-110 transition-transform">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold font-sans text-white group-hover:text-amber-300 transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-xs font-mono text-amber-400 mt-1">
                          {cert.issuer} • Verified {cert.year}
                        </p>
                      </div>
                    </div>

                    {cert.link && cert.link !== "#" && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500 hover:text-slate-950 transition-all shrink-0 shadow-lg"
                        title="Verify Official Credly Badge"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-300">
                    <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" /> Credly Badge Verified
                    </span>
                    <span className="px-2.5 py-1 rounded bg-[#070a12] border border-slate-800 text-slate-400 font-semibold">
                      {cert.badge}
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* AWS Credly Verification Highlight Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900/20 via-[#0d1322] to-amber-900/10 border border-slate-800 shadow-xl">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4" /> Continuous Skill Verification
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  All cloud certifications are backed by official digital badges from AWS Credly and verified through production distributed microservices deployment at Morgan Stanley.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
