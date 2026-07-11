"use client";

import { useEffect, useState } from 'react';
import api from '@/lib/api';

export default function AdminContentPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState<any>(null);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    post_type: 'blog',
    is_published: false,
    image_url: ''
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await api.get('/admin/content', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setPosts(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (editingPost) {
        await api.put(`/admin/content/${editingPost.id}`, formData, {
          headers: { Authorization: `Bearer ${token}` }
        });
      } else {
        await api.post('/admin/content', formData, {
          headers: { Authorization: `Bearer ${token}` }
        });
      }
      setShowForm(false);
      setEditingPost(null);
      setFormData({ title: '', slug: '', content: '', post_type: 'blog', is_published: false, image_url: '' });
      fetchPosts();
    } catch (err) {
      console.error(err);
      alert('Failed to save content');
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const uploadData = new FormData();
    uploadData.append('file', file);
    
    try {
      const token = localStorage.getItem('token');
      const res = await api.post('/admin/content/upload-image', uploadData, {
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      setFormData(prev => ({ ...prev, image_url: api.defaults.baseURL?.replace('/api/v1', '') + res.data.image_url }));
    } catch (err) {
      console.error(err);
      alert('Failed to upload image');
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this post?")) return;
    try {
      const token = localStorage.getItem('token');
      await api.delete(`/admin/content/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchPosts();
    } catch (err) {
      console.error(err);
    }
  };

  const openEdit = (post: any) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      slug: post.slug,
      content: post.content,
      post_type: post.post_type,
      is_published: post.is_published,
      image_url: post.image_url || ''
    });
    setShowForm(true);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-3xl font-black text-white tracking-tighter">Content CMS</h2>
          <p className="text-slate-400 mt-2 font-medium">Manage blogs, insights, and case studies.</p>
        </div>
        <button 
          onClick={() => {
            setEditingPost(null);
            setFormData({ title: '', slug: '', content: '', post_type: 'blog', is_published: false, image_url: '' });
            setShowForm(!showForm);
          }}
          className="bg-gold hover:bg-gold-hover text-navy-dark px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-gold/20"
        >
          {showForm ? 'Cancel' : '+ Create New Post'}
        </button>
      </div>

      {showForm && (
        <div className="bg-[#0B132B] border border-white/10 rounded-3xl p-8 mb-8 shadow-2xl">
          <h3 className="text-xl font-bold text-white mb-6">{editingPost ? 'Edit Post' : 'Create New Post'}</h3>
          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Post Title" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
              <input type="text" placeholder="URL Slug (e.g. my-new-post)" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white" value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value})} />
            </div>
            <div className="flex gap-4 items-center bg-[#0a1125] border border-white/10 rounded-xl px-4 py-3">
              <select className="bg-transparent text-white outline-none flex-1" value={formData.post_type} onChange={e => setFormData({...formData, post_type: e.target.value})}>
                <option className="bg-[#0B132B] text-white" value="blog">Blog / Insight</option>
                <option className="bg-[#0B132B] text-white" value="case_study">Case Study</option>
              </select>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="published" checked={formData.is_published} onChange={e => setFormData({...formData, is_published: e.target.checked})} className="accent-gold w-4 h-4" />
                <label htmlFor="published" className="text-xs font-bold text-white uppercase tracking-widest">Published</label>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <input type="text" placeholder="Image URL (Paste link or upload)" className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white" value={formData.image_url} onChange={e => setFormData({...formData, image_url: e.target.value})} />
              <label className="cursor-pointer bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all text-center whitespace-nowrap">
                Upload File
                <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
              </label>
            </div>
            <textarea placeholder="Write your content here (Markdown or HTML)..." required rows={10} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white resize-y font-mono text-sm" value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} />
            <button type="submit" className="w-full bg-gold hover:bg-gold-hover text-navy-dark px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all">
              {editingPost ? 'Update Post' : 'Publish Post'}
            </button>
          </form>
        </div>
      )}

      {loading ? (
        <p className="text-white">Loading...</p>
      ) : (
        <div className="grid gap-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-[#0B132B] border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-white">{post.title}</h3>
                  {post.is_published ? (
                    <span className="text-[10px] font-black uppercase text-green-400 bg-green-500/10 px-2 py-0.5 rounded">Live</span>
                  ) : (
                    <span className="text-[10px] font-black uppercase text-yellow-500 bg-yellow-500/10 px-2 py-0.5 rounded">Draft</span>
                  )}
                  <span className="text-[10px] font-black uppercase text-white bg-white/10 px-2 py-0.5 rounded">{post.post_type}</span>
                </div>
                <p className="text-sm text-slate-400">/{post.slug}</p>
              </div>
              
              <div className="flex gap-2">
                <button onClick={() => openEdit(post)} className="bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-lg text-xs font-bold uppercase transition-colors">Edit</button>
                <button onClick={() => handleDelete(post.id)} className="bg-red-500/10 hover:bg-red-500/20 text-red-400 px-4 py-2 rounded-lg text-xs font-bold uppercase transition-colors">Delete</button>
              </div>
            </div>
          ))}
          {posts.length === 0 && <p className="text-slate-400">No content found.</p>}
        </div>
      )}
    </div>
  );
}
