"use client";

import Link from "next/link";
import VideoBackground from "@/components/VideoBackground";

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-navy-dark text-white font-nunito-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center pt-20">
        <VideoBackground 
          src="/videos/hero.mp4" 
          overlayOpacity="bg-navy-dark/80"
        />

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 blur-[120px] rounded-full animate-pulse transition-all duration-5000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-navy-light/20 blur-[150px] rounded-full animate-float transition-all duration-7000"></div>
        
        <div className="relative z-10 text-center max-w-4xl px-4 animate-fade-in-up">
          <h2 className="text-gold uppercase tracking-[0.3em] font-black text-sm mb-4 drop-shadow-lg">
            About Us
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tighter drop-shadow-2xl">
            Your Partner in <span className="text-gold">Customized Staffing</span>
          </h1>
          <div className="w-24 h-1.5 bg-gold mx-auto rounded-full shadow-[0_0_15px_rgba(212,175,55,0.5)]"></div>
        </div>
      </section>

      {/* Modern Content Section */}
      <section className="relative py-24 lg:py-32 px-4">
        {/* Subtle Background Accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full -mr-64 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left Content Column */}
            <div className="w-full lg:w-1/2 space-y-8 relative z-10">
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gold text-xs font-bold uppercase tracking-widest mb-2 shadow-lg backdrop-blur-sm">
                Elite Talent Partner
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
                NAYA Staffing
              </h2>
              
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-semibold">
                <p>
                  NAYA Staffing is a modern recruitment agency dedicated to connecting top talent with 
                  forward-thinking companies through innovative hiring solutions. We are more than just 
                  a recruitment firm—we are strategic partners in workforce success.
                </p>
                <p>
                  Our expertise spans a full spectrum of services designed to meet evolving hiring needs. 
                  These include:
                </p>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {[
                    "Recruitment Process Outsourcing (RPO)",
                    "Direct Hire",
                    "Contract-to-Hire",
                    "Temporary Staffing",
                    "Executive Search",
                    "High-Volume Hiring"
                  ].map((service, index) => (
                    <li key={index} className="flex items-center gap-3 group">
                      <div className="w-6 h-6 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-all border border-gold/20">
                        <svg className="w-3.5 h-3.5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 space-y-6 border-t border-white/10 mt-12">
                <p className="text-gray-400 font-medium leading-relaxed italic">
                  We work across a diverse range of industries including: <br />
                  <span className="text-white font-bold not-italic">
                    IT, Healthcare, Industrial, Retail, Manufacturing, Logistics, Accounting & Finance, Engineering, Oil & Gas, Automotive, Legal, and Administrative.
                  </span>
                </p>
                <p className="text-gray-300 font-medium leading-relaxed">
                  Our approach is rooted in personalization, precision, and results—making the hiring process seamless for both companies and candidates.
                </p>
              </div>

              <div className="pt-8">
                <Link 
                  href="/contact-us"
                  className="inline-flex items-center gap-2 group px-8 py-4 bg-gold hover:bg-gold-hover text-navy-dark font-black uppercase tracking-widest text-sm rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_8px_30px_rgba(212,175,55,0.2)] hover:shadow-[0_12px_45px_rgba(212,175,55,0.35)]"
                >
                  Schedule Consultation
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Media Column */}
            <div className="w-full lg:w-1/2 relative group">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gold/20 blur-2xl rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-3xl bg-[#0B132B]">
                <img 
                  src="https://breezyrecruit.com/wp-content/uploads/2025/08/Screenshot-2025-08-01-at-6.05.38-AM.png"
                  alt="Modern Office Representation"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-navy-dark/80 via-transparent to-transparent opacity-60"></div>
                
                {/* Stats Decal (Optional flair for NAYA Brand) */}
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-[#040814]/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-gold text-2xl font-black">10+</div>
                      <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Industries</div>
                    </div>
                    <div>
                      <div className="text-gold text-2xl font-black">24/7</div>
                      <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Expert Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* What Sets Us Apart Section */}
      <section className="relative py-24 bg-[#0B132B] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
                What Sets <br /><span className="text-gold">Us Apart</span>
              </h2>
              <div className="w-20 h-1 bg-gold rounded-full mb-8"></div>
            </div>
            
            <div className="lg:col-span-7 space-y-8 text-gray-400 text-lg font-medium leading-relaxed">
              <p>
                At <span className="text-white font-bold">NAYA Staffing</span>, we believe hiring should be proactive, not reactive. 
                That’s why we introduced our <span className="text-gold font-bold">Reverse Recruitment Model</span> — a bold, candidate-first approach.
              </p>
              <p>
                Instead of waiting for job postings, we actively market highly skilled professionals to potential employers. 
                This ensures that job seekers land positions that truly match their strengths and aspirations, 
                while companies gain access to top-tier talent quickly and efficiently.
              </p>
              <p className="p-6 rounded-2xl bg-white/5 border border-white/10 text-gray-300 italic">
                "This candidate-first model, combined with our modern sourcing tools and strategic insights, 
                sets us apart in today’s competitive hiring market."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Experience Section */}
      <section className="relative py-24 bg-navy-dark border-t border-white/5">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gold/5 blur-[100px] rounded-full -ml-48 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Our <span className="text-gold text-transparent bg-clip-text bg-linear-to-r from-gold to-yellow-600">Experience</span></h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-8"></div>
            <p className="text-gray-400 text-lg font-semibold leading-relaxed">
              With years of expertise in staffing and recruitment, NAYA Staffing has built a reputation for delivering exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Industry Pioneers",
                desc: "We lead the industry with our Reverse Recruitment model, proactively marketing top talent to employers.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )
              },
              {
                title: "Strategic RPO",
                desc: "We offer comprehensive Recruitment Process Outsourcing (RPO) to streamline and manage your entire hiring process.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "Tailored Solutions",
                desc: "Direct Hire, Contract, and Temporary Staffing solutions that build high-performing, long-term teams.",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                )
              }
            ].map((feature, i) => (
              <div key={i} className="group p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-gold/30 hover:bg-white/[0.08] transition-all duration-500 shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-gold/10 text-gold flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-gold transition-colors">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-2xl font-black text-white/90 mb-2 italic">
              "Let’s work together to make hiring simpler, smarter, and more human."
            </p>
          </div>
        </div>
      </section>
      {/* Performance Metrics Section */}
      <section className="relative py-24 bg-[#0B132B] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { label: "Reverse Recruitment", value: 95 },
              { label: "RPO", value: 92 },
              { label: "Direct Hire", value: 86 },
              { label: "Partners in Team", value: 90 },
              { label: "Contract", value: 77 },
              { label: "Temporary", value: 72 }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="relative w-32 h-32 flex items-center justify-center mb-6">
                  {/* Gauge Background */}
                  <svg className="w-full h-full -rotate-90">
                    <circle 
                      cx="64" cy="64" r="58" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="8" 
                      className="text-white/5"
                    />
                    <circle 
                      cx="64" cy="64" r="58" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="8" 
                      strokeDasharray="364.4"
                      strokeDashoffset={364.4 - (364.4 * stat.value) / 100}
                      className="text-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.5)] transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-black text-white">{stat.value}%</span>
                  </div>
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 text-center group-hover:text-gold transition-colors">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message from CEO Section */}
      <section className="relative py-24 lg:py-32 bg-navy-dark overflow-hidden border-t border-white/5">
        {/* Artistic Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full -mr-32 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 blur-[100px] rounded-full -ml-32 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gold text-xs font-bold uppercase tracking-widest mb-6">
              Leadership Vision
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              A Message from Our CEO <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold to-yellow-600">- Furqan Ali</span>
            </h2>
            <div className="w-24 h-1.5 bg-gold mx-auto rounded-full mt-8 shadow-[0_0_15px_rgba(212,175,55,0.4)]"></div>
          </div>

          <div className="relative">
            {/* Big Quote Icon */}
            <div className="absolute -top-12 -left-8 text-gold/10 pointer-events-none">
              <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21L14.017 18C14.017 16.899 15.158 15 16.017 14L16.017 14C11.144 14 10.017 9.617 10.017 7L10.017 3L17.017 3L17.017 7L14.017 7C14.017 8.163 15.011 11 15.011 11L18.017 11L18.017 21L14.017 21ZM5.017 21L5.017 18C5.017 16.899 6.158 15 7.017 14L7.017 14C2.144 14 1.017 9.617 1.017 7L1.017 3L8.017 3L8.017 7L5.017 7C5.017 8.163 6.011 11 6.011 11L9.017 11L9.017 21L5.017 21Z" />
              </svg>
            </div>

            <div className="relative space-y-8 text-xl md:text-2xl text-gray-400 font-medium leading-[1.6] italic">
              <p>
                “At <span className="text-white not-italic font-black">NAYA Staffing</span>, our vision has always been clear - to simplify recruitment and empower both employers and candidates through genuine connections.
              </p>
              <p>
                I believe in a recruitment model that values people over processes. That’s why we built our foundation around personalized service, precision, and a unique <span className="text-gold not-italic font-black">Reverse Recruitment approach</span> that truly puts candidates first.
              </p>
              <p>
                Whether you’re a company looking to grow your team or a professional ready for your next opportunity, we’re here to make that journey easier, faster, and more meaningful.
              </p>
              <p>
                Thank you for trusting NAYA Staffing. Let’s build the future of work together.”
              </p>
            </div>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-6">
            <Link 
              href="/services"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-xl transition-all"
            >
              Explore Our Services
            </Link>
            <Link 
              href="/employer-solutions"
              className="px-8 py-4 bg-gold hover:bg-gold-hover text-navy-dark font-black uppercase tracking-widest text-xs rounded-xl transition-all shadow-xl"
            >
              Hire Talent Now
            </Link>
            <Link 
              href="/job-openings"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-xl transition-all"
            >
              Start Your Job Search
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
