'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Search, 
  RefreshCcw, 
  Target, 
  MessageSquare, 
  UserCheck, 
  Clock, 
  Rocket, 
  Handshake,
  Lightbulb,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import TestimonialSlider from '@/components/TestimonialSlider';

const processSteps = [
  {
    number: "01",
    title: "Get In Sync",
    description: "Our recruiting team conducts a thorough meeting to learn every detail about your company, your hiring process, and your needs.",
    icon: <RefreshCcw className="w-8 h-8" />
  },
  {
    number: "02",
    title: "Clarify Process",
    description: "Procedures for submitting candidates and clear timelines for transparent communication are agreed upon.",
    icon: <Target className="w-8 h-8" />
  },
  {
    number: "03",
    title: "Begin Searches",
    description: "BreezyRecruiters launch an intensive search using all sourcing methods plus our internal database. We review hundreds of resumes and select 25 to 50 candidates to prescreen.",
    icon: <Search className="w-8 h-8" />
  },
  {
    number: "04",
    title: "Vet Candidates",
    description: "Of the prescreened candidates, the best for your specific company are interviewed face to face or via webcam for a full hour.",
    icon: <UserCheck className="w-8 h-8" />
  },
  {
    number: "05",
    title: "Submit Candidates",
    description: "Of the interviewed candidates, we select only those who are a match. We educate and excite them about your company.",
    icon: <Rocket className="w-8 h-8" />
  },
  {
    number: "06",
    title: "Coordinate Interviews",
    description: "Your recruiter handles the time-consuming coordination of interviews. We share candidate feedback and insights you wouldn’t have access to otherwise.",
    icon: <Calendar className="w-8 h-8" />
  },
  {
    number: "07",
    title: "Expedite Hiring Process",
    description: "We work hard to make sure the best candidates don’t get away. We facilitate smooth and timely recruiting measures as you and your team execute your hiring process.",
    icon: <Clock className="w-8 h-8" />
  },
  {
    number: "08",
    title: "Exchange Transparent Feedback",
    description: "Your recruiter eagerly receives information about any hits or misses with candidates presented, interviewed, and placed.",
    icon: <MessageSquare className="w-8 h-8" />
  },
  {
    number: "09",
    title: "Foster A Congruent Partnership",
    description: "We take pride in delivering the most qualified and well-vetted candidates to you and being a true partner to your success.",
    icon: <CheckCircle2 className="w-8 h-8" />
  }
];

export default function OurProvenProcessPage() {
  return (
    <main className="bg-[#040814] text-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <VideoBackground 
          src="/videos/direct-hire.mp4" 
          overlayOpacity="bg-navy-dark/70"
        />
        <div className="container mx-auto px-6 relative z-10 text-center animate-fade-in">
          <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-8 shadow-xl backdrop-blur-md">
            The NAYA Method
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-tight">
            Our Proven <br /><span className="text-gold">Process.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
            At BreezyRecruit, we follow a streamlined and effective process to ensure we deliver the best talent for your organization.
          </p>
        </div>
      </section>

      {/* 2. NARRATIVE & STEPS SECTION */}
      <section className="py-24 bg-navy-dark relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Left Column: Sticky Narrative */}
            <div className="lg:col-span-5 relative">
              <div className="lg:sticky lg:top-32 space-y-10">
                <div className="space-y-6">
                  <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
                    Our <span className="text-gold">Process.</span>
                  </h2>
                  <div className="h-1.5 w-24 bg-gold rounded-full"></div>
                </div>
                
                <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                  <p>
                    We begin by deeply understanding your company’s needs, culture, and objectives. From there, we proactively source and screen candidates to find the perfect fit for your roles.
                  </p>
                  <p>
                    Our dedicated team supports you throughout the entire hiring journey, from initial consultation to successful placement and beyond.
                  </p>
                  <p className="text-white font-bold italic">
                    Ready to streamline your hiring? Here’s how we make it happen:
                  </p>
                </div>

                <div className="pt-8">
                  <Link href="/become-a-client" className="group px-10 py-5 bg-gold hover:bg-gold-hover text-navy-dark font-black rounded-full transition-all inline-flex items-center gap-4 shadow-2xl uppercase tracking-widest text-xs">
                    Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Scrolling Steps */}
            <div className="lg:col-span-7 space-y-12">
              {processSteps.map((step, index) => (
                <div key={index} className="group relative glass-panel p-8 md:p-12 rounded-[40px] border-white/5 hover:border-gold/30 transition-all duration-500 hover:-translate-y-2">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Number Overlay */}
                    <div className="relative">
                      <div className="text-8xl font-black text-white/5 absolute -top-10 -left-6 group-hover:text-gold/10 transition-colors">
                        {step.number}
                      </div>
                      <div className="w-20 h-20 bg-gold/10 border border-gold/20 rounded-3xl flex items-center justify-center text-gold relative z-10 shadow-xl group-hover:scale-110 transition-transform duration-500">
                        {step.icon}
                      </div>
                    </div>

                    <div className="space-y-4 flex-1">
                      <h3 className="text-3xl font-black text-white group-hover:text-gold transition-colors tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed font-light">
                         {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. TESTIMONIALS SLIDER */}
      <section className="py-24 bg-navy relative border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">What People <span className="text-gold">Say.</span></h2>
            <div className="h-1 bg-gold w-32 mx-auto rounded-full"></div>
        </div>
        <TestimonialSlider />
      </section>

      {/* 4. CALL TO ACTION - BOTTOM */}
      <section className="py-32 bg-linear-to-b from-navy to-navy-dark relative text-center">
        <div className="container mx-auto px-6 space-y-12 max-w-4xl">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-none">
              Ready to Architect Your <br /><span className="text-gold text-shimmer">Winning Team?</span>
            </h2>
            <p className="text-gray-400 text-xl font-medium">
              Join forces with NAYA Staffing and experience the difference of a truly congruent partnership.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-8">
               <Link 
                href="/become-a-client" 
                className="group px-16 py-8 bg-gold hover:bg-gold-hover text-navy-dark font-black rounded-[32px] transition-all flex items-center gap-6 shadow-2xl uppercase tracking-[0.2em] text-xs w-full sm:w-auto text-center justify-center"
              >
                Get in touch <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-500" />
              </Link>
            </div>
         </div>
      </section>
    </main>
  );
}
