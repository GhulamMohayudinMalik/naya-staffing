"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Briefcase, Building2, ArrowRight } from 'lucide-react';

export default function RegisterHubPage() {
  return (
    <div className="min-h-screen bg-[#040814] pt-32 pb-16 px-4 flex items-center justify-center selection:bg-gold selection:text-navy-dark">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-4xl relative z-10">
        <div className="text-center mb-12 flex flex-col items-center">
          <Link href="/" className="mb-8 group">
            <Image 
              src="/images/logo.png" 
              alt="NAYA Staffing Logo" 
              width={200} 
              height={50} 
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 rounded-lg"
              priority
            />
          </Link>
          <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-gold mb-6 shadow-xl backdrop-blur-md">
            Join NAYA Staffing
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 uppercase">
            Create an Account
          </h1>
          <p className="text-slate-400 text-sm font-medium">
            Please select how you would like to use NAYA Staffing to proceed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Job Seeker Card */}
          <Link href="/job-seekers/register-upload-resume" className="group">
            <div className="h-full bg-white/5 border border-white/10 hover:border-gold/30 rounded-3xl p-8 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 shadow-2xl flex flex-col justify-between btn-sheen relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#0B132B] border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:border-gold/50 transition-colors">
                  <Briefcase className="w-8 h-8 text-gold" />
                </div>
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-3 group-hover:text-gold transition-colors">I am a Job Seeker</h2>
                <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8">
                  Create a candidate profile, upload your resume, track your job applications, and increase your visibility for upcoming opportunities.
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white group-hover:text-gold transition-colors">
                Register as Candidate <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Employer Card */}
          <Link href="/employers/register" className="group">
            <div className="h-full bg-white/5 border border-white/10 hover:border-gold/30 rounded-3xl p-8 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 shadow-2xl flex flex-col justify-between btn-sheen relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#0B132B] border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:border-gold/50 transition-colors">
                  <Building2 className="w-8 h-8 text-gold" />
                </div>
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-3 group-hover:text-gold transition-colors">I am an Employer</h2>
                <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8">
                  Create a client account to submit new job requisitions, track active hiring processes, and partner directly with our recruitment team.
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white group-hover:text-gold transition-colors">
                Register as Employer <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </Link>

        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm">
            Already have an account?{' '}
            <Link href="/login" className="text-gold font-bold hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

