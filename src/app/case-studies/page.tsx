import { Typewriter } from "@/components/Typewriter";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Award, 
  HelpCircle, 
  ArrowRight, 
  ArrowUpRight, 
  Check, 
  TrendingUp, 
  Briefcase, 
  Users, 
  Zap, 
  Sparkles,
  Info,
  ChevronRight,
  Database,
  FileText
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "Case Studies | Recruitment Success Stories & Hiring Outcomes | NAYA Staffing",
  description: "Explore NAYA Staffing case studies and success stories showing how employers and candidates benefit from smarter recruitment, stronger hiring support, and better opportunity pathways.",
  keywords: [
    "recruitment case studies",
    "staffing case studies",
    "hiring success stories",
    "recruitment company case studies",
    "staffing agency success stories",
    "talent solutions case studies",
    "recruitment proof page",
    "workforce case studies",
    "employer hiring success",
    "candidate success stories",
    "recruitment outcomes",
    "staffing company results",
    "talent acquisition case study",
    "recruitment process case study",
    "hiring partner results",
    "workforce solutions examples"
  ]
};

export default function CaseStudiesPage() {
  const caseStudyTypes = [
    {
      title: "Employer Hiring Case Studies",
      desc: "Stories showing how NAYA Staffing helped an employer solve a hiring challenge, fill key roles, support scale-up, improve recruitment flow, or strengthen shortlist quality."
    },
    {
      title: "Candidate Success Stories",
      desc: "Stories showing how a candidate gained better visibility, stronger positioning, or a better opportunity through the platform journey."
    },
    {
      title: "Industry-Specific Case Studies",
      desc: "Stories tied to sectors such as technology, healthcare, industrial, hospitality, professional services, education, insurance, retail, construction, marketing, or sales."
    },
    {
      title: "Service-Specific Case Studies",
      desc: "Stories tied to recruitment models such as executive search, contract staffing, RPO, reverse recruitment, technical recruitment, or turnkey recruitment projects."
    },
    {
      title: "Platform Experience Case Studies",
      desc: "Stories that show the value of the broader candidate/client system direction as the website and platform mature."
    }
  ];

  const employerStudies = [
    {
      title: "How a growing company improved hiring structure during team expansion",
      context: "A fast-growing professional services organization needed to double its head count across three key regional departments within six months.",
      challenge: "The internal team was overwhelmed by noisy applications, resulting in slow hiring cycles and difficulty identifying key hires.",
      approach: "NAYA Staffing deployed an RPO support model to streamline the resume screening process and assess candidates based on structured target criteria.",
      outcome: "Successfully closed all open roles within 4.5 months, reducing average time-to-hire by 35% while increasing candidate retention.",
      takeaway: "RPO support allows growing teams to maintain operational focus while scaling workforce capability smoothly."
    },
    {
      title: "How a specialist role was filled through stronger search precision",
      context: "An insurance provider needed a Lead Actuarial Pricing Analyst with highly specialized mathematical risk-modeling experience.",
      challenge: "Standard applications yielded candidates who lacked key product-pricing experience and regulatory knowledge.",
      approach: "NAYA Staffing leveraged its targeted Actuarial Services headhunting pipeline, directly matching active and passive specialists.",
      outcome: "Sourced and placed a qualified Lead Analyst within 21 days who fit the modeling and product requirements perfectly.",
      takeaway: "Technical and specialist recruitment depends on direct role precision and industry network access, not generic job boards."
    },
    {
      title: "How project-based hiring support reduced recruitment friction",
      context: "A logistics company opening a new distribution center required 40+ operational staff within a strict 30-day window.",
      challenge: "Recruiting a high volume of screened staff locally on short notice created severe logistical bottlenecks.",
      approach: "Established a turnkey contract staffing workflow with structured assessment days and standardized compliance onboarding.",
      outcome: "Successfully placed all 40+ hires before launch date, achieving 100% operational launch readiness with zero staffing gaps.",
      takeaway: "High-volume hiring is best supported by structured process frameworks that turn complex volume into simple, repeatable tasks."
    }
  ];

  const candidateStudies = [
    {
      title: "How a candidate improved visibility through a smarter registration pathway",
      context: "A senior cybersecurity engineer was actively applying to public job boards but getting automated rejections due to noisy filters.",
      challenge: "Their resume sat in passive databases, failing to showcase their specialized cloud security achievements to human recruiters.",
      approach: "The candidate onboarded via NAYA's Register & Upload Resume platform, creating a structured candidate profile in our database.",
      outcome: "Their profile was directly matched with three active employer searches, leading to two direct interviews and a premium job offer.",
      takeaway: "Moving from public boards to a structured candidate network ensures your credentials reach active, relevant hiring managers."
    },
    {
      title: "How reverse recruitment helped a job seeker move beyond random applications",
      context: "A senior product manager wanted to switch from hospitality software to healthcare tech but faced difficulty bridging the gap.",
      challenge: "Cold applications were ignored because their resume lacked direct medical software keywords.",
      approach: "NAYA Staffing used the proactive Reverse Recruitment model, representing the candidate directly to digital health firms.",
      outcome: "Successfully scheduled direct introductions with two CTOs, resulting in a custom role built around the candidate's transferrable skills.",
      takeaway: "Reverse recruitment creates opportunity pathways by focusing on human representation, positioning, and direct matching."
    },
    {
      title: "How a professional found stronger opportunity alignment through a structured platform journey",
      context: "An experienced administrative specialist felt stuck in contract cycles and wanted a permanent, growth-oriented role.",
      challenge: "They lacked clear market feedback on their resume positioning and compensation expectations.",
      approach: "Used NAYA's Career Advice and Professional Advantage plans to optimize their profile structure and outline a clear search strategy.",
      outcome: "Identified and secured a permanent operations manager role within 45 days, achieving a 20% increase in base salary.",
      takeaway: "Career advice and plan alignment help job seekers replace guesswork with structured market navigation and better results."
    }
  ];

  const proofStrip = [
    { label: "Built for employers and job seekers", value: "Dual Audience Platform" },
    { label: "Designed across multiple industries", value: "Multi-Industry Reach" },
    { label: "Structured for premium support pathways", value: "Agile Service Coverage" },
    { label: "Created to support both hiring and opportunity access", value: "Structured Process Delivery" }
  ];

  const faqs = [
    {
      question: "What is the purpose of the Case Studies page?",
      answer: "This page acts as the deeper proof layer of the website by showing structured examples of hiring support, candidate value, and platform outcomes in practice."
    },
    {
      question: "How is this page different from Testimonials?",
      answer: "Testimonials are shorter quote-based proof, while case studies are longer, more structured stories that explain challenge, approach, and outcome. Both are separately planned in your approved page structure."
    },
    {
      question: "Who are the case studies for?",
      answer: "They support both employers and candidates by showing proof that the NAYA Staffing experience creates real value."
    },
    {
      question: "Can this page include employer and candidate stories?",
      answer: "Yes. That makes the page stronger and better aligned with the dual-audience platform model already reflected across the sitemap."
    },
    {
      question: "Where should this page sit in the site structure?",
      answer: "It is listed as an added page in your approved plan and functions as a stronger proof page alongside the brand and trust pages already built."
    },
    {
      question: "Can this page grow over time?",
      answer: "Yes. It is built in a scalable way so new case studies can be added by industry, audience type, or service type."
    }
  ];

  const relatedLinks = [
    { name: "About Company", href: "/about-us/about-company", desc: "Explore our brand profile and team page." },
    { name: "Contact Us", href: "/contact-us", desc: "Get in touch with our operations desk." },
    { name: "Blog / Insights", href: "/insights", desc: "Explore our latest recruiting insights and articles." },
    { name: "FAQs", href: "/faqs", desc: "Browse frequently asked questions." },
    { name: "Testimonials", href: "/testimonials", desc: "Read short client and candidate quotes." },
    { name: "Employers Overview", href: "/employers", desc: "Browse employer-facing portal pages." },
    { name: "Job Seekers Overview", href: "/job-seekers", desc: "Browse candidate-facing portal pages." },
    { name: "Career Advice", href: "/career-advice", desc: "Browse job seeker search tips and guides." }
  ];

  return (
    <main className="bg-[#040814] text-white min-h-screen selection:bg-gold selection:text-navy-dark font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 md:pt-32 xl:pt-40 pb-16 md:pb-20 xl:pb-24 overflow-hidden">
        <VideoBackground 
          src="/videos/hero.mp4" 
          overlayOpacity="bg-navy-dark/85"
        />
        
        {/* Ambient Glows */}
        <div className="btn-rotating-border absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 blur-[120px] rounded-full animate-pulse btn-auto-sheen border border-white/5"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-navy-light/20 blur-[150px] rounded-full animate-float"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <div className="btn-rotating-border inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-gold/20 mb-6 backdrop-blur-md animate-fade-in-up btn-auto-sheen border border-white/5">
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Proof Through Outcomes</span>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
            <Typewriter>
              Case Studies That Show How NAYA Staffing Creates <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Real Hiring &amp; Career Value.
              </span>
            </Typewriter>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
              A strong recruitment brand should not only describe what it offers. It should also show how it works in practice. NAYA Staffing’s Case Studies page is designed to highlight real hiring scenarios, stronger recruitment outcomes, and the ways employers and candidates can benefit from a more modern and better-structured platform experience.
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
                href="/employers/become-a-client" 
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 transition-all duration-300 backdrop-blur-xl btn-sheen"
              >
                Become a Client
              </Link>
            </div>
            <div className="pt-10 border-t border-white/5 mt-10 max-w-xl mx-auto text-center animate-fade-in-up animate-delay-400">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 leading-loose">
                Built to turn brand promises into proof through structured, story-led examples.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-20">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold to-transparent"></div>
        </div>
      </section>

      {/* 2. WHY CASE STUDIES MATTER */}
      <section className="py-24 relative overflow-hidden bg-navy-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 lg:gap-12 xl:gap-20 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
                The Proof Layer
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                Why Case Studies <br className="hidden md:inline" />
                <span className="text-gold">Matter</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Visitors often want more than brand claims. Employers want proof that recruitment support can solve real hiring problems. Candidates want proof that the platform offers more than surface-level opportunity language. Case studies help answer those questions by showing what value looks like in context.
              </p>
              <p>
                Unlike short testimonials, case studies can show the full story: the challenge, the hiring environment, the approach taken, and the outcome achieved. That structure makes them one of the strongest trust-building assets on a recruitment website.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                This matters especially for NAYA Staffing because the wider website is built as more than a simple brochure site. The platform supports a broader network for employers and candidates, so the proof layer needs to feel deeper and more substantial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CASE STUDIES VS TESTIMONIALS */}
      <section className="py-24 relative overflow-hidden bg-navy border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 lg:gap-12 xl:gap-20 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
                Proof Formats
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                How Case Studies Differ <br className="hidden md:inline" />
                <span className="text-gold">From Testimonials</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Testimonials and case studies should support each other, but they should not feel like the same page repeated twice.
              </p>
              <p>
                Testimonials stay quote-led, shorter, and faster to scan. They are the quick proof layer. Case Studies are longer, more structured, and more story-driven. They are the deeper proof layer.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                Our approved structure lists both Testimonials and Case Studies as separate pages, meaning the content strategy keeps them clearly differentiated to add maximum brand value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RECOMMENDED CASE STUDY TYPES */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">
              What Kinds of <span className="text-gold">Case Studies Belong Here</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Our framework supports multiple proof formats over time to highlight different service capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-8">
            {caseStudyTypes.map((type, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-[#0B132B]/50 border border-white/5 hover:border-gold/30 transition-all duration-500 flex flex-col h-full justify-between">
                <div className="space-y-4">
                  <div className="text-gold font-bold text-xs uppercase tracking-widest">Type 0{idx + 1}</div>
                  <h4 className="text-white font-black text-base group-hover:text-gold transition-colors tracking-tight uppercase">
                    {type.title}
                  </h4>
                  <p className="text-slate-400 text-xs font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {type.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STANDARD CASE STUDY FORMAT EXPLANATION */}
      <section className="py-24 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-8">
          <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
            The Structure
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase">How Each Case Study Is Structured</h2>
          <div className="btn-rotating-border h-1 w-20 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
          <p className="text-gray-400 text-lg font-semibold leading-relaxed">
            Each case study follows a repeatable, five-part template to maintain consistency, credibility, and clarity for readers:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 pt-8 text-center">
            {[
              { title: "01. Context", desc: "Client or Candidate situation" },
              { title: "02. Challenge", desc: "Specific hiring or search problem" },
              { title: "03. Approach", desc: "NAYA's strategy and methods" },
              { title: "04. Outcome", desc: "Results and improvements" },
              { title: "05. Takeaway", desc: "Summary of why it matters" }
            ].map((section, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-gold/30 transition-all btn-sheen">
                <h4 className="text-gold text-xs font-black uppercase tracking-widest mb-2">{section.title}</h4>
                <p className="text-slate-400 text-[10px] font-semibold uppercase">{section.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. EMPLOYER CASE STUDIES SECTION */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">
              Employer <span className="text-gold">Case Studies</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Real proof for employers ready to resolve complex staffing challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8 items-stretch">
            {employerStudies.map((study, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                
                <div className="space-y-6 relative z-10">
                  <div className="btn-rotating-border w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-gold btn-auto-sheen border border-white/5">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className="text-white font-black text-xl leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                    {study.title}
                  </h3>

                  <div className="space-y-4 pt-4 border-t border-white/5 text-xs">
                    <div>
                      <span className="text-gold font-black uppercase tracking-widest block mb-1">Context</span>
                      <p className="text-slate-400 font-semibold leading-relaxed">{study.context}</p>
                    </div>
                    <div>
                      <span className="text-gold font-black uppercase tracking-widest block mb-1">Challenge</span>
                      <p className="text-slate-400 font-semibold leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <span className="text-gold font-black uppercase tracking-widest block mb-1">Approach</span>
                      <p className="text-slate-400 font-semibold leading-relaxed">{study.approach}</p>
                    </div>
                    <div>
                      <span className="text-gold font-black uppercase tracking-widest block mb-1">Outcome</span>
                      <p className="text-slate-200 font-semibold leading-relaxed">{study.outcome}</p>
                    </div>
                  </div>
                </div>

                <div className="btn-rotating-border pt-6 mt-6 border-t border-white/5 relative z-10 bg-white/5 p-4 rounded-xl border border-gold/10 btn-auto-sheen">
                  <span className="text-gold font-black text-[10px] uppercase tracking-widest block mb-1">Key Takeaway</span>
                  <p className="text-slate-300 text-xs italic font-medium leading-relaxed">{study.takeaway}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CANDIDATE CASE STUDIES SECTION */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">
              Candidate <span className="text-gold">Success Stories</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Stories demonstrating our candidate platform value and opportunity matching.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8 items-stretch">
            {candidateStudies.map((study, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                
                <div className="space-y-6 relative z-10">
                  <div className="btn-rotating-border w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-gold btn-auto-sheen border border-white/5">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-white font-black text-xl leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                    {study.title}
                  </h3>

                  <div className="space-y-4 pt-4 border-t border-white/5 text-xs">
                    <div>
                      <span className="text-gold font-black uppercase tracking-widest block mb-1">Context</span>
                      <p className="text-slate-400 font-semibold leading-relaxed">{study.context}</p>
                    </div>
                    <div>
                      <span className="text-gold font-black uppercase tracking-widest block mb-1">Challenge</span>
                      <p className="text-slate-400 font-semibold leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <span className="text-gold font-black uppercase tracking-widest block mb-1">Approach</span>
                      <p className="text-slate-400 font-semibold leading-relaxed">{study.approach}</p>
                    </div>
                    <div>
                      <span className="text-gold font-black uppercase tracking-widest block mb-1">Outcome</span>
                      <p className="text-slate-200 font-semibold leading-relaxed">{study.outcome}</p>
                    </div>
                  </div>
                </div>

                <div className="btn-rotating-border pt-6 mt-6 border-t border-white/5 relative z-10 bg-white/5 p-4 rounded-xl border border-gold/10 btn-auto-sheen">
                  <span className="text-gold font-black text-[10px] uppercase tracking-widest block mb-1">Key Takeaway</span>
                  <p className="text-slate-300 text-xs italic font-medium leading-relaxed">{study.takeaway}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FEATURED PROOF / OUTCOMES STRIP */}
      <section className="py-20 bg-navy-dark border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
            {proofStrip.map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-gold/20 transition-all text-center btn-sheen">
                <h4 className="text-gold font-black text-lg mb-2 uppercase tracking-tight">{item.value}</h4>
                <p className="text-slate-400 text-xs font-semibold uppercase">{item.label}</p>
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
                Want to See What NAYA Staffing <br /> <span className="text-gold">Can Do in Practice?</span>
              </h2>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed mt-4">
                Case studies help turn trust into action. If you want to explore how NAYA Staffing could support your hiring goals or career direction, the next step should feel clear and low-friction.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 shrink-0 w-full lg:w-auto">
              <Link href="/contact-us" className="btn-rotating-border px-12 py-6 bg-white/5 text-white hover:text-gold font-black rounded-full hover:bg-white/10 hover:-translate-y-2 transition-all text-center shadow-xl uppercase tracking-[0.2em] text-xs btn-auto-sheen border border-white/5">
                Schedule Consultation
              </Link>
              <Link href="/employers/become-a-client" className="px-12 py-6 bg-white/5 border border-white/10 text-white font-black rounded-full hover:bg-white/10 hover:-translate-y-2 transition-all text-center uppercase tracking-[0.2em] text-xs backdrop-blur-md btn-sheen">
                Become a Client
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="bg-[#0B132B] py-32 overflow-hidden border-t border-white/5">
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
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Proof Should Make the <br/>
              <span className="text-gold">Next Step Easier</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              A strong case studies page should leave visitors feeling that NAYA Staffing is not only well-designed and well-positioned, but also able to create meaningful outcomes in practice. This page should help reduce doubt and make action feel more justified.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 xl:gap-8">
              <Link 
                href="/contact-us" 
                className="btn-rotating-border group w-full sm:w-auto px-16 py-8 bg-white/5 hover:bg-white/10 text-white hover:text-gold font-black rounded-[32px] transition-all flex items-center justify-center gap-4 shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-[0.3em] text-[10px] btn-auto-sheen border border-white/5"
              >
                Schedule Consultation <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-500" />
              </Link>
              <Link 
                href="/employers/become-a-client" 
                className="w-full sm:w-auto px-16 py-8 bg-white/5 hover:bg-white/10 text-white font-black rounded-[32px] border border-white/10 transition-all backdrop-blur-xl uppercase tracking-[0.3em] text-[10px] btn-sheen"
              >
                Become a Client
              </Link>
              <Link 
                href="/job-seekers/register-upload-resume" 
                className="w-full sm:w-auto px-16 py-8 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-gold hover:text-gold font-black rounded-[32px] transition-all uppercase tracking-[0.3em] text-[10px] btn-sheen"
              >
                Register &amp; Upload Resume
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
                Brand <br/>
                Proof <span className="text-gold">Links</span>
              </h2>
              <div className="btn-rotating-border h-1 w-20 bg-white/5 rounded-full btn-auto-sheen border border-white/5"></div>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                Connect with our core company details, testimonials, insights, and FAQs.
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
          <Link href="/job-seekers" className="hover:text-gold transition-colors">Job Seekers Overview</Link>
          <Link href="/testimonials" className="hover:text-gold transition-colors">Testimonials</Link>
          <Link href="/insights" className="hover:text-gold transition-colors">Insights</Link>
          <Link href="/faqs" className="hover:text-gold transition-colors">FAQs Center</Link>
        </div>
      </section>
    </main>
  );
}
