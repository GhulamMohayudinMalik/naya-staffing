'use client';
import { useState, useEffect } from 'react';
import api from '@/lib/api';

export default function SettingsPage() {
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  
  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    password: '',
    confirm_password: ''
  });

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await api.get('/users/me', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setFormData({
        ...formData,
        full_name: res.data.full_name || '',
        phone: res.data.phone || '',
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password && formData.password !== formData.confirm_password) {
      setMessage('Passwords do not match.');
      return;
    }
    
    setSubmitting(true);
    setMessage('');
    
    try {
      const token = localStorage.getItem('token');
      const payload: any = {
        full_name: formData.full_name,
        phone: formData.phone,
      };
      
      if (formData.password) {
        payload.password = formData.password;
      }

      await api.put('/users/me', payload, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      setMessage('Profile updated successfully!');
      setFormData({ ...formData, password: '', confirm_password: '' });
    } catch (err) {
      console.error(err);
      setMessage('Failed to update profile.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div className="text-white animate-pulse">Loading settings...</div>;

  return (
    <div className="space-y-8 max-w-2xl">
      <div>
        <h2 className="text-3xl font-black text-white tracking-tighter">Profile Settings</h2>
        <p className="text-slate-400 mt-2 font-medium">Update your personal information and account security.</p>
      </div>

      <div className="bg-[#0B132B] border border-white/10 rounded-3xl p-8 relative overflow-hidden">
        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          
          <div>
            <label className="block text-[10px] font-black text-white uppercase tracking-widest mb-2">Full Name</label>
            <input 
              type="text" 
              value={formData.full_name}
              onChange={e => setFormData({...formData, full_name: e.target.value})}
              className="w-full bg-[#040814] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors text-sm"
            />
          </div>

          <div>
            <label className="block text-[10px] font-black text-white uppercase tracking-widest mb-2">Phone Number</label>
            <input 
              type="text" 
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
              className="w-full bg-[#040814] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors text-sm"
            />
          </div>

          <div className="pt-6 border-t border-white/10 mt-6">
            <h3 className="text-sm font-bold text-white mb-4">Change Password</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] font-black text-white uppercase tracking-widest mb-2">New Password (Leave blank to keep)</label>
                <input 
                  type="password" 
                  value={formData.password}
                  onChange={e => setFormData({...formData, password: e.target.value})}
                  className="w-full bg-[#040814] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black text-white uppercase tracking-widest mb-2">Confirm New Password</label>
                <input 
                  type="password" 
                  value={formData.confirm_password}
                  onChange={e => setFormData({...formData, confirm_password: e.target.value})}
                  className="w-full bg-[#040814] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors text-sm"
                />
              </div>
            </div>
          </div>

          <div className="pt-4 flex items-center gap-4">
            <button 
              type="submit" 
              disabled={submitting}
              className="bg-gold text-navy-dark hover:bg-gold-hover px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all disabled:opacity-50 btn-sheen shadow-lg shadow-gold/20"
            >
              {submitting ? 'Saving...' : 'Save Changes'}
            </button>
            {message && (
              <span className={`text-xs font-bold ${message.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
                {message}
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
