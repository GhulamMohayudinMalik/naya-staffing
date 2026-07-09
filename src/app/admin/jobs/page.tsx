"use client";

import { useState, useEffect } from 'react';
import api from '@/lib/api';

export default function JobsAdmin() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    country: '',
    work_type: 'Remote',
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const token = localStorage.getItem('token');
      // For admin we want all jobs, let's assume GET /jobs/ works or GET /admin/jobs (I didn't make a GET /admin/jobs, I made GET /admin/jobs/pending).
      // Let's just fetch from the public endpoint for now, it returns all approved jobs.
      // And we can fetch pending jobs too.
      const res = await api.get('/jobs/');
      const pendingRes = await api.get('/admin/jobs/pending', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setJobs([...pendingRes.data, ...res.data]);
    } catch (err) {
      console.error(err);
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
      fetchJobs();
    } catch (err) {
      console.error(err);
    }
  };

  const handlePostJob = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await api.post('/admin/jobs', formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setShowForm(false);
      setFormData({ title: '', description: '', country: '', work_type: 'Remote' });
      fetchJobs();
    } catch (err) {
      console.error(err);
      alert('Failed to post job');
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tighter">Job Board Management</h2>
          <p className="text-slate-400 mt-2 font-medium">Post internal jobs, edit listings, and approve employer posts.</p>
        </div>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="bg-gold hover:bg-gold-hover text-navy-dark px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-gold/20"
        >
          {showForm ? 'Cancel' : '+ Post New Job'}
        </button>
      </div>

      {showForm && (
        <div className="bg-[#0B132B] border border-white/10 rounded-3xl p-8 mb-8 shadow-2xl">
          <h3 className="text-xl font-bold text-white mb-6">Post Internal Job</h3>
          <form onSubmit={handlePostJob} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Job Title" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
              <input type="text" placeholder="Location/Country" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white" value={formData.country} onChange={e => setFormData({...formData, country: e.target.value})} />
            </div>
            <select className="w-full bg-[#0a1125] border border-white/10 rounded-xl px-4 py-3 text-white" value={formData.work_type} onChange={e => setFormData({...formData, work_type: e.target.value})}>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="On-site">On-site</option>
            </select>
            <textarea placeholder="Job Description..." required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white resize-none" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
            <button type="submit" className="w-full bg-gold hover:bg-gold-hover text-navy-dark px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all">Publish Job</button>
          </form>
        </div>
      )}

      {loading ? (
        <p className="text-white">Loading...</p>
      ) : (
        <div className="grid gap-4">
          {jobs.map((job) => (
            <div key={job.id} className="bg-[#0B132B] border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-white">{job.title}</h3>
                  {job.is_approved ? (
                    <span className="text-[10px] font-black uppercase text-green-400 bg-green-500/10 px-2 py-0.5 rounded">Active</span>
                  ) : (
                    <span className="text-[10px] font-black uppercase text-yellow-500 bg-yellow-500/10 px-2 py-0.5 rounded">Pending</span>
                  )}
                </div>
                <p className="text-sm text-slate-400">{job.work_type} • {job.country}</p>
              </div>
              
              <div className="flex gap-2">
                {!job.is_approved && (
                  <button onClick={() => handleApprove(job.id)} className="bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-lg text-xs font-bold uppercase transition-colors">Approve</button>
                )}
                {/* Edit could open a modal in a real app, keeping simple for now */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
