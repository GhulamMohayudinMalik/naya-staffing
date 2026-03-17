import Link from "next/link";
import { ArrowRight, CheckSquare, Target, Users, Search, FileText, Clock, Briefcase, TrendingUp, CheckCircle, Quote, Palette, Layout, Settings, Layers, CalendarCheck, Recycle, Navigation, FileEdit } from "lucide-react";

// Testimonial data from the provided HTML
const testimonials = [
  { text: "BreezyRecruit made the process effortless. I landed three interviews within weeks after months of hearing nothing.", author: "Senior Product Manager" },
  { text: "Thanks to BreezyRecruit, my resume finally got noticed by the right people. Their personal touch changed everything.", author: "Marketing Director" },
  { text: "With BreezyRecruit, I stopped applying blindly and focused on real, high-fit roles. The results were amazing.", author: "Director of Operations" },
  { text: "I didn’t realize recruiters could represent me directly. BreezyRecruit felt like having a private career agent.", author: "Senior Finance Manager" },
  { text: "After 10 years in the same role, BreezyRecruit helped me rebrand and negotiate a better salary than I expected.", author: "IT Program Manager" },
  { text: "They truly understood my career goals and marketed me to top firms I’d never reached alone.", author: "VP of Strategy" },
  { text: "BreezyRecruit opened doors I didn’t even know existed. Within weeks, I had two solid offers.", author: "Regional Sales Director" },
  { text: "What impressed me most was BreezyRecruit’s strategic approach and interview prep — real ROI.", author: "Chief Marketing Officer" },
  { text: "BreezyRecruit’s team applied to roles for me and kept me updated every step of the way.", author: "Operations Manager" },
  { text: "I saved countless hours and finally felt like someone was in my corner.", author: "Senior Account Executive" },
  { text: "BreezyRecruit’s personalized coaching gave me the confidence to ace tough interviews.", author: "Business Development Director" },
  { text: "Their resume writers knew exactly how to position my skills in a competitive market.", author: "Senior Financial Analyst" },
  { text: "Instead of hundreds of ignored applications, I had meaningful conversations with real employers.", author: "Director of Client Services" },
  { text: "BreezyRecruit turned my job hunt from overwhelming to manageable.", author: "Customer Success Manager" },
  { text: "The reverse recruitment model really works — I felt represented, not just another resume.", author: "Operations Director" },
  { text: "They helped me pivot industries, something I couldn’t have done alone.", author: "Senior Compliance Officer" },
  { text: "BreezyRecruit’s insights into the hidden job market were a game changer.", author: "Strategy Consultant" },
  { text: "From rewriting my LinkedIn to coaching me through offers, BreezyRecruit did it all.", author: "Executive Project Manager" },
  { text: "They kept me visible and active in front of hiring managers.", author: "Supply Chain Director" },
  { text: "Having experts proactively reach out on my behalf was incredibly powerful.", author: "Chief Operating Officer" },
  { text: "Within one month, I had more traction than the last six months combined.", author: "Director of Partnerships" },
  { text: "BreezyRecruit delivered customized opportunities that fit my goals perfectly.", author: "Finance Director" },
  { text: "Instead of chasing jobs, BreezyRecruit made companies chase me.", author: "Product Marketing Manager" },
  { text: "Their personal branding approach made a real difference in callbacks.", author: "Senior Operations Manager" },
  { text: "The difference with BreezyRecruit is that they genuinely care about your next move.", author: "Sales Strategy Director" },
  { text: "They handled everything — resumes, applications, follow-ups — while I focused on interviews.", author: "Executive Business Analyst" },
  { text: "BreezyRecruit helped me target only senior roles that matched my experience.", author: "Chief Revenue Officer" },
  { text: "The interview prep and mock sessions built my confidence dramatically.", author: "Director of Data Analytics" },
  { text: "Finally, I felt like someone was championing my career, not just checking boxes.", author: "Senior Marketing Strategist" },
  { text: "They didn’t just find roles — they found the right roles.", author: "Vice President of Business Development" },
  { text: "BreezyRecruit’s team kept me updated daily, no more guessing.", author: "Director of Supply Chain" },
  { text: "They understood the tech landscape and found roles I hadn’t seen on job boards.", author: "Senior IT Project Manager" },
  { text: "BreezyRecruit helped me move up into an executive role faster than expected.", author: "Director of Commercial Strategy" },
  { text: "Their process felt highly personalized and truly candidate-first.", author: "Chief Compliance Officer" },
  { text: "BreezyRecruit removed the stress of applying to dozens of jobs myself.", author: "Senior Sales Leader" },
  { text: "From hidden opportunities to direct introductions, they delivered on their promise.", author: "Director of Innovation" },
  { text: "They treated my career like a brand to market, which made all the difference.", author: "Vice President of Operations" },
  { text: "The reverse recruitment model isn’t just an idea — it genuinely works.", author: "Senior Data Scientist" },
  { text: "Thanks to BreezyRecruit, I moved to a leadership role with a better package.", author: "Executive Strategy Manager" },
  { text: "They didn’t waste my time with irrelevant roles — every lead was high quality.", author: "Director of Process Improvement" },
  { text: "I felt like I had a dedicated team focused only on my success.", author: "VP of Growth" },
  { text: "BreezyRecruit brought opportunities that fit my niche skill set perfectly.", author: "Senior Transformation Consultant" },
  { text: "Their human touch made me feel valued and seen, not just a resume.", author: "Director of Customer Experience" },
  { text: "BreezyRecruit was proactive, transparent, and incredibly responsive.", author: "Senior Commercial Director" },
  { text: "Having experts manage my search freed up my energy for interviews.", author: "Vice President of Sales Enablement" },
  { text: "They guided me through a major industry switch seamlessly.", author: "Director of Talent Strategy" },
  { text: "Within weeks, I had interviews lined up with companies I’d only dreamed of.", author: "Chief Strategy Officer" },
  { text: "The attention to detail and regular updates kept me confident throughout.", author: "Director of Operational Excellence" },
  { text: "BreezyRecruit felt like having a career partner, not just a recruiter.", author: "Senior Revenue Operations Manager" },
  { text: "Every step felt tailored to me and my goals — that’s rare.", author: "Director of Change Management" },
];

