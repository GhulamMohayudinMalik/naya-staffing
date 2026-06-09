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
  title: "Technical Recruitment Services for IT, Engineering & Specialist Hiring | NAYA Staffing",
  description: "NAYA Staffing provides technical recruitment services to help employers hire skilled professionals across IT, software, engineering, cybersecurity, data, infrastructure, and other technical functions.",
  keywords: [
    "technical recruitment services",
    "technical recruitment agency",
    "technical recruiters",
    "IT recruitment agency",
    "engineering recruitment services",
    "specialist technical hiring",
    "technical staffing solutions",
    "tech recruitment agency",
    "software developer recruitment",
    "cybersecurity recruitment",
    "infrastructure hiring support",
    "data talent recruitment",
    "technical candidate sourcing",
    "engineering hiring agency",
    "technology hiring partner",
    "hard-to-fill technical roles"
  ]
};

export default function TechnicalRecruitmentPage() {
  const reasons = [
    {
      title: "Technical Skills Are Highly Specific",
      desc: "Many technical roles require precise exposure to certain tools, systems, languages, frameworks, or engineering environments.",
      icon: <Cpu className="w-8 h-8 text-gold" />
    },
    {
      title: "The Talent Market Is Competitive",
      desc: "Strong technical professionals are frequently in demand, which makes it harder to rely only on general recruitment channels.",
      icon: <Globe className="w-8 h-8 text-gold" />
    },
    {
      title: "Role Mismatch Can Be Costly",
      desc: "A poor technical hire can affect delivery quality, project timelines, operational reliability, product development, and internal team performance.",
      icon: <ShieldCheck className="w-8 h-8 text-gold" />
    },
    {
      title: "Technical Hiring Needs Better Screening",
      desc: "The recruitment process needs stronger understanding of what is actually required in the role and what candidate backgrounds are genuinely relevant.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      title: "Specialist Roles Need Sourcing Precision",
      desc: "General sourcing may bring many profiles, but specialist technical recruitment aims to bring the right profiles.",
      icon: <Settings className="w-8 h-8 text-gold" />
    },
    {
      title: "Technical Teams Often Scale Fast",
      desc: "When technical hiring is tied to product delivery, digital transformation, engineering growth, or infrastructure support, speed and quality often need to work together.",
      icon: <TrendingUp className="w-8 h-8 text-gold" />
    }
  ];

  const useCases = [
    {
      title: "When Hiring for Specialist Technical Roles",
      desc: "If the role involves specific technical tools, systems, platforms, or engineering capability, a specialist recruitment approach is more effective."
    },
    {
      title: "When General Recruitment Is Producing Weak Fits",
      desc: "If broad sourcing generates volume but not relevance, technical recruitment can improve search quality."
    },
    {
      title: "When Talent Competition Is High",
      desc: "In fast-moving markets for engineers, developers, data professionals, and technical specialists, stronger role-focused search becomes essential."
    },
    {
      title: "When Building or Expanding Technical Teams",
      desc: "If the business is growing product, engineering, infrastructure, IT, or digital capability, technical recruitment can support more structured team-building."
    },
    {
      title: "When Hiring Delays Affect Delivery",
      desc: "If technical vacancies are slowing product work, digital operations, projects, or systems performance, a more specialized hiring model can help."
    },
    {
      title: "When the Role Is Hard to Explain to General Recruiters",
      desc: "Some technical roles involve nuance that requires more search discipline and better understanding of role context."
    }
  ];

  const servicesInclude = [
    {
      title: "Technical Candidate Sourcing",
      desc: "Focused recruitment support for technical roles across software, IT, engineering, infrastructure, digital, data, and specialist functions.",
      icon: <Globe className="w-6 h-6 text-gold" />
    },
    {
      title: "Niche Technical Search Support",
      desc: "A more targeted search approach for hard-to-find or highly specific technical skill sets.",
      icon: <Cpu className="w-6 h-6 text-gold" />
    },
    {
      title: "Technical Role Alignment Support",
      desc: "Helping ensure that sourcing and candidate evaluation are tied closely to what the role truly requires.",
      icon: <Target className="w-6 h-6 text-gold" />
    },
    {
      title: "Shortlist Refinement for Technical Relevance",
      desc: "Supporting stronger candidate filtering so the shortlist reflects meaningful technical alignment rather than keyword matching alone.",
      icon: <ShieldCheck className="w-6 h-6 text-gold" />
    },
    {
      title: "Support for Individual or Multi-Role Hiring",
      desc: "Technical recruitment can support one critical specialist role or multiple hires across a growing technical team.",
      icon: <Users className="w-6 h-6 text-gold" />
    },
    {
      title: "Connection to Other Recruitment Services",
      desc: "Technical Recruitment can work alongside screening and assessment, headhunting, permanent recruitment, startup hiring, RPO, and remote hiring depending on the hiring context.",
      icon: <Activity className="w-6 h-6 text-gold" />
    },
    {
      title: "Hiring Support Across Technical Environments",
      desc: "Support can extend across internal IT teams, product teams, engineering functions, technical operations, support environments, and digital delivery roles.",
      icon: <Settings className="w-6 h-6 text-gold" />
    }
  ];

  const rolesCategories = [
    {
      title: "Software & Product Roles",
      roles: ["Software Developers", "Full-Stack Developers", "Front-End Developers", "Back-End Developers", "QA / Test Engineers", "Product Support Technologists"]
    },
    {
      title: "IT & Infrastructure Roles",
      roles: ["IT Support Specialists", "Systems Administrators", "Network Support Professionals", "Infrastructure Engineers", "Cloud Support Roles", "Technical Operations Staff"]
    },
    {
      title: "Data & Digital Roles",
      roles: ["Data Analysts", "Data Engineers", "BI / Reporting Specialists", "Digital Systems Specialists", "Automation Support Roles"]
    },
    {
      title: "Cybersecurity & Risk Roles",
      roles: ["Cybersecurity Analysts", "Information Security Support Roles", "Security Operations Staff", "Risk and Compliance Technical Roles"]
    },
    {
      title: "Engineering & Specialist Technical Roles",
      roles: ["Technical Project Engineers", "Implementation Specialists", "Solutions Support Staff", "Systems Integration Roles", "Industry-Specific Technical Specialists"]
    }
  ];

  const benefits = [
    {
      title: "More Relevant Technical Shortlists",
      desc: "Employers spend more time reviewing candidates whose backgrounds are closer to the actual needs of the role.",
      icon: <Target className="w-7 h-7 text-gold" />
    },
    {
      title: "Improved Hiring Accuracy",
      desc: "A more specialized recruitment process reduces the chances of technical mismatch or surface-level candidate filtering.",
      icon: <ShieldCheck className="w-7 h-7 text-gold" />
    },
    {
      title: "Better Access to Competitive Talent",
      desc: "Technical recruitment can improve reach in markets where skilled candidates are highly sought after.",
      icon: <Globe className="w-7 h-7 text-gold" />
    },
    {
      title: "Greater Efficiency in Technical Hiring",
      desc: "Clearer candidate alignment reduces wasted time in interview stages and helps hiring teams move faster.",
      icon: <Clock className="w-7 h-7 text-gold" />
    },
    {
      title: "Support for Team Growth and Delivery",
      desc: "Stronger technical hiring helps protect project continuity, system performance, product development, and broader business capability.",
      icon: <TrendingUp className="w-7 h-7 text-gold" />
    },
    {
      title: "More Confidence in Specialist Hiring Decisions",
      desc: "A more focused recruitment model helps employers make technical hiring decisions with greater clarity and control.",
      icon: <Award className="w-7 h-7 text-gold" />
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Understand the Technical Role",
      desc: "We begin by understanding the role scope, required technical exposure, team environment, key systems or tools, and what success looks like in the position."
    },
    {
      num: "02",
      title: "Define the Candidate Profile",
      desc: "We align on the type of candidate needed, including practical experience, technical relevance, seniority level, and contextual fit."
    },
    {
      num: "03",
      title: "Activate Focused Technical Search",
      desc: "We identify candidates through targeted sourcing, relevant talent channels, recruiter networks, and specialist outreach where needed."
    },
    {
      num: "04",
      title: "Screen for Technical Alignment",
      desc: "We assess whether the candidate’s background genuinely reflects the technical needs of the role rather than only surface-level matches."
    },
    {
      num: "05",
      title: "Refine the Shortlist",
      desc: "We help narrow the pool to candidates with stronger relevance, clearer suitability, and more useful hiring potential."
    },
    {
      num: "06",
      title: "Support Better Hiring Outcomes",
      desc: "Our goal is to help employers fill technical roles more accurately and with greater confidence in the quality of the shortlist."
    }
  ];

  const pillars = [
    {
      title: "Specialist Technical Hiring Focus",
      desc: "We treat technical recruitment as a specialist function, not as general hiring with different job titles.",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Better Role Precision",
      desc: "We help align sourcing and screening more closely with what the role actually requires.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Support in Competitive Technical Markets",
      desc: "Our approach is built for markets where strong technical talent is in high demand and harder to secure.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Stronger Shortlist Quality",
      desc: "We focus on technical relevance and practical alignment so employers spend less time filtering weak-fit profiles.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Flexible Connection to Other Hiring Services",
      desc: "Technical Recruitment can work naturally with headhunting, screening, permanent hiring, startup hiring, global hiring, and remote hiring.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Premium, Business-Relevant Delivery",
      desc: "We help employers hire technical talent through a process that feels organized, credible, and commercially useful.",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const audiences = [
    {
      title: "Businesses Hiring Technical Specialists",
      desc: "Employers recruiting for roles that require technical tools, systems, engineering knowledge, or specialist digital capability."
    },
    {
      title: "Companies Building Technical Teams",
      desc: "Organizations expanding product, engineering, infrastructure, IT, support, or digital operations functions."
    },
    {
      title: "Employers Facing Technical Skill Shortages",
      desc: "Businesses struggling to find strong candidates through broader or more general recruitment channels."
    },
    {
      title: "Growth-Stage and Scaling Companies",
      desc: "Teams that need technical hiring support to keep up with product growth, system expansion, digital transformation, or operational scaling."
    },
    {
      title: "Organizations Seeking Better Hiring Precision",
      desc: "Employers that want more technically relevant shortlists and a more accurate technical hiring process."
    }
  ];

  const relatedServices = [
    { name: "Headhunting Services", href: "/headhunting-services", desc: "Proactive, targeted search support to reach passive and specialist candidates." },
    { name: "Permanent Recruitment", href: "/permanent-recruitment", desc: "Core long-term hiring solutions for ongoing business needs." },
    { name: "Technical Recruitment", href: "/technical-recruitment", desc: "Specialist hiring support across IT, software, and engineering roles." },
    { name: "Sales Recruitment", href: "/sales-recruitment", desc: "Targeted recruitment services for commercial and revenue teams." },
    { name: "Screening & Assessment", href: "/screening-assessment", desc: "Structured candidate screening and evaluation support to reduce hiring risk." },
    { name: "Talent Mapping", href: "/talent-mapping", desc: "Strategic market intelligence and recruitment planning services." },
    { name: "Recruitment Process Outsourcing (RPO)", href: "/recruitment-process-outsourcing", desc: "End-to-end recruitment management to scale your hiring operations." },
    { name: "Global Hiring", href: "/global-hiring", desc: "Strategic international recruitment solutions across borders." },
    { name: "Startup Hiring Solutions", href: "/startup-hiring-solutions", desc: "Flexible, growth-aware recruitment support for founders." }
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
      question: "What is technical recruitment?",
      answer: "Technical recruitment is a specialized hiring approach focused on sourcing and placing candidates for roles that require defined technical skills, tools, systems knowledge, engineering capability, or specialist technical experience."
    },
    {
      question: "Why do companies use technical recruitment services?",
      answer: "Companies use technical recruitment services when technical roles are difficult to fill, require more accurate candidate alignment, or need a more specialist hiring approach than general recruitment can provide."
    },
    {
      question: "What types of roles can NAYA Staffing help fill through technical recruitment?",
      answer: "NAYA Staffing can support technical hiring across software, IT, engineering, cybersecurity, infrastructure, data, digital operations, and other specialist technical environments."
    },
    {
      question: "How is technical recruitment different from general recruitment?",
      answer: "Technical recruitment focuses more heavily on technical role alignment, specialist candidate evaluation, and sharper search precision for skills-driven positions."
    },
    {
      question: "Can technical recruitment help with hard-to-fill technical roles?",
      answer: "Yes. Technical recruitment is especially useful when the market is competitive, the skill set is niche, or the role has remained difficult to close through standard methods."
    },
    {
      question: "Does this service only apply to software companies?",
      answer: "No. While it is highly relevant to software and technology-led businesses, technical recruitment can also support employers across other industries that need technical, IT, engineering, data, or infrastructure talent."
    }
  ];

  const marqueeDimensions = [
    "Software Engineering", "Cybersecurity Support", "Cloud Infrastructure", "Data Engineering",
    "Systems Administration", "IT Support Specialists", "QA & Test Engineering", "Digital Systems"
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Specialist Technical Talent Hiring</span>
            </div>
            <h1 className="text-5xl md:text-6xl xl:text-8xl font-black tracking-tighter mb-6 leading-none uppercase">
            <Typewriter>
              Technical Recruitment for <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                High-Demand, Hard-to-Fill Roles
              </span>
            </Typewriter>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
              NAYA Staffing’s Technical Recruitment service helps employers hire skilled professionals across software, IT, engineering, infrastructure, cybersecurity, data, and other specialist technical functions. Whether you are building a product team, hiring for infrastructure and support, expanding engineering capability, or searching for niche technical expertise, we provide recruitment support designed for more accurate technical hiring outcomes.
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
                Built for employers who need stronger technical talent access, sharper candidate alignment, and a more specialized approach to hiring.
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
                A More Specialized Approach <br className="hidden md:inline" />
                <span className="text-gold">to Technical Hiring</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            {/* Paragraphs Column */}
            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Technical hiring often requires more than standard recruitment workflows. Employers are frequently hiring for roles that involve specific tools, systems, platforms, engineering disciplines, technical environments, or highly specialized capabilities. In these cases, broad recruitment methods can produce volume, but not always the right fit.
              </p>
              <p>
                Technical Recruitment helps solve that by bringing more precision to the search. It is designed to identify candidates whose experience, technical exposure, and practical role alignment match the demands of specialist positions more closely. This is especially important in markets where technical talent is competitive, role requirements are nuanced, and hiring mistakes can be costly.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                NAYA Staffing’s Technical Recruitment service is built for employers who need stronger clarity, better candidate relevance, and a more focused approach to recruiting across technical functions. We help businesses move beyond generic hiring activity and into more role-aware technical talent acquisition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT TECHNICAL RECRUITMENT MEANS */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-8">
          <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
            The Definition
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
            What Is <span className="text-gold">Technical Recruitment?</span>
          </h2>
          <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-semibold">
            <p>
              Technical Recruitment is a specialized hiring approach focused on sourcing and placing candidates for technical roles that require defined skills, platforms, tools, systems knowledge, engineering capability, or specialist technical experience.
            </p>
            <p>
              These roles often sit in areas such as software development, IT support, data, engineering, cybersecurity, cloud, infrastructure, systems administration, digital operations, technical product environments, and other skills-driven functions. Because the requirements are often more specific, the recruitment process needs stronger role understanding and sharper candidate evaluation.
            </p>
            <p className="text-slate-400 border-t border-white/5 pt-8 font-normal italic text-base">
              For employers, technical recruitment provides a more precise route to talent. It helps reduce mismatch, improve shortlist quality, and create better hiring traction in technical markets where competition and specialization are often high.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHY TECHNICAL RECRUITMENT MATTERS */}
      <section className="py-32 bg-navy-dark relative overflow-hidden border-t border-white/5">
        <div className="btn-rotating-border absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 btn-auto-sheen border border-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2 btn-auto-sheen border border-white/5">
              Why Skill Alignment Matters
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Technical Recruitment Matters in <span className="text-gold">Specialist Hiring</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Technical roles are often among the hardest to hire well because skill requirements are specific, candidate supply may be limited, and role mismatch can be expensive.
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

      {/* 5. WHEN TECHNICAL RECRUITMENT IS THE RIGHT CHOICE */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              When to Use <span className="text-gold">Technical Recruitment</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Technical Recruitment is especially valuable when the business is hiring for roles that require specialist skill alignment, strong candidate accuracy, or better traction in competitive technical markets.
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
              What Our Technical Recruitment <span className="text-gold">Can Cover</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              The exact scope can vary depending on the employer’s needs, but technical recruitment support can include several specialized hiring elements.
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

      {/* 7. ROLES WE HELP FILL SECTION */}
      <section className="py-32 bg-navy relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2 btn-auto-sheen border border-white/5">
              Capabilities
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Technical Roles We Help <span className="text-gold">Employers Hire</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing’s Technical Recruitment service can support a wide range of technical roles depending on business need, industry, and team structure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {rolesCategories.map((category, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-500 flex flex-col h-full justify-between">
                <div className="space-y-6">
                  <h4 className="text-white font-black text-lg mb-4 group-hover:text-gold transition-colors tracking-tight uppercase pb-2 border-b border-white/5">
                    {category.title}
                  </h4>
                  <ul className="space-y-3">
                    {category.roles.map((role, rIdx) => (
                      <li key={rIdx} className="text-slate-400 text-sm font-semibold flex items-start gap-2 leading-tight group-hover:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHAT EMPLOYERS GAIN FROM TECHNICAL RECRUITMENT */}
      <section className="py-32 bg-navy-dark relative overflow-hidden border-t border-white/5">
        <div className="btn-rotating-border absolute top-1/2 right-0 w-[500px] h-[500px] bg-white/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 btn-auto-sheen border border-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
            
            {/* Sticky Header Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8 animate-fade-up">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-2 shadow-xl backdrop-blur-md btn-auto-sheen border border-white/5">
                Precision Returns
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                What Technical <br />Recruitment <span className="text-gold">Delivers.</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-24 bg-white/5 rounded-full shadow-lg shadow-gold/20 btn-auto-sheen border border-white/5"></div>
              <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed border-l-2 border-white/10 pl-8 max-w-lg">
                Technical Recruitment helps employers improve candidate accuracy, reduce mismatch, and gain stronger traction in specialist hiring markets.
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

      {/* 9. OUR TECHNICAL RECRUITMENT APPROACH */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-28 space-y-6">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2 btn-auto-sheen border border-white/5">
              Our Methodology
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Our Approach to <span className="text-gold">Technical Recruitment</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Our technical recruitment approach is designed to improve hiring precision by aligning candidate search more closely with real technical role requirements and business priorities.
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

      {/* 10. WHY CHOOSE NAYA STAFFING FOR TECHNICAL RECRUITMENT */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose NAYA Staffing <span className="text-gold">for Technical Recruitment</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Technical hiring needs more than general recruitment activity. It needs clearer search thinking, better role understanding, and stronger candidate relevance. NAYA Staffing’s approach is designed around those realities.
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

      {/* 11. TECHNICAL RECRUITMENT VS GENERAL RECRUITMENT */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
              Technical Recruitment vs <span className="text-gold">General Recruitment</span>
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto"></div>
          </div>
          <div className="space-y-8 text-slate-300 font-medium text-lg leading-relaxed text-center">
            <p>
              General recruitment can work well for many business roles where the skill set is broader, the market is more accessible, and the requirements are easier to evaluate at first stage. That approach can work well for a wide range of business functions.
            </p>
            <p>
              Technical Recruitment is different because it is centered on roles where candidate alignment depends more heavily on defined technical experience, specific tools or systems exposure, specialized capability, or a clearer understanding of technical environments.
            </p>
            <p className="text-slate-400 border-t border-white/5 pt-8 font-semibold italic text-base">
              That does not mean technical recruitment is completely separate from general recruitment. It means the hiring process benefits from more role precision, stronger evaluation logic, and a sharper search approach when the role itself is technically demanding.
            </p>
          </div>
        </div>
      </section>

      {/* 12. WHO THIS SERVICE IS BEST FOR */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Who Technical Recruitment <span className="text-gold">Is Best For</span>
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

      {/* 13. SCROLLING MARQUEE OF TECHNICAL SKILLS */}
      <section className="bg-navy py-24 border-t border-white/5">
        <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
          <h3 className="text-3xl font-black text-white tracking-tighter">Technical <span className="text-gold">Specialization.</span></h3>
          <p className="text-slate-500 font-bold">Key Focus Areas</p>
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

      {/* 14. INDUSTRY COVERAGE SECTION */}
      <section className="py-24 relative overflow-hidden bg-navy-dark border-t border-white/5">
        <div className="container mx-auto px-6 max-w-5xl text-center space-y-8 animate-fade-up">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
              Sector Alignment
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              Technical Recruitment Support Across <span className="text-gold">Diverse Industries</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-slate-400 text-lg leading-relaxed font-semibold max-w-4xl mx-auto">
              Your approved structure already positions the website around broad industry coverage and includes Information Technology with supporting areas such as Software Development, Cybersecurity, and Cloud Computing, which makes this page a strong fit within the wider services and industries framework. It also allows Technical Recruitment to be positioned beyond only one sector, supporting technical hiring needs across technology-led businesses as well as other industries that rely on IT, digital systems, infrastructure, data, and specialist technical capability.
            </p>
            <div className="pt-6">
               <Link href="/our-industries" className="btn-rotating-border px-10 py-5 bg-white/5 hover:bg-white/10 text-white hover:text-gold font-black rounded-full transition-all inline-flex items-center gap-4 uppercase tracking-[0.2em] text-xs btn-auto-sheen border border-white/5">
                  Explore Industries We Serve <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
        </div>
      </section>

      {/* 15. FAQ SECTION */}
      <section className="bg-navy py-32 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="text-center mb-20 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-6 shadow-xl backdrop-blur-md btn-auto-sheen border border-white/5">
                Technical FAQ
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

      {/* 16. INTERNAL LINKING SECTION */}
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

      {/* 17. FINAL CTA SECTION */}
      <section className="py-32 relative overflow-hidden bg-navy border-t border-white/5">
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
              Hire Technical Talent With Greater <br/>
              <span className="text-gold">Precision and Confidence</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              When technical hiring is too important for generic recruitment, the search needs to be sharper. NAYA Staffing’s Technical Recruitment service helps employers access stronger technical candidates, improve shortlist quality, and make specialist hiring decisions with greater confidence.
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
