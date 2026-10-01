import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Copy, Check, Send, MapPin, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-8 sm:py-12 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Section Header */}
        <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest px-3 py-1 rounded bg-blue-500/10 border border-blue-500/20 inline-block mb-3">
          06. Contact
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white mb-3">
          Get In Touch
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-2xl mx-auto font-normal">
          Whether you have a question about distributed architecture, Java microservices, or potential senior engineering roles, feel free to reach out directly.
        </p>

        {/* Contact Info Pills */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
          
          {/* Email Pill */}
          <div className="bg-[#0d1322] border border-slate-800 px-4 py-2.5 rounded-xl flex items-center gap-3">
            <Mail className="w-4 h-4 text-blue-400" />
            <span className="font-mono text-xs text-white">{personalInfo.email}</span>
            <button
              onClick={() => handleCopy(personalInfo.email, 'email')}
              className="p-1 rounded bg-[#070a12] text-slate-400 hover:text-blue-400 transition-colors"
              title="Copy Email"
            >
              {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Phone Pill */}
          <div className="bg-[#0d1322] border border-slate-800 px-4 py-2.5 rounded-xl flex items-center gap-3">
            <Phone className="w-4 h-4 text-blue-400" />
            <span className="font-mono text-xs text-white">{personalInfo.phone}</span>
            <button
              onClick={() => handleCopy(personalInfo.phone, 'phone')}
              className="p-1 rounded bg-[#070a12] text-slate-400 hover:text-blue-400 transition-colors"
              title="Copy Phone"
            >
              {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* GitHub Pill */}
          <a 
            href={personalInfo.github} 
            target="_blank" 
            rel="noreferrer"
            className="bg-[#0d1322] border border-slate-800 hover:border-blue-500/40 px-4 py-2.5 rounded-xl flex items-center gap-2 text-white font-mono text-xs transition-colors"
          >
            <span className="text-blue-400 font-bold">GitHub:</span>
            <span>sailakkineni</span>
          </a>

          {/* Location Pill */}
          <div className="bg-[#0d1322] border border-slate-800 px-4 py-2.5 rounded-xl flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span className="font-mono text-xs text-white">New York, NY</span>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="bg-[#0d1322] border border-slate-800 rounded-2xl p-5 sm:p-8 text-left shadow-2xl">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-sans text-white">Message Delivered!</h3>
              <p className="text-xs font-mono text-blue-400">
                Thank you for reaching out. Sai Shankar will respond shortly at {form.email}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#070a12] border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-blue-500 transition-colors font-sans"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#070a12] border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-blue-500 transition-colors font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">Subject</label>
                <input
                  type="text"
                  placeholder="Senior Role Inquiry / Architectural Discussion"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#070a12] border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-blue-500 transition-colors font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5">Message</label>
                <textarea
                  required
                  rows="3"
                  placeholder="Hi Shankar, I would like to get in touch..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#070a12] border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-blue-500 transition-colors font-sans resize-none"
                ></textarea>
              </div>

              <div className="flex items-center justify-between pt-1">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-xs font-mono text-blue-400 hover:underline inline-flex items-center gap-1"
                >
                  Direct Email <Sparkles className="w-3 h-3" />
                </a>

                <button
                  type="submit"
                  className="px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 fill-white" />
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
