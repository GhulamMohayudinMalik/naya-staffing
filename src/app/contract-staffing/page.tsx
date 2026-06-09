import { Typewriter } from "@/components/Typewriter";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  ShieldCheck, 
  Users, 
  Target, 
  Clock, 
  Briefcase, 
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Lock,
  Globe,
  Award,
  Zap,
  TrendingUp,
  Search,
  Settings,
  Scale,
  Building,
  UserCheck,
  Network,
  ThumbsUp,
  HelpCircle,
  ArrowUpRight,
  Calendar,
  Grid,
  ZapOff
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import TestimonialSlider from '@/components/TestimonialSlider';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "Contract Staffing Services for Flexible Hiring | NAYA Staffing",
  description: "NAYA Staffing provides contract staffing services for employers needing flexible, project-based, urgent, and temporary workforce support across industries and business functions.",
  keywords: [
    "contract staffing",
    "contract staffing services",
    "contract staffing agency",
    "temporary staffing agency",
    "flexible hiring solutions",
    "contract recruitment services",
    "temporary workforce solutions",
    "project-based staffing",
    "workforce flexibility",
    "short-term staffing solutions",
    "urgent hiring support",
    "temporary recruitment services"
  ]
};

export default function ContractStaffingPage() {
  const useCases = [
    {
      title: "Project-Based Hiring",
      desc: "When a business needs professionals for a defined project, implementation phase, launch cycle, or temporary initiative, contract staffing allows the team to scale without adding permanent headcount immediately.",
      icon: <Building className="w-8 h-8 text-gold" />
    },
    {
      title: "Urgent Workforce Gaps",
      desc: "If an unexpected vacancy, resignation, leave of absence, or demand spike creates immediate pressure, contract staffing helps restore operational capacity quickly.",
      icon: <Zap className="w-8 h-8 text-gold" />
    },
    {
      title: "Seasonal or Fluctuating Demand",
      desc: "Many businesses experience changing hiring needs during busy periods, seasonal cycles, expansion phases, or demand surges. Contract staffing provides flexibility without long-term commitment.",
      icon: <Calendar className="w-8 h-8 text-gold" />
    },
    {
      title: "Specialist Skills for a Limited Time",
      desc: "Sometimes a company needs niche expertise for a short period rather than a permanent role. Contract staffing allows businesses to bring in that capability when needed.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      title: "Business Continuity and Coverage",
      desc: "Contract professionals can help maintain workflow, service levels, and productivity while permanent hiring is in progress or temporary workforce support is required.",
      icon: <ShieldCheck className="w-8 h-8 text-gold" />
    }
  ];

  const models = [
    {
      title: "Short-Term Contract Staffing",
      desc: "For urgent or temporary needs that require immediate support over a limited period.",
      icon: <Clock className="w-6 h-6 text-gold" />
    },
    {
      title: "Project-Based Staffing",
      desc: "For businesses hiring talent for implementation work, expansion projects, technical rollouts, or time-bound business initiatives.",
      icon: <Building className="w-6 h-6 text-gold" />
    },
    {
      title: "Temporary Staffing Support",
      desc: "For coverage during absences, seasonal peaks, workload fluctuations, and temporary operational demand.",
      icon: <Users className="w-6 h-6 text-gold" />
    },
    {
      title: "Specialist Contract Hiring",
      desc: "For niche or skilled roles needed for a defined timeframe rather than a permanent appointment.",
      icon: <Award className="w-6 h-6 text-gold" />
    },
    {
      title: "Contract-to-Extension Possibilities",
      desc: "For businesses that may begin with a flexible staffing model and later decide to extend or restructure the engagement based on evolving need.",
      icon: <TrendingUp className="w-6 h-6 text-gold" />
    }
  ];

  const roles = [
    {
      category: "Operational & Administrative Roles",
      list: [
        "Administrative Support Staff",
        "Operations Coordinators",
        "Customer Service Professionals",
        "Office Support Roles",
        "Scheduling and Back-Office Staff"
      ]
    },
    {
      category: "Industrial & Workforce Support Roles",
      list: [
        "Warehouse and Logistics Staff",
        "Supply Chain Support Roles",
        "Production and Operations Staff",
        "Quality Support Roles",
        "Site and Project Support Staff"
      ]
    },
    {
      category: "Commercial Roles",
      list: [
        "Sales Support Professionals",
        "Business Development Support Roles",
        "Marketing Coordinators",
        "Client Service Roles",
        "Commercial Operations Staff"
      ]
    },
    {
      category: "Technical & Specialist Roles",
      list: [
        "IT Support Professionals",
        "Developers and Technical Specialists",
        "Data and Reporting Support",
        "Systems Implementation Staff",
        "Digital Operations Roles"
      ]
    },
    {
      category: "Professional Support Roles",
      list: [
        "HR Support Staff",
        "Finance Support Roles",
        "Recruiters and Talent Support Staff",
        "Project Coordinators",
        "Compliance Support Roles"
      ]
    }
  ];

  const benefits = [
    {
      title: "Greater Workforce Flexibility",
      desc: "Employers can scale teams up or down based on demand, timelines, and project needs without overcommitting permanent headcount.",
      icon: <ShieldCheck className="w-7 h-7 text-gold" />
    },
    {
      title: "Faster Access to Talent",
      desc: "Contract staffing often allows businesses to bring in support quickly when timing is critical.",
      icon: <Zap className="w-7 h-7 text-gold" />
    },
    {
      title: "Improved Business Continuity",
      desc: "Temporary workforce support helps employers maintain service levels, team productivity, and operational flow during periods of disruption or change.",
      icon: <Building className="w-7 h-7 text-gold" />
    },
    {
      title: "More Efficient Workforce Planning",
      desc: "Businesses can match talent needs more closely to project timelines, workload shifts, and operational realities.",
      icon: <Target className="w-7 h-7 text-gold" />
    },
    {
      title: "Access to Specialized Short-Term Skills",
      desc: "Employers can bring in relevant expertise for specific business needs without creating unnecessary long-term hiring obligations.",
      icon: <Award className="w-7 h-7 text-gold" />
    },
    {
      title: "Reduced Pressure on Internal Teams",
      desc: "A flexible workforce model can help reduce overload on permanent employees during busy periods, transitions, or growth phases.",
      icon: <Users className="w-7 h-7 text-gold" />
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Understand the Requirement",
      desc: "We begin by identifying the role scope, required skills, contract length, urgency, team context, and business priorities."
    },
    {
      num: "02",
      title: "Define the Staffing Need",
      desc: "We clarify whether the requirement is temporary, project-based, urgent, specialist, seasonal, or part of a broader workforce strategy."
    },
    {
      num: "03",
      title: "Source Relevant Talent",
      desc: "We activate targeted sourcing channels, recruiter networks, existing pipelines, and relevant talent pools to identify suitable candidates efficiently."
    },
    {
      num: "04",
      title: "Screen and Shortlist Candidates",
      desc: "We evaluate candidates for relevant experience, availability, communication, and practical role suitability before presenting a focused shortlist."
    },
    {
      num: "05",
      title: "Coordinate Hiring and Placement",
      desc: "We support interviews, client feedback, candidate coordination, and timing alignment so the staffing process moves smoothly."
    },
    {
      num: "06",
      title: "Support Ongoing Delivery",
      desc: "Where needed, we remain aligned during the placement period to support continuity, communication, and changing workforce requirements."
    }
  ];

  const pillars = [
    {
      title: "Speed With Structure",
      desc: "We move efficiently without sacrificing role understanding or candidate quality.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Flexible Workforce Thinking",
      desc: "We understand that not every hiring need should be solved with the same model, and we help employers choose the most practical option.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Broad Functional Coverage",
      desc: "We support contract staffing across multiple business functions and industries, making the service relevant to a wide range of hiring needs.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Quality-Focused Delivery",
      desc: "Even in faster hiring cycles, we focus on suitability, reliability, and alignment.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Responsive Communication",
      desc: "Urgent and temporary hiring needs require timely coordination, clear updates, and strong recruitment momentum.",
      icon: <ThumbsUp className="w-6 h-6" />
    },
    {
      title: "Modern Workforce Perspective",
      desc: "We support employers navigating the realities of project-based work, temporary demand, workforce fluctuations, and flexible staffing strategies.",
      icon: <Network className="w-6 h-6" />
    }
  ];

  const audiences = [
    {
      title: "Businesses With Fluctuating Workloads",
      desc: "Organizations that need to adapt workforce levels based on demand, seasonality, or operational change."
    },
    {
      title: "Project-Driven Teams",
      desc: "Companies needing skilled professionals for a defined implementation, launch, or delivery period."
    },
    {
      title: "Employers Managing Urgent Gaps",
      desc: "Businesses that need quick support to maintain continuity after resignations, absences, or sudden workload increases."
    },
    {
      title: "Organizations Seeking Greater Agility",
      desc: "Employers who want more workforce flexibility without relying solely on permanent hiring."
    },
    {
      title: "Companies Testing Workforce Expansion Carefully",
      desc: "Businesses that want to manage staffing in a staged, practical way while staying responsive to change."
    }
  ];

  const faqs = [
    {
      question: "What is contract staffing?",
      answer: "Contract staffing is a hiring model where businesses engage professionals for a temporary, project-based, seasonal, or defined-term need rather than a permanent full-time role."
    },
    {
      question: "When should a company use contract staffing?",
      answer: "A company should use contract staffing when it needs workforce flexibility, urgent hiring support, temporary coverage, project-based talent, or short-term specialist skills."
    },
    {
      question: "How is contract staffing different from permanent recruitment?",
      answer: "Contract staffing is designed for limited-term or flexible needs, while permanent recruitment is for long-term full-time roles within the company’s core workforce."
    },
    {
      question: "What types of roles can NAYA Staffing fill through contract staffing?",
      answer: "NAYA Staffing supports contract staffing across administrative, operational, technical, commercial, industrial, and professional support roles depending on employer needs."
    },
    {
      question: "Can contract staffing help with urgent hiring?",
      answer: "Yes. Contract staffing is often an effective solution for urgent workforce gaps, temporary demand spikes, and business continuity support."
    },
    {
      question: "Does NAYA Staffing support temporary and project-based hiring across industries?",
      answer: "Yes. NAYA Staffing supports contract staffing across a wide range of industries and workforce environments."
    }
  ];

  const relatedServices = [
    { name: "Permanent Recruitment", href: "/permanent-recruitment", desc: "Core long-term hiring solutions for ongoing business needs." },
    { name: "Executive Search", href: "/executive-search", desc: "Premium recruitment solutions for leadership and business-critical positions." },
    { name: "Recruitment Process Outsourcing (RPO)", href: "/recruitment-process-outsourcing", desc: "End-to-end recruitment management to scale your hiring operations." },
    { name: "Global Hiring & Remote Solutions", href: "/global-hiring", desc: "Simplify the path to international markets and remote hiring support." },
    { name: "Screening & Assessment", href: "/screening-assessment", desc: "Structured testing and evaluation to ensure quality hiring choices." },
    { name: "Startup Hiring Solutions", href: "/services", desc: "Adaptable recruitment pipelines configured to support fast growth environments." }
  ];

  const relatedMainPages = [
    { name: "Services Overview", href: "/services" },
    { name: "Employers & Solutions", href: "/employer-solutions" },
    { name: "Our Proven Process", href: "/our-proven-process" },
    { name: "Industries Overview", href: "/industries" },
    { name: "Contact Us", href: "/contact-us" }
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Flexible Workforce Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl xl:text-8xl font-black tracking-tighter mb-6 leading-none uppercase">
            <Typewriter>
              Contract Staffing for <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Speed, Agility, and Flexibility
              </span>
            </Typewriter>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
              NAYA Staffing’s Contract Staffing service helps employers access qualified talent for temporary, project-based, seasonal, and urgent hiring needs. Whether you need to fill short-term skill gaps, support business continuity, manage fluctuating workloads, or scale teams quickly, we provide a structured and reliable contract staffing solution built around flexibility and quality.
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
                Built for employers who need fast access to talent without compromising capability, professionalism, or hiring control.
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
                A Smarter Way <br className="hidden md:inline" />
                <span className="text-gold">to Build Workforce Flexibility</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            {/* Paragraphs Column */}
            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Businesses do not always need the same hiring model for every role. In many cases, companies need talent quickly for a defined period, a specific project, seasonal demand, temporary cover, or changing business conditions. In these situations, contract staffing provides a more flexible and commercially efficient solution than permanent hiring alone.
              </p>
              <p>
                NAYA Staffing’s Contract Staffing service is designed to help employers respond to workforce demand with greater speed and adaptability. We support organizations that need qualified professionals for short-term, temporary, or project-driven roles while still expecting reliability, capability, and role alignment.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                Rather than seeing contract staffing as a compromise, businesses increasingly use it as part of a broader workforce strategy. It allows teams to remain agile, keep operations moving, manage costs more effectively, and access talent exactly when and where it is needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHEN CONTRACT STAFFING IS THE RIGHT CHOICE */}
      <section className="py-32 bg-navy relative overflow-hidden border-t border-white/5">
        <div className="btn-rotating-border absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 btn-auto-sheen border border-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2 btn-auto-sheen border border-white/5">
              Decision Metrics
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              When to Use <span className="text-gold">Contract Staffing</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Contract Staffing is the right solution when your business needs talent for a specific period, a changing workload, or a situation where speed and flexibility are critical.
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
                  <h3 className="text-white font-black text-xl leading-snug group-hover:text-gold transition-colors tracking-tight">
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

      {/* 4. TYPES OF CONTRACT STAFFING NEEDS WE SUPPORT */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Flexible Hiring Models We <span className="text-gold">Support</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Contract staffing can take different forms depending on the employer’s operational needs, hiring urgency, and workforce model.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-8">
            {models.map((model, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-500 flex flex-col h-full justify-between">
                <div className="space-y-6">
                  <div className="btn-rotating-border w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/5 group-hover:text-white hover:text-gold transition-all duration-500 btn-auto-sheen border border-white/5">
                    {model.icon}
                  </div>
                  <h3 className="text-white font-black text-lg leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                    {model.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {model.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ROLES WE HELP FILL */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Contract Roles We <span className="text-gold">Help Employers Hire</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports contract staffing across a wide range of roles and functions depending on business demand, project scope, and hiring urgency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-8">
            {roles.map((roleGroup, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-white/[0.01] border border-white/5 hover:border-gold/20 transition-all duration-500 flex flex-col h-full">
                <h3 className="text-gold font-black text-xs uppercase tracking-widest mb-6 pb-4 border-b border-white/5 min-h-[50px] flex items-center">
                  {roleGroup.category}
                </h3>
                <ul className="space-y-4 grow">
                  {roleGroup.list.map((role, roleIdx) => (
                    <li key={roleIdx} className="flex items-start gap-3 text-slate-300 font-bold text-sm leading-relaxed group-hover:text-white transition-colors">
                      <div className="btn-rotating-border w-1.5 h-1.5 rounded-full bg-white/50 mt-2 shrink-0 btn-auto-sheen border border-white/5"></div>
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHAT EMPLOYERS GAIN FROM OUR CONTRACT STAFFING SERVICE */}
      <section className="py-32 bg-navy-dark relative overflow-hidden border-t border-white/5">
        <div className="btn-rotating-border absolute top-1/2 right-0 w-[500px] h-[500px] bg-white/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 btn-auto-sheen border border-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
            
            {/* Sticky Header Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8 animate-fade-up">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-2 shadow-xl backdrop-blur-md btn-auto-sheen border border-white/5">
                Strategic Benefits
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                What Contract <br />Staffing <span className="text-gold">Delivers.</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-24 bg-white/5 rounded-full shadow-lg shadow-gold/20 btn-auto-sheen border border-white/5"></div>
              <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed border-l-2 border-white/10 pl-8 max-w-lg">
                Contract staffing gives businesses more than temporary coverage. When managed well, it provides agility, continuity, cost control, and faster access to the talent needed to keep work moving.
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

      {/* 7. OUR CONTRACT STAFFING PROCESS */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-28 space-y-6">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2 btn-auto-sheen border border-white/5">
              Our Methodology
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Our Contract <span className="text-gold">Staffing Process</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Our contract staffing process is designed to help employers secure relevant talent quickly while maintaining quality, role fit, and clear communication throughout the hiring cycle.
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
                  <h4 className="text-2xl font-black text-white mb-4 group-hover:text-gold transition-colors tracking-tight leading-tight">
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

      {/* 8. WHY CHOOSE NAYA STAFFING FOR CONTRACT STAFFING */}
      <section className="py-32 bg-navy-dark relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose NAYA Staffing <span className="text-gold">for Contract Staffing</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Flexible hiring only works well when the recruitment partner understands timing, quality, communication, and workforce context. NAYA Staffing’s contract staffing approach is built around those realities.
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

      {/* 9. CONTRACT STAFFING VS PERMANENT RECRUITMENT */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
              Contract Staffing vs <span className="text-gold">Permanent Recruitment</span>
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto"></div>
          </div>
          <div className="space-y-8 text-slate-300 font-medium text-lg leading-relaxed text-center">
            <p>
              Contract Staffing is designed for temporary, flexible, project-based, seasonal, or urgent workforce needs. It is most effective when the business requires talent for a defined period or a changing workload rather than a permanent appointment.
            </p>
            <p>
              Permanent Recruitment is better suited for long-term hiring where the goal is stability, ongoing contribution, team continuity, and sustained growth.
            </p>
            <p className="text-slate-400 border-t border-white/5 pt-8 font-semibold italic text-base">
              Both services are valuable, and many businesses use both depending on the role. NAYA Staffing helps employers choose the right hiring model based on urgency, timeline, budget, and long-term workforce planning.
            </p>
          </div>
        </div>
      </section>

      {/* 10. WHO THIS SERVICE IS BEST FOR */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Who Contract Staffing <span className="text-gold">Is Best For</span>
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

      {/* 11. INDUSTRY COVERAGE SECTION */}
      <section className="py-24 relative overflow-hidden bg-navy border-t border-white/5">
        <div className="container mx-auto px-6 max-w-5xl text-center space-y-8 animate-fade-up">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
              Cross-Industry Competence
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              Contract Staffing Across <span className="text-gold">Diverse Industries</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-slate-400 text-lg leading-relaxed font-semibold max-w-4xl mx-auto">
              NAYA Staffing provides contract staffing support across a broad range of industries including information technology, healthcare, industrial, hospitality, professional services, education, insurance, retail and e-commerce, construction, marketing, and sales-led environments. This allows employers to access flexible workforce support across both operational and specialist business functions.
            </p>
            <div className="pt-6">
               <Link href="/industries" className="btn-rotating-border px-10 py-5 bg-white/5 hover:bg-white/10 text-white hover:text-gold font-black rounded-full transition-all inline-flex items-center gap-4 uppercase tracking-[0.2em] text-xs btn-auto-sheen border border-white/5">
                  Explore Industries We Serve <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
        </div>
      </section>

      {/* 12. FAQ SECTION */}
      <section className="bg-navy-dark py-32 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="text-center mb-20 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-6 shadow-xl backdrop-blur-md btn-auto-sheen border border-white/5">
                Contract Staffing FAQ
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

      {/* 13. INTERNAL LINKING SECTION */}
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

      {/* 14. FINAL CTA SECTION */}
      <section className="py-32 relative overflow-hidden bg-navy border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="btn-rotating-border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.03] blur-[200px] rounded-full group-hover:bg-white/[0.05] transition-all duration-1000 btn-auto-sheen border border-white/5"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-navy-light/10 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-panel p-12 md:p-24 rounded-[4rem] text-center border border-gold/20 shadow-2xl shadow-gold/10">
            <div className="btn-rotating-border inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 text-white hover:text-gold mb-10 shadow-2xl shadow-gold/30 btn-auto-sheen border border-white/5">
              <Zap className="w-12 h-12 animate-pulse" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Stay Agile With Smarter <br/>
              <span className="text-gold">Workforce Support</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              When your hiring needs are temporary, urgent, project-based, or changing, flexibility matters. NAYA Staffing helps employers secure relevant contract talent quickly and professionally so teams can keep moving with confidence.
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
