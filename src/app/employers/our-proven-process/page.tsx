import { Typewriter } from "@/components/Typewriter";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Briefcase, 
  Cpu, 
  Target, 
  Award, 
  Globe, 
  Settings, 
  Clock, 
  ShieldCheck, 
  TrendingUp, 
  ShieldAlert,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Users,
  Activity,
  Zap,
  Check,
  Search,
  MessageSquare,
  UserCheck,
  Calendar,
  Rocket
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "Our Proven Recruitment Process for Employers | NAYA Staffing",
  description: "Learn how NAYA Staffing helps employers hire through a structured recruitment process built around role clarity, candidate alignment, screening quality, communication, and hiring outcomes.",
  keywords: [
    "recruitment process for employers",
    "proven hiring process",
    "staffing agency recruitment process",
    "employer recruitment workflow",
    "hiring process support",
    "recruitment partner process",
    "structured recruitment process",
    "talent acquisition process for companies",
    "how staffing agencies work with employers",
    "recruitment delivery model",
    "employer hiring process support",
    "candidate screening process",
    "client recruitment onboarding",
    "recruitment workflow for businesses",
    "structured hiring support",
    "recruitment process for companies"
  ]
};

export default function OurProvenProcessPage() {
  const whyProcessMatters = [
    {
      title: "Clarity at the Start Improves Everything After",
      desc: "When the role, team context, and hiring objective are clearly understood, candidate search becomes more useful and more accurate.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      title: "Better Screening Protects Hiring Quality",
      desc: "A structured process improves shortlist relevance and helps employers spend time on stronger candidates instead of weaker-fit applicants.",
      icon: <ShieldCheck className="w-8 h-8 text-gold" />
    },
    {
      title: "Process Flow Reduces Hiring Delays",
      desc: "When communication, coordination, and next steps are managed well, recruitment keeps moving instead of stalling between stages.",
      icon: <Clock className="w-8 h-8 text-gold" />
    },
    {
      title: "Consistency Builds Employer Confidence",
      desc: "Employers are more comfortable working with a partner that has a repeatable and understandable way of delivering recruitment support.",
      icon: <Award className="w-8 h-8 text-gold" />
    },
    {
      title: "Candidate Experience Improves With Structure",
      desc: "A well-run process reflects positively on the employer and helps maintain professionalism throughout the hiring journey.",
      icon: <Users className="w-8 h-8 text-gold" />
    },
    {
      title: "Stronger Process Creates Better Business Outcomes",
      desc: "Recruitment affects team quality, delivery capability, growth, and workforce continuity, so process quality matters far beyond hiring admin.",
      icon: <TrendingUp className="w-8 h-8 text-gold" />
    }
  ];

  const steps = [
    {
      stepNum: "01",
      title: "Understand the Hiring Need",
      heading: "We Start With the Business Context",
      desc: "Every hiring process begins by understanding more than the job title. We work to understand the role, the team, the business environment, the urgency, the reporting line, the wider workforce context, and what success should look like in the position. This step matters because better recruitment starts with better role understanding.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      stepNum: "02",
      title: "Align the Right Hiring Solution",
      heading: "We Match the Need to the Right Recruitment Model",
      desc: "Not every hiring challenge needs the same solution. Depending on the employer’s situation, the right fit may be permanent recruitment, contract staffing, executive search, RPO, a turnkey recruitment project, or a more specialized support model. This step helps keep the recruitment approach aligned with the actual business need rather than forcing one model onto every situation.",
      icon: <Settings className="w-8 h-8 text-gold" />
    },
    {
      stepNum: "03",
      title: "Define the Candidate Profile",
      heading: "We Clarify What the Right Candidate Really Looks Like",
      desc: "Before search begins, we help shape a more useful view of the target candidate. This includes experience level, functional fit, communication expectations, market relevance, practical role suitability, and broader alignment with the employer’s hiring objective. This reduces guesswork and improves search precision.",
      icon: <Users className="w-8 h-8 text-gold" />
    },
    {
      stepNum: "04",
      title: "Activate Search and Talent Outreach",
      heading: "We Begin Structured Candidate Search",
      desc: "Once the role and candidate profile are clear, we begin sourcing through the most suitable channels for the search. Depending on the hiring model, this may include recruiter networks, candidate databases, direct outreach, market mapping, referrals, specialist search methods, or broader candidate attraction support.",
      icon: <Search className="w-8 h-8 text-gold" />
    },
    {
      stepNum: "05",
      title: "Screen for Relevance and Fit",
      heading: "We Filter for Quality Before Time Is Lost",
      desc: "Candidate screening is one of the most important parts of the process. We assess relevance, communication, practical fit, role alignment, and overall suitability before presenting candidates further. The goal is not to create volume. The goal is to create a more useful shortlist.",
      icon: <UserCheck className="w-8 h-8 text-gold" />
    },
    {
      stepNum: "06",
      title: "Present Stronger Shortlists",
      heading: "We Focus Employers on the Most Relevant Talent",
      desc: "Instead of overwhelming employers with loosely related profiles, we focus on presenting candidates who are more likely to make sense for the role and the hiring context. This helps improve hiring efficiency and reduces wasted time during interviews and internal review.",
      icon: <Briefcase className="w-8 h-8 text-gold" />
    },
    {
      stepNum: "07",
      title: "Support Communication and Hiring Momentum",
      heading: "We Help Keep the Process Moving",
      desc: "Hiring often slows down because of communication gaps, next steps, and broken feedback flow. We help keep candidate coordination, interview movement, employer feedback, and process timing more organized so recruitment stays active and easier to manage.",
      icon: <Calendar className="w-8 h-8 text-gold" />
    },
    {
      stepNum: "08",
      title: "Support Better Hiring Decisions",
      heading: "We Help Employers Move Forward With More Confidence",
      desc: "The final stage of the process is about making the hiring decision with better visibility, stronger shortlist quality, and clearer candidate context. Our role is to support employers in reaching a better outcome, not just finishing an activity cycle.",
      icon: <Award className="w-8 h-8 text-gold" />
    }
  ];

  const adaptations = [
    {
      title: "Permanent Recruitment",
      desc: "The process emphasizes long-term fit, role alignment, and stable team growth.",
      icon: <Briefcase className="w-6 h-6 text-gold" />
    },
    {
      title: "Contract Staffing",
      desc: "The process emphasizes speed, availability, practical fit, and workforce flexibility.",
      icon: <Zap className="w-6 h-6 text-gold" />
    },
    {
      title: "Executive Search",
      desc: "The process emphasizes precision, confidentiality, strategic alignment, and high-impact decision support.",
      icon: <Award className="w-6 h-6 text-gold" />
    },
    {
      title: "RPO",
      desc: "The process becomes more embedded and scalable to support recurring or multi-role hiring activity.",
      icon: <Settings className="w-6 h-6 text-gold" />
    },
    {
      title: "Turnkey Recruitment Projects",
      desc: "The process expands into broader multi-role coordination, delivery structure, and project-style hiring execution.",
      icon: <Activity className="w-6 h-6 text-gold" />
    },
    {
      title: "Specialized Hiring Support",
      desc: "The process may include stronger elements of market mapping, employer branding, technical screening, or direct-search talent access depending on the need.",
      icon: <Cpu className="w-6 h-6 text-gold" />
    }
  ];

  const gains = [
    {
      title: "Stronger Role Clarity",
      desc: "Employers start with a better-defined hiring need, which improves candidate quality and recruitment direction."
    },
    {
      title: "Better Shortlists",
      desc: "Stronger screening and alignment produce more relevant candidates."
    },
    {
      title: "Less Hiring Friction",
      desc: "A more organized process helps reduce delays, confusion, and broken feedback flow."
    },
    {
      title: "More Confidence in Decision-Making",
      desc: "Employers get clearer candidate visibility and stronger hiring control."
    },
    {
      title: "Improved Candidate Experience",
      desc: "A better-run process reflects well on the employer and helps strengthen candidate trust."
    },
    {
      title: "More Reliable Hiring Outcomes",
      desc: "When process quality improves, overall hiring outcomes usually improve as well."
    }
  ];

  const trustPoints = [
    {
      title: "The Process Is Business-Aligned",
      desc: "It starts with the hiring context, not just the vacancy title."
    },
    {
      title: "The Process Is Flexible",
      desc: "It can support different industries, workforce models, and service types."
    },
    {
      title: "The Process Prioritizes Candidate Quality",
      desc: "It focuses on relevance and fit rather than unnecessary candidate volume."
    },
    {
      title: "The Process Supports Momentum",
      desc: "Communication and coordination are treated as part of recruitment delivery, not an afterthought."
    },
    {
      title: "The Process Is Easy to Understand",
      desc: "Employers should be able to see exactly how recruitment will move from requirement to outcome."
    },
    {
      title: "The Process Reflects Professional Standards",
      desc: "This is especially important because the page exists to strengthen trust inside the employer/client section already defined in your approved structure."
    }
  ];

  const faqs = [
    {
      question: "How does NAYA Staffing work with employers?",
      answer: "NAYA Staffing works with employers through a structured recruitment process that begins with understanding the hiring need, aligning the right solution, sourcing relevant talent, screening candidates carefully, and supporting the hiring journey through to decision-making."
    },
    {
      question: "What is the purpose of the Our Proven Process page?",
      answer: "This page explains how NAYA Staffing delivers recruitment support in a clear, step-by-step way so employers can understand how the hiring process works before engaging."
    },
    {
      question: "Where does this page sit in the site structure?",
      answer: "This page sits under the Employers section alongside Employer Solutions and Become a Client in your approved employer/client structure."
    },
    {
      question: "Does the same process apply to all recruitment services?",
      answer: "The core logic stays consistent, but the process can adapt depending on whether the employer needs permanent recruitment, contract staffing, executive search, RPO, project hiring, or specialized support."
    },
    {
      question: "What happens after a company becomes a client?",
      answer: "After becoming a client, the hiring need is reviewed, the right recruitment model is aligned, the role is scoped more clearly, and the recruitment process is activated according to the agreed support structure."
    },
    {
      question: "Why is a structured recruitment process important?",
      answer: "A structured process helps improve role clarity, shortlist quality, communication flow, and overall hiring confidence, which leads to better recruitment outcomes."
    }
  ];

  const relatedLinks = [
    { name: "Employers Overview", href: "/employers", desc: "Return to the main parent section for employers." },
    { name: "Employer Solutions", href: "/employers/employer-solutions", desc: "Browse the full recruitment services stack." },
    { name: "Become a Client", href: "/employers/become-a-client", desc: "Start a hiring engagement with our recruiting team." },
    { name: "Contact Us", href: "/contact-us", desc: "Get in touch with our office for general inquiries." },
    { name: "Schedule Consultation", href: "/schedule-consultation", desc: "Book a strategic consultation with a recruiter." },
    { name: "Screening & Assessment", href: "/services/screening-assessment", desc: "Vetting services for high-quality shortlists." }
  ];

  return (
    <main className="bg-[#040814] text-white min-h-screen selection:bg-gold selection:text-navy-dark font-sans">
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Structured Recruitment Delivery</span>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
            <Typewriter>
              Our Proven Process for Smarter, <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                More Reliable Hiring
              </span>
            </Typewriter>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
              NAYA Staffing helps employers hire through a structured recruitment process designed to improve role clarity, candidate alignment, screening quality, communication flow, and overall hiring outcomes. Whether the need is permanent hiring, contract staffing, executive recruitment, or a broader workforce solution, our process is built to create more confidence and less friction across the hiring journey.
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up animate-delay-300">
              <Link 
                href="/employers/become-a-client" 
                className="btn-rotating-border group relative px-8 py-4 bg-white/5 hover:bg-white/10 text-white hover:text-gold font-bold rounded-full transition-all duration-300 overflow-hidden shadow-2xl shadow-gold/20 btn-auto-sheen border border-white/5"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Become a Client <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                href="/schedule-consultation" 
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 transition-all duration-300 backdrop-blur-xl btn-sheen"
              >
                Schedule Consultation
              </Link>
            </div>
            <div className="pt-10 border-t border-white/5 mt-10 max-w-xl mx-auto text-center animate-fade-in-up animate-delay-400">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 leading-loose">
                Built for employers who want a recruitment partner with a clear method, stronger hiring discipline, and business-aligned execution.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-20">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold to-transparent"></div>
        </div>
      </section>

      {/* 2. PROCESS POSITIONING / INTRO SECTION */}
      <section className="py-24 relative overflow-hidden bg-navy-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 lg:gap-12 xl:gap-20 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
                Process Mindset
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                A Recruitment Process Employers <br className="hidden md:inline" />
                <span className="text-gold">Can Actually Rely On</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                A strong recruitment outcome usually starts with a strong process. Employers often do not struggle only because talent is hard to find. They also struggle because hiring becomes unclear, rushed, inconsistent, or difficult to manage across stakeholders, timelines, and candidate stages. Weak process creates weak hiring decisions.
              </p>
              <p>
                That is why Our Proven Process matters. This page shows employers that NAYA Staffing does not treat recruitment as a random sequence of resume submissions. Instead, it follows a more structured model built around understanding the hiring need, aligning the search correctly, screening more effectively, presenting more relevant candidates, and keeping the process moving with stronger communication and control.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                Inside your approved employer/client structure, this page works as the trust and delivery page beneath the main Employers section, alongside Employer Solutions and Become a Client. It is the page that makes business users feel that NAYA Staffing’s way of working is organized, professional, and worth engaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY PROCESS MATTERS IN RECRUITMENT */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="btn-rotating-border absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 btn-auto-sheen border border-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why a Proven <span className="text-gold">Hiring Process Matters</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Many recruitment problems are not caused by a total lack of candidates. They are caused by poor process discipline, unclear briefs, weak shortlisting, inconsistent communication, and unnecessary friction between stages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {whyProcessMatters.map((item, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6">
                  <div className="btn-rotating-border w-14 h-14 bg-white/5 border border-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/5 group-hover:text-white hover:text-gold transition-all duration-500 btn-auto-sheen border border-white/5">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-black text-xl leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR PROVEN PROCESS OVERVIEW */}
      <section className="py-24 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-8">
          <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
            Method Overview
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            How Our Recruitment <span className="text-gold">Process Works</span>
          </h2>
          <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
          <p className="text-slate-300 text-lg leading-relaxed font-semibold max-w-2xl mx-auto">
            NAYA Staffing’s process is built around understanding the hiring need, aligning the right recruitment solution, defining the candidate profile, sourcing and screening relevant talent, presenting stronger shortlists, supporting communication and hiring momentum, and helping employers move toward confident hiring decisions.
          </p>
          <p className="text-slate-500 text-xs italic">
            This core logic stays consistent but adapts seamlessly depending on the specific recruitment model selected by the business.
          </p>
        </div>
      </section>

      {/* 5. STEP-BY-STEP RECRUITMENT PROCESS */}
      <section className="py-32 bg-navy relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Step-by-Step <span className="text-gold">Recruitment Process</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Here is how NAYA Staffing delivers recruitment support in a repeatable, structured way.
            </p>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {steps.map((step, idx) => (
              <div key={idx} className="group relative glass-panel p-8 md:p-12 rounded-[40px] border-white/5 hover:border-gold/30 transition-all duration-500 hover:-translate-y-2 bg-white/[0.01]">
                <div className="flex flex-col md:flex-row gap-6 xl:gap-8 items-start">
                  <div className="relative shrink-0">
                    <div className="text-8xl font-black text-white/5 absolute -top-10 -left-6 group-hover:text-gold/10 transition-colors">
                      {step.stepNum}
                    </div>
                    <div className="btn-rotating-border w-20 h-20 bg-white/10 border border-gold/20 rounded-3xl flex items-center justify-center text-gold relative z-10 shadow-xl group-hover:scale-110 transition-transform duration-500 btn-auto-sheen border border-white/5">
                      {step.icon}
                    </div>
                  </div>

                  <div className="space-y-4 flex-1">
                    <span className="text-gold font-bold text-xs uppercase tracking-wider block">{step.title}</span>
                    <h3 className="text-2xl font-black text-white group-hover:text-gold transition-colors tracking-tight uppercase">
                      {step.heading}
                    </h3>
                    <p className="text-gray-400 text-base leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW THE PROCESS ADAPTS TO DIFFERENT HIRING NEEDS */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              One Process Logic, <span className="text-gold">Multiple Hiring Models</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              We maintain consistent workflow discipline, but adapt our metrics and activities to match the engagement type.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {adaptations.map((item, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-[#0B132B]/50 border border-white/5 hover:border-gold/30 transition-all duration-500 flex flex-col h-full justify-between">
                <div className="space-y-4">
                  <div className="btn-rotating-border w-12 h-12 bg-white/10 border border-gold/20 rounded-2xl flex items-center justify-center btn-auto-sheen border border-white/5">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-black text-lg group-hover:text-gold transition-colors tracking-tight uppercase">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHAT EMPLOYERS GAIN FROM OUR PROCESS */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              What Employers Gain From <span className="text-gold">a Structured Recruitment Process</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Recruitment is an investment. A disciplined process converts that activity into measurable business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {gains.map((gain, i) => (
              <div key={i} className="group p-8 rounded-[36px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-500 hover:shadow-xl flex flex-col h-full justify-between">
                <div className="space-y-4">
                  <h4 className="text-white font-black text-lg group-hover:text-gold transition-colors tracking-tight uppercase">
                    {gain.title}
                  </h4>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {gain.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY EMPLOYERS TRUST THIS PROCESS */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Trust <span className="text-gold">the Way We Work</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Employers trust process when it feels clear, practical, and aligned to real business realities rather than vague promises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {trustPoints.map((point, i) => (
              <div key={i} className="group p-8 rounded-[36px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-500 hover:shadow-xl flex flex-col h-full justify-between">
                <div className="space-y-4">
                  <h4 className="text-white font-black text-lg group-hover:text-gold transition-colors tracking-tight uppercase">
                    {point.title}
                  </h4>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA BLOCK */}
      <section className="py-24 bg-navy relative border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-[64px] p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-8 xl:gap-12 border-white/10 hover:border-gold/20 transition-all duration-700 btn-sheen">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black text-white leading-[0.9] tracking-tighter mb-4 uppercase">
                Ready to Put a Better <br /> <span className="text-gold">Hiring Process in Place?</span>
              </h2>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed mt-4">
                A better recruitment process creates better hiring outcomes. NAYA Staffing helps employers move from unclear hiring activity to a more structured, professional, and business-aligned recruitment model.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 shrink-0 w-full lg:w-auto">
              <Link href="/employers/become-a-client" className="btn-rotating-border px-12 py-6 bg-white/5 text-white hover:text-gold font-black rounded-full hover:bg-white/10 hover:-translate-y-2 transition-all text-center shadow-xl uppercase tracking-[0.2em] text-xs btn-auto-sheen border border-white/5">
                Become a Client
              </Link>
              <Link href="/schedule-consultation" className="px-12 py-6 bg-white/5 border border-white/10 text-white font-black rounded-full hover:bg-white/10 hover:-translate-y-2 transition-all text-center uppercase tracking-[0.2em] text-xs backdrop-blur-md btn-sheen">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
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

      {/* 11. FINAL CTA SECTION */}
      <section className="py-32 relative overflow-hidden bg-navy-dark border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="btn-rotating-border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.03] blur-[200px] rounded-full btn-auto-sheen border border-white/5"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-panel p-12 md:p-24 rounded-[4rem] text-center border border-gold/20 shadow-2xl shadow-gold/10">
            <div className="btn-rotating-border inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 text-white hover:text-gold mb-10 shadow-2xl shadow-gold/30 btn-auto-sheen border border-white/5">
              <Briefcase className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              A Better Process Leads <br/>
              With <span className="text-gold">Better Hiring Outcomes</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              Employers do not just need candidates. They need a hiring process that makes recruitment clearer, stronger, and easier to manage. NAYA Staffing helps employers move forward with a more structured, trustworthy, and business-relevant recruitment process.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 xl:gap-8">
              <Link 
                href="/employers/become-a-client" 
                className="btn-rotating-border group w-full sm:w-auto px-16 py-8 bg-white/5 hover:bg-white/10 text-white hover:text-gold font-black rounded-[32px] transition-all flex items-center justify-center gap-4 shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-[0.3em] text-[10px] btn-auto-sheen border border-white/5"
              >
                Become a Client <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-500" />
              </Link>
              <Link 
                href="/schedule-consultation" 
                className="w-full sm:w-auto px-16 py-8 bg-white/5 hover:bg-white/10 text-white font-black rounded-[32px] border border-white/10 transition-all backdrop-blur-xl uppercase tracking-[0.3em] text-[10px] btn-sheen"
              >
                Schedule Consultation
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

      {/* 12. RELATED SERVICES / INTERNAL LINKS */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 xl:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.95]">
                Process <br/>
                &amp; Delivery <span className="text-gold">Resources</span>
              </h2>
              <div className="btn-rotating-border h-1 w-20 bg-white/5 rounded-full btn-auto-sheen border border-white/5"></div>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                Connect with our core client resources and services to align your recruitment workflow.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedLinks.map((service, idx) => (
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

      {/* Internal Linking Footer Block */}
      <section className="py-12 bg-[#040814] border-t border-white/5 text-sm font-bold text-slate-500">
        <div className="container mx-auto px-6 flex flex-wrap gap-x-8 gap-y-4 justify-center">
          <Link href="/services" className="hover:text-gold transition-colors">Services Overview</Link>
          <Link href="/our-industries" className="hover:text-gold transition-colors">Industries Overview</Link>
          <Link href="/employers" className="hover:text-gold transition-colors">Employers Overview</Link>
          <Link href="/employers/employer-solutions" className="hover:text-gold transition-colors">Employer Solutions</Link>
          <Link href="/employers/become-a-client" className="hover:text-gold transition-colors">Become a Client</Link>
        </div>
      </section>
    </main>
  );
}
