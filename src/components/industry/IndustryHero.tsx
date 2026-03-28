import React from 'react';
import Link from 'next/link';
import VideoBackground from '@/components/VideoBackground';

interface IndustryHeroProps {
  title: string;
  tagline: string;
  description: string;
  breadcrumbs: { name: string; href: string }[];
}

export default function IndustryHero({ title, tagline, description, breadcrumbs }: IndustryHeroProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-navy-dark">
      {/* Immersive Video Background */}
      <VideoBackground 
        src="/videos/hero.mp4" 
        overlayOpacity="bg-navy-dark/80"
      />

      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 blur-[120px] rounded-full animate-pulse transition-all duration-5000"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-navy-light/20 blur-[150px] rounded-full animate-float transition-all duration-7000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumbs */}
        <nav className="flex mb-8 items-center space-x-2 text-sm font-semibold tracking-wider uppercase text-gray-500">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb.href}>
              <span className="text-gray-700">/</span>
              {idx === breadcrumbs.length - 1 ? (
                <span className="text-gold">{crumb.name}</span>
              ) : (
                <Link href={crumb.href} className="hover:text-gold transition-colors">{crumb.name}</Link>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Hero Content */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold">{tagline}</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter mb-8 leading-[1.1]">
            {title}
          </h1>
          
          <p className="text-xl text-gray-400 font-medium leading-relaxed mb-12 max-w-2xl">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact-us" 
              className="px-8 py-4 bg-gold hover:bg-gold-hover text-navy-dark font-black uppercase tracking-widest text-sm rounded-xl transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] text-center flex items-center justify-center gap-2"
            >
              Partner With Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
