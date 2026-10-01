import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Copy, Check, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { personalInfo, experiences, skillCategories, education, certifications } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const fullText = `
SHANKAR
New York | ${personalInfo.phone} | ${personalInfo.email}

PROFESSIONAL SUMMARY
${personalInfo.summary}

TECHNICAL SKILLS
${skillCategories.map(c => `${c.category}: ${c.skills.map(s => s.name).join(', ')}`).join('\n')}

PROFESSIONAL EXPERIENCE
${experiences.map(e => `
${e.company} | ${e.role} | ${e.period}
${e.highlights.map(h => `- ${h}`).join('\n')}
`).join('\n')}

EDUCATION
${education.map(e => `${e.degree} | ${e.institution}`).join('\n')}

CERTIFICATIONS
${certifications.map(c => `${c.title} | ${c.issuer} (${c.year})`).join('\n')}
`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-[#0d1322] border border-blue-500/40 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Top Control Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#070a12] shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="font-mono text-xs uppercase tracking-wider text-blue-400 font-bold">
                Shankar — Full Resume View
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleCopyText}
                className="px-3 py-1.5 rounded-lg bg-[#0d1322] border border-slate-700 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Text'}</span>
              </button>

              <button
                onClick={handlePrint}
                className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs font-mono flex items-center gap-1.5 shadow-lg shadow-blue-600/30 transition-all"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="p-8 sm:p-12 overflow-y-auto font-sans text-slate-300 space-y-8 bg-[#070a12]">
            
            {/* Resume Header */}
            <div className="text-center border-b border-slate-800 pb-6">
              <h1 className="text-3xl sm:text-4xl font-bold font-sans text-white tracking-tight uppercase">
                SHANKAR
              </h1>
              <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-mono text-blue-400 mt-3">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> New York
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5" /> {personalInfo.phone}
                </span>
                <span>•</span>
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1 hover:underline">
                  <Mail className="w-3.5 h-3.5" /> {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold border-b border-slate-800 pb-1 mb-3">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {personalInfo.summary}
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold border-b border-slate-800 pb-1 mb-3">
                TECHNICAL SKILLS
              </h2>
              <div className="space-y-2 text-xs font-mono text-slate-300">
                {skillCategories.map((cat, i) => (
                  <div key={i}>
                    <strong className="text-white">{cat.category}: </strong>
                    <span>{cat.skills.map(s => s.name).join(', ')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Experience */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold border-b border-slate-800 pb-1 mb-4">
                PROFESSIONAL EXPERIENCE
              </h2>
              
              <div className="space-y-6">
                {experiences.map((exp) => (
                  <div key={exp.id} className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between font-mono">
                      <span className="font-bold text-sm text-white">
                        {exp.company} <span className="text-blue-400">| {exp.role}</span>
                      </span>
                      <span className="text-xs text-slate-400">{exp.period}</span>
                    </div>

                    <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside font-normal">
                      {exp.highlights.map((bullet, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="grid sm:grid-cols-2 gap-6 pt-2">
              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold border-b border-slate-800 pb-1 mb-3">
                  EDUCATION
                </h2>
                <div className="space-y-2 text-xs font-mono text-slate-300">
                  {education.map((edu, idx) => (
                    <div key={idx}>
                      <strong className="text-white block">{edu.degree}</strong>
                      <span>{edu.institution}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold border-b border-slate-800 pb-1 mb-3">
                  CERTIFICATIONS
                </h2>
                <div className="space-y-2 text-xs font-mono text-slate-300">
                  {certifications.map((cert, idx) => (
                    <div key={idx}>
                      <strong className="text-amber-400 block">{cert.title} ({cert.year})</strong>
                      <span>{cert.issuer}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
