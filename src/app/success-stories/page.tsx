import { Typewriter } from "@/components/Typewriter";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Users, 
  HelpCircle, 
  ArrowRight, 
  ArrowUpRight, 
  Check, 
  Heart, 
  Briefcase, 
  Zap, 
  Sparkles,
  Info,
  ChevronRight,
  TrendingUp,
  Award
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: "Success Stories | Hiring Wins, Career Progress & Recruitment Outcomes | NAYA Staffing",
  description: "Explore NAYA Staffing success stories showing how employers and job seekers benefit from better hiring support, stronger visibility, and more structured recruitment experiences.",
  keywords: [
    "recruitment success stories",
    "staffing success stories",
    "hiring success stories",
    "candidate success stories",
    "employer success stories recruitment",
    "recruitment company success stories",
    "staffing agency results stories",
    "talent success stories",
    "job seeker success stories",
    "employer hiring wins",
    "recruitment platform outcomes",
    "staffing partner results",
    "hiring experience stories",
    "candidate visibility success",
    "career opportunity stories",
    "platform success stories"
  ]
};

export default function SuccessStoriesPage() {
  const storyTypes = [
    {
      title: "Employer Hiring Success Stories",
      desc: "Stories about smoother hiring, better role fit, stronger recruitment support, or improved hiring confidence."
    },
    {
      title: "Candidate Opportunity Success Stories",
      desc: "Stories about visibility, better-fit opportunities, stronger positioning, or a more structured job-search experience."
    },
    {
      title: "Growth and Expansion Stories",
      desc: "Stories about team build-outs, business growth support, or scale-related recruitment wins."
    },
    {
      title: "Platform Experience Stories",
      desc: "Stories showing that the wider NAYA system feels better, clearer, and more useful than a standard staffing site."
    },
    {
      title: "Service-Specific Success Stories",
      desc: "Stories connected to executive search, contract staffing, reverse recruitment, technical recruitment, or other key services."
    }
  ];

  const employerWins = [
    {
      title: "How a growing business found stronger hiring momentum through a more structured recruitment approach",
      desc: "A rising business was struggling with irregular hiring steps and inconsistent shortlists. By aligning with NAYA's structured recruitment approach, they established a predictable pipeline, closed key functional roles, and improved candidate quality.",
      highlight: "Reduced average recruitment cycle by 28 days."
    },
    {
      title: "How better shortlist quality helped an employer hire with more confidence",
      desc: "An employer was fatigued by viewing dozens of unqualified resumes. NAYA provided a highly focused, pre-screened list of just 3 premium candidates. The client hired the first candidate interviewed, feeling confident in their capability and role fit.",
      highlight: "100% conversion from first shortlist interview."
    },
    {
      title: "How a team expansion became easier with the right recruitment support model",
      desc: "A regional facility needed to expand operations quickly without overloading their internal HR lead. NAYA provided project-based contract staffing to source, vet, and onboard 15 qualified technical support staff on schedule.",
      highlight: "15 roles successfully filled in under 4 weeks."
    }
  ];

  const candidateWins = [
    {
      title: "How a candidate moved beyond one-off applications and into stronger visibility",
      desc: "A candidate was spending hours applying online without receiving feedback. By registering and uploading their resume with NAYA, their profile became visible in our proactive network database, leading directly to a senior placement.",
      highlight: "Matched with a leading firm in less than 2 weeks."
    },
    {
      title: "How reverse recruitment helped create a smarter job-search experience",
      desc: "An experienced developer wanted to transition to a niche industry but faced keyword barriers. NAYA represented them directly to targeted CTOs, skipping the standard application filter entirely and securing a direct interview.",
      highlight: "Bypassed standard portals to secure a custom role."
    },
    {
      title: "How better positioning led to a more aligned career opportunity",
      desc: "A professional felt their skills were undervalued in their current search. Using our career advice, they repositioned their background, prepared structured answers, and secured a permanent position that matched their value.",
      highlight: "Achieved a 25% increase in compensation."
    }
  ];

  const faqs = [
    {
      question: "What is the Success Stories page for?",
      answer: "This page highlights story-led proof showing how employers and candidates can benefit from a more structured NAYA Staffing experience."
    },
    {
      question: "How is this different from Testimonials?",
      answer: "Testimonials are shorter and quote-led. Success Stories are more narrative and human, with a little more context and flow."
    },
    {
      question: "How is this different from Case Studies?",
      answer: "Case Studies are more formal and structured around challenge, approach, and outcome. Success Stories feel warmer, lighter, and more relatable. Both remain separate concepts in the wider page plan."
    },
    {
      question: "Who should be featured in Success Stories?",
      answer: "Both employers and candidates are represented so the page supports both sides of our platform."
    },
    {
      question: "Where does this page sit in the sitemap?",
      answer: "Success Stories is listed in the approved Footer Insights section of the page plan."
    },
    {
      question: "Can this page expand over time?",
      answer: "Yes. It is built as a scalable storytelling page with room for future employer and candidate stories."
    }
  ];

  const relatedLinks = [
    { name: "Blog / Insights", href: "/insights", desc: "Explore our latest recruiting insights and articles." },
    { name: "Case Studies", href: "/case-studies", desc: "Read in-depth challenge and solution analysis." },
    { name: "Testimonials", href: "/testimonials", desc: "Read quick candidate and employer testimonials." },
    { name: "About Company", href: "/about-us/about-company", desc: "Explore our brand profile and team page." },
    { name: "Contact Us", href: "/contact-us", desc: "Get in touch with our operations desk." },
    { name: "Services Overview", href: "/services", desc: "Browse our recruitment services stack." },
    { name: "Employers Overview", href: "/employers", desc: "Explore candidate sourcing portals." },
    { name: "Job Seekers Overview", href: "/job-seekers", desc: "Access candidate support portals." }
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
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Stories of Progress, Trust, and Better Outcomes</span>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
            <Typewriter>
              Success Stories That Show What Better Hiring <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                and Better Opportunity Can Look Like.
              </span>
            </Typewriter>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
              NAYA Staffing’s Success Stories page is designed to highlight the real-world outcomes behind the platform experience. From hiring wins for employers to opportunity progress for candidates, this page shows how a stronger, more structured recruitment journey can create meaningful results in practice.
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
                href="/job-seekers/register-upload-resume" 
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 transition-all duration-300 backdrop-blur-xl btn-sheen"
              >
                Register &amp; Upload Resume
              </Link>
            </div>
            <div className="pt-10 border-t border-white/5 mt-10 max-w-xl mx-auto text-center animate-fade-in-up animate-delay-400">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 leading-loose">
                Built to turn the NAYA experience into stories people can understand, trust, and relate to.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-20">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold to-transparent"></div>
        </div>
      </section>

      {/* 2. WHY SUCCESS STORIES MATTER */}
      <section className="py-24 relative overflow-hidden bg-navy-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 lg:gap-12 xl:gap-20 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
                The Human Side
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                Why Success Stories <br className="hidden md:inline" />
                <span className="text-gold">Matter</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Not every visitor connects with proof in the same way. Some people trust short testimonials. Some want deeper case studies. Others respond best to stories that feel more human, more relatable, and easier to picture in real life.
              </p>
              <p>
                That is where Success Stories become valuable. They help translate the NAYA experience into something more emotionally understandable. Employers can see how hiring support may improve outcomes. Candidates can see how stronger visibility, better positioning, or a smarter process may create real momentum.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                Our database and platform-driven structure keeps Success Stories, Insights, and Case Studies separate to provide multiple levels of validation for our brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SUCCESS STORIES VS TESTIMONIALS VS CASE STUDIES */}
      <section className="py-24 relative overflow-hidden bg-navy border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 lg:gap-12 xl:gap-20 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
                Validation Levels
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                How This Page <br className="hidden md:inline" />
                <span className="text-gold">Is Different</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-8 text-xs text-slate-300 font-semibold leading-relaxed">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 btn-sheen">
                <span className="text-gold font-black uppercase tracking-widest block mb-2">Success Stories</span>
                <p>Story-led, human, readable, and outcome-focused. Best for emotional trust and relatability.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 btn-sheen">
                <span className="text-gold font-black uppercase tracking-widest block mb-2">Testimonials</span>
                <p>Short quotes and quicker proof. Best for fast social validation.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 btn-sheen">
                <span className="text-gold font-black uppercase tracking-widest block mb-2">Case Studies</span>
                <p>Structured, deeper, and more formal. Best for challenge–approach–outcome proof.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 btn-sheen">
                <span className="text-gold font-black uppercase tracking-widest block mb-2">Industry Reports</span>
                <p>Research-led and market-focused. Best for authority and workforce intelligence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RECOMMENDED STORY TYPES */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">
              What Kind of <span className="text-gold">Success Stories Belong Here</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              We separate stories by model and sector so visitors can browse relevant wins easily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-8">
            {storyTypes.map((type, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-[#0B132B]/50 border border-white/5 hover:border-gold/30 transition-all duration-500 flex flex-col h-full justify-between">
                <div className="space-y-4">
                  <div className="text-gold font-bold text-xs uppercase tracking-widest">Category 0{idx + 1}</div>
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

      {/* 5. FEATURED SUCCESS STORY SPOTLIGHT */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">
              Featured <span className="text-gold">Success Story</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
          </div>

          <div className="glass-panel p-10 md:p-20 rounded-[4rem] border-white/10 shadow-2xl relative bg-white/[0.01] btn-sheen">
            <div className="btn-rotating-border absolute top-6 right-6 inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 text-white hover:text-gold text-[10px] font-black uppercase tracking-widest rounded-full btn-auto-sheen border border-white/5">
              <Sparkles className="w-3.5 h-3.5 fill-current" /> Spotlight Win
            </div>
            
            <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="text-gold text-xs font-black uppercase tracking-widest">Executive Search Alignment</div>
                <h3 className="text-white font-black text-3xl md:text-5xl uppercase tracking-tighter leading-none">
                  A partnership that scaled a technical team: Furqan Ali’s executive alignment with a leading software enterprise
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed font-medium">
                  “At NAYA Staffing, our vision has always been clear - to simplify recruitment and empower both employers and candidates through genuine connections. In this engagement, we aligned directly with executive stakeholders to solve structural engineering bottlenecks and build out a dedicated Cloud operations division under a compressed timeline.”
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="btn-rotating-border w-10 h-1 bg-white/5 rounded-full btn-auto-sheen border border-white/5"></div>
                  <span className="text-white text-xs font-black uppercase tracking-widest">Furqan Ali, CEO of NAYA Staffing</span>
                </div>
              </div>
              <div className="lg:col-span-4 p-8 bg-white/5 border border-white/5 rounded-3xl text-center space-y-4 btn-sheen">
                <div className="text-gold text-5xl font-black">100%</div>
                <div className="text-white text-xs font-black uppercase tracking-widest">Roles Closed On Schedule</div>
                <div className="h-px bg-white/5 my-4"></div>
                <p className="text-slate-400 text-xs font-semibold">Sourced, assessed, and placed 8 technical leaders and operators in under 45 days.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. EMPLOYER SUCCESS STORIES SECTION */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">
              Employer <span className="text-gold">Wins</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              How employers achieved hiring goals and resolved bottlenecks with our support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8 items-stretch">
            {employerWins.map((win, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                
                <div className="space-y-6 relative z-10">
                  <div className="btn-rotating-border w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-gold btn-auto-sheen border border-white/5">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className="text-white font-black text-xl leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                    {win.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {win.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 relative z-10 flex items-center gap-3">
                  <div className="btn-rotating-border w-2 h-2 rounded-full bg-white/5 btn-auto-sheen border border-white/5"></div>
                  <span className="text-gold font-black text-xs uppercase tracking-widest">{win.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CANDIDATE SUCCESS STORIES SECTION */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">
              Candidate <span className="text-gold">Wins</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Real candidates who accelerated their careers and gained visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8 items-stretch">
            {candidateWins.map((win, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                
                <div className="space-y-6 relative z-10">
                  <div className="btn-rotating-border w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-gold btn-auto-sheen border border-white/5">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-white font-black text-xl leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                    {win.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {win.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 relative z-10 flex items-center gap-3">
                  <div className="btn-rotating-border w-2 h-2 rounded-full bg-white/5 btn-auto-sheen border border-white/5"></div>
                  <span className="text-gold font-black text-xs uppercase tracking-widest">{win.highlight}</span>
                </div>
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
                Want the Next Success <br /> <span className="text-gold">Story to Be Yours?</span>
              </h2>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed mt-4">
                Success stories should do more than show proof. They should make the next step feel possible. Whether you are hiring or exploring your next opportunity, NAYA Staffing should make progress feel more visible and more achievable.
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

      {/* 9. FAQ SECTION */}
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

      {/* 10. FINAL CTA SECTION */}
      <section className="py-32 relative overflow-hidden bg-navy-dark border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="btn-rotating-border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.03] blur-[200px] rounded-full btn-auto-sheen border border-white/5"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-panel p-12 md:p-24 rounded-[4rem] text-center border border-gold/20 shadow-2xl shadow-gold/10">
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              A Stronger Story Makes <br/>
              <span className="text-gold">The Platform Easier to Trust</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              A strong Success Stories page helps visitors see what progress can actually look like through NAYA Staffing. It makes the brand feel more human, more credible, and more worth engaging with.
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

      {/* 11. RELATED SERVICES / INTERNAL LINKS */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 xl:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.95]">
                Content <br/>
                &amp; Trust <span className="text-gold">Hub</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full btn-auto-sheen border border-white/5"></div>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                Browse our core brand resources, insights, case studies, and support links.
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
