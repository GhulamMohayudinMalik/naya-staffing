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
  Check
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "Employer Solutions for Recruitment, Staffing & Workforce Support | NAYA Staffing",
  description: "Explore NAYA Staffing’s employer solutions for permanent recruitment, contract staffing, executive search, RPO, project-based hiring, and specialized workforce support across industries.",
  keywords: [
    "employer solutions recruitment",
    "staffing solutions for employers",
    "recruitment solutions for businesses",
    "employer hiring solutions",
    "workforce solutions for companies",
    "recruitment partner for employers",
    "business staffing solutions",
    "employer talent solutions",
    "strategic hiring solutions",
    "recruitment support for companies",
    "scalable staffing solutions",
    "contract and permanent hiring support",
    "executive and specialist recruitment solutions",
    "workforce planning support",
    "business recruitment partner",
    "talent acquisition solutions for employers"
  ]
};

export default function EmployerSolutionsPage() {
  const problems = [
    {
      title: "Long-Term Team Building",
      desc: "For employers hiring full-time staff to support continuity, growth, and long-term workforce capability.",
      icon: <Users className="w-8 h-8 text-gold" />
    },
    {
      title: "Urgent or Flexible Workforce Needs",
      desc: "For employers that need temporary support, contract hiring, or more agile workforce planning.",
      icon: <Clock className="w-8 h-8 text-gold" />
    },
    {
      title: "Leadership and High-Impact Hiring",
      desc: "For businesses recruiting senior, strategic, confidential, or difficult-to-replace talent.",
      icon: <Award className="w-8 h-8 text-gold" />
    },
    {
      title: "Multi-Role or Expansion Hiring",
      desc: "For companies launching teams, opening locations, scaling departments, or building workforce capacity quickly.",
      icon: <TrendingUp className="w-8 h-8 text-gold" />
    },
    {
      title: "Recruitment Process Gaps",
      desc: "For employers experiencing weak shortlists, slow hiring movement, inconsistent screening, or internal recruitment bandwidth limitations.",
      icon: <ShieldAlert className="w-8 h-8 text-gold" />
    },
    {
      title: "Specialist and Competitive Talent Markets",
      desc: "For businesses hiring in technical, sales, global, remote, startup, or other specialist environments where stronger search precision is needed.",
      icon: <Target className="w-8 h-8 text-gold" />
    }
  ];

  const coreSolutions = [
    {
      title: "Permanent Recruitment",
      desc: "A long-term hiring solution for employers building stable teams and recruiting full-time talent aligned with broader business growth.",
      bestFor: ["Full-time hiring", "Long-term team building", "Replacing key staff", "Workforce stability"],
      href: "/services/permanent-recruitment",
      cta: "Explore Permanent Recruitment",
      icon: <Briefcase className="w-8 h-8 text-gold" />
    },
    {
      title: "Contract Staffing",
      desc: "A flexible workforce solution for temporary, seasonal, project-based, urgent, or short-to-medium-term hiring needs.",
      bestFor: ["Flexible workforce expansion", "Urgent hiring gaps", "Short-term support", "Fluctuating demand"],
      href: "/services/contract-staffing",
      cta: "Explore Contract Staffing",
      icon: <Zap className="w-8 h-8 text-gold" />
    },
    {
      title: "Executive Search",
      desc: "A premium recruitment solution for leadership, confidential, specialist, and high-impact roles where precision and discretion matter most.",
      bestFor: ["Senior leadership hires", "Critical appointments", "Confidential roles", "Strategic hiring"],
      href: "/services/executive-search",
      cta: "Explore Executive Search",
      icon: <Award className="w-8 h-8 text-gold" />
    },
    {
      title: "Recruitment Process Outsourcing (RPO)",
      desc: "A scalable recruitment partnership that supports part or all of the hiring function for employers with ongoing or high-volume recruitment demand.",
      bestFor: ["Recurring hiring", "Scale-up recruitment", "Multi-role support", "Embedded hiring delivery"],
      href: "/services/rpo",
      cta: "Explore RPO",
      icon: <Settings className="w-8 h-8 text-gold" />
    },
    {
      title: "Turnkey Recruitment Projects",
      desc: "An end-to-end recruitment delivery model for expansion hiring, team build-outs, launches, and multi-role project-based recruitment initiatives.",
      bestFor: ["Launch hiring", "Expansion projects", "Team build-outs", "Defined hiring programs"],
      href: "/services",
      cta: "Explore Turnkey Recruitment Projects",
      icon: <Activity className="w-8 h-8 text-gold" />
    }
  ];

  const specializedSolutions = [
    { name: "Talent Mapping", href: "/services/talent-mapping" },
    { name: "Screening & Assessment", href: "/services/screening-assessment" },
    { name: "Employer Branding", href: "/services/employer-branding" },
    { name: "Global Hiring", href: "/services/global-hiring" },
    { name: "Remote Hiring Solutions", href: "/services/remote-hiring-solutions" },
    { name: "Diversity Hiring", href: "/services/diversity-hiring" },
    { name: "Campus Recruitment", href: "/services/campus-recruitment" },
    { name: "Headhunting Services", href: "/services/headhunting-services" },
    { name: "Technical Recruitment", href: "/services/technical-recruitment" },
    { name: "Sales Recruitment", href: "/services/sales-recruitment" },
    { name: "Startup Hiring Solutions", href: "/services/startup-hiring-solutions" }
  ];

  const guidanceBlocks = [
    {
      title: "Permanent Recruitment",
      text: "Choose Permanent Recruitment when the business is hiring full-time employees for long-term team growth or workforce continuity.",
      icon: <Briefcase className="w-6 h-6 text-gold" />
    },
    {
      title: "Contract Staffing",
      text: "Choose Contract Staffing when hiring needs are temporary, project-based, urgent, or require workforce flexibility.",
      icon: <Zap className="w-6 h-6 text-gold" />
    },
    {
      title: "Executive Search",
      text: "Choose Executive Search when the role is leadership-level, confidential, highly specialized, or strategically important.",
      icon: <Award className="w-6 h-6 text-gold" />
    },
    {
      title: "RPO",
      text: "Choose RPO when the company has recurring hiring demand, scale-up needs, or requires a more embedded recruitment model.",
      icon: <Settings className="w-6 h-6 text-gold" />
    },
    {
      title: "Turnkey Recruitment Projects",
      text: "Choose Turnkey Recruitment Projects when hiring spans multiple roles, a defined expansion plan, or a business-critical delivery timeline.",
      icon: <Activity className="w-6 h-6 text-gold" />
    },
    {
      title: "Specialized Support",
      text: "Choose Specialized Support when the business needs stronger screening, market insight, technical hiring, sales recruitment, remote/global hiring, startup support, or better employer positioning.",
      icon: <Cpu className="w-6 h-6 text-gold" />
    }
  ];

  const pillars = [
    {
      title: "Flexible Hiring Models",
      desc: "We support multiple recruitment structures so employers can choose what fits the need instead of forcing one method onto every role."
    },
    {
      title: "Broader Business Relevance",
      desc: "Our solutions are designed around real hiring problems such as workforce growth, talent shortages, urgency, process gaps, and operational complexity."
    },
    {
      title: "Cross-Industry Coverage",
      desc: "We support employers across multiple industries and functions, making our solutions more scalable and adaptable."
    },
    {
      title: "Structured Recruitment Delivery",
      desc: "Clearer shortlists, stronger process coordination, and better alignment help reduce hiring friction."
    },
    {
      title: "Specialist and Strategic Support",
      desc: "From executive search to technical hiring and talent mapping, we support more complex employer needs as well as core recruitment delivery."
    },
    {
      title: "Modern Workforce Perspective",
      desc: "We help employers navigate permanent, flexible, remote, global, and project-based hiring realities with stronger structure and better alignment."
    }
  ];

  const relatedLinks = [
    { name: "Become a Client", href: "/employers/become-a-client", desc: "Start a hiring engagement with our recruiting team." },
    { name: "Our Proven Process", href: "/employers/our-proven-process", desc: "See our step-by-step recruitment delivery workflow." },
    { name: "Employers Overview", href: "/employers", desc: "Return to the main parent section for employers." },
    { name: "Contact Us", href: "/contact-us", desc: "Get in touch with our office for general inquiries." },
    { name: "Schedule Consultation", href: "/schedule-consultation", desc: "Book a strategic consultation with a recruiter." },
    { name: "Industries Overview", href: "/our-industries", desc: "Browse the sectors and industries we serve." }
  ];

  const faqs = [
    {
      question: "What employer solutions does NAYA Staffing offer?",
      answer: "NAYA Staffing offers permanent recruitment, contract staffing, executive search, Recruitment Process Outsourcing, turnkey recruitment projects, and specialized support such as talent mapping, screening, employer branding, global hiring, remote hiring, technical recruitment, sales recruitment, and more."
    },
    {
      question: "How does NAYA Staffing help businesses hire?",
      answer: "NAYA Staffing helps businesses hire through flexible recruitment solutions tailored to different hiring challenges, industries, workforce models, and business stages."
    },
    {
      question: "Which employer pages are part of this section?",
      answer: "The approved employer/client section includes Employer Solutions, Become a Client, and Our Proven Process under the main Employers section."
    },
    {
      question: "Can employers use NAYA Staffing for both permanent and flexible hiring?",
      answer: "Yes. NAYA Staffing supports both long-term permanent recruitment and more flexible models such as contract staffing, project-based hiring, and scalable recruitment support."
    },
    {
      question: "Can NAYA Staffing support specialist hiring needs?",
      answer: "Yes. Specialized employer solutions include technical recruitment, sales recruitment, executive search, headhunting, talent mapping, screening and assessment, and other focused hiring support."
    },
    {
      question: "What should an employer do next from this page?",
      answer: "Employers should move next to Become a Client if they are ready to engage, or to Our Proven Process if they want to understand how the recruitment delivery model works."
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Recruitment &amp; Workforce Solutions for Employers</span>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
            <Typewriter>
              Employer Solutions Built <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                for Real Hiring Challenges
              </span>
            </Typewriter>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
              NAYA Staffing helps employers solve hiring challenges through flexible recruitment and workforce solutions tailored to business goals, workforce demand, and talent market realities. Whether you need permanent recruitment, contract staffing, executive search, Recruitment Process Outsourcing, project-based hiring delivery, or specialized talent support, our employer solutions are designed to help you hire with greater structure, speed, and confidence.
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
                From one critical hire to broader workforce planning, we deliver employer solutions that adapt to real business needs.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-20">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold to-transparent"></div>
        </div>
      </section>

      {/* 2. EMPLOYER SOLUTIONS INTRO SECTION */}
      <section className="py-24 relative overflow-hidden bg-navy-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 lg:gap-12 xl:gap-20 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
                Solutions Suite
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                A Broader, Smarter Approach <br className="hidden md:inline" />
                <span className="text-gold">to Hiring Support</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                No two employers face exactly the same hiring situation. Some companies need support with permanent team growth. Others need contract staffing flexibility, faster access to specialist talent, leadership hiring, or a fully managed recruitment model for broader workforce expansion. Modern hiring requires more than one service option, because business needs change by stage, sector, urgency, and workforce strategy.
              </p>
              <p>
                NAYA Staffing’s Employer Solutions page is designed to bring those options together in one place. It gives business users a clear view of how our recruitment services can support different hiring needs, from individual placements to ongoing hiring models and project-based recruitment delivery. Rather than forcing every employer into the same approach, we offer multiple paths depending on what the business actually needs.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                This page also acts as one of the main conversion pages inside the employer/client section of your approved sitemap, where the three core pages are Employer Solutions, Become a Client, and Our Proven Process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE HELP EMPLOYERS SOLVE */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="btn-rotating-border absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 btn-auto-sheen border border-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              What We Help <span className="text-gold">Employers Solve</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Employer solutions should be built around problems businesses actually face, not just service labels. This section helps business users immediately see where NAYA Staffing fits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {problems.map((prob, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6">
                  <div className="btn-rotating-border w-14 h-14 bg-white/5 border border-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/5 group-hover:text-white hover:text-gold transition-all duration-500 btn-auto-sheen border border-white/5">
                    {prob.icon}
                  </div>
                  <h3 className="text-white font-black text-xl leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                    {prob.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {prob.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORE SOLUTION CATEGORIES */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Core Employer <span className="text-gold">Solutions</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              These are the main hiring solutions that represent the foundational employer offering.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8">
            {coreSolutions.map((sol, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-[#0B132B]/50 border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="btn-rotating-border w-14 h-14 bg-white/5 border border-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/5 group-hover:text-white hover:text-gold transition-all duration-500 btn-auto-sheen border border-white/5">
                      {sol.icon}
                    </div>
                    <h3 className="text-white font-black text-2xl leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                      {sol.title}
                    </h3>
                    <p className="text-slate-400 text-sm font-semibold leading-relaxed mt-4 mb-6 group-hover:text-slate-300 transition-colors">
                      {sol.desc}
                    </p>
                    
                    <div className="mb-8">
                      <span className="text-xs font-black uppercase tracking-wider text-gold block mb-3">Best For:</span>
                      <div className="flex flex-wrap gap-2">
                        {sol.bestFor.map((bf, i) => (
                          <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-slate-300 font-semibold btn-sheen">
                            {bf}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link 
                    href={sol.href}
                    className="group/link inline-flex items-center gap-2 text-xs font-black tracking-widest text-gold hover:text-white uppercase transition-colors mt-auto pt-4 border-t border-white/5"
                  >
                    {sol.cta} <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SPECIALIZED SOLUTIONS SNAPSHOT */}
      <section className="py-24 bg-navy relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl text-center space-y-8">
          <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
            Specialized Support
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            Specialized Employer <span className="text-gold">Support Solutions</span>
          </h2>
          <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
          <p className="text-slate-400 text-lg leading-relaxed font-semibold max-w-4xl mx-auto">
            In addition to core hiring models, NAYA Staffing supports employers with specialized recruitment solutions for more targeted business needs.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 gap-4 pt-10">
            {specializedSolutions.map((topic, idx) => (
              <Link key={idx} href={topic.href} className="group p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-gold/30 hover:bg-white/[0.02] text-center transition-all duration-300 flex items-center justify-center gap-2">
                <span className="text-sm font-bold text-slate-300 group-hover:text-gold transition-colors tracking-tight">{topic.name}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500 opacity-0 group-hover:opacity-100 group-hover:text-gold transition-all" />
              </Link>
            ))}
          </div>

          <p className="text-slate-500 text-xs italic pt-8 max-w-2xl mx-auto">
            These specialized solutions help employers improve hiring precision, strengthen candidate pipelines, access harder-to-reach talent, and solve workforce challenges that do not fit neatly into one standard model.
          </p>
        </div>
      </section>

      {/* 6. WHICH SOLUTION FITS WHICH HIRING NEED */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Which Employer Solution Is <span className="text-gold">Right for Your Business?</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Employers often know they need hiring support, but not always which service model fits best. Use this guidance to self-identify quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {guidanceBlocks.map((block, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-[#0B132B]/50 border border-white/5 hover:border-gold/30 transition-all duration-500 flex flex-col h-full justify-between">
                <div className="space-y-4">
                  <div className="btn-rotating-border w-12 h-12 bg-white/10 border border-gold/20 rounded-2xl flex items-center justify-center btn-auto-sheen border border-white/5">
                    {block.icon}
                  </div>
                  <h4 className="text-white font-black text-lg group-hover:text-gold transition-colors tracking-tight uppercase">
                    {block.title}
                  </h4>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {block.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY EMPLOYERS CHOOSE NAYA STAFFING */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose <span className="text-gold">Our Solutions</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Businesses need more than access to applicants. They need the right hiring structure, stronger talent alignment, and a partner that understands business context.
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

      {/* 8. INDUSTRY AND HIRING ENVIRONMENT COVERAGE */}
      <section className="py-24 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 lg:gap-12 xl:gap-20 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
                Versatile Fit
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                Solutions That Work Across <br className="hidden md:inline" />
                <span className="text-gold">Industries and Workforce Models</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                NAYA Staffing’s employer solutions are designed to work across a broad range of sectors, role types, and hiring environments. Your approved site structure already confirms wide industry coverage across information technology, healthcare, industrial, hospitality, professional services, education, insurance, retail and e-commerce, construction, marketing, and sales.
              </p>
              <p>
                That matters because many employers do not hire in only one category. They may need technical hires, commercial roles, support staff, leadership appointments, and project-based recruitment at the same time. They may also need both long-term and flexible hiring models depending on what the business is trying to achieve.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                Our solutions support permanent hires, contract and temporary workforce needs, executive and specialist hiring, remote and global talent access, startup and growth-stage hiring, project-based recruitment, and broader recruitment operations support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA BLOCK */}
      <section className="py-24 bg-navy relative border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-[64px] p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-8 xl:gap-12 border-white/10 hover:border-gold/20 transition-all duration-700 btn-sheen">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black text-white leading-[0.9] tracking-tighter mb-4 uppercase">
                Need the Right Hiring Solution, <br /> <span className="text-gold">Not Just More Applications?</span>
              </h2>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed mt-4">
                NAYA Staffing helps employers choose the right recruitment model for the role, the market, and the business stage. Whether your need is immediate, specialist, long-term, flexible, or project-driven, we provide employer solutions designed to improve hiring clarity and recruitment outcomes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 shrink-0 w-full lg:w-auto">
              <Link href="/employers/become-a-client" className="btn-rotating-border px-12 py-6 bg-white/5 text-white hover:text-gold font-black rounded-full hover:bg-white/10 hover:-translate-y-2 transition-all text-center shadow-xl uppercase tracking-[0.2em] text-xs btn-auto-sheen border border-white/5">
                Become a Client
              </Link>
              <Link href="/employers/our-proven-process" className="px-12 py-6 bg-white/5 border border-white/10 text-white font-black rounded-full hover:bg-white/10 hover:-translate-y-2 transition-all text-center uppercase tracking-[0.2em] text-xs backdrop-blur-md btn-sheen">
                Our Proven Process
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
              Employer Solutions Designed <br/>
              With <span className="text-gold">Smarter Hiring Decisions</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              Hiring challenges vary by business, role type, and workforce demand. NAYA Staffing helps employers move forward with more flexible recruitment options, better-aligned hiring support, and a stronger path to recruitment success.
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
                Employer <br/>
                Hiring <span className="text-gold">Resources</span>
              </h2>
              <div className="btn-rotating-border h-1 w-20 bg-white/5 rounded-full btn-auto-sheen border border-white/5"></div>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                Explore our core resources to start onboarding as a client or understand NAYA Staffing's process.
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
          <Link href="/employers/become-a-client" className="hover:text-gold transition-colors">Become a Client</Link>
          <Link href="/employers/our-proven-process" className="hover:text-gold transition-colors">Our Proven Process</Link>
        </div>
      </section>
    </main>
  );
}
