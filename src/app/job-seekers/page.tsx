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
  Check,
  BookOpen,
  DollarSign
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "Job Seekers | Career Support, Job Opportunities & Candidate Services | NAYA Staffing",
  description: "Explore NAYA Staffing’s job seeker services, including career support, reverse recruitment, candidate registration, resume upload, pricing, and access to job opportunities.",
  keywords: [
    "job seekers page",
    "career support for job seekers",
    "recruitment agency for candidates",
    "candidate services",
    "job seeker platform",
    "upload resume staffing agency",
    "reverse recruitment services",
    "career opportunities with staffing agency",
    "register as candidate",
    "job search support",
    "candidate recruitment services",
    "career guidance page",
    "apply for jobs online",
    "staffing agency for professionals",
    "candidate talent platform",
    "job opportunities recruitment partner"
  ]
};

export default function JobSeekersOverviewPage() {
  const offers = [
    {
      title: "Access to Job Opportunities",
      desc: "Candidates can explore current openings and apply for roles aligned with their background, goals, and preferred direction.",
      icon: <Briefcase className="w-8 h-8 text-gold" />
    },
    {
      title: "Resume Registration and Candidate Visibility",
      desc: "By registering and uploading a resume, candidates make it easier to be considered for current and future opportunities.",
      icon: <Users className="w-8 h-8 text-gold" />
    },
    {
      title: "Reverse Recruitment Support",
      desc: "Instead of only chasing openings, candidates can use a more strategic model where they are positioned more actively toward relevant opportunities.",
      icon: <TrendingUp className="w-8 h-8 text-gold" />
    },
    {
      title: "Career Positioning and Guidance",
      desc: "Candidates can use supporting resources to improve how they present themselves and how they approach the job market.",
      icon: <BookOpen className="w-8 h-8 text-gold" />
    },
    {
      title: "Clearer Candidate Experience",
      desc: "The structure of the candidate section should help users know exactly where to go next based on what they need.",
      icon: <Settings className="w-8 h-8 text-gold" />
    },
    {
      title: "A More Modern Candidate Journey",
      desc: "This page should make the platform feel smarter, more organized, and more premium than a standard upload-your-CV page.",
      icon: <Cpu className="w-8 h-8 text-gold" />
    }
  ];

  const paths = [
    {
      title: "If You Want to Apply Right Away",
      desc: "Start with Job Openings and browse live opportunities that match your background and goals.",
      action: "Browse Job Openings",
      href: "/job-openings"
    },
    {
      title: "If You Want Employers to Find You",
      desc: "Use Register & Upload Resume so your profile and experience can enter the candidate pipeline.",
      action: "Upload Resume",
      href: "/job-seekers/register-upload-resume"
    },
    {
      title: "If You Want a More Strategic Job Search",
      desc: "Explore Reverse Recruitment to understand how a more proactive candidate support model works.",
      action: "Explore Reverse Recruitment",
      href: "/job-seekers/reverse-recruitment"
    },
    {
      title: "If You Want to Understand the Structure First",
      desc: "Visit Pricing to review the candidate service model more clearly.",
      action: "View Pricing",
      href: "/job-seekers/pricing"
    },
    {
      title: "If You Want to Know Why We Are Different",
      desc: "Go to Why Choose Us? to understand the platform’s value from a job seeker perspective.",
      action: "Why Choose Us",
      href: "/job-seekers/why-choose-us"
    },
    {
      title: "If You Want Extra Career Support",
      desc: "Read Career Advice for resume, interview, and broader job search guidance.",
      action: "Read Career Advice",
      href: "/career-advice"
    }
  ];

  const subpages = [
    {
      title: "Why Choose Us?",
      desc: "This page should focus on why candidates should trust NAYA Staffing and what makes the experience more valuable than a standard job board.",
      href: "/job-seekers/why-choose-us"
    },
    {
      title: "Reverse Recruitment",
      desc: "This page should explain the proactive candidate-side recruitment model and how it helps job seekers gain stronger visibility.",
      href: "/job-seekers/reverse-recruitment"
    },
    {
      title: "Pricing",
      desc: "This page should clarify the pricing model for any candidate-facing services or premium features.",
      href: "/job-seekers/pricing"
    },
    {
      title: "Register & Upload Resume",
      desc: "This page should act as the main candidate onboarding and registration entry point.",
      href: "/job-seekers/register-upload-resume"
    }
  ];

  const relatedPages = [
    {
      title: "Job Openings",
      desc: "A standalone page for active opportunities and live job-search activity.",
      href: "/job-openings"
    },
    {
      title: "Career Advice",
      desc: "A supporting content page for resume tips, interview help, and general job-seeker guidance.",
      href: "/career-advice"
    }
  ];

  const appealReasons = [
    {
      title: "A More Structured Candidate Experience",
      desc: "The platform should feel clear and easy to navigate, with obvious next steps for different kinds of job seekers."
    },
    {
      title: "More Than Just Applications",
      desc: "Candidates can register, upload resumes, explore reverse recruitment, and access career guidance rather than relying only on live job posts."
    },
    {
      title: "Better Career Positioning",
      desc: "A stronger candidate journey helps job seekers present themselves more effectively to employers."
    },
    {
      title: "Opportunity Beyond One Application Cycle",
      desc: "Registering and becoming visible can support both immediate and future opportunities."
    },
    {
      title: "A More Premium and Professional Feel",
      desc: "The candidate experience should feel polished and trustworthy, which reflects positively on the platform and brand."
    },
    {
      title: "Support for Different Career Stages",
      desc: "This section should feel relevant to early-career professionals, active job seekers, ambitious switchers, and experienced candidates alike."
    }
  ];

  const relatedLinks = [
    { name: "About Company", href: "/about-us", desc: "Learn about NAYA Staffing's mission and team." },
    { name: "Contact Us", href: "/contact-us", desc: "Get in touch with our team for general inquiries." },
    { name: "FAQ Center", href: "/faqs", desc: "Read answers to common candidate questions." },
    { name: "Blog & Insights", href: "/insights", desc: "Stay up-to-date with current talent market trends." },
    { name: "Why Choose Us?", href: "/job-seekers/why-choose-us", desc: "Explore the candidate value proposition." },
    { name: "Reverse Recruitment", href: "/job-seekers/reverse-recruitment", desc: "Learn about our proactive marketing model." }
  ];

  const faqs = [
    {
      question: "How can job seekers use NAYA Staffing?",
      answer: "Job seekers can use NAYA Staffing to browse job openings, register and upload a resume, explore reverse recruitment, review pricing, and access career-focused support."
    },
    {
      question: "What pages are included in the Job Seekers section?",
      answer: "The approved site structure places Why Choose Us?, Reverse Recruitment, Pricing, and Register & Upload Resume under the main Job Seekers section."
    },
    {
      question: "Is Job Openings part of the Job Seekers section?",
      answer: "Job Openings is listed in the uploaded structure as a standalone page, but it should still be closely linked from the Job Seekers Overview page because it is a key candidate action page."
    },
    {
      question: "What is reverse recruitment?",
      answer: "Reverse recruitment is a candidate-focused service model where the candidate is positioned more proactively toward relevant opportunities instead of relying only on direct job applications."
    },
    {
      question: "How do I get employers to notice my profile?",
      answer: "The clearest first step is to use Register & Upload Resume, which improves candidate visibility for current and future opportunities."
    },
    {
      question: "Is there a career advice page for candidates?",
      answer: "Yes. The uploaded page plan specifically adds Career Advice as a candidate page, making it an important supporting resource for this section."
    }
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
        <div className="btn-rotating-border absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 blur-[120px] rounded-full animate-pulse transition-all duration-5000 btn-auto-sheen border border-white/5"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-navy-light/20 blur-[150px] rounded-full animate-float transition-all duration-7000"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <div className="btn-rotating-border inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-gold/20 mb-6 backdrop-blur-md animate-fade-in-up btn-auto-sheen border border-white/5">
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Careers, Opportunity &amp; Candidate Support</span>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
            <Typewriter>
              Job Seeker Support Built <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                for Better Career Moves
              </span>
            </Typewriter>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
              NAYA Staffing helps job seekers do more than browse openings. We provide a stronger path into career opportunities through candidate registration, resume visibility, reverse recruitment support, job search access, and practical career-focused resources. Whether you are actively applying, exploring better opportunities, or looking for a more strategic way to present yourself to employers, this section is built to help you move forward with greater confidence.
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
                Built for candidates who want more than random applications and are looking for a clearer, smarter path to opportunity.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-20">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold to-transparent"></div>
        </div>
      </section>

      {/* 2. JOB SEEKER POSITIONING / INTRO SECTION */}
      <section className="py-24 relative overflow-hidden bg-navy-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 lg:gap-12 xl:gap-20 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
                Career Partner
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                A Better Starting Point <br className="hidden md:inline" />
                <span className="text-gold">for Candidates</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Many job seekers do not just need more job listings. They need a better way to be seen, a clearer way to position themselves, and a platform that helps connect them to opportunities more intelligently. Sending the same resume into dozens of openings without strategy often leads to frustration, low response rates, and unnecessary confusion.
              </p>
              <p>
                That is why the Job Seekers section feels more complete than a basic career page. It positions NAYA Staffing as a candidate partner that offers multiple entry points depending on where the person is in their career journey. Some candidates may want to apply for live jobs immediately. Others may want to register, upload their resume, explore reverse recruitment, understand pricing, or access career-focused guidance first.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                This page acts as the main parent page for that candidate journey. In your approved site structure, Job Seekers sits as a dedicated main section with the subpages Why Choose Us?, Reverse Recruitment, Pricing, and Register &amp; Upload Resume beneath it, while Job Openings remains a standalone page and Career Advice is listed as an added candidate-facing page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE OFFER JOB SEEKERS */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="btn-rotating-border absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 btn-auto-sheen border border-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              What We Offer <span className="text-gold">Job Seekers</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              This section immediately shows candidates that NAYA Staffing supports more than one type of job-seeker need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {offers.map((offer, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6">
                  <div className="btn-rotating-border w-14 h-14 bg-white/5 border border-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/5 group-hover:text-white hover:text-gold transition-all duration-500 btn-auto-sheen border border-white/5">
                    {offer.icon}
                  </div>
                  <h3 className="text-white font-black text-xl leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                    {offer.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {offer.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CANDIDATE JOURNEY / HOW TO GET STARTED */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              How Job Seekers <span className="text-gold">Can Get Started</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              This section reduces confusion and shows a simple path for different types of candidates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {paths.map((path, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-[#0B132B]/50 border border-white/5 hover:border-gold/30 transition-all duration-500 flex flex-col h-full justify-between">
                <div className="space-y-4">
                  <span className="text-gold font-bold text-xs">Path 0{idx + 1}</span>
                  <h4 className="text-white font-black text-lg group-hover:text-gold transition-colors tracking-tight uppercase">
                    {path.title}
                  </h4>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {path.desc}
                  </p>
                </div>

                <Link 
                  href={path.href} 
                  className="group/btn inline-flex items-center gap-2 text-xs font-black tracking-widest text-gold hover:text-white uppercase transition-colors pt-6 border-t border-white/5 mt-6"
                >
                  {path.action} <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. JOB SEEKER SUBPAGES NAVIGATION SECTION */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Candidate Pages and <span className="text-gold">Next Steps</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              This section visually routes job seekers into the specific pages already fixed in your approved structure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
            {subpages.map((sub, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-white font-black text-2xl leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                      {sub.title}
                    </h3>
                    <p className="text-slate-400 text-sm font-semibold leading-relaxed mt-4 mb-6 group-hover:text-slate-300 transition-colors">
                      {sub.desc}
                    </p>
                  </div>

                  <Link 
                    href={sub.href}
                    className="group/link inline-flex items-center gap-2 text-xs font-black tracking-widest text-gold hover:text-white uppercase transition-colors mt-auto"
                  >
                    Go to Page <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Related Candidate Pages */}
          <div className="grid md:grid-cols-2 gap-6 xl:gap-8 max-w-4xl mx-auto pt-16 border-t border-white/5 mt-16">
            {relatedPages.map((rel, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-500 flex flex-col justify-between btn-sheen">
                <div>
                  <h4 className="text-white font-black text-xl mb-3 uppercase group-hover:text-gold transition-colors">{rel.title}</h4>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed mb-6">{rel.desc}</p>
                </div>
                <Link 
                  href={rel.href}
                  className="group/link inline-flex items-center gap-2 text-xs font-black tracking-widest text-gold hover:text-white uppercase transition-colors"
                >
                  Explore {rel.title} <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY NAYA STAFFING APPEALS TO CANDIDATES */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Job Seekers Choose <span className="text-gold">NAYA Staffing</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Candidates need more than access to vacancies. They need a better chance of being understood, positioned well, and connected to relevant opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {appealReasons.map((reason, i) => (
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

      {/* 7. JOBS, VISIBILITY, AND CAREER SUPPORT */}
      <section className="py-24 bg-navy relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 lg:gap-12 xl:gap-20 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
                All-in-One Hub
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                Jobs, Visibility, and <br className="hidden md:inline" />
                <span className="text-gold">Career Support in One Place</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                The candidate side of the site should not feel fragmented. It should help job seekers move naturally between job discovery, profile visibility, and career support resources. That means this overview page should connect clearly to the standalone Job Openings page and also to Career Advice so candidates can both act and improve at the same time.
              </p>
              <p>
                This is especially important because your earlier planning for the website includes not only content pages, but also a broader candidate system with job listings, applications, and a growing database of candidate profiles. The website is intended to function as more than a brochure site and should support candidate intake and job-matching activity as part of the overall platform vision.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                That means this page balances immediate job search, long-term candidate visibility, premium candidate services, supporting career resources, and a clear path into registration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA BLOCK */}
      <section className="py-24 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-[64px] p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-8 xl:gap-12 border-white/10 hover:border-gold/20 transition-all duration-700 btn-sheen">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black text-white leading-[0.9] tracking-tighter mb-4 uppercase">
                Ready to Take the Next <br /> <span className="text-gold">Step in Your Career?</span>
              </h2>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed mt-4">
                Whether you want to apply for jobs now, improve your visibility, or explore a smarter candidate experience, NAYA Staffing gives job seekers clearer next steps and better ways to move forward.
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
              <Users className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              A Better Candidate <br/>
              <span className="text-gold">Experience Starts Here</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              The right opportunity often starts with the right platform. NAYA Staffing helps job seekers move forward with more structure, stronger visibility, and a smarter path into career opportunities.
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

      {/* 11. RELATED SERVICES / INTERNAL LINKS */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 xl:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.95]">
                Candidate <br/>
                Hiring <span className="text-gold">Resources</span>
              </h2>
              <div className="btn-rotating-border h-1 w-20 bg-white/5 rounded-full btn-auto-sheen border border-white/5"></div>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                Check our candidate support resources and sitemap directories to align your professional profile.
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
          <Link href="/job-seekers/why-choose-us" className="hover:text-gold transition-colors">Why Choose Us</Link>
          <Link href="/job-seekers/reverse-recruitment" className="hover:text-gold transition-colors">Reverse Recruitment</Link>
          <Link href="/job-seekers/pricing" className="hover:text-gold transition-colors">Pricing</Link>
        </div>
      </section>
    </main>
  );
}
