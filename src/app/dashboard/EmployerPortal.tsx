'use client';
import { useEffect, useState } from 'react';
import api from '@/lib/api';

export default function EmployerPortal() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    company: '',
    location: '',
    requirements: '',
    job_type: 'Full-time'
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitMsg, setSubmitMsg] = useState('');

  useEffect(() => {
    fetchMyJobs();
  }, []);

  const fetchMyJobs = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await api.get('/jobs/my-jobs', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setJobs(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingJobs(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMsg('');
    try {
      const token = localStorage.getItem('token');
      const res = await api.post('/jobs/', formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSubmitMsg('Job posted successfully! Pending admin approval.');
      setJobs([...jobs, res.data]);
      setFormData({
        title: '',
        description: '',
        company: '',
        location: '',
        requirements: '',
        job_type: 'Full-time'
      });
    } catch (err) {
      console.error(err);
      setSubmitMsg('Failed to post job.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-black text-white tracking-tighter">Employer Portal</h2>
        <p className="text-slate-400 mt-2 font-medium">Post new job requisitions and track their approval status.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Post a Job Form */}
        <div className="bg-[#0B132B] border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
          <h3 className="text-[10px] font-black text-white uppercase tracking-widest opacity-60 mb-6">Post a New Job</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
            <div>
              <label className="block text-[10px] font-black text-white uppercase tracking-widest mb-2">Job Title</label>
              <input 
                type="text" 
                required
                value={formData.title}
                onChange={e => setFormData({...formData, title: e.target.value})}
                className="w-full bg-[#040814] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors text-sm"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-black text-white uppercase tracking-widest mb-2">Company</label>
                <input 
                  type="text" 
                  value={formData.company}
                  onChange={e => setFormData({...formData, company: e.target.value})}
                  className="w-full bg-[#040814] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-white uppercase tracking-widest mb-2">Location</label>
                <input 
                  type="text" 
                  value={formData.location}
                  onChange={e => setFormData({...formData, location: e.target.value})}
                  className="w-full bg-[#040814] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-black text-white uppercase tracking-widest mb-2">Job Type</label>
              <select 
                value={formData.job_type}
                onChange={e => setFormData({...formData, job_type: e.target.value})}
                className="w-full bg-[#040814] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors text-sm"
              >
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-black text-white uppercase tracking-widest mb-2">Description</label>
              <textarea 
                required
                value={formData.description}
                onChange={e => setFormData({...formData, description: e.target.value})}
                className="w-full bg-[#040814] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors text-sm h-24"
              />
            </div>

            <button 
              type="submit" 
              disabled={submitting}
              className="w-full bg-gold text-navy-dark hover:bg-gold-hover px-4 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all disabled:opacity-50 btn-sheen shadow-lg shadow-gold/20 mt-4"
            >
              {submitting ? 'Submitting...' : 'Submit Requisition'}
            </button>

            {submitMsg && (
              <p className={`text-xs font-bold text-center mt-2 ${submitMsg.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
                {submitMsg}
              </p>
            )}
          </form>
        </div>

        {/* My Posted Jobs Table */}
        <div className="bg-[#0B132B] border border-white/10 rounded-3xl p-8 shadow-2xl">
          <h3 className="text-[10px] font-black text-white uppercase tracking-widest opacity-60 mb-6">My Job Postings</h3>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-white/10">
              <thead>
                <tr>
                  <th className="py-3 text-left text-[10px] font-black text-white uppercase tracking-widest">Job Title</th>
                  <th className="py-3 text-right text-[10px] font-black text-white uppercase tracking-widest">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {loadingJobs ? (
                  <tr>
                    <td colSpan={2} className="py-6 text-center text-sm font-bold text-slate-400 animate-pulse">Loading jobs...</td>
                  </tr>
                ) : jobs.length === 0 ? (
                  <tr>
                    <td colSpan={2} className="py-12 text-center text-sm font-bold text-slate-500">You haven't posted any jobs yet.</td>
                  </tr>
                ) : (
                  jobs.map((job) => (
                    <tr key={job.id} className="hover:bg-white/5 transition-colors">
                      <td className="py-4">
                        <div className="text-sm font-bold text-white">{job.title}</div>
                        <div className="text-xs text-slate-400">{job.location}</div>
                      </td>
                      <td className="py-4 text-right">
                        {job.is_approved ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-green-500/10 text-green-400 border border-green-500/20">
                            Approved
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
                            Pending
                          </span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
