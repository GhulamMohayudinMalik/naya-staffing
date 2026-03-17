'use client';

import { Upload, User, Mail, Phone, Briefcase, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function RegisterResume() {
  const [dragActive, setDragActive] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-[#212121]">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-[#081120] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EF6A0B] opacity-10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">Join Our <span className="text-[#EF6A0B]">Network</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium">
            Take the first step towards your next great opportunity. Upload your resume and let our expert recruiters find the perfect fit for you.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 -mt-24 relative z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
            
            {/* Left Side: Info */}
            <div className="lg:w-1/3 bg-[#081120] p-12 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-extrabold mb-8">Why Register?</h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="bg-[#EF6A0B] p-2 rounded-xl h-fit">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Tailored Matches</h4>
                      <p className="text-gray-400 text-sm">We only send you jobs that fit your profile.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-[#EF6A0B] p-2 rounded-xl h-fit">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Fast Tracking</h4>
                      <p className="text-gray-400 text-sm">Direct access to hiring managers.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-[#EF6A0B] p-2 rounded-xl h-fit">
                      <ShieldCheck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">100% Private</h4>
                      <p className="text-gray-400 text-sm">Your data is safe and never shared without consent.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-12 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 w-5 h-5" />
                  <span className="text-sm font-medium text-gray-300">5,000+ Placements made</span>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:w-2/3 p-12 lg:p-16">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#081120]">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input type="text" placeholder="John Doe" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#EF6A0B]/20 transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#081120]">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input type="email" placeholder="john@example.com" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#EF6A0B]/20 transition-all" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#081120]">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input type="tel" placeholder="+1 (555) 000-0000" className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#EF6A0B]/20 transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#081120]">Preferred Industry</label>
                    <div className="relative">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <select className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#EF6A0B]/20 transition-all appearance-none cursor-pointer">
                        <option>Information Technology</option>
                        <option>Healthcare</option>
                        <option>Marketing</option>
                        <option>Sales</option>
                        <option>Industrial</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* File Upload Zone */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#081120]">Upload Resume (PDF, DOCX)</label>
                  <div 
                    onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                    onDragLeave={() => setDragActive(false)}
                    className={`border-2 border-dashed rounded-[32px] p-12 text-center transition-all cursor-pointer ${
                      dragActive ? 'border-[#EF6A0B] bg-[#EF6A0B]/5' : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className="bg-white w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4 text-[#EF6A0B]">
                      <Upload className="w-8 h-8" />
                    </div>
                    <p className="text-[#081120] font-bold text-lg mb-1">Click to upload or drag and drop</p>
                    <p className="text-gray-500 text-sm">Maximum file size: 10MB</p>
                    <input type="file" className="hidden" />
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-xs text-gray-400 mb-6 font-medium">
                    By submitting this form, you agree to our Terms of Service and Privacy Policy. We will handle your data in accordance with our data protection guidelines.
                  </p>
                  <button className="w-full bg-[#EF6A0B] hover:bg-[#d55e0a] text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-[#EF6A0B]/30 transition-all transform hover:-translate-y-1">
                    Complete Registration
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Re-using icons from main app scope
function Target({ className }: { className?: string }) { 
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
}

function Zap({ className }: { className?: string }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
}
