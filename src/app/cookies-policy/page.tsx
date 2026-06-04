"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-navy-dark flex flex-col font-sans selection:bg-gold selection:text-navy-dark overflow-x-hidden pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gold font-black uppercase tracking-widest text-xs mb-12 hover:translate-x-[-8px] transition-transform">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <div className="space-y-12">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight">
            Cookies <span className="text-shimmer">Policy</span>
          </h1>
          
          <div className="space-y-10 text-slate-400 font-medium leading-relaxed">
            <section className="space-y-6">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">1. What Are Cookies</h2>
              <p>
                Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">2. How We Use Cookies</h2>
              <p>
                We use cookies to:
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li>Understand how you use our website.</li>
                <li>Remember your preferences and settings.</li>
                <li>Improve the overall performance and security of our platform.</li>
                <li>Analyze traffic patterns to enhance user experience.</li>
              </ul>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">3. Types of Cookies We Use</h2>
              <p>
                We use both session cookies (which expire when you close your browser) and persistent cookies (which stay on your device for a set period). These include essential cookies for security and functional cookies for performance.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">4. Managing Cookies</h2>
              <p>
                Most web browsers allow you to control cookies through their settings. However, disabling certain cookies may impact the functionality of our website.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">Contact Us</h2>
              <p>
                If you have questions about our use of cookies, please reach out to us at:
              </p>
              <p className="text-white font-black tracking-widest text-sm">
                info@nayastaffing.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
