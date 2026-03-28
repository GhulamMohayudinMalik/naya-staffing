"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube, Twitter, Check, Send, Mail, MapPin, Phone } from "lucide-react";
import VideoBackground from "./VideoBackground";

export default function Footer() {
  return (
    <footer className="w-full bg-[#02040a]">
      {/* 1. Immersive CTA Section */}
      <section className="relative py-32 px-4 overflow-hidden border-b border-white/5">
        <VideoBackground 
          src="/videos/footer.mp4" 
          overlayOpacity="bg-linear-to-b from-navy-dark/90 via-navy-dark/70 to-navy-dark/90"
        />
        
        {/* Extra overlay layer for depth */}
        <div className="absolute inset-0 bg-radial-at-center from-transparent via-navy-dark/30 to-navy-dark opacity-80 transition-opacity duration-1000"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="glass-panel p-12 md:p-20 rounded-[64px] border-white/10 text-center space-y-10 backdrop-blur-3xl shadow-2xl">
            <div className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-gold mb-2">
              Next-Gen Recruitment
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.9]">
              Ready to Architect Your <br className="hidden md:block" />
              <span className="text-shimmer">Winning Team?</span>
            </h2>
            <p className="text-base md:text-xl text-slate-300 max-w-3xl mx-auto font-semibold leading-relaxed">
              Partner with NAYA Staffing to access the world’s most elusive 1% of talent. Our customized solutions are engineered for growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 animate-fade-up">
              <Link href="/become-a-client" className="w-full sm:w-auto px-12 py-5 bg-gold text-navy-dark font-black rounded-full hover:bg-gold-hover hover:-translate-y-1 transition-all shadow-xl uppercase tracking-widest text-xs">
                Partner with us
              </Link>
              <Link href="/contact-us" className="w-full sm:w-auto px-12 py-5 border border-white/20 text-white font-black rounded-full hover:bg-white/10 hover:-translate-y-1 transition-all uppercase tracking-widest text-xs backdrop-blur-md">
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Newsletter & Brand Section */}
      <section className="bg-navy-dark border-t border-white/5 py-24 px-4 overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 max-w-xl">
              <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase leading-none">
                Stay Ahead In The <br />
                <span className="text-gold">Talent Economy.</span>
              </h3>
              <p className="text-slate-400 font-semibold text-base leading-relaxed">
                Join our "Talent Circuit" newsletter to receive exclusive market insights, hiring reports, and C-suite career opportunities.
              </p>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold/50 to-transparent blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <form className="relative flex flex-col sm:flex-row gap-4 p-2 bg-white/5 border border-white/10 rounded-[40px] backdrop-blur-xl group-hover:border-gold/30 transition-all">
                <div className="flex-grow flex items-center px-8 py-4">
                  <Mail className="text-gold w-5 h-5 mr-4" />
                  <input 
                    type="email" 
                    placeholder="Enter professionally..." 
                    className="bg-transparent border-none outline-none text-white font-semibold placeholder:text-slate-500 w-full"
                  />
                </div>
                <button className="bg-gold hover:bg-gold-hover text-navy-dark px-10 py-5 rounded-[32px] font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3">
                  Join Circuit <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Global Information Grid */}
      <section className="bg-[#040814] py-24 px-4 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            
            {/* Column 1: Brand Arc */}
            <div className="space-y-8">
              <Link href="/" className="text-2xl font-black tracking-tighter text-white flex items-center gap-3">
                <span className="bg-gold w-10 h-10 rounded-xl flex items-center justify-center text-navy-dark text-xl shadow-lg">N</span>
                <span>NAYA Staffing</span>
              </Link>
              <p className="text-slate-400 font-semibold leading-relaxed text-sm">
                Empowering industry leaders through precision talent architecture and innovative recruitment strategies since inception. We don't just fill roles; we build legacies.
              </p>
              <div className="flex items-center gap-3">
                {[
                  { Icon: Linkedin, href: "https://www.linkedin.com/company/nayastaffing/" },
                  { Icon: Instagram, href: "https://www.instagram.com/nayastaffing" },
                  { Icon: Facebook, href: "https://www.facebook.com/nayastaffing" },
                  { Icon: Twitter, href: "https://x.com/NAYAStaffing" }
                ].map(({ Icon, href }, idx) => (
                  <a 
                    key={idx}
                    href={href} 
                    target="_blank" 
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:bg-gold hover:text-navy-dark hover:border-gold transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Ecosystem */}
            <div className="space-y-8">
              <h4 className="text-white font-black text-sm uppercase tracking-[0.4em] italic opacity-80">Solutions</h4>
              <ul className="grid grid-cols-1 gap-4">
                {[
                  { name: "RPO Services", href: "/recruitment-process-outsourcing" },
                  { name: "Direct Hire", href: "/direct-hire" },
                  { name: "Executive Search", href: "/executive-search" },
                  { name: "Volume Hiring", href: "/volume-recruitment" },
                  { name: "Temporary Staffing", href: "/temporary-staffing" }
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-slate-400 hover:text-gold transition-colors font-semibold text-sm flex items-center gap-3 group">
                      <div className="w-1.5 h-1.5 bg-gold/30 rounded-full group-hover:bg-gold transition-colors"></div>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Insight */}
            <div className="space-y-8">
              <h4 className="text-white font-black text-sm uppercase tracking-[0.4em] italic opacity-80">Insights</h4>
              <ul className="grid grid-cols-1 gap-4">
                {[
                  { name: "Success Stories", href: "/testimonials" },
                  { name: "Industry Reports", href: "/blog" },
                  { name: "Hiring FAQs", href: "/faqs" },
                  { name: "Privacy Protocol", href: "/privacy-policy" }
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-slate-400 hover:text-gold transition-colors font-semibold text-sm flex items-center gap-3 group">
                      <div className="w-1.5 h-1.5 bg-gold/30 rounded-full group-hover:bg-gold transition-colors"></div>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Reach */}
            <div className="space-y-8">
              <h4 className="text-white font-black text-sm uppercase tracking-[0.4em] italic opacity-80">Reach Us</h4>
              <div className="space-y-6 text-sm font-semibold">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gold group-hover:bg-gold/10 transition-colors">
                    <MapPin size={18} />
                  </div>
                  <p className="text-slate-400 group-hover:text-white transition-colors">
                    212 N 2nd St Ste 100<br />
                    Richmond, KY 40475
                  </p>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gold group-hover:bg-gold/10 transition-colors">
                    <Phone size={18} />
                  </div>
                  <p className="text-slate-400 group-hover:text-white transition-colors">
                    +1 (502) 556-7832
                  </p>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gold group-hover:bg-gold/10 transition-colors">
                    <Mail size={18} />
                  </div>
                  <p className="text-slate-400 group-hover:text-white transition-colors uppercase tracking-widest text-xs">
                    info@nayastaffing.com
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Elite Bottom Bar */}
      <section className="bg-[#02040a] py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
              © 2026 NAYA Staffing LLC.
            </p>
            <div className="h-px w-20 bg-white/5 hidden md:block"></div>
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gold/60">
              Architecting Talent.
            </p>
          </div>
          
          <div className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-600">
            Registered: Richmond, KY, USA
          </div>
        </div>
      </section>
    </footer>
  );
}
