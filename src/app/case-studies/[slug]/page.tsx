"use client";

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import api from '@/lib/api';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Briefcase } from 'lucide-react';

export default function CaseStudyReadingPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!slug) return;
    const fetchPost = async () => {
      try {
        const res = await api.get(`/admin/content/slug/${slug}`);
        setPost(res.data);
      } catch (err: any) {
        if (err.response?.status === 404) {
          setError("Case study not found.");
        } else {
          setError("Failed to load case study.");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  if (loading) {
    return <div className="min-h-screen bg-navy-dark text-white flex items-center justify-center text-xl animate-pulse">Loading Case Study...</div>;
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-navy-dark text-white flex flex-col items-center justify-center space-y-6">
        <h1 className="text-3xl font-black">{error}</h1>
        <Link href="/case-studies" className="text-gold uppercase tracking-widest text-xs hover:text-white transition-colors">
          &larr; Return to Case Studies
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy-dark flex flex-col font-sans selection:bg-gold selection:text-navy-dark">
      <main className="max-w-4xl mx-auto py-32 px-4 sm:px-6 lg:px-8 w-full">
        <Link href="/case-studies" className="inline-flex items-center gap-3 text-gold hover:text-white transition-colors uppercase tracking-[0.3em] text-xs font-black mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Case Studies
        </Link>
        
        <article className="space-y-12">
          <header className="space-y-8">
            <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-2 shadow-xl backdrop-blur-md btn-auto-sheen border border-white/5">
              Case Study
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-[1.1] uppercase">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 xl:gap-10 text-xs font-black text-slate-500 uppercase tracking-[0.4em] border-y border-white/5 py-6">
              <span className="flex items-center gap-4">
                <Briefcase className="w-4 h-4 text-gold/50" />
                <span className="text-white opacity-80">NAYA Staffing</span>
              </span>
              <span className="flex items-center gap-4">
                <Calendar className="w-4 h-4 text-gold/50" />
                <span className="text-white opacity-80">{new Date(post.created_at).toLocaleDateString()}</span>
              </span>
            </div>
          </header>

          {/* Featured Image Placeholder */}
          <div className="w-full aspect-video rounded-3xl overflow-hidden glass-panel border-white/10 shadow-2xl relative">
            <img 
              src={post.image_url || "https://breezyrecruit.com/wp-content/uploads/2025/05/1-4.jpg"} 
              alt={post.title} 
              className="w-full h-full object-cover opacity-80"
            />
          </div>

          <div className="text-slate-300 text-lg lg:text-xl leading-relaxed font-medium space-y-6">
            <ReactMarkdown
              components={{
                h1: ({node, ...props}) => <h1 className="text-4xl font-black text-white mt-12 mb-6" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-3xl font-black text-white mt-10 mb-5" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-2xl font-black text-white mt-8 mb-4" {...props} />,
                p: ({node, ...props}) => <p className="mb-6 leading-loose" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-6 space-y-2 text-gold/80" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-gold/80" {...props} />,
                li: ({node, ...props}) => <li className="text-slate-300" {...props} />,
                blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-gold pl-6 py-2 my-8 italic text-slate-200 bg-white/5 rounded-r-xl" {...props} />,
                a: ({node, ...props}) => <a className="text-gold hover:text-white underline decoration-gold/30 underline-offset-4" {...props} />
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>
    </div>
  );
}
