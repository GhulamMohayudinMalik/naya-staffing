'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  // In a real app, we would verify the admin token here
  // and fetch dashboard stats from the backend.
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-black text-white tracking-tighter">System Overview</h2>
        <p className="text-slate-400 mt-2 font-medium">Manage job approvals and browse the global resume database.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="bg-[#0B132B] border border-white/10 rounded-3xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
          <h3 className="text-[10px] font-black text-white uppercase tracking-widest opacity-60">Pending Job Approvals</h3>
          <p className="text-4xl font-black text-white mt-4 tracking-tighter">Action Needed</p>
          <p className="text-slate-400 text-sm mt-2 font-medium">Review and approve new job postings from clients.</p>
          <Link href="/admin/jobs" className="mt-8 bg-white/5 hover:bg-gold hover:text-navy-dark text-white border border-white/10 hover:border-gold px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest inline-flex items-center gap-2 transition-all duration-300">
            Review Jobs <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="bg-[#0B132B] border border-white/10 rounded-3xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
          <h3 className="text-[10px] font-black text-white uppercase tracking-widest opacity-60">Resume Database</h3>
          <p className="text-4xl font-black text-white mt-4 tracking-tighter">Global Talent</p>
          <p className="text-slate-400 text-sm mt-2 font-medium">Search, filter, and download candidates for open roles.</p>
          <Link href="/admin/resumes" className="mt-8 bg-white/5 hover:bg-gold hover:text-navy-dark text-white border border-white/10 hover:border-gold px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest inline-flex items-center gap-2 transition-all duration-300">
            Search Resumes <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
