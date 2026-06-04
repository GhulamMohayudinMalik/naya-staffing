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
  Cloud
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "Cloud Computing Recruitment & Cloud Talent Hiring Solutions | NAYA Staffing",
  description: "NAYA Staffing provides cloud computing recruitment services for employers hiring cloud engineers, cloud architects, platform specialists, cloud operations talent, and broader infrastructure-focused professionals.",
  keywords: [
    "cloud computing recruitment agency",
    "cloud engineer recruitment",
    "cloud staffing solutions",
    "cloud hiring agency",
    "cloud talent acquisition",
    "cloud recruitment services",
    "platform engineering recruitment",
    "cloud infrastructure staffing",
    "cloud architect recruitment",
    "DevOps and cloud hiring",
    "cloud operations staffing",
    "infrastructure recruitment agency",
    "cloud migration hiring",
    "platform talent partner",
    "cloud workforce solutions",
    "cloud technology recruitment"
  ]
};

export default function CloudComputingSubIndustryPage() {
  const reasons = [
    {
      title: "Cloud Titles Often Cover Very Different Real Responsibilities",
      desc: "A cloud role may vary significantly depending on architecture scope, migration stage, operations ownership, and platform maturity.",
      icon: <Cpu className="w-8 h-8 text-gold" />
    },
    {
      title: "Infrastructure Fit Matters Beyond Tool Familiarity",
      desc: "Strong candidates often need to match the real operational environment, not just recognize cloud terminology on paper.",
      icon: <Settings className="w-8 h-8 text-gold" />
    },
    {
      title: "Weak-Fit Hires Can Affect Stability and Scalability",
      desc: "Poor infrastructure or platform hiring can influence uptime, delivery speed, systems reliability, and long-term technical performance.",
      icon: <Activity className="w-8 h-8 text-gold" />
    },
    {
      title: "Specialization Is Common",
      desc: "Cloud architecture, cloud operations, platform engineering, migration support, and infrastructure-focused delivery roles all require different search logic.",
      icon: <Cloud className="w-8 h-8 text-gold" />
    },
    {
      title: "The Best Candidates May Need Targeted Search",
      desc: "Cloud talent often requires sharper outreach and stronger role positioning than broad applicant-driven recruiting.",
      icon: <Globe className="w-8 h-8 text-gold" />
    },
    {
      title: "Cloud Team Growth Often Supports Larger Transformation Plans",
      desc: "Hiring in this area is frequently connected to modernization, scale, migration, and operational maturity rather than isolated hiring alone.",
      icon: <Clock className="w-8 h-8 text-gold" />
    }
  ];

  const areas = [
    {
      title: "Cloud Infrastructure",
      desc: "Hiring support for employers building or maintaining scalable cloud-based infrastructure environments."
    },
    {
      title: "Cloud Operations",
      desc: "Support for roles focused on stability, performance, deployment support, and day-to-day cloud environment management."
    },
    {
      title: "Cloud Architecture",
      desc: "Coverage for businesses hiring talent around environment design, architecture planning, and infrastructure strategy."
    },
    {
      title: "Platform Engineering-Adjacent Hiring Support",
      desc: "Support for teams working close to internal platforms, developer enablement, and cloud-backed technical delivery."
    },
    {
      title: "Migration & Modernization Support",
      desc: "Hiring support for employers modernizing legacy systems or moving toward stronger cloud adoption."
    },
    {
      title: "Cloud Team Growth Support",
      desc: "Support for structured build-outs across platform, infrastructure, and cloud-enabled engineering capability."
    }
  ];

  const roleGroups = [
    {
      title: "Infrastructure & Platform Roles",
      roles: [
        "Cloud Engineers",
        "Cloud Architects",
        "Platform Support Specialists",
        "Infrastructure-Focused Technical Roles",
        "Cloud Operations Staff"
      ]
    },
    {
      title: "Operations & Delivery Roles",
      roles: [
        "Cloud Operations Roles",
        "Systems Reliability-Adjacent Roles",
        "Deployment Support Staff",
        "Migration Support Roles",
        "Platform Delivery Support Roles"
      ]
    },
    {
      title: "Architecture & Strategy Roles",
      roles: [
        "Cloud Architecture Staff",
        "Infrastructure Planning Roles",
        "Environment Design Support",
        "Technical Modernization Roles",
        "Cloud Strategy Support Roles"
      ]
    },
    {
      title: "Growth & Specialist Roles",
      roles: [
        "Senior Cloud Specialists",
        "Platform Team Leads",
        "Multi-role Infrastructure Build-Out Staff",
        "Niche Cloud Hiring Roles",
        "Cloud Capability Expansion Roles"
      ]
    }
  ];

  const challenges = [
    {
      title: "Job Titles Do Not Always Explain the Real Platform Need",
      desc: "Two cloud roles with similar names may require very different architecture, operations, or migration experience."
    },
    {
      title: "Candidate Relevance Matters More Than Broad Volume",
      desc: "Cloud teams usually benefit more from tighter shortlists than larger applicant counts."
    },
    {
      title: "Weak-Fit Hires Can Affect Reliability and Scale",
      desc: "Poor cloud hiring can influence resilience, efficiency, deployment quality, and infrastructure confidence."
    },
    {
      title: "Specialist Skill Sets Need Sharper Search Logic",
      desc: "Different cloud environments require more precise recruitment filters and better candidate evaluation."
    },
    {
      title: "Cloud Team Hiring Often Supports Bigger Transformation Goals",
      desc: "Modernization and migration-related hiring usually needs more strategic context than one-off recruiting."
    },
    {
      title: "Good Candidates May Already Be Fully Engaged Elsewhere",
      desc: "The strongest cloud talent often requires targeted search and stronger positioning."
    }
  ];

  const supportAreas = [
    {
      title: "Cloud-Aware Recruitment Support",
      desc: "Helping employers hire with better understanding of infrastructure context, platform maturity, and cloud-role relevance."
    },
    {
      title: "Permanent and Flexible Hiring Models",
      desc: "Supporting long-term cloud hires as well as project, contract, or migration-related technical support where needed."
    },
    {
      title: "Screening & Assessment Support",
      desc: "Helping improve shortlist quality and reduce weak-fit candidates in cloud hiring workflows."
    },
    {
      title: "Headhunting for Specialist Cloud Talent",
      desc: "Supporting targeted search where architecture, platform, or infrastructure roles require more precision."
    },
    {
      title: "Turnkey Support for Team Expansion",
      desc: "Helping employers scale cloud and platform capability through more structured recruitment delivery."
    },
    {
      title: "Connection to Broader Workforce Services",
      desc: "Cloud computing recruitment can connect naturally with technical recruitment, permanent recruitment, contract staffing, RPO, screening, and talent mapping."
    }
  ];

  const pillars = [
    {
      title: "Better Technical Role Precision",
      desc: "We help employers recruit with more alignment to real cloud and infrastructure needs rather than broad title matching."
    },
    {
      title: "Better Understanding of Platform Context",
      desc: "We treat cloud hiring as an environment-specific challenge, not generic technology recruiting."
    },
    {
      title: "Support for Team Growth and Modernization Needs",
      desc: "We support both individual cloud hires and broader platform-capability expansion."
    },
    {
      title: "Flexible Connection to Related Services",
      desc: "Cloud recruitment can connect with technical recruitment, screening, contract staffing, RPO, and turnkey projects."
    },
    {
      title: "Professional, Structured Delivery",
      desc: "Infrastructure and platform teams often need a hiring process that feels organized, efficient, and credible."
    },
    {
      title: "Built Inside the IT Industry Structure",
      desc: "This page is part of the reviewed IT framework, where Cloud Computing is explicitly listed as a child category."
    }
  ];

  const relatedServices = [
    { name: "Technical Recruitment", href: "/technical-recruitment", desc: "Specialist hiring support across IT, software, and engineering roles." },
    { name: "Permanent Recruitment", href: "/permanent-recruitment", desc: "Core long-term hiring solutions for ongoing business needs." },
    { name: "Contract Staffing", href: "/contract-staffing", desc: "Flexible staffing solutions for temporary or project-based needs." },
    { name: "Screening & Assessment", href: "/screening-assessment", desc: "Structured candidate screening and evaluation support." },
    { name: "Talent Mapping", href: "/talent-mapping", desc: "Strategic market intelligence and recruitment planning services." },
    { name: "Recruitment Process Outsourcing (RPO)", href: "/recruitment-process-outsourcing", desc: "End-to-end recruitment management to scale your hiring operations." },
    { name: "Turnkey Recruitment Projects", href: "/services", desc: "Structured project solutions for hiring multiple roles." },
    { name: "Headhunting Services", href: "/headhunting-services", desc: "Targeted direct search for hard-to-fill and specialist hires." }
  ];

  const relatedMainPages = [
    { name: "Industries Overview", href: "/our-industries" },
    { name: "Information Technology Overview", href: "/industries/information-technology" },
    { name: "Employer Solutions", href: "/employer-solutions" },
    { name: "Contact Us", href: "/contact-us" }
  ];

  const faqs = [
    {
      question: "Does NAYA Staffing recruit for cloud computing roles?",
      answer: "Yes. NAYA Staffing supports hiring across cloud computing environments, including cloud infrastructure, cloud operations, platform-focused teams, and broader architecture-led roles."
    },
    {
      question: "What cloud computing roles can NAYA Staffing help fill?",
      answer: "NAYA Staffing can support hiring for cloud engineers, cloud architects, platform specialists, cloud operations staff, migration-support talent, and related technical positions."
    },
    {
      question: "Why is cloud recruitment different from general IT recruitment?",
      answer: "Because cloud hiring depends heavily on infrastructure context, platform maturity, architecture needs, operational scope, and stronger technical alignment."
    },
    {
      question: "Is Cloud Computing an approved subpage in the structure?",
      answer: "Yes. NAYA Staffing's structure explicitly lists Cloud Computing as a reviewed child category under Information Technology."
    },
    {
      question: "Can NAYA Staffing help employers build cloud teams?",
      answer: "Yes. NAYA Staffing can support both individual cloud hires and broader platform or infrastructure team growth through structured recruitment support."
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Cloud Infrastructure & Platform Talent Recruitment</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
              Cloud Computing Recruitment for <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Infrastructure & Scalability
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed mb-10">
              NAYA Staffing supports employers hiring across cloud computing environments, including cloud infrastructure, platform teams, cloud operations, migration-focused technical functions, and broader architecture-led delivery roles. Whether you are modernizing systems, scaling platform capability, or hiring specialist cloud talent, we help employers access more relevant candidates with greater confidence and recruitment clarity.
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
                Built for employers that need sharper cloud hiring, stronger technical fit, and a more structured path to infrastructure and platform growth.
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
                <span className="text-gold">Modern Systems Environments</span>
              </h2>
              <div className="h-1.5 w-20 bg-gold rounded-full opacity-60"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Cloud computing hiring often affects scalability, resilience, platform reliability, deployment efficiency, infrastructure modernization, and broader technology performance. Employers in this space are often hiring for roles that directly influence cloud adoption, operational stability, architecture improvement, and long-term technical flexibility.
              </p>
              <p>
                This is also a hiring environment where role context matters heavily. Two cloud-focused roles may differ significantly depending on environment, stack, migration stage, platform maturity, internal engineering model, and security or compliance needs. That means stronger recruitment depends on better technical understanding, more relevant search logic, and tighter role-to-candidate alignment.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                NAYA Staffing’s cloud computing recruitment support is designed to help employers hire more effectively across those environments. We support businesses that need stronger platform and infrastructure shortlists, better technical fit, and a recruitment process that reflects the realities of cloud-enabled growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CLOUD COMPUTING RECRUITMENT REQUIRES A SPECIALIZED APPROACH */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Cloud Computing <span className="text-gold">Recruitment Is Different</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Cloud computing hiring is different from general recruitment because platform context, infrastructure architecture, operational responsibility, and delivery environment all shape what the right candidate actually looks like.
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

      {/* 4. CLOUD COMPUTING AREAS WE SUPPORT */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Cloud Computing <span className="text-gold">Areas We Support</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              We support organizations across several key cloud computing areas:
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
              Cloud Computing Roles We <span className="text-gold">Help Employers Hire</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports recruitment across a wide range of cloud-computing roles depending on the employer’s environment, infrastructure model, and platform maturity.
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
              Common Hiring Challenges in <span className="text-gold">Cloud Computing</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Cloud employers often face recruitment conditions that require more technical precision and environment-specific understanding than general business hiring.
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

      {/* 7. HOW NAYA STAFFING SUPPORTS CLOUD COMPUTING EMPLOYERS */}
      <section className="py-32 bg-navy relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              How We Support <span className="text-gold">Cloud Computing Employers</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports cloud-computing employers with recruitment solutions designed around infrastructure fit, platform alignment, and stronger technical hiring precision.
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

      {/* 8. WHY EMPLOYERS CHOOSE NAYA STAFFING FOR CLOUD RECRUITMENT */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose NAYA Staffing <span className="text-gold">for Cloud Computing</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Cloud computing recruitment requires stronger infrastructure awareness, sharper role alignment, and a hiring process that reflects the realities of modern systems and platform environments.
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
                for <span className="text-gold">Cloud Sourcing</span>
              </h2>
              <div className="h-1 w-20 bg-gold rounded-full"></div>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                Connect cloud recruitment with our broader services to execute your cloud strategy cleanly.
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
              <Cloud className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Build Stronger Cloud Teams <br/>
              With <span className="text-gold">Precise Platform Hiring</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              Cloud computing hiring depends on infrastructure alignment, technical precision, and stronger role fit. NAYA Staffing helps employers hire more effectively across cloud environments with a more structured, cloud-aware recruitment approach.
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
          <Link href="/industries/information-technology/software-development" className="hover:text-gold transition-colors">Software Development</Link>
          <Link href="/industries/information-technology/cybersecurity" className="hover:text-gold transition-colors">Cybersecurity</Link>
        </div>
      </section>
    </main>
  );
}
