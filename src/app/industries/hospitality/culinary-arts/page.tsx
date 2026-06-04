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
  Utensils,
  Activity
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "Culinary Arts Recruitment & Hospitality Kitchen Staffing Solutions | NAYA Staffing",
  description: "NAYA Staffing provides culinary arts recruitment services for employers hiring chefs, kitchen leaders, food-service teams, culinary support staff, and broader hospitality kitchen talent.",
  keywords: [
    "culinary recruitment agency",
    "chef recruitment agency",
    "kitchen staffing solutions",
    "culinary arts hiring agency",
    "hospitality kitchen recruitment",
    "food service staffing agency",
    "chef talent acquisition",
    "culinary workforce partner",
    "kitchen operations hiring",
    "back of house staffing",
    "hospitality chef recruitment",
    "restaurant and hotel kitchen staffing",
    "culinary leadership hiring",
    "food production staffing",
    "kitchen team recruitment",
    "culinary staffing solutions"
  ]
};

export default function CulinaryArtsSubIndustryPage() {
  const reasons = [
    {
      title: "Kitchen Fit Matters Beyond Basic Food-Service Experience",
      desc: "Strong culinary hires often need to match service pace, kitchen standards, and the working style of the team.",
      icon: <Globe className="w-8 h-8 text-gold" />
    },
    {
      title: "Role Requirements Change by Venue and Service Model",
      desc: "The same title may involve very different expectations depending on hotel kitchens, catering, events, restaurants, or high-volume hospitality environments.",
      icon: <ShieldCheck className="w-8 h-8 text-gold" />
    },
    {
      title: "Weak-Fit Hires Can Affect Quality and Service Quickly",
      desc: "Poor-fit kitchen hires may create timing issues, inconsistency, team strain, and guest dissatisfaction.",
      icon: <Activity className="w-8 h-8 text-gold" />
    },
    {
      title: "Back-of-House Roles Depend on Discipline and Coordination",
      desc: "Culinary teams often rely on structure, communication, and operational rhythm to perform well.",
      icon: <Settings className="w-8 h-8 text-gold" />
    },
    {
      title: "Candidate Relevance Matters More Than Broad Volume",
      desc: "Food-service employers usually benefit more from tighter, environment-ready shortlists than from larger applicant pools.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      title: "Consistency Needs Better Hiring Structure",
      desc: "As hospitality businesses grow or improve standards, kitchen hiring often needs more organized recruitment support.",
      icon: <Clock className="w-8 h-8 text-gold" />
    }
  ];

  const areas = [
    {
      title: "Kitchen Operations Hiring",
      desc: "Recruitment support for employers hiring across core kitchen, prep, and back-of-house operations."
    },
    {
      title: "Culinary Leadership",
      desc: "Support for organizations building stronger kitchen leadership, supervision, and service control."
    },
    {
      title: "Food Preparation & Service Delivery",
      desc: "Coverage for roles connected to preparation, execution, quality, and timely output."
    },
    {
      title: "High-Volume Hospitality Food Service",
      desc: "Support for employers operating in demanding service environments where speed and consistency both matter."
    },
    {
      title: "Event & Venue Culinary Teams",
      desc: "Hiring support for employers running event-based, banquet, or venue-led culinary operations."
    },
    {
      title: "Kitchen Team Growth",
      desc: "Support for structured workforce build-outs tied to expansion, seasonal demand, or service-strengthening goals."
    }
  ];

  const roleGroups = [
    {
      title: "Kitchen & Food-Service Roles",
      roles: [
        "Chefs",
        "Line Cooks",
        "Prep Staff",
        "Kitchen Support Roles",
        "Back-of-House Team Members"
      ]
    },
    {
      title: "Leadership & Supervision Roles",
      roles: [
        "Head Chefs",
        "Sous Chefs",
        "Kitchen Supervisors",
        "Culinary Team Leads",
        "Food-Service Operations Leaders"
      ]
    },
    {
      title: "Execution & Service Roles",
      roles: [
        "Banquet Culinary Staff",
        "Event Kitchen Roles",
        "Service Preparation Teams",
        "Menu Execution Support Roles",
        "Quality-Focused Kitchen Staff"
      ]
    },
    {
      title: "Workforce Growth & Specialist Roles",
      roles: [
        "Senior Culinary Staff",
        "Multi-role Kitchen Build-Out Staff",
        "Seasonal Culinary Expansion Roles",
        "Venue-Specific Kitchen Roles",
        "High-Volume Service Support Staff"
      ]
    }
  ];

  const challenges = [
    {
      title: "Kitchen Roles Depend on Speed and Consistency",
      desc: "Candidates often need to deliver quality under real-time operational pressure."
    },
    {
      title: "The Same Title Can Mean Different Kitchen Realities",
      desc: "A chef or culinary role may vary significantly depending on menu, volume, venue, and service style."
    },
    {
      title: "Weak-Fit Hires Can Affect Service and Team Morale Quickly",
      desc: "Poor-fit culinary hires may influence food quality, timing, stress levels, and team coordination."
    },
    {
      title: "Relevant Talent Can Be Harder to Replace Quickly",
      desc: "Strong kitchen hires often require better targeting and stronger environment alignment."
    },
    {
      title: "Back-of-House Roles Need Discipline and Workflow Fit",
      desc: "Technical ability alone is rarely enough without the right pace, standards, and teamwork."
    },
    {
      title: "Scaling Food Service Needs Better Hiring Structure",
      desc: "As operations expand, kitchen hiring often needs more organized workforce planning and support."
    }
  ];

  const supportAreas = [
    {
      title: "Culinary-Aware Recruitment Support",
      desc: "Helping employers hire with better understanding of kitchen environments, service pace, and food-service standards."
    },
    {
      title: "Permanent and Flexible Hiring Models",
      desc: "Supporting long-term culinary hires as well as contract, seasonal, or scale-related workforce needs where needed."
    },
    {
      title: "Screening & Assessment Support",
      desc: "Helping improve shortlist quality and reduce weak-fit candidates in culinary hiring workflows."
    },
    {
      title: "Headhunting for Specialist Hospitality Talent",
      desc: "Supporting targeted search where certain culinary leadership or hard-to-fill roles require more precision."
    },
    {
      title: "Turnkey Support for Team Expansion",
      desc: "Helping employers scale culinary teams through structured recruitment delivery."
    },
    {
      title: "Connection to Broader Workforce Services",
      desc: "This area can connect naturally with permanent recruitment, contract staffing, screening and assessment, RPO, and turnkey recruitment projects."
    }
  ];

  const pillars = [
    {
      title: "Better Kitchen-Focused Role Precision",
      desc: "We help employers recruit with stronger alignment to real culinary needs rather than broad title matching."
    },
    {
      title: "Better Understanding of Food-Service Context",
      desc: "We treat culinary hiring as its own specialist environment, not generic hospitality staffing."
    },
    {
      title: "Support for Team Stability and Growth",
      desc: "We support both individual culinary hires and broader kitchen-team expansion."
    },
    {
      title: "Flexible Connection to Related Services",
      desc: "Culinary recruitment can connect with screening, permanent recruitment, contract staffing, RPO, and turnkey projects."
    },
    {
      title: "Professional, Structured Delivery",
      desc: "Food-service employers often need a hiring process that feels organized, responsive, and quality-aware."
    },
    {
      title: "Built Inside the Hospitality Industry Structure",
      desc: "This page is part of the reviewed Hospitality framework in your PDF, where Culinary Arts is explicitly listed as a child category."
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
      question: "Does NAYA Staffing recruit for culinary arts roles?",
      answer: "Yes. NAYA Staffing supports hiring across culinary arts environments, including kitchen operations, food-service teams, culinary leadership, and broader hospitality kitchen roles."
    },
    {
      question: "What culinary arts roles can NAYA Staffing help fill?",
      answer: "NAYA Staffing can support hiring for chefs, line cooks, prep staff, kitchen supervisors, culinary leadership roles, and related food-service positions."
    },
    {
      question: "Why is culinary recruitment different from general recruitment?",
      answer: "Because culinary hiring depends heavily on execution pace, service standards, kitchen discipline, team fit, and stronger hospitality-environment alignment."
    },
    {
      question: "Is Culinary Arts an approved subpage in the structure?",
      answer: "Yes. NAYA Staffing's structure explicitly lists Culinary Arts as a reviewed child category under Hospitality."
    },
    {
      question: "Can NAYA Staffing help with kitchen team expansion?",
      answer: "Yes. NAYA Staffing can support both individual culinary hires and broader kitchen-team growth through structured recruitment support."
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Culinary Arts & Kitchen Talent Recruitment</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
              Culinary Arts <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Kitchen Team Alignment
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed mb-10">
              NAYA Staffing supports employers hiring across culinary arts environments, including kitchen operations, food preparation teams, culinary leadership, service-driven kitchen roles, and broader hospitality food-service functions. Whether you are building a stronger back-of-house team, improving kitchen consistency, or hiring leadership for high-performance culinary environments, we help employers access more relevant candidates with greater confidence and recruitment clarity.
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
                Built for employers that need stronger culinary hiring, better kitchen-role fit, and a more structured path to food-service excellence.
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
                Recruitment Support for Kitchen Operations, <br className="hidden md:inline" />
                <span className="text-gold">Food Service, and Culinary Leadership</span>
              </h2>
              <div className="h-1.5 w-20 bg-gold rounded-full opacity-60"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Culinary hiring often affects service consistency, food quality, team coordination, kitchen efficiency, guest satisfaction, and broader hospitality performance. Employers in this space are often hiring for roles that directly influence the pace, execution, and reliability of food-service operations.
              </p>
              <p>
                This is also a hiring environment where practical fit matters as much as experience. The same title may involve very different expectations depending on service style, venue type, menu complexity, volume, shift structure, and kitchen culture. That means stronger recruitment depends on better role understanding, tighter shortlist relevance, and a hiring process that reflects real culinary environments.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                NAYA Staffing’s culinary arts recruitment support is designed to help hospitality employers hire more effectively across those environments. We support organizations that need stronger kitchen shortlists, better culinary-role fit, and a recruitment process that reflects the demands of quality, speed, and consistency in food-service operations.
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
              Why Culinary Arts <span className="text-gold">Recruitment Is Different</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Culinary hiring is different from general recruitment because the roles often sit close to execution speed, quality control, kitchen discipline, teamwork, and guest-facing outcomes.
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
              Culinary Arts Areas <span className="text-gold">We Support</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              We support multiple kitchen operations, culinary leadership, food preparation, and banquet-led environments.
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
              Culinary Roles We <span className="text-gold">Help Employers Hire</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports recruitment across a wide range of culinary arts roles depending on the employer’s service model, kitchen structure, and hospitality priorities.
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
              Common Hiring Challenges in <span className="text-gold">Culinary Arts</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Hospitality employers often face culinary recruitment conditions that require more real-world service fit and stronger execution alignment than general business hiring.
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

      {/* 7. HOW NAYA STAFFING SUPPORTS CULINARY EMPLOYERS */}
      <section className="py-32 bg-navy relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              How We Support <span className="text-gold">Culinary Sourcing</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports hospitality employers with recruitment solutions designed around kitchen performance, service consistency, and stronger culinary-role alignment.
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

      {/* 8. WHY EMPLOYERS CHOOSE NAYA STAFFING FOR CULINARY RECRUITMENT */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose NAYA Staffing <span className="text-gold">for Culinary Arts Recruitment</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Culinary recruitment requires stronger kitchen awareness, sharper execution fit, and a hiring process that reflects real hospitality food-service conditions. NAYA Staffing’s approach is designed around those expectations.
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
                for <span className="text-gold">Kitchen Sourcing</span>
              </h2>
              <div className="h-1 w-20 bg-gold rounded-full"></div>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                Connect culinary arts recruitment with our broader services to support your entire organization.
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
              <Utensils className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Build Stronger Culinary Teams <br/>
              With <span className="text-gold">Precise Kitchen Hiring Support</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              Culinary hiring depends on quality, consistency, and stronger kitchen-role fit. NAYA Staffing helps hospitality employers hire more effectively across food-service environments with a more structured, culinary-aware recruitment approach.
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
          <Link href="/industries/hospitality" className="hover:text-gold transition-colors">Hospitality Overview</Link>
          <Link href="/industries/hospitality/hotel-management" className="hover:text-gold transition-colors">Hotel Management</Link>
          <Link href="/industries/hospitality/event-planning" className="hover:text-gold transition-colors">Event Planning</Link>
          <Link href="/industries/hospitality/culinary-arts" className="hover:text-gold transition-colors">Culinary Arts</Link>
        </div>
      </section>
    </main>
  );
}
