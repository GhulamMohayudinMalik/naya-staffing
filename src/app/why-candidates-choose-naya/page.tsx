"use client";

import Link from "next/link";
import { ArrowRight, CheckSquare, Target, Users, Search, FileText, Clock, Briefcase, TrendingUp, CheckCircle, Quote, Settings, Layers, CalendarCheck, Recycle, Navigation, FileEdit, Check, Stars } from "lucide-react";

const testimonials = [
  { text: "NAYA Staffing made the process effortless. I landed three interviews within weeks after months of hearing nothing.", author: "Senior Product Manager" },
  { text: "Thanks to NAYA Staffing, my resume finally got noticed by the right people. Their personal touch changed everything.", author: "Marketing Director" },
  { text: "With NAYA Staffing, I stopped applying blindly and focused on real, high-fit roles. The results were amazing.", author: "Director of Operations" },
  { text: "I didn’t realize recruiters could represent me directly. NAYA Staffing felt like having a private career agent.", author: "Senior Finance Manager" },
  { text: "After 10 years in the same role, NAYA Staffing helped me rebrand and negotiate a better salary than I expected.", author: "IT Program Manager" },
  { text: "They truly understood my career goals and marketed me to top firms I’d never reached alone.", author: "VP of Strategy" },
  { text: "NAYA Staffing opened doors I didn’t even know existed. Within weeks, I had two solid offers.", author: "Regional Sales Director" },
  { text: "What impressed me most was NAYA Staffing’s strategic approach and interview prep — real ROI.", author: "Chief Marketing Officer" },
];

