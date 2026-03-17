"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Quote, ArrowRight } from "lucide-react";

export default function Testimonials() {

  const clientTestimonials = [
    { text: "BreezyRecruit reduced our time-to-hire and delivered pre-vetted candidates we couldn’t reach ourselves.", author: "VP of HR, Technology Firm" },
    { text: "They quickly filled critical roles without sacrificing quality.", author: "Director of Executive Search, Venture Capital Firm" },
    { text: "BreezyRecruit’s RPO solution gave us a scalable way to manage high-volume hiring.", author: "Director of Talent Acquisition, Logistics Company" },
    { text: "Their market insights and screening process saved us weeks.", author: "HR Director, Retail Chain" },
    { text: "We no longer sift through hundreds of resumes — BreezyRecruit sends a focused shortlist.", author: "Chief People Officer, Manufacturing Firm" },
    { text: "Their contract-to-hire option helped us test talent before committing.", author: "Operations Manager, Food & Beverage Brand" },
    { text: "BreezyRecruit felt like an extension of our own HR team.", author: "VP of Operations, E-commerce Startup" },
    { text: "They adapted quickly to our changing hiring needs.", author: "HR Business Partner, Construction Company" },
    { text: "Their team kept us competitive in a tough talent market.", author: "Director of Workforce Planning, Insurance Firm" }
  ];

  const candidateTestimonials = [
    { text: "BreezyRecruit made the process effortless. I landed three interviews within weeks after months of hearing nothing.", author: "Senior Product Manager" },
    { text: "Thanks to BreezyRecruit, my resume finally got noticed by the right people. Their personal touch changed everything.", author: "Marketing Director" },
    { text: "With BreezyRecruit, I stopped applying blindly and focused on real, high-fit roles. The results were amazing.", author: "Director of Operations" },
    { text: "I didn’t realize recruiters could represent me directly. BreezyRecruit felt like having a private career agent.", author: "Senior Finance Manager" },
    { text: "After 10 years in the same role, BreezyRecruit helped me rebrand and negotiate a better salary than I expected.", author: "IT Program Manager" },
    { text: "They truly understood my career goals and marketed me to top firms I’d never reached alone.", author: "VP of Strategy" },
    { text: "BreezyRecruit opened doors I didn’t even know existed. Within weeks, I had two solid offers.", author: "Regional Sales Director" },
    { text: "What impressed me most was BreezyRecruit’s strategic approach and interview prep — real ROI.", author: "Chief Marketing Officer" }
  ];

  // No manual indexing needed for marquee


  return (
    <div className="bg-white">
      
      {/* Hero Section with Video Background */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover brightness-[0.4]"
          >
            <source src="https://breezyrecruit.com/wp-content/uploads/2025/05/Testimonial-page.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-xl md:text-2xl font-bold uppercase tracking-[0.3em] mb-6 text-orange-500">Testimonials</h1>
          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">See What our Clients are Saying</h2>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 space-y-32">
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
          @keyframes marquee-reverse {
            0% { transform: translateX(-33.333%); }
            100% { transform: translateX(0); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 40s linear infinite;
          }
          .animate-marquee-reverse {
            display: flex;
            width: max-content;
            animation: marquee-reverse 50s linear infinite;
          }
          .animate-marquee:hover, .animate-marquee-reverse:hover {
            animation-play-state: paused;
          }
          .marquee-container {
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          }
        `}} />
        
        {/* Client Testimonials Marquee */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#081120]">Client <span className="text-orange-500">Testimonials</span></h2>
            <div className="h-1.5 w-24 bg-orange-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="relative overflow-hidden marquee-container">
            <div className="animate-marquee gap-8 py-4">
              {[...clientTestimonials, ...clientTestimonials, ...clientTestimonials].map((t, i) => (
                <div key={i} className="w-[400px] flex-shrink-0">
                  <div className="bg-[#fcfcfc] p-12 rounded-[48px] border border-gray-100 flex flex-col h-full hover:shadow-xl transition-all duration-300 group">
                    <div className="bg-orange-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-500 transition-colors">
                      <Quote className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-xl text-gray-700 leading-relaxed mb-10 flex-grow font-medium">"{t.text}"</p>
                    <div className="pt-8 border-t border-gray-100">
                      <p className="font-bold text-[#081120] uppercase tracking-wider text-sm">{t.author}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Candidate Testimonials Marquee (Reverse Direction) */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#081120]">Candidate <span className="text-orange-500">Testimonials</span></h2>
            <div className="h-1.5 w-24 bg-orange-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="relative overflow-hidden marquee-container">
            <div className="animate-marquee-reverse gap-8 py-4">
              {[...candidateTestimonials, ...candidateTestimonials, ...candidateTestimonials].map((t, i) => (
                <div key={i} className="w-[400px] flex-shrink-0">
                  <div className="bg-white p-12 rounded-[48px] border border-gray-100 flex flex-col h-full shadow-lg hover:shadow-2xl transition-all duration-300 group">
                    <div className="bg-orange-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-500 transition-colors">
                      <Quote className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-xl text-gray-700 leading-relaxed mb-10 flex-grow font-medium">"{t.text}"</p>
                    <div className="pt-8 border-t border-gray-100">
                      <p className="font-bold text-[#081120] uppercase tracking-wider text-sm">{t.author}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


      </main>

      {/* Job Seekers & Employers CTA Section */}
      <section className="bg-white border-t border-gray-100 pb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row text-white gap-4">
          {/* Job Seekers CTA */}
          <Link 
            href="/why-choose-us" 
            className="flex-1 group relative overflow-hidden py-16 px-8 md:px-16 border-b md:border-b-0 md:border-r border-gray-100 transition-all duration-300 bg-orange-500 hover:bg-[#081120] rounded-[40px]"
          >
            <div className="flex items-center gap-8">
              <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform duration-500 group-hover:scale-110">
                <img 
                  src="https://breezyrecruit.com/wp-content/uploads/2024/11/Job-Seekers-150x150.jpg" 
                  alt="Job Seekers" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-3xl font-extrabold mb-2 transition-colors">Job Seekers</h3>
                <p className="text-xl font-medium">Looking For Your Next Great Opportunity?</p>
              </div>
            </div>
          </Link>

          {/* Employers CTA */}
          <Link 
            href="/employer-solutions" 
            className="flex-1 group relative overflow-hidden py-16 px-8 md:px-16 transition-all duration-300 bg-[#081120] hover:bg-orange-500 rounded-[40px]"
          >
            <div className="flex items-center gap-8">
              <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg transition-transform duration-500 group-hover:scale-110">
                <img 
                  src="https://breezyrecruit.com/wp-content/uploads/2024/11/employee-150x150.jpg" 
                  alt="Employers" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-3xl font-extrabold mb-2 transition-colors">Employers</h3>
                <p className="text-xl font-medium">The Right Candidates, The Right Fit.</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

    </div>
  );
}
