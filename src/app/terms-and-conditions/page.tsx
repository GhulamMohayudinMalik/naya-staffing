"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-navy-dark flex flex-col font-sans selection:bg-gold selection:text-navy-dark overflow-x-hidden pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gold font-black uppercase tracking-widest text-xs mb-12 hover:translate-x-[-8px] transition-transform">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <div className="space-y-12">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight">
            Terms & <span className="text-shimmer">Conditions</span>
          </h1>
          
          <div className="space-y-10 text-slate-400 font-medium leading-relaxed">
            <section className="space-y-6">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the NAYA Staffing website and services, you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please do not use our services.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">2. Use of Services</h2>
              <p>
                Our services are intended for employers seeking recruitment solutions and candidates seeking employment. You agree to use our platform only for lawful purposes and in a manner that does not infringe the rights of others.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">3. User Responsibilities</h2>
              <p>
                Users are responsible for ensuring the accuracy of the information they provide, including resumes, job descriptions, and contact details. NAYA Staffing is not liable for any consequences arising from inaccurate or misleading information provided by users.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">4. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and software, is the property of NAYA Staffing and is protected by international copyright laws.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">5. Limitation of Liability</h2>
              <p>
                NAYA Staffing shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services or website.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-white uppercase tracking-tight">Contact Us</h2>
              <p>
                For questions regarding these Terms & Conditions, please contact us at:
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
