'use client';

import { Users, Target, ShieldCheck, Zap, ArrowRight, CheckCircle2, Star, Quote, ChevronRight, Check } from 'lucide-react';
import Link from 'next/link';

export default function ReverseRecruitment() {
  return (
    <div className="min-h-screen bg-navy-dark flex flex-col font-sans selection:bg-gold selection:text-navy-dark overflow-x-hidden">
      {/* Hero Section - Elite Representation */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 blur-[120px] rounded-full animate-pulse transition-all duration-[5000ms]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-navy-light/10 blur-[150px] rounded-full animate-float"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-transparent to-navy-dark"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center space-y-12 animate-fade-up">
          <div className="space-y-6">
            <div className="inline-block px-6 py-2 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-4">
              A Candidate-First Revolution
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] drop-shadow-2xl">
              Reverse <br /> <span className="text-shimmer">Recruitment.</span>
            </h1>
          </div>
          <p className="text-lg md:text-2xl font-bold text-slate-400 max-w-3xl mx-auto leading-tight tracking-tight opacity-90">
            Standard recruiting works for employers. <span className="text-white">Reverse recruiting works for YOU.</span> We become your elite agents, pitching your DNA to global industry leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
            <Link href="/register-upload-resume" className="bg-gold hover:bg-gold-hover text-navy-dark px-16 py-6 rounded-full font-black text-xs uppercase tracking-[0.4em] transition-all transform hover:-translate-y-2 shadow-[0_4px_40px_rgba(212,175,55,0.4)] flex items-center justify-center gap-4">
              Apply for Representation <Star className="w-5 h-5 fill-current" />
            </Link>
            <Link href="#how-it-works" className="bg-white/5 hover:bg-white/10 text-white border-2 border-white/10 px-16 py-6 rounded-full font-black text-xs uppercase tracking-[0.4em] transition-all flex items-center justify-center gap-4 backdrop-blur-md">
              The Blueprint <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section - Premium Grid */}
      <section id="how-it-works" className="py-32 bg-navy border-y border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 flex flex-col items-center">
            <h6 className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6 px-4 py-1 bg-gold/5 rounded-full border border-gold/10">The Methodology</h6>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-tight">Your Personal <span className="text-shimmer">Career Agent</span></h2>
            <div className="h-1 w-24 bg-gold rounded-full opacity-50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Users className="w-10 h-10" />,
                title: "Personal Branding",
                desc: "We refine your professional identity and optimize your digital presence for the 1% of elite hiring managers."
              },
              {
                icon: <Target className="w-10 h-10" />,
                title: "Strategic Pitching",
                desc: "We bypass standard job boards and pitch your profile directly to decision-makers within your dream companies."
              },
              {
                icon: <Zap className="w-10 h-10" />,
                title: "Closing Logic",
                desc: "Our agents coach you through high-stakes interviews and handle complex salary negotiations on your behalf."
              }
            ].map((step, idx) => (
              <div key={idx} className="glass-panel group p-12 rounded-[48px] hover:border-gold/30 hover:shadow-gold/5 transition-all duration-500 flex flex-col h-full border-white/5">
                <div className="mb-10 bg-gold/5 w-20 h-20 rounded-3xl border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-navy-dark transition-all duration-500 shadow-xl">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-6 group-hover:text-gold transition-colors tracking-tight uppercase leading-tight">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed font-bold text-base">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - High Impact Layout */}
      <section className="py-32 bg-navy-dark overflow-hidden relative">
        <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-gold/5 blur-[150px] rounded-full -translate-y-1/2 -translate-x-1/2 animate-glow"></div>
        
        <div className="container mx-auto px-4 relative z-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight text-white tracking-tighter italic">Why Elite Candidates Choose <span className="text-shimmer">Us.</span></h2>
              <div className="space-y-8">
                {[
                  "Access to the hidden, unadvertised 1% job market",
                  "Expert-level salary negotiations handled on your behalf",
                  "Direct C-suite introductions and C-level access",
                  "100% Privacy and confidential career navigation",
                  "Significant reduction in search time and burnout"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-6 p-4 glass-panel rounded-3xl border-white/5 hover:border-gold/20 transition-all group">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors duration-300">
                      <Check className="w-5 h-5 text-gold group-hover:text-navy-dark transition-colors" />
                    </div>
                    <span className="text-base font-black text-white tracking-tight">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
               <div className="relative rounded-[64px] overflow-hidden p-6 glass-panel border-white/10 shadow-2xl bg-gold/5">
                  <Quote className="text-gold/20 w-16 h-16 absolute top-10 right-10" />
                  <blockquote className="text-xl md:text-2xl font-black leading-relaxed mb-10 text-white tracking-tight italic relative z-10">
                    "I was tired of sending 50 resumes and hearing nothing. NAYA Staffing's reverse recruitment got me 3 interviews at top tech firms in two weeks. I didn't even apply."
                  </blockquote>
                  <div className="flex items-center gap-6 pt-10 border-t border-white/10">
                    <div className="w-20 h-20 bg-gold/20 rounded-3xl border border-gold/20 overflow-hidden shadow-xl">
                      <img src="https://breezyrecruit.com/wp-content/uploads/2025/02/tech-talent.jpg" alt="Client testimonial" className="w-full h-full object-cover grayscale" />
                    </div>
                    <div>
                      <div className="font-black text-2xl text-white uppercase tracking-tight">James Wilson</div>
                      <div className="text-gold font-black text-xs uppercase tracking-[0.3em] mt-1">VP of Engineering</div>
                    </div>
                  </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-gold/5 rounded-full blur-[100px] animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Massive CTA */}
      <section className="py-32 bg-navy relative border-y border-white/5 overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold/5 blur-[150px] animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10 space-y-12 max-w-5xl">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.8] tracking-tighter">
            Ready to <br /> <span className="text-shimmer">Level Up?</span>
          </h2>
          <p className="text-xl text-slate-400 font-black max-w-2xl mx-auto leading-relaxed">
            Our representation is exclusive. We only partner with high-velocity candidates ready to redefine their industry legacy.
          </p>
          <div className="pt-8 flex justify-center">
            <Link href="/register-upload-resume" className="bg-gold hover:bg-gold-hover text-navy-dark px-20 py-7 rounded-full font-black text-xs uppercase tracking-[0.4em] transition-all transform hover:-translate-y-2 shadow-[0_4px_50px_rgba(212,175,55,0.4)] flex items-center justify-center gap-4 group">
              Get Started Now <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
