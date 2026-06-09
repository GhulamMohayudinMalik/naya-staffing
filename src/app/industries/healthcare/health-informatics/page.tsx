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
  Activity,
  Award,
  Activity as DiagnosticIcon
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "Health Informatics Recruitment & Digital Health Hiring Solutions | NAYA Staffing",
  description: "NAYA Staffing provides health informatics recruitment services for employers hiring digital health specialists, healthcare data professionals, systems-support talent, and broader informatics-focused workforce roles.",
  keywords: [
    "health informatics recruitment agency",
    "health informatics staffing",
    "digital health recruitment",
    "healthcare data hiring agency",
    "informatics talent acquisition",
    "health tech recruitment services",
    "healthcare systems recruitment",
    "health informatics staffing solutions",
    "healthcare analytics recruitment",
    "EHR support hiring",
    "clinical systems staffing",
    "health information recruitment",
    "digital healthcare staffing",
    "healthcare technology recruitment",
    "informatics workforce solutions",
    "data-driven healthcare hiring"
  ]
};

export default function HealthInformaticsSubIndustryPage() {
  const reasons = [
    {
      title: "The Roles Sit Between Healthcare and Technology",
      desc: "Strong candidates often need to operate across both care environments and digital systems.",
      icon: <Cpu className="w-8 h-8 text-gold" />
    },
    {
      title: "System Context Matters More Than Generic IT Experience",
      desc: "Healthcare information roles often require understanding of workflows, records, reporting, and regulated data environments.",
      icon: <Settings className="w-8 h-8 text-gold" />
    },
    {
      title: "Weak-Fit Hires Can Affect Efficiency and Data Confidence",
      desc: "Poor-fit informatics hiring can impact adoption, reporting quality, documentation flow, and operational visibility.",
      icon: <Activity className="w-8 h-8 text-gold" />
    },
    {
      title: "Titles Can Be Broad but Requirements Are Specific",
      desc: "Health informatics roles may look similar on paper but differ by platform, care setting, analytics scope, or operational responsibility.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      title: "The Best Candidates Often Need More Targeted Search",
      desc: "Employers may need sharper sourcing and screening rather than broad applicant flow.",
      icon: <Globe className="w-8 h-8 text-gold" />
    },
    {
      title: "Digital Healthcare Growth Needs Better Hiring Structure",
      desc: "As systems mature, informatics hiring often becomes more strategic and capability-led.",
      icon: <Clock className="w-8 h-8 text-gold" />
    }
  ];

  const areas = [
    {
      title: "Healthcare Data & Reporting",
      desc: "Hiring support for roles connected to healthcare data use, reporting quality, information visibility, and operational insight."
    },
    {
      title: "Clinical Information Workflows",
      desc: "Support for employers hiring around documentation flow, information access, records quality, and system-based clinical processes."
    },
    {
      title: "Digital Health Systems Support",
      desc: "Coverage for roles working close to EHR-style environments, healthcare software usage, or platform-enabled healthcare operations."
    },
    {
      title: "Informatics & Analytics Functions",
      desc: "Support for organizations strengthening internal informatics capability, operational analysis, and information-led decision support."
    },
    {
      title: "Transformation & Modernization Support",
      desc: "Hiring support for employers improving digital-health processes, systems adoption, or information-management maturity."
    },
    {
      title: "Health-Tech Team Growth Support",
      desc: "Support for structured build-outs across informatics, systems, and healthcare-data capability."
    }
  ];

  const roleGroups = [
    {
      title: "Informatics & Systems Roles",
      roles: [
        "Health Informatics Specialists",
        "Digital Health Support Roles",
        "Clinical Systems Support Staff",
        "Healthcare Information Roles",
        "Informatics Coordination Staff"
      ]
    },
    {
      title: "Data & Reporting Roles",
      roles: [
        "Healthcare Data Support Roles",
        "Reporting and Information Staff",
        "Analytics-Adjacent Healthcare Roles",
        "Data Quality Support Staff",
        "Operational Insight Roles"
      ]
    },
    {
      title: "Workflow & Operations Roles",
      roles: [
        "Clinical Information Workflow Support",
        "Records and Systems Coordination Roles",
        "Platform Adoption Support Roles",
        "Healthcare Operations Technology Staff",
        "Process Improvement Support Roles"
      ]
    },
    {
      title: "Growth & Specialist Roles",
      roles: [
        "Senior Informatics Staff",
        "Health-Tech Team Leads",
        "Systems Transformation Support Roles",
        "Multi-role Digital Health Build-Out Staff",
        "Niche Informatics Hiring Roles"
      ]
    }
  ];

  const challenges = [
    {
      title: "Candidates Need More Than Technical Familiarity",
      desc: "They often need to understand real healthcare workflows, not just software terminology."
    },
    {
      title: "Role Definitions Can Vary Widely by Employer",
      desc: "The same informatics title may represent different systems, reporting needs, or operational responsibilities."
    },
    {
      title: "Weak-Fit Hires Can Slow Digital Adoption",
      desc: "Poor-fit informatics hires may affect workflow quality, data confidence, and systems efficiency."
    },
    {
      title: "Relevant Talent Can Be Harder to Source",
      desc: "Employers may need sharper search logic to find candidates who match both healthcare and technology context."
    },
    {
      title: "Digital Healthcare Growth Often Needs Better Structure",
      desc: "As healthcare systems evolve, hiring becomes more strategic and less ad hoc."
    },
    {
      title: "Candidate Quality Matters More Than Broad Volume",
      desc: "Relevant shortlists are usually more valuable than large applicant pools in this space."
    }
  ];

  const supportAreas = [
    {
      title: "Healthcare-Tech-Aware Recruitment Support",
      desc: "Helping employers hire with better understanding of systems environments, workflow context, and informatics relevance."
    },
    {
      title: "Permanent and Flexible Hiring Models",
      desc: "Supporting long-term informatics hires as well as project or transformation-related workforce needs where needed."
    },
    {
      title: "Screening & Assessment Support",
      desc: "Helping improve shortlist quality and reduce weak-fit candidates in informatics hiring workflows."
    },
    {
      title: "Headhunting for Specialist Digital Health Talent",
      desc: "Supporting targeted search where niche informatics or health-tech roles require more precision."
    },
    {
      title: "Turnkey Support for Team Expansion",
      desc: "Helping employers scale informatics and digital-health capability through structured recruitment delivery."
    },
    {
      title: "Connection to Broader Workforce Services",
      desc: "This area can connect naturally with permanent recruitment, contract staffing, screening and assessment, RPO, and turnkey recruitment projects."
    }
  ];

  const pillars = [
    {
      title: "Better Cross-Context Role Precision",
      desc: "We help employers recruit with stronger alignment to both healthcare and systems needs."
    },
    {
      title: "Better Understanding of Digital Health Environments",
      desc: "We treat informatics hiring as its own specialist environment, not as generic healthcare or generic IT staffing."
    },
    {
      title: "Support for Team Growth and Transformation Needs",
      desc: "We support both individual roles and broader digital-health capability expansion."
    },
    {
      title: "Flexible Connection to Related Services",
      desc: "Health informatics recruitment can connect with screening, permanent recruitment, contract staffing, RPO, and turnkey projects."
    },
    {
      title: "Professional, Structured Delivery",
      desc: "Healthcare organizations often need a hiring process that feels organized, credible, and workflow-aware."
    },
    {
      title: "Built Inside the Healthcare Industry Structure",
      desc: "This page is part of the reviewed Healthcare framework, where Health Informatics is explicitly listed as a child category."
    }
  ];

  const relatedServices = [
    { name: "Permanent Recruitment", href: "/permanent-recruitment", desc: "Core long-term hiring solutions for ongoing business needs." },
    { name: "Contract Staffing", href: "/contract-staffing", desc: "Flexible staffing solutions for temporary or project-based needs." },
    { name: "Screening & Assessment", href: "/screening-assessment", desc: "Structured candidate screening and evaluation support." },
    { name: "Recruitment Process Outsourcing (RPO)", href: "/recruitment-process-outsourcing", desc: "End-to-end recruitment management to scale your hiring operations." },
    { name: "Turnkey Recruitment Projects", href: "/services", desc: "Structured project solutions for hiring multiple roles." },
    { name: "Talent Mapping", href: "/talent-mapping", desc: "Strategic market intelligence and recruitment planning services." },
    { name: "Employer Branding", href: "/employer-branding", desc: "Strategic positioning to attract top-tier talent in competitive markets." },
    { name: "Headhunting Services", href: "/headhunting-services", desc: "Targeted direct search for hard-to-fill and specialist hires." }
  ];

  const relatedMainPages = [
    { name: "Industries Overview", href: "/our-industries" },
    { name: "Healthcare Overview", href: "/industries/healthcare" },
    { name: "Employer Solutions", href: "/employer-solutions" },
    { name: "Contact Us", href: "/contact-us" }
  ];

  const faqs = [
    {
      question: "Does NAYA Staffing recruit for health informatics roles?",
      answer: "Yes. NAYA Staffing supports hiring across health informatics environments, including healthcare data, clinical systems support, digital-health operations, and broader information-driven healthcare roles."
    },
    {
      question: "What health informatics roles can NAYA Staffing help fill?",
      answer: "NAYA Staffing can support hiring for health informatics specialists, digital health support roles, healthcare information staff, clinical systems support, and related workforce needs."
    },
    {
      question: "Why is health informatics recruitment different from general healthcare or IT recruitment?",
      answer: "Because health informatics hiring depends on both healthcare workflow understanding and digital-systems relevance, which requires more specialized role alignment."
    },
    {
      question: "Is Health Informatics an approved subpage in the structure?",
      answer: "Yes. NAYA Staffing's structure explicitly lists Health Informatics as a reviewed child category under Healthcare."
    },
    {
      question: "Can NAYA Staffing help employers build digital-health teams?",
      answer: "Yes. NAYA Staffing can support both individual informatics hires and broader digital-health capability growth through structured recruitment support."
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Digital Health & Informatics Talent Recruitment</span>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
            <Typewriter>
              Health Informatics Recruitment for <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Smarter Digital Systems
              </span>
            </Typewriter>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
              NAYA Staffing supports employers hiring across health informatics environments, including healthcare data functions, digital-care systems, clinical information workflows, healthcare technology operations, and broader informatics-led transformation roles. Whether you are improving data visibility, supporting digital-health delivery, or building a stronger health-tech function, we help employers access more relevant candidates with greater confidence and recruitment clarity.
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
                href="/services" 
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 transition-all duration-300 backdrop-blur-xl btn-sheen"
              >
                Explore Our Services
              </Link>
            </div>
            <div className="pt-10 border-t border-white/5 mt-10 max-w-xl mx-auto text-center animate-fade-in-up animate-delay-400">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 leading-loose">
                Built for healthcare employers that need stronger digital-health hiring, better system-role fit, and a more structured path to informatics capability.
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
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 lg:gap-12 xl:gap-20 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
                Overview
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                Recruitment Support for <br className="hidden md:inline" />
                <span className="text-gold">Healthcare Data & Systems</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Health informatics hiring often affects system usability, clinical information flow, reporting quality, operational visibility, data accuracy, and the wider effectiveness of digital healthcare environments. Employers in this space are often hiring for roles that sit between healthcare delivery, information systems, digital operations, analytics, and platform-enabled care improvement.
              </p>
              <p>
                This is also a hiring environment where dual-context understanding matters. A strong candidate may need to understand not only technology and systems, but also healthcare workflows, patient-data sensitivity, operational context, and information accuracy. That means better recruitment depends on sharper role understanding, stronger cross-functional fit, and a hiring process that respects both healthcare and technical realities.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                NAYA Staffing’s health informatics recruitment support is designed to help healthcare employers hire more effectively across those environments. We support organizations that need stronger informatics shortlists, better digital-health role alignment, and a recruitment process that reflects the strategic importance of healthcare information systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY HEALTH INFORMATICS RECRUITMENT REQUIRES A SPECIALIZED APPROACH */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="btn-rotating-border absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 btn-auto-sheen border border-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Health Informatics <span className="text-gold">Recruitment Is Different</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Health informatics hiring is different from general recruitment because it often requires a mix of healthcare understanding, systems awareness, information accuracy, and digital-workflow alignment.
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

      {/* 4. HEALTH INFORMATICS AREAS WE SUPPORT */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Health Informatics <span className="text-gold">Areas We Support</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              We support organizations across several healthcare data and digital systems disciplines:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
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
              Health Informatics Roles We <span className="text-gold">Help Employers Hire</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports recruitment across a wide range of health-informatics roles depending on the employer’s systems environment, operational model, and digital-health priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
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
              Common Hiring Challenges in <span className="text-gold">Health Informatics</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Healthcare employers often face recruitment conditions in this area that require both domain understanding and digital-system relevance.
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

      {/* 7. HOW NAYA STAFFING SUPPORTS HEALTH INFORMATICS EMPLOYERS */}
      <section className="py-32 bg-navy relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              How We Support <span className="text-gold">Health Informatics Hiring</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports healthcare employers with recruitment solutions designed around information-flow relevance, digital-health context, and stronger systems-role alignment.
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

      {/* 8. WHY EMPLOYERS CHOOSE NAYA STAFFING FOR HEALTH INFORMATICS RECRUITMENT */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose NAYA Staffing <span className="text-gold">for Health Informatics</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Health informatics recruitment requires stronger healthcare-tech awareness, sharper role alignment, and a hiring process that reflects digital-health realities.
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

      {/* 9. RELATED SERVICES */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 xl:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.95]">
                Related Services <br/>
                for <span className="text-gold">Informatics Hiring</span>
              </h2>
              <div className="btn-rotating-border h-1 w-20 bg-white/5 rounded-full btn-auto-sheen border border-white/5"></div>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                Connect health informatics staffing with our broader solutions to support digital-health transformation.
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

      {/* 11. FINAL CTA SECTION */}
      <section className="py-32 relative overflow-hidden bg-navy border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="btn-rotating-border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.03] blur-[200px] rounded-full btn-auto-sheen border border-white/5"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-navy-light/10 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-panel p-12 md:p-24 rounded-[4rem] text-center border border-gold/20 shadow-2xl shadow-gold/10">
            <div className="btn-rotating-border inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 text-white hover:text-gold mb-10 shadow-2xl shadow-gold/30 btn-auto-sheen border border-white/5">
              <DiagnosticIcon className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Build Stronger Digital Healthcare Teams <br/>
              With <span className="text-gold">Precise Sourcing Support</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              Health informatics hiring depends on healthcare context, systems relevance, and stronger role fit. NAYA Staffing helps healthcare employers hire more effectively across digital-health environments with a more structured, informatics-aware recruitment approach.
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
      <section className="py-12 bg-navy-dark border-t border-white/5 text-sm font-bold text-slate-500">
        <div className="container mx-auto px-6 flex flex-wrap gap-x-8 gap-y-4 justify-center">
          <Link href="/our-industries" className="hover:text-gold transition-colors">Industries Overview</Link>
          <Link href="/industries/healthcare" className="hover:text-gold transition-colors">Healthcare Overview</Link>
          <Link href="/industries/healthcare/nursing-allied-health" className="hover:text-gold transition-colors">Nursing & Allied Health</Link>
          <Link href="/industries/healthcare/health-informatics" className="hover:text-gold transition-colors">Health Informatics</Link>
          <Link href="/industries/healthcare/medical-devices" className="hover:text-gold transition-colors">Medical Devices</Link>
        </div>
      </section>
    </main>
  );
}
