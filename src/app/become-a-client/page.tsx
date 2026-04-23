'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ChevronRight, 
  Send, 
  Calendar, 
  ShieldCheck, 
  Users, 
  CheckCircle2,
  Clock,
  Globe,
  Award
} from 'lucide-react';
import TestimonialSlider from '@/components/TestimonialSlider';

const states = [
  "Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", 
  "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", 
  "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", 
  "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", 
  "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", 
  "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", 
  "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", 
  "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", 
  "U.S. Virgin Islands", "Vermont", "Virginia", "Washington", "West Virginia", 
  "Wisconsin", "Wyoming", "Armed Forces Americas"
];

const services = [
  "Recruitment Process Outsourcing",
  "Direct Hire",
  "Contract Hire",
  "Temporary Staffing",
  "Executive Search",
  "Volume Hiring"
];

const sectors = [
  { title: "Information Technology", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop", text: "Connecting top tech talent with companies driving digital transformation." },
  { title: "Healthcare", image: "https://images.unsplash.com/photo-1505751172157-c72ad59639d8?q=80&w=2070&auto=format&fit=crop", text: "Access to highly qualified medical talent for critical roles." },
  { title: "Industrial", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop", text: "Reliable talent for manufacturing, logistics, and skilled trades." },
  { title: "Hospitality", image: "https://images.unsplash.com/photo-1544124499-58912cbddaad?q=80&w=2070&auto=format&fit=crop", text: "Top-tier professionals for hotels, resorts, and event venues." },
  { title: "Professional Services", image: "https://images.unsplash.com/photo-1454165833767-027eeef1596e?q=80&w=2070&auto=format&fit=crop", text: "Management consulting roles built on expertise and precision." },
  { title: "Education", image: "https://images.unsplash.com/photo-1524178232363-1fb28f74b573?q=80&w=2070&auto=format&fit=crop", text: "Expertise in certifications and background checks for the education sector." },
  { title: "Insurance", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop", text: "Strategic teams for underwriters, agents, and claims adjusters." },
  { title: "Retail & E-Commerce", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop", text: "Solving the uphill battle of retail hiring with precision." },
  { title: "Construction", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop", text: "Building high-performing construction teams with strategic investment." },
  { title: "Marketing", image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2070&auto=format&fit=crop", text: "Finding marketers who truly understand your brand vision." },
  { title: "Sales", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2070&auto=format&fit=crop", text: "High-stakes recruitment for top-tier sales professionals." }
];

export default function BecomeAClientPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    state: '',
    referral: '',
    positions: '',
    service: '',
    request: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert("Thank you! Our team will contact you promptly.");
  };

  return (
    <main className="bg-[#040814] text-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-navy-dark">
        <div className="absolute inset-0 bg-linear-to-b from-navy-dark via-navy to-navy-dark opacity-80" />
        <div className="container mx-auto px-6 relative z-10 text-center animate-fade-in">
          <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-8 shadow-xl backdrop-blur-md">
            Employer Solutions
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
            Become A <br /><span className="text-gold">Client.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-12">
            Are you searching for just the right person to join your team? Get the process started today by filling out the form below.
          </p>
          <div className="h-1.5 w-40 bg-gold mx-auto rounded-full shadow-lg shadow-gold/20"></div>
        </div>
      </section>

      {/* 2. FORM SECTION */}
      <section className="py-24 relative overflow-hidden bg-linear-to-t from-navy-dark to-navy">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass-panel p-8 md:p-16 rounded-[48px] border-white/5 shadow-2xl relative">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-gold rounded-full flex items-center justify-center text-navy-dark shadow-2xl animate-bounce">
              <Send className="w-10 h-10" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 mt-4">
              <div className="grid md:grid-cols-2 gap-8">
                {/* First Name */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gold ml-2">First Name</label>
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                </div>
                {/* Last Name */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gold ml-2">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gold ml-2">Company Email</label>
                  <input 
                    type="email" 
                    placeholder="email@company.com" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gold ml-2">Phone</label>
                  <input 
                    type="tel" 
                    placeholder="+1 (555) 000-0000" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                {/* Hiring Company */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gold ml-2">Hiring Company</label>
                  <input 
                    type="text" 
                    placeholder="Your Organization" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
                {/* State */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gold ml-2">State</label>
                  <select 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white/50 focus:text-white focus:border-gold/50 focus:bg-white/10 outline-none transition-all appearance-none cursor-pointer"
                    value={formData.state}
                    onChange={(e) => setFormData({...formData, state: e.target.value})}
                  >
                    <option value="" className="bg-navy text-white">Select A State</option>
                    {states.map((st, i) => (
                      <option key={i} value={st} className="bg-navy text-white">{st}</option>
                    ))}
                  </select>
                </div>
                {/* Referral */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gold ml-2">How Did You Hear About Us?</label>
                  <input 
                    type="text" 
                    placeholder="Specify Reference" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all"
                    value={formData.referral}
                    onChange={(e) => setFormData({...formData, referral: e.target.value})}
                  />
                </div>
                {/* Choose Service */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gold ml-2">Choose Service</label>
                  <select 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white/50 focus:text-white focus:border-gold/50 focus:bg-white/10 outline-none transition-all appearance-none cursor-pointer"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="" className="bg-navy text-white">Select One</option>
                    {services.map((s, i) => (
                      <option key={i} value={s} className="bg-navy text-white">{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Positions */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gold ml-2">What Positions Do You Need Assistance Hiring?</label>
                <input 
                  type="text" 
                  placeholder="E.g. Fullstack Engineer, Project Manager..." 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all"
                  value={formData.positions}
                  onChange={(e) => setFormData({...formData, positions: e.target.value})}
                />
              </div>

              {/* Request */}
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gold ml-2">Your Question or Request</label>
                <textarea 
                  rows={4} 
                  placeholder="Type your question, request, or anything you'd like to know…" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all resize-none"
                  value={formData.request}
                  onChange={(e) => setFormData({...formData, request: e.target.value})}
                />
              </div>

              <div className="pt-4 flex flex-col items-center">
                <p className="text-xs text-white/40 mb-8 font-medium">Our team usually responds within 1–2 business days.</p>
                <button 
                  type="submit" 
                  className="group w-full md:w-auto px-20 py-8 bg-gold hover:bg-gold-hover text-navy-dark font-black rounded-[32px] transition-all flex items-center justify-center gap-4 shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-[0.3em] text-[10px]"
                >
                  Submit Form <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-500" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 3. OUR PROMISE SECTION */}
      <section className="py-32 bg-[#040814] relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 animate-fade-up">
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
                Our <span className="text-gold">Promise.</span>
              </h2>
              <div className="h-1.5 w-24 bg-gold rounded-full shadow-lg shadow-gold/20"></div>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                <p>
                  At BreezyRecruit, we are committed to delivering exceptional staffing solutions that drive your business forward. Our promise is to provide you with top-tier talent, tailored hiring strategies, and a seamless recruitment experience.
                </p>
                <p>
                  We prioritize quality, efficiency, and long-term success, ensuring that every candidate we place is the perfect fit for your organization. Trust us to bridge the gap between talent and opportunity with integrity and expertise.
                </p>
                <p className="text-white font-bold">
                  Let’s build your dream team—schedule a call today!
                </p>
              </div>
              <div className="pt-8">
                <a 
                  href="https://calendly.com/breezyrecuit/meeting" 
                  target="_blank"
                  className="group px-12 py-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold transition-all flex items-center gap-4 w-fit shadow-xl"
                >
                  <Calendar className="w-5 h-5 text-gold" />
                  Schedule a Meeting <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gold/5 rounded-[3rem] blur-2xl opacity-50" />
              <div className="relative glass-panel rounded-[3rem] border border-white/10 overflow-hidden group aspect-4/3">
                <img 
                  src="https://images.unsplash.com/photo-1573161158362-59727601270e?q=80&w=2069&auto=format&fit=crop" 
                  alt="Boardroom" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[2000ms] grayscale group-hover:grayscale-0" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy-dark via-transparent to-transparent opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS SLIDER */}
      <section className="py-24 bg-navy relative border-y border-white/5">
        <TestimonialSlider />
      </section>

      {/* 5. SECTORS CAROUSEL */}
      <section className="py-32 bg-navy-dark overflow-hidden">
        <div className="container mx-auto px-6 mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">Sectors We <span className="text-gold">Serve.</span></h2>
            <p className="text-gray-500 font-medium">Expertise Across Every Major Industry</p>
        </div>
        
        <div className="relative flex overflow-hidden">
          <style dangerouslySetInnerHTML={{ __html: `@keyframes marquee-sectors { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } .animate-marquee-sectors { display: flex; width: max-content; animation: marquee-sectors 80s linear infinite; } .animate-marquee-sectors:hover { animation-play-state: paused; }` }} />
          <div className="animate-marquee-sectors whitespace-nowrap gap-8 py-8 px-4">
            {[...sectors, ...sectors].map((sector, i) => (
              <div key={i} className="w-[400px] group relative bg-navy/50 rounded-[40px] border border-white/5 overflow-hidden transition-all duration-700 hover:border-gold/30 hover:-translate-y-2">
                <div className="h-64 overflow-hidden relative">
                   <img src={sector.image} alt={sector.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1500ms]" />
                   <div className="absolute inset-0 bg-linear-to-t from-navy to-transparent opacity-60" />
                </div>
                <div className="p-8 space-y-4">
                   <h4 className="text-2xl font-black text-white group-hover:text-gold transition-colors">{sector.title}</h4>
                   <p className="text-sm text-slate-400 font-medium leading-relaxed italic wrap break-words whitespace-normal">
                      {sector.text}
                   </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION - BOTTOM */}
      <section className="py-32 bg-navy relative border-t border-white/5">
         <div className="container mx-auto px-6 text-center space-y-12">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white">Ready to find <span className="text-gold">Greatness?</span></h2>
            <div className="flex justify-center">
               <Link 
                href="/contact-us" 
                className="group px-16 py-8 bg-gold hover:bg-gold-hover text-navy-dark font-black rounded-[32px] transition-all flex items-center gap-6 shadow-2xl uppercase tracking-[0.2em] text-xs"
              >
                Let's Talk Talent <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-500" />
              </Link>
            </div>
         </div>
      </section>
    </main>
  );
}
