'use client';

import { Search, MapPin, Briefcase, Clock, ArrowRight, Check, Stars } from 'lucide-react';
import Link from 'next/link';

const jobs = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    category: "Information Technology",
    location: "Remote / New York",
    type: "Full-Time",
    posted: "2 days ago",
    salary: "$120k - $160k"
  },
  {
    id: 2,
    title: "Registered Nurse (ICU)",
    category: "Healthcare",
    location: "Houston, TX",
    type: "Contract",
    posted: "1 day ago",
    salary: "$85k - $110k"
  },
  {
    id: 3,
    title: "Marketing Manager",
    category: "Marketing",
    location: "Chicago, IL",
    type: "Full-Time",
    posted: "3 days ago",
    salary: "$90k - $120k"
  },
  {
    id: 4,
    title: "Project Coordinator",
    category: "Professional Services",
    location: "Atlanta, GA",
    type: "Full-Time",
    posted: "5 days ago",
    salary: "$70k - $90k"
  },
  {
    id: 5,
    title: "Warehouse Supervisor",
    category: "Industrial",
    location: "Los Angeles, CA",
    type: "Full-Time",
    posted: "1 week ago",
    salary: "$65k - $80k"
  },
  {
    id: 6,
    title: "Customer Success Lead",
    category: "Sales",
    location: "Remote",
    type: "Full-Time",
    posted: "4 days ago",
    salary: "$80k - $105k"
  }
];

export default function JobOpenings() {
  return (
    <div className="min-h-screen bg-navy-dark flex flex-col font-sans selection:bg-gold selection:text-navy-dark overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Particles & Glows */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 blur-[120px] rounded-full animate-pulse transition-all duration-5000"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-navy-light/10 blur-[150px] rounded-full animate-float"></div>
          <div className="absolute inset-0 bg-linear-to-b from-navy-dark via-transparent to-navy-dark"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center space-y-12 animate-fade-up">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-4">
              Career Acceleration
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] drop-shadow-2xl">
              Find Your <br /> <span className="text-shimmer">Dream Career.</span>
            </h1>
          </div>
          <p className="text-lg md:text-2xl font-bold text-slate-400 max-w-2xl mx-auto tracking-tight opacity-90">
            Precision-matched opportunities from global industry leaders. <span className="text-white">Your legacy starts here.</span>
          </p>
          
          {/* Elite Search Bar Container */}
          <div className="max-w-5xl mx-auto glass-panel p-3 rounded-[40px] shadow-2xl flex flex-col md:flex-row gap-3 border-white/10 hover:border-gold/20 transition-all duration-700">
            <div className="grow relative group/input">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gold w-6 h-6 group-focus-within/input:scale-110 transition-transform" />
              <input 
                type="text" 
                placeholder="Job title, keyword, or company"
                className="w-full pl-16 pr-6 py-6 bg-white/5 border border-white/5 rounded-[32px] focus:outline-none focus:border-gold/40 text-white text-lg font-bold placeholder:text-slate-500 transition-all"
              />
            </div>
            <div className="grow relative group/input">
              <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-gold w-6 h-6 group-focus-within/input:scale-110 transition-transform" />
              <input 
                type="text" 
                placeholder="City, state, or remote"
                className="w-full pl-16 pr-6 py-6 bg-white/5 border border-white/5 rounded-[32px] focus:outline-none focus:border-gold/40 text-white text-lg font-bold placeholder:text-slate-500 transition-all"
              />
            </div>
            <button className="bg-gold hover:bg-gold-hover text-navy-dark px-12 py-6 rounded-[32px] font-black uppercase tracking-[0.2em] transition-all transform hover:-translate-y-1 shadow-[0_4px_30px_rgba(212,175,55,0.4)] text-sm shrink-0">
              Search Ops
            </button>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-32 bg-navy border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-24 gap-12">
            <div className="text-center md:text-left">
              <h6 className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6 px-4 py-1 bg-gold/5 rounded-full border border-gold/10 inline-block">Active Roles</h6>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">Latest Opportunities</h2>
              <div className="h-1 w-24 bg-gold rounded-full opacity-50 mt-8 mx-auto md:mx-0"></div>
            </div>
            <div className="glass-panel px-8 py-4 rounded-full border-white/5">
              <span className="text-slate-400 font-black text-xs uppercase tracking-widest flex items-center gap-3">
                 <Stars className="w-4 h-4 text-gold animate-pulse" /> {jobs.length} Priority Positions Found
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {jobs.map((job) => (
              <div key={job.id} className="glass-panel group p-10 rounded-[48px] hover:border-gold/30 hover:shadow-gold/5 transition-all duration-500 flex flex-col h-full border-white/5">
                <div className="mb-8 space-y-3">
                  <div className="inline-block bg-gold/10 border border-gold/20 text-gold px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg backdrop-blur-md">
                    {job.category}
                  </div>
                  <div className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] flex items-center px-1">
                    <Clock className="w-3 h-3 mr-2 text-gold/40" />
                    {job.posted}
                  </div>
                </div>
                
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-gold transition-colors tracking-tight leading-tight">
                  {job.title}
                </h3>
                
                <div className="space-y-4 mb-10 grow">
                  <div className="flex items-center text-slate-400 font-bold text-lg">
                    <MapPin className="w-5 h-5 mr-3 text-gold/40" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-slate-400 font-bold text-base">
                    <Briefcase className="w-5 h-5 mr-3 text-gold/40" />
                    {job.type}
                  </div>
                  <div className="text-2xl font-black text-white pt-4">
                    {job.salary}
                  </div>
                </div>
                
                <Link href={`/jobs/${job.id}`} className="mt-auto w-full flex items-center justify-center bg-white/5 border border-white/10 text-white py-6 rounded-3xl font-black uppercase tracking-[0.2em] group-hover:bg-gold group-hover:text-navy-dark group-hover:border-gold transition-all duration-300 text-xs text-center">
                  Apply Now <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <button className="px-16 py-6 border-2 border-white/10 text-white font-black rounded-full hover:border-gold hover:text-gold transition-all text-xs uppercase tracking-[0.4em] backdrop-blur-md">
              Browse Intelligence Archive
            </button>
          </div>
        </div>
      </section>

      {/* Talent Community CTA */}
      <section className="py-32 bg-navy-dark relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-6xl mx-auto glass-panel rounded-[64px] p-16 lg:p-32 relative overflow-hidden group hover:border-gold/20 transition-all duration-700">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold/5 blur-[120px] rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
            
            <div className="relative z-10 space-y-10">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tighter">
                Don't See The <br /> <span className="text-shimmer">Ideal Fit?</span>
              </h2>
              <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto font-bold">
                Join our elite talent circuit and we'll track opportunities that match your specific DNA and ambition.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
                <Link href="/register-upload-resume" className="bg-gold hover:bg-gold-hover text-navy-dark px-16 py-6 rounded-full font-black text-xs uppercase tracking-[0.4em] transition-all transform hover:-translate-y-2 shadow-[0_4px_40px_rgba(212,175,55,0.4)] flex items-center justify-center gap-4">
                  Upload Resume <Check className="w-5 h-5" />
                </Link>
                <Link href="/contact-us" className="bg-white/5 hover:bg-white/10 text-white border-2 border-white/10 px-16 py-6 rounded-full font-black text-xs uppercase tracking-[0.4em] transition-all flex items-center justify-center gap-4 backdrop-blur-md">
                  Consultation <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
