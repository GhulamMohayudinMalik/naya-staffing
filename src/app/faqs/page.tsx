'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  HelpCircle, 
  MessageCircle, 
  Calendar,
  Search,
  Users,
  Briefcase,
  ShieldCheck
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

const generalFaqs = [
  {
    question: "How long does the hiring process typically take?",
    answer: "Timelines vary based on role complexity, but we focus on delivering quality candidates quickly—often within days to a few weeks."
  },
  {
    question: "What industries do you specialize in for staffing?",
    answer: "We provide staffing solutions across various industries, including IT, healthcare, finance, engineering, manufacturing, and more."
  },
  {
    question: "How does NAYA Staffing find the right candidates?",
    answer: "We use a combination of talent mapping, proactive recruitment, and a vast network to source, vet, and match top-tier professionals to your business needs."
  },
  {
    question: "What is Reverse Recruitment, and how does it benefit my company?",
    answer: "Reverse Recruitment means we actively seek top talent for your roles before they even apply, giving you access to passive candidates and reducing hiring time."
  }
];

const serviceFaqs = [
  {
    question: "What are the costs of your staffing services?",
    answer: "Pricing varies based on the role, industry, and hiring model. Contact us for a personalized quote and consultation."
  },
  {
    question: "How can I get started with your staffing services?",
    answer: "Simply schedule a call with us, and we’ll discuss your hiring needs and create a customized recruitment plan for you."
  },
  {
    question: "Do you offer temporary, contract, and permanent staffing?",
    answer: "Yes! We provide flexible staffing solutions, including temp, contract-to-hire, and full-time placements tailored to your needs."
  },
  {
    question: "What makes NAYA Staffing different from other agencies?",
    answer: "Our proactive approach, industry expertise, and commitment to finding the perfect cultural and skill fit set us apart."
  }
];

const directHireFaqs = [
  {
    question: "What is the typical fee structure when hiring directly?",
    answer: "The fees for contingent recruiting are based on a percentage of the candidate’s first-year annual salary. This percentage can vary depending on factors such as the industry and position complexity. Fees are incurred once a successful placement is made—you only pay for the service when the right candidate is hired."
  },
  {
    question: "What is the typical duration of the direct hire recruiting process?",
    answer: "Our goal for all positions is to produce a fully qualified candidate within a week once we have all requirements. Many positions take less time, but it varies based on urgency and talent availability."
  },
  {
    question: "Can NAYA Staffing help with executive-level direct placements?",
    answer: "Yes, our team is well-equipped for executive search. Our recruiters have experience sourcing and placing top-tier talent for senior leadership across various industries."
  },
  {
    question: "How do you maintain confidentiality during the direct hire recruiting process?",
    answer: "We take confidentiality seriously. We adhere to strict protocols to safeguard your company’s sensitive information and ensure the privacy of all communications."
  }
];

const contractToHireFaqs = [
  {
    question: "How does the transition from contract to a permanent role work?",
    answer: "Once the trial period is completed and the hiring manager decides to offer a full-time position, the employee transitions to your payroll and becomes a permanent member of your company."
  },
  {
    question: "Can I hire a contract-to-hire employee before the test period ends?",
    answer: "Yes, if a candidate exceeds expectations, you can extend a full-time offer before the end of the trial run. Converting early is often a great selling point for the position."
  },
  {
    question: "Do employees on contract receive benefits during the trial period?",
    answer: "During the trial, employees work for the staffing agency and may be eligible for agency benefits. After transitioning to your permanent staff, they become eligible for your organization's benefits."
  },
  {
    question: "What is the difference between contract-to-hire and direct placement?",
    answer: "Direct hire involves finding candidates for permanent roles from day one. Contract-to-hire recruits candidates temporarily with the possibility of full-time employment after a successful trial."
  }
];

