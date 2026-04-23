"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-navy-dark flex flex-col font-sans selection:bg-gold selection:text-navy-dark overflow-x-hidden pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gold font-black uppercase tracking-widest text-xs mb-12 hover:translate-x-[-8px] transition-transform">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <div className="space-y-12">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight">
            Privacy <span className="text-shimmer">Policy</span>
          </h1>
          
          <div className="space-y-10 text-slate-400 font-medium leading-relaxed">
            <section className="space-y-6">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">Introduction</h2>
              <p>
                NAYA Staffing ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our recruitment services.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">Information We Collect</h2>
              <p>
                We collect personal information that you voluntarily provide to us when you register on our website, upload your resume, or express interest in our services. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li>Name, email address, and contact details.</li>
                <li>Employment history, education, and skills (via resumes/CVs).</li>
                <li>Information provided during consultations or interviews.</li>
              </ul>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li>Provide recruitment and workforce solutions.</li>
                <li>Connect candidates with suitable employment opportunities.</li>
                <li>Communicate with you regarding your application or hiring needs.</li>
                <li>Improve our website and services.</li>
              </ul>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
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
