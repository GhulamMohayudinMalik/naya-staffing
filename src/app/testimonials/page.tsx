"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Quote, ArrowRight, Stars, CheckCircle2 } from "lucide-react";
import VideoBackground from "@/components/VideoBackground";

export default function Testimonials() {

  const clientTestimonials = [
    { text: "NAYA Staffing reduced our time-to-hire and delivered pre-vetted candidates we couldn’t reach ourselves.", author: "VP of HR, Technology Firm" },
    { text: "They quickly filled critical roles without sacrificing quality.", author: "Director of Executive Search, Venture Capital Firm" },
    { text: "NAYA Staffing’s RPO solution gave us a scalable way to manage high-volume hiring.", author: "Director of Talent Acquisition, Logistics Company" },
    { text: "Their market insights and screening process saved us weeks.", author: "HR Director, Retail Chain" },
    { text: "We no longer sift through hundreds of resumes — NAYA Staffing sends a focused shortlist.", author: "Chief People Officer, Manufacturing Firm" },
    { text: "Their contract-to-hire option helped us test talent before committing.", author: "Operations Manager, Food & Beverage Brand" },
    { text: "NAYA Staffing felt like an extension of our own HR team.", author: "VP of Operations, E-commerce Startup" },
    { text: "They adapted quickly to our changing hiring needs.", author: "HR Business Partner, Construction Company" },
    { text: "Their team kept us competitive in a tough talent market.", author: "Director of Workforce Planning, Insurance Firm" }
  ];

  const candidateTestimonials = [
    { text: "NAYA Staffing made the process effortless. I landed three interviews within weeks after months of hearing nothing.", author: "Senior Product Manager" },
    { text: "Thanks to NAYA Staffing, my resume finally got noticed by the right people. Their personal touch changed everything.", author: "Marketing Director" },
    { text: "With NAYA Staffing, I stopped applying blindly and focused on real, high-fit roles. The results were amazing.", author: "Director of Operations" },
    { text: "I didn’t realize recruiters could represent me directly. NAYA Staffing felt like having a private career agent.", author: "Senior Finance Manager" },
    { text: "After 10 years in the same role, NAYA Staffing helped me rebrand and negotiate a better salary than I expected.", author: "IT Program Manager" },
    { text: "They truly understood my career goals and marketed me to top firms I’d never reached alone.", author: "VP of Strategy" },
    { text: "NAYA Staffing opened doors I didn’t even know existed. Within weeks, I had two solid offers.", author: "Regional Sales Director" },
    { text: "What impressed me most was NAYA Staffing’s strategic approach and interview prep — real ROI.", author: "Chief Marketing Officer" }
  ];

  return (
    <div className="min-h-screen bg-navy-dark flex flex-col font-sans selection:bg-gold selection:text-navy-dark overflow-x-hidden">
      
      {/* Hero Section with Immersive Video Background */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <VideoBackground 
          src="/videos/hero.mp4" 
          overlayOpacity="bg-navy-dark/80"
          className="scale-110"
        />

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 blur-[120px] rounded-full animate-pulse transition-all duration-5000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-navy-light/20 blur-[150px] rounded-full animate-float transition-all duration-7000"></div>
        
        <div className="relative z-20 text-center px-4 max-w-5xl space-y-8 animate-fade-up">
          <div className="inline-block px-6 py-2 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-4">
            Voice of Excellence
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.85] drop-shadow-2xl">
            Success <br /> <span className="text-shimmer">Amplified.</span>
          </h1>
          <p className="text-lg md:text-2xl font-bold text-slate-300 max-w-3xl mx-auto leading-tight tracking-tight opacity-90">
             Discover why the world's most ambitious companies and elite candidates trust <span className="text-white">NAYA Staffing</span> to architect their future.
          </p>
        </div>
      </section>

      {/* Main Content - Marquee Ecosystem */}
      <main className="max-w-full py-32 space-y-40">
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
          @keyframes marquee-reverse {
            0% { transform: translateX(-33.333%); }
            100% { transform: translateX(0); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 60s linear infinite;
          }
          .animate-marquee-reverse {
            display: flex;
            width: max-content;
            animation: marquee-reverse 70s linear infinite;
          }
          .animate-marquee:hover, .animate-marquee-reverse:hover {
            animation-play-state: paused;
          }
          .marquee-mask {
            mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          }
        `}} />
        
        {/* Client Testimonials Section */}
        <section className="space-y-20">
          <div className="container mx-auto px-4 text-center space-y-6">
            <h6 className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6 px-4 py-1 bg-gold/5 inline-block rounded-full border border-gold/10">Enterprise Feedback</h6>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight italic">Corporate <span className="text-shimmer">Impact.</span></h2>
            <div className="h-1 w-24 bg-gold mx-auto rounded-full opacity-50"></div>
          </div>

          <div className="relative overflow-hidden marquee-mask group">
            <div className="animate-marquee gap-10 py-10">
              {[...clientTestimonials, ...clientTestimonials, ...clientTestimonials].map((t, i) => (
                <div key={i} className="w-[450px] flex-shrink-0">
                  <div className="glass-panel p-16 rounded-[64px] border-white/5 flex flex-col h-full hover:border-gold/30 hover:shadow-gold/5 transition-all duration-700 bg-navy/30">
                    <div className="w-16 h-1 bg-gold/20 mb-10 group-hover:bg-gold transition-all duration-700 rounded-full"></div>
                    <div className="grow">
                        <Quote className="w-12 h-12 text-gold opacity-10 mb-6" />
                        <p className="text-xl text-slate-300 leading-relaxed mb-12 font-bold italic tracking-tight">"{t.text}"</p>
                    </div>
                    <div className="pt-10 border-t border-white/5">
                      <p className="font-black text-white uppercase tracking-[0.2em] text-xs opacity-60 group-hover:opacity-100 transition-opacity">{t.author}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Candidate Testimonials Section */}
        <section className="space-y-20">
          <div className="container mx-auto px-4 text-center space-y-6">
            <h6 className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6 px-4 py-1 bg-gold/5 inline-block rounded-full border border-gold/10">Candidate Journey</h6>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight italic">Professional <span className="text-shimmer">Legacy.</span></h2>
            <div className="h-1 w-24 bg-gold mx-auto rounded-full opacity-50"></div>
          </div>

          <div className="relative overflow-hidden marquee-mask group">
            <div className="animate-marquee-reverse gap-10 py-10">
              {[...candidateTestimonials, ...candidateTestimonials, ...candidateTestimonials].map((t, i) => (
                <div key={i} className="w-[450px] flex-shrink-0">
                  <div className="glass-panel p-16 rounded-[64px] border-white/5 flex flex-col h-full hover:border-gold/30 hover:shadow-gold/5 transition-all duration-700 bg-gold/5">
                    <div className="w-16 h-1 bg-gold mb-10 group-hover:scale-x-150 transition-all duration-700 rounded-full"></div>
                    <div className="grow">
                        <Stars className="w-10 h-10 text-gold opacity-20 mb-8" />
                        <p className="text-xl text-white leading-relaxed mb-12 font-black italic tracking-tight italic">"{t.text}"</p>
                    </div>
                    <div className="pt-10 border-t border-white/10 flex items-center justify-between">
                      <p className="font-black text-gold uppercase tracking-[0.2em] text-xs">{t.author}</p>
                      <CheckCircle2 className="w-5 h-5 text-gold/30" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Bridge */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-panel rounded-[64px] p-20 text-center space-y-12 border-white/5 relative overflow-hidden bg-navy">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold/5 blur-[100px] animate-pulse"></div>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter relative z-10 leading-none">Ready to be <br /> <span className="text-shimmer">Next?</span></h2>
                <p className="text-xl text-slate-400 font-bold max-w-2xl mx-auto relative z-10">
                    Whether you're scaling an empire or navigating your career legacy, we provide the architecture for excellence.
                </p>
                <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8 relative z-10">
                    <Link href="/become-a-client" className="bg-gold hover:bg-gold-hover text-navy-dark px-16 py-6 rounded-full font-black text-xs uppercase tracking-[0.4em] transition-all transform hover:-translate-y-2 shadow-[0_4px_40px_rgba(212,175,55,0.4)] flex items-center justify-center gap-4">
                        Consult for Business <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link href="/register-upload-resume" className="bg-white/5 hover:bg-white/10 text-white border-2 border-white/10 px-16 py-6 rounded-full font-black text-xs uppercase tracking-[0.4em] transition-all flex items-center justify-center gap-4 backdrop-blur-md">
                        Join Candidate Circuit <Stars className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
      </main>

       {/* Footer CTA Section - Split High End */}
      <section className="bg-navy border-t border-white/5 py-4">
        <div className="max-w-full flex flex-col md:flex-row gap-4 px-4">
          <Link 
            href="/why-choose-us" 
            className="flex-1 glass-panel group relative overflow-hidden p-16 transition-all hover:bg-gold/5 rounded-[64px] border-white/5 hover:border-gold/20"
          >
            <div className="flex flex-col md:flex-row items-center gap-12 relative z-10 text-center md:text-left">
              <div className="w-32 h-32 rounded-[40px] overflow-hidden border-4 border-gold/20 shadow-2xl group-hover:scale-110 transition-transform bg-navy-dark">
                <img src="https://breezyrecruit.com/wp-content/uploads/2024/11/Job-Seekers-150x150.jpg" alt="Job Seekers" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
              </div>
              <div className="text-white space-y-2">
                <h3 className="text-4xl font-black tracking-tighter uppercase leading-none">Job Seekers</h3>
                <p className="text-lg font-black text-gold uppercase tracking-[0.3em]">Ignite Potential.</p>
              </div>
            </div>
          </Link>

          <Link 
            href="/employer-solutions" 
            className="flex-1 glass-panel group relative overflow-hidden p-16 transition-all hover:bg-gold/5 rounded-[64px] border-white/5 hover:border-gold/20"
          >
            <div className="flex flex-col md:flex-row items-center gap-12 relative z-10 text-center md:text-left">
              <div className="w-32 h-32 rounded-[40px] overflow-hidden border-4 border-gold/20 shadow-2xl group-hover:scale-110 transition-transform bg-navy-dark">
                <img src="https://breezyrecruit.com/wp-content/uploads/2024/11/employee-150x150.jpg" alt="Employers" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
              </div>
              <div className="text-white space-y-2">
                <h3 className="text-4xl font-black tracking-tighter uppercase leading-none">Employers</h3>
                <p className="text-lg font-black text-gold uppercase tracking-[0.3em]">Secure Excellence.</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