export default function FAQPage() {
  return (
    <main className="bg-[#040814] text-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <VideoBackground 
          src="/videos/faqs.mp4" 
          overlayOpacity="bg-navy-dark/75"
        />
        <div className="container mx-auto px-6 relative z-10 text-center animate-fade-in">
          <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-8 shadow-xl backdrop-blur-md">
            Help Center
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-tight">
            FAQ’s.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
            Got Questions? We’ve Got Answers.
          </p>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-24 bg-navy-dark border-b border-white/5">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-8 animate-fade-up">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              You'll Find Answers <span className="text-gold">Here!</span>
            </h2>
            <div className="h-1.5 w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-slate-400 text-lg leading-relaxed font-semibold">
              At Breezyrecruit, we believe in transparency and making the hiring process seamless for our clients. Whether you’re curious about our services, pricing, or how we connect you with top talent, our FAQ section covers it all. 
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
               <Link href="/contact-us" className="px-10 py-5 bg-gold hover:bg-gold-hover text-navy-dark font-black rounded-full transition-all flex items-center gap-4 uppercase tracking-[0.2em] text-xs">
                  Contact Us <ArrowRight className="w-4 h-4" />
               </Link>
               <a href="https://calendly.com/breezyrecuit/meeting" className="px-10 py-5 border border-white/20 hover:bg-white/10 text-white font-black rounded-full transition-all flex items-center gap-4 uppercase tracking-[0.2em] text-xs">
                  Schedule Call <Calendar className="w-4 h-4" />
               </a>
            </div>
        </div>
      </section>

      {/* 3. FAQ CATEGORIES GRID */}
      <section className="py-32 bg-[#040814]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Category: General Inquiries */}
            <div className="space-y-12">
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gold/10 border border-gold/20 rounded-2xl flex items-center justify-center text-gold">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-black text-white italic tracking-tight">General Inquiries</h3>
               </div>
               <div className="space-y-4">
                  {generalFaqs.map((faq, i) => (
                    <FAQItem key={i} question={faq.question} answer={faq.answer} />
                  ))}
               </div>
            </div>

            {/* Category: Services & Setup */}
            <div className="space-y-12">
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gold/10 border border-gold/20 rounded-2xl flex items-center justify-center text-gold">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-black text-white italic tracking-tight">Services & Setup</h3>
               </div>
               <div className="space-y-4">
                  {serviceFaqs.map((faq, i) => (
                    <FAQItem key={i} question={faq.question} answer={faq.answer} />
                  ))}
               </div>
            </div>

            {/* Category: Direct Hire & Executive Search */}
            <div className="space-y-12">
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gold/10 border border-gold/20 rounded-2xl flex items-center justify-center text-gold">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-black text-white italic tracking-tight">Direct Hire & Executive Search</h3>
               </div>
               <div className="space-y-4">
                  {directHireFaqs.map((faq, i) => (
                    <FAQItem key={i} question={faq.question} answer={faq.answer} />
                  ))}
               </div>
            </div>

            {/* Category: Contract-to-Hire */}
            <div className="space-y-12">
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gold/10 border border-gold/20 rounded-2xl flex items-center justify-center text-gold">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-black text-white italic tracking-tight">Contract-to-Hire</h3>
               </div>
               <div className="space-y-4">
                  {contractToHireFaqs.map((faq, i) => (
                    <FAQItem key={i} question={faq.question} answer={faq.answer} />
                  ))}
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. BOTTOM ACTION STRIP */}
      <section className="py-24 bg-navy relative border-t border-white/5">
         <div className="container mx-auto px-6 text-center space-y-12">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">Still have <span className="text-gold">Questions?</span></h2>
            <p className="text-slate-400 font-semibold text-xl max-w-2xl mx-auto">
              Our experts are ready to guide you through every stage of the recruitment cycle.
            </p>
            <div className="flex justify-center">
               <Link 
                href="/contact-us" 
                className="group px-16 py-8 bg-gold hover:bg-gold-hover text-navy-dark font-black rounded-2xl transition-all flex items-center gap-6 shadow-2xl uppercase tracking-[0.2em] text-xs"
              >
                Let’s Talk Strategy <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-500" />
              </Link>
            </div>
         </div>
      </section>
    </main>
  );
}
