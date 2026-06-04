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
  Factory,
  Truck,
  Boxes,
  ClipboardCheck,
  Wrench
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "Industrial Recruitment & Manufacturing Staffing Solutions | NAYA Staffing",
  description: "NAYA Staffing provides industrial recruitment services for employers hiring across manufacturing operations, logistics and supply chain, quality assurance, warehousing, and production support roles.",
  keywords: [
    "industrial recruitment agency",
    "industrial staffing solutions",
    "manufacturing recruitment services",
    "logistics recruitment agency",
    "supply chain staffing",
    "quality assurance recruitment",
    "industrial hiring support",
    "industrial workforce solutions",
    "warehouse staffing services",
    "production hiring agency",
    "operations recruitment",
    "manufacturing staffing company",
    "logistics talent acquisition",
    "industrial operations hiring",
    "quality control recruitment",
    "supply chain hiring support"
  ]
};

export default function IndustrialIndustryPage() {
  const reasons = [
    {
      title: "Operational Reliability Matters Deeply",
      desc: "In industrial environments, the wrong hire can affect output, workflow, safety, speed, quality, and daily continuity.",
      icon: <Award className="w-8 h-8 text-gold" />
    },
    {
      title: "The Sector Includes Distinct Workforce Needs",
      desc: "Manufacturing, warehousing, logistics, supply chain, and quality assurance all require different search and screening approaches.",
      icon: <Boxes className="w-8 h-8 text-gold" />
    },
    {
      title: "Hiring Delays Can Disrupt Production and Delivery",
      desc: "When key roles remain open, operations can slow down and pressure can increase across teams.",
      icon: <Clock className="w-8 h-8 text-gold" />
    },
    {
      title: "Workforce Quality Still Matters at Scale",
      desc: "Industrial recruitment often involves volume or repeat hiring, but that does not remove the need for candidate relevance and dependability.",
      icon: <Users className="w-8 h-8 text-gold" />
    },
    {
      title: "Some Roles Need More Targeted Search Precision",
      desc: "Quality assurance, specialist operations, or supply chain roles may require tighter filtering and more careful screening than broader workforce hiring.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      title: "Industrial Hiring Must Balance Speed and Consistency",
      desc: "The process often needs to move efficiently while still protecting workforce quality and role alignment.",
      icon: <TrendingUp className="w-8 h-8 text-gold" />
    }
  ];

  const subSectors = [
    {
      name: "Manufacturing Operations",
      slug: "manufacturing-operations",
      desc: "Recruitment support for employers hiring across production, assembly, operations support, plant workflows, and manufacturing-led environments where consistency and output matter.",
      roles: ["Production Support Staff", "Manufacturing Operators", "Assembly Team Members", "Operations Coordinators", "Shift Support Roles", "Line Supervisory Support"],
      icon: <Factory className="w-8 h-8 text-gold" />
    },
    {
      name: "Logistics & Supply Chain",
      slug: "logistics-supply-chain",
      desc: "Hiring support for employers seeking professionals across warehousing, logistics, transportation support, inventory flow, fulfillment, and broader supply chain operations.",
      roles: ["Warehouse Staff", "Logistics Coordinators", "Supply Chain Support Roles", "Inventory Control Staff", "Fulfillment Support", "Dispatch and Operations Support Roles"],
      icon: <Truck className="w-8 h-8 text-gold" />
    },
    {
      name: "Quality Assurance",
      slug: "quality-assurance",
      desc: "Recruitment solutions for businesses hiring across quality control, inspection, process monitoring, compliance support, and production-quality environments.",
      roles: ["Quality Assurance Staff", "Quality Control Support Roles", "Inspection Coordinators", "Process Monitoring Staff", "Compliance and Documentation Support"],
      icon: <ClipboardCheck className="w-8 h-8 text-gold" />
    }
  ];

  const expansionTopics = [
    "Manufacturing",
    "Logistics & Supply Chain",
    "Warehouse Operations",
    "Production Support",
    "Quality Control",
    "Industrial Maintenance Support"
  ];

  const roleGroups = [
    {
      title: "Manufacturing & Production Roles",
      roles: [
        "Production Operators",
        "Assembly Staff",
        "Manufacturing Support Workers",
        "Shift Team Members",
        "Line Support Roles",
        "Production Supervisory Support"
      ]
    },
    {
      title: "Logistics & Warehouse Roles",
      roles: [
        "Warehouse Operatives",
        "Logistics Coordinators",
        "Inventory Support Staff",
        "Dispatch Support Roles",
        "Fulfillment Staff",
        "Supply Chain Assistants"
      ]
    },
    {
      title: "Quality & Process Roles",
      roles: [
        "Quality Assurance Staff",
        "Quality Control Support",
        "Inspection Roles",
        "Process Monitoring Support",
        "Compliance Documentation Staff"
      ]
    },
    {
      title: "Operations & Administration Roles",
      roles: [
        "Operations Coordinators",
        "Scheduling Support Staff",
        "Back-Office Operations Roles",
        "Documentation and Reporting Support",
        "Workforce Coordination Roles"
      ]
    },
    {
      title: "Leadership-Adjacent & Specialist Roles",
      roles: [
        "Team Leaders",
        "Shift Supervisors",
        "Operations Supervisors",
        "Warehouse Leads",
        "Production Coordinators"
      ]
    }
  ];

  const challenges = [
    {
      title: "Maintaining Workforce Reliability Under Pressure",
      desc: "Operational environments often need people in place quickly, but weak-fit hiring can damage consistency and output."
    },
    {
      title: "Different Industrial Roles Need Different Search Approaches",
      desc: "Manufacturing, logistics, warehouse, and quality roles cannot all be recruited using the same candidate logic."
    },
    {
      title: "Delays Can Affect Throughput and Operations",
      desc: "Open positions can slow production, fulfillment, delivery flow, and day-to-day workforce performance."
    },
    {
      title: "Volume Hiring Still Needs Quality Control",
      desc: "Even when hiring multiple people, employers still need relevance, dependability, and stronger workforce fit."
    },
    {
      title: "Screening Needs More Operational Context",
      desc: "Industrial employers often need more than title matching. They need a recruitment process that reflects the real environment of the role."
    },
    {
      title: "Recruitment Must Reflect Practical Business Needs",
      desc: "The hiring process must feel structured, useful, and aligned with real-world operations rather than overly theoretical."
    }
  ];

  const supportAreas = [
    {
      title: "Sector-Aware Recruitment Support",
      desc: "Helping employers hire across manufacturing operations, logistics and supply chain, quality assurance, warehousing, and industrial support functions with stronger alignment."
    },
    {
      title: "Permanent and Flexible Hiring Models",
      desc: "Supporting long-term workforce building as well as contract or project-based industrial hiring where appropriate."
    },
    {
      title: "Screening & Assessment Support",
      desc: "Helping improve shortlist quality and reduce weak-fit candidates in industrial and operations-led hiring workflows."
    },
    {
      title: "Turnkey Recruitment for Multi-Role Workforce Needs",
      desc: "Supporting broader hiring projects where industrial employers need more structured delivery across multiple roles."
    },
    {
      title: "Structured Hiring Support for Growth or Operational Demand",
      desc: "Helping industrial employers scale teams more effectively through a disciplined recruitment process."
    },
    {
      title: "Connection to Broader Workforce Services",
      desc: "Industrial hiring can connect naturally with permanent recruitment, contract staffing, RPO, turnkey projects, and screening support depending on the employer’s need."
    }
  ];

  const pillars = [
    {
      title: "Industrial-Aware Search Thinking",
      desc: "We treat industrial recruitment as a specialist operational environment, not as generic staffing with industrial titles added in."
    },
    {
      title: "Better Workforce Role Precision",
      desc: "We help align recruitment more closely with the demands of production, warehouse, logistics, and quality-led environments."
    },
    {
      title: "Support Across Core Industrial Sub-Sectors",
      desc: "Our structure already aligns with Manufacturing Operations, Logistics & Supply Chain, and Quality Assurance as the primary industrial hiring environments."
    },
    {
      title: "Flexible Connection to Related Services",
      desc: "Industrial recruitment can connect with contract staffing, permanent recruitment, screening and assessment, RPO, and turnkey recruitment projects."
    },
    {
      title: "Professional and Reliable Delivery",
      desc: "Industrial employers often need a hiring process that feels structured, practical, and dependable."
    },
    {
      title: "Premium, Business-Relevant Support",
      desc: "We help employers recruit industrial talent through a process that feels organized, credible, and aligned with real workforce needs."
    }
  ];

  const relatedServices = [
    { name: "Permanent Recruitment", href: "/services/permanent-recruitment", desc: "Core long-term hiring solutions for ongoing business needs." },
    { name: "Contract Staffing", href: "/services/contract-staffing", desc: "Flexible staffing solutions for temporary or project-based needs." },
    { name: "Screening & Assessment", href: "/services/screening-assessment", desc: "Structured candidate screening and evaluation support." },
    { name: "Recruitment Process Outsourcing (RPO)", href: "/services/rpo", desc: "End-to-end recruitment management to scale your hiring operations." },
    { name: "Turnkey Recruitment Projects", href: "/services", desc: "Structured project solutions for hiring multiple roles." },
    { name: "Headhunting Services", href: "/services/headhunting-services", desc: "Targeted direct search for hard-to-fill and specialist hires." },
    { name: "Diversity Hiring", href: "/services/diversity-hiring", desc: "Custom recruitment solutions focused on inclusive and diverse pipelines." },
    { name: "Campus Recruitment", href: "/services/campus-recruitment", desc: "Pipeline-building solutions through universities and educational programs." },
    { name: "Employer Branding", href: "/services/employer-branding", desc: "Strategic positioning to attract top-tier talent in competitive markets." }
  ];

  const faqs = [
    {
      question: "Does NAYA Staffing recruit for industrial roles?",
      answer: "Yes. NAYA Staffing supports hiring across the Industrial sector, including manufacturing operations, logistics and supply chain, quality assurance, warehousing, and related operational support functions."
    },
    {
      question: "What types of industrial roles can NAYA Staffing help fill?",
      answer: "NAYA Staffing can support hiring for production roles, warehouse staff, logistics coordinators, supply chain support, quality assurance staff, operations support roles, and related industrial positions."
    },
    {
      question: "Can NAYA Staffing support manufacturing, logistics, and quality assurance hiring?",
      answer: "Yes. Our industry structure lists Manufacturing Operations, Logistics & Supply Chain, and Quality Assurance as the main industrial sub-areas supported on this page."
    },
    {
      question: "Why is industrial recruitment different from general recruitment?",
      answer: "Industrial recruitment often requires stronger operational context, better workforce reliability, clearer role alignment, and a more structured hiring process than broader recruitment alone."
    },
    {
      question: "Can NAYA Staffing help with hard-to-fill industrial roles?",
      answer: "Yes. NAYA Staffing can support more difficult industrial hiring needs through focused recruitment, shortlist refinement, and project-based recruitment support where needed."
    },
    {
      question: "Is this page only for factories?",
      answer: "No. This page can support a wider range of industrial employers, including manufacturing, warehousing, logistics, supply chain, quality-led operations, and broader industrial workforce environments."
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Industrial & Operations Talent Recruitment</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
              Industrial Recruitment for <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Workforce-Critical Needs
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed mb-10">
              NAYA Staffing supports employers across the Industrial sector with recruitment solutions designed for manufacturing operations, logistics and supply chain, quality assurance, warehousing, production support, and broader industrial workforce environments. Whether you are expanding operational capacity, strengthening production teams, improving supply chain support, or hiring for quality-led functions, we help businesses access relevant candidates with greater confidence and hiring precision.
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
                href="/services" 
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 transition-all duration-300 backdrop-blur-xl"
              >
                Explore Our Services
              </Link>
            </div>
            <div className="pt-10 border-t border-white/5 mt-10 max-w-xl">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 leading-loose">
                Built for industrial employers that need dependable talent, stronger workforce alignment, and a recruitment process shaped around operational performance and continuity.
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
                Recruitment Support for High-Dependability <br className="hidden md:inline" />
                <span className="text-gold">Industrial Environments</span>
              </h2>
              <div className="h-1.5 w-20 bg-gold rounded-full opacity-60"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Industrial hiring often sits at the center of business continuity. Employers may be recruiting for roles that directly affect production, warehousing, logistics flow, quality control, supply chain performance, operations support, and day-to-day workforce reliability. That means recruitment needs to prioritize practical fit, consistency, availability, and role relevance from the beginning.
              </p>
              <p>
                The Industrial sector also includes multiple hiring environments. Some employers are focused on manufacturing operations and production output. Others need logistics and supply chain support, warehousing teams, quality assurance staff, or operational supervisors who can perform effectively in structured and performance-driven settings. Even when role titles appear similar, the work environment changes what the right hire actually looks like.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                NAYA Staffing’s Industrial recruitment support is designed to help employers hire more effectively across those environments. We work with industrial and operations-led businesses that need stronger access to relevant workforce talent, better shortlist quality, and a recruitment process that reflects the pace and practicality of the sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY INDUSTRIAL RECRUITMENT REQUIRES A SPECIALIZED APPROACH */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Industrial <span className="text-gold">Recruitment Is Different</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Industrial hiring is different from general recruitment because the environments are more operationally sensitive, workforce continuity matters more, and role fit often depends on the realities of the site, shift, or production context.
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

      {/* 4. INDUSTRIAL SUB-SECTORS WE SUPPORT */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Industrial <span className="text-gold">Areas We Support</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              We support hiring across Manufacturing Operations, Logistics &amp; Supply Chain, and Quality Assurance as the primary industrial hiring environments.
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
                    href={`/industries/industrial/${sub.slug}`}
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
            Additional Industrial Areas <span className="text-gold">for Expansion</span>
          </h2>
          <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
          <p className="text-slate-400 text-lg leading-relaxed font-semibold max-w-4xl mx-auto">
            We support a wider industrial operations footprint across these adjacent categories:
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
              Industrial Roles We <span className="text-gold">Help Employers Hire</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports recruitment across a wide range of industrial roles depending on the employer’s site environment, workforce model, and operational priorities.
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
              Common Hiring Challenges in the <span className="text-gold">Industrial Sector</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Industrial employers often face recruitment conditions that require stronger structure, practical screening, and reliable delivery.
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

      {/* 8. HOW NAYA STAFFING SUPPORTS INDUSTRIAL EMPLOYERS */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              How We Support <span className="text-gold">Industrial Hiring</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports Industrial employers with recruitment solutions designed around workforce dependability, operational continuity, and role-relevant hiring.
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

      {/* 9. WHY EMPLOYERS CHOOSE NAYA STAFFING FOR INDUSTRIAL RECRUITMENT */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose NAYA Staffing <span className="text-gold">for Industrial Recruitment</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Industrial recruitment requires stronger practical awareness, more dependable search thinking, and a hiring process that reflects the realities of operations-led environments. NAYA Staffing’s approach is designed around those needs.
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
                for <span className="text-gold">Industrial Hiring</span>
              </h2>
              <div className="h-1 w-20 bg-gold rounded-full"></div>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                Industrial employers often need more than one recruitment model depending on role type, urgency, scale, and workforce demand.
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
              <Wrench className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Build Stronger Industrial Teams <br/>
              With <span className="text-gold">More Reliable Hiring Support</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              Industrial hiring depends on dependable people, practical role fit, and workforce continuity. NAYA Staffing helps employers recruit across the Industrial sector with a more structured, operations-aware, and business-relevant approach to talent acquisition.
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
          <Link href="/industries/industrial" className="hover:text-gold transition-colors">Industrial Overview</Link>
          <Link href="/industries/industrial/manufacturing-operations" className="hover:text-gold transition-colors">Manufacturing Operations</Link>
          <Link href="/industries/industrial/logistics-supply-chain" className="hover:text-gold transition-colors">Logistics & Supply Chain</Link>
          <Link href="/industries/industrial/quality-assurance" className="hover:text-gold transition-colors">Quality Assurance</Link>
        </div>
      </section>
    </main>
  );
}
