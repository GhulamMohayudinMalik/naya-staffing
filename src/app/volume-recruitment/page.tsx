'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Users, 
  Target, 
  Clock, 
  Gem, 
  BarChart3, 
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Lock,
  Globe,
  Award,
  Zap,
  TrendingUp,
  Settings,
  Database,
  Search,
  CheckSquare
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import TestimonialSlider from '@/components/TestimonialSlider';
import FAQItem from '@/components/FAQItem';

const processes = [
  {
    title: "Innovating at Scale",
    description: "Our innovate, digital-led process streamlines high-volume recruitment by leveraging advanced automation tools for faster time-to-hire.",
    icon: <Zap className="w-8 h-8 text-gold" />,
    detail: "Automation First"
  },
  {
    title: "24/7 Screening",
    description: "Over 1 million candidate checks annually, ensuring fast, reliable, and compliant hiring through our tireless screening service.",
    icon: <Search className="w-8 h-8 text-gold" />,
    detail: "Continuous Vetting"
  },
  {
    title: "Data-Driven Insights",
    description: "Advanced campaign analytics tools monitor performance and adjust strategies proactively to keep you competitive.",
    icon: <BarChart3 className="w-8 h-8 text-gold" />,
    detail: "Proactive Strategy"
  }
];

const reasons = [
  {
    title: "Access to Talent",
    description: "We engage multiple channels to ensure you gain access to the best talent, underpinned by one of the largest talent pools in the region.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Improved Processes",
    description: "We finely tune your recruitment processes, ensuring 100% fulfillment, consistent quality, and an exceptional candidate experience.",
    icon: <Settings className="w-6 h-6" />
  },
  {
    title: "Leading Technology",
    description: "We invest in advanced tech to deliver cost savings and the data-led insight needed to maintain your competitive edge.",
    icon: <Database className="w-6 h-6" />
  },
  {
    title: "Expert TA",
    description: "Rapidly deploy a dedicated team of experts to find and recruit the right talent for your business at speed.",
    icon: <Target className="w-6 h-6" />
  },
  {
    title: "End-to-End Recruitment",
    description: "From strategy and sourcing to screening, onboarding, and payroll – we handle the entire lifecycle.",
    icon: <CheckSquare className="w-6 h-6" />
  }
];

const faqs = [
  {
    question: "Why use NAYA as a provider for volume campaigns?",
    answer: "We have the people, technology, and resources required to quickly stand up a volume campaign. This provides a faster, more cost-effective way to deliver outcomes with predictable costs for better budget management."
  },
  {
    question: "What guarantees are there that the volume of hires will be delivered on target?",
    answer: "NAYA is accountable for the full end-to-end campaign results. Service level agreements (SLAs) are established at the outset to ensure volume and quality targets are mapped and met."
  }
];

const industries = [
  "Information Technology", "Healthcare", "Industrial", "Hospitality", 
  "Professional Services", "Education", "Insurance", "Retail", 
  "Construction", "Marketing", "Sales"
];

