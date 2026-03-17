'use client';

import { Users, Target, ShieldCheck, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function ReverseRecruitment() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#212121]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#081120] to-[#1a2a44] overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#EF6A0B] opacity-5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block bg-[#EF6A0B]/10 border border-[#EF6A0B]/20 rounded-full px-6 py-2 mb-8 text-[#EF6A0B] font-bold text-sm tracking-wider uppercase">
            A Candidate-First Approach
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight">
            What is <span className="text-[#EF6A0B]">Reverse</span> <br /> Recruitment?
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Standard recruiting works for employers. Reverse recruiting works for <strong>YOU</strong>. 
            We become your personal agents, pitching your talent to the companies you actually want to work for.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/register-upload-resume" className="bg-[#EF6A0B] hover:bg-[#d55e0a] text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl hover:shadow-[#EF6A0B]/30 transform hover:-translate-y-1">
              Apply for Representation
            </Link>
            <Link href="#how-it-works" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 px-12 py-5 rounded-2xl font-bold text-lg transition-all">
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#081120] mb-6">Your Personal Career Agent</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We flip the script on traditional hiring. Instead of you chasing jobs, we make companies chase you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Users className="w-10 h-10 text-[#EF6A0B]" />,
                title: "Personal Branding",
                desc: "We help you refine your resume, optimize your LinkedIn, and build a narrative that elite employers can't ignore."
              },
              {
                icon: <Target className="w-10 h-10 text-[#EF6A0B]" />,
                title: "Targeted Pitching",
                desc: "We don't just wait for job posts. We identify your dream companies and pitch your profile directly to decision-makers."
              },
              {
                icon: <Zap className="w-10 h-10 text-[#EF6A0B]" />,
                title: "Interview Prep",
                desc: "Once we secure the meeting, we coach you through the specific expectations of that company to ensure you close the deal."
              }
            ].map((step, idx) => (
              <div key={idx} className="relative p-10 bg-[#F8F9FA] rounded-[40px] border border-gray-100 hover:border-[#EF6A0B]/30 transition-all duration-300 group">
                <div className="mb-6 bg-white w-20 h-20 rounded-2xl shadow-sm flex items-center justify-center group-hover:bg-[#EF6A0B] group-hover:text-white transition-all duration-300">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#081120] mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#081120] text-white overflow-hidden relative">
        <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-blue-600 opacity-5 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-10 leading-tight">Why Elite Candidates Choose Reverse Recruiting</h2>
              <div className="space-y-6">
                {[
                  "Access to the hidden job market (unadvertised roles)",
                  "Salary negotiation handled by professionals",
                  "Direct access to C-suite and Hiring Managers",
                  "Privacy and confidentiality remains 100% secure",
                  "Significant reduction in job search time and stress"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-[#EF6A0B]" />
                    </div>
                    <span className="text-xl text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#EF6A0B] to-[#d27b41] rounded-[60px] p-12 lg:p-16 relative z-10 shadow-2xl">
                <blockquote className="text-2xl font-medium leading-relaxed mb-8 italic">
                  "I was tired of sending 50 resumes and hearing nothing. BreezyRecruit's reverse recruitment got me 3 interviews at top tech firms in two weeks. I didn't even apply."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full"></div>
                  <div>
                    <div className="font-bold text-xl">James Wilson</div>
                    <div className="text-white/70">VP of Engineering</div>
                  </div>
                </div>
              </div>
              {/* Decorative bloat */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#EF6A0B]/20 rounded-full blur-[60px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#081120] mb-8">Ready to Level Up?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Our representation is exclusive. We only work with candidates who are ready to make a significant impact.
          </p>
          <Link href="/register-upload-resume" className="inline-flex items-center bg-[#081120] hover:bg-[#1a2a44] text-white px-12 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl group">
            Get Started Now <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
