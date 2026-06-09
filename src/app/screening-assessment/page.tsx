import { Typewriter } from "@/components/Typewriter";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  FileText, 
  ShieldCheck, 
  Users, 
  Target, 
  Clock, 
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Lock,
  TrendingUp,
  Search,
  Settings,
  Cpu,
  ArrowUpRight,
  HelpCircle,
  Activity,
  Briefcase
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';
import TestimonialSlider from '@/components/TestimonialSlider';

export const metadata: Metadata = {
  title: "Candidate Screening & Assessment Services | Smarter Hiring Decisions | NAYA Staffing",
  description: "NAYA Staffing provides screening and assessment services to help employers evaluate candidates, improve shortlist quality, reduce hiring risk, and make more confident recruitment decisions.",
  keywords: [
    "candidate screening services",
    "screening and assessment services",
    "recruitment screening services",
    "candidate evaluation services",
    "hiring assessment services",
    "pre-employment screening support",
    "shortlist screening services",
    "recruitment assessment support",
    "resume screening services",
    "candidate shortlisting support",
    "interview pre-screening",
    "recruitment quality control",
    "talent screening partner",
    "hiring decision support",
    "pre-interview candidate evaluation",
    "recruitment risk reduction"
  ]
};

export default function ScreeningAssessmentPage() {
  const useCases = [
    {
      title: "High Applicant Volume",
      desc: "When a role attracts many applications, employers often need support separating relevant candidates from unsuitable ones quickly and consistently.",
      icon: <Users className="w-8 h-8 text-gold" />
    },
    {
      title: "Limited Internal Hiring Time",
      desc: "If hiring managers or internal teams do not have enough time for detailed first-stage review, screening support helps keep the process efficient.",
      icon: <Clock className="w-8 h-8 text-gold" />
    },
    {
      title: "Important or Sensitive Roles",
      desc: "For roles where quality matters more than speed alone, stronger screening helps reduce risk and improve candidate selection.",
      icon: <ShieldCheck className="w-8 h-8 text-gold" />
    },
    {
      title: "Improving Shortlist Quality",
      desc: "When employers want fewer but better-aligned candidates, structured screening helps strengthen the shortlist before interviews begin.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      title: "Reducing Hiring Friction",
      desc: "A better screening process can reduce unnecessary interviews, improve process flow, and help decision-makers focus on the most suitable applicants.",
      icon: <Settings className="w-8 h-8 text-gold" />
    },
    {
      title: "Supporting Ongoing Recruitment Activity",
      desc: "Screening & Assessment is also useful when businesses are hiring repeatedly and need a more consistent front-end evaluation process.",
      icon: <Activity className="w-8 h-8 text-gold" />
    }
  ];

  const servicesInclude = [
    {
      title: "Application and Resume Review",
      desc: "Initial review of submitted applications to identify relevant experience, qualification alignment, and role fit.",
      icon: <FileText className="w-6 h-6 text-gold" />
    },
    {
      title: "Candidate Pre-Screening",
      desc: "First-stage screening conversations to assess communication, availability, interest level, and basic suitability.",
      icon: <Users className="w-6 h-6 text-gold" />
    },
    {
      title: "Shortlist Refinement",
      desc: "Filtering broader candidate pools into a more focused shortlist based on agreed criteria.",
      icon: <Target className="w-6 h-6 text-gold" />
    },
    {
      title: "Role-Fit Evaluation",
      desc: "Assessment of how well a candidate’s background, skills, and experience align with the requirements of the position.",
      icon: <Cpu className="w-6 h-6 text-gold" />
    },
    {
      title: "Candidate Comparison Support",
      desc: "Structured review support that helps employers compare shortlisted candidates more clearly.",
      icon: <ShieldCheck className="w-6 h-6 text-gold" />
    },
    {
      title: "Hiring Criteria Alignment",
      desc: "Screening based on role-specific priorities, such as technical fit, commercial relevance, communication ability, adaptability, or industry exposure.",
      icon: <Settings className="w-6 h-6 text-gold" />
    },
    {
      title: "Pre-Interview Readiness Support",
      desc: "Helping employers move into interviews with stronger candidate visibility and better process clarity.",
      icon: <CheckCircle2 className="w-6 h-6 text-gold" />
    }
  ];

  const benefits = [
    {
      title: "Stronger Shortlist Quality",
      desc: "Employers spend more time with candidates who are more relevant, more aligned, and more likely to progress successfully.",
      icon: <Target className="w-7 h-7 text-gold" />
    },
    {
      title: "Reduced Hiring Risk",
      desc: "A more structured screening process helps avoid weak-fit candidates moving too far into the hiring journey.",
      icon: <ShieldCheck className="w-7 h-7 text-gold" />
    },
    {
      title: "Time Savings for Hiring Teams",
      desc: "Internal teams can focus on high-value interviews and final decisions rather than spending excessive time on first-stage filtering.",
      icon: <Clock className="w-7 h-7 text-gold" />
    },
    {
      title: "Improved Hiring Confidence",
      desc: "Better screening creates more visibility into why candidates are being shortlisted, helping stakeholders make decisions more confidently.",
      icon: <Search className="w-7 h-7 text-gold" />
    },
    {
      title: "More Consistent Candidate Evaluation",
      desc: "When screening is structured, hiring standards become more consistent across applicants and roles.",
      icon: <FileText className="w-7 h-7 text-gold" />
    },
    {
      title: "Better Recruitment Efficiency",
      desc: "Fewer unnecessary interviews, clearer shortlists, and stronger front-end filtering can improve the speed and quality of the overall hiring process.",
      icon: <TrendingUp className="w-7 h-7 text-gold" />
    }
  ];

  const processSteps = [
    {
      num: "01",
      title: "Understand the Role Criteria",
      desc: "We begin by clarifying the job requirements, must-have capabilities, preferred experience, team context, and any critical evaluation priorities."
    },
    {
      num: "02",
      title: "Align on Screening Standards",
      desc: "We define what good-fit candidates should look like and how screening decisions should be made."
    },
    {
      num: "03",
      title: "Review Candidate Profiles",
      desc: "We assess resumes, applications, and candidate backgrounds against the agreed screening criteria."
    },
    {
      num: "04",
      title: "Conduct Screening Support",
      desc: "Where needed, we support pre-screening conversations or early-stage candidate evaluation to improve role-fit visibility."
    },
    {
      num: "05",
      title: "Refine and Present Shortlists",
      desc: "We help narrow the candidate pool into a more focused set of relevant applicants for further review or interview."
    },
    {
      num: "06",
      title: "Support Better Hiring Decisions",
      desc: "Our goal is to help employers move into interviews and final selection with stronger candidate clarity and better confidence."
    }
  ];

  const pillars = [
    {
      title: "Quality-Focused Evaluation",
      desc: "We focus on identifying relevant, aligned candidates rather than simply reducing numbers.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Role-Specific Screening Logic",
      desc: "Our screening approach is shaped by the actual hiring need, not a generic checklist applied to every role.",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Time-Saving Support for Employers",
      desc: "We help reduce front-end recruitment workload so internal teams can stay focused on decision-making.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Structured Candidate Review",
      desc: "A more disciplined review process improves shortlist quality and supports more consistent candidate evaluation.",
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: "Practical Recruitment Insight",
      desc: "We do not treat assessment as theory. We treat it as decision support that helps employers hire more effectively.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "Broad Industry and Role Coverage",
      desc: "We support screening across multiple sectors and functions, making the service adaptable to a wide range of hiring environments.",
      icon: <Briefcase className="w-6 h-6" />
    }
  ];

  const audiences = [
    {
      title: "Employers Managing Large Applicant Volumes",
      desc: "Businesses that need help reviewing, filtering, and refining candidate pools efficiently."
    },
    {
      title: "Hiring Teams With Limited Time",
      desc: "Organizations that want support with early-stage evaluation so internal resources can focus on interviews and final selection."
    },
    {
      title: "Businesses Hiring for Quality-Sensitive Roles",
      desc: "Employers who want stronger candidate confidence before moving applicants deeper into the process."
    },
    {
      title: "Companies Improving Recruitment Efficiency",
      desc: "Organizations seeking a more structured and consistent way to evaluate candidates."
    },
    {
      title: "Businesses Running Ongoing or Repeated Hiring",
      desc: "Employers who want a reliable front-end screening approach across multiple roles or departments."
    }
  ];

  const faqs = [
    {
      question: "What is candidate screening and assessment?",
      answer: "Candidate screening and assessment is a service that helps employers evaluate applicants before interviews or final hiring decisions by improving shortlist quality and filtering relevance more effectively."
    },
    {
      question: "When should a company use screening and assessment services?",
      answer: "A company should use screening and assessment services when applicant volume is high, internal hiring time is limited, shortlist quality needs improvement, or the role requires more careful evaluation."
    },
    {
      question: "How does screening improve hiring quality?",
      answer: "Screening improves hiring quality by helping employers identify stronger-fit candidates earlier, reduce unsuitable interviews, and make decisions with clearer candidate visibility."
    },
    {
      question: "What can NAYA Staffing include in Screening & Assessment?",
      answer: "The service can include resume review, pre-screening, shortlist refinement, role-fit evaluation, candidate comparison support, and more structured front-end hiring support."
    },
    {
      question: "Is Screening & Assessment different from full recruitment?",
      answer: "Yes. Screening & Assessment focuses primarily on evaluating and filtering candidates, while full recruitment can include sourcing, outreach, process management, and end-to-end hiring support."
    },
    {
      question: "Does NAYA Staffing provide Screening & Assessment across industries?",
      answer: "Yes. NAYA Staffing supports Screening & Assessment across multiple industries and business functions."
    }
  ];

  const relatedServices = [
    { name: "Talent Mapping", href: "/talent-mapping", desc: "Strategic market intelligence and recruitment planning services." },
    { name: "Executive Search", href: "/executive-search", desc: "Premium recruitment solutions for leadership and business-critical positions." },
    { name: "Permanent Recruitment", href: "/permanent-recruitment", desc: "Core long-term hiring solutions for ongoing business needs." },
    { name: "Recruitment Process Outsourcing (RPO)", href: "/recruitment-process-outsourcing", desc: "End-to-end recruitment management to scale your hiring operations." },
    { name: "Global Hiring", href: "/global-hiring", desc: "Cross-border and international recruitment support to access wider markets." },
    { name: "Contract Staffing", href: "/contract-staffing", desc: "Flexible staffing options for project-based and temporary talent needs." }
  ];

  const relatedMainPages = [
    { name: "Services Overview", href: "/services" },
    { name: "Employers & Solutions", href: "/employer-solutions" },
    { name: "Our Proven Process", href: "/our-proven-process" },
    { name: "Industries Overview", href: "/our-industries" },
    { name: "Contact Us", href: "/contact-us" }
  ];

  const methods = [
    "Technical Competency", "Sales Vetting", "Leadership Alignment", 
    "Behavioral Assessments", "Credential Verification", "Language Proficiency"
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Candidate Quality & Hiring Confidence</span>
            </div>
            <h1 className="text-5xl md:text-6xl xl:text-8xl font-black tracking-tighter mb-6 leading-none uppercase">
            <Typewriter>
              Screening & Assessment for <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Smarter, More Confident Hiring
              </span>
            </Typewriter>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
              NAYA Staffing’s Screening & Assessment service helps employers evaluate candidates more effectively before they move forward in the hiring process. Whether you need support reviewing applications, improving shortlist quality, filtering large applicant volumes, or reducing hiring risk for important roles, we provide structured screening support designed to save time and improve decision-making.
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
                Built for employers who want stronger shortlists, better evaluation, and greater confidence before interviews and final hiring decisions.
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
                A Better Way <br className="hidden md:inline" />
                <span className="text-gold">to Evaluate Candidate Quality</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            {/* Paragraphs Column */}
            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                A strong hiring process depends on more than sourcing candidates. It also depends on identifying which candidates are genuinely relevant, capable, and ready to move forward. When screening is weak, employers can lose time, interview unsuitable applicants, miss stronger candidates, or make less confident hiring decisions.
              </p>
              <p>
                Screening & Assessment helps solve that problem by bringing more structure and consistency to candidate evaluation. Instead of relying only on resumes or informal first impressions, employers can use a more focused process to review fit, relevance, communication, experience, and broader suitability before the hiring process advances further.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                NAYA Staffing’s Screening & Assessment service is designed to help employers improve shortlist quality and reduce unnecessary hiring friction. It is especially valuable when candidate volume is high, internal time is limited, the role is important, or decision-makers want a more disciplined screening process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT SCREENING & ASSESSMENT MEANS */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-8">
          <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
            The Definition
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase">
            What Is <span className="text-gold">Screening & Assessment?</span>
          </h2>
          <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-semibold">
            <p>
              Screening & Assessment is a recruitment support service focused on evaluating candidates before they move into deeper interview stages or final hiring decisions. It helps employers identify which candidates are most aligned with the role and which applicants may be less suitable.
            </p>
            <p>
              Depending on the hiring need, this can include resume review, pre-screening conversations, role-fit evaluation, communication checks, shortlist refinement, and structured candidate comparison. The purpose is not just to narrow a list. It is to improve the quality of the list.
            </p>
            <p className="text-slate-400 border-t border-white/5 pt-8 font-normal italic text-base">
              For employers, this creates a more efficient and reliable decision-making process. It reduces wasted interview time, improves hiring visibility, and helps teams focus on candidates who are more likely to perform well in the role.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHEN SCREENING & ASSESSMENT IS THE RIGHT CHOICE */}
      <section className="py-32 bg-navy-dark relative overflow-hidden border-t border-white/5">
        <div className="btn-rotating-border absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 btn-auto-sheen border border-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2 btn-auto-sheen border border-white/5">
              Decision Guide
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              When to Use <span className="text-gold">Screening & Assessment</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Screening & Assessment is especially useful when the employer wants stronger filtering, better shortlist quality, and more confidence before investing more time in the hiring process.
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

      {/* 5. WHAT THE SERVICE CAN INCLUDE */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              What Our Screening & Assessment Service <span className="text-gold">Can Cover</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              The exact scope can vary depending on the role, hiring stage, and level of employer support needed, but the service may include several practical screening and evaluation steps.
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

      {/* 6. WHAT EMPLOYERS GAIN FROM SCREENING & ASSESSMENT */}
      <section className="py-32 bg-navy-dark relative overflow-hidden border-t border-white/5">
        <div className="btn-rotating-border absolute top-1/2 right-0 w-[500px] h-[500px] bg-white/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 btn-auto-sheen border border-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
            
            {/* Sticky Header Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8 animate-fade-up">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-2 shadow-xl backdrop-blur-md btn-auto-sheen border border-white/5">
                Strategic Advantages
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                What Screening <br />& Assessment <span className="text-gold">Delivers.</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-24 bg-white/5 rounded-full shadow-lg shadow-gold/20 btn-auto-sheen border border-white/5"></div>
              <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed border-l-2 border-white/10 pl-8 max-w-lg">
                Better evaluation at the front end of recruitment creates stronger hiring outcomes at every stage that follows.
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

      {/* 7. OUR SCREENING & ASSESSMENT PROCESS */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-28 space-y-6">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-2 btn-auto-sheen border border-white/5">
              Our Process Workflow
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Our Screening & <span className="text-gold">Assessment Process</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Our screening process is designed to bring clarity, consistency, and efficiency to early-stage hiring evaluation while remaining aligned with the specific needs of the role and the employer.
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

      {/* 8. WHY CHOOSE NAYA STAFFING FOR SCREENING & ASSESSMENT */}
      <section className="py-32 bg-navy-dark relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Employers Choose NAYA Staffing <span className="text-gold">for Screening & Assessment</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Screening is often where hiring quality is won or lost. NAYA Staffing’s approach is designed to make early-stage candidate evaluation more focused, practical, and useful for real hiring decisions.
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

      {/* 9. SCREENING & ASSESSMENT VS STANDARD RESUME REVIEW */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
              Screening & Assessment vs <span className="text-gold">Standard Resume Review</span>
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto"></div>
          </div>
          <div className="space-y-8 text-slate-300 font-medium text-lg leading-relaxed text-center">
            <p>
              A standard resume review often focuses only on whether a candidate appears to match basic job requirements on paper. While that can be useful, it is often too limited to produce consistently strong shortlists.
            </p>
            <p>
              Screening & Assessment goes further by applying more structured evaluation to candidate relevance, communication, suitability, and alignment with the role. It helps employers move beyond surface-level filtering and into more useful decision-making.
            </p>
            <p className="text-slate-400 border-t border-white/5 pt-8 font-semibold italic text-base">
              This does not mean every hire needs a complex assessment model. It means that stronger front-end evaluation often leads to better downstream hiring outcomes, especially for important, high-volume, or quality-sensitive roles.
            </p>
          </div>
        </div>
      </section>

      {/* 10. WHO THIS SERVICE IS BEST FOR */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Who Screening & Assessment <span className="text-gold">Is Best For</span>
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

      {/* 11. SCROLLING MARQUEE OF METHODS */}
      <section className="bg-navy py-24 border-t border-white/5">
        <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
          <h3 className="text-3xl font-black text-white tracking-tighter">Vetting <span className="text-gold">Methodologies.</span></h3>
          <p className="text-slate-500 font-bold">Rigorous Verification Benchmarks</p>
        </div>
        
        <div className="relative flex overflow-hidden">
          <style dangerouslySetInnerHTML={{ __html: `@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } .animate-marquee { display: flex; width: max-content; animation: marquee 60s linear infinite; }` }} />
          <div className="animate-marquee whitespace-nowrap gap-8 xl:gap-12 py-4">
            {[...methods, ...methods].map((method, i) => (
              <span key={i} className="text-4xl md:text-6xl font-black text-white/5 hover:text-gold/20 transition-colors cursor-default uppercase tracking-tighter mr-12">
                {method}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 12. INDUSTRY COVERAGE SECTION */}
      <section className="py-24 relative overflow-hidden bg-navy-dark border-t border-white/5">
        <div className="container mx-auto px-6 max-w-5xl text-center space-y-8 animate-fade-up">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
              Cross-Industry Competence
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              Screening & Assessment Across <span className="text-gold">Diverse Industries</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-slate-400 text-lg leading-relaxed font-semibold max-w-4xl mx-auto">
              NAYA Staffing provides Screening & Assessment support across a broad range of industries including information technology, healthcare, industrial, hospitality, professional services, education, insurance, retail and e-commerce, construction, marketing, and sales-led business environments. This broad capability aligns with your wider site structure and helps position the service as relevant across both operational and specialist hiring contexts.
            </p>
            <div className="pt-6">
               <Link href="/our-industries" className="btn-rotating-border px-10 py-5 bg-white/5 hover:bg-white/10 text-white hover:text-gold font-black rounded-full transition-all inline-flex items-center gap-4 uppercase tracking-[0.2em] text-xs btn-auto-sheen border border-white/5">
                  Explore Industries We Serve <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
        </div>
      </section>

      {/* 13. FAQ SECTION */}
      <section className="bg-navy py-32 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="text-center mb-20 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-6 shadow-xl backdrop-blur-md btn-auto-sheen border border-white/5">
                Screening FAQ
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

      {/* 14. INTERNAL LINKING SECTION */}
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

      {/* 15. FINAL CTA SECTION */}
      <section className="py-32 relative overflow-hidden bg-navy border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="btn-rotating-border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.03] blur-[200px] rounded-full group-hover:bg-white/[0.05] transition-all duration-1000 btn-auto-sheen border border-white/5"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-navy-light/10 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-panel p-12 md:p-24 rounded-[4rem] text-center border border-gold/20 shadow-2xl shadow-gold/10">
            <div className="btn-rotating-border inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 text-white hover:text-gold mb-10 shadow-2xl shadow-gold/30 btn-auto-sheen border border-white/5">
              <FileText className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Improve Hiring Quality <br/>
              <span className="text-gold">Before the Final Decision</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              Better hiring outcomes begin with better evaluation. NAYA Staffing’s Screening & Assessment service helps employers refine shortlists, reduce hiring friction, and move forward with stronger confidence in the candidates they choose to progress.
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
