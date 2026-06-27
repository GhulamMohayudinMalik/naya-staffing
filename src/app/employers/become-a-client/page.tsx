"use client";

import { Typewriter } from "@/components/Typewriter";
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Send, 
  Clock, 
  Briefcase, 
  Target, 
  Award, 
  Globe, 
  Settings, 
  TrendingUp, 
  ShieldAlert,
  Users,
  Activity,
  Zap,
  Check,
  ChevronRight,
  HelpCircle,
  Mail,
  Phone,
  ArrowUpRight
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

export default function BecomeAClientPage() {
  const usStates = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
  ];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyEmail: '',
    phone: '',
    hiringCompany: '',
    state: '',
    howDidYouHear: '',
    positionsNeeded: '',
    service: '',
    questionOrRequest: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Client Inquiry Form Submitted:', formData);
    setFormSubmitted(true);
  };

  const clientTypes = [
    {
      title: "Growing Businesses",
      desc: "Companies expanding their teams and needing a recruitment partner that can support long-term growth.",
      icon: <TrendingUp className="w-8 h-8 text-gold" />
    },
    {
      title: "Startups and Growth-Stage Teams",
      desc: "Businesses building teams quickly and needing flexible, practical hiring support.",
      icon: <Zap className="w-8 h-8 text-gold" />
    },
    {
      title: "Established Employers",
      desc: "Organizations replacing key staff, strengthening departments, or improving recruitment structure.",
      icon: <Award className="w-8 h-8 text-gold" />
    },
    {
      title: "Project-Led and Multi-Role Hiring Teams",
      desc: "Businesses launching teams, opening locations, or hiring across multiple functions within a defined timeline.",
      icon: <Activity className="w-8 h-8 text-gold" />
    },
    {
      title: "Employers With Specialist Hiring Needs",
      desc: "Companies seeking executive talent, technical professionals, commercial hires, or hard-to-fill candidates.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      title: "Organizations Seeking a Long-Term Recruitment Partner",
      desc: "Employers that want more than one-off placements and need ongoing workforce support.",
      icon: <Users className="w-8 h-8 text-gold" />
    }
  ];

  const hiringNeeds = [
    {
      title: "Permanent Recruitment",
      desc: "For employers building stable, full-time teams and long-term workforce capability."
    },
    {
      title: "Contract Staffing",
      desc: "For businesses that need workforce flexibility, urgent support, project-based talent, or temporary coverage."
    },
    {
      title: "Executive and Specialist Hiring",
      desc: "For leadership, confidential, strategic, and difficult-to-fill roles."
    },
    {
      title: "Scalable Hiring Support",
      desc: "For employers using RPO, team build-out support, or project-based recruitment delivery."
    },
    {
      title: "Specialized Talent Access",
      desc: "For employers hiring across technical, sales, startup, remote, global, or niche markets."
    },
    {
      title: "Better Front-End Hiring Quality",
      desc: "For businesses that need stronger screening, assessment, talent mapping, or employer branding support."
    }
  ];

  const reasons = [
    {
      title: "Flexible Hiring Support",
      desc: "We offer multiple recruitment models so businesses can choose what fits the current hiring challenge."
    },
    {
      title: "Broader Recruitment Capability",
      desc: "From one critical role to multi-role hiring support, our solutions can adapt to different levels of need."
    },
    {
      title: "Cross-Industry Reach",
      desc: "The approved site structure already reflects broad support across multiple industries, which helps position NAYA Staffing as a versatile employer partner."
    },
    {
      title: "Structured, Professional Delivery",
      desc: "Employers need a recruitment partner that communicates clearly, manages process well, and improves hiring movement."
    },
    {
      title: "Modern Workforce Perspective",
      desc: "We help employers navigate permanent, flexible, remote, global, and project-based hiring realities."
    },
    {
      title: "Business-Aligned Recruitment Thinking",
      desc: "We focus on what the role and workforce challenge mean for the business, not just whether applications are being collected."
    }
  ];

  const steps = [
    {
      title: "Initial Inquiry or Consultation Request",
      desc: "The employer submits an inquiry, consultation request, or client-intake form."
    },
    {
      title: "Hiring Needs Review",
      desc: "NAYA Staffing reviews the role, team need, hiring urgency, industry context, and workforce goals."
    },
    {
      title: "Solution Alignment",
      desc: "We recommend the most suitable hiring model based on the business need, such as permanent recruitment, contract staffing, executive search, RPO, or project-based delivery."
    },
    {
      title: "Scope and Next-Step Discussion",
      desc: "The employer receives a clearer view of how the engagement would work and what the immediate next steps are."
    },
    {
      title: "Recruitment Process Activation",
      desc: "Once aligned, the hiring support process begins according to the agreed scope and solution type."
    }
  ];

  const faqs = [
    {
      question: "How does a business become a client of NAYA Staffing?",
      answer: "A business can become a client by submitting an inquiry, requesting a consultation, or using the client intake form on this page."
    },
    {
      question: "What types of employers can work with NAYA Staffing?",
      answer: "NAYA Staffing can support startups, growing businesses, established companies, project-led employers, and organizations hiring across multiple functions and industries."
    },
    {
      question: "What hiring needs can NAYA Staffing support?",
      answer: "NAYA Staffing supports permanent recruitment, contract staffing, executive search, RPO, turnkey recruitment projects, and a range of specialized hiring solutions."
    },
    {
      question: "What happens after a company reaches out?",
      answer: "After a company reaches out, the hiring need is reviewed, the most suitable recruitment solution is identified, and the next steps for engagement are clarified."
    },
    {
      question: "Does becoming a client mean using only one service model?",
      answer: "No. Employers can use different recruitment solutions depending on their hiring needs, workforce structure, and business stage."
    },
    {
      question: "Where does this page sit in the site structure?",
      answer: "This page sits under the Employers section as one of the three core employer/client pages, alongside Employer Solutions and Our Proven Process."
    }
  ];

  const relatedLinks = [
    { name: "Employers Overview", href: "/employers", desc: "Return to the main parent section for employers." },
    { name: "Employer Solutions", href: "/employers/employer-solutions", desc: "Browse the full recruitment services stack." },
    { name: "Our Proven Process", href: "/employers/our-proven-process", desc: "Read our structured candidate placement workflow." },
    { name: "Schedule Consultation", href: "/schedule-consultation", desc: "Book a strategic recruitment consultation." },
    { name: "Contact Us", href: "/contact-us", desc: "Get in touch with our operations desk." },
    { name: "Services Overview", href: "/services", desc: "Explore our candidate sourcing and vetting tools." }
  ];

  const industries = [
    "Information Technology",
    "Healthcare",
    "Industrial / Manufacturing",
    "Hospitality",
    "Professional Services",
    "Education",
    "Insurance",
    "Retail & E-Commerce",
    "Construction",
    "Marketing",
    "Sales",
    "Other"
  ];

  const hiringNeedOptions = [
    "Permanent Recruitment",
    "Contract Staffing",
    "Executive Search",
    "Recruitment Process Outsourcing (RPO)",
    "Turnkey Recruitment Project",
    "Specialist Hiring Support",
    "Not Sure Yet / Need Consultation"
  ];

  return (
    <main className="bg-[#040814] text-white min-h-screen selection:bg-gold selection:text-navy-dark font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 md:pt-32 xl:pt-40 pb-16 md:pb-20 xl:pb-24 overflow-hidden">
        <VideoBackground 
          src="/videos/hero.mp4" 
          overlayOpacity="bg-navy-dark/80"
        />
        
        {/* Ambient Glows */}
        <div className="btn-rotating-border absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 blur-[120px] rounded-full animate-pulse transition-all duration-5000 btn-auto-sheen border border-white/5"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-navy-light/20 blur-[150px] rounded-full animate-float transition-all duration-7000"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <div className="btn-rotating-border inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-gold/20 mb-6 backdrop-blur-md animate-fade-in-up btn-auto-sheen border border-white/5">
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Start Working With NAYA Staffing</span>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
            <Typewriter>
              Become a Client and Build <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                a Smarter Hiring Partnership
              </span>
            </Typewriter>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
              NAYA Staffing helps employers solve hiring challenges through flexible recruitment and workforce solutions built around real business needs. Whether you are hiring for one critical role, building a team, expanding into new markets, or looking for a more strategic and reliable hiring process, becoming a client is the first step toward a more strategic and reliable hiring process.
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up animate-delay-300">
              <a 
                href="#client-inquiry-form" 
                className="btn-rotating-border group relative px-8 py-4 bg-white/5 hover:bg-white/10 text-white hover:text-gold font-bold rounded-full transition-all duration-300 overflow-hidden shadow-2xl shadow-gold/20 btn-auto-sheen border border-white/5"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Become a Client <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <Link 
                href="/schedule-consultation" 
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 transition-all duration-300 backdrop-blur-xl btn-sheen"
              >
                Schedule Consultation
              </Link>
            </div>
            <div className="pt-10 border-t border-white/5 mt-10 max-w-xl mx-auto text-center animate-fade-in-up animate-delay-400">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 leading-loose">
                Built for employers who need more than resumes and want a recruitment partner aligned with business goals, workforce realities, and long-term hiring success.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-20">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold to-transparent"></div>
        </div>
      </section>

      {/* 2. CONVERSION INTRO SECTION */}
      <section className="py-24 relative overflow-hidden bg-navy-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 lg:gap-12 xl:gap-20 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
                Onboarding Portal
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                A Clear Starting Point for <br className="hidden md:inline" />
                <span className="text-gold">Employers Ready to Hire Better</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                For many businesses, the hardest part of working with a recruitment partner is not deciding whether hiring support is needed. It is knowing where to begin. A company may need one specialist hire, a broader staffing solution, contract support, executive recruitment, or a scalable workforce partner, but still want a clear and simple first step.
              </p>
              <p>
                That is the purpose of the Become a Client page. It is the main employer conversion page within your approved employer section, designed to give businesses a direct path into a working relationship with NAYA Staffing. Rather than overwhelming employers with process too early, this page focuses on clarity, confidence, and the value of starting the conversation.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                This page makes employers feel that NAYA Staffing is equipped to support real hiring needs across industries, role types, workforce models, and business stages, while also making the next step feel simple and professional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHO WE WORK WITH */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="btn-rotating-border absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 btn-auto-sheen border border-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Who We <span className="text-gold">Work With</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              We support a wide range of companies, growth stages, and project environments. Self-identify quickly below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {clientTypes.map((type, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6">
                  <div className="btn-rotating-border w-14 h-14 bg-white/5 border border-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/5 group-hover:text-white hover:text-gold transition-all duration-500 btn-auto-sheen border border-white/5">
                    {type.icon}
                  </div>
                  <h3 className="text-white font-black text-xl leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                    {type.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {type.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT HIRING NEEDS WE SUPPORT */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              What We Can Help <span className="text-gold">You Hire For</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports different kinds of hiring challenges. Explore our primary capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {hiringNeeds.map((need, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6">
                  <div className="btn-rotating-border w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-white/5 transition-colors btn-auto-sheen border border-white/5">
                    <Check className="w-5 h-5 text-gold group-hover:text-navy-dark" />
                  </div>
                  <h3 className="text-white font-black text-xl leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                    {need.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {need.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY BECOME A CLIENT OF NAYA STAFFING */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose to <span className="text-gold">Work With NAYA Staffing</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              The decision to become a client should feel like the beginning of a stronger hiring model, not just a transactional vendor relationship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {reasons.map((reason, i) => (
              <div key={i} className="group p-8 rounded-[36px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-500 hover:shadow-xl flex flex-col h-full justify-between">
                <div className="space-y-4">
                  <h4 className="text-white font-black text-lg group-hover:text-gold transition-colors tracking-tight uppercase">
                    {reason.title}
                  </h4>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHAT HAPPENS AFTER YOU REACH OUT */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              What Happens After <span className="text-gold">You Reach Out</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              We structure client onboarding to make engagement safe, fast, and organized. Here is the process flow:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 xl:gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-[#0B132B]/50 border border-white/5 hover:border-gold/30 transition-all duration-500 flex flex-col h-full justify-between">
                <div className="space-y-4">
                  <span className="text-gold font-bold text-xs">Step 0{idx + 1}</span>
                  <h4 className="text-white font-black text-base group-hover:text-gold transition-colors tracking-tight uppercase">
                    {step.title}
                  </h4>
                  <p className="text-slate-400 text-xs font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CLIENT INQUIRY FORM SECTION */}
      <section id="client-inquiry-form" className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass-panel p-8 md:p-16 rounded-[48px] border-white/5 shadow-2xl relative">
            <div className="btn-rotating-border absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-white/5 rounded-full flex items-center justify-center text-white hover:text-gold shadow-2xl animate-bounce btn-auto-sheen border border-white/5">
              <Send className="w-10 h-10" />
            </div>

            <div className="text-center mt-6 mb-12">
              <h2 className="text-4xl font-black text-white tracking-tight uppercase">Client Onboarding <span className="text-gold">Inquiry</span></h2>
              <p className="text-slate-400 font-medium leading-relaxed mt-2">
                Tell us what you are hiring for, and we will help you identify the most suitable recruitment solution for your business.
              </p>
            </div>

            {formSubmitted ? (
              <div className="text-center py-16 space-y-6">
                <div className="btn-rotating-border w-20 h-20 bg-white/10 border border-gold/30 rounded-full flex items-center justify-center text-gold mx-auto btn-auto-sheen border border-white/5">
                  <Check className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-black uppercase text-white">Thank You!</h3>
                <p className="text-slate-400 font-semibold max-w-md mx-auto">
                  Your client intake request has been received. Our team will review your business needs and contact you within 2–4 hours.
                </p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 transition-all text-xs uppercase tracking-widest btn-sheen"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 mt-4">
                <div className="grid md:grid-cols-2 gap-6 xl:gap-8">
                  {/* First Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gold ml-2">First Name *</label>
                    <input 
                      type="text" 
                      placeholder="First Name" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all btn-sheen"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  {/* Last Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gold ml-2">Last Name *</label>
                    <input 
                      type="text" 
                      placeholder="Last Name" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all btn-sheen"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                  {/* Company Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gold ml-2">Company Email *</label>
                    <input 
                      type="email" 
                      placeholder="Company Email" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all btn-sheen"
                      value={formData.companyEmail}
                      onChange={(e) => setFormData({...formData, companyEmail: e.target.value})}
                    />
                  </div>
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gold ml-2">Phone *</label>
                    <input 
                      type="tel" 
                      placeholder="012 34 567 89" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all btn-sheen"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  {/* Hiring Company */}
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gold ml-2">Hiring Company *</label>
                    <input 
                      type="text" 
                      placeholder="Hiring Company" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all btn-sheen"
                      value={formData.hiringCompany}
                      onChange={(e) => setFormData({...formData, hiringCompany: e.target.value})}
                    />
                  </div>
                  {/* State */}
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gold ml-2">State *</label>
                    <select 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-gold/50 focus:bg-white/10 outline-none transition-all appearance-none cursor-pointer btn-sheen"
                      value={formData.state}
                      onChange={(e) => setFormData({...formData, state: e.target.value})}
                    >
                      <option value="" className="bg-navy text-gray-400">Select A State</option>
                      {usStates.map((state, i) => (
                        <option key={i} value={state} className="bg-navy text-white">{state}</option>
                      ))}
                    </select>
                  </div>
                  {/* How Did You Hear About Us? */}
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gold ml-2">How Did You Hear About Us?</label>
                    <input 
                      type="text" 
                      placeholder="Specify Reference" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all btn-sheen"
                      value={formData.howDidYouHear}
                      onChange={(e) => setFormData({...formData, howDidYouHear: e.target.value})}
                    />
                  </div>
                  {/* What Positions Do You Need Assistance Hiring? */}
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gold ml-2">What Positions Do You Need Assistance?</label>
                    <input 
                      type="text" 
                      placeholder="Specify Positions - Please Separate Each Position With A Comma" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all btn-sheen"
                      value={formData.positionsNeeded}
                      onChange={(e) => setFormData({...formData, positionsNeeded: e.target.value})}
                    />
                  </div>
                  
                  {/* Choose Service */}
                  <div className="space-y-2 md:col-span-1">
                    <label className="text-xs font-black uppercase tracking-widest text-gold ml-2">Choose Service *</label>
                    <select 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-gold/50 focus:bg-white/10 outline-none transition-all appearance-none cursor-pointer btn-sheen"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="" className="bg-navy text-gray-400">Select One</option>
                      {hiringNeedOptions.map((opt, i) => (
                        <option key={i} value={opt} className="bg-navy text-white">{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Your Question or Request */}
                <div className="space-y-2 mt-6">
                  <label className="text-xs font-black uppercase tracking-widest text-gold ml-2">Your Question or Request</label>
                  <textarea 
                    rows={4} 
                    placeholder="Type your question, request, or anything you'd like to know..." 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all resize-none btn-sheen"
                    value={formData.questionOrRequest}
                    onChange={(e) => setFormData({...formData, questionOrRequest: e.target.value})}
                  />
                </div>

                <div className="pt-4 flex flex-col items-center">
                  <p className="text-xs text-white/40 mb-8 font-medium">Our team usually responds within 1-2 business days.</p>
                  <button 
                    type="submit" 
                    className="btn-rotating-border group w-full md:w-auto px-20 py-8 bg-white/5 hover:bg-white/10 text-white hover:text-gold font-black rounded-[32px] transition-all flex items-center justify-center gap-4 shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-[0.3em] text-[10px] btn-auto-sheen border border-white/5"
                  >
                    Submit <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-500" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 8. CTA BLOCK */}
      <section className="py-24 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-[64px] p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-8 xl:gap-12 border-white/10 hover:border-gold/20 transition-all duration-700 btn-sheen">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black text-white leading-[0.9] tracking-tighter mb-4 uppercase">
                Ready to Start the <br /> <span className="text-gold">Conversation?</span>
              </h2>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed mt-4">
                If your business needs stronger hiring support, becoming a client is the clearest next step. NAYA Staffing helps employers move from recruitment uncertainty to a more structured, solution-led, and business-relevant hiring partnership.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 shrink-0 w-full lg:w-auto">
              <Link href="/schedule-consultation" className="btn-rotating-border px-12 py-6 bg-white/5 text-white hover:text-gold font-black rounded-full hover:bg-white/10 hover:-translate-y-2 transition-all text-center shadow-xl uppercase tracking-[0.2em] text-xs btn-auto-sheen border border-white/5">
                Schedule Consultation
              </Link>
              <Link href="/employers/our-proven-process" className="px-12 py-6 bg-white/5 border border-white/10 text-white font-black rounded-full hover:bg-white/10 hover:-translate-y-2 transition-all text-center uppercase tracking-[0.2em] text-xs backdrop-blur-md btn-sheen">
                View Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
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

      {/* 10. FINAL CTA SECTION */}
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
              Start a More Strategic <br/>
              With <span className="text-gold">Hiring Relationship</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              The right recruitment partner should make hiring clearer, more flexible, and more aligned with business goals. NAYA Staffing helps employers take that first step through a more structured, premium, and solution-led client experience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 xl:gap-8">
              <a 
                href="#client-inquiry-form" 
                className="btn-rotating-border group w-full sm:w-auto px-16 py-8 bg-white/5 hover:bg-white/10 text-white hover:text-gold font-black rounded-[32px] transition-all flex items-center justify-center gap-4 shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-[0.3em] text-[10px] btn-auto-sheen border border-white/5"
              >
                Become a Client <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-500" />
              </a>
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

      {/* 11. RELATED SERVICES / INTERNAL LINKS */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 xl:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.95]">
                Client <br/>
                Intake <span className="text-gold">Resources</span>
              </h2>
              <div className="btn-rotating-border h-1 w-20 bg-white/5 rounded-full btn-auto-sheen border border-white/5"></div>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                Connect with our core services and navigation pages to align your hiring requirements with the right engagement models.
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
          <Link href="/employers/our-proven-process" className="hover:text-gold transition-colors">Our Proven Process</Link>
        </div>
      </section>
    </main>
  );
}
