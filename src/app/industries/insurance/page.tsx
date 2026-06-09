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
  Award,
  Calculator,
  FileText
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "Insurance Recruitment & Staffing Solutions | NAYA Staffing",
  description: "NAYA Staffing provides insurance recruitment services for employers hiring across actuarial services, claims management, risk underwriting, insurance operations, and related business-support roles.",
  keywords: [
    "insurance recruitment agency",
    "insurance staffing solutions",
    "insurance hiring agency",
    "actuarial recruitment",
    "claims management recruitment",
    "underwriting recruitment",
    "insurance staffing company",
    "insurance workforce solutions",
    "risk recruitment services",
    "claims hiring support",
    "underwriting talent acquisition",
    "insurance operations recruitment",
    "insurance administration staffing",
    "actuarial staffing support",
    "insurance support roles hiring",
    "insurance talent partner"
  ]
};

export default function InsuranceOverviewPage() {
  const reasons = [
    {
      title: "Accuracy and Judgment Matter Strongly",
      desc: "Insurance roles often involve data review, documentation, process interpretation, customer communication, and risk-related decision support.",
      icon: <Award className="w-8 h-8 text-gold" />
    },
    {
      title: "The Sector Includes Distinct Functional Areas",
      desc: "Actuarial services, claims management, underwriting, administration, and client support all require different sourcing and screening logic.",
      icon: <Globe className="w-8 h-8 text-gold" />
    },
    {
      title: "Role Context Often Carries Financial and Operational Impact",
      desc: "Weak-fit hiring can affect case handling, service quality, turnaround time, internal efficiency, and customer trust.",
      icon: <TrendingUp className="w-8 h-8 text-gold" />
    },
    {
      title: "Candidate Fit Extends Beyond Resume Matching",
      desc: "A strong insurance hire often needs attention to detail, process discipline, communication ability, and comfort working in structured environments.",
      icon: <Users className="w-8 h-8 text-gold" />
    },
    {
      title: "Some Insurance Roles Require More Targeted Search Precision",
      desc: "Actuarial, underwriting, and specialist operations roles may require tighter filtering and more focused recruitment than general office hiring.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      title: "Insurance Hiring Must Balance Efficiency and Professional Standards",
      desc: "The process often needs to move efficiently while still protecting candidate relevance, credibility, and consistency.",
      icon: <Clock className="w-8 h-8 text-gold" />
    }
  ];

  const subSectors = [
    {
      name: "Actuarial Services",
      slug: "actuarial-services",
      desc: "Recruitment support for employers hiring across analytical, modeling, forecasting, pricing-support, and risk-related evaluation environments within insurance.",
      roles: ["Actuarial Support Roles", "Pricing and Analysis Staff", "Risk Analysis Support", "Reporting and Forecasting Roles", "Analytical Insurance Staff"],
      icon: <Calculator className="w-8 h-8 text-gold" />
    },
    {
      name: "Claims Management",
      slug: "claims-management",
      desc: "Hiring support for employers seeking professionals across claims processing, case coordination, customer communication, documentation, and service-led claims environments.",
      roles: ["Claims Support Staff", "Case Coordination Roles", "Documentation and Processing Staff", "Customer Claims Support", "Claims Operations Roles"],
      icon: <FileText className="w-8 h-8 text-gold" />
    },
    {
      name: "Risk Underwriting",
      slug: "risk-underwriting",
      desc: "Recruitment solutions for businesses hiring across underwriting support, risk review, policy-related assessment, and structured decision-support functions.",
      roles: ["Underwriting Support Staff", "Risk Review Roles", "Policy Assessment Support", "Insurance Operations Staff", "Documentation and Evaluation Roles"],
      icon: <ShieldCheck className="w-8 h-8 text-gold" />
    }
  ];

  const expansionTopics = [
    "Policy Administration",
    "Insurance Operations",
    "Customer Service in Insurance",
    "Compliance and Documentation Support",
    "Risk Analysis",
    "Insurance Back-Office Functions"
  ];

  const roleGroups = [
    {
      title: "Analytical & Actuarial Support Roles",
      roles: [
        "Actuarial Support Staff",
        "Pricing and Analysis Roles",
        "Forecasting Support Staff",
        "Reporting Specialists",
        "Risk Analysis Support"
      ]
    },
    {
      title: "Claims & Customer Support Roles",
      roles: [
        "Claims Support Staff",
        "Case Coordinators",
        "Customer Service Roles",
        "Documentation and Processing Staff",
        "Claims Operations Support"
      ]
    },
    {
      title: "Underwriting & Risk Roles",
      roles: [
        "Underwriting Support Staff",
        "Risk Review Roles",
        "Policy Assessment Staff",
        "Insurance Evaluation Support",
        "Structured Decision-Support Roles"
      ]
    },
    {
      title: "Operations & Administration Roles",
      roles: [
        "Insurance Operations Staff",
        "Administrative Coordinators",
        "Office Support Roles",
        "Records and Documentation Support",
        "Workflow and Scheduling Staff"
      ]
    },
    {
      title: "Leadership-Adjacent & Specialist Roles",
      roles: [
        "Team Leads",
        "Department Coordinators",
        "Operations Supervisors",
        "Claims Team Support Leads",
        "Specialist Insurance Support Roles"
      ]
    }
  ];

  const challenges = [
    {
      title: "Maintaining Accuracy and Process Discipline",
      desc: "Insurance environments often need candidates who can work carefully, consistently, and within structured processes."
    },
    {
      title: "Different Insurance Functions Need Different Search Approaches",
      desc: "Actuarial, claims, underwriting, operations, and customer support roles cannot all be recruited with the same candidate logic."
    },
    {
      title: "Weak-Fit Hires Can Affect Service Quality and Internal Efficiency",
      desc: "Because many roles connect to customers, documentation, or risk-sensitive workflows, poor fit can impact both operations and trust."
    },
    {
      title: "Candidate Quality Often Matters More Than Volume",
      desc: "Insurance hiring frequently benefits from sharper shortlists rather than just larger applicant numbers."
    },
    {
      title: "Screening Needs Stronger Business and Role Context",
      desc: "Employers often need more than title matching. They need hiring support that reflects real function requirements, communication standards, and process awareness."
    },
    {
      title: "Recruitment Must Reflect Employer Credibility",
      desc: "The hiring journey itself should feel polished and professional because it reflects directly on the employer’s standards."
    }
  ];

  const supportAreas = [
    {
      title: "Sector-Aware Recruitment Support",
      desc: "Helping employers hire across actuarial services, claims management, risk underwriting, insurance operations, and broader support functions with stronger alignment."
    },
    {
      title: "Permanent and Flexible Hiring Models",
      desc: "Supporting long-term team building as well as flexible hiring models where workload, project, or operational needs vary."
    },
    {
      title: "Screening & Assessment Support",
      desc: "Helping improve shortlist quality and reduce weak-fit candidates in insurance hiring workflows."
    },
    {
      title: "Headhunting for Specialist or Sensitive Roles",
      desc: "Supporting direct-search recruitment where precision, discretion, or candidate quality is especially important."
    },
    {
      title: "Structured Hiring Support for Team Growth",
      desc: "Helping employers build support, operations, underwriting, claims, and coordination teams more effectively through a disciplined recruitment process."
    },
    {
      title: "Connection to Broader Workforce Services",
      desc: "Insurance hiring can connect naturally with permanent recruitment, RPO, employer branding, screening, and turnkey recruitment projects depending on the employer’s needs."
    }
  ];

  const pillars = [
    {
      title: "Insurance-Aware Search Thinking",
      desc: "We treat insurance recruitment as a specialist business environment, not as generic staffing with insurance titles added in."
    },
    {
      title: "Better Role Precision",
      desc: "We help align recruitment more closely with the demands of actuarial, claims, underwriting, operations, and support environments."
    },
    {
      title: "Support Across Core Insurance Sub-Sectors",
      desc: "Our structure already aligns with Actuarial Services, Claims Management, and Risk Underwriting as the primary insurance hiring environments."
    },
    {
      title: "Flexible Connection to Related Services",
      desc: "Insurance recruitment can connect with permanent recruitment, screening and assessment, headhunting, RPO, and employer branding."
    },
    {
      title: "Professional and Polished Delivery",
      desc: "Employers often need a hiring process that feels organized, credible, business-like, and aligned with internal standards."
    },
    {
      title: "Premium, Business-Relevant Support",
      desc: "We help employers recruit insurance talent through a process that feels structured, dependable, and aligned with real workforce needs."
    }
  ];

  const relatedServices = [
    { name: "Permanent Recruitment", href: "/services/permanent-recruitment", desc: "Core long-term hiring solutions for ongoing business needs." },
    { name: "Screening & Assessment", href: "/services/screening-assessment", desc: "Structured candidate screening and evaluation support." },
    { name: "Headhunting Services", href: "/services/headhunting-services", desc: "Targeted direct search for hard-to-fill and specialist hires." },
    { name: "Recruitment Process Outsourcing (RPO)", href: "/services/rpo", desc: "End-to-end recruitment management to scale your hiring operations." },
    { name: "Employer Branding", href: "/services/employer-branding", desc: "Strategic positioning to attract top-tier talent in competitive markets." },
    { name: "Turnkey Recruitment Projects", href: "/services", desc: "Structured project solutions for hiring multiple roles." },
    { name: "Diversity Hiring", href: "/services/diversity-hiring", desc: "Custom recruitment solutions focused on inclusive and diverse pipelines." },
    { name: "Campus Recruitment", href: "/services/campus-recruitment", desc: "Pipeline-building solutions through universities and educational programs." },
    { name: "Talent Mapping", href: "/services/talent-mapping", desc: "Strategic market intelligence and recruitment planning support." }
  ];

  const faqs = [
    {
      question: "Does NAYA Staffing recruit for insurance roles?",
      answer: "Yes. NAYA Staffing supports hiring across the Insurance sector, including actuarial services, claims management, risk underwriting, insurance operations, and related business-support functions."
    },
    {
      question: "What types of insurance roles can NAYA Staffing help fill?",
      answer: "NAYA Staffing can support hiring for actuarial support roles, claims staff, underwriting support, insurance operations roles, customer support functions, and other insurance-related positions."
    },
    {
      question: "Can NAYA Staffing support actuarial services, claims management, and underwriting hiring?",
      answer: "Yes. Your approved industry structure already lists Actuarial Services, Claims Management, and Risk Underwriting as the main insurance sub-areas supported on this page."
    },
    {
      question: "Why is insurance recruitment different from general recruitment?",
      answer: "Insurance recruitment often requires stronger process awareness, better role alignment, clearer professionalism screening, and a more structured hiring process than broader recruitment alone."
    },
    {
      question: "Can NAYA Staffing help with hard-to-fill insurance roles?",
      answer: "Yes. NAYA Staffing can support more difficult insurance hiring needs through focused recruitment, shortlist refinement, and proactive search where needed."
    },
    {
      question: "Is this page only for insurers?",
      answer: "No. This page can support a wider range of insurance-related employers, including insurers, brokers, claims environments, underwriting teams, risk-focused functions, and broader insurance operations."
    }
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Insurance & Risk Talent Recruitment</span>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
            <Typewriter>
              Insurance Recruitment for <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Precision, Trust, & Continuity
              </span>
            </Typewriter>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
              NAYA Staffing supports employers across the Insurance sector with recruitment solutions designed for actuarial services, claims management, risk underwriting, insurance operations, and broader business-support environments. Whether you are hiring for analytical roles, claims-processing functions, underwriting support, client-facing insurance teams, or operational capacity, we help employers access relevant candidates with greater confidence and hiring precision.
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up animate-delay-300">
              <Link 
                href="/schedule-consultation" 
                className="btn-rotating-border group relative px-8 py-4 bg-white/5 hover:bg-white/10 text-white hover:text-gold font-bold rounded-full transition-all duration-300 overflow-hidden shadow-2xl shadow-gold/20 btn-auto-sheen border border-white/5"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Schedule Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 transition-all duration-300 backdrop-blur-xl btn-sheen"
              >
                Explore Our Services
              </Link>
            </div>
            <div className="pt-10 border-t border-white/5 mt-10 max-w-xl mx-auto text-center animate-fade-in-up animate-delay-400">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 leading-loose">
                Built for employers that need credible talent, stronger role accuracy, and a recruitment process shaped around consistency, trust, and professional standards.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-20">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold to-transparent"></div>
        </div>
      </section>

      {/* 2. INDUSTRY OVERVIEW SECTION */}
      <section className="py-24 relative overflow-hidden bg-navy-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 lg:gap-12 xl:gap-20 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
                Industry Context
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                Recruitment Support for <br className="hidden md:inline" />
                <span className="text-gold">Accuracy-Driven Insurance Environments</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Insurance hiring often sits close to risk evaluation, policy administration, claims handling, business continuity, customer service, and process accuracy. Employers may be recruiting for roles that directly affect how cases are managed, how underwriting decisions are supported, how data is interpreted, and how clients experience the organization. That means recruitment needs to focus on reliability, judgment, communication, and role relevance from the beginning.
              </p>
              <p>
                The Insurance sector also includes multiple hiring environments. Some employers are focused on actuarial and analytical work. Others need claims management staff, underwriting support, operational coordinators, customer-facing insurance professionals, or administrative teams that can work effectively in structured, detail-sensitive environments. Similar job titles can mean very different things depending on the insurer, broker, support model, or internal process.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                NAYA Staffing’s Insurance recruitment support is designed to help employers hire more effectively across those environments. We work with insurance-related businesses that need stronger access to relevant talent, better shortlist quality, and a recruitment process that reflects the standards and precision of the sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY INSURANCE RECRUITMENT REQUIRES A SPECIALIZED APPROACH */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="btn-rotating-border absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 btn-auto-sheen border border-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Insurance <span className="text-gold">Recruitment Is Different</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Insurance hiring is different from general recruitment because many roles require greater precision, process awareness, and trust in how work is carried out.
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

      {/* 4. INSURANCE SUB-SECTORS WE SUPPORT */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Insurance <span className="text-gold">Areas We Support</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              We support hiring across Actuarial Services, Claims Management, and Risk Underwriting, with broader capability across insurance operations and related support environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
            {subSectors.map((sub, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="btn-rotating-border w-14 h-14 bg-white/5 border border-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/5 group-hover:text-white hover:text-gold transition-all duration-500 btn-auto-sheen border border-white/5">
                      {sub.icon}
                    </div>
                    <h3 className="text-white font-black text-2xl leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                      {sub.name}
                    </h3>
                    <p className="text-slate-400 text-sm font-semibold leading-relaxed mt-4 mb-6 group-hover:text-slate-300 transition-colors">
                      {sub.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {sub.roles.map((role, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-slate-400 font-semibold uppercase btn-sheen">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link 
                    href={`/industries/insurance/${sub.slug}`}
                    className="group/link inline-flex items-center gap-2 text-xs font-black tracking-widest text-gold hover:text-white uppercase transition-colors mt-auto"
                  >
                    Learn More About {sub.name} Hiring <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OPTIONAL EXPANSION / FUTURE SUB-SECTORS */}
      <section className="py-24 bg-navy relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl text-center space-y-8">
          <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
            Expansion Domains
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            Additional Insurance Areas <span className="text-gold">for Expansion</span>
          </h2>
          <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
          <p className="text-slate-400 text-lg leading-relaxed font-semibold max-w-4xl mx-auto">
            We support a wider insurance footprint across these adjacent categories:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-10">
            {expansionTopics.map((topic, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-gold/20 text-center transition-all duration-300">
                <span className="text-sm font-bold text-slate-300 tracking-tight">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ROLES WE HELP FILL */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Insurance Roles We <span className="text-gold">Help Employers Hire</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports recruitment across a wide range of insurance-related roles depending on the employer’s service model, operational structure, and hiring priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-8">
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

      {/* 7. HIRING CHALLENGES */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Common Hiring Challenges in the <span className="text-gold">Insurance Sector</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Insurance employers often face recruitment conditions that require stronger structure, clearer evaluation, and more confidence in candidate suitability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
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

      {/* 8. HOW NAYA STAFFING SUPPORTS INSURANCE EMPLOYERS */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              How We Support <span className="text-gold">Insurance Hiring</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports Insurance employers with recruitment solutions designed around role accuracy, process reliability, and business-critical talent needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
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

      {/* 9. WHY EMPLOYERS CHOOSE NAYA STAFFING FOR INSURANCE RECRUITMENT */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose NAYA Staffing <span className="text-gold">for Insurance Recruitment</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Insurance recruitment requires stronger business awareness, more structured candidate evaluation, and a hiring process that reflects trust and professionalism. NAYA Staffing’s approach is designed around those expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
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

      {/* 10. RELATED SERVICES */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 xl:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.95]">
                Related Services <br/>
                for <span className="text-gold">Insurance Hiring</span>
              </h2>
              <div className="btn-rotating-border h-1 w-20 bg-white/5 rounded-full btn-auto-sheen border border-white/5"></div>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                Insurance employers often need more than one recruitment model depending on role type, business sensitivity, team growth, and operational priorities.
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

      {/* 11. FAQ SECTION */}
      <section className="bg-navy py-32 overflow-hidden border-t border-white/5">
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
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-navy-light/10 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-panel p-12 md:p-24 rounded-[4rem] text-center border border-gold/20 shadow-2xl shadow-gold/10">
            <div className="btn-rotating-border inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 text-white hover:text-gold mb-10 shadow-2xl shadow-gold/30 btn-auto-sheen border border-white/5">
              <Briefcase className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Build Stronger Insurance Teams <br/>
              With <span className="text-gold">More Precise Hiring Support</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              Insurance hiring depends on accuracy, trust, and dependable role alignment. NAYA Staffing helps employers recruit across the Insurance sector with a more structured, insurance-aware, and premium approach to talent acquisition.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 xl:gap-8">
              <Link 
                href="/schedule-consultation" 
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
                href="/services" 
                className="w-full sm:w-auto px-16 py-8 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-gold hover:text-gold font-black rounded-[32px] transition-all uppercase tracking-[0.3em] text-[10px] btn-sheen"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking Footer Block */}
      <section className="py-12 bg-[#040814] border-t border-white/5 text-sm font-bold text-slate-500">
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
