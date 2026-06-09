import { Typewriter } from "@/components/Typewriter";
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
  ArrowUpRight
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import TestimonialSlider from '@/components/TestimonialSlider';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "Permanent Recruitment Agency for Long-Term Hiring | NAYA Staffing",
  description: "NAYA Staffing provides permanent recruitment services for employers seeking full-time talent across industries. Hire skilled professionals for long-term growth with a strategic recruitment partner.",
  keywords: [
    "permanent recruitment",
    "permanent recruitment agency",
    "permanent staffing services",
    "full-time hiring agency",
    "direct hire recruitment",
    "permanent staffing agency",
    "recruitment agency for long-term hiring",
    "employee recruitment services",
    "long-term hiring solutions",
    "permanent employee hiring",
    "full-time recruitment services",
    "talent acquisition partner"
  ]
};

export default function PermanentRecruitmentPage() {
  const useCases = [
    {
      title: "Building Long-Term Teams",
      desc: "When your organization is expanding and needs full-time employees who can contribute consistently over the long term, permanent recruitment is the most suitable hiring model.",
      icon: <Building className="w-8 h-8 text-gold" />
    },
    {
      title: "Replacing Key Employees",
      desc: "If an important team member leaves, businesses often need a reliable replacement who can quickly integrate into the team and maintain operational continuity.",
      icon: <UserCheck className="w-8 h-8 text-gold" />
    },
    {
      title: "Hiring for Core Business Functions",
      desc: "Permanent Recruitment is ideal for business-critical roles in operations, sales, finance, HR, customer service, technology, and leadership support functions.",
      icon: <Briefcase className="w-8 h-8 text-gold" />
    },
    {
      title: "Scaling Business Capacity",
      desc: "As businesses grow, permanent hiring supports stronger internal capability and helps reduce overreliance on short-term solutions.",
      icon: <TrendingUp className="w-8 h-8 text-gold" />
    },
    {
      title: "Improving Stability and Retention",
      desc: "For roles where continuity, ownership, and long-term involvement matter, full-time hires often provide stronger value than temporary arrangements.",
      icon: <ShieldCheck className="w-8 h-8 text-gold" />
    }
  ];

  const roles = [
    {
      category: "Operations & Business Support Roles",
      list: [
        "Operations Coordinator",
        "Administrative Staff",
        "Customer Support Professionals",
        "Office Management Roles",
        "HR Support Roles",
        "Procurement and Supply Chain Roles"
      ]
    },
    {
      category: "Commercial Roles",
      list: [
        "Sales Executives",
        "Business Development Professionals",
        "Account Managers",
        "Marketing Specialists",
        "Client Success Roles",
        "Commercial Operations Staff"
      ]
    },
    {
      category: "Technical & Specialist Roles",
      list: [
        "Software Developers",
        "IT Support Professionals",
        "Data and Systems Roles",
        "Digital Marketing Specialists",
        "Analysts",
        "Compliance and Risk Support Roles"
      ]
    },
    {
      category: "Professional & Functional Roles",
      list: [
        "Finance Professionals",
        "HR Professionals",
        "Legal Support Staff",
        "Project Coordinators",
        "Recruitment Specialists",
        "Departmental Supervisors"
      ]
    },
    {
      category: "Mid-Level and Senior Roles",
      list: [
        "Team Leads",
        "Managers",
        "Senior Specialists",
        "Functional Heads",
        "Growth and Expansion Roles"
      ]
    }
  ];

  const benefits = [
    {
      title: "Long-Term Team Stability",
      desc: "Permanent employees provide continuity, ownership, and deeper integration into the business, which supports smoother day-to-day operations and stronger long-term capability.",
      icon: <ShieldCheck className="w-7 h-7 text-gold" />
    },
    {
      title: "Better Cultural and Role Alignment",
      desc: "Because permanent hires are intended to stay and grow within the organization, the recruitment process can focus more closely on alignment, working style, and long-term potential.",
      icon: <Users className="w-7 h-7 text-gold" />
    },
    {
      title: "Reduced Turnover Risk",
      desc: "A structured recruitment process helps employers identify candidates who are more likely to succeed, stay engaged, and contribute sustainably.",
      icon: <TrendingUp className="w-7 h-7 text-gold" />
    },
    {
      title: "Improved Workforce Planning",
      desc: "Permanent hiring supports stable team structure, succession planning, and future growth.",
      icon: <Target className="w-7 h-7 text-gold" />
    },
    {
      title: "Stronger Employer Brand Experience",
      desc: "A professional, well-managed recruitment experience reflects positively on the employer and helps attract better candidates.",
      icon: <Award className="w-7 h-7 text-gold" />
    },
    {
      title: "More Strategic Hiring Decisions",
      desc: "With the right recruitment partner, businesses can make full-time hiring decisions with better market insight, clearer shortlists, and stronger confidence.",
      icon: <Search className="w-7 h-7 text-gold" />
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Understand the Role and Hiring Need",
      desc: "We begin by understanding the position, responsibilities, reporting line, required experience, team context, and what success looks like in the role."
    },
    {
      num: "02",
      title: "Define the Candidate Profile",
      desc: "We help shape a realistic and effective hiring profile based on both technical requirements and long-term fit."
    },
    {
      num: "03",
      title: "Source and Attract Talent",
      desc: "We identify suitable candidates through targeted sourcing, recruiter networks, databases, referrals, and relevant recruitment channels."
    },
    {
      num: "04",
      title: "Screen and Shortlist Candidates",
      desc: "We evaluate candidates based on relevant experience, communication, suitability, and role alignment before presenting a focused shortlist."
    },
    {
      num: "05",
      title: "Coordinate Interviews and Feedback",
      desc: "We support scheduling, candidate communication, feedback flow, and hiring momentum so the process stays efficient and organized."
    },
    {
      num: "06",
      title: "Support the Hiring Decision",
      desc: "We remain involved through final discussions, offer-stage support, and transition coordination to help improve placement success."
    }
  ];

  const pillars = [
    {
      title: "Quality-Focused Candidate Selection",
      desc: "We focus on relevance, fit, and long-term hiring value rather than simply forwarding large numbers of profiles.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Business-Aligned Recruitment",
      desc: "We take time to understand the wider business context behind the role so the search is more accurate and more useful.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Efficient, Structured Delivery",
      desc: "Our process is designed to reduce hiring friction while helping employers stay focused on the most suitable candidates.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Broad Role and Industry Coverage",
      desc: "We support permanent recruitment across multiple industries and functional areas, making the service scalable and flexible.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Professional Candidate Experience",
      desc: "How candidates experience the hiring process influences your employer brand and your ability to secure strong talent.",
      icon: <ThumbsUp className="w-6 h-6" />
    },
    {
      title: "Long-Term Hiring Perspective",
      desc: "We support permanent hiring with a long-view mindset, helping employers build teams that support growth and continuity.",
      icon: <Network className="w-6 h-6" />
    }
  ];

  const audiences = [
    {
      title: "Growing Businesses",
      desc: "Organizations expanding their headcount and building lasting internal capability."
    },
    {
      title: "Established Employers",
      desc: "Companies replacing key employees or strengthening core departments."
    },
    {
      title: "Multi-Department Hiring Needs",
      desc: "Businesses hiring across sales, operations, marketing, administration, technology, finance, HR, and customer support."
    },
    {
      title: "Companies Focused on Retention and Continuity",
      desc: "Employers who want team members to stay, grow, and contribute over time."
    },
    {
      title: "Employers Seeking Better Hiring Structure",
      desc: "Organizations that want a more managed, efficient, and strategic recruitment process for full-time roles."
    }
  ];

  const faqs = [
    {
      question: "What is permanent recruitment?",
      answer: "Permanent recruitment is the process of hiring full-time employees for long-term roles within a business. It focuses on finding candidates who can support ongoing operations and future growth."
    },
    {
      question: "When should a company use permanent recruitment?",
      answer: "A company should use permanent recruitment when it needs full-time staff for long-term business functions, team growth, replacement hiring, or stable workforce expansion."
    },
    {
      question: "How is permanent recruitment different from contract staffing?",
      answer: "Permanent recruitment is for full-time, ongoing roles, while contract staffing is designed for temporary, flexible, or project-based hiring needs."
    },
    {
      question: "What types of roles can NAYA Staffing fill through permanent recruitment?",
      answer: "NAYA Staffing supports permanent hiring across administrative, operational, technical, commercial, professional, and mid-level to senior roles depending on the employer’s needs."
    },
    {
      question: "Why use a recruitment agency for permanent hiring?",
      answer: "A recruitment agency can help employers save time, improve candidate quality, access broader talent pools, and manage the hiring process more efficiently."
    },
    {
      question: "Does NAYA Staffing support permanent hiring across multiple industries?",
      answer: "Yes. NAYA Staffing supports permanent recruitment across a wide range of industries and business functions."
    }
  ];

  const relatedServices = [
    { name: "Executive Search", href: "/executive-search", desc: "Premium recruitment solutions for leadership and business-critical positions." },
    { name: "Contract Staffing", href: "/contract-staffing", desc: "Flexible staffing options for project-based and temporary talent needs." },
    { name: "Recruitment Process Outsourcing (RPO)", href: "/recruitment-process-outsourcing", desc: "End-to-end recruitment management to scale your hiring operations." },
    { name: "Screening & Assessment", href: "/screening-assessment", desc: "Structured testing and evaluation to ensure quality hiring choices." }
  ];

  const relatedMainPages = [
    { name: "Services Overview", href: "/services" },
    { name: "Employers & Solutions", href: "/employer-solutions" },
    { name: "Our Proven Process", href: "/our-proven-process" },
    { name: "Industries Overview", href: "/industries" },
    { name: "Contact Us", href: "/contact-us" }
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Long-Term Hiring Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl xl:text-8xl font-black tracking-tighter mb-6 leading-none uppercase">
            <Typewriter>
              Permanent Recruitment for <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Stronger, More Sustainable Team Growth
              </span>
            </Typewriter>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
              NAYA Staffing’s Permanent Recruitment service helps employers hire full-time professionals who can contribute to long-term business success. Whether you are filling key vacancies, expanding your workforce, or building out new teams, we provide a structured and strategic recruitment approach focused on quality, alignment, and long-term fit.
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
                Built for businesses seeking dependable, full-time talent across industries, functions, and growth stages.
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
                A Smarter Approach <br className="hidden md:inline" />
                <span className="text-gold">to Full-Time Hiring</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            {/* Paragraphs Column */}
            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Permanent Recruitment is one of the most important hiring models for businesses looking to build stable, high-performing teams. Full-time hires shape productivity, culture, continuity, and long-term business capability. When employers are hiring for permanent roles, the goal is not simply to fill a vacancy. It is to secure the right person who can add sustained value over time.
              </p>
              <p>
                NAYA Staffing’s Permanent Recruitment service is designed to support that outcome. We help employers identify, attract, assess, and hire full-time talent for a wide range of roles across industries and departments. Our approach balances hiring efficiency with candidate quality so businesses can move forward with greater confidence.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                Rather than treating permanent hiring as a transactional process, we position it as a strategic business decision. This means taking the time to understand the role, the team, the business environment, and the type of candidate who is most likely to succeed in the position over the long term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHEN PERMANENT RECRUITMENT IS THE RIGHT CHOICE */}
      <section className="py-32 bg-navy relative overflow-hidden border-t border-white/5">
        <div className="btn-rotating-border absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 btn-auto-sheen border border-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2 btn-auto-sheen border border-white/5">
              Decision Metrics
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              When to Use <span className="text-gold">Permanent Recruitment</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Permanent Recruitment is the right solution when your business needs long-term talent, stronger team continuity, and employees who can grow with the organization over time.
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
              Permanent Roles We <span className="text-gold">Help Employers Hire</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports permanent hiring across a wide range of positions, from entry-level and mid-level professionals to senior specialists and department leaders, depending on the employer’s needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-8">
            {roles.map((roleGroup, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-white/[0.01] border border-white/5 hover:border-gold/20 transition-all duration-500 flex flex-col h-full">
                <h3 className="text-gold font-black text-xs uppercase tracking-widest mb-6 pb-4 border-b border-white/5 min-h-[50px] flex items-center">
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

      {/* 5. WHAT EMPLOYERS GAIN FROM OUR PERMANENT RECRUITMENT SERVICE */}
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
                What Permanent <br />Recruitment <span className="text-gold">Delivers.</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-24 bg-white/5 rounded-full shadow-lg shadow-gold/20 btn-auto-sheen border border-white/5"></div>
              <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed border-l-2 border-white/10 pl-8 max-w-lg">
                Permanent hiring is about more than filling open roles. It is about building reliable teams, reducing disruption, and strengthening business performance over time.
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

      {/* 6. OUR PERMANENT RECRUITMENT PROCESS */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-28 space-y-6">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2 btn-auto-sheen border border-white/5">
              Our Methodology
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Our Permanent <span className="text-gold">Recruitment Process</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Our permanent recruitment process is designed to help employers make stronger full-time hiring decisions through better alignment, candidate quality, and communication throughout the process.
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

      {/* 7. WHY CHOOSE NAYA STAFFING FOR PERMANENT HIRING */}
      <section className="py-32 bg-navy relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose NAYA Staffing <span className="text-gold">for Permanent Recruitment</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Permanent hiring decisions affect productivity, team dynamics, retention, and long-term business performance. NAYA Staffing’s recruitment approach is built to support those decisions with more structure, clarity, and hiring confidence.
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

      {/* 8. DIFFERENCE BETWEEN PERMANENT RECRUITMENT AND CONTRACT STAFFING */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
              Permanent Recruitment vs <span className="text-gold">Contract Staffing</span>
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto"></div>
          </div>
          <div className="space-y-8 text-slate-300 font-medium text-lg leading-relaxed text-center">
            <p>
              Permanent Recruitment is designed for businesses seeking full-time employees for ongoing, long-term roles. It is most suitable when the position is part of the company’s core structure and the goal is stability, continuity, and long-term contribution.
            </p>
            <p>
              Contract Staffing, by contrast, is usually used for temporary, project-based, urgent, seasonal, or flexible workforce needs. It helps employers quickly access talent without making a full-time hiring commitment.
            </p>
            <p className="text-slate-400 border-t border-white/5 pt-8 font-semibold italic text-base">
              Both models have value. The right choice depends on whether the business need is long-term and structural or temporary and flexible. NAYA Staffing supports both, helping employers choose the most suitable hiring path for the role.
            </p>
          </div>
        </div>
      </section>

      {/* 9. WHO THIS SERVICE IS BEST FOR */}
      <section className="py-32 bg-navy relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Who Permanent Recruitment <span className="text-gold">Is Best For</span>
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

      {/* 10. INDUSTRY COVERAGE SECTION */}
      <section className="py-24 relative overflow-hidden bg-navy-dark border-t border-white/5">
        <div className="container mx-auto px-6 max-w-5xl text-center space-y-8 animate-fade-up">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
              Cross-Industry Competence
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              Permanent Recruitment Across <span className="text-gold">Diverse Industries</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-slate-400 text-lg leading-relaxed font-semibold max-w-4xl mx-auto">
              NAYA Staffing provides permanent recruitment support across a broad range of industries including information technology, healthcare, industrial, hospitality, professional services, education, insurance, retail and e-commerce, construction, marketing, and sales-led business environments. This broad capability allows us to support long-term hiring needs across both operational and specialized functions.
            </p>
            <div className="pt-6">
               <Link href="/industries" className="btn-rotating-border px-10 py-5 bg-white/5 hover:bg-white/10 text-white hover:text-gold font-black rounded-full transition-all inline-flex items-center gap-4 uppercase tracking-[0.2em] text-xs btn-auto-sheen border border-white/5">
                  Explore Industries We Serve <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
        </div>
      </section>

      {/* 11. FAQ SECTION */}
      <section className="bg-navy py-32 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="text-center mb-20 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-6 shadow-xl backdrop-blur-md btn-auto-sheen border border-white/5">
                Permanent Recruitment FAQ
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

      {/* 12. INTERNAL LINKING SECTION */}
      <section className="py-24 bg-navy-dark border-t border-white/5 relative overflow-hidden">
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

      {/* 13. FINAL CTA SECTION */}
      <section className="py-32 relative overflow-hidden bg-navy border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="btn-rotating-border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.03] blur-[200px] rounded-full group-hover:bg-white/[0.05] transition-all duration-1000 btn-auto-sheen border border-white/5"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-navy-light/10 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-panel p-12 md:p-24 rounded-[4rem] text-center border border-gold/20 shadow-2xl shadow-gold/10">
            <div className="btn-rotating-border inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 text-white hover:text-gold mb-10 shadow-2xl shadow-gold/30 btn-auto-sheen border border-white/5">
              <Briefcase className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Build Stronger Teams With <br/>
              <span className="text-gold">Better Long-Term Hiring</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              When your business needs dependable full-time talent, the recruitment process should be structured, thoughtful, and aligned with long-term goals. NAYA Staffing helps employers approach permanent hiring with greater clarity, stronger candidate access, and a more professional hiring experience.
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
