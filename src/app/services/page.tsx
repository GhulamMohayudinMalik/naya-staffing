"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Search, Users, Briefcase, FileText, Clock, TrendingUp, CheckCircle, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function ServicesPage() {
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
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Hero Section with Video */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="h-full w-full object-cover"
          >
            <source src="https://breezyrecruit.com/wp-content/uploads/2025/06/our-services.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">Services</h1>
          <p className="text-2xl md:text-3xl font-bold text-gray-200">Find the Perfect Match for your Workforce</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h6 className="text-[#EF6A0B] font-bold text-sm tracking-widest uppercase mb-4">Hire Smarter, Not Harder – Find the Perfect Fit Fast.</h6>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#081120] mb-20">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* RPO */}
            <div className="bg-gray-50 p-10 rounded-xl border border-gray-100 hover:border-[#EF6A0B] hover:shadow-2xl transition-all group text-left flex flex-col">
              <div className="w-16 h-16 bg-[#EF6A0B] rounded-full flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                <Users className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase">Recruitment Process Outsourcing</h3>
              <p className="text-gray-600 mb-8 leading-relaxed grow">
                Say goodbye to endless job postings, slow hiring, and poor candidate fits.
              </p>
              <Link href="/recruitment-process-outsourcing" className="bg-[#EF6A0B] hover:bg-[#d55e0a] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm inline-flex items-center justify-center w-full mt-auto transition-all shadow-lg shadow-[#EF6A0B]/20">
                Learn About RPO
                <span className="bg-white rounded-full p-1 ml-3">
                  <ArrowRight className="w-3 h-3 text-[#EF6A0B]" />
                </span>
              </Link>
            </div>

            {/* Reverse Recruitment */}
            <div className="bg-gray-50 p-10 rounded-xl border border-gray-100 hover:border-[#EF6A0B] hover:shadow-2xl transition-all group text-left flex flex-col">
              <div className="w-16 h-16 bg-[#EF6A0B] rounded-full flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                <TrendingUp className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase">Reverse Recruitment</h3>
              <p className="text-gray-600 mb-8 leading-relaxed grow">
                At BreezyRecruit, we flipped the traditional recruiting model. In most cases.
              </p>
              <Link href="/reverse-recruitment" className="bg-[#EF6A0B] hover:bg-[#d55e0a] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm inline-flex items-center justify-center w-full mt-auto transition-all shadow-lg shadow-[#EF6A0B]/20">
                Reverse Recruitment
                <span className="bg-white rounded-full p-1 ml-3">
                  <ArrowRight className="w-3 h-3 text-[#EF6A0B]" />
                </span>
              </Link>
            </div>

            {/* Direct Hire */}
            <div className="bg-gray-50 p-10 rounded-xl border border-gray-100 hover:border-[#EF6A0B] hover:shadow-2xl transition-all group text-left flex flex-col">
              <div className="w-16 h-16 bg-[#EF6A0B] rounded-full flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                <Search className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase">Direct Hire</h3>
              <p className="text-gray-600 mb-8 leading-relaxed grow">
                Are you looking for that perfect fit – the employee who’s just right for the role .
              </p>
              <Link href="/direct-hire" className="bg-[#EF6A0B] hover:bg-[#d55e0a] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm inline-flex items-center justify-center w-full mt-auto transition-all shadow-lg shadow-[#EF6A0B]/20">
                Direct Hire
                <span className="bg-white rounded-full p-1 ml-3">
                  <ArrowRight className="w-3 h-3 text-[#EF6A0B]" />
                </span>
              </Link>
            </div>

            {/* Contract to Hire */}
            <div className="bg-gray-50 p-10 rounded-xl border border-gray-100 hover:border-[#EF6A0B] hover:shadow-2xl transition-all group text-left flex flex-col">
              <div className="w-16 h-16 bg-[#EF6A0B] rounded-full flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                <FileText className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase">Contract to Hire</h3>
              <p className="text-gray-600 mb-8 leading-relaxed grow">
                Contract-to-hire lets you assess talent in action before making a lasting decision.
              </p>
              <Link href="/contract-to-hire" className="bg-[#EF6A0B] hover:bg-[#d55e0a] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm inline-flex items-center justify-center w-full mt-auto transition-all shadow-lg shadow-[#EF6A0B]/20">
                Contract-to-Hire
                <span className="bg-white rounded-full p-1 ml-3">
                  <ArrowRight className="w-3 h-3 text-[#EF6A0B]" />
                </span>
              </Link>
            </div>

            {/* Temporary Staffing */}
            <div className="bg-gray-50 p-10 rounded-xl border border-gray-100 hover:border-[#EF6A0B] hover:shadow-2xl transition-all group text-left flex flex-col">
              <div className="w-16 h-16 bg-[#EF6A0B] rounded-full flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                <Clock className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase">Temporary Staffing</h3>
              <p className="text-gray-600 mb-8 leading-relaxed grow">
                At BreezyRecruit, our Temporary Staffing solutions provide you with pre-vetted.
              </p>
              <Link href="/temporary-staffing" className="bg-[#EF6A0B] hover:bg-[#d55e0a] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-sm inline-flex items-center justify-center w-full mt-auto transition-all shadow-lg shadow-[#EF6A0B]/20">
                Temporary Staffing
                <span className="bg-white rounded-full p-1 ml-3">
                  <ArrowRight className="w-3 h-3 text-[#EF6A0B]" />
                </span>
              </Link>
            </div>

            {/* Executive Search */}
            <div className="bg-gray-50 p-10 rounded-xl border border-gray-100 hover:border-[#EF6A0B] hover:shadow-2xl transition-all group text-left flex flex-col">
              <div className="w-16 h-16 bg-[#EF6A0B] rounded-full flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                <Briefcase className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase">Executive Search</h3>
              <p className="text-gray-600 mb-8 leading-relaxed grow">
                Our Executive Search service is designed to connect you with top-tier executives.
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
      <section className="bg-white py-24 overflow-hidden">
        {/* Header Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h6 className="text-[#EF6A0B] font-bold text-sm tracking-[0.3em] uppercase animate-in fade-in slide-in-from-bottom-2 duration-700">
              Welcome to breezyrecruit
            </h6>
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#081120] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Find Industry-Specific Talent
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
              We specialize in connecting businesses with Quality talent tailored to your industry’s unique needs. Whether you’re in tech, healthcare, finance, or any other sector, our expert recruiters ensure you find the right professionals who align with your goals and culture. Let us help you build a team that drives innovation in your industry.
            </p>
          </div>
        </div>

        {/* Industry Card Marquee */}
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
              animation: marquee-industry 50s linear infinite;
            }
            .animate-marquee-industry:hover {
              animation-play-state: paused;
            }
            `
          }} />

          <div className="max-w-7xl mx-auto overflow-hidden group">
            <div className="animate-marquee-industry flex gap-8 py-10 px-4">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-8">
                  {[
                    { 
                      title: "Education", 
                      text: "The hiring process in education involves a bunch of different things like background checks, certifications, and making sure everything goes through correctly.",
                      image: "https://breezyrecruit.com/wp-content/uploads/2025/05/1-2.jpg",
                      link: "/industries/education-recruiters/"
                    },
                    { 
                      title: "Insurance", 
                      text: "Building a high-performing insurance team isn’t a gamble, it’s a strategic decision. Every role, from Underwriter to Agent.",
                      image: "https://breezyrecruit.com/wp-content/uploads/2025/05/Education-Recruitment-Agency-in-Pakistan.png",
                      link: "/industries/insurance-recruiters/"
                    },
                    { 
                      title: "Reliable Retail", 
                      text: "In the world of retail hiring, we encounter several hurdles that can make the process feel like a bit of an uphill battle.",
                      image: "https://breezyrecruit.com/wp-content/uploads/2025/05/retail-candidate-working.webp",
                      link: "/industries/reliable-retail-recruiters/"
                    },
                    { 
                      title: "Information Technology", 
                      text: "We connect top tech talent with dynamic companies needing developers, engineers, analysts, and IT leaders to drive digital transformation.",
                      image: "https://breezyrecruit.com/wp-content/uploads/2025/02/tech-talent.jpg",
                      link: "/industries/information-technology/"
                    },
                    { 
                      title: "Healthcare", 
                      text: "Finding skilled healthcare professionals can be challenging, but with Breezyrecruit, you get access to a pool of highly qualified medical talent.",
                      image: "https://breezyrecruit.com/wp-content/uploads/2024/10/Healthcare.jpg",
                      link: "/industries/healthcare/"
                    },
                    { 
                      title: "Industrial", 
                      text: "We source reliable talent for manufacturing, logistics, and skilled trade roles to keep your industrial operations running smoothly and safely.",
                      image: "https://breezyrecruit.com/wp-content/uploads/2025/05/1-1.jpg",
                      link: "/industries/industrial/"
                    },
                    { 
                      title: "Hospitality", 
                      text: "At Breezyrecruit, we specialize in connecting hotels, restaurants, resorts, and event venues with top-tier professionals.",
                      image: "https://breezyrecruit.com/wp-content/uploads/2024/10/Senior-Living.jpg",
                      link: "/industries/hospitality/"
                    },
                    { 
                      title: "Professional Services", 
                      text: "Finding the right talent for management consulting roles requires expertise, precision, and a deep understanding of the industry.",
                      image: "https://breezyrecruit.com/wp-content/uploads/2025/02/Our-Proven-Process_20_11zon-1.png",
                      link: "/industries/professional-services/"
                    },
                    { 
                      title: "Construction", 
                      text: "Recruiting top construction talent isn’t a guessing game; it’s a strategic investment. Building a high-performing construction team.",
                      image: "https://breezyrecruit.com/wp-content/uploads/2025/05/AdobeStock_290512663-1.jpg",
                      link: "/industries/construction-recruiters/"
                    },
                    { 
                      title: "Marketing", 
                      text: "In today’s competitive landscape, hiring a marketer is more than filling a seat; it’s about finding someone who understands your brand.",
                      image: "https://breezyrecruit.com/wp-content/uploads/2025/05/employer-top-image.jpeg",
                      link: "/industries/marketing-recruiters/"
                    },
                    { 
                      title: "Sales", 
                      text: "Recruiting top sales talent is a high-stakes, strategic endeavor that requires expertise and precision.",
                      image: "https://breezyrecruit.com/wp-content/uploads/2025/05/retail-2-panorama-bae85f3812c2afd0c3fb40865d910c80-5e29b5b609e67.jpg",
                      link: "/industries/sales-recruiters/"
                    }
                  ].map((industry, index) => (
                    <div key={index} className="w-[380px] flex-shrink-0 bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group/card">
                      <Link href={industry.link} className="block relative aspect-[16/10] overflow-hidden">
                        <img 
                          src={industry.image} 
                          alt={industry.title} 
                          className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover/card:bg-transparent transition-colors"></div>
                      </Link>
                      <div className="p-8 space-y-4">
                        <h4 className="text-2xl font-bold text-[#081120] group-hover/card:text-[#EF6A0B] transition-colors line-clamp-1">
                          {industry.title}
                        </h4>
                        <p className="text-gray-600 line-clamp-3 leading-relaxed">
                          {industry.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Gradient Shadows for Edge Fade */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#F8F9FA] py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
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
            <div className="flex-grow max-w-5xl mx-auto overflow-hidden text-center">
              <div className="relative bg-white rounded-[48px] p-10 md:p-20 shadow-sm min-h-[400px] flex flex-col justify-center">
                <div 
                  key={currentTestimonial}
                  className="animate-in fade-in duration-500"
                >
                  <Quote className="w-12 h-12 text-orange-500/20 mx-auto mb-8" />
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

      {/* Final CTA sections */}
      <section className="bg-white pb-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 px-4">
          {/* Job Seekers CTA */}
          <Link 
            href="/why-choose-us" 
            className="flex-1 group relative overflow-hidden py-16 px-10 transition-all bg-orange-500 hover:bg-[#081120] rounded-[40px]"
          >
            <div className="flex items-center gap-8">
              <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:scale-110 transition-transform duration-500">
                <img 
                  src="https://breezyrecruit.com/wp-content/uploads/2024/11/Job-Seekers-150x150.jpg" 
                  alt="Job Seekers" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-white">
                <h3 className="text-3xl font-extrabold mb-1">Job Seekers</h3>
                <p className="text-xl font-medium opacity-90">Looking For Opportunity?</p>
              </div>
            </div>
          </Link>

          {/* Employers CTA */}
          <Link 
            href="/employer-solutions" 
            className="flex-1 group relative overflow-hidden py-16 px-10 transition-all bg-[#081120] hover:bg-orange-500 rounded-[40px]"
          >
            <div className="flex items-center gap-8">
              <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:scale-110 transition-transform duration-500">
                <img 
                  src="https://breezyrecruit.com/wp-content/uploads/2024/11/employee-150x150.jpg" 
                  alt="Employers" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-white">
                <h3 className="text-3xl font-extrabold mb-1">Employers</h3>
                <p className="text-xl font-medium opacity-90">The Right Fit.</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
