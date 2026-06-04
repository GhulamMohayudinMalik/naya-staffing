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
  GraduationCap,
  Activity
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "Higher Ed Faculty Recruitment & Academic Hiring Solutions | NAYA Staffing",
  description: "NAYA Staffing provides higher ed faculty recruitment services for employers hiring academic staff, faculty positions, post-secondary teaching talent, subject specialists, and broader higher-education workforce roles.",
  keywords: [
    "higher ed faculty recruitment agency",
    "higher education recruitment",
    "faculty recruitment services",
    "academic staffing agency",
    "post-secondary hiring agency",
    "university faculty recruitment",
    "college staffing solutions",
    "academic talent acquisition",
    "subject specialist recruitment",
    "higher education hiring support",
    "academic team staffing",
    "faculty hiring agency",
    "college workforce solutions",
    "teaching staff recruitment",
    "post-secondary faculty staffing",
    "education talent partner"
  ]
};

export default function HigherEdFacultySubIndustryPage() {
  const reasons = [
    {
      title: "Subject Fit Matters Beyond General Teaching Experience",
      desc: "Faculty hiring often depends on alignment to specific disciplines, levels, and academic contexts.",
      icon: <Award className="w-8 h-8 text-gold" />
    },
    {
      title: "Institutional Context Changes Role Requirements",
      desc: "The same faculty title may involve different teaching, research, advising, or departmental expectations depending on the institution.",
      icon: <Globe className="w-8 h-8 text-gold" />
    },
    {
      title: "Weak-Fit Hires Can Affect Academic Quality Quickly",
      desc: "Poor-fit faculty hires may influence delivery consistency, student experience, and departmental strength.",
      icon: <Activity className="w-8 h-8 text-gold" />
    },
    {
      title: "Academic Communication and Credibility Matter Deeply",
      desc: "Institutions often need candidates who can represent the subject area professionally and teach with clarity.",
      icon: <ShieldCheck className="w-8 h-8 text-gold" />
    },
    {
      title: "Candidate Relevance Matters More Than Broad Volume",
      desc: "Higher-education employers usually benefit more from tighter, academically aligned shortlists than larger applicant pools.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      title: "Institutional Stability Needs Better Hiring Structure",
      desc: "As faculty needs evolve, hiring often requires more organized support than one-off search activity.",
      icon: <Clock className="w-8 h-8 text-gold" />
    }
  ];

  const areas = [
    {
      title: "Faculty Hiring",
      desc: "Recruitment support for institutions hiring academic teaching talent across departments and disciplines."
    },
    {
      title: "Subject-Specialist Teaching Roles",
      desc: "Support for organizations filling discipline-specific academic positions where subject expertise matters heavily."
    },
    {
      title: "Departmental Academic Support",
      desc: "Coverage for faculty-adjacent roles that support delivery, coordination, and academic continuity."
    },
    {
      title: "Post-Secondary Teaching Environments",
      desc: "Support for institutions building stronger instructional capability in colleges, universities, and related higher-ed settings."
    },
    {
      title: "Teaching Quality & Academic Consistency",
      desc: "Support for employers focused on dependable classroom delivery, communication quality, and subject relevance."
    },
    {
      title: "Faculty Team Growth",
      desc: "Support for structured workforce build-outs tied to program expansion, department growth, or academic-strengthening goals."
    }
  ];

  const roleGroups = [
    {
      title: "Faculty & Teaching Roles",
      roles: [
        "Faculty Positions",
        "Teaching Staff",
        "Subject Specialists",
        "Academic Instructors",
        "Post-Secondary Teaching Roles"
      ]
    },
    {
      title: "Department & Program Roles",
      roles: [
        "Department Support Faculty",
        "Program Delivery Staff",
        "Academic Coordination Roles",
        "Teaching Support Positions",
        "Faculty-Adjacent Academic Roles"
      ]
    },
    {
      title: "Academic Communication & Delivery Roles",
      roles: [
        "Course Delivery Staff",
        "Classroom Leadership Roles",
        "Student-Facing Academic Support",
        "Instructional Support Roles",
        "Education Delivery Professionals"
      ]
    },
    {
      title: "Workforce Growth & Specialist Roles",
      roles: [
        "Senior Faculty Staff",
        "Specialized Teaching Roles",
        "Multi-role Academic Build-Out Staff",
        "Department Expansion Support",
        "Hard-to-Fill Academic Positions"
      ]
    }
  ];

  const challenges = [
    {
      title: "Faculty Roles Depend on Subject Relevance",
      desc: "Strong faculty hiring often requires closer alignment to discipline, level, and teaching needs."
    },
    {
      title: "Institutional Expectations Vary",
      desc: "The same academic title may involve different teaching models and departmental responsibilities depending on the employer."
    },
    {
      title: "Weak-Fit Hires Can Affect Student Experience and Department Strength",
      desc: "Poor-fit faculty hires may create strain across classroom delivery, academic consistency, and internal support."
    },
    {
      title: "Strong Communication Quality Matters",
      desc: "Institutions often need candidates who can teach clearly and operate effectively in academic environments."
    },
    {
      title: "Relevant Talent Can Be Harder to Match Quickly",
      desc: "Sharper search logic is often needed to find candidates with the right subject and institutional fit."
    },
    {
      title: "Program Growth Needs Better Hiring Structure",
      desc: "As institutions expand, faculty hiring often needs more organized support than ad hoc recruiting."
    }
  ];

  const supportAreas = [
    {
      title: "Education-Aware Recruitment Support",
      desc: "Helping employers hire with better understanding of higher-ed environments, faculty expectations, and academic context."
    },
    {
      title: "Permanent and Flexible Hiring Models",
      desc: "Supporting long-term faculty hires as well as contract or program-growth needs where needed."
    },
    {
      title: "Screening & Assessment Support",
      desc: "Helping improve shortlist quality and reduce weak-fit candidates in faculty hiring workflows."
    },
    {
      title: "Headhunting for Specialist Academic Talent",
      desc: "Supporting targeted search where certain subject-specific or hard-to-fill faculty roles require more precision."
    },
    {
      title: "Turnkey Support for Team Expansion",
      desc: "Helping employers scale academic teams through structured recruitment delivery."
    },
    {
      title: "Connection to Broader Workforce Services",
      desc: "This area can connect naturally with permanent recruitment, contract staffing, screening and assessment, RPO, and turnkey recruitment projects."
    }
  ];

  const pillars = [
    {
      title: "Better Academic Role Precision",
      desc: "We help employers recruit with stronger alignment to real faculty and subject-specific needs rather than broad title matching."
    },
    {
      title: "Better Understanding of Higher-Education Context",
      desc: "We treat faculty hiring as its own specialist environment, not generic education staffing."
    },
    {
      title: "Support for Team Stability and Growth",
      desc: "We support both individual faculty hires and broader academic-team expansion."
    },
    {
      title: "Flexible Connection to Related Services",
      desc: "Higher-ed recruitment can connect with screening, permanent recruitment, contract staffing, RPO, and turnkey projects."
    },
    {
      title: "Professional, Structured Delivery",
      desc: "Academic environments often need a hiring process that feels organized, credible, and institution-aware."
    },
    {
      title: "Built Inside the Education Industry Structure",
      desc: "This page is part of the reviewed Education framework in your PDF, where Higher Ed Faculty is explicitly listed as a child category."
    }
  ];

  const relatedServices = [
    { name: "Permanent Recruitment", href: "/services/permanent-recruitment", desc: "Core long-term hiring solutions for ongoing business needs." },
    { name: "Contract Staffing", href: "/services/contract-staffing", desc: "Flexible staffing solutions for temporary or project-based needs." },
    { name: "Screening & Assessment", href: "/services/screening-assessment", desc: "Structured candidate screening and evaluation support." },
    { name: "Recruitment Process Outsourcing (RPO)", href: "/services/rpo", desc: "End-to-end recruitment management to scale your hiring operations." },
    { name: "Turnkey Recruitment Projects", href: "/services", desc: "Structured project solutions for hiring multiple roles." },
    { name: "Headhunting Services", href: "/services/headhunting-services", desc: "Targeted direct search for hard-to-fill and specialist hires." },
    { name: "Employer Branding", href: "/services/employer-branding", desc: "Strategic positioning to attract top-tier talent in competitive markets." },
    { name: "Talent Mapping", href: "/services/talent-mapping", desc: "Strategic market intelligence and recruitment planning support." }
  ];

  const faqs = [
    {
      question: "Does NAYA Staffing recruit for higher ed faculty roles?",
      answer: "Yes. NAYA Staffing supports hiring across higher-ed faculty environments, including teaching staff, faculty positions, subject specialists, and broader academic-support roles."
    },
    {
      question: "What higher ed faculty roles can NAYA Staffing help fill?",
      answer: "NAYA Staffing can support hiring for faculty positions, post-secondary teaching roles, subject specialists, academic support roles, and related institutional positions."
    },
    {
      question: "Why is higher ed faculty recruitment different from general recruitment?",
      answer: "Because faculty hiring depends heavily on subject relevance, academic communication quality, institutional fit, and stronger teaching-role alignment."
    },
    {
      question: "Is Higher Ed Faculty an approved subpage in the structure?",
      answer: "Yes. Your uploaded PDF explicitly lists Higher Ed Faculty as a reviewed child category under Education."
    },
    {
      question: "Can NAYA Staffing help with faculty team expansion?",
      answer: "Yes. NAYA Staffing can support both individual faculty hires and broader academic-team growth through structured recruitment support."
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Higher Education & Faculty Talent Recruitment</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
              Higher Ed Faculty <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Academic Quality & Subject Fit
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed mb-10">
              NAYA Staffing supports employers hiring across higher-ed faculty environments, including post-secondary teaching roles, subject-specialist positions, academic department hiring, and broader faculty-support needs. Whether you are strengthening academic delivery, filling specialist teaching positions, or building a more dependable faculty pipeline, we help employers access more relevant candidates with greater confidence and recruitment clarity.
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
                Built for education employers that need stronger faculty hiring, better academic-role fit, and a more structured path to institutional teaching quality.
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
                Recruitment Support for Faculty Hiring, <br className="hidden md:inline" />
                <span className="text-gold">Academic Delivery, and Post-Secondary Teaching Environments</span>
              </h2>
              <div className="h-1.5 w-20 bg-gold rounded-full opacity-60"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Higher-ed faculty hiring often affects academic quality, student experience, subject coverage, department performance, institutional credibility, and broader teaching continuity. Employers in this space are often hiring for roles that directly influence how effectively knowledge is delivered, how academic standards are maintained, and how well departments support long-term institutional goals.
              </p>
              <p>
                This is also a hiring environment where subject fit and institutional alignment matter heavily. The same faculty title can involve very different expectations depending on discipline, teaching load, academic model, department structure, and institution type. That means stronger recruitment depends on better role understanding, tighter shortlist relevance, and a hiring process that reflects real higher-education conditions.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                NAYA Staffing’s higher-ed faculty recruitment support is designed to help education employers hire more effectively across those environments. We support organizations that need stronger faculty shortlists, better academic-role fit, and a recruitment process that reflects the importance of subject expertise, communication quality, and institutional standards. This page is directly supported by your PDF, which lists Higher Ed Faculty as a reviewed child category under Education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY RECRUITMENT REQUIRES A SPECIALIZED APPROACH */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Higher Ed Faculty <span className="text-gold">Recruitment Is Different</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Higher-ed faculty recruitment is different from general recruitment because the roles often sit close to academic credibility, subject expertise, communication quality, institutional standards, and long-term educational outcomes.
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

      {/* 4. AREAS WE SUPPORT */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Higher Ed Faculty Areas <span className="text-gold">We Support</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              We support a wide range of academic delivery, subject coverage, and program support environments.
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
              Higher Ed Faculty Roles We <span className="text-gold">Help Employers Hire</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports recruitment across a wide range of higher-ed faculty and instructional roles based on your institutional priorities.
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
              Common Hiring Challenges in <span className="text-gold">Higher Ed Faculty</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Education employers often face recruitment conditions here that require more academic fit, stronger communication alignment, and more subject relevance than general office or non-specialist hiring.
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

      {/* 7. HOW NAYA STAFFING SUPPORTS EDUCATION EMPLOYERS */}
      <section className="py-32 bg-navy relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              How We Support <span className="text-gold">Higher Ed Faculty Sourcing</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports education employers with recruitment solutions designed around academic relevance, subject fit, and stronger faculty-role alignment.
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

      {/* 8. WHY EMPLOYERS CHOOSE NAYA STAFFING FOR HIGHER ED FACULTY RECRUITMENT */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose NAYA Staffing <span className="text-gold">for Higher Ed Faculty Recruitment</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Higher-ed faculty recruitment requires stronger academic awareness, sharper subject-role fit, and a hiring process that reflects the real needs of post-secondary institutions. NAYA Staffing’s approach is designed around those expectations.
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
                for <span className="text-gold">Faculty Sourcing</span>
              </h2>
              <div className="h-1 w-20 bg-gold rounded-full"></div>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                Connect higher ed faculty recruitment with our broader services to support your entire organization.
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
              <GraduationCap className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Build Stronger Academic Teams <br/>
              With <span className="text-gold">Precise Faculty Hiring Support</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              Higher-ed faculty hiring depends on subject fit, communication quality, and stronger institutional alignment. NAYA Staffing helps education employers hire more effectively across post-secondary environments with a more structured, academic-aware recruitment approach.
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
      <section className="py-12 bg-navy-dark border-t border-white/5 text-sm font-bold text-slate-500">
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
