'use client';

import { Upload, User, Mail, Phone, Briefcase, ShieldCheck, CheckCircle2, Target, Zap, ArrowRight, Stars, Lock } from 'lucide-react';
import { useState } from 'react';

export default function RegisterResume() {
  const [dragActive, setDragActive] = useState(false);

  return (
    <div className="min-h-screen bg-navy-dark flex flex-col font-sans selection:bg-gold selection:text-navy-dark overflow-x-hidden">
      {/* Hero Section - Elite Registration */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 blur-[120px] rounded-full animate-pulse transition-all duration-[5000ms]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-navy-light/10 blur-[150px] rounded-full animate-float"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-transparent to-navy-dark"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center space-y-8 animate-fade-up">
          <div className="inline-block px-6 py-2 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-4">
            Network Entry
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] drop-shadow-2xl">
            Take the Next Step With <br /> <span className="text-shimmer">NAYA Staffing.</span>
          </h1>
          <p className="text-lg md:text-xl font-bold text-slate-400 max-w-3xl mx-auto leading-tight tracking-tight opacity-90">
            Upload your resume and share your career interests so our team can connect you with suitable opportunities.
          </p>
        </div>
      </section>

      {/* Form Section - Glassmorphic Container */}
      <section className="py-24 -mt-24 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto glass-panel rounded-[64px] shadow-2xl overflow-hidden flex flex-col lg:flex-row border-white/5 hover:border-white/10 transition-all duration-700">
            
            {/* Left Side: Strategic Info */}
            <div className="lg:w-2/5 bg-navy p-12 lg:p-16 text-white flex flex-col justify-between border-r border-white/5">
              <div className="space-y-12">
                <div className="space-y-4">
                    <h6 className="text-gold font-black uppercase tracking-[0.3em] text-[10px]">The Advantage</h6>
                    <h2 className="text-3xl font-black tracking-tighter uppercase leading-tight">Your Career Growth</h2>
                </div>
                <div className="space-y-10">
                  <div className="flex gap-6 group">
                    <div className="w-12 h-12 bg-gold/5 border border-gold/20 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors duration-500">
                      <Target className="w-6 h-6 text-gold group-hover:text-navy-dark transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-black text-base uppercase tracking-tight mb-2">Tailored Matches</h4>
                      <p className="text-slate-400 font-bold leading-relaxed text-sm">We only curate opportunities that align with your unique DNA and ambition.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group">
                    <div className="w-12 h-12 bg-gold/5 border border-gold/20 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors duration-500">
                      <Zap className="w-6 h-6 text-gold group-hover:text-navy-dark transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-black text-base uppercase tracking-tight mb-2">Fast Tracking</h4>
                      <p className="text-slate-400 font-bold leading-relaxed text-sm">Direct, low-latency access to global industry leaders and hiring managers.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group">
                    <div className="w-12 h-12 bg-gold/5 border border-gold/20 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors duration-500">
                      <Lock className="w-6 h-6 text-gold group-hover:text-navy-dark transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-black text-base uppercase tracking-tight mb-2">Absolute Privacy</h4>
                      <p className="text-slate-400 font-bold leading-relaxed text-sm">Your professional identity is safe. Data is never shared without explicit consent.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 pt-12 border-t border-white/5 space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                    <CheckCircle2 className="text-gold group-hover:text-navy-dark w-5 h-5 transition-colors" />
                  </div>
                  <span className="text-xs font-black text-white uppercase tracking-widest">Connect with Industry Leaders</span>
                </div>
              </div>
            </div>

            {/* Right Side: High-End Form */}
            <div className="lg:w-3/5 p-12 lg:p-20 bg-navy-dark/40 backdrop-blur-3xl">
              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                    <div className="relative group">
                      <User className="absolute left-6 top-1/2 -translate-y-1/2 text-gold opacity-50 w-5 h-5 group-focus-within:opacity-100 transition-all" />
                      <input type="text" placeholder="e.g. Alexander Pierce" className="w-full pl-16 pr-6 py-6 bg-white/5 border border-white/5 rounded-3xl focus:outline-none focus:border-gold/40 text-white text-base font-bold placeholder:text-slate-600 transition-all" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Secure Email</label>
                    <div className="relative group">
                      <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gold opacity-50 w-5 h-5 group-focus-within:opacity-100 transition-all" />
                      <input type="email" placeholder="e.g. pierce@network.com" className="w-full pl-16 pr-6 py-6 bg-white/5 border border-white/5 rounded-3xl focus:outline-none focus:border-gold/40 text-white text-base font-bold placeholder:text-slate-600 transition-all" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Contact Cipher</label>
                    <div className="relative group">
                      <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-gold opacity-50 w-5 h-5 group-focus-within:opacity-100 transition-all" />
                      <input type="tel" placeholder="+1 (555) 000-0000" className="w-full pl-16 pr-6 py-6 bg-white/5 border border-white/5 rounded-3xl focus:outline-none focus:border-gold/40 text-white text-base font-bold placeholder:text-slate-600 transition-all" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Primary Vector</label>
                    <div className="relative group">
                      <Briefcase className="absolute left-6 top-1/2 -translate-y-1/2 text-gold opacity-50 w-5 h-5 group-focus-within:opacity-100 transition-all" />
                      <select className="w-full pl-16 pr-10 py-6 bg-white/5 border border-white/5 rounded-3xl focus:outline-none focus:border-gold/40 text-white text-base font-bold appearance-none cursor-pointer transition-all">
                        <option className="bg-navy">Information Technology</option>
                        <option className="bg-navy">Healthcare Operations</option>
                        <option className="bg-navy">Creative Marketing</option>
                        <option className="bg-navy">Enterprise Sales</option>
                        <option className="bg-navy">Industrial Logistics</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* File Upload Zone - Immersive Experience */}
                <div className="space-y-4">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Asset Upload (PDF, DOCX)</label>
                  <div 
                    onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                    onDragLeave={() => setDragActive(false)}
                    className={`border-2 border-dashed rounded-[48px] p-16 text-center transition-all cursor-pointer group/upload ${
                      dragActive ? 'border-gold bg-gold/5' : 'border-white/10 bg-white/5'
                    }`}
                  >
                    <div className="w-20 h-20 bg-gold/10 rounded-3xl flex items-center justify-center mx-auto mb-6 text-gold group-hover/upload:scale-110 group-hover/upload:bg-gold group-hover/upload:text-navy-dark transition-all duration-500 shadow-xl">
                      <Upload className="w-10 h-10" />
                    </div>
                    <p className="text-white font-black text-xl mb-2 tracking-tight group-hover/upload:text-gold transition-colors">Drag and Drop Career Assets</p>
                    <p className="text-slate-500 font-bold">Max Cipher Size: 10MB</p>
                    <input type="file" className="hidden" />
                  </div>
                </div>

                <div className="pt-8">
                  <div className="flex items-start gap-4 mb-10 p-6 glass-panel rounded-3xl border-white/5">
                    <ShieldCheck className="w-6 h-6 text-gold shrink-0 mt-1" />
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest leading-loose">
                      By initiating registration, you sanction our <span className="text-white">Terms of Engagement</span> and <span className="text-white">Privacy Protocols</span>. We handle all personal data with absolute encryption and regulatory compliance.
                    </p>
                  </div>
                  <button className="w-full bg-gold hover:bg-gold-hover text-navy-dark py-7 rounded-[32px] font-black text-xs uppercase tracking-[0.4em] shadow-[0_4px_50px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-2 flex items-center justify-center gap-6 group">
                    Upload Resume <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
