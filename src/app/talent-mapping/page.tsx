import { Typewriter } from "@/components/Typewriter";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Search, 
  Compass, 
  Map, 
  TrendingUp, 
  BarChart3, 
  Database, 
  Network, 
  Users, 
  Target, 
  ShieldCheck, 
  Award, 
  Settings, 
  Briefcase, 
  Clock, 
  ArrowUpRight, 
  ChevronRight, 
  HelpCircle,
  Activity,
  ArrowRight,
  Globe,
  CheckCircle2,
  Building
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import TestimonialSlider from '@/components/TestimonialSlider';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "Talent Mapping Services for Strategic Hiring & Market Insight | NAYA Staffing",
  description: "NAYA Staffing provides talent mapping services to help employers understand talent availability, candidate markets, hiring trends, and workforce opportunities before launching or scaling recruitment efforts.",
  keywords: [
    "talent mapping services",
    "talent mapping",
    "talent market mapping",
    "candidate mapping services",
    "recruitment market research",
    "strategic hiring support",
    "talent intelligence services",
    "hiring market insight",
    "workforce planning support",
    "talent availability analysis",
    "candidate market research",
    "recruitment planning services",
    "competitor talent mapping",
    "executive talent mapping",
    "specialist talent research",
    "strategic talent acquisition support"
  ]
};

