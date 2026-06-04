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
  HeartPulse,
  PlusCircle,
  Stethoscope,
  Activity as DiagnosticIcon
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "Healthcare Recruitment & Medical Staffing Solutions | NAYA Staffing",
  description: "NAYA Staffing provides healthcare recruitment services for employers hiring across nursing and allied health, health informatics, medical devices, healthcare operations, and specialist support roles.",
  keywords: [
    "healthcare recruitment agency",
    "healthcare staffing solutions",
    "medical recruitment services",
    "healthcare hiring agency",
    "allied health recruitment",
    "nursing recruitment support",
    "health informatics recruitment",
    "medical devices recruitment",
    "healthcare operations hiring",
    "medical staffing company",
    "clinical support recruitment",
    "healthcare talent acquisition",
    "patient support role hiring",
    "healthcare administration recruitment",
    "healthcare specialist recruitment",
    "healthcare workforce solutions"
  ]
};

export default function HealthcareIndustryPage() {
  const reasons = [
    {
      title: "Role Fit Matters Deeply",
      desc: "In healthcare and healthcare-related environments, the right candidate often needs more than a matching title. Reliability, communication, adaptability, and practical relevance all matter.",
      icon: <HeartPulse className="w-8 h-8 text-gold" />
    },
    {
      title: "The Sector Includes Multiple Distinct Hiring Environments",
      desc: "Nursing support, allied health, informatics, devices, administration, and operational roles all require different sourcing and evaluation approaches.",
      icon: <Settings className="w-8 h-8 text-gold" />
    },
    {
      title: "Hiring Delays Can Affect Service Continuity",
      desc: "When important roles remain open, healthcare delivery environments and support functions may experience operational pressure.",
      icon: <Clock className="w-8 h-8 text-gold" />
    },
    {
      title: "Quality and Consistency Matter",
      desc: "Healthcare employers often need a recruitment process that feels disciplined, reliable, and role-aware rather than rushed or overly generic.",
      icon: <ShieldCheck className="w-8 h-8 text-gold" />
    },
    {
      title: "Specialist Skills Can Be Hard to Find",
      desc: "Some areas, particularly informatics, devices, and certain support functions, may require a narrower and more precise search approach.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      title: "Healthcare Hiring Must Balance Speed and Carefulness",
      desc: "The process often needs to move efficiently while still protecting candidate quality and suitability.",
      icon: <Activity className="w-8 h-8 text-gold" />
    }
  ];

  const subSectors = [
    {
      name: "Nursing & Allied Health",
      slug: "nursing-allied-health",
      desc: "Recruitment support for employers hiring across nursing-adjacent, allied health, patient-support, and care-related workforce environments where reliability and practical role fit are critical.",
      roles: ["Nursing Support Roles", "Allied Health Professionals", "Patient Support Staff", "Clinical Support Roles", "Care Coordination Support", "Service Delivery Support Roles"],
      icon: <PlusCircle className="w-8 h-8 text-gold" />
    },
    {
      name: "Health Informatics",
      slug: "health-informatics",
      desc: "Hiring support for employers seeking professionals who work across healthcare systems, data environments, digital records, technical healthcare workflows, and information-driven support functions.",
      roles: ["Health Informatics Specialists", "Healthcare Data Support Roles", "Systems and Records Support", "Healthcare Reporting Roles", "Digital Health Operations Roles"],
      icon: <DiagnosticIcon className="w-8 h-8 text-gold" />
    },
    {
      name: "Medical Devices",
      slug: "medical-devices",
      desc: "Recruitment solutions for businesses hiring across medical device operations, product support, technical sales, implementation, and specialist device-related environments.",
      roles: ["Medical Device Support Roles", "Device Sales Professionals", "Clinical Product Support Staff", "Implementation Specialists", "Technical Device Coordinators"],
      icon: <Stethoscope className="w-8 h-8 text-gold" />
    }
  ];

  const expansionTopics = [
    "Healthcare & Medical",
    "Pharmaceuticals",
    "Healthcare Administration",
    "Patient Support Services",
    "Clinical Operations",
    "Digital Health & Records Environments"
  ];

  const roleGroups = [
    {
      title: "Care & Allied Health Support Roles",
      roles: [
        "Nursing Support Roles",
        "Allied Health Professionals",
        "Patient Support Staff",
        "Care Coordination Roles",
        "Service Delivery Support Staff"
      ]
    },
    {
      title: "Healthcare Operations & Administration Roles",
      roles: [
        "Healthcare Administrators",
        "Frontline Support Roles",
        "Scheduling and Coordination Staff",
        "Operational Support Professionals",
        "Records and Documentation Support"
      ]
    },
    {
      title: "Health Informatics & Systems Roles",
      roles: [
        "Health Informatics Specialists",
        "Data and Reporting Support Roles",
        "Systems and Records Staff",
        "Healthcare Technology Support",
        "Digital Operations Roles"
      ]
    },
    {
      title: "Medical Devices & Product Support Roles",
      roles: [
        "Medical Device Sales Support",
        "Product Support Specialists",
        "Technical Device Coordinators",
        "Implementation Roles",
        "Customer and Client Support Roles"
      ]
    },
    {
      title: "Specialist and Leadership-Adjacent Roles",
      roles: [
        "Department Coordinators",
        "Team Leads",
        "Operational Managers",
        "Specialist Support Staff",
        "Healthcare Project Support Roles"
      ]
    }
  ];

  const challenges = [
    {
      title: "Maintaining Candidate Quality Under Pressure",
      desc: "Urgent hiring needs can create pressure, but healthcare-related roles still require dependable candidate alignment."
    },
    {
      title: "Different Role Types Need Different Sourcing",
      desc: "The sector includes care-support, operational, technical, and device-related roles that cannot all be recruited in the same way."
    },
    {
      title: "Service Continuity Depends on People Being in Place",
      desc: "Open roles can place strain on teams, workflows, and operational delivery."
    },
    {
      title: "Specialist Areas Can Be Hard to Fill",
      desc: "Functions like health informatics or device-related roles may require narrower and more targeted sourcing."
    },
    {
      title: "Candidate Screening Needs Stronger Role Context",
      desc: "Healthcare employers often need more than resume review. They need a process that reflects the environment the role sits within."
    },
    {
      title: "Recruitment Must Reflect Professional Standards",
      desc: "The hiring journey itself should feel structured, respectful, and credible because it reflects on the employer and the seriousness of the sector."
    }
  ];

  const supportAreas = [
    {
      title: "Sector-Aware Recruitment Support",
      desc: "Helping employers hire across nursing and allied health, health informatics, medical devices, administration, and operations with stronger alignment."
    },
    {
      title: "Permanent and Flexible Hiring Models",
      desc: "Supporting long-term workforce building as well as more flexible hiring needs where appropriate."
    },
    {
      title: "Screening & Assessment Support",
      desc: "Helping improve shortlist quality and reduce weak-fit candidates in healthcare-related hiring workflows."
    },
    {
      title: "Headhunting for Specialist Healthcare Talent",
      desc: "Supporting direct-search recruitment for harder-to-find or more specialized healthcare roles."
    },
    {
      title: "Structured Hiring Support for Growth or Operational Needs",
      desc: "Helping healthcare employers build teams more effectively through a clearer and more disciplined recruitment process."
    },
    {
      title: "Connection to Broader Workforce Services",
      desc: "Healthcare hiring can connect naturally with permanent recruitment, contract staffing, RPO, screening, and project-based recruitment depending on the employer’s need."
    }
  ];

  const pillars = [
    {
      title: "Healthcare-Aware Search Thinking",
      desc: "We treat healthcare recruitment as a specialist sector environment, not as generic staffing with healthcare job titles."
    },
    {
      title: "Better Role Precision",
      desc: "We help align recruitment more closely with the demands of care-support, operational, technical, and healthcare-adjacent roles."
    },
    {
      title: "Support Across Core Healthcare Sub-Sectors",
      desc: "Our structure already aligns with Nursing & Allied Health, Health Informatics, and Medical Devices as the primary healthcare hiring environments."
    },
    {
      title: "Flexible Connection to Related Services",
      desc: "Healthcare recruitment can connect with screening and assessment, permanent recruitment, contract staffing, RPO, headhunting, and turnkey projects."
    },
    {
      title: "Professional and Reliable Delivery",
      desc: "Healthcare employers often need a hiring process that feels disciplined, thoughtful, and dependable."
    },
    {
      title: "Premium, Business-Relevant Support",
      desc: "We help employers recruit healthcare talent through a process that feels structured, credible, and aligned with real workforce needs."
    }
  ];

  const relatedServices = [
    { name: "Permanent Recruitment", href: "/permanent-recruitment", desc: "Core long-term hiring solutions for ongoing business needs." },
    { name: "Contract Staffing", href: "/contract-staffing", desc: "Flexible staffing solutions for temporary or project-based needs." },
    { name: "Screening & Assessment", href: "/screening-assessment", desc: "Structured candidate screening and evaluation support." },
    { name: "Headhunting Services", href: "/headhunting-services", desc: "Targeted direct search for hard-to-fill and specialist hires." },
    { name: "Recruitment Process Outsourcing (RPO)", href: "/recruitment-process-outsourcing", desc: "End-to-end recruitment management to scale your hiring operations." },
    { name: "Diversity Hiring", href: "/diversity-hiring", desc: "Custom recruitment solutions focused on inclusive and diverse pipelines." },
    { name: "Campus Recruitment", href: "/campus-recruitment", desc: "Pipeline-building solutions through universities and educational programs." },
    { name: "Employer Branding", href: "/employer-branding", desc: "Strategic positioning to attract top-tier talent in competitive markets." }
  ];

  const relatedMainPages = [
    { name: "Industries Overview", href: "/our-industries" },
    { name: "Employer Solutions", href: "/employer-solutions" },
    { name: "Our Proven Process", href: "/our-proven-process" },
    { name: "Contact Us", href: "/contact-us" }
  ];

  const faqs = [
    {
      question: "Does NAYA Staffing recruit for healthcare roles?",
      answer: "Yes. NAYA Staffing supports hiring across the Healthcare sector, including nursing and allied health, health informatics, medical devices, healthcare operations, and related support functions."
    },
    {
      question: "What types of healthcare roles can NAYA Staffing help fill?",
      answer: "NAYA Staffing can support hiring for allied health roles, healthcare administration, patient-support functions, health informatics positions, medical device support roles, and other healthcare-related positions."
    },
    {
      question: "Can NAYA Staffing support nursing, health informatics, and medical devices hiring?",
      answer: "Yes. Our industry structure lists Nursing & Allied Health, Health Informatics, and Medical Devices as the main healthcare sub-areas supported on this page."
    },
    {
      question: "Why is healthcare recruitment different from general recruitment?",
      answer: "Healthcare recruitment often requires stronger sector context, higher reliability, clearer role alignment, and a more structured hiring process than broader recruitment alone."
    },
    {
      question: "Can NAYA Staffing help with hard-to-fill healthcare roles?",
      answer: "Yes. NAYA Staffing can support more difficult healthcare hiring needs through focused recruitment, shortlist refinement, and proactive search approaches where needed."
    },
    {
      question: "Is this page only for hospitals or clinics?",
      answer: "No. This page can support a wider range of healthcare-related employers, including care-support environments, healthcare operations teams, medical-device businesses, and health-information functions."
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Healthcare & Medical Talent Recruitment</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
              Healthcare Recruitment for <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Quality & High-Importance Needs
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed mb-10">
              NAYA Staffing supports employers across the Healthcare sector with recruitment solutions designed for nursing and allied health, healthcare operations, health informatics, medical devices, and related specialist roles. Whether you are building clinical-support teams, strengthening healthcare administration, hiring technical healthcare talent, or expanding operational capacity, we help businesses access relevant candidates with greater confidence and hiring precision.
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
                Built for healthcare employers that need dependable talent, stronger role alignment, and a recruitment process shaped around quality and care-focused environments.
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
                Recruitment Support for a <br className="hidden md:inline" />
                <span className="text-gold">Complex and Essential Sector</span>
              </h2>
              <div className="h-1.5 w-20 bg-gold rounded-full opacity-60"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Healthcare hiring carries a unique level of responsibility. Employers are often recruiting for roles that directly affect service quality, operational continuity, patient-facing environments, technical healthcare systems, and day-to-day performance in highly important settings. That means the recruitment process must prioritize relevance, dependability, communication, and role fit at every stage.
              </p>
              <p>
                The Healthcare sector also includes a broad range of hiring environments. Some employers are focused on nursing and allied health support. Others require healthcare administration, operational staffing, health informatics capability, medical devices talent, or specialist professionals who can work effectively in structured, quality-sensitive environments. The hiring context matters just as much as the job title.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                NAYA Staffing’s Healthcare recruitment support is designed to help employers navigate that complexity with greater clarity and confidence. We work with healthcare-related employers that need stronger access to relevant talent, better shortlist quality, and recruitment support that reflects the seriousness of the sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY HEALTHCARE RECRUITMENT REQUIRES A SPECIALIZED APPROACH */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Healthcare <span className="text-gold">Recruitment Is Different</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Healthcare hiring is different from general recruitment because the environments are more sensitive, the standards are higher, and the consequences of weak-fit hiring can be significant.
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

      {/* 4. HEALTHCARE SUB-SECTORS WE SUPPORT */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Healthcare <span className="text-gold">Areas We Support</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              We support hiring across Nursing & Allied Health, Health Informatics, and Medical Devices, with broader capability across healthcare operations and related support environments.
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
                    
                    {/* Example roles list */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {sub.roles.map((role, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-slate-400 font-semibold uppercase">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link 
                    href={`/industries/healthcare/${sub.slug}`}
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
            Additional Healthcare Areas <span className="text-gold">for Expansion</span>
          </h2>
          <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
          <p className="text-slate-400 text-lg leading-relaxed font-semibold max-w-4xl mx-auto">
            We support a wider medical and pharmaceutical market footprint across these adjacent categories:
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
              Healthcare Roles We <span className="text-gold">Help Employers Hire</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports recruitment across a wide range of healthcare-related roles depending on the employer’s service environment, workforce model, and hiring priorities.
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
              Common Hiring Challenges in the <span className="text-gold">Healthcare Sector</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Healthcare employers often face hiring conditions that require more care, structure, and consistency than broader recruitment environments.
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

      {/* 8. HOW NAYA STAFFING SUPPORTS HEALTHCARE EMPLOYERS */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              How We Support <span className="text-gold">Healthcare Hiring</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports Healthcare employers with recruitment solutions designed around role relevance, workforce continuity, and hiring confidence.
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

      {/* 9. WHY EMPLOYERS CHOOSE NAYA STAFFING FOR HEALTHCARE RECRUITMENT */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose NAYA Staffing <span className="text-gold">for Healthcare Recruitment</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Healthcare recruitment requires stronger role awareness, higher trust, and a hiring process that reflects the importance of the sector. NAYA Staffing’s approach is designed around those expectations.
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
                for <span className="text-gold">Healthcare Hiring</span>
              </h2>
              <div className="h-1 w-20 bg-gold rounded-full"></div>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                Healthcare employers often need more than one recruitment model depending on role type, urgency, and workforce structure.
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
              <HeartPulse className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Build Stronger Healthcare Teams <br/>
              With <span className="text-gold">More Reliable Support</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              Healthcare hiring demands trust, consistency, and stronger role alignment. NAYA Staffing helps employers recruit across the Healthcare sector with a more structured, quality-focused, and business-relevant approach to talent acquisition.
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
          <Link href="/industries/healthcare" className="hover:text-gold transition-colors">Healthcare Overview</Link>
          <Link href="/industries/healthcare/nursing-allied-health" className="hover:text-gold transition-colors">Nursing & Allied Health</Link>
          <Link href="/industries/healthcare/health-informatics" className="hover:text-gold transition-colors">Health Informatics</Link>
          <Link href="/industries/healthcare/medical-devices" className="hover:text-gold transition-colors">Medical Devices</Link>
        </div>
      </section>
    </main>
  );
}
