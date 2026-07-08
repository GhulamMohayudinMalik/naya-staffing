'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X, Globe, Briefcase, Users, Info, MessageSquare, Search, FileText } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMobileSection, setActiveMobileSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setActiveMobileSection(null); // Reset accordions when closed
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled
      ? 'bg-[#040814]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl'
      : 'bg-transparent border-transparent'
      }`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 relative z-50 ${scrolled ? 'py-2 lg:py-4' : 'py-4 lg:py-6'}`}>
        <div className="flex items-center justify-between h-16 lg:h-20 gap-4">
          
          {/* Section 1: Brand Anchor */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="group flex items-center">
              <Image 
                src="/images/logo.jpeg" 
                alt="NAYA Staffing Logo" 
                width={200} 
                height={50} 
                className="h-10 lg:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 rounded-lg"
                priority
              />
            </Link>
          </div>
          
          {/* Section 2: Centered Hub */}
          <div className="hidden xl:flex items-center justify-center space-x-3 xl:space-x-6 flex-grow px-2">
            <Link href="/" className="font-semibold text-[10px] xl:text-[11px] uppercase tracking-wider py-8 text-white/90 hover:text-gold transition-colors whitespace-nowrap">
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group/nav">
              <Link href="/services" className="flex items-center font-semibold text-[10px] xl:text-[11px] uppercase tracking-wider py-8 text-white/90 hover:text-gold transition-colors whitespace-nowrap">
                Services
                <ChevronDown className="ml-1.5 w-3 h-3 group-hover/nav:rotate-180 transition-transform duration-300" />
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 mt-0 w-[760px] xl:w-[900px] rounded-3xl shadow-2xl bg-[#0B132B]/95 backdrop-blur-2xl border border-white/10 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform origin-top translate-y-4 group-hover/nav:translate-y-0 z-50 overflow-hidden">
                <div className="p-8 grid grid-cols-3 gap-6 text-left">
                  {/* Column 1: Core Hiring */}
                  <div className="space-y-3">
                    <h4 className="text-gold text-[10px] font-black uppercase tracking-widest border-b border-white/5 pb-2">Core Recruitment</h4>
                    <Link href="/executive-search" className="block py-1 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase px-3">Executive Search</Link>
                    <Link href="/permanent-recruitment" className="block py-1 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase px-3">Permanent Recruitment</Link>
                    <Link href="/direct-hire" className="block py-1 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase px-3">Direct Hire</Link>
                    <Link href="/headhunting-services" className="block py-1 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase px-3">Headhunting</Link>
                    <Link href="/technical-recruitment" className="block py-1 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase px-3">Technical Recruitment</Link>
                    <Link href="/sales-recruitment" className="block py-1 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase px-3">Sales Recruitment</Link>
                  </div>
                  {/* Column 2: Flexible & Scalable Solutions */}
                  <div className="space-y-3">
                    <h4 className="text-gold text-[10px] font-black uppercase tracking-widest border-b border-white/5 pb-2">Workforce Flexibility</h4>
                    <Link href="/contract-staffing" className="block py-1 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase px-3">Contract Staffing</Link>
                    <Link href="/contract-to-hire" className="block py-1 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase px-3">Contract-to-Hire</Link>
                    <Link href="/temporary-staffing" className="block py-1 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase px-3">Temporary Staffing</Link>
                    <Link href="/recruitment-process-outsourcing" className="block py-1 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase px-3">RPO Solutions</Link>
                    <Link href="/volume-recruitment" className="block py-1 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase px-3">Volume Hiring</Link>
                    <Link href="/startup-hiring-solutions" className="block py-1 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase px-3">Startup Scaling</Link>
                  </div>
                  {/* Column 3: Modern & Global Programs */}
                  <div className="space-y-3">
                    <h4 className="text-gold text-[10px] font-black uppercase tracking-widest border-b border-white/5 pb-2">Global & Strategic</h4>
                    <Link href="/global-hiring" className="block py-1 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase px-3">Global Hiring Solutions</Link>
                    <Link href="/remote-hiring-solutions" className="block py-1 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase px-3">Remote Hiring</Link>
                    <Link href="/screening-assessment" className="block py-1 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase px-3">Screening & Assessment</Link>
                    <Link href="/diversity-hiring" className="block py-1 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase px-3">Diversity Hiring</Link>
                    <Link href="/campus-recruitment" className="block py-1 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase px-3">Campus Recruitment</Link>
                    <Link href="/employer-branding" className="block py-1 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase px-3">Employer Branding</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Employers Dropdown */}
            <div className="relative group/nav">
              <Link href="/employers" className="flex items-center font-semibold text-[10px] xl:text-[11px] uppercase tracking-wider py-8 text-white/90 hover:text-gold transition-colors whitespace-nowrap">
                Employers
                <ChevronDown className="ml-1.5 w-3 h-3 group-hover/nav:rotate-180 transition-transform duration-300" />
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 mt-0 w-64 rounded-2xl shadow-2xl bg-[#0B132B]/95 backdrop-blur-2xl border border-white/10 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform origin-top translate-y-4 group-hover/nav:translate-y-0 z-50 overflow-hidden">
                <div className="py-4 px-2">
                  <Link href="/employers" className="block px-6 py-3 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase">Overview</Link>
                  <Link href="/employers/employer-solutions" className="block px-6 py-3 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase">Employer Solutions</Link>
                  <Link href="/employers/become-a-client" className="block px-6 py-3 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase">Become a Client</Link>
                  <Link href="/employers/our-proven-process" className="block px-6 py-3 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase">Our Process</Link>
                </div>
              </div>
            </div>

            {/* Job Seekers Dropdown */}
            <div className="relative group/nav">
              <Link href="/job-seekers" className="flex items-center font-semibold text-[10px] xl:text-[11px] uppercase tracking-wider py-8 text-white/90 hover:text-gold transition-colors whitespace-nowrap">
                Job Seekers
                <ChevronDown className="ml-1.5 w-3 h-3 group-hover/nav:rotate-180 transition-transform duration-300" />
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 mt-0 w-72 rounded-2xl shadow-2xl bg-[#0B132B]/95 backdrop-blur-2xl border border-white/10 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform origin-top translate-y-4 group-hover/nav:translate-y-0 z-50 overflow-hidden">
                <div className="py-4 px-2">
                  <Link href="/job-seekers" className="block px-6 py-3 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase">Job Seekers Overview</Link>
                  <Link href="/job-seekers/why-choose-us" className="block px-6 py-3 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase">Why Choose Us</Link>
                  <Link href="/job-seekers/reverse-recruitment" className="block px-6 py-3 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase">Reverse Recruitment</Link>
                  <Link href="/job-seekers/pricing" className="block px-6 py-3 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase">Pricing</Link>
                  <Link href="/job-seekers/register-upload-resume" className="block px-6 py-3 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase">Register &amp; Upload Resume</Link>
                  <Link href="/job-openings" className="block px-6 py-3 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase">Browse Open Jobs</Link>
                  <Link href="/career-advice" className="block px-6 py-3 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase">Career Advice</Link>
                </div>
              </div>
            </div>

            {/* Industries Dropdown */}
            <div className="relative group/nav">
              <Link href="/our-industries" className="flex items-center font-semibold text-[10px] xl:text-[11px] uppercase tracking-wider py-8 text-white/90 hover:text-gold transition-colors whitespace-nowrap">
                Industries
                <ChevronDown className="ml-1.5 w-3 h-3 group-hover/nav:rotate-180 transition-transform duration-300" />
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 mt-0 w-[840px] xl:w-[1000px] rounded-3xl shadow-2xl bg-[#0B132B]/95 backdrop-blur-2xl border border-white/10 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform origin-top translate-y-4 group-hover/nav:translate-y-0 z-50 overflow-hidden">
                <div className="p-8 grid grid-cols-4 gap-6 text-left">
                  {/* Column 1 */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Link href="/industries/information-technology" className="block text-gold text-[10px] font-black uppercase tracking-widest border-b border-white/5 pb-1 hover:text-white transition-colors">Information Technology</Link>
                      <Link href="/industries/information-technology/software-development" className="block text-[10px] font-semibold text-gray-400 hover:text-gold transition-all uppercase pl-2">Software Development</Link>
                      <Link href="/industries/information-technology/cybersecurity" className="block text-[10px] font-semibold text-gray-400 hover:text-gold transition-all uppercase pl-2">Cybersecurity</Link>
                      <Link href="/industries/information-technology/cloud-computing" className="block text-[10px] font-semibold text-gray-400 hover:text-gold transition-all uppercase pl-2">Cloud Computing</Link>
                    </div>
                    <div className="space-y-2">
                      <Link href="/industries/healthcare" className="block text-gold text-[10px] font-black uppercase tracking-widest border-b border-white/5 pb-1 hover:text-white transition-colors">Healthcare</Link>
                      <Link href="/industries/healthcare/nursing-allied-health" className="block text-[10px] font-semibold text-gray-400 hover:text-gold transition-all uppercase pl-2">Nursing & Allied</Link>
                      <Link href="/industries/healthcare/health-informatics" className="block text-[10px] font-semibold text-gray-400 hover:text-gold transition-all uppercase pl-2">Health Informatics</Link>
                      <Link href="/industries/healthcare/medical-devices" className="block text-[10px] font-semibold text-gray-400 hover:text-gold transition-all uppercase pl-2">Medical Devices</Link>
                    </div>
                    <div className="space-y-2">
                      <Link href="/industries/industrial" className="block text-gold text-[10px] font-black uppercase tracking-widest border-b border-white/5 pb-1 hover:text-white transition-colors">Industrial</Link>
                      <Link href="/industries/industrial/manufacturing-operations" className="block text-[10px] font-semibold text-gray-400 hover:text-gold transition-all uppercase pl-2">Manufacturing Ops</Link>
                      <Link href="/industries/industrial/logistics-supply-chain" className="block text-[10px] font-semibold text-gray-400 hover:text-gold transition-all uppercase pl-2">Logistics & Supply</Link>
                      <Link href="/industries/industrial/quality-assurance" className="block text-[10px] font-semibold text-gray-400 hover:text-gold transition-all uppercase pl-2">Quality Assurance</Link>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Link href="/industries/hospitality" className="block text-gold text-[10px] font-black uppercase tracking-widest border-b border-white/5 pb-1 hover:text-white transition-colors">Hospitality</Link>
                      <Link href="/industries/hospitality/hotel-management" className="block text-[10px] font-semibold text-gray-400 hover:text-gold transition-all uppercase pl-2">Hotel Management</Link>
                      <Link href="/industries/hospitality/event-planning" className="block text-[10px] font-semibold text-gray-400 hover:text-gold transition-all uppercase pl-2">Event Planning</Link>
                      <Link href="/industries/hospitality/culinary-arts" className="block text-[10px] font-semibold text-gray-400 hover:text-gold transition-all uppercase pl-2">Culinary Arts</Link>
                    </div>
                    <div className="space-y-2">
                      <Link href="/industries/professional-services" className="block text-gold text-[10px] font-black uppercase tracking-widest border-b border-white/5 pb-1 hover:text-white transition-colors">Professional Services</Link>
                      <Link href="/industries/professional-services/financial-services" className="block text-[10px] font-semibold text-gray-400 hover:text-gold transition-all uppercase pl-2">Financial Services</Link>
                      <Link href="/industries/professional-services/legal-staffing" className="block text-[10px] font-semibold text-gray-400 hover:text-gold transition-all uppercase pl-2">Legal Staffing</Link>
                      <Link href="/industries/professional-services/hr-consulting" className="block text-[10px] font-semibold text-gray-400 hover:text-gold transition-all uppercase pl-2">HR Consulting</Link>
                    </div>
                    <div className="space-y-2">
                      <Link href="/industries/education" className="block text-gold text-[10px] font-black uppercase tracking-widest border-b border-white/5 pb-1 hover:text-white transition-colors">Education</Link>
                      <Link href="/industries/education/k-12-administration" className="block text-[10px] font-semibold text-gray-400 hover:text-gold transition-all uppercase pl-2">K-12 Admin</Link>
                      <Link href="/industries/education/higher-ed-faculty" className="block text-[10px] font-semibold text-gray-400 hover:text-gold transition-all uppercase pl-2">Higher Ed Faculty</Link>
                      <Link href="/industries/education/edtech-specialists" className="block text-[10px] font-semibold text-gray-400 hover:text-gold transition-all uppercase pl-2">EdTech Specialists</Link>
                    </div>
                  </div>

                  {/* Column 3 */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Link href="/industries/insurance" className="block text-gold text-[10px] font-black uppercase tracking-widest border-b border-white/5 pb-1 hover:text-white transition-colors">Insurance</Link>
                      <Link href="/industries/insurance/actuarial-services" className="block text-[10px] font-semibold text-gray-400 hover:text-gold transition-all uppercase pl-2">Actuarial Services</Link>
                      <Link href="/industries/insurance/claims-management" className="block text-[10px] font-semibold text-gray-400 hover:text-gold transition-all uppercase pl-2">Claims Management</Link>
                      <Link href="/industries/insurance/risk-underwriting" className="block text-[10px] font-semibold text-gray-400 hover:text-gold transition-all uppercase pl-2">Risk Underwriting</Link>
                    </div>
                    <div className="space-y-2">
                      <Link href="/industries/retail-ecommerce" className="block text-gold text-[10px] font-black uppercase tracking-widest border-b border-white/5 pb-1 hover:text-white transition-colors">Retail & E-Commerce</Link>
                      <Link href="/industries/retail-ecommerce/store-leadership" className="block text-[10px] font-semibold text-gray-400 hover:text-gold transition-all uppercase pl-2">Store Leadership</Link>
                      <Link href="/industries/retail-ecommerce/merchandising" className="block text-[10px] font-semibold text-gray-400 hover:text-gold transition-all uppercase pl-2">Merchandising</Link>
                      <Link href="/industries/retail-ecommerce/ecommerce-operations" className="block text-[10px] font-semibold text-gray-400 hover:text-gold transition-all uppercase pl-2">E-Commerce Ops</Link>
                    </div>
                    <div className="space-y-2">
                      <Link href="/industries/construction" className="block text-gold text-[10px] font-black uppercase tracking-widest border-b border-white/5 pb-1 hover:text-white transition-colors">Construction</Link>
                      <Link href="/industries/construction/project-management" className="block text-[10px] font-semibold text-gray-400 hover:text-gold transition-all uppercase pl-2">Project Management</Link>
                      <Link href="/industries/construction/civil-engineering" className="block text-[10px] font-semibold text-gray-400 hover:text-gold transition-all uppercase pl-2">Civil Engineering</Link>
                      <Link href="/industries/construction/skilled-trades" className="block text-[10px] font-semibold text-gray-400 hover:text-gold transition-all uppercase pl-2">Skilled Trades</Link>
                    </div>
                  </div>

                  {/* Column 4 */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Link href="/industries/marketing" className="block text-gold text-[10px] font-black uppercase tracking-widest border-b border-white/5 pb-1 hover:text-white transition-colors">Marketing</Link>
                      <Link href="/industries/marketing/digital-strategy" className="block text-[10px] font-semibold text-gray-400 hover:text-gold transition-all uppercase pl-2">Digital Strategy</Link>
                      <Link href="/industries/marketing/content-creation" className="block text-[10px] font-semibold text-gray-400 hover:text-gold transition-all uppercase pl-2">Content Creation</Link>
                      <Link href="/industries/marketing/performance-marketing" className="block text-[10px] font-semibold text-gray-400 hover:text-gold transition-all uppercase pl-2">Performance Marketing</Link>
                    </div>
                    <div className="space-y-2">
                      <Link href="/industries/sales" className="block text-gold text-[10px] font-black uppercase tracking-widest border-b border-white/5 pb-1 hover:text-white transition-colors">Sales</Link>
                      <Link href="/industries/sales/enterprise-sales" className="block text-[10px] font-semibold text-gray-400 hover:text-gold transition-all uppercase pl-2">Enterprise Sales</Link>
                      <Link href="/industries/sales/account-management" className="block text-[10px] font-semibold text-gray-400 hover:text-gold transition-all uppercase pl-2">Account Management</Link>
                      <Link href="/industries/sales/business-development" className="block text-[10px] font-semibold text-gray-400 hover:text-gold transition-all uppercase pl-2">Business Development</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/job-openings" className="font-semibold text-[10px] xl:text-[11px] uppercase tracking-wider py-8 text-white/90 hover:text-gold transition-colors whitespace-nowrap">
              Open Jobs
            </Link>

            {/* About Us Dropdown */}
            <div className="relative group/nav">
              <Link href="/about-us" className="flex items-center font-semibold text-[10px] xl:text-[11px] uppercase tracking-wider py-8 text-white/90 hover:text-gold transition-colors whitespace-nowrap">
                About Us
                <ChevronDown className="ml-1.5 w-3 h-3 group-hover/nav:rotate-180 transition-transform duration-100" />
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 mt-0 w-72 rounded-2xl shadow-2xl bg-[#0B132B]/95 backdrop-blur-2xl border border-white/10 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 transform origin-top translate-y-4 group-hover/nav:translate-y-0 z-50 overflow-hidden">
                <div className="py-4 px-2">
                  <Link href="/about-us" className="block px-6 py-3 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase">About Us Overview</Link>
                  <Link href="/about-us/about-company" className="block px-6 py-3 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase">About Company</Link>
                  <Link href="/contact-us" className="block px-6 py-3 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase">Contact Us</Link>
                  <Link href="/insights" className="block px-6 py-3 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase">Insights</Link>
                  <Link href="/success-stories" className="block px-6 py-3 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase">Success Stories</Link>
                  <Link href="/case-studies" className="block px-6 py-3 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase">Case Studies</Link>
                  <Link href="/testimonials" className="block px-6 py-3 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase">Testimonials</Link>
                  <Link href="/faqs" className="block px-6 py-3 text-[10px] font-black tracking-widest text-gray-400 hover:bg-white/5 hover:text-gold rounded-xl transition-all uppercase">FAQ'S</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Action Anchor */}
          <div className="hidden xl:flex items-center shrink-0">
            <Link href="/contact-us" className="bg-gold hover:bg-gold-hover text-navy-dark px-4 xl:px-6 py-2.5 xl:py-3 rounded-full font-bold text-[11px] xl:text-[13px] tracking-tight transition-all duration-500 shadow-[0_8px_32px_rgba(212,175,55,0.2)] hover:shadow-[0_12px_48px_rgba(212,175,55,0.4)] transform hover:-translate-y-1 flex items-center gap-2 whitespace-nowrap btn-sheen">
              <svg aria-hidden="true" className="w-3.5 h-3.5 xl:w-4 xl:h-4 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 64h-48V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H160V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V160h352v298a6 6 0 0 1-6 6zm-52.849-200.65L198.842 404.519c-4.705 4.667-12.303 4.637-16.971-.068l-75.091-75.699c-4.667-4.705-4.637-12.303.068-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l44.104 44.461 111.072-110.181c4.705-4.667 12.303-4.637 16.971.068l22.536 22.718c4.667 4.705 4.636 12.303-.069 16.97z"></path></svg>
              Schedule Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center shrink-0">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gold transition-colors p-2"
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-[#040814]/98 backdrop-blur-2xl transition-all duration-500 xl:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="flex flex-col h-full pt-28 px-6 overflow-y-auto pb-12">
          <div className="space-y-4">
            
            {/* Home Link */}
            <Link 
              href="/" 
              onClick={() => setIsMenuOpen(false)} 
              className="block text-xl font-black text-white hover:text-gold tracking-tight border-b border-white/5 pb-3 uppercase"
            >
              Home
            </Link>
            
            {/* Services Accordion */}
            <div className="border-b border-white/5 pb-3">
              <button 
                onClick={() => setActiveMobileSection(activeMobileSection === 'services' ? null : 'services')}
                className="w-full flex items-center justify-between text-xl font-black text-white hover:text-gold tracking-tight uppercase text-left"
              >
                Services
                <ChevronDown className={`w-5 h-5 text-gold transition-transform duration-300 ${activeMobileSection === 'services' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${activeMobileSection === 'services' ? 'max-h-[800px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 space-y-4 border-l border-gold/20">
                  <Link href="/services" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gold/80 hover:text-gold uppercase tracking-wider">Services Overview</Link>
                  
                  <div className="space-y-2">
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">Core Recruitment</p>
                    <Link href="/executive-search" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase pl-2">Executive Search</Link>
                    <Link href="/permanent-recruitment" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase pl-2">Permanent Recruitment</Link>
                    <Link href="/direct-hire" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase pl-2">Direct Hire</Link>
                    <Link href="/headhunting-services" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase pl-2">Headhunting</Link>
                    <Link href="/technical-recruitment" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase pl-2">Technical Recruitment</Link>
                    <Link href="/sales-recruitment" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase pl-2">Sales Recruitment</Link>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">Workforce Flexibility</p>
                    <Link href="/contract-staffing" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase pl-2">Contract Staffing</Link>
                    <Link href="/contract-to-hire" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase pl-2">Contract-to-Hire</Link>
                    <Link href="/temporary-staffing" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase pl-2">Temporary Staffing</Link>
                    <Link href="/recruitment-process-outsourcing" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase pl-2">RPO Solutions</Link>
                    <Link href="/volume-recruitment" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase pl-2">Volume Hiring</Link>
                    <Link href="/startup-hiring-solutions" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase pl-2">Startup Scaling</Link>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">Global & Strategic</p>
                    <Link href="/global-hiring" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase pl-2">Global Hiring</Link>
                    <Link href="/remote-hiring-solutions" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase pl-2">Remote Hiring</Link>
                    <Link href="/screening-assessment" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase pl-2">Screening & Assessment</Link>
                    <Link href="/diversity-hiring" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase pl-2">Diversity Hiring</Link>
                    <Link href="/campus-recruitment" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase pl-2">Campus Recruitment</Link>
                    <Link href="/employer-branding" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase pl-2">Employer Branding</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Employers Accordion */}
            <div className="border-b border-white/5 pb-3">
              <button 
                onClick={() => setActiveMobileSection(activeMobileSection === 'employers' ? null : 'employers')}
                className="w-full flex items-center justify-between text-xl font-black text-white hover:text-gold tracking-tight uppercase text-left"
              >
                Employers
                <ChevronDown className={`w-5 h-5 text-gold transition-transform duration-300 ${activeMobileSection === 'employers' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${activeMobileSection === 'employers' ? 'max-h-[300px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 space-y-4 border-l border-gold/20">
                  <Link href="/employers" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase">Overview</Link>
                  <Link href="/employers/employer-solutions" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase">Employer Solutions</Link>
                  <Link href="/employers/become-a-client" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase">Become a Client</Link>
                  <Link href="/employers/our-proven-process" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase">Our Process</Link>
                </div>
              </div>
            </div>

            {/* Job Seekers Accordion */}
            <div className="border-b border-white/5 pb-3">
              <button 
                onClick={() => setActiveMobileSection(activeMobileSection === 'job-seekers' ? null : 'job-seekers')}
                className="w-full flex items-center justify-between text-xl font-black text-white hover:text-gold tracking-tight uppercase text-left"
              >
                Job Seekers
                <ChevronDown className={`w-5 h-5 text-gold transition-transform duration-300 ${activeMobileSection === 'job-seekers' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${activeMobileSection === 'job-seekers' ? 'max-h-[400px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 space-y-4 border-l border-gold/20">
                  <Link href="/job-seekers" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase">Job Seekers Overview</Link>
                  <Link href="/job-seekers/why-choose-us" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase">Why Choose Us</Link>
                  <Link href="/job-seekers/reverse-recruitment" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase">Reverse Recruitment</Link>
                  <Link href="/job-seekers/pricing" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase">Pricing</Link>
                  <Link href="/job-seekers/register-upload-resume" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gold hover:text-white uppercase">Register &amp; Upload Resume</Link>
                  <Link href="/job-openings" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase">Browse Open Jobs</Link>
                  <Link href="/career-advice" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase">Career Advice</Link>
                </div>
              </div>
            </div>

            {/* Industries Accordion */}
            <div className="border-b border-white/5 pb-3">
              <button 
                onClick={() => setActiveMobileSection(activeMobileSection === 'industries' ? null : 'industries')}
                className="w-full flex items-center justify-between text-xl font-black text-white hover:text-gold tracking-tight uppercase text-left"
              >
                Industries
                <ChevronDown className={`w-5 h-5 text-gold transition-transform duration-300 ${activeMobileSection === 'industries' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${activeMobileSection === 'industries' ? 'max-h-[500px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 space-y-4 border-l border-gold/20">
                  <Link href="/our-industries" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gold/80 hover:text-gold uppercase tracking-wider mb-2">All Industries</Link>
                  <div className="grid grid-cols-2 gap-4">
                    <Link href="/industries/information-technology" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase">Information Tech</Link>
                    <Link href="/industries/healthcare" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase">Healthcare</Link>
                    <Link href="/industries/industrial" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase">Industrial</Link>
                    <Link href="/industries/hospitality" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase">Hospitality</Link>
                    <Link href="/industries/professional-services" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase">Professional Services</Link>
                    <Link href="/industries/education" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase">Education</Link>
                    <Link href="/industries/insurance" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase">Insurance</Link>
                    <Link href="/industries/retail-ecommerce" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase">Retail & E-commerce</Link>
                    <Link href="/industries/construction" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase">Construction</Link>
                    <Link href="/industries/marketing" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase">Marketing</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Accordion */}
            <div className="border-b border-white/5 pb-3">
              <button 
                onClick={() => setActiveMobileSection(activeMobileSection === 'company' ? null : 'company')}
                className="w-full flex items-center justify-between text-xl font-black text-white hover:text-gold tracking-tight uppercase text-left"
              >
                Company
                <ChevronDown className={`w-5 h-5 text-gold transition-transform duration-300 ${activeMobileSection === 'company' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${activeMobileSection === 'company' ? 'max-h-[400px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 space-y-4 border-l border-gold/20">
                  <Link href="/about-us" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase">About Us Overview</Link>
                  <Link href="/about-us/about-company" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase">About Company</Link>
                  <Link href="/contact-us" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase">Contact Us</Link>
                  <Link href="/insights" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase">Insights</Link>
                  <Link href="/success-stories" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase">Success Stories</Link>
                  <Link href="/case-studies" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase">Case Studies</Link>
                  <Link href="/testimonials" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase">Testimonials</Link>
                  <Link href="/faqs" onClick={() => setIsMenuOpen(false)} className="block text-xs font-bold text-gray-400 hover:text-white uppercase">FAQs</Link>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-8 pt-8 pb-4">
            <Link 
              href="/contact-us" 
              onClick={() => setIsMenuOpen(false)}
              className="block w-full py-5 text-center bg-gold text-navy-dark rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-gold-hover shadow-xl transition-all btn-sheen"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
