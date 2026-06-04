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
  Scale,
  ShieldAlert,
  Calculator,
  Activity
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "Risk Underwriting Recruitment & Insurance Underwriting Hiring Solutions | NAYA Staffing",
  description: "NAYA Staffing provides risk underwriting recruitment services for employers hiring underwriters, risk-assessment professionals, policy review talent, insurance decision-support staff, and broader underwriting workforce roles.",
  keywords: [
    "underwriting recruitment agency",
    "risk underwriting staffing",
    "insurance underwriting hiring",
    "underwriter recruitment services",
    "underwriting talent acquisition",
    "insurance risk recruitment",
    "underwriting staffing solutions",
    "underwriting workforce partner",
    "policy review recruitment",
    "insurance risk assessment hiring",
    "underwriting operations staffing",
    "commercial underwriting recruitment",
    "risk evaluation staffing",
    "underwriter talent partner",
    "insurance decision support hiring",
    "underwriting team recruitment"
  ]
};

export default function RiskUnderwritingSubIndustryPage() {
  const reasons = [
    {
      title: "Judgment Matters Beyond Basic Technical Experience",
      desc: "Underwriting roles often require stronger decision quality, analytical discipline, and risk interpretation.",
      icon: <Scale className="w-8 h-8 text-gold" />
    },
    {
      title: "Product and Portfolio Context Change Role Requirements",
      desc: "The same underwriting title may involve very different expectations depending on the employer’s line of business and underwriting model.",
      icon: <Globe className="w-8 h-8 text-gold" />
    },
    {
      title: "Weak-Fit Hires Can Affect Risk Quality Quickly",
      desc: "Poor-fit underwriting hires may influence selection quality, portfolio confidence, and internal decision consistency.",
      icon: <ShieldAlert className="w-8 h-8 text-gold" />
    },
    {
      title: "Commercial and Analytical Fit Must Both Be Strong",
      desc: "Employers often need people who can balance data, policy logic, and business judgment at the same time.",
      icon: <Activity className="w-8 h-8 text-gold" />
    },
    {
      title: "Candidate Relevance Matters More Than Broad Volume",
      desc: "Insurance employers usually benefit more from tighter, underwriting-ready shortlists than larger applicant pools.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      title: "Stronger Underwriting Functions Need Better Hiring Structure",
      desc: "As risk functions mature, hiring usually needs more organized search and screening than ad hoc recruitment alone.",
      icon: <Clock className="w-8 h-8 text-gold" />
    }
  ];

  const areas = [
    {
      title: "Underwriting Review & Assessment",
      desc: "Recruitment support for employers hiring around policy review, application evaluation, and underwriting decision support."
    },
    {
      title: "Risk Evaluation Functions",
      desc: "Support for organizations building stronger capability around risk interpretation, eligibility review, and decision consistency."
    },
    {
      title: "Portfolio & Policy Decision Support",
      desc: "Coverage for roles connected to portfolio quality, underwriting control, and policy-level commercial judgment."
    },
    {
      title: "Commercial and Personal Lines-Adjacent Support",
      desc: "Hiring support for employers with product-specific underwriting needs tied to internal insurance lines and policy environments."
    },
    {
      title: "Underwriting Operations & Workflow",
      desc: "Support for employers hiring around case progression, review process quality, and underwriting workflow coordination."
    },
    {
      title: "Underwriting Team Growth",
      desc: "Support for structured workforce build-outs tied to portfolio growth, product expansion, or stronger internal risk capability."
    }
  ];

  const roleGroups = [
    {
      title: "Core Underwriting Roles",
      roles: [
        "Underwriters",
        "Underwriting Analysts",
        "Risk Assessment Roles",
        "Policy Review Staff",
        "Insurance Decision Support Roles"
      ]
    },
    {
      title: "Portfolio & Evaluation Roles",
      roles: [
        "Portfolio Review Support",
        "Risk Evaluation Staff",
        "Policy Assessment Roles",
        "Commercial Review Positions",
        "Product-Aligned Underwriting Support"
      ]
    },
    {
      title: "Workflow & Operations Roles",
      roles: [
        "Underwriting Operations Staff",
        "Case Coordination Roles",
        "Documentation Support Positions",
        "Workflow Review Staff",
        "Process-Control Support Roles"
      ]
    },
    {
      title: "Workforce Growth & Specialist Roles",
      roles: [
        "Senior Underwriting Staff",
        "Underwriting Team Leads",
        "Multi-role Underwriting Build-Out Staff",
        "Hard-to-Fill Insurance Decision Roles",
        "Structured Risk Support Positions"
      ]
    }
  ];

  const challenges = [
    {
      title: "The Right Candidate Needs More Than Generic Insurance Knowledge",
      desc: "Underwriting roles often require stronger risk judgment, product understanding, and decision consistency."
    },
    {
      title: "Role Definitions Shift by Product and Authority Level",
      desc: "The same title may involve very different underwriting responsibility depending on the employer and business line."
    },
    {
      title: "Weak-Fit Hires Can Affect Portfolio Confidence",
      desc: "Poor-fit underwriting hires may influence risk quality, policy decisions, and internal trust in the process."
    },
    {
      title: "Relevant Talent Can Be Harder to Identify Quickly",
      desc: "Employers often need sharper search logic to find candidates who fit both the analytical and commercial environment."
    },
    {
      title: "Candidate Relevance Matters More Than Broad Volume",
      desc: "Underwriting teams usually benefit more from tighter, risk-ready shortlists than larger applicant pools."
    },
    {
      title: "Capability Growth Needs Better Hiring Structure",
      desc: "As underwriting teams expand, employers often need more organized support than one-off recruiting."
    }
  ];

  const supportAreas = [
    {
      title: "Underwriting-Aware Recruitment Support",
      desc: "Helping employers hire with better understanding of risk review, policy assessment, and underwriting workflow needs."
    },
    {
      title: "Permanent and Flexible Hiring Models",
      desc: "Supporting long-term underwriting hires as well as project or growth-related workforce needs where needed."
    },
    {
      title: "Screening & Assessment Support",
      desc: "Helping improve shortlist quality and reduce weak-fit candidates in risk-underwriting hiring workflows."
    },
    {
      title: "Headhunting for Specialist Insurance Talent",
      desc: "Supporting targeted search where certain underwriting or hard-to-fill risk roles require more precision."
    },
    {
      title: "Turnkey Support for Team Expansion",
      desc: "Helping employers scale underwriting capability through structured recruitment delivery."
    },
    {
      title: "Connection to Broaler Workforce Services",
      desc: "This area can connect naturally with permanent recruitment, contract staffing, screening and assessment, RPO, and turnkey recruitment projects."
    }
  ];

  const pillars = [
    {
      title: "Better Underwriting Role Precision",
      desc: "We help employers recruit with stronger alignment to real underwriting and insurance decision needs rather than broad title matching."
    },
    {
      title: "Better Understanding of Insurance Risk Context",
      desc: "We treat underwriting hiring as its own specialist environment, not generic insurance or office staffing."
    },
    {
      title: "Support for Team Stability and Growth",
      desc: "We support both individual underwriting hires and broader risk-team expansion."
    },
    {
      title: "Flexible Connection to Related Services",
      desc: "Underwriting recruitment can connect with screening, permanent recruitment, contract staffing, RPO, and turnkey projects."
    },
    {
      title: "Professional, Structured Delivery",
      desc: "Insurance decision environments often need a hiring process that feels organized, credible, and detail-aware."
    },
    {
      title: "Built Inside the Insurance Industry Structure",
      desc: "This page is part of the reviewed Insurance framework in your PDF, where Risk Underwriting is explicitly listed as a child category."
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
      question: "Does NAYA Staffing recruit for risk underwriting roles?",
      answer: "Yes. NAYA Staffing supports hiring across risk underwriting environments, including policy review, risk evaluation, underwriting support, and broader insurance decision functions."
    },
    {
      question: "What underwriting roles can NAYA Staffing help fill?",
      answer: "NAYA Staffing can support hiring for underwriters, underwriting analysts, risk assessment roles, policy review staff, and related insurance decision-support positions."
    },
    {
      question: "Why is risk underwriting recruitment different from general recruitment?",
      answer: "Because underwriting hiring depends heavily on analytical precision, commercial judgment, policy relevance, and stronger risk-role alignment."
    },
    {
      question: "Is Risk Underwriting an approved subpage in the structure?",
      answer: "Yes. Your uploaded PDF explicitly lists Risk Underwriting as a reviewed child category under Insurance."
    },
    {
      question: "Can NAYA Staffing help with underwriting team expansion?",
      answer: "Yes. NAYA Staffing can support both individual underwriting hires and broader risk-team growth through structured recruitment support."
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Risk Underwriting & Insurance Decision Talent Recruitment</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
              Risk Underwriting <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Judgment, Precision & Risk
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed mb-10">
              NAYA Staffing supports employers hiring across risk underwriting environments, including underwriting review, risk evaluation, policy assessment, portfolio-related decision support, and broader insurance risk functions. Whether you are strengthening underwriting discipline, improving risk-selection consistency, or building a more dependable underwriting team, we help employers access more relevant candidates with greater confidence and recruitment clarity.
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
                Built for insurance employers that need stronger underwriting hiring, better analytical-role fit, and a more structured path to risk and portfolio confidence.
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
                Recruitment Support for Underwriting, <br className="hidden md:inline" />
                <span className="text-gold">Risk Evaluation, and Insurance Decision Environments</span>
              </h2>
              <div className="h-1.5 w-20 bg-gold rounded-full opacity-60"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Risk underwriting hiring often affects portfolio quality, policy consistency, pricing discipline, loss exposure, business confidence, and broader insurance profitability. Employers in this space are often hiring for roles that directly influence how risk is evaluated, how policies are assessed, and how decisions are made around acceptance, pricing, and portfolio balance.
              </p>
              <p>
                This is also a hiring environment where judgment and context matter heavily. The same underwriting title can involve very different expectations depending on line of business, risk appetite, product complexity, internal authority levels, and portfolio strategy. That means stronger recruitment depends on better role understanding, tighter shortlist relevance, and a hiring process that reflects real underwriting environments.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                NAYA Staffing’s risk underwriting recruitment support is designed to help insurance employers hire more effectively across those environments. We support organizations that need stronger underwriting shortlists, better risk-role fit, and a recruitment process that reflects the importance of analytical quality, decision discipline, and commercial awareness. This page is directly supported by your PDF, which lists Risk Underwriting as a reviewed child category under Insurance.
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
              Why Risk Underwriting Recruitment <span className="text-gold">Is Different</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Risk underwriting recruitment is different from general recruitment because the roles often sit close to risk assessment, policy judgment, pricing discipline, portfolio management, and commercially meaningful decision-making.
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
              Risk Underwriting Areas <span className="text-gold">We Support</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              We cover multiple underwriting and insurance-decision environments while staying clearly inside the Risk Underwriting child category under Insurance.
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
              Risk Underwriting Roles We <span className="text-gold">Help Employers Hire</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports recruitment across a wide range of underwriting roles depending on the employer’s product environment, portfolio model, and underwriting priorities.
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
              Common Hiring Challenges in <span className="text-gold">Risk Underwriting</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Insurance employers often face recruitment conditions in this area that require more analytical discipline, stronger commercial fit, and better decision-role alignment than general professional hiring.
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

      {/* 7. HOW NAYA STAFFING SUPPORTS INSURANCE EMPLOYERS */}
      <section className="py-32 bg-navy relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              How We Support <span className="text-gold">Risk Underwriting Sourcing</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports insurance employers with recruitment solutions designed around decision quality, risk-role relevance, and stronger underwriting-team alignment.
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

      {/* 8. WHY EMPLOYERS CHOOSE NAYA STAFFING FOR RISK UNDERWRITING RECRUITMENT */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose NAYA Staffing <span className="text-gold">for Risk Underwriting Recruitment</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Underwriting recruitment requires stronger risk awareness, sharper decision-role fit, and a hiring process that reflects the real demands of policy evaluation, commercial judgment, and portfolio control.
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
                for <span className="text-gold">Risk Underwriting</span>
              </h2>
              <div className="h-1 w-20 bg-gold rounded-full"></div>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                Connect risk underwriting recruitment with our broader services to support your entire organization.
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
              <Scale className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Build Stronger Underwriting Teams <br/>
              With <span className="text-gold">Precise Insurance Risk Hiring Support</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              Underwriting hiring depends on judgment, role fit, and stronger insurance relevance. NAYA Staffing helps employers hire more effectively across underwriting environments with a more structured, risk-aware recruitment approach.
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
          <Link href="/industries/insurance" className="hover:text-gold transition-colors">Insurance Overview</Link>
          <Link href="/industries/insurance/actuarial-services" className="hover:text-gold transition-colors">Actuarial Services</Link>
          <Link href="/industries/insurance/claims-management" className="hover:text-gold transition-colors">Claims Management</Link>
          <Link href="/industries/insurance/risk-underwriting" className="hover:text-gold transition-colors">Risk Underwriting</Link>
        </div>
      </section>
    </main>
  );
}
