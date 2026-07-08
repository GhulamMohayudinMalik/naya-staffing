'use client';
import { useEffect, useState } from 'react';
import api from '@/lib/api';
import JobSeekerPortal from './JobSeekerPortal';
import EmployerPortal from './EmployerPortal';

export default function DashboardPage() {
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await api.get('/users/me', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setRole(res.data.role);
      } catch (err) {
        console.error('Failed to fetch user', err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20 animate-pulse text-gold uppercase tracking-widest text-xs font-black">
        Loading Dashboard...
      </div>
    );
  }

  if (role === 'job_seeker') {
    return <JobSeekerPortal />;
  }

  if (role === 'client') {
    return <EmployerPortal />;
  }

  return (
    <div className="text-center py-20 bg-white/5 border border-white/10 rounded-3xl">
      <h2 className="text-xl font-bold text-white mb-2">Unknown Role</h2>
      <p className="text-slate-400">Please contact support or sign in again.</p>
    </div>
  );
}