export default function VolumeRecruitmentPage() {
  return (
    <main className="bg-[#040814] text-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-[20s] scale-110 group-hover:scale-100 grayscale hover:grayscale-0 transition-all"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-linear-to-b from-[#040814]/80 via-transparent to-[#040814]" />
        <div className="absolute inset-0 bg-linear-to-r from-[#040814] via-transparent to-transparent opacity-60" />

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-4xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6 backdrop-blur-md">
              <Zap className="w-4 h-4 text-gold" />
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Rapid Scaling Solutions</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
              Volume <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Recruitment
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl font-light leading-relaxed mb-10 italic">
              "We don’t just fill roles—we build workforce legacies at scale."
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/become-a-client" 
                className="group relative px-8 py-4 bg-gold hover:bg-gold-hover text-navy-dark font-bold rounded-full transition-all duration-300 overflow-hidden shadow-2xl shadow-gold/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Initiate Volume Search <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                href="/contact-us" 
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 transition-all duration-300 backdrop-blur-xl"
              >
                Scale Your Team
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-20">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold to-transparent"></div>
        </div>
      </section>

      {/* 2. INTRO NARRATIVE */}
      <section className="py-24 relative overflow-hidden bg-navy-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-up">
              <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-2 shadow-xl backdrop-blur-md">
                High-Volume Expertise
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter">
                Scale Without <br/>
                <span className="text-gold">Compromise.</span>
              </h2>
              <div className="h-1.5 w-24 bg-gold rounded-full shadow-lg shadow-gold/20"></div>
              <div className="space-y-6 text-gray-300 leading-relaxed text-lg font-light">
                <p>
                  Managing high-volume hiring can be overwhelming, but with NAYA, it doesn’t have to be. Our Volume Recruitment service is designed to help businesses efficiently and effectively scale their workforce without compromising on quality.
                </p>
                <p>
                  From sourcing and screening to onboarding, we handle every step of the process, ensuring you get the right talent at the right time. Whether you’re staffing for seasonal demand or a large-scale project, we provide customized solutions to meet your unique needs.
                </p>
              </div>
              <div className="pt-6">
                 <div className="grid grid-cols-2 gap-6">
                    <div className="p-4 glass-panel border-white/5 rounded-2xl">
                       <p className="text-gold font-black text-3xl">100%</p>
                       <p className="text-white/60 text-[10px] uppercase font-bold tracking-widest">Fulfillment Rate</p>
                    </div>
                    <div className="p-4 glass-panel border-white/5 rounded-2xl">
                       <p className="text-gold font-black text-3xl">24/7</p>
                       <p className="text-white/60 text-[10px] uppercase font-bold tracking-widest">Global Screening</p>
                    </div>
                 </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gold/5 rounded-[3rem] blur-2xl opacity-50" />
              <div className="relative glass-panel rounded-[3rem] border border-white/10 overflow-hidden group">
                   <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                    alt="Team Collaboration" 
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[2000ms] grayscale group-hover:grayscale-0" 
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy-dark via-transparent to-transparent opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FUTURISTIC PROCESS */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">Digital-Led <br /><span className="text-gold text-shimmer">Efficiency.</span></h2>
            <div className="h-1.5 w-40 bg-gold mx-auto rounded-full shadow-lg shadow-gold/20"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processes.map((proc, i) => (
              <div key={i} className="group p-10 glass-panel rounded-[48px] border-white/5 hover:border-gold/30 hover:bg-white/4 transition-all duration-700 flex flex-col items-center text-center animate-fade-up">
                 <div className="w-20 h-20 rounded-[28px] bg-gold/10 flex items-center justify-center border border-gold/20 group-hover:bg-gold group-hover:text-navy-dark transition-all duration-500 shadow-xl mb-8">
                    {proc.icon}
                  </div>
                  <div className="text-gold font-black text-xs uppercase tracking-[0.3em] opacity-60 mb-4">{proc.detail}</div>
                  <h4 className="text-2xl md:text-3xl font-black text-white group-hover:text-gold transition-colors tracking-tight mb-6">
                    {proc.title}
                  </h4>
                  <p className="text-slate-400 font-semibold leading-relaxed text-base group-hover:text-white/80 transition-colors">
                    {proc.description}
                  </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US - ACCORDION STYLE */}
      <section className="py-32 bg-navy-dark border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-8 animate-fade-up lg:sticky lg:top-32">
              <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-2 shadow-xl backdrop-blur-md">
                Strategic Choice
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                Why <br />Choose <span className="text-gold">Us?</span>
              </h2>
              <div className="h-1.5 w-24 bg-gold rounded-full shadow-lg shadow-gold/20"></div>
              <p className="text-lg text-slate-400 font-semibold leading-relaxed border-l-2 border-white/10 pl-8 max-w-lg">
                We rapidly deploy a dedicated team of experts and advanced technology to ensure all roles are filled at speed, delivering ROI without compromising quality.
              </p>
              <div className="pt-8">
                 <Link href="/become-a-client" className="group px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold transition-all flex items-center gap-4 w-fit">
                    Request Proposal <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                 </Link>
              </div>
            </div>

            <div className="space-y-4">
              {/* Accordion 1: Core Reasons */}
              <div className="mb-12 space-y-4">
                {reasons.map((reason, i) => (
                  <FAQItem key={i} question={reason.title} answer={reason.description} />
                ))}
              </div>

              {/* Accordion 2: Specific Volume Questions */}
              <div className="pt-12 border-t border-white/10">
                <h3 className="text-2xl font-black text-white mb-8 tracking-tighter uppercase italic opacity-50">Volume Campaign Specifics</h3>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <FAQItem key={i} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INDUSTRY MARQUEE */}
      <section className="bg-navy py-24">
        <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
          <h3 className="text-3xl font-black text-white tracking-tighter">Sectors We <span className="text-gold">Scale.</span></h3>
          <p className="text-gray-500 font-medium">Any Industry, Any Volume</p>
        </div>
        
        <div className="relative flex overflow-hidden">
          <style dangerouslySetInnerHTML={{ __html: `@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } .animate-marquee { display: flex; width: max-content; animation: marquee 60s linear infinite; }` }} />
          <div className="animate-marquee whitespace-nowrap gap-12 py-4">
            {[...industries, ...industries].map((ind, i) => (
              <span key={i} className="text-4xl md:text-6xl font-black text-white/5 hover:text-gold/20 transition-colors cursor-default uppercase tracking-tighter">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SLIDER */}
      <section className="py-24 bg-[#040814] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Proven <span className="text-gold">Outcomes.</span>
            </h2>
            <div className="w-24 h-1.5 bg-gold rounded-full" />
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* 5. INDUSTRY MARQUEE */}

      {/* 8. CONTACT CTA */}
      <section className="py-32 relative overflow-hidden bg-navy">
        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-panel p-12 md:p-24 rounded-[4rem] text-center border border-gold/20 shadow-2xl shadow-gold/10 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gold text-navy-dark mb-10 shadow-2xl shadow-gold/30 animate-pulse transition-all">
              <TrendingUp className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] relative z-10">
              Simplify Your <br/>
              <span className="text-gold">Scale Up.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed relative z-10">
              Build your team with confidence. Let our technology and expertise handle the heavy lifting.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 relative z-10">
              <Link 
                href="/become-a-client" 
                className="group w-full sm:w-auto px-16 py-8 bg-gold hover:bg-gold-hover text-navy-dark font-black rounded-[32px] transition-all flex items-center justify-center gap-4 shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-[0.3em] text-[10px]"
              >
                Get in Touch <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
