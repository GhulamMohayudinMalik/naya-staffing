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
  ShieldAlert,
  Activity
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "Sales Recruitment & Commercial Hiring Solutions | NAYA Staffing",
  description: "NAYA Staffing provides sales recruitment services for employers hiring across enterprise sales, account management, business development, revenue operations, and commercial support roles.",
  keywords: [
    "sales recruitment agency",
    "sales staffing solutions",
    "commercial hiring agency",
    "sales recruitment services",
    "enterprise sales recruitment",
    "account management recruitment",
    "business development recruitment",
    "sales talent acquisition",
    "commercial staffing company",
    "revenue team hiring",
    "B2B sales recruitment",
    "account executive recruitment"
  ]
};

export default function SalesOverviewPage() {
  const industryData = getIndustryBySlug("sales");
  const galleryImages = industryData && industryData.subIndustries ? industryData.subIndustries.flatMap((sub: any) => sub.images ? sub.images.slice(1) : []) : [];
  const reasons = [
    {
      title: "Revenue Roles Have Direct Business Impact",
      desc: "Sales hires often affect business growth, customer acquisition, retention, and commercial momentum.",
      icon: <TrendingUp className="w-8 h-8 text-gold" />
    },
    {
      title: "The Sector Includes Distinct Commercial Functions",
      desc: "Enterprise sales, account management, business development, and revenue-support roles each require different search and screening approaches.",
      icon: <Globe className="w-8 h-8 text-gold" />
    },
    {
      title: "Commercial Fit Matters More Than Confidence Alone",
      desc: "Strong communication is important, but the candidate also needs the right market fit, sales environment experience, and performance mindset.",
      icon: <Users className="w-8 h-8 text-gold" />
    },
    {
      title: "Weak-Fit Hires Can Be Costly",
      desc: "Poor commercial hiring can affect targets, team performance, customer trust, and growth plans.",
      icon: <ShieldAlert className="w-8 h-8 text-gold" />
    },
    {
      title: "Some Sales Roles Require Sharper Search Precision",
      desc: "Enterprise and strategic account roles often require more targeted recruitment than broader sales hiring.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      title: "Sales Hiring Must Balance Speed and Accuracy",
      desc: "Revenue teams often need to grow quickly, but hiring the wrong person can create lost time and lost opportunity.",
      icon: <Clock className="w-8 h-8 text-gold" />
    }
  ];

  const subSectors = [
    {
      name: "Enterprise Sales",
      slug: "enterprise-sales",
      desc: "Recruitment support for employers hiring across large-account sales, consultative selling, complex deal environments, and strategic commercial growth functions.",
      roles: ["Enterprise Sales Executives", "Strategic Sales Staff", "Large-Account Sales Roles", "Commercial Growth Roles", "Revenue Development Support"],
      icon: <Briefcase className="w-8 h-8 text-gold" />
    },
    {
      name: "Account Management",
      slug: "account-management",
      desc: "Hiring support for employers seeking professionals across client relationship management, retention, account growth, commercial coordination, and service-linked revenue roles.",
      roles: ["Account Managers", "Key Account Support Roles", "Client Relationship Staff", "Customer Growth Roles", "Account Coordination Staff"],
      icon: <Users className="w-8 h-8 text-gold" />
    },
    {
      name: "Business Development",
      slug: "business-development",
      desc: "Recruitment solutions for businesses hiring across outbound sales, lead generation, new-business growth, market expansion, and opportunity-creation environments.",
      roles: ["Business Development Executives", "Sales Development Staff", "Lead Generation Roles", "Market Expansion Support", "Pipeline Development Roles"],
      icon: <Rocket className="w-8 h-8 text-gold" />
    }
  ];

  const expansionTopics = [
    "Revenue Operations",
    "Inside Sales",
    "Outbound Sales",
    "Client Success",
    "Strategic Accounts",
    "Sales Enablement Support"
  ];

  const roleGroups = [
    {
      title: "Enterprise & Strategic Sales Roles",
      roles: [
        "Enterprise Sales Executives",
        "Strategic Account Staff",
        "Large-Account Sales Roles",
        "Consultative Sales Support",
        "Commercial Growth Roles"
      ]
    },
    {
      title: "Account Management Roles",
      roles: [
        "Account Managers",
        "Key Account Staff",
        "Client Relationship Roles",
        "Customer Growth Support",
        "Retention and Expansion Roles"
      ]
    },
    {
      title: "Business Development Roles",
      roles: [
        "Business Development Executives",
        "Sales Development Representatives",
        "Lead Generation Staff",
        "Outbound Sales Roles",
        "Market Expansion Support"
      ]
    },
    {
      title: "Sales Operations & Support Roles",
      roles: [
        "Sales Coordinators",
        "Revenue Support Staff",
        "CRM and Pipeline Support Roles",
        "Proposal and Sales Admin Support",
        "Commercial Operations Roles"
      ]
    },
    {
      title: "Leadership-Adjacent & Specialist Roles",
      roles: [
        "Team Leads",
        "Sales Supervisors",
        "Commercial Coordinators",
        "Revenue Support Leads",
        "Department Support Roles"
      ]
    }
  ];

  const challenges = [
    {
      title: "Finding Candidates With the Right Sales Environment Fit",
      desc: "Not every strong communicator is the right commercial fit for the company’s deal cycle, buyer type, or revenue model."
    },
    {
      title: "Different Sales Functions Need Different Search Approaches",
      desc: "Enterprise sales, account management, and business development cannot all be recruited with the same candidate logic."
    },
    {
      title: "Weak-Fit Hires Affect Growth Quickly",
      desc: "Poor sales hiring can show up fast through missed targets, poor pipeline quality, weak retention, or underperformance."
    },
    {
      title: "Revenue Teams Often Need to Grow Fast",
      desc: "Commercial hiring pressure can increase quickly when growth targets, market expansion, or team restructuring is underway."
    },
    {
      title: "Candidate Screening Needs More Than Title Matching",
      desc: "Employers often need better evaluation around communication, commercial awareness, target orientation, and actual sales-role fit."
    },
    {
      title: "Recruitment Must Reflect Business Credibility",
      desc: "The hiring process itself should feel organized, confident, and professional because it reflects directly on the employer’s market image."
    }
  ];

  const supportAreas = [
    {
      title: "Sector-Aware Recruitment Support",
      desc: "Helping employers hire across enterprise sales, account management, business development, commercial support, and broader sales functions with stronger alignment."
    },
    {
      title: "Permanent and Flexible Hiring Models",
      desc: "Supporting long-term team building as well as flexible hiring models where growth phases, commercial targets, or project needs vary."
    },
    {
      title: "Screening & Assessment Support",
      desc: "Helping improve shortlist quality and reduce weak-fit candidates in sales hiring workflows."
    },
    {
      title: "Headhunting for Specialist or Competitive Roles",
      desc: "Supporting direct-search recruitment where enterprise, account-based, or high-value commercial roles require stronger precision."
    },
    {
      title: "Structured Hiring Support for Team Growth",
      desc: "Helping employers build sales teams more effectively through a disciplined recruitment process."
    },
    {
      title: "Connection to Broader Workforce Services",
      desc: "Sales hiring can connect naturally with permanent recruitment, screening, headhunting, RPO, startup hiring, and employer branding depending on the employer’s needs."
    }
  ];

  const pillars = [
    {
      title: "Sales-Aware Search Thinking",
      desc: "We treat sales recruitment as a specialist commercial environment, not as generic staffing with sales titles added in."
    },
    {
      title: "Better Commercial Role Precision",
      desc: "We help align recruitment more closely with the demands of enterprise sales, account growth, and business development environments."
    },
    {
      title: "Support Across Core Sales Sub-Sectors",
      desc: "Our structure already aligns with Enterprise Sales, Account Management, and Business Development as the primary sales hiring environments."
    },
    {
      title: "Flexible Connection to Related Services",
      desc: "Sales recruitment can connect with permanent recruitment, screening and assessment, headhunting, startup hiring, employer branding, and RPO."
    },
    {
      title: "Professional and Commercially Smart Delivery",
      desc: "Sales employers often need a hiring process that feels organized, confident, and aligned with performance expectations."
    },
    {
      title: "Premium, Business-Relevant Support",
      desc: "We help employers recruit sales talent through a process that feels credible, structured, and aligned with real commercial needs."
    }
  ];

  const relatedServices = [
    { name: "Sales Recruitment", href: "/services", desc: "Targeted hiring solutions for sales professionals across levels." },
    { name: "Permanent Recruitment", href: "/services/permanent-recruitment", desc: "Core long-term hiring solutions for ongoing business needs." },
    { name: "Screening & Assessment", href: "/services/screening-assessment", desc: "Structured candidate screening and evaluation support." },
    { name: "Headhunting Services", href: "/services/headhunting-services", desc: "Targeted direct search for hard-to-fill and specialist hires." },
    { name: "Recruitment Process Outsourcing (RPO)", href: "/services/rpo", desc: "End-to-end recruitment management to scale your hiring operations." },
    { name: "Startup Hiring Solutions", href: "/services", desc: "Flexible staffing and recruitment services designed for scaling startups." },
    { name: "Employer Branding", href: "/services/employer-branding", desc: "Strategic positioning to attract top-tier talent in competitive markets." },
    { name: "Turnkey Recruitment Projects", href: "/services", desc: "Structured project solutions for hiring multiple roles." },
    { name: "Talent Mapping", href: "/services/talent-mapping", desc: "Strategic market intelligence and recruitment planning support." }
  ];

  const faqs = [
    {
      question: "Does NAYA Staffing recruit for sales roles?",
      answer: "Yes. NAYA Staffing supports hiring across the Sales sector, including enterprise sales, account management, business development, commercial support, and related revenue-focused roles."
    },
    {
      question: "What types of sales roles can NAYA Staffing help fill?",
      answer: "NAYA Staffing can support hiring for enterprise sales executives, account managers, business development staff, sales support roles, revenue operations support, and other sales-related positions."
    },
    {
      question: "Can NAYA Staffing support enterprise sales, account management, and business development hiring?",
      answer: "Yes. Your approved industry structure already lists Enterprise Sales, Account Management, and Business Development as the main sales sub-areas supported on this page."
    },
    {
      question: "Why is sales recruitment different from general recruitment?",
      answer: "Sales recruitment often requires stronger commercial context, better performance-fit screening, clearer target-role understanding, and a more structured hiring process than broader recruitment alone."
    },
    {
      question: "Can NAYA Staffing help with hard-to-fill sales roles?",
      answer: "Yes. NAYA Staffing can support more difficult sales hiring needs through focused recruitment, shortlist refinement, and targeted search where needed."
    },
    {
      question: "Is this page only for large enterprise sales teams?",
      answer: "No. This page can support a wider range of sales-focused employers, including businesses hiring for business development, account management, revenue support, client growth, and broader commercial functions."
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Revenue & Commercial Talent Recruitment</span>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
            <Typewriter>
              Sales Recruitment <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Growth-Focused & Revenue-Driven
              </span>
            </Typewriter>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
              NAYA Staffing supports employers across the Sales sector with recruitment solutions designed for enterprise sales, account management, business development, commercial support, and broader revenue-led environments. Whether you are building a new sales team, replacing key performers, expanding account-growth capability, or strengthening commercial operations, we help employers access relevant candidates with greater confidence and hiring precision.
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
                Built for employers that need stronger commercial talent, better revenue-role alignment, and a recruitment process shaped around growth, performance, and client impact.
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
                <span className="text-gold">High-Performance Commercial Environments</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Sales hiring often sits directly at the center of growth, customer acquisition, account expansion, and commercial performance. Employers may be recruiting for roles that directly affect revenue generation, client relationships, deal progression, retention, pipeline quality, and market expansion. That means recruitment needs to focus on commercial relevance, communication strength, target alignment, and role fit from the outset.
              </p>
              <p>
                The Sales sector also includes multiple hiring environments. Some employers are focused on enterprise sales and complex deal cycles. Others need account management talent, business development professionals, client-growth staff, or broader commercial support teams that can operate effectively in target-driven and relationship-led environments. Even when job titles appear similar, the actual sales model changes what the right hire looks like.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                NAYA Staffing’s Sales recruitment support is designed to help employers hire more effectively across those environments. We work with businesses that need stronger access to relevant commercial talent, better shortlist quality, and a recruitment process that reflects the pace and expectations of growth-focused revenue teams.
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
              Why Sales <span className="text-gold">Recruitment Is Different</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Sales hiring is different from general recruitment because the impact of the right or wrong hire is often visible quickly through pipeline strength, client outcomes, and revenue performance.
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
              Sales <span className="text-gold">Areas We Support</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              We support hiring across Enterprise Sales, Account Management, and Business Development, with broader capability across commercial support, revenue operations, and growth-focused sales environments.
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
                    href={`/industries/sales/${sub.slug}`}
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
            Additional Sales Areas <span className="text-gold">for Expansion</span>
          </h2>
          <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
          <p className="text-slate-400 text-lg leading-relaxed font-semibold max-w-4xl mx-auto">
            We support a wider sales footprint across these adjacent categories:
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
              Sales Roles We <span className="text-gold">Help Employers Hire</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports recruitment across a wide range of sales-related roles depending on the employer’s business model, deal cycle, target market, and growth priorities.
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
              Common Hiring Challenges in the <span className="text-gold">Sales Sector</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Sales employers often face recruitment conditions that require stronger search precision, better role context, and more confidence in practical commercial fit.
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

      {/* 8. HOW NAYA STAFFING SUPPORTS SALES EMPLOYERS */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              How We Support <span className="text-gold">Sales Hiring</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports Sales employers with recruitment solutions designed around commercial relevance, target-driven performance, and stronger revenue-role alignment.
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

      {/* 9. WHY EMPLOYERS CHOOSE NAYA STAFFING FOR SALES RECRUITMENT */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose NAYA Staffing <span className="text-gold">for Sales Recruitment</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Sales recruitment requires stronger commercial awareness, more role-specific search thinking, and a hiring process that reflects the pace of growth-focused teams. NAYA Staffing’s approach is designed around those needs.
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
                for <span className="text-gold">Sales Hiring</span>
              </h2>
              <div className="btn-rotating-border h-1 w-20 bg-white/5 rounded-full btn-auto-sheen border border-white/5"></div>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                Sales employers often need more than one recruitment model depending on role type, growth stage, hiring urgency, and commercial structure.
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
              Build Stronger Sales Teams <br/>
              With <span className="text-gold">More Commercially Aware Hiring Support</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              Sales hiring depends on communication, performance, and stronger commercial fit. NAYA Staffing helps employers recruit across the Sales sector with a more structured, sales-aware, and business-relevant approach to talent acquisition.
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
          <Link href="/industries/sales" className="hover:text-gold transition-colors">Sales Overview</Link>
          <Link href="/industries/sales/enterprise-sales" className="hover:text-gold transition-colors">Enterprise Sales</Link>
          <Link href="/industries/sales/account-management" className="hover:text-gold transition-colors">Account Management</Link>
          <Link href="/industries/sales/business-development" className="hover:text-gold transition-colors">Business Development</Link>
        </div>
      </section>
    </main>
  );
}
