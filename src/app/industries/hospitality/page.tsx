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
  Hotel,
  Calendar,
  Utensils
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "Hospitality Recruitment & Hotel Staffing Solutions | NAYA Staffing",
  description: "NAYA Staffing provides hospitality recruitment services for employers hiring across hotel management, event planning, culinary roles, guest services, hospitality operations, and related service-focused functions.",
  keywords: [
    "hospitality recruitment agency",
    "hospitality staffing solutions",
    "hotel recruitment services",
    "hotel staffing agency",
    "event staffing services",
    "culinary recruitment",
    "hospitality hiring support",
    "hospitality workforce solutions",
    "guest services recruitment",
    "hotel operations hiring",
    "restaurant staffing support",
    "event planning recruitment",
    "food service recruitment",
    "hospitality talent acquisition",
    "hospitality operations staffing",
    "customer-facing role recruitment"
  ]
};

export default function HospitalityIndustryPage() {
  const reasons = [
    {
      title: "Service Standards Matter Every Day",
      desc: "In hospitality environments, the quality of people hired directly affects guest experience, team coordination, and brand perception.",
      icon: <Award className="w-8 h-8 text-gold" />
    },
    {
      title: "The Sector Includes Distinct Workforce Environments",
      desc: "Hotels, events, culinary operations, guest services, and hospitality support functions all require different search and evaluation approaches.",
      icon: <Globe className="w-8 h-8 text-gold" />
    },
    {
      title: "Hiring Delays Can Affect Service Delivery",
      desc: "Open roles can place strain on team performance, scheduling, customer experience, and event or venue operations.",
      icon: <Clock className="w-8 h-8 text-gold" />
    },
    {
      title: "Soft Skills and Reliability Matter as Much as Experience",
      desc: "Communication, presentation, responsiveness, and dependability often matter just as much as role history.",
      icon: <Users className="w-8 h-8 text-gold" />
    },
    {
      title: "Some Roles Require Stronger Search Precision",
      desc: "Supervisory, event, culinary, and management roles may require tighter filtering and more targeted recruitment than broad frontline hiring.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      title: "Hospitality Hiring Must Balance Speed and Standards",
      desc: "The process often needs to move quickly while still protecting service quality and role alignment.",
      icon: <TrendingUp className="w-8 h-8 text-gold" />
    }
  ];

  const subSectors = [
    {
      name: "Hotel Management",
      slug: "hotel-management",
      desc: "Recruitment support for employers hiring across hotel operations, front-office leadership, service delivery, team supervision, and broader accommodation-led environments.",
      roles: ["Hotel Operations Staff", "Front Office Supervisors", "Guest Relations Roles", "Duty Management Support", "Property Coordination Roles", "Hospitality Supervisory Staff"],
      icon: <Hotel className="w-8 h-8 text-gold" />
    },
    {
      name: "Event Planning",
      slug: "event-planning",
      desc: "Hiring support for employers seeking professionals across event coordination, scheduling, client communication, logistics support, and event-delivery environments.",
      roles: ["Event Coordinators", "Event Support Staff", "Client-Facing Event Roles", "Scheduling and Venue Support", "Event Operations Staff"],
      icon: <Calendar className="w-8 h-8 text-gold" />
    },
    {
      name: "Culinary Arts",
      slug: "culinary-arts",
      desc: "Recruitment solutions for businesses hiring across kitchen operations, food preparation, culinary support, back-of-house coordination, and service-led dining environments.",
      roles: ["Culinary Staff", "Kitchen Support Roles", "Food Preparation Staff", "Back-of-House Team Members", "Kitchen Operations Support"],
      icon: <Utensils className="w-8 h-8 text-gold" />
    }
  ];

  const expansionTopics = [
    "Guest Services",
    "Front Office Operations",
    "Food & Beverage Service",
    "Venue Operations",
    "Tourism & Leisure Support",
    "Restaurant Operations"
  ];

  const roleGroups = [
    {
      title: "Guest Services & Front-of-House Roles",
      roles: [
        "Guest Relations Staff",
        "Front Desk Support",
        "Reception Roles",
        "Customer-Facing Hospitality Staff",
        "Concierge-Style Support Roles",
        "Reservation Support Staff"
      ]
    },
    {
      title: "Hotel Operations Roles",
      roles: [
        "Hotel Operations Staff",
        "Shift Supervisory Roles",
        "Property Support Staff",
        "Scheduling and Coordination Roles",
        "Operations Assistants"
      ]
    },
    {
      title: "Event & Venue Roles",
      roles: [
        "Event Coordinators",
        "Event Support Staff",
        "Venue Operations Support",
        "Client-Facing Event Roles",
        "Event Logistics Staff"
      ]
    },
    {
      title: "Culinary & Back-of-House Roles",
      roles: [
        "Culinary Staff",
        "Kitchen Support Roles",
        "Food Preparation Team Members",
        "Back-of-House Operations Staff",
        "Service Support Roles"
      ]
    },
    {
      title: "Leadership-Adjacent & Specialist Roles",
      roles: [
        "Team Leaders",
        "Duty Managers",
        "Hospitality Supervisors",
        "Venue Leads",
        "Service Coordination Roles"
      ]
    }
  ];

  const challenges = [
    {
      title: "Maintaining Service Quality During Hiring Pressure",
      desc: "Urgent staffing needs can create pressure, but hospitality roles still require dependability, presentation, and service alignment."
    },
    {
      title: "Different Hospitality Roles Need Different Search Approaches",
      desc: "Hotel, events, culinary, and guest-facing roles cannot all be recruited with the same candidate logic."
    },
    {
      title: "Delays Can Affect Customer Experience",
      desc: "Open positions can place strain on scheduling, service levels, event delivery, and daily operations."
    },
    {
      title: "Service Roles Need More Than Resume Matching",
      desc: "Hospitality employers often need stronger screening for communication, presentation, reliability, and customer-facing fit."
    },
    {
      title: "Peak Demand Can Create Workforce Pressure",
      desc: "Busy periods, events, growth, or operational expansion may require faster hiring without lowering standards."
    },
    {
      title: "Recruitment Must Reflect Brand Standards",
      desc: "The hiring process itself should feel polished and professional because it reflects on the employer’s service brand."
    }
  ];

  const supportAreas = [
    {
      title: "Sector-Aware Recruitment Support",
      desc: "Helping employers hire across hotel management, event planning, culinary environments, guest services, and hospitality operations with stronger alignment."
    },
    {
      title: "Permanent and Flexible Hiring Models",
      desc: "Supporting long-term team building as well as flexible hiring needs where seasonal, event-driven, or operational demand changes."
    },
    {
      title: "Screening & Assessment Support",
      desc: "Helping improve shortlist quality and reduce weak-fit candidates in service-led hiring workflows."
    },
    {
      title: "Turnkey Recruitment for Multi-Role Hospitality Needs",
      desc: "Supporting broader hiring projects where hospitality employers need more structured delivery across multiple roles."
    },
    {
      title: "Structured Hiring Support for Growth or Service Demand",
      desc: "Helping hospitality employers build teams more effectively through a clearer and more disciplined recruitment process."
    },
    {
      title: "Connection to Broader Workforce Services",
      desc: "Hospitality hiring can connect naturally with permanent recruitment, contract staffing, RPO, turnkey projects, and screening support depending on the employer’s needs."
    }
  ];

  const pillars = [
    {
      title: "Hospitality-Aware Search Thinking",
      desc: "We treat hospitality recruitment as a specialist service environment, not as generic staffing with hospitality titles added in."
    },
    {
      title: "Better Service Role Precision",
      desc: "We help align recruitment more closely with the demands of guest-facing, operational, culinary, and event-led environments."
    },
    {
      title: "Support Across Core Hospitality Sub-Sectors",
      desc: "Our structure already aligns with Hotel Management, Event Planning, and Culinary Arts as the primary hospitality hiring environments."
    },
    {
      title: "Flexible Connection to Related Services",
      desc: "Hospitality recruitment can connect with contract staffing, permanent recruitment, screening and assessment, RPO, and turnkey recruitment projects."
    },
    {
      title: "Professional and Polished Delivery",
      desc: "Hospitality employers often need a hiring process that feels service-aware, organized, and brand-appropriate."
    },
    {
      title: "Premium, Business-Relevant Support",
      desc: "We help employers recruit hospitality talent through a process that feels credible, structured, and aligned with real workforce needs."
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
      question: "Does NAYA Staffing recruit for hospitality roles?",
      answer: "Yes. NAYA Staffing supports hiring across the Hospitality sector, including hotel management, event planning, culinary environments, guest services, and related service-focused functions."
    },
    {
      question: "What types of hospitality roles can NAYA Staffing help fill?",
      answer: "NAYA Staffing can support hiring for guest-facing roles, hotel operations staff, event coordinators, culinary support teams, hospitality supervisors, and other service-led positions."
    },
    {
      question: "Can NAYA Staffing support hotel management, event planning, and culinary hiring?",
      answer: "Yes. Our industry structure lists Hotel Management, Event Planning, and Culinary Arts as the main hospitality sub-areas supported on this page."
    },
    {
      question: "Why is hospitality recruitment different from general recruitment?",
      answer: "Hospitality recruitment often requires stronger service awareness, better candidate presentation and communication fit, and a more structured hiring process than broader recruitment alone."
    },
    {
      question: "Can NAYA Staffing help with hard-to-fill hospitality roles?",
      answer: "Yes. NAYA Staffing can support more difficult hospitality hiring needs through focused recruitment, shortlist refinement, and project-based recruitment support where needed."
    },
    {
      question: "Is this page only for hotels?",
      answer: "No. This page can support a wider range of hospitality employers, including hotels, venues, event-related businesses, culinary environments, guest-service teams, and broader service-led operations."
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Hospitality & Service Talent Recruitment</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
              Hospitality Recruitment for <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Service-Driven Needs
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed mb-10">
              NAYA Staffing supports employers across the Hospitality sector with recruitment solutions designed for hotel management, event planning, culinary environments, guest services, and broader hospitality operations. Whether you are strengthening front-of-house teams, hiring operations support, expanding event capability, or building culinary and service-led teams, we help businesses access relevant candidates with greater confidence and hiring precision.
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
                Built for hospitality employers that need dependable talent, stronger service alignment, and a recruitment process shaped around guest experience and operational consistency.
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
                Recruitment Support for Service-Led <br className="hidden md:inline" />
                <span className="text-gold">Hospitality Environments</span>
              </h2>
              <div className="h-1.5 w-20 bg-gold rounded-full opacity-60"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Hospitality hiring is shaped by service quality, presentation, consistency, and people skills. Employers are often recruiting for roles that directly affect guest experience, event execution, service delivery, operational flow, and brand perception. That means recruitment must go beyond availability alone and focus on how candidates will perform in real service environments.
              </p>
              <p>
                The Hospitality sector also includes a wide range of hiring contexts. Some employers are focused on hotel operations and management. Others need event professionals, culinary talent, guest services staff, or broader hospitality support teams who can work effectively in fast-paced, customer-facing settings. Even when job titles seem familiar, the environment changes what the right hire actually looks like.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                NAYA Staffing’s Hospitality recruitment support is designed to help employers hire more effectively across those settings. We work with service-led businesses that need stronger access to relevant talent, better shortlist quality, and a recruitment process that reflects the standards and pace of hospitality operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY HOSPITALITY RECRUITMENT REQUIRES A SPECIALIZED APPROACH */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Hospitality <span className="text-gold">Recruitment Is Different</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Hospitality hiring is different from general recruitment because the candidate’s impact is often felt immediately through service quality, guest interaction, and daily operational consistency.
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

      {/* 4. HOSPITALITY SUB-SECTORS WE SUPPORT */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Hospitality <span className="text-gold">Areas We Support</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              We support hiring across Hotel Management, Event Planning, and Culinary Arts as the primary hospitality hiring environments.
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
                    href={`/industries/hospitality/${sub.slug}`}
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
            Additional Hospitality Areas <span className="text-gold">for Expansion</span>
          </h2>
          <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
          <p className="text-slate-400 text-lg leading-relaxed font-semibold max-w-4xl mx-auto">
            We support a wider hospitality footprint across these adjacent categories:
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
              Hospitality Roles We <span className="text-gold">Help Employers Hire</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports recruitment across a wide range of hospitality roles depending on the employer’s venue type, service environment, operational model, and workforce priorities.
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
              Common Hiring Challenges in the <span className="text-gold">Hospitality Sector</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Hospitality employers often face recruitment conditions that require strong pace, good judgment, and careful role matching.
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

      {/* 8. HOW NAYA STAFFING SUPPORTS HOSPITALITY EMPLOYERS */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              How We Support <span className="text-gold">Hospitality Hiring</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports Hospitality employers with recruitment solutions designed around service quality, workforce dependability, and operational consistency.
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

      {/* 9. WHY EMPLOYERS CHOOSE NAYA STAFFING FOR HOSPITALITY RECRUITMENT */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose NAYA Staffing <span className="text-gold">for Hospitality Recruitment</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Hospitality recruitment requires stronger service awareness, practical role matching, and a hiring process that reflects the standards of the sector. NAYA Staffing’s approach is designed around those needs.
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
                for <span className="text-gold">Hospitality Hiring</span>
              </h2>
              <div className="h-1 w-20 bg-gold rounded-full"></div>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                Hospitality employers often need more than one recruitment model depending on role type, urgency, seasonality, and workforce demand.
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
              <Hotel className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Build Stronger Hospitality Teams <br/>
              With <span className="text-gold">More Service-Aware Hiring Support</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              Hospitality hiring depends on dependable people, polished service delivery, and stronger role alignment. NAYA Staffing helps employers recruit across the Hospitality sector with a more structured, service-aware, and business-relevant approach to talent acquisition.
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
          <Link href="/industries/hospitality" className="hover:text-gold transition-colors">Hospitality Overview</Link>
          <Link href="/industries/hospitality/hotel-management" className="hover:text-gold transition-colors">Hotel Management</Link>
          <Link href="/industries/hospitality/event-planning" className="hover:text-gold transition-colors">Event Planning</Link>
          <Link href="/industries/hospitality/culinary-arts" className="hover:text-gold transition-colors">Culinary Arts</Link>
        </div>
      </section>
    </main>
  );
}
