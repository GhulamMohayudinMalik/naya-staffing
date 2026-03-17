'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

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
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
      ? 'bg-white border-b border-gray-100 shadow-sm'
      : 'bg-transparent border-transparent'
      }`}>
      <div className={`max-w-7xl mx-auto transition-all duration-300 px-4 sm:px-6 lg:px-8 ${scrolled ? 'lg:py-4' : 'lg:py-6'
        }`}>
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-[#081120]' : 'text-white'}`}>
              BreezyRecruit
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6 items-center">

            {/* Services Dropdown */}
            <div className="relative group">
              <Link href="/services" className={`flex items-center font-bold transition-colors py-8 ${scrolled ? 'text-gray-700 hover:text-[#EF6A0B]' : 'text-white hover:text-white/80'}`}>
                Services
                <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              <div className="absolute left-0 mt-0 w-72 rounded-sm shadow-xl bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top translate-y-2 group-hover:translate-y-0 z-50">
                <div className="py-2 px-2">
                  <Link href="/recruitment-process-outsourcing" className="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#EF6A0B] transition-colors">Recruitment Process Outsourcing ( RPO )</Link>
                  <Link href="/direct-hire" className="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#EF6A0B] transition-colors">Direct Hire</Link>
                  <Link href="/contract-to-hire" className="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#EF6A0B] transition-colors">Contract to Hire</Link>
                  <Link href="/temporary-staffing" className="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#EF6A0B] transition-colors">Temporary Staffing</Link>
                  <Link href="/executive-search" className="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#EF6A0B] transition-colors">Executive Search</Link>
                  <Link href="/volume-recruitment" className="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#EF6A0B] transition-colors">Volume Hiring</Link>
                </div>
              </div>
            </div>

            {/* Employers Dropdown */}
            <div className="relative group">
              <Link href="/employer-solutions" className={`flex items-center font-bold transition-colors py-8 ${scrolled ? 'text-gray-700 hover:text-[#EF6A0B]' : 'text-white hover:text-white/80'}`}>
                Employers
                <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              <div className="absolute left-0 mt-0 w-56 rounded-sm shadow-xl bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top translate-y-2 group-hover:translate-y-0 z-50">
                <div className="py-2 px-2">
                  <Link href="/employer-solutions" className="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#EF6A0B] transition-colors">Employer Solutions</Link>
                  <Link href="/become-a-client" className="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#EF6A0B] transition-colors">Become a Client</Link>
                  <Link href="/our-proven-process" className="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#EF6A0B] transition-colors">Our Proven Process</Link>
                </div>
              </div>
            </div>

            {/* Job Seekers Dropdown */}
            <div className="relative group">
              <Link href="/why-choose-us" className={`flex items-center font-bold transition-colors py-8 ${scrolled ? 'text-gray-700 hover:text-[#EF6A0B]' : 'text-white hover:text-white/80'}`}>
                Job Seekers
                <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              <div className="absolute left-0 mt-0 w-64 rounded-sm shadow-xl bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top translate-y-2 group-hover:translate-y-0 z-50">
                <div className="py-2 px-2">
                  <Link href="/why-choose-us" className="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#EF6A0B] transition-colors">Why Choose Us?</Link>
                  <Link href="/reverse-recruitment" className="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#EF6A0B] transition-colors">Reverse Recruitment</Link>
                  <Link href="/pricing" className="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#EF6A0B] transition-colors">Pricing</Link>
                  <Link href="/register-upload-resume" className="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#EF6A0B] transition-colors">Register & Upload Resume</Link>
                </div>
              </div>
            </div>

            <Link href="/job-openings" className={`font-bold transition-colors py-8 ${scrolled ? 'text-gray-700 hover:text-[#EF6A0B]' : 'text-white hover:text-white/80'}`}>
              Job Openings
            </Link>

            {/* Industries Dropdown */}
            <div className="relative group">
              <Link href="/our-industries" className={`flex items-center font-bold transition-colors py-8 ${scrolled ? 'text-gray-700 hover:text-[#EF6A0B]' : 'text-white hover:text-white/80'}`}>
                Industries
                <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              <div className="absolute left-0 mt-0 w-64 rounded-sm shadow-xl bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top translate-y-2 group-hover:translate-y-0 z-50">
                <div className="py-2 px-2 grid grid-cols-1 max-h-96 overflow-y-auto">
                  <Link href="/industries/information-technology" className="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#EF6A0B] transition-colors">Information Technology</Link>
                  <Link href="/industries/healthcare" className="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#EF6A0B] transition-colors">Healthcare</Link>
                  <Link href="/industries/industrial" className="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#EF6A0B] transition-colors">Industrial</Link>
                  <Link href="/industries/hospitality" className="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#EF6A0B] transition-colors">Hospitality</Link>
                  <Link href="/industries/professional-services" className="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#EF6A0B] transition-colors">Professional Services</Link>
                  <Link href="/industries/education" className="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#EF6A0B] transition-colors">Education</Link>
                  <Link href="/industries/insurance" className="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#EF6A0B] transition-colors">Insurance</Link>
                  <Link href="/industries/reliable-retail" className="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#EF6A0B] transition-colors">Reliable Retail</Link>
                  <Link href="/industries/construction" className="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#EF6A0B] transition-colors">Construction</Link>
                  <Link href="/industries/marketing" className="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#EF6A0B] transition-colors">Marketing</Link>
                  <Link href="/industries/sales" className="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#EF6A0B] transition-colors">Sales</Link>
                </div>
              </div>
            </div>

            {/* About Us Dropdown */}
            <div className="relative group">
              <Link href="/about-us" className={`flex items-center font-bold transition-colors py-8 ${scrolled ? 'text-gray-700 hover:text-[#EF6A0B]' : 'text-white hover:text-white/80'}`}>
                About Us
                <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
              </Link>
              <div className="absolute left-0 mt-0 w-48 rounded-sm shadow-xl bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top translate-y-2 group-hover:translate-y-0 z-50">
                <div className="py-2 px-2">
                  <Link href="/about-us" className="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#EF6A0B] transition-colors">About Company</Link>
                  <Link href="/contact-us" className="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#EF6A0B] transition-colors">Contact Us</Link>
                  <Link href="/blog" className="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#EF6A0B] transition-colors">Blog</Link>
                  <Link href="/faqs" className="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#EF6A0B] transition-colors">FAQ's</Link>
                  <Link href="/testimonials" className="block px-4 py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 hover:text-[#EF6A0B] transition-colors">Testimonials</Link>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 flex items-center gap-2">
              <svg aria-hidden="true" className="w-5 h-5 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 64h-48V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H160V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V160h352v298a6 6 0 0 1-6 6zm-52.849-200.65L198.842 404.519c-4.705 4.667-12.303 4.637-16.971-.068l-75.091-75.699c-4.667-4.705-4.637-12.303.068-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l44.104 44.461 111.072-110.181c4.705-4.667 12.303-4.637 16.971.068l22.536 22.718c4.667 4.705 4.636 12.303-.069 16.97z"></path></svg>
              schedule Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button className={`${scrolled ? 'text-gray-700' : 'text-white'}`}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
