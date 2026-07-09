"use client";

import { Typewriter } from "@/components/Typewriter";
import React, { useState } from 'react';
import { Send, Phone, Mail, Clock } from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import api from '@/lib/api';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        inquiry_type: 'client_inquiry',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message
      };
      await api.post('/inquiries/', payload);
      alert("Consultation request received! Our team will contact you shortly.");
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    } catch (err) {
      console.error(err);
      alert('Failed to submit request. Please try again.');
    }
  };

  return (
    <main className="bg-[#040814] text-white min-h-screen font-sans selection:bg-gold selection:text-navy-dark overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <VideoBackground src="/videos/hero.mp4" overlayOpacity="bg-navy-dark/80" />
        <div className="absolute inset-0 z-0">
          <div className="btn-rotating-border absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 blur-[120px] rounded-full animate-pulse transition-all duration-5000 btn-auto-sheen border border-white/5"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center animate-fade-in">
          <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-8 shadow-xl backdrop-blur-md btn-auto-sheen border border-white/5">
            Let's Talk
          </div>
          <h1 className="text-5xl md:text-6xl xl:text-8xl font-black tracking-tighter mb-6 leading-tight">
            <Typewriter>
              Contact <span className="text-gold">Us.</span>
            </Typewriter>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
            Schedule a strategic consultation or reach out with general inquiries.
          </p>
        </div>
      </section>

      {/* 2. CONTACT CONTENT SECTION */}
      <section className="py-24 relative overflow-hidden bg-navy-dark border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-stretch">
            
            {/* Left Column: Form Card */}
            <div className="glass-panel p-8 md:p-16 rounded-[48px] border-white/5 shadow-2xl relative order-2 lg:order-1 bg-white/[0.01]">
              <div className="space-y-4 mb-12">
                <h2 className="text-4xl font-black text-white tracking-tight">Send a <span className="text-gold">Message</span></h2>
                <p className="text-gray-400 font-medium leading-relaxed">
                  Fill out the form below and an executive consultant will reach out to discuss your staffing needs.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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
                    <label className="text-[10px] font-black uppercase tracking-widest text-gold/60 ml-2">Company</label>
                    <input 
                      type="text" 
                      placeholder="Company Name" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all btn-sheen"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gold/60 ml-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="Email" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all btn-sheen"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gold/60 ml-2">Phone</label>
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all btn-sheen"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gold/60 ml-2">Message / Inquiry Details</label>
                  <textarea 
                    rows={4} 
                    placeholder="How can we help your business?" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all resize-none btn-sheen"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-rotating-border group w-full px-12 py-6 bg-white/5 hover:bg-white/10 text-white hover:text-gold font-black rounded-2xl transition-all flex items-center justify-center gap-4 shadow-xl uppercase tracking-widest text-xs btn-auto-sheen border border-white/5"
                >
                  Send Inquiry <Send className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>

            {/* Right Column: Contact Cards */}
            <div className="space-y-12 order-1 lg:order-2 flex flex-col justify-center">
              <div className="space-y-8 animate-fade-up">
                <h2 className="text-4xl md:text-5xl xl:text-7xl font-black text-white tracking-tighter leading-none">
                  Global Reach. <br /><span className="text-gold">Local Expertise.</span>
                </h2>
                <p className="text-gray-400 text-xl leading-relaxed max-w-md font-light">
                  Our strategic advisors are ready to optimize your workforce and hiring processes.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 xl:gap-8">
                <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-gold/30 transition-all hover:bg-white/10 group btn-sheen">
                  <div className="btn-rotating-border w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform btn-auto-sheen border border-white/5">
                    <Phone className="w-8 h-8" />
                  </div>
                  <h4 className="text-gold font-black uppercase tracking-widest text-[10px] mb-2">Corporate Office</h4>
                  <p className="text-white text-lg font-bold">+1 (502) 556-7832</p>
                </div>

                <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-gold/30 transition-all hover:bg-white/10 group btn-sheen">
                  <div className="btn-rotating-border w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform btn-auto-sheen border border-white/5">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h4 className="text-gold font-black uppercase tracking-widest text-[10px] mb-2">General Inquiries</h4>
                  <p className="text-white text-lg font-bold">info@nayastaffing.com</p>
                </div>
              </div>

              <div className="btn-rotating-border flex items-center gap-4 p-4 bg-white/5 border border-gold/10 rounded-2xl w-fit btn-auto-sheen border border-white/5">
                <Clock className="text-gold w-5 h-5" />
                <span className="text-xs font-black uppercase tracking-widest text-gold">Business Hours: Mon - Fri (EST)</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
