'use client';

import { Search, MapPin, Briefcase, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const jobs = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    category: "Information Technology",
    location: "Remote / New York",
    type: "Full-Time",
    posted: "2 days ago",
    salary: "$120k - $160k"
  },
  {
    id: 2,
    title: "Registered Nurse (ICU)",
    category: "Healthcare",
    location: "Houston, TX",
    type: "Contract",
    posted: "1 day ago",
    salary: "$85k - $110k"
  },
  {
    id: 3,
    title: "Marketing Manager",
    category: "Marketing",
    location: "Chicago, IL",
    type: "Full-Time",
    posted: "3 days ago",
    salary: "$90k - $120k"
  },
  {
    id: 4,
    title: "Project Coordinator",
    category: "Professional Services",
    location: "Atlanta, GA",
    type: "Full-Time",
    posted: "5 days ago",
    salary: "$70k - $90k"
  },
  {
    id: 5,
    title: "Warehouse Supervisor",
    category: "Industrial",
    location: "Los Angeles, CA",
    type: "Full-Time",
    posted: "1 week ago",
    salary: "$65k - $80k"
  },
  {
    id: 6,
    title: "Customer Success Lead",
    category: "Sales",
    location: "Remote",
    type: "Full-Time",
    posted: "4 days ago",
    salary: "$80k - $105k"
  }
];

export default function JobOpenings() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#212121]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#081120] overflow-hidden">
        {/* Abstract Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EF6A0B] opacity-10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600 opacity-10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Find Your <span className="text-[#EF6A0B]">Dream Job</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto font-medium">
            Explore thousands of opportunities from top employers and take the next step in your career.
          </p>
          
          {/* Search Bar Container */}
          <div className="max-w-4xl mx-auto bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2">
            <div className="flex-grow relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Job title, keyword, or company"
                className="w-full pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EF6A0B]/20 text-lg"
              />
            </div>
            <div className="flex-grow relative border-t md:border-t-0 md:border-l border-gray-100">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="City, state, or remote"
                className="w-full pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#EF6A0B]/20 text-lg"
              />
            </div>
            <button className="bg-[#EF6A0B] hover:bg-[#d55e0a] text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-[#EF6A0B]/30">
              Search Jobs
            </button>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#081120] mb-4">Latest Opportunities</h2>
              <div className="h-1.5 w-20 bg-[#EF6A0B] rounded-full"></div>
            </div>
            <div className="hidden md:flex gap-4">
              <span className="text-gray-500 font-medium">{jobs.length} jobs found</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold">
                    {job.category}
                  </div>
                  <div className="text-gray-400 text-sm flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {job.posted}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#081120] mb-2 group-hover:text-[#EF6A0B] transition-colors">
                  {job.title}
                </h3>
                
                <div className="space-y-3 mb-8 flex-grow">
                  <div className="flex items-center text-gray-600 font-medium">
                    <MapPin className="w-4 h-4 mr-2 text-[#EF6A0B]" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-gray-600 font-medium">
                    <Briefcase className="w-4 h-4 mr-2 text-[#EF6A0B]" />
                    {job.type}
                  </div>
                  <div className="text-lg font-bold text-[#081120]">
                    {job.salary}
                  </div>
                </div>
                
                <Link href={`/jobs/${job.id}`} className="mt-auto w-full flex items-center justify-center bg-[#081120] text-white py-4 rounded-2xl font-bold group-hover:bg-[#EF6A0B] transition-all">
                  Apply Now <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="inline-flex items-center px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-bold rounded-2xl hover:border-[#EF6A0B] hover:text-[#EF6A0B] transition-all">
              View All Job Openings
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto bg-[#081120] rounded-[40px] p-12 lg:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#EF6A0B] opacity-10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 relative z-10">
              Don't See The Right Fit?
            </h2>
            <p className="text-xl text-gray-300 mb-10 relative z-10">
              Join our talent community and we'll notify you when new opportunities that match your skills become available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link href="/register-upload-resume" className="bg-[#EF6A0B] hover:bg-[#d55e0a] text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-lg">
                Upload My Resume
              </Link>
              <Link href="/contact-us" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-2xl font-bold transition-all">
                Contact Recruiters
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
