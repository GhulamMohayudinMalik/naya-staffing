"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Search, Users, Briefcase, FileText, Clock, TrendingUp, Check } from "lucide-react";
import TestimonialSlider from "@/components/TestimonialSlider";
import VideoBackground from "@/components/VideoBackground";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-navy-dark flex flex-col font-sans selection:bg-gold selection:text-navy-dark overflow-x-hidden">
      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Particles & Glows */}
        <div className="absolute inset-0 z-0">
          <VideoBackground 
            src="/videos/hero.mp4" 
            overlayOpacity="bg-navy-dark/80"
          />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 blur-[120px] rounded-full animate-pulse transition-all duration-[5000ms]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-navy-light/20 blur-[150px] rounded-full animate-float transition-all duration-[7000ms]"></div>
          
          {/* Animated Dots/Particles */}
          <div className="absolute inset-0 opacity-20">
            {mounted && [...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-1 h-1 bg-gold rounded-full animate-float"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  opacity: Math.random()
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-6 animate-fade-up">
            <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-4">
              Premium Recruitment Agency
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] drop-shadow-2xl">
              A Smooth Path To <br className="hidden md:block" />
              <span className="text-shimmer">Talent & Opportunity.</span>
            </h1>
          </div>

          <h2 className="text-lg md:text-xl font-semibold text-slate-400 tracking-tight max-w-3xl mx-auto animate-fade-up delay-200">
            Smart Scalable Recruitment solutions tailored for <span className="text-white">Modern Workplaces</span> and evolving careers.
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-10 animate-fade-up delay-300">
            <Link
              href="/employer-solutions"
              className="w-full sm:w-auto px-12 py-5 text-sm font-black rounded-full text-navy-dark bg-gold hover:bg-gold-hover shadow-[0_4px_32px_rgba(212,175,55,0.4)] transition-all duration-500 transform hover:-translate-y-2 uppercase tracking-[0.2em]"
            >
              Start Hiring
            </Link>

            <Link
              href="/job-openings"
              className="w-full sm:w-auto px-12 py-5 text-sm font-black rounded-full text-white border-2 border-white/20 hover:border-gold hover:text-gold transition-all duration-500 transform hover:-translate-y-2 uppercase tracking-[0.2em] backdrop-blur-sm"
            >
              Start Your Job Hunt
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-20">
          <div className="w-1 h-12 bg-gradient-to-b from-transparent via-gold to-transparent rounded-full"></div>
        </div>
      </main>

      {/* Target Audiences Section */}
      <section className="bg-navy-dark py-32 overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-24 text-center lg:text-left">
            <div className="h-1 w-24 bg-gold mb-10 rounded-full mx-auto lg:mx-0"></div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
              Precision Matching for <br className="hidden md:block" /> <span className="text-gold">Industry Leaders.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-12 group glass-panel rounded-[48px] overflow-hidden relative min-h-[500px] flex items-center transition-all duration-700 hover:shadow-gold/5">
              <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy/80 to-transparent z-10"></div>
              <div className="p-12 lg:p-24 flex flex-col justify-center relative z-20 max-w-2xl">
                <div className="text-gold font-black text-xs uppercase tracking-[0.4em] mb-4">For Candidates</div>
                <h3 className="text-4xl font-black text-white mb-6">Job <span className="text-shimmer">Seekers</span></h3>
                <p className="text-base text-slate-400 font-semibold mb-10 leading-snug">Stop applying blindly. Get personalized career representation and access to exclusive opportunities.</p>
                <Link href="/job-openings" className="inline-flex items-center text-white font-black uppercase tracking-widest text-sm group/btn hover:text-gold transition-colors">
                  Explore Positions <ArrowRight className="ml-3 w-6 h-6 border-2 border-gold rounded-full p-1 group-hover/btn:translate-x-2 transition-all bg-gold/10" />
                </Link>
              </div>
              <div className="absolute right-0 bottom-0 h-full w-full md:w-3/5 z-0 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000 pointer-events-none">
                <img src="https://breezyrecruit.com/wp-content/uploads/2025/05/vecteezy_portrait-of-confident-business-man-isolated-on-transparent_44777304.png" alt="Candidate Success" className="w-full h-full object-contain object-right-bottom transform scale-110 group-hover:scale-100 transition-transform duration-1000" />
              </div>
            </div>

            <div className="lg:col-span-12 group glass-panel rounded-[48px] overflow-hidden relative min-h-[500px] flex items-center transition-all duration-700 hover:shadow-gold/5 border-white/5">
              <div className="absolute inset-0 bg-gradient-to-l from-navy-dark via-navy/80 to-transparent z-10"></div>
              <div className="p-12 lg:p-24 flex flex-col justify-center relative z-20 max-w-2xl ml-auto text-right items-end">
                <div className="text-gold font-black text-xs uppercase tracking-[0.4em] mb-4 text-right">For Companies</div>
                <h3 className="text-4xl font-black text-white mb-6">Expert <span className="text-shimmer">Employers</span></h3>
                <p className="text-base text-slate-400 font-semibold mb-10 leading-snug text-right">Scalable hiring solutions designed to find the 1% of talent that actually delivers bottom-line results.</p>
                <Link href="/employer-solutions" className="inline-flex items-center text-white font-black uppercase tracking-widest text-sm group/btn hover:text-gold transition-colors">
                  Build Your Team <ArrowRight className="ml-3 w-6 h-6 border-2 border-gold rounded-full p-1 group-hover/btn:translate-x-2 transition-all bg-gold/10" />
                </Link>
              </div>
              <div className="absolute left-0 bottom-0 h-full w-full md:w-3/5 z-0 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000 pointer-events-none">
                <img src="https://breezyrecruit.com/wp-content/uploads/2025/05/vecteezy_portrait-of-confident-business-man-isolated-on-transparent_44777304.png" alt="Employer Success" className="w-full h-full object-contain object-left-bottom transform scale-110 group-hover:scale-100 transition-transform duration-1000 mirror-x" style={{ transform: 'scaleX(-1)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-navy py-32 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 flex flex-col items-center">
            <h6 className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6 px-4 py-1 bg-gold/5 rounded-full border border-gold/10">Strategic Solutions</h6>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-tight">Elite Recruitment Services</h2>
            <div className="h-1 w-24 bg-gold rounded-full opacity-50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "Recruitment Process Outsourcing", icon: Users, href: "/recruitment-process-outsourcing", desc: "End-to-end scalable hiring management for high-growth enterprises." },
              { title: "Reverse Recruitment", icon: TrendingUp, href: "/reverse-recruitment", desc: "We market YOU to the best companies, ensuring your career reaches its peak." },
              { title: "Direct Hire", icon: Search, href: "/direct-hire", desc: "Long-term permanent placements that align with your corporate culture." },
              { title: "Contract to Hire", icon: FileText, href: "/contract-to-hire", desc: "Risk-free talent evaluation—contract today, hire for the future tomorrow." },
              { title: "Temporary Staffing", icon: Clock, href: "/temporary-staffing", desc: "Agile, short-term expert staffing to handle overflow and critical projects." },
              { title: "Executive Search", icon: Briefcase, href: "/executive-search", desc: "Pinpoint accuracy in finding C-suite leaders who define industry futures." },
            ].map((service, idx) => (
              <div key={idx} className="glass-panel group p-12 rounded-[40px] hover:border-gold/30 hover:shadow-gold/10 transition-all duration-500 transform hover:-translate-y-3 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gold/5 border border-gold/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold group-hover:text-navy-dark transition-all duration-500 scale-110">
                  <service.icon className="w-10 h-10 text-gold group-hover:text-inherit transition-colors" />
                </div>
                <h3 className="text-2xl font-black text-white mb-6 group-hover:text-gold transition-colors tracking-tight">{service.title}</h3>
                <p className="text-slate-400 mb-10 leading-relaxed font-semibold text-base">{service.desc}</p>
                <Link href={service.href} className="mt-auto px-10 py-4 border border-white/10 rounded-full font-black text-xs uppercase tracking-widest text-white group-hover:bg-gold group-hover:text-navy-dark group-hover:border-gold transition-all duration-300">View Service</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Showcase Section */}
      <section className="bg-navy-dark py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-[64px] p-16 md:p-24 text-center mb-20 relative overflow-hidden group hover:shadow-gold/5 transition-all duration-700">
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-gold/5 blur-[100px] rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <h6 className="text-gold font-black uppercase tracking-[0.5em] text-xs mb-8">Industry Excellence</h6>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-10 leading-[1.1] tracking-tighter">Find <span className="text-shimmer">Industry-Specific</span> Talent</h2>
              <p className="text-base text-slate-400 leading-relaxed font-semibold mb-12">We specialize in connecting businesses with elite talent tailored to your industry’s unique DNA.</p>
              <Link href="/our-industries" className="inline-flex items-center px-12 py-5 bg-gold text-navy-dark rounded-full font-black text-sm uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-transform">Explore All Industries <ArrowRight className="ml-3 w-5 h-5" /></Link>
            </div>
          </div>
          
          <div className="marquee-container overflow-hidden pt-12 pb-24">
             <style dangerouslySetInnerHTML={{ __html: `@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } .dark-marquee { display: flex; width: max-content; animation: marquee 80s linear infinite; } .dark-marquee:hover { animation-play-state: paused; }` }} />
            <div className="dark-marquee gap-10">
              {[
                { title: "Information Technology", image: "https://breezyrecruit.com/wp-content/uploads/2025/02/tech-talent.jpg" },
                { title: "Healthcare", image: "https://breezyrecruit.com/wp-content/uploads/2025/07/Screenshot-2025-08-01-at-4.46.10-AM.png" },
                { title: "Industrial", image: "https://breezyrecruit.com/wp-content/uploads/2025/07/Screenshot-2025-08-01-at-4.41.05-AM.png" },
                { title: "Hospitality", image: "https://breezyrecruit.com/wp-content/uploads/2025/07/Screenshot-2025-08-01-at-4.42.28-AM.png" },
                { title: "Professional Services", image: "https://breezyrecruit.com/wp-content/uploads/2025/07/Screenshot-2025-08-01-at-4.44.58-AM.png" },
                { title: "Insurance", image: "https://breezyrecruit.com/wp-content/uploads/2025/05/iStock-975763462.jpg" },
                { title: "Construction", image: "https://breezyrecruit.com/wp-content/uploads/2025/05/AdobeStock_290512663-1.jpg" },
                { title: "Marketing", image: "https://breezyrecruit.com/wp-content/uploads/2025/07/Screenshot-2025-08-01-at-5.17.56-AM.png" }
              ].concat([
                { title: "Information Technology", image: "https://breezyrecruit.com/wp-content/uploads/2025/02/tech-talent.jpg" },
                { title: "Healthcare", image: "https://breezyrecruit.com/wp-content/uploads/2025/07/Screenshot-2025-08-01-at-4.46.10-AM.png" },
                { title: "Industrial", image: "https://breezyrecruit.com/wp-content/uploads/2025/07/Screenshot-2025-08-01-at-4.41.05-AM.png" }
              ]).map((industry, idx) => (
                <div key={idx} className="w-[450px] group flex-shrink-0">
                  <div className="glass-panel h-[500px] rounded-[48px] overflow-hidden relative border border-white/5 transition-all duration-500 hover:border-gold/30">
                    <img src={industry.image} alt={industry.title} className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent"></div>
                    <div className="absolute inset-x-12 bottom-12 z-10">
                      <h4 className="text-3xl font-black text-white group-hover:text-gold transition-colors leading-[0.9] mb-4">{industry.title}</h4>
                      <Link href={`/industries/${industry.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center text-xs font-black uppercase tracking-[0.3em] text-gold/60 group-hover:text-gold transition-colors">Explore Careers <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why NAYA Staffing? Section */}
      <section className="bg-navy py-32 overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2 space-y-12">
              <div className="space-y-6">
                <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-4">Why Work With Us</div>
                <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">Experience The<br /> <span className="text-shimmer">NAYA Staffing Advantage.</span></h2>
              </div>
              <div className="space-y-8 text-base text-slate-400 leading-relaxed font-semibold">
                <p>NAYA Staffing is more than an agency; we are a career accelerator. We connect elite talent with high-growth firms through a signature blend of <span className="text-white">data-driven sourcing</span> and human-centric matching.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  <div className="flex gap-4 p-6 glass-panel rounded-3xl border-white/5">
                     <div className="text-gold mt-1"><Check className="w-6 h-6" /></div>
                     <div>
                        <h5 className="font-black text-white mb-1 uppercase tracking-widest text-sm">Reverse Model</h5>
                        <p className="text-sm font-medium">Candidate-first representation.</p>
                     </div>
                  </div>
                  <div className="flex gap-4 p-6 glass-panel rounded-3xl border-white/5">
                     <div className="text-gold mt-1"><Check className="w-6 h-6" /></div>
                     <div>
                        <h5 className="font-black text-white mb-1 uppercase tracking-widest text-sm">Rapid Fill</h5>
                        <p className="text-sm font-medium">Avg. 14 days time-to-hire.</p>
                     </div>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <Link href="/about-us" className="bg-white/5 shadow-2xl backdrop-blur-md border border-white/10 text-white px-12 py-6 rounded-full font-black text-sm uppercase tracking-[0.2em] inline-flex items-center group transition-all transform hover:-translate-y-2 hover:border-gold hover:text-gold">Explore Higher Standards <ArrowRight className="ml-4 w-5 h-5 group-hover:translate-x-3 transition-transform" /></Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative group">
              <div className="relative rounded-[80px] overflow-hidden p-6 glass-panel border-white/10 shadow-2xl">
                <div className="rounded-[60px] overflow-hidden relative aspect-[4/5] md:aspect-square">
                   <img src="https://breezyrecruit.com/wp-content/uploads/2025/05/1-1-1024x683.jpg" alt="Executive Team" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-navy-dark via-navy-dark/10 to-transparent"></div>
              </div>
              <div className="absolute -bottom-10 -left-10 md:-left-20 glass-panel p-10 rounded-[48px] shadow-gold/20 flex flex-col items-center justify-center border-white/20 hover:scale-105 transition-transform duration-500 animate-float">
                <div className="bg-gold p-4 rounded-3xl mb-6 shadow-xl"><Users className="w-10 h-10 text-navy-dark" /></div>
                <div className="text-center">
                  <div className="text-5xl font-black text-white tracking-tighter mb-2">5,000+</div>
                  <div className="text-xs font-black text-gold uppercase tracking-[0.3em]">Talents Placed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSlider />

      {/* Blog Section */}
      <section className="bg-navy-dark py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 space-y-6">
            <div className="h-1 w-24 bg-gold mb-10 mx-auto rounded-full"></div>
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-tight">Thought <br className="hidden md:block" /> <span className="text-shimmer">Leadership.</span></h2>
            <p className="mt-8 text-lg text-slate-400 max-w-3xl mx-auto font-semibold">Navigating the future of work through expert insights and data-driven industry reports.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {[
              { title: "AI and Data-Driven Sourcing", desc: "Harnessing algorithmic precision to identify the 1% of talent in saturated markets.", image: "https://breezyrecruit.com/wp-content/uploads/2025/05/Become-a-client-scaled.webp", href: "/blog/ai-sourcing" },
              { title: "The Future of Volume Hiring", desc: "Scaling workforces in 2025 without compromising culture or quality benchmarks.", image: "https://breezyrecruit.com/wp-content/uploads/2025/05/1-4.jpg", href: "/blog/volume-hiring" },
              { title: "Hiring Costs & Direct Hire", desc: "Strategic ROI analysis: Why direct hire outperforms traditional staffing models.", image: "https://breezyrecruit.com/wp-content/uploads/2025/05/1-1.jpg", href: "/blog/direct-hire-roi" },
              { title: "Solving Hard To Fill IT Roles", desc: "Expert strategies for filling critical tech deficits in record-breaking timelines.", image: "https://breezyrecruit.com/wp-content/uploads/2025/05/benefits-of-recruitment-agency.webp", href: "/blog/tech-staffing" }
            ].map((blog, idx) => (
              <div key={idx} className="group glass-panel rounded-[48px] overflow-hidden p-8 flex flex-col md:flex-row gap-8 hover:border-gold/30 transition-all duration-500">
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="relative h-48 md:h-full rounded-[32px] overflow-hidden">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gold/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                </div>
                <div className="md:w-2/3 flex flex-col justify-center space-y-4 pr-6">
                  <h3 className="text-2xl font-black text-white group-hover:text-gold transition-colors leading-tight tracking-tight"><Link href={blog.href}>{blog.title}</Link></h3>
                  <p className="text-slate-400 text-sm font-bold leading-relaxed line-clamp-3">{blog.desc}</p>
                  <Link href={blog.href} className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-gold/40 group-hover:text-gold transition-colors pt-4">Deep Dive <span>→</span></Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/blog" className="inline-flex items-center justify-center px-16 py-6 text-xs font-black uppercase tracking-[0.4em] rounded-full text-navy-dark bg-gold hover:bg-gold-hover shadow-gold/20 transition-all transform hover:-translate-y-2 border-white/5 border">Browse Intelligence Archive</Link>
          </div>
        </div>
      </section>

      {/* Footer is handled globally */}
    </div>
  );
}
