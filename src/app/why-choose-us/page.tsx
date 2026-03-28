"use client";

import Link from "next/link";
import { ArrowRight, CheckSquare, Target, Users, Search, FileText, Clock, Briefcase, TrendingUp, CheckCircle, Quote, Palette, Layout, Settings, Layers, CalendarCheck, Recycle, Navigation, FileEdit, Check, Stars } from "lucide-react";
import TestimonialSlider from "@/components/TestimonialSlider";

// Testimonial data preserved
const testimonials = [
  { text: "NAYA Staffing made the process effortless. I landed three interviews within weeks after months of hearing nothing.", author: "Senior Product Manager" },
  { text: "Thanks to NAYA Staffing, my resume finally got noticed by the right people. Their personal touch changed everything.", author: "Marketing Director" },
  { text: "With NAYA Staffing, I stopped applying blindly and focused on real, high-fit roles. The results were amazing.", author: "Director of Operations" },
  { text: "I didn’t realize recruiters could represent me directly. NAYA Staffing felt like having a private career agent.", author: "Senior Finance Manager" },
  { text: "After 10 years in the same role, NAYA Staffing helped me rebrand and negotiate a better salary than I expected.", author: "IT Program Manager" },
  { text: "They truly understood my career goals and marketed me to top firms I’d never reached alone.", author: "VP of Strategy" },
  { text: "NAYA Staffing opened doors I didn’t even know existed. Within weeks, I had two solid offers.", author: "Regional Sales Director" },
  { text: "What impressed me most was NAYA Staffing’s strategic approach and interview prep — real ROI.", author: "Chief Marketing Officer" },
  { text: "NAYA Staffing’s team applied to roles for me and kept me updated every step of the way.", author: "Operations Manager" },
  { text: "I saved countless hours and finally felt like someone was in my corner.", author: "Senior Account Executive" },
  { text: "NAYA Staffing’s personalized coaching gave me the confidence to ace tough interviews.", author: "Business Development Director" },
  { text: "Their resume writers knew exactly how to position my skills in a competitive market.", author: "Senior Financial Analyst" },
  { text: "Instead of hundreds of ignored applications, I had meaningful conversations with real employers.", author: "Director of Client Services" },
  { text: "NAYA Staffing turned my job hunt from overwhelming to manageable.", author: "Customer Success Manager" },
  { text: "The reverse recruitment model really works — I felt represented, not just another resume.", author: "Operations Director" },
  { text: "They helped me pivot industries, something I couldn’t have done alone.", author: "Senior Compliance Officer" },
  { text: "NAYA Staffing’s insights into the hidden job market were a game changer.", author: "Strategy Consultant" },
  { text: "From rewriting my LinkedIn to coaching me through offers, NAYA Staffing did it all.", author: "Executive Project Manager" },
  { text: "They kept me visible and active in front of hiring managers.", author: "Supply Chain Director" },
  { text: "Having experts proactively reach out on my behalf was incredibly powerful.", author: "Chief Operating Officer" },
  { text: "Within one month, I had more traction than the last six months combined.", author: "Director of Partnerships" },
  { text: "NAYA Staffing delivered customized opportunities that fit my goals perfectly.", author: "Finance Director" },
  { text: "Instead of chasing jobs, NAYA Staffing made companies chase me.", author: "Product Marketing Manager" },
  { text: "Their personal branding approach made a real difference in callbacks.", author: "Senior Operations Manager" },
  { text: "The difference with NAYA Staffing is that they genuinely care about your next move.", author: "Sales Strategy Director" },
  { text: "They handled everything — resumes, applications, follow-ups — while I focused on interviews.", author: "Executive Business Analyst" },
  { text: "NAYA Staffing helped me target only senior roles that matched my experience.", author: "Chief Revenue Officer" },
  { text: "The interview prep and mock sessions built my confidence dramatically.", author: "Director of Data Analytics" },
  { text: "Finally, I felt like someone was championing my career, not just checking boxes.", author: "Senior Marketing Strategist" },
  { text: "They didn’t just find roles — they found the right roles.", author: "Vice President of Business Development" },
  { text: "NAYA Staffing’s team kept me updated daily, no more guessing.", author: "Director of Supply Chain" },
  { text: "They understood the tech landscape and found roles I hadn hadn’t seen on job boards.", author: "Senior IT Project Manager" },
  { text: "NAYA Staffing helped me move up into an executive role faster than expected.", author: "Director of Commercial Strategy" },
  { text: "Their process felt highly personalized and truly candidate-first.", author: "Chief Compliance Officer" },
  { text: "NAYA Staffing removed the stress of applying to dozens of jobs myself.", author: "Senior Sales Leader" },
  { text: "From hidden opportunities to direct introductions, they delivered on their promise.", author: "Director of Innovation" },
  { text: "They treated my career like a brand to market, which made all the difference.", author: "Vice President of Operations" },
  { text: "The reverse recruitment model isn’t just an idea — it genuinely works.", author: "Senior Data Scientist" },
  { text: "Thanks to NAYA Staffing, I moved to a leadership role with a better package.", author: "Executive Strategy Manager" },
  { text: "They didn’t waste my time with irrelevant roles — every lead was high quality.", author: "Director of Process Improvement" },
  { text: "I felt like I had a dedicated team focused only on my success.", author: "VP of Growth" },
  { text: "NAYA Staffing brought opportunities that fit my niche skill set perfectly.", author: "Senior Transformation Consultant" },
  { text: "Their human touch made me feel valued and seen, not just a resume.", author: "Director of Customer Experience" },
  { text: "NAYA Staffing was proactive, transparent, and incredibly responsive.", author: "Senior Commercial Director" },
  { text: "Having experts manage my search freed up my energy for interviews.", author: "Vice President of Sales Enablement" },
  { text: "They guided me through a major industry switch seamlessly.", author: "Director of Talent Strategy" },
  { text: "Within weeks, I had interviews lined up with companies I’d only dreamed of.", author: "Chief Strategy Officer" },
  { text: "The attention to detail and regular updates kept me confident throughout.", author: "Director of Operational Excellence" },
  { text: "NAYA Staffing felt like having a career partner, not just a recruiter.", author: "Senior Revenue Operations Manager" },
  { text: "Every step felt tailored to me and my goals — that’s rare.", author: "Director of Change Management" },
];

