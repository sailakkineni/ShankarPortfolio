import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, ShieldCheck, Cloud, Database, Sparkles, Search } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categoryIcons = {
    "Languages & CS Core": Code,
    "Backend & Microservices": Server,
    "Financial & Security APIs": ShieldCheck,
    "Cloud & DevOps": Cloud,
    "Databases & Caching": Database,
    "AI, Web & Testing": Sparkles
  };

  const categories = ['All', ...skillCategories.map(c => c.category)];

  const filteredCategories = skillCategories.filter(cat => 
    activeCategory === 'All' || cat.category === activeCategory
  );

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest px-3 py-1 rounded bg-blue-500/10 border border-blue-500/20">
            04. Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white">
            Technical Arsenal
          </h2>
          <div className="h-[1px] bg-slate-800 flex-grow ml-4"></div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg font-mono text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-[#0d1322] text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64 shrink-0">
            <Search className="w-3.5 h-3.5 text-blue-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. Kafka)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-[#0d1322] border border-slate-800 rounded-lg text-xs font-mono text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group, idx) => {
            const IconComponent = categoryIcons[group.category] || Code;
            
            const filteredSkills = group.skills.filter(s => 
              searchTerm === '' || s.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (filteredSkills.length === 0 && searchTerm !== '') return null;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-[#0d1322] border border-slate-800 rounded-2xl p-6 hover:border-blue-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-800">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-mono text-xs uppercase tracking-wider text-blue-400 font-bold">
                      {group.category}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {filteredSkills.map((skill, i) => (
                      <div key={i} className="group">
                        <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                          <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-blue-400">{skill.level}%</span>
                        </div>

                        {/* Visual Progress Bar */}
                        <div className="h-1.5 w-full bg-[#070a12] rounded-full overflow-hidden border border-slate-800">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: i * 0.04 }}
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{filteredSkills.length} skills listed</span>
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
