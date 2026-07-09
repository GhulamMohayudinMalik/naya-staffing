"use client";

import { Typewriter } from "@/components/Typewriter";
import React, { useState } from 'react';
import Link from 'next/link';
import api from '@/lib/api';
import { 
  LifeBuoy, 
  Send, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight,
  ChevronRight,
  HelpCircle,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

const supportFaqs = [
  {
    question: "What are your support desk hours?",
    answer: "Our general support desk is online Monday through Friday, 8:00 AM to 6:00 PM EST. Urgent client staffing support is monitored 24/7."
  },
  {
    question: "How can candidates update their submitted resumes?",
    answer: "Candidates can re-upload their resume directly via the Register page, or email our support desk at info@nayastaffing.com to request file updates."
  },
  {
    question: "What is the typical response time for client support tickets?",
    answer: "Our target response time for all standard support inquiries is 2 to 4 business hours. Contract and active RPO clients receive prioritized support lanes."
  },
  {
    question: "How do I report technical website issues?",
    answer: "Please complete the support contact form below or email us directly at info@nayastaffing.com with details of the issue you encountered."
  }
];

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'general',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        inquiry_type: 'support_ticket',
        name: formData.name,
        email: formData.email,
        message: `Topic: ${formData.topic}\n\n${formData.message}`
      };
      await api.post('/inquiries/', payload);
      alert("Support request received! A representative will connect with you shortly.");
      setFormData({ name: '', email: '', topic: 'general', message: '' });
    } catch (err) {
      console.error(err);
      alert('Failed to submit support request. Please try again.');
    }
  };

  return (
    <main className="bg-[#040814] text-white min-h-screen font-sans selection:bg-gold selection:text-navy-dark overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <VideoBackground 
          src="/videos/hero.mp4" 
          overlayOpacity="bg-navy-dark/80"
        />
        
        {/* Ambient Glows */}
        <div className="btn-rotating-border absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 blur-[120px] rounded-full animate-pulse transition-all duration-5000 btn-auto-sheen border border-white/5"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-navy-light/20 blur-[150px] rounded-full animate-float transition-all duration-7000"></div>

        <div className="container mx-auto px-6 relative z-10 text-center animate-fade-in">
          <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-8 shadow-xl backdrop-blur-md btn-auto-sheen border border-white/5">
            Help Desk
          </div>
          <h1 className="text-5xl md:text-6xl xl:text-8xl font-black tracking-tighter mb-6 leading-tight">
            <Typewriter>
              Support <span className="text-gold">Center.</span>
            </Typewriter>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
            How can we assist you today?
          </p>
        </div>
      </section>

      {/* 2. SUPPORT CONTENT SECTION */}
      <section className="py-24 relative overflow-hidden bg-navy-dark border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-stretch">
            
            {/* Left Column: Form Card */}
            <div className="glass-panel p-8 md:p-16 rounded-[48px] border-white/5 shadow-2xl relative order-2 lg:order-1 bg-white/[0.01]">
              <div className="space-y-4 mb-12">
                <h2 className="text-4xl font-black text-white tracking-tight">Open a Support <span className="text-gold">Ticket</span></h2>
                <p className="text-gray-400 font-medium leading-relaxed">
                  Complete the form below and our team will route your ticket to the correct department.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gold/60 ml-2">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all btn-sheen"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gold/60 ml-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="email@domain.com" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all btn-sheen"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gold/60 ml-2">Support Topic</label>
                  <select 
                    className="w-full bg-[#0a1125] border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-gold/50 focus:bg-white/10 outline-none transition-all btn-sheen"
                    value={formData.topic}
                    onChange={(e) => setFormData({...formData, topic: e.target.value})}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="employer">Employer / Billing Support</option>
                    <option value="candidate">Candidate / Resume Support</option>
                    <option value="technical">Technical Feedback</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gold/60 ml-2">Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Explain how we can help you..." 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all resize-none btn-sheen"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-rotating-border group w-full px-12 py-6 bg-white/5 hover:bg-white/10 text-white hover:text-gold font-black rounded-2xl transition-all flex items-center justify-center gap-4 shadow-xl uppercase tracking-widest text-xs btn-auto-sheen border border-white/5"
                >
                  Submit Ticket <Send className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>

            {/* Right Column: Contact Cards */}
            <div className="space-y-12 order-1 lg:order-2 flex flex-col justify-center">
              <div className="space-y-8 animate-fade-up">
                <h2 className="text-4xl md:text-5xl xl:text-7xl font-black text-white tracking-tighter leading-none">
                  Always Here <br />to <span className="text-gold">Help.</span>
                </h2>
                <p className="text-gray-400 text-xl leading-relaxed max-w-md font-light">
                  Find direct contact routes or check out FAQs for quick help.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 xl:gap-8">
                {/* Phone Card */}
                <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-gold/30 transition-all hover:bg-white/10 group btn-sheen">
                  <div className="btn-rotating-border w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform btn-auto-sheen border border-white/5">
                    <Phone className="w-8 h-8" />
                  </div>
                  <h4 className="text-gold font-black uppercase tracking-widest text-[10px] mb-2">Call Support</h4>
                  <p className="text-white text-lg font-bold">+1 (502) 556-7832</p>
                </div>

                {/* Mail Card */}
                <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-gold/30 transition-all hover:bg-white/10 group btn-sheen">
                  <div className="btn-rotating-border w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform btn-auto-sheen border border-white/5">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h4 className="text-gold font-black uppercase tracking-widest text-[10px] mb-2">Support Email</h4>
                  <p className="text-white text-lg font-bold">info@nayastaffing.com</p>
                </div>
              </div>

              {/* Status Badge */}
              <div className="btn-rotating-border flex items-center gap-4 p-4 bg-white/5 border border-gold/10 rounded-2xl w-fit btn-auto-sheen border border-white/5">
                <Clock className="text-gold w-5 h-5" />
                <span className="text-xs font-black uppercase tracking-widest text-gold">Live Support desk: Mon - Fri</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FAQ SECTION */}
      <section className="bg-navy py-32 overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="text-center mb-20 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-6 shadow-xl backdrop-blur-md btn-auto-sheen border border-white/5">
                Quick Answers
              </div>
              <h2 className="text-5xl font-black mb-6">Support <span className="text-gold text-shimmer">FAQ.</span></h2>
              <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
           </div>

           <div className="space-y-4">
             {supportFaqs.map((faq, i) => (
               <FAQItem key={i} question={faq.question} answer={faq.answer} />
             ))}
           </div>
        </div>
      </section>
    </main>
  );
}
