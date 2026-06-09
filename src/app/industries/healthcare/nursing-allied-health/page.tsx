import { Typewriter } from "@/components/Typewriter";
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
  PlusCircle
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "Nursing & Allied Health Recruitment & Healthcare Staffing Solutions | NAYA Staffing",
  description: "NAYA Staffing provides nursing and allied health recruitment services for employers hiring clinical support staff, patient-care professionals, allied health specialists, and broader healthcare workforce talent.",
  keywords: [
    "nursing recruitment agency",
    "allied health recruitment",
    "healthcare staffing solutions",
    "nursing staffing agency",
    "allied health staffing",
    "healthcare hiring agency",
    "clinical support recruitment",
    "healthcare talent partner",
    "patient care staffing",
    "nursing workforce solutions",
    "allied health hiring support",
    "medical staffing partner",
    "healthcare recruitment services",
    "clinical staffing agency",
    "healthcare talent acquisition",
    "nursing and allied health hiring"
  ]
};

export default function NursingAlliedHealthSubIndustryPage() {
  const reasons = [
    {
      title: "Care-Environments Require Higher Trust",
      desc: "Many nursing and allied-health roles require greater confidence in professionalism, reliability, and care-environment fit.",
      icon: <ShieldCheck className="w-8 h-8 text-gold" />
    },
    {
      title: "Role Context Matters More Than Job Title Alone",
      desc: "The same title may involve very different duties depending on care model, institution type, patient setting, or support structure.",
      icon: <Settings className="w-8 h-8 text-gold" />
    },
    {
      title: "Weak-Fit Hires Can Affect Patient Experience and Team Stability",
      desc: "Poor-fit clinical or support hires may create workflow strain, care disruption, and operational pressure.",
      icon: <Activity className="w-8 h-8 text-gold" />
    },
    {
      title: "Specialization Is Common Across Allied Health",
      desc: "Clinical support, diagnostics, therapy-adjacent roles, and patient-facing functions often require different search logic.",
      icon: <Cpu className="w-8 h-8 text-gold" />
    },
    {
      title: "Candidate Quality Matters More Than High Volume",
      desc: "Healthcare teams usually benefit more from relevant, dependable shortlists than large candidate pools.",
      icon: <Users className="w-8 h-8 text-gold" />
    },
    {
      title: "Healthcare Hiring Must Balance Urgency With Quality",
      desc: "Many employers need to move quickly, but poor hiring decisions can carry wider consequences.",
      icon: <Clock className="w-8 h-8 text-gold" />
    }
  ];

  const areas = [
    {
      title: "Nursing Support Hiring",
      desc: "Recruitment support for employers hiring across patient-care environments, bedside support, and wider nursing-capability needs."
    },
    {
      title: "Allied Health Hiring",
      desc: "Support for organizations recruiting allied-health specialists and patient-support professionals working close to diagnostics, therapy, rehabilitation, or care coordination."
    },
    {
      title: "Clinical Support Teams",
      desc: "Coverage for employers hiring staff who support clinical operations, patient flow, records, care delivery, and service continuity."
    },
    {
      title: "Care Coordination and Patient-Facing Roles",
      desc: "Support for environments where communication, trust, patient interaction, and service standards are especially important."
    },
    {
      title: "Urgent Workforce Coverage",
      desc: "Hiring support for employers filling time-sensitive care or staffing gaps without lowering shortlist quality."
    },
    {
      title: "Healthcare Team Growth Support",
      desc: "Support for broader workforce build-outs across nursing and allied-health environments."
    }
  ];

  const roleGroups = [
    {
      title: "Nursing & Patient-Care Roles",
      roles: [
        "Nursing Staff",
        "Patient-Care Support Roles",
        "Clinical Care Team Members",
        "Shift-Based Care Support Roles",
        "Care Coordination Support Staff"
      ]
    },
    {
      title: "Allied Health Roles",
      roles: [
        "Allied Health Specialists",
        "Therapy-Adjacent Roles",
        "Diagnostics Support Staff",
        "Rehabilitation Support Roles",
        "Patient Services Professionals"
      ]
    },
    {
      title: "Clinical Support Roles",
      roles: [
        "Clinical Support Staff",
        "Care Operations Support",
        "Documentation and Records Support",
        "Patient Flow Coordination Roles",
        "Healthcare Administration Support"
      ]
    },
    {
      title: "Workforce Growth & Specialists",
      roles: [
        "Senior Clinical Support Roles",
        "Allied Health Team Leads",
        "Multi-role Care Team Build-Out Staff",
        "Hard-to-Fill Healthcare Support Roles",
        "Service Expansion Staffing Roles"
      ]
    }
  ];

  const challenges = [
    {
      title: "Patient-Care Roles Require Higher Confidence",
      desc: "Employers often need greater trust in professionalism, communication, and care-environment suitability."
    },
    {
      title: "Role Definitions Can Shift by Setting",
      desc: "The same title may mean different things depending on the employer’s service model and patient environment."
    },
    {
      title: "Workforce Gaps Can Affect Service Continuity Quickly",
      desc: "Hiring delays or weak-fit candidates can impact operations and care quality."
    },
    {
      title: "Specialist Allied-Health Roles Need Better Search Precision",
      desc: "Some functions require narrower search logic and stronger candidate relevance."
    },
    {
      title: "Clinical Support Hiring Often Balances Speed With Standards",
      desc: "Organizations may need urgent coverage while still protecting quality and fit."
    },
    {
      title: "Healthcare Team Growth Needs Better Structure",
      desc: "As services expand, employers often need more organized staffing support rather than one-off hiring alone."
    }
  ];

  const supportAreas = [
    {
      title: "Healthcare-Aware Recruitment Support",
      desc: "Helping employers hire with better understanding of care settings, workforce demands, and practical role requirements."
    },
    {
      title: "Permanent and Flexible Hiring Models",
      desc: "Supporting long-term healthcare hires as well as contract or urgent workforce support where needed."
    },
    {
      title: "Screening & Assessment Support",
      desc: "Helping improve shortlist quality and reduce weak-fit candidates in nursing and allied-health hiring workflows."
    },
    {
      title: "Headhunting for Specialist Healthcare Talent",
      desc: "Supporting targeted search where certain allied-health or hard-to-fill clinical-support roles require more precision."
    },
    {
      title: "Turnkey Support for Team Expansion",
      desc: "Helping employers scale nursing and allied-health teams through more structured recruitment delivery."
    },
    {
      title: "Connection to Broader Workforce Services",
      desc: "This area can connect naturally with permanent recruitment, contract staffing, screening and assessment, RPO, and turnkey recruitment projects."
    }
  ];

  const pillars = [
    {
      title: "Higher Trust and Role Precision",
      desc: "We help employers recruit with more alignment to real care-environment needs rather than broad title matching."
    },
    {
      title: "Better Understanding of Healthcare Context",
      desc: "We treat nursing and allied-health hiring as a care-sensitive environment, not generic staffing."
    },
    {
      title: "Support for Workforce Gaps and Team Growth",
      desc: "We support both individual roles and broader care-team expansion needs."
    },
    {
      title: "Flexible Connection to Related Services",
      desc: "Healthcare recruitment can connect with screening, contract staffing, permanent recruitment, RPO, and turnkey projects."
    },
    {
      title: "Professional, Structured Delivery",
      desc: "Healthcare teams often need a hiring process that feels organized, responsive, and credible."
    },
    {
      title: "Built Inside the Healthcare Industry Structure",
      desc: "This page is part of the reviewed Healthcare framework, where Nursing & Allied Health is explicitly listed as a child category."
    }
  ];

  const relatedServices = [
    { name: "Permanent Recruitment", href: "/permanent-recruitment", desc: "Core long-term hiring solutions for ongoing business needs." },
    { name: "Contract Staffing", href: "/contract-staffing", desc: "Flexible staffing solutions for temporary or project-based needs." },
    { name: "Screening & Assessment", href: "/screening-assessment", desc: "Structured candidate screening and evaluation support." },
    { name: "Recruitment Process Outsourcing (RPO)", href: "/recruitment-process-outsourcing", desc: "End-to-end recruitment management to scale your hiring operations." },
    { name: "Turnkey Recruitment Projects", href: "/services", desc: "Structured project solutions for hiring multiple roles." },
    { name: "Diversity Hiring", href: "/diversity-hiring", desc: "Custom recruitment solutions focused on inclusive and diverse pipelines." },
    { name: "Headhunting Services", href: "/headhunting-services", desc: "Targeted direct search for hard-to-fill and specialist hires." },
    { name: "Employer Branding", href: "/employer-branding", desc: "Strategic positioning to attract top-tier talent in competitive markets." }
  ];

  const relatedMainPages = [
    { name: "Industries Overview", href: "/our-industries" },
    { name: "Healthcare Overview", href: "/industries/healthcare" },
    { name: "Employer Solutions", href: "/employer-solutions" },
    { name: "Contact Us", href: "/contact-us" }
  ];

  const faqs = [
    {
      question: "Does NAYA Staffing recruit for nursing and allied health roles?",
      answer: "Yes. NAYA Staffing supports hiring across nursing, allied health, clinical support, and broader patient-care environments."
    },
    {
      question: "What nursing and allied health roles can NAYA Staffing help fill?",
      answer: "NAYA Staffing can support hiring for nursing staff, patient-care support roles, allied-health specialists, clinical support staff, and wider healthcare workforce needs."
    },
    {
      question: "Why is nursing and allied health recruitment different from general recruitment?",
      answer: "Because healthcare hiring depends heavily on trust, care-setting fit, service continuity, patient-facing standards, and stronger role precision."
    },
    {
      question: "Is Nursing & Allied Health an approved subpage in the structure?",
      answer: "Yes. NAYA Staffing's structure explicitly lists Nursing & Allied Health as a reviewed child category under Healthcare."
    },
    {
      question: "Can NAYA Staffing help with healthcare team expansion?",
      answer: "Yes. NAYA Staffing can support both individual healthcare hires and broader nursing or allied-health team growth through structured recruitment support."
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Nursing & Allied Health Talent Recruitment</span>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
            <Typewriter>
              Nursing & Allied Health Recruitment for <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Trust & Clinical Workforce Alignment
              </span>
            </Typewriter>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
              NAYA Staffing supports employers hiring across nursing and allied-health environments, including patient-care functions, clinical support roles, therapy-adjacent teams, diagnostics support, and broader healthcare workforce needs. Whether you are expanding care teams, filling urgent workforce gaps, or hiring specialist allied-health talent, we help employers access more relevant candidates with greater confidence and recruitment clarity.
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up animate-delay-300">
              <Link 
                href="/contact-us" 
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
                Built for healthcare employers that need stronger hiring quality, better clinical-role fit, and a more structured path to workforce stability.
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
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 lg:gap-12 xl:gap-20 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
                Overview
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                Recruitment Support for <br className="hidden md:inline" />
                <span className="text-gold">Clinical Environments</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Nursing and allied-health hiring often affects patient care quality, service continuity, clinical team performance, capacity planning, and the wider reliability of healthcare delivery. Employers in this space are often hiring for roles that sit close to direct care, patient support, diagnostics, therapy, coordination, and day-to-day clinical operations.
              </p>
              <p>
                This is also a hiring environment where role fit matters deeply. The same clinical title can mean different expectations depending on care setting, patient population, shift model, operational intensity, and internal team structure. That means stronger recruitment depends on clearer role understanding, tighter shortlist relevance, and a more disciplined hiring process.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                NAYA Staffing’s nursing and allied-health recruitment support is designed to help healthcare employers hire more effectively across those environments. We support organizations that need stronger patient-care shortlists, better allied-health fit, and a recruitment process that reflects the seriousness and sensitivity of healthcare hiring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY NURSING & ALLIED HEALTH RECRUITMENT REQUIRES A SPECIALIZED APPROACH */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="btn-rotating-border absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 btn-auto-sheen border border-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Nursing & Allied Health <span className="text-gold">Recruitment Is Different</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Healthcare hiring is different from general recruitment because the roles often affect patient care, service reliability, compliance expectations, team coordination, and clinical trust.
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

      {/* 4. NURSING & ALLIED HEALTH AREAS WE SUPPORT */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Nursing & Allied Health <span className="text-gold">Areas We Support</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              We support multiple care environments to ensure continuous service delivery and high-quality outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
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
              Nursing & Allied Health Roles We <span className="text-gold">Help Employers Hire</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports recruitment across a wide range of nursing and allied-health roles depending on the employer’s care environment, service model, and workforce priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
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
              Common Hiring Challenges in <span className="text-gold">Nursing & Allied Health</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Healthcare employers often face recruitment conditions that require more trust, more urgency control, and stronger role alignment than general staffing.
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

      {/* 7. HOW NAYA STAFFING SUPPORTS HEALTHCARE EMPLOYERS */}
      <section className="py-32 bg-navy relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              How We Support <span className="text-gold">Nursing & Allied Health Sourcing</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports healthcare employers with recruitment solutions designed around workforce reliability, care-environment alignment, and stronger clinical-support hiring quality.
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

      {/* 8. WHY EMPLOYERS CHOOSE NAYA STAFFING */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose NAYA Staffing <span className="text-gold">for Nursing & Allied Health</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Nursing and allied-health recruitment requires stronger healthcare awareness, sharper role fit, and a hiring process that reflects patient-care realities.
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

      {/* 9. RELATED SERVICES */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 xl:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.95]">
                Related Services <br/>
                for <span className="text-gold">Clinical Sourcing</span>
              </h2>
              <div className="btn-rotating-border h-1 w-20 bg-white/5 rounded-full btn-auto-sheen border border-white/5"></div>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                Connect nursing and allied health staffing with our broader solutions to optimize care delivery.
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

      {/* 11. FINAL CTA SECTION */}
      <section className="py-32 relative overflow-hidden bg-navy border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="btn-rotating-border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.03] blur-[200px] rounded-full btn-auto-sheen border border-white/5"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-navy-light/10 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-panel p-12 md:p-24 rounded-[4rem] text-center border border-gold/20 shadow-2xl shadow-gold/10">
            <div className="btn-rotating-border inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 text-white hover:text-gold mb-10 shadow-2xl shadow-gold/30 btn-auto-sheen border border-white/5">
              <PlusCircle className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Build Stronger Care Teams <br/>
              With <span className="text-gold">Precise Sourcing Support</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              Nursing and allied-health hiring depends on trust, role fit, and workforce quality. NAYA Staffing helps healthcare employers hire more effectively across care environments with a more structured, healthcare-aware recruitment approach.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 xl:gap-8">
              <Link 
                href="/contact-us" 
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
