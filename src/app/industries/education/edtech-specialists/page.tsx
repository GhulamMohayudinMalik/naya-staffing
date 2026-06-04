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
  Laptop,
  Activity
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "EdTech Recruitment & Education Technology Hiring Solutions | NAYA Staffing",
  description: "NAYA Staffing provides EdTech recruitment services for employers hiring education technology specialists, LMS support talent, digital learning professionals, and broader instructional technology workforce roles.",
  keywords: [
    "EdTech recruitment agency",
    "education technology staffing",
    "EdTech hiring agency",
    "instructional technology recruitment",
    "digital learning recruitment",
    "LMS staffing solutions",
    "education technology talent acquisition",
    "EdTech workforce partner",
    "learning platform hiring",
    "EdTech specialists recruitment",
    "digital education staffing",
    "LMS support recruitment",
    "instructional systems staffing",
    "e-learning hiring support",
    "education technology workforce solutions",
    "EdTech talent partner"
  ]
};

export default function EdTechSpecialistsSubIndustryPage() {
  const reasons = [
    {
      title: "The Roles Sit Between Education and Technology",
      desc: "Strong candidates often need to understand both instructional environments and digital systems.",
      icon: <Cpu className="w-8 h-8 text-gold" />
    },
    {
      title: "Platform Context Matters More Than Generic Tech Experience",
      desc: "Education technology roles often require awareness of users, learning workflows, training needs, and institutional adoption challenges.",
      icon: <Globe className="w-8 h-8 text-gold" />
    },
    {
      title: "Weak-Fit Hires Can Slow Digital Learning Progress",
      desc: "Poor-fit EdTech hires may affect usability, support quality, adoption rates, and learning delivery consistency.",
      icon: <Activity className="w-8 h-8 text-gold" />
    },
    {
      title: "Role Definitions Can Vary Widely by Institution",
      desc: "The same EdTech title may involve different platform, support, training, or instructional responsibilities depending on the employer.",
      icon: <Settings className="w-8 h-8 text-gold" />
    },
    {
      title: "Relevant Talent Often Needs More Targeted Search",
      desc: "Employers may need sharper sourcing and stronger shortlist alignment than broad applicant-driven hiring alone.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      title: "Digital Education Growth Needs Better Hiring Structure",
      desc: "As institutions expand digital capability, EdTech hiring often becomes more strategic and less ad hoc.",
      icon: <Clock className="w-8 h-8 text-gold" />
    }
  ];

  const areas = [
    {
      title: "Learning Platform Support",
      desc: "Recruitment support for employers hiring around LMS environments, learning systems, and digital platform support."
    },
    {
      title: "Instructional Technology Functions",
      desc: "Support for organizations building stronger technology-enabled teaching and digital-learning support capability."
    },
    {
      title: "User Adoption & Training Support",
      desc: "Coverage for roles focused on helping educators, students, or teams use systems effectively."
    },
    {
      title: "Digital Learning Operations",
      desc: "Support for employers improving online learning workflows, virtual delivery support, and content-system coordination."
    },
    {
      title: "Education Technology Systems Roles",
      desc: "Hiring support for institutions strengthening the operational side of education technology environments."
    },
    {
      title: "EdTech Team Growth",
      desc: "Support for structured workforce build-outs tied to digital transformation, platform rollout, or learning-technology expansion."
    }
  ];

  const roleGroups = [
    {
      title: "Platform & Systems Roles",
      roles: [
        "EdTech Specialists",
        "LMS Support Staff",
        "Instructional Technology Roles",
        "Learning Platform Coordinators",
        "Digital Systems Support Staff"
      ]
    },
    {
      title: "Training & Adoption Roles",
      roles: [
        "User Adoption Support Roles",
        "Faculty/Staff Technology Support Positions",
        "Learning Systems Training Roles",
        "Education Technology Onboarding Staff",
        "Digital Learning Support Professionals"
      ]
    },
    {
      title: "Operations & Coordination Roles",
      roles: [
        "EdTech Operations Staff",
        "Digital Learning Coordination Roles",
        "Platform Workflow Support",
        "Content Systems Support Staff",
        "Education Technology Project Support"
      ]
    },
    {
      title: "Workforce Growth & Specialist Roles",
      roles: [
        "Senior EdTech Staff",
        "EdTech Team Leads",
        "Multi-role Digital Learning Build-Out Staff",
        "Institutional Technology Support Roles",
        "Hard-to-Fill Education Technology Positions"
      ]
    }
  ];

  const challenges = [
    {
      title: "Candidates Need More Than General Tech Skills",
      desc: "They often need to understand educators, learners, support workflows, and adoption realities."
    },
    {
      title: "Role Definitions Shift by Institution and Platform Model",
      desc: "The same title may involve very different responsibilities depending on tools, scale, and maturity."
    },
    {
      title: "Weak-Fit Hires Can Affect Adoption and Learning Experience",
      desc: "Poor-fit EdTech hires may reduce support quality, delay implementation, or weaken system effectiveness."
    },
    {
      title: "Relevant Talent Can Be Harder to Source Quickly",
      desc: "Employers often need sharper search logic to find candidates who fit both the education and technology context."
    },
    {
      title: "Digital-Learning Growth Needs Better Structure",
      desc: "As institutions expand online and hybrid delivery, hiring becomes more strategic and operationally important."
    },
    {
      title: "Candidate Relevance Matters More Than Broad Volume",
      desc: "Institutions usually benefit more from tighter EdTech-ready shortlists than larger applicant pools."
    }
  ];

  const supportAreas = [
    {
      title: "Education-Tech-Aware Recruitment Support",
      desc: "Helping employers hire with better understanding of learning systems, user adoption, and instructional technology environments."
    },
    {
      title: "Permanent and Flexible Hiring Models",
      desc: "Supporting long-term EdTech hires as well as contract or rollout-related workforce needs where needed."
    },
    {
      title: "Screening & Assessment Support",
      desc: "Helping improve shortlist quality and reduce weak-fit candidates in EdTech hiring workflows."
    },
    {
      title: "Headhunting for Specialist Digital Education Talent",
      desc: "Supporting targeted search where niche education-technology roles require more precision."
    },
    {
      title: "Turnkey Support for Team Expansion",
      desc: "Helping employers scale EdTech capability through structured recruitment delivery."
    },
    {
      title: "Connection to Broader Workforce Services",
      desc: "This area can connect naturally with permanent recruitment, contract staffing, screening and assessment, RPO, and turnkey recruitment projects."
    }
  ];

  const pillars = [
    {
      title: "Better Education-Tech Role Precision",
      desc: "We help employers recruit with stronger alignment to real EdTech and digital-learning needs rather than broad title matching."
    },
    {
      title: "Better Understanding of Digital Education Context",
      desc: "We treat EdTech hiring as its own specialist environment, not generic education or IT staffing."
    },
    {
      title: "Support for Team Stability and Growth",
      desc: "We support both individual EdTech hires and broader digital-learning team expansion."
    },
    {
      title: "Flexible Connection to Related Services",
      desc: "EdTech recruitment can connect with screening, permanent recruitment, contract staffing, RPO, and turnkey projects."
    },
    {
      title: "Professional, Structured Delivery",
      desc: "Digital education environments often need a hiring process that feels organized, credible, and systems-aware."
    },
    {
      title: "Built Inside the Education Industry Structure",
      desc: "This page is part of the reviewed Education framework in your PDF, where EdTech Specialists is explicitly listed as a child category."
    }
  ];

  const relatedServices = [
    { name: "Permanent Recruitment", href: "/services/permanent-recruitment", desc: "Core long-term hiring solutions for ongoing business needs." },
    { name: "Contract Staffing", href: "/services/contract-staffing", desc: "Flexible staffing solutions for temporary or project-based needs." },
    { name: "Screening & Assessment", href: "/services/screening-assessment", desc: "Structured candidate screening and evaluation support." },
    { name: "Recruitment Process Outsourcing (RPO)", href: "/services/rpo", desc: "End-to-end recruitment management to scale your hiring operations." },
    { name: "Turnkey Recruitment Projects", href: "/services", desc: "Structured project solutions for hiring multiple roles." },
    { name: "Headhunting Services", href: "/services/headhunting-services", desc: "Targeted direct search for hard-to-fill and specialist hires." },
    { name: "Talent Mapping", href: "/services/talent-mapping", desc: "Strategic market intelligence and recruitment planning support." },
    { name: "Employer Branding", href: "/services/employer-branding", desc: "Strategic positioning to attract top-tier talent in competitive markets." }
  ];

  const faqs = [
    {
      question: "Does NAYA Staffing recruit for EdTech specialist roles?",
      answer: "Yes. NAYA Staffing supports hiring across EdTech environments, including learning-platform support, instructional technology roles, digital-learning operations, and broader education-technology positions."
    },
    {
      question: "What EdTech roles can NAYA Staffing help fill?",
      answer: "NAYA Staffing can support hiring for EdTech specialists, LMS support roles, instructional technology staff, user-adoption support positions, and related digital-learning workforce roles."
    },
    {
      question: "Why is EdTech recruitment different from general recruitment?",
      answer: "Because EdTech hiring depends on both education-context understanding and digital-systems relevance, which requires stronger role-to-environment alignment."
    },
    {
      question: "Is EdTech Specialists an approved subpage in the structure?",
      answer: "Yes. Your uploaded PDF explicitly lists EdTech Specialists as a reviewed child category under Education."
    },
    {
      question: "Can NAYA Staffing help with digital-learning team expansion?",
      answer: "Yes. NAYA Staffing can support both individual EdTech hires and broader education-technology team growth through structured recruitment support."
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Education Technology & Digital Learning Talent Recruitment</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
              EdTech Specialists <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Smarter Learning Systems & Support
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed mb-10">
              NAYA Staffing supports employers hiring across EdTech environments, including digital learning platforms, instructional technology support, LMS-related roles, user-adoption functions, and broader education-technology teams. Whether you are improving digital learning delivery, strengthening instructional systems, or building a more capable EdTech function, we help employers access more relevant candidates with greater confidence and recruitment clarity.
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
                Built for education employers that need stronger EdTech hiring, better digital-learning role fit, and a more structured path to instructional technology capability.
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
                Recruitment Support for Digital Learning, <br className="hidden md:inline" />
                <span className="text-gold">Instructional Systems, and Education Technology Environments</span>
              </h2>
              <div className="h-1.5 w-20 bg-gold rounded-full opacity-60"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                EdTech hiring often affects learning delivery, platform usability, instructional consistency, user adoption, digital support quality, and the wider effectiveness of technology-enabled education. Employers in this space are often hiring for roles that directly influence how students, educators, and institutions interact with learning systems, content platforms, and education-focused technology tools.
              </p>
              <p>
                This is also a hiring environment where dual-context understanding matters heavily. A strong candidate may need to understand both education workflows and digital systems, not just one or the other. The same EdTech title can involve very different expectations depending on institution type, platform model, adoption maturity, support structure, and delivery goals. That means stronger recruitment depends on better role understanding, tighter shortlist relevance, and a hiring process that reflects real digital-education conditions.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                NAYA Staffing’s EdTech recruitment support is designed to help education employers hire more effectively across those environments. We support organizations that need stronger education-technology shortlists, better digital-learning role fit, and a recruitment process that reflects the strategic importance of instructional systems and technology-enabled learning. This page is directly supported by your PDF, which lists EdTech Specialists as a reviewed child category under Education.
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
              Why EdTech Specialists <span className="text-gold">Recruitment Is Different</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              EdTech recruitment is different from general recruitment because the roles often sit at the intersection of education delivery, technology adoption, systems support, communication, and learning outcomes.
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
              EdTech Areas <span className="text-gold">We Support</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              We support a wide range of learning platform, instruction technology, and digital learning support environments.
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
              EdTech Specialist Roles We <span className="text-gold">Help Employers Hire</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports recruitment across a wide range of digital-learning and LMS support roles based on your platform operations model.
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
              Common Hiring Challenges in <span className="text-gold">EdTech</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Education employers often face recruitment conditions in this area that require both digital-system relevance and stronger institutional fit.
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
              How We Support <span className="text-gold">EdTech Sourcing</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports education employers with recruitment solutions designed around digital-learning relevance, systems support quality, and stronger education-technology role alignment.
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

      {/* 8. WHY EMPLOYERS CHOOSE NAYA STAFFING FOR EDTECH RECRUITMENT */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose NAYA Staffing <span className="text-gold">for EdTech Recruitment</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              EdTech recruitment requires stronger education-technology awareness, sharper systems-role fit, and a hiring process that reflects real digital-learning environments. NAYA Staffing’s approach is designed around those expectations.
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
                for <span className="text-gold">EdTech Hiring</span>
              </h2>
              <div className="h-1 w-20 bg-gold rounded-full"></div>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                Connect EdTech recruitment with our broader services to support your entire organization.
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
              Build Stronger Digital Learning Teams <br/>
              With <span className="text-gold">Precise EdTech Hiring Support</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              EdTech hiring depends on systems relevance, education fit, and stronger digital-learning alignment. NAYA Staffing helps education employers hire more effectively across EdTech environments with a more structured, education-tech-aware recruitment approach.
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
