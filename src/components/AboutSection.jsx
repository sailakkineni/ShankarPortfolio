import { motion } from 'framer-motion';
import { ShieldCheck, ExternalLink, Award, CheckCircle2, GraduationCap, Server, Sparkles } from 'lucide-react';
import { personalInfo, certifications } from '../data/portfolioData';

export default function AboutSection() {
  const awsCert = certifications.find(c => c.badge === "AWS Developer Associate");

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest px-3 py-1 rounded bg-blue-500/10 border border-blue-500/20">
            01. Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white">
            Professional Summary
          </h2>
          <div className="h-[1px] bg-slate-800 flex-grow ml-4"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base leading-relaxed font-normal">
            <p>
              I am a <strong className="text-white">Senior Software Engineer with 5+ years of experience</strong> architecting, building, and operating scalable backend services and distributed systems across financial technology, state government platforms, and cloud environments.
            </p>

            <p>
              My background focuses on high-throughput financial and transaction-processing platforms supporting payments, refunds, chargebacks, reconciliation, asset pricing, portfolio valuation, and investment workflows. I specialize in <strong className="text-blue-400">Java, Spring Boot, Apache Kafka, AWS, Oracle, and MongoDB</strong>.
            </p>

            {/* Philosophy Accent Card */}
            <div className="p-6 rounded-xl bg-[#0d1322] border-l-4 border-blue-500 border-y border-r border-slate-800 my-6">
              <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-wider mb-2 font-bold">
                <Sparkles className="w-4 h-4" /> Architectural Focus
              </div>
              <p className="text-slate-300 text-sm sm:text-base italic">
                "Designing microservices with clear boundaries, resilient integration patterns, asynchronous event pipelines, and 99.99% availability under peak financial workloads."
              </p>
            </div>

            <p>
              Additionally, I have experience integrating conversational AI models using <strong className="text-cyan-400">Dialogflow and Python webhooks</strong> into enterprise Java services and APIs, and routinely leverage <strong className="text-white">GitHub Copilot</strong> for AI-assisted development.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-3 pt-4 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Java 17 & Spring Boot Microservices</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Apache Kafka Event-Streaming</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Oracle DB & MongoDB Query Tuning</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>AWS (ECS, Lambda, RDS, S3, EC2)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>OAuth 2.0 / OpenID / JWT / RBAC</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Prometheus, Grafana & CloudWatch</span>
              </div>
            </div>
          </div>

          {/* Right Cards Column */}
          <div className="lg:col-span-5 space-y-6">

            {/* Display Picture Card */}
            <div className="bg-[#0d1322] border border-slate-800 rounded-2xl p-4 shadow-xl overflow-hidden group hover:border-blue-500/50 transition-all">
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden border border-slate-800">
                <img 
                  src={personalInfo.displayProfileImage} 
                  alt="Sai Shankar Display Headshot" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070a12] via-transparent to-transparent opacity-80"></div>
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs">
                  <div>
                    <span className="text-white font-bold font-sans block text-base">Sai Shankar</span>
                    <span className="text-blue-400">Senior Engineer @ Morgan Stanley</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* AWS Certified Developer Card */}
            <div className="bg-[#0d1322] border border-amber-500/30 rounded-2xl p-6 relative overflow-hidden shadow-xl group hover:border-amber-500/60 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Award className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-mono text-[10px] font-bold uppercase tracking-wider">
                  Verified 2025
                </span>
              </div>

              <h3 className="text-xl font-bold font-sans text-white mb-1 group-hover:text-amber-300 transition-colors">
                AWS Certified Developer
              </h3>
              <p className="text-xs font-mono text-amber-400 mb-3">Associate Level • Amazon Web Services</p>
              
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Official AWS credential validating expertise in developing, deploying, and debugging cloud applications across AWS ECS, Lambda, RDS, S3, EC2, and CloudWatch.
              </p>

              {awsCert && (
                <a
                  href={awsCert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-amber-400 hover:text-white transition-colors"
                >
                  <span>Verify Credly Badge</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            {/* Academic Degrees Card */}
            <div className="bg-[#0d1322] border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-4 font-bold">
                <GraduationCap className="w-4 h-4" /> Academic Degrees
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-white">Master of Science, Computer & Information Science</h4>
                  <p className="text-xs font-mono text-slate-400">University at Albany, SUNY, NY</p>
                </div>
                <div className="pt-3 border-t border-slate-800">
                  <h4 className="text-sm font-bold text-white">Bachelor's, Computer Science and Engineering</h4>
                  <p className="text-xs font-mono text-slate-400">Malla Reddy Engineering College, India</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
