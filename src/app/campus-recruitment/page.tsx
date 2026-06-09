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
  title: "Campus Recruitment Services for Graduate & Early Talent Hiring | NAYA Staffing",
  description: "NAYA Staffing provides campus recruitment services to help employers hire graduates, interns, trainees, and entry-level professionals through structured early-talent recruitment solutions.",
  keywords: [
    "campus recruitment services",
    "campus hiring solutions",
    "graduate recruitment services",
    "graduate hiring agency",
    "early talent recruitment",
    "internship recruitment services",
    "entry-level hiring support",
    "campus hiring agency",
    "university recruitment support",
    "trainee hiring solutions",
    "fresher recruitment services",
    "graduate talent pipeline",
    "student recruitment support",
    "campus talent acquisition",
    "early-career hiring solutions",
    "entry-level workforce planning"
  ]
};

export default function CampusRecruitmentPage() {
  const reasons = [
    {
      title: "It Builds Future Talent Pipelines",
      desc: "Employers can create a consistent flow of early-career talent that supports long-term team development and succession planning.",
      icon: <TrendingUp className="w-8 h-8 text-gold" />
    },
    {
      title: "It Supports Workforce Growth at Scale",
      desc: "Campus recruitment can help organizations hire across multiple entry-level roles more efficiently and with better structure.",
      icon: <Users className="w-8 h-8 text-gold" />
    },
    {
      title: "It Helps Develop Talent Early",
      desc: "Hiring graduates and trainees earlier gives businesses the opportunity to shape skills, performance habits, and long-term alignment from the beginning.",
      icon: <ShieldCheck className="w-8 h-8 text-gold" />
    },
    {
      title: "It Can Reduce Overdependence on Experienced Hiring",
      desc: "While experienced professionals remain important, early-talent hiring creates another valuable route for workforce building.",
      icon: <Briefcase className="w-8 h-8 text-gold" />
    },
    {
      title: "It Supports Employer Brand Visibility Among Emerging Talent",
      desc: "A structured campus recruitment presence can improve how the company is seen by students, graduates, and early-career candidates.",
      icon: <Globe className="w-8 h-8 text-gold" />
    },
    {
      title: "It Strengthens Long-Term Workforce Resilience",
      desc: "A balanced hiring strategy often includes both immediate-experience hires and future-pipeline talent, and campus recruitment helps support that mix.",
      icon: <Target className="w-8 h-8 text-gold" />
    }
  ];

  const useCases = [
    {
      title: "When Building Graduate or Trainee Programs",
      desc: "Organizations developing formal entry-level hiring pathways can use campus recruitment to create a more consistent talent source."
    },
    {
      title: "When Hiring for Junior or Entry-Level Roles",
      desc: "Businesses looking to recruit fresh graduates or early-career professionals can benefit from a more structured campus hiring model."
    },
    {
      title: "When Expanding Future Workforce Planning",
      desc: "Campus recruitment helps employers think beyond immediate vacancies and invest in future capability."
    },
    {
      title: "When Hiring at Volume for Early-Career Talent",
      desc: "Companies hiring multiple junior professionals can use campus recruitment to improve efficiency and structure."
    },
    {
      title: "When Strengthening Long-Term Team Development",
      desc: "Employers who want to develop talent internally over time can use campus hiring as a strong starting point."
    },
    {
      title: "When Building Employer Visibility With Emerging Talent",
      desc: "Organizations that want to improve awareness and attractiveness among students and graduates can benefit from a more intentional campus hiring presence."
    }
  ];

  const servicesInclude = [
    {
      title: "Graduate Hiring Support",
      desc: "Recruitment support for recent graduates entering the workforce across business, technical, operational, and commercial functions.",
      icon: <Award className="w-6 h-6 text-gold" />
    },
    {
      title: "Internship and Trainee Hiring Support",
      desc: "Support for businesses hiring interns, trainees, and early-stage professionals as part of structured workforce development.",
      icon: <Settings className="w-6 h-6 text-gold" />
    },
    {
      title: "Entry-Level Talent Sourcing",
      desc: "Broader sourcing and candidate pipeline development for junior and early-career roles.",
      icon: <Globe className="w-6 h-6 text-gold" />
    },
    {
      title: "Early-Talent Screening and Evaluation",
      desc: "Structured review support to help employers assess potential, communication, learning ability, and role alignment.",
      icon: <ShieldCheck className="w-6 h-6 text-gold" />
    },
    {
      title: "Volume Hiring Support for Junior Roles",
      desc: "Recruitment support for employers hiring multiple early-career candidates in a more organized way.",
      icon: <Users className="w-6 h-6 text-gold" />
    },
    {
      title: "Employer Positioning for Emerging Talent",
      desc: "Support in presenting opportunities clearly and attractively to student and graduate audiences.",
      icon: <FileText className="w-6 h-6 text-gold" />
    },
    {
      title: "Connection to Wider Recruitment Services",
      desc: "Campus Recruitment can work alongside screening and assessment, employer branding, RPO, permanent recruitment, and diversity hiring depending on the employer’s needs.",
      icon: <Activity className="w-6 h-6 text-gold" />
    }
  ];

  const benefits = [
    {
      title: "Stronger Early-Talent Pipelines",
      desc: "Employers can build a clearer and more sustainable flow of junior talent into the business.",
      icon: <TrendingUp className="w-7 h-7 text-gold" />
    },
    {
      title: "Better Long-Term Workforce Planning",
      desc: "Campus recruitment supports future capability development rather than relying only on reactive hiring.",
      icon: <Target className="w-7 h-7 text-gold" />
    },
    {
      title: "More Structured Entry-Level Hiring",
      desc: "A focused campus approach improves how early-career talent is sourced, screened, and brought into the business.",
      icon: <ShieldCheck className="w-7 h-7 text-gold" />
    },
    {
      title: "Improved Hiring Efficiency for Junior Roles",
      desc: "Organizations hiring at graduate or trainee level can manage recruitment more effectively with a clearer process.",
      icon: <Clock className="w-7 h-7 text-gold" />
    },
    {
      title: "Greater Opportunity to Develop Talent Internally",
      desc: "Bringing in promising early-career professionals allows employers to shape skills and performance over time.",
      icon: <Users className="w-7 h-7 text-gold" />
    },
    {
      title: "Stronger Employer Presence Among Emerging Talent",
      desc: "A more visible and professional campus recruitment strategy can improve candidate engagement and employer attractiveness.",
      icon: <Globe className="w-7 h-7 text-gold" />
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Understand the Talent Need",
      desc: "We begin by understanding the employer’s goals, role types, team structure, hiring volume, and how early-career talent fits into the broader workforce strategy."
    },
    {
      num: "02",
      title: "Define the Entry-Level Candidate Profile",
      desc: "We align on the kind of graduate, trainee, intern, or junior candidate the business wants to attract, including required capabilities, growth potential, and role expectations."
    },
    {
      num: "03",
      title: "Activate Early-Talent Sourcing Support",
      desc: "We support candidate sourcing, outreach, and pipeline development for campus and early-career hiring needs."
    },
    {
      num: "04",
      title: "Screen for Potential and Role Fit",
      desc: "We help evaluate candidates based on learning ability, communication, core strengths, role alignment, and broader potential."
    },
    {
      num: "05",
      title: "Support Hiring Coordination",
      desc: "We help keep the process organized through candidate flow, shortlist support, and recruitment coordination."
    },
    {
      num: "06",
      title: "Help Build Long-Term Talent Pathways",
      desc: "Our goal is to help employers use campus recruitment not just for immediate roles, but as part of a broader workforce growth strategy."
    }
  ];

  const pillars = [
    {
      title: "Future-Talent Recruitment Perspective",
      desc: "We treat campus hiring as a pipeline-building strategy, not just a junior hiring exercise.",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: "Structured Early-Career Hiring Support",
      desc: "We help employers create more consistency in how they attract, screen, and recruit emerging talent.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Focus on Potential as Well as Fit",
      desc: "For early-career roles, evaluating growth potential matters as much as reviewing existing experience.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Scalable Support for Junior Hiring",
      desc: "Whether the need is selective graduate hiring or broader early-career intake, the service can support different hiring volumes.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Useful Connection to Wider Recruitment Strategy",
      desc: "Campus Recruitment can align naturally with employer branding, screening, diversity hiring, and longer-term workforce planning.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Premium, Practical Recruitment Delivery",
      desc: "We help employers approach campus recruitment in a way that feels organized, credible, and business-relevant rather than informal or ad hoc.",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const audiences = [
    {
      title: "Employers Building Graduate or Trainee Pipelines",
      desc: "Organizations creating structured early-career pathways into the business."
    },
    {
      title: "Businesses Hiring for Entry-Level Roles",
      desc: "Companies that regularly recruit junior professionals across departments or functions."
    },
    {
      title: "Organizations Focused on Long-Term Workforce Growth",
      desc: "Employers that want to invest in future talent rather than relying only on experienced hits."
    },
    {
      title: "Companies Hiring Junior Talent at Scale",
      desc: "Businesses with repeated or volume-based early-career hiring needs."
    },
    {
      title: "Employers Strengthening Employer Visibility With Emerging Talent",
      desc: "Organizations that want to build stronger positioning among students, graduates, and early-career candidates."
    }
  ];

  const relatedServices = [
    { name: "Diversity Hiring", href: "/diversity-hiring", desc: "Widen talent access and build more representative pipelines." },
    { name: "Screening & Assessment", href: "/screening-assessment", desc: "Structured candidate screening and evaluation support." },
    { name: "Employer Branding", href: "/employer-branding", desc: "Strengthen how candidates perceive your company to attract better talent." },
    { name: "Permanent Recruitment", href: "/permanent-recruitment", desc: "Core long-term hiring solutions for ongoing business needs." },
    { name: "Recruitment Process Outsourcing (RPO)", href: "/recruitment-process-outsourcing", desc: "Strategic recruitment partnership for high-volume hiring." },
    { name: "Startup Hiring Solutions", href: "/startup-hiring-solutions", desc: "Flexible, growth-aware recruitment support for founders." },
    { name: "Talent Mapping", href: "/talent-mapping", desc: "Strategic market intelligence and recruitment planning services." },
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
      question: "What is campus recruitment?",
      answer: "Campus recruitment is a hiring approach focused on attracting and recruiting students, graduates, trainees, interns, and early-career professionals for entry-level or future-pipeline roles."
    },
    {
      question: "Why do companies use campus recruitment services?",
      answer: "Companies use campus recruitment services to build early-talent pipelines, hire for entry-level roles, support workforce planning, and create stronger future hiring capacity."
    },
    {
      question: "What types of roles can be filled through campus recruitment?",
      answer: "Campus recruitment can support junior, graduate, trainee, internship, and entry-level roles across a wide range of business functions and industries."
    },
    {
      question: "Is campus recruitment only for internships?",
      answer: "No. Campus recruitment can support internships, but it also applies to graduate hiring, trainee programs, and broader entry-level workforce development."
    },
    {
      question: "How does campus recruitment support long-term workforce planning?",
      answer: "It helps employers build talent pipelines earlier, develop promising professionals over time, and create more sustainable future hiring routes."
    },
    {
      question: "Can NAYA Staffing support campus recruitment across industries?",
      answer: "Yes. NAYA Staffing supports campus recruitment across multiple industries and early-career hiring environments."
    }
  ];

  const marqueeDimensions = [
    "graduate hiring", "internship programs", "trainee pathways", "entry-level talent",
    "fresher recruitment", "talent pipeline", "university relations", "early-career development"
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Graduate & Early Talent Hiring</span>
            </div>
            <h1 className="text-5xl md:text-6xl xl:text-8xl font-black tracking-tighter mb-6 leading-none uppercase">
            <Typewriter>
              Campus Recruitment for Stronger <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Future Talent Pipelines
              </span>
            </Typewriter>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
              NAYA Staffing’s Campus Recruitment service helps employers connect with graduates, interns, trainees, and early-career talent through a structured hiring approach designed for long-term workforce growth. Whether you are building graduate programs, hiring entry-level talent, or developing an early-career recruitment pipeline, we provide support that helps businesses attract and evaluate emerging professionals with greater clarity and consistency.
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
                Built for employers who want to invest in future talent, strengthen workforce planning, and hire early-career professionals with more structure and confidence.
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
                A Smarter Way to Build <br className="hidden md:inline" />
                <span className="text-gold">Early-Career Talent Pipelines</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            {/* Paragraphs Column */}
            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Campus recruitment gives employers an opportunity to build talent from the ground up. Rather than relying only on experienced hires, businesses can create stronger long-term workforce pipelines by identifying graduates, interns, trainees, and early-career professionals who have the potential to grow into valuable long-term contributors.
              </p>
              <p>
                For many employers, campus hiring is not only about filling junior roles. It is about creating future capability, building structured entry-level hiring channels, and developing talent that can grow with the business over time. When done well, it supports succession, pipeline planning, and long-term workforce stability.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                NAYA Staffing’s Campus Recruitment service is designed to help employers approach early-talent hiring more strategically. We support businesses that want to identify promising candidates, improve early-career recruitment structure, and build stronger access to graduate and entry-level talent markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT CAMPUS RECRUITMENT MEANS */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-8">
          <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
            The Definition
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
            What Is <span className="text-gold">Campus Recruitment?</span>
          </h2>
          <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-semibold">
            <p>
              Campus Recruitment is a hiring approach focused on attracting and recruiting students, recent graduates, interns, trainees, and early-career professionals from academic and early-talent environments.
            </p>
            <p>
              It is often used by employers who want to build entry-level teams, graduate programs, trainee pathways, or future talent pipelines that support longer-term workforce development. Rather than waiting until talent is already experienced and highly competitive in the market, campus recruitment allows businesses to engage potential earlier.
            </p>
            <p className="text-slate-400 border-t border-white/5 pt-8 font-normal italic text-base">
              For employers, this creates a more proactive recruitment model. It helps identify emerging talent, support workforce continuity, and create structured pathways into the organization for candidates with strong potential and development capacity.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHY CAMPUS RECRUITMENT MATTERS */}
      <section className="py-32 bg-navy-dark relative overflow-hidden border-t border-white/5">
        <div className="btn-rotating-border absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 btn-auto-sheen border border-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2 btn-auto-sheen border border-white/5">
              Why It Matters
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Campus Recruitment Matters <span className="text-gold">in Workforce Planning</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Campus recruitment is valuable not only for immediate hiring, but for building stronger workforce capability over time.
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

      {/* 5. WHEN CAMPUS RECRUITMENT IS THE RIGHT CHOICE */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              When to Use <span className="text-gold">Campus Recruitment</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Campus Recruitment is especially useful when employers want to build sustainable talent pipelines, hire for entry-level roles, or create early-career pathways into the business.
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
              What Our Campus Recruitment <span className="text-gold">Can Cover</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              The exact scope can vary depending on the employer’s hiring goals, but campus recruitment support can include several practical early-talent hiring elements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
            {servicesInclude.map((service, idx) => (
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

      {/* 7. WHAT EMPLOYERS GAIN FROM CAMPUS RECRUITMENT */}
      <section className="py-32 bg-navy relative overflow-hidden border-t border-white/5">
        <div className="btn-rotating-border absolute top-1/2 right-0 w-[500px] h-[500px] bg-white/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 btn-auto-sheen border border-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
            
            {/* Sticky Header Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8 animate-fade-up">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-2 shadow-xl backdrop-blur-md btn-auto-sheen border border-white/5">
                Growth Strategy
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                What Campus <br />Recruitment <span className="text-gold">Delivers.</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-24 bg-white/5 rounded-full shadow-lg shadow-gold/20 btn-auto-sheen border border-white/5"></div>
              <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed border-l-2 border-white/10 pl-8 max-w-lg">
                Campus recruitment helps employers think beyond short-term hiring by creating structured access to future talent.
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

      {/* 8. OUR CAMPUS RECRUITMENT APPROACH */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-28 space-y-6">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2 btn-auto-sheen border border-white/5">
              Our Process
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Our Approach to <span className="text-gold">Campus Recruitment</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Our campus recruitment approach is designed to help employers build stronger early-talent pipelines through a structured, practical, and growth-aligned process. We focus on helping businesses attract promising candidates and evaluate them in a way that supports long-term hiring value.
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

      {/* 9. WHY CHOOSE NAYA STAFFING FOR CAMPUS RECRUITMENT */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose NAYA Staffing <span className="text-gold">for Campus Recruitment</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Campus recruitment is most effective when it is structured, role-aware, and connected to long-term workforce needs. NAYA Staffing’s approach is designed around that objective.
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

      {/* 10. CAMPUS RECRUITMENT VS STANDARD HIRING */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
              Campus Recruitment vs <span className="text-gold">Standard Hiring</span>
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto"></div>
          </div>
          <div className="space-y-8 text-slate-300 font-medium text-lg leading-relaxed text-center">
            <p>
              Standard hiring is usually focused on filling immediate vacancies with candidates who already have direct professional experience. That approach is important, but it does not always build future talent depth.
            </p>
            <p>
              Campus Recruitment is different because it focuses on students, graduates, trainees, and early-career professionals who may bring strong potential but less direct work history. It is often used to create long-term hiring pipelines and future workforce strength.
            </p>
            <p className="text-slate-400 border-t border-white/5 pt-8 font-semibold italic text-base">
              This does not replace experienced hiring. It complements it. Many employers benefit from combining both models so they can balance immediate capability with future talent development.
            </p>
          </div>
        </div>
      </section>

      {/* 11. WHO THIS SERVICE IS BEST FOR */}
      <section className="py-32 bg-navy relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Who Campus Recruitment <span className="text-gold">Is Best For</span>
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

      {/* 12. SCROLLING MARQUEE OF GRADUATE DEVELOPMENT */}
      <section className="bg-navy-dark py-24 border-t border-white/5">
        <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
          <h3 className="text-3xl font-black text-white tracking-tighter">Graduate <span className="text-gold">Pipeline.</span></h3>
          <p className="text-slate-500 font-bold">Key Growth Milestones</p>
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
              Campus Recruitment Support Across <span className="text-gold">Diverse Industries</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-slate-400 text-lg leading-relaxed font-semibold max-w-4xl mx-auto">
              NAYA Staffing’s broader website structure is designed around wide industry coverage, which allows Campus Recruitment to be positioned as a cross-sector service rather than something limited to one narrow field. The approved page structure includes industry coverage across information technology, healthcare, industrial, hospitality, professional services, education, insurance, retail, construction, marketing, and sales-related environments, giving this service strong relevance wherever early-career talent pipelines matter.
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
                Campus FAQ
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
              Build Your Future Talent Pipeline <br/>
              <span className="text-gold">With Greater Structure</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              Early-career hiring is one of the smartest ways to invest in long-term workforce strength. NAYA Staffing’s Campus Recruitment service helps employers build stronger graduate and entry-level hiring pathways with better structure, clearer evaluation, and more confidence in future talent decisions.
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
