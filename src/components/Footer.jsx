import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-800/80 bg-[#070a12] text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-sans font-bold text-white text-sm">{personalInfo.name}</span>
          <span className="text-slate-500 mx-2">•</span>
          <span>Senior Software Engineer</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={personalInfo.awsBadgeUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-amber-400 transition-colors"
          >
            AWS Certified Developer
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-blue-400 transition-colors"
          >
            {personalInfo.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
