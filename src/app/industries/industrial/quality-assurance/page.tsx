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
  ClipboardCheck,
  CheckCircle,
  Activity
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "Quality Assurance Recruitment & Industrial QA Staffing Solutions | NAYA Staffing",
  description: "NAYA Staffing provides quality assurance recruitment services for employers hiring QA staff, quality-control professionals, inspection talent, compliance-support teams, and standards-focused operational roles.",
  keywords: [
    "quality assurance recruitment agency",
    "QA staffing solutions",
    "quality control hiring agency",
    "industrial quality recruitment",
    "quality assurance staffing",
    "quality control recruitment",
    "QA talent acquisition",
    "industrial QA hiring support",
    "inspection staffing solutions",
    "compliance support recruitment",
    "quality systems hiring",
    "process quality staffing",
    "manufacturing quality recruitment",
    "QA workforce solutions",
    "quality management hiring",
    "standards-driven recruitment"
  ]
};

export default function QualityAssuranceSubIndustryPage() {
  const reasons = [
    {
      title: "Precision Matters More Than Broad Experience Alone",
      desc: "QA roles often require stronger attention to detail, process discipline, and consistency than more general operational positions.",
      icon: <Globe className="w-8 h-8 text-gold" />
    },
    {
      title: "Role Context Changes Real Requirements",
      desc: "The same title may mean very different things depending on production type, product sensitivity, documentation standards, or inspection environment.",
      icon: <ShieldCheck className="w-8 h-8 text-gold" />
    },
    {
      title: "Weak-Fit Hires Can Affect Quality and Confidence Quickly",
      desc: "Poor-fit QA hires may create issues across output reliability, compliance readiness, process discipline, or internal trust.",
      icon: <Activity className="w-8 h-8 text-gold" />
    },
    {
      title: "Quality Roles Often Sit Across Multiple Teams",
      desc: "QA functions may interact with production, operations, documentation, leadership, and compliance-linked processes.",
      icon: <Settings className="w-8 h-8 text-gold" />
    },
    {
      title: "Candidate Relevance Matters More Than High Volume",
      desc: "Quality-focused employers usually benefit more from tighter, more dependable shortlists than larger applicant pools.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      title: "Standards-Led Environments Need Better Hiring Structure",
      desc: "As organizations grow or formalize quality systems, hiring becomes more process-sensitive and structured.",
      icon: <Clock className="w-8 h-8 text-gold" />
    }
  ];

  const areas = [
    {
      title: "Quality Control Hiring",
      desc: "Recruitment support for employers hiring around inspection, checks, output review, and product consistency."
    },
    {
      title: "Process Quality & Compliance-Support Roles",
      desc: "Support for organizations recruiting talent connected to process discipline, procedural compliance, and operational quality standards."
    },
    {
      title: "Inspection & Documentation Functions",
      desc: "Coverage for roles focused on audits, records, traceability, verification, and reporting."
    },
    {
      title: "Operational Quality Improvement",
      desc: "Support for employers improving quality systems, team discipline, and process consistency."
    },
    {
      title: "Manufacturing-Linked QA Environments",
      desc: "Hiring support for industrial employers where QA is deeply tied to production workflows and plant operations."
    },
    {
      title: "Quality Team Growth Support",
      desc: "Support for structured workforce build-outs across QA, inspection, and process-assurance capability."
    }
  ];

  const roleGroups = [
    {
      title: "Quality & Inspection Roles",
      roles: [
        "Quality Assurance Staff",
        "Quality Control Roles",
        "Inspection Support Staff",
        "Product Verification Roles",
        "Quality Review Personnel"
      ]
    },
    {
      title: "Process & Documentation Roles",
      roles: [
        "Documentation Support Staff",
        "Process Compliance Roles",
        "Records and Traceability Support",
        "QA Reporting Roles",
        "Standards Coordination Roles"
      ]
    },
    {
      title: "Operational Quality Roles",
      roles: [
        "Continuous Improvement Support Roles",
        "Quality Systems Support Staff",
        "Operational Quality Coordinators",
        "Issue Resolution Support Roles",
        "Workflow Quality Staff"
      ]
    },
    {
      title: "Workforce Growth & Specialist Roles",
      roles: [
        "Senior QA Staff",
        "QA Supervisors",
        "Quality Team Leads",
        "Multi-role Quality Build-Out Staff",
        "Hard-to-Fill Standards-Focused Roles"
      ]
    }
  ];

  const challenges = [
    {
      title: "The Right Candidate Needs More Than Basic Operations Experience",
      desc: "They often need stronger discipline, documentation awareness, and consistency under process pressure."
    },
    {
      title: "Quality Roles Vary by Environment",
      desc: "The same title can mean different responsibilities depending on facility type, production model, or compliance requirements."
    },
    {
      title: "Weak-Fit Hires Can Affect More Than One Function",
      desc: "Quality issues may influence production, customer experience, operational trust, and internal accountability."
    },
    {
      title: "Relevant Talent Can Be Harder to Identify",
      desc: "Employers may need tighter search logic to find candidates who fit both the process and the culture of the environment."
    },
    {
      title: "Standards-Driven Teams Need Reliability",
      desc: "Attendance, consistency, and procedural discipline often matter heavily in QA roles."
    },
    {
      title: "Scaling Quality Capability Requires Better Hiring Structure",
      desc: "As systems mature, employers often need more organized QA hiring support rather than ad hoc recruiting."
    }
  ];

  const supportAreas = [
    {
      title: "QA-Aware Recruitment Support",
      desc: "Helping employers hire with better understanding of inspection environments, quality systems, and standards-driven workflows."
    },
    {
      title: "Permanent and Flexible Hiring Models",
      desc: "Supporting long-term QA hires as well as contract or project-based workforce needs where needed."
    },
    {
      title: "Screening & Assessment Support",
      desc: "Helping improve shortlist quality and reduce weak-fit candidates in quality-assurance hiring workflows."
    },
    {
      title: "Headhunting for Specialist Quality Talent",
      desc: "Supporting targeted search where certain quality, compliance-support, or process-led roles require more precision."
    },
    {
      title: "Turnkey Support for Team Expansion",
      desc: "Helping employers scale QA capability through more structured recruitment delivery."
    },
    {
      title: "Connection to Broader Workforce Services",
      desc: "This area can connect naturally with permanent recruitment, contract staffing, screening and assessment, RPO, and turnkey recruitment projects."
    }
  ];

  const pillars = [
    {
      title: "Better Standards-Focused Role Precision",
      desc: "We help employers recruit with stronger alignment to real QA needs rather than broad title matching."
    },
    {
      title: "Better Understanding of Process and Quality Context",
      desc: "We treat quality assurance hiring as its own specialist environment, not generic industrial staffing."
    },
    {
      title: "Support for Reliability and Team Growth",
      desc: "We support both individual quality hires and broader QA capability expansion."
    },
    {
      title: "Flexible Connection to Related Services",
      desc: "QA recruitment can connect with screening, permanent recruitment, contract staffing, RPO, and turnkey projects."
    },
    {
      title: "Professional, Structured Delivery",
      desc: "Quality-focused environments often need a hiring process that feels organized, detail-aware, and credible."
    },
    {
      title: "Built Inside the Industrial Industry Structure",
      desc: "This page is part of the reviewed Industrial framework in your PDF, where Quality Assurance is explicitly listed as a child category."
    }
  ];

  const relatedServices = [
    { name: "Permanent Recruitment", href: "/services/permanent-recruitment", desc: "Core long-term hiring solutions for ongoing business needs." },
    { name: "Contract Staffing", href: "/services/contract-staffing", desc: "Flexible staffing solutions for temporary or project-based needs." },
    { name: "Screening & Assessment", href: "/services/screening-assessment", desc: "Structured candidate screening and evaluation support." },
    { name: "Recruitment Process Outsourcing (RPO)", href: "/services/rpo", desc: "End-to-end recruitment management to scale your hiring operations." },
    { name: "Turnkey Recruitment Projects", href: "/services", desc: "Structured project solutions for hiring multiple roles." },
    { name: "Headhunting Services", href: "/services/headhunting-services", desc: "Targeted direct search for hard-to-fill and specialist hires." },
    { name: "Talent Mapping", href: "/services/talent-mapping", desc: "Strategic market intelligence and hiring-planning service." },
    { name: "Employer Branding", href: "/services/employer-branding", desc: "Strategic positioning to attract top-tier talent in competitive markets." }
  ];

  const faqs = [
    {
      question: "Does NAYA Staffing recruit for quality assurance roles?",
      answer: "Yes. NAYA Staffing supports hiring across quality assurance environments, including quality control, inspection, process-support, documentation, and standards-focused operational roles."
    },
    {
      question: "What quality assurance roles can NAYA Staffing help fill?",
      answer: "NAYA Staffing can support hiring for QA staff, quality control roles, inspection support, documentation staff, standards coordination roles, and related workforce positions."
    },
    {
      question: "Why is quality assurance recruitment different from general recruitment?",
      answer: "Because QA hiring depends heavily on detail, process discipline, consistency, documentation awareness, and stronger standards-fit."
    },
    {
      question: "Is Quality Assurance an approved subpage in the structure?",
      answer: "Yes. NAYA Staffing's structure explicitly lists Quality Assurance as a reviewed child category under Industrial."
    },
    {
      question: "Can NAYA Staffing help with QA team expansion?",
      answer: "Yes. NAYA Staffing can support both individual quality hires and broader QA-team growth through structured recruitment support."
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Quality Assurance & Quality Control Talent Recruitment</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
              Quality Assurance <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Standards Alignment
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed mb-10">
              NAYA Staffing supports employers hiring across quality assurance environments, including quality control, inspection, process verification, compliance-support functions, documentation-led roles, and broader standards-focused operational teams. Whether you are protecting product quality, improving consistency, or strengthening operational discipline, we help employers access more relevant candidates with greater confidence and recruitment clarity.
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
                Built for employers that need stronger QA hiring, better process-role fit, and a more structured path to operational quality.
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
                Recruitment Support for Quality, <br className="hidden md:inline" />
                <span className="text-gold">Inspection, and Standards Environments</span>
              </h2>
              <div className="h-1.5 w-20 bg-gold rounded-full opacity-60"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Quality assurance hiring often affects product consistency, process reliability, compliance readiness, inspection accuracy, customer trust, and broader operational performance. Employers in this space are often hiring for roles that directly influence whether work is performed to standard, whether outputs remain reliable, and whether issues are identified before they create larger downstream problems.
              </p>
              <p>
                This is also a hiring environment where detail, discipline, and process awareness matter heavily. The same QA title can mean different things depending on the site, product, workflow complexity, inspection model, and documentation requirements. That means stronger recruitment depends on better role understanding, tighter shortlist relevance, and a hiring process that reflects the practical realities of quality-led environments.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                NAYA Staffing’s quality assurance recruitment support is designed to help industrial employers hire more effectively across those environments. We support organizations that need stronger QA shortlists, better process-role alignment, and a recruitment process that reflects the importance of quality, consistency, and operational accountability.
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
              Why Quality Assurance <span className="text-gold">Recruitment Is Different</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Quality assurance hiring is different from general recruitment because the roles often sit close to standards, documentation, consistency, error prevention, process control, and operational trust.
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
              Quality Assurance Areas <span className="text-gold">We Support</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              We support multiple quality control, process verification, compliance-support, and standards-focused operational environments.
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
              QA Roles We <span className="text-gold">Help Employers Hire</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports recruitment across a wide range of quality-assurance roles depending on the employer’s environment, standards model, and operational priorities.
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
              Common Hiring Challenges in <span className="text-gold">Quality Assurance</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Industrial employers often face QA recruitment conditions that require stronger process realism and higher standards-awareness than general business hiring.
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

      {/* 7. HOW NAYA STAFFING SUPPORTS QA EMPLOYERS */}
      <section className="py-32 bg-navy relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              How We Support <span className="text-gold">Quality Assurance Sourcing</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports industrial employers with recruitment solutions designed around process fit, standards relevance, and stronger quality-role alignment.
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

      {/* 8. WHY EMPLOYERS CHOOSE NAYA STAFFING FOR QA RECRUITMENT */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose NAYA Staffing <span className="text-gold">for QA Sourcing Support</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Quality assurance recruitment requires stronger process awareness, sharper standards alignment, and a hiring process that reflects the real demands of quality-led operations. NAYA Staffing’s approach is designed around those expectations.
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
                for <span className="text-gold">QA Sourcing</span>
              </h2>
              <div className="h-1 w-20 bg-gold rounded-full"></div>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                Connect quality assurance recruitment with our broader services to support your entire organization.
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
              <ClipboardCheck className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Build Stronger Quality Teams <br/>
              With <span className="text-gold">Precise Standards-Focused Sourcing</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              Quality assurance hiring depends on precision, consistency, and stronger operational fit. NAYA Staffing helps industrial employers hire more effectively across QA environments with a more structured, quality-aware recruitment approach.
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
          <Link href="/industries/industrial" className="hover:text-gold transition-colors">Industrial Overview</Link>
          <Link href="/industries/industrial/manufacturing-operations" className="hover:text-gold transition-colors">Manufacturing Operations</Link>
          <Link href="/industries/industrial/logistics-supply-chain" className="hover:text-gold transition-colors">Logistics & Supply Chain</Link>
          <Link href="/industries/industrial/quality-assurance" className="hover:text-gold transition-colors">Quality Assurance</Link>
        </div>
      </section>
    </main>
  );
}
