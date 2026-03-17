'use client';

import { CheckCircle2, BarChart3, Users2, ShieldCheck, ArrowRight, PlayCircle } from 'lucide-react';
import Link from 'next/link';

export default function RPOService() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#212121]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#081120] overflow-hidden">
        {/* Abstract Background Design */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#EF6A0B] rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 text-blue-400 text-sm font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Enterprise Solutions
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-8 tracking-tight leading-tight">
            Recruitment Process <br /> <span className="text-[#EF6A0B]">Outsourcing</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Scale your team, reduce costs, and improve quality of hire with our end-to-end RPO solutions. We become your internal recruiting engine.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact-us" className="bg-[#EF6A0B] hover:bg-[#d55e0a] text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl hover:shadow-[#EF6A0B]/30 transform hover:-translate-y-1">
              Request a Proposal
            </Link>
            <button className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-12 py-5 rounded-2xl font-bold text-lg transition-all">
              <PlayCircle className="w-6 h-6" /> Watch How it Works
            </button>
          </div>
        </div>
      </section>

      {/* RPO Overview Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="bg-gray-100 aspect-square rounded-[60px] overflow-hidden relative">
                 <img 
                  src="https://breezyrecruit.com/wp-content/uploads/2025/05/1-1-1024x683.jpg" 
                  alt="Business Meeting"
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-blue-900/20"></div>
              </div>
              {/* Stats Overlay */}
              <div className="absolute -bottom-10 -right-10 bg-[#EF6A0B] text-white p-10 rounded-[40px] shadow-2xl z-20">
                <div className="text-5xl font-extrabold mb-1">45%</div>
                <div className="text-sm font-bold uppercase tracking-wider opacity-90">Average Cost <br /> Per Hire Reduction</div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#081120] mb-8 leading-tight">Your Strategic <br /> Hiring Partner</h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                RPO is more than just outsourcing. It's a partnership where we assume full responsibility for your recruitment process—from sourcing to onboarding. We bring the tech, the talent, and the data to drive results.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { icon: <BarChart3 className="w-6 h-6 text-[#EF6A0B]" />, title: "Data-Driven Sourcing" },
                  { icon: <Users2 className="w-6 h-6 text-[#EF6A0B]" />, title: "Brand Alignment" },
                  { icon: <ShieldCheck className="w-6 h-6 text-[#EF6A0B]" />, title: "Compliance Ready" },
                  { icon: <CheckCircle2 className="w-6 h-6 text-[#EF6A0B]" />, title: "Scalable Model" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-center">
                    <div className="bg-[#EF6A0B]/10 p-3 rounded-xl">{item.icon}</div>
                    <span className="font-bold text-lg text-[#081120]">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#081120] mb-6">Why Companies Choose Our RPO</h2>
            <div className="h-2 w-24 bg-[#EF6A0B] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Scalability on Demand",
                desc: "Whether you need to hire 10 people or 100, our RPO model scales instantly with your business needs.",
              },
              {
                title: "Employer Branding",
                desc: "We don't just find people; we market your company to top-tier talent as the preferred place to work.",
              },
              {
                title: "Advanced Tech Stack",
                desc: "Gain access to the latest AI-driven recruitment tools and analytics without the high subscription costs.",
              }
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[48px] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <h3 className="text-2xl font-bold text-[#081120] mb-6 group-hover:text-[#EF6A0B] transition-colors">{benefit.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#081120] text-center text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8">Ready to Transform Your Hiring?</h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Book a free strategy session with our RPO experts and discover how we can streamline your recruitment process.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact-us" className="bg-[#EF6A0B] hover:bg-[#d55e0a] text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl">
                Schedule My Free Strategy Session
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
