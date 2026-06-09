import { Typewriter } from "@/components/Typewriter";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Check, 
  HelpCircle, 
  ArrowRight, 
  ArrowUpRight, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Zap, 
  Sparkles,
  Info,
  ChevronRight,
  DollarSign
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "Pricing | Candidate Services, Reverse Recruitment & Career Support | NAYA Staffing",
  description: "Explore NAYA Staffing pricing for candidate services, reverse recruitment, resume visibility, and premium career support designed to help job seekers take a smarter path to opportunity.",
  keywords: [
    "job seeker pricing",
    "reverse recruitment pricing",
    "candidate service pricing",
    "recruitment service pricing for candidates",
    "premium job search support pricing",
    "career support pricing",
    "resume visibility pricing",
    "recruitment agency pricing for job seekers",
    "job seeker service plans",
    "candidate package pricing",
    "premium recruitment support",
    "job search support plans",
    "career positioning service cost",
    "proactive job search pricing",
    "candidate visibility plans",
    "pricing for reverse recruitment"
  ]
};

export default function JobSeekersPricingPage() {
  const plans = [
    {
      name: "Basic Visibility",
      positioning: "For candidates who want to get started",
      price: "$0",
      period: "Free Tier",
      description: "This is the lowest-friction entry option for candidates who want to register, upload a resume, and become visible in the system.",
      benefits: [
        "Candidate registration",
        "Resume upload",
        "Basic profile visibility",
        "Access to job openings",
        "Entry into the candidate system"
      ],
      bestFor: [
        "active job seekers",
        "early-career candidates",
        "candidates exploring the platform for the first time"
      ],
      ctaText: "Get Started",
      ctaHref: "/job-seekers/register-upload-resume",
      isFlagship: false
    },
    {
      name: "Professional Advantage",
      positioning: "For candidates who want stronger visibility",
      price: "$49",
      period: "per month",
      description: "This is the mid-tier option for candidates who want more than basic presence and are looking for a stronger, more strategic candidate advantage.",
      benefits: [
        "Everything in Basic Visibility",
        "Improved candidate visibility",
        "Stronger profile positioning",
        "Enhanced consideration pathway",
        "Access to more proactive opportunity support"
      ],
      bestFor: [
        "candidates actively searching",
        "professionals who want better market positioning",
        "job seekers looking for a stronger edge than standard applications"
      ],
      ctaText: "Choose Professional Advantage",
      ctaHref: "/job-seekers/register-upload-resume",
      isFlagship: false
    },
    {
      name: "Reverse Recruitment Premium",
      positioning: "For candidates who want a proactive search strategy",
      price: "$149",
      period: "per month",
      description: "This is the premium plan tied most directly to the Reverse Recruitment concept and should feel like the flagship candidate offering.",
      benefits: [
        "Everything in lower plans",
        "Reverse recruitment support",
        "Proactive candidate-side opportunity strategy",
        "Stronger visibility within the opportunity pipeline",
        "Premium candidate positioning experience"
      ],
      bestFor: [
        "passive professionals",
        "experienced candidates",
        "career switchers",
        "job seekers who want a smarter, proactive path instead of relying only on applications"
      ],
      ctaText: "Go Premium",
      ctaHref: "/job-seekers/register-upload-resume",
      isFlagship: true
    }
  ];

  const philosophy = [
    {
      title: "The Goal Is Better Career Positioning",
      desc: "Candidates are not paying for random access. They are investing in a better opportunity pathway."
    },
    {
      title: "The Value Is in Visibility and Strategy",
      desc: "The strongest differentiator is not “more applications.” It is better visibility, smarter positioning, and stronger support."
    },
    {
      title: "The Structure Should Feel Transparent",
      desc: "Candidates should understand what each plan includes and who it is for."
    },
    {
      title: "The Experience Should Feel Premium",
      desc: "This page should feel aligned with a serious career service, not a cheap upsell funnel."
    },
    {
      title: "The Plans Should Be Easy to Compare",
      desc: "Candidates should quickly see which option is right for them."
    }
  ];

  const reasonsExists = [
    {
      title: "Basic Access and Premium Support Are Not the Same",
      desc: "Browsing opportunities is one thing. Strategic candidate support is another."
    },
    {
      title: "Some Candidates Want More Than Standard Job Search",
      desc: "They want stronger visibility, smarter positioning, and a more proactive route into opportunities."
    },
    {
      title: "Premium Support Should Be Clearly Explained",
      desc: "A pricing page removes confusion and helps candidates understand what they are paying for."
    },
    {
      title: "Transparency Builds Trust",
      desc: "Candidates are more likely to engage when the structure, value, and available options are explained clearly."
    },
    {
      title: "Different Candidates Need Different Levels of Support",
      desc: "Some may only need basic access, while others may want a more active and premium career service."
    },
    {
      title: "This Page Helps Users Self-Select",
      desc: "Instead of forcing every candidate into one path, pricing helps them choose the model that fits best."
    }
  ];

  const planMatches = [
    {
      title: "Basic Visibility",
      desc: "Choose Basic Visibility if you want to register, upload your resume, and enter the opportunity flow without overcomplicating the process."
    },
    {
      title: "Professional Advantage",
      desc: "Choose Professional Advantage if you are actively job searching and want stronger visibility and better positioning."
    },
    {
      title: "Reverse Recruitment Premium",
      desc: "Choose Reverse Recruitment Premium if you want a more proactive and strategic service model that goes beyond standard applications."
    },
    {
      title: "Contact / Consultation First",
      desc: "Choose Contact / Consultation First if you are unsure which path is right and want guidance before choosing.",
      href: "/contact-us"
    }
  ];

  const gains = [
    {
      title: "More Visibility",
      desc: "Candidates become easier to consider beyond one-off applications."
    },
    {
      title: "More Strategy",
      desc: "The job search feels less random and more intentional."
    },
    {
      title: "More Than Basic Job Access",
      desc: "Candidates gain a service layer, not just a vacancy board."
    },
    {
      title: "Stronger Career Positioning",
      desc: "The service helps candidates feel more deliberately presented."
    },
    {
      title: "A More Premium Experience",
      desc: "The platform feels more structured, supportive, and serious."
    },
    {
      title: "More Flexible Candidate Choice",
      desc: "Users can choose the level of support they want rather than being forced into one experience."
    }
  ];

  const faqs = [
    {
      question: "Why does NAYA Staffing have a pricing page for job seekers?",
      answer: "This page exists to explain candidate-facing premium support options clearly and transparently. It helps users understand the difference between basic platform access and more strategic services such as reverse recruitment."
    },
    {
      question: "Do candidates have to pay just to browse jobs?",
      answer: "No. Pricing is tied to premium support and enhanced candidate services, not simply to basic awareness of opportunities. Standard job openings can be browsed and applied to directly without costs."
    },
    {
      question: "What is the difference between the plans?",
      answer: "The plans differ by how much visibility, positioning, and proactive support the candidate receives, with Reverse Recruitment Premium positioned as the strongest proactive option."
    },
    {
      question: "Which plan is best for active job seekers?",
      answer: "Active job seekers may fit either Basic Visibility or Professional Advantage depending on how much support they want."
    },
    {
      question: "Which plan is best for passive professionals or career switchers?",
      answer: "Reverse Recruitment Premium is the best fit for candidates who want a more proactive and strategic path into opportunity."
    },
    {
      question: "Where does this page sit in the site structure?",
      answer: "This page sits inside the approved Job Seekers section alongside Why Choose Us?, Reverse Recruitment, and Register & Upload Resume."
    }
  ];

  const relatedLinks = [
    { name: "Job Seekers Overview", href: "/job-seekers", desc: "Return to the main parent section for candidates." },
    { name: "Why Choose Us?", href: "/job-seekers/why-choose-us", desc: "Learn what sets NAYA Staffing apart for job seekers." },
    { name: "Reverse Recruitment", href: "/job-seekers/reverse-recruitment", desc: "Learn about our proactive marketing model." },
    { name: "Register & Upload Resume", href: "/job-seekers/register-upload-resume", desc: "Onboard as a candidate in our database." },
    { name: "Job Openings", href: "/job-openings", desc: "Browse and apply to live job postings." },
    { name: "Career Advice", href: "/career-advice", desc: "Check out resume, interviewing, and job hunt tips." }
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Candidate Plans &amp; Premium Career Support</span>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
            <Typewriter>
              Pricing for Job Seekers Who Want a <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Smarter, Strategic Search.
              </span>
            </Typewriter>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
              NAYA Staffing’s pricing options are designed for candidates who want more than basic job browsing. From stronger resume visibility to more proactive support through reverse recruitment and premium candidate services, this page helps job seekers choose the level of support that fits their goals, urgency, and career strategy.
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
                href="/job-seekers/reverse-recruitment" 
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 transition-all duration-300 backdrop-blur-xl btn-sheen"
              >
                Explore Reverse Recruitment
              </Link>
            </div>
            <div className="pt-10 border-t border-white/5 mt-10 max-w-xl mx-auto text-center animate-fade-in-up animate-delay-400">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 leading-loose">
                Built for candidates who want more visibility, better positioning, and a stronger path into opportunity.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-20">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold to-transparent"></div>
        </div>
      </section>

      {/* 2. PRICING POSITIONING / INTRO SECTION */}
      <section className="py-24 relative overflow-hidden bg-navy-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 lg:gap-12 xl:gap-20 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
                Value First
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                A Pricing Model Built <br className="hidden md:inline" />
                <span className="text-gold">Around Candidate Value</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Most job platforms only give candidates one path: search, click, apply, repeat. That model can be useful, but it often leaves candidates doing all the work alone while receiving very little visibility, very little guidance, and very little strategic support in return.
              </p>
              <p>
                This Pricing page should position NAYA Staffing differently. It makes clear that paid candidate options exist not to restrict access to opportunity, but to provide a stronger, more proactive, and more strategic service model for people who want more than a basic application experience.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                Because Pricing is one of the fixed subpages inside the approved Job Seekers section, this page connects naturally to Reverse Recruitment and Register &amp; Upload Resume rather than sitting as an isolated pricing table.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY THIS PAGE EXISTS */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">
              Why This Page <span className="text-gold">Exists</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Candidates need to understand why pricing exists before they can trust it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {reasonsExists.map((reason, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6">
                  <div className="btn-rotating-border w-14 h-14 bg-white/5 border border-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/5 group-hover:text-white hover:text-gold transition-all duration-500 btn-auto-sheen border border-white/5">
                    <Info className="w-8 h-8 text-gold" />
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

      {/* 4. PRICING PHILOSOPHY */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">
              How Pricing Is <span className="text-gold">Positioned</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Our core positioning principles keep candidate support transparent and premium.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-8">
            {philosophy.map((item, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-[#0B132B]/50 border border-white/5 hover:border-gold/30 transition-all duration-500 flex flex-col h-full justify-between">
                <div className="space-y-4">
                  <div className="text-gold font-bold text-xs uppercase tracking-widest">Principle 0{idx + 1}</div>
                  <h4 className="text-white font-black text-base group-hover:text-gold transition-colors tracking-tight uppercase">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-xs font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. RECOMMENDED PRICING TABLE STRUCTURE */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="btn-rotating-border absolute top-1/2 left-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 btn-auto-sheen border border-white/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">
              Recommended <span className="text-gold">Candidate Plans</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Find the plan structure locked for your future custom configurations.
            </p>
            <div className="btn-rotating-border p-4 rounded-2xl bg-white/10 border border-gold/20 max-w-xl mx-auto text-xs text-gold font-semibold flex items-center justify-center gap-2 btn-auto-sheen border border-white/5">
              <Info className="w-4 h-4 shrink-0" />
              <span>Dev Note: Real pricing amounts can be easily configured by the admin later.</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8 items-stretch">
            {plans.map((plan, idx) => (
              <div key={idx} className={`group relative p-10 rounded-[40px] flex flex-col justify-between h-full transition-all duration-700 hover:shadow-2xl border ${plan.isFlagship ? 'bg-[#0B132B]/85 border-gold shadow-2xl shadow-gold/10' : 'bg-white/[0.01] border-white/5 hover:border-gold/30'}`}>
                {plan.isFlagship && (
                  <div className="btn-rotating-border absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-white/5 text-white hover:text-gold text-xs font-black uppercase tracking-widest rounded-full shadow-lg flex items-center gap-1.5 btn-auto-sheen border border-white/5">
                    <Sparkles className="w-3.5 h-3.5 fill-current" /> Flagship Support
                  </div>
                )}
                
                <div className="space-y-8">
                  <div>
                    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest block mb-2">{plan.positioning}</span>
                    <h3 className="text-white font-black text-3xl leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                      {plan.name}
                    </h3>
                  </div>
                  
                  <div className="flex items-baseline gap-2 py-4 border-y border-white/5">
                    <span className="text-5xl font-black text-gold">{plan.price}</span>
                    <span className="text-slate-400 text-sm font-semibold">{plan.period}</span>
                  </div>

                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {plan.description}
                  </p>

                  <div className="space-y-4">
                    <div className="text-xs font-black uppercase tracking-widest text-white">What's Included:</div>
                    <ul className="space-y-3">
                      {plan.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 text-slate-300 text-xs font-semibold">
                          <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-white/5">
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Best For:</div>
                    <div className="flex flex-wrap gap-2">
                      {plan.bestFor.map((bf, bfIdx) => (
                        <span key={bfIdx} className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-md text-[10px] text-slate-300 font-semibold uppercase btn-sheen">
                          {bf}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-white/5">
                  <Link 
                    href={plan.ctaHref} 
                    className={`w-full py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-xs ${plan.isFlagship ? 'bg-gold hover:bg-gold-hover text-navy-dark shadow-xl shadow-gold/20 hover:-translate-y-1' : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-gold/30 hover:-translate-y-1'}`}
                  >
                    {plan.ctaText} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHAT EACH PLAN IS BEST FOR */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">
              Which Plan <span className="text-gold">Fits Which Candidate?</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Use this guide to self-select the model that matches your job hunt and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
            {planMatches.map((match, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-500 hover:shadow-xl flex flex-col h-full justify-between">
                <div className="space-y-4">
                  <span className="text-gold font-bold text-xs">Option 0{idx + 1}</span>
                  <h4 className="text-white font-black text-lg group-hover:text-gold transition-colors tracking-tight uppercase">
                    {match.title}
                  </h4>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {match.desc}
                  </p>
                </div>
                
                {match.href ? (
                  <Link 
                    href={match.href} 
                    className="group/btn inline-flex items-center gap-2 text-xs font-black tracking-widest text-gold hover:text-white uppercase transition-colors pt-6 border-t border-white/5 mt-6"
                  >
                    Contact Us <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <Link 
                    href="/job-seekers/register-upload-resume" 
                    className="group/btn inline-flex items-center gap-2 text-xs font-black tracking-widest text-gold hover:text-white uppercase transition-colors pt-6 border-t border-white/5 mt-6"
                  >
                    Select Plan <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHAT CANDIDATES GET ACROSS PLANS */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">
              What Candidates <span className="text-gold">Gain From Premium Support</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              We translate platform features into direct commercial and professional value for you.
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

      {/* 8. WHY PAID CANDIDATE SUPPORT CAN BE VALUABLE */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 lg:gap-12 xl:gap-20 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
                The Real Investment
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                Why Some Candidates <br className="hidden md:inline" />
                <span className="text-gold">Choose Paid Support</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Many job seekers already spend large amounts of time applying for roles without gaining real traction. For some candidates, the problem is not effort. It is lack of visibility, lack of positioning, and overreliance on reactive job searching.
              </p>
              <p>
                A paid support model can make sense when it creates more value than another month of blind applications. If candidates gain stronger exposure, better strategic direction, and a more proactive route into opportunity, the service becomes easier to understand as an investment rather than just a fee.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                This is especially relevant because our broader site planning positions the website as more than a brochure site and more than a simple jobs page. The platform is intended to support a stronger candidate system and more premium career flow.
              </p>
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
              <Zap className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Choose the Level of <br/>
              <span className="text-gold">Career Support That Fits You</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              Some candidates only need a place to begin. Others want stronger visibility, smarter positioning, and a more proactive path into opportunity. NAYA Staffing’s pricing page helps job seekers choose the support model that matches their goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 xl:gap-8">
              <Link 
                href="/job-seekers/register-upload-resume" 
                className="btn-rotating-border group w-full sm:w-auto px-16 py-8 bg-white/5 hover:bg-white/10 text-white hover:text-gold font-black rounded-[32px] transition-all flex items-center justify-center gap-4 shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-[0.3em] text-[10px] btn-auto-sheen border border-white/5"
              >
                Register &amp; Upload Resume <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-500" />
              </Link>
              <Link 
                href="/job-seekers/reverse-recruitment" 
                className="w-full sm:w-auto px-16 py-8 bg-white/5 hover:bg-white/10 text-white font-black rounded-[32px] border border-white/10 transition-all backdrop-blur-xl uppercase tracking-[0.3em] text-[10px] btn-sheen"
              >
                Explore Reverse Recruitment
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
          <Link href="/job-seekers/why-choose-us" className="hover:text-gold transition-colors">Why Choose Us?</Link>
          <Link href="/job-seekers/reverse-recruitment" className="hover:text-gold transition-colors">Reverse Recruitment</Link>
          <Link href="/job-seekers/register-upload-resume" className="hover:text-gold transition-colors">Register &amp; Upload Resume</Link>
          <Link href="/job-openings" className="hover:text-gold transition-colors">Job Openings</Link>
          <Link href="/career-advice" className="hover:text-gold transition-colors">Career Advice</Link>
        </div>
      </section>
    </main>
  );
}
