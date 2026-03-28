"use client";

import Link from "next/link";
import { ArrowRight, Search, Users, Briefcase, FileText, Clock, TrendingUp, Check } from "lucide-react";
import TestimonialSlider from "@/components/TestimonialSlider";
import VideoBackground from "@/components/VideoBackground";

export default function ServicesPage() {
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
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-8 animate-fade-up">
          <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-4">
            Our Solutions
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] drop-shadow-2xl">
            Strategic <br /> <span className="text-shimmer">Excellence.</span>
          </h1>
          <p className="text-base md:text-xl font-semibold text-slate-200 tracking-tight max-w-3xl mx-auto opacity-90 leading-tight">
            Find the Perfect Match for your Workforce with our <span className="text-gold">Premium Recruitment</span> ecosystem.
          </p>
          
          <div className="pt-10">
            <Link href="#all-services" className="w-12 h-20 border-2 border-white/20 rounded-full flex items-start justify-center p-2 mx-auto group hover:border-gold transition-colors">
              <div className="w-1 h-3 bg-gold rounded-full animate-bounce mt-2 group-hover:bg-gold-hover"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro / All Services Section */}
      <section id="all-services" className="bg-navy-dark py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 flex flex-col items-center">
            <h6 className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6 px-4 py-1 bg-gold/5 rounded-full border border-gold/10">Tailored For Success</h6>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-tight">Our Core Services</h2>
            <p className="text-base md:text-lg text-slate-400 max-w-2xl font-semibold leading-relaxed mb-10">
              Hire Smarter, Not Harder – Find the Perfect Fit Fast. We handle the complexity, you reap the results.
            </p>
            <div className="h-1 w-24 bg-gold rounded-full opacity-50"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { 
                title: "Recruitment Process Outsourcing", 
                icon: Users, 
                href: "/recruitment-process-outsourcing",
                desc: "Say goodbye to endless job postings and slow hiring. We take full ownership of your recruitment lifecycle." 
              },
              { 
                title: "Reverse Recruitment", 
                icon: TrendingUp, 
                href: "/reverse-recruitment",
                desc: "We flip the model—representing the candidate to find the absolute best career match in the market." 
              },
              { 
                title: "Direct Hire", 
                icon: Search, 
                href: "/direct-hire",
                desc: "Expertly sourced permanent staff who integrate seamlessly into your company culture and long-term goals." 
              },
              { 
                title: "Contract to Hire", 
                icon: FileText, 
                href: "/contract-to-hire",
                desc: "Validate performance in real-world scenarios before committing to a full-time hiring decision." 
              },
              { 
                title: "Temporary Staffing", 
                icon: Clock, 
                href: "/temporary-staffing",
                desc: "Agile staffing solutions for project-based needs, seasonal peaks, or temporary expertise gaps." 
              },
              { 
                title: "Executive Search", 
                icon: Briefcase, 
                href: "/executive-search",
                desc: "Discreet and targeted search for leadership talent capable of driving transformational growth." 
              },
            ].map((service, idx) => (
              <div key={idx} className="glass-panel group p-12 rounded-[48px] hover:border-gold/30 transition-all duration-500 transform hover:-translate-y-3 flex flex-col items-start text-left">
                <div className="w-20 h-20 bg-gold/5 border border-gold/20 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-gold group-hover:text-navy-dark transition-all duration-500 shadow-xl group-hover:shadow-gold/20">
                  <service.icon className="w-10 h-10 text-gold group-hover:text-inherit transition-colors" />
                </div>
                <h3 className="text-2xl font-black text-white mb-6 group-hover:text-gold transition-colors tracking-tight leading-tight uppercase">{service.title}</h3>
                <p className="text-slate-400 mb-10 leading-relaxed font-semibold text-base">{service.desc}</p>
                <Link href={service.href} className="mt-auto px-10 py-5 bg-white/5 border border-white/10 rounded-full font-black text-xs uppercase tracking-widest text-white group-hover:bg-gold group-hover:text-navy-dark group-hover:border-gold transition-all duration-300 flex items-center gap-3">
                  Explore Solution <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Talent Section */}
      <section className="bg-navy py-32 overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h6 className="text-gold font-black text-xs tracking-[0.5em] uppercase px-4 py-1 bg-gold/5 inline-block rounded-full border border-gold/10">
              Sector Specialization
            </h6>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">
              Find <span className="text-shimmer">Industry-Specific</span> Talent
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed font-semibold">
              We specialize in connecting businesses with <span className="text-white">Elite Talent</span> tailored to your industry’s unique DNA. From tech to trade, we speak your language.
            </p>
          </div>
        </div>

        {/* Industry Card Marquee (Matched to Home style) */}
        <div className="relative">
          <style dangerouslySetInnerHTML={{
            __html: `
            @keyframes marquee-industry {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee-industry {
              display: flex;
              width: max-content;
              animation: marquee-industry 70s linear infinite;
            }
            .animate-marquee-industry:hover {
              animation-play-state: paused;
            }
            `
          }} />

          <div className="overflow-hidden">
            <div className="animate-marquee-industry gap-10 py-10">
              {[
                { title: "Information Technology", image: "https://breezyrecruit.com/wp-content/uploads/2025/02/tech-talent.jpg" },
                { title: "Healthcare", image: "https://breezyrecruit.com/wp-content/uploads/2024/10/Healthcare.jpg" },
                { title: "Industrial", image: "https://breezyrecruit.com/wp-content/uploads/2025/05/1-1.jpg" },
                { title: "Hospitality", image: "https://breezyrecruit.com/wp-content/uploads/2024/10/Senior-Living.jpg" },
                { title: "Professional Services", image: "https://breezyrecruit.com/wp-content/uploads/2025/02/Our-Proven-Process_20_11zon-1.png" },
                { title: "Insurance", image: "https://breezyrecruit.com/wp-content/uploads/2025/05/Education-Recruitment-Agency-in-Pakistan.png" },
                { title: "Construction", image: "https://breezyrecruit.com/wp-content/uploads/2025/05/AdobeStock_290512663-1.jpg" },
                { title: "Marketing", image: "https://breezyrecruit.com/wp-content/uploads/2025/05/employer-top-image.jpeg" }
              ].concat([
                { title: "Information Technology", image: "https://breezyrecruit.com/wp-content/uploads/2025/02/tech-talent.jpg" },
                { title: "Healthcare", image: "https://breezyrecruit.com/wp-content/uploads/2024/10/Healthcare.jpg" },
                { title: "Industrial", image: "https://breezyrecruit.com/wp-content/uploads/2025/05/1-1.jpg" }
              ]).map((industry, idx) => (
                <div key={idx} className="w-[450px] group flex-shrink-0">
                  <div className="glass-panel h-[500px] rounded-[48px] overflow-hidden relative border border-white/5 transition-all duration-500 hover:border-gold/30">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent"></div>
                    <div className="absolute inset-x-12 bottom-12 z-10">
                      <h4 className="text-3xl font-black text-white group-hover:text-gold transition-colors leading-[0.9] mb-4">
                        {industry.title}
                      </h4>
                      <Link href={`/industries/${industry.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center text-xs font-black uppercase tracking-[0.3em] text-gold/60 group-hover:text-gold transition-colors">
                        Explore Careers <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TestimonialSlider />

      {/* Final CTA sections */}
      <section className="bg-navy-dark py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 px-4">
          {/* Job Seekers CTA */}
          <div className="flex-1 group glass-panel rounded-[64px] overflow-hidden p-12 relative flex flex-col justify-between min-h-[450px] hover:border-gold/30 transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[80px] rounded-full group-hover:bg-gold/10 transition-colors"></div>
            <div className="relative z-10 flex items-center gap-8 mb-10">
              <div className="w-24 h-24 rounded-3xl overflow-hidden shadow-2xl group-hover:scale-110 transition-transform duration-700 ring-4 ring-gold/20">
                <img 
                  src="https://breezyrecruit.com/wp-content/uploads/2024/11/Job-Seekers-150x150.jpg" 
                  alt="Job Seekers" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
              <div>
                <div className="text-gold font-black text-xs uppercase tracking-[0.3em] mb-2">For Talent</div>
                <h3 className="text-4xl font-black text-white leading-tight">Job <span className="text-shimmer">Seekers</span></h3>
              </div>
            </div>
            <p className="text-base md:text-lg text-slate-400 font-semibold mb-10 relative z-10">
              Unlock access to unlisted roles and premier representation. Your next peak performance is one click away.
            </p>
            <Link 
              href="/job-openings" 
              className="relative z-10 w-full py-6 bg-gold text-navy-dark rounded-full font-black text-sm uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-gold-hover shadow-xl transform group-hover:-translate-y-2 transition-all"
            >
              Start Your Hunt <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Employers CTA */}
          <div className="flex-1 group glass-panel rounded-[64px] overflow-hidden p-12 relative flex flex-col justify-between min-h-[450px] hover:border-gold/30 transition-all duration-500">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full group-hover:bg-white/10 transition-colors"></div>
            <div className="relative z-10 flex items-center gap-8 mb-10">
              <div className="w-24 h-24 rounded-3xl overflow-hidden shadow-2xl group-hover:scale-110 transition-transform duration-700 ring-4 ring-white/20">
                <img 
                  src="https://breezyrecruit.com/wp-content/uploads/2024/11/employee-150x150.jpg" 
                  alt="Employers" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
              <div>
                <div className="text-gold font-black text-xs uppercase tracking-[0.3em] mb-2">For Companies</div>
                <h3 className="text-4xl font-black text-white leading-tight">Expert <span className="text-shimmer">Employers</span></h3>
              </div>
            </div>
            <p className="text-base md:text-lg text-slate-400 font-semibold mb-10 relative z-10">
              Build your legacy with talent that transforms business. Scalable solutions for modern growth.
            </p>
            <Link 
              href="/employer-solutions" 
              className="relative z-10 w-full py-6 bg-white text-navy-dark rounded-full font-black text-sm uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-slate-200 shadow-xl transform group-hover:-translate-y-2 transition-all"
            >
              Build Your Team <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
