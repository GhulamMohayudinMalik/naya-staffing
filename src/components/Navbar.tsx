'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { industriesData } from '@/data/industries';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled
      ? 'bg-[#040814]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl'
      : 'bg-transparent border-transparent'
      }`}>
      <div className={`max-w-3/4 mx-auto transition-all duration-500 relative ${scrolled ? 'lg:py-4' : 'lg:py-6'
        }`}>
        <div className="flex items-center justify-center h-20 px-4 md:px-0">
          
          {/* Section 1: Brand Anchor (Absolute Left) */}
          <div className="absolute left-4 md:left-0 flex items-center">
            <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter transition-all duration-300 text-white hover:text-gold group flex items-center gap-2 shrink-0">
              <span className="bg-gold w-9 h-9 rounded-xl flex items-center justify-center text-navy-dark text-xl group-hover:rotate-12 transition-transform shadow-lg shadow-gold/20">N</span>
              <span className="whitespace-nowrap">NAYA Staffing</span>
            </Link>
          </div>
          
          {/* Section 2: Centered Hub (Flex Center) */}
          <div className="hidden lg:flex items-center justify-center space-x-4 xl:space-x-8">
            
            {/* Services Dropdown */}
            <div className="relative group/nav">
              <Link href="/services" className="flex items-center font-semibold text-[15px] uppercase tracking-widest py-8 text-white/90 hover:text-gold transition-colors whitespace-nowrap">
                Services
                <ChevronDown className="ml-1.5 w-4 h-4 group-hover/nav:rotate-180 transition-transform duration-300" />
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 mt-0 w-80 rounded-2xl shadow-2xl bg-[#0B132B]/95 backdrop-blur-2xl border border-white/10 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform origin-top translate-y-4 group-hover/nav:translate-y-0 z-50 overflow-hidden">
                <div className="py-4 px-2">
                  <Link href="/recruitment-process-outsourcing" className="block px-6 py-3 text-xs font-semibold text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all">RECRUITMENT PROCESS OUTSOURCING ( RPO )</Link>
                  <Link href="/direct-hire" className="block px-6 py-3 text-xs font-semibold text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all">DIRECT HIRE</Link>
                  <Link href="/contract-to-hire" className="block px-6 py-3 text-xs font-semibold text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all">CONTRACT TO HIRE</Link>
                  <Link href="/temporary-staffing" className="block px-6 py-3 text-xs font-semibold text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all">TEMPORARY STAFFING</Link>
                  <Link href="/executive-search" className="block px-6 py-3 text-xs font-semibold text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all">EXECUTIVE SEARCH</Link>
                  <Link href="/volume-recruitment" className="block px-6 py-3 text-xs font-semibold text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all">VOLUME HIRING</Link>
                </div>
              </div>
            </div>

            {/* Employers Dropdown */}
            <div className="relative group/nav">
              <Link href="/employer-solutions" className="flex items-center font-semibold text-[15px] uppercase tracking-widest py-8 text-white/90 hover:text-gold transition-colors whitespace-nowrap">
                Employers
                <ChevronDown className="ml-1.5 w-4 h-4 group-hover/nav:rotate-180 transition-transform duration-100" />
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 mt-0 w-64 rounded-2xl shadow-2xl bg-[#0B132B]/95 backdrop-blur-2xl border border-white/10 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform origin-top translate-y-4 group-hover/nav:translate-y-0 z-50 overflow-hidden">
                <div className="py-4 px-2">
                  <Link href="/employer-solutions" className="block px-6 py-3 text-xs font-semibold text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all">EMPLOYER SOLUTIONS</Link>
                  <Link href="/become-a-client" className="block px-6 py-3 text-xs font-semibold text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all">BECOME A CLIENT</Link>
                  <Link href="/our-proven-process" className="block px-6 py-3 text-xs font-semibold text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all">OUR PROVEN PROCESS</Link>
                </div>
              </div>
            </div>

            {/* Job Seekers Dropdown */}
            <div className="relative group/nav">
              <Link href="/why-choose-us" className="flex items-center font-semibold text-[15px] uppercase tracking-widest py-8 text-white/90 hover:text-gold transition-colors whitespace-nowrap">
                Job Seekers
                <ChevronDown className="ml-1.5 w-4 h-4 group-hover/nav:rotate-180 transition-transform duration-100" />
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 mt-0 w-72 rounded-2xl shadow-2xl bg-[#0B132B]/95 backdrop-blur-2xl border border-white/10 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform origin-top translate-y-4 group-hover/nav:translate-y-0 z-50 overflow-hidden">
                <div className="py-4 px-2">
                  <Link href="/why-choose-us" className="block px-6 py-3 text-xs font-semibold text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all">WHY CHOOSE US?</Link>
                  <Link href="/reverse-recruitment" className="block px-6 py-3 text-xs font-semibold text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all">REVERSE RECRUITMENT</Link>
                  <Link href="/pricing" className="block px-6 py-3 text-xs font-semibold text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all">PRICING</Link>
                  <Link href="/register-upload-resume" className="block px-6 py-3 text-xs font-semibold text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all">REGISTER & UPLOAD RESUME</Link>
                </div>
              </div>
            </div>

            <Link href="/job-openings" className="font-semibold text-[15px] uppercase tracking-widest py-8 text-white/90 hover:text-gold transition-colors whitespace-nowrap">
              Job Openings
            </Link>

            {/* Industries Dropdown */}
            <div className="relative group/nav">
              <Link href="/our-industries" className="flex items-center font-semibold text-[15px] uppercase tracking-widest py-8 text-white/90 hover:text-gold transition-colors whitespace-nowrap">
                Industries
                <ChevronDown className="ml-1.5 w-4 h-4 group-hover/nav:rotate-180 transition-transform duration-100" />
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 mt-0 w-80 rounded-2xl shadow-2xl bg-[#0B132B]/95 backdrop-blur-2xl border border-white/10 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform origin-top translate-y-4 group-hover/nav:translate-y-0 z-50">
                <div className="py-4 px-2">
                  {industriesData.map((industry) => (
                    <div key={industry.slug} className="relative group/sub">
                      <Link 
                        href={`/industries/${industry.slug}`}
                        className="flex items-center justify-between px-6 py-3 text-[11px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase"
                      >
                        {industry.name}
                        <ChevronDown className="-rotate-90 w-3 h-3 opacity-40 group-hover/sub:opacity-100 transition-opacity" />
                      </Link>
                      
                      {/* Flyout Sub-menu */}
                      <div className="absolute left-full top-0 ml-1 w-64 rounded-2xl shadow-2xl bg-navy/98 backdrop-blur-3xl border border-white/10 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform origin-left -translate-x-4 group-hover/sub:translate-x-0 z-60 py-4 px-2">
                        {industry.subIndustries.map((sub) => (
                          <Link 
                            key={sub.slug} 
                            href={`/industries/${industry.slug}/${sub.slug}`}
                            className="px-6 py-2.5 text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center gap-2 group/item block"
                          >
                            <div className="w-1.5 h-1.5 bg-gold/0 group-hover/item:bg-gold rounded-full transition-all shrink-0"></div>
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* About Us Dropdown */}
            <div className="relative group/nav">
              <Link href="/about-us" className="flex items-center font-semibold text-[15px] uppercase tracking-widest py-8 text-white/90 hover:text-gold transition-colors whitespace-nowrap">
                About Us
                <ChevronDown className="ml-1.5 w-4 h-4 group-hover/nav:rotate-180 transition-transform duration-100" />
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 mt-0 w-56 rounded-2xl shadow-2xl bg-[#0B132B]/95 backdrop-blur-2xl border border-white/10 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform origin-top translate-y-4 group-hover/nav:translate-y-0 z-50 overflow-hidden">
                <div className="py-4 px-2">
                  <Link href="/about-us" className="block px-6 py-3 text-xs font-semibold text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all">ABOUT COMPANY</Link>
                  <Link href="/contact-us" className="block px-6 py-3 text-xs font-semibold text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all">CONTACT US</Link>
                  <Link href="/blog" className="block px-6 py-3 text-xs font-semibold text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all">BLOG</Link>
                  <Link href="/faqs" className="block px-6 py-3 text-xs font-semibold text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all">FAQ'S</Link>
                  <Link href="/testimonials" className="block px-6 py-3 text-xs font-semibold text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all">TESTIMONIALS</Link>
                </div>
              </div>
            </div>

          </div>

          {/* Section 3: Action Anchor (Absolute Right) */}
          <div className="absolute right-4 md:right-0 hidden lg:flex items-center">
            <Link href="/contact-us" className="bg-gold hover:bg-gold-hover text-navy-dark px-6 py-3 rounded-full font-bold text-[15px] tracking-tight transition-all duration-500 shadow-[0_8px_32px_rgba(212,175,55,0.2)] hover:shadow-[0_12px_48px_rgba(212,175,55,0.4)] transform hover:-translate-y-1 flex items-center gap-2 whitespace-nowrap">
              <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 64h-48V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H160V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V160h352v298a6 6 0 0 1-6 6zm-52.849-200.65L198.842 404.519c-4.705 4.667-12.303 4.637-16.971-.068l-75.091-75.699c-4.667-4.705-4.637-12.303.068-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l44.104 44.461 111.072-110.181c4.705-4.667 12.303-4.637 16.971.068l22.536 22.718c4.667 4.705 4.636 12.303-.069 16.97z"></path></svg>
              Schedule Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden absolute right-4 flex items-center">
            <button className="text-white hover:text-gold transition-colors">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
