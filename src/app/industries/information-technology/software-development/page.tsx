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
  Laptop
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "Software Development Recruitment & Engineering Hiring Solutions | NAYA Staffing",
  description: "NAYA Staffing provides software development recruitment services for employers hiring software engineers, developers, application specialists, and technical product delivery talent.",
  keywords: [
    "software development recruitment agency",
    "software engineer recruitment",
    "developer staffing solutions",
    "software hiring agency",
    "engineering recruitment agency",
    "software talent acquisition",
    "developer recruitment services",
    "technical hiring partner",
    "application development recruitment",
    "software team hiring",
    "engineering staffing solutions",
    "developer talent partner",
    "software workforce solutions",
    "product engineering recruitment",
    "development team staffing",
    "software delivery hiring"
  ]
};

export default function SoftwareDevelopmentSubIndustryPage() {
  const reasons = [
    {
      title: "Technical Titles Often Hide Very Different Real Requirements",
      desc: "A software engineer role may vary significantly depending on stack, seniority, product maturity, and architecture expectations.",
      icon: <Cpu className="w-8 h-8 text-gold" />
    },
    {
      title: "Team Fit Matters Beyond Coding Ability",
      desc: "Strong candidates often need to match the collaboration style, delivery pace, and technical structure of the team, not just the tools on the job description.",
      icon: <Users className="w-8 h-8 text-gold" />
    },
    {
      title: "Weak-Fit Hires Can Affect Product Delivery Quickly",
      desc: "Poor engineering hires can slow roadmap execution, create workflow friction, and weaken technical quality.",
      icon: <Activity className="w-8 h-8 text-gold" />
    },
    {
      title: "Specialization Is Common",
      desc: "Frontend, backend, full-stack, mobile, QA automation, platform, and DevOps-adjacent roles all require different search logic.",
      icon: <Laptop className="w-8 h-8 text-gold" />
    },
    {
      title: "The Best Candidates Are Not Always the Most Visible",
      desc: "Software hiring often requires more targeted outreach and stronger role-positioning rather than relying only on broad applicant flow.",
      icon: <Globe className="w-8 h-8 text-gold" />
    },
    {
      title: "Engineering Hiring Must Balance Speed and Precision",
      desc: "Teams often need to hire quickly, but the wrong technical hire can create bigger long-term costs.",
      icon: <Clock className="w-8 h-8 text-gold" />
    }
  ];

  const areas = [
    {
      title: "Application Development",
      desc: "Hiring support for employers building or maintaining internal, customer-facing, or platform-based applications."
    },
    {
      title: "Product Engineering",
      desc: "Support for software teams working close to product development, feature delivery, and roadmap execution."
    },
    {
      title: "Frontend & Backend Development",
      desc: "Hiring across interface-focused and server-side development environments."
    },
    {
      title: "Full-Stack Development",
      desc: "Support for broader engineering hires where cross-layer technical capability matters."
    },
    {
      title: "Software Quality & Delivery Support",
      desc: "Coverage for development-adjacent roles involved in software release quality, testing, and delivery coordination."
    },
    {
      title: "Technical Team Growth Support",
      desc: "Support for engineering-team expansion, scale-up hiring, and structured multi-role technical growth."
    }
  ];

  const roleGroups = [
    {
      title: "Engineering Roles",
      roles: [
        "Software Engineers",
        "Application Developers",
        "Backend Developers",
        "Frontend Developers",
        "Full-Stack Developers",
        "Platform-Focused Development Staff"
      ]
    },
    {
      title: "Product & Delivery-Adjacent",
      roles: [
        "Product Engineering Staff",
        "Technical Delivery Support Roles",
        "Software Project Support Roles",
        "Feature Implementation Roles",
        "Technical Coordination Staff"
      ]
    },
    {
      title: "Quality & Support Roles",
      roles: [
        "QA / Test Support Roles",
        "Automation-Adjacent Development Roles",
        "Release Support Roles",
        "Technical Documentation Support",
        "Systems Improvement Roles"
      ]
    },
    {
      title: "Growth & Specialist Roles",
      roles: [
        "Senior Developers",
        "Team Leads",
        "Engineering Support Specialists",
        "Technical Hiring for Niche Stacks",
        "Multi-role Engineering Build-Out Roles"
      ]
    }
  ];

  const challenges = [
    {
      title: "Job Titles Do Not Always Tell the Full Story",
      desc: "Two roles with the same title may require different stacks, architectures, or product contexts."
    },
    {
      title: "Candidate Relevance Matters More Than High Volume",
      desc: "Software teams usually benefit more from tighter shortlists than from larger applicant counts."
    },
    {
      title: "Hiring Mistakes Can Slow Product Progress",
      desc: "Weak-fit engineering hires may affect delivery speed, code quality, and team coordination."
    },
    {
      title: "Specialist Skill Sets Need Sharper Search Logic",
      desc: "Different development environments require more precise recruitment filters and better candidate evaluation."
    },
    {
      title: "Strong Candidates May Already Be Employed",
      desc: "The best technical talent often requires more targeted sourcing and stronger positioning."
    },
    {
      title: "Team Growth Often Needs Structure",
      desc: "Scale-up hiring and engineering-team expansion usually need more organized delivery than ad hoc recruiting alone."
    }
  ];

  const supportAreas = [
    {
      title: "Software-Aware Recruitment Support",
      desc: "Helping employers hire with better understanding of engineering-team context, role scope, and technical relevance."
    },
    {
      title: "Permanent and Flexible Hiring Models",
      desc: "Supporting long-term engineering hires as well as contract or project-based technical support where needed."
    },
    {
      title: "Screening & Assessment Support",
      desc: "Helping improve shortlist quality and reduce weak-fit candidates in technical hiring workflows."
    },
    {
      title: "Headhunting for Specialist Technical Talent",
      desc: "Supporting targeted search where stack-specific or niche development roles require more precision."
    },
    {
      title: "Turnkey Support for Team Build-Outs",
      desc: "Helping organizations scale development teams through more structured multi-role recruitment delivery."
    },
    {
      title: "Connection to Broader Workforce Services",
      desc: "Software hiring can connect naturally with permanent recruitment, contract staffing, technical recruitment, RPO, talent mapping, and employer branding."
    }
  ];

  const pillars = [
    {
      title: "Sharper Technical Role Precision",
      desc: "We help employers recruit with more alignment to real engineering needs rather than broad title matching."
    },
    {
      title: "Better Understanding of Team Context",
      desc: "We treat software hiring as an environment-specific challenge, not just a generic recruitment exercise."
    },
    {
      title: "Support for Team Growth and Scale",
      desc: "We support both single-role technical hiring and broader engineering build-outs."
    },
    {
      title: "Flexible Connection to Related Services",
      desc: "Software recruitment can connect with technical recruitment, screening, contract staffing, RPO, and turnkey projects."
    },
    {
      title: "Professional, Structured Delivery",
      desc: "Engineering teams often need a hiring process that feels organized, efficient, and credible."
    },
    {
      title: "Built Inside the IT Industry Structure",
      desc: "This page is part of the reviewed IT industry framework, where Software Development is explicitly listed as a child category."
    }
  ];

  const relatedServices = [
    { name: "Technical Recruitment", href: "/technical-recruitment", desc: "Specialist hiring support across IT, software, and engineering roles." },
    { name: "Permanent Recruitment", href: "/permanent-recruitment", desc: "Core long-term hiring solutions for ongoing business needs." },
    { name: "Contract Staffing", href: "/contract-staffing", desc: "Flexible staffing solutions for temporary or project-based needs." },
    { name: "Screening & Assessment", href: "/screening-assessment", desc: "Structured candidate screening and evaluation support." },
    { name: "Talent Mapping", href: "/talent-mapping", desc: "Strategic market intelligence and recruitment planning services." },
    { name: "Recruitment Process Outsourcing (RPO)", href: "/recruitment-process-outsourcing", desc: "End-to-end recruitment management to scale your hiring operations." }
  ];

  const relatedMainPages = [
    { name: "Industries Overview", href: "/our-industries" },
    { name: "Information Technology Overview", href: "/industries/information-technology" },
    { name: "Employer Solutions", href: "/employer-solutions" },
    { name: "Contact Us", href: "/contact-us" }
  ];

  const faqs = [
    {
      question: "Does NAYA Staffing recruit for software development roles?",
      answer: "Yes. NAYA Staffing supports hiring across software development environments, including application development, engineering-team growth, and broader technical delivery roles."
    },
    {
      question: "What software development roles can NAYA Staffing help fill?",
      answer: "NAYA Staffing can support hiring for software engineers, developers, application specialists, full-stack roles, backend roles, frontend roles, and related technical positions."
    },
    {
      question: "Why is software development recruitment different from general recruitment?",
      answer: "Because software hiring depends heavily on stack alignment, technical context, team fit, product environment, and stronger role precision."
    },
    {
      question: "Is Software Development an approved subpage in the structure?",
      answer: "Yes. NAYA Staffing's structure explicitly lists Software Development as a reviewed child category under Information Technology."
    },
    {
      question: "Can NAYA Staffing help with technical team expansion?",
      answer: "Yes. NAYA Staffing can support both individual technical hires and broader engineering-team growth through structured recruitment support."
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Software Engineering & Development Talent</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
              Software Development Recruitment for <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Precision & Engineering Alignment
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed mb-10">
              NAYA Staffing supports employers hiring across software development environments, including engineering teams, application development functions, product-led technical teams, and software delivery roles. Whether you are building a development team, scaling engineering capacity, or hiring niche technical talent, we help employers access more relevant candidates with greater confidence and recruitment clarity.
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
                Built for employers that need sharper technical hiring, better role fit, and a more structured path to software team growth.
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
                <span className="text-gold">Engineering Environments</span>
              </h2>
              <div className="h-1.5 w-20 bg-gold rounded-full opacity-60"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Software development hiring often affects product velocity, platform reliability, engineering execution, release quality, internal technical capacity, and broader business growth. Employers in this space are often hiring for roles that sit directly inside product development, application delivery, systems improvement, or customer-facing technical innovation.
              </p>
              <p>
                This is also a hiring environment where role similarity can be misleading. Two software engineer titles can represent very different expectations depending on stack, product stage, team structure, architecture complexity, and delivery model. That means better recruitment depends on stronger role understanding, sharper search logic, and more disciplined candidate alignment.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                NAYA Staffing’s software development recruitment support is designed to help employers hire more effectively across those environments. We support businesses that need more relevant technical shortlists, stronger engineering fit, and a hiring process that reflects the realities of software-team building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY SOFTWARE DEVELOPMENT RECRUITMENT REQUIRES A SPECIALIZED APPROACH */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Software Development <span className="text-gold">Recruitment Is Different</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Software development hiring is different from general recruitment because technical role fit, product context, engineering environment, and delivery expectations all shape what the right candidate actually looks like.
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

      {/* 4. SOFTWARE DEVELOPMENT AREAS WE SUPPORT */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Software Development <span className="text-gold">Areas We Support</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              We support hiring across multiple software-team environments while staying clearly inside the Software Development subcategory.
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
              Software Development Roles We <span className="text-gold">Help Employers Hire</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports recruitment across a wide range of software-development roles depending on the employer’s technical stack, delivery environment, and team structure.
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
              Common Hiring Challenges in <span className="text-gold">Software Development</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Software employers often face recruitment conditions that require more technical precision and stronger role understanding than general business hiring.
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

      {/* 7. HOW NAYA STAFFING SUPPORTS SOFTWARE DEVELOPMENT EMPLOYERS */}
      <section className="py-32 bg-navy relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              How We Support <span className="text-gold">Software Development Employers</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports software-development employers with recruitment solutions designed around technical fit, hiring structure, and stronger engineering-team alignment.
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

      {/* 8. WHY EMPLOYERS CHOOSE NAYA STAFFING FOR SOFTWARE DEVELOPMENT RECRUITMENT */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose NAYA Staffing <span className="text-gold">for Software Development</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Software development recruitment requires stronger technical awareness, sharper role alignment, and a hiring process that reflects the realities of product and engineering environments.
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
                for <span className="text-gold">Software Hiring</span>
              </h2>
              <div className="h-1 w-20 bg-gold rounded-full"></div>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                We connect software development hiring with our full suite of professional services to support your growth.
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
              <Laptop className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Build Stronger Software Teams <br/>
              With <span className="text-gold">Precise Hiring Support</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              Software development hiring depends on technical accuracy, stronger role alignment, and a recruitment process that understands engineering environments. NAYA Staffing helps employers hire more effectively across software development with a more structured, software-aware approach.
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
          <Link href="/industries/information-technology" className="hover:text-gold transition-colors">Information Technology</Link>
          <Link href="/industries/information-technology/cybersecurity" className="hover:text-gold transition-colors">Cybersecurity</Link>
          <Link href="/industries/information-technology/cloud-computing" className="hover:text-gold transition-colors">Cloud Computing</Link>
        </div>
      </section>
    </main>
  );
}
