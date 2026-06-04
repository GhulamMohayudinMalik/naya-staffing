"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search, Users, Briefcase, FileText, Clock, TrendingUp, Check, Globe, Laptop, GraduationCap, Target, Cpu, Coins, Rocket, Settings, Sparkles } from "lucide-react";
import VideoBackground from "@/components/VideoBackground";
import FAQItem from "@/components/FAQItem";

export default function ServicesPage() {
  const [activePath, setActivePath] = useState("strategic");

  const hiringPaths = [
    {
      id: "strategic",
      name: "Strategic Hires",
      desc: "For leadership, confidential, or high-precision market needs.",
      services: [
        { title: "Executive Search", href: "/executive-search" },
        { title: "Talent Mapping", href: "/talent-mapping" },
        { title: "Headhunting Services", href: "/headhunting-services" }
      ]
    },
    {
      id: "long-term",
      name: "Long-Term Hires",
      desc: "For full-time permanent headcount and talent pipelines.",
      services: [
        { title: "Permanent Recruitment", href: "/permanent-recruitment" },
        { title: "Campus Recruitment", href: "/campus-recruitment" },
        { title: "Diversity Hiring", href: "/diversity-hiring" }
      ]
    },
    {
      id: "flexible",
      name: "Flexible Hires",
      desc: "For temporary, seasonal, remote, or contract capacity.",
      services: [
        { title: "Contract Staffing", href: "/contract-staffing" },
        { title: "Remote Hiring Solutions", href: "/remote-hiring-solutions" },
        { title: "Screening & Assessment", href: "/screening-assessment" }
      ]
    },
    {
      id: "scalable",
      name: "Scalable Partnerships",
      desc: "For recurring volume hiring, startups, or full process support.",
      services: [
        { title: "Recruitment Process Outsourcing (RPO)", href: "/recruitment-process-outsourcing" },
        { title: "Turnkey Recruitment Projects", href: "/turnkey-recruitment-projects" },
        { title: "Startup Hiring Solutions", href: "/startup-hiring-solutions" }
      ]
    },
    {
      id: "specialist",
      name: "Specialist Needs",
      desc: "For technical, sales, or brand positioning requirements.",
      services: [
        { title: "Technical Recruitment", href: "/technical-recruitment" },
        { title: "Sales Recruitment", href: "/sales-recruitment" },
        { title: "Employer Branding Support", href: "/employer-branding" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-navy-dark flex flex-col font-sans selection:bg-gold selection:text-navy-dark overflow-x-hidden">
      {/* Hero Section with Video & Glass Overlay */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-28 pb-20">
        <VideoBackground 
          src="/videos/hero.mp4" 
          overlayOpacity="bg-navy-dark/85"
          className="scale-105"
        />

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 blur-[120px] rounded-full animate-pulse transition-all duration-5000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-navy-light/20 blur-[150px] rounded-full animate-float transition-all duration-7000"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-8 animate-fade-up">
          <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2">
            Flexible Recruitment & Workforce Solutions
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1.05] drop-shadow-2xl uppercase">
            Recruitment Services <br className="hidden md:inline" />
            <span className="text-shimmer">Built Around Real Hiring Needs</span>
          </h1>
          <p className="text-base md:text-lg font-semibold text-slate-200 tracking-tight max-w-3xl mx-auto opacity-90 leading-relaxed">
            NAYA Staffing offers a complete range of recruitment and staffing services designed to help employers hire smarter, scale faster, and access talent with greater confidence. Whether you need executive search, permanent recruitment, contract staffing, Recruitment Process Outsourcing, global hiring support, or specialized talent solutions, our services are built to adapt to your goals, hiring volume, and workforce strategy.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link 
              href="/contact-us" 
              className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-hover text-navy-dark rounded-full font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_8px_32px_rgba(212,175,55,0.25)] hover:shadow-[0_12px_48px_rgba(212,175,55,0.45)] hover:-translate-y-1 text-center"
            >
              Schedule Consultation
            </Link>
            <Link 
              href="/become-a-client" 
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 text-center"
            >
              Become a Client
            </Link>
          </div>

          <p className="text-xs text-slate-400 font-semibold tracking-wide italic opacity-85 pt-4 max-w-2xl mx-auto leading-relaxed">
            From urgent hiring needs to long-term workforce planning, we deliver recruitment solutions that are flexible, strategic, and built for modern business.
          </p>

          <div className="pt-8">
            <Link href="#all-services" className="w-12 h-20 border-2 border-white/20 rounded-full flex items-start justify-center p-2 mx-auto group hover:border-gold transition-colors">
              <div className="w-1 h-3 bg-gold rounded-full animate-bounce mt-2 group-hover:bg-gold-hover"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro / Services Philosophy Section */}
      <section id="philosophy" className="relative bg-[#040814] py-24 border-t border-white/5 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-gold/5 blur-[120px] rounded-full"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Heading Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold">
                Philosophy
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                A Broader, Smarter <br className="hidden md:inline" />
                <span className="text-shimmer">Approach to Recruitment</span>
              </h2>
              <div className="h-1 w-20 bg-gold rounded-full opacity-60"></div>
            </div>

            {/* Paragraphs Column */}
            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Hiring needs are rarely one-size-fits-all. Some organizations need confidential support for leadership appointments. Others need high-volume recruitment, contract staffing for operational flexibility, or embedded recruitment support across multiple departments. Modern hiring demands solutions that can flex with growth, urgency, specialization, and market complexity.
              </p>
              <p>
                At NAYA Staffing, our services are designed to support employers at every stage of the hiring journey. We work with startups, growing businesses, established organizations, and globally expanding teams to deliver recruitment strategies that match business realities, talent availability, and long-term workforce goals.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                Rather than forcing every client into the same hiring model, we provide a range of recruitment services that can be used independently or combined into a more tailored solution. This creates a better experience for employers, stronger hiring outcomes, and a more scalable approach to workforce support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section id="core-services" className="bg-navy-dark py-32 border-t border-white/5 relative">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-navy-light/10 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24 flex flex-col items-center">
            <h6 className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6 px-4 py-1 bg-gold/5 rounded-full border border-gold/10">Solutions Ecosystem</h6>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-tight uppercase">Core Recruitment Services</h2>
            <p className="text-base md:text-lg text-slate-405 max-w-2xl font-semibold leading-relaxed mb-10">
              These services form the foundation of our recruitment offering and address some of the most common and most critical hiring needs businesses face today.
            </p>
            <div className="h-1 w-24 bg-gold rounded-full opacity-50"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Executive Search",
                icon: Briefcase,
                desc: "A targeted, high-precision recruitment service for leadership, confidential, and business-critical roles where quality, discretion, and alignment matter most.",
                bestFor: [
                  "senior leadership hiring",
                  "niche or hard-to-fill roles",
                  "confidential searches",
                  "strategic appointments"
                ],
                href: "/executive-search",
                cta: "Explore Executive Search"
              },
              {
                title: "Permanent Recruitment",
                icon: Users,
                desc: "A structured hiring solution for organizations seeking long-term employees who match both the role requirements and the broader culture and growth goals of the business.",
                bestFor: [
                  "full-time hiring",
                  "long-term team building",
                  "replacing key employees",
                  "scaling permanent headcount"
                ],
                href: "/permanent-recruitment",
                cta: "Explore Permanent Recruitment"
              },
              {
                title: "Contract Staffing",
                icon: Clock,
                desc: "A flexible workforce solution for businesses that need skilled professionals on a temporary, project-based, seasonal, or urgent basis without sacrificing quality.",
                bestFor: [
                  "short-term projects",
                  "urgent team gaps",
                  "seasonal demand",
                  "flexible workforce expansion"
                ],
                href: "/contract-staffing",
                cta: "Explore Contract Staffing"
              },
              {
                title: "Recruitment Process Outsourcing (RPO)",
                icon: TrendingUp,
                desc: "A scalable recruitment partnership in which NAYA Staffing supports part or all of a company’s hiring function to improve consistency, speed, employer brand experience, and operational efficiency.",
                bestFor: [
                  "ongoing hiring demand",
                  "multi-role recruitment",
                  "rapid scaling",
                  "hiring process improvement"
                ],
                href: "/recruitment-process-outsourcing",
                cta: "Explore RPO"
              },
              {
                title: "Global Hiring",
                icon: Globe,
                desc: "A recruitment solution for businesses hiring across international markets, remote environments, and distributed workforce models.",
                bestFor: [
                  "cross-border hiring",
                  "distributed teams",
                  "international expansion",
                  "remote workforce building"
                ],
                href: "/global-hiring",
                cta: "Explore Global Hiring"
              },
              {
                title: "Screening & Assessment",
                icon: Search,
                desc: "Candidate evaluation support that helps employers improve shortlist quality, reduce hiring risk, and make stronger hiring decisions.",
                bestFor: [
                  "early-stage filtering",
                  "quality control",
                  "faster shortlist creation",
                  "improving interview efficiency"
                ],
                href: "/screening-assessment",
                cta: "Explore Screening & Assessment"
              }
            ].map((service, idx) => (
              <div key={idx} className="glass-panel group p-10 md:p-12 rounded-[48px] hover:border-gold/30 transition-all duration-500 transform hover:-translate-y-3 flex flex-col justify-between text-left">
                <div>
                  <div className="w-16 h-16 bg-gold/5 border border-gold/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold group-hover:text-navy-dark transition-all duration-500 shadow-xl group-hover:shadow-gold/20">
                    <service.icon className="w-8 h-8 text-gold group-hover:text-inherit transition-colors" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-6 group-hover:text-gold transition-colors tracking-tight leading-tight uppercase">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 mb-8 leading-relaxed font-semibold text-sm md:text-base">
                    {service.desc}
                  </p>
                  
                  <div className="border-t border-white/10 pt-6 mb-8">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gold mb-4">Best For:</h4>
                    <ul className="space-y-3">
                      {service.bestFor.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2.5 text-xs md:text-sm font-semibold text-slate-350">
                          <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link 
                  href={service.href} 
                  className="w-full text-center py-4 bg-white/5 border border-white/10 rounded-full font-black text-[10px] md:text-xs uppercase tracking-widest text-white group-hover:bg-gold group-hover:text-navy-dark group-hover:border-gold transition-all duration-300 flex items-center justify-center gap-3"
                >
                  {service.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services Grid */}
      <section id="specialized-services" className="bg-[#040814] py-32 border-t border-white/5 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-navy-light/10 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24 flex flex-col items-center">
            <h6 className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6 px-4 py-1 bg-gold/5 rounded-full border border-gold/10">Specialized Focus</h6>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-tight uppercase">Specialized Recruitment Solutions</h2>
            <p className="text-base md:text-lg text-slate-400 max-w-3xl font-semibold leading-relaxed mb-10">
              In addition to our core recruitment services, NAYA Staffing provides specialized support for businesses with niche, evolving, or high-growth hiring needs.
            </p>
            <div className="h-1 w-24 bg-gold rounded-full opacity-50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Talent Mapping",
                icon: Search,
                desc: "Strategic talent market research and candidate landscape analysis that helps businesses understand talent availability, compensation trends, and future hiring opportunities.",
                href: "/talent-mapping",
                cta: "Explore Talent Mapping"
              },
              {
                title: "Employer Branding Support",
                icon: Sparkles,
                desc: "Support for strengthening how your business is perceived by candidates through clearer positioning, better hiring communication, and a more professional recruitment experience.",
                href: "/employer-branding",
                cta: "Explore Employer Branding"
              },
              {
                title: "Remote Hiring Solutions",
                icon: Laptop,
                desc: "Recruitment support for companies building remote teams and location-flexible workforces across functions and markets.",
                href: "/remote-hiring-solutions",
                cta: "Explore Remote Hiring Solutions"
              },
              {
                title: "Diversity Hiring",
                icon: Users,
                desc: "A more intentional recruitment approach designed to support broader talent access, inclusive hiring efforts, and stronger workforce diversity outcomes.",
                href: "/diversity-hiring",
                cta: "Explore Diversity Hiring"
              },
              {
                title: "Campus Recruitment",
                icon: GraduationCap,
                desc: "Entry-level and early-career recruitment support for organizations hiring graduates, interns, and emerging talent pipelines.",
                href: "/campus-recruitment",
                cta: "Explore Campus Recruitment"
              },
              {
                title: "Headhunting Services",
                icon: Target,
                desc: "Targeted outreach and direct talent engagement for hard-to-reach, passive, or highly competitive candidates.",
                href: "/headhunting-services",
                cta: "Explore Headhunting Services"
              },
              {
                title: "Technical Recruitment",
                icon: Cpu,
                desc: "Specialized recruitment support for technical roles across engineering, IT, product, infrastructure, digital, and emerging technology functions.",
                href: "/technical-recruitment",
                cta: "Explore Technical Recruitment"
              },
              {
                title: "Sales Recruitment",
                icon: Coins,
                desc: "Focused hiring support for revenue-driving roles including business development, account management, enterprise sales, and commercial leadership.",
                href: "/sales-recruitment",
                cta: "Explore Sales Recruitment"
              },
              {
                title: "Startup Hiring Solutions",
                icon: Rocket,
                desc: "Agile recruitment support tailored for startups and fast-growing businesses that need strong hires, fast execution, and flexible hiring strategies.",
                href: "/startup-hiring-solutions",
                cta: "Explore Startup Hiring Solutions"
              },
              {
                title: "Turnkey Recruitment Projects",
                icon: Settings,
                desc: "End-to-end recruitment delivery for project-based, multi-role, or business-critical hiring initiatives that require complete execution support.",
                href: "/turnkey-recruitment-projects",
                cta: "Explore Turnkey Recruitment Projects"
              }
            ].map((service, idx) => (
              <div key={idx} className="glass-panel group p-8 md:p-10 rounded-[32px] hover:border-gold/30 transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between text-left">
                <div>
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-navy-dark transition-all duration-500 shadow-md">
                    <service.icon className="w-6 h-6 text-gold group-hover:text-inherit transition-colors" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-4 group-hover:text-gold transition-colors tracking-tight leading-tight uppercase">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 mb-8 leading-relaxed font-semibold text-sm">
                    {service.desc}
                  </p>
                </div>

                <Link 
                  href={service.href} 
                  className="inline-flex items-center text-xs font-black uppercase tracking-widest text-gold hover:text-gold-hover transition-colors group/link mt-auto gap-2"
                >
                  {service.cta} <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section id="choose-service" className="bg-[#040814] py-32 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-6">
              Decision Guide
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-8 uppercase">
              Which Recruitment Service Is Right for Your Business?
            </h2>
            <p className="text-base md:text-lg text-slate-400 font-semibold leading-relaxed">
              Different hiring needs require different recruitment models. Choosing the right service depends on role type, hiring urgency, budget, volume, market complexity, and the level of strategic support your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Choose Executive Search",
                desc: "when hiring for senior, niche, confidential, or leadership roles where precision is more important than volume."
              },
              {
                title: "Choose Permanent Recruitment",
                desc: "when building long-term teams and hiring full-time talent for ongoing business growth."
              },
              {
                title: "Choose Contract Staffing",
                desc: "when you need flexibility, fast turnaround, project-based support, or temporary workforce capacity."
              },
              {
                title: "Choose RPO",
                desc: "when your business has recurring hiring demand, rapid scaling needs, or requires a more embedded recruitment function."
              },
              {
                title: "Choose Global Hiring or Remote Hiring Solutions",
                desc: "when the right talent is not limited to one geography and your business needs broader market access."
              },
              {
                title: "Choose Talent Mapping or Screening & Assessment",
                desc: "when your team needs better hiring intelligence, stronger shortlists, or reduced risk in decision-making."
              }
            ].map((block, idx) => (
              <div key={idx} className="glass-panel p-8 md:p-10 rounded-[32px] border-l-4 border-l-gold hover:border-gold/30 transition-all duration-300 flex flex-col justify-center min-h-[180px]">
                <h3 className="text-lg font-black text-white mb-3 tracking-tight uppercase leading-tight">
                  {block.title}
                </h3>
                <p className="text-sm text-slate-400 font-semibold leading-relaxed">
                  {block.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Solutions Finder Section (UX Note recommendation) */}
      <section className="bg-navy py-24 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-6">
              Solutions Explorer
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-6 uppercase">
              Explore by Hiring Category
            </h2>
            <p className="text-sm md:text-base text-slate-405 font-semibold max-w-xl mx-auto leading-relaxed">
              Select your primary hiring path to find recommended recruitment services tailored to your organizational goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Category Selector Tabs */}
            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              {hiringPaths.map((path) => (
                <button
                  key={path.id}
                  onClick={() => setActivePath(path.id)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${activePath === path.id
                    ? "bg-gold border-gold text-navy-dark shadow-[0_8px_32px_rgba(212,175,55,0.2)]"
                    : "bg-[#040814]/40 border-white/5 text-white hover:border-gold/30 hover:bg-[#040814]/80 cursor-pointer"
                    }`}
                >
                  <span className="block text-xs font-black uppercase tracking-wider mb-1 opacity-70">
                    Category
                  </span>
                  <span className="block text-lg font-black tracking-tight uppercase">
                    {path.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Path Details & Services */}
            <div className="lg:col-span-8 glass-panel p-8 md:p-12 rounded-[32px] border border-white/10 flex flex-col justify-between">
              <div>
                <span className="inline-block text-xs font-black uppercase tracking-[0.2em] text-gold mb-4">
                  Hiring Focus
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase mb-4">
                  {hiringPaths.find((p) => p.id === activePath)?.name}
                </h3>
                <p className="text-base text-slate-350 font-semibold mb-8 leading-relaxed">
                  {hiringPaths.find((p) => p.id === activePath)?.desc}
                </p>
                <div className="border-t border-white/10 pt-8">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gold mb-6">
                    Recommended Services:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {hiringPaths.find((p) => p.id === activePath)?.services.map((service, idx) => (
                      <Link
                        key={idx}
                        href={service.href}
                        className="group/item flex items-center justify-between p-4 bg-[#040814]/40 border border-white/5 hover:border-gold/30 rounded-xl transition-all"
                      >
                        <span className="text-sm font-black tracking-tight text-white group-hover/item:text-gold uppercase transition-colors">
                          {service.title}
                        </span>
                        <ArrowRight className="w-4 h-4 text-white/45 group-hover/item:text-gold group-hover/item:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-10 mt-12 flex items-center justify-between flex-wrap gap-4 border-t border-white/5">
                <span className="text-xs text-slate-400 font-semibold">
                  Unsure which solution fits your timeline? Let our advisors guide you.
                </span>
                <Link
                  href="/contact-us"
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-black text-[10px] uppercase tracking-widest transition-all"
                >
                  Consult an Advisor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Companies Choose NAYA */}
      <section id="why-choose-naya" className="bg-[#040814] py-32 border-t border-white/5 relative">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-24">
            <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-6">
              Our Value Proposition
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-8 uppercase">
              Why Employers Choose NAYA Staffing Services
            </h2>
            <p className="text-base md:text-lg text-slate-400 font-semibold leading-relaxed">
              Businesses need more than access to resumes. They need a recruitment partner that understands urgency, business context, candidate quality, communication, and hiring outcomes. Our service model is built around those realities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Flexible Hiring Models",
                desc: "We support multiple recruitment formats so employers can choose what fits their current priorities rather than forcing every need into the same approach."
              },
              {
                title: "Strategic Recruitment Thinking",
                desc: "Our work is built on alignment, market awareness, and role understanding, not just candidate volume."
              },
              {
                title: "Specialized + Broad Capability",
                desc: "We combine broad industry support with specialized recruitment services for more complex and business-critical hiring challenges."
              },
              {
                title: "Scalable Partnership",
                desc: "From a single urgent hire to multi-role recruitment support, our services scale with business growth and operational need."
              },
              {
                title: "Professional Candidate Experience",
                desc: "A better candidate journey helps strengthen hiring outcomes and supports employer reputation."
              },
              {
                title: "Modern Global Mindset",
                desc: "We are built for evolving hiring realities including remote work, international access to talent, distributed teams, and flexible workforce planning."
              }
            ].map((pillar, idx) => (
              <div key={idx} className="glass-panel p-10 rounded-[48px] hover:border-gold/30 transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-start text-left relative overflow-hidden group">
                <div className="absolute top-6 right-8 text-5xl font-black text-white/5 group-hover:text-gold/10 transition-colors">
                  {`0${idx + 1}`}
                </div>
                <h3 className="text-xl font-black text-white mb-4 tracking-tight leading-tight uppercase pr-8">
                  {pillar.title}
                </h3>
                <p className="text-sm md:text-base text-slate-400 font-semibold leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Delivery Approach */}
      <section id="delivery-approach" className="bg-[#040814] py-32 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-24">
            <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-6">
              Our Methodology
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-8 uppercase">
              How We Deliver Recruitment Support
            </h2>
            <p className="text-base md:text-lg text-slate-400 font-semibold leading-relaxed">
              Every engagement may differ, but our service delivery approach is grounded in clarity, responsiveness, and hiring alignment. We believe strong recruitment delivery depends on understanding both the role and the wider business context behind it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Understand the Hiring Need",
                desc: "We begin by identifying the role requirements, hiring goals, challenges, priorities, and timeline."
              },
              {
                step: "02",
                title: "Recommend the Right Solution",
                desc: "We align your hiring need with the most suitable service model, whether that is permanent recruitment, contract staffing, RPO, executive search, or a tailored combination."
              },
              {
                step: "03",
                title: "Execute With Focus",
                desc: "We activate sourcing, outreach, screening, and communication workflows based on the specific hiring need and service scope."
              },
              {
                step: "04",
                title: "Present Quality Talent",
                desc: "We focus on relevance, readiness, and alignment to improve hiring confidence and reduce wasted time."
              },
              {
                step: "05",
                title: "Support Decision-Making",
                desc: "We help coordinate interviews, candidate communication, and recruitment momentum throughout the process."
              },
              {
                step: "06",
                title: "Stay Aligned Through Delivery",
                desc: "Our goal is not just activity. It is delivery that moves hiring forward in a way that supports better business outcomes."
              }
            ].map((step, idx) => (
              <div key={idx} className="glass-panel p-10 rounded-[48px] hover:border-gold/30 transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-start text-left relative group">
                <div className="w-12 h-12 bg-gold/10 border border-gold/20 rounded-full flex items-center justify-center font-black text-gold text-sm mb-6 group-hover:bg-gold group-hover:text-navy-dark transition-colors">
                  {step.step}
                </div>
                <h3 className="text-lg md:text-xl font-black text-white mb-4 tracking-tight leading-tight uppercase">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-slate-400 font-semibold leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Talent Section */}
      <section className="bg-navy py-32 overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="max-w-4xl mx-auto text-center space-y-8 flex flex-col items-center">
            <h6 className="text-gold font-black text-xs tracking-[0.5em] uppercase px-4 py-1 bg-gold/5 inline-block rounded-full border border-gold/10">
              Sector Specialization
            </h6>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-[1.1]">
              Services Designed for <br />
              <span className="text-shimmer">Cross-Industry Hiring</span>
            </h2>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed font-semibold max-w-3xl">
              Our recruitment services are designed to support employers across a broad set of industries, from technology, healthcare, industrial, and construction to education, hospitality, retail, insurance, professional services, marketing, and sales. This allows NAYA Staffing to support both generalized workforce needs and more specialized hiring requirements within industry-specific environments.
            </p>
            <div className="pt-6">
              <Link 
                href="/our-industries"
                className="px-10 py-5 bg-gold hover:bg-gold-hover text-navy-dark rounded-full font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_8px_32px_rgba(212,175,55,0.2)] hover:-translate-y-1 block text-center"
              >
                Explore Industries We Serve
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Employer CTA Block */}
      <section className="bg-[#040814] py-24 border-t border-white/5 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <div className="glass-panel p-12 md:p-20 rounded-[64px] border border-white/10 space-y-8 animate-fade-up">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-tight">
              Need Help Choosing the Right Hiring Solution?
            </h2>
            <p className="text-sm md:text-base text-slate-350 max-w-3xl mx-auto font-semibold leading-relaxed">
              Whether you are hiring for one key role or building out an entire team, NAYA Staffing can help you choose the recruitment model that best fits your goals, urgency, and workforce strategy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Link 
                href="/contact-us" 
                className="w-full sm:w-auto px-10 py-5 bg-gold hover:bg-gold-hover text-navy-dark rounded-full font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_8px_32px_rgba(212,175,55,0.25)] hover:shadow-[0_12px_48px_rgba(212,175,55,0.45)] hover:-translate-y-1 text-center"
              >
                Schedule Consultation
              </Link>
              <Link 
                href="/become-a-client" 
                className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 text-center"
              >
                Become a Client
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-navy py-32 border-t border-white/5 relative">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-24 flex flex-col items-center">
            <h6 className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6 px-4 py-1 bg-gold/5 rounded-full border border-gold/10">Common Inquiries</h6>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 uppercase leading-tight">Frequently Asked Questions</h2>
            <p className="text-base md:text-lg text-slate-400 font-semibold max-w-2xl leading-relaxed">
              Frequently Asked Questions About Our Services
            </p>
            <div className="h-1 w-24 bg-gold rounded-full opacity-50 mt-10"></div>
          </div>

          <div className="glass-panel rounded-[40px] border border-white/10 p-6 md:p-10 divide-y divide-white/5">
            {[
              {
                question: "What recruitment services does NAYA Staffing offer?",
                answer: "NAYA Staffing offers executive search, permanent recruitment, contract staffing, Recruitment Process Outsourcing, global hiring, remote hiring solutions, screening and assessment, talent mapping, employer branding support, technical recruitment, sales recruitment, campus recruitment, diversity hiring, startup hiring solutions, headhunting services, and turnkey recruitment projects."
              },
              {
                question: "What is the difference between permanent recruitment and contract staffing?",
                answer: "Permanent recruitment focuses on full-time long-term hires, while contract staffing is designed for temporary, project-based, urgent, or flexible workforce needs."
              },
              {
                question: "When should a company use executive search?",
                answer: "Executive search is best used for leadership roles, highly specialized positions, confidential appointments, and high-impact hires where precision matters more than speed alone."
              },
              {
                question: "What is Recruitment Process Outsourcing?",
                answer: "Recruitment Process Outsourcing is a model where an external recruitment partner supports part or all of a company’s hiring process to improve efficiency, scalability, and consistency."
              },
              {
                question: "Can NAYA Staffing support international or remote hiring?",
                answer: "Yes. NAYA Staffing supports global hiring and remote hiring solutions for employers looking to access talent beyond a single market or location."
              },
              {
                question: "Do you offer specialized hiring services for specific business needs?",
                answer: "Yes. In addition to core services, NAYA Staffing provides specialized solutions such as technical recruitment, sales recruitment, talent mapping, employer branding support, diversity hiring, campus recruitment, and startup hiring support."
              }
            ].map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 bg-[#040814] border-t border-white/5 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 blur-[180px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-10 animate-fade-up">
          <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold">
            Get Started
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-tight">
            Recruitment Support <br className="hidden md:inline" />
            <span className="text-shimmer">That Adapts to Your Business</span>
          </h2>
          <p className="text-base md:text-xl font-semibold text-slate-350 max-w-3xl mx-auto leading-relaxed">
            Hiring challenges vary by company, market, and stage of growth. NAYA Staffing provides recruitment services designed to meet those realities with greater flexibility, stronger alignment, and a more strategic approach to talent acquisition.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-10">
            <Link 
              href="/contact-us" 
              className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-hover text-navy-dark rounded-full font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-xl hover:-translate-y-1 text-center"
            >
              Schedule Consultation
            </Link>
            <Link 
              href="/contact-us" 
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-black text-xs uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 text-center"
            >
              Contact Our Team
            </Link>
            <Link 
              href="/become-a-client" 
              className="w-full sm:w-auto px-8 py-4 bg-white text-navy-dark rounded-full font-black text-xs uppercase tracking-widest hover:bg-slate-200 transition-all duration-300 hover:-translate-y-1 text-center"
            >
              Become a Client
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
