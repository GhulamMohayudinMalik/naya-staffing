"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Quote, ArrowRight } from "lucide-react";

interface Testimonial {
  text: string;
  name: string;
}

const defaultTestimonials: Testimonial[] = [
  { text: "NAYA Staffing reduced our time-to-hire and delivered pre-vetted candidates we couldn’t reach ourselves.", name: "VP of HR, TECHNOLOGY FIRM" },
  { text: "They quickly filled critical roles without sacrificing quality.", name: "DIRECTOR OF EXECUTIVE SEARCH, VENTURE CAPITAL FIRM" },
  { text: "NAYA Staffing’s RPO solution gave us a scalable way to manage high-volume hiring.", name: "DIRECTOR OF TALENT ACQUISITION, LOGISTICS COMPANY" },
  { text: "Their market insights and screening process saved us weeks.", name: "HR DIRECTOR, RETAIL CHAIN" },
  { text: "We no longer sift through hundreds of resumes — NAYA Staffing sends a focused shortlist.", name: "CHIEF PEOPLE OFFICER, MANUFACTURING FIRM" },
  { text: "They reduced candidate drop-off during long hiring cycles.", name: "DIRECTOR OF TALENT PLANNING, PROFESSIONAL SERVICES FIRM" }
];

export default function TestimonialSlider() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % defaultTestimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [defaultTestimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % defaultTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + defaultTestimonials.length) % defaultTestimonials.length);
  };

  return (
    <section className="bg-[#040814] py-32 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gold/5 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-navy-light/10 blur-[120px] rounded-full animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-24 flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-6 animate-fade-up">
            Social Proof
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight animate-fade-up delay-100">
            What People Say<br />
            <span className="text-shimmer">About NAYA Staffing</span>
          </h2>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          {/* Nav Buttons (Desktop) */}
          <button
            onClick={prevTestimonial}
            className="hidden md:flex z-10 bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 text-white hover:bg-gold hover:text-navy-dark hover:border-gold transition-all duration-500 transform hover:-translate-x-2 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-8 h-8 group-hover:scale-110 transition-transform" />
          </button>

          {/* Central Testimonial Card */}
          <div className="flex-grow max-w-5xl mx-auto w-full">
            <div className="relative glass-panel rounded-[48px] p-10 md:p-24 shadow-2xl border border-white/10 min-h-[500px] flex flex-col justify-center transform transition-all duration-700 hover:shadow-gold/10 overflow-hidden">
              {/* Decorative Quote Mark Background */}
              <Quote className="absolute top-12 left-12 w-32 h-32 text-gold/5 -rotate-12" />
              
              <div
                key={currentTestimonial}
                className="animate-in fade-in slide-in-from-bottom-8 duration-1000 relative z-10"
              >
                <div className="flex justify-center mb-12">
                  <div className="w-20 h-20 bg-gold/10 rounded-3xl flex items-center justify-center border border-gold/30">
                    <Quote className="w-10 h-10 text-gold" />
                  </div>
                </div>
                
                <p className="text-xl md:text-3xl lg:text-4xl text-white font-semibold leading-tight mb-16 tracking-tight italic">
                  "{defaultTestimonials[currentTestimonial].text}"
                </p>
                
                <div className="flex flex-col items-center">
                  <cite className="not-italic">
                    <span className="text-gold font-black text-sm md:text-xl uppercase tracking-[0.3em]">
                      {defaultTestimonials[currentTestimonial].name}
                    </span>
                  </cite>
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4">
                {defaultTestimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`h-2 transition-all duration-700 rounded-full ${idx === currentTestimonial ? 'w-12 bg-gold shadow-[0_0_12px_rgba(212,175,55,0.6)]' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={nextTestimonial}
            className="hidden md:flex z-10 bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 text-white hover:bg-gold hover:text-navy-dark hover:border-gold transition-all duration-500 transform hover:translate-x-2 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-8 h-8 group-hover:scale-110 transition-transform" />
          </button>
          
          {/* Mobile Nav */}
          <div className="flex md:hidden gap-6 mt-4">
            <button onClick={prevTestimonial} className="p-4 rounded-xl bg-white/5 border border-white/10 text-white"><ChevronLeft /></button>
            <button onClick={nextTestimonial} className="p-4 rounded-xl bg-white/5 border border-white/10 text-white"><ChevronRight /></button>
          </div>
        </div>

        <div className="mt-24 text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center justify-center px-12 py-6 text-sm font-black rounded-full text-navy-dark bg-gold hover:bg-gold-hover shadow-[0_4px_32px_rgba(212,175,55,0.3)] transition-all duration-500 transform hover:-translate-y-2 group uppercase tracking-[0.2em]"
          >
            Success Stories
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
