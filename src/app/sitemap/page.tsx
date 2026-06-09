"use client";

import { Typewriter } from "@/components/Typewriter";
import React from 'react';
import Link from 'next/link';
import { Compass, ArrowRight, Home, Users, Briefcase, FileText, Lock, Globe } from 'lucide-react';

export default function SitemapPage() {
  const groups = [
    {
      title: "Core Pages",
      icon: <Home className="w-6 h-6 text-gold" />,
      links: [
        { name: "Homepage", href: "/" },
        { name: "About Us Overview", href: "/about-us" },
        { name: "About Company", href: "/about-us/about-company" },
        { name: "Contact Us", href: "/contact-us" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Success Stories", href: "/success-stories" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Insights & Industry News", href: "/insights" },
        { name: "FAQ Center", href: "/faqs" }
      ]
    },
    {
      title: "Services & Solutions",
      icon: <Briefcase className="w-6 h-6 text-gold" />,
      links: [
        { name: "All Services Overview", href: "/services" },
        { name: "Executive Search", href: "/executive-search" },
        { name: "Permanent Recruitment", href: "/permanent-recruitment" },
        { name: "Contract Staffing", href: "/contract-staffing" },
        { name: "Recruitment Process Outsourcing (RPO)", href: "/recruitment-process-outsourcing" },
        { name: "Global Hiring Solutions", href: "/global-hiring" },
        { name: "Screening & Assessment", href: "/screening-assessment" },
        { name: "Temporary Staffing", href: "/temporary-staffing" },
        { name: "Volume Recruitment", href: "/volume-recruitment" }
      ]
    },
    {
      title: "Employers & Candidates",
      icon: <Users className="w-6 h-6 text-gold" />,
      links: [
        { name: "Employers Overview", href: "/employers" },
        { name: "Employer Solutions Portal", href: "/employers/employer-solutions" },
        { name: "Become a Client / Intake", href: "/employers/become-a-client" },
        { name: "Our Proven Recruitment Process", href: "/employers/our-proven-process" },
        { name: "Job Seekers Overview", href: "/job-seekers" },
        { name: "Why Candidates Choose NAYA", href: "/job-seekers/why-choose-us" },
        { name: "Reverse Recruitment Model", href: "/job-seekers/reverse-recruitment" },
        { name: "Candidate Pricing Plans", href: "/job-seekers/pricing" },
        { name: "Submit / Upload Resume", href: "/job-seekers/register-upload-resume" },
        { name: "Browse Open Jobs", href: "/job-openings" },
        { name: "Career Advice & Resources", href: "/career-advice" }
      ]
    },
    {
      title: "Legal & Information",
      icon: <Lock className="w-6 h-6 text-gold" />,
      links: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms & Conditions", href: "/terms-and-conditions" },
        { name: "Cookies Policy", href: "/cookies-policy" },
        { name: "Support Desk", href: "/support" }
      ]
    }
  ];

  return (
    <main className="bg-[#040814] text-white min-h-screen pt-32 pb-24 font-sans selection:bg-gold selection:text-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <div className="btn-rotating-border inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-gold/20 mb-2 backdrop-blur-md btn-auto-sheen border border-white/5">
            <Compass className="w-4 h-4 text-gold animate-spin-slow" />
            <span className="text-gold text-xs font-bold uppercase tracking-widest">Navigation Center</span>
          </div>
          <h1 className="text-4xl md:text-5xl xl:text-7xl font-black tracking-tighter leading-none">
            <Typewriter>
              Site <span className="text-gold">Map.</span>
            </Typewriter>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
            An organized directory of all pages, portals, and service resources across NAYA Staffing.
          </p>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-10">
          {groups.map((group, idx) => (
            <div key={idx} className="glass-panel p-10 md:p-12 rounded-[48px] border-white/5 hover:border-gold/20 transition-all duration-700 bg-white/[0.01]">
              <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-6">
                <div className="btn-rotating-border w-12 h-12 bg-white/10 border border-gold/20 rounded-2xl flex items-center justify-center btn-auto-sheen border border-white/5">
                  {group.icon}
                </div>
                <h2 className="text-2xl font-black tracking-tight text-white uppercase">{group.title}</h2>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                {group.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link 
                      href={link.href}
                      className="group/link text-slate-400 hover:text-gold transition-colors flex items-center font-bold text-sm tracking-wide py-1"
                    >
                      <ArrowRight className="w-4 h-4 text-gold opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all mr-0 group-hover/link:mr-2" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
