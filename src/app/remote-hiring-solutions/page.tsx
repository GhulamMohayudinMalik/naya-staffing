import { Typewriter } from "@/components/Typewriter";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Rocket, 
  Target, 
  Users, 
  Clock, 
  ShieldCheck, 
  Settings, 
  TrendingUp, 
  Cpu, 
  Briefcase, 
  Globe, 
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  HelpCircle,
  Activity,
  CheckCircle2,
  FileText,
  Award
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';
import TestimonialSlider from '@/components/TestimonialSlider';

export const metadata: Metadata = {
  title: "Remote Hiring Solutions for Distributed Teams | NAYA Staffing",
  description: "NAYA Staffing provides remote hiring solutions for employers building distributed teams, remote-first workforces, and flexible hiring models across functions, industries, and markets.",
  keywords: [
    "remote hiring solutions",
    "remote recruitment services",
    "remote staffing solutions",
    "remote hiring agency",
    "remote talent acquisition",
    "distributed team hiring",
    "remote workforce recruitment",
    "hire remote employees",
    "remote team recruitment",
    "remote-first hiring support",
    "flexible workforce hiring",
    "virtual hiring solutions",
    "remote candidate sourcing",
    "work-from-home recruitment",
    "remote team building",
    "location-flexible hiring support"
  ]
};

