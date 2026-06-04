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
  title: "Headhunting Services for Hard-to-Fill & Specialist Roles | NAYA Staffing",
  description: "NAYA Staffing provides headhunting services to help employers reach passive candidates, specialist talent, and hard-to-fill roles through targeted, proactive recruitment outreach.",
  keywords: [
    "headhunting services",
    "headhunting agency",
    "professional headhunters",
    "targeted recruitment services",
    "passive candidate sourcing",
    "specialist talent headhunting",
    "hard-to-fill recruitment",
    "direct search recruitment",
    "candidate outreach services",
    "talent headhunting firm",
    "niche role recruitment",
    "proactive recruitment support",
    "direct candidate approach",
    "competitor talent sourcing",
    "senior specialist hiring",
    "hard-to-reach talent recruitment"
  ]
};

export default function HeadhuntingServicesPage() {
  const reasons = [
    {
      title: "Many Strong Candidates Are Passive",
      desc: "Some of the most capable professionals are not actively applying for jobs, which means traditional advertising may never reach them.",
      icon: <Globe className="w-8 h-8 text-gold" />
    },
    {
      title: "Specialist Roles Need Precision",
      desc: "When a role requires a very specific background, targeted outreach often works better than broad candidate collection.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      title: "Competitive Markets Require Proactive Search",
      desc: "In high-demand sectors, employers may need to approach talent directly rather than wait for interest to appear.",
      icon: <TrendingUp className="w-8 h-8 text-gold" />
    },
    {
      title: "It Improves Access to Hard-to-Reach Talent",
      desc: "Headhunting helps employers identify candidates beyond the usual databases and application pools.",
      icon: <Users className="w-8 h-8 text-gold" />
    },
    {
      title: "It Strengthens Hiring Control",
      desc: "Instead of depending only on whoever applies, employers can be more deliberate about who enters the pipeline.",
      icon: <ShieldCheck className="w-8 h-8 text-gold" />
    },
    {
      title: "It Supports Faster Movement on Difficult Roles",
      desc: "When the right outreach strategy is in place, headhunting can create more direct traction on roles that otherwise remain open too long.",
      icon: <Clock className="w-8 h-8 text-gold" />
    }
  ];

  const useCases = [
    {
      title: "When the Role Is Hard to Fill",
      desc: "If a position stays open because relevant candidates are difficult to find, headhunting can create a more direct search route."
    },
    {
      title: "When Passive Candidates Are Needed",
      desc: "If the strongest-fit candidates are likely to be employed and not actively searching, proactive outreach becomes essential."
    },
    {
      title: "When Talent Competition Is High",
      desc: "In crowded hiring markets, employers need more than visibility. They need targeted access and stronger candidate engagement."
    },
    {
      title: "When the Role Is Specialist or Niche",
      desc: "For positions requiring rare combinations of skills, industry exposure, or technical background, headhunting can improve talent accuracy."
    },
    {
      title: "When Speed and Precision Both Matter",
      desc: "When the role is business-important and delays are costly, a focused direct-search method may be more effective than waiting for applications."
    },
    {
      title: "When Standard Recruitment Has Produced Weak Results",
      desc: "If job ads, existing sourcing, or general recruitment channels are not generating strong-fit candidates, headhunting can broaden and sharpen the search."
    }
  ];

  const servicesInclude = [
    {
      title: "Targeted Candidate Identification",
      desc: "Finding relevant professionals based on role requirements, market relevance, and skill alignment.",
      icon: <Target className="w-6 h-6 text-gold" />
    },
    {
      title: "Passive Candidate Outreach",
      desc: "Directly approaching candidates who are not actively applying but may be open to the right opportunity.",
      icon: <Globe className="w-6 h-6 text-gold" />
    },
    {
      title: "Niche and Specialist Talent Search",
      desc: "Focused search support for roles requiring rare, highly specific, or competitive skill combinations.",
      icon: <Cpu className="w-6 h-6 text-gold" />
    },
    {
      title: "Hard-to-Fill Role Search Support",
      desc: "A more proactive approach for positions that have remained difficult to close through standard recruitment.",
      icon: <Briefcase className="w-6 h-6 text-gold" />
    },
    {
      title: "Candidate Interest Qualification",
      desc: "Early-stage outreach and response handling to identify candidates with genuine interest and relevant alignment.",
      icon: <ShieldCheck className="w-6 h-6 text-gold" />
    },
    {
      title: "Shortlist Development Through Direct Search",
      desc: "Building a stronger shortlist from approached and qualified candidates rather than relying only on applicants.",
      icon: <Users className="w-6 h-6 text-gold" />
    },
    {
      title: "Connection to Wider Recruitment Services",
      desc: "Headhunting can work alongside executive search, permanent recruitment, technical recruitment, sales recruitment, and screening support depending on the role.",
      icon: <Activity className="w-6 h-6 text-gold" />
    }
  ];

  const benefits = [
    {
      title: "Access to Passive Talent",
      desc: "Employers can reach candidates who may never enter the process through job applications alone.",
      icon: <Globe className="w-7 h-7 text-gold" />
    },
    {
      title: "Stronger Role Precision",
      desc: "Targeted search can improve the relevance of the candidate pool, especially for specialist or high-value roles.",
      icon: <Target className="w-7 h-7 text-gold" />
    },
    {
      title: "Better Results for Hard-to-Fill Positions",
      desc: "When the market is difficult, headhunting creates a more proactive route toward traction.",
      icon: <Briefcase className="w-7 h-7 text-gold" />
    },
    {
      title: "More Deliberate Talent Engagement",
      desc: "The employer is not limited to whoever sees and responds to a job ad. The search becomes more intentional.",
      icon: <Settings className="w-7 h-7 text-gold" />
    },
    {
      title: "Improved Speed on Critical Searches",
      desc: "A direct outreach approach can sometimes shorten the time spent waiting for suitable candidates to appear.",
      icon: <Clock className="w-7 h-7 text-gold" />
    },
    {
      title: "Greater Hiring Confidence",
      desc: "A more targeted and structured search process helps decision-makers feel more confident in the quality of the shortlist.",
      icon: <ShieldCheck className="w-7 h-7 text-gold" />
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Understand the Search Requirement",
      desc: "We begin by understanding the role, market challenge, skill priorities, business context, and why a headhunting approach is appropriate."
    },
    {
      num: "02",
      title: "Define the Candidate Target",
      desc: "We align on the type of candidate needed, likely market sources, role comparables, and where relevant talent may currently sit."
    },
    {
      num: "03",
      title: "Activate Direct Search and Outreach",
      desc: "We identify relevant professionals and begin structured outreach with messaging aligned to the opportunity and target audience."
    },
    {
      num: "04",
      title: "Qualify Interest and Fit",
      desc: "We assess early response quality, relevance, and candidate openness before moving forward."
    },
    {
      num: "05",
      title: "Build and Refine the Shortlist",
      desc: "We shape a more focused candidate list based on actual interest, role alignment, and practical suitability."
    },
    {
      num: "06",
      title: "Support Better Hiring Progress",
      desc: "Our goal is to help employers gain traction faster on difficult searches and move forward with stronger candidate visibility."
    }
  ];

  const pillars = [
    {
      title: "Proactive Recruitment Mindset",
      desc: "We help employers move beyond passive candidate collection and into a more deliberate talent search model.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Focus on Hard-to-Reach Talent",
      desc: "Our headhunting support is built for roles where the best candidates may not be actively applying.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Specialist and Competitive Market Awareness",
      desc: "We understand that difficult roles need sharper search strategy and more focused outreach.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Structured Candidate Qualification",
      desc: "Headhunting is not just about outreach volume. It is about meaningful outreach that produces relevant, qualified talent flow.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Useful Connection to Other Services",
      desc: "Headhunting can naturally support executive search, permanent hiring, technical recruitment, sales recruitment, and wider staffing strategy.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Premium, Professional Delivery",
      desc: "Direct candidate outreach reflects on the employer brand, so the process should feel polished, credible, and well-managed.",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const audiences = [
    {
      title: "Employers Hiring for Hard-to-Fill Roles",
      desc: "Businesses that need stronger access to candidates for positions that remain difficult to close."
    },
    {
      title: "Companies Seeking Passive Talent",
      desc: "Organizations that want to reach professionals who are not actively applying but may be open to the right move."
    },
    {
      title: "Businesses Operating in Competitive Talent Markets",
      desc: "Employers competing for specialist or in-demand candidates where standard recruitment alone may be too limited."
    },
    {
      title: "Teams Hiring for Specialist or Senior Non-Executive Roles",
      desc: "Companies needing targeted search support outside mass-market recruitment and outside purely leadership-level executive search."
    },
    {
      title: "Employers Wanting More Deliberate Candidate Access",
      desc: "Businesses that want greater control over who enters the hiring pipeline rather than depending only on inbound response."
    }
  ];

  const relatedServices = [
    { name: "Executive Search", href: "/executive-search", desc: "Premium recruitment solutions for leadership and business-critical positions." },
    { name: "Permanent Recruitment", href: "/permanent-recruitment", desc: "Core long-term hiring solutions for ongoing business needs." },
    { name: "Technical Recruitment", href: "/technical-recruitment", desc: "Specialist hiring support across IT, software, and engineering roles." },
    { name: "Sales Recruitment", href: "/sales-recruitment", desc: "Targeted recruitment services for commercial and revenue teams." },
    { name: "Screening & Assessment", href: "/screening-assessment", desc: "Structured candidate screening and evaluation support." },
    { name: "Talent Mapping", href: "/talent-mapping", desc: "Strategic market intelligence and recruitment planning services." },
    { name: "Recruitment Process Outsourcing (RPO)", href: "/recruitment-process-outsourcing", desc: "End-to-end recruitment management to scale your hiring operations." },
    { name: "Global Hiring", href: "/global-hiring", desc: "Strategic international recruitment solutions across borders." },
    { name: "Startup Hiring Solutions", href: "/startup-hiring-solutions", desc: "Flexible, growth-aware recruitment support for founders." }
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
      question: "What are headhunting services?",
      answer: "Headhunting services are proactive recruitment services focused on identifying and directly approaching candidates who may not be actively applying for jobs, especially for specialist or hard-to-fill roles."
    },
    {
      question: "When should a company use headhunting?",
      answer: "A company should use headhunting when a role is difficult to fill, the best candidates are passive, the market is highly competitive, or standard recruitment methods are not generating strong-fit talent."
    },
    {
      question: "How is headhunting different from standard recruitment?",
      answer: "Standard recruitment often depends more on job ads and inbound applicants, while headhunting relies on targeted candidate identification and direct outreach."
    },
    {
      question: "How is headhunting different from executive search?",
      answer: "Headhunting is usually a targeted outreach method for specialist, senior, or competitive roles across levels, while executive search is more focused on leadership, confidential, and high-impact senior appointments."
    },
    {
      question: "Can headhunting help with passive candidates?",
      answer: "Yes. One of the main strengths of headhunting is reaching candidates who are not actively applying but may be open to the right opportunity."
    },
    {
      question: "Does NAYA Staffing provide headhunting support across industries?",
      answer: "Yes. NAYA Staffing can position headhunting support across a broad range of industries and specialist hiring environments."
    }
  ];

  const marqueeDimensions = [
    "Passive Candidate Outreach", "Direct Search Precision", "Niche Talent Sourcing", "Shortlist Qualification",
    "Market Intelligence Sourcing", "Competitor Talent Sourcing", "Precision Targeting", "Direct Candidate Approach"
  ];

  return (
    <main className="bg-[#040814] text-white min-h-screen selection:bg-gold selection:text-navy-dark">
      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <VideoBackground 
          src="/videos/hero.mp4" 
          overlayOpacity="bg-navy-dark/85"
        />
        
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 blur-[120px] rounded-full animate-pulse transition-all duration-5000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-navy-light/20 blur-[150px] rounded-full animate-float transition-all duration-7000"></div>

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-4xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6 backdrop-blur-md">
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Targeted Talent Outreach</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none uppercase">
              Headhunting Services for <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Hard-to-Fill & High-Value Hires
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed mb-10">
              NAYA Staffing’s Headhunting Services help employers reach high-potential candidates who may not be actively applying through traditional recruitment channels. Whether you are hiring for a specialist position, a competitive market role, or a critical hire where the right talent is difficult to find, we provide proactive outreach and targeted search support designed to improve access to stronger candidates.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contact-us" 
                className="group relative px-8 py-4 bg-gold hover:bg-gold-hover text-navy-dark font-bold rounded-full transition-all duration-300 overflow-hidden shadow-2xl shadow-gold/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Schedule Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                href="/become-a-client" 
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 transition-all duration-300 backdrop-blur-xl"
              >
                Become a Client
              </Link>
            </div>
            <div className="pt-10 border-t border-white/5 mt-10 max-w-xl">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 leading-loose">
                Built for employers who need direct access to passive talent, specialist candidates, and hard-to-reach professionals in competitive hiring markets.
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
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Heading Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold">
                Overview
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                A More Proactive Way <br className="hidden md:inline" />
                <span className="text-gold">to Reach the Right Talent</span>
              </h2>
              <div className="h-1.5 w-20 bg-gold rounded-full opacity-60"></div>
            </div>

            {/* Paragraphs Column */}
            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Not every strong candidate is actively searching for a new role. In many markets, the best-fit talent is already employed, not responding to public job ads, and only open to opportunities when the approach is relevant, credible, and well-positioned. That creates a challenge for employers relying only on inbound applications.
              </p>
              <p>
                Headhunting helps solve that problem by moving recruitment from passive attraction to proactive outreach. Instead of waiting for candidates to apply, employers can engage relevant professionals directly, especially when the role is specialist, difficult to fill, commercially important, or operating in a highly competitive talent market.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                NAYA Staffing’s Headhunting Services are designed to help businesses reach those candidates more effectively. We support targeted talent identification, direct candidate approach, and role-aligned outreach that helps employers access talent they may not reach through standard hiring methods alone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT HEADHUNTING MEANS */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-8">
          <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold">
            The Definition
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
            What Are <span className="text-gold">Headhunting Services?</span>
          </h2>
          <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-semibold">
            <p>
              Headhunting is a proactive recruitment method used to identify and approach candidates directly rather than relying only on job advertisements or inbound applications. It is particularly useful when a role requires specific experience, niche capability, or access to passive candidates who are not actively looking.
            </p>
            <p>
              Unlike broad recruitment campaigns, headhunting is more targeted. The process focuses on finding people with relevant backgrounds, identifying where they may currently sit in the market, and engaging them through professional outreach that positions the opportunity clearly.
            </p>
            <p className="text-slate-400 border-t border-white/5 pt-8 font-normal italic text-base">
              For employers, this creates a more focused route to talent. It helps open access to candidates who may otherwise remain outside the normal application flow and can be especially valuable when speed, quality, and role specificity all matter.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHY HEADHUNTING MATTERS */}
      <section className="py-32 bg-navy-dark relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2">
              Why Direct Sourcing
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Headhunting Matters in <span className="text-gold">Competitive Recruitment</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Some hiring needs cannot be solved effectively through standard sourcing alone. Headhunting matters when the role requires stronger market reach and more direct access to relevant talent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6">
                  <div className="w-14 h-14 bg-gold/5 border border-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gold group-hover:text-navy-dark transition-all duration-500">
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

      {/* 5. WHEN HEADHUNTING IS THE RIGHT CHOICE */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              When to Use <span className="text-gold">Headhunting Services</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Headhunting is especially valuable when the hiring challenge is specific, competitive, or unlikely to be solved by standard posting-based recruitment alone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              What Our Headhunting Services <span className="text-gold">Can Include</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              The exact scope can vary by role and hiring need, but headhunting support can include several practical direct-search elements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {servicesInclude.map((service, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-500 flex flex-col h-full justify-between">
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/5 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-navy-dark transition-all duration-500">
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

      {/* 7. WHAT EMPLOYERS GAIN FROM HEADHUNTING */}
      <section className="py-32 bg-navy relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gold/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Sticky Header Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8 animate-fade-up">
              <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-2 shadow-xl backdrop-blur-md">
                Search Gains
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                What Headhunting <br />Solutions <span className="text-gold">Deliver.</span>
              </h2>
              <div className="h-1.5 w-24 bg-gold rounded-full shadow-lg shadow-gold/20"></div>
              <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed border-l-2 border-white/10 pl-8 max-w-lg">
                Headhunting gives employers access, precision, and search control when traditional hiring methods are not enough.
              </p>
            </div>

            {/* Scrollable Benefits Column */}
            <div className="lg:col-span-7 space-y-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="group p-10 glass-panel rounded-[48px] border-white/5 hover:border-gold/30 hover:bg-white/4 transition-all duration-700 hover:shadow-2xl hover:shadow-gold/5 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden animate-fade-up">
                  <div className="shrink-0 w-14 h-14 rounded-[20px] bg-gold/10 flex items-center justify-center border border-gold/20 group-hover:bg-gold group-hover:text-navy-dark transition-all duration-500 shadow-xl">
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

      {/* 8. OUR HEADHUNTING APPROACH */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-28 space-y-6">
            <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2">
              Our Proactive Outreach
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Our Approach to <span className="text-gold">Headhunting</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Our headhunting approach is designed to help employers move from open-market advertising toward more focused candidate access. We combine role understanding, targeted search thinking, and structured outreach to improve the quality of difficult or competitive hires.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="group relative p-12 rounded-[48px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col h-full justify-between overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold/5 blur-3xl rounded-full group-hover:bg-gold/10 transition-all duration-700"></div>
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

      {/* 9. WHY CHOOSE NAYA STAFFING FOR HEADHUNTING */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose NAYA Staffing <span className="text-gold">for Headhunting Services</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Headhunting works best when it is targeted, role-aware, and professionally executed. NAYA Staffing’s approach is designed to make direct search more credible, practical, and effective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <div key={i} className="group p-8 rounded-[36px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-500 hover:shadow-xl flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-gold/5 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-navy-dark transition-all">
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

      {/* 10. HEADHUNTING VS STANDARD RECRUITMENT */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
              Headhunting vs <span className="text-gold">Standard Recruitment</span>
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto"></div>
          </div>
          <div className="space-y-8 text-slate-300 font-medium text-lg leading-relaxed text-center">
            <p>
              Standard recruitment often relies on job postings, inbound applicants, database search, and broader sourcing methods. That works well for many hiring needs, especially when the talent market is active and candidate availability is strong.
            </p>
            <p>
              Headhunting is different because it is more direct and more selective. It focuses on identifying specific candidates, approaching them proactively, and creating a targeted shortlist through outreach rather than waiting for applications alone.
            </p>
            <p className="text-slate-400 border-t border-white/5 pt-8 font-semibold italic text-base">
              This does not mean one method replaces the other. In many cases, headhunting strengthens the hiring process by complementing standard recruitment when passive talent access or niche search precision is needed.
            </p>
          </div>
        </div>
      </section>

      {/* 11. HEADHUNTING VS EXECUTIVE SEARCH */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
              Headhunting vs <span className="text-gold">Executive Search</span>
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto"></div>
          </div>
          <div className="space-y-8 text-slate-300 font-medium text-lg leading-relaxed text-center">
            <p>
              Headhunting and Executive Search are closely related, but they are not the same. Headhunting is typically centered on direct outreach to targeted candidates for specialist, senior, competitive, or hard-to-fill roles across different levels.
            </p>
            <p>
              Executive Search is usually more focused on leadership, confidential, and high-impact appointments where broader strategic evaluation, discretion, and a more premium search process are central.
            </p>
            <p className="text-slate-400 border-t border-white/5 pt-8 font-semibold italic text-base">
              In simple terms, headhunting is the targeted outreach method. Executive Search is the more leadership-focused, higher-touch strategic service. Your services structure includes both, so the distinction should remain clear across the site.
            </p>
          </div>
        </div>
      </section>

      {/* 12. WHO THIS SERVICE IS BEST FOR */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Who Headhunting Services <span className="text-gold">Is Best For</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* 13. SCROLLING MARQUEE OF TARGETED SEARCH FOCUS */}
      <section className="bg-navy py-24 border-t border-white/5">
        <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
          <h3 className="text-3xl font-black text-white tracking-tighter">Targeted <span className="text-gold">Search.</span></h3>
          <p className="text-slate-500 font-bold">Key Sourcing Focus</p>
        </div>
        
        <div className="relative flex overflow-hidden">
          <style dangerouslySetInnerHTML={{ __html: `@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } .animate-marquee { display: flex; width: max-content; animation: marquee 60s linear infinite; }` }} />
          <div className="animate-marquee whitespace-nowrap gap-12 py-4">
            {[...marqueeDimensions, ...marqueeDimensions].map((dim, i) => (
              <span key={i} className="text-4xl md:text-6xl font-black text-white/5 hover:text-gold/20 transition-colors cursor-default uppercase tracking-tighter mr-12">
                {dim}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 14. INDUSTRY COVERAGE SECTION */}
      <section className="py-24 relative overflow-hidden bg-navy-dark border-t border-white/5">
        <div className="container mx-auto px-6 max-w-5xl text-center space-y-8 animate-fade-up">
            <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold">
              Cross-Industry Competence
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              Headhunting Support Across <span className="text-gold">Diverse Industries</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-slate-400 text-lg leading-relaxed font-semibold max-w-4xl mx-auto">
              NAYA Staffing’s broader site structure is intentionally built around wide service and industry coverage rather than a narrow niche, which makes headhunting especially relevant across multiple sectors. The approved pages also show broad industry coverage across information technology, healthcare, industrial, hospitality, professional services, education, insurance, retail, construction, marketing, and sales-related environments, allowing headhunting to be positioned as a cross-sector service wherever hard-to-reach talent matters.
            </p>
            <div className="pt-6">
               <Link href="/our-industries" className="px-10 py-5 bg-gold hover:bg-gold-hover text-navy-dark font-black rounded-full transition-all inline-flex items-center gap-4 uppercase tracking-[0.2em] text-xs">
                  Explore Industries We Serve <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
        </div>
      </section>

      {/* 15. FAQ SECTION */}
      <section className="bg-navy py-32 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="text-center mb-20 space-y-6">
              <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-6 shadow-xl backdrop-blur-md">
                Headhunting FAQ
              </div>
              <h2 className="text-5xl font-black mb-6">Frequently <br/><span className="text-gold text-shimmer">Asked Questions</span></h2>
              <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
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

      {/* 16. INTERNAL LINKING SECTION */}
      <section className="py-24 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
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

      {/* 17. FINAL CTA SECTION */}
      <section className="py-32 relative overflow-hidden bg-navy border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gold/[0.03] blur-[200px] rounded-full group-hover:bg-gold/[0.05] transition-all duration-1000"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-navy-light/10 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-panel p-12 md:p-24 rounded-[4rem] text-center border border-gold/20 shadow-2xl shadow-gold/10">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gold text-navy-dark mb-10 shadow-2xl shadow-gold/30">
              <Rocket className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Reach Stronger Talent Through <br/>
              <span className="text-gold">Smarter Direct Search</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              When the right candidates are not applying on their own, a more targeted recruitment approach becomes essential. NAYA Staffing’s Headhunting Services help employers access passive talent, improve search precision, and move hard-to-fill hiring projects forward with greater confidence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link 
                href="/contact-us" 
                className="group w-full sm:w-auto px-16 py-8 bg-gold hover:bg-gold-hover text-navy-dark font-black rounded-[32px] transition-all flex items-center justify-center gap-4 shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-[0.3em] text-[10px]"
              >
                Schedule Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-500" />
              </Link>
              <Link 
                href="/become-a-client" 
                className="w-full sm:w-auto px-16 py-8 bg-white/5 hover:bg-white/10 text-white font-black rounded-[32px] border border-white/10 transition-all backdrop-blur-xl uppercase tracking-[0.3em] text-[10px]"
              >
                Become a Client
              </Link>
              <Link 
                href="/contact-us" 
                className="w-full sm:w-auto px-16 py-8 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-gold hover:text-gold font-black rounded-[32px] transition-all uppercase tracking-[0.3em] text-[10px]"
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
