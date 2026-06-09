import { Typewriter } from "@/components/Typewriter";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  ShieldCheck, 
  HelpCircle, 
  ArrowRight, 
  ArrowUpRight, 
  Check, 
  Target, 
  Briefcase, 
  Users, 
  Zap, 
  Sparkles,
  Info,
  ChevronRight,
  TrendingUp,
  Award,
  Globe,
  Compass,
  Heart
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "About NAYA Staffing | Modern Recruitment, Staffing & Workforce Solutions",
  description: "Learn about NAYA Staffing, a modern recruitment and staffing company built to support employers and job seekers through premium workforce solutions, hiring support, and stronger career opportunities.",
  keywords: [
    "about NAYA Staffing",
    "recruitment company about page",
    "staffing company profile",
    "about recruitment agency",
    "modern staffing company",
    "workforce solutions company",
    "recruitment and staffing company",
    "global staffing partner",
    "employer and candidate platform",
    "premium recruitment company",
    "staffing agency mission",
    "recruitment company values",
    "hiring partner company profile",
    "job seeker support platform",
    "modern talent solutions company",
    "about us staffing agency"
  ]
};

export default function AboutCompanyPage() {
  const whatWeDo = [
    {
      title: "Recruitment Solutions for Employers",
      desc: "We help businesses hire through permanent recruitment, contract staffing, executive search, RPO, project hiring, and specialized workforce support.",
      icon: <Briefcase className="w-8 h-8 text-gold" />
    },
    {
      title: "Career Support for Job Seekers",
      desc: "We help candidates move toward better opportunities through job openings, resume visibility, reverse recruitment, and broader job-seeker support.",
      icon: <Users className="w-8 h-8 text-gold" />
    },
    {
      title: "Industry-Focused Hiring Support",
      desc: "We support multiple industries and role environments rather than limiting the company to one narrow niche.",
      icon: <Globe className="w-8 h-8 text-gold" />
    },
    {
      title: "A Broader Workforce Experience",
      desc: "We position the company to serve both immediate hiring needs and longer-term talent visibility, workforce growth, and candidate connection.",
      icon: <TrendingUp className="w-8 h-8 text-gold" />
    }
  ];

  const whoWeServe = [
    {
      title: "Employers",
      desc: "Businesses that need recruitment, staffing, executive search, workforce flexibility, or broader hiring support."
    },
    {
      title: "Job Seekers",
      desc: "Candidates who want job opportunities, better visibility, stronger career positioning, and a smarter path into the market."
    },
    {
      title: "Growing Companies and Startups",
      desc: "Teams that need flexible and scalable hiring support across different stages of growth."
    },
    {
      title: "Established Businesses",
      desc: "Organizations hiring across departments, industries, locations, and workforce models."
    },
    {
      title: "Professionals at Different Career Stages",
      desc: "From early-career candidates to experienced specialists and senior talent, the platform should feel relevant across the career spectrum."
    }
  ];

  const values = [
    {
      title: "Professionalism",
      desc: "We believe recruitment should feel structured, clear, and high-quality from first contact onward."
    },
    {
      title: "Opportunity",
      desc: "We believe both employers and candidates deserve better access to the right opportunities."
    },
    {
      title: "Clarity",
      desc: "We value straightforward communication, stronger alignment, and smarter decision-making."
    },
    {
      title: "Growth",
      desc: "We believe recruitment should support long-term business growth and long-term career progress."
    },
    {
      title: "Modern Thinking",
      desc: "We believe hiring should reflect today’s workforce realities, including flexibility, visibility, digital experience, and global reach."
    },
    {
      title: "Trust",
      desc: "We believe trust is built through better process, better presentation, and better outcomes."
    }
  ];

  const differences = [
    {
      title: "Built for Both Employers and Candidates",
      desc: "The platform is designed to serve both sides of the market in a more complete way."
    },
    {
      title: "More Than a Traditional Agency Website",
      desc: "The company direction already points toward a larger system with candidate intake, job applications, database growth, and future platform expansion."
    },
    {
      title: "Premium Brand Positioning",
      desc: "The site, service structure, and tone are meant to feel more elevated than a generic staffing site."
    },
    {
      title: "Broad Coverage Across Services and Industries",
      desc: "The approved sitemap clearly shows a wide service stack and broad industry structure, supporting a larger and more versatile company presence."
    },
    {
      title: "A More Structured User Journey",
      desc: "Employers and job seekers both have dedicated pathways rather than being pushed into one flat site experience."
    },
    {
      title: "Built to Evolve",
      desc: "The company is positioned not only for current staffing and recruitment needs, but for future platform growth as well."
    }
  ];

  const faqs = [
    {
      question: "What is NAYA Staffing?",
      answer: "NAYA Staffing is a modern recruitment and staffing company designed to support employers and job seekers through smarter hiring solutions, stronger candidate visibility, and a more premium workforce experience."
    },
    {
      question: "Does NAYA Staffing work with both employers and job seekers?",
      answer: "Yes. The approved site structure clearly includes both an employer section and a job-seeker section, showing that the platform is built for both sides of the market."
    },
    {
      question: "What makes NAYA Staffing different from a traditional staffing website?",
      answer: "The company is positioned as more than a brochure site, with a broader direction that includes job listings, candidate registrations, a growing database, and future platform expansion."
    },
    {
      question: "What kind of services does NAYA Staffing provide?",
      answer: "NAYA Staffing is structured to provide recruitment, staffing, employer solutions, candidate services, industry-focused support, and broader workforce solutions across many categories."
    },
    {
      question: "Where does this page sit in the website structure?",
      answer: "This page sits under the approved About Us section alongside Contact Us, Blog, FAQs, and Testimonials."
    },
    {
      question: "Is NAYA Staffing intended to grow beyond the current website?",
      answer: "Yes. Our planning notes clearly describe the long-term direction as a broader candidate and client system rather than a simple static site."
    }
  ];

  const relatedLinks = [
    { name: "About Us Overview", href: "/about-us", desc: "Return to the main parent section for the brand." },
    { name: "Contact Us", href: "/contact-us", desc: "Get in touch with our operations desk." },
    { name: "Blog / Insights", href: "/insights", desc: "Explore our latest recruiting insights and articles." },
    { name: "FAQs", href: "/faqs", desc: "Browse frequently asked questions." },
    { name: "Testimonials", href: "/testimonials", desc: "Read client and candidate reviews." },
    { name: "Employers Overview", href: "/employers", desc: "Browse employer solutions and process pages." },
    { name: "Job Seekers Overview", href: "/job-seekers", desc: "Browse candidate support and reverse recruitment." },
    { name: "Job Openings", href: "/job-openings", desc: "View and apply to active positions." }
  ];

  return (
    <main className="bg-[#040814] text-white min-h-screen selection:bg-gold selection:text-navy-dark font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 md:pt-32 xl:pt-40 pb-16 md:pb-20 xl:pb-24 overflow-hidden">
        <VideoBackground 
          src="/videos/hero.mp4" 
          overlayOpacity="bg-navy-dark/85"
        />
        
        {/* Ambient Glows */}
        <div className="btn-rotating-border absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 blur-[120px] rounded-full animate-pulse btn-auto-sheen border border-white/5"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-navy-light/20 blur-[150px] rounded-full animate-float"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <div className="btn-rotating-border inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-gold/20 mb-6 backdrop-blur-md animate-fade-in-up btn-auto-sheen border border-white/5">
              <span className="text-gold text-xs font-bold uppercase tracking-widest">About NAYA Staffing</span>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
            <Typewriter>
              A Modern Recruitment Company Built for Better Hiring <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                and Better Career Movement.
              </span>
            </Typewriter>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
              NAYA Staffing is a modern recruitment and staffing company built to support both employers and job seekers through smarter hiring solutions, stronger visibility, and a more structured workforce experience. We help businesses solve talent challenges and help candidates move toward better opportunities through a brand approach designed to feel premium, practical, and future-focused.
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up animate-delay-300">
              <Link 
                href="/contact-us" 
                className="btn-rotating-border group relative px-8 py-4 bg-white/5 hover:bg-white/10 text-white hover:text-gold font-bold rounded-full transition-all duration-300 overflow-hidden shadow-2xl shadow-gold/20 btn-auto-sheen border border-white/5"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Schedule Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                href="/employers/become-a-client" 
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 transition-all duration-300 backdrop-blur-xl btn-sheen"
              >
                Become a Client
              </Link>
            </div>
            <div className="pt-10 border-t border-white/5 mt-10 max-w-xl mx-auto text-center animate-fade-in-up animate-delay-400">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 leading-loose">
                Built for a changing workforce, a broader talent market, and a better-connected hiring experience.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-20">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold to-transparent"></div>
        </div>
      </section>

      {/* 2. COMPANY INTRODUCTION SECTION */}
      <section className="py-24 relative overflow-hidden bg-navy-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 lg:gap-12 xl:gap-20 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
                Who We Are
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                More Than a Traditional <br className="hidden md:inline" />
                <span className="text-gold">Staffing Website</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                NAYA Staffing is designed as more than a traditional staffing website. It is a modern recruitment brand built around the idea that both employers and job seekers deserve a better experience. Businesses need stronger hiring support, more flexible workforce solutions, and better-aligned talent access. Candidates need more visibility, more support, and a smarter path into opportunity.
              </p>
              <p>
                That dual focus is what shapes the company. NAYA Staffing is positioned to serve both sides of the market through a professional, premium, and future-ready approach. On one side, the company helps employers solve hiring challenges through recruitment, staffing, and workforce solutions. On the other, it helps candidates access job opportunities, build visibility, and engage with a more structured career journey.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                Our database, candidate registration, and scalable design strategy ensure NAYA will grow beyond a simple static site into a broader platform ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR STORY / WHY NAYA EXISTS */}
      <section className="py-24 relative overflow-hidden bg-navy border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 lg:gap-12 xl:gap-20 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
                Our Purpose
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                Why NAYA Staffing <br className="hidden md:inline" />
                <span className="text-gold">Exists</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Hiring has changed. The way employers build teams is evolving, and the way candidates search for work is evolving too. Yet many staffing websites still feel outdated, transactional, and too limited in how they serve either side of the market.
              </p>
              <p>
                NAYA Staffing exists to offer a better model. The company is built around the belief that recruitment should be more strategic, more flexible, and more modern. Employers should have access to smarter hiring solutions that match real business conditions. Candidates should have access to more than just listings and one-off applications.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                By combining premium presentation, candidate visibility, and employer support, we create a stronger talent ecosystem ready to evolve over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE DO */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">
              What NAYA Staffing <span className="text-gold">Does</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              A broad, company-level summary of our primary solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8">
            {whatWeDo.map((item, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6">
                  <div className="btn-rotating-border w-14 h-14 bg-white/5 border border-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/5 group-hover:text-white hover:text-gold transition-all duration-500 btn-auto-sheen border border-white/5">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-black text-xl leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHO WE SERVE */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">
              Who We <span className="text-gold">Serve</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Our target audience profiles represent both business partners and job seeking candidates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-8">
            {whoWeServe.map((item, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-[#0B132B]/50 border border-white/5 hover:border-gold/30 transition-all duration-500 flex flex-col h-full justify-between">
                <div className="space-y-4">
                  <span className="text-gold font-bold text-xs">Audience 0{idx + 1}</span>
                  <h4 className="text-white font-black text-base group-hover:text-gold transition-colors tracking-tight uppercase">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-xs font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MISSION & VISION DUAL MODULE */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 items-stretch">
            
            {/* Mission Card */}
            <div className="group relative p-12 rounded-[48px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 shadow-2xl flex flex-col justify-between">
              <div className="space-y-6">
                <div className="btn-rotating-border w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-gold btn-auto-sheen border border-white/5">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-white font-black text-3xl uppercase tracking-tight">Our Mission</h3>
                <p className="text-slate-300 text-lg leading-relaxed font-semibold">
                  Our mission is to create a more effective, professional, and future-ready recruitment experience by helping employers hire with greater clarity and helping job seekers move toward better opportunities with stronger visibility and smarter support.
                </p>
              </div>
              <div className="btn-rotating-border h-1 w-20 bg-white/5 mt-8 rounded-full btn-auto-sheen border border-white/5"></div>
            </div>

            {/* Vision Card */}
            <div className="group relative p-12 rounded-[48px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 shadow-2xl flex flex-col justify-between">
              <div className="space-y-6">
                <div className="btn-rotating-border w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-gold btn-auto-sheen border border-white/5">
                  <Compass className="w-8 h-8" />
                </div>
                <h3 className="text-white font-black text-3xl uppercase tracking-tight">Our Vision</h3>
                <p className="text-slate-300 text-lg leading-relaxed font-semibold">
                  Our vision is to build NAYA Staffing into a modern recruitment and workforce platform that connects employers and candidates more intelligently, supports stronger hiring outcomes, and evolves beyond the limits of a traditional staffing website.
                </p>
              </div>
              <div className="btn-rotating-border h-1 w-20 bg-white/5 mt-8 rounded-full btn-auto-sheen border border-white/5"></div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. OUR CORE VALUES */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">
              What We <span className="text-gold">Stand For</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Six core principles that ground our brand credibility and candidate interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-500 hover:shadow-xl flex flex-col h-full justify-between">
                <div className="space-y-4">
                  <h4 className="text-white font-black text-lg group-hover:text-gold transition-colors tracking-tight uppercase">
                    {val.title}
                  </h4>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHAT MAKES NAYA STAFFING DIFFERENT */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">
              What Makes <span className="text-gold">NAYA Staffing Different</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Explore our core brand differentiators built for modern hiring conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {differences.map((diff, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-[#0B132B]/50 border border-white/5 hover:border-gold/30 transition-all duration-500 flex flex-col h-full justify-between">
                <div className="space-y-4">
                  <div className="btn-rotating-border w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-white/5 transition-colors btn-auto-sheen border border-white/5">
                    <Check className="w-5 h-5 text-gold group-hover:text-navy-dark" />
                  </div>
                  <h4 className="text-white font-black text-lg group-hover:text-gold transition-colors tracking-tight uppercase">
                    {diff.title}
                  </h4>
                  <p className="text-slate-400 text-xs font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {diff.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. THE NAYA PLATFORM DIRECTION */}
      <section className="py-24 relative overflow-hidden bg-navy border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 lg:gap-12 xl:gap-20 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
                The Brand Blueprint
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                More Than a Website. <br className="hidden md:inline" />
                <span className="text-gold">A Growing Talent Ecosystem.</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                One of the strongest things about the NAYA vision is that it is not limited to static company content. The planning notes already reference building a wider system for candidates and clients, including job listings, a candidate database, and broader platform functionality.
              </p>
              <p>
                That gives the About Company page extra importance. It does not read like a small local agency introduction. It reads like the foundation of a brand that intends to become a stronger, smarter hiring and career platform.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                For developers, this section defines the long-term scale of the project: premium, extensible, modern, and prepared for product growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CTA BLOCK */}
      <section className="py-24 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-[64px] p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-8 xl:gap-12 border-white/10 hover:border-gold/20 transition-all duration-700 btn-sheen">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black text-white leading-[0.9] tracking-tighter mb-4 uppercase">
                Want to Work With or <br /> <span className="text-gold">Through NAYA Staffing?</span>
              </h2>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed mt-4">
                Whether you are an employer looking for stronger hiring support or a candidate looking for better opportunities, NAYA Staffing is built to help you move forward with more structure, better visibility, and a more modern recruitment experience.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 shrink-0 w-full lg:w-auto">
              <Link href="/contact-us" className="btn-rotating-border px-12 py-6 bg-white/5 text-white hover:text-gold font-black rounded-full hover:bg-white/10 hover:-translate-y-2 transition-all text-center shadow-xl uppercase tracking-[0.2em] text-xs btn-auto-sheen border border-white/5">
                Schedule Consultation
              </Link>
              <Link href="/employers/become-a-client" className="px-12 py-6 bg-white/5 border border-white/10 text-white font-black rounded-full hover:bg-white/10 hover:-translate-y-2 transition-all text-center uppercase tracking-[0.2em] text-xs backdrop-blur-md btn-sheen">
                Become a Client
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ SECTION */}
      <section className="bg-[#0B132B] py-32 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="text-center mb-20 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-6 shadow-xl backdrop-blur-md btn-auto-sheen border border-white/5">
                FAQ
              </div>
              <h2 className="text-5xl font-black mb-6 uppercase">Frequently <span className="text-gold">Asked Questions</span></h2>
              <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
           </div>
           
           <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <FAQItem 
                  key={idx}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
           </div>
        </div>
      </section>

      {/* 12. FINAL CTA SECTION */}
      <section className="py-32 relative overflow-hidden bg-navy-dark border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="btn-rotating-border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.03] blur-[200px] rounded-full btn-auto-sheen border border-white/5"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-panel p-12 md:p-24 rounded-[4rem] text-center border border-gold/20 shadow-2xl shadow-gold/10">
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Built for Better Hiring. <br/>
              <span className="text-gold">Built for Better Opportunity.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              NAYA Staffing is designed to connect employers and candidates through a more modern, premium, and structured recruitment experience. This company page leaves users feeling that the brand is credible today and built for something bigger tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 xl:gap-8">
              <Link 
                href="/contact-us" 
                className="btn-rotating-border group w-full sm:w-auto px-16 py-8 bg-white/5 hover:bg-white/10 text-white hover:text-gold font-black rounded-[32px] transition-all flex items-center justify-center gap-4 shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-[0.3em] text-[10px] btn-auto-sheen border border-white/5"
              >
                Schedule Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-500" />
              </Link>
              <Link 
                href="/employers/become-a-client" 
                className="w-full sm:w-auto px-16 py-8 bg-white/5 hover:bg-white/10 text-white font-black rounded-[32px] border border-white/10 transition-all backdrop-blur-xl uppercase tracking-[0.3em] text-[10px] btn-sheen"
              >
                Become a Client
              </Link>
              <Link 
                href="/job-seekers/register-upload-resume" 
                className="w-full sm:w-auto px-16 py-8 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-gold hover:text-gold font-black rounded-[32px] transition-all uppercase tracking-[0.3em] text-[10px] btn-sheen"
              >
                Register &amp; Upload Resume
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 13. RELATED SERVICES / INTERNAL LINKS */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 xl:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.95]">
                About <br/>
                Our <span className="text-gold">Brand</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full btn-auto-sheen border border-white/5"></div>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                Connect with our core brand subpages, testimonials, blog feed, and FAQs.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedLinks.map((service, idx) => (
                <Link 
                  key={idx} 
                  href={service.href}
                  className="group p-6 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-gold/30 hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white font-bold text-base group-hover:text-gold transition-colors">
                        {service.name}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-gold transition-colors" />
                    </div>
                    <p className="text-slate-400 text-xs font-semibold leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking Footer Block */}
      <section className="py-12 bg-[#040814] border-t border-white/5 text-sm font-bold text-slate-500">
        <div className="container mx-auto px-6 flex flex-wrap gap-x-8 gap-y-4 justify-center">
          <Link href="/services" className="hover:text-gold transition-colors">Services Overview</Link>
          <Link href="/our-industries" className="hover:text-gold transition-colors">Industries Overview</Link>
          <Link href="/employers" className="hover:text-gold transition-colors">Employers Overview</Link>
          <Link href="/job-seekers" className="hover:text-gold transition-colors">Job Seekers Overview</Link>
          <Link href="/testimonials" className="hover:text-gold transition-colors">Testimonials</Link>
          <Link href="/insights" className="hover:text-gold transition-colors">Insights</Link>
          <Link href="/faqs" className="hover:text-gold transition-colors">FAQs Center</Link>
        </div>
      </section>
    </main>
  );
}
