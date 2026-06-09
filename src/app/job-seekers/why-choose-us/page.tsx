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
  title: "Why Choose NAYA Staffing? | Career Support, Visibility & Better Job Opportunities",
  description: "Discover why job seekers choose NAYA Staffing for stronger career support, resume visibility, reverse recruitment, premium candidate services, and access to better opportunities.",
  keywords: [
    "why choose staffing agency",
    "why choose NAYA Staffing",
    "candidate services recruitment agency",
    "career support for job seekers",
    "job seeker benefits staffing agency",
    "recruitment agency for candidates",
    "better than job boards",
    "candidate career partner",
    "professional job seeker support",
    "reverse recruitment benefits",
    "resume visibility services",
    "candidate-first recruitment platform",
    "premium job search support",
    "recruitment partner for professionals",
    "smarter job search support",
    "staffing agency career growth"
  ]
};

export default function JobSeekersWhyChooseUsPage() {
  const reasons = [
    {
      title: "More Than Just Job Listings",
      desc: "NAYA Staffing is not positioned as only a job board. Candidates can register, upload resumes, explore reverse recruitment, and access additional career-focused support.",
      icon: <Briefcase className="w-8 h-8 text-gold" />
    },
    {
      title: "Better Candidate Visibility",
      desc: "Registering and uploading a resume gives candidates a stronger chance to be considered not only for current jobs, but also for future opportunities.",
      icon: <Users className="w-8 h-8 text-gold" />
    },
    {
      title: "A More Strategic Job Search Experience",
      desc: "Instead of relying only on repeated applications, candidates can use smarter pathways such as reverse recruitment and profile visibility.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      title: "A More Professional Candidate Journey",
      desc: "The candidate experience should feel cleaner, clearer, and more premium than the average recruitment website.",
      icon: <Settings className="w-8 h-8 text-gold" />
    },
    {
      title: "Support Across Different Career Stages",
      desc: "This platform should feel relevant to active job seekers, passive professionals, career switchers, and candidates looking for stronger positioning.",
      icon: <TrendingUp className="w-8 h-8 text-gold" />
    },
    {
      title: "A Better Long-Term Opportunity Model",
      desc: "Candidates are not limited to one application cycle. The platform should make it feel like opportunities can keep opening over time.",
      icon: <Award className="w-8 h-8 text-gold" />
    }
  ];

  const differences = [
    {
      title: "Job Boards Mostly Wait for Applications",
      desc: "NAYA Staffing should feel more active and supportive, not just like a place where users upload a CV and hope."
    },
    {
      title: "Candidate Registration Creates Ongoing Visibility",
      desc: "Instead of one-off applications only, candidates can enter a broader opportunity flow by registering and uploading their resume."
    },
    {
      title: "Reverse Recruitment Adds a Strategic Edge",
      desc: "This gives candidates a more proactive route into opportunities rather than requiring them to do everything manually."
    },
    {
      title: "The Platform Combines Jobs, Visibility, and Career Support",
      desc: "Candidates can use job listings, premium services, and supporting resources together."
    },
    {
      title: "The Experience Should Feel More Premium and Personal",
      desc: "The site should present NAYA Staffing as a career partner, not just a vacancy board."
    },
    {
      title: "The Goal Is Better Alignment, Not Just More Clicks",
      desc: "This page should emphasize relevance, opportunity quality, and positioning rather than volume alone."
    }
  ];

  const gains = [
    {
      title: "Stronger Resume Visibility",
      desc: "Candidates improve their chances of being considered by becoming visible in the system."
    },
    {
      title: "More Structured Career Support",
      desc: "The platform helps users choose clearer next steps instead of navigating the market blindly."
    },
    {
      title: "Better Opportunity Access",
      desc: "Candidates can engage with live job openings while also positioning themselves for future roles."
    },
    {
      title: "A Smarter Search Strategy",
      desc: "Reverse recruitment and registration create more than one path into opportunity."
    },
    {
      title: "Greater Professional Confidence",
      desc: "A cleaner, more supportive process helps candidates feel more in control of their job search."
    },
    {
      title: "A More Premium Experience",
      desc: "This page should help users feel they are entering a stronger candidate ecosystem rather than a basic application portal."
    }
  ];

  const audiences = [
    {
      title: "Active Job Seekers",
      desc: "Candidates who want to apply now and move quickly into visible opportunities."
    },
    {
      title: "Passive Professionals",
      desc: "Candidates who are open to better roles but do not want to rely only on public applications."
    },
    {
      title: "Career Switchers",
      desc: "People exploring a better role, industry shift, or next-stage move and wanting more structured support."
    },
    {
      title: "Early-Career Candidates",
      desc: "Job seekers who want stronger visibility and a more guided entry into the market."
    },
    {
      title: "Experienced Candidates Seeking Better Alignment",
      desc: "Professionals who want more relevant opportunities and a more thoughtful candidate experience."
    }
  ];

  const steps = [
    {
      title: "Browse Job Openings",
      desc: "Start with live opportunities if you want to explore immediate roles.",
      href: "/job-openings"
    },
    {
      title: "Register & Upload Resume",
      desc: "Create visibility for current and future opportunities.",
      href: "/job-seekers/register-upload-resume"
    },
    {
      title: "Explore Reverse Recruitment",
      desc: "Choose a more strategic approach if you want stronger support beyond direct job applications.",
      href: "/job-seekers/reverse-recruitment"
    },
    {
      title: "Review Pricing",
      desc: "Understand any candidate-facing premium services or structured support options.",
      href: "/job-seekers/pricing"
    },
    {
      title: "Use Career Advice",
      desc: "Access broader job-seeker guidance and improve your overall market readiness.",
      href: "/career-advice"
    }
  ];

  const relatedLinks = [
    { name: "Job Seekers Overview", href: "/job-seekers", desc: "Return to the main parent section for candidates." },
    { name: "Reverse Recruitment", href: "/job-seekers/reverse-recruitment", desc: "Learn about our proactive marketing model." },
    { name: "Pricing", href: "/job-seekers/pricing", desc: "Review candidate services and plans." },
    { name: "Register & Upload Resume", href: "/job-seekers/register-upload-resume", desc: "Onboard as a candidate in our database." },
    { name: "Job Openings", href: "/job-openings", desc: "Browse and apply to live job postings." },
    { name: "Career Advice", href: "/career-advice", desc: "Check out resume, interviewing, and job hunt tips." }
  ];

  const faqs = [
    {
      question: "Why should I use NAYA Staffing instead of only applying on job boards?",
      answer: "NAYA Staffing offers candidates a more structured experience through job access, resume visibility, reverse recruitment, and additional career-focused support rather than relying only on one-off applications."
    },
    {
      question: "What makes NAYA Staffing different from other job platforms?",
      answer: "It is positioned as more than a job board. Candidates can register, upload resumes, explore strategic services, and enter a more complete opportunity pipeline."
    },
    {
      question: "What pages are connected to this candidate section?",
      answer: "The approved Job Seekers structure includes Why Choose Us?, Reverse Recruitment, Pricing, and Register & Upload Resume, while Job Openings is standalone and Career Advice is an added supporting candidate page."
    },
    {
      question: "How do I get started with NAYA Staffing?",
      answer: "The clearest starting points are to browse job openings, register and upload your resume, or explore reverse recruitment depending on what kind of support you want."
    },
    {
      question: "Is NAYA Staffing only for active job seekers?",
      answer: "No. It should also appeal to passive professionals, career movers, and candidates who want stronger positioning for future opportunities."
    },
    {
      question: "What is the purpose of this page?",
      answer: "This page is designed to help candidates understand why NAYA Staffing is worth using before they move deeper into registration, pricing, reverse recruitment, or job search activity."
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Why Candidates Choose NAYA Staffing</span>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
            <Typewriter>
              More Than a Job Search. <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                A Smarter Path to Opportunity.
              </span>
            </Typewriter>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
              NAYA Staffing helps job seekers move beyond random applications and into a more strategic candidate experience. From stronger visibility and resume positioning to reverse recruitment, job access, and career-focused support, we give candidates more ways to be seen, considered, and matched with the right opportunities.
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
                Built for candidates who want more than job listings and are looking for a better way to move their career forward.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-20">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold to-transparent"></div>
        </div>
      </section>

      {/* 2. WHY THIS PAGE EXISTS */}
      <section className="py-24 relative overflow-hidden bg-navy-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 lg:gap-12 xl:gap-20 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
                The Core Difference
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                Why This Page <br className="hidden md:inline" />
                <span className="text-gold">Matters for Candidates</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Many candidates do not struggle because there are no jobs available. They struggle because the job-search process is noisy, repetitive, and often discouraging. They apply to many roles, hear back from very few, and rarely feel that anyone is actually helping them position themselves more effectively in the market.
              </p>
              <p>
                That is why this page matters. It clearly explains why a candidate should use NAYA Staffing instead of relying only on cold applications and public job boards. The goal is to make job seekers feel that the platform offers a more structured, more supportive, and more strategic route into opportunity.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                Your approved structure already positions this as a key candidate page under Job Seekers, which means it works as a trust-builder before users move into Reverse Recruitment, Pricing, or Register &amp; Upload Resume.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY JOB SEEKERS CHOOSE NAYA STAFFING */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="btn-rotating-border absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 btn-auto-sheen border border-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Job Seekers <span className="text-gold">Choose NAYA Staffing</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              We focus on building a fuller candidate system and database to deliver practical, long-term career value.
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

      {/* 4. WHAT MAKES US DIFFERENT FROM JOB BOARDS */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              What Makes Us Different <span className="text-gold">From Job Boards</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              We don't just host list ads; we design pathways that position candidates proactively toward matching employers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {differences.map((diff, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6">
                  <div className="btn-rotating-border w-10 h-10 bg-white/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-white/5 transition-colors btn-auto-sheen border border-white/5">
                    <Check className="w-5 h-5 text-gold group-hover:text-navy-dark" />
                  </div>
                  <h3 className="text-white font-black text-xl leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                    {diff.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {diff.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHAT CANDIDATES GAIN */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              What Job Seekers <span className="text-gold">Gain</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              We convert platform features into clear benefits that strengthen your career development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {gains.map((gain, i) => (
              <div key={i} className="group p-8 rounded-[36px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-500 hover:shadow-xl flex flex-col h-full justify-between">
                <div className="space-y-4">
                  <h4 className="text-white font-black text-lg group-hover:text-gold transition-colors tracking-tight uppercase">
                    {gain.title}
                  </h4>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {gain.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHO THIS IS BEST FOR */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Who NAYA Staffing Is <span className="text-gold">Best For</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Our candidate ecosystem is built to support different career profiles, stages, and plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-8">
            {audiences.map((aud, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-[#0B132B]/50 border border-white/5 hover:border-gold/30 transition-all duration-500 flex flex-col h-full justify-between">
                <div className="space-y-4">
                  <h4 className="text-white font-black text-base group-hover:text-gold transition-colors tracking-tight uppercase">
                    {aud.title}
                  </h4>
                  <p className="text-slate-400 text-xs font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {aud.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. HOW TO GET STARTED */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              How to <span className="text-gold">Get Started</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              We make candidate onboarding clear and logical. Follow the path that fits your current job hunt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 xl:gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-500 hover:shadow-xl flex flex-col h-full justify-between">
                <div className="space-y-4">
                  <span className="text-gold font-bold text-xs">Step 0{idx + 1}</span>
                  <h4 className="text-white font-black text-lg group-hover:text-gold transition-colors tracking-tight uppercase">
                    {step.title}
                  </h4>
                  <p className="text-slate-400 text-xs font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {step.desc}
                  </p>
                </div>
                
                <Link 
                  href={step.href} 
                  className="group/btn inline-flex items-center gap-2 text-xs font-black tracking-widest text-gold hover:text-white uppercase transition-colors pt-6 border-t border-white/5 mt-6"
                >
                  Go <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA BLOCK */}
      <section className="py-24 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-[64px] p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-8 xl:gap-12 border-white/10 hover:border-gold/20 transition-all duration-700 btn-sheen">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black text-white leading-[0.9] tracking-tighter mb-4 uppercase">
                Ready to Take a Smarter <br /> <span className="text-gold">Approach to Your Job Search?</span>
              </h2>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed mt-4">
                NAYA Staffing gives job seekers more than one way to move forward. Whether you want to apply now, improve your visibility, or explore a more proactive candidate strategy, this is where the better candidate journey begins.
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
              Choose a Better <br/>
              <span className="text-gold">Candidate Experience</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              The right platform should help you move forward with more visibility, more structure, and better opportunity access. NAYA Staffing helps job seekers take a more confident and more strategic step into the job market.
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
                Hiring <span className="text-gold">Services</span>
              </h2>
              <div className="btn-rotating-border h-1 w-20 bg-white/5 rounded-full btn-auto-sheen border border-white/5"></div>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                Learn how we help candidates beyond direct job application postings with reverse recruitment, pricing structures, and career advice.
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
          <Link href="/job-seekers/reverse-recruitment" className="hover:text-gold transition-colors">Reverse Recruitment</Link>
          <Link href="/job-seekers/pricing" className="hover:text-gold transition-colors">Pricing</Link>
        </div>
      </section>
    </main>
  );
}
