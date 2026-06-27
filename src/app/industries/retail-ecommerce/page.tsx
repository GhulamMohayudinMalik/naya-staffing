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
  ShoppingCart,
  Tag,
  Package,
  HeartHandshake
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "Retail & E-Commerce Recruitment & Staffing Solutions | NAYA Staffing",
  description: "NAYA Staffing provides retail and e-commerce recruitment services for employers hiring across store leadership, merchandising, e-commerce operations, fulfillment, customer-facing roles, and retail support teams.",
  keywords: [
    "retail recruitment agency",
    "retail staffing solutions",
    "e-commerce recruitment services",
    "retail hiring agency",
    "store staffing agency",
    "merchandising recruitment",
    "e-commerce operations hiring",
    "retail workforce solutions",
    "store leadership recruitment",
    "retail operations staffing",
    "fulfillment hiring support",
    "customer service retail recruitment",
    "retail talent acquisition",
    "e-commerce staffing company",
    "merchandising talent recruitment",
    "retail operations hiring"
  ]
};

export default function RetailEcommerceOverviewPage() {
  const industryData = getIndustryBySlug("retail-ecommerce");
  const galleryImages = industryData && industryData.subIndustries ? industryData.subIndustries.flatMap((sub: any) => sub.images ? sub.images.slice(1) : []) : [];
  const reasons = [
    {
      title: "Customer Experience Is Directly Affected by Hiring Quality",
      desc: "In retail and e-commerce environments, the people hired often shape service levels, response quality, sales support, and operational flow.",
      icon: <HeartHandshake className="w-8 h-8 text-gold" />
    },
    {
      title: "The Sector Includes Distinct Workforce Models",
      desc: "Store teams, merchandising staff, e-commerce operations, fulfillment roles, and customer-support functions each require different search and screening approaches.",
      icon: <Globe className="w-8 h-8 text-gold" />
    },
    {
      title: "Hiring Delays Can Affect Sales and Operations",
      desc: "Open positions can place strain on store execution, customer service, inventory movement, digital order flow, and team performance.",
      icon: <TrendingUp className="w-8 h-8 text-gold" />
    },
    {
      title: "Reliability and Practical Fit Matter Strongly",
      desc: "Retail and commerce roles often require people who can work consistently under pressure, communicate well, and adapt to dynamic service environments.",
      icon: <Award className="w-8 h-8 text-gold" />
    },
    {
      title: "Some Roles Need More Targeted Search Precision",
      desc: "Store leadership, merchandising, and e-commerce operations roles may need tighter filtering and more focused recruitment than broader frontline hiring.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      title: "Retail Hiring Must Balance Speed and Standards",
      desc: "The process often needs to move quickly while still protecting customer-facing quality and operational fit.",
      icon: <Clock className="w-8 h-8 text-gold" />
    }
  ];

  const subSectors = [
    {
      name: "Store Leadership",
      slug: "store-leadership",
      desc: "Recruitment support for employers hiring across store supervision, team coordination, customer experience oversight, operational leadership, and day-to-day retail performance environments.",
      roles: ["Store Supervisors", "Shift Leaders", "Store Operations Staff", "Customer Experience Leads", "Team Coordination Roles", "Floor Management Support"],
      icon: <Users className="w-8 h-8 text-gold" />
    },
    {
      name: "Merchandising",
      slug: "merchandising",
      desc: "Hiring support for employers seeking professionals across merchandising execution, product presentation, stock coordination, category support, and in-store commercial display environments.",
      roles: ["Merchandising Staff", "Product Display Support Roles", "Category Coordination Staff", "Stock Presentation Roles", "Retail Visual Support Positions"],
      icon: <Tag className="w-8 h-8 text-gold" />
    },
    {
      name: "E-Commerce Operations",
      slug: "ecommerce-operations",
      desc: "Recruitment solutions for businesses hiring across online-order workflows, digital-commerce support, fulfillment coordination, platform operations, and customer-order management environments.",
      roles: ["E-Commerce Operations Staff", "Fulfillment Coordinators", "Digital Order Support Roles", "Platform Support Staff", "Online Customer Service Roles"],
      icon: <ShoppingCart className="w-8 h-8 text-gold" />
    }
  ];

  const expansionTopics = [
    "Customer Experience",
    "Fulfillment & Dispatch",
    "Store Operations",
    "Online Order Management",
    "Inventory & Stock Support",
    "Omnichannel Retail Support"
  ];

  const roleGroups = [
    {
      title: "Store & Customer-Facing Roles",
      roles: [
        "Store Staff",
        "Customer Service Roles",
        "Floor Support Staff",
        "Sales Support Roles",
        "Frontline Retail Team Members",
        "Customer Experience Support"
      ]
    },
    {
      title: "Store Leadership & Supervision Roles",
      roles: [
        "Store Supervisors",
        "Shift Leaders",
        "Store Operations Coordinators",
        "Team Leads",
        "Floor Management Support"
      ]
    },
    {
      title: "Merchandising Roles",
      roles: [
        "Merchandising Staff",
        "Product Display Support",
        "Category Coordination Roles",
        "Visual Support Staff",
        "Stock Presentation Roles"
      ]
    },
    {
      title: "E-Commerce & Fulfillment Roles",
      roles: [
        "E-Commerce Operations Staff",
        "Fulfillment Coordinators",
        "Digital Order Support Roles",
        "Online Customer Service Staff",
        "Platform Operations Support",
        "Inventory and Dispatch Support"
      ]
    },
    {
      title: "Leadership-Adjacent & Specialist Roles",
      roles: [
        "Department Coordinators",
        "Retail Operations Supervisors",
        "Commerce Support Leads",
        "Customer Service Leads",
        "Store Performance Support Roles"
      ]
    }
  ];

  const challenges = [
    {
      title: "Maintaining Service and Operational Quality Under Pressure",
      desc: "Busy periods and changing demand can create pressure, but commerce roles still require dependability and customer-facing fit."
    },
    {
      title: "Different Commerce Roles Need Different Search Approaches",
      desc: "Store, merchandising, fulfillment, and e-commerce operations roles cannot all be recruited with the same candidate logic."
    },
    {
      title: "Delays Can Affect Sales, Service, and Delivery Flow",
      desc: "Open positions can strain customer experience, online order handling, inventory movement, and daily team performance."
    },
    {
      title: "Frontline Roles Need More Than Availability",
      desc: "Retail and commerce employers often need stronger screening for communication, reliability, adaptability, and service alignment."
    },
    {
      title: "Peak Demand Can Create Hiring Pressure",
      desc: "Seasonality, promotions, growth periods, or increased digital order volume may require faster recruitment without lowering standards."
    },
    {
      title: "Recruitment Must Reflect the Brand Experience",
      desc: "The hiring process itself should feel organized and professional because it reflects directly on the employer’s customer brand."
    }
  ];

  const supportAreas = [
    {
      title: "Sector-Aware Recruitment Support",
      desc: "Helping employers hire across store leadership, merchandising, e-commerce operations, fulfillment, customer service, and broader retail-support functions with stronger alignment."
    },
    {
      title: "Permanent and Flexible Hiring Models",
      desc: "Supporting long-term team building as well as flexible hiring needs where seasonal, promotional, or operational demand changes."
    },
    {
      title: "Screening & Assessment Support",
      desc: "Helping improve shortlist quality and reduce weak-fit candidates in customer-facing and operations-led hiring workflows."
    },
    {
      title: "Turnkey Recruitment for Multi-Role Commerce Needs",
      desc: "Supporting broader hiring projects where retail and e-commerce employers need more structured delivery across multiple roles."
    },
    {
      title: "Structured Hiring Support for Growth or Peak Demand",
      desc: "Helping commerce employers build teams more effectively through a clearer and more disciplined recruitment process."
    },
    {
      title: "Connection to Broader Workforce Services",
      desc: "Retail and e-commerce hiring can connect naturally with permanent recruitment, contract staffing, RPO, turnkey projects, and screening support depending on the employer’s needs."
    }
  ];

  const pillars = [
    {
      title: "Retail-Aware Search Thinking",
      desc: "We treat retail and e-commerce recruitment as a specialist commerce environment, not as generic staffing with retail titles added in."
    },
    {
      title: "Better Service and Operations Role Precision",
      desc: "We help align recruitment more closely with the demands of store, merchandising, fulfillment, and digital-commerce environments."
    },
    {
      title: "Support Across Core Commerce Sub-Sectors",
      desc: "Our structure already aligns with Store Leadership, Merchandising, and E-commerce Ops as the primary hiring environments for this page."
    },
    {
      title: "Flexible Connection to Related Services",
      desc: "Retail and e-commerce recruitment can connect with contract staffing, permanent recruitment, screening and assessment, RPO, and turnkey recruitment projects."
    },
    {
      title: "Professional and Brand-Aware Delivery",
      desc: "Commerce employers often need a hiring process that feels organized, customer-aware, and aligned with business presentation standards."
    },
    {
      title: "Premium, Business-Relevant Support",
      desc: "We help employers recruit retail and e-commerce talent through a process that feels credible, structured, and aligned with real workforce needs."
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
      question: "Does NAYA Staffing recruit for retail and e-commerce roles?",
      answer: "Yes. NAYA Staffing supports hiring across the Retail & E-Commerce sector, including store leadership, merchandising, e-commerce operations, customer-facing roles, fulfillment, and related support functions."
    },
    {
      question: "What types of retail and e-commerce roles can NAYA Staffing help fill?",
      answer: "NAYA Staffing can support hiring for store staff, supervisors, merchandising roles, fulfillment coordinators, e-commerce operations staff, online customer support, and other commerce-related positions."
    },
    {
      question: "Can NAYA Staffing support store leadership, merchandising, and e-commerce operations hiring?",
      answer: "Yes. Your approved industry structure already lists Store Leadership, Merchandising, and E-commerce Ops as the main sub-areas supported on this page."
    },
    {
      question: "Why is retail and e-commerce recruitment different from general recruitment?",
      answer: "Retail and e-commerce recruitment often requires stronger service awareness, faster operational responsiveness, better workforce-fit screening, and a more structured hiring process than broader recruitment alone."
    },
    {
      question: "Can NAYA Staffing help with hard-to-fill retail and e-commerce roles?",
      answer: "Yes. NAYA Staffing can support more difficult commerce hiring needs through focused recruitment, shortlist refinement, and project-based recruitment support where needed."
    },
    {
      question: "Is this page only for physical retail stores?",
      answer: "No. This page supports both store-based employers and digital-commerce environments, including e-commerce operations, fulfillment, online customer support, and broader commerce-led workforce needs."
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Retail, Commerce & Customer Talent Recruitment</span>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
            <Typewriter>
              Retail & E-Commerce <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Fast-Moving & Customer-Driven
              </span>
            </Typewriter>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
              NAYA Staffing supports employers across the Retail & E-Commerce sector with recruitment solutions designed for store leadership, merchandising, e-commerce operations, fulfillment, customer-facing teams, and broader retail support environments. Whether you are strengthening in-store teams, expanding digital-commerce capability, improving merchandising operations, or building customer-service and fulfillment support, we help employers access relevant candidates with greater confidence and hiring precision.
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
                Built for retail and e-commerce employers that need dependable talent, stronger operational alignment, and a recruitment process shaped around customer experience and commercial performance.
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
                <span className="text-gold">Fast-Paced Retail and Commerce Environments</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Retail and e-commerce hiring is shaped by speed, customer experience, operational consistency, and commercial performance. Employers may be recruiting for roles that directly affect store standards, sales support, stock movement, merchandising execution, fulfillment accuracy, online order operations, and day-to-day customer satisfaction. That means recruitment must focus on dependability, service fit, communication, and practical role alignment from the start.
              </p>
              <p>
                The Retail & E-Commerce sector also includes multiple hiring environments. Some employers are focused on store leadership and in-person customer experience. Others need merchandising talent, digital-commerce operations support, fulfillment teams, or retail coordinators who can perform effectively in fast-moving, target-driven settings. Even when job titles appear familiar, the operating environment changes what the right hire actually looks like.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                NAYA Staffing’s Retail & E-Commerce recruitment support is designed to help employers hire more effectively across those environments. We work with commerce-led businesses that need stronger access to relevant talent, better shortlist quality, and a recruitment process that reflects the pace and expectations of the sector. The underlying approved structure for this page is based on the reviewed category and sub-area list in your uploaded planning file.
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
              Why Retail & E-Commerce <span className="text-gold">Recruitment Is Different</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Retail and e-commerce hiring is different from general recruitment because the environment is fast-moving, customer-facing, and highly dependent on day-to-day workforce consistency.
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
              Retail & E-Commerce <span className="text-gold">Areas We Support</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              We support hiring across Store Leadership, Merchandising, and E-commerce Operations, with broader capability across customer service, fulfillment, and retail-support environments.
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
                    href={`/industries/retail-ecommerce/${sub.slug}`}
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
            Additional Retail & Commerce Areas <span className="text-gold">for Expansion</span>
          </h2>
          <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
          <p className="text-slate-400 text-lg leading-relaxed font-semibold max-w-4xl mx-auto">
            We support a wider retail and commerce footprint across these adjacent categories:
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
              Retail & E-Commerce Roles We <span className="text-gold">Help Employers Hire</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports recruitment across a wide range of retail and e-commerce roles depending on the employer’s business model, channel mix, service structure, and workforce priorities.
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
              Common Hiring Challenges in the <span className="text-gold">Retail & E-Commerce Sector</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Retail and e-commerce employers often face recruitment conditions that require strong pace, good judgment, and practical workforce planning.
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

      {/* 8. HOW NAYA STAFFING SUPPORTS RETAIL & E-COMMERCE EMPLOYERS */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              How We Support <span className="text-gold">Retail & E-Commerce Hiring</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports Retail & E-Commerce employers with recruitment solutions designed around customer experience, operational dependability, and stronger workforce alignment.
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

      {/* 9. WHY EMPLOYERS CHOOSE NAYA STAFFING FOR RETAIL & E-COMMERCE RECRUITMENT */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose NAYA Staffing <span className="text-gold">for Retail & E-Commerce Recruitment</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Retail and e-commerce recruitment requires stronger service awareness, practical workforce matching, and a hiring process that reflects the pace of customer-driven business. NAYA Staffing’s approach is designed around those needs.
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
                for <span className="text-gold">Retail & E-Commerce Hiring</span>
              </h2>
              <div className="btn-rotating-border h-1 w-20 bg-white/5 rounded-full btn-auto-sheen border border-white/5"></div>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                Retail and e-commerce employers often need more than one recruitment model depending on role type, urgency, seasonality, scale, and growth stage.
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
              <ShoppingCart className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Build Stronger Retail & E-Commerce Teams <br/>
              With <span className="text-gold">More Commerce-Aware Hiring Support</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              Retail and e-commerce hiring depends on dependable people, customer-facing quality, and stronger operational fit. NAYA Staffing helps employers recruit across the Retail & E-Commerce sector with a more structured, commerce-aware, and business-relevant approach to talent acquisition.
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
          <Link href="/industries/retail-ecommerce" className="hover:text-gold transition-colors">Retail & E-Commerce Overview</Link>
          <Link href="/industries/retail-ecommerce/store-leadership" className="hover:text-gold transition-colors">Store Leadership</Link>
          <Link href="/industries/retail-ecommerce/merchandising" className="hover:text-gold transition-colors">Merchandising</Link>
          <Link href="/industries/retail-ecommerce/ecommerce-operations" className="hover:text-gold transition-colors">E-Commerce Operations</Link>
        </div>
      </section>
    </main>
  );
}
