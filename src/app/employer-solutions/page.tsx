import Link from "next/link";
import { ArrowRight, CheckCircle, Users, Zap, Search, ShieldCheck, PlayCircle } from "lucide-react";

export default function EmployerSolutionsPage() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      {/* Hero Section with Video */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="h-full w-full object-cover"
          >
            <source src="https://breezyrecruit.com/wp-content/uploads/2025/05/Direct-Hire.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#081120]/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <h1 className="text-[#EF6A0B] text-xl md:text-2xl font-bold uppercase tracking-widest mb-6">Employer Solutions</h1>
          <h2 className="text-4xl md:text-7xl font-extrabold text-white leading-tight">
            Let Our Recruiting Agency Help You Build a Winning Team
          </h2>
        </div>
      </section>

      {/* Intro CTA Bar */}
      <section className="bg-gradient-to-r from-[#081120] to-[#0d1b32] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center lg:text-left max-w-2xl leading-snug">
              Helping You Find the Right Talent Faster and Smarter
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/become-a-client" className="px-8 py-4 bg-[#EF6A0B] text-white font-bold rounded-sm hover:bg-orange-600 transition-all text-center shadow-lg uppercase tracking-wider">
                Become a Client
              </Link>
              <Link href="/our-industries" className="px-8 py-4 bg-white text-[#081120] font-bold rounded-sm hover:bg-gray-100 transition-all text-center uppercase tracking-wider">
                Our Industries
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#081120] leading-tight">
                Let Our Recruiting Agency Help You <span className="text-[#EF6A0B]">Build a Winning Team</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Hiring the right people can make or break your business. But when you’re buried in resumes, chasing unqualified applicants, and juggling countless priorities, recruitment quickly becomes overwhelming — and costly.
                </p>
                <p>
                  At BreezyRecruit, we lift that burden by connecting you with highly qualified candidates who truly fit your roles, culture, and business goals. Whether you’re hiring for a critical leadership position or scaling entire teams, we provide smart, strategic staffing support designed for long-term success — covering RPO, Direct Hire, Temporary Staffing, Contract-to-Hire, Volume Hiring, and Executive Search.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden shadow-2xl relative">
                <img 
                  src="https://breezyrecruit.com/wp-content/uploads/2024/12/1-8.jpg" 
                  alt="Team Building" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081120]/40 to-transparent"></div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#EF6A0B] rounded-2xl flex flex-col items-center justify-center p-6 text-white shadow-xl hidden md:flex">
                <Users className="w-12 h-12 mb-4" />
                <p className="text-center font-bold">Dedicated Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Employers Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#081120]">
              Why Employers Choose <span className="text-[#EF6A0B]">BreezyRecruit</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Reason 1 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-[#EF6A0B]/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#EF6A0B] transition-colors">
                <Search className="w-8 h-8 text-[#EF6A0B] group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#081120] mb-4">Targeted Talent Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                We don’t just post jobs and wait. Our recruiters leverage advanced sourcing strategies, industry insights, and a robust talent network to find both active and passive candidates who perfectly match your requirements.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-[#EF6A0B]/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#EF6A0B] transition-colors">
                <Zap className="w-8 h-8 text-[#EF6A0B] group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#081120] mb-4">Faster Time-to-Hire</h3>
              <p className="text-gray-600 leading-relaxed">
                Our streamlined recruitment process reduces vacancy costs and ensures you have the right people in place when you need them — keeping your business on track.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-[#EF6A0B]/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#EF6A0B] transition-colors">
                <Users className="w-8 h-8 text-[#EF6A0B] group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#081120] mb-4">Deep Candidate Screening</h3>
              <p className="text-gray-600 leading-relaxed">
                Every candidate goes through comprehensive interviews, skills assessments, and reference checks to ensure they’re a genuine fit for your team’s pace, culture, and vision.
              </p>
            </div>

            {/* Reason 4 */}
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-[#EF6A0B]/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#EF6A0B] transition-colors">
                <ShieldCheck className="w-8 h-8 text-[#EF6A0B] group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#081120] mb-4">Dedicated Client Support</h3>
              <p className="text-gray-600 leading-relaxed">
                We see ourselves as your recruitment partner, not just a vendor. By learning your business inside out, we deliver tailored solutions and service that align with your hiring goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative group">
              <img 
                src="https://breezyrecruit.com/wp-content/uploads/2024/12/1-8.jpg" 
                alt="Value Proposition" 
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#081120]">
                What You Get with <span className="text-[#EF6A0B]">BreezyRecruit</span>
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Tailored Searches — built around your unique business needs and culture",
                  "Access to Hidden Talent — beyond standard job boards",
                  "Local & National Reach — through experienced recruiters",
                  "Pre-Screened Candidates — ready to add value from day one",
                  "Proven Process — ensuring quality and consistency",
                  "Long-Term Hiring Success — focused on building teams, not just filling roles"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl transition-colors hover:bg-white border hover:border-[#EF6A0B]">
                    <CheckCircle className="w-6 h-6 text-[#EF6A0B] shrink-0" />
                    <span className="font-bold text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 bg-[#081120] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Our <span className="text-[#EF6A0B]">Commitment</span> to You
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                At BreezyRecruit, we value quality over quantity. You won’t get flooded with resumes — instead, you’ll receive a thoughtfully curated shortlist of the best talent. Our promise is to respect your time, understand your vision, and exceed your expectations at every step.
              </p>
              <p className="text-xl text-gray-400 leading-relaxed">
                With BreezyRecruit, recruitment isn’t just about filling positions — it’s about investing in the future of your business.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://breezyrecruit.com/wp-content/uploads/2025/05/1-2.jpg" 
                alt="Our Commitment" 
                className="rounded-3xl shadow-2xl h-[500px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Build Team Together CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#081120] mb-8">Let’s Build Your Team Together</h2>
          <p className="text-xl text-gray-600 mb-12">
            Hiring doesn’t have to be hard. Partner with BreezyRecruit and discover how simple, efficient, and rewarding recruitment can be.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/become-a-client" className="px-12 py-5 bg-[#EF6A0B] text-white font-bold rounded-sm hover:translate-y-[-4px] transition-all shadow-xl flex items-center justify-center gap-2">
              Become a Client <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/calendly" className="px-12 py-5 bg-[#081120] text-white font-bold rounded-sm hover:translate-y-[-4px] transition-all shadow-xl flex items-center justify-center gap-2">
              Schedule a Consultation <PlayCircle className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Large Testimonials List */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#081120] text-center">
            What Employers Say About <span className="text-[#EF6A0B]">BreezyRecruit</span>
          </h2>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { text: "They reduced candidate drop-off during long hiring cycles.", author: "Director of Talent Planning, Professional Services Firm" },
            { text: "BreezyRecruit reduced our time-to-hire and delivered pre-vetted candidates we couldn’t reach ourselves.", author: "VP of HR, Technology Firm" },
            { text: "They quickly filled critical roles without sacrificing quality.", author: "Director of Executive Search, Venture Capital Firm" },
            { text: "BreezyRecruit’s RPO solution gave us a scalable way to manage high-volume hiring.", author: "Director of Talent Acquisition, Logistics Company" },
            { text: "Their market insights and screening process saved us weeks.", author: "HR Director, Retail Chain" },
            { text: "We no longer sift through hundreds of resumes — BreezyRecruit sends a focused shortlist.", author: "Chief People Officer, Manufacturing Firm" },
            { text: "Their contract-to-hire option helped us test talent before committing.", author: "Operations Manager, Food & Beverage Brand" },
            { text: "BreezyRecruit felt like an extension of our own HR team.", author: "VP of Operations, E-commerce Startup" },
            { text: "They adapted quickly to our changing hiring needs.", author: "HR Business Partner, Construction Company" },
            { text: "Their team kept us competitive in a tough talent market.", author: "Director of Workforce Planning, Insurance Firm" },
            { text: "BreezyRecruit helped us fill executive roles with impressive speed.", author: "Chief HR Officer, Software Company" },
            { text: "Their communication and follow-through exceeded expectations.", author: "Recruitment Manager, Hospitality Group" },
            { text: "BreezyRecruit balanced cultural fit with skill set perfectly.", author: "Director of Human Capital, Consulting Firm" },
            { text: "We’ve seen measurable improvements in employee retention.", author: "Chief Administrative Officer, Real Estate Company" },
            { text: "They tailored searches to our niche roles seamlessly.", author: "Senior HR Manager, Telecom Firm" }
          ].map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all">
              <p className="text-gray-700 italic text-lg mb-6">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#EF6A0B]/10 rounded-full flex items-center justify-center text-[#EF6A0B] font-bold">
                  {t.author[0]}
                </div>
                <div className="text-sm">
                  <h5 className="font-bold text-gray-900">{t.author.split(',')[0]}</h5>
                  <p className="text-gray-500">{t.author.split(',')[1]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <Link href="/testimonials" className="bg-[#EF6A0B] text-white px-10 py-4 font-bold rounded-sm hover:bg-orange-600 transition-all shadow-lg">
            View All Testimonials
          </Link>
        </div>
      </section>
    </div>
  );
}
