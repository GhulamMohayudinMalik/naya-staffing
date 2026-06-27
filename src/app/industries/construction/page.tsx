import { Typewriter } from "@/components/Typewriter";
import Image from 'next/image';
import { getIndustryBySlug } from '@/data/industries';
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
  Wrench,
  ShieldAlert,
  Activity
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "Construction Recruitment & Staffing Solutions | NAYA Staffing",
  description: "NAYA Staffing provides construction recruitment services for employers hiring across project management, civil engineering, skilled trades, site operations, and construction-support roles.",
  keywords: [
    "construction recruitment agency",
    "construction staffing solutions",
    "construction hiring agency",
    "project management recruitment",
    "civil engineering recruitment",
    "skilled trades staffing",
    "construction workforce solutions",
    "construction talent recruitment",
    "site operations recruitment",
    "project staffing services",
    "building and infrastructure hiring",
    "engineering staffing support",
    "trade labor recruitment",
    "construction operations hiring",
    "construction talent acquisition",
    "site support staffing"
  ]
};

export default function ConstructionOverviewPage() {
  const industryData = getIndustryBySlug("construction");
  const galleryImages = industryData && industryData.subIndustries ? industryData.subIndustries.flatMap((sub: any) => sub.images ? sub.images.slice(1) : []) : [];
  const reasons = [
    {
      title: "Project Delivery Depends on the Right People Being in Place",
      desc: "In construction environments, hiring quality can directly affect project movement, timelines, coordination, and delivery standards.",
      icon: <ShieldCheck className="w-8 h-8 text-gold" />
    },
    {
      title: "The Sector Includes Distinct Workforce Needs",
      desc: "Project management, civil engineering, skilled trades, site support, and operational roles each require different search and screening approaches.",
      icon: <Globe className="w-8 h-8 text-gold" />
    },
    {
      title: "Hiring Delays Can Affect Build Progress and Site Efficiency",
      desc: "Open roles can place strain on scheduling, productivity, contractor coordination, and project continuity.",
      icon: <TrendingUp className="w-8 h-8 text-gold" />
    },
    {
      title: "Practical Role Fit Matters Strongly",
      desc: "Construction employers often need people who can perform in real project environments, not just candidates with a matching title on paper.",
      icon: <Users className="w-8 h-8 text-gold" />
    },
    {
      title: "Some Roles Need More Targeted Search Precision",
      desc: "Civil engineering, project leadership, and specialist trade roles may require tighter filtering and more focused recruitment than broader workforce hiring.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      title: "Construction Hiring Must Balance Speed and Reliability",
      desc: "The process often needs to move quickly while still protecting workforce quality, role suitability, and site-readiness.",
      icon: <Clock className="w-8 h-8 text-gold" />
    }
  ];

  const subSectors = [
    {
      name: "Project Management",
      slug: "project-management",
      desc: "Recruitment support for employers hiring across project coordination, delivery oversight, scheduling, stakeholder communication, and site-led management environments.",
      roles: ["Project Coordinators", "Site Management Support", "Construction Project Staff", "Scheduling and Delivery Roles", "Operations Coordination Staff", "Project Support Roles"],
      icon: <Briefcase className="w-8 h-8 text-gold" />
    },
    {
      name: "Civil Engineering",
      slug: "civil-engineering",
      desc: "Hiring support for employers seeking technical talent across infrastructure, site engineering, planning support, design-linked project environments, and broader engineering-led construction functions.",
      roles: ["Civil Engineering Staff", "Site Engineering Support", "Planning and Technical Coordination Roles", "Infrastructure Project Support", "Field Engineering Roles"],
      icon: <Cpu className="w-8 h-8 text-gold" />
    },
    {
      name: "Skilled Trades",
      slug: "skilled-trades",
      desc: "Recruitment solutions for businesses hiring across skilled trade functions, field-based workforces, site support, installation work, and trade-led project execution environments.",
      roles: ["Skilled Trade Staff", "Site-Based Technical Workers", "Installation Support Roles", "Trade Assistants", "Field Operations Support"],
      icon: <Wrench className="w-8 h-8 text-gold" />
    }
  ];

  const expansionTopics = [
    "Site Operations",
    "Infrastructure Projects",
    "Field Supervision",
    "Construction Administration",
    "Building Services Support",
    "Trade Coordination"
  ];

  const roleGroups = [
    {
      title: "Project & Site Coordination Roles",
      roles: [
        "Project Coordinators",
        "Site Support Staff",
        "Scheduling Roles",
        "Operations Coordination Staff",
        "Delivery Support Roles",
        "Site Administration Staff"
      ]
    },
    {
      title: "Engineering & Technical Roles",
      roles: [
        "Civil Engineering Staff",
        "Site Engineering Support",
        "Infrastructure Project Staff",
        "Planning Support Roles",
        "Technical Documentation Staff"
      ]
    },
    {
      title: "Skilled Trades & Field Roles",
      roles: [
        "Skilled Trade Staff",
        "Site-Based Technical Workers",
        "Installation Support Roles",
        "Trade Assistants",
        "Field Operations Staff"
      ]
    },
    {
      title: "Operations & Administration Roles",
      roles: [
        "Construction Operations Staff",
        "Documentation Coordinators",
        "Workflow and Reporting Support",
        "Office and Site Admin Roles",
        "Resource Coordination Staff"
      ]
    },
    {
      title: "Leadership-Adjacent & Specialist Roles",
      roles: [
        "Team Leads",
        "Site Supervisory Support",
        "Project Support Leads",
        "Operations Supervisors",
        "Specialist Construction Support Roles"
      ]
    }
  ];

  const challenges = [
    {
      title: "Keeping Projects Moving With the Right Workforce",
      desc: "Project delivery often depends on having the right people in place at the right time, especially across site and operational functions."
    },
    {
      title: "Different Construction Roles Need Different Search Approaches",
      desc: "Project management, engineering, skilled trades, and site support roles cannot all be recruited using the same candidate logic."
    },
    {
      title: "Delays Can Affect Project Timelines and Coordination",
      desc: "Open positions can place strain on scheduling, workforce planning, contractor coordination, and project continuity."
    },
    {
      title: "Practical Role Fit Matters More Than Broad Volume",
      desc: "Construction employers often need stronger workforce relevance, not just larger numbers of applicants."
    },
    {
      title: "Screening Needs Real-World Context",
      desc: "Construction hiring often requires more than title matching. Employers need a process that reflects site environments, coordination demands, and practical work readiness."
    },
    {
      title: "Recruitment Must Reflect Delivery Pressure and Professional Standards",
      desc: "The hiring process should feel organized, dependable, and aligned with the seriousness of project-based work."
    }
  ];

  const supportAreas = [
    {
      title: "Sector-Aware Recruitment Support",
      desc: "Helping employers hire across project management, civil engineering, skilled trades, site operations, and broader construction-support functions with stronger alignment."
    },
    {
      title: "Permanent and Flexible Hiring Models",
      desc: "Supporting long-term workforce building as well as flexible or project-based hiring needs where workload and delivery demand shift."
    },
    {
      title: "Screening & Assessment Support",
      desc: "Helping improve shortlist quality and reduce weak-fit candidates in construction hiring workflows."
    },
    {
      title: "Turnkey Recruitment for Multi-Role Project Needs",
      desc: "Supporting broader hiring projects where construction employers need more structured delivery across multiple roles."
    },
    {
      title: "Structured Hiring Support for Growth or Project Demand",
      desc: "Helping construction employers build teams more effectively through a clearer and more disciplined recruitment process."
    },
    {
      title: "Connection to Broader Workforce Services",
      desc: "Construction hiring can connect naturally with permanent recruitment, contract staffing, RPO, turnkey projects, and screening support depending on the employer’s needs."
    }
  ];

  const pillars = [
    {
      title: "Construction-Aware Search Thinking",
      desc: "We treat construction recruitment as a specialist project and workforce environment, not as generic staffing with construction titles added in."
    },
    {
      title: "Better Role Precision",
      desc: "We help align recruitment more closely with the demands of project-led, engineering, skilled-trade, and site-support environments."
    },
    {
      title: "Support Across Core Construction Sub-Sectors",
      desc: "Our structure already aligns with Project Management, Civil Engineering, and Skilled Trades as the primary construction hiring environments."
    },
    {
      title: "Flexible Connection to Related Services",
      desc: "Construction recruitment can connect with contract staffing, permanent recruitment, screening and assessment, RPO, and turnkey recruitment projects."
    },
    {
      title: "Professional and Reliable Delivery",
      desc: "Construction employers often need a hiring process that feels organized, practical, and aligned with project demands."
    },
    {
      title: "Premium, Business-Relevant Support",
      desc: "We help employers recruit construction talent through a process that feels credible, structured, and aligned with real workforce needs."
    }
  ];

  const relatedServices = [
    { name: "Contract Staffing", href: "/services/contract-staffing", desc: "Flexible staffing solutions for temporary or project-based needs." },
    { name: "Permanent Recruitment", href: "/services/permanent-recruitment", desc: "Core long-term hiring solutions for ongoing business needs." },
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
      question: "Does NAYA Staffing recruit for construction roles?",
      answer: "Yes. NAYA Staffing supports hiring across the Construction sector, including project management, civil engineering, skilled trades, site operations, and related construction-support functions."
    },
    {
      question: "What types of construction roles can NAYA Staffing help fill?",
      answer: "NAYA Staffing can support hiring for project staff, site support roles, civil engineering positions, skilled trade roles, operations staff, and other construction-related positions."
    },
    {
      question: "Can NAYA Staffing support project management, civil engineering, and skilled trades hiring?",
      answer: "Yes. Your approved industry structure already lists Project Management, Civil Engineering, and Skilled Trades as the main construction sub-areas supported on this page."
    },
    {
      question: "Why is construction recruitment different from general recruitment?",
      answer: "Construction recruitment often requires stronger project context, better workforce-fit screening, clearer site-role understanding, and a more structured hiring process than broader recruitment alone."
    },
    {
      question: "Can NAYA Staffing help with hard-to-fill construction roles?",
      answer: "Yes. NAYA Staffing can support more difficult construction hiring needs through focused recruitment, shortlist refinement, and project-based recruitment support where needed."
    },
    {
      question: "Is this page only for large contractors?",
      answer: "No. This page can support a wider range of construction-related employers, including project-based businesses, site-led teams, engineering environments, trade-focused operations, and broader construction workforce needs."
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Construction & Project Talent Recruitment</span>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
            <Typewriter>
              Construction Recruitment <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Site-Critical & Project-Driven
              </span>
            </Typewriter>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
              NAYA Staffing supports employers across the Construction sector with recruitment solutions designed for project management, civil engineering, skilled trades, site operations, and broader construction-support environments. Whether you are building project teams, strengthening engineering capability, hiring skilled trade talent, or expanding site-based operations, we help employers access relevant candidates with greater confidence and hiring precision.
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
                Built for construction employers that need dependable talent, stronger workforce alignment, and a recruitment process shaped around delivery, safety, and project continuity.
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
                <span className="text-gold">Project-Led and Site-Based Construction Environments</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Construction hiring often sits at the center of project delivery, workforce coordination, site performance, engineering support, and operational continuity. Employers may be recruiting for roles that directly affect build quality, project timelines, field execution, compliance, team productivity, and day-to-day site operations. That means recruitment needs to prioritize dependability, practical fit, communication, and role relevance from the start.
              </p>
              <p>
                The Construction sector also includes multiple hiring environments. Some employers are focused on project management and planning. Others need civil engineering capability, skilled trades professionals, site coordination, operational support, or workforce talent that can perform effectively in deadline-driven and safety-conscious environments. Similar job titles can mean very different things depending on the contractor, project type, scale, and delivery model.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                NAYA Staffing’s Construction recruitment support is designed to help employers hire more effectively across those environments. We work with construction-related businesses that need stronger access to relevant talent, better shortlist quality, and a recruitment process that reflects the realities and pressure points of construction hiring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY RECRUITMENT REQUIRES A SPECIALIZED APPROACH */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="btn-rotating-border absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 btn-auto-sheen border border-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Construction <span className="text-gold">Recruitment Is Different</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Construction hiring is different from general recruitment because the environment is more project-dependent, site-sensitive, and operationally demanding.
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

      {/* 4. INDUSTRY SUB-SECTORS WE SUPPORT */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Construction <span className="text-gold">Areas We Support</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              We support hiring across Project Management, Civil Engineering, and Skilled Trades, with broader capability across site support, operations, and construction-related workforce environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
            {subSectors.map((sub: any, idx: number) => {
              const subData = industryData?.subIndustries?.find((s: any) => s.slug === sub.slug);
              const coverImage = subData?.images && subData.images.length > 0 ? subData.images[0] : null;
              
              return (
              <div key={idx} className="group relative rounded-[40px] overflow-hidden${coverImage ? '' : ' p-10'} bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                {coverImage && (
                  <div className="relative w-full h-48 overflow-hidden rounded-t-[40px] mb-6">
                    <Image 
                      src={coverImage} 
                      alt={sub.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent opacity-80"></div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className={"relative z-10" + (coverImage ? " p-10 pt-0" : "") + " space-y-6 flex-grow flex flex-col justify-between"}>
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
                      {sub.roles.map((role: string, i: number) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-slate-400 font-semibold uppercase btn-sheen">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link 
                    href={`/industries/construction/${sub.slug}`}
                    className="group/link inline-flex items-center gap-2 text-xs font-black tracking-widest text-gold hover:text-white uppercase transition-colors mt-auto"
                  >
                    Learn More About {sub.name} Hiring <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ); })}
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
            Additional Construction Areas <span className="text-gold">for Expansion</span>
          </h2>
          <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
          <p className="text-slate-400 text-lg leading-relaxed font-semibold max-w-4xl mx-auto">
            We support a wider construction footprint across these adjacent categories:
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
              Construction Roles We <span className="text-gold">Help Employers Hire</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports recruitment across a wide range of construction-related roles depending on the employer’s project type, operational model, and workforce priorities.
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
              Common Hiring Challenges in the <span className="text-gold">Construction Sector</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Construction employers often face recruitment conditions that require stronger structure, practical screening, and dependable hiring execution.
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

      {/* 8. HOW NAYA STAFFING SUPPORTS CONSTRUCTION EMPLOYERS */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              How We Support <span className="text-gold">Construction Hiring</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports Construction employers with recruitment solutions designed around project continuity, workforce dependability, and stronger role alignment.
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

      {/* 9. WHY EMPLOYERS CHOOSE NAYA STAFFING FOR CONSTRUCTION RECRUITMENT */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose NAYA Staffing <span className="text-gold">for Construction Recruitment</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Construction recruitment requires stronger project awareness, more practical workforce matching, and a hiring process that reflects real delivery conditions. NAYA Staffing’s approach is designed around those needs.
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
                for <span className="text-gold">Construction Hiring</span>
              </h2>
              <div className="btn-rotating-border h-1 w-20 bg-white/5 rounded-full btn-auto-sheen border border-white/5"></div>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                Construction employers often need more than one recruitment model depending on role type, urgency, project stage, and workforce scale.
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

      
      {/* MASONRY GALLERY */}
      {galleryImages.length > 0 && (
        <section className="py-24 bg-[#0B132B] relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold btn-auto-sheen border border-white/5">
                Industry In Action
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
                Explore <span className="text-gold">Our Expertise</span>
              </h2>
            </div>
            
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {galleryImages.map((src: string, idx: number) => (
                <div key={idx} className="relative break-inside-avoid rounded-3xl overflow-hidden group border border-white/10 shadow-2xl">
                  <Image 
                    src={src}
                    alt={`${industryData?.name} gallery image ${idx + 1}`}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
              Build Stronger Construction Teams <br/>
              With <span className="text-gold">More Project-Aware Hiring Support</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              Construction hiring depends on dependable people, stronger workforce alignment, and a recruitment process that supports project continuity. NAYA Staffing helps employers recruit across the Construction sector with a more structured, construction-aware, and business-relevant approach to talent acquisition.
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
          <Link href="/industries/construction" className="hover:text-gold transition-colors">Construction Overview</Link>
          <Link href="/industries/construction/project-management" className="hover:text-gold transition-colors">Project Management</Link>
          <Link href="/industries/construction/civil-engineering" className="hover:text-gold transition-colors">Civil Engineering</Link>
          <Link href="/industries/construction/skilled-trades" className="hover:text-gold transition-colors">Skilled Trades</Link>
        </div>
      </section>
    </main>
  );
}
