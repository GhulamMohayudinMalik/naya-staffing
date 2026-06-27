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
  BookOpen,
  GraduationCap,
  Laptop
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "Education Recruitment & Academic Staffing Solutions | NAYA Staffing",
  description: "NAYA Staffing provides education recruitment services for employers hiring across K-12 administration, higher education faculty, EdTech specialists, academic support, and education operations roles.",
  keywords: [
    "education recruitment agency",
    "education staffing solutions",
    "academic recruitment services",
    "school staffing agency",
    "higher education recruitment",
    "EdTech recruitment",
    "education hiring support",
    "academic staffing solutions",
    "K-12 administration recruitment",
    "faculty hiring support",
    "school operations staffing",
    "education talent acquisition",
    "academic support recruitment",
    "EdTech specialist hiring",
    "higher education staffing",
    "education workforce solutions"
  ]
};

export default function EducationOverviewPage() {
  const industryData = getIndustryBySlug("education");
  const galleryImages = industryData && industryData.subIndustries ? industryData.subIndustries.flatMap((sub: any) => sub.images ? sub.images.slice(1) : []) : [];
  const reasons = [
    {
      title: "Institutional Fit Matters Strongly",
      desc: "In education environments, the right hire often needs more than a matching title. Communication, reliability, professionalism, and alignment with the institution’s culture all matter.",
      icon: <Users className="w-8 h-8 text-gold" />
    },
    {
      title: "The Sector Includes Distinct Hiring Contexts",
      desc: "School administration, faculty recruitment, academic support, and EdTech hiring each require different search and screening approaches.",
      icon: <Globe className="w-8 h-8 text-gold" />
    },
    {
      title: "Hiring Delays Can Affect Delivery and Continuity",
      desc: "Open roles can create pressure on operations, administration, student services, instructional support, and organizational stability.",
      icon: <Clock className="w-8 h-8 text-gold" />
    },
    {
      title: "Trust and Professional Standards Are Important",
      desc: "Education employers often need a recruitment process that feels structured, reliable, and role-aware rather than rushed or generic.",
      icon: <ShieldCheck className="w-8 h-8 text-gold" />
    },
    {
      title: "Some Roles Require Stronger Search Precision",
      desc: "Faculty, digital-learning, and specialist academic or operations roles may require more targeted sourcing and sharper shortlisting.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      title: "Education Hiring Must Balance Efficiency and Care",
      desc: "The process often needs to move efficiently while still protecting candidate quality and institutional alignment.",
      icon: <TrendingUp className="w-8 h-8 text-gold" />
    }
  ];

  const subSectors = [
    {
      name: "K-12 Administration",
      slug: "k-12-administration",
      desc: "Recruitment support for employers hiring across school administration, student services coordination, office operations, scheduling, and institution-support environments within primary and secondary education.",
      roles: ["School Administration Staff", "Office and Coordination Roles", "Student Services Support", "Scheduling and Operations Staff", "Administrative Leadership Support"],
      icon: <BookOpen className="w-8 h-8 text-gold" />
    },
    {
      name: "Higher Ed Faculty",
      slug: "higher-ed-faculty",
      desc: "Hiring support for institutions seeking faculty, teaching-related professionals, academic program support, and broader higher-education staffing aligned with subject expertise and institutional standards.",
      roles: ["Faculty Roles", "Academic Support Staff", "Program Coordination Roles", "Teaching Support Functions", "Departmental Academic Staff"],
      icon: <GraduationCap className="w-8 h-8 text-gold" />
    },
    {
      name: "EdTech Specialists",
      slug: "edtech-specialists",
      desc: "Recruitment solutions for employers hiring across digital learning systems, education technology platforms, learning-support tools, and technical education environments.",
      roles: ["EdTech Specialists", "Learning Systems Support Roles", "Digital Education Coordinators", "Platform Support Staff", "Education Technology Operations Roles"],
      icon: <Laptop className="w-8 h-8 text-gold" />
    }
  ];

  const expansionTopics = [
    "Education & EdTech",
    "Academic Operations",
    "Student Services Support",
    "Learning Technology Environments",
    "School Operations",
    "Training & Development Roles"
  ];

  const roleGroups = [
    {
      title: "School Administration & Support Roles",
      roles: [
        "School Administration Staff",
        "Office Coordinators",
        "Scheduling and Operations Staff",
        "Student Support Roles",
        "Administrative Assistants"
      ]
    },
    {
      title: "Academic & Faculty Roles",
      roles: [
        "Faculty Staff",
        "Academic Support Roles",
        "Program Coordinators",
        "Departmental Support Staff",
        "Teaching Support Functions"
      ]
    },
    {
      title: "EdTech & Digital Learning Roles",
      roles: [
        "EdTech Specialists",
        "Learning Systems Support",
        "Digital Education Coordinators",
        "Platform Operations Roles",
        "Technical Learning Support Staff"
      ]
    },
    {
      title: "Education Operations Roles",
      roles: [
        "Institution Operations Staff",
        "Records and Documentation Support",
        "Student Services Coordination",
        "Program Administration Roles",
        "Education Project Support Roles"
      ]
    },
    {
      title: "Leadership-Adjacent & Specialist Roles",
      roles: [
        "Department Coordinators",
        "Academic Operations Leads",
        "Administrative Supervisors",
        "Learning Support Leads",
        "Institutional Support Specialists"
      ]
    }
  ];

  const challenges = [
    {
      title: "Maintaining Candidate Quality and Institutional Fit",
      desc: "Education environments often need candidates who can work reliably within structured, trust-based organizations."
    },
    {
      title: "Different Education Roles Need Different Search Approaches",
      desc: "Administration, faculty, student support, and EdTech roles cannot all be recruited through the same candidate logic."
    },
    {
      title: "Delays Can Affect Institutional Continuity",
      desc: "Open roles can put pressure on school operations, academic delivery, student support, and administrative workflow."
    },
    {
      title: "Some Areas Require More Targeted Search Precision",
      desc: "Faculty, digital learning, and specialist education-support roles may need tighter filtering and more focused recruitment."
    },
    {
      title: "Screening Needs More Context Than Resume Matching Alone",
      desc: "Education employers often need stronger evaluation around communication, professionalism, reliability, and environment fit."
    },
    {
      title: "Recruitment Must Reflect Institutional Standards",
      desc: "The hiring journey itself should feel professional, organized, and credible because it reflects the employer’s standards."
    }
  ];

  const supportAreas = [
    {
      title: "Sector-Aware Recruitment Support",
      desc: "Helping employers hire across K-12 administration, higher education faculty, EdTech specialists, academic support, and education operations with stronger alignment."
    },
    {
      title: "Permanent and Flexible Hiring Models",
      desc: "Supporting long-term institutional team building as well as flexible hiring needs where role coverage or project demand changes."
    },
    {
      title: "Screening & Assessment Support",
      desc: "Helping improve shortlist quality and reduce weak-fit candidates in education-related hiring workflows."
    },
    {
      title: "Structured Hiring Support for Team Growth",
      desc: "Helping education employers build operational and academic support teams more effectively through a disciplined recruitment process."
    },
    {
      title: "Headhunting for Specialist or Hard-to-Find Roles",
      desc: "Supporting targeted search where education-related roles require stronger precision or niche candidate access."
    },
    {
      title: "Connection to Broader Workforce Services",
      desc: "Education hiring can connect naturally with permanent recruitment, RPO, campus recruitment, diversity hiring, screening, and employer branding depending on the employer’s needs."
    }
  ];

  const pillars = [
    {
      title: "Education-Aware Search Thinking",
      desc: "We treat education recruitment as a specialist institutional environment, not as generic staffing with education titles added in."
    },
    {
      title: "Better Role Precision",
      desc: "We help align recruitment more closely with the demands of school administration, faculty support, EdTech, and education-led operations."
    },
    {
      title: "Support Across Core Education Sub-Sectors",
      desc: "Our structure already aligns with K-12 Administration, Higher Ed Faculty, and EdTech Specialists as the primary education hiring environments."
    },
    {
      title: "Flexible Connection to Related Services",
      desc: "Education recruitment can connect with permanent recruitment, screening and assessment, campus recruitment, diversity hiring, RPO, and employer branding."
    },
    {
      title: "Professional and Reliable Delivery",
      desc: "Education employers often need a hiring process that feels organized, credible, and aligned with institutional standards."
    },
    {
      title: "Premium, Business-Relevant Support",
      desc: "We help employers recruit education talent through a process that feels structured, dependable, and aligned with real workforce needs."
    }
  ];

  const relatedServices = [
    { name: "Permanent Recruitment", href: "/services/permanent-recruitment", desc: "Core long-term hiring solutions for ongoing business needs." },
    { name: "Screening & Assessment", href: "/services/screening-assessment", desc: "Structured candidate screening and evaluation support." },
    { name: "Campus Recruitment", href: "/services/campus-recruitment", desc: "Pipeline-building solutions through universities and educational programs." },
    { name: "Diversity Hiring", href: "/services/diversity-hiring", desc: "Custom recruitment solutions focused on inclusive and diverse pipelines." },
    { name: "Recruitment Process Outsourcing (RPO)", href: "/services/rpo", desc: "End-to-end recruitment management to scale your hiring operations." },
    { name: "Employer Branding", href: "/services/employer-branding", desc: "Strategic positioning to attract top-tier talent in competitive markets." },
    { name: "Headhunting Services", href: "/services/headhunting-services", desc: "Targeted direct search for hard-to-fill and specialist hires." },
    { name: "Turnkey Recruitment Projects", href: "/services", desc: "Structured project solutions for hiring multiple roles." },
    { name: "Talent Mapping", href: "/services/talent-mapping", desc: "Strategic market intelligence and recruitment planning support." }
  ];

  const faqs = [
    {
      question: "Does NAYA Staffing recruit for education roles?",
      answer: "Yes. NAYA Staffing supports hiring across the Education sector, including K-12 administration, higher education faculty, EdTech specialists, academic support, and education operations roles."
    },
    {
      question: "What types of education roles can NAYA Staffing help fill?",
      answer: "NAYA Staffing can support hiring for school administration staff, faculty-related roles, student-support functions, EdTech specialists, academic operations staff, and other education-related positions."
    },
    {
      question: "Can NAYA Staffing support K-12 administration, higher ed faculty, and EdTech hiring?",
      answer: "Yes. Your approved industry structure already lists K-12 Administration, Higher Ed Faculty, and EdTech Specialists as the main education sub-areas supported on this page."
    },
    {
      question: "Why is education recruitment different from general recruitment?",
      answer: "Education recruitment often requires stronger institutional context, better role alignment, clearer professionalism screening, and a more structured hiring process than broader recruitment alone."
    },
    {
      question: "Can NAYA Staffing help with hard-to-fill education roles?",
      answer: "Yes. NAYA Staffing can support more difficult education hiring needs through focused recruitment, shortlist refinement, and targeted search where needed."
    },
    {
      question: "Is this page only for schools?",
      answer: "No. This page can support a wider range of education-related employers, including schools, colleges, higher education institutions, EdTech environments, academic support teams, and education operations functions."
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Education & Academic Talent Recruitment</span>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
            <Typewriter>
              Education Recruitment for <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                High-Trust, Learning-Focused Needs
              </span>
            </Typewriter>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
              NAYA Staffing supports employers across the Education sector with recruitment solutions designed for K-12 administration, higher education faculty, EdTech specialists, academic support, and broader education operations. Whether you are hiring for school administration, faculty roles, student-support environments, digital learning functions, or education-led operational teams, we help employers access relevant candidates with greater confidence and hiring precision.
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
                Built for education employers that need dependable talent, stronger institutional alignment, and a recruitment process shaped around learning, structure, and long-term impact.
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
                <span className="text-gold">Learning-Centered and Institution-Led Environments</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Education hiring often carries a different kind of responsibility. Employers may be recruiting for roles that affect student experience, academic operations, faculty performance, school administration, institutional continuity, or digital learning delivery. That means the recruitment process must prioritize reliability, communication, professionalism, and role fit from the outset.
              </p>
              <p>
                The Education sector also includes multiple hiring environments. Some employers are focused on K-12 administration and school support. Others need higher education faculty, academic operations talent, EdTech specialists, or broader education-linked professionals who can work effectively in structured, learning-focused environments. Even when job titles look familiar, the context of the institution changes what the right hire actually looks like.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                NAYA Staffing’s Education recruitment support is designed to help employers hire more effectively across those environments. We work with education-related organizations that need stronger access to relevant talent, better shortlist quality, and a recruitment process that reflects the standards and responsibilities of the sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY EDUCATION RECRUITMENT REQUIRES A SPECIALIZED APPROACH */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="btn-rotating-border absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 btn-auto-sheen border border-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Education <span className="text-gold">Recruitment Is Different</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Education hiring is different from general recruitment because the environment is more trust-based, the standards are often higher, and the impact of role fit extends beyond internal operations.
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

      {/* 4. EDUCATION SUB-SECTORS WE SUPPORT */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Education <span className="text-gold">Areas We Support</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              We support hiring across K-12 Administration, Higher Ed Faculty, and EdTech Specialists, with broader capability across academic support, operations, and education-related environments.
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
                    href={`/industries/education/${sub.slug}`}
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
            Additional Education Areas <span className="text-gold">for Expansion</span>
          </h2>
          <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
          <p className="text-slate-400 text-lg leading-relaxed font-semibold max-w-4xl mx-auto">
            We support a wider education footprint across these adjacent categories:
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
              Education Roles We <span className="text-gold">Help Employers Hire</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports recruitment across a wide range of education-related roles depending on the employer’s institutional model, academic environment, and operational priorities.
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
              Common Hiring Challenges in the <span className="text-gold">Education Sector</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Education employers often face recruitment conditions that require stronger structure, clearer role alignment, and greater confidence in candidate professionalism.
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

      {/* 8. HOW NAYA STAFFING SUPPORTS EDUCATION EMPLOYERS */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              How We Support <span className="text-gold">Education Hiring</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports Education employers with recruitment solutions designed around institutional reliability, role relevance, and long-term hiring confidence.
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

      {/* 9. WHY EMPLOYERS CHOOSE NAYA STAFFING FOR EDUCATION RECRUITMENT */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose NAYA Staffing <span className="text-gold">for Education Recruitment</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Education recruitment requires stronger institutional awareness, more thoughtful screening, and a hiring process that reflects the standards of learning-focused organizations. NAYA Staffing’s approach is designed around those expectations.
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
                for <span className="text-gold">Education Hiring</span>
              </h2>
              <div className="btn-rotating-border h-1 w-20 bg-white/5 rounded-full btn-auto-sheen border border-white/5"></div>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                Education employers often need more than one recruitment model depending on role type, team growth, institutional priorities, and long-term workforce planning.
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
              <GraduationCap className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Build Stronger Education Teams <br/>
              With <span className="text-gold">More Trust-Focused Sourcing</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              Education hiring depends on reliability, communication, and stronger institutional fit. NAYA Staffing helps employers recruit across the Education sector with a more structured, education-aware, and premium approach to talent acquisition.
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
          <Link href="/industries/education" className="hover:text-gold transition-colors">Education Overview</Link>
          <Link href="/industries/education/k-12-administration" className="hover:text-gold transition-colors">K-12 Administration</Link>
          <Link href="/industries/education/higher-ed-faculty" className="hover:text-gold transition-colors">Higher Ed Faculty</Link>
          <Link href="/industries/education/edtech-specialists" className="hover:text-gold transition-colors">EdTech Specialists</Link>
        </div>
      </section>
    </main>
  );
}
