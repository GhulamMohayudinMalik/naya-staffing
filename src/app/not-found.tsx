"use client";

import Link from "next/link";
import { ArrowLeft, Home, Search, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#040814] flex flex-col items-center justify-center relative overflow-hidden font-sans selection:bg-gold selection:text-navy-dark">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full animate-pulse transition-all duration-[5000ms]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-navy-light/10 blur-[150px] rounded-full animate-float"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-navy-dark via-transparent to-navy-dark opacity-80"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-12 animate-fade-up">
        {/* Floating Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-gold/10 border border-gold/20 rounded-[32px] flex items-center justify-center animate-bounce shadow-2xl shadow-gold/10">
            <Compass className="w-12 h-12 text-gold" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-[12rem] md:text-[20rem] font-black text-white/5 leading-none tracking-tighter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
            404
          </h1>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-tight relative">
            Lost in the <br /> <span className="text-shimmer">Talent Void.</span>
          </h2>
          <p className="text-lg md:text-xl font-semibold text-slate-400 max-w-lg mx-auto leading-relaxed">
            The page you are looking for has been reassigned or retired from our database. Let's get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
          <Link 
            href="/" 
            className="group px-10 py-5 bg-gold text-navy-dark rounded-full font-bold text-[15px] tracking-tight transition-all duration-500 shadow-[0_8px_32px_rgba(212,175,55,0.2)] hover:shadow-[0_12px_48px_rgba(212,175,55,0.4)] transform hover:-translate-y-1 flex items-center justify-center gap-3"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Return Mission Control
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="group px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full font-bold text-[15px] tracking-tight transition-all duration-500 hover:bg-white/10 hover:border-white/20 transform hover:-translate-y-1 flex items-center justify-center gap-3 backdrop-blur-md"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Previous Circuit
          </button>
        </div>

        {/* Quick Links */}
        <div className="pt-20">
          <p className="text-xs font-black text-gold uppercase tracking-[0.5em] mb-8 opacity-50">Search Our Database</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/services" className="text-sm font-semibold text-slate-500 hover:text-white transition-colors uppercase tracking-[0.2em]">Services</Link>
            <Link href="/job-openings" className="text-sm font-semibold text-slate-500 hover:text-white transition-colors uppercase tracking-[0.2em]">Open Positions</Link>
            <Link href="/employer-solutions" className="text-sm font-semibold text-slate-500 hover:text-white transition-colors uppercase tracking-[0.2em]">For Employers</Link>
            <Link href="/contact-us" className="text-sm font-semibold text-slate-500 hover:text-white transition-colors uppercase tracking-[0.2em]">Contact Support</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
