"use client";

import { useEffect, useState } from 'react';
import api from '@/lib/api';

export default function AdminUsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await api.get('/admin/users');
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const verifyUser = async (id: number) => {
    try {
      await api.put(`/admin/users/${id}/verify`);
      fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  const suspendUser = async (id: number) => {
    if (!confirm("Are you sure you want to suspend this user?")) return;
    try {
      await api.put(`/admin/users/${id}/suspend`);
      fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  const filteredUsers = filter ? users.filter(u => u.role === filter) : users;

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tighter">User Directory</h2>
          <p className="text-slate-400 mt-2 font-medium">Manage job seekers and employers.</p>
        </div>
        <select 
          className="bg-[#0B132B] text-white border border-white/10 rounded-xl px-4 py-2"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All Users</option>
          <option value="job_seeker">Job Seekers</option>
          <option value="employer">Employers</option>
        </select>
      </div>

      {loading ? (
        <p className="text-white">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map(user => (
            <div key={user.id} className="bg-[#0B132B] border border-white/10 rounded-3xl p-6 relative">
              <div className="flex justify-between items-start mb-4">
                <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${user.role === 'employer' ? 'bg-blue-500/10 text-blue-400' : 'bg-green-500/10 text-green-400'}`}>
                  {user.role}
                </span>
                {user.is_verified && <span className="text-[10px] font-black uppercase text-gold bg-gold/10 px-2 py-1 rounded">Verified</span>}
              </div>
              <h3 className="text-xl font-bold text-white">{user.full_name || 'No Name'}</h3>
              <p className="text-sm text-slate-400">{user.email}</p>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {!user.is_verified && (
                  <button onClick={() => verifyUser(user.id)} className="text-xs bg-white/5 hover:bg-white/10 text-white px-3 py-1.5 rounded transition-colors">Verify</button>
                )}
                <button onClick={() => suspendUser(user.id)} className="text-xs bg-red-500/10 hover:bg-red-500/20 text-red-400 px-3 py-1.5 rounded transition-colors">Suspend</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
