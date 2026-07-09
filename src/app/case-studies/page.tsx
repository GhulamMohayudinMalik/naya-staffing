"use client";

import { Typewriter } from "@/components/Typewriter";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Award, 
  ArrowRight, 
  ArrowUpRight, 
  Calendar,
  ChevronRight,
  Briefcase,
  Users
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';
import api from '@/lib/api';

export default function CaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const res = await api.get('/admin/content?post_type=case_study&is_published=true');
        setCaseStudies(res.data);
      } catch (err) {
        console.error("Failed to fetch case studies:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCaseStudies();
  }, []);

  const faqs = [
    {
      question: "What is the purpose of the Case Studies page?",
      answer: "This page acts as the deeper proof layer of the website by showing structured examples of hiring support, candidate value, and platform outcomes in practice."
    },
    {
      question: "How is this page different from Testimonials?",
      answer: "Testimonials are shorter quote-based proof, while case studies are longer, more structured stories that explain challenge, approach, and outcome."
    },
    {
      question: "Who are the case studies for?",
      answer: "They support both employers and candidates by showing proof that the NAYA Staffing experience creates real value."
    }
  ];

  const relatedLinks = [
    { name: "About Company", href: "/about-us/about-company", desc: "Explore our brand profile and team page." },
    { name: "Contact Us", href: "/contact-us", desc: "Get in touch with our operations desk." },
    { name: "Blog / Insights", href: "/insights", desc: "Explore our latest recruiting insights and articles." },
    { name: "FAQs", href: "/faqs", desc: "Browse frequently asked questions." }
  ];

  return (
    <main className="bg-[#040814] text-white min-h-screen selection:bg-gold selection:text-navy-dark font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 md:pt-32 xl:pt-40 pb-16 md:pb-20 xl:pb-24 overflow-hidden">
        <VideoBackground 
          src="/videos/hero.mp4" 
          overlayOpacity="bg-navy-dark/85"
        />
        
        <div className="btn-rotating-border absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 blur-[120px] rounded-full animate-pulse btn-auto-sheen border border-white/5"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-navy-light/20 blur-[150px] rounded-full animate-float"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <div className="btn-rotating-border inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-gold/20 mb-6 backdrop-blur-md animate-fade-in-up btn-auto-sheen border border-white/5">
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Proof Through Outcomes</span>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
            <Typewriter>
              Case Studies That Show How NAYA Staffing Creates <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Real Hiring &amp; Career Value.
              </span>
            </Typewriter>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
              A strong recruitment brand should not only describe what it offers. It should also show how it works in practice. NAYA Staffing’s Case Studies page is designed to highlight real hiring scenarios.
            </p>
          </div>
        </div>
      </section>

      {/* DYNAMIC CASE STUDIES LIST */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">
              Our <span className="text-gold">Case Studies</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
          </div>

          {loading ? (
            <div className="text-center text-white animate-pulse text-xl">Loading Case Studies...</div>
          ) : caseStudies.length === 0 ? (
            <div className="text-center text-slate-400 text-xl">No case studies available at the moment.</div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8 items-stretch">
              {caseStudies.map((cs) => (
                <div key={cs.id} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                  
                  {cs.image_url && (
                    <div className="w-full aspect-[16/9] mb-6 rounded-2xl overflow-hidden glass-panel border-white/5 shadow-2xl relative z-10">
                      <img src={cs.image_url} alt={cs.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-700" />
                    </div>
                  )}

                  <div className="space-y-6 relative z-10">
                    <div className="btn-rotating-border w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-gold btn-auto-sheen border border-white/5">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <h3 className="text-white font-black text-xl leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                      <Link href={`/case-studies/${cs.slug}`}>{cs.title}</Link>
                    </h3>

                    <div className="space-y-4 pt-4 border-t border-white/5 text-xs">
                      <div>
                        <span className="text-gold font-black uppercase tracking-widest block mb-1">Overview</span>
                        <p className="text-slate-400 font-semibold leading-relaxed">{cs.content.substring(0, 150)}...</p>
                      </div>
                    </div>
                  </div>

                  <Link 
                    href={`/case-studies/${cs.slug}`} 
                    className="btn-rotating-border mt-6 border-t border-white/5 relative z-10 bg-white/5 p-4 rounded-xl border border-gold/10 btn-auto-sheen text-center text-gold font-black text-[10px] uppercase tracking-widest hover:bg-gold/10 transition-colors block"
                  >
                    Read Full Case Study
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-[#0B132B] py-32 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="text-center mb-20 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-6 shadow-xl backdrop-blur-md btn-auto-sheen border border-white/5">
                FAQ
              </div>
              <h2 className="text-5xl font-black mb-6 uppercase">Frequently <span className="text-gold">Asked Questions</span></h2>
              <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
           </div>
           
           <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <FAQItem 
                  key={idx}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
           </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 xl:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.95]">
                Brand <br/>
                Proof <span className="text-gold">Links</span>
              </h2>
              <div className="btn-rotating-border h-1 w-20 bg-white/5 rounded-full btn-auto-sheen border border-white/5"></div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedLinks.map((service, idx) => (
                <Link 
                  key={idx} 
                  href={service.href}
                  className="group p-6 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-gold/30 hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white font-bold text-base group-hover:text-gold transition-colors">
                        {service.name}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-gold transition-colors" />
                    </div>
                    <p className="text-slate-400 text-xs font-semibold leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
