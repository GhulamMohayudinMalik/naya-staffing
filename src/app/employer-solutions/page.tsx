"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Users, Zap, Search, ShieldCheck, PlayCircle, Check } from "lucide-react";
import TestimonialSlider from "@/components/TestimonialSlider";
import VideoBackground from "@/components/VideoBackground";

export default function EmployerSolutionsPage() {
  return (
    <div className="min-h-screen bg-navy-dark flex flex-col font-sans selection:bg-gold selection:text-navy-dark overflow-x-hidden">
      {/* Hero Section with Video & Glass Overlay */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center overflow-hidden pt-20">
        <VideoBackground 
          src="/videos/hero.mp4" 
          overlayOpacity="bg-navy-dark/80"
          className="scale-105"
        />

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 blur-[120px] rounded-full animate-pulse transition-all duration-5000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-navy-light/20 blur-[150px] rounded-full animate-float transition-all duration-7000"></div>
        
        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto space-y-12 animate-fade-up">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-4">
              Enterprise Solutions
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] drop-shadow-2xl">
              Build Your <br /> <span className="text-shimmer">Winning Team.</span>
            </h1>
          </div>
          <p className="text-base md:text-xl font-semibold text-slate-200 tracking-tight max-w-4xl mx-auto opacity-90 leading-tight">
            Elite recruitment strategies designed to connect <span className="text-gold">Industry Leaders</span> with transformational talent.
          </p>
        </div>
      </section>

      {/* Strategic Header Section */}
      <section className="bg-navy py-24 relative overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-[64px] p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 border-white/10 hover:border-gold/20 transition-all duration-700">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black text-white leading-[0.9] tracking-tighter mb-4">
                Find The Right Talent <br /> <span className="text-gold">Faster & Smarter.</span>
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 shrink-0 w-full lg:w-auto">
              <Link href="/become-a-client" className="px-12 py-6 bg-gold text-navy-dark font-black rounded-full hover:bg-gold-hover hover:-translate-y-2 transition-all text-center shadow-xl uppercase tracking-[0.2em] text-xs">
                Become a Client
              </Link>
              <Link href="/our-industries" className="px-12 py-6 bg-white/5 border border-white/10 text-white font-black rounded-full hover:bg-white/10 hover:-translate-y-2 transition-all text-center uppercase tracking-[0.2em] text-xs backdrop-blur-md">
                Our Industries
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Narrative Section */}
      <section className="bg-navy-dark py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12 order-2 lg:order-1">
              <div className="space-y-6">
                 <div className="h-1 w-24 bg-gold rounded-full"></div>
                 <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
                  Scale With <br /> <span className="text-shimmer">Precision.</span>
                </h2>
              </div>
              <div className="space-y-8 text-base md:text-lg text-slate-400 leading-relaxed font-semibold">
                <p>
                  Hiring the right people can make or break your business. But when you’re buried in resumes and chasing unqualified applicants, recruitment becomes a bottleneck to growth.
                </p>
                <p>
                  At NAYA Staffing, we lift that burden. We provide <span className="text-white">Elite Strategic Support</span> across RPO, Direct Hire, and Executive Search, ensuring your culture and bottom-line remain our top priorities.
                </p>
              </div>
            </div>
            <div className="relative group order-1 lg:order-2">
              <div className="relative rounded-[80px] overflow-hidden p-6 glass-panel border-white/10 shadow-2xl">
                <div className="rounded-[60px] overflow-hidden relative aspect-[4/5] md:aspect-square">
                   <img 
                    src="https://breezyrecruit.com/wp-content/uploads/2024/12/1-8.jpg" 
                    alt="Corporate Leadership" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-navy-dark via-navy-dark/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Employers Choose - Premium Cards */}
      <section className="py-32 bg-navy border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 flex flex-col items-center">
            <h6 className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6 px-4 py-1 bg-gold/5 rounded-full border border-gold/10">The Competitive Edge</h6>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-tight">Why Industry Leaders Choose Us</h2>
            <div className="h-1 w-24 bg-gold rounded-full opacity-50"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                icon: <Search className="w-10 h-10" />,
                title: "Targeted Talent Sourcing",
                text: "We leverage advanced AI-driven search and human intuition to find the passive 1% of talent that job boards never reach."
              },
              {
                icon: <Zap className="w-10 h-10" />,
                title: "Optimized Time-to-Hire",
                text: "Our high-velocity recruitment engine reduces vacancy duration while maintaining rigorous quality benchmarks."
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Deep Cultural Assessment",
                text: "Beyond skills, we vet for alignment. Every candidate is assessed for their capacity to enhance your unique team DNA."
              },
              {
                icon: <ShieldCheck className="w-10 h-10" />,
                title: "Dedicated Strategic Partners",
                text: "We don't just fill roles; we consultant on market trends, compensation, and retention strategies to protect your investment."
              }
            ].map((reason, idx) => (
              <div key={idx} className="glass-panel group p-12 rounded-[48px] border-white/5 hover:border-gold/30 transition-all duration-500">
                <div className="w-20 h-20 bg-gold/5 border border-gold/20 rounded-3xl flex items-center justify-center text-gold mb-10 group-hover:bg-gold group-hover:text-navy-dark transition-all duration-500 shadow-xl">
                  {reason.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-6 group-hover:text-gold transition-colors tracking-tight uppercase">
                  {reason.title}
                </h3>
                <p className="text-base text-slate-400 leading-relaxed font-semibold">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value List - Premium Grid */}
      <section className="py-32 bg-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
               <div className="relative rounded-[64px] overflow-hidden p-4 glass-panel border-white/10 shadow-2xl">
                <img 
                  src="https://breezyrecruit.com/wp-content/uploads/2024/12/1-8.jpg" 
                  alt="Value Delivery" 
                  className="rounded-[52px] w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 glass-panel p-8 rounded-[40px] border-gold/20 animate-float">
                <div className="text-6xl font-black text-gold tracking-tighter">100%</div>
                <div className="text-xs font-black text-white uppercase tracking-widest text-center mt-2">Quality Guarantee</div>
              </div>
            </div>
            <div className="space-y-12">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">
                What You <span className="text-shimmer">Acquire</span> With Us
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {[
                  "Tailored Searches — built around your unique DNA",
                  "Access to Hidden Elite — beyond public job boards",
                  "National Reach — through a global recruitment network",
                  "Pre-Screened Accuracy — ready to scale from day one",
                  "Verified Success Logs — ensuring consistency",
                  "Legacy Protection — focusing on long-term retention"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 p-6 glass-panel rounded-3xl border-white/5 hover:border-gold/20 transition-all group">
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors">
                      <Check className="w-5 h-5 text-gold group-hover:text-navy-dark" />
                    </div>
                    <span className="font-black text-white text-base tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section - High Contrast */}
      <section className="py-32 bg-navy border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <h2 className="text-4xl md:text-6xl font-black leading-tight text-white tracking-tighter">
                Our <span className="text-shimmer">Unbreakable</span> Commitment
              </h2>
              <div className="space-y-8 text-base md:text-lg text-slate-400 font-semibold leading-relaxed">
                <p>
                  At NAYA Staffing, we value <span className="text-white">Quality Over Volume</span>. You won’t get flooded with resumes — instead, you’ll receive a thoughtfully curated shortlist of the best talent available.
                </p>
                <div className="p-8 glass-panel rounded-[40px] border-l-4 border-l-gold bg-gold/5">
                   <p className="italic text-white">
                    "With NAYA Staffing, recruitment isn’t just about filling positions — it’s about investing in the future of your business ecosystem."
                  </p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="relative rounded-[80px] overflow-hidden p-6 glass-panel border-white/10 shadow-2xl">
                <img 
                  src="https://breezyrecruit.com/wp-content/uploads/2025/05/1-2.jpg" 
                  alt="Quality Commitment" 
                  className="rounded-[60px] h-[500px] w-full object-cover grayscale transition-all duration-[2s] group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSlider />

      {/* Call to Action - Massive Scale */}
      <section className="py-32 bg-navy-dark relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold/5 blur-[150px] animate-pulse"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-12">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.8] tracking-tighter">
            Let’s Scale <br /> <span className="text-shimmer">Together.</span>
          </h2>
          <p className="text-lg text-slate-400 font-semibold max-w-2xl mx-auto">
            Discover how simple, efficient, and rewarding premium recruitment can be when you partner with the best.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
            <Link href="/become-a-client" className="px-16 py-6 bg-gold text-navy-dark font-black rounded-full hover:bg-gold-hover hover:-translate-y-2 transition-all shadow-[0_4px_40px_rgba(212,175,55,0.4)] flex items-center justify-center gap-4 text-sm uppercase tracking-[0.3em]">
              Become a Client <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/calendly" className="px-16 py-6 border-2 border-white/20 text-white font-black rounded-full hover:border-gold hover:text-gold hover:-translate-y-2 transition-all flex items-center justify-center gap-4 text-sm uppercase tracking-[0.3em] backdrop-blur-md">
              Consultation <PlayCircle className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee Re-use for consistency */}
      <section className="bg-navy-dark pb-32 overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 pt-32 mb-16 text-center">
            <h6 className="text-gold font-black uppercase tracking-[0.5em] text-xs mb-8">Success Environments</h6>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter">
              Connecting You with <br /> <span className="text-shimmer">Top Talent Globally</span>
            </h2>
        </div>
        <div className="relative">
          <style dangerouslySetInnerHTML={{ __html: `@keyframes marquee-emp { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } .animate-marquee-emp { display: flex; width: max-content; animation: marquee-emp 80s linear infinite; }` }} />
          <div className="animate-marquee-emp gap-10">
            {[
              { title: "Information Technology", image: "https://breezyrecruit.com/wp-content/uploads/2025/02/tech-talent.jpg" },
              { title: "Healthcare", image: "https://breezyrecruit.com/wp-content/uploads/2024/10/Healthcare.jpg" },
              { title: "Industrial", image: "https://breezyrecruit.com/wp-content/uploads/2025/05/1-1.jpg" },
              { title: "Hospitality", image: "https://breezyrecruit.com/wp-content/uploads/2024/10/Senior-Living.jpg" },
              { title: "Insurance", image: "https://breezyrecruit.com/wp-content/uploads/2025/05/Education-Recruitment-Agency-in-Pakistan.png" },
              { title: "Marketing", image: "https://breezyrecruit.com/wp-content/uploads/2025/05/employer-top-image.jpeg" }
            ].concat([
              { title: "Information Technology", image: "https://breezyrecruit.com/wp-content/uploads/2025/02/tech-talent.jpg" },
              { title: "Healthcare", image: "https://breezyrecruit.com/wp-content/uploads/2024/10/Healthcare.jpg" }
            ]).map((ind, idx) => (
              <div key={idx} className="w-[450px] group flex-shrink-0">
                <div className="glass-panel h-[350px] rounded-[48px] overflow-hidden relative border border-white/5 hover:border-gold/30 transition-all duration-700">
                  <img src={ind.image} alt={ind.title} className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent"></div>
                  <div className="absolute inset-x-10 bottom-10 z-10">
                    <h4 className="text-3xl font-black text-white group-hover:text-gold transition-colors leading-tight uppercase tracking-tight">{ind.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
