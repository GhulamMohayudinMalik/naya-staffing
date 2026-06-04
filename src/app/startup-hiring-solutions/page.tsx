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
  HelpCircle,
  Activity,
  CheckCircle2,
  FileText,
  Award
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';
import TestimonialSlider from '@/components/TestimonialSlider';

export const metadata: Metadata = {
  title: "Startup Hiring Solutions for Fast-Growing Teams | NAYA Staffing",
  description: "NAYA Staffing provides startup hiring solutions to help founders and growth-stage businesses recruit high-impact talent across technical, commercial, operational, and leadership roles.",
  keywords: [
    "startup hiring solutions",
    "startup recruitment agency",
    "recruitment for startups",
    "startup staffing solutions",
    "startup hiring support",
    "hiring for fast-growing companies",
    "growth-stage recruitment services",
    "startup talent acquisition",
    "early-stage hiring support",
    "scale-up recruitment",
    "startup talent partner",
    "startup team building",
    "founder hiring support",
    "startup recruitment services",
    "flexible hiring for startups",
    "startup workforce solutions"
  ]
};

export default function StartupHiringSolutionsPage() {
  const reasons = [
    {
      title: "Each Hire Has Higher Impact",
      desc: "In a small or growing team, every person affects delivery, speed, communication, and culture more directly.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      title: "Roles May Evolve Quickly",
      desc: "Startups often hire for needs that are growing or changing, which means role clarity and candidate adaptability both matter.",
      icon: <Settings className="w-8 h-8 text-gold" />
    },
    {
      title: "Speed Matters More",
      desc: "Delays in hiring can slow product delivery, growth initiatives, client work, fundraising readiness, and operational execution.",
      icon: <Clock className="w-8 h-8 text-gold" />
    },
    {
      title: "Internal Resources May Be Limited",
      desc: "Many startups do not yet have a large internal HR or talent acquisition function, so external hiring support becomes especially valuable.",
      icon: <Briefcase className="w-8 h-8 text-gold" />
    },
    {
      title: "Competition for Strong Talent Is High",
      desc: "Startups often compete against bigger brands for the same candidates and need stronger messaging, positioning, and recruitment execution.",
      icon: <Globe className="w-8 h-8 text-gold" />
    },
    {
      title: "Alignment Matters Beyond Skills Alone",
      desc: "In startup environments, candidates often need resilience, ownership, adaptability, and a willingness to grow with the business.",
      icon: <ShieldCheck className="w-8 h-8 text-gold" />
    }
  ];

  const useCases = [
    {
      title: "Building the Early Team",
      desc: "When founders are making foundational hires across product, operations, sales, marketing, or support functions."
    },
    {
      title: "Scaling After Growth Milestones",
      desc: "When new funding, client growth, product traction, or market expansion creates urgent hiring demand."
    },
    {
      title: "Hiring Across Multiple Functions",
      desc: "When startups need to recruit across technical, commercial, operational, or leadership roles without a large internal recruitment team."
    },
    {
      title: "Needing Better Hiring Structure",
      desc: "When the business wants a more disciplined recruitment process without becoming too slow or overly formal."
    },
    {
      title: "Competing for High-Value Talent",
      desc: "When the startup needs help attracting candidates who could also consider larger or more established employers."
    },
    {
      title: "Planning Smarter Growth",
      desc: "When leadership wants hiring support that aligns with business stage, team build-out priorities, and future scaling plans."
    }
  ];

  const servicesInclude = [
    {
      title: "Core Team Hiring Support",
      desc: "Recruitment for foundational roles across operations, product, sales, marketing, customer success, support, and business functions.",
      icon: <Users className="w-6 h-6 text-gold" />
    },
    {
      title: "Specialist and Technical Hiring",
      desc: "Support for hiring developers, engineers, analysts, product talent, growth specialists, technical marketers, and other role-specific talent.",
      icon: <Cpu className="w-6 h-6 text-gold" />
    },
    {
      title: "Leadership and Strategic Hiring",
      desc: "Hiring support for startup leadership, team leads, functional heads, and critical early management appointments.",
      icon: <Award className="w-6 h-6 text-gold" />
    },
    {
      title: "Multi-Role Growth Hiring",
      desc: "Support for startups scaling across several roles or departments in a compressed timeframe.",
      icon: <TrendingUp className="w-6 h-6 text-gold" />
    },
    {
      title: "Hiring Process Support",
      desc: "Help with role scoping, candidate sourcing, shortlisting, coordination, and process flow to keep hiring moving efficiently.",
      icon: <Clock className="w-6 h-6 text-gold" />
    },
    {
      title: "Candidate Positioning Support",
      desc: "Support in presenting the opportunity clearly so candidates understand the startup’s value, mission, and growth potential.",
      icon: <FileText className="w-6 h-6 text-gold" />
    },
    {
      title: "Flexible Recruitment Model Alignment",
      desc: "Support that can connect with permanent recruitment, executive search, employer branding, screening, or talent mapping as the startup grows.",
      icon: <Settings className="w-6 h-6 text-gold" />
    }
  ];

  const benefits = [
    {
      title: "Faster Hiring Momentum",
      desc: "Structured recruitment support helps startups move faster without losing visibility or quality.",
      icon: <Clock className="w-7 h-7 text-gold" />
    },
    {
      title: "Stronger Early-Team Quality",
      desc: "Better hiring support improves the chances of securing people who can contribute meaningfully in lean, fast-moving environments.",
      icon: <Award className="w-7 h-7 text-gold" />
    },
    {
      title: "Reduced Founder and Team Burden",
      desc: "External recruitment support can reduce the pressure on founders and leaders already managing multiple priorities.",
      icon: <Users className="w-7 h-7 text-gold" />
    },
    {
      title: "Better Candidate Alignment",
      desc: "A startup-specific recruitment approach helps identify candidates who fit both the role and the pace of the business.",
      icon: <Target className="w-7 h-7 text-gold" />
    },
    {
      title: "Improved Hiring Confidence",
      desc: "When each hire matters, a more focused recruitment process helps decision-makers move forward with greater clarity.",
      icon: <ShieldCheck className="w-7 h-7 text-gold" />
    },
    {
      title: "Scalable Recruitment Support",
      desc: "As the business grows, startup hiring support can evolve into broader permanent hiring, leadership hiring, employer branding, or RPO support.",
      icon: <TrendingUp className="w-7 h-7 text-gold" />
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Understand the Growth Context",
      desc: "We begin by understanding the company stage, hiring goals, team structure, business priorities, and current growth challenges."
    },
    {
      num: "02",
      title: "Clarify the Role and Hiring Need",
      desc: "We help shape role expectations, candidate priorities, and the kind of profile most likely to succeed in the startup environment."
    },
    {
      num: "03",
      title: "Activate Focused Talent Search",
      desc: "We identify relevant candidates through targeted sourcing, recruiter networks, referrals, and role-specific outreach."
    },
    {
      num: "04",
      title: "Screen for Capability and Startup Fit",
      desc: "We assess not only skill alignment, but also communication, adaptability, ownership mindset, and growth-stage suitability."
    },
    {
      num: "05",
      title: "Support Fast, Clear Decision-Making",
      desc: "We help keep the process moving through candidate coordination, shortlist management, and timely communication."
    },
    {
      num: "06",
      title: "Support Team-Building Momentum",
      desc: "Our goal is to help startups build stronger teams in a way that supports both immediate execution and future growth."
    }
  ];

  const pillars = [
    {
      title: "Growth-Stage Hiring Awareness",
      desc: "We understand that startup recruitment is shaped by speed, lean structures, and business momentum.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Flexible Recruitment Support",
      desc: "Our support can adapt to the startup’s stage, hiring volume, and current team-building priorities.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Focus on High-Impact Hires",
      desc: "We treat startup hiring seriously because the cost of the wrong early hire can be high.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Practical, Not Overcomplicated",
      desc: "We help structure hiring without turning it into a slow or overly corporate process.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Strong Candidate Alignment",
      desc: "We focus on candidates who can operate effectively in startup environments, not just candidates who look strong on paper.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Natural Path to Future Recruitment Growth",
      desc: "As the company scales, startup hiring support can connect naturally into broader recruitment services already present across the site.",
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  const audiences = [
    {
      title: "Early-Stage Startups",
      desc: "Founders and small teams making foundational hires that will shape the business."
    },
    {
      title: "Growth-Stage Companies",
      desc: "Businesses expanding headcount after traction, funding, client growth, or product-market progress."
    },
    {
      title: "Lean Teams With Limited Hiring Capacity",
      desc: "Startups that need recruitment support without building a full internal talent function immediately."
    },
    {
      title: "Businesses Hiring Across Multiple Functions",
      desc: "Companies building out technical, commercial, operational, or leadership capability at the same time."
    },
    {
      title: "Startups Seeking Better Hiring Structure",
      desc: "Teams that want professional recruitment support while keeping the hiring process agile and practical."
    }
  ];

  const relatedServices = [
    { name: "Permanent Recruitment", href: "/permanent-recruitment", desc: "Core long-term hiring solutions for ongoing business needs." },
    { name: "Executive Search", href: "/executive-search", desc: "Premium recruitment solutions for leadership and business-critical positions." },
    { name: "Recruitment Process Outsourcing (RPO)", href: "/recruitment-process-outsourcing", desc: "End-to-end recruitment management to scale your hiring operations." },
    { name: "Employer Branding", href: "/employer-branding", desc: "Strengthen how candidates perceive your company to attract better talent." },
    { name: "Talent Mapping", href: "/talent-mapping", desc: "Strategic market intelligence and recruitment planning services." },
    { name: "Screening & Assessment", href: "/screening-assessment", desc: "Structured candidate screening and evaluation support to reduce hiring risk." }
  ];

  const relatedMainPages = [
    { name: "Services Overview", href: "/services" },
    { name: "Employers & Solutions", href: "/employer-solutions" },
    { name: "Our Proven Process", href: "/our-proven-process" },
    { name: "Industries Overview", href: "/our-industries" },
    { name: "Contact Us", href: "/contact-us" }
  ];

  const faqs = [
    {
      question: "What are startup hiring solutions?",
      answer: "Startup hiring solutions are recruitment services designed specifically for startups and growth-stage businesses that need flexible, fast, and high-impact hiring support."
    },
    {
      question: "Why do startups need specialized recruitment help?",
      answer: "Startups often move faster, operate with leaner teams, and make hires that have greater impact on growth, execution, and culture. That makes a specialized approach more useful."
    },
    {
      question: "What types of roles can NAYA Staffing help startups hire for?",
      answer: "NAYA Staffing can support startup hiring across technical, operational, commercial, support, and leadership roles depending on the company’s stage and needs."
    },
    {
      question: "How is startup hiring different from traditional recruitment?",
      answer: "Startup hiring usually requires more speed, more flexibility, and more focus on adaptability and growth-stage fit than traditional recruitment models."
    },
    {
      question: "Can NAYA Staffing support startups that are scaling quickly?",
      answer: "Yes. Startup Hiring Solutions are especially valuable when businesses are growing fast and need structured recruitment support across multiple roles or departments."
    },
    {
      question: "Does this service only apply to tech startups?",
      answer: "No. While it is highly relevant to technology-led startups, the service can also support startups and growth businesses across other sectors and commercial models."
    }
  ];

  const marqueeDimensions = [
    "Technical Talent", "Commercial Growth", "Operations & Scale", "Leadership appointments", 
    "Foundational Teams", "Product Development", "Customer Success"
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Growth-Stage Recruitment Support</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none uppercase">
              Startup Hiring Solutions for <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Teams Building Fast & Hiring Smart
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed mb-10">
              NAYA Staffing’s Startup Hiring Solutions service helps startups and high-growth businesses build strong teams with greater speed, flexibility, and confidence. Whether you are making your first strategic hires, building out core departments, or scaling quickly after growth, we provide recruitment support designed for startup realities, lean structures, and high-impact hiring decisions.
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
                Built for founders, startup leaders, and growth-stage teams that need strong hires without unnecessary complexity.
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
                Hiring for Startups <br className="hidden md:inline" />
                <span className="text-gold">Requires a Different Approach</span>
              </h2>
              <div className="h-1.5 w-20 bg-gold rounded-full opacity-60"></div>
            </div>

            {/* Paragraphs Column */}
            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Startup hiring is different from standard recruitment. In early-stage and growth-stage businesses, every hire can have an outsized impact on execution, culture, momentum, and business outcomes. Teams are often lean, priorities shift quickly, and the people hired need to bring not only skill, but adaptability, ownership, and strong alignment with the company’s direction.
              </p>
              <p>
                That is why startup hiring needs a more flexible and practical recruitment model. Founders and startup leaders often need to move fast, hire across multiple functions, compete for strong talent, and make smart hiring decisions without building a large in-house recruitment structure too early.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                NAYA Staffing’s Startup Hiring Solutions service is designed for exactly that environment. We help startups and scaling businesses approach hiring with more clarity, stronger candidate access, and a recruitment process that fits the pace and realities of growth-focused companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT STARTUP HIRING SOLUTIONS MEANS */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-8">
          <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold">
            The Definition
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
            What Are <span className="text-gold">Startup Hiring Solutions?</span>
          </h2>
          <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-semibold">
            <p>
              Startup Hiring Solutions are recruitment services designed specifically for startups, scale-ups, and emerging businesses that are building or expanding teams under growth-driven conditions. These services are shaped around speed, role flexibility, market competitiveness, and the importance of hiring people who can operate well in dynamic environments.
            </p>
            <p>
              Unlike traditional recruitment models that may assume stable org structures, mature departments, and clearly established hiring patterns, startup hiring often involves evolving role definitions, cross-functional responsibilities, and pressure to hire the right people quickly without compromising quality.
            </p>
            <p className="text-slate-400 border-t border-white/5 pt-8 font-normal italic text-base">
              For startups, recruitment support needs to be practical and strategic at the same time. It should help the business move quickly while still making strong decisions about who joins the team and how those hires support the company’s next stage of growth.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHY STARTUP HIRING IS DIFFERENT */}
      <section className="py-32 bg-navy-dark relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2">
              Why We Are Different
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Startup Hiring Requires a <span className="text-gold">Specialized Recruitment Approach</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Startups face a different hiring environment from larger, more established businesses, and the recruitment model should reflect that.
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

      {/* 5. WHEN STARTUP HIRING IS THE RIGHT CHOICE */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              When to Use <span className="text-gold">Startup Hiring Solutions</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Startup Hiring Solutions are especially valuable when the business is growing quickly, building early teams, or hiring for roles that directly affect momentum and scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6">
                  <h3 className="text-white font-black text-xl leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
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

      {/* 6. WHAT THE SERVICE CAN INCLUDE */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              What Our Startup Hiring Solutions <span className="text-gold">Can Cover</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              The exact scope can vary based on startup stage and hiring need, but the service can include a flexible range of recruitment support designed for high-growth environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {servicesInclude.map((service, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-500 flex flex-col h-full justify-between">
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/5 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-navy-dark transition-all duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-white font-black text-lg leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHAT STARTUPS GAIN FROM THIS SERVICE */}
      <section className="py-32 bg-navy relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gold/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Sticky Header Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8 animate-fade-up">
              <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-2 shadow-xl backdrop-blur-md">
                Growth Gains
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                What Startup <br />Hiring Solutions <span className="text-gold">Deliver.</span>
              </h2>
              <div className="h-1.5 w-24 bg-gold rounded-full shadow-lg shadow-gold/20"></div>
              <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed border-l-2 border-white/10 pl-8 max-w-lg">
                For startups, better hiring support means more than filling roles. It means protecting momentum and building the team that growth depends on.
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

      {/* 8. OUR STARTUP HIRING APPROACH */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-28 space-y-6">
            <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2">
              Our Growth Approach
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Our Approach to <span className="text-gold">Startup Hiring</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Our startup hiring approach is designed to balance speed, flexibility, and quality. We understand that startup teams need practical recruitment support that moves at the pace of growth while staying aligned with longer-term team-building goals.
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
                  <h4 className="text-2xl font-black text-white mb-4 group-hover:text-gold transition-colors tracking-tight leading-tight uppercase">
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

      {/* 9. WHY CHOOSE NAYA STAFFING FOR STARTUP HIRING */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Startups Choose NAYA Staffing <span className="text-gold">for Hiring Support</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Startup hiring support needs to be flexible enough for fast-moving teams and strong enough to protect hiring quality. NAYA Staffing’s approach is designed around that balance.
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

      {/* 10. STARTUP HIRING VS TRADITIONAL RECRUITMENT */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
              Startup Hiring vs <span className="text-gold">Traditional Recruitment</span>
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto"></div>
          </div>
          <div className="space-y-8 text-slate-300 font-medium text-lg leading-relaxed text-center">
            <p>
              Traditional recruitment often assumes more stable hiring structures, clearer role boundaries, and longer planning cycles. While that works for many established businesses, startups often operate under very different conditions.
            </p>
            <p>
              Startup hiring is usually faster, more dynamic, and more closely tied to business momentum. Roles may evolve quickly, internal teams may be lean, and the business may need candidates who can handle ambiguity, ownership, and growth.
            </p>
            <p className="text-slate-400 border-t border-white/5 pt-8 font-semibold italic text-base">
              That is why startup hiring often benefits from a more specialized recruitment approach. The goal is not only to find capable candidates, but to find people who can succeed in the pace and context of the startup itself.
            </p>
          </div>
        </div>
      </section>

      {/* 11. WHO THIS SERVICE IS BEST FOR */}
      <section className="py-32 bg-navy relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Who Startup Hiring Solutions <span className="text-gold">Is Best For</span>
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

      {/* 12. SCROLLING MARQUEE OF GROWTH FOCUS */}
      <section className="bg-navy-dark py-24 border-t border-white/5">
        <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
          <h3 className="text-3xl font-black text-white tracking-tighter">Growth <span className="text-gold">Priorities.</span></h3>
          <p className="text-slate-500 font-bold">Key Focus Sectors</p>
        </div>
        
        <div className="relative flex overflow-hidden">
          <style dangerouslySetInnerHTML={{ __html: `@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } .animate-marquee { display: flex; width: max-content; animation: marquee 60s linear infinite; }` }} />
          <div className="animate-marquee whitespace-nowrap gap-12 py-4">
            {[...marqueeDimensions, ...marqueeDimensions].map((dim, i) => (
              <span key={i} className="text-4xl md:text-6xl font-black text-white/5 hover:text-gold/20 transition-colors cursor-default uppercase tracking-tighter mr-12">
                {dim}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 13. INDUSTRY COVERAGE SECTION */}
      <section className="py-24 relative overflow-hidden bg-navy border-t border-white/5">
        <div className="container mx-auto px-6 max-w-5xl text-center space-y-8 animate-fade-up">
            <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold">
              Cross-Industry Competence
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              Startup Hiring Support Across <span className="text-gold">Diverse Sectors</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-slate-400 text-lg leading-relaxed font-semibold max-w-4xl mx-auto">
              NAYA Staffing supports startup hiring across a broad range of sectors and functions, which fits your wider website structure built around broad industry coverage rather than a narrow niche focus. This makes the service relevant to technology-led startups, digital businesses, commercial growth teams, operational startups, and emerging companies hiring across multiple disciplines.
            </p>
            <div className="pt-6">
               <Link href="/our-industries" className="px-10 py-5 bg-gold hover:bg-gold-hover text-navy-dark font-black rounded-full transition-all inline-flex items-center gap-4 uppercase tracking-[0.2em] text-xs">
                  Explore Industries We Serve <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
        </div>
      </section>

      {/* 14. FAQ SECTION */}
      <section className="bg-navy-dark py-32 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="text-center mb-20 space-y-6">
              <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-6 shadow-xl backdrop-blur-md">
                Startup Hiring FAQ
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

      {/* 15. INTERNAL LINKING SECTION */}
      <section className="py-24 bg-navy border-t border-white/5 relative overflow-hidden">
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

      {/* 16. FINAL CTA SECTION */}
      <section className="py-32 relative overflow-hidden bg-navy-dark border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gold/[0.03] blur-[200px] rounded-full group-hover:bg-gold/[0.05] transition-all duration-1000"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-navy-light/10 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-panel p-12 md:p-24 rounded-[4rem] text-center border border-gold/20 shadow-2xl shadow-gold/10">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gold text-navy-dark mb-10 shadow-2xl shadow-gold/30">
              <Rocket className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Build Your Team With Smarter <br/>
              <span className="text-gold">Startup Hiring Support</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              When growth depends on the people you hire, recruitment needs to move with clarity and purpose. NAYA Staffing’s Startup Hiring Solutions service helps startups and scaling businesses build stronger teams with greater speed, better alignment, and more confidence.
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
