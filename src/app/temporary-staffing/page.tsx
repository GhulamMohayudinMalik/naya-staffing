'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Clock, 
  Users, 
  Zap, 
  Target, 
  ShieldCheck, 
  TrendingUp, 
  Briefcase, 
  ArrowRight,
  ChevronRight,
  Star,
  CheckCircle2,
  Users2,
  Building2,
  Gem
} from 'lucide-react';
import FAQItem from '@/components/FAQItem';
import TestimonialSlider from '@/components/TestimonialSlider';

const benefits = [
  {
    title: "Quickly hire the staff you need",
    description: "Our extensive network of pre-screened candidates ensures a swift and efficient recruiting process, perfect for urgent workload spikes or staff absences.",
    icon: <Zap className="w-8 h-8 text-gold" />,
    stats: "24-48h Placement"
  },
  {
    title: "Cost-effective solution",
    description: "Avoid long-term overhead costs associated with permanent hires. Managed payroll and reduced benefit liabilities significantly lower your operational expenses.",
    icon: <TrendingUp className="w-8 h-8 text-gold" />,
    stats: "30% Cost Saving"
  },
  {
    title: "Efficiently solve workforce challenges",
    description: "A flexible solution that enables you to scale your team up or down based on seasonal changes, project demands, or unexpected staff vacancies.",
    icon: <Users className="w-8 h-8 text-gold" />,
    stats: "On-Demand Scaling"
  },
  {
    title: "Save time for your HR team",
    description: "We handle time-consuming tasks like sourcing, screening, and interviewing, allowing your HR team to focus on core strategic responsibilities.",
    icon: <Clock className="w-8 h-8 text-gold" />,
    stats: "80% Time Saving"
  }
];

const advantages = [
  {
    title: "Years of Staffing Experience",
    description: "With nearly two decades of experience, our seasoned recruiters stay ahead of industry trends to deliver top-notch talent.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: "Custom Solutions & Nimble Approach",
    description: "We offer tailored staffing solutions without the constraints of red tape, allowing us to be agile and responsive.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Wide Array of Industry Experts",
    description: "From IT and Healthcare to Engineering, we understand the specific skills required for success across sectors.",
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    title: "Seamless Hiring Experience",
    description: "We act as an extension of your team, providing ongoing support throughout the transition from candidate to employee.",
    icon: <CheckCircle2 className="w-6 h-6" />
  }
];

const faqs = [
  {
    question: "How long do temporary assignments typically last?",
    answer: "Assignments vary greatly based on your needs, ranging from a few days for specific projects to several months for seasonal coverage or extended staff absences."
  },
  {
    question: "Do temporary employees receive benefits?",
    answer: "Benefits vary by assignment. While NAYA handles standard compliance and taxes, specific benefits like 401K or PTO are managed according to the contract structure agreed upon."
  },
  {
    question: "Can temporary positions lead to permanent employment?",
    answer: "Yes! Many of our temporary placements evolve into permanent roles based on performance and evolving business needs, often transitioning through a contract-to-hire model."
  },
  {
    question: "How does the hiring process work?",
    answer: "We handle the entire lifecycle: sourcing, deep screening, and interviewing. You review a curated shortlist and make the final selection, while we manage the onboarding logistics."
  },
  {
    question: "What are the costs associated with temporary staffing?",
    answer: "Costs include the employee's hourly wage and a service markup covering payroll taxes, insurance, and recruitment. Pricing varies by role complexity and duration."
  },
  {
    question: "How can I ensure quick onboarding?",
    answer: "We facilitate a seamless transition with a dedicated rep who guides the onboarding process, ensuring temporary staff are integrated and productive from day one."
  }
];

const industries = [
  "Information Technology", "Healthcare", "Industrial", "Hospitality", 
  "Professional Services", "Education", "Insurance", "Retail", 
  "Construction", "Marketing", "Sales"
];

