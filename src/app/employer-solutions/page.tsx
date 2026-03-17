"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, Users, Zap, Search, ShieldCheck, PlayCircle, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function EmployerSolutionsPage() {
  const testimonials = [
    { text: "BreezyRecruit reduced our time-to-hire and delivered pre-vetted candidates we couldn’t reach ourselves.", name: "VP of HR, TECHNOLOGY FIRM" },
    { text: "They quickly filled critical roles without sacrificing quality.", name: "DIRECTOR OF EXECUTIVE SEARCH, VENTURE CAPITAL FIRM" },
    { text: "BreezyRecruit’s RPO solution gave us a scalable way to manage high-volume hiring.", name: "DIRECTOR OF TALENT ACQUISITION, LOGISTICS COMPANY" },
    { text: "Their market insights and screening process saved us weeks.", name: "HR DIRECTOR, RETAIL CHAIN" },
    { text: "We no longer sift through hundreds of resumes — BreezyRecruit sends a focused shortlist.", name: "CHIEF PEOPLE OFFICER, MANUFACTURING FIRM" },
    { text: "They reduced candidate drop-off during long hiring cycles.", name: "DIRECTOR OF TALENT PLANNING, PROFESSIONAL SERVICES FIRM" }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
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
            <source src="https://breezyrecruit.com/wp-content/uploads/2025/05/Direct-Hire.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#081120]/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#EF6A0B] uppercase tracking-[0.4em] animate-in fade-in slide-in-from-bottom-4 duration-700">
              Employer Solutions
            </h2>
            <h2 className="text-4xl md:text-7xl font-extrabold text-white leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
              Let Our Recruiting Agency Help You <br className="hidden md:block" />
              Build a Winning Team
            </h2>
          </div>
        </div>
      </section>

      {/* Main Container Section with Gradient Background */}
      <section className="bg-gradient-to-b from-[#081120] to-[#0d1b32] py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          
          {/* Section 1: Top CTA Bar Content */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight text-center lg:text-left">
                Helping You Find the Right Talent Faster and Smarter
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 shrink-0 w-full lg:w-auto">
              <Link href="/become-a-client" className="px-12 py-5 bg-[#EF6A0B] text-white font-bold rounded-sm hover:bg-orange-600 hover:-translate-y-1 transition-all text-center shadow-2xl uppercase tracking-wider text-sm w-full lg:w-auto">
                become a client
              </Link>
              <Link href="/our-industries" className="px-12 py-5 bg-white text-[#081120] font-bold rounded-sm hover:bg-gray-100 hover:-translate-y-1 transition-all text-center uppercase tracking-wider text-sm w-full lg:w-auto">
                Our Industries
              </Link>
            </div>
          </div>

          {/* Section 2: Building a Winning Team Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10 order-2 lg:order-1">
              <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Let Our Recruiting Agency Help You <br className="hidden md:block" />
                <span className="text-[#EF6A0B]">Build a Winning Team</span>
              </h2>
              <div className="space-y-6 text-xl text-gray-300 leading-relaxed font-medium">
                <p>
                  Hiring the right people can make or break your business. But when you’re buried in resumes, chasing unqualified applicants, and juggling countless priorities, recruitment quickly becomes overwhelming — and costly.
                </p>
                <p>
                  At BreezyRecruit, we lift that burden by connecting you with highly qualified candidates who truly fit your roles, culture, and business goals. Whether you’re hiring for a critical leadership position or scaling entire teams, we provide smart, strategic staffing support designed for long-term success — covering RPO, Direct Hire, Temporary Staffing, Contract-to-Hire, Volume Hiring, and Executive Search.
                </p>
              </div>
            </div>
            <div className="relative h-[600px] rounded-[48px] overflow-hidden shadow-2xl order-1 lg:order-2">
              <img 
                src="https://breezyrecruit.com/wp-content/uploads/2024/12/1-8.jpg" 
                alt="Team Building" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081120]/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>


      {/* Why Employers Choose BreezyRecruit */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#081120]">
              Why Employers Choose <br className="md:hidden" />
              <span className="text-[#EF6A0B]">BreezyRecruit</span>
            </h2>
            <div className="h-1.5 w-24 bg-[#EF6A0B] mx-auto mt-8 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {[
              {
                icon: <Search className="w-8 h-8" />,
                title: "Targeted Talent Solutions",
                text: "We don’t just post jobs and wait. Our recruiters leverage advanced sourcing strategies, industry insights, and a robust talent network to find both active and passive candidates who perfectly match your requirements."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Faster Time-to-Hire",
                text: "Our streamlined recruitment process reduces vacancy costs and ensures you have the right people in place when you need them — keeping your business on track."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Deep Candidate Screening",
                text: "Every candidate goes through comprehensive interviews, skills assessments, and reference checks to ensure they’re a genuine fit for your team’s pace, culture, and vision."
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Dedicated Client Support",
                text: "We see ourselves as your recruitment partner, not just a vendor. By learning your business inside out, we deliver tailored solutions and service that align with your hiring goals."
              }
            ].map((reason, idx) => (
              <div key={idx} className="flex gap-8 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-[#EF6A0B] group-hover:bg-[#EF6A0B] group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-1">
                    {reason.icon}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-[#081120] group-hover:text-[#EF6A0B] transition-colors">
                    {reason.title}
                  </h3>
                  {/* Divider */}
                  <div className="w-full h-px bg-gray-200">
                    <div className="w-0 group-hover:w-full h-px bg-[#EF6A0B] transition-all duration-700"></div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {reason.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative group">
              <img 
                src="https://breezyrecruit.com/wp-content/uploads/2024/12/1-8.jpg" 
                alt="Value Proposition" 
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#081120]">
                What You Get with <span className="text-[#EF6A0B]">BreezyRecruit</span>
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Tailored Searches — built around your unique business needs and culture",
                  "Access to Hidden Talent — beyond standard job boards",
                  "Local & National Reach — through experienced recruiters",
                  "Pre-Screened Candidates — ready to add value from day one",
                  "Proven Process — ensuring quality and consistency",
                  "Long-Term Hiring Success — focused on building teams, not just filling roles"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl transition-colors hover:bg-white border hover:border-[#EF6A0B]">
                    <CheckCircle className="w-6 h-6 text-[#EF6A0B] shrink-0" />
                    <span className="font-bold text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 bg-[#081120] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Our <span className="text-[#EF6A0B]">Commitment</span> to You
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                At BreezyRecruit, we value quality over quantity. You won’t get flooded with resumes — instead, you’ll receive a thoughtfully curated shortlist of the best talent. Our promise is to respect your time, understand your vision, and exceed your expectations at every step.
              </p>
              <p className="text-xl text-gray-400 leading-relaxed">
                With BreezyRecruit, recruitment isn’t just about filling positions — it’s about investing in the future of your business.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://breezyrecruit.com/wp-content/uploads/2025/05/1-2.jpg" 
                alt="Our Commitment" 
                className="rounded-3xl shadow-2xl h-[500px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Build Team Together CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#081120] mb-8">Let’s Build Your Team Together</h2>
          <p className="text-xl text-gray-600 mb-12">
            Hiring doesn’t have to be hard. Partner with BreezyRecruit and discover how simple, efficient, and rewarding recruitment can be.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/become-a-client" className="px-12 py-5 bg-[#EF6A0B] text-white font-bold rounded-sm hover:translate-y-[-4px] transition-all shadow-xl flex items-center justify-center gap-2">
              Become a Client <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/calendly" className="px-12 py-5 bg-[#081120] text-white font-bold rounded-sm hover:translate-y-[-4px] transition-all shadow-xl flex items-center justify-center gap-2">
              Schedule a Consultation <PlayCircle className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#F8F9FA] py-32 border-t border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20 flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#081120] leading-tight">
              What People Say<br />
              <span className="text-[#EF6A0B]">About BreezyRecruit</span>
            </h2>
            <div className="h-1.5 w-24 bg-[#EF6A0B] mt-8 rounded-full"></div>
          </div>

          <div className="relative flex items-center justify-between gap-4 md:gap-12">
            {/* Nav Buttons */}
            <button 
              onClick={prevTestimonial}
              className="z-10 bg-white p-4 md:p-6 rounded-full shadow-xl text-[#081120] hover:bg-[#EF6A0B] hover:text-white transition-all transform hover:-translate-x-1"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Central Testimonial Card */}
            <div className="flex-grow max-w-5xl mx-auto overflow-hidden text-center">
              <div className="relative bg-white rounded-[48px] p-10 md:p-20 shadow-sm border border-gray-100 min-h-[450px] flex flex-col justify-center">
                <div 
                  key={currentTestimonial}
                  className="animate-in fade-in zoom-in-95 duration-700"
                >
                  <Quote className="w-16 h-16 text-[#EF6A0B]/10 mx-auto mb-10" />
                  <p className="text-2xl md:text-4xl text-gray-700 italic leading-relaxed mb-12 font-medium">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div className="mt-8">
                    <cite className="not-italic block">
                      <span className="text-[#EF6A0B] font-extrabold text-sm md:text-lg uppercase tracking-[0.2em]">
                        {testimonials[currentTestimonial].name}
                      </span>
                    </cite>
                  </div>
                </div>

                {/* Dots Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
                  {testimonials.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setCurrentTestimonial(idx)}
                      className={`h-2.5 transition-all duration-500 rounded-full ${idx === currentTestimonial ? 'w-10 bg-[#EF6A0B]' : 'w-2.5 bg-gray-200 hover:bg-gray-300'}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <button 
              onClick={nextTestimonial}
              className="z-10 bg-white p-4 md:p-6 rounded-full shadow-xl text-[#081120] hover:bg-[#EF6A0B] hover:text-white transition-all transform hover:translate-x-1"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>

          <div className="mt-20 text-center">
            <Link 
              href="/testimonials" 
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-xl text-white bg-[#EF6A0B] hover:bg-[#081120] shadow-xl transition-all transform hover:-translate-y-1 group uppercase tracking-widest"
            >
              View All Testimonials
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Talent Marquee Carousel Section */}
      <section className="bg-gradient-to-r from-[#081120] to-[#0d1b32] py-32 overflow-hidden relative">
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes marquee-employer {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-employer {
            display: flex;
            width: max-content;
            animation: marquee-employer 60s linear infinite;
          }
          .animate-marquee-employer:hover {
            animation-play-state: paused;
          }
          `
        }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Connecting You with <br />
            <span className="text-[#EF6A0B]">Top Talent Across Industries</span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto overflow-hidden relative group px-4">
          <div className="animate-marquee-employer flex gap-8 px-4">
            {[...Array(2)].map((_, outerIdx) => (
              <div key={outerIdx} className="flex gap-8">
                {[
                  { title: "Information Technology", text: "We connect top tech talent with dynamic companies needing developers, engineers, and IT leaders.", image: "https://breezyrecruit.com/wp-content/uploads/2025/02/tech-talent.jpg", link: "/industries/information-technology/" },
                  { title: "Healthcare", text: "Finding skilled healthcare professionals is a breeze with our specialized medical recruitment division.", image: "https://breezyrecruit.com/wp-content/uploads/2024/10/Healthcare.jpg", link: "/industries/healthcare/" },
                  { title: "Industrial", text: "We source reliable talent for manufacturing and logistics to keep your operations running safely.", image: "https://breezyrecruit.com/wp-content/uploads/2025/05/1-1.jpg", link: "/industries/industrial/" },
                  { title: "Hospitality", text: "Connecting elite hospitality talent with world-class venues and services.", image: "https://breezyrecruit.com/wp-content/uploads/2024/10/Senior-Living.jpg", link: "/industries/hospitality/" },
                  { title: "Professional Services", text: "Strategic recruitment for management consulting and specialized business roles.", image: "https://breezyrecruit.com/wp-content/uploads/2025/02/Our-Proven-Process_20_11zon-1.png", link: "/industries/professional-services/" },
                  { title: "Education", text: "Specialized background checks and certification verification for the education sector.", image: "https://breezyrecruit.com/wp-content/uploads/2025/05/1-2.jpg", link: "/industries/education-recruiters/" },
                  { title: "Insurance", text: "Strategic decision-making and talent acquisition for high-performing insurance teams.", image: "https://breezyrecruit.com/wp-content/uploads/2025/05/Education-Recruitment-Agency-in-Pakistan.png", link: "/industries/insurance-recruiters/" },
                  { title: "Marketing", text: "Finding marketers who understand your brand and drive results in a competitive landscape.", image: "https://breezyrecruit.com/wp-content/uploads/2025/05/employer-top-image.jpeg", link: "/industries/marketing-recruiters/" },
                  { title: "Sales", text: "Recruiting top sales talent is a high-stakes endeavor that requires our expertise.", image: "https://breezyrecruit.com/wp-content/uploads/2025/05/retail-2-panorama-bae85f3812c2afd0c3fb40865d910c80-5e29b5b609e67.jpg", link: "/industries/sales-recruiters/" },
                  { title: "Construction", text: "Building a high-performing construction team with strategic recruitment investments.", image: "https://breezyrecruit.com/wp-content/uploads/2025/05/AdobeStock_290512663-1.jpg", link: "/industries/construction-recruiters/" },
                  { title: "Reliable Retail", text: "Handling the uphill battle of retail hiring with reliable, top-tier talent search.", image: "https://breezyrecruit.com/wp-content/uploads/2025/05/retail-candidate-working.webp", link: "/industries/reliable-retail-recruiters/" }
                ].map((ind, idx) => (
                  <div key={idx} className="w-[400px] flex-shrink-0 bg-white rounded-[40px] overflow-hidden group/card shadow-2xl hover:-translate-y-3 transition-all duration-700">
                    <Link href={ind.link} className="block relative aspect-[16/10] overflow-hidden">
                      <img 
                        src={ind.image} 
                        alt={ind.title} 
                        className="w-full h-full object-cover group-hover/card:scale-110 transition-all duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#081120]/40 to-transparent group-hover/card:bg-transparent transition-all duration-500"></div>
                    </Link>
                    <div className="p-10 space-y-5">
                      <h4 className="text-2xl font-bold text-[#081120] group-hover/card:text-[#EF6A0B] transition-colors uppercase tracking-tight line-clamp-1">
                        {ind.title}
                      </h4>
                      <p className="text-gray-600 line-clamp-3 leading-relaxed font-medium">
                        {ind.text}
                      </p>
                      <div className="pt-4 flex items-center text-[#EF6A0B] font-bold group-hover/card:gap-3 gap-2 transition-all">
                        EXPLORE INDUSTRY <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          {/* Edge Fades */}
          <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-[#081120] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-[#081120] to-transparent z-10 pointer-events-none"></div>
        </div>
      </section>
    </div>
  );
}
