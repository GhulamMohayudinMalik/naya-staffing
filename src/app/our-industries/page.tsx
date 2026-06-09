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
  ChevronRight,
  Activity,
  Award,
  Laptop,
  HeartPulse,
  Factory,
  Utensils,
  GraduationCap,
  Shield,
  ShoppingBag,
  Hammer,
  Megaphone,
  DollarSign
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "Industries We Serve | Recruitment & Staffing Across Multiple Sectors | NAYA Staffing",
  description: "Explore the industries NAYA Staffing serves, including information technology, healthcare, industrial, hospitality, professional services, education, insurance, retail and e-commerce, construction, marketing, and sales.",
  keywords: [
    "industries we serve recruitment",
    "recruitment agency by industry",
    "staffing solutions across industries",
    "industry-specific recruitment",
    "sector recruitment services",
    "recruitment for multiple industries",
    "staffing agency for employers",
    "recruitment company by sector",
    "IT recruitment",
    "healthcare recruitment",
    "industrial staffing",
    "hospitality recruitment",
    "professional services staffing",
    "education recruitment",
    "insurance recruitment",
    "retail recruitment",
    "construction staffing",
    "marketing recruitment",
    "sales recruitment"
  ]
};

export default function IndustriesOverviewPage() {
  const reasons = [
    {
      title: "Industry Context Shapes Role Expectations",
      desc: "The same title can mean very different things depending on the sector, business model, customer environment, and operational structure.",
      icon: <Settings className="w-8 h-8 text-gold" />
    },
    {
      title: "Talent Availability Varies by Sector",
      desc: "Some industries face skill shortages, while others require stronger filtering or more specialized candidate access.",
      icon: <Users className="w-8 h-8 text-gold" />
    },
    {
      title: "Hiring Priorities Are Not Universal",
      desc: "Some sectors value compliance and precision, others speed and volume, others relationship strength, technical depth, or service delivery capability.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      title: "Candidate Fit Depends on Environment",
      desc: "A candidate’s experience only becomes valuable when it translates effectively into the realities of the target industry.",
      icon: <Activity className="w-8 h-8 text-gold" />
    },
    {
      title: "Sector Knowledge Improves Search Accuracy",
      desc: "Recruitment becomes more useful when sourcing, screening, and shortlisting reflect how the industry actually works.",
      icon: <ShieldCheck className="w-8 h-8 text-gold" />
    },
    {
      title: "Industry Alignment Supports Better Outcomes",
      desc: "Better industry understanding often leads to stronger shortlists, more relevant hires, and more confident decision-making.",
      icon: <Award className="w-8 h-8 text-gold" />
    }
  ];

  const industries = [
    {
      name: "Information Technology",
      slug: "information-technology",
      desc: "Recruitment support across software development, cybersecurity, cloud, infrastructure, digital systems, technical support, and broader technology functions.",
      subAreas: ["Software Development", "Cybersecurity", "Cloud Computing"],
      icon: <Laptop className="w-8 h-8 text-gold" />
    },
    {
      name: "Healthcare",
      slug: "healthcare",
      desc: "Hiring support across healthcare delivery, clinical support, healthcare operations, allied health, medical administration, and specialist healthcare-related functions.",
      subAreas: ["Nursing & Allied Health", "Health Informatics", "Medical Devices"],
      icon: <HeartPulse className="w-8 h-8 text-gold" />
    },
    {
      name: "Industrial",
      slug: "industrial",
      desc: "Recruitment solutions for manufacturing, production, logistics, supply chain, warehousing, operations, and quality-driven industrial environments.",
      subAreas: ["Manufacturing Operations", "Logistics & Supply Chain", "Quality Assurance"],
      icon: <Factory className="w-8 h-8 text-gold" />
    },
    {
      name: "Hospitality",
      slug: "hospitality",
      desc: "Staffing and recruitment support for hotels, restaurants, events, guest services, tourism, hospitality operations, and service-led environments.",
      subAreas: ["Hotel Management", "Event Planning", "Culinary Arts"],
      icon: <Utensils className="w-8 h-8 text-gold" />
    },
    {
      name: "Professional Services",
      slug: "professional-services",
      desc: "Hiring support across business-critical professional functions including finance, legal support, HR consulting, administration, and specialist advisory environments.",
      subAreas: ["Financial Services", "Legal Staffing", "HR Consulting"],
      icon: <Briefcase className="w-8 h-8 text-gold" />
    },
    {
      name: "Education",
      slug: "education",
      desc: "Recruitment support for schools, colleges, higher education, education administration, EdTech, and learning-focused institutions.",
      subAreas: ["K-12 Administration", "Higher Ed Faculty", "EdTech Specialists"],
      icon: <GraduationCap className="w-8 h-8 text-gold" />
    },
    {
      name: "Insurance",
      slug: "insurance",
      desc: "Talent solutions for underwriting, claims, insurance operations, customer support, compliance, and specialist insurance-related functions.",
      subAreas: ["Actuarial Services", "Claims Management", "Risk Underwriting"],
      icon: <Shield className="w-8 h-8 text-gold" />
    },
    {
      name: "Retail & E-Commerce",
      slug: "retail-ecommerce",
      desc: "Recruitment support for retail operations, store management, merchandising, e-commerce functions, fulfillment, and customer-facing commerce environments.",
      subAreas: ["Store Leadership", "Merchandising", "E-commerce Operations"],
      icon: <ShoppingBag className="w-8 h-8 text-gold" />
    },
    {
      name: "Construction",
      slug: "construction",
      desc: "Recruitment solutions for project-based, technical, and operational construction hiring across field, site, office, and leadership functions.",
      subAreas: ["Project Management", "Civil Engineering", "Skilled Trades"],
      icon: <Hammer className="w-8 h-8 text-gold" />
    },
    {
      name: "Marketing",
      slug: "marketing",
      desc: "Hiring support across brand, digital, creative, growth, content, campaign, and performance-focused marketing environments.",
      subAreas: ["Digital Strategy", "Content Creation", "Performance Marketing"],
      icon: <Megaphone className="w-8 h-8 text-gold" />
    },
    {
      name: "Sales",
      slug: "sales",
      desc: "Recruitment support for revenue-driving commercial teams across business development, account management, enterprise sales, and client growth functions.",
      subAreas: ["Enterprise Sales", "Account Management", "Business Development"],
      icon: <DollarSign className="w-8 h-8 text-gold" />
    }
  ];

  const secondaryTopics = [
    "Software & SaaS",
    "Artificial Intelligence & Machine Learning",
    "Finance & Banking",
    "FinTech",
    "Healthcare & Medical",
    "Pharmaceuticals",
    "Real Estate",
    "E-commerce",
    "Logistics & Supply Chain",
    "Manufacturing",
    "Education & EdTech",
    "Telecommunications",
    "Energy & Oil & Gas",
    "Legal & Compliance"
  ];

  const environments = [
    {
      title: "Leadership and Specialist Hiring",
      desc: "Support for strategic, senior, and hard-to-fill roles where precision matters."
    },
    {
      title: "Operational and Core Team Hiring",
      desc: "Recruitment for day-to-day business functions, operational roles, and department growth."
    },
    {
      title: "Commercial and Client-Facing Hiring",
      desc: "Support for sales, customer-facing, account, and relationship-driven roles."
    },
    {
      title: "Technical and Skills-Based Hiring",
      desc: "Hiring across technical, systems-driven, engineering, and specialized capability areas."
    },
    {
      title: "Flexible, Contract, and Project-Based Hiring",
      desc: "Support for short-term, project-based, or demand-driven hiring needs."
    },
    {
      title: "Graduate, Early-Career, and Future Talent Hiring",
      desc: "Pipeline-building recruitment support through campus, junior, and early-career hiring models."
    }
  ];

  const pillars = [
    {
      title: "Broad Sector Coverage With Role-Specific Thinking",
      desc: "We support many industries while still treating each role with the context it requires."
    },
    {
      title: "Flexible Recruitment Models",
      desc: "Our services can support permanent, contract, project-based, executive, specialist, and broader hiring needs across sectors."
    },
    {
      title: "Sector-Relevant Search Precision",
      desc: "We help improve candidate relevance by aligning the search more closely with the reality of each industry environment."
    },
    {
      title: "Scalable Hiring Support",
      desc: "Whether a business needs one role or a larger hiring project, our support can adapt to the scale and structure of the need."
    },
    {
      title: "Global and Modern Workforce Perspective",
      desc: "Our broader positioning supports local, regional, remote, and international hiring realities across industries."
    },
    {
      title: "Professional, Premium Delivery",
      desc: "The recruitment process should feel structured, credible, and aligned with the seriousness of the employer’s hiring goals."
    }
  ];

  const faqs = [
    {
      question: "Which industries does NAYA Staffing serve?",
      answer: "NAYA Staffing supports recruitment across a broad range of industries including information technology, healthcare, industrial, hospitality, professional services, education, insurance, retail and e-commerce, construction, marketing, and sales."
    },
    {
      question: "Does NAYA Staffing only recruit for one niche sector?",
      answer: "No. NAYA Staffing is positioned as a broad, multi-industry recruitment partner with support across diverse sectors and workforce environments."
    },
    {
      question: "Can NAYA Staffing support both specialist and high-volume hiring across industries?",
      answer: "Yes. NAYA Staffing’s service structure supports executive, permanent, contract, RPO, technical, project-based, and other hiring models across multiple sectors."
    },
    {
      question: "How does industry-specific recruitment help employers?",
      answer: "Industry-specific recruitment helps improve candidate relevance because search strategy, role understanding, and screening can be shaped more closely around the realities of the sector."
    },
    {
      question: "Will each industry have its own dedicated page?",
      answer: "Yes. This overview page acts as the parent page, while each listed industry can have its own dedicated page with deeper content and role coverage."
    },
    {
      question: "Can NAYA Staffing support employers with multi-industry hiring needs?",
      answer: "Yes. Many businesses operate across several sectors or functions, and NAYA Staffing’s broad coverage allows it to support more mixed hiring environments as well."
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Sector-Focused Recruitment Expertise</span>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
            <Typewriter>
              Recruitment Solutions Across <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Diverse Industries & Environments
              </span>
            </Typewriter>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
              NAYA Staffing supports employers across a wide range of industries by delivering recruitment solutions tailored to sector realities, hiring demands, and workforce goals. From technology, healthcare, industrial, and construction to education, hospitality, retail, insurance, marketing, and sales-driven environments, we help businesses access the talent they need with greater precision and confidence.
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
                Built for businesses seeking flexible, strategic, and industry-aware recruitment support across local, regional, remote, and global hiring markets.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-20">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold to-transparent"></div>
        </div>
      </section>

      {/* 2. INTRO / INDUSTRY POSITIONING SECTION */}
      <section className="py-24 relative overflow-hidden bg-navy-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 lg:gap-12 xl:gap-20 items-start">
            {/* Heading Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
                Adaptability
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                Recruitment That <br className="hidden md:inline" />
                <span className="text-gold">Adapts to Industry Needs</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            {/* Paragraphs Column */}
            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Every industry hires differently. The talent market, role expectations, hiring urgency, compliance context, candidate availability, and workforce structure can vary significantly from one sector to another. A recruitment approach that works in one industry may be far less effective in another.
              </p>
              <p>
                That is why industry-specific understanding matters. Employers need a recruitment partner that can adapt search strategy, sourcing direction, candidate evaluation, and hiring support based on the realities of the sector they operate in. Whether the requirement is technical, operational, customer-facing, regulated, commercial, or leadership-driven, the context of the role matters.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                NAYA Staffing’s Industries Overview page is designed to show the breadth of sectors we support and how our recruitment capabilities extend across both specialized and broad-market hiring environments. We do not limit our support to one narrow niche. We work across diverse industries where employers need reliable, quality-focused hiring solutions aligned with business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY INDUSTRY-SPECIFIC RECRUITMENT MATTERS */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="btn-rotating-border absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 btn-auto-sheen border border-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2 btn-auto-sheen border border-white/5">
              Context Matters
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Industry-Specific <span className="text-gold">Recruitment Matters</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              A strong candidate on paper is not always the right candidate for a specific industry environment. Sector context influences whether a hire can perform, adapt, and create value effectively.
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

      {/* 4. MAIN INDUSTRY GRID */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Industries We <span className="text-gold">Serve</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports recruitment across a broad range of sectors. Each industry page sits beneath this overview page and provides more specific sector content, role coverage, and recruitment value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {industries.map((ind, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6 flex-grow flex flex-col">
                  <div className="btn-rotating-border w-14 h-14 bg-white/5 border border-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/5 group-hover:text-white hover:text-gold transition-all duration-500 btn-auto-sheen border border-white/5">
                    {ind.icon}
                  </div>
                  <h3 className="text-white font-black text-2xl leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                    {ind.name}
                  </h3>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed mt-4 mb-6 group-hover:text-slate-300 transition-colors flex-grow">
                    {ind.desc}
                  </p>
                  
                  {/* Sub-areas pill list */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {ind.subAreas.map((sub, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-slate-400 font-semibold uppercase group-hover:border-gold/20 group-hover:text-white transition-all btn-sheen">
                        {sub}
                      </span>
                    ))}
                  </div>

                  <Link 
                    href={`/industries/${ind.slug}`}
                    className="group/link inline-flex items-center gap-2 text-xs font-black tracking-widest text-gold hover:text-white uppercase transition-colors"
                  >
                    Explore {ind.name} <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INDUSTRY SUB-SECTOR HIGHLIGHTS */}
      <section className="py-24 bg-navy relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl text-center space-y-8">
          <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
            Sector Depth
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            Sector Depth Beyond the <span className="text-gold">Main Categories</span>
          </h2>
          <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
          <p className="text-slate-400 text-lg leading-relaxed font-semibold max-w-4xl mx-auto">
            Our industry expertise spans several key sub-sectors and specialized niches. This allows us to provide targeted search strategies that reflect the precise nuances of your business environment.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10">
            {secondaryTopics.map((topic, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-gold/20 text-center transition-all duration-300">
                <span className="text-sm font-bold text-slate-300 tracking-tight">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ROLES & WORKFORCE ENVIRONMENTS WE SUPPORT */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Support Across Different <span className="text-gold">Hiring Environments</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Industry coverage is not only about sectors. It is also about the types of workforce needs and hiring contexts within those sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {environments.map((env, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6">
                  <h3 className="text-white font-black text-xl leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                    {env.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {env.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY EMPLOYERS ACROSS INDUSTRIES CHOOSE NAYA STAFFING */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Across Industries <span className="text-gold">Choose NAYA Staffing</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Industry coverage alone is not enough. Employers also need a recruitment partner that can adapt process, strategy, and delivery style based on what the sector and the role actually require.
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

      {/* 8. INDUSTRY COVERAGE + GLOBAL REACH SECTION */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
              Industry Expertise With a <span className="text-gold">Broader Talent Market View</span>
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto"></div>
          </div>
          <div className="space-y-8 text-slate-300 font-medium text-lg leading-relaxed text-center">
            <p>
              Today’s hiring environment is shaped by more than industry alone. Geographic reach, remote work, workforce flexibility, digital transformation, and changing talent expectations all affect how companies recruit across sectors. That is why NAYA Staffing’s industry coverage is designed to connect with a wider, modern recruitment model rather than a narrow local-only approach.
            </p>
            <p>
              Whether a company is hiring within one market or across multiple geographies, the need for industry understanding remains critical. Our approach combines sector awareness with flexible service models so employers can access talent in a way that matches both their business environment and their workforce strategy.
            </p>
            <p className="text-slate-400 border-t border-white/5 pt-8 font-semibold italic text-base">
              This matters especially for employers operating in fast-changing markets, hybrid or remote team models, high-demand sectors, or industries where role specialization is becoming more important over time.
            </p>
          </div>
        </div>
      </section>

      {/* 9. INDUSTRY CTA BLOCK */}
      <section className="py-24 relative overflow-hidden bg-navy border-t border-white/5">
        <div className="container mx-auto px-6 max-w-5xl text-center space-y-8 animate-fade-up">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              Looking for Recruitment Support in <span className="text-gold">Your Industry?</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-slate-400 text-lg leading-relaxed font-semibold max-w-4xl mx-auto">
              NAYA Staffing works across a wide range of sectors and role types, helping employers build teams with greater confidence and stronger hiring alignment. Explore the industry pages to learn more about the sectors we support, or speak with our team directly about your hiring needs.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-6">
               <Link href="/contact-us" className="btn-rotating-border px-8 py-4 bg-white/5 hover:bg-white/10 text-white hover:text-gold font-black rounded-full transition-all uppercase tracking-[0.2em] text-xs btn-auto-sheen border border-white/5">
                  Schedule Consultation
               </Link>
               <Link href="/contact-us" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-black border border-white/10 rounded-full transition-all uppercase tracking-[0.2em] text-xs btn-sheen">
                  Contact Our Team
               </Link>
               <Link href="/services" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-black border border-white/10 rounded-full transition-all uppercase tracking-[0.2em] text-xs btn-sheen">
                  Explore Our Services
               </Link>
            </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="bg-navy-dark py-32 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="text-center mb-20 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-6 shadow-xl backdrop-blur-md btn-auto-sheen border border-white/5">
                Common Inquiries
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
              <Rocket className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Recruitment Support Built for <br/>
              <span className="text-gold">Diverse Industries</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              From specialist sectors to broad operational environments, strong hiring depends on understanding both the role and the industry around it. NAYA Staffing helps employers recruit across multiple sectors with a more strategic, flexible, and business-aligned approach to talent acquisition.
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
    </main>
  );
}
