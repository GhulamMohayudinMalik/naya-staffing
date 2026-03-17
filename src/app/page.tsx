import Link from "next/link";
import { ArrowRight, Search, Users, Briefcase, FileText, Clock, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-r from-[#d2b148] to-[#d27b41]">
        <div className="max-w-5xl mx-auto space-y-10">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-[#081120] tracking-tight leading-tight">
            A Breezy Path To <br className="hidden md:block" />
            <span className="text-white">Talent And Opportunity.</span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 tracking-tight">
            Smart Scalable Recruitment for Modern Workplaces
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link
              href="/employer-solutions"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 text-lg font-bold rounded-sm text-white bg-gray-900 hover:bg-gray-800 transition-all duration-300"
            >
              Start Hiring
            </Link>

            <Link
              href="/job-openings"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 text-lg font-bold rounded-sm text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              Start Your Job Hunt
            </Link>
          </div>
        </div>
      </main>

      {/* Target Audiences Section */}
      <section className="bg-white py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#081120] leading-tight">
              Smart Scalable Recruitment for <br className="hidden md:block"/> Modern Workplaces
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Job Seekers Card Container */}
            <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-2 bg-[#F8F9FA] rounded-[40px] overflow-hidden relative min-h-[400px]">
              <div className="p-12 lg:p-20 flex flex-col justify-center z-10">
                <h3 className="text-4xl font-extrabold text-[#081120] mb-4">
                  <Link href="/job-openings" className="hover:text-[#EF6A0B] transition-colors">Job Seekers</Link>
                </h3>
                <p className="text-2xl text-gray-600 font-medium mb-8">
                  Looking For Your Next Great Opportunity?
                </p>
                <Link href="/job-openings" className="inline-flex items-center text-[#EF6A0B] font-bold group">
                  Explore Jobs <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              {/* Businessman Image */}
              <div className="relative h-64 lg:h-full hidden md:block z-0">
                <img 
                  src="https://breezyrecruit.com/wp-content/uploads/2025/05/vecteezy_portrait-of-confident-business-man-isolated-on-transparent_44777304.png" 
                  alt="Confident Business Man"
                  className="absolute bottom-0 right-0 h-full object-contain object-bottom pointer-events-none"
                />
              </div>
            </div>

            {/* Spacer / Layout Adjuster for Employers (Matches the offset look) */}
            <div className="hidden lg:block lg:col-span-4"></div>

            {/* Employers Card Container */}
            <div className="lg:col-span-8 bg-[#081120] rounded-[40px] overflow-hidden relative group grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
              <div className="p-12 lg:p-16 flex flex-col justify-center relative z-10">
                <h3 className="text-4xl font-extrabold text-white mb-4">
                  <Link href="/employer-solutions" className="hover:text-[#EF6A0B] transition-colors">Employers</Link>
                </h3>
                <p className="text-2xl text-gray-300 font-medium mb-8">
                  Matching You with Candidates Who Deliver Results!
                </p>
                <Link href="/employer-solutions" className="inline-flex items-center text-[#EF6A0B] font-bold group">
                  Find Talent <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Businessman Image (Reusing first image as requested) */}
              <div className="relative h-64 lg:h-full hidden md:block z-0">
                <img 
                  src="https://breezyrecruit.com/wp-content/uploads/2025/05/vecteezy_portrait-of-confident-business-man-isolated-on-transparent_44777304.png" 
                  alt="Confident Business Man"
                  className="absolute bottom-0 right-0 h-full object-contain object-bottom pointer-events-none opacity-80"
                />
              </div>
              
              {/* Subtle background pattern/blob */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#EF6A0B] opacity-10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#081120]">Our Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* RPO */}
            <div className="p-8 border border-gray-100 rounded-xl hover:border-[#EF6A0B] hover:shadow-lg transition-all group bg-gray-50 hover:bg-white">
              <Users className="w-12 h-12 text-[#EF6A0B] mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Recruitment Process Outsourcing</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We handle your hiring—from search to success—so you can focus on growing.
              </p>
              <Link href="/recruitment-process-outsourcing" className="text-[#EF6A0B] font-bold inline-flex items-center group-hover:underline">
                Learn About RPO <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Reverse Recruitment */}
            <div className="p-8 border border-gray-100 rounded-xl hover:border-[#EF6A0B] hover:shadow-lg transition-all group bg-gray-50 hover:bg-white">
              <TrendingUp className="w-12 h-12 text-[#EF6A0B] mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Reverse Recruitment</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your career partner—connecting you with companies that fit.
              </p>
              <Link href="/reverse-recruitment" className="text-[#EF6A0B] font-bold inline-flex items-center group-hover:underline">
                Reverse Recruitment <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Direct Hire */}
            <div className="p-8 border border-gray-100 rounded-xl hover:border-[#EF6A0B] hover:shadow-lg transition-all group bg-gray-50 hover:bg-white">
              <Search className="w-12 h-12 text-[#EF6A0B] mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Direct Hire</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We take you direct to the right hire—with no delays and no detours.
              </p>
              <Link href="/direct-hire" className="text-[#EF6A0B] font-bold inline-flex items-center group-hover:underline">
                Direct Hire <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Contract to Hire */}
            <div className="p-8 border border-gray-100 rounded-xl hover:border-[#EF6A0B] hover:shadow-lg transition-all group bg-gray-50 hover:bg-white">
              <FileText className="w-12 h-12 text-[#EF6A0B] mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contract to Hire</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We do smart hiring that works for both sides—contract today, full-time tomorrow.
              </p>
              <Link href="/contract-to-hire" className="text-[#EF6A0B] font-bold inline-flex items-center group-hover:underline">
                Contract-to-Hire <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Temporary Staffing */}
            <div className="p-8 border border-gray-100 rounded-xl hover:border-[#EF6A0B] hover:shadow-lg transition-all group bg-gray-50 hover:bg-white">
              <Clock className="w-12 h-12 text-[#EF6A0B] mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Temporary Staffing</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We offer on-demand staffing for short-term needs—fast, flexible, reliable.
              </p>
              <Link href="/temporary-staffing" className="text-[#EF6A0B] font-bold inline-flex items-center group-hover:underline">
                Temporary Staffing <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Executive Search */}
            <div className="p-8 border border-gray-100 rounded-xl hover:border-[#EF6A0B] hover:shadow-lg transition-all group bg-gray-50 hover:bg-white">
              <Briefcase className="w-12 h-12 text-[#EF6A0B] mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Executive Search</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We don’t just fill executive roles—we build leadership legacies.
              </p>
              <Link href="/executive-search" className="text-[#EF6A0B] font-bold inline-flex items-center group-hover:underline">
                Executive Search <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#081120] mb-6">What People Say About BreezyRecruit</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                quote: "They reduced candidate drop-off during long hiring cycles.",
                author: "Director of Talent Planning",
                company: "Professional Services Firm"
              },
              {
                quote: "BreezyRecruit reduced our time-to-hire and delivered pre-vetted candidates we couldn’t reach ourselves.",
                author: "VP of HR",
                company: "Technology Firm"
              },
              {
                quote: "They quickly filled critical roles without sacrificing quality.",
                author: "Director of Executive Search",
                company: "Venture Capital Firm"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 italic">
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-[#081120]">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/testimonials" className="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-sm text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300">
              View All Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-white py-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#081120]">The Latest Blogs & Articles</h2>
            <p className="mt-4 text-xl text-gray-600">Our blog serves as a valuable resource for both job seekers and employers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: "How AI and Data-Driven Talent Sourcing Can Improve Your Hiring Process",
                desc: "Did you know bad hires can cost companies big money? Some studies say it can be as much as 30% of the employee’s first-year salary. Finding the right people is..."
              },
              {
                title: "How to Use Automation and AI to Improve Volume Hiring in 2025",
                desc: "Are you ready for a change? The year 2025 will change how companies find lots of new workers. It’s not just about filling jobs. It’s about getting the best people..."
              },
              {
                title: "How Direct Hire Recruiting Saves Your Company Time and Hiring Costs",
                desc: "Are you tired of long hiring processes? Do budget overruns stress you out? Direct hire recruiting can be a game-changer. It offers speed, cost savings, and high-quality hires..."
              },
              {
                title: "Why Direct Hire Staffing Is the Best Solution for Hard-to-Fill IT Roles",
                desc: "Are you tired of seeing open IT jobs linger? It costs you money when these spots stay unfilled for too long. Finding folks with the right tech skills is tough..."
              }
            ].map((blog, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all group p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#EF6A0B] transition-colors">{blog.title}</h3>
                <p className="text-gray-600 mb-6">{blog.desc}</p>
                <Link href="#" className="font-bold text-[#EF6A0B] hover:underline inline-flex items-center">
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/blog" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-sm text-white bg-[#EF6A0B] hover:bg-orange-600 transition-all duration-300">
              Visit Our Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Footer / To be extracted later */}
    </div>
  );
}
