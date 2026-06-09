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
  title: "Reverse Recruitment for Job Seekers | A Smarter Way to Get Hired | NAYA Staffing",
  description: "Explore NAYA Staffing’s reverse recruitment service for job seekers who want stronger visibility, smarter career positioning, and a more proactive path to better opportunities.",
  keywords: [
    "reverse recruitment",
    "reverse recruitment for job seekers",
    "proactive job search service",
    "candidate visibility service",
    "premium job search support",
    "recruitment agency for candidates",
    "smarter way to get hired",
    "strategic job search support",
    "candidate marketing service",
    "job seeker premium service",
    "get employers to find you",
    "proactive career support",
    "resume visibility platform",
    "career positioning service",
    "job seeker recruitment support",
    "professional opportunity matching"
  ]
};

export default function JobSeekersReverseRecruitmentPage() {
  const problems = [
    {
      title: "Too Many Applications, Too Little Visibility",
      desc: "Candidates often apply repeatedly but still struggle to get noticed in crowded applicant pools.",
      icon: <ShieldAlert className="w-8 h-8 text-gold" />
    },
    {
      title: "The Process Is Mostly Reactive",
      desc: "Traditional job searching usually puts all the pressure on the candidate to keep chasing opportunities one by one.",
      icon: <Clock className="w-8 h-8 text-gold" />
    },
    {
      title: "Strong Candidates Can Still Be Missed",
      desc: "Even qualified candidates may not stand out if their profile is not positioned well or if they are applying through overloaded channels.",
      icon: <Target className="w-8 h-8 text-gold" />
    },
    {
      title: "One-Off Applications Do Not Build Ongoing Opportunity",
      desc: "A normal application only works for one vacancy at a time, which limits longer-term exposure.",
      icon: <Globe className="w-8 h-8 text-gold" />
    },
    {
      title: "The Job Search Can Feel Random and Frustrating",
      desc: "Without a stronger system, candidates often feel like they are working hard without gaining momentum.",
      icon: <Settings className="w-8 h-8 text-gold" />
    },
    {
      title: "Candidates Need More Than Access to Listings",
      desc: "They need visibility, positioning, and a smarter route into relevant opportunities.",
      icon: <Award className="w-8 h-8 text-gold" />
    }
  ];

  const features = [
    {
      title: "You Register and Share Your Profile",
      desc: "The candidate begins by registering and uploading a resume so their experience, background, and career direction are visible.",
      icon: <Users className="w-6 h-6 text-gold" />
    },
    {
      title: "Your Positioning Becomes More Strategic",
      desc: "Instead of existing only as another applicant in a crowded list, the candidate enters a more structured opportunity pathway.",
      icon: <Target className="w-6 h-6 text-gold" />
    },
    {
      title: "Your Visibility Improves",
      desc: "The candidate becomes easier to consider for suitable opportunities beyond a single direct application.",
      icon: <TrendingUp className="w-6 h-6 text-gold" />
    },
    {
      title: "Opportunity Matching Becomes Smarter",
      desc: "The service is designed to support stronger alignment between candidate profiles and relevant openings or future opportunities.",
      icon: <Settings className="w-6 h-6 text-gold" />
    },
    {
      title: "The Candidate Journey Becomes More Proactive",
      desc: "Rather than relying only on repeated manual applications, the candidate is better positioned within the wider hiring ecosystem.",
      icon: <Activity className="w-6 h-6 text-gold" />
    }
  ];

  const benefits = [
    {
      title: "Stronger Visibility",
      desc: "Candidates improve their chances of being seen in a more meaningful way than through one-off applications alone."
    },
    {
      title: "A Smarter Job Search Strategy",
      desc: "This service helps candidates move from reactive job hunting toward a more strategic approach."
    },
    {
      title: "More Than One Path to Opportunity",
      desc: "Candidates can still browse jobs, but they also gain a second route through improved visibility and proactive positioning."
    },
    {
      title: "Better Career Positioning",
      desc: "The process helps candidates feel more intentionally presented within the market."
    },
    {
      title: "Less Dependence on Job Board Noise",
      desc: "Candidates are not forced to rely only on crowded public listings and repeated cold applications."
    },
    {
      title: "A More Premium Candidate Experience",
      desc: "The service should feel higher-value, more thoughtful, and more supportive than a basic upload-your-CV process."
    }
  ];

  const audiences = [
    {
      title: "Active Job Seekers",
      desc: "Candidates applying now who want a stronger edge and more visibility in the market."
    },
    {
      title: "Passive Professionals",
      desc: "People who are open to better opportunities but do not want to rely only on public applications."
    },
    {
      title: "Career Switchers",
      desc: "Candidates changing roles, industries, or direction who need a smarter way to position themselves."
    },
    {
      title: "Experienced Professionals",
      desc: "People who want more relevant opportunity flow and do not want to blend into generic applicant pools."
    },
    {
      title: "Candidates Who Want a More Strategic Search",
      desc: "Job seekers who understand that better positioning can matter as much as the applications themselves."
    }
  ];

  const steps = [
    {
      stepNum: "01",
      title: "Register Your Interest",
      desc: "Use the candidate intake path to enter the system."
    },
    {
      stepNum: "02",
      title: "Upload Your Resume",
      desc: "Provide your background, experience, and core career information."
    },
    {
      stepNum: "03",
      title: "Clarify Your Direction",
      desc: "Indicate what kind of role, industry, or opportunity you are aiming for."
    },
    {
      stepNum: "04",
      title: "Enter the Visibility Pipeline",
      desc: "Your profile becomes part of a more strategic candidate flow rather than only isolated applications."
    },
    {
      stepNum: "05",
      title: "Stay Connected to Opportunities",
      desc: "Use the platform alongside job openings and other candidate resources."
    },
    {
      stepNum: "06",
      title: "Move Toward Better Matches",
      desc: "The overall goal is better opportunity alignment, better visibility, and a more thoughtful candidate experience."
    }
  ];

  const relatedLinks = [
    { name: "Job Seekers Overview", href: "/job-seekers", desc: "Return to the main parent section for candidates." },
    { name: "Why Choose Us?", href: "/job-seekers/why-choose-us", desc: "Explore the candidate value proposition." },
    { name: "Pricing", href: "/job-seekers/pricing", desc: "Review candidate services and plans." },
    { name: "Register & Upload Resume", href: "/job-seekers/register-upload-resume", desc: "Onboard as a candidate in our database." },
    { name: "Job Openings", href: "/job-openings", desc: "Browse and apply to live job postings." },
    { name: "Career Advice", href: "/career-advice", desc: "Check out resume, interviewing, and job hunt tips." }
  ];

  const faqs = [
    {
      question: "What is reverse recruitment?",
      answer: "Reverse Recruitment is a more proactive candidate service model designed to help job seekers improve visibility, strengthen positioning, and access better opportunities beyond repeated direct applications alone."
    },
    {
      question: "How is reverse recruitment different from applying for jobs normally?",
      answer: "Normal job applications are mostly reactive and limited to one vacancy at a time. Reverse Recruitment creates a broader and more strategic pathway by making the candidate more visible and easier to consider beyond single application cycles."
    },
    {
      question: "Who is reverse recruitment best for?",
      answer: "It is useful for active job seekers, passive professionals, career switchers, and candidates who want a smarter and more strategic job-search experience."
    },
    {
      question: "Do I still apply for jobs if I use reverse recruitment?",
      answer: "Yes. Reverse Recruitment should complement direct applications, not necessarily replace them. It gives candidates an additional and stronger route into opportunity."
    },
    {
      question: "What should I do next if I am interested?",
      answer: "The strongest next steps are to Register & Upload Resume and review Pricing, because those pages help candidates move from interest into action."
    },
    {
      question: "Where does this page sit in the site structure?",
      answer: "This page sits under the approved Job Seekers section alongside Why Choose Us?, Pricing, and Register & Upload Resume."
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">A More Proactive Candidate Experience</span>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
            <Typewriter>
              Reverse Recruitment <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Who Want More Than Random Applications
              </span>
            </Typewriter>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
              NAYA Staffing’s Reverse Recruitment service helps candidates move beyond the traditional job-search model. Instead of relying only on repeated applications and waiting for responses, reverse recruitment is designed to improve your visibility, strengthen your positioning, and create a more strategic path toward relevant career opportunities.
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
                href="/job-seekers/pricing" 
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 transition-all duration-300 backdrop-blur-xl btn-sheen"
              >
                View Pricing
              </Link>
            </div>
            <div className="pt-10 border-t border-white/5 mt-10 max-w-xl mx-auto text-center animate-fade-in-up animate-delay-400">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 leading-loose">
                Built for candidates who want a smarter, more proactive way to be seen, considered, and connected to better opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-20">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold to-transparent"></div>
        </div>
      </section>

      {/* 2. WHAT REVERSE RECRUITMENT MEANS */}
      <section className="py-24 relative overflow-hidden bg-navy-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 lg:gap-12 xl:gap-20 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
                The Core Concept
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                What Is <br className="hidden md:inline" />
                <span className="text-gold">Reverse Recruitment?</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Reverse Recruitment is a more proactive job-seeker service model. Instead of depending only on public job applications, the candidate takes a more strategic route by becoming more visible, more intentionally positioned, and better prepared to be matched with the right opportunities.
              </p>
              <p>
                In a traditional job search, the candidate usually does all the chasing. They search listings, apply repeatedly, wait for replies, and often receive little feedback or traction. Reverse Recruitment changes that dynamic by creating a more structured path in which the candidate becomes part of a stronger visibility and opportunity process.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                This does not mean job applications disappear. It means the candidate has more than one route into opportunity. That makes the overall job-search experience feel more modern, more strategic, and more aligned with how competitive hiring markets really work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY TRADITIONAL JOB SEARCH OFTEN FALLS SHORT */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="btn-rotating-border absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 btn-auto-sheen border border-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Why Standard Job Applications <span className="text-gold">Are Often Not Enough</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Traditional job searching is too reactive and noisy. The database-backed platform we build resolves these critical limitations.
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

      {/* 4. HOW REVERSE RECRUITMENT WORKS */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              How Reverse <span className="text-gold">Recruitment Works</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              A simplified, intuitive summary of our candidate matching system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 xl:gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="group relative p-8 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6">
                  <div className="btn-rotating-border w-12 h-12 bg-white/10 border border-gold/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform btn-auto-sheen border border-white/5">
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-black text-base leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {feature.desc}
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
              What Reverse Recruitment <span className="text-gold">Delivers</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              We translate our technical capabilities into candidate benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="group p-8 rounded-[36px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-500 hover:shadow-xl flex flex-col h-full justify-between">
                <div className="space-y-4">
                  <h4 className="text-white font-black text-lg group-hover:text-gold transition-colors tracking-tight uppercase">
                    {benefit.title}
                  </h4>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHO THIS SERVICE IS BEST FOR */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Who Reverse Recruitment Is <span className="text-gold">Best For</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Explore whether a proactive search strategy is the right choice for your career goals.
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

      {/* 7. REVERSE RECRUITMENT VS JOB BOARDS */}
      <section className="py-24 bg-navy relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 lg:gap-12 xl:gap-20 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
                The Platform Clash
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                Reverse Recruitment vs <br className="hidden md:inline" />
                <span className="text-gold">Standard Job Boards</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                A standard job board usually works in one direction: employers post jobs, candidates apply, and most of the effort stays on the candidate side. That model can be useful, but it often creates crowded competition and very little individual visibility.
              </p>
              <p>
                Reverse Recruitment is different because it gives the candidate a more proactive route into opportunity. It is not limited to one job listing at a time. It is built around stronger positioning, better visibility, and a more strategic job-search model.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                This distinction matters because many candidates are not failing due to lack of effort. They are struggling because the standard system is too reactive and too noisy. Reverse Recruitment gives them a smarter alternative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. STEP-BY-STEP FLOW */}
      <section className="py-32 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Your Reverse <span className="text-gold">Recruitment Journey</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              How the process flows from registration to career opportunity alignment.
            </p>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {steps.map((step, idx) => (
              <div key={idx} className="group relative glass-panel p-8 md:p-12 rounded-[40px] border-white/5 hover:border-gold/30 transition-all duration-500 hover:-translate-y-2 bg-white/[0.01]">
                <div className="flex flex-col md:flex-row gap-6 xl:gap-8 items-start">
                  <div className="relative shrink-0">
                    <div className="text-8xl font-black text-white/5 absolute -top-10 -left-6 group-hover:text-gold/10 transition-colors">
                      {step.stepNum}
                    </div>
                    <div className="btn-rotating-border w-16 h-16 bg-white/10 border border-gold/20 rounded-2xl flex items-center justify-center text-gold relative z-10 shadow-xl group-hover:scale-110 transition-transform duration-500 btn-auto-sheen border border-white/5">
                      <Check className="w-8 h-8" />
                    </div>
                  </div>

                  <div className="space-y-2 flex-1 pt-2">
                    <h3 className="text-2xl font-black text-white group-hover:text-gold transition-colors tracking-tight uppercase">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-base leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PRICING / NEXT-STEP PROMPT */}
      <section className="py-24 bg-navy relative border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-[64px] p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-8 xl:gap-12 border-white/10 hover:border-gold/20 transition-all duration-700 btn-sheen">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black text-white leading-[0.9] tracking-tighter mb-4 uppercase">
                Ready to Explore <br /> <span className="text-gold">Reverse Recruitment Further?</span>
              </h2>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed mt-4">
                If you want a more proactive path into opportunity, the next step is to register your profile and review how the candidate service model works. This page naturally connects to Pricing and Register &amp; Upload Resume because those are the two strongest next actions for interested candidates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 shrink-0 w-full lg:w-auto">
              <Link href="/job-seekers/pricing" className="btn-rotating-border px-12 py-6 bg-white/5 text-white hover:text-gold font-black rounded-full hover:bg-white/10 hover:-translate-y-2 transition-all text-center shadow-xl uppercase tracking-[0.2em] text-xs btn-auto-sheen border border-white/5">
                View Pricing
              </Link>
              <Link href="/job-seekers/register-upload-resume" className="px-12 py-6 bg-white/5 border border-white/10 text-white font-black rounded-full hover:bg-white/10 hover:-translate-y-2 transition-all text-center uppercase tracking-[0.2em] text-xs backdrop-blur-md btn-sheen">
                Register &amp; Upload Resume
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
              <Target className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Stop Relying Only on Applications. <br/>
              <span className="text-gold">Start Positioning Yourself Smarter.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              A better opportunity often starts with better visibility and a better strategy. NAYA Staffing’s Reverse Recruitment service helps candidates move beyond job-board noise and toward a more proactive, premium candidate experience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 xl:gap-8">
              <Link 
                href="/job-seekers/register-upload-resume" 
                className="btn-rotating-border group w-full sm:w-auto px-16 py-8 bg-white/5 hover:bg-white/10 text-white hover:text-gold font-black rounded-[32px] transition-all flex items-center justify-center gap-4 shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-[0.3em] text-[10px] btn-auto-sheen border border-white/5"
              >
                Register &amp; Upload Resume <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-500" />
              </Link>
              <Link 
                href="/job-seekers/pricing" 
                className="w-full sm:w-auto px-16 py-8 bg-white/5 hover:bg-white/10 text-white font-black rounded-[32px] border border-white/10 transition-all backdrop-blur-xl uppercase tracking-[0.3em] text-[10px] btn-sheen"
              >
                View Pricing
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
                Intake <span className="text-gold">Links</span>
              </h2>
              <div className="btn-rotating-border h-1 w-20 bg-white/5 rounded-full btn-auto-sheen border border-white/5"></div>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                Connect with our core job seeker resources and sitemap folders to register your professional details.
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
          <Link href="/job-seekers/why-choose-us" className="hover:text-gold transition-colors">Why Choose Us</Link>
          <Link href="/job-seekers/pricing" className="hover:text-gold transition-colors">Pricing</Link>
        </div>
      </section>
    </main>
  );
}