export default function WhyCandidatesChooseNayaPage() {
  return (
    <div className="min-h-screen bg-navy-dark flex flex-col font-sans selection:bg-gold selection:text-navy-dark overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex flex-col items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://breezyrecruit.com/wp-content/uploads/2025/05/1-1-1024x683.jpg" 
            alt="Success Background" 
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-navy-dark/75 backdrop-blur-[4px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/50 via-transparent to-navy-dark"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto space-y-8 animate-fade-up">
          <div className="inline-block px-5 py-2 bg-gold/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-4">
            Candidate Experience
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] drop-shadow-2xl">
            Why Candidates Choose <br /> <span className="text-shimmer">NAYA Staffing</span>
          </h1>
          <p className="text-base md:text-xl font-semibold text-slate-200 tracking-tight max-w-4xl mx-auto opacity-90 leading-tight">
            Connecting Elite Talent with <span className="text-gold">Industry Leaders</span> through precision representation and strategic support.
          </p>
        </div>
      </section>

      {/* Intro Narrative Section */}
      <section className="bg-navy py-32 overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                 <h6 className="text-gold font-black uppercase tracking-[0.4em] text-[10px] mb-6 px-4 py-1 bg-gold/5 inline-block rounded-full border border-gold/10">Building Careers</h6>
                 <h2 className="text-4xl md:text-5xl font-black text-white leading-[0.9] tracking-tighter">
                  We Don't Just Find Jobs. <br /> <span className="text-shimmer">We Build Legacies.</span>
                </h2>
              </div>
              <p className="text-base md:text-lg text-slate-400 leading-relaxed font-semibold">
                At NAYA Staffing, we go beyond keywords and job descriptions. Our mission is to understand who you are, what drives you, and where you want to go — and then we help you get there with <span className="text-white">Elite Strategic Support</span>.
              </p>
              <div className="pt-4">
                <Link 
                  href="/register-upload-resume" 
                  className="px-12 py-5 bg-gold text-navy-dark font-black rounded-full hover:bg-gold-hover hover:-translate-y-2 transition-all shadow-xl uppercase tracking-[0.2em] text-[11px] inline-flex items-center gap-3"
                >
                  Upload Your Resume <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative group">
              <div className="relative rounded-[80px] overflow-hidden p-6 glass-panel border-white/10 shadow-2xl">
                <div className="rounded-[60px] overflow-hidden relative aspect-square">
                   <img 
                    src="https://breezyrecruit.com/wp-content/uploads/2025/05/1-1-1024x683.jpg" 
                    alt="Build Careers" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-32 bg-navy-dark border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="relative group lg:order-2">
              <div className="relative rounded-[80px] overflow-hidden p-6 glass-panel border-white/10 shadow-2xl">
                <div className="rounded-[60px] overflow-hidden relative aspect-square">
                   <img 
                    src="https://breezyrecruit.com/wp-content/uploads/2025/05/employer-top-image.jpeg.webp" 
                    alt="Strategic Edge" 
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-12 lg:order-1">
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
                What Sets <br /> <span className="text-shimmer">Us Apart?</span>
              </h2>
              
              <div className="space-y-10">
                {[
                  { title: "You're Our Priority", text: "We work for you, not the employer. Every strategy and negotiation is tailored to benefit your career goals." },
                  { title: "Human Intelligence", text: "In an age of automated rejections, we bring real humans back into your search. No bots, just expert support." },
                  { title: "Confidential Representation", text: "Whether you're quietly searching or starting from scratch, your privacy is our absolute priority." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-8 group">
                    <div className="w-14 h-14 bg-gold/5 border border-gold/20 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors duration-500 shadow-lg">
                      <CheckSquare className="text-gold w-7 h-7 group-hover:text-navy-dark transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-black text-white group-hover:text-gold transition-colors uppercase tracking-tight">{item.title}</h3>
                      <p className="text-base text-slate-400 font-semibold leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-32 bg-navy-dark overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-10 leading-[0.8] italic">Impact In <span className="text-shimmer">Numbers.</span></h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto font-semibold mb-20 leading-relaxed">
                From startups to Fortune 500s — our results redefine standard recruitment benchmarks globally.
            </p>
          
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  { stat: "90%", label: "Interviews within 30 days" },
                  { stat: "70%", label: "Jobs landed in 60 days" },
                  { stat: "100%", label: "Personalized expert support" }
                ].map((stat, idx) => (
                    <div key={idx} className="glass-panel p-16 rounded-[48px] border-white/5 hover:border-gold/20 transition-all group flex flex-col items-center">
                        <div className="text-7xl font-black text-gold tracking-tighter group-hover:scale-110 transition-transform mb-4">{stat.stat}</div>
                        <div className="text-[10px] font-black text-white uppercase tracking-[0.4em] text-center">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-navy-dark overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24 space-y-8">
            <h6 className="text-gold font-black uppercase tracking-[0.4em] text-[10px] mb-6 px-4 py-1 bg-gold/5 inline-block rounded-full border border-gold/10">Voice of Excellence</h6>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 leading-[0.8] tracking-tighter italic">Candidate <span className="text-shimmer">Endorsements.</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="glass-panel p-10 rounded-[40px] hover:border-gold/30 transition-all group relative overflow-hidden">
                <Quote className="text-gold/20 w-12 h-12 absolute top-8 right-8 group-hover:text-gold/40 transition-all" />
                <p className="text-sm text-slate-200 italic leading-relaxed font-semibold mb-8 relative z-10">"{t.text}"</p>
                <div className="pt-8 border-t border-white/5 flex items-center gap-4">
                  <cite className="font-black text-white uppercase tracking-widest text-[10px] not-italic">{t.author}</cite>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-navy relative border-y border-white/5 overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold/5 blur-[150px] animate-pulse"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-12">
          <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.8] tracking-tighter">
            Let's Scale <br /> <span className="text-shimmer">Your Career.</span>
          </h2>
          <p className="text-lg text-slate-400 font-semibold max-w-2xl mx-auto leading-relaxed">
            You’ve built the skills — now acquire the stage. Partner with the elite career representations at NAYA Staffing.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
            <Link 
              href="/register-upload-resume" 
              className="px-16 py-6 bg-gold text-navy-dark font-black rounded-full hover:bg-gold-hover hover:-translate-y-2 transition-all shadow-[0_4px_40px_rgba(212,175,55,0.4)] flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.3em]"
            >
              Consult Expert <CalendarCheck className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
