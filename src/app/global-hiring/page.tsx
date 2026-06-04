import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  ShieldCheck, 
  Users, 
  Target, 
  Clock, 
  Briefcase, 
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Lock,
  Globe,
  Award,
  Zap,
  TrendingUp,
  Search,
  Settings,
  Scale,
  Building,
  UserCheck,
  Network,
  ThumbsUp,
  HelpCircle,
  ArrowUpRight,
  Compass,
  MapPin,
  Map,
  Share2
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import TestimonialSlider from '@/components/TestimonialSlider';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "Global Hiring Solutions for International Talent Acquisition | NAYA Staffing",
  description: "NAYA Staffing provides global hiring solutions for employers seeking international talent, cross-border recruitment support, and access to broader talent markets across industries and functions.",
  keywords: [
    "global hiring solutions",
    "international recruitment agency",
    "global recruitment services",
    "cross-border hiring",
    "international talent acquisition",
    "worldwide hiring solutions",
    "global staffing solutions",
    "overseas recruitment support",
    "international hiring partner",
    "distributed team hiring",
    "borderless recruitment",
    "global workforce solutions",
    "remote international hiring",
    "global talent sourcing",
    "recruitment across markets",
    "international hiring strategy"
  ]
};

export default function GlobalHiringPage() {
  const useCases = [
    {
      title: "Expanding Into New Markets",
      desc: "When a business is entering new geographies, launching new operations, or establishing a broader international footprint, global hiring helps secure talent that supports that expansion.",
      icon: <Building className="w-8 h-8 text-gold" />
    },
    {
      title: "Accessing Scarce or Specialized Skills",
      desc: "If the right candidates are difficult to find locally, employers may need to search across wider markets to secure the expertise they need.",
      icon: <Search className="w-8 h-8 text-gold" />
    },
    {
      title: "Building Distributed Teams",
      desc: "Many businesses now hire across locations to build teams that operate across time zones, regions, or multiple markets.",
      icon: <Network className="w-8 h-8 text-gold" />
    },
    {
      title: "Increasing Workforce Flexibility",
      desc: "Global hiring allows businesses to broaden their talent strategy and avoid overdependence on a single geographic labor market.",
      icon: <Compass className="w-8 h-8 text-gold" />
    },
    {
      title: "Supporting Cost, Capability, or Scale Goals",
      desc: "In some cases, hiring across markets helps employers balance talent quality, workforce planning, speed, and broader hiring strategy.",
      icon: <TrendingUp className="w-8 h-8 text-gold" />
    }
  ];

  const models = [
    {
      title: "Cross-Border Recruitment",
      desc: "Support for employers hiring talent in markets outside their primary operating location.",
      icon: <Map className="w-6 h-6 text-gold" />
    },
    {
      title: "International Talent Sourcing",
      desc: "Targeted search support for specialized skills, hard-to-fill roles, and high-demand talent across broader markets.",
      icon: <Search className="w-6 h-6 text-gold" />
    },
    {
      title: "Distributed Team Hiring",
      desc: "Recruitment support for organizations building multi-location or cross-region teams.",
      icon: <Users className="w-6 h-6 text-gold" />
    },
    {
      title: "Expansion Hiring Support",
      desc: "Talent acquisition support for businesses launching into new regions, countries, or operational markets.",
      icon: <TrendingUp className="w-6 h-6 text-gold" />
    },
    {
      title: "Global Search for Strategic Roles",
      desc: "Wider-market search for important hires where the right candidate may not be available in one location alone.",
      icon: <Award className="w-6 h-6 text-gold" />
    }
  ];

  const benefits = [
    {
      title: "Wider Talent Access",
      desc: "Employers can engage candidates beyond one local market, increasing the chances of finding stronger role alignment and specialized capability.",
      icon: <Globe className="w-7 h-7 text-gold" />
    },
    {
      title: "Greater Hiring Flexibility",
      desc: "A broader market approach gives businesses more options in how and where they recruit.",
      icon: <Compass className="w-7 h-7 text-gold" />
    },
    {
      title: "Support for Business Expansion",
      desc: "Global hiring can help companies build capability in new regions and support geographic growth plans.",
      icon: <Building className="w-7 h-7 text-gold" />
    },
    {
      title: "Improved Access to Scarce Skills",
      desc: "Where local talent markets are constrained, global search expands the available candidate pool.",
      icon: <Search className="w-7 h-7 text-gold" />
    },
    {
      title: "Stronger Workforce Resilience",
      desc: "Building teams across markets can reduce dependence on one location and support a more adaptable workforce model.",
      icon: <ShieldCheck className="w-7 h-7 text-gold" />
    },
    {
      title: "Modern Recruitment Advantage",
      desc: "Businesses that think globally often create more agile and future-ready hiring strategies in competitive markets.",
      icon: <Award className="w-7 h-7 text-gold" />
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Understand the Hiring Objective",
      desc: "We begin by clarifying the role, required capabilities, hiring priorities, business context, and why global reach is relevant for the search."
    },
    {
      num: "02",
      title: "Define the Search Scope",
      desc: "We identify the most suitable market range, candidate profile, search direction, and role requirements for the hiring project."
    },
    {
      num: "03",
      title: "Activate Broader Talent Search",
      desc: "We support talent identification and recruitment outreach across wider candidate markets aligned with the hiring need."
    },
    {
      num: "04",
      title: "Screen for Relevance and Fit",
      desc: "We focus on candidate capability, communication, role suitability, and alignment with the employer’s expectations."
    },
    {
      num: "05",
      title: "Coordinate Hiring Progress",
      desc: "We support candidate communication, shortlist presentation, interview flow, and recruitment momentum throughout the process."
    },
    {
      num: "06",
      title: "Support International Hiring Confidence",
      desc: "Our goal is to help employers move forward with better visibility, stronger talent access, and a more structured global recruitment process."
    }
  ];

  const pillars = [
    {
      title: "Broader Talent Market Perspective",
      desc: "We help employers think beyond one market and explore wider talent access more strategically.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Business-Aligned Search Thinking",
      desc: "Our focus is not just on finding candidates globally, but on finding candidates who make sense for the role and the business.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Flexible Recruitment Scope",
      desc: "We support different levels of international hiring need, from targeted search to broader distributed team growth.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Structured, Professional Delivery",
      desc: "A wider talent search still needs discipline, clarity, and a strong recruitment process. We help provide that structure.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Support for Modern Workforce Models",
      desc: "We understand the growing importance of international teams, distributed operations, and broader access to talent.",
      icon: <Network className="w-6 h-6" />
    },
    {
      title: "Cross-Industry Hiring Capability",
      desc: "We support global hiring across multiple functions and industries, making the service adaptable to a wide range of business needs.",
      icon: <Briefcase className="w-6 h-6" />
    }
  ];

  const audiences = [
    {
      title: "Businesses Expanding Internationally",
      desc: "Organizations building capability in new markets or supporting geographic growth plans."
    },
    {
      title: "Employers Facing Local Talent Shortages",
      desc: "Companies that need access to wider talent pools when local candidate supply is limited."
    },
    {
      title: "Distributed and Multi-Location Teams",
      desc: "Businesses building teams across regions, countries, or broader operating environments."
    },
    {
      title: "Growth-Stage Companies Seeking Specialized Skills",
      desc: "Organizations that cannot afford to limit hiring to one narrow geography when critical skills are scarce."
    },
    {
      title: "Modern Employers Building Flexible Workforce Models",
      desc: "Companies rethinking traditional hiring boundaries and creating broader, more adaptable talent strategies."
    }
  ];

  const faqs = [
    {
      question: "What is global hiring?",
      answer: "Global Hiring is the process of recruiting talent beyond one local market by expanding the search across different regions, countries, or international talent pools."
    },
    {
      question: "When should a company use global hiring?",
      answer: "A company should use global hiring when local talent supply is limited, specialized skills are difficult to find, business expansion requires international capability, or broader workforce flexibility is needed."
    },
    {
      question: "How is global hiring different from remote hiring?",
      answer: "Global Hiring focuses on expanding the geographic reach of recruitment, while Remote Hiring focuses more specifically on roles designed for remote work. A company may use one or both depending on its hiring goals."
    },
    {
      question: "Can global hiring help businesses access specialized talent?",
      answer: "Yes. Global hiring can significantly broaden the available candidate pool, especially for hard-to-find or highly specialized roles."
    },
    {
      question: "What types of businesses benefit from global hiring?",
      answer: "Growing companies, internationally expanding businesses, distributed teams, and employers facing local talent shortages can all benefit from global hiring solutions."
    },
    {
      question: "Does NAYA Staffing support cross-industry global hiring?",
      answer: "Yes. NAYA Staffing supports global hiring across multiple industries and business functions."
    }
  ];

  const relatedServices = [
    { name: "Executive Search", href: "/executive-search", desc: "Premium recruitment solutions for leadership and business-critical positions." },
    { name: "Permanent Recruitment", href: "/permanent-recruitment", desc: "Core long-term hiring solutions for ongoing business needs." },
    { name: "Contract Staffing", href: "/contract-staffing", desc: "Flexible staffing options for project-based and temporary talent needs." },
    { name: "Recruitment Process Outsourcing (RPO)", href: "/recruitment-process-outsourcing", desc: "End-to-end recruitment management to scale your hiring operations." },
    { name: "Screening & Assessment", href: "/screening-assessment", desc: "Structured testing and evaluation to ensure quality hiring choices." },
    { name: "Talent Mapping", href: "/talent-mapping", desc: "Strategic market intelligence and recruitment planning services." }
  ];

  const relatedMainPages = [
    { name: "Services Overview", href: "/services" },
    { name: "Employers & Solutions", href: "/employer-solutions" },
    { name: "Our Proven Process", href: "/our-proven-process" },
    { name: "Industries Overview", href: "/industries" },
    { name: "Contact Us", href: "/contact-us" }
  ];

  const regions = [
    "North America", "European Union", "United Kingdom", "Latin America", 
    "Asia-Pacific", "Middle East", "Distributed / Remote"
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">International Talent Access</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none uppercase">
              Global Hiring Solutions for <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Businesses Building Beyond Borders
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed mb-10">
              NAYA Staffing’s Global Hiring service helps employers access talent across regions, markets, and international candidate pools with greater confidence and strategic clarity. Whether you are expanding into new markets, hiring specialized talent that is difficult to find locally, or building distributed teams across multiple geographies, we provide recruitment support designed for modern global workforce needs.
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
                href="/become-a-client" 
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 transition-all duration-300 backdrop-blur-xl"
              >
                Become a Client
              </Link>
            </div>
            <div className="pt-10 border-t border-white/5 mt-10 max-w-xl">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 leading-loose">
                Built for employers who want wider talent access, stronger hiring flexibility, and a broader view of workforce opportunity.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-20">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold to-transparent"></div>
        </div>
      </section>

      {/* 2. SERVICE OVERVIEW SECTION */}
      <section className="py-24 relative overflow-hidden bg-navy-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Heading Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold">
                Overview
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                A Smarter Way <br className="hidden md:inline" />
                <span className="text-gold">to Access Talent Across Markets</span>
              </h2>
              <div className="h-1.5 w-20 bg-gold rounded-full opacity-60"></div>
            </div>

            {/* Paragraphs Column */}
            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Many employers reach a point where local hiring alone is no longer enough. In some cases, the right talent may be difficult to find within one city or one country. In others, the business may be entering new markets, building distributed teams, or rethinking workforce strategy around broader access to skills and capability.
              </p>
              <p>
                Global Hiring provides a more flexible and forward-looking recruitment solution. It helps businesses expand their talent search beyond geographic limitations and engage professionals across wider regional or international markets. This can create stronger access to specialized talent, support business expansion, and improve workforce agility in competitive hiring environments.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                NAYA Staffing’s Global Hiring service is designed to help employers approach that process in a more strategic and structured way. We support organizations that want to broaden their hiring reach, evaluate international talent opportunities, and build teams that reflect the realities of today’s interconnected labor market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT GLOBAL HIRING MEANS */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-8">
          <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold">
            The Scope
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
            What Is <span className="text-gold">Global Hiring?</span>
          </h2>
          <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-semibold">
            <p>
              Global Hiring is the process of recruiting talent beyond a single local market. It may involve hiring across different cities, regions, or countries depending on the company’s workforce needs, growth plans, and operating model.
            </p>
            <p>
              For some businesses, this means expanding recruitment into international markets to access specialized skills. For others, it means building distributed teams that are not limited by traditional office-based boundaries. In both cases, the underlying goal is the same: to widen access to talent and create more hiring flexibility.
            </p>
            <p className="text-slate-400 border-t border-white/5 pt-8 font-normal italic text-base">
              Global Hiring is especially valuable in markets where competition for talent is high, local supply is limited, or businesses need capabilities that are not easily available through conventional location-based recruitment strategies.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHEN GLOBAL HIRING IS THE RIGHT CHOICE */}
      <section className="py-32 bg-navy-dark relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2">
              Decision Metrics
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              When to Use <span className="text-gold">Global Hiring</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Global Hiring is the right solution when business growth, talent scarcity, or workforce strategy requires access to candidates beyond one local hiring market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6">
                  <div className="w-14 h-14 bg-gold/5 border border-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gold group-hover:text-navy-dark transition-all duration-500">
                    {useCase.icon}
                  </div>
                  <h3 className="text-white font-black text-xl leading-snug group-hover:text-gold transition-colors tracking-tight">
                    {useCase.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {useCase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GLOBAL HIRING NEEDS WE SUPPORT */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Global Hiring Models We <span className="text-gold">Support</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Global Hiring can take different forms depending on the employer’s structure, growth stage, and hiring goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {models.map((model, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-500 flex flex-col h-full justify-between">
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/5 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-navy-dark transition-all duration-500">
                    {model.icon}
                  </div>
                  <h3 className="text-white font-black text-lg leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                    {model.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {model.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHAT EMPLOYERS GAIN FROM OUR GLOBAL HIRING SERVICE */}
      <section className="py-32 bg-navy-dark relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gold/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Sticky Header Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8 animate-fade-up">
              <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-2 shadow-xl backdrop-blur-md">
                Strategic Benefits
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                What Global <br />Hiring <span className="text-gold">Delivers.</span>
              </h2>
              <div className="h-1.5 w-24 bg-gold rounded-full shadow-lg shadow-gold/20"></div>
              <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed border-l-2 border-white/10 pl-8 max-w-lg">
                Global Hiring gives employers wider access to talent and greater freedom in how they build teams, approach growth, and respond to changing talent market realities.
              </p>
            </div>

            {/* Scrollable Benefits Column */}
            <div className="lg:col-span-7 space-y-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="group p-10 glass-panel rounded-[48px] border-white/5 hover:border-gold/30 hover:bg-white/4 transition-all duration-700 hover:shadow-2xl hover:shadow-gold/5 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden animate-fade-up">
                  <div className="shrink-0 w-14 h-14 rounded-[20px] bg-gold/10 flex items-center justify-center border border-gold/20 group-hover:bg-gold group-hover:text-navy-dark transition-all duration-500 shadow-xl">
                    {benefit.icon}
                  </div>
                  <div className="space-y-4 relative z-10">
                    <h4 className="text-2xl md:text-3xl font-black text-white group-hover:text-gold transition-colors tracking-tight">
                      {benefit.title}
                    </h4>
                    <p className="text-slate-400 font-semibold leading-relaxed text-base group-hover:text-white/80 transition-colors">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. OUR GLOBAL HIRING APPROACH */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-28 space-y-6">
            <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2">
              Our Methodology
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Our Approach to <span className="text-gold">Global Hiring</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Our global hiring approach is built around understanding the business need first, then aligning the talent search with the most suitable geographic reach, role profile, and recruitment strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="group relative p-12 rounded-[48px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col h-full justify-between overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold/5 blur-3xl rounded-full group-hover:bg-gold/10 transition-all duration-700"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="text-4xl font-black text-white/5 group-hover:text-gold/20 transition-colors duration-500">
                      {step.num}
                    </div>
                    <div className="h-px flex-grow bg-white/5 group-hover:bg-gold/20 transition-colors"></div>
                  </div>
                  <h4 className="text-2xl font-black text-white mb-4 group-hover:text-gold transition-colors tracking-tight leading-tight">
                    {step.title}
                  </h4>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE NAYA STAFFING FOR GLOBAL HIRING */}
      <section className="py-32 bg-navy-dark relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose NAYA Staffing <span className="text-gold">for Global Hiring</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Global Hiring requires more than posting roles broadly. It requires a recruitment partner that understands talent access, market reach, role alignment, and the importance of managing international hiring activity in a clear and business-focused way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <div key={i} className="group p-8 rounded-[36px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-500 hover:shadow-xl flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-gold/5 flex items-center justify-center text-gold mb-6 group-hover:bg-gold group-hover:text-navy-dark transition-all">
                  {pillar.icon}
                </div>
                <h4 className="text-white font-black text-lg mb-3 group-hover:text-gold transition-colors tracking-tight uppercase">
                  {pillar.title}
                </h4>
                <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. GLOBAL HIRING VS REMOTE HIRING */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
              Global Hiring vs <span className="text-gold">Remote Hiring</span>
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto"></div>
          </div>
          <div className="space-y-8 text-slate-300 font-medium text-lg leading-relaxed text-center">
            <p>
              Global Hiring and Remote Hiring are closely related, but they are not exactly the same. Global Hiring refers more broadly to recruiting talent across regions, countries, and wider geographic markets. It is about expanding the talent search beyond one local labor market.
            </p>
            <p>
              Remote Hiring, by contrast, is more specifically focused on roles or workforce models where the work itself is designed to be performed remotely. A company may hire globally for remote positions, but it may also use global hiring for roles tied to specific markets, regions, or international business expansion.
            </p>
            <p className="text-slate-400 border-t border-white/5 pt-8 font-semibold italic text-base">
              This distinction is important because some employers need broader international talent access, while others specifically need remote-workforce recruitment support. NAYA Staffing supports both, allowing businesses to choose the model that best matches their hiring goals.
            </p>
          </div>
        </div>
      </section>

      {/* 10. WHO THIS SERVICE IS BEST FOR */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Who Global Hiring <span className="text-gold">Is Best For</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {audiences.map((audience, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6">
                  <h3 className="text-white font-black text-xl leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                    {audience.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {audience.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. REGION MARQUEE */}
      <section className="bg-navy py-24 border-t border-white/5">
        <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
          <h3 className="text-3xl font-black text-white tracking-tighter">Regional <span className="text-gold">Sourcing Footprint.</span></h3>
          <p className="text-slate-500 font-bold">Talent Across Every Region</p>
        </div>
        
        <div className="relative flex overflow-hidden">
          <style dangerouslySetInnerHTML={{ __html: `@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } .animate-marquee { display: flex; width: max-content; animation: marquee 60s linear infinite; }` }} />
          <div className="animate-marquee whitespace-nowrap gap-12 py-4">
            {[...regions, ...regions].map((reg, i) => (
              <span key={i} className="text-4xl md:text-6xl font-black text-white/5 hover:text-gold/20 transition-colors cursor-default uppercase tracking-tighter mr-12">
                {reg}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 12. INDUSTRY COVERAGE SECTION */}
      <section className="py-24 relative overflow-hidden bg-navy-dark border-t border-white/5">
        <div className="container mx-auto px-6 max-w-5xl text-center space-y-8 animate-fade-up">
            <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold">
              Cross-Industry Competence
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              Global Hiring Across <span className="text-gold">Diverse Industries</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-slate-400 text-lg leading-relaxed font-semibold max-w-4xl mx-auto">
              NAYA Staffing supports global hiring across a broad range of industries including information technology, healthcare, industrial, hospitality, professional services, education, insurance, retail and e-commerce, construction, marketing, and sales-led business environments. This allows employers to combine wider talent access with industry-relevant recruitment support.
            </p>
            <div className="pt-6">
               <Link href="/industries" className="px-10 py-5 bg-gold hover:bg-gold-hover text-navy-dark font-black rounded-full transition-all inline-flex items-center gap-4 uppercase tracking-[0.2em] text-xs">
                  Explore Industries We Serve <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
        </div>
      </section>

      {/* 13. FAQ SECTION */}
      <section className="bg-navy py-32 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="text-center mb-20 space-y-6">
              <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-6 shadow-xl backdrop-blur-md">
                Global Hiring FAQ
              </div>
              <h2 className="text-5xl font-black mb-6">Frequently <br/><span className="text-gold text-shimmer">Asked Questions</span></h2>
              <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
           </div>

           <div className="space-y-4">
             {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
             ))}
           </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <TestimonialSlider />

      {/* 14. INTERNAL LINKING SECTION */}
      <section className="py-24 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Services Links */}
            <div className="lg:col-span-7 space-y-8">
              <h4 className="text-gold font-black text-xs uppercase tracking-widest pb-2 border-b border-white/5">
                Related Recruitment Services
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-gold transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                      <p className="text-slate-400 text-xs font-semibold leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Core Pages Links */}
            <div className="lg:col-span-5 space-y-8">
              <h4 className="text-gold font-black text-xs uppercase tracking-widest pb-2 border-b border-white/5">
                Explore NAYA Staffing
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedMainPages.map((page, idx) => (
                  <Link 
                    key={idx} 
                    href={page.href}
                    className="group flex items-center justify-between p-4 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-gold/20 transition-all text-sm font-bold text-slate-300 hover:text-white"
                  >
                    <span>{page.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-gold transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15. FINAL CTA SECTION */}
      <section className="py-32 relative overflow-hidden bg-navy border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gold/[0.03] blur-[200px] rounded-full group-hover:bg-gold/[0.05] transition-all duration-1000"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-navy-light/10 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-panel p-12 md:p-24 rounded-[4rem] text-center border border-gold/20 shadow-2xl shadow-gold/10">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gold text-navy-dark mb-10 shadow-2xl shadow-gold/30">
              <Globe className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Build a Broader Talent Strategy <br/>
              <span className="text-gold">With Greater Confidence</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              When business growth requires wider talent access, a local-only hiring approach may no longer be enough. NAYA Staffing helps employers explore global hiring with a more strategic, structured, and business-aligned recruitment approach.
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
                href="/contact-us" 
                className="w-full sm:w-auto px-16 py-8 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-gold hover:text-gold font-black rounded-[32px] transition-all uppercase tracking-[0.3em] text-[10px]"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
