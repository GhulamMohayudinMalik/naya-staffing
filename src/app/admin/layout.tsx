"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import api from '@/lib/api';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
        return;
      }
      try {
        const { data } = await api.get('/users/me', {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (data.role !== 'admin') {
          router.push('/');
        } else {
          setIsAuthorized(true);
        }
      } catch (err) {
        localStorage.removeItem('token');
        router.push('/login');
      }
    };
    checkAuth();
  }, [router]);

  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-[#040814] flex items-center justify-center">
        <div className="text-gold font-bold uppercase tracking-widest text-sm animate-pulse">
          Authenticating...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#040814] flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-[#0B132B]/95 border-r border-white/10 sticky top-0 h-screen flex flex-col z-40 hidden md:flex">
        <div className="p-6 border-b border-white/10">
          <Link href="/" className="group flex items-center shrink-0">
            <Image 
              src="/images/logo.jpeg" 
              alt="NAYA Staffing Logo" 
              width={200} 
              height={50} 
              className="h-10 lg:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 rounded-lg"
              priority
            />
          </Link>
          <div className="mt-4">
            <p className="text-[10px] font-black uppercase tracking-widest text-gold">Command Center</p>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <Link href="/admin" className="block px-4 py-3 rounded-xl text-slate-400 hover:text-gold hover:bg-white/5 font-bold text-xs uppercase tracking-widest transition-all">Dashboard</Link>
          <Link href="/admin/users" className="block px-4 py-3 rounded-xl text-slate-400 hover:text-gold hover:bg-white/5 font-bold text-xs uppercase tracking-widest transition-all">Users</Link>
          <Link href="/admin/applications" className="block px-4 py-3 rounded-xl text-slate-400 hover:text-gold hover:bg-white/5 font-bold text-xs uppercase tracking-widest transition-all">Applications (ATS)</Link>
          <Link href="/admin/jobs" className="block px-4 py-3 rounded-xl text-slate-400 hover:text-gold hover:bg-white/5 font-bold text-xs uppercase tracking-widest transition-all">Jobs</Link>
          <Link href="/admin/content" className="block px-4 py-3 rounded-xl text-slate-400 hover:text-gold hover:bg-white/5 font-bold text-xs uppercase tracking-widest transition-all">Content CMS</Link>
          <Link href="/admin/inquiries" className="block px-4 py-3 rounded-xl text-slate-400 hover:text-gold hover:bg-white/5 font-bold text-xs uppercase tracking-widest transition-all">Inquiries</Link>
          <Link href="/admin/support" className="block px-4 py-3 rounded-xl text-slate-400 hover:text-gold hover:bg-white/5 font-bold text-xs uppercase tracking-widest transition-all">Support Tickets</Link>
        </nav>
        
        <div className="p-4 border-t border-white/10">
          <button 
            onClick={() => {
              localStorage.removeItem('token');
              router.push('/login');
            }}
            className="w-full bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 px-4 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 overflow-x-hidden">
        {/* Mobile Header (visible only on small screens) */}
        <header className="md:hidden flex justify-between items-center bg-[#0B132B]/95 p-4 rounded-2xl border border-white/10 mb-8 sticky top-4 z-40">
          <Image src="/images/logo.jpeg" alt="Logo" width={120} height={30} className="rounded" />
          <button 
            onClick={() => {
              localStorage.removeItem('token');
              router.push('/login');
            }}
            className="text-red-400 text-xs font-bold uppercase"
          >
            Logout
          </button>
        </header>
        
        {children}
      </main>
    </div>
  );
}
