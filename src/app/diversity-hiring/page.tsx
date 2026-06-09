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
  title: "Diversity Hiring Services for Inclusive Recruitment | NAYA Staffing",
  description: "NAYA Staffing provides diversity hiring services to help employers widen talent access, strengthen inclusive hiring practices, improve candidate pipelines, and build more representative teams.",
  keywords: [
    "diversity hiring services",
    "inclusive recruitment services",
    "diversity recruitment agency",
    "inclusive hiring support",
    "diverse talent sourcing",
    "workforce diversity recruitment",
    "diversity hiring solutions",
    "inclusive talent acquisition",
    "equitable hiring support",
    "broader talent pipeline recruitment",
    "inclusive candidate sourcing",
    "fair hiring process support",
    "representative workforce recruitment",
    "diversity-focused recruitment support",
    "hiring process inclusivity",
    "talent pipeline diversification"
  ]
};

export default function DiversityHiringPage() {
  const reasons = [
    {
      title: "It Broadens Talent Pipelines",
      desc: "Employers can reach qualified candidates who may be overlooked when sourcing stays too narrow or too repetitive.",
      icon: <Globe className="w-8 h-8 text-gold" />
    },
    {
      title: "It Strengthens Candidate Access",
      desc: "A more inclusive process makes it easier for a wider range of applicants to see, understand, and engage with opportunities.",
      icon: <Users className="w-8 h-8 text-gold" />
    },
    {
      title: "It Supports Better Hiring Visibility",
      desc: "When employers widen their sourcing and structure their evaluation more clearly, they often gain a better view of available talent.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      title: "It Reduces Overreliance on Limited Channels",
      desc: "Many hiring teams rely too heavily on the same networks, same profiles, or same talent routes. Diversity hiring helps expand those pathways.",
      icon: <Settings className="w-8 h-8 text-gold" />
    },
    {
      title: "It Improves Employer Perception",
      desc: "Candidates are more likely to engage with employers whose hiring process feels fair, thoughtful, and professionally inclusive.",
      icon: <ShieldCheck className="w-8 h-8 text-gold" />
    },
    {
      title: "It Supports Stronger Long-Term Team Building",
      desc: "A broader and more representative talent strategy can contribute to workforce depth, perspective, and hiring resilience over time.",
      icon: <TrendingUp className="w-8 h-8 text-gold" />
    }
  ];

  const useCases = [
    {
      title: "When Candidate Pipelines Feel Too Narrow",
      desc: "If the same kinds of profiles keep appearing and the talent pool feels limited, diversity hiring support can help broaden sourcing reach."
    },
    {
      title: "When the Business Wants More Inclusive Hiring Practices",
      desc: "Organizations aiming to strengthen fairness, access, and inclusiveness in hiring can benefit from a more intentional recruitment approach."
    },
    {
      title: "When Competition for Talent Is High",
      desc: "In competitive markets, widening talent access can create stronger opportunities to connect with qualified candidates."
    },
    {
      title: "When Hiring Processes Need Review",
      desc: "If the recruitment process may be filtering candidates too early or relying too heavily on narrow assumptions, diversity hiring support can help improve structure."
    },
    {
      title: "When Employer Brand and Candidate Trust Matter",
      desc: "A more inclusive hiring process can strengthen candidate confidence and improve perception of the employer."
    },
    {
      title: "When the Business Is Building for Long-Term Team Strength",
      desc: "Organizations focused on sustainable, future-ready team building often benefit from broader and more representative hiring strategies."
    }
  ];

  const servicesInclude = [
    {
      title: "Broader Candidate Sourcing Support",
      desc: "Helping employers expand where and how they search for qualified candidates.",
      icon: <Globe className="w-6 h-6 text-gold" />
    },
    {
      title: "Inclusive Role Messaging Review",
      desc: "Improving job and employer messaging so opportunities feel clearer, more accessible, and more inviting to a broader audience.",
      icon: <FileText className="w-6 h-6 text-gold" />
    },
    {
      title: "Talent Pipeline Diversification",
      desc: "Supporting more intentional candidate flow across different sourcing routes and talent communities.",
      icon: <TrendingUp className="w-6 h-6 text-gold" />
    },
    {
      title: "Hiring Process Review Support",
      desc: "Identifying parts of the recruitment process that may unintentionally narrow access or reduce candidate inclusiveness.",
      icon: <Settings className="w-6 h-6 text-gold" />
    },
    {
      title: "Structured Screening Alignment",
      desc: "Supporting clearer, role-based evaluation so candidates are assessed more consistently and fairly.",
      icon: <ShieldCheck className="w-6 h-6 text-gold" />
    },
    {
      title: "Candidate Experience Improvement",
      desc: "Helping the hiring journey feel more professional, respectful, and inclusive from first contact onward.",
      icon: <Users className="w-6 h-6 text-gold" />
    },
    {
      title: "Connection to Wider Recruitment Services",
      desc: "Diversity Hiring can work alongside employer branding, screening and assessment, permanent recruitment, RPO, and talent mapping depending on the business need.",
      icon: <Activity className="w-6 h-6 text-gold" />
    }
  ];

  const benefits = [
    {
      title: "Wider Access to Qualified Talent",
      desc: "Employers can reach beyond narrow sourcing habits and connect with a broader range of capable candidates.",
      icon: <Globe className="w-7 h-7 text-gold" />
    },
    {
      title: "Stronger Talent Pipeline Health",
      desc: "More inclusive recruitment practices often lead to stronger and more varied candidate pipelines over time.",
      icon: <TrendingUp className="w-7 h-7 text-gold" />
    },
    {
      title: "Better Process Quality",
      desc: "A clearer and fairer hiring structure supports more consistent candidate review and stronger shortlisting decisions.",
      icon: <ShieldCheck className="w-7 h-7 text-gold" />
    },
    {
      title: "Improved Candidate Trust and Engagement",
      desc: "Candidates respond better to employers whose recruitment process feels thoughtful, clear, and inclusive.",
      icon: <Users className="w-7 h-7 text-gold" />
    },
    {
      title: "Stronger Employer Positioning",
      desc: "A broader and more inclusive hiring approach can strengthen how the business is perceived in the talent market.",
      icon: <Target className="w-7 h-7 text-gold" />
    },
    {
      title: "More Sustainable Team-Building Strategy",
      desc: "Diversity hiring supports long-term workforce strength by making recruitment more open, intentional, and future-focused.",
      icon: <Settings className="w-7 h-7 text-gold" />
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Understand the Hiring Context",
      desc: "We begin by understanding the employer’s hiring goals, team context, talent challenges, and recruitment priorities."
    },
    {
      num: "02",
      title: "Review Current Talent Access Patterns",
      desc: "We assess how candidates are currently being reached and where sourcing or process limitations may exist."
    },
    {
      num: "03",
      title: "Identify Opportunities to Broaden Reach",
      desc: "We help define ways to expand sourcing pathways, improve candidate access, and reduce unnecessary narrowing of the pipeline."
    },
    {
      num: "04",
      title: "Strengthen Recruitment Messaging and Evaluation",
      desc: "We support clearer role presentation, better process structure, and more consistent evaluation aligned with actual job requirements."
    },
    {
      num: "05",
      title: "Support Better Candidate Flow",
      desc: "We help improve how qualified candidates move into and through the hiring process."
    },
    {
      num: "06",
      title: "Build a More Inclusive Recruitment Model",
      desc: "Our goal is to help employers hire through a process that is broader in access, stronger in structure, and more effective in outcomes."
    }
  ];

  const pillars = [
    {
      title: "Inclusive Hiring With Business Relevance",
      desc: "We connect diversity hiring directly to talent access, process quality, and hiring effectiveness.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Focus on Broader Talent Access",
      desc: "Our goal is to help employers widen the candidate lens rather than rely on the same limited recruitment pathways.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Fairer, More Structured Evaluation Thinking",
      desc: "We support role-based hiring structure so recruitment stays clear, professional, and aligned with candidate quality.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Practical Candidate Experience Improvement",
      desc: "An inclusive process is also a better candidate experience, and that matters for attraction and trust.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Cross-Service Alignment",
      desc: "Diversity Hiring can connect naturally with employer branding, screening, permanent recruitment, RPO, and talent mapping support.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Premium, Thoughtful Recruitment Delivery",
      desc: "We help employers approach inclusive hiring in a way that feels polished, credible, and strategically useful.",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const audiences = [
    {
      title: "Employers Seeking Broader Talent Pipelines",
      desc: "Businesses that want to widen access to qualified candidates and avoid overly narrow sourcing habits."
    },
    {
      title: "Organizations Strengthening Inclusive Hiring Practices",
      desc: "Teams looking to make recruitment more intentional, fair, and candidate-accessible."
    },
    {
      title: "Businesses Competing for Talent in Tight Markets",
      desc: "Employers who need better reach and stronger candidate engagement in competitive environments."
    },
    {
      title: "Companies Improving Hiring Process Quality",
      desc: "Organizations that want recruitment processes to be more structured, consistent, and inclusive."
    },
    {
      title: "Employers Building for Long-Term Workforce Strength",
      desc: "Businesses that see inclusive hiring as part of a broader, more sustainable team-building strategy."
    }
  ];

  const relatedServices = [
    { name: "Employer Branding", href: "/employer-branding", desc: "Strengthen how candidates perceive your company to attract better talent." },
    { name: "Screening & Assessment", href: "/screening-assessment", desc: "Structured candidate screening and evaluation support." },
    { name: "Talent Mapping", href: "/talent-mapping", desc: "Strategic market intelligence and recruitment planning services." },
    { name: "Permanent Recruitment", href: "/permanent-recruitment", desc: "Core long-term hiring solutions for ongoing business needs." },
    { name: "Recruitment Process Outsourcing (RPO)", href: "/recruitment-process-outsourcing", desc: "Strategic recruitment partnership for high-volume hiring." },
    { name: "Startup Hiring Solutions", href: "/startup-hiring-solutions", desc: "Flexible, growth-aware recruitment support for founders." },
    { name: "Global Hiring", href: "/global-hiring", desc: "Strategic international recruitment solutions across borders." },
    { name: "Remote Hiring Solutions", href: "/remote-hiring-solutions", desc: "Recruitment support for distributed and flexible team structures." }
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
      question: "What is diversity hiring?",
      answer: "Diversity hiring is a recruitment approach focused on widening talent access, improving inclusiveness in hiring processes, and creating broader, more representative candidate pipelines."
    },
    {
      question: "Does diversity hiring mean lowering hiring standards?",
      answer: "No. Diversity hiring is about improving access, broadening sourcing, and supporting fairer evaluation while keeping hiring decisions aligned with role requirements and candidate quality."
    },
    {
      question: "Why do companies use diversity hiring services?",
      answer: "Companies use diversity hiring services to widen talent reach, improve candidate pipeline variety, strengthen inclusive hiring practices, and make recruitment processes more effective."
    },
    {
      question: "What can NAYA Staffing support within diversity hiring?",
      answer: "NAYA Staffing can support broader sourcing, inclusive role messaging, hiring process review, structured screening alignment, candidate experience improvement, and stronger pipeline diversification."
    },
    {
      question: "How is diversity hiring different from standard sourcing?",
      answer: "Standard sourcing often relies on familiar channels and patterns, while diversity hiring intentionally broadens talent access and improves inclusiveness in how candidates are reached and evaluated."
    },
    {
      question: "Can diversity hiring support long-term workforce strategy?",
      answer: "Yes. Diversity hiring can help employers build stronger long-term recruitment models by making talent access broader, more intentional, and more sustainable."
    }
  ];

  const marqueeDimensions = [
    "inclusive sourcing", "equitable evaluation", "pipeline diversification", "role-based screening",
    "employer messaging", "candidate experience", "talent pipeline health", "workforce planning"
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Inclusive Talent Access</span>
            </div>
            <h1 className="text-5xl md:text-6xl xl:text-8xl font-black tracking-tighter mb-6 leading-none uppercase">
            <Typewriter>
              Diversity Hiring That Expands <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Talent Access & Outcomes
              </span>
            </Typewriter>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
              NAYA Staffing’s Diversity Hiring service helps employers build stronger, more inclusive recruitment processes by widening talent access, improving candidate reach, and supporting fairer evaluation practices. Whether you are looking to strengthen workforce diversity, reduce narrow sourcing patterns, or improve the inclusiveness of your hiring process, we provide recruitment support designed to help employers attract broader talent without compromising quality.
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
                href="/become-a-client" 
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 transition-all duration-300 backdrop-blur-xl btn-sheen"
              >
                Become a Client
              </Link>
            </div>
            <div className="pt-10 border-t border-white/5 mt-10 max-w-xl mx-auto text-center animate-fade-in-up animate-delay-400">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 leading-loose">
                Built for employers who want more inclusive talent pipelines, stronger hiring structure, and a broader view of where great candidates can come from.
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
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 lg:gap-12 xl:gap-20 items-start">
            {/* Heading Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
                Overview
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                A Smarter, Broader Approach <br className="hidden md:inline" />
                <span className="text-gold">to Talent Access</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            {/* Paragraphs Column */}
            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Many hiring challenges are not only about talent shortages. They are also about where employers are looking, how roles are being positioned, and whether the hiring process is creating equal visibility for a broad range of qualified candidates. When sourcing is narrow or evaluation is inconsistent, strong talent can be missed.
              </p>
              <p>
                Diversity Hiring helps address that challenge by broadening the recruitment lens. It supports employers in reaching wider candidate pools, improving the inclusiveness of hiring practices, and creating a more intentional approach to talent access. This does not mean lowering standards. It means improving how talent is found, considered, and evaluated.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                NAYA Staffing’s Diversity Hiring service is designed to help employers build stronger pipelines and more inclusive recruitment processes while keeping hiring decisions aligned with business needs, role requirements, and long-term team quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT DIVERSITY HIRING MEANS */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-8">
          <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
            The Definition
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
            What Is <span className="text-gold">Diversity Hiring?</span>
          </h2>
          <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-semibold">
            <p>
              Diversity Hiring is a recruitment approach focused on widening talent access and improving inclusiveness throughout the hiring process. It helps employers move beyond narrow sourcing patterns and create recruitment pathways that reach a broader range of qualified candidates.
            </p>
            <p>
              In practice, this can involve reviewing sourcing channels, refining role messaging, reducing unnecessary barriers in the recruitment process, improving candidate outreach strategy, and supporting fairer, more structured evaluation methods.
            </p>
            <p className="text-slate-400 border-t border-white/5 pt-8 font-normal italic text-base">
              For employers, diversity hiring is not about compromising on quality. It is about increasing access to strong candidates, improving representation within talent pipelines, and creating hiring practices that are better positioned to identify capability from a broader market.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHY DIVERSITY HIRING MATTERS */}
      <section className="py-32 bg-navy-dark relative overflow-hidden border-t border-white/5">
        <div className="btn-rotating-border absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 btn-auto-sheen border border-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2 btn-auto-sheen border border-white/5">
              Why It Matters
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Diversity Hiring Matters <span className="text-gold">in Recruitment</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              A wider and more inclusive hiring process can improve both candidate access and recruitment performance.
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

      {/* 5. WHEN DIVERSITY HIRING IS THE RIGHT CHOICE */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              When to Use <span className="text-gold">Diversity Hiring Support</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Diversity Hiring support is especially valuable when employers want to improve talent access, widen candidate pipelines, or make their recruitment approach more inclusive and effective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
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
              What Our Diversity Sourcing <span className="text-gold">Can Cover</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              The exact scope can vary depending on the employer’s goals, but diversity hiring support can include several practical recruitment-focused improvements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
            {servicesInclude.slice(0, 7).map((service, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-500 flex flex-col h-full justify-between">
                <div className="space-y-6">
                  <div className="btn-rotating-border w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/5 group-hover:text-white hover:text-gold transition-all duration-500 btn-auto-sheen border border-white/5">
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

      {/* 7. WHAT EMPLOYERS GAIN FROM DIVERSITY HIRING */}
      <section className="py-32 bg-navy relative overflow-hidden border-t border-white/5">
        <div className="btn-rotating-border absolute top-1/2 right-0 w-[500px] h-[500px] bg-white/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 btn-auto-sheen border border-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
            
            {/* Sticky Header Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8 animate-fade-up">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-2 shadow-xl backdrop-blur-md btn-auto-sheen border border-white/5">
                Talent Growth
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                What Diversity <br />Hiring Solutions <span className="text-gold">Deliver.</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-24 bg-white/5 rounded-full shadow-lg shadow-gold/20 btn-auto-sheen border border-white/5"></div>
              <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed border-l-2 border-white/10 pl-8 max-w-lg">
                When handled thoughtfully, diversity hiring improves more than optics. It improves access, process quality, and recruitment effectiveness.
              </p>
            </div>

            {/* Scrollable Benefits Column */}
            <div className="lg:col-span-7 space-y-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="group p-10 glass-panel rounded-[48px] border-white/5 hover:border-gold/30 hover:bg-white/4 transition-all duration-700 hover:shadow-2xl hover:shadow-gold/5 flex flex-col md:flex-row gap-6 xl:gap-8 items-start relative overflow-hidden animate-fade-up">
                  <div className="btn-rotating-border shrink-0 w-14 h-14 rounded-[20px] bg-white/10 flex items-center justify-center border border-gold/20 group-hover:bg-white/5 group-hover:text-white hover:text-gold transition-all duration-500 shadow-xl btn-auto-sheen border border-white/5">
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

      {/* 8. OUR DIVERSITY HIRING APPROACH */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-28 space-y-6">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2 btn-auto-sheen border border-white/5">
              Our Methodology
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Our Approach to <span className="text-gold">Diversity Hiring</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Our diversity hiring approach is built around expanding talent access while keeping recruitment practical, role-focused, and aligned with hiring quality. We focus on helping employers improve the way talent is reached, engaged, and evaluated.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="group relative p-12 rounded-[48px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col h-full justify-between overflow-hidden">
                <div className="btn-rotating-border absolute -top-12 -right-12 w-32 h-32 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-all duration-700 btn-auto-sheen border border-white/5"></div>
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

      {/* 9. WHY CHOOSE NAYA STAFFING FOR DIVERSITY HIRING */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose NAYA Staffing <span className="text-gold">for Diversity Hiring</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Diversity Hiring works best when it is treated as a practical recruitment improvement, not just a statement of intent. NAYA Staffing’s approach is designed to make it useful, credible, and aligned with real hiring outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {pillars.map((pillar, i) => (
              <div key={i} className="group p-8 rounded-[36px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-500 hover:shadow-xl flex flex-col h-full">
                <div className="btn-rotating-border w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gold mb-6 group-hover:bg-white/5 group-hover:text-white hover:text-gold transition-all btn-auto-sheen border border-white/5">
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

      {/* 10. DIVERSITY HIRING VS STANDARD SOURCING */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
              Diversity Hiring vs <span className="text-gold">Standard Candidate Sourcing</span>
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto"></div>
          </div>
          <div className="space-y-8 text-slate-300 font-medium text-lg leading-relaxed text-center">
            <p>
              Standard sourcing often follows familiar channels, familiar patterns, and familiar candidate profiles. While that can sometimes be efficient, it can also limit visibility into the full talent market.
            </p>
            <p>
              Diversity Hiring goes further by asking whether the sourcing reach is broad enough, whether the process is inclusive enough, and whether strong candidates may be getting excluded unnecessarily by narrow assumptions or overly limited recruitment pathways.
            </p>
            <p className="text-slate-400 border-t border-white/5 pt-8 font-semibold italic text-base">
              This does not change the need for strong role alignment or high standards. It improves the chances that qualified talent is actually being seen, considered, and evaluated through a more open and structured process.
            </p>
          </div>
        </div>
      </section>

      {/* 11. WHO THIS SERVICE IS BEST FOR */}
      <section className="py-32 bg-navy relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Who Diversity Hiring <span className="text-gold">Is Best For</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
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

      {/* 12. SCROLLING MARQUEE OF INCLUSIVITY FOCUS */}
      <section className="bg-navy-dark py-24 border-t border-white/5">
        <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
          <h3 className="text-3xl font-black text-white tracking-tighter">Inclusivity <span className="text-gold">Focus.</span></h3>
          <p className="text-slate-500 font-bold">Inclusive Dimensions</p>
        </div>
        
        <div className="relative flex overflow-hidden">
          <style dangerouslySetInnerHTML={{ __html: `@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } .animate-marquee { display: flex; width: max-content; animation: marquee 60s linear infinite; }` }} />
          <div className="animate-marquee whitespace-nowrap gap-8 xl:gap-12 py-4">
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
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
              Cross-Industry Competence
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              Diversity Hiring Support Across <span className="text-gold">Diverse Industries</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-slate-400 text-lg leading-relaxed font-semibold max-w-4xl mx-auto">
              NAYA Staffing’s broader site structure is built to cover a wide range of industries and services rather than staying limited to one niche, which makes Diversity Hiring especially relevant as a cross-sector service. The approved pages also show broad industry coverage across technology, healthcare, industrial, hospitality, professional services, education, insurance, retail, construction, marketing, and sales-related environments, allowing this service to be positioned as valuable across multiple hiring contexts.
            </p>
            <div className="pt-6">
               <Link href="/our-industries" className="btn-rotating-border px-10 py-5 bg-white/5 hover:bg-white/10 text-white hover:text-gold font-black rounded-full transition-all inline-flex items-center gap-4 uppercase tracking-[0.2em] text-xs btn-auto-sheen border border-white/5">
                  Explore Industries We Serve <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
        </div>
      </section>

      {/* 14. FAQ SECTION */}
      <section className="bg-navy-dark py-32 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="text-center mb-20 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-6 shadow-xl backdrop-blur-md btn-auto-sheen border border-white/5">
                Inclusivity FAQ
              </div>
              <h2 className="text-5xl font-black mb-6">Frequently <br/><span className="text-gold text-shimmer">Asked Questions</span></h2>
              <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
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
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 lg:gap-12 xl:gap-20 items-start">
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
          <div className="btn-rotating-border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.03] blur-[200px] rounded-full group-hover:bg-white/[0.05] transition-all duration-1000 btn-auto-sheen border border-white/5"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-navy-light/10 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-panel p-12 md:p-24 rounded-[4rem] text-center border border-gold/20 shadow-2xl shadow-gold/10">
            <div className="btn-rotating-border inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 text-white hover:text-gold mb-10 shadow-2xl shadow-gold/30 btn-auto-sheen border border-white/5">
              <Rocket className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Build a Broader, Stronger <br/>
              <span className="text-gold">Talent Pipeline</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              A stronger hiring process starts with better access to talent. NAYA Staffing’s Diversity Hiring service helps employers widen candidate reach, strengthen inclusive hiring practices, and build a recruitment process that supports both hiring quality and long-term team strength.
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
                href="/contact-us" 
                className="w-full sm:w-auto px-16 py-8 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-gold hover:text-gold font-black rounded-[32px] transition-all uppercase tracking-[0.3em] text-[10px] btn-sheen"
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
