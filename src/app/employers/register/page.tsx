"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, Building2, CheckCircle, AlertCircle } from 'lucide-react';
import api from '@/lib/api';

export default function EmployerRegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    full_name: '',
    job_title: '',
    phone: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Create user account with 'client' role
      const payload = {
        ...formData,
        role: 'client' // Ensure they get the Employer Dashboard role
      };

      await api.post('/auth/register', payload);
      setSuccess(true);
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        router.push('/login');
      }, 2000);

    } catch (err: any) {
      console.error('Registration failed:', err);
      setError(err.response?.data?.detail || 'Failed to create account. Email may already be in use.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#040814] pt-32 pb-16 px-4 flex items-center justify-center selection:bg-gold selection:text-navy-dark">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-6 shadow-xl backdrop-blur-md">
            <Building2 className="w-8 h-8 text-gold" />
          </div>
          <h1 className="text-4xl font-black text-white tracking-tighter mb-4 uppercase">
            Employer <span className="text-gold">Registration</span>
          </h1>
          <p className="text-slate-400 text-sm font-medium leading-relaxed max-w-md mx-auto">
            Create your client account to manage job requisitions, view candidates, and communicate directly with our recruitment team.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          
          {success ? (
            <div className="text-center py-10">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6 animate-pulse" />
              <h2 className="text-2xl font-black text-white uppercase mb-4">Registration Successful!</h2>
              <p className="text-slate-400 text-sm">
                Your employer account has been created. Redirecting you to login...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {error && (
                <div className="bg-red-500/10 border border-red-500/50 rounded-xl p-4 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-red-500 text-sm font-medium">{error}</p>
                </div>
              )}

              <div className="space-y-4">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gold ml-2">Your Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="John Doe"
                    className="w-full bg-[#0B132B] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/5 outline-none transition-all"
                    value={formData.full_name}
                    onChange={(e) => setFormData({...formData, full_name: e.target.value})}
                  />
                </div>

                {/* Company Name (Mapped to job_title in DB for simplicity, or we can use full_name context) */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gold ml-2">Company Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Acme Corp"
                    className="w-full bg-[#0B132B] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/5 outline-none transition-all"
                    value={formData.job_title} // Re-using job_title field to store company name safely
                    onChange={(e) => setFormData({...formData, job_title: e.target.value})}
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gold ml-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="555-0123-4567"
                    className="w-full bg-[#0B132B] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/5 outline-none transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gold ml-2">Work Email *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="you@company.com"
                    className="w-full bg-[#0B132B] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/5 outline-none transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gold ml-2">Password *</label>
                  <input 
                    type="password" 
                    required 
                    placeholder="Create a strong password"
                    className="w-full bg-[#0B132B] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/5 outline-none transition-all"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                  />
                </div>
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="btn-rotating-border group w-full py-5 bg-gold text-navy-dark hover:bg-gold-hover font-black rounded-xl transition-all shadow-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 uppercase tracking-widest text-xs btn-auto-sheen"
                >
                  {loading ? 'Creating Account...' : 'Create Employer Account'}
                  {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                </button>
              </div>
            </form>
          )}

        </div>

        <div className="mt-8 text-center">
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
