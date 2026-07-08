'use client';
import { useState } from 'react';
import api from '@/lib/api';

export default function ResumesAdmin() {
  const [title, setTitle] = useState('');
  const [country, setCountry] = useState('');
  const [workType, setWorkType] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSearched(true);
    try {
      const token = localStorage.getItem('token');
      const params = new URLSearchParams();
      if (title) params.append('title', title);
      if (country) params.append('country', country);
      if (workType) params.append('work_type', workType);

      const res = await api.get(`/admin/resumes/search?${params.toString()}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setResults(res.data);
    } catch (err) {
      console.error(err);
      alert('Failed to search resumes.');
    } finally {
      setLoading(false);
    }
  };

  const handleBulkDownload = async () => {
    if (results.length === 0) return alert('No results to download.');
    setDownloading(true);
    try {
      const token = localStorage.getItem('token');
      const params = new URLSearchParams();
      if (title) params.append('title', title);
      if (country) params.append('country', country);
      if (workType) params.append('work_type', workType);

      const res = await api.get(`/admin/resumes/download-bulk?${params.toString()}`, {
        headers: { Authorization: `Bearer ${token}` },
        responseType: 'blob'
      });
      
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'resumes_export.zip');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error(err);
      alert('Failed to download resumes zip.');
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tighter">Resume Database</h2>
          <p className="text-slate-400 mt-2 font-medium">Search the global candidate pool by title, country, and work type.</p>
        </div>
        <button 
          onClick={handleBulkDownload}
          disabled={downloading || results.length === 0}
          className="bg-gold text-navy-dark hover:bg-gold-hover px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all btn-sheen shadow-lg shadow-gold/20 disabled:opacity-50 flex items-center gap-2"
        >
          {downloading ? 'Zipping...' : 'Download All Matching (ZIP)'}
        </button>
      </div>

      <div className="bg-[#0B132B] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <label className="block text-[10px] font-black text-white uppercase tracking-widest mb-2">Job Title</label>
            <input 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Engineer"
              className="w-full bg-[#040814] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors text-sm"
            />
          </div>
          <div>
            <label className="block text-[10px] font-black text-white uppercase tracking-widest mb-2">Country</label>
            <input 
              type="text" 
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="e.g. USA"
              className="w-full bg-[#040814] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors text-sm"
            />
          </div>
          <div>
            <label className="block text-[10px] font-black text-white uppercase tracking-widest mb-2">Work Type</label>
            <select 
              value={workType}
              onChange={(e) => setWorkType(e.target.value)}
              className="w-full bg-[#040814] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors text-sm"
            >
              <option value="">Any</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="On-site">On-site</option>
            </select>
          </div>
          <div className="flex items-end">
            <button type="submit" disabled={loading} className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/10 px-4 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all">
              {loading ? 'Searching...' : 'Search Candidates'}
            </button>
          </div>
        </form>
      </div>

      <div className="space-y-4">
        {searched && !loading && results.length === 0 && (
          <div className="text-center py-12 bg-white/5 border border-white/10 rounded-3xl">
            <p className="text-slate-400 font-bold">No candidates found matching your filters.</p>
          </div>
        )}

        {results.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((user) => (
              <div key={user.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-gold/30 transition-colors group">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-black text-white">{user.full_name}</h3>
                    <p className="text-gold text-sm font-bold">{user.job_title}</p>
                  </div>
                  <span className="bg-white/10 text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded">
                    {user.country}
                  </span>
                </div>
                
                <div className="space-y-2 mb-6">
                  <p className="text-xs text-slate-400"><span className="text-white font-bold">Type:</span> {user.work_type_preference}</p>
                  <p className="text-xs text-slate-400"><span className="text-white font-bold">Email:</span> {user.email}</p>
                  {user.resume_url && (
                    <p className="text-xs text-green-400 font-bold mt-2">Resume Attached</p>
                  )}
                </div>

                {user.resume_url ? (
                  <a 
                    href={`http://localhost:8000${user.resume_url}`} 
                    target="_blank" 
                    rel="noreferrer"
                    className="block w-full text-center bg-white/5 hover:bg-white/10 border border-white/10 text-white py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-colors"
                  >
                    View Resume
                  </a>
                ) : (
                  <button disabled className="w-full bg-black/20 text-slate-600 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest cursor-not-allowed border border-white/5">
                    No Resume
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
