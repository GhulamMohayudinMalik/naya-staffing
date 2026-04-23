"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#02040a] border-t border-white/5 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-10">
            <Link href="/" className="text-3xl font-black tracking-tighter text-white flex items-center gap-4">
              <span className="bg-gold w-12 h-12 rounded-2xl flex items-center justify-center text-navy-dark text-2xl shadow-[0_10px_30px_rgba(212,175,55,0.3)]">N</span>
              <span>NAYA Staffing</span>
            </Link>
            <p className="text-slate-400 font-medium leading-relaxed text-base max-w-sm">
              NAYA Staffing delivers premium recruitment and workforce solutions for employers and job seekers across diverse industries and evolving markets.
            </p>
            <div className="flex items-center gap-4 pt-4">
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
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-slate-400 hover:bg-gold hover:text-navy-dark hover:border-gold transition-all duration-500 transform hover:-translate-y-2"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Group */}
          <div className="space-y-8">
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.5em] opacity-50">Company</h4>
            <ul className="space-y-5">
              {[
                { name: "About Us", href: "/about-us" },
                { name: "Contact Us", href: "/contact-us" },
                { name: "Blog / Insights", href: "/insights" },
                { name: "Testimonials", href: "/testimonials" },
                { name: "FAQs", href: "/faqs" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-gold transition-all duration-300 font-semibold text-xs uppercase tracking-widest flex items-center group">
                    <span className="w-0 group-hover:w-4 h-px bg-gold transition-all duration-300 mr-0 group-hover:mr-3"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Group */}
          <div className="space-y-8">
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.5em] opacity-50">Services</h4>
            <ul className="space-y-5">
              {[
                { name: "Executive Search", href: "/executive-search" },
                { name: "Permanent Recruitment", href: "/permanent-recruitment" },
                { name: "Contract Staffing", href: "/contract-staffing" },
                { name: "RPO", href: "/recruitment-process-outsourcing" },
                { name: "Global Hiring", href: "/global-hiring" },
                { name: "Screening & Assessment", href: "/screening-assessment" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-gold transition-all duration-300 font-semibold text-xs uppercase tracking-widest flex items-center group">
                    <span className="w-0 group-hover:w-4 h-px bg-gold transition-all duration-300 mr-0 group-hover:mr-3"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Employers Group */}
          <div className="space-y-8">
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.5em] opacity-50">Employers</h4>
            <ul className="space-y-5">
              {[
                { name: "Employer Solutions", href: "/employer-solutions" },
                { name: "Become a Client", href: "/become-a-client" },
                { name: "Our Proven Process", href: "/our-recruitment-process" },
                { name: "Schedule Consultation", href: "/contact-us" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-gold transition-all duration-300 font-semibold text-xs uppercase tracking-widest flex items-center group">
                    <span className="w-0 group-hover:w-4 h-px bg-gold transition-all duration-300 mr-0 group-hover:mr-3"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Job Seekers Group */}
          <div className="space-y-8">
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.5em] opacity-50">Job Seekers</h4>
            <ul className="space-y-5">
              {[
                { name: "Why Choose Us", href: "/why-choose-naya-staffing" },
                { name: "Reverse Recruitment", href: "/reverse-recruitment" },
                { name: "Pricing", href: "/pricing" },
                { name: "Register & Upload Resume", href: "/register-upload-resume" },
                { name: "Job Openings", href: "/job-openings" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-gold transition-all duration-300 font-semibold text-xs uppercase tracking-widest flex items-center group">
                    <span className="w-0 group-hover:w-4 h-px bg-gold transition-all duration-300 mr-0 group-hover:mr-3"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-white/5 mb-16">
          <div className="flex items-center gap-6 group">
            <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold/10 transition-all duration-500">
              <MapPin size={24} />
            </div>
            <div className="space-y-1">
              <p className="text-white font-black text-[10px] uppercase tracking-widest opacity-50">Visit Us</p>
              <p className="text-slate-400 text-sm font-semibold">212 N 2nd St Ste 100, Richmond, KY 40475</p>
            </div>
          </div>
          <div className="flex items-center gap-6 group">
            <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold/10 transition-all duration-500">
              <Phone size={24} />
            </div>
            <div className="space-y-1">
              <p className="text-white font-black text-[10px] uppercase tracking-widest opacity-50">Call Us</p>
              <p className="text-slate-400 text-sm font-semibold">+1 (502) 556-7832</p>
            </div>
          </div>
          <div className="flex items-center gap-6 group">
            <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold/10 transition-all duration-500">
              <Mail size={24} />
            </div>
            <div className="space-y-1">
              <p className="text-white font-black text-[10px] uppercase tracking-widest opacity-50">Email Us</p>
              <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest">info@nayastaffing.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 pt-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500">
              © 2026 NAYA Staffing LLC. All Rights Reserved.
            </p>
            
            {/* Legal Links */}
            <div className="flex items-center gap-8">
              {[
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms & Conditions", href: "/terms-conditions" },
                { name: "Cookies Policy", href: "/cookies-policy" },
                { name: "Sitemap", href: "/sitemap" },
                { name: "Support", href: "/support" }
              ].map((link) => (
                <Link key={link.name} href={link.href} className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 hover:text-gold transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.5em] text-slate-700 bg-white/5 px-6 py-3 rounded-full border border-white/5">
            Registered: Richmond, KY, USA
          </div>
        </div>
      </div>
    </footer>
  );
}
