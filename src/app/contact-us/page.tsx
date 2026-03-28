'use client';

import React, { useState } from 'react';
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  MessageSquare,
  Clock,
  Globe
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact Form Submitted:', formData);
    alert("Inquiry Sent! We'll get back to you shortly.");
  };

  return (
    <main className="bg-[#040814] text-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <VideoBackground 
          src="/videos/direct-hire.mp4" 
          overlayOpacity="bg-navy-dark/75"
        />
        <div className="container mx-auto px-6 relative z-10 text-center animate-fade-in">
          <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-8 shadow-xl backdrop-blur-md">
            Get In Touch
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-tight">
            Contact <span className="text-gold">Us.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
            Let’s Connect & Build the Future Together
          </p>
        </div>
      </section>

      {/* 2. CONTACT CONTENT SECTION */}
      <section className="py-24 relative overflow-hidden bg-navy-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-stretch">
            
            {/* Left Column: Form Card */}
            <div className="glass-panel p-8 md:p-16 rounded-[48px] border-white/5 shadow-2xl relative order-2 lg:order-1">
              <div className="space-y-4 mb-12">
                <h2 className="text-4xl font-black text-white tracking-tight">Send us a <span className="text-gold">Message.</span></h2>
                <p className="text-gray-400 font-medium leading-relaxed">
                  Have a question, an inquiry, or a staffing need? We’re here to help. Fill out the form below, and our team will get back to you with personalized solutions.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gold/60 ml-2">First Name</label>
                    <input 
                      type="text" 
                      placeholder="First Name" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gold/60 ml-2">Last Name</label>
                    <input 
                      type="text" 
                      placeholder="Last Name" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gold/60 ml-2">Work Email</label>
                    <input 
                      type="email" 
                      placeholder="email@company.com" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gold/60 ml-2">Phone</label>
                    <input 
                      type="tel" 
                      placeholder="+1 (555) 000-0000" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gold/60 ml-2">Subject</label>
                  <input 
                    type="text" 
                    placeholder="How can we help?" 
                    required 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gold/60 ml-2">Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Details about your inquiry..." 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button 
                  type="submit" 
                  className="group w-full px-12 py-6 bg-gold hover:bg-gold-hover text-navy-dark font-black rounded-2xl transition-all flex items-center justify-center gap-4 shadow-xl uppercase tracking-widest text-xs"
                >
                  Submit Inquiry <Send className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </div>

            {/* Right Column: Contact Info & Accents */}
            <div className="space-y-12 order-1 lg:order-2 flex flex-col justify-center">
              <div className="space-y-8 animate-fade-up">
                <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
                  Get in <br /><span className="text-gold">Touch!</span>
                </h2>
                <p className="text-gray-400 text-xl leading-relaxed max-w-md font-light">
                  Our team is ready to provide personalized solutions tailored to your business goals.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {/* Phone Card */}
                <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-gold/30 transition-all hover:bg-white/10 group">
                  <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform">
                    <Phone className="w-8 h-8" />
                  </div>
                  <h4 className="text-gold font-black uppercase tracking-widest text-[10px] mb-2">Give us a Call</h4>
                  <p className="text-white text-lg font-bold">+1 (727) 241-9513</p>
                </div>

                {/* Mail Card */}
                <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-gold/30 transition-all hover:bg-white/10 group">
                  <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h4 className="text-gold font-black uppercase tracking-widest text-[10px] mb-2">Send an Email</h4>
                  <p className="text-white text-lg font-bold">info@nayastaffing.com</p>
                </div>

                {/* Office Card */}
                <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-gold/30 transition-all hover:bg-white/10 group sm:col-span-2">
                  <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <h4 className="text-gold font-black uppercase tracking-widest text-[10px] mb-2">Primary Office</h4>
                  <p className="text-white text-lg font-bold">7901 4th St N Ste 300, St Petersburg FL 33702</p>
                </div>
              </div>

              {/* Response Time Badge */}
              <div className="flex items-center gap-4 p-4 bg-gold/5 border border-gold/10 rounded-2xl w-fit">
                <Clock className="text-gold w-5 h-5" />
                <span className="text-xs font-black uppercase tracking-widest text-gold">Response Time: 2–4 Hours</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE MAP SECTION */}
      <section className="h-[500px] w-full relative border-t border-white/5 bg-navy-dark">
        <iframe 
          loading="lazy" 
          src="https://maps.google.com/maps?q=7901%204th%20St%20N%20Ste%20300%20St%20Petersburg%20FL%2033702&t=m&z=12&output=embed&iwloc=near" 
          className="w-full h-full border-0 [filter:invert(90%)_hue-rotate(180deg)_brightness(95%)_contrast(90%)] transition-all duration-1000"
          title="NAYA Staffing HQ" 
          aria-label="NAYA Staffing HQ Location Map"
        ></iframe>
        {/* Map Overlay to prevent accidental scrolling & add depth */}
        <div className="absolute inset-0 pointer-events-none"></div>
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(4,8,20,0.8)]"></div>
      </section>

      {/* 4. FINAL CTA STRIP */}
      <section className="py-24 bg-navy relative border-b border-white/5">
         <div className="container mx-auto px-6 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">Ready to start your <span className="text-gold">Success Story?</span></h2>
            <div className="flex justify-center">
               <button className="px-12 py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold transition-all flex items-center gap-4 shadow-xl">
                  Explore Careers <ArrowRight className="w-5 h-5 text-gold" />
               </button>
            </div>
         </div>
      </section>
    </main>
  );
}
