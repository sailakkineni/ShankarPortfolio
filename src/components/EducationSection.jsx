import { motion } from 'framer-motion';
import { GraduationCap, Award, ExternalLink, CheckCircle2 } from 'lucide-react';
import { education, certifications } from '../data/portfolioData';

export default function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-16" />

        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
            05. Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white">
            Education & Certifications
          </h2>
          <div className="h-[1px] bg-slate-800 flex-grow ml-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Education Column */}
          <div className="space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold flex items-center gap-2 mb-4">
              <GraduationCap className="w-4 h-4" /> Academic Degrees
            </h3>

            {education.map((edu, idx) => (
              <div key={idx} className="bg-[#0d1322] border border-slate-800 rounded-2xl p-6 hover:border-blue-500/40 transition-all flex items-start gap-4 shadow-xl">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-sans text-white mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-sans text-blue-400 mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs font-mono text-slate-400">
                    {edu.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Column */}
          <div className="space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold flex items-center gap-2 mb-4">
              <Award className="w-4 h-4" /> Official Certifications
            </h3>

            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-[#0d1322] border border-slate-800 rounded-2xl p-6 hover:border-blue-500/40 transition-all flex flex-col justify-between shadow-xl">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold font-sans text-white">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-mono text-blue-400">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  </div>

                  {cert.link !== "#" && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white transition-all"
                      title="Verify Credly Badge"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Badge
                  </span>
                  <span>{cert.badge}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
