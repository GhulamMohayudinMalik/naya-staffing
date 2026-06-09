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
  LayoutGrid,
  GitBranch,
  Layers,
  Sparkles
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import TestimonialSlider from '@/components/TestimonialSlider';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "Recruitment Process Outsourcing (RPO) Services | Scalable Hiring Solutions | NAYA Staffing",
  description: "NAYA Staffing provides Recruitment Process Outsourcing (RPO) services for employers needing scalable, efficient, and strategic hiring support across ongoing, high-volume, and multi-role recruitment needs.",
  keywords: [
    "recruitment process outsourcing",
    "RPO services",
    "RPO recruitment",
    "recruitment outsourcing company",
    "outsourced recruitment solutions",
    "scalable hiring solutions",
    "talent acquisition outsourcing",
    "RPO provider",
    "embedded recruitment partner",
    "outsourced hiring support",
    "high-volume recruitment solutions"
  ]
};

export default function RpoPage() {
  const useCases = [
    {
      title: "Ongoing Hiring Demand",
      desc: "If your company regularly hires across departments or locations, RPO helps create consistency, better coordination, and stronger delivery across repeated recruitment activity.",
      icon: <Building className="w-8 h-8 text-gold" />
    },
    {
      title: "Rapid Growth or Expansion",
      desc: "When businesses scale quickly, enter new markets, launch new teams, or increase headcount significantly, RPO helps build recruitment capacity without overloading internal resources.",
      icon: <TrendingUp className="w-8 h-8 text-gold" />
    },
    {
      title: "High-Volume Recruitment Needs",
      desc: "RPO is especially useful for employers hiring multiple people within a short period or managing repeated hiring across similar role types.",
      icon: <Users className="w-8 h-8 text-gold" />
    },
    {
      title: "Recruitment Process Improvement",
      desc: "If hiring is slow, inconsistent, difficult to manage, or creating a poor candidate experience, RPO can bring greater structure, clarity, and operational efficiency.",
      icon: <Settings className="w-8 h-8 text-gold" />
    },
    {
      title: "Internal Team Capacity Gaps",
      desc: "Some businesses have limited in-house recruitment resources and need a partner that can extend hiring capability without requiring a full internal talent acquisition build-out.",
      icon: <UserCheck className="w-8 h-8 text-gold" />
    },
    {
      title: "Complex Multi-Stakeholder Hiring",
      desc: "RPO can support organizations where hiring involves multiple departments, approvals, workflows, or internal coordination points that need stronger process management.",
      icon: <Network className="w-8 h-8 text-gold" />
    }
  ];

  const models = [
    {
      title: "Full RPO",
      desc: "A broader outsourced recruitment solution where NAYA Staffing supports a significant portion or the full recruitment process across ongoing hiring needs.",
      icon: <Layers className="w-6 h-6 text-gold" />
    },
    {
      title: "Project-Based RPO",
      desc: "A focused RPO model for specific hiring campaigns, growth phases, location launches, department build-outs, or time-bound recruitment projects.",
      icon: <Target className="w-6 h-6 text-gold" />
    },
    {
      title: "Partial or Selective RPO",
      desc: "A flexible structure where NAYA Staffing supports key parts of the recruitment process such as sourcing, screening, pipeline management, or hiring coordination.",
      icon: <GitBranch className="w-6 h-6 text-gold" />
    },
    {
      title: "On-Demand RPO Support",
      desc: "A scalable model for businesses that need recruitment support during peak hiring periods or temporary expansion phases without a fully permanent outsourced structure.",
      icon: <Zap className="w-6 h-6 text-gold" />
    }
  ];

  const benefits = [
    {
      title: "Scalable Hiring Capacity",
      desc: "RPO helps businesses handle ongoing or increasing recruitment demand without relying solely on limited internal bandwidth.",
      icon: <TrendingUp className="w-7 h-7 text-gold" />
    },
    {
      title: "More Consistent Hiring Delivery",
      desc: "A more structured recruitment model improves process continuity, communication flow, and candidate management across multiple open roles.",
      icon: <ShieldCheck className="w-7 h-7 text-gold" />
    },
    {
      title: "Improved Recruitment Efficiency",
      desc: "RPO helps reduce friction in the hiring process by creating clearer workflows, stronger coordination, and better use of recruitment resources.",
      icon: <Clock className="w-7 h-7 text-gold" />
    },
    {
      title: "Stronger Candidate Experience",
      desc: "A more organized and responsive recruitment model improves communication, professionalism, and employer brand perception throughout the hiring journey.",
      icon: <ThumbsUp className="w-7 h-7 text-gold" />
    },
    {
      title: "Better Alignment With Business Goals",
      desc: "RPO allows recruitment activity to be managed with greater visibility and alignment to workforce planning, hiring priorities, and growth strategy.",
      icon: <Target className="w-7 h-7 text-gold" />
    },
    {
      title: "Flexible Support Across Growth Stages",
      desc: "Whether the business is scaling, stabilizing, or undergoing change, RPO offers a flexible way to strengthen hiring performance without a one-size-fits-all model.",
      icon: <Sparkles className="w-7 h-7 text-gold" />
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Understand the Hiring Environment",
      desc: "We begin by assessing current hiring needs, recruitment volume, business priorities, internal team structure, and key process challenges."
    },
    {
      num: "02",
      title: "Define the RPO Scope",
      desc: "We identify which parts of the hiring process need support and whether the solution should be full, project-based, partial, or on-demand."
    },
    {
      num: "03",
      title: "Build the Recruitment Workflow",
      desc: "We align on role management, sourcing strategy, candidate flow, communication expectations, process steps, and operational responsibilities."
    },
    {
      num: "04",
      title: "Launch Hiring Delivery",
      desc: "We activate the recruitment process, manage open roles, support sourcing and screening, and maintain hiring momentum across the agreed scope."
    },
    {
      num: "05",
      title: "Coordinate, Optimize, and Report",
      desc: "We help keep stakeholders aligned, manage communication flow, and support a more consistent recruitment experience as hiring activity progresses."
    },
    {
      num: "06",
      title: "Scale With Business Need",
      desc: "As hiring demand changes, the RPO model can expand, narrow, or shift in structure to remain aligned with business priorities."
    }
  ];

  const pillars = [
    {
      title: "Strategic Recruitment Thinking",
      desc: "We approach RPO as a hiring partnership shaped by business goals, not just vacancy management.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Flexible Service Design",
      desc: "Our RPO support can be tailored to different hiring volumes, growth stages, departments, and process requirements.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Process-Focused Delivery",
      desc: "We bring structure, clarity, and operational consistency to recruitment activity that may otherwise feel fragmented or difficult to manage.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Scalable Support Model",
      desc: "From project-based hiring campaigns to ongoing recruitment needs, our service is designed to scale with the client’s business.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Premium Candidate Experience",
      desc: "A more organized hiring process improves candidate communication and strengthens employer reputation in competitive talent markets.",
      icon: <ThumbsUp className="w-6 h-6" />
    },
    {
      title: "Broad Market and Role Coverage",
      desc: "We support recruitment across multiple industries, business functions, and role types, helping employers manage varied hiring needs under one service model.",
      icon: <Briefcase className="w-6 h-6" />
    }
  ];

  const audiences = [
    {
      title: "Growing Companies",
      desc: "Businesses increasing headcount and needing more hiring capacity without building a large internal recruitment team immediately."
    },
    {
      title: "High-Volume Hiring Environments",
      desc: "Organizations managing repeated or large-scale recruitment across multiple roles or departments."
    },
    {
      title: "Operationally Complex Employers",
      desc: "Companies where hiring involves multiple stakeholders, workflows, approvals, or internal coordination points."
    },
    {
      title: "Businesses Improving Hiring Performance",
      desc: "Employers that want to strengthen recruitment structure, candidate experience, consistency, and hiring efficiency."
    },
    {
      title: "Organizations Expanding Across Markets or Functions",
      desc: "Companies launching new teams, locations, service lines, or workforce initiatives that require stronger recruitment support."
    }
  ];

  const faqs = [
    {
      question: "What is Recruitment Process Outsourcing (RPO)?",
      answer: "Recruitment Process Outsourcing is a model where a recruitment partner supports all or part of a company’s hiring function in a more embedded, strategic, and scalable way."
    },
    {
      question: "When should a company use RPO?",
      answer: "A company should consider RPO when it has ongoing hiring needs, high-volume recruitment demand, rapid growth plans, process inefficiencies, or limited internal recruitment capacity."
    },
    {
      question: "How is RPO different from traditional recruitment?",
      answer: "Traditional recruitment usually focuses on individual vacancies, while RPO supports recruitment as an ongoing function with greater process structure, scalability, and operational involvement."
    },
    {
      question: "Can RPO be used for only part of the hiring process?",
      answer: "Yes. RPO can be structured to support all or part of the recruitment function depending on the employer’s needs."
    },
    {
      question: "Is RPO only for large enterprises?",
      answer: "No. While large organizations often use RPO, it can also benefit growing businesses, scaling startups, and mid-sized employers with repeated or complex hiring needs."
    },
    {
      question: "Does NAYA Staffing offer flexible RPO models?",
      answer: "Yes. NAYA Staffing can support full, project-based, partial, or on-demand RPO structures depending on the client’s hiring environment."
    }
  ];

  const relatedServices = [
    { name: "Executive Search", href: "/executive-search", desc: "Premium recruitment solutions for leadership and business-critical positions." },
    { name: "Permanent Recruitment", href: "/permanent-recruitment", desc: "Core long-term hiring solutions for ongoing business needs." },
    { name: "Contract Staffing", href: "/contract-staffing", desc: "Flexible staffing options for project-based and temporary talent needs." },
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Scalable Recruitment Partnership</span>
            </div>
            <h1 className="text-5xl md:text-6xl xl:text-8xl font-black tracking-tighter mb-6 leading-none uppercase">
            <Typewriter>
              Recruitment Process Outsourcing for <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Smarter, More Scalable Hiring
              </span>
            </Typewriter>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
              NAYA Staffing’s Recruitment Process Outsourcing (RPO) service helps employers strengthen hiring performance through a more structured, scalable, and strategically aligned recruitment model. Whether you need support for ongoing hiring, high-volume recruitment, rapid team expansion, or process improvement, our RPO solutions are designed to bring greater consistency, efficiency, and control to talent acquisition.
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
                Built for businesses that need more than occasional hiring support and want a stronger recruitment engine for long-term growth.
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
                A More Embedded Approach <br className="hidden md:inline" />
                <span className="text-gold">to Talent Acquisition</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            {/* Paragraphs Column */}
            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                As hiring needs grow, many businesses reach a point where traditional recruitment support alone is not enough. Managing multiple open roles, maintaining hiring momentum, improving candidate experience, coordinating stakeholders, and ensuring consistent recruitment quality can quickly become difficult without a more structured approach.
              </p>
              <p>
                Recruitment Process Outsourcing is designed to solve that challenge. Rather than supporting only one vacancy at a time, RPO provides a more integrated recruitment model in which NAYA Staffing supports part or all of an employer’s hiring function. This can include recruitment strategy, sourcing, screening, process coordination, talent pipeline support, candidate communication, and overall hiring delivery.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                The result is a more scalable and efficient talent acquisition approach that helps businesses hire more consistently, manage recruitment operations better, and align hiring activity more closely with broader business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT RPO MEANS */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-8">
          <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
            The Concept
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
            What Is <span className="text-gold">Recruitment Process Outsourcing?</span>
          </h2>
          <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-semibold">
            <p>
              Recruitment Process Outsourcing, often referred to as RPO, is a hiring model where a recruitment partner supports all or part of a company’s talent acquisition function. Instead of only working on isolated vacancies, the RPO model is designed to support ongoing recruitment activity in a more embedded, strategic, and process-driven way.
            </p>
            <p>
              Depending on the business need, RPO can be used to support specific departments, project-based hiring waves, rapid team growth, or broader recruitment operations across the organization. It is especially useful when a company needs more hiring capacity, better process control, stronger candidate flow, and more consistent recruitment outcomes.
            </p>
            <p className="text-slate-400 border-t border-white/5 pt-8 font-normal italic text-base">
              For employers, RPO creates a recruitment model that is more proactive than traditional contingent hiring and more flexible than building everything internally from the ground up.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHEN RPO IS THE RIGHT CHOICE */}
      <section className="py-32 bg-navy-dark relative overflow-hidden border-t border-white/5">
        <div className="btn-rotating-border absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 btn-auto-sheen border border-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2 btn-auto-sheen border border-white/5">
              Decision Metrics
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              When to Use <span className="text-gold">RPO</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              RPO is the right solution when recruitment is no longer occasional or simple and the business needs a more scalable and structured hiring approach.
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

      {/* 5. RPO MODELS WE SUPPORT */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Flexible RPO Models for <span className="text-gold">Different Hiring Needs</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              RPO does not need to look the same for every business. NAYA Staffing can structure RPO support based on the scale, urgency, and complexity of your hiring environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
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

      {/* 6. WHAT EMPLOYERS GAIN FROM OUR RPO SERVICE */}
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
                What RPO <br /><span className="text-gold">Delivers.</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-24 bg-white/5 rounded-full shadow-lg shadow-gold/20 btn-auto-sheen border border-white/5"></div>
              <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed border-l-2 border-white/10 pl-8 max-w-lg">
                RPO gives employers more than recruitment support. It helps create a more reliable hiring system that can scale with business growth and changing workforce needs.
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

      {/* 7. OUR RPO DELIVERY APPROACH */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-28 space-y-6">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2 btn-auto-sheen border border-white/5">
              Our Methodology
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              How Our <span className="text-gold">RPO Service Works</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Our RPO delivery approach is designed to align closely with the client’s hiring environment, internal workflows, and workforce goals. We focus on creating a practical, scalable solution rather than applying a generic outsourced model.
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

      {/* 8. WHY CHOOSE NAYA STAFFING FOR RPO */}
      <section className="py-32 bg-navy-dark relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose NAYA Staffing <span className="text-gold">for RPO</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              RPO works best when the recruitment partner understands not only how to fill roles, but how to support hiring as an ongoing business function. NAYA Staffing’s approach is designed around that broader objective.
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

      {/* 9. RPO VS TRADITIONAL RECRUITMENT */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
              RPO vs <span className="text-gold">Traditional Recruitment</span>
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto"></div>
          </div>
          <div className="space-y-8 text-slate-300 font-medium text-lg leading-relaxed text-center">
            <p>
              Traditional recruitment is often best suited for individual roles or occasional hiring needs, where an employer requires support filling a vacancy but does not need broader recruitment infrastructure.
            </p>
            <p>
              RPO is different because it supports recruitment as an ongoing process rather than a series of isolated searches. It is designed for businesses that need more hiring capacity, better coordination, stronger consistency, and a more embedded approach to talent acquisition.
            </p>
            <p className="text-slate-400 border-t border-white/5 pt-8 font-semibold italic text-base">
              This does not mean every business needs RPO. It means companies with repeated hiring demand, scaling plans, or process challenges may benefit from a model that goes beyond standard recruitment support.
            </p>
          </div>
        </div>
      </section>

      {/* 10. WHO THIS SERVICE IS BEST FOR */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Who RPO <span className="text-gold">Is Best For</span>
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
              RPO Support Across <span className="text-gold">Diverse Industries</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-slate-400 text-lg leading-relaxed font-semibold max-w-4xl mx-auto">
              NAYA Staffing provides RPO support across a broad range of industries including information technology, healthcare, industrial, hospitality, professional services, education, insurance, retail and e-commerce, construction, marketing, and sales-led business environments. This allows employers to build more scalable hiring systems across both high-volume and specialist recruitment needs.
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
                RPO FAQ
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
              <Settings className="w-12 h-12 animate-spin-slow text-navy-dark" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Build a Stronger Hiring Function <br/>
              <span className="text-gold">With the Right Recruitment Partner</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              When hiring becomes more frequent, more complex, or more important to business growth, a stronger recruitment model makes a measurable difference. NAYA Staffing’s RPO service helps employers create a more scalable, efficient, and business-aligned approach to talent acquisition.
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
