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
  Award,
  DollarSign,
  Activity
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "Financial Services Recruitment & Finance Hiring Solutions | NAYA Staffing",
  description: "NAYA Staffing provides financial services recruitment solutions for employers hiring finance professionals, client-service teams, operations staff, analysts, and broader financial-services talent.",
  keywords: [
    "financial services recruitment agency",
    "finance staffing solutions",
    "finance hiring agency",
    "financial services staffing",
    "finance talent acquisition",
    "finance recruitment services",
    "financial workforce solutions",
    "finance recruitment partner",
    "analyst recruitment finance",
    "client services finance hiring",
    "finance operations staffing",
    "financial services talent partner",
    "business finance recruitment",
    "professional services finance hiring",
    "financial team recruitment",
    "finance workforce support"
  ]
};

export default function FinancialServicesSubIndustryPage() {
  const reasons = [
    {
      title: "Trust and Professionalism Matter Deeply",
      desc: "Finance-related roles often require stronger confidence in communication, judgment, and reliability.",
      icon: <ShieldCheck className="w-8 h-8 text-gold" />
    },
    {
      title: "Role Context Changes the Real Requirements",
      desc: "The same finance title may mean very different responsibilities depending on advisory model, operations scope, or reporting environment.",
      icon: <Globe className="w-8 h-8 text-gold" />
    },
    {
      title: "Weak-Fit Hires Can Affect Accuracy and Confidence Quickly",
      desc: "Poor-fit hires may influence client experience, internal control, reporting quality, or team efficiency.",
      icon: <Activity className="w-8 h-8 text-gold" />
    },
    {
      title: "Many Roles Require Both Technical and Commercial Fit",
      desc: "Employers often need people who can handle detail while also operating professionally in business-facing settings.",
      icon: <Settings className="w-8 h-8 text-gold" />
    },
    {
      title: "Candidate Relevance Matters More Than Broad Volume",
      desc: "Financial-services employers usually benefit more from tighter, role-relevant shortlists than larger applicant pools.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      title: "Growth and Stability Need Better Hiring Structure",
      desc: "As finance functions expand or formalize, hiring often needs more organized support than ad hoc recruitment alone.",
      icon: <Clock className="w-8 h-8 text-gold" />
    }
  ];

  const areas = [
    {
      title: "Finance Operations Hiring",
      desc: "Recruitment support for employers building stronger operational capability across finance-linked workflows and internal support functions."
    },
    {
      title: "Client-Facing Financial Services Roles",
      desc: "Support for roles that sit close to service quality, relationship handling, and professional client communication."
    },
    {
      title: "Analysis & Reporting Functions",
      desc: "Coverage for employers hiring around reporting, analysis, accuracy, and decision-support capability."
    },
    {
      title: "Controls & Process-Driven Teams",
      desc: "Support for organizations that need disciplined, standards-aware professionals working in structured finance environments."
    },
    {
      title: "Commercial and Advisory-Adjacent Support",
      desc: "Hiring support for roles operating close to professional advisory, account-facing, or service-led financial environments."
    },
    {
      title: "Finance Team Growth",
      desc: "Support for structured workforce build-outs tied to growth, service expansion, or operational maturity."
    }
  ];

  const roleGroups = [
    {
      title: "Finance & Operations Roles",
      roles: [
        "Finance Operations Staff",
        "Financial Services Support Roles",
        "Reporting Support Staff",
        "Business Finance Roles",
        "Process-Driven Operations Positions"
      ]
    },
    {
      title: "Analysis & Coordination Roles",
      roles: [
        "Analysts",
        "Reporting Coordinators",
        "Financial Data Support Roles",
        "Operations Analysis Staff",
        "Internal Coordination Roles"
      ]
    },
    {
      title: "Client & Service Roles",
      roles: [
        "Client Service Professionals",
        "Account Support Roles",
        "Relationship-Focused Financial Services Staff",
        "Service Delivery Support Roles",
        "Business Support Professionals"
      ]
    },
    {
      title: "Workforce Growth & Specialist Roles",
      roles: [
        "Senior Finance Staff",
        "Team Leads",
        "Multi-role Finance Build-Out Staff",
        "Structured Operations Support Roles",
        "Hard-to-Fill Professional Roles"
      ]
    }
  ];

  const challenges = [
    {
      title: "Roles Need Precision and Reliability",
      desc: "Employers often need stronger confidence in candidate accuracy, consistency, and professionalism."
    },
    {
      title: "Role Definitions Can Shift by Business Model",
      desc: "The same title may involve different reporting, client, or operations expectations depending on the organization."
    },
    {
      title: "Weak-Fit Hires Can Affect Clients and Internal Confidence",
      desc: "Poor-fit hires may create issues across service quality, coordination, reporting, and credibility."
    },
    {
      title: "Strong Talent Often Needs Better Role Matching",
      desc: "Candidates may need to fit both the technical and the professional environment, not just the title."
    },
    {
      title: "Relevant Talent Can Be Harder to Identify Quickly",
      desc: "Sharper search logic is often needed to find people with the right combination of skill and fit."
    },
    {
      title: "Growing Teams Need Better Hiring Structure",
      desc: "As finance functions expand, employers often need more organized staffing support rather than one-off hiring."
    }
  ];

  const supportAreas = [
    {
      title: "Finance-Aware Recruitment Support",
      desc: "Helping employers hire with better understanding of accuracy-driven, stakeholder-facing, and process-led environments."
    },
    {
      title: "Permanent and Flexible Hiring Models",
      desc: "Supporting long-term financial-services hires as well as contract or scale-related workforce needs where needed."
    },
    {
      title: "Screening & Assessment Support",
      desc: "Helping improve shortlist quality and reduce weak-fit candidates in financial-services hiring workflows."
    },
    {
      title: "Headhunting for Specialist Professional Talent",
      desc: "Supporting targeted search where certain finance or hard-to-fill advisory-adjacent roles require more precision."
    },
    {
      title: "Turnkey Support for Team Expansion",
      desc: "Helping employers scale finance teams through structured recruitment delivery."
    },
    {
      title: "Connection to Broader Workforce Services",
      desc: "This area can connect naturally with permanent recruitment, contract staffing, screening and assessment, RPO, and turnkey recruitment projects."
    }
  ];

  const pillars = [
    {
      title: "Better Professional Role Precision",
      desc: "We help employers recruit with stronger alignment to real financial-services needs rather than broad title matching."
    },
    {
      title: "Better Understanding of Finance Context",
      desc: "We treat financial-services hiring as its own specialist environment, not generic office staffing."
    },
    {
      title: "Support for Team Stability and Growth",
      desc: "We support both individual finance hires and broader operations or service-team expansion."
    },
    {
      title: "Flexible Connection to Related Services",
      desc: "Financial-services recruitment can connect with screening, permanent recruitment, contract staffing, RPO, and turnkey projects."
    },
    {
      title: "Professional, Structured Delivery",
      desc: "Finance-led environments often need a hiring process that feels organized, credible, and detail-aware."
    },
    {
      title: "Built Inside the Professional Services Industry Structure",
      desc: "This page is part of the reviewed Professional Services framework in your PDF, where Financial Services is explicitly listed as a child category."
    }
  ];

  const relatedServices = [
    { name: "Permanent Recruitment", href: "/services/permanent-recruitment", desc: "Core long-term hiring solutions for ongoing business needs." },
    { name: "Contract Staffing", href: "/services/contract-staffing", desc: "Flexible staffing solutions for temporary or project-based needs." },
    { name: "Screening & Assessment", href: "/services/screening-assessment", desc: "Structured candidate screening and evaluation support." },
    { name: "Recruitment Process Outsourcing (RPO)", href: "/services/rpo", desc: "End-to-end recruitment management to scale your hiring operations." },
    { name: "Turnkey Recruitment Projects", href: "/services", desc: "Structured project solutions for hiring multiple roles." },
    { name: "Headhunting Services", href: "/services/headhunting-services", desc: "Targeted direct search for hard-to-fill and specialist hires." },
    { name: "Talent Mapping", href: "/services/talent-mapping", desc: "Strategic market intelligence and recruitment planning support." },
    { name: "Employer Branding", href: "/services/employer-branding", desc: "Strategic positioning to attract top-tier talent in competitive markets." }
  ];

  const faqs = [
    {
      question: "Does NAYA Staffing recruit for financial services roles?",
      answer: "Yes. NAYA Staffing supports hiring across financial-services environments, including finance operations, reporting, client-service functions, analysis roles, and broader professional support teams."
    },
    {
      question: "What financial services roles can NAYA Staffing help fill?",
      answer: "NAYA Staffing can support hiring for finance operations staff, analysts, reporting roles, client-service professionals, account-support roles, and related finance workforce positions."
    },
    {
      question: "Why is financial services recruitment different from general recruitment?",
      answer: "Because financial-services hiring depends heavily on trust, accuracy, professionalism, process discipline, and stronger role-to-environment alignment."
    },
    {
      question: "Is Financial Services an approved subpage in the structure?",
      answer: "Yes. Your uploaded PDF explicitly lists Financial Services as a reviewed child category under Professional Services."
    },
    {
      question: "Can NAYA Staffing help with finance team expansion?",
      answer: "Yes. NAYA Staffing can support both individual finance hires and broader financial-services team growth through structured recruitment support."
    }
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Financial Services & Finance Talent Recruitment</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
              Financial Services <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Precision & Team Alignment
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed mb-10">
              NAYA Staffing supports employers hiring across financial-services environments, including finance operations, client-service functions, analysis roles, controls-driven teams, and broader professional services organizations. Whether you are strengthening financial operations, improving client-facing support, or building a more reliable finance team, we help employers access more relevant candidates with greater confidence and recruitment clarity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/schedule-consultation" 
                className="group relative px-8 py-4 bg-gold hover:bg-gold-hover text-navy-dark font-bold rounded-full transition-all duration-300 overflow-hidden shadow-2xl shadow-gold/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Schedule Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 transition-all duration-300 backdrop-blur-xl"
              >
                Explore Our Services
              </Link>
            </div>
            <div className="pt-10 border-t border-white/5 mt-10 max-w-xl">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 leading-loose">
                Built for employers that need stronger finance hiring, better professional-role fit, and a more structured path to operational confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-20">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold to-transparent"></div>
        </div>
      </section>

      {/* 2. OVERVIEW SECTION */}
      <section className="py-24 relative overflow-hidden bg-navy-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold">
                Overview
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                Recruitment Support for Finance Operations, <br className="hidden md:inline" />
                <span className="text-gold">Client Service, and Controls-Driven Professional Environments</span>
              </h2>
              <div className="h-1.5 w-20 bg-gold rounded-full opacity-60"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Financial services hiring often affects client confidence, operational accuracy, compliance readiness, reporting quality, team reliability, and broader business credibility. Employers in this space are often hiring for roles that directly influence how well finance-related work is delivered, how clearly information is handled, and how professionally clients or internal stakeholders are supported.
              </p>
              <p>
                This is also a hiring environment where trust and precision matter heavily. The same title can involve very different expectations depending on business model, client profile, reporting complexity, control environment, and internal team structure. That means stronger recruitment depends on better role understanding, tighter shortlist relevance, and a hiring process that reflects real financial-services conditions.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                NAYA Staffing’s financial services recruitment support is designed to help employers hire more effectively across those environments. We support organizations that need stronger finance shortlists, better professional-role fit, and a recruitment process that reflects the importance of reliability, accuracy, and strong stakeholder-facing capability. This page is directly supported by your PDF, which lists Financial Services as a reviewed child category under Professional Services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY RECRUITMENT REQUIRES A SPECIALIZED APPROACH */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Financial Services <span className="text-gold">Recruitment Is Different</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Financial services recruitment is different from general recruitment because the roles often sit close to trust, analysis, reporting accuracy, client expectations, operational discipline, and compliance-sensitive workflows.
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

      {/* 4. AREAS WE SUPPORT */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Financial Services Areas <span className="text-gold">We Support</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              We support a wide range of finance and professional-services environments inside the Financial Services category.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6">
                  <h3 className="text-white font-black text-xl leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
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

      {/* 5. ROLES WE HELP FILL */}
      <section className="py-32 bg-navy relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Financial Services Roles We <span className="text-gold">Help Employers Hire</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports recruitment across a wide range of financial-services roles depending on the employer’s structure, business model, and team priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roleGroups.map((group, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-[#0B132B]/50 border border-white/5 hover:border-gold/30 transition-all duration-500 flex flex-col h-full">
                <h3 className="text-white font-black text-lg mb-6 group-hover:text-gold transition-colors tracking-tight uppercase border-b border-white/10 pb-4">
                  {group.title}
                </h3>
                <ul className="space-y-3 flex-grow text-slate-400 text-xs font-semibold">
                  {group.roles.map((role, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <span className="text-gold mt-0.5">•</span>
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HIRING CHALLENGES */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Common Hiring Challenges in <span className="text-gold">Financial Services</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Financial-services employers often face recruitment conditions that require more trust, more detail-awareness, and stronger professional-role fit than general business hiring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((challenge, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6">
                  <h3 className="text-white font-black text-xl leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                    {challenge.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {challenge.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HOW NAYA STAFFING SUPPORTS FINANCIAL SERVICES EMPLOYERS */}
      <section className="py-32 bg-navy relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              How We Support <span className="text-gold">Financial Services Sourcing</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports financial-services employers with recruitment solutions designed around professional trust, operational relevance, and stronger role-to-team alignment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportAreas.map((area, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6">
                  <h3 className="text-white font-black text-xl leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
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

      {/* 8. WHY EMPLOYERS CHOOSE NAYA STAFFING FOR FINANCIAL SERVICES RECRUITMENT */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose NAYA Staffing <span className="text-gold">for Financial Services Recruitment</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Financial-services recruitment requires stronger trust awareness, sharper role precision, and a hiring process that reflects professional, client-facing, and accuracy-led environments. NAYA Staffing’s approach is designed around those expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <div key={i} className="group p-8 rounded-[36px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-500 hover:shadow-xl flex flex-col h-full justify-between">
                <div className="space-y-4">
                  <h4 className="text-white font-black text-lg group-hover:text-gold transition-colors tracking-tight uppercase">
                    {pillar.title}
                  </h4>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. RELATED SERVICES */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.95]">
                Related Services <br/>
                for <span className="text-gold">Financial Services Hiring</span>
              </h2>
              <div className="h-1 w-20 bg-gold rounded-full"></div>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                Connect financial services recruitment with our broader services to support your entire organization.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
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

      {/* 10. FAQ SECTION */}
      <section className="bg-navy-dark py-32 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="text-center mb-20 space-y-6">
              <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-6 shadow-xl backdrop-blur-md">
                FAQ
              </div>
              <h2 className="text-5xl font-black mb-6 uppercase">Frequently <span className="text-gold">Asked Questions</span></h2>
              <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
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

      {/* 11. FINAL CTA SECTION */}
      <section className="py-32 relative overflow-hidden bg-navy border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gold/[0.03] blur-[200px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-navy-light/10 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-panel p-12 md:p-24 rounded-[4rem] text-center border border-gold/20 shadow-2xl shadow-gold/10">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gold text-navy-dark mb-10 shadow-2xl shadow-gold/30">
              <DollarSign className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Build Stronger Finance Teams <br/>
              With <span className="text-gold">Precise Professional Hiring Support</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              Financial-services hiring depends on trust, role fit, and stronger professional alignment. NAYA Staffing helps employers hire more effectively across finance environments with a more structured, finance-aware recruitment approach.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link 
                href="/schedule-consultation" 
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
                href="/services" 
                className="w-full sm:w-auto px-16 py-8 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-gold hover:text-gold font-black rounded-[32px] transition-all uppercase tracking-[0.3em] text-[10px]"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking Footer Block */}
      <section className="py-12 bg-navy-dark border-t border-white/5 text-sm font-bold text-slate-500">
        <div className="container mx-auto px-6 flex flex-wrap gap-x-8 gap-y-4 justify-center">
          <Link href="/our-industries" className="hover:text-gold transition-colors">Industries Overview</Link>
          <Link href="/industries/professional-services" className="hover:text-gold transition-colors">Professional Services Overview</Link>
          <Link href="/industries/professional-services/financial-services" className="hover:text-gold transition-colors">Financial Services</Link>
          <Link href="/industries/professional-services/legal-staffing" className="hover:text-gold transition-colors">Legal Staffing</Link>
          <Link href="/industries/professional-services/hr-consulting" className="hover:text-gold transition-colors">HR Consulting</Link>
        </div>
      </section>
    </main>
  );
}
