"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  CheckCircle2, Target, Zap, Users,
  Clock, Rocket, ShieldCheck, Headset,
  Plus, Minus, ChevronRight, MessageSquare,
  BarChart3, ArrowRight, ExternalLink,
  ChevronLeft
} from "lucide-react";
import VideoBackground from "@/components/VideoBackground";
import TestimonialSlider from "@/components/TestimonialSlider";

import FAQItem from "@/components/FAQItem";

export default function DirectHirePage() {
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
    { title: "Retail & E-Commerce", desc: "In the world of retail hiring, we encounter several hurdles that can make the process feel like a bit of an uphill battle.", img: "https://breezyrecruit.com/wp-content/uploads/2025/05/retail-candidate-working.webp" },
    { title: "Construction", desc: "Recruiting top construction talent isn’t a guessing game; it’s a strategic investment. Building a high-performing construction team.", img: "https://breezyrecruit.com/wp-content/uploads/2025/05/AdobeStock_290512663-1.jpg" },
    { title: "Marketing", desc: "In today’s competitive landscape, hiring a marketer is more than filling a seat; it’s about finding someone who understands your brand.", img: "https://breezyrecruit.com/wp-content/uploads/2025/05/employer-top-image.jpeg" },
    { title: "Sales", desc: "Recruiting top sales talent is a high-stakes, strategic endeavor that requires expertise and precision.", img: "https://breezyrecruit.com/wp-content/uploads/2025/05/retail-2-panorama-bae85f3812c2afd0c3fb40865d910c80-5e29b5b609e67.jpg" }
  ];

  const faqs = [
    {
      question: "What is the typical fee structure when hiring directly?",
      answer: "The fees for contingent recruiting are based on a percentage of the candidate’s first-year annual salary. This percentage can vary depending on factors such as the industry, the position’s complexity, and the role’s level. Fees are incurred once a successful placement is made, and you only pay for the service when the right candidate has been hired for your organization. NAYA Staffing also offers flexible payment options to ensure your satisfaction with our services."
    },
    {
      question: "What is the typical duration of the direct hire recruiting process?",
      answer: "Once our team has gathered all the job requirements and fully understands the need, our goal for all positions is to produce a fully qualified candidate within a week. For many positions it will be less time, but the duration will vary based on role complexity, talent availability, and urgency."
    },
    {
      question: "Can NAYA Staffing help with executive-level direct placements?",
      answer: "Yes, our team at NAYA Staffing is well-equipped to handle executive search. Our recruiters have experience sourcing and placing top-tier talent for senior leadership and executive roles across various industries."
    },
    {
      question: "What kind of support can we expect during the direct placement process?",
      answer: "We handle every aspect of the process, from sourcing and screening candidates to coordinating interviews, negotiating offers, and assisting with onboarding if necessary. Our goal is to make the recruiting process as seamless and efficient as possible for your organization."
    },
    {
      question: "How do you maintain confidentiality during the direct hire recruiting process?",
      answer: "We take confidentiality seriously and are dedicated to safeguarding your company’s sensitive information throughout the recruiting process. We adhere to strict protocols to ensure the privacy and security of all data and communications."
    },
    {
      question: "Can NAYA Staffing handle multiple direct hire recruiting needs for our organization?",
      answer: "Absolutely! Our experienced team is equipped to manage multiple needs simultaneously. This allows you to consolidate your hiring efforts with a trusted partner and improve your hiring process, supporting your organization’s growth and ensuring you have the talent you need to succeed."
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
              Direct Placement
            </div>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.85] drop-shadow-2xl">
              Direct Hire <br />
              <span className="text-gold text-shimmer">Solutions.</span>
            </h1>
          </div>

          <p className="text-lg md:text-2xl font-semibold text-slate-400 tracking-tight max-w-4xl mx-auto animate-fade-up delay-200 italic leading-relaxed">
            "We take you direct to the right hire — <span className="text-white">with no delays and no detours.</span>"
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
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter">Direct Hire <span className="text-gold">Recruiting</span></h2>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Are you looking for that perfect fit – the employee who’s just right for the role and feels like they were meant to work on your team? Utilizing direct hire recruiting might be precisely what you need. Our direct placement services are designed to revolutionize your hiring process, making it easier than ever to find that perfect match.
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
                <h6 className="text-gold font-black uppercase tracking-[0.4em] text-xs">Core Concept</h6>
                <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">What is Direct <br /><span className="text-gold">Hire Recruiting?</span></h2>
              </div>
              <div className="space-y-6 text-lg text-slate-400 font-semibold leading-relaxed">
                <p>Direct hire recruiting is a hiring process where a professional recruitment firm sources, qualifies, and presents candidates for their client’s permanent job openings. The recruiting agency handles everything from initial interviews to checking references to salary negotiation.</p>
                <div className="p-8 glass-panel rounded-[40px] border-white/10 bg-white/[0.02] border-l-gold border-l-4">
                  <p className="text-white">Unlike temporary recruitment or contract hiring, direct placement is explicitly for long-term roles. Since these individuals will transition into permanent positions immediately, hiring managers can save significant time by ensuring candidates are highly committed.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative glass-panel p-4 rounded-[64px] border-white/10 overflow-hidden group">
                <div className="rounded-[48px] overflow-hidden aspect-[4/5] relative">
                  <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="Strategy Meeting" className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-linear-to-t from-navy-dark/95 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Speak to Someone (CTA Block) */}
      <section className="py-24 bg-navy border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-gold/5 opacity-30 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8 space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight">
                Speak to Someone to Discuss Your <span className="text-gold">Direct Hire Recruiting Needs</span>
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
                <p>When you run into a hiring challenge that requires expert assistance, our team will be ready. We’re so confident in our ability to find employees that you’ll love, that we’re willing to work on contingency for direct hire openings. Contact us for a discussion about your open positions so we can get started on finding your perfect match!</p>
                <p className="text-white/80">If you are thinking about partnering with a professional recruiting firm, we look forward to hearing from you to discover how our team can contribute to the success of your business!</p>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-6">
              <Link href="/job-openings" className="group flex items-center justify-between px-10 py-6 bg-white/5 border border-white/10 rounded-[32px] text-white font-black uppercase tracking-widest text-xs hover:bg-gold hover:text-navy-dark hover:border-gold transition-all duration-500 shadow-2xl">
                Search Jobs <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Link>
              <Link href="/become-a-client" className="group flex items-center justify-between px-10 py-6 bg-gold text-navy-dark rounded-[32px] font-black uppercase tracking-widest text-xs hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-2xl shadow-gold/20">
                Let's Connect <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
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
                Why Permanent Placement?
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                Benefits <br />of <span className="text-gold">Direct Hire.</span>
              </h2>
              <div className="h-1.5 w-24 bg-gold rounded-full shadow-lg shadow-gold/20"></div>
              <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed border-l-2 border-white/10 pl-8 max-w-lg">
                Permanent placement offers an array of benefits to enhance your hiring experience. This service streamlines the hiring process and accelerates the recruitment timeline.
              </p>
            </div>

            {/* Scrollable Benefits Column */}
            <div className="lg:col-span-7 space-y-8">
              {[
                {
                  label: "A Shortened Hiring Process",
                  text: "Thanks to our established networks and experience, our recruiters quickly identify and engage with candidates who meet the requirements of a role. This proactive approach allows hiring managers to fill vacant positions more quickly and minimizes the negative impact of prolonged vacancies on team productivity.",
                  icon: Clock,
                  num: "01"
                },
                {
                  label: "Access to a Vast Talent Pool",
                  text: "Access to an extensive talent network is one of the most considerable benefits when partnering with NAYA. Professional recruiters spend years cultivating in-depth relationships with candidates and maintaining databases of potential job seekers whose resumes aren’t accessible through traditional job boards.",
                  icon: Users,
                  num: "02"
                },
                {
                  label: "It’s Cost-Effective",
                  text: "Direct placement helps reduce the expenses associated with prolonged job vacancies and high employee turnover. Recruiters focus on long-term arrangements, translating to a more stable and committed workforce. Engaging with a reputable firm leads to a significant return on investment.",
                  icon: BarChart3,
                  num: "03"
                },
                {
                  label: "Higher Retention Rates",
                  text: "Recruitment agencies invest a lot of time and effort in communicating the skills required by a hiring team. When employees understand an organization’s values and culture, they are more likely to be engaged, motivated, and invested in its long-term success.",
                  icon: ShieldCheck,
                  num: "04"
                }
              ].map((benefit, i) => (
                <div key={i} className="group p-1 md:p-12 glass-panel rounded-[48px] border-white/5 hover:border-gold/30 hover:bg-white/[0.04] transition-all duration-700 hover:shadow-2xl hover:shadow-gold/5 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden animate-fade-up">
                  {/* Number Badge */}
                  <div className="absolute top-8 right-12 text-[100px] font-black text-white/[0.02] leading-none group-hover:text-gold/5 transition-colors select-none">{benefit.num}</div>

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
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-tight">Additional Recruiting <br /><span className="text-gold">Considerations</span></h2>
            <div className="h-1.5 w-40 bg-gold mx-auto rounded-full shadow-lg shadow-gold/20"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Budgetary Impact",
                text: "The initial cost of using a recruiting firm, often calculated as a percentage of the selected candidate’s first-year salary, might be challenging for organizations with tight budgets. However, the long-term advantages often outweigh these initial expenses."
              },
              {
                title: "Flexibility Range",
                text: "Direct hiring focuses primarily on permanent, full-time positions. For fluctuating workloads or specific project demands, alternative solutions such as contract staffing or temporary hiring might be more suitable to address immediate needs."
              },
              {
                title: "Strategic Partnership",
                text: "Success depends heavily on the chosen agency’s expertise and understanding of the organization’s unique requirements. Maintaining open communication with a reputable agency is necessary to ensure satisfactory placements."
              }
            ].map((con, i) => (
              <div key={i} className="relative p-10 glass-panel rounded-[48px] hover:border-gold/30 transition-all duration-700 bg-white/1">
                <div className="text-gold/20 font-black text-5xl absolute top-8 right-10">0{i + 1}</div>
                <h3 className="text-2xl font-black text-white mb-6 relative z-10">{con.title}</h3>
                <p className="text-slate-400 font-semibold leading-relaxed z-10 relative">{con.text}</p>
              </div>
            ))}
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
              { title: "Customized Needs Approach", text: "We pride ourselves on our ability to tailor our direct hire recruiting services to your company’s unique needs through personalized strategies.", icon: Target },
              { title: "Agile Recruiting Team", text: "Our team is prepared to adapt quickly to your company’s staffing shifts, reactions efficiently to maintain your competitive edge.", icon: Rocket },
              { title: "Industry Experience", text: "Boasting a wealth of experience across diverse industries including extensive IT, healthcare, and finance knowledge.", icon: ShieldCheck },
              { title: "Operating on Your Behalf", text: "We consider ourselves an extension of your team, managing the entire process from sourcing to negotiated offers in your best interest.", icon: Headset }
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

      {/* 11. Industry Marquee (Using exact text and images from user code) */}
      <section className="bg-navy py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 mb-20 text-center">
          <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter leading-tight">Direct Hire <span className="text-gold text-shimmer">Focus Areas.</span></h2>
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

      {/* 8. FAQ Section - Updated BG for consistency */}
      <section className="bg-navy py-32 overflow-hidden border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 space-y-6 text-center">
            <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-2 shadow-xl backdrop-blur-md">
              Knowledge Base
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


      {/* 9. Contact CTA - Redesigned for Consistency (No jarring yellow) */}
      <section className="relative py-32 bg-navy-dark overflow-hidden group">
        {/* Immersive background accents */}
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
