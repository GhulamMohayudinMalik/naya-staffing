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
  title: "Sales Recruitment Services for Commercial & Revenue Teams | NAYA Staffing",
  description: "NAYA Staffing provides sales recruitment services to help employers hire business development, account management, enterprise sales, commercial leadership, and other revenue-generating talent.",
  keywords: [
    "sales recruitment services",
    "sales recruitment agency",
    "sales hiring agency",
    "sales recruiters",
    "commercial recruitment services",
    "business development recruitment",
    "account manager recruitment",
    "enterprise sales hiring",
    "revenue team recruitment",
    "sales talent acquisition",
    "commercial hiring support",
    "B2B sales recruitment",
    "business development hiring",
    "account executive recruitment",
    "sales leadership hiring",
    "sales staffing solutions"
  ]
};

export default function SalesRecruitmentPage() {
  const reasons = [
    {
      title: "Sales Hires Directly Affect Revenue",
      desc: "Commercial roles often have a measurable impact on pipeline, conversions, account growth, and broader business performance.",
      icon: <TrendingUp className="w-8 h-8 text-gold" />
    },
    {
      title: "Strong Communication Alone Is Not Enough",
      desc: "Sales hiring is not just about confidence or presentation. It also requires role fit, commercial judgment, and alignment with the company’s market and sales model.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      title: "The Wrong Hire Can Be Expensive",
      desc: "A poor sales hire can create lost opportunities, weak client engagement, missed targets, and unnecessary hiring cost.",
      icon: <ShieldCheck className="w-8 h-8 text-gold" />
    },
    {
      title: "Sales Roles Vary Widely by Context",
      desc: "Enterprise sales, account management, outbound business development, inside sales, channel roles, and leadership positions all require different candidate profiles.",
      icon: <Settings className="w-8 h-8 text-gold" />
    },
    {
      title: "Commercial Talent Markets Can Be Competitive",
      desc: "Strong performers are often difficult to attract, particularly when the company is hiring for growth-stage, specialist, or leadership positions.",
      icon: <Globe className="w-8 h-8 text-gold" />
    },
    {
      title: "Revenue Teams Often Need to Scale Fast",
      desc: "When growth accelerates, the hiring process must support speed without sacrificing commercial quality.",
      icon: <Clock className="w-8 h-8 text-gold" />
    }
  ];

  const useCases = [
    {
      title: "When Building a New Sales Team",
      desc: "If the company is establishing a commercial function or expanding into a new revenue phase, specialized recruitment helps shape the team more effectively."
    },
    {
      title: "When Replacing Key Sales Talent",
      desc: "If a strong performer leaves, businesses often need a faster and more accurate route to a capable replacement."
    },
    {
      title: "When Scaling Revenue Functions Quickly",
      desc: "During growth periods, employers may need to hire multiple commercial roles across business development, client management, and sales leadership."
    },
    {
      title: "When General Recruitment Produces Weak Commercial Fit",
      desc: "If broad hiring channels bring applicants who sound good but do not match actual sales-role demands, a more specialist approach is needed."
    },
    {
      title: "When Hiring for Specialist or Senior Sales Roles",
      desc: "Enterprise sales, complex account management, and commercially strategic roles often require stronger search precision."
    },
    {
      title: "When Hiring Delays Affect Growth Plans",
      desc: "If open sales roles are slowing pipeline development, revenue execution, or market expansion, more focused recruitment can help."
    }
  ];

  const servicesInclude = [
    {
      title: "Sales Candidate Sourcing",
      desc: "Focused recruitment support for business development, sales, account management, and commercial roles.",
      icon: <Globe className="w-6 h-6 text-gold" />
    },
    {
      title: "Commercial Role Alignment Support",
      desc: "Helping ensure candidate search reflects the actual nature of the sales role, target customer, and revenue expectation.",
      icon: <Target className="w-6 h-6 text-gold" />
    },
    {
      title: "Shortlist Refinement for Sales Relevance",
      desc: "Supporting better filtering so employers spend time on candidates with stronger commercial alignment.",
      icon: <ShieldCheck className="w-6 h-6 text-gold" />
    },
    {
      title: "Hiring Support Across Sales Levels",
      desc: "Support for entry-level, mid-level, senior, and leadership positions across sales and commercial functions.",
      icon: <Users className="w-6 h-6 text-gold" />
    },
    {
      title: "Sales Team Build-Out Support",
      desc: "Recruitment support for businesses hiring multiple commercial roles during growth or restructuring.",
      icon: <TrendingUp className="w-6 h-6 text-gold" />
    },
    {
      title: "Connection to Other Recruitment Services",
      desc: "Sales Recruitment can work alongside permanent recruitment, headhunting, screening and assessment, employer branding, RPO, and startup hiring depending on the business context.",
      icon: <Activity className="w-6 h-6 text-gold" />
    },
    {
      title: "Support Across Different Sales Models",
      desc: "The service can support hiring across outbound sales, enterprise sales, account growth, relationship-led sales, and broader commercial functions.",
      icon: <Settings className="w-6 h-6 text-gold" />
    }
  ];

  const rolesCategories = [
    {
      title: "Business Development Roles",
      roles: ["Business Development Representatives", "Sales Development Representatives", "Outbound Sales Executives", "Lead Generation Professionals", "New Business Executives"]
    },
    {
      title: "Account Management Roles",
      roles: ["Account Managers", "Key Account Managers", "Client Relationship Managers", "Customer Growth Managers", "Strategic Account Professionals"]
    },
    {
      title: "Commercial Sales Roles",
      roles: ["Account Executives", "Inside Sales Professionals", "Enterprise Sales Executives", "Territory Sales Roles", "Commercial Development Staff"]
    },
    {
      title: "Sales Operations & Support Roles",
      roles: ["Sales Coordinators", "Revenue Operations Support Roles", "Sales Enablement Support", "Pipeline and CRM Support Roles"]
    },
    {
      title: "Sales Leadership Roles",
      roles: ["Sales Managers", "Head of Sales", "Commercial Managers", "Revenue Leaders", "Business Development Leaders"]
    }
  ];

  const benefits = [
    {
      title: "More Relevant Commercial Shortlists",
      desc: "Employers review candidates who are more closely aligned to the actual sales model, target audience, and role expectations.",
      icon: <Target className="w-7 h-7 text-gold" />
    },
    {
      title: "Improved Hiring Accuracy",
      desc: "A more specialized recruitment process helps reduce mismatch in performance-driven roles.",
      icon: <ShieldCheck className="w-7 h-7 text-gold" />
    },
    {
      title: "Stronger Revenue-Team Build-Out",
      desc: "Businesses can scale sales capability more effectively with hiring support designed for commercial growth.",
      icon: <TrendingUp className="w-7 h-7 text-gold" />
    },
    {
      title: "Greater Confidence in Revenue-Critical Hiring",
      desc: "When sales roles matter directly to growth, a more focused search process supports stronger decision-making.",
      icon: <Award className="w-7 h-7 text-gold" />
    },
    {
      title: "Better Use of Hiring Team Time",
      desc: "Shorter, more relevant shortlists reduce wasted effort in interviews and improve recruitment efficiency.",
      icon: <Clock className="w-7 h-7 text-gold" />
    },
    {
      title: "Support for Growth and Market Momentum",
      desc: "Stronger sales hiring can help businesses build pipeline, improve customer acquisition, and accelerate commercial momentum.",
      icon: <Rocket className="w-7 h-7 text-gold" />
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Understand the Commercial Role",
      desc: "We begin by understanding the role scope, target market, customer type, sales cycle, performance expectations, and broader business context."
    },
    {
      num: "02",
      title: "Define the Candidate Profile",
      desc: "We align on the type of candidate needed, including experience level, sales environment exposure, communication style, and commercial fit."
    },
    {
      num: "03",
      title: "Activate Focused Commercial Search",
      desc: "We identify candidates through targeted sourcing, recruiter networks, relevant talent channels, and outreach where needed."
    },
    {
      num: "04",
      title: "Screen for Sales Alignment",
      desc: "We assess practical relevance, communication, credibility, and role fit rather than relying only on title matching."
    },
    {
      num: "05",
      title: "Refine the Shortlist",
      desc: "We narrow the candidate pool to stronger-fit profiles that better match the company’s commercial needs."
    },
    {
      num: "06",
      title: "Support Better Revenue Hiring Decisions",
      desc: "Our goal is to help employers move forward with stronger confidence in the commercial talent entering their pipeline."
    }
  ];

  const pillars = [
    {
      title: "Commercial Hiring Focus",
      desc: "We treat sales roles as growth-critical positions, not as standard vacancies with generic requirements.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Better Role Precision",
      desc: "We help search for candidates who align more closely with the actual sales environment and expectations of the role.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Support for Growth and Revenue Teams",
      desc: "Our approach is built for businesses expanding pipeline, strengthening client growth, or scaling commercial capability.",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: "Stronger Shortlist Relevance",
      desc: "We focus on commercial fit, communication quality, and practical role alignment so employers get more useful candidate options.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Flexible Connection to Other Services",
      desc: "Sales Recruitment can work alongside headhunting, screening, employer branding, permanent recruitment, startup hiring, and RPO.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Premium, Business-Relevant Delivery",
      desc: "We help employers approach sales hiring through a process that feels structured, commercially smart, and professionally managed.",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const audiences = [
    {
      title: "Businesses Building Commercial Teams",
      desc: "Employers hiring across business development, sales, client growth, and revenue functions."
    },
    {
      title: "Companies Scaling Revenue Capability",
      desc: "Organizations expanding pipeline generation, market reach, account growth, or sales leadership."
    },
    {
      title: "Employers Hiring for Specialist Sales Roles",
      desc: "Businesses needing better accuracy for enterprise, account-based, strategic, or complex commercial positions."
    },
    {
      title: "Growth-Stage and Scaling Companies",
      desc: "Teams that need strong sales hiring to support expansion, traction, and business development goals."
    },
    {
      title: "Organizations Seeking Better Commercial Fit",
      desc: "Employers that want more relevant shortlists and a sharper process for revenue-focused positions."
    }
  ];

  const relatedServices = [
    { name: "Headhunting Services", href: "/headhunting-services", desc: "Proactive, targeted search support to reach passive and specialist candidates." },
    { name: "Permanent Recruitment", href: "/permanent-recruitment", desc: "Core long-term hiring solutions for ongoing business needs." },
    { name: "Technical Recruitment", href: "/technical-recruitment", desc: "Specialist hiring support across IT, software, and engineering roles." },
    { name: "Sales Recruitment", href: "/sales-recruitment", desc: "Targeted recruitment services for commercial and revenue teams." },
    { name: "Screening & Assessment", href: "/screening-assessment", desc: "Structured candidate screening and evaluation support to reduce hiring risk." },
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
      question: "What is sales recruitment?",
      answer: "Sales recruitment is a specialized hiring approach focused on sourcing and placing candidates for revenue-generating and commercial roles such as business development, account management, enterprise sales, and sales leadership."
    },
    {
      question: "Why do companies use sales recruitment services?",
      answer: "Companies use sales recruitment services when sales roles are critical to growth, difficult to fill accurately, or require more specialist understanding than general recruitment can provide."
    },
    {
      question: "What types of roles can NAYA Staffing help fill through sales recruitment?",
      answer: "NAYA Staffing can support hiring across business development, account management, account executive, enterprise sales, commercial operations, and sales leadership roles."
    },
    {
      question: "How is sales recruitment different from general recruitment?",
      answer: "Sales recruitment focuses more heavily on commercial fit, communication ability, revenue-role alignment, and the real demands of the sales environment rather than broad candidate matching alone."
    },
    {
      question: "Can this service help businesses scaling their sales teams?",
      answer: "Yes. Sales Recruitment is especially valuable for employers building or expanding revenue teams and needing stronger hiring precision across multiple commercial roles."
    },
    {
      question: "Does this service only apply to one industry?",
      answer: "No. Sales Recruitment can support employers across multiple industries and commercial environments where client acquisition, account growth, and revenue performance matter."
    }
  ];

  const marqueeDimensions = [
    "Enterprise Sales", "Account Management", "Business Development", "Lead Generation",
    "Commercial Sourcing", "Revenue Scaling", "Sales Operations", "Sales Leadership"
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Commercial & Revenue Talent Hiring</span>
            </div>
            <h1 className="text-5xl md:text-6xl xl:text-8xl font-black tracking-tighter mb-6 leading-none uppercase">
            <Typewriter>
              Sales Recruitment for <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                High-Performing Teams
              </span>
            </Typewriter>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
              NAYA Staffing’s Sales Recruitment service helps employers hire revenue-generating talent across business development, account management, enterprise sales, client growth, and commercial leadership functions. Whether you are building a new sales team, replacing key performers, or expanding revenue capability, we provide recruitment support designed to help businesses secure stronger commercial hires with greater clarity and confidence.
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
                Built for employers that need stronger sales talent, better commercial fit, and more confidence in revenue-focused hiring decisions.
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
                A More Focused Approach <br className="hidden md:inline" />
                <span className="text-gold">to Commercial Hiring</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            {/* Paragraphs Column */}
            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Sales hiring is different from many other forms of recruitment because the impact of the right or wrong hire is often felt quickly. A strong sales professional can influence revenue, pipeline growth, customer acquisition, account expansion, and business momentum. A poor hire can slow team performance, damage opportunities, and create avoidable cost in both time and commercial output.
              </p>
              <p>
                That is why sales recruitment requires more than basic resume screening. Employers need candidates with the right combination of communication ability, commercial understanding, target-driven mindset, relationship-building capability, and role-specific experience. Depending on the position, they may also need industry credibility, deal-cycle understanding, or enterprise-level sales maturity.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                NAYA Staffing’s Sales Recruitment service is designed to help employers hire commercial talent with greater precision. We support businesses looking for stronger alignment in roles where performance, persuasion, client engagement, and business growth matter most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT SALES RECRUITMENT MEANS */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-8">
          <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
            The Definition
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
            What Is <span className="text-gold">Sales Recruitment?</span>
          </h2>
          <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-semibold">
            <p>
              Sales Recruitment is a specialized hiring approach focused on sourcing and placing candidates for revenue-generating and commercial roles. These positions often sit across business development, account management, account executive functions, client growth, sales operations, and commercial leadership.
            </p>
            <p>
              Unlike broader recruitment, sales recruitment benefits from a clearer understanding of how commercial roles differ by sales cycle, target audience, industry, deal complexity, market maturity, and revenue expectations. The same title can mean very different things depending on the business model and growth stage.
            </p>
            <p className="text-slate-400 border-t border-white/5 pt-8 font-normal italic text-base">
              For employers, sales recruitment provides a more targeted route to commercial talent. It helps improve candidate relevance, strengthens shortlists, and supports better hiring decisions in roles that directly affect growth and revenue performance.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHY SALES RECRUITMENT MATTERS */}
      <section className="py-32 bg-navy-dark relative overflow-hidden border-t border-white/5">
        <div className="btn-rotating-border absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 btn-auto-sheen border border-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2 btn-auto-sheen border border-white/5">
              Why Commercial Fit Matters
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Sales Recruitment Matters in <span className="text-gold">Revenue-Focused Hiring</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Sales roles are often business-critical because they directly influence growth, customer acquisition, client retention, and market expansion.
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

      {/* 5. WHEN SALES RECRUITMENT IS THE RIGHT CHOICE */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              When to Use <span className="text-gold">Sales Recruitment</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Sales Recruitment is especially valuable when the business is hiring for roles that directly influence growth, targets, and revenue performance.
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
              What Our Sales Recruitment <span className="text-gold">Can Include</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              The exact scope can vary depending on business need, but sales recruitment support can include several specialist commercial hiring elements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
            {servicesInclude.slice(0, 7).map((service, idx) => (
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

      {/* 7. ROLES WE HELP FILL SECTION */}
      <section className="py-32 bg-navy relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2 btn-auto-sheen border border-white/5">
              Commercial Scopes
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Sales Roles We Help <span className="text-gold">Employers Hire</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing’s Sales Recruitment service can support a wide range of revenue-generating and commercial roles depending on business stage, target market, and sales structure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {rolesCategories.map((category, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-500 flex flex-col h-full justify-between">
                <div className="space-y-6">
                  <h4 className="text-white font-black text-lg mb-4 group-hover:text-gold transition-colors tracking-tight uppercase pb-2 border-b border-white/5">
                    {category.title}
                  </h4>
                  <ul className="space-y-3">
                    {category.roles.map((role, rIdx) => (
                      <li key={rIdx} className="text-slate-400 text-sm font-semibold flex items-start gap-2 leading-tight group-hover:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHAT EMPLOYERS GAIN FROM SALES RECRUITMENT */}
      <section className="py-32 bg-navy-dark relative overflow-hidden border-t border-white/5">
        <div className="btn-rotating-border absolute top-1/2 right-0 w-[500px] h-[500px] bg-white/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 btn-auto-sheen border border-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
            
            {/* Sticky Header Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8 animate-fade-up">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-2 shadow-xl backdrop-blur-md btn-auto-sheen border border-white/5">
                Revenue Growth
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                What Sales <br />Recruitment <span className="text-gold">Delivers.</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-24 bg-white/5 rounded-full shadow-lg shadow-gold/20 btn-auto-sheen border border-white/5"></div>
              <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed border-l-2 border-white/10 pl-8 max-w-lg">
                Sales Recruitment helps employers build stronger revenue teams by improving candidate relevance, commercial fit, and hiring confidence.
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

      {/* 9. OUR SALES RECRUITMENT APPROACH */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-28 space-y-6">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2 btn-auto-sheen border border-white/5">
              Growth Delivery
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Our Approach to <span className="text-gold">Sales Recruitment</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Our sales recruitment approach is designed to help employers hire commercial talent more effectively by aligning candidate search to real sales-role requirements, business goals, and growth priorities.
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

      {/* 10. WHY CHOOSE NAYA STAFFING FOR SALES RECRUITMENT */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose NAYA Staffing <span className="text-gold">for Sales Recruitment</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Sales hiring needs more than basic candidate sourcing. It needs better understanding of commercial roles, stronger alignment to business context, and a recruitment process that takes revenue impact seriously.
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

      {/* 11. SALES RECRUITMENT VS GENERAL RECRUITMENT */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
              Sales Recruitment vs <span className="text-gold">General Recruitment</span>
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto"></div>
          </div>
          <div className="space-y-8 text-slate-300 font-medium text-lg leading-relaxed text-center">
            <p>
              General recruitment can support many hiring needs, especially where role requirements are broader and easier to assess at early stage. That approach can work well for a wide range of business functions.
            </p>
            <p>
              Sales Recruitment is different because sales roles are highly dependent on communication style, commercial awareness, target-market experience, performance mindset, and the specific nature of the sales motion involved. Two candidates may both have “sales” on their resume, but only one may fit the real demands of the role.
            </p>
            <p className="text-slate-400 border-t border-white/5 pt-8 font-semibold italic text-base">
              That is why a more specialist commercial hiring approach can improve accuracy. It helps employers move beyond generic sales titles and toward stronger fit across revenue-driving roles.
            </p>
          </div>
        </div>
      </section>

      {/* 12. WHO THIS SERVICE IS BEST FOR */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Who Sales Recruitment <span className="text-gold">Is Best For</span>
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

      {/* 13. SCROLLING MARQUEE OF SALES SKILLS */}
      <section className="bg-navy py-24 border-t border-white/5">
        <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
          <h3 className="text-3xl font-black text-white tracking-tighter">Commercial <span className="text-gold">Momentum.</span></h3>
          <p className="text-slate-500 font-bold">Key Growth Priorities</p>
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

      {/* 14. INDUSTRY COVERAGE SECTION */}
      <section className="py-24 relative overflow-hidden bg-navy-dark border-t border-white/5">
        <div className="container mx-auto px-6 max-w-5xl text-center space-y-8 animate-fade-up">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
              Revenue Focus
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              Sales Recruitment Support Across <span className="text-gold">Diverse Industries</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-slate-400 text-lg leading-relaxed font-semibold max-w-4xl mx-auto">
              Your approved website structure already includes Sales as a dedicated industry area, with supporting sub-categories including Enterprise Sales, Account Management, and Business Development. That makes this page a strong natural fit inside the broader site architecture and allows Sales Recruitment to be positioned not only as a generic commercial hiring service, but as one that can support different sales environments across technology, professional services, retail, marketing-led businesses, and other sectors where revenue teams matter.
            </p>
            <div className="pt-6">
               <Link href="/our-industries" className="btn-rotating-border px-10 py-5 bg-white/5 hover:bg-white/10 text-white hover:text-gold font-black rounded-full transition-all inline-flex items-center gap-4 uppercase tracking-[0.2em] text-xs btn-auto-sheen border border-white/5">
                  Explore Industries We Serve <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
        </div>
      </section>

      {/* 15. FAQ SECTION */}
      <section className="bg-navy py-32 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="text-center mb-20 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-6 shadow-xl backdrop-blur-md btn-auto-sheen border border-white/5">
                Commercial FAQ
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

      {/* 16. INTERNAL LINKING SECTION */}
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

      {/* 17. FINAL CTA SECTION */}
      <section className="py-32 relative overflow-hidden bg-navy border-t border-white/5">
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
              Hire Stronger Commercial Talent <br/>
              <span className="text-gold">With Greater Confidence</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              When growth depends on the people driving pipeline, clients, and revenue, hiring needs to be sharper. NAYA Staffing’s Sales Recruitment service helps employers access stronger commercial talent, improve shortlist relevance, and build revenue teams with more confidence.
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
