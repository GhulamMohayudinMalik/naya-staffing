"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  CheckCircle2, Target, Zap, Users,
  Clock, Rocket, ShieldCheck, Headset,
  Plus, Minus, ChevronRight, MessageSquare,
  BarChart3, ArrowRight, ExternalLink
} from "lucide-react";
import VideoBackground from "@/components/VideoBackground";
import TestimonialSlider from "@/components/TestimonialSlider";

import FAQItem from "@/components/FAQItem";

export default function ContractToHirePage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const industriesData = [
    { title: "Information Technology", desc: "We connect top tech talent with dynamic companies needing developers, engineers, analysts, and IT leaders to drive digital transformation.", img: "https://breezyrecruit.com/wp-content/uploads/2025/02/tech-talent.jpg" },
    { title: "Healthcare", desc: "Finding skilled healthcare professionals can be challenging, but with NAYA Staffing, you get access to a pool of highly qualified medical talent.", img: "https://breezyrecruit.com/wp-content/uploads/2024/10/Healthcare.jpg" },
    { title: "Industrial", desc: "We source reliable talent for manufacturing, logistics, and skilled trade roles to keep your industrial operations running smoothly and safely.", img: "https://breezyrecruit.com/wp-content/uploads/2025/05/1-1.jpg" },
    { title: "Hospitality", desc: "At NAYA Staffing, we specialize in connecting hotels, restaurants, resorts, and event venues with top-tier professionals.", img: "https://breezyrecruit.com/wp-content/uploads/2024/10/Senior-Living.jpg" },
    { title: "Professional Services", desc: "Finding the right talent for management consulting roles requires expertise, precision, and a deep understanding of the industry.", img: "https://breezyrecruit.com/wp-content/uploads/2025/02/Our-Proven-Process_20_11zon-1.png" },
    { title: "Education", desc: "The hiring process in education involves background checks, certifications, and making sure everything goes through the process correctly.", img: "https://breezyrecruit.com/wp-content/uploads/2025/05/1-2.jpg" },
    { title: "Insurance", desc: "Building a high-performing insurance team isn’t a gamble, it’s a strategic decision. Every role, from Underwriter to Agent.", img: "https://breezyrecruit.com/wp-content/uploads/2025/05/Education-Recruitment-Agency-in-Pakistan.png" },
    { title: "Reliable Retail", desc: "In the world of retail hiring, we encounter several hurdles that can make the process feel like a bit of an uphill battle.", img: "https://breezyrecruit.com/wp-content/uploads/2025/05/retail-candidate-working.webp" },
    { title: "Construction", desc: "Recruiting top construction talent isn’t a guessing game; it’s a strategic investment. Building a high-performing construction team.", img: "https://breezyrecruit.com/wp-content/uploads/2025/05/AdobeStock_290512663-1.jpg" },
    { title: "Marketing", desc: "In today’s competitive landscape, hiring a marketer is more than filling a seat; it’s about finding someone who understands your brand.", img: "https://breezyrecruit.com/wp-content/uploads/2025/05/employer-top-image.jpeg" },
    { title: "Sales", desc: "Recruiting top sales talent is a high-stakes, strategic endeavor that requires expertise and precision.", img: "https://breezyrecruit.com/wp-content/uploads/2025/05/retail-2-panorama-bae85f3812c2afd0c3fb40865d910c80-5e29b5b609e67.jpg" }
  ];

  const faqs = [
    {
      question: "How does the transition from contract to a permanent role work?",
      answer: "Once the period is completed and the hiring manager decides to offer a full-time position to the candidate, the employee will transition to the hiring organization’s payroll and become a permanent member of the company."
    },
    {
      question: "Can I hire a contract to hire employee before the test period ends?",
      answer: "Yes, suppose a candidate exceeds expectations and is an excellent fit for the organization. In that case, the hiring manager can extend a full-time offer before the end of the trial run. It’s a good idea to discuss the possibility of early conversion with your account manager upfront, as it can be a selling point for the position."
    },
    {
      question: "Do employees on contract receive benefits during the trial period?",
      answer: "Employees work for the staffing agency and may be eligible for the company’s benefits during this period. After transitioning to a permanent position, the employee would become eligible for the hiring organization’s benefits."
    },
    {
      question: "How long is the typical trial period for a contract-to-hire placement?",
      answer: "The time frame for contract-to-hire staffing can vary but generally range from three to six months. However, the exact duration can be customized depending on the organization’s specific needs and the nature of the role."
    },
    {
      question: "What is the difference between contract-to-hire and direct placement staffing?",
      answer: "Direct hire recruiting involves finding candidates for permanent positions right from the start. Contract-to-hire is used for recruiting candidates temporarily with the possibility of full-time employment after a successful trial period."
    }
  ];

  return (
    <div className="min-h-screen bg-navy-dark flex flex-col font-sans selection:bg-gold selection:text-navy-dark overflow-x-hidden">

      {/* 1. Hero Section */}
      <main className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <VideoBackground
            src="/videos/hero.mp4"
            overlayOpacity="bg-navy-dark/80"
          />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 blur-[120px] rounded-full animate-pulse transition-all duration-[5000ms]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-navy-light/20 blur-[150px] rounded-full animate-float transition-all duration-[7000ms]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-block px-6 py-2 bg-gold/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-4 shadow-2xl backdrop-blur-md">
              Hybrid Staffing
            </div>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.85] drop-shadow-2xl">
              Contract-to <br />
              <span className="text-gold text-shimmer">Hire.</span>
            </h1>
          </div>

          <p className="text-lg md:text-2xl font-semibold text-slate-400 tracking-tight max-w-4xl mx-auto animate-fade-up delay-200 italic leading-relaxed">
            "We do smart hiring that works for both sides — <span className="text-white">contract today, full-time tomorrow.</span>"
          </p>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-20">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold to-transparent rounded-full"></div>
        </div>
      </main>

      {/* 2. Intro Narrative */}
      <section className="bg-navy-dark py-24 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center md:text-left max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter">Contract-to-Hire <span className="text-gold">Staffing</span></h2>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Struggling to decide between a contractor and a full-time hire? Contract-to-hire lets you assess talent in action before making a lasting decision. This strategic approach blends the flexibility of temporary staffing with the long-term stability of permanent placement.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Definition Section */}
      <section className="bg-navy py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10 group">
              <div className="space-y-4">
                <h6 className="text-gold font-black uppercase tracking-[0.4em] text-xs">The Trial Run</h6>
                <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">What is <br /><span className="text-gold">Contract-to-Hire?</span></h2>
              </div>
              <div className="space-y-6 text-lg text-slate-400 font-semibold leading-relaxed">
                <p>Contract-to-hire is an approach that’s becoming increasingly popular. It blends the principles of temporary and permanent hiring. Job seekers may start as contract hires, facilitating businesses to evaluate their skill set, work approach, and organizational fit.</p>
                <div className="p-8 glass-panel rounded-[40px] border-white/10 bg-white/[0.02] border-l-gold border-l-4">
                  <p className="text-white">After this employee trial run, a transition to a permanent role can be initiated if all goes well. This strategic recruitment process reduces the uncertainties tied to direct long-term hires.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative glass-panel p-4 rounded-[64px] border-white/10 overflow-hidden group">
                <div className="rounded-[48px] overflow-hidden aspect-[4/5] relative">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076&auto=format&fit=crop" alt="Interview" className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-linear-to-t from-navy-dark/95 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Benefits Listing Section - Redesigned for High Impact */}
      <section className="py-32 bg-navy relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gold/5 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-navy-light/10 blur-[120px] rounded-full translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Sticky Header Column */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8 animate-fade-up">
              <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-2 shadow-xl backdrop-blur-md">
                Try Before You Buy
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                Benefits <br />of <span className="text-gold">Hybrid Hiring.</span>
              </h2>
              <div className="h-1.5 w-24 bg-gold rounded-full shadow-lg shadow-gold/20"></div>
              <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed border-l-2 border-white/10 pl-8 max-w-lg">
                Numerous advantages of contract-to-hire staffing can make it an attractive option for organizations seeking a strategic approach to hiring.
              </p>
            </div>

            {/* Scrollable Benefits Column */}
            <div className="lg:col-span-7 space-y-8">
              {[
                {
                  label: "Flexible Contract Lengths",
                  text: "Contract-to-hire staffing provides the adaptability an organization needs to navigate the ever-changing job market. With flexible contract lengths, you can tailor your staffing strategy to your specific objectives, whether you need a quick trial period or a longer-term evaluation.",
                  icon: Clock,
                  num: "01"
                },
                {
                  label: "Reduce Mis-hire Risks",
                  text: "This hiring model offers an opportunity to evaluate potential employees in real-world work environments before extending a permanent offer. This allows you and the hire to assess culture fit, significantly reducing the risk of a costly mis-hire.",
                  icon: ShieldCheck,
                  num: "02"
                },
                {
                  label: "Cost-Effective Onboarding",
                  text: "The contract period allows employers to save on the expenses associated with direct hires, such as immediate long-term salary commitments. It enables you to reduce costs related to training employees who may not be a long-term fit.",
                  icon: BarChart3,
                  num: "03"
                }
              ].map((benefit, i) => (
                <div key={i} className="group p-1 md:p-12 glass-panel rounded-[48px] border-white/5 hover:border-gold/30 hover:bg-white/4 transition-all duration-700 hover:shadow-2xl hover:shadow-gold/5 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden animate-fade-up">
                  {/* Number Badge */}
                  <div className="absolute top-8 right-12 text-[100px] font-black text-white/2 leading-none group-hover:text-gold/5 transition-colors select-none">{benefit.num}</div>

                  <div className="w-16 h-16 shrink-0 rounded-[24px] bg-gold/10 flex items-center justify-center border border-gold/20 group-hover:bg-gold group-hover:text-navy-dark transition-all duration-500 shadow-xl">
                    <benefit.icon className="w-8 h-8" />
                  </div>

                  <div className="space-y-4 relative z-10">
                    <h4 className="text-2xl md:text-3xl font-black text-white group-hover:text-gold transition-colors tracking-tight">
                      {benefit.label}
                    </h4>
                    <p className="text-slate-400 font-semibold leading-relaxed text-base group-hover:text-white/80 transition-colors">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Additional Considerations */}
      <section className="py-32 bg-navy border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-tight">Strategic <br /><span className="text-gold">Considerations</span></h2>
            <div className="h-1.5 w-40 bg-gold mx-auto rounded-full shadow-lg shadow-gold/20"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <div className="glass-panel p-10 md:p-16 rounded-[48px] border-white/5 group hover:border-gold/20 transition-all duration-700 text-center">
              <p className="text-xl md:text-2xl text-slate-400 font-semibold leading-relaxed group-hover:text-white transition-colors">
                We weigh the advantages of contract-to-hire staffing against other options. Direct placement is more suitable for long-term roles that require an immediate, full-time commitment. A strict contract staffing arrangement could be an effective solution for temporary workforce needs during peak business periods.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-10 glass-panel rounded-[40px] border-white/5">
                    <h3 className="text-2xl font-black text-white mb-6">Expert Partnership</h3>
                    <p className="text-slate-400 font-semibold leading-relaxed">Picking the right recruiting firm to operate on your behalf is vital. A quality recruiting partner will invest time to understand your unique business needs and culture.</p>
                </div>
                <div className="p-10 glass-panel rounded-[40px] border-white/5">
                    <h3 className="text-2xl font-black text-white mb-6">Informed Choices</h3>
                    <p className="text-slate-400 font-semibold leading-relaxed">By carefully considering alternatives and understanding your organization’s unique needs, you can make informed choices and select the best approach for your hiring goals.</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Advantages Section */}
      <section className="bg-navy-dark py-32 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-tight">Advantages of Working With <span className="text-gold text-shimmer">NAYA Staffing.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Our Team is Your Team", text: "We act as an extension of your internal hiring team. Our professionals work closely to ensure the perfect fit for your contract-to-hire positions.", icon: Users },
              { title: "Custom Recruiting", text: "We provide personalized recruiting solutions tailored to your organization’s evolving requirements and staffing strategies.", icon: Target },
              { title: "Faster Hiring", text: "Our streamlined process and extensive network enable us to source and deliver high-caliber candidates much faster than traditional timelines.", icon: Rocket },
              { title: "Higher Quality Talent", text: "We scour our massive internal database and external resources to find candidates who meet the specific requirements of each role.", icon: ShieldCheck }
            ].map((adv, i) => (
              <div key={i} className="glass-panel p-10 rounded-[48px] border-white/5 flex flex-col items-center text-center group hover:border-gold/30 hover:shadow-gold/10 transition-all duration-1000">
                <div className="w-20 h-20 rounded-[28px] bg-gold/5 flex items-center justify-center mb-10 text-gold group-hover:bg-gold group-hover:text-navy-dark transition-all shadow-xl shadow-gold/5 border border-gold/10">
                  <adv.icon className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-black text-white mb-6 tracking-tight group-hover:text-gold transition-colors">{adv.title}</h4>
                <p className="text-slate-400 text-sm font-bold leading-relaxed">{adv.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Industry Marquee */}
      <section className="bg-navy py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 mb-20 text-center">
          <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter leading-tight">Staffing <span className="text-gold text-shimmer">Excellence Areas.</span></h2>
        </div>
        <div className="marquee-container overflow-hidden pb-12">
          <style dangerouslySetInnerHTML={{ __html: `@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } .dark-marquee { display: flex; width: max-content; animation: marquee 80s linear infinite; } .dark-marquee:hover { animation-play-state: paused; }` }} />
          <div className="dark-marquee gap-8">
            {industriesData.concat(industriesData).map((industry, idx) => (
              <div key={idx} className="w-[450px] flex-shrink-0">
                <div className="glass-panel group h-[450px] rounded-[56px] overflow-hidden relative border border-white/5 transition-all duration-500 hover:border-gold/30">
                  <img src={industry.img} alt={industry.title} className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent"></div>
                  <div className="absolute inset-x-12 bottom-12 z-10">
                    <h4 className="text-3xl font-black text-white group-hover:text-gold transition-colors leading-[0.9] mb-6">{industry.title}</h4>
                    <p className="text-slate-400 text-sm font-bold leading-relaxed line-clamp-3 mb-8 group-hover:text-white transition-colors">
                      {industry.desc}
                    </p>
                    <Link href={`/industries/${industry.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.4em] text-gold/60 group-hover:text-gold transition-colors">Explore Careers <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Testimonials Slider */}
      <TestimonialSlider />

      {/* 8. FAQ Section */}
      <section className="bg-navy py-32 overflow-hidden border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 space-y-6 text-center">
            <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-2 shadow-xl backdrop-blur-md">
              Hybrid Staffing FAQ
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">Frequently <span className="text-shimmer">Asked Questions.</span></h2>
            <div className="h-2 w-24 bg-gold mx-auto rounded-full shadow-lg shadow-gold/20"></div>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. Contact CTA */}
      <section className="relative py-32 bg-navy-dark overflow-hidden group">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gold/[0.03] blur-[200px] rounded-full group-hover:bg-gold/[0.05] transition-all duration-1000"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-navy-light/10 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 relative z-10 text-center space-y-16">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-4 shadow-xl backdrop-blur-md">
              Let's Connect
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] group-hover:text-gold transition-colors duration-700">
              Get in <span className="opacity-50 italic">Touch.</span>
            </h2>
            <p className="text-slate-400 font-semibold text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
              We’re here to answer your questions! Fill out our form and a NAYA Staffing expert will reach out to discuss how we can assist in your hiring process.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link 
              href="/become-a-client" 
              className="group relative flex items-center gap-6 px-16 py-8 bg-gold text-navy-dark font-black rounded-[32px] hover:bg-gold-hover transition-all shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-[0.3em] text-[10px]"
            >
              Get In Touch
              <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-500" />
            </Link>
            
            <Link 
              href="/contact-us" 
              className="group flex items-center gap-4 px-12 py-8 bg-white/5 border border-white/10 text-white font-black rounded-[32px] hover:bg-white/10 transition-all uppercase tracking-[0.3em] text-[10px]"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
