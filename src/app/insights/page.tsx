"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, User, Calendar, Stars, Filter, ChevronRight } from "lucide-react";

export default function InsightsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const blogs = [
    {
      id: 6000,
      title: "How AI and Data-Driven Talent Sourcing Can Improve Your Hiring Process",
      author: "NAYA Staffing",
      date: "March 5, 2025",
      excerpt: "Did you know bad hires can cost companies big money? Some studies say it can be as much as 30% of the employee’s first-year salary. Finding the right people is tough, with",
      image: "https://breezyrecruit.com/wp-content/uploads/2025/05/Become-a-client-scaled.webp",
      href: "/insights/ai-sourcing"
    },
    {
      id: 5209,
      title: "How to Use Automation and AI to Improve Volume Hiring in 2025",
      author: "NAYA Staffing",
      date: "February 24, 2025",
      excerpt: "Are you ready for a change? The year 2025 will change how companies find lots of new workers. It’s not just about filling jobs. It’s about getting the best people to stay",
      image: "https://breezyrecruit.com/wp-content/uploads/2025/05/1-4.jpg",
      href: "/insights/volume-hiring"
    },
    {
      id: 5062,
      title: "How Direct Hire Recruiting Saves Your Company Time and Hiring Costs",
      author: "NAYA Staffing",
      date: "February 21, 2025",
      excerpt: "Are you tired of long hiring processes? Do budget overruns stress you out? Direct hire recruiting can be a game-changer. It offers speed, cost savings, and high-quality hires. Direct hire recruiting offers",
      image: "https://breezyrecruit.com/wp-content/uploads/2025/05/1-1.jpg",
      href: "/insights/direct-hire-roi"
    },
    {
      id: 5015,
      title: "Why Direct Hire Staffing Is the Best Solution for Hard-to-Fill IT Roles",
      author: "NAYA Staffing",
      date: "February 20, 2025",
      excerpt: "Are you tired of seeing open IT jobs linger? It costs you money when these spots stay unfilled for too long. Finding folks with the right tech skills is tough right now.",
      image: "https://breezyrecruit.com/wp-content/uploads/2025/05/benefits-of-recruitment-agency.webp",
      href: "/insights/tech-staffing"
    },
    {
      id: 4766,
      title: "How Can IT Staffing Services Help My Business Avoid Project Delays in 2025?",
      author: "NAYA Staffing",
      date: "February 19, 2025",
      excerpt: "Every business leader understands the stress of project delays. A missed deadline can lead to budget overruns, strained client relationships, and a loss of competitive edge. As projects pile up, it becomes",
      image: "https://breezyrecruit.com/wp-content/uploads/2025/02/IT-Staffing-Services.jpg",
      href: "/insights/it-staffing-delays"
    }
  ];

  return (
    <div className="min-h-screen bg-navy-dark flex flex-col font-sans selection:bg-gold selection:text-navy-dark overflow-x-hidden">
      {/* Hero Section - Immersive Intelligence */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 blur-[120px] rounded-full animate-pulse transition-all duration-[5000ms]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-navy-light/10 blur-[150px] rounded-full animate-float"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-transparent to-navy-dark"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center space-y-10 animate-fade-up">
          <div className="space-y-6">
            <div className="inline-block px-6 py-2 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-4">
              Intelligence Feed
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] drop-shadow-2xl">
              The <span className="text-shimmer">Insights Circuit.</span>
            </h1>
          </div>
          <p className="text-base md:text-xl font-semibold text-slate-400 max-w-4xl mx-auto leading-tight tracking-tight opacity-90">
             Strategic analysis, industry updates, and <span className="text-white">Talent Architecture</span> deep-dives from the elite NAYA Staffing team.
          </p>
          <div className="h-1 w-24 bg-gold mx-auto rounded-full opacity-50 mt-12"></div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-12 px-4 border-y border-white/5 bg-navy/30 backdrop-blur-3xl sticky top-[80px] z-[40]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex items-center gap-4 text-white">
                <Filter className="w-5 h-5 text-gold" />
                <h2 className="text-xl font-black uppercase tracking-widest leading-none">Intelligence Filter</h2>
            </div>
            <div className="h-4 w-px bg-white/10 hidden md:block"></div>
            <Link href="/insights" className="text-sm font-black text-gold hover:text-white transition-all uppercase tracking-[0.3em] flex items-center gap-3">
               Archive Circuit <span className="bg-gold/10 px-3 py-1 rounded-full text-[10px] text-gold border border-gold/20">30</span>
            </Link>
          </div>

          <div className="w-full md:w-[450px]">
            <form className="relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gold opacity-50 w-5 h-5 group-focus-within:opacity-100 transition-all" />
              <input 
                type="text" 
                placeholder="Search Intelligence Database" 
                className="w-full pl-16 pr-6 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-gold/40 text-white text-lg font-bold placeholder:text-slate-600 transition-all font-sans"
              />
            </form>
          </div>
        </div>
      </section>

      {/* Insights Posts List */}
      <main className="max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {blogs.map((blog) => (
            <article key={blog.id} className="flex flex-col lg:flex-row gap-12 lg:gap-20 group relative">
              <div className="lg:w-[500px] flex-shrink-0">
                <div className="relative aspect-[16/10] rounded-[52px] overflow-hidden glass-panel border-white/10 shadow-2xl p-4">
                  <Link href={blog.href} className="block w-full h-full rounded-[40px] overflow-hidden relative">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover grayscale transition-all duration-[2s] group-hover:scale-110 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-navy-dark/40 group-hover:bg-transparent transition-all"></div>
                  </Link>
                </div>
              </div>

              <div className="flex flex-col justify-center grow space-y-8">
                <div className="space-y-6">
                    <h3 className="text-3xl lg:text-4xl font-black text-white group-hover:text-gold transition-colors leading-[0.9] tracking-tighter">
                      <Link href={blog.href}>{blog.title}</Link>
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-10 text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">
                      <span className="flex items-center gap-4">
                        <User className="w-4 h-4 text-gold/50" />
                          <span className="text-white opacity-80">{blog.author}</span>
                      </span>
                      <span className="flex items-center gap-4">
                        <Calendar className="w-4 h-4 text-gold/50" />
                          <span className="text-white opacity-80">{blog.date}</span>
                      </span>
                    </div>
                </div>

                <div className="text-slate-400 max-w-3xl text-base lg:text-lg leading-relaxed font-semibold">
                  <p>{blog.excerpt}...</p>
                </div>

                <Link 
                  href={blog.href} 
                  className="inline-flex items-center gap-4 font-black text-gold hover:text-white transition-all uppercase tracking-[0.4em] text-xs pt-4 group/link"
                >
                  Retrieve Full Intel <ChevronRight className="w-5 h-5 group-hover/link:translate-x-3 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-40 text-center">
            <button className="relative px-20 py-7 bg-gold text-navy-dark rounded-full font-black text-xs uppercase tracking-[0.4em] shadow-[0_4px_50px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-2 flex items-center justify-center gap-6 group mx-auto">
              Decrypt More Insights <Stars className="w-6 h-6 animate-spin-slow" />
            </button>
        </div>
      </main>

      {/* Massive CTA Section */}
      <section className="bg-navy border-y border-white/5 py-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 px-4">
          <Link 
            href="/why-candidates-choose-naya" 
            className="flex-1 glass-panel group relative overflow-hidden p-16 transition-all hover:bg-gold/5 rounded-[64px] border-white/5 hover:border-gold/20"
          >
            <div className="flex flex-col md:flex-row items-center gap-12 relative z-10 text-center md:text-left">
              <div className="w-32 h-32 rounded-[40px] overflow-hidden border-4 border-gold/20 shadow-2xl group-hover:scale-110 transition-transform bg-navy-dark">
                <img src="https://breezyrecruit.com/wp-content/uploads/2024/11/Job-Seekers-150x150.jpg" alt="Job Seekers" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
              </div>
              <div className="text-white space-y-2">
                <h3 className="text-3xl font-black tracking-tighter uppercase leading-none">Job Seekers</h3>
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
                <h3 className="text-3xl font-black tracking-tighter uppercase leading-none">Employers</h3>
                <p className="text-lg font-black text-gold uppercase tracking-[0.3em]">Secure Excellence.</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
