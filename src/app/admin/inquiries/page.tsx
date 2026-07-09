"use client";

import { useEffect, useState } from 'react';
import api from '@/lib/api';

export default function InquiriesAdminPage() {
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const res = await api.get('/inquiries/?inquiry_type=client_inquiry');
      setInquiries(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const resolveInquiry = async (id: number) => {
    try {
      await api.put(`/inquiries/${id}/resolve`);
      fetchInquiries();
    } catch (err) {
      console.error(err);
      alert('Failed to resolve inquiry');
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-black text-white tracking-tighter">Client Inquiries</h2>
        <p className="text-slate-400 mt-2 font-medium">Review and resolve consultation requests.</p>
      </div>

      {loading ? (
        <p className="text-white">Loading...</p>
      ) : inquiries.length === 0 ? (
        <div className="bg-[#0B132B] border border-white/10 rounded-3xl p-12 text-center">
          <p className="text-slate-400">No client inquiries found.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {inquiries.map((inquiry) => (
            <div key={inquiry.id} className="bg-[#0B132B] border border-white/10 rounded-3xl p-6 relative overflow-hidden">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{inquiry.name} <span className="text-sm font-normal text-slate-400 ml-2">({inquiry.company || 'No Company'})</span></h3>
                  <p className="text-sm text-gold mt-1">{inquiry.email} | {inquiry.phone}</p>
                  <p className="text-slate-300 mt-4 whitespace-pre-wrap text-sm border-l-2 border-white/10 pl-4">{inquiry.message}</p>
                </div>
                <div className="flex flex-col items-end gap-4 shrink-0">
                  <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${inquiry.is_resolved ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                    {inquiry.is_resolved ? 'Resolved' : 'Pending'}
                  </span>
                  {!inquiry.is_resolved && (
                    <button 
                      onClick={() => resolveInquiry(inquiry.id)}
                      className="bg-white/5 hover:bg-gold hover:text-navy-dark text-white border border-white/10 hover:border-gold px-4 py-2 rounded-xl text-xs font-black uppercase transition-all duration-300"
                    >
                      Mark Resolved
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