export default function WhyChooseUsPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#212121]">
      {/* 1. Page Header Section (Match original style) */}
      <section className="relative min-h-screen flex items-center justify-center bg-[url('https://breezyrecruit.com/wp-content/uploads/2025/05/1-1-1024x683.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#081120]/80"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Us?</h1>
        </div>
      </section>

      {/* 2. Headline Overlay Section (Match elementor-7054 first container) */}
      <section className="py-16 bg-[#F8F9FB]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[#081120] text-3xl md:text-4xl font-extrabold mb-4">Why Choose Us?</h2>
          <h3 className="text-[#EF6A0B] text-xl md:text-2xl font-bold">Connecting Top Talent with Leading Companies</h3>
        </div>
      </section>

      {/* 3. Why Choose BreezyRecruit? (Two column) */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h4 className="text-[#EF6A0B] font-bold text-lg uppercase tracking-wider">Why Choose BreezyRecruit?</h4>
            <h2 className="text-[#081120] text-4xl font-extrabold leading-tight">We Don’t Just Find Jobs — We Build Careers</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Breezy Recruit, we go beyond keywords and job descriptions. Our mission is to understand who you are, what drives you, and where you want to go — and then we help you get there.
            </p>
            <div>
              <Link 
                href="/calendly" 
                className="inline-block bg-[#EF6A0B] text-white font-bold py-4 px-10 rounded-sm hover:scale-105 transition-transform"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          <div>
            <img 
              src="https://breezyrecruit.com/wp-content/uploads/2025/05/1-1-1024x683.jpg" 
              alt="Build Careers" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* 4. What Sets Us Apart? (Icon boxes + Image) */}
      <section className="py-20 bg-[#F8F9FB]">
        <div className="container mx-auto px-4 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-10">
            <h2 className="text-[#081120] text-4xl font-extrabold">What Sets Us Apart?</h2>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckSquare className="text-[#EF6A0B] w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-[#081120] text-2xl font-bold">You’re Our Priority</h3>
                <p className="text-gray-600">We work for you, not the employer. That means every strategy, application, and negotiation is tailored to benefit your career goals, not someone else’s bottom line.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckSquare className="text-[#EF6A0B] w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-[#081120] text-2xl font-bold">Human Approach in a Robotic World</h3>
                <p className="text-gray-600">In an age of automated rejections and keyword screening, we bring real humans back into your job search. No bots. No generic advice. Just personal, one-on-one support from real experts.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckSquare className="text-[#EF6A0B] w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-[#081120] text-2xl font-bold">Confidential & Customized Support</h3>
                <p className="text-gray-600">Whether you’re job searching quietly while employed or starting from scratch, we tailor every step based on your needs — and your privacy is always protected.</p>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://breezyrecruit.com/wp-content/uploads/2025/05/employer-top-image.jpeg.webp" 
              alt="What Sets Us Apart" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* 5. Career Experts Section (The 6-card grid with exact icons/styles from HTML) */}
      <section className="py-24 bg-gradient-to-r from-[#081120] via-[#1a2b45] to-[#081120] text-white">
        <div className="container mx-auto px-4 text-center">
          <h6 className="text-[#EF6A0B] font-bold text-lg mb-4 uppercase">Career Experts, Not Just Recruiters</h6>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-16 italic">Our team includes certified professionals in:</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: RPO */}
            <div className="bg-[#1a2b45]/50 border border-white/10 rounded-2xl p-8 flex flex-col items-center hover:bg-[#EF6A0B]/10 transition-colors">
              <div className="w-16 h-16 bg-[#EF6A0B] rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(239,106,11,0.3)]">
                <Settings className="text-white w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Recruitment Process Outsourcing</h4>
              <p className="text-gray-300 mb-8">We handle your hiring—from search to success—so you can focus on growing.</p>
              <div className="w-1/2 h-[1px] bg-[#EF6A0B] mb-8"></div>
              <Link href="/recruitment-process-outsourcing" className="inline-flex items-center gap-2 bg-[#EF6A0B] text-white font-bold py-2 px-6 rounded-sm hover:-translate-y-1 transition-transform">
                <CalendarCheck className="w-5 h-5" /> Learn More
              </Link>
            </div>

            {/* Card 2: Reverse Recruitment */}
            <div className="bg-[#1a2b45]/50 border border-white/10 rounded-2xl p-8 flex flex-col items-center hover:bg-[#EF6A0B]/10 transition-colors">
              <div className="w-16 h-16 bg-[#EF6A0B] rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(239,106,11,0.3)]">
                <Recycle className="text-white w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Reverse Recruitment</h4>
              <p className="text-gray-300 mb-8">Your career partner—connecting you with companies that fit.</p>
              <div className="w-1/2 h-[1px] bg-[#EF6A0B] mb-8"></div>
              <Link href="/reverse-recruitment" className="inline-flex items-center gap-2 bg-[#EF6A0B] text-white font-bold py-2 px-6 rounded-sm hover:-translate-y-1 transition-transform">
                <CalendarCheck className="w-5 h-5" /> Learn More
              </Link>
            </div>

            {/* Card 3: Direct Hire */}
            <div className="bg-[#1a2b45]/50 border border-white/10 rounded-2xl p-8 flex flex-col items-center hover:bg-[#EF6A0B]/10 transition-colors">
              <div className="w-16 h-16 bg-[#EF6A0B] rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(239,106,11,0.3)]">
                <Navigation className="text-white w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Direct Hire</h4>
              <p className="text-gray-300 mb-8">We take you direct to the right hire—with no delays and no detours.</p>
              <div className="w-1/2 h-[1px] bg-[#EF6A0B] mb-8"></div>
              <Link href="/direct-hire" className="inline-flex items-center gap-2 bg-[#EF6A0B] text-white font-bold py-2 px-6 rounded-sm hover:-translate-y-1 transition-transform">
                <CalendarCheck className="w-5 h-5" /> Learn More
              </Link>
            </div>

            {/* Card 4: Contract to Hire */}
            <div className="bg-[#1a2b45]/50 border border-white/10 rounded-2xl p-8 flex flex-col items-center hover:bg-[#EF6A0B]/10 transition-colors">
              <div className="w-16 h-16 bg-[#EF6A0B] rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(239,106,11,0.3)]">
                <Layers className="text-white w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Contract to Hire</h4>
              <p className="text-gray-300 mb-8">We do smart hiring that works for both sides—contract today, full-time tomorrow.</p>
              <div className="w-1/2 h-[1px] bg-[#EF6A0B] mb-8"></div>
              <Link href="/contract-to-hire" className="inline-flex items-center gap-2 bg-[#EF6A0B] text-white font-bold py-2 px-6 rounded-sm hover:-translate-y-1 transition-transform">
                <CalendarCheck className="w-5 h-5" /> Learn More
              </Link>
            </div>

            {/* Card 5: Temporary Staffing */}
            <div className="bg-[#1a2b45]/50 border border-white/10 rounded-2xl p-8 flex flex-col items-center hover:bg-[#EF6A0B]/10 transition-colors">
              <div className="w-16 h-16 bg-[#EF6A0B] rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(239,106,11,0.3)]">
                <FileEdit className="text-white w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Temporary Staffing</h4>
              <p className="text-gray-300 mb-8">We offer on-demand staffing for short-term needs—fast, flexible, reliable.</p>
              <div className="w-1/2 h-[1px] bg-[#EF6A0B] mb-8"></div>
              <Link href="/temporary-staffing" className="inline-flex items-center gap-2 bg-[#EF6A0B] text-white font-bold py-2 px-6 rounded-sm hover:-translate-y-1 transition-transform">
                <CalendarCheck className="w-5 h-5" /> Learn More
              </Link>
            </div>

            {/* Card 6: Executive Search */}
            <div className="bg-[#1a2b45]/50 border border-white/10 rounded-2xl p-8 flex flex-col items-center hover:bg-[#EF6A0B]/10 transition-colors">
              <div className="w-16 h-16 bg-[#EF6A0B] rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(239,106,11,0.3)]">
                <Search className="text-white w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Executive Search</h4>
              <p className="text-gray-300 mb-8">We don’t just fill executive roles—we build leadership legacies.</p>
              <div className="w-1/2 h-[1px] bg-[#EF6A0B] mb-8"></div>
              <Link href="/executive-search" className="inline-flex items-center gap-2 bg-[#EF6A0B] text-white font-bold py-2 px-6 rounded-sm hover:-translate-y-1 transition-transform">
                <CalendarCheck className="w-5 h-5" /> Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Track Record Section (Stats Slider Feel) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[#081120] text-4xl font-extrabold mb-8 italic">Our Track Record Speaks Volumes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
            We’ve helped professionals from startups to Fortune 500 companies, across industries including tech, healthcare, finance, and more.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 lg:px-20">
            {[
              "⭐ 90% of our clients land interviews within 30 days",
              "⭐ 70% land a new job in under 60 days",
              "⭐ 100% receive personalized support from day one"
            ].map((stat, idx) => (
              <div key={idx} className="bg-[#F8F9FB] rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-[#212121] text-xl font-bold">{stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Hidden Job Market Section (Two column) */}
      <section className="py-20 bg-[#F8F9FB]">
        <div className="container mx-auto px-4 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-[#081120] text-4xl font-extrabold leading-tight italic">We Understand the Hidden Job Market</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Over 70% of roles are never publicly posted. Our team uncovers these hidden opportunities and gets your profile in front of real decision-makers — fast.
            </p>
            
            <div className="flex gap-4 p-6 bg-white rounded-lg shadow-sm border-l-4 border-[#EF6A0B]">
              <div className="flex-shrink-0">
                <CheckSquare className="text-[#EF6A0B] w-8 h-8" />
              </div>
              <div className="space-y-4">
                <h3 className="text-[#081120] text-2xl font-bold">Our Promise to You</h3>
                <p className="text-gray-500 italic">Just dedicated, transparent, expert-level career support designed to get you results.</p>
                <ul className="space-y-2 font-bold text-[#081120]">
                  <li className="flex items-center gap-2"><CheckCircle className="text-[#EF6A0B] w-4 h-4" /> No generic solutions</li>
                  <li className="flex items-center gap-2"><CheckCircle className="text-[#EF6A0B] w-4 h-4" /> No empty promises</li>
                  <li className="flex items-center gap-2"><CheckCircle className="text-[#EF6A0B] w-4 h-4" /> No waiting in the dark</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://breezyrecruit.com/wp-content/uploads/2025/05/tmi-tetains-the-recruiters.jpg.webp" 
              alt="Hidden Job Market" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* 8. Let's Win Together (CTA Section) */}
      <section className="py-24 bg-[#081120] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#EF6A0B] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-extrabold mb-6 italic">Let’s Win Together</h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto mb-10">
            You’ve worked hard to build your career — let us help you take it to the next level. With BreezyRecruit, you’re never just a resume in a database. You’re our client, our mission, and our priority
          </p>
          <Link 
            href="/start-your-job-hunt" 
            className="inline-flex items-center gap-3 bg-[#EF6A0B] text-white font-bold py-5 px-12 rounded-sm text-lg hover:scale-105 transition-transform"
          >
            Get in Touch <CalendarCheck className="w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* 9. Testimonials (Huge scrollable/grid section) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-[#081120] text-4xl font-extrabold italic">What People Say<br/><span className="text-5xl not-italic">About BreezyRecruit</span></h2>
            <div className="w-24 h-1 bg-[#EF6A0B] mx-auto"></div>
          </div>
          
          {/* We'll use a Masonry-style grid for the 50 testimonials to make it impressive */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 h-[800px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-[#EF6A0B] scrollbar-track-gray-100">
            {testimonials.map((t, idx) => (
              <div key={idx} className="break-inside-avoid bg-[#F8F9FB] p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-[#EF6A0B]/30 transition-all">
                <Quote className="text-[#EF6A0B] w-8 h-8 opacity-20 mb-4" />
                <p className="text-gray-700 italic leading-relaxed mb-6 font-medium">"{t.text}"</p>
                <div className="pt-6 border-t border-gray-200">
                  <cite className="font-bold text-[#081120] not-italic block">— {t.author}</cite>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 italic text-gray-500">
            (Scroll to see more testimonials)
          </div>
        </div>
      </section>

      {/* Footer Nav Buttons (Match previous pages) */}
      <section className="bg-[#081120] py-20 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-white text-3xl font-bold mb-10">Explore other solutions</h2>
            <div className="flex flex-wrap justify-center gap-6">
                <Link href="/employer-solutions" className="bg-white text-[#081120] font-bold py-4 px-10 rounded-sm hover:bg-[#EF6A0B] hover:text-white transition-all">
                    Employer Solutions
                </Link>
                <Link href="/services" className="bg-[#EF6A0B] text-white font-bold py-4 px-10 rounded-sm hover:scale-105 transition-all">
                    Our Services
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
}
