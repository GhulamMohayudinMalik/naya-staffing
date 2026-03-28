'use client';

import { CheckCircle2, BarChart3, Users2, ShieldCheck, ArrowRight, PlayCircle, Stars, Activity, Target, Layers, Check } from 'lucide-react';
import Link from 'next/link';

export default function RPOService() {
  return (
    <div className="min-h-screen bg-navy-dark flex flex-col font-sans selection:bg-gold selection:text-navy-dark overflow-x-hidden">
      {/* Hero Section - Elite Enterprise Focus */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 blur-[120px] rounded-full animate-pulse transition-all duration-[5000ms]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-navy-light/10 blur-[150px] rounded-full animate-float"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-transparent to-navy-dark"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center space-y-12 animate-fade-up">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 bg-gold/10 border border-gold/20 rounded-full px-6 py-2 text-gold text-xs font-black uppercase tracking-[0.4em]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
              </span>
              Enterprise RPO Solutions
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] drop-shadow-2xl">
              Recruitment <br /> <span className="text-shimmer">Outsourcing.</span>
            </h1>
          </div>
          <p className="text-lg md:text-2xl font-bold text-slate-400 max-w-4xl mx-auto leading-tight tracking-tight opacity-90">
            Scale your infrastructure, slash costs, and elevate quality of hire. We become your <span className="text-white">Internal Recruiting Powerhouse</span> through end-to-end RPO mastery.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
            <Link href="/contact-us" className="bg-gold hover:bg-gold-hover text-navy-dark px-16 py-6 rounded-full font-black text-xs uppercase tracking-[0.4em] transition-all transform hover:-translate-y-2 shadow-[0_4px_40px_rgba(212,175,55,0.4)] flex items-center justify-center gap-4">
              Request Full Proposal <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="flex items-center justify-center gap-4 bg-white/5 hover:bg-white/10 text-white border-2 border-white/10 px-16 py-6 rounded-full font-black text-xs uppercase tracking-[0.4em] transition-all backdrop-blur-md">
              <PlayCircle className="w-6 h-6 text-gold" /> The Workflow
            </button>
          </div>
        </div>
      </section>

      {/* Strategic Overview - High Contrast Typography */}
      <section className="py-32 bg-navy border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="relative rounded-[80px] overflow-hidden p-6 glass-panel border-white/10 shadow-2xl">
                <div className="rounded-[60px] overflow-hidden relative aspect-[4/5] md:aspect-square">
                   <img 
                    src="https://breezyrecruit.com/wp-content/uploads/2025/05/1-1-1024x683.jpg" 
                    alt="Strategic Meeting"
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[2s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy-dark/40 group-hover:bg-transparent transition-all"></div>
                </div>
              </div>
              {/* Massive Stats Overlay */}
              <div className="absolute -bottom-10 -right-10 glass-panel p-12 rounded-[52px] border-gold/30 shadow-gold/5 animate-float">
                <div className="text-6xl font-black text-gold tracking-tighter mb-2 italic">45%</div>
                <div className="text-xs font-black text-white uppercase tracking-[0.4em] leading-tight">Average Cost <br /> Per Hire Reduction</div>
              </div>
            </div>
            <div className="space-y-12">
              <div className="space-y-6">
                 <h6 className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6 px-4 py-1 bg-gold/5 inline-block rounded-full border border-gold/10">The Partnership</h6>
                 <h2 className="text-4xl md:text-5xl font-black text-white leading-[0.9] tracking-tighter">
                  Your Strategic <br /> <span className="text-shimmer">Hiring Engine.</span>
                </h2>
              </div>
              <p className="text-lg text-slate-400 font-bold leading-relaxed">
                RPO is not just outsourcing; it's a high-velocity partnership. We assume <span className="text-white">Absolute Responsibility</span> for your recruitment cycle—leveraging elite tech and deep market data to drive measurable scale.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                {[
                  { icon: <BarChart3 className="w-8 h-8 text-gold" />, title: "Data-Driven Sourcing" },
                  { icon: <Users2 className="w-8 h-8 text-gold" />, title: "Brand Alignment" },
                  { icon: <ShieldCheck className="w-8 h-8 text-gold" />, title: "Compliance Ready" },
                  { icon: <Activity className="w-8 h-8 text-gold" />, title: "Scalable Model" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-center p-4 glass-panel rounded-3xl border-white/5 hover:border-gold/20 transition-all group">
                    <div className="bg-gold/5 p-4 rounded-2xl group-hover:bg-gold transition-colors duration-500">
                        <div className="text-gold group-hover:text-navy-dark transition-colors">{item.icon}</div>
                    </div>
                    <span className="font-black text-base text-white tracking-tight uppercase group-hover:text-gold transition-colors">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why RPO - Premium Benefit Grid */}
      <section className="py-32 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 flex flex-col items-center">
            <h6 className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6 px-4 py-1 bg-gold/5 rounded-full border border-gold/10">Enterprise Impact</h6>
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 italic">The <span className="text-shimmer">RPO Advantage</span></h2>
            <div className="h-1 w-24 bg-gold rounded-full opacity-50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Target />,
                title: "Scalability on Demand",
                desc: "Whether your cycle requires 10 high-stakes hires or a 500-unit scaling project, our model adapts in real-time.",
              },
              {
                icon: <Stars />,
                title: "Employer Branding",
                desc: "We don't just fill seats; we architect your market presence to attract the most elusive 1% of talent.",
              },
              {
                icon: <Layers />,
                title: "Elite Tech Stack",
                desc: "Gain instant access to our proprietary AI recruitment ecosystem and global data vaults at zero additional cost.",
              }
            ].map((benefit, idx) => (
              <div key={idx} className="glass-panel group p-12 rounded-[52px] hover:border-gold/30 hover:shadow-gold/5 transition-all duration-500 flex flex-col h-full border-white/5">
                <div className="w-16 h-1 bg-gold mb-10 group-hover:w-full transition-all duration-700 rounded-full"></div>
                <h3 className="text-2xl font-black text-white mb-6 group-hover:text-gold transition-colors tracking-tight uppercase leading-[1.1]">{benefit.title}</h3>
                <p className="text-base text-slate-400 leading-relaxed font-bold">{benefit.desc}</p>
                <div className="pt-10 mt-auto">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold transition-all duration-500">
                        <Check className="w-6 h-6 text-gold group-hover:text-navy-dark" />
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Massive Final CTA */}
      <section className="py-32 bg-navy relative border-y border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold/5 blur-[150px] animate-pulse"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-12">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.8] tracking-tighter">
            Architect <br /> <span className="text-shimmer">Your Future.</span>
          </h2>
          <p className="text-xl text-slate-400 font-bold max-w-2xl mx-auto leading-relaxed">
            Ready to transform your hiring infrastructure into a high-octane growth engine? Partner with our elite RPO architects today.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
            <Link href="/contact-us" className="px-20 py-7 bg-gold text-navy-dark font-black rounded-full hover:bg-gold-hover hover:-translate-y-2 transition-all shadow-[0_4px_50px_rgba(212,175,55,0.4)] flex items-center justify-center gap-4 text-xs uppercase tracking-[0.4em]">
              Book Strategy Session <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
