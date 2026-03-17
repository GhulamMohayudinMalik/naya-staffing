"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, User, Calendar } from "lucide-react";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const blogs = [
    {
      id: 6000,
      title: "How AI and Data-Driven Talent Sourcing Can Improve Your Hiring Process",
      author: "Breezy Recruit",
      date: "March 5, 2025",
      excerpt: "Did you know bad hires can cost companies big money? Some studies say it can be as much as 30% of the employee’s first-year salary. Finding the right people is tough, with",
      image: "https://breezyrecruit.com/wp-content/uploads/2025/05/Become-a-client-scaled.webp",
      href: "/how-ai-and-data-driven-talent-sourcing-can-improve-your-hiring-process"
    },
    {
      id: 5209,
      title: "How to Use Automation and AI to Improve Volume Hiring in 2025",
      author: "Breezy Recruit",
      date: "February 24, 2025",
      excerpt: "Are you ready for a change? The year 2025 will change how companies find lots of new workers. It’s not just about filling jobs. It’s about getting the best people to stay",
      image: "https://breezyrecruit.com/wp-content/uploads/2025/05/1-4.jpg",
      href: "/how-to-use-automation-and-ai-to-improve-volume-hiring-in-2025"
    },
    {
      id: 5062,
      title: "How Direct Hire Recruiting Saves Your Company Time and Hiring Costs",
      author: "Breezy Recruit",
      date: "February 21, 2025",
      excerpt: "Are you tired of long hiring processes? Do budget overruns stress you out? Direct hire recruiting can be a game-changer. It offers speed, cost savings, and high-quality hires. Direct hire recruiting offers",
      image: "https://breezyrecruit.com/wp-content/uploads/2025/05/1-1.jpg",
      href: "/how-direct-hire-recruiting-saves-your-company-time-and-hiring-costs"
    },
    {
      id: 5015,
      title: "Why Direct Hire Staffing Is the Best Solution for Hard-to-Fill IT Roles",
      author: "Breezy Recruit",
      date: "February 20, 2025",
      excerpt: "Are you tired of seeing open IT jobs linger? It costs you money when these spots stay unfilled for too long. Finding folks with the right tech skills is tough right now.",
      image: "https://breezyrecruit.com/wp-content/uploads/2025/05/benefits-of-recruitment-agency.webp",
      href: "/why-direct-hire-staffing-is-the-best-solution-for-hard-to-fill-it-roles"
    },
    {
      id: 4766,
      title: "How Can IT Staffing Services Help My Business Avoid Project Delays in 2025?",
      author: "Breezy Recruit",
      date: "February 19, 2025",
      excerpt: "Every business leader understands the stress of project delays. A missed deadline can lead to budget overruns, strained client relationships, and a loss of competitive edge. As projects pile up, it becomes",
      image: "https://breezyrecruit.com/wp-content/uploads/2025/02/IT-Staffing-Services.jpg",
      href: "/how-can-it-staffing-services-help-my-business-avoid-project-delays-in-2025"
    }
  ];

  return (
    <div className="bg-white">
      {/* Blog Hero Section - Dark Gradient */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#081120]">
        {/* Background Gradient Overlays */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#081120]/50 via-[#081120] to-[#081120]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex flex-col items-center">
          <div className="w-full md:w-[60%] text-center">
            <h2 className="text-xl md:text-2xl font-bold text-orange-500 uppercase tracking-[0.4em] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              Blogs
            </h2>
            <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
              The News Updates and Posts <br />
              <span className="text-white/80">from Breezy Recruit</span>
            </h1>
            <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full animate-in zoom-in duration-1000 delay-300"></div>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar Row */}
      <section className="py-12 px-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Labels */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#081120]">Filter Blogs</h2>
            <Link href="/blog" className="text-xl font-bold text-orange-500 hover:text-[#081120] transition-colors">
              Blogs (30)
            </Link>
          </div>

          {/* Right: Search */}
          <div className="w-full md:w-[400px]">
            <form className="relative group">
              <input 
                type="text" 
                placeholder="Search" 
                className="w-full pl-6 pr-14 py-4 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-700 font-medium"
              />
              <button className="absolute right-0 top-0 bottom-0 px-5 text-gray-400 group-hover:text-orange-500 transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Blog Posts List - thumbnail-left alignment */}
      <main className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {blogs.map((blog) => (
            <article key={blog.id} className="flex flex-col md:flex-row gap-8 lg:gap-12 group">
              {/* Left Thumbnail */}
              <div className="md:w-[400px] lg:w-[450px] flex-shrink-0">
                <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden shadow-sm">
                  <Link href={blog.href}>
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                  </Link>
                </div>
              </div>

              {/* Right Content */}
              <div className="flex flex-col justify-center py-2">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#081120] mb-4 group-hover:text-orange-500 transition-colors leading-tight">
                  <Link href={blog.href}>{blog.title}</Link>
                </h3>
                
                {/* Meta Data */}
                <div className="flex items-center gap-6 text-sm font-bold text-gray-400 mb-6 uppercase tracking-wider">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4 text-orange-500" />
                    {blog.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-orange-500" />
                    {blog.date}
                  </span>
                </div>

                <div className="text-gray-600 mb-8 max-w-3xl text-base md:text-lg leading-relaxed">
                  <p>{blog.excerpt}</p>
                </div>

                <Link 
                  href={blog.href} 
                  className="inline-flex items-center gap-2 font-extrabold text-orange-500 hover:text-[#081120] transition-colors uppercase tracking-[0.2em] text-sm"
                >
                  Read More »
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button - Center Aligned */}
        <div className="mt-24 text-center">
          <button className="relative inline-flex items-center justify-center px-12 py-5 bg-[#081120] rounded-2xl text-white font-extrabold uppercase tracking-widest hover:bg-orange-500 transition-all shadow-xl group">
            <span className="flex items-center gap-3">
              Load More
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </main>

      {/* Hero CTA Buttons - Same as Homepage */}
      <section className="bg-white pb-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 px-4">
          <Link 
            href="/why-choose-us" 
            className="flex-1 group relative overflow-hidden py-16 px-10 transition-all bg-orange-500 hover:bg-[#081120] rounded-[40px]"
          >
            <div className="flex items-center gap-8">
              <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:scale-110 transition-transform">
                <img src="https://breezyrecruit.com/wp-content/uploads/2024/11/Job-Seekers-150x150.jpg" alt="Job Seekers" className="w-full h-full object-cover" />
              </div>
              <div className="text-white">
                <h3 className="text-3xl font-extrabold mb-1">Job Seekers</h3>
                <p className="text-xl font-medium opacity-90">Looking For Opportunity?</p>
              </div>
            </div>
          </Link>

          <Link 
            href="/employer-solutions" 
            className="flex-1 group relative overflow-hidden py-16 px-10 transition-all bg-[#081120] hover:bg-orange-500 rounded-[40px]"
          >
            <div className="flex items-center gap-8">
              <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:scale-110 transition-transform">
                <img src="https://breezyrecruit.com/wp-content/uploads/2024/11/employee-150x150.jpg" alt="Employers" className="w-full h-full object-cover" />
              </div>
              <div className="text-white">
                <h3 className="text-3xl font-extrabold mb-1">Employers</h3>
                <p className="text-xl font-medium opacity-90">The Right Fit.</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
