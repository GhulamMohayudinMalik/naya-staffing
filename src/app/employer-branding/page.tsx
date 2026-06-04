import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Sparkles, 
  Target, 
  Users, 
  Compass, 
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  Search, 
  FileText, 
  Award, 
  Network,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  HelpCircle,
  Briefcase,
  Cpu,
  Globe
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';
import TestimonialSlider from '@/components/TestimonialSlider';

export const metadata: Metadata = {
  title: "Employer Branding Services for Talent Attraction & Hiring Growth | NAYA Staffing",
  description: "NAYA Staffing provides employer branding support to help businesses attract stronger candidates, improve hiring perception, strengthen candidate experience, and build a more competitive employer presence.",
  keywords: [
    "employer branding services",
    "employer branding support",
    "employer brand strategy",
    "talent attraction services",
    "recruitment branding services",
    "employer reputation for hiring",
    "candidate attraction strategy",
    "employer branding agency support",
    "hiring brand improvement",
    "candidate experience strategy",
    "employer value proposition support",
    "recruitment communication strategy",
    "talent brand development",
    "employer image for recruitment",
    "hiring market positioning",
    "talent acquisition branding support"
  ]
};

export default function EmployerBrandingPage() {
  const reasons = [
    {
      title: "It Improves First Impressions",
      desc: "Candidates often form opinions about an employer before any interview takes place. Clear, professional, and well-positioned employer branding helps shape that first impression positively.",
      icon: <Sparkles className="w-8 h-8 text-gold" />
    },
    {
      title: "It Attracts More Relevant Talent",
      desc: "When the company presents itself clearly and credibly, it becomes easier to attract candidates who align with its opportunities and working style.",
      icon: <Users className="w-8 h-8 text-gold" />
    },
    {
      title: "It Supports Candidate Trust",
      desc: "Candidates are more likely to engage with employers that communicate clearly, appear organized, and present a professional hiring experience.",
      icon: <ShieldCheck className="w-8 h-8 text-gold" />
    },
    {
      title: "It Helps Differentiate the Business",
      desc: "In competitive talent markets, a stronger employer brand can help a company stand out from similar hiring organizations.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      title: "It Strengthens Candidate Experience",
      desc: "The employer brand is reflected not only in messaging, but in how candidates experience communication, responsiveness, and professionalism throughout the recruitment process.",
      icon: <Compass className="w-8 h-8 text-gold" />
    },
    {
      title: "It Supports Long-Term Hiring Performance",
      desc: "A stronger employer brand can improve not only immediate attraction, but also longer-term talent reputation and hiring consistency.",
      icon: <TrendingUp className="w-8 h-8 text-gold" />
    }
  ];

  const useCases = [
    {
      title: "When Competing for Stronger Talent",
      desc: "If your business needs to attract better candidates in a competitive market, a stronger employer brand can improve visibility and credibility."
    },
    {
      title: "When Scaling Teams or Hiring More Frequently",
      desc: "As recruitment activity increases, employer branding becomes more important because more candidates are interacting with your brand."
    },
    {
      title: "When Candidate Interest Is Lower Than Expected",
      desc: "If roles are not generating the right kind of response, the issue may not only be sourcing. It may also be how the opportunity and employer are being presented."
    },
    {
      title: "When the Hiring Experience Feels Inconsistent",
      desc: "Employer branding helps create more consistency in messaging, process tone, and candidate-facing communication."
    },
    {
      title: "When Launching Into New Markets or Growth Stages",
      desc: "Businesses entering new markets or evolving their positioning often need a clearer employer presence to attract the right talent."
    },
    {
      title: "When the Business Wants a More Premium Market Perception",
      desc: "A refined employer brand can help align hiring presentation with the quality, professionalism, and ambition of the business itself."
    }
  ];

  const servicesInclude = [
    {
      title: "Employer Brand Positioning Support",
      desc: "Helping define how the company should be presented to attract the right talent more effectively.",
      icon: <Target className="w-6 h-6 text-gold" />
    },
    {
      title: "Career Messaging Improvement",
      desc: "Strengthening how opportunities, growth potential, team culture, and employer value are communicated.",
      icon: <Sparkles className="w-6 h-6 text-gold" />
    },
    {
      title: "Job Description and Role Presentation Support",
      desc: "Improving role messaging so positions feel clearer, more compelling, and more aligned with the right audience.",
      icon: <FileText className="w-6 h-6 text-gold" />
    },
    {
      title: "Candidate Experience Review",
      desc: "Identifying ways to make the hiring journey feel more professional, responsive, and trust-building.",
      icon: <Compass className="w-6 h-6 text-gold" />
    },
    {
      title: "Recruitment Communication Support",
      desc: "Improving tone, consistency, and clarity across candidate-facing hiring communication.",
      icon: <Network className="w-6 h-6 text-gold" />
    },
    {
      title: "Employer Value Proposition Support",
      desc: "Helping shape the message around why candidates should consider the company as an employer.",
      icon: <Award className="w-6 h-6 text-gold" />
    },
    {
      title: "Brand Consistency Across Hiring Touchpoints",
      desc: "Supporting stronger alignment between the company’s brand, hiring communication, job pages, and recruitment process presence.",
      icon: <ShieldCheck className="w-6 h-6 text-gold" />
    }
  ];

  const benefits = [
    {
      title: "Stronger Candidate Attraction",
      desc: "Clearer and more compelling employer positioning helps draw stronger interest from relevant candidates.",
      icon: <Users className="w-7 h-7 text-gold" />
    },
    {
      title: "Improved Candidate Trust",
      desc: "Professional and consistent hiring communication makes the company feel more credible and reliable.",
      icon: <ShieldCheck className="w-7 h-7 text-gold" />
    },
    {
      title: "Better Role Engagement",
      desc: "Candidates are more likely to engage with opportunities that are presented clearly and supported by a strong employer story.",
      icon: <Sparkles className="w-7 h-7 text-gold" />
    },
    {
      title: "Stronger Differentiation in Competitive Markets",
      desc: "Employer branding helps the business stand out when multiple companies are competing for similar talent.",
      icon: <Target className="w-7 h-7 text-gold" />
    },
    {
      title: "Better Alignment Between Brand and Hiring Experience",
      desc: "A more consistent hiring presence creates a smoother and more believable candidate journey.",
      icon: <Compass className="w-7 h-7 text-gold" />
    },
    {
      title: "Long-Term Recruitment Value",
      desc: "Employer branding supports not just one role, but the wider reputation and effectiveness of the company’s recruitment activity over time.",
      icon: <TrendingUp className="w-7 h-7 text-gold" />
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Understand the Hiring Context",
      desc: "We begin by understanding the company’s hiring goals, target candidate audience, growth stage, and current recruitment challenges."
    },
    {
      num: "02",
      title: "Review Current Employer Presence",
      desc: "We assess how the business is currently presented through recruitment messaging, role communication, candidate touchpoints, and overall hiring perception."
    },
    {
      num: "03",
      title: "Identify Brand and Communication Gaps",
      desc: "We look for areas where the employer’s presentation may be unclear, inconsistent, under-positioned, or not fully aligned with the talent it wants to attract."
    },
    {
      num: "04",
      title: "Shape Stronger Employer Messaging",
      desc: "We help improve the way the business communicates opportunity, professionalism, growth potential, and its employer value."
    },
    {
      num: "05",
      title: "Support Better Candidate-Facing Execution",
      desc: "We help translate stronger positioning into better hiring communication, job presentation, and candidate experience."
    },
    {
      num: "06",
      title: "Strengthen Ongoing Hiring Perception",
      desc: "Our goal is to help employers build a more attractive and consistent market presence that supports better recruitment results over time."
    }
  ];

  const pillars = [
    {
      title: "Recruitment-Focused Brand Thinking",
      desc: "We do not treat employer branding as a separate creative exercise. We treat it as a talent attraction and hiring-performance tool.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Practical Candidate Perspective",
      desc: "We focus on what candidates actually experience, notice, and respond to during the hiring journey.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Stronger Talent Attraction Alignment",
      desc: "Our support is designed to help businesses position themselves in a way that attracts more relevant and higher-quality candidates.",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Modern, Premium Hiring Presentation",
      desc: "We help employers present themselves with more polish, clarity, and professionalism in competitive markets.",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "Useful Across Growth Stages",
      desc: "Whether the business is scaling, repositioning, improving candidate perception, or building a stronger market presence, employer branding support remains valuable.",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: "Natural Link to Recruitment Strategy",
      desc: "Employer branding works best when aligned with sourcing, recruitment delivery, and candidate experience, and our service supports that connection.",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const audiences = [
    {
      title: "Businesses Competing for Quality Talent",
      desc: "Employers that need to stand out more clearly in a competitive hiring environment."
    },
    {
      title: "Growing Companies and Scaling Teams",
      desc: "Organizations hiring more frequently and needing a stronger, more consistent recruitment presence."
    },
    {
      title: "Employers Improving Candidate Experience",
      desc: "Businesses that want the hiring journey to feel more professional, responsive, and trust-building."
    },
    {
      title: "Companies Repositioning Their Hiring Presence",
      desc: "Organizations entering new growth stages, markets, or talent categories and needing a more refined employer message."
    },
    {
      title: "Businesses Seeking a More Premium Recruitment Image",
      desc: "Employers that want their hiring presence to reflect higher quality, stronger professionalism, and clearer market confidence."
    }
  ];

  const relatedServices = [
    { name: "Talent Mapping", href: "/talent-mapping", desc: "Strategic market intelligence and recruitment planning services." },
    { name: "Screening & Assessment", href: "/screening-assessment", desc: "Structured candidate screening and evaluation support to reduce hiring risk." },
    { name: "Executive Search", href: "/executive-search", desc: "Premium recruitment solutions for leadership and business-critical positions." },
    { name: "Permanent Recruitment", href: "/permanent-recruitment", desc: "Core long-term hiring solutions for ongoing business needs." },
    { name: "Recruitment Process Outsourcing (RPO)", href: "/recruitment-process-outsourcing", desc: "End-to-end recruitment management to scale your hiring operations." },
    { name: "Global Hiring", href: "/global-hiring", desc: "Cross-border and international recruitment support to access wider markets." }
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
      question: "What is employer branding?",
      answer: "Employer branding is the way a company is perceived as a place to work. It influences how candidates view the employer, its opportunities, and its overall hiring appeal."
    },
    {
      question: "Why does employer branding matter in recruitment?",
      answer: "Employer branding matters because candidates assess not only the role, but also the employer behind it. A stronger employer brand can improve attraction, trust, and candidate engagement."
    },
    {
      question: "How does employer branding help attract better candidates?",
      answer: "Employer branding helps attract better candidates by making the company’s message clearer, more credible, and more appealing to the right audience."
    },
    {
      question: "What can NAYA Staffing support within employer branding?",
      answer: "NAYA Staffing can support employer positioning, career messaging, job presentation, candidate experience review, recruitment communication, and employer value proposition support."
    },
    {
      question: "Is employer branding only about design or visuals?",
      answer: "No. While visual presentation matters, employer branding also includes messaging, candidate experience, communication consistency, and how the business is perceived throughout recruitment."
    },
    {
      question: "Does NAYA Staffing provide employer branding support across industries?",
      answer: "Yes. NAYA Staffing supports employer branding across multiple industries and business environments."
    }
  ];

  const marqueeDimensions = [
    "Reputation", "Candidate Experience", "Value Proposition", "Hiring Communication", 
    "Talent Engagement", "Market Position", "Values Alignment"
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Talent Attraction & Hiring Perception</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none uppercase">
              Employer Branding That Helps You <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Attract Better Talent
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed mb-10">
              NAYA Staffing’s Employer Branding service helps businesses strengthen how they are seen by candidates in a competitive hiring market. From improving hiring communication and career messaging to supporting a more professional candidate experience, we help employers build a stronger reputation that attracts the right people and supports better recruitment outcomes.
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
                Built for employers who want to improve candidate trust, strengthen hiring appeal, and compete more effectively for quality talent.
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
                A Stronger Employer Presence <br className="hidden md:inline" />
                <span className="text-gold">Creates Stronger Hiring Results</span>
              </h2>
              <div className="h-1.5 w-20 bg-gold rounded-full opacity-60"></div>
            </div>

            {/* Paragraphs Column */}
            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                In competitive hiring markets, candidates are not only evaluating roles. They are evaluating the employer behind the role. They want to understand what the company stands for, how it communicates, what kind of opportunity it offers, and whether the hiring experience reflects professionalism, clarity, and trust.
              </p>
              <p>
                That is where employer branding becomes valuable. A strong employer brand helps businesses present themselves more effectively to the talent market. It influences first impressions, improves candidate interest, supports credibility, and helps the company stand out in a crowded hiring environment.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                NAYA Staffing’s Employer Branding service is designed to help employers strengthen that presence in practical recruitment terms. This means creating a more compelling, consistent, and candidate-friendly hiring identity that supports attraction, engagement, and better-quality applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT EMPLOYER BRANDING MEANS */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-8">
          <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold">
            The Scope
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
            What Is <span className="text-gold">Employer Branding?</span>
          </h2>
          <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-semibold">
            <p>
              Employer Branding is the way a company is perceived as a place to work. It shapes how current and potential candidates view the business, its values, its opportunities, and its overall attractiveness in the hiring market.
            </p>
            <p>
              In recruitment, employer branding goes beyond logos or design. It includes how roles are presented, how the company communicates, how the candidate journey feels, and how clearly the organization expresses its culture, growth potential, and professional credibility.
            </p>
            <p className="text-slate-400 border-t border-white/5 pt-8 font-normal italic text-base">
              A strong employer brand helps candidates understand why they should choose your business over another opportunity. For employers, that can lead to stronger applicant interest, better-fit candidates, improved hiring momentum, and a more competitive position in the talent market.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHY EMPLOYER BRANDING MATTERS */}
      <section className="py-32 bg-navy-dark relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2">
              Why It Matters
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employer Branding Matters <span className="text-gold">in Recruitment</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Even the best hiring process becomes harder when candidates do not feel clear, confident, or interested in the employer behind the opportunity.
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

      {/* 5. WHEN EMPLOYER BRANDING IS THE RIGHT CHOICE */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              When to Use <span className="text-gold">Employer Branding Support</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Employer Branding support is especially valuable when candidate attraction, market perception, or hiring competitiveness needs improvement.
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
              What Our Employer Branding Service <span className="text-gold">Can Cover</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              The exact scope can vary depending on the employer’s needs, but employer branding support can include several recruitment-focused areas that strengthen how the business appears to candidates.
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

      {/* 7. WHAT EMPLOYERS GAIN FROM EMPLOYER BRANDING */}
      <section className="py-32 bg-navy relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gold/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Sticky Header Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8 animate-fade-up">
              <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-2 shadow-xl backdrop-blur-md">
                Brand Returns
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                What Employer <br />Branding <span className="text-gold">Delivers.</span>
              </h2>
              <div className="h-1.5 w-24 bg-gold rounded-full shadow-lg shadow-gold/20"></div>
              <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed border-l-2 border-white/10 pl-8 max-w-lg">
                A stronger employer brand improves more than appearance. It improves how the company attracts, engages, and converts talent.
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

      {/* 8. OUR EMPLOYER BRANDING APPROACH */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-28 space-y-6">
            <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2">
              Our Methodology
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Our Approach to <span className="text-gold">Employer Branding</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Our employer branding approach is designed to connect hiring goals with candidate perception. We focus on practical improvements that strengthen talent attraction and make the hiring experience feel clearer, more professional, and more compelling.
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

      {/* 9. WHY CHOOSE NAYA STAFFING FOR EMPLOYER BRANDING */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose NAYA Staffing <span className="text-gold">for Employer Branding</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Employer Branding is most valuable when it is connected directly to recruitment outcomes. NAYA Staffing approaches employer branding through that lens.
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

      {/* 10. EMPLOYER BRANDING VS BASIC RECRUITMENT MARKETING */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
              Employer Branding vs <span className="text-gold">Basic Recruitment Marketing</span>
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto"></div>
          </div>
          <div className="space-y-8 text-slate-300 font-medium text-lg leading-relaxed text-center">
            <p>
              Basic recruitment marketing often focuses on promoting job openings or increasing visibility for current vacancies. While that can be useful, it does not always address how the employer itself is perceived by candidates.
            </p>
            <p>
              Employer Branding goes deeper. It focuses on the company’s reputation as a place to work, the consistency of hiring communication, the strength of its candidate-facing message, and the overall experience it creates throughout recruitment.
            </p>
            <p className="text-slate-400 border-t border-white/5 pt-8 font-semibold italic text-base">
              This distinction matters because stronger hiring outcomes usually come from both visibility and credibility. Recruitment marketing may attract attention. Employer branding helps make that attention convert into trust and candidate engagement.
            </p>
          </div>
        </div>
      </section>

      {/* 11. WHO THIS SERVICE IS BEST FOR */}
      <section className="py-32 bg-navy relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Who Employer Branding <span className="text-gold">Is Best For</span>
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

      {/* 12. SCROLLING MARQUEE OF BRANDING DIMENSIONS */}
      <section className="bg-navy-dark py-24 border-t border-white/5">
        <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
          <h3 className="text-3xl font-black text-white tracking-tighter">Branding <span className="text-gold">Dimensions.</span></h3>
          <p className="text-slate-500 font-bold">Key Attraction Pillars</p>
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
              Employer Branding Support Across <span className="text-gold">Diverse Industries</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-slate-400 text-lg leading-relaxed font-semibold max-w-4xl mx-auto">
              NAYA Staffing provides Employer Branding support across a broad range of industries including information technology, healthcare, industrial, hospitality, professional services, education, insurance, retail and e-commerce, construction, marketing, and sales-led business environments. This broad relevance aligns with your wider site structure and helps position employer branding as a cross-sector talent attraction service, not a niche add-on.
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
                Employer Branding FAQ
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
              <Sparkles className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Strengthen How Talent <br/>
              <span className="text-gold">Sees Your Business</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              The way your company is perceived in the hiring market directly affects the quality of talent you attract. NAYA Staffing’s Employer Branding service helps employers build stronger candidate trust, present opportunities more effectively, and create a hiring presence that supports better recruitment outcomes.
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
