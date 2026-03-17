import Link from "next/link";
import { ArrowRight, Search, Users, Briefcase, FileText, Clock, TrendingUp, CheckCircle } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* Hero Section with Video */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="h-full w-full object-cover"
          >
            <source src="https://breezyrecruit.com/wp-content/uploads/2025/06/our-services.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">Services</h1>
          <p className="text-2xl md:text-3xl font-bold text-gray-200">Find the Perfect Match for your Workforce</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h6 className="text-[#EF6A0B] font-bold text-sm tracking-widest uppercase mb-4">Hire Smarter, Not Harder – Find the Perfect Fit Fast.</h6>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#081120] mb-20">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* RPO */}
            <div className="bg-gray-50 p-10 rounded-xl border border-gray-100 hover:border-[#EF6A0B] hover:shadow-2xl transition-all group text-left flex flex-col">
              <div className="w-16 h-16 bg-[#EF6A0B] rounded-full flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                <Users className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase">Recruitment Process Outsourcing</h3>
              <p className="text-gray-600 mb-8 leading-relaxed grow">
                Say goodbye to endless job postings, slow hiring, and poor candidate fits.
              </p>
              <div className="pt-6 border-t border-gray-200">
                <Link href="/recruitment-process-outsourcing" className="inline-flex items-center font-bold text-[#EF6A0B] hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Reverse Recruitment */}
            <div className="bg-gray-50 p-10 rounded-xl border border-gray-100 hover:border-[#EF6A0B] hover:shadow-2xl transition-all group text-left flex flex-col">
              <div className="w-16 h-16 bg-[#EF6A0B] rounded-full flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                <TrendingUp className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase">Reverse Recruitment</h3>
              <p className="text-gray-600 mb-8 leading-relaxed grow">
                At BreezyRecruit, we flipped the traditional recruiting model. In most cases.
              </p>
              <div className="pt-6 border-t border-gray-200">
                <Link href="/reverse-recruitment" className="inline-flex items-center font-bold text-[#EF6A0B] hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Direct Hire */}
            <div className="bg-gray-50 p-10 rounded-xl border border-gray-100 hover:border-[#EF6A0B] hover:shadow-2xl transition-all group text-left flex flex-col">
              <div className="w-16 h-16 bg-[#EF6A0B] rounded-full flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                <Search className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase">Direct Hire</h3>
              <p className="text-gray-600 mb-8 leading-relaxed grow">
                Are you looking for that perfect fit – the employee who’s just right for the role .
              </p>
              <div className="pt-6 border-t border-gray-200">
                <Link href="/direct-hire" className="inline-flex items-center font-bold text-[#EF6A0B] hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Contract to Hire */}
            <div className="bg-gray-50 p-10 rounded-xl border border-gray-100 hover:border-[#EF6A0B] hover:shadow-2xl transition-all group text-left flex flex-col">
              <div className="w-16 h-16 bg-[#EF6A0B] rounded-full flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                <FileText className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase">Contract to Hire</h3>
              <p className="text-gray-600 mb-8 leading-relaxed grow">
                Contract-to-hire lets you assess talent in action before making a lasting decision.
              </p>
              <div className="pt-6 border-t border-gray-200">
                <Link href="/contract-to-hire" className="inline-flex items-center font-bold text-[#EF6A0B] hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Temporary Staffing */}
            <div className="bg-gray-50 p-10 rounded-xl border border-gray-100 hover:border-[#EF6A0B] hover:shadow-2xl transition-all group text-left flex flex-col">
              <div className="w-16 h-16 bg-[#EF6A0B] rounded-full flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                <Clock className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase">Temporary Staffing</h3>
              <p className="text-gray-600 mb-8 leading-relaxed grow">
                At BreezyRecruit, our Temporary Staffing solutions provide you with pre-vetted.
              </p>
              <div className="pt-6 border-t border-gray-200">
                <Link href="/temporary-staffing" className="inline-flex items-center font-bold text-[#EF6A0B] hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Executive Search */}
            <div className="bg-gray-50 p-10 rounded-xl border border-gray-100 hover:border-[#EF6A0B] hover:shadow-2xl transition-all group text-left flex flex-col">
              <div className="w-16 h-16 bg-[#EF6A0B] rounded-full flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                <Briefcase className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 uppercase">Executive Search</h3>
              <p className="text-gray-600 mb-8 leading-relaxed grow">
                Our Executive Search service is designed to connect you with top-tier executives.
              </p>
              <div className="pt-6 border-t border-gray-200">
                <Link href="/executive-search" className="inline-flex items-center font-bold text-[#EF6A0B] hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}
      <section className="bg-gray-900 py-32 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h6 className="text-[#EF6A0B] font-bold text-sm tracking-widest uppercase">Welcome to breezyrecruit</h6>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Find Industry-Specific Talent</h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                We specialize in connecting businesses with Quality talent tailored to your industry’s unique needs. Whether you’re in tech, healthcare, finance, or any other sector, our expert recruiters ensure you find the right professionals who align with your goals and culture. Let us help you build a team that drives innovation in your industry.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
                {[
                  "Information Technology",
                  "Healthcare",
                  "Industrial",
                  "Hospitality",
                  "Professional Services",
                  "Construction",
                  "Marketing",
                  "Sales"
                ].map((industry) => (
                  <div key={industry} className="flex items-center gap-3">
                    <CheckCircle className="text-[#EF6A0B] w-6 h-6" />
                    <span className="font-bold">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative group">
              <div className="h-[500px] w-full bg-gray-800 rounded-3xl overflow-hidden shadow-2xl relative">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/80 to-transparent z-10"></div>
                <img 
                  src="https://breezyrecruit.com/wp-content/uploads/2025/05/6698b21de8aba2dc9671c73d_Building-Your-Dream-Team-The-Power-of-In-House-Recruitment.jpg.webp" 
                  alt="Talent Search"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl hidden md:block z-20">
                <p className="text-[#081120] font-bold text-4xl mb-1">10k+</p>
                <p className="text-gray-500 font-bold">Candidates Pre-vetted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Marquee/Section */}
      <section className="bg-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#081120]">What People Say About BreezyRecruit</h2>
        </div>
        
        <div className="flex flex-col gap-8">
          {/* We can simulate a marquee or just a large grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { text: "They reduced candidate drop-off during long hiring cycles.", author: "Director of Talent Planning", co: "Professional Services Firm" },
              { text: "BreezyRecruit reduced our time-to-hire and delivered pre-vetted candidates we couldn’t reach ourselves.", author: "VP of HR", co: "Technology Firm" },
              { text: "They quickly filled critical roles without sacrificing quality.", author: "Director of Executive Search", co: "Venture Capital Firm" },
              { text: "BreezyRecruit’s RPO solution gave us a scalable way to manage high-volume hiring.", author: "Director of Talent Acquisition", co: "Logistics Company" },
              { text: "Their market insights and screening process saved us weeks.", author: "HR Director", co: "Retail Chain" },
              { text: "We no longer sift through hundreds of resumes — BreezyRecruit sends a focused shortlist.", author: "Chief People Officer", co: "Manufacturing Firm" }
            ].map((t, idx) => (
              <div key={idx} className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-all">
                <p className="text-gray-700 italic text-lg mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#EF6A0B]/10 rounded-full flex items-center justify-center text-[#EF6A0B] font-bold">
                    {t.author[0]}
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">{t.author}</h5>
                    <p className="text-sm text-gray-500">{t.co}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/testimonials" className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold rounded-sm text-white bg-[#EF6A0B] hover:bg-orange-600 transition-all shadow-lg">
              View All Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA sections */}
      <section className="bg-gray-50 py-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 group">
              <h3 className="text-[#EF6A0B] font-bold text-xl mb-4">Job Seekers</h3>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Looking For Your Next Great Opportunity?</h2>
              <Link href="/job-openings" className="inline-flex items-center font-bold text-gray-900 group-hover:text-[#EF6A0B] transition-colors">
                Explore Jobs <ArrowRight className="ml-2 w-6 h-6" />
              </Link>
            </div>
            
            <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 group">
              <h3 className="text-[#EF6A0B] font-bold text-xl mb-4">Employers</h3>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">The Right Candidates, The Right Fit.</h2>
              <Link href="/employer-solutions" className="inline-flex items-center font-bold text-gray-900 group-hover:text-[#EF6A0B] transition-colors">
                Hire Talent <ArrowRight className="ml-2 w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
