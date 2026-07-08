'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import api from '@/lib/api';

export default function JobSeekerPortal() {
  const [applications, setApplications] = useState<any[]>([]);
  const [loadingApps, setLoadingApps] = useState(true);
  
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadMsg, setUploadMsg] = useState('');

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await api.get('/jobs/my-applications', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setApplications(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingApps(false);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    setUploading(true);
    setUploadMsg('');
    try {
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('file', file);
      await api.post('/users/me/resume', formData, {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      setUploadMsg('Resume uploaded successfully!');
      setFile(null);
    } catch (err) {
      console.error(err);
      setUploadMsg('Failed to upload resume. Ensure it is a PDF.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-black text-white tracking-tighter">Welcome to NAYA Staffing</h2>
        <p className="text-slate-400 mt-2 font-medium">Manage your resume and track your active job applications.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Upload Resume Card */}
        <div className="lg:col-span-1 bg-[#0B132B] border border-white/10 rounded-3xl p-8 h-fit shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
          <h3 className="text-[10px] font-black text-white uppercase tracking-widest opacity-60 mb-6">Your Resume</h3>
          
          <form onSubmit={handleUpload} className="space-y-4 relative z-10">
            <div>
              <label className="block w-full border-2 border-dashed border-white/20 hover:border-gold/50 transition-colors rounded-2xl p-6 text-center cursor-pointer bg-white/5">
                <span className="text-xs font-bold text-slate-300">
                  {file ? file.name : 'Click to select PDF'}
                </span>
                <input 
                  type="file" 
                  accept=".pdf" 
                  className="hidden" 
                  onChange={(e) => e.target.files && setFile(e.target.files[0])}
                />
              </label>
            </div>
            
            <button 
              type="submit" 
              disabled={!file || uploading}
              className="w-full bg-gold text-navy-dark hover:bg-gold-hover px-4 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all disabled:opacity-50 btn-sheen shadow-lg shadow-gold/20"
            >
              {uploading ? 'Uploading...' : 'Upload PDF'}
            </button>
            
            {uploadMsg && (
              <p className={`text-xs font-bold text-center mt-2 ${uploadMsg.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
                {uploadMsg}
              </p>
            )}
          </form>
        </div>

        {/* My Applications Table */}
        <div className="lg:col-span-2 bg-[#0B132B] border border-white/10 rounded-3xl p-8 shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[10px] font-black text-white uppercase tracking-widest opacity-60">Active Applications</h3>
            <Link href="/job-openings" className="bg-white/5 border border-white/10 hover:border-gold text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-colors hover:text-gold">
              Browse Jobs
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-white/10">
              <thead>
                <tr>
                  <th className="py-3 text-left text-[10px] font-black text-white uppercase tracking-widest">Job ID</th>
                  <th className="py-3 text-left text-[10px] font-black text-white uppercase tracking-widest">Status</th>
                  <th className="py-3 text-right text-[10px] font-black text-white uppercase tracking-widest">Date Applied</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {loadingApps ? (
                  <tr>
                    <td colSpan={3} className="py-6 text-center text-sm font-bold text-slate-400 animate-pulse">Loading applications...</td>
                  </tr>
                ) : applications.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="py-12 text-center text-sm font-bold text-slate-500">You haven't applied to any jobs yet.</td>
                  </tr>
                ) : (
                  applications.map((app) => (
                    <tr key={app.id} className="hover:bg-white/5 transition-colors">
                      <td className="py-4 text-sm font-bold text-white">Job #{app.job_id}</td>
                      <td className="py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          {app.status || 'Under Review'}
                        </span>
                      </td>
                      <td className="py-4 text-right text-xs text-slate-400">
                        {new Date().toLocaleDateString()} {/* Add actual date if backend provides it */}
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