export default function RemoteHiringSolutionsPage() {
  const reasons = [
    {
      title: "It Expands Talent Access",
      desc: "Remote hiring allows employers to consider candidates outside one immediate local area, which can improve access to stronger or more specialized talent.",
      icon: <Globe className="w-8 h-8 text-gold" />
    },
    {
      title: "It Supports Workforce Flexibility",
      desc: "Employers can design teams around work style, productivity, and business need rather than office proximity alone.",
      icon: <Settings className="w-8 h-8 text-gold" />
    },
    {
      title: "It Helps Businesses Stay Competitive",
      desc: "In many sectors, candidates now expect some level of flexibility. Employers that hire remotely may be able to compete more effectively for strong talent.",
      icon: <TrendingUp className="w-8 h-8 text-gold" />
    },
    {
      title: "It Supports Distributed Operations",
      desc: "Businesses with teams across locations or time zones often need recruitment support that fits how work is actually structured.",
      icon: <Users className="w-8 h-8 text-gold" />
    },
    {
      title: "It Can Improve Hiring Reach and Speed",
      desc: "A broader recruitment model can create more options when filling hard-to-find roles or scaling quickly.",
      icon: <Clock className="w-8 h-8 text-gold" />
    },
    {
      title: "It Reflects Modern Work Realities",
      desc: "Many organizations are now operating in hybrid, remote-first, or fully distributed ways, and recruitment needs to reflect that reality.",
      icon: <ShieldCheck className="w-8 h-8 text-gold" />
    }
  ];

  const useCases = [
    {
      title: "Building a Remote-First Team",
      desc: "When the company is intentionally structured around remote work rather than office-based hiring."
    },
    {
      title: "Hiring Beyond Commuting Distance",
      desc: "When strong candidates may not be available within the local office area, but the role can be done effectively from another location."
    },
    {
      title: "Scaling Flexible Teams Quickly",
      desc: "When the business needs to grow headcount without being limited by one office footprint or local hiring market."
    },
    {
      title: "Supporting Distributed Operations",
      desc: "When the organization already works across multiple locations, regions, or time zones and needs recruitment aligned with that structure."
    },
    {
      title: "Attracting Candidates Who Expect Flexibility",
      desc: "When workforce expectations make remote or location-flexible roles more attractive to strong applicants."
    },
    {
      title: "Creating a More Adaptable Hiring Model",
      desc: "When leadership wants a broader and more resilient workforce strategy rather than a location-dependent hiring approach."
    }
  ];

  const servicesInclude = [
    {
      title: "Remote Role Recruitment Support",
      desc: "Sourcing and hiring support for roles designed to be performed remotely across departments and functions.",
      icon: <Briefcase className="w-6 h-6 text-gold" />
    },
    {
      title: "Distributed Team Candidate Sourcing",
      desc: "Accessing talent pools beyond the employer’s immediate office location or local hiring market.",
      icon: <Globe className="w-6 h-6 text-gold" />
    },
    {
      title: "Remote-Readiness Screening",
      desc: "Evaluating candidates for communication, accountability, collaboration style, self-management, and suitability for remote work.",
      icon: <ShieldCheck className="w-6 h-6 text-gold" />
    },
    {
      title: "Role and Expectation Alignment",
      desc: "Helping clarify what the role requires in a remote environment so candidate evaluation stays realistic and relevant.",
      icon: <Target className="w-6 h-6 text-gold" />
    },
    {
      title: "Flexible Workforce Hiring Support",
      desc: "Recruitment support for employers building remote, hybrid, or location-flexible team structures.",
      icon: <Settings className="w-6 h-6 text-gold" />
    },
    {
      title: "Candidate Experience Support for Remote Recruitment",
      desc: "Supporting clear communication and smoother process flow across virtual hiring touchpoints.",
      icon: <Users className="w-6 h-6 text-gold" />
    },
    {
      title: "Connection to Broader Recruitment Services",
      desc: "Remote hiring support can also connect with permanent recruitment, global hiring, screening, employer branding, or technical recruitment depending on the business need.",
      icon: <Activity className="w-6 h-6 text-gold" />
    }
  ];

  const benefits = [
    {
      title: "Broader Candidate Access",
      desc: "Employers can consider qualified talent beyond one office location or local labor market.",
      icon: <Globe className="w-7 h-7 text-gold" />
    },
    {
      title: "Stronger Workforce Flexibility",
      desc: "Remote hiring supports more adaptable team structures and evolving work models.",
      icon: <Settings className="w-7 h-7 text-gold" />
    },
    {
      title: "Improved Access to Hard-to-Find Skills",
      desc: "Roles that are difficult to fill locally may become easier to hire when the search expands into remote-capable talent markets.",
      icon: <TrendingUp className="w-7 h-7 text-gold" />
    },
    {
      title: "More Competitive Talent Attraction",
      desc: "Remote opportunities may attract stronger candidate interest in roles where flexibility matters.",
      icon: <Target className="w-7 h-7 text-gold" />
    },
    {
      title: "Better Alignment With Modern Operations",
      desc: "Businesses already working in distributed ways benefit from a recruitment model that matches how work is actually being done.",
      icon: <Users className="w-7 h-7 text-gold" />
    },
    {
      title: "Scalable Hiring Possibility",
      desc: "Remote hiring can support growth without making workforce planning depend entirely on one physical site.",
      icon: <Clock className="w-7 h-7 text-gold" />
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Understand the Team Model",
      desc: "We begin by understanding whether the role is fully remote, hybrid, distributed, or part of a wider flexible workforce structure."
    },
    {
      num: "02",
      title: "Clarify Role Expectations",
      desc: "We align on the requirements of the role, communication needs, collaboration style, working hours, and performance expectations in a remote setup."
    },
    {
      num: "03",
      title: "Activate Broader Talent Search",
      desc: "We source candidates from relevant talent pools aligned with the remote nature of the role and the employer’s hiring needs."
    },
    {
      num: "04",
      title: "Screen for Remote-Work Fit",
      desc: "We assess candidate suitability for remote work, including communication, accountability, adaptability, and role alignment."
    },
    {
      num: "05",
      title: "Support Virtual Hiring Flow",
      desc: "We help manage candidate coordination, interview progression, and hiring momentum across remote recruitment processes."
    },
    {
      num: "06",
      title: "Support Better Distributed Hiring Decisions",
      desc: "Our goal is to help employers hire remote talent with stronger clarity, confidence, and alignment to real team needs."
    }
  ];

  const pillars = [
    {
      title: "Modern Workforce Perspective",
      desc: "We understand that remote hiring is not an exception for many businesses. It is part of how modern teams operate.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Broader Talent Access Thinking",
      desc: "We help employers think beyond office-based limitations and recruit more strategically for flexible work models.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Role-Relevant Remote Evaluation",
      desc: "We focus on remote hiring fit, not just resume strength, so the recruitment process remains useful and realistic.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Structured Virtual Hiring Support",
      desc: "We help maintain clarity and momentum across remote recruitment journeys, where communication and process discipline matter even more.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Flexible Service Alignment",
      desc: "Remote Hiring Solutions can work naturally alongside global hiring, permanent recruitment, technical recruitment, and screening support.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Premium, Practical Recruitment Delivery",
      desc: "Our goal is to make remote hiring feel professional, organized, and aligned with real business needs rather than improvised or inconsistent.",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  const audiences = [
    {
      title: "Remote-First Businesses",
      desc: "Companies that are intentionally structured around remote work and distributed team operations."
    },
    {
      title: "Hybrid Employers",
      desc: "Organizations combining office-based and flexible work models that still need broader talent access."
    },
    {
      title: "Businesses Hiring Beyond Local Radius",
      desc: "Employers that want to recruit strong talent outside normal commuting distance without requiring relocation."
    },
    {
      title: "Growth-Stage Companies Seeking Flexibility",
      desc: "Businesses scaling teams while staying agile in how and where they hire."
    },
    {
      title: "Modern Employers Adapting to New Work Models",
      desc: "Organizations updating their workforce strategy to reflect current work expectations and distributed collaboration."
    }
  ];

  const relatedServices = [
    { name: "Global Hiring", href: "/global-hiring", desc: "Strategic international recruitment solutions across borders." },
    { name: "Permanent Recruitment", href: "/permanent-recruitment", desc: "Core long-term hiring solutions for ongoing business needs." },
    { name: "Recruitment Process Outsourcing (RPO)", href: "/recruitment-process-outsourcing", desc: "Strategic recruitment partnership for high-volume hiring." },
    { name: "Screening & Assessment", href: "/screening-assessment", desc: "Structured candidate screening and evaluation support." },
    { name: "Employer Branding", href: "/employer-branding", desc: "Strengthen how candidates perceive your company." },
    { name: "Startup Hiring Solutions", href: "/startup-hiring-solutions", desc: "Flexible, growth-aware recruitment support." },
    { name: "Talent Mapping", href: "/talent-mapping", desc: "Market intelligence and recruitment planning services." },
    { name: "Contract Staffing", href: "/contract-staffing", desc: "Flexible workforce solutions for temporary needs." }
  ];

  const relatedMainPages = [
    { name: "Services Overview", href: "/services" },
    { name: "Employers & Solutions", href: "/employer-solutions" },
    { name: "Our Proven Process", href: "/our-proven-process" },
    { name: "Industries Overview", href: "/our-industries" },
    { name: "Contact Us", href: "/contact-us" }
  ];

  const faqs = [
    {
      question: "What are remote hiring solutions?",
      answer: "Remote hiring solutions are recruitment services designed to help businesses hire candidates for roles that are intended to be performed remotely or within distributed team structures."
    },
    {
      question: "When should a company use remote hiring solutions?",
      answer: "A company should use remote hiring solutions when roles are location-flexible, the business wants broader talent access, or the workforce model includes remote or distributed work."
    },
    {
      question: "How is remote hiring different from global hiring?",
      answer: "Remote hiring focuses on whether the role is performed remotely, while global hiring focuses on expanding the search across wider geographic markets. A company may use one or both depending on the role and hiring strategy."
    },
    {
      question: "What types of roles can NAYA Staffing support through remote hiring?",
      answer: "NAYA Staffing can support remote hiring across a wide range of functions where remote work is viable, including technical, commercial, operational, marketing, support, and professional roles."
    },
    {
      question: "Why is remote-readiness important in hiring?",
      answer: "Remote-readiness matters because remote roles require strong communication, accountability, collaboration habits, and the ability to perform effectively without traditional in-office support structures."
    },
    {
      question: "Does remote hiring only apply to international recruitment?",
      answer: "No. A company can hire remotely within the same city, region, or country. Remote hiring is about the work model, not automatically about international recruitment."
    }
  ];

  const marqueeDimensions = [
    "remote-readiness screening", "flexible workforce", "distributed talent sourcing", "virtual hiring flow",
    "distributed team collaboration", "location-flexible sourcing", "accountability & alignment"
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Distributed Workforce Recruitment</span>
            </div>
            <h1 className="text-5xl md:text-6xl xl:text-8xl font-black tracking-tighter mb-6 leading-none uppercase">
            <Typewriter>
              Remote Hiring Solutions for <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Modern, Flexible Teams
              </span>
            </Typewriter>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
              NAYA Staffing’s Remote Hiring Solutions service helps employers recruit talent for remote and distributed work environments with greater confidence and structure. Whether you are building a remote-first team, expanding access to talent beyond commuting distance, or creating a more flexible workforce model, we provide recruitment support designed for today’s location-flexible hiring needs.
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
                Built for employers that want wider talent access, stronger workforce flexibility, and better remote hiring outcomes.
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
                A Smarter Way to Build <br className="hidden md:inline" />
                <span className="text-gold">Remote and Distributed Teams</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            {/* Paragraphs Column */}
            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Remote work has changed how many businesses think about recruitment. Instead of limiting hiring to one office location or one immediate labor market, employers can now build teams around capability, flexibility, and role alignment across a broader geographic range. This has created new opportunities for talent access, workforce agility, and team design.
              </p>
              <p>
                At the same time, remote hiring brings its own challenges. Employers need people who can work effectively in remote environments, communicate clearly, stay accountable, and succeed without relying on traditional in-office structures. This means remote hiring should not be treated as standard hiring with a video interview added at the end. It requires a more intentional recruitment approach.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                NAYA Staffing’s Remote Hiring Solutions service is designed to help employers navigate that shift more effectively. We help businesses recruit for remote roles with stronger clarity around fit, communication, role expectations, and the realities of distributed team success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT REMOTE HIRING SOLUTIONS MEANS */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-8">
          <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
            The Definition
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
            What Are <span className="text-gold">Remote Hiring Solutions?</span>
          </h2>
          <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-semibold">
            <p>
              Remote Hiring Solutions are recruitment services designed to help businesses hire candidates for roles that are intended to be performed remotely, either fully or as part of a distributed workforce model.
            </p>
            <p>
              This may involve sourcing talent beyond the employer’s immediate location, assessing candidates for remote-work readiness, refining role expectations for virtual environments, and helping employers build teams that can collaborate successfully across distance.
            </p>
            <p className="text-slate-400 border-t border-white/5 pt-8 font-normal italic text-base">
              For employers, remote hiring creates more flexibility in how teams are built and where talent can come from. It can support growth, improve access to skilled professionals, and create more adaptable workforce models when managed well.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHY REMOTE HIRING MATTERS */}
      <section className="py-32 bg-navy-dark relative overflow-hidden border-t border-white/5">
        <div className="btn-rotating-border absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 btn-auto-sheen border border-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2 btn-auto-sheen border border-white/5">
              Why It Matters
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Remote Hiring Matters in <span className="text-gold">Today's Workforce</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Remote hiring is no longer just a trend. For many businesses, it is now part of how teams are built, work is delivered, and talent is accessed more competitively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {reasons.map((reason, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6">
                  <div className="btn-rotating-border w-14 h-14 bg-white/5 border border-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/5 group-hover:text-white hover:text-gold transition-all duration-500 btn-auto-sheen border border-white/5">
                    {reason.icon}
                  </div>
                  <h3 className="text-white font-black text-xl leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                    {reason.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHEN REMOTE HIRING SOLUTIONS IS THE RIGHT CHOICE */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              When to Use <span className="text-gold">Remote Hiring Solutions</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Remote Hiring Solutions are especially valuable when the business wants to access broader talent, support flexible work models, or hire for roles that do not need to be tied to one physical location.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6">
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

      {/* 6. WHAT THE SERVICE CAN INCLUDE */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              What Our Remote Hiring Solutions <span className="text-gold">Can Include</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              The exact scope can vary by employer, role type, and team model, but remote hiring support can include several recruitment-focused elements tailored to distributed work environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
            {servicesInclude.map((service, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-500 flex flex-col h-full justify-between">
                <div className="space-y-6">
                  <div className="btn-rotating-border w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/5 group-hover:text-white hover:text-gold transition-all duration-500 btn-auto-sheen border border-white/5">
                    {service.icon}
                  </div>
                  <h3 className="text-white font-black text-lg leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHAT EMPLOYERS GAIN FROM REMOTE HIRING */}
      <section className="py-32 bg-navy relative overflow-hidden border-t border-white/5">
        <div className="btn-rotating-border absolute top-1/2 right-0 w-[500px] h-[500px] bg-white/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 btn-auto-sheen border border-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
            
            {/* Sticky Header Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8 animate-fade-up">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-2 shadow-xl backdrop-blur-md btn-auto-sheen border border-white/5">
                Service Delivery
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                What Remote <br />Hiring Solutions <span className="text-gold">Deliver.</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-24 bg-white/5 rounded-full shadow-lg shadow-gold/20 btn-auto-sheen border border-white/5"></div>
              <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed border-l-2 border-white/10 pl-8 max-w-lg">
                When structured properly, remote hiring can give employers more than flexibility. It can improve talent access, hiring reach, and workforce adaptability.
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

      {/* 8. OUR REMOTE HIRING APPROACH */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-28 space-y-6">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2 btn-auto-sheen border border-white/5">
              Our Methodology
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Our Approach to <span className="text-gold">Remote Hiring</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Our remote hiring approach is built around understanding the role, the team model, and what success looks like in a distributed work environment. We focus on helping employers recruit people who can perform well remotely, not just people who are willing to work from home.
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

      {/* 9. WHY CHOOSE NAYA STAFFING FOR REMOTE HIRING */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose NAYA Staffing <span className="text-gold">for Remote Hiring Solutions</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Remote hiring works best when the recruitment process reflects the reality of remote work. NAYA Staffing’s approach is designed to support that with stronger structure, better fit evaluation, and practical workforce thinking.
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

      {/* 10. REMOTE HIRING VS GLOBAL HIRING */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
              Remote Hiring vs <span className="text-gold">Global Hiring</span>
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto"></div>
          </div>
          <div className="space-y-8 text-slate-300 font-medium text-lg leading-relaxed text-center">
            <p>
              Remote Hiring and Global Hiring are closely connected, but they are not exactly the same. Remote Hiring focuses on the work model itself. It is about hiring for roles that can be performed remotely, whether the candidate is nearby or far away.
            </p>
            <p>
              Global Hiring focuses more broadly on geographic reach. It is about expanding the talent search across wider regions, countries, or markets, whether the role is remote or connected to a specific location.
            </p>
            <p className="text-slate-400 border-t border-white/5 pt-8 font-semibold italic text-base">
              A business may use remote hiring without hiring internationally, and it may use global hiring for roles that are not fully remote. That is why both services deserve separate pages. Remote Hiring is about workforce model. Global Hiring is about talent geography.
            </p>
          </div>
        </div>
      </section>

      {/* 11. WHO THIS SERVICE IS BEST FOR */}
      <section className="py-32 bg-navy relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Who Remote Hiring Solutions <span className="text-gold">Is Best For</span>
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

      {/* 12. SCROLLING MARQUEE OF DISTRIBUTED TEAM FOCUS */}
      <section className="bg-navy-dark py-24 border-t border-white/5">
        <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
          <h3 className="text-3xl font-black text-white tracking-tighter">Distributed Team <span className="text-gold">Focus.</span></h3>
          <p className="text-slate-500 font-bold">Key Work Dimensions</p>
        </div>
        
        <div className="relative flex overflow-hidden">
          <style dangerouslySetInnerHTML={{ __html: `@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } .animate-marquee { display: flex; width: max-content; animation: marquee 60s linear infinite; }` }} />
          <div className="animate-marquee whitespace-nowrap gap-8 xl:gap-12 py-4">
            {[...marqueeDimensions, ...marqueeDimensions].map((dim, i) => (
              <span key={i} className="text-4xl md:text-6xl font-black text-white/5 hover:text-gold/20 transition-colors cursor-default uppercase tracking-tighter mr-12">
                {dim}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 13. INDUSTRY COVERAGE SECTION */}
      <section className="py-24 relative overflow-hidden bg-navy border-t border-white/5">
        <div className="container mx-auto px-6 max-w-5xl text-center space-y-8 animate-fade-up">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
              Cross-Industry Competence
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              Remote Hiring Support Across <span className="text-gold">Diverse Industries</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-slate-400 text-lg leading-relaxed font-semibold max-w-4xl mx-auto">
              NAYA Staffing’s broader website structure is intentionally designed to cover multiple industries and services rather than staying narrow, which makes this page especially useful across technology, professional services, marketing, sales, operations, support functions, and other remote-capable business areas. The approved sitemap also shows broad sector coverage across IT, healthcare, industrial, hospitality, professional services, education, insurance, retail, construction, marketing, and sales, allowing remote hiring to be positioned as a cross-sector capability where role type permits.
            </p>
            <div className="pt-6">
               <Link href="/our-industries" className="btn-rotating-border px-10 py-5 bg-white/5 hover:bg-white/10 text-white hover:text-gold font-black rounded-full transition-all inline-flex items-center gap-4 uppercase tracking-[0.2em] text-xs btn-auto-sheen border border-white/5">
                  Explore Industries We Serve <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
        </div>
      </section>

      {/* 14. FAQ SECTION */}
      <section className="bg-navy-dark py-32 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="text-center mb-20 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-6 shadow-xl backdrop-blur-md btn-auto-sheen border border-white/5">
                Hiring FAQ
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

      {/* 15. INTERNAL LINKING SECTION */}
      <section className="py-24 bg-navy border-t border-white/5 relative overflow-hidden">
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

      {/* 16. FINAL CTA SECTION */}
      <section className="py-32 relative overflow-hidden bg-navy-dark border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="btn-rotating-border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.03] blur-[200px] rounded-full group-hover:bg-white/[0.05] transition-all duration-1000 btn-auto-sheen border border-white/5"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-navy-light/10 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-panel p-12 md:p-24 rounded-[4rem] text-center border border-gold/20 shadow-2xl shadow-gold/10">
            <div className="btn-rotating-border inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 text-white hover:text-gold mb-10 shadow-2xl shadow-gold/30 btn-auto-sheen border border-white/5">
              <Rocket className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Build a More Flexible Team With <br/>
              <span className="text-gold">Stronger Remote Hiring Support</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              When the role can be done remotely, your hiring strategy should take full advantage of that opportunity. NAYA Staffing’s Remote Hiring Solutions service helps employers access broader talent, recruit more flexibly, and build distributed teams with greater structure and confidence.
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
