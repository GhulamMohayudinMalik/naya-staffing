"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight, Search, Users, Briefcase, FileText, Clock, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "BreezyRecruit reduced our time-to-hire and delivered pre-vetted candidates we couldn’t reach ourselves.",
      name: "VP of HR, Technology Firm"
    },
    {
      text: "They quickly filled critical roles without sacrificing quality.",
      name: "Director of Executive Search, Venture Capital Firm"
    },
    {
      text: "BreezyRecruit’s RPO solution gave us a scalable way to manage high-volume hiring.",
      name: "Director of Talent Acquisition, Logistics Company"
    },
    {
      text: "Their market insights and screening process saved us weeks.",
      name: "HR Director, Retail Chain"
    },
    {
      text: "We no longer sift through hundreds of resumes — BreezyRecruit sends a focused shortlist.",
      name: "Chief People Officer, Manufacturing Firm"
    },
    {
      text: "Their contract-to-hire option helped us test talent before committing.",
      name: "Operations Manager, Food & Beverage Brand"
    },
    {
      text: "BreezyRecruit felt like an extension of our own HR team.",
      name: "VP of Operations, E-commerce Startup"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-r from-[#d2b148] to-[#d27b41]">
        <div className="max-w-5xl mx-auto space-y-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#081120] tracking-tight leading-tight">
            A Breezy Path To <br className="hidden md:block" />
            <span className="text-white">Talent And Opportunity.</span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 tracking-tight">
            Smart Scalable Recruitment for Modern Workplaces
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link
              href="/employer-solutions"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 text-lg font-bold rounded-sm text-white bg-gray-900 hover:bg-gray-800 transition-all duration-300"
            >
              Start Hiring
            </Link>

            <Link
              href="/job-openings"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 text-lg font-bold rounded-sm text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              Start Your Job Hunt
            </Link>
          </div>
        </div>
      </main>

      {/* Target Audiences Section */}
      <section className="bg-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#081120] leading-tight">
              Smart Scalable Recruitment for <br className="hidden md:block" /> Modern Workplaces
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Job Seekers Card Container */}
            <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-2 bg-[#F8F9FA] rounded-[40px] overflow-hidden relative min-h-[400px]">
              <div className="p-12 lg:p-20 flex flex-col justify-center z-10">
                <h3 className="text-4xl font-extrabold text-[#081120] mb-4">
                  <Link href="/job-openings" className="hover:text-[#EF6A0B] transition-colors">Job Seekers</Link>
                </h3>
                <p className="text-2xl text-gray-600 font-medium mb-8">
                  Looking For Your Next Great Opportunity?
                </p>
                <Link href="/job-openings" className="inline-flex items-center text-[#EF6A0B] font-bold group">
                  Explore Jobs <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Businessman Image */}
              <div className="relative h-64 lg:h-full hidden md:block z-0">
                <img
                  src="https://breezyrecruit.com/wp-content/uploads/2025/05/vecteezy_portrait-of-confident-business-man-isolated-on-transparent_44777304.png"
                  alt="Confident Business Man"
                  className="absolute bottom-0 right-0 h-full object-contain object-bottom pointer-events-none"
                />
              </div>
            </div>

            {/* Employers Card Container */}
            <div className="lg:col-span-12 bg-[#081120] rounded-[40px] overflow-hidden relative group grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
              {/* Businessman Image (Moved to left as requested) */}
              <div className="relative h-64 lg:h-full hidden md:block z-0">
                <img
                  src="https://breezyrecruit.com/wp-content/uploads/2025/05/vecteezy_portrait-of-confident-business-man-isolated-on-transparent_44777304.png"
                  alt="Confident Business Man"
                  className="absolute bottom-0 left-0 h-full object-contain object-bottom pointer-events-none opacity-80"
                />
              </div>

              <div className="p-12 lg:p-16 flex flex-col justify-center relative z-10 lg:text-left">
                <h3 className="text-4xl font-extrabold text-white mb-4">
                  <Link href="/employer-solutions" className="hover:text-[#EF6A0B] transition-colors">Employers</Link>
                </h3>
                <p className="text-2xl text-gray-300 font-medium mb-8">
                  Matching You with Candidates Who Deliver Results!
                </p>
                <Link href="/employer-solutions" className="inline-flex items-center text-[#EF6A0B] font-bold group">
                  Find Talent <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Subtle background pattern/blob */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#EF6A0B] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-xl md:text-2xl font-semibold text-[#EF6A0B] mb-4">Hire Smarter, Not Harder – Find the Perfect Fit Fast.</h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#081120]">Our Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* RPO */}
            <div className="p-8 border border-gray-100 rounded-[32px] hover:border-[#EF6A0B] hover:shadow-xl transition-all group bg-white text-center flex flex-col items-center">
              <div className="bg-gray-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#EF6A0B]/10 transition-colors">
                <Users className="w-10 h-10 text-[#EF6A0B]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Recruitment Process Outsourcing</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We handle your hiring—from search to success—so you can focus on growing.
              </p>
              <Link href="/recruitment-process-outsourcing" className="bg-[#EF6A0B] hover:bg-[#d55e0a] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm inline-flex items-center justify-center w-full mt-auto transition-all shadow-lg shadow-[#EF6A0B]/20">
                Learn About RPO
                <span className="bg-white rounded-full p-1 ml-3">
                  <ArrowRight className="w-3 h-3 text-[#EF6A0B]" />
                </span>
              </Link>
            </div>

            {/* Reverse Recruitment */}
            <div className="p-8 border border-gray-100 rounded-[32px] hover:border-[#EF6A0B] hover:shadow-xl transition-all group bg-white text-center flex flex-col items-center">
              <div className="bg-gray-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#EF6A0B]/10 transition-colors">
                <TrendingUp className="w-10 h-10 text-[#EF6A0B]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Reverse Recruitment</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Your career partner—connecting you with companies that fit.
              </p>
              <Link href="/reverse-recruitment" className="bg-[#EF6A0B] hover:bg-[#d55e0a] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm inline-flex items-center justify-center w-full mt-auto transition-all shadow-lg shadow-[#EF6A0B]/20">
                Reverse Recruitment
                <span className="bg-white rounded-full p-1 ml-3">
                  <ArrowRight className="w-3 h-3 text-[#EF6A0B]" />
                </span>
              </Link>
            </div>

            {/* Direct Hire */}
            <div className="p-8 border border-gray-100 rounded-[32px] hover:border-[#EF6A0B] hover:shadow-xl transition-all group bg-white text-center flex flex-col items-center">
              <div className="bg-gray-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#EF6A0B]/10 transition-colors">
                <Search className="w-10 h-10 text-[#EF6A0B]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Direct Hire</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We take you direct to the right hire—with no delays and no detours.
              </p>
              <Link href="/direct-hire" className="bg-[#EF6A0B] hover:bg-[#d55e0a] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm inline-flex items-center justify-center w-full mt-auto transition-all shadow-lg shadow-[#EF6A0B]/20">
                Direct Hire
                <span className="bg-white rounded-full p-1 ml-3">
                  <ArrowRight className="w-3 h-3 text-[#EF6A0B]" />
                </span>
              </Link>
            </div>

            {/* Contract to Hire */}
            <div className="p-8 border border-gray-100 rounded-[32px] hover:border-[#EF6A0B] hover:shadow-xl transition-all group bg-white text-center flex flex-col items-center">
              <div className="bg-gray-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#EF6A0B]/10 transition-colors">
                <FileText className="w-10 h-10 text-[#EF6A0B]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contract to Hire</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We do smart hiring that works for both sides—contract today, full-time tomorrow.
              </p>
              <Link href="/contract-to-hire" className="bg-[#EF6A0B] hover:bg-[#d55e0a] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm inline-flex items-center justify-center w-full mt-auto transition-all shadow-lg shadow-[#EF6A0B]/20">
                Contract-to-Hire
                <span className="bg-white rounded-full p-1 ml-3">
                  <ArrowRight className="w-3 h-3 text-[#EF6A0B]" />
                </span>
              </Link>
            </div>

            {/* Temporary Staffing */}
            <div className="p-8 border border-gray-100 rounded-[32px] hover:border-[#EF6A0B] hover:shadow-xl transition-all group bg-white text-center flex flex-col items-center">
              <div className="bg-gray-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#EF6A0B]/10 transition-colors">
                <Clock className="w-10 h-10 text-[#EF6A0B]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Temporary Staffing</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We offer on-demand staffing for short-term needs—fast, flexible, reliable.
              </p>
              <Link href="/temporary-staffing" className="bg-[#EF6A0B] hover:bg-[#d55e0a] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm inline-flex items-center justify-center w-full mt-auto transition-all shadow-lg shadow-[#EF6A0B]/20">
                Temporary Staffing
                <span className="bg-white rounded-full p-1 ml-3">
                  <ArrowRight className="w-3 h-3 text-[#EF6A0B]" />
                </span>
              </Link>
            </div>

            {/* Executive Search */}
            <div className="p-8 border border-gray-100 rounded-[32px] hover:border-[#EF6A0B] hover:shadow-xl transition-all group bg-white text-center flex flex-col items-center">
              <div className="bg-gray-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#EF6A0B]/10 transition-colors">
                <Briefcase className="w-10 h-10 text-[#EF6A0B]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Executive Search</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We don’t just fill executive roles—we build leadership legacies.
              </p>
              <Link href="/executive-search" className="bg-[#EF6A0B] hover:bg-[#d55e0a] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm inline-flex items-center justify-center w-full mt-auto transition-all shadow-lg shadow-[#EF6A0B]/20">
                Executive Search
                <span className="bg-white rounded-full p-1 ml-3">
                  <ArrowRight className="w-3 h-3 text-[#EF6A0B]" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Talent Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8F9FA] rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#EF6A0B] opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-600 opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
              <h6 className="text-[#EF6A0B] font-bold uppercase tracking-[0.2em] text-sm mb-6">
                Welcome to breezyrecruit
              </h6>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#081120] mb-8 leading-tight">
                Find Industry-Specific Talent
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed font-medium">
                We specialize in connecting businesses with Quality talent tailored to your industry’s unique needs. Whether you’re in tech, healthcare, finance, or any other sector, our expert recruiters ensure you find the right professionals who align with your goals and culture. Let us help you build a team that drives innovation in your industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Showcase Carousel Section */}
      <section className="bg-white pb-24">
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 60s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
          .marquee-container {
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          }
        `}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden marquee-container">
          <div className="animate-marquee gap-8 py-12">
            {[
              {
                title: "Information Technology",
                image: "https://breezyrecruit.com/wp-content/uploads/2025/02/tech-talent.jpg",
                text: "We connect top tech talent with dynamic companies needing developers, engineers, analysts, and IT leaders."
              },
              {
                title: "Healthcare",
                image: "https://breezyrecruit.com/wp-content/uploads/2025/07/Screenshot-2025-08-01-at-4.46.10-AM.png",
                text: "Finding skilled healthcare professionals can be challenging, but we give you access to a pool of highly qualified medical talent."
              },
              {
                title: "Industrial",
                image: "https://breezyrecruit.com/wp-content/uploads/2025/07/Screenshot-2025-08-01-at-4.41.05-AM.png",
                text: "We source reliable talent for manufacturing, logistics, and skilled trade roles to keep your operations running smoothly."
              },
              {
                title: "Hospitality",
                image: "https://breezyrecruit.com/wp-content/uploads/2025/07/Screenshot-2025-08-01-at-4.42.28-AM.png",
                text: "We specialize in connecting hotels, restaurants, resorts, and event venues with top-tier hospitality professionals."
              },
              {
                title: "Professional Services",
                image: "https://breezyrecruit.com/wp-content/uploads/2025/07/Screenshot-2025-08-01-at-4.44.58-AM.png",
                text: "Finding the right talent for consulting roles requires expertise, precision, and a deep understanding of the industry."
              },
              {
                title: "Education",
                image: "https://breezyrecruit.com/wp-content/uploads/2025/07/Screenshot-2025-08-01-at-5.23.32-AM.png",
                text: "We handle background checks, certifications, and the entire process to find the right educators for your institution."
              },
              {
                title: "Insurance",
                image: "https://breezyrecruit.com/wp-content/uploads/2025/05/iStock-975763462.jpg",
                text: "Building a high-performing insurance team isn't a gamble, it's a strategic decision. Every role matters."
              },
              {
                title: "Reliable Retail",
                image: "https://breezyrecruit.com/wp-content/uploads/2025/07/Screenshot-2025-08-01-at-5.25.59-AM.png",
                text: "In the world of retail hiring, we help you overcome the hurdles and scale your storefront talent efficiently."
              },
              {
                title: "Construction",
                image: "https://breezyrecruit.com/wp-content/uploads/2025/05/AdobeStock_290512663-1.jpg",
                text: "Recruiting top construction talent is a strategic investment. We build high-performing construction teams."
              },
              {
                title: "Marketing",
                image: "https://breezyrecruit.com/wp-content/uploads/2025/07/Screenshot-2025-08-01-at-5.17.56-AM.png",
                text: "Hiring a marketer is more than filling a seat; it's about finding someone who deeply understands your brand."
              },
              {
                title: "Sales",
                image: "https://breezyrecruit.com/wp-content/uploads/2025/07/Screenshot-2025-08-01-at-4.50.32-AM.png",
                text: "Recruiting top sales talent is a high-stakes endeavor that requires expertise, precision, and drive."
              }
            ].concat([
              {
                title: "Information Technology",
                image: "https://breezyrecruit.com/wp-content/uploads/2025/02/tech-talent.jpg",
                text: "We connect top tech talent with dynamic companies needing developers, engineers, analysts, and IT leaders."
              },
              {
                title: "Healthcare",
                image: "https://breezyrecruit.com/wp-content/uploads/2025/07/Screenshot-2025-08-01-at-4.46.10-AM.png",
                text: "Finding skilled healthcare professionals can be challenging, but we give you access to a pool of highly qualified medical talent."
              },
              {
                title: "Industrial",
                image: "https://breezyrecruit.com/wp-content/uploads/2025/07/Screenshot-2025-08-01-at-4.41.05-AM.png",
                text: "We source reliable talent for manufacturing, logistics, and skilled trade roles to keep your operations running smoothly."
              },
              {
                title: "Hospitality",
                image: "https://breezyrecruit.com/wp-content/uploads/2025/07/Screenshot-2025-08-01-at-4.42.28-AM.png",
                text: "We specialize in connecting hotels, restaurants, resorts, and event venues with top-tier hospitality professionals."
              },
              {
                title: "Professional Services",
                image: "https://breezyrecruit.com/wp-content/uploads/2025/07/Screenshot-2025-08-01-at-4.44.58-AM.png",
                text: "Finding the right talent for consulting roles requires expertise, precision, and a deep understanding of the industry."
              },
              {
                title: "Education",
                image: "https://breezyrecruit.com/wp-content/uploads/2025/07/Screenshot-2025-08-01-at-5.23.32-AM.png",
                text: "We handle background checks, certifications, and the entire process to find the right educators for your institution."
              },
              {
                title: "Insurance",
                image: "https://breezyrecruit.com/wp-content/uploads/2025/05/iStock-975763462.jpg",
                text: "Building a high-performing insurance team isn't a gamble, it's a strategic decision. Every role matters."
              },
              {
                title: "Reliable Retail",
                image: "https://breezyrecruit.com/wp-content/uploads/2025/07/Screenshot-2025-08-01-at-5.25.59-AM.png",
                text: "In the world of retail hiring, we help you overcome the hurdles and scale your storefront talent efficiently."
              },
              {
                title: "Construction",
                image: "https://breezyrecruit.com/wp-content/uploads/2025/05/AdobeStock_290512663-1.jpg",
                text: "Recruiting top construction talent is a strategic investment. We build high-performing construction teams."
              },
              {
                title: "Marketing",
                image: "https://breezyrecruit.com/wp-content/uploads/2025/07/Screenshot-2025-08-01-at-5.17.56-AM.png",
                text: "Hiring a marketer is more than filling a seat; it's about finding someone who deeply understands your brand."
              },
              {
                title: "Sales",
                image: "https://breezyrecruit.com/wp-content/uploads/2025/07/Screenshot-2025-08-01-at-4.50.32-AM.png",
                text: "Recruiting top sales talent is a high-stakes endeavor that requires expertise, precision, and drive."
              }
            ]).map((industry, idx) => (
              <div key={idx} className="w-[350px] md:w-[400px] group">
                <div className="bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full bg-[#fcfcfc] hover:bg-white">
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-10 flex flex-col flex-grow">
                    <h4 className="text-2xl font-bold text-[#081120] mb-4 group-hover:text-[#EF6A0B] transition-colors">
                      {industry.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed font-medium mb-6">
                      {industry.text}
                    </p>
                    <div className="mt-auto">
                      <Link href={`/industries/${industry.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center text-[#EF6A0B] font-bold group/btn">
                        Read More
                        <span className="ml-2 bg-[#EF6A0B]/10 p-1 rounded-full group-hover/btn:bg-[#EF6A0B] group-hover/btn:text-white transition-all">
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why BreezyRecruit? Section */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content Column */}
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#081120] leading-tight">
                  Why <span className="text-[#EF6A0B]">BreezyRecruit?</span>
                </h2>
                <div className="h-1.5 w-20 bg-[#EF6A0B] rounded-full"></div>
              </div>

              <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-medium">
                <p>
                  BreezyRecruit is a modern recruitment agency dedicated to connecting top talent with forward-thinking companies through innovative hiring solutions. We offer a full range of services including Recruitment Process Outsourcing (RPO), direct hire, contract-to-hire, temporary staffing, executive search, and high-volume hiring across industries like IT, healthcare, industrial, retail, and more.
                </p>
                <p>
                  What sets us apart is our <span className="text-[#081120] font-bold">Reverse Recruitment model</span> — a candidate-first approach where we actively market skilled professionals to potential employers, helping them land roles that truly align with their strengths and goals.
                </p>
                <p>
                  With a focus on speed, precision, and personalized service, BreezyRecruit simplifies the hiring journey for both employers and job seekers.
                </p>
              </div>

              <div className="pt-4">
                <Link href="/about-us" className="bg-[#EF6A0B] hover:bg-[#d55e0a] text-white px-10 py-5 rounded-2xl font-bold text-lg inline-flex items-center group transition-all shadow-xl shadow-[#EF6A0B]/20 transform hover:-translate-y-1">
                  Learn More About us
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Image/Decorative Column */}
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-[60px] overflow-hidden shadow-2xl">
                <img
                  src="https://breezyrecruit.com/wp-content/uploads/2025/05/1-1-1024x683.jpg"
                  alt="BreezyRecruit Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#081120]/20 to-transparent"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#EF6A0B] opacity-10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600 opacity-10 rounded-full blur-3xl"></div>

              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 right-8 bg-white p-6 rounded-3xl shadow-2xl border border-gray-50 flex items-center gap-4">
                <div className="bg-[#EF6A0B]/10 p-3 rounded-2xl">
                  <Users className="w-6 h-6 text-[#EF6A0B]" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-[#081120]">5000+</div>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">Talents Placed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#F8F9FA] py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section from Provided HTML */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#081120] leading-tight">
              What People Say<br />
              <span className="font-bold text-[#081120]">About BreezyRecruit</span>
            </h2>
            <div className="flex justify-center mt-6">
              <div className="h-[3px] w-20 bg-[#EF6A0B]"></div>
            </div>
          </div>

          <div className="relative flex items-center justify-between gap-4 md:gap-12">
            {/* Left Button */}
            <button 
              onClick={prevTestimonial}
              className="z-10 bg-white p-4 md:p-6 rounded-full shadow-lg text-[#081120] hover:bg-[#EF6A0B] hover:text-white transition-all transform hover:-translate-x-1"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Central Testimonial Card */}
            <div className="flex-grow max-w-5xl mx-auto overflow-hidden">
              <div className="relative bg-white rounded-[48px] p-10 md:p-20 text-center shadow-sm min-h-[400px] flex flex-col justify-center">
                <div 
                  key={currentTestimonial}
                  className="animate-in fade-in duration-500"
                >
                  <p className="text-2xl md:text-3xl text-gray-700 italic leading-relaxed mb-12">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div className="mt-8">
                    <cite className="not-italic block">
                      <span className="text-[#EF6A0B] font-extrabold text-sm md:text-base uppercase tracking-widest">
                        {testimonials[currentTestimonial].name}
                      </span>
                    </cite>
                  </div>
                </div>

                {/* Progress Indicators / Dots */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setCurrentTestimonial(idx)}
                      className={`h-2 transition-all duration-300 rounded-full ${idx === currentTestimonial ? 'w-8 bg-[#EF6A0B]' : 'w-2 bg-gray-200 hover:bg-gray-300'}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Button */}
            <button 
              onClick={nextTestimonial}
              className="z-10 bg-white p-4 md:p-6 rounded-full shadow-lg text-[#081120] hover:bg-[#EF6A0B] hover:text-white transition-all transform hover:translate-x-1"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>

          <div className="mt-20 text-center">
            <Link 
              href="/testimonials" 
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-extrabold rounded-2xl text-white bg-orange-500 hover:bg-[#081120] shadow-xl transition-all transform hover:-translate-y-1 group"
            >
              View All Testimonials
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-white py-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#081120] leading-tight flex flex-col items-center">
              The Latest Blogs & Articles
              <div className="h-1.5 w-24 bg-orange-500 mt-6 rounded-full"></div>
            </h2>
            <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our blog serves as a valuable resource for both job seekers and employers, offering insightful articles, industry trends, and expert tips on everything.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            {[
              {
                title: "How AI and Data-Driven Talent Sourcing Can Improve Your Hiring Process",
                desc: "Did you know bad hires can cost companies big money? Some studies say it can be as much as 30% of the employee’s first-year salary. Finding the right people is",
                image: "https://breezyrecruit.com/wp-content/uploads/2025/05/Become-a-client-scaled.webp",
                href: "https://breezyrecruit.com/how-ai-and-data-driven-talent-sourcing-can-improve-your-hiring-process/"
              },
              {
                title: "How to Use Automation and AI to Improve Volume Hiring in 2025",
                desc: "Are you ready for a change? The year 2025 will change how companies find lots of new workers. It’s not just about filling jobs. It’s about getting the best people",
                image: "https://breezyrecruit.com/wp-content/uploads/2025/05/1-4.jpg",
                href: "https://breezyrecruit.com/how-to-use-automation-and-ai-to-improve-volume-hiring-in-2025/"
              },
              {
                title: "How Direct Hire Recruiting Saves Your Company Time and Hiring Costs",
                desc: "Are you tired of long hiring processes? Do budget overruns stress you out? Direct hire recruiting can be a game-changer. It offers speed, cost savings, and high-quality hires. Direct hire",
                image: "https://breezyrecruit.com/wp-content/uploads/2025/05/1-1.jpg",
                href: "https://breezyrecruit.com/how-direct-hire-recruiting-saves-your-company-time-and-hiring-costs/"
              },
              {
                title: "Why Direct Hire Staffing Is the Best Solution for Hard-to-Fill IT Roles",
                desc: "Are you tired of seeing open IT jobs linger? It costs you money when these spots stay unfilled for too long. Finding folks with the right tech skills is tough",
                image: "https://breezyrecruit.com/wp-content/uploads/2025/05/benefits-of-recruitment-agency.webp",
                href: "https://breezyrecruit.com/why-direct-hire-staffing-is-the-best-solution-for-hard-to-fill-it-roles/"
              }
            ].map((blog, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 group hover:translate-y-[-4px] transition-all duration-300">
                <div className="md:w-[35%] flex-shrink-0">
                  <div className="relative h-56 md:h-full rounded-[24px] overflow-hidden shadow-sm">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                  </div>
                </div>
                <div className="md:w-[65%] flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-[#081120] mb-4 group-hover:text-orange-500 transition-colors leading-tight">
                    <Link href={blog.href}>{blog.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed line-clamp-3">
                    {blog.desc}
                  </p>
                  <Link 
                    href={blog.href} 
                    className="font-bold text-orange-500 hover:text-[#081120] transition-colors inline-flex items-center gap-1 text-sm uppercase tracking-wider"
                  >
                    Read More »
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/blog" 
              className="inline-flex items-center justify-center px-12 py-4 text-sm font-bold uppercase tracking-[0.2em] rounded-xl text-white bg-[#081120] hover:bg-orange-500 shadow-xl transition-all transform hover:-translate-y-1"
            >
              Visit Our Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Footer / To be extracted later */}
    </div>
  );
}
