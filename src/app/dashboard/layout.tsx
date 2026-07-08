"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import api from '@/lib/api';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [role, setRole] = useState('');

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
        
        // Admins shouldn't use this dashboard
        if (data.role === 'admin') {
          router.push('/admin');
        } else {
          setRole(data.role);
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
    <div className="min-h-screen bg-[#040814] flex flex-col">
      <header className="bg-[#0B132B]/95 backdrop-blur-2xl border-b border-white/10 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
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
          <nav className="flex items-center space-x-2 md:space-x-6 overflow-x-auto">
            <span className="text-white text-sm font-bold opacity-50 hidden sm:inline-block">
              {role === 'client' ? 'Employer Portal' : 'Candidate Portal'}
            </span>
            <button 
              onClick={() => {
                localStorage.removeItem('token');
                router.push('/login');
              }}
              className="text-red-400 hover:text-red-300 font-bold text-xs uppercase tracking-widest transition-colors ml-4 whitespace-nowrap bg-red-500/10 px-4 py-2 rounded-lg border border-red-500/20"
            >
              Logout
            </button>
          </nav>
        </div>
      </header>
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {children}
      </main>
    </div>
  );
}
