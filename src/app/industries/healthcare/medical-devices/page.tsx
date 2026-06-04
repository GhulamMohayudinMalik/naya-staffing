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
  Stethoscope
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "Medical Devices Recruitment & Healthcare Product Hiring Solutions | NAYA Staffing",
  description: "NAYA Staffing provides medical devices recruitment services for employers hiring device-support talent, healthcare product professionals, regulatory-adjacent staff, operations teams, and commercial medical-device roles.",
  keywords: [
    "medical devices recruitment agency",
    "medical device staffing solutions",
    "medical devices hiring agency",
    "healthcare product recruitment",
    "device industry recruitment",
    "medical device talent acquisition",
    "medical device staffing partner",
    "device workforce solutions",
    "regulatory medical device recruitment",
    "medical device operations hiring",
    "medical technology staffing",
    "product support recruitment",
    "clinical product staffing",
    "medical device commercial hiring",
    "healthcare device recruitment",
    "device industry talent partner"
  ]
};

export default function MedicalDevicesSubIndustryPage() {
  const reasons = [
    {
      title: "The Sector Sits Between Healthcare and Product Environments",
      desc: "Strong candidates often need to operate across both healthcare relevance and product or business execution.",
      icon: <Globe className="w-8 h-8 text-gold" />
    },
    {
      title: "Quality and Compliance Awareness Matter",
      desc: "Roles in medical-devices environments often require better alignment to product standards, documentation accuracy, and regulated workflows.",
      icon: <ShieldCheck className="w-8 h-8 text-gold" />
    },
    {
      title: "Role Context Is More Specific Than the Title Suggests",
      desc: "The same title may mean different things depending on product category, company maturity, commercial model, or operational environment.",
      icon: <Settings className="w-8 h-8 text-gold" />
    },
    {
      title: "Weak-Fit Hires Can Affect Product Confidence and Delivery",
      desc: "Poor-fit hiring can create strain across operations, product support, team coordination, or customer-facing execution.",
      icon: <Activity className="w-8 h-8 text-gold" />
    },
    {
      title: "Relevant Talent May Need Targeted Search",
      desc: "Employers may need sharper sourcing and screening to find candidates who match both product and healthcare context.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      title: "Growth in This Sector Often Requires Better Workforce Structure",
      desc: "Medical-devices hiring often supports scaling, expansion, launch readiness, and operational maturity rather than isolated one-off roles.",
      icon: <Clock className="w-8 h-8 text-gold" />
    }
  ];

  const areas = [
    {
      title: "Device Operations & Manufacturing-Adjacent Hiring",
      desc: "Recruitment support for employers hiring around product operations, production-linked workflows, and device-delivery environments."
    },
    {
      title: "Quality & Regulatory-Adjacent Roles",
      desc: "Support for organizations recruiting talent connected to quality processes, standards, documentation, and compliance-aware environments."
    },
    {
      title: "Clinical Product Support",
      desc: "Coverage for roles working close to customer support, clinical product understanding, training, or healthcare-product usability."
    },
    {
      title: "Commercial Medical Devices Hiring",
      desc: "Support for employers building sales, account, product-support, or business-development capability in device environments."
    },
    {
      title: "Healthcare Technology Product Teams",
      desc: "Hiring support for employers working where devices, healthcare delivery, and technical product environments overlap."
    },
    {
      title: "Medical Device Team Growth Support",
      desc: "Support for structured build-outs across operations, quality, support, and commercial capability."
    }
  ];

  const roleGroups = [
    {
      title: "Product & Operations Roles",
      roles: [
        "Medical Device Operations Staff",
        "Product Support Roles",
        "Manufacturing-Adjacent Device Roles",
        "Device Program Support Staff",
        "Operations Coordination Roles"
      ]
    },
    {
      title: "Quality & Compliance-Adjacent Roles",
      roles: [
        "Quality Support Roles",
        "Documentation and Standards Support",
        "Regulatory-Adjacent Staff",
        "Product Compliance Support Roles",
        "Audit and Process Support Roles"
      ]
    },
    {
      title: "Clinical & Customer-Facing Roles",
      roles: [
        "Clinical Product Support Staff",
        "Training and Product Education Roles",
        "Customer Support for Device Environments",
        "Healthcare Product Liaison Roles",
        "User Adoption Support Roles"
      ]
    },
    {
      title: "Commercial & Growth Roles",
      roles: [
        "Medical Device Sales Roles",
        "Account Management Staff",
        "Business Development Roles",
        "Product Commercial Support Roles",
        "Market Expansion Support Roles"
      ]
    }
  ];

  const challenges = [
    {
      title: "Candidates Need More Than Generic Industry Experience",
      desc: "They often need to understand product environments, healthcare relevance, and operational or commercial context."
    },
    {
      title: "Role Definitions Vary by Product and Business Model",
      desc: "The same title can look very different depending on company structure and product environment."
    },
    {
      title: "Weak-Fit Hires Can Affect Quality and Execution",
      desc: "Poor-fit hiring can influence operations, customer experience, product confidence, and internal delivery."
    },
    {
      title: "Relevant Talent Can Be Harder to Identify",
      desc: "Employers may need sharper search logic to find candidates who fit both healthcare and device-industry needs."
    },
    {
      title: "Growth Often Requires Structured Hiring Support",
      desc: "Product expansion and scale often need better hiring coordination across multiple functions."
    },
    {
      title: "Candidate Quality Matters More Than Broad Volume",
      desc: "Relevant, better-fit shortlists are usually more valuable than large applicant pools in this space."
    }
  ];

  const supportAreas = [
    {
      title: "Healthcare-Product-Aware Recruitment Support",
      desc: "Helping employers hire with better understanding of device environments, product workflows, and commercial or quality context."
    },
    {
      title: "Permanent and Flexible Hiring Models",
      desc: "Supporting long-term device-industry hires as well as contract or project-based workforce needs where needed."
    },
    {
      title: "Screening & Assessment Support",
      desc: "Helping improve shortlist quality and reduce weak-fit candidates in medical-devices hiring workflows."
    },
    {
      title: "Headhunting for Specialist Device Talent",
      desc: "Supporting targeted search where certain product, quality, or commercial roles require more precision."
    },
    {
      title: "Turnkey Support for Team Expansion",
      desc: "Helping employers scale product, support, or commercial capability through structured recruitment delivery."
    },
    {
      title: "Connection to Broader Workforce Services",
      desc: "This area can connect naturally with permanent recruitment, contract staffing, screening and assessment, RPO, technical recruitment, and turnkey recruitment projects."
    }
  ];

  const pillars = [
    {
      title: "Better Product-Context Role Precision",
      desc: "We help employers recruit with stronger alignment to real device-industry needs rather than broad title matching."
    },
    {
      title: "Better Understanding of Healthcare-Product Environments",
      desc: "We treat medical-devices hiring as its own specialist environment, not generic healthcare or industrial staffing."
    },
    {
      title: "Support for Team Growth Across Functions",
      desc: "We support both individual hires and broader growth across operations, quality, support, and commercial roles."
    },
    {
      title: "Flexible Connection to Related Services",
      desc: "Medical-devices recruitment can connect with screening, technical recruitment, permanent recruitment, contract staffing, RPO, and turnkey projects."
    },
    {
      title: "Professional, Structured Delivery",
      desc: "Healthcare-product organizations often need a hiring process that feels organized, credible, and quality-aware."
    },
    {
      title: "Built Inside the Healthcare Industry Structure",
      desc: "This page is part of the reviewed Healthcare framework, where Medical Devices is explicitly listed as a child category."
    }
  ];

  const relatedServices = [
    { name: "Permanent Recruitment", href: "/permanent-recruitment", desc: "Core long-term hiring solutions for ongoing business needs." },
    { name: "Contract Staffing", href: "/contract-staffing", desc: "Flexible staffing solutions for temporary or project-based needs." },
    { name: "Screening & Assessment", href: "/screening-assessment", desc: "Structured candidate screening and evaluation support." },
    { name: "Recruitment Process Outsourcing (RPO)", href: "/recruitment-process-outsourcing", desc: "End-to-end recruitment management to scale your hiring operations." },
    { name: "Turnkey Recruitment Projects", href: "/services", desc: "Structured project solutions for hiring multiple roles." },
    { name: "Technical Recruitment", href: "/technical-recruitment", desc: "Specialist hiring support across IT, software, and engineering roles." },
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
      question: "Does NAYA Staffing recruit for medical devices roles?",
      answer: "Yes. NAYA Staffing supports hiring across medical-devices environments, including product-support roles, operations, quality-adjacent hiring, and commercial device teams."
    },
    {
      question: "What medical devices roles can NAYA Staffing help fill?",
      answer: "NAYA Staffing can support hiring for operations staff, product-support roles, quality-support staff, regulatory-adjacent roles, customer-facing product roles, and commercial medical-device positions."
    },
    {
      question: "Why is medical devices recruitment different from general recruitment?",
      answer: "Because medical-devices hiring often requires a mix of healthcare awareness, product relevance, quality expectations, and business-context understanding."
    },
    {
      question: "Is Medical Devices an approved subpage in the structure?",
      answer: "Yes. NAYA Staffing's structure explicitly lists Medical Devices as a reviewed child category under Healthcare."
    },
    {
      question: "Can NAYA Staffing help with medical-device team expansion?",
      answer: "Yes. NAYA Staffing can support both individual hires and broader product, support, or commercial team growth through structured recruitment support."
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Medical Devices & Healthcare Product Talent Recruitment</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
              Medical Devices Recruitment for <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Precision & Product-Team Alignment
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed mb-10">
              NAYA Staffing supports employers hiring across medical-devices environments, including product support, healthcare technology operations, device-related quality functions, regulatory-adjacent roles, and commercial medical-device teams. Whether you are expanding product capability, strengthening operational delivery, or hiring specialist talent in a regulated healthcare-product environment, we help employers access more relevant candidates with greater confidence and recruitment clarity.
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
                Built for employers that need stronger device-industry hiring, better role fit, and a more structured path to product and workforce reliability.
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
                Recruitment Support for <br className="hidden md:inline" />
                <span className="text-gold">Healthcare Product Operations</span>
              </h2>
              <div className="h-1.5 w-20 bg-gold rounded-full opacity-60"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Medical devices hiring often affects product quality, operational continuity, compliance readiness, healthcare-delivery support, customer trust, and broader commercial performance. Employers in this space are often hiring for roles that sit between healthcare relevance, technical understanding, product environments, regulatory awareness, and business execution.
              </p>
              <p>
                This is also a hiring environment where role context matters strongly. A candidate may need to understand not only product and operations, but also the regulated nature of healthcare products, quality expectations, customer impact, and the realities of working in device-linked organizations. That means stronger recruitment depends on better role understanding, tighter shortlist quality, and a hiring process that respects both product and healthcare realities.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                NAYA Staffing’s medical-devices recruitment support is designed to help employers hire more effectively across those environments. We support organizations that need stronger device-industry shortlists, better product-role alignment, and a recruitment process that reflects the seriousness of hiring in healthcare-product settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY MEDICAL DEVICES RECRUITMENT REQUIRES A SPECIALIZED APPROACH */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Medical Devices <span className="text-gold">Recruitment Is Different</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Medical-devices hiring is different from general recruitment because it often requires a mix of healthcare awareness, product quality thinking, operational precision, and role-specific commercial or technical relevance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reasons, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6">
                  <div className="w-14 h-14 bg-gold/5 border border-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gold group-hover:text-navy-dark transition-all duration-500">
                    <Stethoscope className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-white font-black text-xl leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                    {reasons.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {reasons.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MEDICAL DEVICES AREAS WE SUPPORT */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Medical Devices <span className="text-gold">Areas We Support</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              We support organizations across multiple device-industry environments.
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
              Medical Devices Roles We <span className="text-gold">Help Employers Hire</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports recruitment across a wide range of medical-devices roles depending on the employer’s product environment, operational model, and workforce priorities.
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
              Common Hiring Challenges in <span className="text-gold">Medical Devices</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Medical-device employers often face recruitment conditions that require stronger precision, better industry-context understanding, and more balanced product-healthcare role alignment.
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

      {/* 7. HOW NAYA STAFFING SUPPORTS MEDICAL DEVICES EMPLOYERS */}
      <section className="py-32 bg-navy relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              How We Support <span className="text-gold">Medical Devices Sourcing</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports medical-device employers with recruitment solutions designed around product relevance, workforce reliability, and stronger quality-aware role alignment.
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

      {/* 8. WHY EMPLOYERS CHOOSE NAYA STAFFING FOR MEDICAL DEVICES RECRUITMENT */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose NAYA Staffing <span className="text-gold">for Medical Devices Recruitment</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Medical-devices recruitment requires stronger healthcare-product awareness, sharper role precision, and a hiring process that reflects quality, reliability, and business relevance.
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
                for <span className="text-gold">Device Sourcing</span>
              </h2>
              <div className="h-1 w-20 bg-gold rounded-full"></div>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                Connect medical devices recruitment with our broader services to support your entire organization.
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
              <Stethoscope className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Build Stronger Medical Device Teams <br/>
              With <span className="text-gold">Precise Sourcing Support</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              Medical-devices hiring depends on quality, role fit, and stronger product-context alignment. NAYA Staffing helps employers hire more effectively across medical-device environments with a more structured, healthcare-product-aware recruitment approach.
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
