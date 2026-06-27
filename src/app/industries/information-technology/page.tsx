import { Typewriter } from "@/components/Typewriter";
import Image from 'next/image';
import { getIndustryBySlug } from '@/data/industries';
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
  Activity,
  Award,
  Laptop,
  Lock,
  Cloud,
  ChevronDown
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "IT Recruitment & Technology Staffing Solutions | NAYA Staffing",
  description: "NAYA Staffing provides Information Technology recruitment services for employers hiring across software development, cybersecurity, cloud computing, infrastructure, digital systems, and technical support roles.",
  keywords: [
    "IT recruitment agency",
    "technology recruitment services",
    "IT staffing solutions",
    "technical recruitment for IT",
    "software recruitment agency",
    "cybersecurity recruitment",
    "cloud hiring services",
    "technology staffing company",
    "software developer recruitment",
    "IT hiring solutions",
    "digital talent recruitment",
    "infrastructure staffing",
    "technical support recruitment",
    "SaaS recruitment",
    "AI and machine learning hiring",
    "technology talent acquisition"
  ]
};

export default function InformationTechnologyIndustryPage() {
  const industryData = getIndustryBySlug("information-technology");
  const galleryImages = industryData && industryData.subIndustries ? industryData.subIndustries.flatMap((sub: any) => sub.images ? sub.images.slice(1) : []) : [];
  const reasons = [
    {
      title: "Technical Skill Requirements Are Often Highly Specific",
      desc: "The same broad job title can involve very different stacks, tools, systems, or delivery expectations from one employer to another.",
      icon: <Cpu className="w-8 h-8 text-gold" />
    },
    {
      title: "The Talent Market Is Highly Competitive",
      desc: "Strong technical candidates are often in demand, which means employers need more focused recruitment strategies to secure attention and traction.",
      icon: <TrendingUp className="w-8 h-8 text-gold" />
    },
    {
      title: "Role Mismatch Can Be Costly",
      desc: "A poor technical hire can affect systems, delivery quality, project speed, product development, security, and team performance.",
      icon: <Activity className="w-8 h-8 text-gold" />
    },
    {
      title: "Technology Teams Often Scale Quickly",
      desc: "Growth-stage and digitally evolving businesses often need to hire across multiple technical roles in a short timeframe.",
      icon: <Rocket className="w-8 h-8 text-gold" />
    },
    {
      title: "Technical Hiring Needs Better Screening Logic",
      desc: "It is not enough to match keywords on a resume. Recruitment needs stronger understanding of technical relevance and role context.",
      icon: <ShieldCheck className="w-8 h-8 text-gold" />
    },
    {
      title: "Modern IT Hiring Often Connects to Broader Strategy",
      desc: "Cloud transformation, cybersecurity readiness, digital operations, product development, and remote work all change how employers recruit technical talent.",
      icon: <Settings className="w-8 h-8 text-gold" />
    }
  ];

  const subSectors = [
    {
      name: "Software Development",
      slug: "software-development",
      desc: "Recruitment support for software-focused roles across development teams, digital product environments, application delivery, testing, and broader engineering functions.",
      roles: ["Software Developers", "Front-End Developers", "Back-End Developers", "Full-Stack Developers", "QA / Test Engineers", "Application Support Roles"],
      icon: <Laptop className="w-8 h-8 text-gold" />
    },
    {
      name: "Cybersecurity",
      slug: "cybersecurity",
      desc: "Hiring support for employers seeking talent in information security, cyber risk, security operations, infrastructure protection, and broader security-focused technical environments.",
      roles: ["Cybersecurity Analysts", "Information Security Specialists", "Security Operations Staff", "Risk and Compliance Technical Roles", "Security Support Roles"],
      icon: <Lock className="w-8 h-8 text-gold" />
    },
    {
      name: "Cloud Computing",
      slug: "cloud-computing",
      desc: "Recruitment solutions for businesses building cloud capability across infrastructure, systems modernization, operations support, cloud-enabled delivery, and technical transformation.",
      roles: ["Cloud Support Professionals", "Infrastructure Engineers", "Systems Administrators", "DevOps-Adjacent Roles", "Cloud Operations Staff"],
      icon: <Cloud className="w-8 h-8 text-gold" />
    }
  ];

  const expansionTopics = [
    "Software & SaaS",
    "Artificial Intelligence & Machine Learning",
    "Data & Analytics",
    "Digital Product Environments",
    "IT Infrastructure & Support",
    "Systems & Technical Operations"
  ];

  const roleGroups = [
    {
      title: "Software & Product Roles",
      roles: [
        "Software Developers",
        "Full-Stack Developers",
        "Front-End Developers",
        "Back-End Developers",
        "QA / Test Engineers",
        "Product Support Technologists"
      ]
    },
    {
      title: "IT Infrastructure & Support Roles",
      roles: [
        "IT Support Specialists",
        "Systems Administrators",
        "Network Support Professionals",
        "Infrastructure Engineers",
        "Technical Operations Staff",
        "Cloud Support Roles"
      ]
    },
    {
      title: "Cybersecurity & Risk Roles",
      roles: [
        "Cybersecurity Analysts",
        "Information Security Specialists",
        "Security Operations Roles",
        "Technical Risk and Compliance Roles"
      ]
    },
    {
      title: "Data & Digital Roles",
      roles: [
        "Data Analysts",
        "Data Engineers",
        "BI / Reporting Specialists",
        "Systems and Automation Support Roles",
        "Digital Systems Specialists"
      ]
    },
    {
      title: "Technical Leadership & Specialist Roles",
      roles: [
        "Technical Team Leads",
        "Engineering Managers",
        "Implementation Specialists",
        "Solutions Support Roles",
        "Specialist Technical Hires"
      ]
    }
  ];

  const challenges = [
    {
      title: "Skill Shortages in Specialist Areas",
      desc: "Some technical roles are hard to fill because the required talent pool is limited or highly competitive."
    },
    {
      title: "Rapidly Changing Role Requirements",
      desc: "Technology environments evolve quickly, and the ideal candidate profile may shift as systems, priorities, or products change."
    },
    {
      title: "High Competition for Strong Talent",
      desc: "Employers may compete with larger brands, faster-moving startups, or remote-first businesses for the same candidates."
    },
    {
      title: "Difficulty Filtering Technical Relevance",
      desc: "A large number of applications does not always mean a strong candidate pool. Technical alignment still needs careful review."
    },
    {
      title: "Delays Can Affect Delivery",
      desc: "Open technical roles can slow product timelines, system reliability, support performance, or digital transformation initiatives."
    },
    {
      title: "Technical Hiring Must Still Support Business Goals",
      desc: "The right hire is not just technically capable. The person also needs to fit the team, role context, and business direction."
    }
  ];

  const supportAreas = [
    {
      title: "Specialist Technical Recruitment",
      desc: "Helping employers hire for software, cybersecurity, infrastructure, cloud, digital systems, and technical support roles with better alignment."
    },
    {
      title: "Permanent and Contract Hiring Models",
      desc: "Supporting long-term team building as well as flexible technical hiring needs where appropriate."
    },
    {
      title: "Screening & Assessment Support",
      desc: "Helping employers improve shortlist quality and reduce weak-fit candidates in technical hiring workflows."
    },
    {
      title: "Headhunting for Hard-to-Find Technical Talent",
      desc: "Supporting direct-search recruitment when technical talent is scarce or difficult to reach through standard channels."
    },
    {
      title: "Remote and Global Talent Access",
      desc: "Connecting technology employers with broader talent markets when local availability is limited or workforce models are distributed."
    },
    {
      title: "Scalable Recruitment Support for Growth Teams",
      desc: "Helping startups, digital teams, and expanding employers build technical capability more effectively."
    }
  ];

  const pillars = [
    {
      title: "Technology-Aware Search Thinking",
      desc: "We treat technology hiring as specialist recruitment, not just general staffing with IT titles attached."
    },
    {
      title: "Better Technical Role Precision",
      desc: "We help align recruitment more closely with the systems, tools, capabilities, and context the role actually requires."
    },
    {
      title: "Support Across Core IT Sub-Sectors",
      desc: "Our structure already aligns with Software Development, Cybersecurity, and Cloud Computing as primary IT hiring environments."
    },
    {
      title: "Flexible Connection to Related Services",
      desc: "IT recruitment can connect with technical recruitment, headhunting, remote hiring, global hiring, startup hiring, and RPO support."
    },
    {
      title: "Modern Workforce Awareness",
      desc: "Technology hiring often involves remote, hybrid, distributed, and globally competitive markets, and our service positioning reflects that."
    },
    {
      title: "Premium, Business-Relevant Delivery",
      desc: "We help employers hire technical talent through a process that feels structured, credible, and commercially useful."
    }
  ];

  const relatedServices = [
    { name: "Technical Recruitment", href: "/technical-recruitment", desc: "Specialist hiring support across IT, software, and engineering roles." },
    { name: "Headhunting Services", href: "/headhunting-services", desc: "Targeted direct search for hard-to-fill and specialist hires." },
    { name: "Screening & Assessment", href: "/screening-assessment", desc: "Structured candidate screening and evaluation support." },
    { name: "Permanent Recruitment", href: "/permanent-recruitment", desc: "Core long-term hiring solutions for ongoing business needs." },
    { name: "Contract Staffing", href: "/contract-staffing", desc: "Flexible staffing solutions for temporary or project-based needs." },
    { name: "Recruitment Process Outsourcing (RPO)", href: "/recruitment-process-outsourcing", desc: "End-to-end recruitment management to scale your hiring operations." },
    { name: "Global Hiring", href: "/global-hiring", desc: "Strategic international recruitment solutions across borders." },
    { name: "Remote Hiring Solutions", href: "/remote-hiring-solutions", desc: "Custom sourcing strategy for distributed or remote-first teams." },
    { name: "Startup Hiring Solutions", href: "/startup-hiring-solutions", desc: "Flexible, growth-aware recruitment support for founders." },
    { name: "Talent Mapping", href: "/talent-mapping", desc: "Strategic market intelligence and recruitment planning services." }
  ];

  const relatedMainPages = [
    { name: "Industries Overview", href: "/our-industries" },
    { name: "Employer Solutions", href: "/employer-solutions" },
    { name: "Our Proven Process", href: "/our-proven-process" },
    { name: "Contact Us", href: "/contact-us" }
  ];

  const faqs = [
    {
      question: "Does NAYA Staffing recruit for Information Technology roles?",
      answer: "Yes. NAYA Staffing supports hiring across the Information Technology sector, including software development, cybersecurity, cloud computing, infrastructure, digital systems, and technical support environments."
    },
    {
      question: "What types of IT roles can NAYA Staffing help fill?",
      answer: "NAYA Staffing can support hiring for software developers, IT support professionals, systems administrators, infrastructure engineers, cybersecurity roles, data specialists, cloud support roles, and other technical positions."
    },
    {
      question: "Can NAYA Staffing support software, cybersecurity, and cloud hiring?",
      answer: "Yes. Our industry structure lists Software Development, Cybersecurity, and Cloud Computing as the main IT sub-areas supported."
    },
    {
      question: "Why is Information Technology recruitment different from general recruitment?",
      answer: "Technology recruitment often requires more precise evaluation of technical relevance, systems exposure, role context, and market competition than broader recruitment alone."
    },
    {
      question: "Can NAYA Staffing help with hard-to-fill technical roles?",
      answer: "Yes. NAYA Staffing can support specialist technical hiring through focused recruitment, shortlist improvement, and proactive search approaches where needed."
    },
    {
      question: "Is this page only for software companies?",
      answer: "No. This page can support software businesses, digital teams, infrastructure-led employers, IT environments within non-tech sectors, and any company hiring specialist technology talent."
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Technology & Digital Talent Recruitment</span>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
            <Typewriter>
              Information Technology Recruitment for <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Fast-Moving, High-Demand Hiring Needs
              </span>
            </Typewriter>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
              NAYA Staffing supports employers across the Information Technology sector with recruitment solutions designed for modern technical hiring. From software development, cybersecurity, and cloud computing to infrastructure, digital systems, and technical support roles, we help businesses access relevant talent with greater precision, stronger alignment, and more confidence in competitive hiring environments.
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
                href="/services" 
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 transition-all duration-300 backdrop-blur-xl btn-sheen"
              >
                Explore Our Services
              </Link>
            </div>
            <div className="pt-10 border-t border-white/5 mt-10 max-w-xl mx-auto text-center animate-fade-in-up animate-delay-400">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 leading-loose">
                Built for businesses hiring across software, digital, infrastructure, technical support, and emerging technology environments.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-20">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold to-transparent"></div>
        </div>
      </section>

      {/* 2. INDUSTRY OVERVIEW SECTION */}
      <section className="py-24 relative overflow-hidden bg-navy-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 lg:gap-12 xl:gap-20 items-start">
            {/* Heading Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
                Industry Focus
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                Recruitment Support for a <br className="hidden md:inline" />
                <span className="text-gold">Rapidly Evolving Sector</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            {/* Paragraphs Column */}
            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                The Information Technology sector moves quickly. Skill demand changes fast, role requirements evolve with new tools and systems, and competition for strong talent is often intense. Employers need recruitment support that understands the difference between broad technical titles and the real capabilities required for a specific role or team environment.
              </p>
              <p>
                That is why technology hiring often needs a more specialized recruitment approach. Employers are not just hiring “IT staff.” They may be hiring software developers, infrastructure professionals, cybersecurity specialists, cloud-focused talent, technical support teams, or digital systems experts, each with different expectations, tools, and delivery contexts.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                NAYA Staffing’s Information Technology recruitment support is designed to help employers navigate that complexity. We work with businesses that need stronger access to technical talent, more accurate role alignment, and a recruitment process that reflects the pace and specificity of the technology sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY IT RECRUITMENT REQUIRES A SPECIALIZED APPROACH */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="btn-rotating-border absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 btn-auto-sheen border border-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2 btn-auto-sheen border border-white/5">
              Why IT is Different
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Information Technology <span className="text-gold">Recruitment Is Different</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Technology hiring is different from general recruitment because role relevance depends heavily on specific capabilities, system environments, and practical technical fit.
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

      {/* 4. IT SUB-SECTORS WE SUPPORT */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Information Technology <span className="text-gold">Areas We Support</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              We support hiring across Software Development, Cybersecurity, and Cloud Computing, with broader capability across digital systems, technical support, and related technology functions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
            {subSectors.map((sub: any, idx: number) => {
              const subData = industryData?.subIndustries?.find((s: any) => s.slug === sub.slug);
              const coverImage = subData?.images && subData.images.length > 0 ? subData.images[0] : null;
              
              return (
              <div key={idx} className="group relative rounded-[40px] overflow-hidden${coverImage ? '' : ' p-10'} bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                {coverImage && (
                  <div className="relative w-full h-48 overflow-hidden rounded-t-[40px] mb-6">
                    <Image 
                      src={coverImage} 
                      alt={sub.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent opacity-80"></div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className={"relative z-10" + (coverImage ? " p-10 pt-0" : "") + " space-y-6 flex-grow flex flex-col justify-between"}>
                  <div>
                    <div className="btn-rotating-border w-14 h-14 bg-white/5 border border-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/5 group-hover:text-white hover:text-gold transition-all duration-500 btn-auto-sheen border border-white/5">
                      {sub.icon}
                    </div>
                    <h3 className="text-white font-black text-2xl leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                      {sub.name}
                    </h3>
                    <p className="text-slate-400 text-sm font-semibold leading-relaxed mt-4 mb-6 group-hover:text-slate-300 transition-colors">
                      {sub.desc}
                    </p>
                    
                    {/* Example roles list */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {sub.roles.map((role: string, i: number) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-slate-400 font-semibold uppercase btn-sheen">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link 
                    href={`/industries/information-technology/${sub.slug}`}
                    className="group/link inline-flex items-center gap-2 text-xs font-black tracking-widest text-gold hover:text-white uppercase transition-colors mt-auto"
                  >
                    Learn More About {sub.name} Hiring <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ); })}
          </div>
        </div>
      </section>

      {/* 5. OPTIONAL EXPANSION / FUTURE SUB-SECTORS */}
      <section className="py-24 bg-navy relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl text-center space-y-8">
          <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
            Expansion Areas
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            Additional Technology Areas <span className="text-gold">for Expansion</span>
          </h2>
          <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
          <p className="text-slate-400 text-lg leading-relaxed font-semibold max-w-4xl mx-auto">
            Our broader capabilities support businesses seeking growth and digital transformation across several key adjacent domains:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-10">
            {expansionTopics.map((topic, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-gold/20 text-center transition-all duration-300">
                <span className="text-sm font-bold text-slate-300 tracking-tight">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ROLES WE HELP FILL */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              IT Roles We <span className="text-gold">Help Employers Hire</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports recruitment across a wide range of Information Technology roles depending on the employer’s environment, systems, team structure, and hiring priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-8">
            {roleGroups.map((group, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-[#0B132B]/50 border border-white/5 hover:border-gold/30 transition-all duration-500 flex flex-col h-full">
                <h3 className="text-white font-black text-lg mb-6 group-hover:text-gold transition-colors tracking-tight uppercase border-b border-white/10 pb-4">
                  {group.title}
                </h3>
                <ul className="space-y-3 flex-grow text-slate-400 text-xs font-semibold">
                  {group.roles.map((role, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <span className="text-gold mt-0.5">•</span>
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HIRING CHALLENGES IN INFORMATION TECHNOLOGY */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Common Hiring Challenges in the <span className="text-gold">IT Sector</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Technology employers often face hiring conditions that require more than broad recruitment activity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {challenges.map((challenge, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6">
                  <h3 className="text-white font-black text-xl leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                    {challenge.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {challenge.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. HOW NAYA STAFFING SUPPORTS IT EMPLOYERS */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              How We Support <span className="text-gold">Information Technology Hiring</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              NAYA Staffing supports Information Technology employers with recruitment solutions designed around role precision, technical relevance, and hiring efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {supportAreas.map((area, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6">
                  <h3 className="text-white font-black text-xl leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                    {area.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {area.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. WHY EMPLOYERS CHOOSE NAYA STAFFING FOR IT RECRUITMENT */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose NAYA Staffing <span className="text-gold">for IT Recruitment</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Information Technology hiring requires stronger role awareness, sharper screening, and a recruitment process that reflects the speed and competitiveness of the sector. NAYA Staffing’s approach is designed around those realities.
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

      {/* 10. RELATED SERVICES FOR TECHNOLOGY HIRING */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 xl:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.95]">
                Related Services <br/>
                for <span className="text-gold">Technology Hiring</span>
              </h2>
              <div className="btn-rotating-border h-1 w-20 bg-white/5 rounded-full btn-auto-sheen border border-white/5"></div>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                Technology employers often need more than one recruitment model depending on role type, urgency, and workforce strategy.
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

      {/* 11. FAQ SECTION */}
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

      
      {/* MASONRY GALLERY */}
      {galleryImages.length > 0 && (
        <section className="py-24 bg-[#0B132B] relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold btn-auto-sheen border border-white/5">
                Industry In Action
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
                Explore <span className="text-gold">Our Expertise</span>
              </h2>
            </div>
            
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {galleryImages.map((src: string, idx: number) => (
                <div key={idx} className="relative break-inside-avoid rounded-3xl overflow-hidden group border border-white/10 shadow-2xl">
                  <Image 
                    src={src}
                    alt={`${industryData?.name} gallery image ${idx + 1}`}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

{/* 12. FINAL CTA SECTION */}
      <section className="py-32 relative overflow-hidden bg-navy-dark border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="btn-rotating-border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.03] blur-[200px] rounded-full btn-auto-sheen border border-white/5"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-navy-light/10 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-panel p-12 md:p-24 rounded-[4rem] text-center border border-gold/20 shadow-2xl shadow-gold/10">
            <div className="btn-rotating-border inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 text-white hover:text-gold mb-10 shadow-2xl shadow-gold/30 btn-auto-sheen border border-white/5">
              <Rocket className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Build Stronger Technology Teams <br/>
              With <span className="text-gold">More Precise Hiring</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              Technology hiring moves quickly, and the right talent can directly influence delivery, systems, growth, and business performance. NAYA Staffing helps employers recruit across Information Technology with stronger search precision, better candidate alignment, and more confidence in technical hiring decisions.
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
                href="/services" 
                className="w-full sm:w-auto px-16 py-8 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-gold hover:text-gold font-black rounded-[32px] transition-all uppercase tracking-[0.3em] text-[10px] btn-sheen"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
