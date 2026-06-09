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
  title: "Employer Recruitment Solutions & Staffing Support | NAYA Staffing",
  description: "NAYA Staffing helps employers hire smarter with recruitment, staffing, and workforce solutions tailored to business growth, hiring volume, and industry-specific talent needs.",
  keywords: [
    "employer recruitment solutions",
    "staffing solutions for employers",
    "recruitment partner for businesses",
    "hiring solutions for employers",
    "employer staffing support",
    "recruitment agency for employers",
    "workforce solutions company",
    "talent acquisition support for businesses",
    "business hiring support",
    "employer talent solutions",
    "client recruitment services",
    "strategic staffing partner",
    "workforce planning support",
    "scalable hiring solutions",
    "recruitment support for companies",
    "hiring partner for growing businesses"
  ]
};

export default function EmployersOverviewPage() {
  const problems = [
    {
      title: "Hard-to-Fill Roles",
      desc: "When the right talent is difficult to find, employers need more targeted search support and better market reach.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      title: "Team Growth and Expansion",
      desc: "When hiring increases across departments, roles, or locations, recruitment needs stronger structure and scalability.",
      icon: <TrendingUp className="w-8 h-8 text-gold" />
    },
    {
      title: "Workforce Flexibility",
      desc: "When demand changes quickly, employers may need contract staffing, project support, or more agile hiring models.",
      icon: <Clock className="w-8 h-8 text-gold" />
    },
    {
      title: "Leadership and Specialist Hiring",
      desc: "Some roles require more discretion, more precision, and a more strategic approach than general recruitment can provide.",
      icon: <Award className="w-8 h-8 text-gold" />
    },
    {
      title: "Process Gaps and Hiring Friction",
      desc: "Weak shortlists, slow coordination, unclear communication, or inconsistent screening can make hiring harder than it needs to be.",
      icon: <ShieldAlert className="w-8 h-8 text-gold" />
    },
    {
      title: "Cross-Industry and Cross-Function Recruitment",
      desc: "Employers often need support across multiple role categories, not just one narrow specialization.",
      icon: <Globe className="w-8 h-8 text-gold" />
    }
  ];

  const solutions = [
    {
      title: "Permanent Recruitment",
      desc: "For employers building long-term teams and hiring full-time talent aligned with ongoing business growth.",
      icon: <Briefcase className="w-6 h-6 text-gold" />
    },
    {
      title: "Contract Staffing",
      desc: "For businesses that need flexibility, temporary workforce support, urgent coverage, or project-based talent.",
      icon: <Zap className="w-6 h-6 text-gold" />
    },
    {
      title: "Executive Search",
      desc: "For leadership, confidential, strategic, and high-impact roles where precision matters most.",
      icon: <Award className="w-6 h-6 text-gold" />
    },
    {
      title: "Recruitment Process Outsourcing (RPO)",
      desc: "For businesses that need a more scalable and embedded recruitment model across ongoing hiring needs.",
      icon: <Settings className="w-6 h-6 text-gold" />
    },
    {
      title: "Turnkey Recruitment Projects",
      desc: "For multi-role, project-based, expansion, or launch-focused hiring initiatives requiring end-to-end delivery.",
      icon: <Activity className="w-6 h-6 text-gold" />
    },
    {
      title: "Specialized Hiring Support",
      desc: "Including talent mapping, screening and assessment, employer branding, global hiring, remote hiring, startup hiring, technical recruitment, sales recruitment, diversity hiring, campus recruitment, and headhunting.",
      icon: <Cpu className="w-6 h-6 text-gold" />
    }
  ];

  const pillars = [
    {
      title: "Business-Aligned Recruitment Thinking",
      desc: "We focus on what the role means for the business, not just whether a resume roughly matches a job title."
    },
    {
      title: "Flexible Hiring Models",
      desc: "We support different recruitment structures so employers can choose what fits their current need rather than forcing one model onto every hiring challenge."
    },
    {
      title: "Cross-Industry Capability",
      desc: "We support hiring across a broad range of sectors and workforce environments, which gives employers more versatile support."
    },
    {
      title: "Structured, Professional Delivery",
      desc: "Clear communication, stronger shortlists, and better process coordination help reduce hiring friction."
    },
    {
      title: "Scalable Support",
      desc: "From one key role to broader hiring programs, our support can scale with business growth and workforce demand."
    },
    {
      title: "Modern Talent Market Perspective",
      desc: "We help employers think beyond outdated hiring limits by supporting remote, global, and specialist talent access where relevant."
    }
  ];

  const steps = [
    {
      title: "Understand the Hiring Need",
      desc: "We begin by understanding the business context, role requirement, hiring urgency, team structure, and what success looks like."
    },
    {
      title: "Recommend the Right Hiring Solution",
      desc: "We align the need with the most suitable model, whether that is permanent recruitment, contract staffing, executive search, RPO, or project-based delivery."
    },
    {
      title: "Run the Recruitment Process With Structure",
      desc: "We support sourcing, outreach, screening, coordination, and candidate flow based on the agreed scope."
    },
    {
      title: "Present Relevant Talent",
      desc: "We focus on candidate relevance, communication quality, and stronger shortlist usefulness."
    },
    {
      title: "Support Hiring Progress",
      desc: "We help employers maintain process momentum through feedback flow, coordination, and hiring-stage support."
    },
    {
      title: "Stay Aligned to Outcomes",
      desc: "Our goal is not just activity. It is better hiring movement and stronger business results."
    }
  ];

  const navigationCards = [
    {
      title: "Employer Solutions",
      desc: "This page should focus on the full range of hiring and workforce solutions available to business clients.",
      href: "/employers/employer-solutions"
    },
    {
      title: "Become a Client",
      desc: "This page should act as the main conversion-focused client intake page for companies ready to engage.",
      href: "/employers/become-a-client"
    },
    {
      title: "Our Proven Process",
      desc: "This page should explain how NAYA Staffing delivers recruitment support in a structured, step-by-step, trust-building way.",
      href: "/employers/our-proven-process"
    }
  ];

  const relatedServices = [
    { name: "Permanent Recruitment", href: "/services/permanent-recruitment", desc: "Core long-term hiring solutions for ongoing business needs." },
    { name: "Contract Staffing", href: "/services/contract-staffing", desc: "Flexible staffing and temporary workforce solutions." },
    { name: "Executive Search", href: "/services/executive-search", desc: "Confidential search for leadership and high-impact roles." },
    { name: "Recruitment Process Outsourcing (RPO)", href: "/services/rpo", desc: "Embedded, scalable talent acquisition solutions." },
    { name: "Turnkey Recruitment Projects", href: "/services", desc: "Structured projects for multi-role hiring campaigns." },
    { name: "Services Overview", href: "/services", desc: "Explore the full spectrum of our candidate and employer services." }
  ];

  const faqs = [
    {
      question: "How does NAYA Staffing help employers?",
      answer: "NAYA Staffing helps employers through recruitment, staffing, and workforce solutions tailored to different hiring needs, industries, and business stages."
    },
    {
      question: "What types of businesses can work with NAYA Staffing?",
      answer: "NAYA Staffing can support startups, growing businesses, established companies, project-led organizations, and employers hiring across multiple industries and functions."
    },
    {
      question: "What employer pages are included in this section?",
      answer: "The approved employer/client section includes Employer Solutions, Become a Client, and Our Proven Process beneath the main Employers section."
    },
    {
      question: "Can NAYA Staffing support both long-term and flexible hiring needs?",
      answer: "Yes. NAYA Staffing supports permanent recruitment, contract staffing, project-based recruitment, executive hiring, and broader scalable recruitment solutions."
    },
    {
      question: "Does NAYA Staffing work across multiple industries?",
      answer: "Yes. The wider site structure already confirms broad industry support across technology, healthcare, industrial, hospitality, professional services, education, insurance, retail and e-commerce, construction, marketing, and sales."
    },
    {
      question: "Where should an employer go next from this page?",
      answer: "Employers should be guided from this overview page into Employer Solutions, Become a Client, or Our Proven Process depending on whether they want to explore services, start a client relationship, or understand the delivery model."
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Recruitment &amp; Workforce Support for Employers</span>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
            <Typewriter>
              Hiring Solutions Built <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Around Business Needs
              </span>
            </Typewriter>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
              NAYA Staffing helps employers solve hiring challenges with recruitment, staffing, and workforce solutions designed for real business conditions. Whether you need long-term team growth, contract staffing flexibility, executive hiring support, project-based recruitment delivery, or broader talent access across industries and markets, we provide employer-focused solutions built for speed, structure, and stronger hiring outcomes.
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
                Built for employers who need a more strategic recruitment partner, not just a resume supplier.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-20">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold to-transparent"></div>
        </div>
      </section>

      {/* 2. EMPLOYER POSITIONING / INTRO SECTION */}
      <section className="py-24 relative overflow-hidden bg-navy-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 lg:gap-12 xl:gap-20 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
                Strategic Partner
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                A Recruitment Partner for <br className="hidden md:inline" />
                <span className="text-gold">Growing, Hiring, and Evolving Businesses</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Hiring is rarely just about filling open roles. For employers, recruitment affects growth, delivery capacity, customer experience, leadership strength, operational continuity, and long-term workforce quality. That means hiring decisions need more than speed alone. They need alignment, market awareness, flexibility, and the right support model for the business stage and hiring environment.
              </p>
              <p>
                NAYA Staffing works with employers that need a more structured and business-aware approach to talent acquisition. Some clients need support with a single critical hire. Others need recurring recruitment support, contract staffing flexibility, executive search, project-based hiring delivery, or help building entire teams across functions and sectors.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                This Employers Overview page is designed to help business users understand where NAYA Staffing fits into that picture. It acts as the main entry point into the employer side of the site, which then branches into Employer Solutions, Become a Client, and Our Proven Process as the three core employer-facing subpages in your approved structure.
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
              Employers do not all face the same hiring challenge. Some need speed. Some need specialist talent. Some need better process structure. Others need a scalable partner for broader workforce planning.
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

      {/* 4. CORE EMPLOYER SOLUTIONS SNAPSHOT */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              How We Support <span className="text-gold">Employers</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports employers through a range of recruitment and workforce solutions that can be used individually or combined based on the business need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {solutions.map((sol, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6">
                  <div className="btn-rotating-border w-14 h-14 bg-white/5 border border-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/5 group-hover:text-white hover:text-gold transition-all duration-500 btn-auto-sheen border border-white/5">
                    {sol.icon}
                  </div>
                  <h3 className="text-white font-black text-xl leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                    {sol.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {sol.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES + HIRING ENVIRONMENT COVERAGE */}
      <section className="py-24 bg-navy relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 lg:gap-12 xl:gap-20 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
                Cross-Sector Coverage
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                Support Across Industries, <br className="hidden md:inline" />
                <span className="text-gold">Functions, and Hiring Models</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Employers do not hire in a vacuum. Industry context, role type, hiring urgency, and workforce structure all shape what the right recruitment approach looks like. NAYA Staffing’s broader site architecture already reflects this by covering a wide range of industries including information technology, healthcare, industrial, hospitality, professional services, education, insurance, retail and e-commerce, construction, marketing, and sales.
              </p>
              <p>
                That breadth matters because many employers hire across mixed environments. A growing company may need technical talent, commercial hires, operational staff, and leadership support at the same time. A project-based employer may need both long-term hires and flexible workforce solutions. A multi-location business may need different role types across different markets.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                This page makes it clear that NAYA Staffing is built to support employers across permanent hiring, contract and flexible workforce needs, specialist and executive hiring, project-based recruitment, remote and global hiring models, and cross-industry talent acquisition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY EMPLOYERS CHOOSE NAYA STAFFING */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose <span className="text-gold">NAYA Staffing</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Employers need more than candidate flow. They need a recruitment partner that understands business priorities, role context, and how hiring decisions affect broader performance.
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

      {/* 7. HOW WE WORK WITH CLIENTS */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              How We Work With <span className="text-gold">Employers</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Different employers need different levels of support, but the way we work is grounded in clarity, alignment, and recruitment practicality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-[#0B132B]/50 border border-white/5 hover:border-gold/30 transition-all duration-500 flex flex-col h-full justify-between">
                <div className="space-y-4">
                  <span className="text-gold font-bold text-xs">Step 0{idx + 1}</span>
                  <h4 className="text-white font-black text-lg group-hover:text-gold transition-colors tracking-tight uppercase">
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

      {/* 8. EMPLOYER SUBPAGES NAVIGATION SECTION */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Employer Resources and <span className="text-gold">Next Steps</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              This overview page should guide employer users into the three specific employer/client pages already confirmed in your approved structure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
            {navigationCards.map((card, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-white font-black text-2xl leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                      {card.title}
                    </h3>
                    <p className="text-slate-400 text-sm font-semibold leading-relaxed mt-4 mb-6 group-hover:text-slate-300 transition-colors">
                      {card.desc}
                    </p>
                  </div>

                  <Link 
                    href={card.href}
                    className="group/link inline-flex items-center gap-2 text-xs font-black tracking-widest text-gold hover:text-white uppercase transition-colors mt-auto"
                  >
                    Go to Page <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
                  </Link>
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
                Looking for a <br /> <span className="text-gold">Smarter Hiring Partner?</span>
              </h2>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed mt-4">
                Whether you are hiring for one role or building out an entire team, NAYA Staffing helps employers choose the right recruitment model, improve hiring outcomes, and move forward with greater clarity and confidence.
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
              Employer Support Built <br/>
              With <span className="text-gold">Real Hiring Challenges</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              Hiring affects business growth, workforce stability, and long-term performance. NAYA Staffing helps employers approach recruitment with stronger structure, more flexible solutions, and a better-aligned path to talent acquisition.
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
                Related <br/>
                Hiring <span className="text-gold">Services</span>
              </h2>
              <div className="btn-rotating-border h-1 w-20 bg-white/5 rounded-full btn-auto-sheen border border-white/5"></div>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                We support employers across permanent recruitment, contract staffing, executive search, and end-to-end recruitment process management.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <Link href="/employers/employer-solutions" className="hover:text-gold transition-colors">Employer Solutions</Link>
          <Link href="/employers/become-a-client" className="hover:text-gold transition-colors">Become a Client</Link>
          <Link href="/employers/our-proven-process" className="hover:text-gold transition-colors">Our Proven Process</Link>
        </div>
      </section>
    </main>
  );
}
