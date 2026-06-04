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
  Scale,
  UserCheck
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "Professional Services Recruitment & Business Staffing Solutions | NAYA Staffing",
  description: "NAYA Staffing provides professional services recruitment for employers hiring across financial services, legal staffing, HR consulting, administration, advisory, and business-support roles.",
  keywords: [
    "professional services recruitment agency",
    "professional services staffing solutions",
    "business services recruitment",
    "financial services recruitment",
    "legal staffing agency",
    "HR consulting recruitment",
    "professional staffing company",
    "administrative recruitment services",
    "advisory recruitment support",
    "office and business support hiring",
    "finance and legal staffing",
    "business operations recruitment",
    "professional talent acquisition",
    "client-facing role recruitment",
    "corporate support staffing",
    "professional services hiring agency"
  ]
};

export default function ProfessionalServicesOverviewPage() {
  const reasons = [
    {
      title: "Professional Credibility Matters",
      desc: "In many professional services roles, communication style, judgment, attention to detail, and reliability are just as important as technical experience.",
      icon: <Award className="w-8 h-8 text-gold" />
    },
    {
      title: "The Sector Includes Distinct Business Functions",
      desc: "Financial services, legal staffing, HR consulting, administration, and advisory roles all require different sourcing and screening logic.",
      icon: <Globe className="w-8 h-8 text-gold" />
    },
    {
      title: "Role Context Can Be Highly Sensitive",
      desc: "Some positions involve confidential information, compliance-sensitive work, internal governance, or direct client interaction.",
      icon: <ShieldCheck className="w-8 h-8 text-gold" />
    },
    {
      title: "Candidate Fit Extends Beyond Job Titles",
      desc: "A strong professional hire needs to fit the pace, standards, and expectations of the business environment, not just the task list on paper.",
      icon: <Users className="w-8 h-8 text-gold" />
    },
    {
      title: "Weak-Fit Hiring Can Affect Clients and Internal Operations",
      desc: "Poor hiring decisions can impact service quality, internal performance, process accuracy, and business reputation.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      title: "Professional Services Hiring Must Balance Precision and Efficiency",
      desc: "Employers often need roles filled with care and structure, but also without unnecessary delay.",
      icon: <Clock className="w-8 h-8 text-gold" />
    }
  ];

  const subSectors = [
    {
      name: "Financial Services",
      slug: "financial-services",
      desc: "Recruitment support for employers hiring across finance-led business functions, reporting environments, analysis support, operational finance roles, and broader business services functions connected to financial performance.",
      roles: ["Finance Support Staff", "Reporting Coordinators", "Administrative Finance Roles", "Accounts and Operations Support", "Business Services Roles"],
      icon: <DollarSign className="w-8 h-8 text-gold" />
    },
    {
      name: "Legal Staffing",
      slug: "legal-staffing",
      desc: "Hiring support for employers seeking legal-support talent, documentation-focused professionals, administrative legal staff, and broader legal-adjacent business roles.",
      roles: ["Legal Support Staff", "Documentation Coordinators", "Compliance Support Roles", "Legal Administration Staff", "Case and File Support Roles"],
      icon: <Scale className="w-8 h-8 text-gold" />
    },
    {
      name: "HR Consulting",
      slug: "hr-consulting",
      desc: "Recruitment solutions for businesses hiring across HR support, people operations, consulting-adjacent roles, coordination functions, and internal workforce support environments.",
      roles: ["HR Support Staff", "People Operations Roles", "HR Coordinators", "Talent Support Roles", "HR Administration Staff"],
      icon: <UserCheck className="w-8 h-8 text-gold" />
    }
  ];

  const expansionTopics = [
    "Finance & Banking",
    "Legal & Compliance",
    "Business Administration",
    "Office Operations",
    "Advisory Support",
    "Client Services Roles"
  ];

  const roleGroups = [
    {
      title: "Finance & Business Support Roles",
      roles: [
        "Finance Support Staff",
        "Reporting Assistants",
        "Accounts Administration Roles",
        "Business Operations Staff",
        "Documentation Support Roles"
      ]
    },
    {
      title: "Legal & Compliance Support Roles",
      roles: [
        "Legal Support Staff",
        "Documentation Coordinators",
        "File and Records Support Roles",
        "Compliance Support Staff",
        "Case Administration Roles"
      ]
    },
    {
      title: "HR & People Operations Roles",
      roles: [
        "HR Coordinators",
        "People Operations Support",
        "Talent Support Roles",
        "Recruitment Administration Roles",
        "Employee Support Functions"
      ]
    },
    {
      title: "Office & Administrative Roles",
      roles: [
        "Executive Support Staff",
        "Administrative Coordinators",
        "Office Managers",
        "Client Services Support Roles",
        "Operations Assistants"
      ]
    },
    {
      title: "Leadership-Adjacent & Specialist Roles",
      roles: [
        "Team Leads",
        "Department Coordinators",
        "Operations Supervisors",
        "Advisory Support Staff",
        "Specialist Business Support Roles"
      ]
    }
  ];

  const challenges = [
    {
      title: "Maintaining Professional Standards in Hiring",
      desc: "Employers often need candidates who can communicate well, work accurately, and operate credibly in business-critical environments."
    },
    {
      title: "Different Functional Areas Need Different Search Approaches",
      desc: "Finance, legal support, HR consulting, administration, and advisory roles cannot all be recruited with the same candidate logic."
    },
    {
      title: "Weak-Fit Hires Can Affect Client Confidence and Internal Performance",
      desc: "Because many roles connect to sensitive or visible business functions, poor fit can affect both service quality and internal efficiency."
    },
    {
      title: "Candidate Quality Matters More Than Volume",
      desc: "Professional Services hiring often requires a sharper shortlist rather than a broader pile of applications."
    },
    {
      title: "Screening Needs Stronger Business Context",
      desc: "Employers often need more than resume matching. They need hiring support that reflects real role context, communication standards, and professional expectations."
    },
    {
      title: "Recruitment Must Reflect the Employer's Brand and Credibility",
      desc: "The hiring journey itself should feel polished and professional because it reflects directly on the employer."
    }
  ];

  const supportAreas = [
    {
      title: "Sector-Aware Recruitment Support",
      desc: "Helping employers hire across financial services, legal staffing, HR consulting, administration, and broader business-support functions with stronger alignment."
    },
    {
      title: "Permanent and Flexible Hiring Models",
      desc: "Supporting long-term team building as well as flexible hiring models where project, workload, or operational needs vary."
    },
    {
      title: "Screening & Assessment Support",
      desc: "Helping improve shortlist quality and reduce weak-fit candidates in professional services hiring workflows."
    },
    {
      title: "Headhunting for Specialist or Sensitive Roles",
      desc: "Supporting direct-search recruitment for roles where discretion, specificity, or candidate quality is especially important."
    },
    {
      title: "Structured Hiring Support for Team Growth",
      desc: "Helping employers build support, advisory, operational, and coordination teams more effectively through a disciplined recruitment process."
    },
    {
      title: "Connection to Broader Workforce Services",
      desc: "Professional services hiring can connect naturally with permanent recruitment, RPO, employer branding, screening, and turnkey recruitment projects depending on the employer’s needs."
    }
  ];

  const pillars = [
    {
      title: "Professional Services-Aware Search Thinking",
      desc: "We treat professional services recruitment as a specialist business environment, not as generic staffing with office-based titles added in."
    },
    {
      title: "Better Role Precision",
      desc: "We help align recruitment more closely with the demands of finance-related, legal-support, HR, administrative, and advisory environments."
    },
    {
      title: "Support Across Core Professional Services Sub-Sectors",
      desc: "Our structure already aligns with Financial Services, Legal Staffing, and HR Consulting as the primary sub-sector hiring environments."
    },
    {
      title: "Flexible Connection to Related Services",
      desc: "Professional Services recruitment can connect with permanent recruitment, screening and assessment, headhunting, RPO, and employer branding."
    },
    {
      title: "Professional and Polished Delivery",
      desc: "Employers often need a hiring process that feels organized, credible, business-like, and aligned with internal standards."
    },
    {
      title: "Premium, Business-Relevant Support",
      desc: "We help employers recruit professional talent through a process that feels structured, dependable, and aligned with real workforce needs."
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
      question: "Does NAYA Staffing recruit for professional services roles?",
      answer: "Yes. NAYA Staffing supports hiring across the Professional Services sector, including financial services, legal staffing, HR consulting, administration, and related business-support functions."
    },
    {
      question: "What types of professional services roles can NAYA Staffing help fill?",
      answer: "NAYA Staffing can support hiring for finance support roles, legal support staff, HR coordinators, administrative professionals, operations support staff, and other business-critical professional positions."
    },
    {
      question: "Can NAYA Staffing support financial services, legal staffing, and HR consulting hiring?",
      answer: "Yes. Your approved industry structure already lists Financial Services, Legal Staffing, and HR Consulting as the main professional services sub-areas supported on this page."
    },
    {
      question: "Why is professional services recruitment different from general recruitment?",
      answer: "Professional services recruitment often requires stronger communication standards, better business-context screening, more precise shortlisting, and a more polished hiring process than broader recruitment alone."
    },
    {
      question: "Can NAYA Staffing help with hard-to-fill professional services roles?",
      answer: "Yes. NAYA Staffing can support more difficult professional services hiring needs through focused recruitment, shortlist refinement, and proactive search where needed."
    },
    {
      question: "Is this page only for consulting firms?",
      answer: "No. This page can support a wider range of employers across finance-related teams, legal support functions, HR consulting environments, administration, operations, and broader business services roles."
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Business-Critical Talent Recruitment</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
              Professional Services Recruitment for <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Precision, Trust, and Business Performance
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed mb-10">
              NAYA Staffing supports employers across the Professional Services sector with recruitment solutions designed for financial services, legal staffing, HR consulting, administration, advisory functions, and broader business-support environments. Whether you are hiring for client-facing roles, internal operational support, specialist advisory functions, or business-critical office teams, we help employers access relevant talent with greater confidence and hiring precision.
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
                Built for employers that need credible talent, stronger professional alignment, and a recruitment process shaped around accuracy, communication, and business standards.
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
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold">
                Industry Context
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                Recruitment Support for <br className="hidden md:inline" />
                <span className="text-gold">High-Trust Professional Environments</span>
              </h2>
              <div className="h-1.5 w-20 bg-gold rounded-full opacity-60"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Professional Services hiring often sits close to the core of business operations, client delivery, compliance, administration, and strategic support. Employers may be recruiting for roles that directly affect service quality, internal efficiency, financial processes, legal support, people operations, and day-to-day business performance. That means recruitment needs to focus on role relevance, communication strength, professionalism, and dependable execution.
              </p>
              <p>
                The Professional Services sector includes multiple hiring environments. Some employers are focused on finance-related support and reporting functions. Others need legal staffing, HR consulting capability, office operations, advisory support, or client-facing professionals who can work effectively in structured and credibility-driven business environments. Similar job titles can mean very different things depending on the company, service model, and operational context.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                NAYA Staffing’s Professional Services recruitment support is designed to help employers hire more effectively across those environments. We work with businesses that need stronger access to relevant professional talent, better shortlist quality, and a recruitment process that reflects the standards and expectations of business-critical roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY PROFESSIONAL SERVICES RECRUITMENT REQUIRES A SPECIALIZED APPROACH */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Professional Services <span className="text-gold">Recruitment Is Different</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Professional Services hiring is different from general recruitment because the roles often demand stronger communication, discretion, structure, professionalism, and business context awareness.
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

      {/* 4. PROFESSIONAL SERVICES SUB-SECTORS WE SUPPORT */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Professional Services <span className="text-gold">Areas We Support</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              We support hiring across Financial Services, Legal Staffing, and HR Consulting, with broader capability across administration, advisory, and business-support environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subSectors.map((sub, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 bg-gold/5 border border-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gold group-hover:text-navy-dark transition-all duration-500">
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
                        <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-slate-400 font-semibold uppercase">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link 
                    href={`/industries/professional-services/${sub.slug}`}
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
          <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold">
            Expansion Domains
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            Additional Professional Services Areas <span className="text-gold">for Expansion</span>
          </h2>
          <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
          <p className="text-slate-400 text-lg leading-relaxed font-semibold max-w-4xl mx-auto">
            We support a wider professional footprint across these adjacent categories:
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
              Professional Services Roles We <span className="text-gold">Help Employers Hire</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports recruitment across a wide range of professional services roles depending on the employer’s business model, operational structure, and service environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
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
              Common Hiring Challenges in the <span className="text-gold">Professional Services Sector</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Professional Services employers often face hiring conditions that require stronger screening, greater role precision, and more confidence in candidate professionalism.
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

      {/* 8. HOW NAYA STAFFING SUPPORTS PROFESSIONAL SERVICES EMPLOYERS */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              How We Support <span className="text-gold">Professional Services Hiring</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports Professional Services employers with recruitment solutions designed around professionalism, role accuracy, and business-critical talent needs.
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

      {/* 9. WHY EMPLOYERS CHOOSE NAYA STAFFING FOR PROFESSIONAL SERVICES RECRUITMENT */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose NAYA Staffing <span className="text-gold">for Professional Services Recruitment</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Professional Services recruitment requires stronger business awareness, more polished candidate evaluation, and a hiring process that reflects trust and professionalism. NAYA Staffing’s approach is designed around those expectations.
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

      {/* 10. RELATED SERVICES */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.95]">
                Related Services <br/>
                for <span className="text-gold">Professional Services Hiring</span>
              </h2>
              <div className="h-1 w-20 bg-gold rounded-full"></div>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                Professional Services employers often need more than one recruitment model depending on role type, business sensitivity, team growth, and operational priorities.
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

      {/* 12. FINAL CTA SECTION */}
      <section className="py-32 relative overflow-hidden bg-navy-dark border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gold/[0.03] blur-[200px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-navy-light/10 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-panel p-12 md:p-24 rounded-[4rem] text-center border border-gold/20 shadow-2xl shadow-gold/10">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gold text-navy-dark mb-10 shadow-2xl shadow-gold/30">
              <Briefcase className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Build Stronger Professional Services Teams <br/>
              With <span className="text-gold">More Precise Hiring Support</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              Professional Services hiring depends on credibility, communication, and dependable role alignment. NAYA Staffing helps employers recruit across the Professional Services sector with a more structured, business-aware, and premium approach to talent acquisition.
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
      <section className="py-12 bg-[#040814] border-t border-white/5 text-sm font-bold text-slate-500">
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