export default function TemporaryStaffingPage() {
  return (
    <main className="bg-[#040814] text-white min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-[20s] scale-110 group-hover:scale-100"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-linear-to-b from-[#040814]/80 via-transparent to-[#040814]" />
        <div className="absolute inset-0 bg-linear-to-r from-[#040814] via-transparent to-transparent opacity-60" />

        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-4xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6 backdrop-blur-md">
              <Clock className="w-4 h-4 text-gold" />
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Agile Workforce Solutions</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
              Temporary <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-gold-dark to-gold animate-gradient">
                Staffing
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl font-light leading-relaxed mb-10">
              On-demand staffing for short-term needs—fast, flexible, and consistently reliable. We keep your business moving when demand peaks.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/become-a-client" 
                className="group relative px-8 py-4 bg-gold hover:bg-gold-hover text-navy-dark font-bold rounded-full transition-all duration-300 overflow-hidden shadow-2xl shadow-gold/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Request Staffing Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                href="/job-openings" 
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 transition-all duration-300 backdrop-blur-xl"
              >
                Search Temporary Roles
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Accent */}
        <div className="absolute bottom-0 right-0 p-10 hidden lg:block animate-pulse">
          <div className="w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* --- INTRO SECTION --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gold/5 rounded-3xl blur-2xl group-hover:bg-gold/10 transition-all duration-500" />
              <div className="relative glass-panel rounded-3xl p-8 border border-white/10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gold/20 flex items-center justify-center">
                    <Briefcase className="w-8 h-8 text-gold" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">What is Temporary Staffing?</h2>
                    <div className="w-20 h-1 bg-gold mt-2 rounded-full" />
                  </div>
                </div>
                <div className="space-y-6 text-gray-300 leading-relaxed text-lg font-light">
                  <p>
                    Temporary staffing is a dynamic version of contract staffing designed for businesses needing <span className="text-gold font-semibold italic">immediate, short-term coverage</span>. 
                  </p>
                  <p>
                    It is the ideal solution for organizations experiencing unpredictable fluctuations in workload, requiring additional support for time-sensitive projects, or needing to cover vacancies during vacations or extended staff leaves.
                  </p>
                  <div className="pt-4 flex items-center gap-4 border-t border-white/5">
                    <div className="flex -space-x-4">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-navy bg-navy-light flex items-center justify-center overflow-hidden">
                          <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Expert" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                    <p className="text-sm font-semibold text-gold tracking-wider">Join 500+ Top Clients</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Lifting the <span className="text-gold">Staffing Burden</span> Off Your Shoulders
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
                <p>
                  We secure elite temporary talent for companies across the United States for a limitless variety of short-term requirements. 
                </p>
                <p>
                  Whether you’re seeking a single specialized professional or a large-scale temporary team, our recruiters are built to move fast without compromising on quality.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30 transition-colors">
                  <h3 className="text-3xl font-black text-gold mb-1">98%</h3>
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Placement Rate</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30 transition-colors">
                  <h3 className="text-3xl font-black text-gold mb-1">20yr+</h3>
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Industry Expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BENEFITS (Sticky Scroll Concept) --- */}
      <section className="py-24 bg-navy-dark/50 relative">
        <div className="container mx-auto px-6 text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-4">
            <TrendingUp className="w-4 h-4 text-gold" />
            <span className="text-gold text-xs font-black uppercase tracking-widest">Value Driven</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">Benefits of <span className="text-gold">Temporary Staffing</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl font-light">
            Optimize your workforce and streamline hiring through a partnership that prioritizes speed, cost, and efficiency.
          </p>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className="group relative p-8 rounded-3xl bg-navy border border-white/5 hover:border-gold/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/20 transition-all" />
                <div className="mb-6 p-4 bg-gold/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500">
                  {benefit.icon}
                </div>
                <div className="text-gold font-black text-sm uppercase tracking-widest mb-2 opacity-60">
                   {benefit.stats}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-gold transition-colors">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ADVANTAGES GRID --- */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="glass-panel rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 blur-[120px] -mr-48 -mt-48" />
            
            <div className="text-center mb-16 relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-4">The <span className="text-gold">NAYA Staffing</span> Advantage</h2>
              <p className="text-gray-400 font-light text-lg">Why industry leaders trust us with their critical short-term needs.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              {advantages.map((adv, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-gold flex items-center justify-center text-navy-dark group-hover:rotate-12 transition-transform duration-300 shadow-xl shadow-gold/20">
                    {adv.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-white group-hover:text-gold transition-colors">{adv.title}</h4>
                    <p className="text-gray-400 font-light leading-relaxed">{adv.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 p-8 rounded-3xl bg-white/5 border border-white/10 text-center relative z-10">
              <h4 className="text-2xl font-bold mb-4">Looking for a long-term commitment?</h4>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto font-light">
                Certain roles require specialized skills better suited for our direct hire services. We can help you evaluate which strategy fits your stability goals.
              </p>
              <Link href="/direct-hire" className="inline-flex items-center gap-2 text-gold font-bold hover:underline">
                Explore Direct Hire Solutions <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- INDUSTRIES MARQUEE --- */}
      <section className="py-20 bg-navy-dark overflow-hidden border-y border-white/5">
        <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
          <div>
            <h3 className="text-2xl font-black uppercase tracking-tighter text-gold">Industries We Serve</h3>
            <div className="w-12 h-1 bg-gold mt-2"></div>
          </div>
          <p className="text-gray-500 font-medium">Expertise across the board</p>
        </div>
        
        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-12 py-4">
            {[...industries, ...industries].map((ind, i) => (
              <span key={i} className="text-4xl md:text-6xl font-black text-white/10 hover:text-gold/30 transition-colors cursor-default uppercase tracking-tighter">
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="py-24 bg-[#040814]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                What People Say <br/>
                <span className="text-gold">About NAYA Staffing</span>
              </h2>
              <div className="w-24 h-1.5 bg-gold rounded-full" />
            </div>
            <Link href="/testimonials" className="group flex items-center gap-3 text-gold font-bold uppercase tracking-widest text-sm">
              View All Success Stories <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* --- FAQs --- */}
      <section className="py-24 bg-navy relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:sticky lg:top-32 h-fit">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span className="text-gold text-xs font-bold uppercase tracking-widest">Expert Insights</span>
              </div>
              <h2 className="text-5xl font-black mb-6">Frequently <br/><span className="text-gold">Asked Questions</span></h2>
              <p className="text-gray-400 font-light text-lg mb-8 leading-relaxed">
                Everything you need to know about our temporary staffing process and how we ensure quality for your team.
              </p>
              <div className="p-8 rounded-3xl bg-gold/5 border border-gold/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Briefcase className="w-24 h-24 text-gold" />
                </div>
                <h4 className="text-xl font-bold mb-2">Need a Custom Plan?</h4>
                <p className="text-gray-400 text-sm mb-6 font-light">Our team can design a bespoke volume hiring or temporary strategy for your specific project.</p>
                <Link href="/contact-us" className="text-gold font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Talk to a Specialist <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              {faqs.map((faq, idx) => (
                <FAQItem key={idx} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gold/5 animate-pulse" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-panel p-12 md:p-20 rounded-[3rem] text-center border border-gold/20 shadow-2xl shadow-gold/10">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold text-navy-dark mb-8 shadow-xl shadow-gold/30">
              <Users2 className="w-10 h-10" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
              Ready to <span className="text-gold">Scale Your Team?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              We’re here to answer your questions! Fill out the form or schedule a call, and a NAYA Staffing expert will reach out to discuss how we can assist in your hiring process.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="/become-a-client" 
                className="group w-full sm:w-auto px-10 py-5 bg-gold hover:bg-gold-hover text-navy-dark font-black rounded-full transition-all flex items-center justify-center gap-3 shadow-2xl"
              >
                Get in Touch <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/contact-us" 
                className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 transition-all backdrop-blur-xl"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
