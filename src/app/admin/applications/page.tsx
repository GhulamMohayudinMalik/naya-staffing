"use client";

import { useEffect, useState } from 'react';
import api from '@/lib/api';

export default function AdminApplicationsPage() {
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedApp, setSelectedApp] = useState<any>(null);
  const [notes, setNotes] = useState('');

  useEffect(() => {
    fetchApps();
  }, []);

  const fetchApps = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await api.get('/admin/applications', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setApplications(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: number, status: string) => {
    try {
      const token = localStorage.getItem('token');
      await api.put(`/admin/applications/${id}`, { status }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchApps();
    } catch (err) {
      console.error(err);
    }
  };

  const saveNotes = async () => {
    if (!selectedApp) return;
    try {
      const token = localStorage.getItem('token');
      await api.put(`/admin/applications/${selectedApp.id}`, { internal_notes: notes }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSelectedApp({ ...selectedApp, internal_notes: notes });
      fetchApps();
      alert('Notes saved successfully');
    } catch (err) {
      console.error(err);
    }
  };

  const stages = ['applied', 'screening', 'interviewing', 'placed', 'rejected'];

  return (
    <div className="space-y-8 flex flex-col md:flex-row gap-8">
      {/* List Column */}
      <div className="flex-1 space-y-6">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tighter">ATS Pipeline</h2>
          <p className="text-slate-400 mt-2 font-medium">Track candidates through hiring stages.</p>
        </div>

        {loading ? (
          <p className="text-white">Loading...</p>
        ) : (
          <div className="space-y-4">
            {applications.map(app => (
              <div 
                key={app.id} 
                className={`bg-[#0B132B] border ${selectedApp?.id === app.id ? 'border-gold' : 'border-white/10'} rounded-2xl p-4 cursor-pointer hover:border-gold/50 transition-colors`}
                onClick={() => {
                  setSelectedApp(app);
                  setNotes(app.internal_notes || '');
                }}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-white text-lg">Candidate #{app.user_id}</h3>
                  <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded bg-white/10 text-white">{app.status}</span>
                </div>
                <p className="text-sm text-slate-400">Applied for Job #{app.job_id}</p>
              </div>
            ))}
            {applications.length === 0 && <p className="text-slate-400">No applications found.</p>}
          </div>
        )}
      </div>

      {/* Details Column */}
      {selectedApp && (
        <div className="w-full md:w-96 shrink-0 bg-[#0B132B] border border-white/10 rounded-3xl p-6 h-fit sticky top-24">
          <h3 className="text-xl font-bold text-white mb-6">Manage Application</h3>
          
          <div className="space-y-6">
            <div>
              <label className="text-xs font-black uppercase tracking-widest text-gold mb-2 block">Stage</label>
              <select 
                className="w-full bg-[#0a1125] border border-white/10 rounded-xl px-4 py-3 text-white"
                value={selectedApp.status}
                onChange={(e) => updateStatus(selectedApp.id, e.target.value)}
              >
                {stages.map(s => <option key={s} value={s}>{s.toUpperCase()}</option>)}
              </select>
            </div>

            <div>
              <label className="text-xs font-black uppercase tracking-widest text-gold mb-2 block">Internal Notes</label>
              <textarea 
                rows={5}
                className="w-full bg-[#0a1125] border border-white/10 rounded-xl px-4 py-3 text-white resize-none"
                placeholder="Private notes about this candidate..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
              <button 
                onClick={saveNotes}
                className="mt-4 w-full bg-white/5 hover:bg-white/10 text-white px-4 py-3 rounded-xl text-xs font-bold uppercase transition-colors"
              >
                Save Notes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
