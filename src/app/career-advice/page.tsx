import { Typewriter } from "@/components/Typewriter";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  FileText, 
  Target, 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  HelpCircle, 
  ArrowRight, 
  ArrowUpRight, 
  Check, 
  ChevronRight, 
  Award,
  BookOpen
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "Career Advice for Job Seekers | Resume, Interviews & Job Search Tips | NAYA Staffing",
  description: "Get career advice from NAYA Staffing on resumes, interviews, job search strategy, candidate visibility, and smarter ways to move toward better opportunities.",
  keywords: [
    "career advice",
    "career advice for job seekers",
    "resume tips",
    "interview tips",
    "job search advice",
    "career guidance recruitment agency",
    "candidate career support",
    "professional job search tips",
    "how to improve resume",
    "job interview preparation",
    "smarter job search strategy",
    "candidate visibility tips",
    "career growth support",
    "recruitment advice for candidates",
    "get noticed by employers",
    "job application tips"
  ]
};

export default function CareerAdvicePage() {
  const categories = [
    {
      title: "Resume Advice",
      desc: "How to make your resume clearer, stronger, and more relevant to the kinds of roles you want.",
      icon: <FileText className="w-8 h-8 text-gold" />
    },
    {
      title: "Job Search Strategy",
      desc: "How to avoid random applications and use a more focused, practical approach.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      title: "Interview Preparation",
      desc: "How to prepare better, answer more confidently, and improve overall interview performance.",
      icon: <BookOpen className="w-8 h-8 text-gold" />
    },
    {
      title: "Candidate Visibility",
      desc: "How to become easier to notice through registration, resume upload, and stronger positioning.",
      icon: <Users className="w-8 h-8 text-gold" />
    },
    {
      title: "Career Direction",
      desc: "How to think more clearly about your next move, especially if you are switching roles or aiming higher.",
      icon: <TrendingUp className="w-8 h-8 text-gold" />
    },
    {
      title: "Market Readiness",
      desc: "How to present yourself more professionally in a competitive hiring environment.",
      icon: <Award className="w-8 h-8 text-gold" />
    }
  ];

  const resumeTips = [
    {
      title: "Focus on Relevance, Not Just History",
      desc: "The strongest resumes are aligned to the type of role you actually want, not just a complete list of everything you have done."
    },
    {
      title: "Use Clear, Readable Structure",
      desc: "If the document is hard to scan quickly, important value may be missed."
    },
    {
      title: "Show Outcomes Where Possible",
      desc: "Candidates should highlight impact, achievements, improvements, or measurable contribution when relevant."
    },
    {
      title: "Avoid Generic Language",
      desc: "Overused phrases and vague claims make a profile weaker rather than stronger."
    },
    {
      title: "Tailor When It Matters",
      desc: "Candidates should adjust their positioning when applying to substantially different roles or industries."
    },
    {
      title: "Registering Helps Extend Resume Visibility",
      desc: "A resume is more useful when it is not limited to one single application cycle. This is where registration and upload matter."
    }
  ];

  const strategies = [
    {
      title: "Define the Kind of Role You Actually Want",
      desc: "Candidates should be clearer about target role, function, level, and work model."
    },
    {
      title: "Use More Than One Path",
      desc: "A smart search can include live job applications, registration, reverse recruitment, and broader visibility."
    },
    {
      title: "Do Not Rely Only on Public Job Boards",
      desc: "Crowded platforms often reduce visibility, especially for strong but less aggressively marketed candidates."
    },
    {
      title: "Track What Is Working",
      desc: "Candidates should notice patterns in which roles lead to responses and which do not."
    },
    {
      title: "Improve Positioning Along the Way",
      desc: "If applications are not leading anywhere, the answer may be stronger positioning rather than simply more applications."
    },
    {
      title: "Think Beyond Immediate Openings",
      desc: "Future-fit visibility matters too, which is why candidate registration should be promoted from this page."
    }
  ];

  const interviewTips = [
    {
      title: "Know the Role Clearly",
      desc: "Candidates should understand what the role really involves before the interview."
    },
    {
      title: "Prepare Real Examples",
      desc: "Specific examples usually create stronger answers than generic descriptions."
    },
    {
      title: "Show Structured Thinking",
      desc: "Clear and organized answers help employers feel more confident."
    },
    {
      title: "Understand the Employer Context",
      desc: "Candidates should know the company, role environment, and likely priorities."
    },
    {
      title: "Ask Better Questions",
      desc: "Strong questions at the end can show seriousness, professionalism, and good judgment."
    },
    {
      title: "Presentation and Calm Matter",
      desc: "How a candidate communicates can shape perception as much as the actual content of the answer."
    }
  ];

  const platformConnections = [
    {
      title: "Use Job Openings for Live Opportunities",
      desc: "Candidates who are ready to act should move directly into current roles.",
      href: "/job-openings",
      cta: "Browse Jobs"
    },
    {
      title: "Use Register & Upload Resume for Visibility",
      desc: "Candidates who want broader opportunity access should register and upload their resume.",
      href: "/job-seekers/register-upload-resume",
      cta: "Register Now"
    },
    {
      title: "Use Reverse Recruitment for a More Proactive Strategy",
      desc: "Candidates who want stronger support can explore the premium service model.",
      href: "/job-seekers/reverse-recruitment",
      cta: "Explore Service"
    },
    {
      title: "Use Pricing to Understand Premium Support",
      desc: "Candidates considering added support should be able to move directly into plan comparison.",
      href: "/job-seekers/pricing",
      cta: "View Plans"
    }
  ];

  const faqs = [
    {
      question: "What kind of career advice does NAYA Staffing provide?",
      answer: "NAYA Staffing’s Career Advice page helps candidates with resumes, applications, job-search strategy, interviews, visibility, and broader career positioning."
    },
    {
      question: "Is this page only for people who are applying right now?",
      answer: "No. It should also help passive candidates, career switchers, and professionals who want better market positioning."
    },
    {
      question: "How does this page connect to the rest of the site?",
      answer: "It connects directly to Job Openings, Register & Upload Resume, Reverse Recruitment, and Pricing so advice naturally leads to action."
    },
    {
      question: "Why is career advice important if jobs are already listed on the site?",
      answer: "Because many candidates need stronger positioning and better strategy, not just more listings."
    },
    {
      question: "Can this page help improve my visibility to employers?",
      answer: "Indirectly, yes. It guides you toward the actions that improve visibility, especially candidate registration and resume upload."
    },
    {
      question: "Where does this page sit in the sitemap?",
      answer: "Career Advice is listed in the approved structure as an added candidate-facing page connected to the broader Job Seekers journey."
    }
  ];

  const relatedLinks = [
    { name: "Job Seekers Overview", href: "/job-seekers", desc: "Return to the main parent section for candidates." },
    { name: "Why Choose Us?", href: "/job-seekers/why-choose-us", desc: "Learn what sets NAYA Staffing apart for job seekers." },
    { name: "Reverse Recruitment", href: "/job-seekers/reverse-recruitment", desc: "Learn about our proactive marketing model." },
    { name: "Pricing", href: "/job-seekers/pricing", desc: "Review candidate services and plans." },
    { name: "Register & Upload Resume", href: "/job-seekers/register-upload-resume", desc: "Onboard as a candidate in our database." },
    { name: "Job Openings", href: "/job-openings", desc: "Browse and apply to live job postings." },
    { name: "Contact Us", href: "/contact-us", desc: "Get in touch with our operations desk." },
    { name: "About Company", href: "/about-us/about-company", desc: "Explore our brand profile and team page." }
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Practical Career Guidance for Job Seekers</span>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
            <Typewriter>
              Career Advice That Helps You Search Smarter <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                and Present Yourself Better.
              </span>
            </Typewriter>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
              NAYA Staffing’s Career Advice page is designed for candidates who want more than generic job-search tips. From resume improvements and interview preparation to smarter application strategy and better visibility in the market, this page helps job seekers take clearer and more effective steps toward better opportunities.
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up animate-delay-300">
              <Link 
                href="/job-seekers/register-upload-resume" 
                className="btn-rotating-border group relative px-8 py-4 bg-white/5 hover:bg-white/10 text-white hover:text-gold font-bold rounded-full transition-all duration-300 overflow-hidden shadow-2xl shadow-gold/20 btn-auto-sheen border border-white/5"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Register &amp; Upload Resume <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                href="/job-openings" 
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 transition-all duration-300 backdrop-blur-xl btn-sheen"
              >
                Browse Job Openings
              </Link>
            </div>
            <div className="pt-10 border-t border-white/5 mt-10 max-w-xl mx-auto text-center animate-fade-in-up animate-delay-400">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 leading-loose">
                Built for candidates who want stronger positioning, better preparation, and a more structured way to move forward.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-20">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold to-transparent"></div>
        </div>
      </section>

      {/* 2. WHY CAREER ADVICE MATTERS */}
      <section className="py-24 relative overflow-hidden bg-navy-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 lg:gap-12 xl:gap-20 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
                Smart Career Steps
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                Why Career Advice Still <br className="hidden md:inline" />
                <span className="text-gold">Matters in a Noisy Job Market</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Many candidates put significant effort into job searching but still do not get the results they expect. Often the issue is not motivation. It is strategy. A resume may be underselling the candidate. Applications may be too broad or too repetitive. Interview performance may not reflect actual ability. Visibility may be weaker than it should be.
              </p>
              <p>
                That is why career advice matters. Practical guidance can help candidates improve how they present themselves, where they focus their effort, and how they move through the hiring process. The goal is not just to work harder. The goal is to search smarter.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                Our platform does more than just host vacancies. We support both opportunity access and career readiness, which fits the broader candidate-system vision behind the website.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE ADVICE CATEGORIES */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">
              What Kind of <span className="text-gold">Career Advice You’ll Find Here</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Explore our core guidance pillars designed to support candidate self-improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {categories.map((cat, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6">
                  <div className="btn-rotating-border w-14 h-14 bg-white/5 border border-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/5 group-hover:text-white hover:text-gold transition-all duration-500 btn-auto-sheen border border-white/5">
                    {cat.icon}
                  </div>
                  <h3 className="text-white font-black text-xl leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                    {cat.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {cat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RESUME ADVICE SECTION */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">
              Resume Advice: <span className="text-gold">Make It Easier to See Your Value</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              A resume should not only list experience. It should help the employer understand why the candidate makes sense for the role.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {resumeTips.map((tip, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-[#0B132B]/50 border border-white/5 hover:border-gold/30 transition-all duration-500 flex flex-col h-full justify-between">
                <div className="space-y-4">
                  <div className="text-gold font-bold text-xs uppercase tracking-widest">Tip 0{idx + 1}</div>
                  <h4 className="text-white font-black text-lg group-hover:text-gold transition-colors tracking-tight uppercase">
                    {tip.title}
                  </h4>
                  <p className="text-slate-400 text-xs font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {tip.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. JOB SEARCH STRATEGY SECTION */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">
              Job Search Advice: <span className="text-gold">Stop Applying Randomly and Start Searching Smarter</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              A better job search usually comes from better focus, not just higher application volume.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {strategies.map((strat, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-500 flex flex-col h-full justify-between">
                <div className="space-y-4">
                  <div className="text-gold font-bold text-xs uppercase tracking-widest">Strategy 0{idx + 1}</div>
                  <h4 className="text-white font-black text-lg group-hover:text-gold transition-colors tracking-tight uppercase">
                    {strat.title}
                  </h4>
                  <p className="text-slate-400 text-xs font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {strat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INTERVIEW ADVICE SECTION */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">
              Interview Advice: <span className="text-gold">Prepare to Show Fit, Not Just Answer Questions</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Interviews are not only about having the right answers. They are about showing relevance, communication quality, confidence, and fit for the role.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {interviewTips.map((tip, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-[#0B132B]/50 border border-white/5 hover:border-gold/30 transition-all duration-500 flex flex-col h-full justify-between">
                <div className="space-y-4">
                  <div className="text-gold font-bold text-xs uppercase tracking-widest">Preparation 0{idx + 1}</div>
                  <h4 className="text-white font-black text-lg group-hover:text-gold transition-colors tracking-tight uppercase">
                    {tip.title}
                  </h4>
                  <p className="text-slate-400 text-xs font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {tip.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CANDIDATE VISIBILITY & POSITIONING SECTION */}
      <section className="py-24 relative overflow-hidden bg-navy border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 lg:gap-12 xl:gap-20 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
                The Visibility Edge
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                Candidate Visibility: <br className="hidden md:inline" />
                <span className="text-gold">Being Qualified Is Not Always Enough</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                One of the most frustrating parts of job searching is that qualified people can still go unnoticed. That often happens not because they lack value, but because their visibility is too limited and their positioning is too passive.
              </p>
              <p>
                This is where the broader NAYA candidate journey becomes important. Candidates should not only apply for individual jobs. They should also become visible in the system through Register &amp; Upload Resume, and for some users, explore Reverse Recruitment as a more proactive opportunity pathway.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                Our strategy connects career advice with platform action. We make candidates feel that better results come from combining stronger preparation with smarter exposure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. HOW THIS CONNECTS TO THE NAYA PLATFORM */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">
              Career Advice Should <span className="text-gold">Lead to Action</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              This resource hub connects directly to the rest of our candidate experience actions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
            {platformConnections.map((conn, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-500 hover:shadow-xl flex flex-col h-full justify-between">
                <div className="space-y-4">
                  <span className="text-gold font-bold text-xs">Path 0{idx + 1}</span>
                  <h4 className="text-white font-black text-lg group-hover:text-gold transition-colors tracking-tight uppercase">
                    {conn.title}
                  </h4>
                  <p className="text-slate-400 text-xs font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {conn.desc}
                  </p>
                </div>
                
                <Link 
                  href={conn.href} 
                  className="group/btn inline-flex items-center gap-2 text-xs font-black tracking-widest text-gold hover:text-white uppercase transition-colors pt-6 border-t border-white/5 mt-6"
                >
                  {conn.cta} <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
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
                Ready to Apply What <br /> <span className="text-gold">You’ve Learned?</span>
              </h2>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed mt-4">
                Career advice is most useful when it leads to better action. NAYA Staffing helps candidates move from job-search frustration to stronger positioning, better visibility, and smarter next steps.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 shrink-0 w-full lg:w-auto">
              <Link href="/job-seekers/register-upload-resume" className="btn-rotating-border px-12 py-6 bg-white/5 text-white hover:text-gold font-black rounded-full hover:bg-white/10 hover:-translate-y-2 transition-all text-center shadow-xl uppercase tracking-[0.2em] text-xs btn-auto-sheen border border-white/5">
                Register &amp; Upload Resume
              </Link>
              <Link href="/job-openings" className="px-12 py-6 bg-white/5 border border-white/10 text-white font-black rounded-full hover:bg-white/10 hover:-translate-y-2 transition-all text-center uppercase tracking-[0.2em] text-xs backdrop-blur-md btn-sheen">
                Browse Job Openings
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
              Better Career Moves Start <br/>
              <span className="text-gold">With Better Preparation</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              A stronger job-search result often starts with better positioning, better preparation, and better next steps. NAYA Staffing helps candidates move forward with more clarity, stronger visibility, and a more useful career experience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 xl:gap-8">
              <Link 
                href="/job-seekers/register-upload-resume" 
                className="btn-rotating-border group w-full sm:w-auto px-16 py-8 bg-white/5 hover:bg-white/10 text-white hover:text-gold font-black rounded-[32px] transition-all flex items-center justify-center gap-4 shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-[0.3em] text-[10px] btn-auto-sheen border border-white/5"
              >
                Register &amp; Upload Resume <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-500" />
              </Link>
              <Link 
                href="/job-openings" 
                className="w-full sm:w-auto px-16 py-8 bg-white/5 hover:bg-white/10 text-white font-black rounded-[32px] border border-white/10 transition-all backdrop-blur-xl uppercase tracking-[0.3em] text-[10px] btn-sheen"
              >
                Browse Job Openings
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
                Candidate <br/>
                Hiring <span className="text-gold">Services</span>
              </h2>
              <div className="btn-rotating-border h-1 w-20 bg-white/5 rounded-full btn-auto-sheen border border-white/5"></div>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                Explore our candidate resources and pathways to find the model that suits your goals.
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
          <Link href="/job-seekers" className="hover:text-gold transition-colors">Job Seekers Overview</Link>
          <Link href="/job-seekers/why-choose-us" className="hover:text-gold transition-colors">Why Choose Us?</Link>
          <Link href="/job-seekers/reverse-recruitment" className="hover:text-gold transition-colors">Reverse Recruitment</Link>
          <Link href="/job-seekers/pricing" className="hover:text-gold transition-colors">Pricing</Link>
          <Link href="/job-seekers/register-upload-resume" className="hover:text-gold transition-colors">Register &amp; Upload Resume</Link>
          <Link href="/job-openings" className="hover:text-gold transition-colors">Job Openings</Link>
        </div>
      </section>
    </main>
  );
}
