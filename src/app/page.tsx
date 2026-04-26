"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Check, Users, Briefcase, FileText, Clock, TrendingUp, Search, Globe, ChevronDown, Plus, Minus, MapPin } from "lucide-react";
import TestimonialSlider from "@/components/TestimonialSlider";
import VideoBackground from "@/components/VideoBackground";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-navy-dark flex flex-col font-sans selection:bg-gold selection:text-navy-dark overflow-x-hidden">

      {/* 2. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <VideoBackground
            src="/videos/hero.mp4"
            overlayOpacity="bg-[#040814]/90"
          />
          {/* Subtle Premium Orbs */}
          <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 blur-[120px] rounded-full animate-pulse transition-all duration-[5000ms]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold/10 blur-[150px] rounded-full animate-float transition-all duration-[7000ms]"></div>
          </div>
          {/* Abstract Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12 py-24">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-block px-6 py-2.5 bg-gold/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-4 backdrop-blur-md">
              Premium Global Recruitment & Workforce Solutions
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] drop-shadow-2xl">
              Connecting Exceptional Talent With <br className="hidden md:block" />
              <span className="text-shimmer">Forward-Looking Companies Worldwide</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl font-medium text-slate-400 tracking-tight max-w-4xl mx-auto animate-fade-up delay-200 leading-relaxed">
            NAYA Staffing helps businesses hire with confidence and helps professionals move forward with purpose. From executive search and permanent recruitment to contract staffing, RPO, and global hiring solutions, we deliver strategic talent acquisition services designed for growth, speed, and long-term success.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-12 animate-fade-up delay-300">
            <Link
              href="/contact-us"
              className="w-full sm:w-auto px-14 py-6 text-[11px] font-black rounded-full text-navy-dark bg-gold hover:bg-gold-hover shadow-[0_8px_40px_rgba(212,175,55,0.3)] transition-all duration-500 transform hover:-translate-y-2 uppercase tracking-[0.25em]"
            >
              Schedule Consultation
            </Link>

            <Link
              href="/job-openings"
              className="w-full sm:w-auto px-14 py-6 text-[11px] font-black rounded-full text-white border border-white/20 hover:border-gold hover:text-gold transition-all duration-500 transform hover:-translate-y-2 uppercase tracking-[0.25em] backdrop-blur-md"
            >
              Browse Open Jobs
            </Link>

            <Link href="/become-a-client" className="text-[11px] font-black uppercase tracking-[0.3em] text-gold/60 hover:text-gold transition-colors sm:ml-6 group">
              Become a Client <span className="inline-block group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>

          <div className="pt-20 animate-fade-up delay-400 border-t border-white/5 max-w-3xl mx-auto">
            <p className="text-[11px] font-black uppercase tracking-[0.45em] text-slate-500 leading-loose">
              Trusted recruitment support for growing businesses, established organizations, and ambitious professionals across diverse industries and markets.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-20">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold to-transparent rounded-full"></div>
        </div>
      </section>

      {/* 3. Trust / Value Strip */}
      <section className="bg-navy-dark py-24 border-y border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-[11px] font-black text-gold uppercase tracking-[0.6em] mb-4">Built for Modern Hiring Needs</h2>
            <div className="h-px w-24 bg-gold/30 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Strategic Recruitment Expertise",
                desc: "We go beyond resumes to understand hiring goals, team needs, market realities, and long-term fit.",
                icon: Search
              },
              {
                title: "Flexible Hiring Solutions",
                desc: "From single critical hires to ongoing workforce support, our services adapt to changing business demands.",
                icon: Briefcase
              },
              {
                title: "Multi-Industry Coverage",
                desc: "We support recruitment across a wide range of industries, functions, and experience levels.",
                icon: Users
              },
              {
                title: "Global Talent Reach",
                desc: "We help companies access talent across local, regional, remote, and international hiring markets.",
                icon: Globe
              },
            ].map((pillar, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gold/5 border border-gold/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-gold group-hover:text-navy-dark transition-all duration-500">
                    <pillar.icon className="w-6 h-6 text-gold group-hover:text-inherit transition-colors" />
                  </div>
                  <h3 className="text-white font-black text-[13px] uppercase tracking-widest mb-4 group-hover:text-gold transition-colors leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed group-hover:text-slate-300 transition-colors">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Employer + Candidate Split Section */}
      <section className="bg-navy-dark py-32 overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-10">
              {/* High-Performing Teams. <span className="text-gold">Meaningful Careers.</span> */}
              Recruitment Solutions for <span className="text-gold">Employers</span>. Career Opportunities for <span className="text-gold">Candidates</span>.
            </h2>
            <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-4xl mx-auto">
              Whether you are building a high-performing team or looking for your next opportunity, NAYA Staffing provides a more strategic, responsive, and human approach to recruitment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Block: For Employers */}
            <div className="group relative bg-[#060c1d] rounded-[56px] p-12 md:p-16 border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-[0_40px_100px_rgba(0,0,0,0.6)] flex flex-col h-full overflow-hidden">
              {/* Background Accent */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold/5 blur-[100px] rounded-full group-hover:bg-gold/10 transition-all duration-700"></div>

              <div className="relative z-10">
                <div className="text-gold font-black text-[11px] uppercase tracking-[0.5em] mb-10 px-4 py-1.5 bg-gold/5 border border-gold/10 inline-block rounded-full">
                  For Employers
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">Empowering <span className="text-shimmer">Businesses</span></h3>
                <p className="text-slate-400 text-lg font-medium leading-relaxed mb-12">
                  We partner with organizations that need quality talent, faster hiring processes, and scalable recruitment support. Whether you are hiring for leadership positions, hard-to-fill specialist roles, high-volume teams, or international expansion, NAYA Staffing provides flexible hiring solutions tailored to your business goals.
                </p>
                <ul className="grid grid-cols-1 gap-5 mb-16">
                  {[
                    "Executive search for leadership and critical roles",
                    "Permanent recruitment for long-term team growth",
                    "Contract staffing for flexibility and speed",
                    "Recruitment Process Outsourcing for scalable hiring",
                    "Talent mapping and screening support",
                    "Global and remote hiring solutions"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-[15px] font-semibold text-slate-300 group/item hover:text-white transition-colors">
                      <div className="w-6 h-6 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover/item:bg-gold group-hover/item:border-gold transition-all duration-300">
                        <Check className="w-3.5 h-3.5 text-gold group-hover/item:text-navy-dark transition-colors" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/become-a-client" className="mt-auto inline-flex items-center px-10 py-5 bg-white/5 border border-white/10 rounded-full text-[11px] font-black uppercase tracking-[0.3em] text-white hover:bg-gold hover:text-navy-dark hover:border-gold transition-all duration-500 group/btn">
                  Become a Client <ArrowRight className="ml-3 w-5 h-5 group-hover/btn:translate-x-3 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Block: For Job Seekers */}
            <div className="group relative bg-[#060c1d] rounded-[56px] p-12 md:p-16 border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-[0_40px_100px_rgba(0,0,0,0.6)] flex flex-col h-full overflow-hidden">
              {/* Background Accent */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold/5 blur-[100px] rounded-full group-hover:bg-gold/10 transition-all duration-700"></div>

              <div className="relative z-10">
                <div className="text-gold font-black text-[11px] uppercase tracking-[0.5em] mb-10 px-4 py-1.5 bg-gold/5 border border-gold/10 inline-block rounded-full">
                  For Job Seekers
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">Advancing <span className="text-shimmer">Careers</span></h3>
                <p className="text-slate-400 text-lg font-medium leading-relaxed mb-12">
                  We connect professionals with meaningful opportunities across multiple industries and career levels. Whether you are actively searching or exploring your next move, NAYA Staffing helps you discover roles aligned with your skills, goals, and long-term growth.
                </p>
                <ul className="grid grid-cols-1 gap-5 mb-16">
                  {[
                    "Access opportunities across industries",
                    "Apply for roles that match your profile",
                    "Upload your resume for recruiter review",
                    "Stay informed with career resources and insights",
                    "Receive support through a professional recruitment process"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-[15px] font-semibold text-slate-300 group/item hover:text-white transition-colors">
                      <div className="w-6 h-6 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover/item:bg-gold group-hover/item:border-gold transition-all duration-300">
                        <Check className="w-3.5 h-3.5 text-gold group-hover/item:text-navy-dark transition-colors" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/job-openings" className="mt-auto inline-flex items-center px-10 py-5 bg-white/5 border border-white/10 rounded-full text-[11px] font-black uppercase tracking-[0.3em] text-white hover:bg-gold hover:text-navy-dark hover:border-gold transition-all duration-500 group/btn">
                  Browse Opportunities <ArrowRight className="ml-3 w-5 h-5 group-hover/btn:translate-x-3 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services Overview Section */}
      <section className="bg-navy py-32 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-10">
              Recruitment Services Designed Around <span className="text-gold">Business Growth</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-4xl mx-auto">
              NAYA Staffing offers end-to-end recruitment and workforce solutions for organizations seeking dependable hiring support, better talent access, and a more strategic approach to workforce planning. Our services are designed to support growing companies, established enterprises, startups, and globally expanding teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Executive Search",
                icon: Search,
                desc: "Targeted search solutions for leadership, confidential, and high-impact roles where precision, discretion, and quality matter most."
              },
              {
                title: "Permanent Recruitment",
                icon: Briefcase,
                desc: "Structured hiring support for businesses looking to secure full-time professionals who align with both role requirements and long-term company goals."
              },
              {
                title: "Contract Staffing",
                icon: Clock,
                desc: "Flexible workforce solutions for project-based hiring, seasonal demand, urgent needs, and teams requiring agility without compromising quality."
              },
              {
                title: "Recruitment Process Outsourcing (RPO)",
                icon: Users,
                desc: "Scalable recruitment support for businesses that need embedded hiring expertise, process efficiency, and consistent talent delivery."
              },
              {
                title: "Global Hiring Solutions",
                icon: Globe,
                desc: "Recruitment support for businesses hiring across borders, entering new markets, or building distributed and international teams."
              },
              {
                title: "Screening & Assessment",
                icon: FileText,
                desc: "Candidate evaluation support that helps reduce hiring risk, improve shortlisting quality, and strengthen decision-making."
              },
            ].map((service, idx) => (
              <div key={idx} className="group relative bg-[#0a1125] border border-white/5 p-10 rounded-[48px] hover:border-gold/30 transition-all duration-700 hover:shadow-[0_30px_90px_rgba(0,0,0,0.6)] flex flex-col h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[48px]"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gold/5 border border-gold/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-gold group-hover:text-navy-dark transition-all duration-500 transform group-hover:rotate-6">
                    <service.icon className="w-8 h-8 text-gold group-hover:text-inherit transition-colors" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-6 group-hover:text-gold transition-colors tracking-tighter leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 mb-12 leading-relaxed font-medium text-[16px] group-hover:text-slate-300 transition-colors">
                    {service.desc}
                  </p>
                  <Link
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`}
                    className="mt-auto inline-flex items-center text-[10px] font-black uppercase tracking-[0.4em] text-white/50 group-hover:text-gold transition-all"
                  >
                    Learn More <ArrowRight className="ml-3 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-28 pt-20 border-t border-white/5 text-center bg-gradient-to-b from-transparent to-gold/[0.02] rounded-[100px]">
            <p className="text-slate-400 font-medium mb-16 max-w-4xl mx-auto text-lg leading-relaxed">
              <span className="text-gold font-bold">Need a tailored solution?</span> NAYA Staffing also supports <span className="text-white/80 font-bold">talent mapping, employer branding, startup hiring, technical recruitment, sales recruitment, remote hiring, diversity hiring, and turnkey recruitment projects.</span>
            </p>
            <Link href="/become-a-client" className="inline-flex items-center px-14 py-6 bg-gold text-navy-dark rounded-full font-black text-[11px] uppercase tracking-[0.3em] hover:bg-gold-hover shadow-[0_10px_40px_rgba(212,175,55,0.2)] transition-all transform hover:-translate-y-2">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Industries Overview Section */}
      <section className="bg-navy-dark py-32 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-10 leading-[0.95]">
              Industry Expertise Across <span className="text-gold">Evolving Markets</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-4xl mx-auto">
              We support hiring across a diverse range of industries, helping businesses secure talent in both specialized and high-demand functions. Our approach combines market awareness, role understanding, and recruitment strategy to deliver stronger outcomes across sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {[
              { title: "Information Technology", desc: "Technology hiring support across software development, infrastructure, cybersecurity, cloud, data, AI, and digital product teams." },
              { title: "Healthcare", desc: "Talent solutions for clinical, non-clinical, healthcare operations, allied health, medical administration, and healthcare support roles." },
              { title: "Industrial", desc: "Workforce solutions for manufacturing, logistics, supply chain, operations, quality assurance, and production-focused environments." },
              { title: "Hospitality", desc: "Recruitment support for hotels, guest services, culinary operations, events, tourism, and hospitality management functions." },
              { title: "Professional Services", desc: "Hiring for business-critical functions including finance, HR, operations, consulting, administration, legal support, and client-facing roles." },
              { title: "Education", desc: "Workforce solutions for academic institutions, EdTech, administration, instructional support, and school management." },
              { title: "Insurance", desc: "Recruitment for underwriting, claims, operations, customer support, compliance, and insurance-related specialist functions." },
              { title: "Retail & E-Commerce", desc: "Staffing support for retail operations, merchandising, store leadership, digital commerce, customer experience, and fulfillment environments." },
              { title: "Construction", desc: "Hiring for project management, civil engineering, site operations, technical roles, and skilled trades across construction environments." },
              { title: "Sales & Marketing", desc: "Recruitment for business development, account management, growth, digital marketing, content, brand, and revenue-generating teams." }
            ].map((industry, idx) => (
              <div key={idx} className="group p-8 rounded-3xl bg-[#0a1125] border border-white/5 hover:border-gold/30 transition-all duration-500 hover:shadow-xl flex flex-col h-full">
                <h4 className="text-lg font-black text-white mb-4 group-hover:text-gold transition-colors leading-tight tracking-tight">{industry.title}</h4>
                <p className="text-slate-400 text-[13px] font-medium leading-relaxed transition-all">{industry.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-20">
            <Link href="/industries" className="inline-flex items-center px-12 py-5 bg-white/5 border border-white/10 rounded-full text-[11px] font-black uppercase tracking-[0.3em] text-white hover:bg-gold hover:text-navy-dark hover:border-gold transition-all duration-500 group/btn">
              Explore Industries We Serve <ArrowRight className="ml-3 w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Why Choose NAYA Staffing */}
      <section className="bg-navy py-32 border-y border-white/5 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full -mr-64 -mt-64"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-navy-light/20 blur-[120px] rounded-full -ml-64 -mb-64"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-start gap-24">
            <div className="lg:w-1/2 sticky top-32">
              <div className="space-y-8 text-center lg:text-left">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.95]">
                  Why Businesses and Professionals <span className="text-gold">Choose NAYA Staffing</span>
                </h2>
                <div className="h-1 w-20 bg-gold/30 rounded-full mx-auto lg:mx-0"></div>
                <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Recruitment success depends on more than filling roles. It requires a clear process, market understanding, strong communication, and a commitment to quality at every stage. NAYA Staffing is built to provide a more strategic recruitment experience for both clients and candidates.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Quality-Focused Recruitment",
                  desc: "We focus on relevance, fit, and hiring alignment so that each introduction supports better long-term outcomes."
                },
                {
                  title: "Responsive, Consultative Approach",
                  desc: "We work as a recruitment partner, not just a service provider, keeping communication clear, proactive, and solution-oriented."
                },
                {
                  title: "Broad Industry and Role Coverage",
                  desc: "From specialist and leadership hiring to growth-stage and operational recruitment, we support a wide range of hiring needs."
                },
                {
                  title: "Scalable Workforce Support",
                  desc: "Whether you need one critical hire or ongoing recruitment support, our services are designed to scale with your business."
                },
                {
                  title: "Brand-Enhancing Candidate Experience",
                  desc: "A professional hiring process strengthens employer reputation and creates a better experience for the people you want to attract."
                },
                {
                  title: "Global and Future-Ready Mindset",
                  desc: "We understand the evolving realities of remote work, international hiring, distributed teams, and modern workforce planning."
                }
              ].map((item, idx) => (
                <div key={idx} className="group p-8 rounded-[32px] bg-[#0a1125] border border-white/5 hover:border-gold/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-gold/5 border border-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-navy-dark transition-all duration-500">
                    <Check className="w-5 h-5 text-gold group-hover:text-inherit transition-colors" />
                  </div>
                  <h4 className="text-white font-black text-[13px] uppercase tracking-widest mb-4 group-hover:text-gold transition-colors leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed group-hover:text-slate-300 transition-colors">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Our Recruitment Process */}
      <section className="bg-navy-dark py-32 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gold/[0.02] blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-28 max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-10 leading-[0.95]">
              A Clear Process Built for <span className="text-gold">Better Hiring Outcomes</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-4xl mx-auto">
              Our recruitment process is designed to reduce friction, improve alignment, and create better matches between employers and candidates. Every engagement is supported by a thoughtful and practical approach to sourcing, screening, communication, and delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Understand the Requirement", desc: "We begin by understanding the role, hiring expectations, business context, team structure, and success profile." },
              { step: "02", title: "Source and Identify Talent", desc: "We activate targeted search strategies to identify qualified professionals through relevant channels and talent networks." },
              { step: "03", title: "Screen and Evaluate", desc: "We assess candidates against role requirements, experience, communication, fit, and other relevant hiring criteria." },
              { step: "04", title: "Present Shortlisted Candidates", desc: "We share qualified profiles with context, helping clients move faster with greater confidence and better decision-making." },
              { step: "05", title: "Coordinate the Hiring Journey", desc: "We support interview coordination, candidate communication, feedback flow, and overall process management." },
              { step: "06", title: "Support Successful Placement", desc: "We stay engaged through the final stages to help ensure a smoother hiring experience and a stronger placement outcome." }
            ].map((step, idx) => (
              <div key={idx} className="group relative p-12 rounded-[48px] bg-[#0a1125] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-[0_30px_80px_rgba(0,0,0,0.5)] flex flex-col h-full overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold/5 blur-3xl rounded-full group-hover:bg-gold/10 transition-all duration-700"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-10">
                    <div className="text-4xl font-black text-white/5 group-hover:text-gold/20 transition-colors duration-500">
                      {step.step}
                    </div>
                    <div className="h-px flex-grow bg-white/5 group-hover:bg-gold/20 transition-colors"></div>
                  </div>
                  <h4 className="text-2xl font-black text-white mb-6 group-hover:text-gold transition-colors tracking-tighter leading-tight">
                    {step.title}
                  </h4>
                  <p className="text-slate-400 text-[15px] font-medium leading-relaxed group-hover:text-slate-300 transition-colors">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-24">
            <Link href="/our-proven-process" className="inline-flex items-center px-12 py-5 bg-white/5 border border-white/10 rounded-full text-[11px] font-black uppercase tracking-[0.4em] text-white hover:bg-gold hover:text-navy-dark hover:border-gold transition-all duration-500 group/btn">
              Learn More About Our Process <ArrowRight className="ml-3 w-5 h-5 group-hover/btn:translate-x-3 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Global Hiring / Remote Hiring Section */}
      <section className="bg-navy py-32 border-y border-white/5 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-navy-light/10 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2 space-y-10 text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-10">
                Hiring Beyond Borders <span className="text-gold">With Confidence</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-4xl mx-auto">
                Today’s talent market is not limited by geography. NAYA Staffing supports businesses seeking to hire across cities, regions, and international markets by providing recruitment solutions aligned with remote hiring, distributed teams, and cross-market talent access. Whether you are expanding into new territories or building a more flexible workforce model, we help simplify the path to better hiring.
              </p>
              <div className="flex flex-row items-center justify-center lg:justify-start gap-4 pt-8">
                <Link href="/global-hiring" className="px-8 py-5 bg-gold text-navy-dark font-black rounded-full hover:bg-gold-hover transition-all uppercase tracking-[0.3em] text-[10px] shadow-[0_10px_40px_rgba(212,175,55,0.2)] transform hover:-translate-y-1 whitespace-nowrap">
                  Explore Global Hiring Solutions
                </Link>
                <Link href="/contact-us" className="px-8 py-5 border border-white/20 text-white font-black rounded-full hover:border-gold hover:text-gold transition-all uppercase tracking-[0.3em] text-[10px] transform hover:-translate-y-1 whitespace-nowrap">
                  Talk to Our Team
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 flex items-center justify-center">
              <div className="relative w-full max-w-lg aspect-square">
                {/* Orbit Circles */}
                <div className="absolute inset-0 rounded-full border border-white/5 animate-spin-slow">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gold rounded-full shadow-[0_0_30px_rgba(212,175,55,1)]"></div>
                </div>
                <div className="absolute inset-12 rounded-full border border-white/5 animate-reverse-spin-slow">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-white/40 rounded-full"></div>
                </div>
                <div className="absolute inset-24 rounded-full border border-white/5"></div>

                {/* Central Globe */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2/3 h-2/3 relative group">
                    <div className="absolute inset-0 bg-gold/10 blur-[100px] rounded-full group-hover:bg-gold/20 transition-all"></div>
                    <Globe className="w-full h-full text-white/5 relative z-10 group-hover:text-white/10 transition-all duration-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Featured Opportunities / Jobs Section */}
      <section className="bg-navy-dark py-32 relative overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24 max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-10">
              Discover New <span className="text-gold">Career Opportunities</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-4xl mx-auto">
              Explore current openings across industries, functions, and experience levels. Whether you are seeking your next full-time role, a contract opportunity, or a career move with stronger growth potential, NAYA Staffing helps connect you with meaningful opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {[
              { title: "Senior Software Architect", loc: "Remote / International", type: "Full-Time", ind: "Information Technology" },
              { title: "Clinical Operations Lead", loc: "New York, NY", type: "Full-Time", ind: "Healthcare" },
              { title: "Project Manager (Energy)", loc: "Houston, TX", type: "Contract", ind: "Industrial" }
            ].map((job, idx) => (
              <div key={idx} className="group relative bg-[#0a1125] border border-white/5 p-12 rounded-[56px] hover:border-gold/30 transition-all duration-700 hover:shadow-[0_40px_100px_rgba(0,0,0,0.6)] flex flex-col h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10">
                  <div className="text-gold font-black text-[10px] uppercase tracking-[0.5em] mb-8 inline-block px-4 py-1.5 bg-gold/5 border border-gold/10 rounded-full">
                    {job.ind}
                  </div>
                  <h4 className="text-2xl md:text-3xl font-black text-white mb-8 tracking-tighter leading-tight group-hover:text-gold transition-colors">
                    {job.title}
                  </h4>
                  <div className="space-y-4 mb-12">
                    <div className="flex items-center gap-4 text-sm font-semibold text-slate-300">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-gold/10 group-hover:border-gold/20 transition-all">
                        <MapPin className="w-4 h-4 text-gold" />
                      </div>
                      {job.loc}
                    </div>
                    <div className="flex items-center gap-4 text-sm font-semibold text-slate-300">
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-gold/10 group-hover:border-gold/20 transition-all">
                        <Briefcase className="w-4 h-4 text-gold" />
                      </div>
                      {job.type}
                    </div>
                  </div>
                  <Link href="/job-openings" className="w-full inline-flex items-center justify-center px-10 py-5 bg-white/5 border border-white/10 rounded-full font-black text-[11px] uppercase tracking-[0.3em] text-white hover:bg-gold hover:text-navy-dark hover:border-gold transition-all duration-500">
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/job-openings" className="w-full sm:w-auto px-12 py-5 bg-gold text-navy-dark font-black rounded-full hover:bg-gold-hover transition-all uppercase tracking-[0.3em] text-[11px] shadow-[0_15px_45px_rgba(212,175,55,0.2)] transform hover:-translate-y-1">
              Browse All Open Jobs
            </Link>
            <Link href="/register-upload-resume" className="w-full sm:w-auto px-12 py-5 border border-white/20 text-white font-black rounded-full hover:border-gold hover:text-gold transition-all uppercase tracking-[0.3em] text-[11px] transform hover:-translate-y-1">
              Upload Resume
            </Link>
          </div>
        </div>
      </section>

      {/* 11. About NAYA Staffing Preview */}
      <section className="bg-navy py-32 border-b border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <div className="lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-gold/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <div className="relative rounded-[56px] overflow-hidden border border-white/10 group-hover:border-gold/30 transition-all duration-700 shadow-2xl">
                <img
                  src="/about-naya.png"
                  alt="About NAYA Staffing"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent"></div>
              </div>
            </div>

            <div className="lg:w-1/2 space-y-10 text-center lg:text-left">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.95]">
                  About <span className="text-gold">NAYA Staffing</span>
                </h2>
                <div className="h-1 w-20 bg-gold/30 rounded-full mx-auto lg:mx-0"></div>
              </div>
              <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed">
                NAYA Staffing is a modern recruitment and workforce solutions company focused on delivering smarter hiring experiences for employers and stronger opportunities for candidates. With a broad industry scope, a premium service mindset, and a commitment to long-term value, we help bridge the gap between talent and business growth.
              </p>
              <div className="pt-6">
                <Link href="/about-us" className="inline-flex items-center px-12 py-5 bg-white/5 border border-white/10 rounded-full text-[11px] font-black uppercase tracking-[0.4em] text-white hover:bg-gold hover:text-navy-dark hover:border-gold transition-all duration-500 group/btn">
                  Learn More About Us <ArrowRight className="ml-3 w-5 h-5 group-hover/btn:translate-x-3 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15. Insights / Resources Section */}
      <section className="bg-navy py-32 border-y border-white/5 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24 max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.95] mb-10">
              Insights for <span className="text-gold">Hiring Teams</span> and <span className="text-gold">Job Seekers</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-4xl mx-auto">
              Access practical recruitment insights, hiring guidance, workforce trends, and career-focused resources designed to help employers make better hiring decisions and candidates move forward with more clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "Hiring Trends Across Competitive Industries",
                desc: "Stay ahead of the curve with our comprehensive analysis of the current talent market.",
                image: "https://breezyrecruit.com/wp-content/uploads/2025/05/Become-a-client-scaled.webp"
              },
              {
                title: "How to Build a Stronger Recruitment Strategy",
                desc: "Practical steps to optimize your hiring process for quality and speed.",
                image: "https://breezyrecruit.com/wp-content/uploads/2025/05/1-4.jpg"
              },
              {
                title: "What Candidates Look for in Today’s Job Market",
                desc: "Understanding the evolving expectations of elite professionals.",
                image: "https://breezyrecruit.com/wp-content/uploads/2025/05/1-1.jpg"
              }
            ].map((insight, idx) => (
              <Link key={idx} href="/insights" className="group relative bg-[#0a1125] border border-white/5 rounded-[48px] overflow-hidden flex flex-col hover:border-gold/30 transition-all duration-700 hover:shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
                <div className="relative h-72 overflow-hidden">
                  <img src={insight.image} alt={insight.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1125] via-transparent to-transparent"></div>
                </div>
                <div className="p-12 flex flex-col flex-grow relative z-10">
                  <h3 className="text-2xl font-black text-white group-hover:text-gold transition-colors mb-6 tracking-tighter leading-tight">
                    {insight.title}
                  </h3>
                  <p className="text-slate-400 text-[15px] font-medium leading-relaxed mb-10 group-hover:text-slate-300 transition-colors">
                    {insight.desc}
                  </p>
                  <div className="mt-auto flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-gold opacity-60 group-hover:opacity-100 transition-opacity">
                    Read Insight <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/insights" className="inline-flex items-center px-12 py-5 bg-white/5 border border-white/10 rounded-full text-[11px] font-black uppercase tracking-[0.4em] text-white hover:bg-gold hover:text-navy-dark hover:border-gold transition-all duration-500 group/btn">
              Visit Our Blog / Insights <ArrowRight className="ml-3 w-5 h-5 group-hover/btn:translate-x-3 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 16. Testimonials Section (Social Proof) */}
      <section className="bg-navy py-32 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-28 max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-10 leading-[0.95]">
              Trusted by Employers. <br />
              <span className="text-gold">Valued by Candidates.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-4xl mx-auto">
              We believe strong recruitment partnerships are built on trust, communication, and results. As NAYA Staffing grows, this section should highlight real feedback from employers and candidates who have experienced our approach firsthand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative p-20 rounded-[56px] bg-white/[0.02] border border-white/10 border-dashed flex flex-col items-center justify-center text-center space-y-8 hover:bg-white/[0.04] transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[56px]"></div>
              <div className="w-20 h-20 rounded-full bg-navy border border-white/10 flex items-center justify-center text-white/20 group-hover:border-gold/30 group-hover:text-gold/40 transition-all duration-700">
                <Users className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500 group-hover:text-gold/60 transition-colors">Pending Launch</p>
                <h4 className="text-xl font-black text-white/40 tracking-tight">Client Testimonial Coming Soon</h4>
              </div>
            </div>

            <div className="group relative p-20 rounded-[56px] bg-white/[0.02] border border-white/10 border-dashed flex flex-col items-center justify-center text-center space-y-8 hover:bg-white/[0.04] transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[56px]"></div>
              <div className="w-20 h-20 rounded-full bg-navy border border-white/10 flex items-center justify-center text-white/20 group-hover:border-gold/30 group-hover:text-gold/40 transition-all duration-700">
                <TrendingUp className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500 group-hover:text-gold/60 transition-colors">In Development</p>
                <h4 className="text-xl font-black text-white/40 tracking-tight">Candidate Success Story Coming Soon</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 17. FAQ Section */}
      <section className="bg-navy-dark py-32 relative overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-[0.95]">
              Frequently Asked <span className="text-gold">Questions</span>
            </h2>
            <div className="h-1 w-20 bg-gold/30 rounded-full mx-auto"></div>
            <p className="text-lg text-slate-400 font-medium mt-8">Everything you need to know about partnering with NAYA Staffing.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "What services does NAYA Staffing provide?", a: "NAYA Staffing provides a range of recruitment and workforce solutions including executive search, permanent recruitment, contract staffing, Recruitment Process Outsourcing, global hiring support, candidate screening, and industry-specific hiring services." },
              { q: "Which industries does NAYA Staffing serve?", a: "NAYA Staffing supports hiring across multiple industries including information technology, healthcare, industrial, hospitality, professional services, education, insurance, retail, construction, sales, and marketing." },
              { q: "Does NAYA Staffing work with both employers and job seekers?", a: "Yes. NAYA Staffing supports employers seeking reliable recruitment solutions and job seekers looking for opportunities aligned with their experience, goals, and preferred career path." },
              { q: "Can NAYA Staffing help with remote or international hiring?", a: "Yes. NAYA Staffing supports businesses exploring remote, distributed, and cross-border hiring strategies through flexible global hiring solutions." },
              { q: "How can employers get started with NAYA Staffing?", a: "Employers can schedule a consultation, share their hiring requirements, and speak with the NAYA Staffing team about the most suitable recruitment solution for their needs." },
              { q: "How can candidates apply for jobs through NAYA Staffing?", a: "Candidates can browse open positions, register through the website, and upload their resume to be considered for relevant opportunities." }
            ].map((faq, idx) => (
              <div key={idx} className={`group rounded-[32px] overflow-hidden border transition-all duration-500 ${activeFaq === idx ? 'bg-[#0a1125] border-gold/30 shadow-2xl' : 'bg-white/[0.02] border-white/5 hover:border-white/10'}`}>
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-8 flex items-center justify-between text-left transition-all"
                >
                  <span className={`font-black text-lg md:text-xl tracking-tight pr-8 transition-colors duration-500 ${activeFaq === idx ? 'text-gold' : 'text-white'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-500 ${activeFaq === idx ? 'bg-gold border-gold text-navy-dark rotate-180' : 'bg-white/5 border-white/10 text-white/40 group-hover:border-gold/30 group-hover:text-gold'}`}>
                    {activeFaq === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <div className={`transition-all duration-500 ease-in-out ${activeFaq === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-8 pt-0 text-slate-400 text-[15px] font-medium leading-relaxed">
                    <div className="h-px w-full bg-white/5 mb-8"></div>
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 18. Final CTA Section */}
      <section className="relative py-48 px-4 overflow-hidden bg-navy-dark border-t border-white/5">
        {/* Deep Atmospheric Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gold/[0.03] blur-[180px] rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-16">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] drop-shadow-2xl">
              Ready to Build Your Team or <br />
              <span className="text-gold">Take the Next Step in Your Career?</span>
            </h2>
            <p className="text-lg md:text-2xl text-slate-400 max-w-4xl mx-auto font-medium leading-relaxed">
              Whether you are hiring talent, expanding your workforce, or searching for new opportunities, NAYA Staffing is here to support your next move with a more strategic and professional recruitment experience.
            </p>
          </div>

          <div className="flex flex-col items-center gap-12 pt-8">
            {/* Primary Employer CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-2xl">
              <Link href="/contact-us" className="w-full sm:w-auto px-14 py-6 bg-gold text-navy-dark font-black rounded-full hover:bg-gold-hover hover:-translate-y-1.5 transition-all shadow-[0_20px_50px_rgba(212,175,55,0.3)] uppercase tracking-[0.3em] text-[11px]">
                Schedule Consultation
              </Link>
              <Link href="/become-a-client" className="w-full sm:w-auto px-14 py-6 border border-white/20 text-white font-black rounded-full hover:border-gold hover:text-gold hover:-translate-y-1.5 transition-all uppercase tracking-[0.3em] text-[11px] backdrop-blur-md">
                Become a Client
              </Link>
            </div>

            {/* Secondary Candidate CTAs */}
            <div className="flex items-center justify-center gap-12 pt-4 border-t border-white/5 w-full max-w-lg">
              <Link href="/job-openings" className="group flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-gold transition-all">
                <span className="w-2 h-2 rounded-full bg-gold/40 group-hover:bg-gold transition-colors"></span>
                Browse Open Jobs
              </Link>
              <Link href="/register-upload-resume" className="group flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.4em] text-white/40 hover:text-gold transition-all">
                <span className="w-2 h-2 rounded-full bg-gold/40 group-hover:bg-gold transition-colors"></span>
                Upload Resume
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
