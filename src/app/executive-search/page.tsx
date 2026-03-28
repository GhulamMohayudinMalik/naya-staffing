'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Users, 
  Target, 
  Clock, 
  Gem, 
  BarChart3, 
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Lock,
  Globe,
  Award,
  Zap,
  TrendingUp
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import TestimonialSlider from '@/components/TestimonialSlider';
import FAQItem from '@/components/FAQItem';

const benefits = [
  {
    title: "Sourcing of Passive Candidates",
    description: "We excel at identifying and engaging top-tier professionals who aren't actively on the market but possess the leadership qualities your organization demands.",
    icon: <Users className="w-8 h-8 text-gold" />,
    stats: "Top 5% Talent"
  },
  {
    title: "Time and Resource Efficiency",
    description: "We handle the exhaustive tasks of candidate research, deep screening, and coordination, allowing your leadership to focus on strategic execution.",
    icon: <Clock className="w-8 h-8 text-gold" />,
    stats: "Accelerated Search"
  },
  {
    title: "Customized Recruitment Strategy",
    description: "Every organization is unique. We develop bespoke strategies that align with your company's culture, industry positioning, and desired candidate profile.",
    icon: <Target className="w-8 h-8 text-gold" />,
    stats: "Bespoke Approach"
  }
];

const considerations = [
  {
    title: "Retained Engagement",
    description: "This service involves a retained arrangement, reflecting the specialized and lengthy nature of the process. It's a strategic investment for critical roles.",
    icon: <Award className="w-6 h-6" />
  },
  {
    title: "Confidentiality Focus",
    description: "Ideal for sensitive leadership changes. We maintain the highest levels of discretion for both the organization and the potential candidate.",
    icon: <Lock className="w-6 h-6" />
  },
  {
    title: "Long-Term Value",
    description: "While the initial search is thorough, the long-term ROI of securing the right visionary leader far outweighs the initial investment.",
    icon: <TrendingUp className="w-6 h-6" />
  }
];

const advantages = [
  {
    title: "Targeted, Dedicated Approach",
    description: "Unlike general agencies, our specialized focus allows us to go beyond the surface and find leaders with the specific technical skills and cultural fit needed for long-term growth.",
    icon: <Target className="w-6 h-6" />
  },
  {
    title: "Our Network becomes Yours",
    description: "Gain access to our exclusive network of meticulously contacted and vetted candidates, built over nearly 20 years of recruitment excellence.",
    icon: <Globe className="w-6 h-6" />
  },
  {
    title: "Proven History of Success",
    description: "We have worked with top companies across diverse sectors, delivering leadership solutions that have transformed organizations.",
    icon: <Award className="w-6 h-6" />
  },
  {
    title: "Absolute Confidentiality",
    description: "We operate with the utmost discretion, ensuring your search remains hidden from competitors and stakeholders until you are ready.",
    icon: <Lock className="w-6 h-6" />
  }
];

const faqs = [
  {
    question: "How is executive search different from other recruiting strategies?",
    answer: "Our executive search service operates on retainer and is a specialized strategy for high-level leadership. This involves a heavier reliance on passive candidate networking, extreme discretion, and a more thorough assessment process."
  },
  {
    question: "Can recruiters handle the process confidentially and discreetly?",
    answer: "Absolutely. Our expert team is trained to uphold the highest levels of professionalism. We ensure sensitive information stays secure and tailor communication to your specific requirements."
  },
  {
    question: "What is the typical timeframe for this kind of search engagement?",
    answer: "The timeframe varies based on complexity, but on average, our search process takes between 4 to 8 weeks from initial strategy to final candidate selection."
  },
  {
    question: "How does NAYA ensure a successful cultural fit?",
    answer: "We invest significant time in understanding your business ethos. By conducting deep behavioral interviews and assessment tools, we identify leaders who aren't just skilled, but truly align with your goals."
  },
  {
    question: "What ongoing support is provided after successful placement?",
    answer: "After a successful hire, we provide regular follow-ups with both the candidate and the organization to ensure a smooth transition and long-term success."
  }
];

const industries = [
  "Information Technology", "Healthcare", "Industrial", "Hospitality", 
  "Professional Services", "Education", "Insurance", "Retail", 
  "Construction", "Marketing", "Sales"
];

