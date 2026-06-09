"use client";

import { Typewriter } from "@/components/Typewriter";
import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Users, 
  Target, 
  Clock, 
  Gem, 
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
  Scale
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import TestimonialSlider from '@/components/TestimonialSlider';
import FAQItem from '@/components/FAQItem';

export default function ExecutiveSearchPage() {
  const useCases = [
    {
      title: "Leadership and Senior Management Hiring",
      desc: "Executive Search is ideal for roles that guide business strategy, lead teams, influence revenue, or shape key functions across the organization.",
      icon: <Users className="w-8 h-8 text-gold" />
    },
    {
      title: "Confidential Appointments",
      desc: "When a business needs to replace an existing leader, launch a new function, or make a sensitive appointment, discretion becomes a major priority.",
      icon: <Lock className="w-8 h-8 text-gold" />
    },
    {
      title: "Hard-to-Fill or Specialist Roles",
      desc: "Some positions require a rare mix of technical expertise, industry experience, leadership capability, and cultural alignment. These roles often demand a targeted search rather than broad advertising.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      title: "Business-Critical Expansion Roles",
      desc: "When companies are entering new markets, restructuring, scaling quickly, or building new leadership capacity, executive hiring decisions become central to success.",
      icon: <TrendingUp className="w-8 h-8 text-gold" />
    },
    {
      title: "Passive Candidate Markets",
      desc: "The strongest executive and senior-level candidates are often not actively applying for jobs. Executive Search helps engage those candidates through direct, strategic outreach.",
      icon: <Globe className="w-8 h-8 text-gold" />
    }
  ];

  const roles = [
    {
      category: "Leadership Roles",
      list: [
        "Chief Executive Officer",
        "Chief Operating Officer",
        "Chief Financial Officer",
        "Chief Technology Officer",
        "Chief Marketing Officer",
        "Chief Revenue Officer",
        "Chief People Officer"
      ]
    },
    {
      category: "Senior Management Roles",
      list: [
        "Managing Director",
        "Country Manager",
        "General Manager",
        "Vice President",
        "Senior Director",
        "Head of Department",
        "Regional Lead"
      ]
    },
    {
      category: "Functional Leadership Roles",
      list: [
        "Head of Sales",
        "Head of Marketing",
        "Head of Engineering",
        "Head of Product",
        "Head of Operations",
        "Head of HR",
        "Head of Finance",
        "Head of Compliance"
      ]
    },
    {
      category: "Specialist Strategic Roles",
      list: [
        "transformation leaders",
        "turnaround leaders",
        "market expansion leads",
        "niche technical leaders",
        "confidential replacement hires",
        "high-impact commercial or operational appointments"
      ]
    }
  ];

  const benefits = [
    {
      title: "Higher Precision in Candidate Selection",
      desc: "We focus on alignment, leadership capability, strategic relevance, and long-term fit rather than relying only on active applicants.",
      icon: <Target className="w-7 h-7 text-gold" />
    },
    {
      title: "Access to Hard-to-Reach Talent",
      desc: "Executive-level and specialist candidates are often passive and require thoughtful, direct engagement rather than standard job advertising alone.",
      icon: <Globe className="w-7 h-7 text-gold" />
    },
    {
      title: "Greater Confidentiality",
      desc: "Sensitive hiring projects require discretion, controlled communication, and a more carefully managed search process.",
      icon: <Lock className="w-7 h-7 text-gold" />
    },
    {
      title: "Stronger Long-Term Hiring Outcomes",
      desc: "Leadership hires shape performance far beyond the role itself. A stronger process supports stronger business outcomes over time.",
      icon: <TrendingUp className="w-7 h-7 text-gold" />
    },
    {
      title: "Reduced Hiring Risk",
      desc: "A poor leadership hire can be expensive in terms of time, cost, team impact, and business momentum. Executive Search helps reduce that risk through a more rigorous process.",
      icon: <ShieldCheck className="w-7 h-7 text-gold" />
    },
    {
      title: "Better Market Intelligence",
      desc: "Executive Search also provides insight into talent availability, competitive positioning, and the expectations of senior-level candidates.",
      icon: <Search className="w-7 h-7 text-gold" />
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Discovery and Role Alignment",
      desc: "We begin by understanding the role, business priorities, leadership expectations, reporting structure, organizational context, and success profile."
    },
    {
      num: "02",
      title: "Search Strategy Development",
      desc: "We define the search scope, target market, ideal candidate profile, and outreach strategy based on the hiring requirement and business goals."
    },
    {
      num: "03",
      title: "Targeted Talent Identification",
      desc: "We identify relevant candidates through market mapping, direct search, networks, referrals, and strategic outreach."
    },
    {
      num: "04",
      title: "Evaluation and Shortlisting",
      desc: "We assess candidates based on experience, leadership capability, communication, strategic alignment, and role fit before presenting a focused shortlist."
    },
    {
      num: "05",
      title: "Client Review and Interview Support",
      desc: "We coordinate introductions, feedback flow, interview progression, and candidate communication to keep the process efficient and well-managed."
    },
    {
      num: "06",
      title: "Offer and Closing Support",
      desc: "We remain involved through final-stage discussions, alignment, and transition support to help secure the right outcome."
    }
  ];

  const pillars = [
    {
      title: "Discreet and Professional Delivery",
      desc: "We understand the sensitivity of confidential searches and critical leadership appointments.",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "Business-Aligned Search Strategy",
      desc: "We focus on the role in the context of the broader business, not just the job description alone.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Quality Over Volume",
      desc: "Executive Search is not about presenting the most profiles. It is about presenting the right profiles.",
      icon: <Scale className="w-6 h-6" />
    },
    {
      title: "Broader Talent Access",
      desc: "We engage beyond active applicants to identify relevant, high-potential, and hard-to-reach talent.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Premium Candidate Experience",
      desc: "Senior-level candidates expect professionalism, clarity, and respect throughout the process, and that experience reflects your brand.",
      icon: <Gem className="w-6 h-6" />
    },
    {
      title: "Cross-Industry Perspective",
      desc: "Our broad market understanding supports leadership hiring across industries, business models, and growth stages.",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const faqs = [
    {
      question: "What is executive search?",
      answer: "Executive Search is a specialized recruitment service used to identify and attract leadership, confidential, niche, and high-impact talent for roles that require a more strategic and targeted hiring approach."
    },
    {
      question: "When should a company use executive search?",
      answer: "A company should consider executive search when hiring for senior leadership positions, confidential appointments, specialist roles, or business-critical positions where quality and discretion are especially important."
    },
    {
      question: "How is executive search different from regular recruitment?",
      answer: "Executive Search is typically more targeted, research-driven, and selective. It often focuses on passive candidates, confidential hiring needs, and senior or highly strategic roles."
    },
    {
      question: "Can NAYA Staffing support confidential executive hiring?",
      answer: "Yes. NAYA Staffing’s Executive Search service is designed to support confidential, sensitive, and strategically important hiring projects with professionalism and discretion."
    },
    {
      question: "What types of roles can be filled through executive search?",
      answer: "Executive Search can support C-level roles, vice president positions, directors, functional heads, senior managers, and niche strategic appointments depending on the company’s needs."
    },
    {
      question: "Does executive search only apply to large enterprises?",
      answer: "No. While large organizations often use executive search, startups, scaling businesses, and mid-sized companies can also benefit when they need the right leadership hire for a key stage of growth."
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
              <Gem className="w-4 h-4 text-gold animate-pulse" />
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Leadership & Critical Hiring Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl xl:text-8xl font-black tracking-tighter mb-6 leading-none">
            <Typewriter>
              Executive Search for <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                High-Impact Hiring Decisions
              </span>
            </Typewriter>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl font-light leading-relaxed mb-10 italic">
              "Finding the right leadership is crucial for driving your organization’s success."
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
                Built for leadership hiring, confidential searches, and business-critical appointments across evolving industries and markets.
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
                A More Strategic Approach <br className="hidden md:inline" />
                <span className="text-gold">to Executive Hiring</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            {/* Paragraphs Column */}
            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Leadership hiring is one of the most important decisions an organization can make. Senior appointments influence strategy, culture, operational performance, growth, and long-term business outcomes. When the role is critical, the hiring process must go beyond speed and volume. It requires market insight, careful evaluation, strong positioning, and a clear understanding of what success looks like in the role.
              </p>
              <p>
                NAYA Staffing’s Executive Search service is designed for those high-stakes hiring needs. We support employers seeking exceptional talent for leadership, specialist, confidential, and hard-to-fill positions where standard recruitment methods may not be enough. Our approach combines search strategy, targeted outreach, candidate assessment, and close alignment with the client’s hiring goals.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                Rather than simply presenting available candidates, executive search focuses on identifying the right talent with the right experience, leadership capability, and organizational fit. This makes it especially valuable for companies that need a more selective, discreet, and outcome-driven recruitment process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHEN EXECUTIVE SEARCH IS THE RIGHT CHOICE */}
      <section className="py-32 bg-navy relative overflow-hidden border-t border-white/5">
        <div className="btn-rotating-border absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 btn-auto-sheen border border-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2 btn-auto-sheen border border-white/5">
              Decision Metrics
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              When to Use <span className="text-gold">Executive Search</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Executive Search is most valuable when a role carries significant business impact, requires a niche combination of skills, or demands a level of confidentiality and precision that general recruitment cannot consistently provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6">
                  <div className="btn-rotating-border w-14 h-14 bg-white/5 border border-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/5 group-hover:text-white hover:text-gold transition-all duration-500 btn-auto-sheen border border-white/5">
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

      {/* 4. ROLES WE HELP FILL */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Executive and Critical Roles We <span className="text-gold">Help Employers Hire</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports executive and strategic hiring across a broad range of leadership and specialist positions. The exact scope may vary by industry and business model, but executive search is commonly used for roles such as:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
            {roles.map((roleGroup, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-white/[0.01] border border-white/5 hover:border-gold/20 transition-all duration-500 flex flex-col h-full">
                <h3 className="text-gold font-black text-xs uppercase tracking-widest mb-6 pb-4 border-b border-white/5">
                  {roleGroup.category}
                </h3>
                <ul className="space-y-4 grow">
                  {roleGroup.list.map((role, roleIdx) => (
                    <li key={roleIdx} className="flex items-start gap-3 text-slate-300 font-bold text-sm leading-relaxed group-hover:text-white transition-colors">
                      <div className="btn-rotating-border w-1.5 h-1.5 rounded-full bg-white/50 mt-2 shrink-0 btn-auto-sheen border border-white/5"></div>
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHAT EMPLOYERS GAIN FROM OUR EXECUTIVE SEARCH SERVICE */}
      <section className="py-32 bg-navy relative overflow-hidden border-t border-white/5">
        <div className="btn-rotating-border absolute top-1/2 right-0 w-[500px] h-[500px] bg-white/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 btn-auto-sheen border border-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
            
            {/* Sticky Header Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8 animate-fade-up">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-2 shadow-xl backdrop-blur-md btn-auto-sheen border border-white/5">
                Strategic Benefits
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                What Executive <br />Search <span className="text-gold">Delivers.</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-24 bg-white/5 rounded-full shadow-lg shadow-gold/20 btn-auto-sheen border border-white/5"></div>
              <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed border-l-2 border-white/10 pl-8 max-w-lg">
                Executive Search is designed to improve quality, reduce risk, and create stronger hiring outcomes for roles that matter most.
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

      {/* 6. OUR EXECUTIVE SEARCH PROCESS */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-28 space-y-6">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2 btn-auto-sheen border border-white/5">
              Our Methodology
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Our Executive <span className="text-gold">Search Process</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Our executive search process is built to create clarity, confidence, and stronger decision-making throughout the hiring journey. While each search may vary depending on the role and business context, our approach is grounded in strategy, alignment, and precision.
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

      {/* 7. WHY CHOOSE NAYA STAFFING FOR EXECUTIVE SEARCH */}
      <section className="py-32 bg-navy relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Trust NAYA Staffing <span className="text-gold">for Executive Hiring</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Executive hiring requires more than sourcing ability. It requires judgment, discretion, business understanding, and a process that reflects the importance of the role. NAYA Staffing’s executive search approach is designed around those expectations.
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

      {/* 8. INDUSTRY COVERAGE SECTION */}
      <section className="py-24 relative overflow-hidden bg-navy-dark border-t border-white/5">
        <div className="container mx-auto px-6 max-w-5xl text-center space-y-8 animate-fade-up">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
              Cross-Industry Competence
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              Executive Search Across <span className="text-gold">Diverse Industries</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-slate-400 text-lg leading-relaxed font-semibold max-w-4xl mx-auto">
              NAYA Staffing supports executive and strategic hiring across a broad range of industries including technology, healthcare, industrial, hospitality, professional services, education, insurance, retail, construction, marketing, and sales-led environments. This allows us to support organizations seeking leaders who can operate effectively within both industry-specific and cross-functional business contexts.
            </p>
            <div className="pt-6">
               <Link href="/industries" className="btn-rotating-border px-10 py-5 bg-white/5 hover:bg-white/10 text-white hover:text-gold font-black rounded-full transition-all inline-flex items-center gap-4 uppercase tracking-[0.2em] text-xs btn-auto-sheen border border-white/5">
                  Explore Industries We Serve <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
        </div>
      </section>

      {/* 13. DIFFERENCE BETWEEN EXECUTIVE SEARCH AND STANDARD RECRUITMENT */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
              How Executive Search Differs <br />
              <span className="text-gold">From Standard Recruitment</span>
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto"></div>
          </div>
          <div className="space-y-8 text-slate-300 font-medium text-lg leading-relaxed text-center">
            <p>
              Standard recruitment often works best for broader hiring needs where the market is more accessible and the talent pool is more active. Executive Search is different. It is typically more targeted, more research-driven, and more selective in its execution.
            </p>
            <p>
              For senior, sensitive, or highly specialized roles, relying only on job postings and inbound applications may not reach the strongest talent. Executive Search addresses that challenge by using direct outreach, tailored positioning, market insight, and a more focused evaluation process.
            </p>
            <p className="text-slate-400 border-t border-white/5 pt-8 font-semibold italic text-base">
              This does not mean every role requires executive search. It means the right hiring model should match the importance, complexity, and sensitivity of the role.
            </p>
          </div>
        </div>
      </section>

      {/* 9. FAQs SECTION */}
      <section className="bg-navy py-32 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="text-center mb-20 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-6 shadow-xl backdrop-blur-md btn-auto-sheen border border-white/5">
                Executive search FAQ
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

      {/* 10. FINAL CTA SECTION */}
      <section className="py-32 relative overflow-hidden bg-navy-dark border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="btn-rotating-border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.03] blur-[200px] rounded-full group-hover:bg-white/[0.05] transition-all duration-1000 btn-auto-sheen border border-white/5"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-navy-light/10 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-panel p-12 md:p-24 rounded-[4rem] text-center border border-gold/20 shadow-2xl shadow-gold/10">
            <div className="btn-rotating-border inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 text-white hover:text-gold mb-10 shadow-2xl shadow-gold/30 btn-auto-sheen border border-white/5">
              <Gem className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85]">
              Make Your Next Leadership Hire <br/>
              <span className="text-gold">With Greater Confidence</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              When the role is critical, the hiring process should reflect it. NAYA Staffing’s Executive Search service helps employers approach leadership and strategic hiring with greater precision, stronger market access, and a more professional recruitment experience.
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