export default function TalentMappingPage() {
  const useCases = [
    {
      title: "Before a Critical or Specialist Hire",
      desc: "When a role is especially important, niche, or difficult to fill, talent mapping helps employers understand the market before the search begins.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      title: "During Expansion Planning",
      desc: "If a company is entering a new market, launching a new function, or building a new team, talent mapping helps assess the available talent landscape and potential hiring routes.",
      icon: <Globe className="w-8 h-8 text-gold" />
    },
    {
      title: "When Internal Alignment Is Still Developing",
      desc: "Sometimes stakeholders know they need to hire but are not yet fully aligned on the role level, candidate profile, or search feasibility. Talent mapping helps bring clarity.",
      icon: <Users className="w-8 h-8 text-gold" />
    },
    {
      title: "For Succession or Leadership Planning",
      desc: "Talent mapping can support long-term leadership and succession conversations by providing visibility into the market for future strategic appointments.",
      icon: <Award className="w-8 h-8 text-gold" />
    },
    {
      title: "In Highly Competitive Talent Markets",
      desc: "Where candidate supply is tight or competition is high, employers benefit from better insight into the realities of the market before making hiring assumptions.",
      icon: <Activity className="w-8 h-8 text-gold" />
    },
    {
      title: "To Support Broader Workforce Strategy",
      desc: "Talent mapping can help organizations think beyond one immediate vacancy and make stronger decisions about future talent needs, market positioning, and recruitment direction.",
      icon: <TrendingUp className="w-8 h-8 text-gold" />
    }
  ];

  const coverageAreas = [
    {
      title: "Talent Availability Review",
      desc: "An overview of where relevant candidates are likely to be found and how accessible those talent pools appear.",
      icon: <Database className="w-6 h-6 text-gold" />
    },
    {
      title: "Target Market Identification",
      desc: "Insight into the regions, sectors, or business environments where suitable talent is more concentrated.",
      icon: <Map className="w-6 h-6 text-gold" />
    },
    {
      title: "Candidate Profile Mapping",
      desc: "A clearer view of the backgrounds, experience patterns, and capabilities commonly seen in the market for the target role.",
      icon: <Users className="w-6 h-6 text-gold" />
    },
    {
      title: "Competitor or Adjacent Market Insight",
      desc: "A broader understanding of where comparable talent may currently sit and which environments may offer relevant candidate crossover.",
      icon: <Building className="w-6 h-6 text-gold" />
    },
    {
      title: "Role Feasibility Guidance",
      desc: "Practical insight into how realistic the current role brief is and where expectations may need refinement to align with market reality.",
      icon: <Settings className="w-6 h-6 text-gold" />
    },
    {
      title: "Search Direction Recommendations",
      desc: "Guidance on how to approach the hiring effort more effectively based on the mapped market.",
      icon: <Compass className="w-6 h-6 text-gold" />
    },
    {
      title: "Future Hiring Readiness",
      desc: "Support for employers planning upcoming recruitment activity, succession decisions, or staged workforce growth.",
      icon: <ShieldCheck className="w-6 h-6 text-gold" />
    }
  ];

  const benefits = [
    {
      title: "Better Hiring Visibility",
      desc: "Employers gain a stronger view of where talent exists, how the market behaves, and what hiring routes are most realistic.",
      icon: <Search className="w-7 h-7 text-gold" />
    },
    {
      title: "Improved Decision-Making",
      desc: "When businesses understand the market before hiring, they can define roles more accurately, align stakeholders faster, and make better recruitment choices.",
      icon: <Compass className="w-7 h-7 text-gold" />
    },
    {
      title: "Reduced Guesswork and Hiring Risk",
      desc: "Talent mapping helps avoid assumptions that may lead to unrealistic expectations, delayed searches, or ineffective recruitment strategy.",
      icon: <ShieldCheck className="w-7 h-7 text-gold" />
    },
    {
      title: "Stronger Search Planning",
      desc: "It creates a more informed starting point for executive search, permanent recruitment, specialist hiring, or expansion-focused recruitment projects.",
      icon: <Map className="w-7 h-7 text-gold" />
    },
    {
      title: "Better Internal Alignment",
      desc: "A shared market view helps leadership teams and hiring stakeholders align around what the role requires and what the market can realistically provide.",
      icon: <Network className="w-7 h-7 text-gold" />
    },
    {
      title: "More Strategic Workforce Thinking",
      desc: "Talent mapping supports longer-term planning by helping businesses think beyond immediate vacancies and toward broader talent strategy.",
      icon: <TrendingUp className="w-7 h-7 text-gold" />
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Understand the Talent Question",
      desc: "We begin by clarifying the employer’s goal, whether that is preparing for a key hire, exploring a new market, assessing talent availability, or planning a wider workforce move."
    },
    {
      num: "02",
      title: "Define the Mapping Scope",
      desc: "We align on role type, target functions, market range, search boundaries, and the kind of insight that will be most useful."
    },
    {
      num: "03",
      title: "Conduct Market Research and Talent Review",
      desc: "We assess relevant talent landscapes, candidate patterns, role comparables, and broader market signals related to the hiring objective."
    },
    {
      num: "04",
      title: "Identify Key Hiring Insights",
      desc: "We organize the findings into useful takeaways around availability, feasibility, competition, candidate profile patterns, and strategic opportunity."
    },
    {
      num: "05",
      title: "Translate Insight Into Recruitment Direction",
      desc: "We help turn market findings into practical hiring guidance that can support future search strategy or immediate recruitment decisions."
    },
    {
      num: "06",
      title: "Support the Next Hiring Step",
      desc: "Where appropriate, talent mapping can lead naturally into executive search, permanent recruitment, global hiring, or other recruitment solutions."
    }
  ];

  const pillars = [
    {
      title: "Strategic Recruitment Perspective",
      desc: "We understand how market insight connects to real hiring decisions, not just research in isolation.",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "Business-Aligned Analysis",
      desc: "Our mapping approach starts with the employer’s hiring objective so the output stays relevant to the actual business need.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Practical Market Visibility",
      desc: "We focus on insight that helps employers make clearer choices around talent access, role definition, and recruitment direction.",
      icon: <Compass className="w-6 h-6" />
    },
    {
      title: "Useful Pre-Search Planning",
      desc: "Talent mapping is especially valuable before critical, specialist, or expansion-related hiring, and we help structure it for that purpose.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Cross-Industry Capability",
      desc: "We support talent mapping across multiple industries and functions, allowing the service to support varied business environments.",
      icon: <Network className="w-6 h-6" />
    },
    {
      title: "Natural Link to Recruitment Execution",
      desc: "Where needed, mapped insight can flow directly into active search and recruitment support with stronger clarity and better planning.",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const audiences = [
    {
      title: "Employers Preparing for Critical Hires",
      desc: "Organizations that want stronger visibility before launching a leadership, specialist, or hard-to-fill search."
    },
    {
      title: "Businesses Entering New Markets",
      desc: "Companies exploring hiring opportunities in new sectors, geographies, or operational environments."
    },
    {
      title: "Leadership Teams Refining Role Strategy",
      desc: "Employers who need more clarity on role scope, market reality, and candidate feasibility before committing to a search."
    },
    {
      title: "Organizations Planning Future Workforce Growth",
      desc: "Businesses that want to think more proactively about upcoming talent needs rather than waiting for gaps to emerge."
    },
    {
      title: "Companies Seeking Better Recruitment Precision",
      desc: "Employers who want hiring decisions to be guided by better market intelligence and stronger strategic planning."
    }
  ];

  const faqs = [
    {
      question: "What is talent mapping?",
      answer: "Talent mapping is a strategic hiring support service that helps employers understand the talent market around a role or hiring objective before or alongside active recruitment."
    },
    {
      question: "When should a company use talent mapping?",
      answer: "A company should use talent mapping when hiring is critical, specialized, competitive, expansion-related, or still being defined at a strategic level."
    },
    {
      question: "How is talent mapping different from standard recruitment?",
      answer: "Standard recruitment is focused on filling an open role, while talent mapping focuses on understanding the market, candidate landscape, and search feasibility before or alongside the hiring process."
    },
    {
      question: "What kind of insights can talent mapping provide?",
      answer: "Talent mapping can provide visibility into talent availability, target markets, candidate profile patterns, role feasibility, and broader recruitment direction."
    },
    {
      question: "Can talent mapping support future hiring plans?",
      answer: "Yes. Talent mapping is especially useful for succession planning, growth-stage workforce planning, expansion preparation, and high-value hiring strategy."
    },
    {
      question: "Does NAYA Staffing offer talent mapping across industries?",
      answer: "Yes. NAYA Staffing supports talent mapping across multiple industries and functional areas."
    }
  ];

  const relatedServices = [
    { name: "Executive Search", href: "/executive-search", desc: "Premium recruitment solutions for leadership and business-critical positions." },
    { name: "Permanent Recruitment", href: "/permanent-recruitment", desc: "Core long-term hiring solutions for ongoing business needs." },
    { name: "Screening & Assessment", href: "/screening-assessment", desc: "Structured candidate screening and evaluation support to reduce hiring risk." },
    { name: "Recruitment Process Outsourcing (RPO)", href: "/recruitment-process-outsourcing", desc: "End-to-end recruitment management to scale your hiring operations." },
    { name: "Global Hiring", href: "/global-hiring", desc: "Cross-border and international recruitment support to access wider markets." },
    { name: "Contract Staffing", href: "/contract-staffing", desc: "Flexible staffing options for project-based and temporary talent needs." }
  ];

  const relatedMainPages = [
    { name: "Services Overview", href: "/services" },
    { name: "Employers & Solutions", href: "/employer-solutions" },
    { name: "Our Proven Process", href: "/our-proven-process" },
    { name: "Industries Overview", href: "/our-industries" },
    { name: "Contact Us", href: "/contact-us" }
  ];

  const dimensions = [
    "Talent Availability", "Location Density", "Salary Benchmarking", "Competitor Mapping", 
    "Role Feasibility", "Skill Proximity", "Succession Readiness", "Growth Pipelines"
  ];

  return (
    <main className="bg-[#040814] text-white min-h-screen selection:bg-gold selection:text-navy-dark">
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 md:pt-32 xl:pt-40 pb-16 md:pb-20 xl:pb-24 overflow-hidden">
        <VideoBackground 
          src="/videos/hero.mp4" 
          overlayOpacity="bg-navy-dark/85"
        />
        
        {/* Ambient Glows */}
        <div className="btn-rotating-border absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 blur-[120px] rounded-full animate-pulse transition-all duration-5000 btn-auto-sheen border border-white/5"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-navy-light/20 blur-[150px] rounded-full animate-float transition-all duration-7000"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <div className="btn-rotating-border inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-gold/20 mb-6 backdrop-blur-md animate-fade-in-up btn-auto-sheen border border-white/5">
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Strategic Talent Intelligence</span>
            </div>
            <h1 className="text-5xl md:text-6xl xl:text-8xl font-black tracking-tighter mb-6 leading-none uppercase">
            <Typewriter>
              Talent Mapping for <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Smarter, More Informed Hiring
              </span>
            </Typewriter>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
              NAYA Staffing’s Talent Mapping service helps employers understand the talent landscape before making important hiring decisions. Whether you are preparing for a critical hire, exploring a new market, assessing talent availability, or building a future hiring strategy, we provide structured talent insight that helps reduce guesswork and improve recruitment planning.
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
                href="/become-a-client" 
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 transition-all duration-300 backdrop-blur-xl btn-sheen"
              >
                Become a Client
              </Link>
            </div>
            <div className="pt-10 border-t border-white/5 mt-10 max-w-xl mx-auto text-center animate-fade-in-up animate-delay-400">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 leading-loose">
                Built for employers who want better hiring visibility, stronger planning, and clearer market intelligence before or alongside active recruitment.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-20">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold to-transparent"></div>
        </div>
      </section>

      {/* 2. SERVICE OVERVIEW SECTION */}
      <section className="py-24 relative overflow-hidden bg-navy-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 lg:gap-12 xl:gap-20 items-start">
            {/* Heading Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
                Overview
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                A More Informed Way <br className="hidden md:inline" />
                <span className="text-gold">to Plan Recruitment</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            {/* Paragraphs Column */}
            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Strong hiring decisions begin with strong visibility. Before launching a search, replacing a leader, opening a new function, or scaling into a competitive market, many employers need clearer answers to important questions. Is the talent available? Which markets are strongest? What level of experience is realistic? How competitive is the hiring landscape? What kind of candidate profile is actually attainable?
              </p>
              <p>
                Talent Mapping helps answer those questions. It provides structured market insight that supports better recruitment planning and more informed workforce decisions. Rather than moving forward with assumptions, employers can approach hiring with clearer visibility into the talent landscape and a stronger sense of where opportunity and challenge exist.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                NAYA Staffing’s Talent Mapping service is designed for organizations that want to make smarter talent decisions before or alongside active recruitment. It can support leadership hiring, specialist search planning, expansion projects, succession preparation, and wider workforce strategy by bringing more clarity to the market around the role.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT TALENT MAPPING MEANS */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-8">
          <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
            The Definition
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
            What Is <span className="text-gold">Talent Mapping?</span>
          </h2>
          <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-semibold">
            <p>
              Talent Mapping is a strategic research and planning service used to understand the market for a specific type of hire or group of hires. It helps employers identify where relevant talent may exist, how the market is structured, what candidate profiles are available, and what hiring challenges or opportunities may affect the search.
            </p>
            <p>
              Unlike standard recruitment, which focuses on actively filling an open position, talent mapping is often used earlier in the decision-making process or alongside a broader hiring strategy. It provides intelligence that helps shape recruitment direction, hiring feasibility, role design, market positioning, and search priorities.
            </p>
            <p className="text-slate-400 border-t border-white/5 pt-8 font-normal italic text-base">
              For employers, this creates a clearer view of the talent landscape before major recruitment decisions are made. It can also help reduce wasted time, improve internal alignment, and strengthen confidence in how the hiring process is approached.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHEN TALENT MAPPING IS THE RIGHT CHOICE */}
      <section className="py-32 bg-navy-dark relative overflow-hidden border-t border-white/5">
        <div className="btn-rotating-border absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 btn-auto-sheen border border-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2 btn-auto-sheen border border-white/5">
              Decision Guide
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              When to Use <span className="text-gold">Talent Mapping</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Talent Mapping is especially valuable when hiring is strategic, complex, highly competitive, or still being defined.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6">
                  <div className="btn-rotating-border w-14 h-14 bg-white/5 border border-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/5 group-hover:text-white hover:text-gold transition-all duration-500 btn-auto-sheen border border-white/5">
                    {useCase.icon}
                  </div>
                  <h3 className="text-white font-black text-xl leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                    {useCase.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {useCase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHAT TALENT MAPPING CAN INCLUDE */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              What Our Talent Mapping Service <span className="text-gold">Can Cover</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              The exact scope of a talent mapping project can vary depending on the employer’s goal, but the service may include a range of structured market insights designed to improve hiring visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
            {coverageAreas.map((area, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-500 flex flex-col h-full justify-between">
                <div className="space-y-6">
                  <div className="btn-rotating-border w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/5 group-hover:text-white hover:text-gold transition-all duration-500 btn-auto-sheen border border-white/5">
                    {area.icon}
                  </div>
                  <h3 className="text-white font-black text-lg leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                    {area.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {area.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHAT EMPLOYERS GAIN FROM TALENT MAPPING */}
      <section className="py-32 bg-navy-dark relative overflow-hidden border-t border-white/5">
        <div className="btn-rotating-border absolute top-1/2 right-0 w-[500px] h-[500px] bg-white/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 btn-auto-sheen border border-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
            
            {/* Sticky Header Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8 animate-fade-up">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-2 shadow-xl backdrop-blur-md btn-auto-sheen border border-white/5">
                Intelligence Deliverables
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                What Talent <br />Mapping <span className="text-gold">Delivers.</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-24 bg-white/5 rounded-full shadow-lg shadow-gold/20 btn-auto-sheen border border-white/5"></div>
              <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed border-l-2 border-white/10 pl-8 max-w-lg">
                Talent Mapping gives employers a clearer basis for hiring decisions by replacing uncertainty with structured market understanding.
              </p>
            </div>

            {/* Scrollable Benefits Column */}
            <div className="lg:col-span-7 space-y-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="group p-10 glass-panel rounded-[48px] border-white/5 hover:border-gold/30 hover:bg-white/4 transition-all duration-700 hover:shadow-2xl hover:shadow-gold/5 flex flex-col md:flex-row gap-6 xl:gap-8 items-start relative overflow-hidden animate-fade-up">
                  <div className="btn-rotating-border shrink-0 w-14 h-14 rounded-[20px] bg-white/10 flex items-center justify-center border border-gold/20 group-hover:bg-white/5 group-hover:text-white hover:text-gold transition-all duration-500 shadow-xl btn-auto-sheen border border-white/5">
                    {benefit.icon}
                  </div>
                  <div className="space-y-4 relative z-10">
                    <h4 className="text-2xl md:text-3xl font-black text-white group-hover:text-gold transition-colors tracking-tight">
                      {benefit.title}
                    </h4>
                    <p className="text-slate-400 font-semibold leading-relaxed text-base group-hover:text-white/80 transition-colors">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. OUR TALENT MAPPING APPROACH */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-28 space-y-6">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2 btn-auto-sheen border border-white/5">
              Our Research Methodology
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Our Approach to <span className="text-gold">Talent Mapping</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Our talent mapping approach is designed to turn an unclear hiring challenge into a more informed and actionable market view. Each project is shaped by the employer’s objective, business context, and the level of insight needed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="group relative p-12 rounded-[48px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col h-full justify-between overflow-hidden">
                <div className="btn-rotating-border absolute -top-12 -right-12 w-32 h-32 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-all duration-700 btn-auto-sheen border border-white/5"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="text-4xl font-black text-white/5 group-hover:text-gold/20 transition-colors duration-500">
                      {step.num}
                    </div>
                    <div className="h-px flex-grow bg-white/5 group-hover:bg-gold/20 transition-colors"></div>
                  </div>
                  <h4 className="text-2xl font-black text-white mb-4 group-hover:text-gold transition-colors tracking-tight leading-tight uppercase">
                    {step.title}
                  </h4>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE NAYA STAFFING FOR TALENT MAPPING */}
      <section className="py-32 bg-navy-dark relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose NAYA Staffing <span className="text-gold">for Talent Mapping</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Talent mapping is valuable only when the insight is relevant, practical, and tied to real hiring decisions. NAYA Staffing’s approach is designed to provide market intelligence that supports action, not just information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {pillars.map((pillar, i) => (
              <div key={i} className="group p-8 rounded-[36px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-500 hover:shadow-xl flex flex-col h-full">
                <div className="btn-rotating-border w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gold mb-6 group-hover:bg-white/5 group-hover:text-white hover:text-gold transition-all btn-auto-sheen border border-white/5">
                  {pillar.icon}
                </div>
                <h4 className="text-white font-black text-lg mb-3 group-hover:text-gold transition-colors tracking-tight uppercase">
                  {pillar.title}
                </h4>
                <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TALENT MAPPING VS STANDARD RECRUITMENT */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
              Talent Mapping vs <span className="text-gold">Standard Recruitment</span>
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto"></div>
          </div>
          <div className="space-y-8 text-slate-300 font-medium text-lg leading-relaxed text-center">
            <p>
              Standard recruitment is focused on filling an active vacancy. The goal is to identify, assess, and present candidates for an open role within a live hiring process.
            </p>
            <p>
              Talent Mapping is different because it focuses more on understanding the market around the role before or alongside the hiring process. It is often used to assess feasibility, identify talent concentrations, shape search strategy, and improve hiring decisions before full recruitment activity begins.
            </p>
            <p className="text-slate-400 border-t border-white/5 pt-8 font-semibold italic text-base">
              The two services often work well together. Talent mapping creates the insight. Recruitment execution turns that insight into hiring action.
            </p>
          </div>
        </div>
      </section>

      {/* 10. WHO THIS SERVICE IS BEST FOR */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Who Talent Mapping <span className="text-gold">Is Best For</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {audiences.map((audience, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6">
                  <h3 className="text-white font-black text-xl leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                    {audience.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {audience.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. SCROLLING MARQUEE OF METRICS */}
      <section className="bg-navy py-24 border-t border-white/5">
        <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
          <h3 className="text-3xl font-black text-white tracking-tighter">Market <span className="text-gold">Insight Dimensions.</span></h3>
          <p className="text-slate-500 font-bold">Key Mapping Parameters</p>
        </div>
        
        <div className="relative flex overflow-hidden">
          <style dangerouslySetInnerHTML={{ __html: `@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } .animate-marquee { display: flex; width: max-content; animation: marquee 60s linear infinite; }` }} />
          <div className="animate-marquee whitespace-nowrap gap-8 xl:gap-12 py-4">
            {[...dimensions, ...dimensions].map((dim, i) => (
              <span key={i} className="text-4xl md:text-6xl font-black text-white/5 hover:text-gold/20 transition-colors cursor-default uppercase tracking-tighter mr-12">
                {dim}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 12. INDUSTRY COVERAGE SECTION */}
      <section className="py-24 relative overflow-hidden bg-navy-dark border-t border-white/5">
        <div className="container mx-auto px-6 max-w-5xl text-center space-y-8 animate-fade-up">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
              Cross-Industry Competence
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              Talent Mapping Across <span className="text-gold">Diverse Industries</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-slate-400 text-lg leading-relaxed font-semibold max-w-4xl mx-auto">
              NAYA Staffing supports talent mapping across a broad range of industries including information technology, healthcare, industrial, hospitality, professional services, education, insurance, retail and e-commerce, construction, marketing, and sales-led business environments. This allows employers to combine market insight with industry-relevant recruitment understanding. The industry framework also aligns with your approved site structure for sector coverage.
            </p>
            <div className="pt-6">
               <Link href="/our-industries" className="btn-rotating-border px-10 py-5 bg-white/5 hover:bg-white/10 text-white hover:text-gold font-black rounded-full transition-all inline-flex items-center gap-4 uppercase tracking-[0.2em] text-xs btn-auto-sheen border border-white/5">
                  Explore Industries We Serve <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
        </div>
      </section>

      {/* 13. FAQ SECTION */}
      <section className="bg-navy py-32 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="text-center mb-20 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-6 shadow-xl backdrop-blur-md btn-auto-sheen border border-white/5">
                Talent Mapping FAQ
              </div>
              <h2 className="text-5xl font-black mb-6">Frequently <br/><span className="text-gold text-shimmer">Asked Questions</span></h2>
              <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
           </div>

           <div className="space-y-4">
             {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
             ))}
           </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <TestimonialSlider />

      {/* 14. INTERNAL LINKING SECTION */}
      <section className="py-24 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 lg:gap-12 xl:gap-20 items-start">
            {/* Services Links */}
            <div className="lg:col-span-7 space-y-8">
              <h4 className="text-gold font-black text-xs uppercase tracking-widest pb-2 border-b border-white/5">
                Related Recruitment Services
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedServices.map((service, idx) => (
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
                        <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-gold transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                      <p className="text-slate-400 text-xs font-semibold leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Core Pages Links */}
            <div className="lg:col-span-5 space-y-8">
              <h4 className="text-gold font-black text-xs uppercase tracking-widest pb-2 border-b border-white/5">
                Explore NAYA Staffing
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedMainPages.map((page, idx) => (
                  <Link 
                    key={idx} 
                    href={page.href}
                    className="group flex items-center justify-between p-4 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-gold/20 transition-all text-sm font-bold text-slate-300 hover:text-white"
                  >
                    <span>{page.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-gold transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15. FINAL CTA SECTION */}
      <section className="py-32 relative overflow-hidden bg-navy border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="btn-rotating-border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.03] blur-[200px] rounded-full group-hover:bg-white/[0.05] transition-all duration-1000 btn-auto-sheen border border-white/5"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-navy-light/10 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-panel p-12 md:p-24 rounded-[4rem] text-center border border-gold/20 shadow-2xl shadow-gold/10">
            <div className="btn-rotating-border inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 text-white hover:text-gold mb-10 shadow-2xl shadow-gold/30 btn-auto-sheen border border-white/5">
              <Search className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Plan Your Hiring Strategy <br/>
              <span className="text-gold">With Better Market Insight</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              When the hiring decision matters, clarity matters first. NAYA Staffing’s Talent Mapping service helps employers move forward with a stronger understanding of the market, better internal alignment, and a more informed recruitment strategy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 xl:gap-8">
              <Link 
                href="/contact-us" 
                className="btn-rotating-border group w-full sm:w-auto px-16 py-8 bg-white/5 hover:bg-white/10 text-white hover:text-gold font-black rounded-[32px] transition-all flex items-center justify-center gap-4 shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-[0.3em] text-[10px] btn-auto-sheen border border-white/5"
              >
                Schedule Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-500" />
              </Link>
              <Link 
                href="/become-a-client" 
                className="w-full sm:w-auto px-16 py-8 bg-white/5 hover:bg-white/10 text-white font-black rounded-[32px] border border-white/10 transition-all backdrop-blur-xl uppercase tracking-[0.3em] text-[10px] btn-sheen"
              >
                Become a Client
              </Link>
              <Link 
                href="/contact-us" 
                className="w-full sm:w-auto px-16 py-8 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-gold hover:text-gold font-black rounded-[32px] transition-all uppercase tracking-[0.3em] text-[10px] btn-sheen"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