export default function ExecutiveSearchPage() {
  return (
    <main className="bg-[#040814] text-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-[20s] scale-110 group-hover:scale-100 grayscale hover:grayscale-0 transition-all"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-linear-to-b from-[#040814]/80 via-transparent to-[#040814]" />
        <div className="absolute inset-0 bg-linear-to-r from-[#040814] via-transparent to-transparent opacity-60" />

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-4xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6 backdrop-blur-md">
              <Gem className="w-4 h-4 text-gold" />
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Retained Leadership Search</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
              Executive <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Search
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl font-light leading-relaxed mb-10 italic">
              "Finding the right leadership is crucial for driving your organization’s success."
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/become-a-client" 
                className="group relative px-8 py-4 bg-gold hover:bg-gold-hover text-navy-dark font-bold rounded-full transition-all duration-300 overflow-hidden shadow-2xl shadow-gold/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Partner With Us <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                href="/contact-us" 
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 transition-all duration-300 backdrop-blur-xl"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-20">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold to-transparent"></div>
        </div>
      </section>

      {/* 2. INTRO NARRATIVE */}
      <section className="py-24 relative overflow-hidden bg-navy-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-up">
              <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-2 shadow-xl backdrop-blur-md">
                Premier Leadership
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter">
                Secure the <br/>
                <span className="text-gold">Leadership</span> You Deserve.
              </h2>
              <div className="h-1.5 w-24 bg-gold rounded-full shadow-lg shadow-gold/20"></div>
              <div className="space-y-6 text-gray-300 leading-relaxed text-lg font-light">
                <p>
                  Executive search is a retained recruitment service designed to identify, attract, and secure exceptional talent for high-level leadership positions. 
                </p>
                <p>
                  It’s a deep recruiting process, concentrated on engaging only the most desirable candidates with unique skills. These individuals usually are not actively on the job market, but their expertise and experience make them invaluable assets to any organization.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gold/5 rounded-[3rem] blur-2xl opacity-50" />
              <div className="relative glass-panel rounded-[3rem] border border-white/10 overflow-hidden group">
                   <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076&auto=format&fit=crop" 
                    alt="Executive Meeting" 
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[2000ms] grayscale group-hover:grayscale-0" 
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy-dark via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-8 left-8 p-6 glass-panel border-white/10 rounded-2xl max-w-xs animate-float">
                    <p className="text-gold font-black text-2xl mb-1 italic">"Meticulous & Confidential"</p>
                    <p className="text-white/60 text-xs uppercase tracking-widest font-bold">Our Search Philosophy</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BENEFITS OF EXECUTIVE SEARCH */}
      <section className="py-32 bg-navy relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gold/5 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-navy-light/10 blur-[120px] rounded-full translate-x-1/2"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Sticky Header Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8 animate-fade-up">
              <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-2 shadow-xl backdrop-blur-md">
                Strategic Advantages
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                Benefits <br />of <span className="text-gold">Executive Search.</span>
              </h2>
              <div className="h-1.5 w-24 bg-gold rounded-full shadow-lg shadow-gold/20"></div>
              <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed border-l-2 border-white/10 pl-8 max-w-lg">
                Utilizing a premier search firm to fill your executive roles has many benefits, from access to hard-to-find candidates to customized leadership strategies.
              </p>
            </div>

            {/* Scrollable Benefits Column */}
            <div className="lg:col-span-7 space-y-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="group p-10 glass-panel rounded-[48px] border-white/5 hover:border-gold/30 hover:bg-white/4 transition-all duration-700 hover:shadow-2xl hover:shadow-gold/5 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden animate-fade-up">
                  <div className="shrink-0 w-16 h-16 rounded-[24px] bg-gold/10 flex items-center justify-center border border-gold/20 group-hover:bg-gold group-hover:text-navy-dark transition-all duration-500 shadow-xl">
                    {benefit.icon}
                  </div>
                  <div className="space-y-4 relative z-10">
                    <div className="text-gold font-black text-xs uppercase tracking-[0.3em] opacity-60">{benefit.stats}</div>
                    <h4 className="text-2xl md:text-3xl font-black text-white group-hover:text-gold transition-colors tracking-tight">
                      {benefit.title}
                    </h4>
                    <p className="text-slate-400 font-semibold leading-relaxed text-base group-hover:text-white/80 transition-colors">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. ADDITIONAL CONSIDERATIONS */}
      <section className="py-32 bg-navy-dark border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">Strategic <br /><span className="text-gold text-shimmer">Considerations.</span></h2>
            <div className="h-1.5 w-40 bg-gold mx-auto rounded-full shadow-lg shadow-gold/20"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {considerations.map((con, i) => (
              <div key={i} className="relative p-12 glass-panel rounded-[48px] hover:border-gold/30 transition-all duration-700 bg-white/1 group">
                <div className="text-gold/10 font-black text-5xl absolute top-8 right-10 group-hover:text-gold/20 transition-colors">0{i + 1}</div>
                <div className="w-12 h-12 rounded-xl bg-gold/5 flex items-center justify-center text-gold mb-8 group-hover:bg-gold group-hover:text-navy-dark transition-all">
                  {con.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-6 relative z-10">{con.title}</h3>
                <p className="text-slate-400 font-semibold leading-relaxed z-10 relative group-hover:text-white transition-colors">{con.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 p-12 glass-panel rounded-[56px] border-white/10 text-center max-w-4xl mx-auto">
             <p className="text-xl md:text-2xl text-slate-400 font-semibold italic leading-relaxed">
              "When the role does not require a lengthy search process or is a more common skill set, direct hire might provide some flexibility and cost-effectiveness."
             </p>
             <Link href="/direct-hire" className="mt-8 inline-flex items-center gap-3 text-gold font-black uppercase tracking-widest text-xs hover:gap-5 transition-all">
               Explore Direct Hire <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        </div>
      </section>

      {/* 5. NAYA ADVANTAGES GRID */}
      <section className="py-32 bg-navy overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">Advantages of <span className="text-gold text-shimmer">NAYA Search.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((adv, i) => (
              <div key={i} className="glass-panel p-10 rounded-[48px] border-white/5 flex flex-col items-center text-center group hover:border-gold/30 hover:shadow-gold/10 transition-all duration-1000">
                <div className="w-20 h-20 rounded-[28px] bg-gold/5 flex items-center justify-center mb-10 text-gold group-hover:bg-gold group-hover:text-navy-dark transition-all shadow-xl shadow-gold/5 border border-gold/10">
                  {adv.icon}
                </div>
                <h4 className="text-xl font-black text-white mb-6 tracking-tight group-hover:text-gold transition-colors">{adv.title}</h4>
                <p className="text-slate-400 text-sm font-bold leading-relaxed">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INDUSTRY MARQUEE */}
      <section className="bg-navy-dark py-24 border-y border-white/5">
        <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
          <h3 className="text-3xl font-black text-white tracking-tighter">Search <span className="text-gold">Expertise Areas.</span></h3>
          <p className="text-gray-500 font-medium">Leaders Across Every Sector</p>
        </div>
        
        <div className="relative flex overflow-hidden">
          <style dangerouslySetInnerHTML={{ __html: `@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } .animate-marquee { display: flex; width: max-content; animation: marquee 60s linear infinite; }` }} />
          <div className="animate-marquee whitespace-nowrap gap-12 py-4">
            {[...industries, ...industries].map((ind, i) => (
              <span key={i} className="text-4xl md:text-6xl font-black text-white/5 hover:text-gold/20 transition-colors cursor-default uppercase tracking-tighter">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS SLIDER */}
      <section className="py-24 bg-[#040814]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                What People Say <br/>
                <span className="text-gold">About Executive Success</span>
              </h2>
              <div className="w-24 h-1.5 bg-gold rounded-full" />
            </div>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="bg-navy py-32 overflow-hidden border-y border-white/5">
        <div className="container mx-auto px-6 border-white/5">
           <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:sticky lg:top-32 h-fit">
               <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-6 shadow-xl backdrop-blur-md">
                Executive FAQ
              </div>
              <h2 className="text-5xl font-black mb-6">Frequently <br/><span className="text-gold text-shimmer">Asked.</span></h2>
              <div className="h-1 w-20 bg-gold mb-6"></div>
              <p className="text-gray-400 font-light text-lg mb-8 leading-relaxed">
                Navigating the complexities of executive recruitment requires clarity. Here are the answers to your most pressing questions.
              </p>
              <div className="p-8 rounded-3xl bg-gold/5 border border-gold/20 group">
                  <h4 className="text-xl font-bold mb-4 text-white">Need a Confidential Brief?</h4>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">Our specialists are available for confidential discussions regarding your leadership needs.</p>
                  <Link href="/contact-us" className="text-gold font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                    Initiate Search <ArrowRight className="w-4 h-4" />
                  </Link>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. CONTACT CTA */}
      <section className="py-32 relative overflow-hidden bg-navy-dark">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gold/[0.03] blur-[200px] rounded-full group-hover:bg-gold/[0.05] transition-all duration-1000"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-navy-light/10 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-panel p-12 md:p-24 rounded-[4rem] text-center border border-gold/20 shadow-2xl shadow-gold/10">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gold text-navy-dark mb-10 shadow-2xl shadow-gold/30">
              <Target className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85]">
              Find Your <br/>
              <span className="text-gold">Executive Dream Team.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              We connect you with visionary executives who align with your company’s vision, culture, and long-term goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link 
                href="/become-a-client" 
                className="group w-full sm:w-auto px-16 py-8 bg-gold hover:bg-gold-hover text-navy-dark font-black rounded-[32px] transition-all flex items-center justify-center gap-4 shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-[0.3em] text-[10px]"
              >
                Let's Connect <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-500" />
              </Link>
              <Link 
                href="/contact-us" 
                className="w-full sm:w-auto px-16 py-8 bg-white/5 hover:bg-white/10 text-white font-black rounded-[32px] border border-white/10 transition-all backdrop-blur-xl uppercase tracking-[0.3em] text-[10px]"
              >
                Schedule Briefing
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
