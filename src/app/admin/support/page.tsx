"use client";

import { useEffect, useState } from 'react';
import api from '@/lib/api';

export default function SupportAdminPage() {
  const [tickets, setTickets] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const res = await api.get('/inquiries/?inquiry_type=support_ticket');
      setTickets(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const resolveTicket = async (id: number) => {
    try {
      await api.put(`/inquiries/${id}/resolve`);
      fetchTickets();
    } catch (err) {
      console.error(err);
      alert('Failed to resolve ticket');
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-black text-white tracking-tighter">Support Tickets</h2>
        <p className="text-slate-400 mt-2 font-medium">Review and resolve candidate and employer support requests.</p>
      </div>

      {loading ? (
        <p className="text-white">Loading...</p>
      ) : tickets.length === 0 ? (
        <div className="bg-[#0B132B] border border-white/10 rounded-3xl p-12 text-center">
          <p className="text-slate-400">No support tickets found.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="bg-[#0B132B] border border-white/10 rounded-3xl p-6 relative overflow-hidden">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{ticket.name}</h3>
                  <p className="text-sm text-gold mt-1">{ticket.email}</p>
                  <p className="text-slate-300 mt-4 whitespace-pre-wrap text-sm border-l-2 border-white/10 pl-4">{ticket.message}</p>
                </div>
                <div className="flex flex-col items-end gap-4 shrink-0">
                  <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${ticket.is_resolved ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                    {ticket.is_resolved ? 'Resolved' : 'Open'}
                  </span>
                  {!ticket.is_resolved && (
                    <button 
                      onClick={() => resolveTicket(ticket.id)}
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