export default function WhyChooseUsPage() {
  return (
    <div className="min-h-screen bg-navy-dark flex flex-col font-sans selection:bg-gold selection:text-navy-dark overflow-x-hidden">
      {/* Hero Section with Parallax Feel */}
      <section className="relative h-[70vh] flex flex-col items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://breezyrecruit.com/wp-content/uploads/2025/05/1-1-1024x683.jpg" 
            alt="Success Background" 
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-navy-dark/70 backdrop-blur-[4px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/50 via-transparent to-navy-dark"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto space-y-8 animate-fade-up">
          <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-4">
            The Difference
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] drop-shadow-2xl">
            Why Choose <br /> <span className="text-shimmer">NAYA Staffing?</span>
          </h1>
          <p className="text-base md:text-xl font-semibold text-slate-200 tracking-tight max-w-4xl mx-auto opacity-90 leading-tight">
            Connecting Elite Talent with <span className="text-gold">Industry Leaders</span> through precision representation and strategic support.
          </p>
        </div>
      </section>

      {/* Intro Narrative Section */}
      <section className="bg-navy py-32 overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                 <h6 className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6 px-4 py-1 bg-gold/5 inline-block rounded-full border border-gold/10">Building Careers</h6>
                 <h2 className="text-4xl md:text-5xl font-black text-white leading-[0.9] tracking-tighter">
                  We Don't Just Find Jobs. <br /> <span className="text-shimmer">We Build Legacies.</span>
                </h2>
              </div>
              <p className="text-base md:text-lg text-slate-400 leading-relaxed font-semibold">
                At NAYA Staffing, we go beyond keywords and job descriptions. Our mission is to understand who you are, what drives you, and where you want to go — and then we help you get there with <span className="text-white">Elite Strategic Support</span>.
              </p>
              <div className="pt-4">
                <Link 
                  href="/calendly" 
                  className="px-12 py-5 bg-gold text-navy-dark font-black rounded-full hover:bg-gold-hover hover:-translate-y-2 transition-all shadow-xl uppercase tracking-[0.2em] text-xs inline-flex items-center gap-3"
                >
                  Get in Touch <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="relative group">
              <div className="relative rounded-[80px] overflow-hidden p-6 glass-panel border-white/10 shadow-2xl">
                <div className="rounded-[60px] overflow-hidden relative aspect-[4/5] md:aspect-square">
                   <img 
                    src="https://breezyrecruit.com/wp-content/uploads/2025/05/1-1-1024x683.jpg" 
                    alt="Build Careers" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart - Premium Icon Grid */}
      <section className="py-32 bg-navy-dark border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="relative group lg:order-2">
              <div className="relative rounded-[80px] overflow-hidden p-6 glass-panel border-white/10 shadow-2xl">
                <div className="rounded-[60px] overflow-hidden relative aspect-[4/5] md:aspect-square">
                   <img 
                    src="https://breezyrecruit.com/wp-content/uploads/2025/05/employer-top-image.jpeg.webp" 
                    alt="Strategic Edge" 
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-12 lg:order-1">
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
                What Sets <br /> <span className="text-shimmer">Us Apart?</span>
              </h2>
              
              <div className="space-y-10">
                {[
                  { title: "You're Our Priority", text: "We work for you, not the employer. Every strategy and negotiation is tailored to benefit your career goals." },
                  { title: "Human Intelligence", text: "In an age of automated rejections, we bring real humans back into your search. No bots, just expert support." },
                  { title: "Confidential Representation", text: "Whether you're quietly searching or starting from scratch, your privacy is our absolute priority." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-8 group">
                    <div className="w-14 h-14 bg-gold/5 border border-gold/20 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors duration-500 shadow-lg">
                      <CheckSquare className="text-gold w-7 h-7 group-hover:text-navy-dark transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-black text-white group-hover:text-gold transition-colors uppercase tracking-tight">{item.title}</h3>
                      <p className="text-base text-slate-400 font-semibold leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Experts - Grid of Cards */}
      <section className="py-32 bg-navy">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h6 className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-8">Professional Excellence</h6>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-16 italic">Our Certified <span className="text-shimmer">Experts</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "RPO", icon: Settings, href: "/recruitment-process-outsourcing", desc: "End-to-end recruitment management for high-growth firms." },
              { title: "Reverse Recruitment", icon: Recycle, href: "/reverse-recruitment", desc: "Candidate-centric representation that flips the hiring model." },
              { title: "Direct Hire", icon: Navigation, href: "/direct-hire", desc: "Long-term placements that align with your corporate DNA." },
              { title: "Contract to Hire", icon: Layers, href: "/contract-to-hire", desc: "Evaluate talent in action before making a permanent hire." },
              { title: "Temporary Staffing", icon: FileEdit, href: "/temporary-staffing", desc: "On-demand expert staffing for critical short-term needs." },
              { title: "Executive Search", icon: Search, href: "/executive-search", desc: "Identifying the leaders who will define the future of your industry." }
            ].map((service, idx) => (
              <div key={idx} className="glass-panel group p-12 rounded-[48px] flex flex-col items-center hover:border-gold/30 transition-all duration-500 transform hover:-translate-y-3">
                <div className="w-20 h-20 bg-gold/5 border border-gold/20 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-gold group-hover:text-navy-dark transition-all duration-500 shadow-xl">
                  <service.icon className="w-10 h-10 text-gold group-hover:text-inherit transition-colors" />
                </div>
                <h4 className="text-2xl font-black text-white mb-6 uppercase tracking-tight text-center">{service.title}</h4>
                <p className="text-slate-400 mb-10 leading-relaxed font-semibold text-base text-center grow">{service.desc}</p>
                <Link href={service.href} className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-black text-xs uppercase tracking-widest text-white group-hover:bg-gold group-hover:text-navy-dark group-hover:border-gold transition-all duration-300 inline-flex items-center gap-2">
                   Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record - Impact Stats */}
      <section className="py-32 bg-navy-dark overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-10 leading-[0.8] italic">Impact In <span className="text-shimmer">Numbers.</span></h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto font-semibold mb-20 leading-relaxed">
                From startups to Fortune 500s — our results redefine standard recruitment benchmarks globally.
            </p>
          
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  { stat: "90%", label: "Interviews within 30 days" },
                  { stat: "70%", label: "Jobs landed in 60 days" },
                  { stat: "100%", label: "Personalized expert support" }
                ].map((stat, idx) => (
                    <div key={idx} className="glass-panel p-16 rounded-[48px] border-white/5 hover:border-gold/20 transition-all group flex flex-col items-center">
                        <div className="text-7xl font-black text-gold tracking-tighter group-hover:scale-110 transition-transform mb-4">{stat.stat}</div>
                        <div className="text-xs font-black text-white uppercase tracking-[0.4em] text-center">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Hidden Job Market - Premium Narrative */}
      <section className="py-32 bg-navy overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter italic">We Unlock The <br /> <span className="text-shimmer">Hidden Market.</span></h2>
              <p className="text-base text-slate-400 leading-relaxed font-semibold">
                Over 70% of roles are never publicly posted. Our team uncovers these exclusive opportunities and places you directly in front of real decision-makers.
              </p>
              
              <div className="p-10 glass-panel rounded-[48px] border-l-4 border-l-gold bg-gold/5 group">
                <div className="flex gap-8 items-start mb-8">
                  <div className="w-14 h-14 bg-gold rounded-2xl flex items-center justify-center shrink-0 shadow-xl">
                    <CheckSquare className="text-navy-dark w-7 h-7" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-black text-white uppercase tracking-tight">Our Elite Promise</h3>
                    <p className="text-lg text-slate-400 italic">Transparent, strategic, and professional career support.</p>
                  </div>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {["No generic solutions", "No empty promises", "No waiting in the dark", "100% Transparency"].map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-3 font-black text-white text-sm uppercase tracking-widest">
                        <CheckCircle className="text-gold w-5 h-5" /> {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative group">
               <div className="relative rounded-[80px] overflow-hidden p-6 glass-panel border-white/10 shadow-2xl">
                <img 
                  src="https://breezyrecruit.com/wp-content/uploads/2025/05/tmi-tetains-the-recruiters.jpg.webp" 
                  alt="Market Intelligence" 
                  className="rounded-[60px] h-[600px] w-full object-cover grayscale transition-all duration-1000 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Immersive Wall of Appreciation */}
      <section className="py-32 bg-navy-dark overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24 space-y-8">
            <h6 className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6 px-4 py-1 bg-gold/5 inline-block rounded-full border border-gold/10">Voice of Excellence</h6>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-10 leading-[0.8] tracking-tighter italic">High Performance <br /> <span className="text-shimmer">Endorsements.</span></h2>
            <div className="h-1 w-24 bg-gold mx-auto rounded-full opacity-50"></div>
          </div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10 min-h-[900px] max-h-[1200px] overflow-y-auto pr-6 custom-scrollbar px-1">
            {testimonials.map((t, idx) => (
              <div key={idx} className="break-inside-avoid glass-panel p-10 rounded-[40px] hover:border-gold/30 transition-all group relative overflow-hidden">
                <Quote className="text-gold/20 w-12 h-12 absolute top-8 right-8 group-hover:text-gold/40 transition-all" />
                <p className="text-base text-slate-200 italic leading-relaxed font-semibold mb-8 relative z-10">"{t.text}"</p>
                <div className="pt-8 border-t border-white/5 flex items-center gap-4">
                  <div className="w-10 h-1 bg-gold/50 rounded-full"></div>
                  <cite className="font-black text-white uppercase tracking-widest text-xs not-italic">{t.author}</cite>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 bg-gold/5 py-4 border border-gold/10 rounded-full max-w-xs mx-auto animate-pulse">
            <span className="text-xs font-black text-gold uppercase tracking-[0.3em] flex items-center justify-center gap-4">
                <Stars className="w-4 h-4" /> Scroll The Wall of Honor <Stars className="w-4 h-4" />
            </span>
          </div>
        </div>
      </section>

      {/* Massive CTA Section */}
      <section className="py-32 bg-navy relative border-y border-white/5 overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold/5 blur-[150px] animate-pulse"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-12">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.8] tracking-tighter">
            Let's Scale <br /> <span className="text-shimmer">The Peak.</span>
          </h2>
          <p className="text-lg text-slate-400 font-semibold max-w-2xl mx-auto leading-relaxed">
            You’ve built the skills — now acquire the stage. Partner with the elite career representations at NAYA Staffing.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
            <Link 
              href="/calendly" 
              className="px-16 py-6 bg-gold text-navy-dark font-black rounded-full hover:bg-gold-hover hover:-translate-y-2 transition-all shadow-[0_4px_40px_rgba(212,175,55,0.4)] flex items-center justify-center gap-4 text-sm uppercase tracking-[0.3em]"
            >
              Consult Expert <CalendarCheck className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="bg-navy-dark py-32 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
            <h6 className="text-slate-500 font-black uppercase tracking-[0.5em] text-xs mb-10">Cross-Solution Exploration</h6>
            <div className="flex flex-wrap justify-center gap-8">
                <Link href="/employer-solutions" className="px-12 py-5 bg-white/5 border border-white/10 text-white font-black rounded-full hover:bg-gold hover:text-navy-dark hover:border-gold transition-all text-xs uppercase tracking-[0.3em] backdrop-blur-md">
                    Enterprise Solutions
                </Link>
                <Link href="/services" className="px-12 py-5 bg-gold text-navy-dark font-black rounded-full hover:bg-gold-hover hover:-translate-y-1 transition-all text-xs uppercase tracking-[0.3em] shadow-xl">
                    Our Core Services
                </Link>
            </div>
        </div>
      </section>
      
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #D4AF37;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}
