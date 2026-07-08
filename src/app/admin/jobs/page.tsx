'use client';
import { useState, useEffect } from 'react';
import api from '@/lib/api';

export default function JobsAdmin() {
  const [pendingJobs, setPendingJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPendingJobs();
  }, []);

  const fetchPendingJobs = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await api.get('/admin/jobs/pending', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setPendingJobs(res.data);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch pending jobs.');
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id: number) => {
    try {
      const token = localStorage.getItem('token');
      await api.put(`/admin/jobs/${id}/approve`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      // Remove from list
      setPendingJobs(pendingJobs.filter(j => j.id !== id));
      alert('Job approved and Job Alerts emailed to candidates successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to approve job.');
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-black text-white tracking-tighter">Job Approvals</h2>
        <p className="text-slate-400 mt-2 font-medium">Review and approve jobs posted by clients. Approving a job triggers alert emails.</p>
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl text-red-400 font-bold">
          {error}
        </div>
      )}

      <div className="bg-[#0B132B] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-white/10">
            <thead className="bg-white/5">
              <tr>
                <th className="px-6 py-4 text-left text-[10px] font-black text-white uppercase tracking-widest">Job Title</th>
                <th className="px-6 py-4 text-left text-[10px] font-black text-white uppercase tracking-widest">Company / Client</th>
                <th className="px-6 py-4 text-left text-[10px] font-black text-white uppercase tracking-widest">Type</th>
                <th className="px-6 py-4 text-left text-[10px] font-black text-white uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-right text-[10px] font-black text-white uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-sm font-bold text-slate-400 animate-pulse">Loading jobs...</td>
                </tr>
              ) : pendingJobs.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-sm font-bold text-slate-500">No pending jobs at the moment.</td>
                </tr>
              ) : (
                pendingJobs.map((job) => (
                  <tr key={job.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div className="text-sm font-bold text-white">{job.title}</div>
                      <div className="text-xs text-slate-400">{job.location}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-slate-300">{job.company || 'Private Client'}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-300">{job.job_type}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap">
                      <button
                        onClick={() => handleApprove(job.id)}
                        className="bg-gold text-navy-dark hover:bg-gold-hover px-4 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all btn-sheen shadow-lg shadow-gold/20"
                      >
                        Approve
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
