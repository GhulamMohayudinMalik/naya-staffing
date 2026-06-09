"use client";

import { Typewriter } from "@/components/Typewriter";
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Send, 
  Upload,
  Clock, 
  Check, 
  ChevronRight, 
  HelpCircle, 
  FileText,
  Briefcase,
  Users,
  Target,
  Sparkles,
  ArrowUpRight,
  Info
} from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

export default function RegisterAndUploadResumePage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>('');
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    currentLocation: '',
    preferredRole: '',
    industry: '',
    yearsExperience: '',
    employmentStatus: '',
    linkedinProfile: '',
    coverNote: '',
    workModel: '',
    salaryExpectations: '',
    availability: '',
    consent: false
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please accept the consent checkbox to register.");
      return;
    }
    console.log('Candidate Registration Submitted:', formData, 'File name:', fileName);
    setFormSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const steps = [
    {
      title: "You Submit Your Details",
      desc: "The candidate completes the registration form and uploads a resume."
    },
    {
      title: "Your Profile Enters the Candidate System",
      desc: "Your information becomes part of the NAYA Staffing candidate pipeline rather than staying as a one-off submission."
    },
    {
      title: "You Become Visible for Opportunity Matching",
      desc: "Your profile can now support both immediate job search activity and broader future opportunity consideration."
    },
    {
      title: "You Can Continue Through the Candidate Journey",
      desc: "From here, you can browse jobs, explore reverse recruitment, review pricing, or use career advice content depending on your goals."
    },
    {
      title: "Your Job Search Becomes More Structured",
      desc: "The process becomes less random and more connected to a broader candidate experience."
    }
  ];

  const benefits = [
    {
      title: "Stronger Resume Visibility",
      desc: "Your profile becomes easier to consider for opportunities beyond a single direct application."
    },
    {
      title: "Entry Into the Candidate System",
      desc: "You become part of a broader opportunity flow rather than only a one-time applicant."
    },
    {
      title: "Access to Current and Future Roles",
      desc: "Registration helps support both immediate job search activity and broader future matching potential."
    },
    {
      title: "A Better Starting Point for Reverse Recruitment",
      desc: "Candidates interested in a more proactive strategy should see this page as the natural first step."
    },
    {
      title: "A More Structured Candidate Experience",
      desc: "Instead of navigating the job market blindly, you begin with a clear and organized platform action."
    },
    {
      title: "A More Professional Presence",
      desc: "This page should make candidates feel that uploading their resume is part of building a more credible and visible professional profile."
    }
  ];

  const nextPaths = [
    {
      title: "Browse Job Openings",
      desc: "For candidates who want to act immediately on live opportunities.",
      href: "/job-openings"
    },
    {
      title: "Explore Reverse Recruitment",
      desc: "For candidates who want a more proactive and premium approach beyond direct applications.",
      href: "/job-seekers/reverse-recruitment"
    },
    {
      title: "Review Pricing",
      desc: "For users who want to understand premium support options more clearly.",
      href: "/job-seekers/pricing"
    },
    {
      title: "Read Career Advice",
      desc: "For candidates who want resume, interview, or broader job-search support.",
      href: "/career-advice"
    }
  ];

  const faqs = [
    {
      question: "How do I register with NAYA Staffing?",
      answer: "You register by completing the candidate form on this page and uploading your resume."
    },
    {
      question: "Why should I upload my resume?",
      answer: "Uploading your resume improves your visibility and helps you enter a broader opportunity system rather than relying only on one-off applications."
    },
    {
      question: "What happens after I register?",
      answer: "After registering, your profile enters the candidate system, becomes part of the visibility pipeline, and supports both current and future opportunity matching."
    },
    {
      question: "Do I need to be actively applying for a job right now to register?",
      answer: "No. Registration can also support passive candidates or job seekers who want stronger future visibility."
    },
    {
      question: "Is this page connected to reverse recruitment?",
      answer: "Yes. Registering and uploading your resume should be positioned as the natural first step for candidates who may also want to explore reverse recruitment."
    },
    {
      question: "Where does this page sit in the site structure?",
      answer: "This page sits under the approved Job Seekers section alongside Why Choose Us?, Reverse Recruitment, and Pricing."
    }
  ];

  const relatedLinks = [
    { name: "Job Seekers Overview", href: "/job-seekers", desc: "Return to the main parent section for candidates." },
    { name: "Why Choose Us?", href: "/job-seekers/why-choose-us", desc: "Learn what sets NAYA Staffing apart for job seekers." },
    { name: "Reverse Recruitment", href: "/job-seekers/reverse-recruitment", desc: "Learn about our proactive marketing model." },
    { name: "Pricing", href: "/job-seekers/pricing", desc: "Review candidate services and plans." },
    { name: "Job Openings", href: "/job-openings", desc: "Browse and apply to live job postings." },
    { name: "Career Advice", href: "/career-advice", desc: "Check out resume, interviewing, and job hunt tips." }
  ];

  const industries = [
    "Information Technology",
    "Healthcare",
    "Industrial / Manufacturing",
    "Hospitality",
    "Professional Services",
    "Education",
    "Insurance",
    "Retail & E-Commerce",
    "Construction",
    "Marketing",
    "Sales",
    "Other"
  ];

  const employmentStatuses = [
    "Actively Looking",
    "Open to Offers",
    "Not Looking But Open",
    "Employed (Contractor)",
    "Currently Unemployed"
  ];

  const workModels = [
    "On-site",
    "Hybrid",
    "Remote",
    "Open to All"
  ];

  return (
    <main className="bg-[#040814] text-white min-h-screen selection:bg-gold selection:text-navy-dark font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 md:pt-32 xl:pt-40 pb-16 md:pb-20 xl:pb-24 overflow-hidden">
        <VideoBackground 
          src="/videos/hero.mp4" 
          overlayOpacity="bg-navy-dark/80"
        />
        
        {/* Ambient Glows */}
        <div className="btn-rotating-border absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 blur-[120px] rounded-full animate-pulse btn-auto-sheen border border-white/5"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-navy-light/20 blur-[150px] rounded-full animate-float"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <div className="btn-rotating-border inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-gold/20 mb-6 backdrop-blur-md animate-fade-in-up btn-auto-sheen border border-white/5">
              <span className="text-gold text-xs font-bold uppercase tracking-widest">Join the Candidate Network</span>
            </div>
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-black tracking-tighter mb-6 leading-none uppercase">
            <Typewriter>
              Register &amp; Upload Your Resume to Get <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-gold via-white/80 to-gold animate-gradient">
                Seen for Better Opportunities.
              </span>
            </Typewriter>
          </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up animate-delay-200">
              NAYA Staffing helps candidates move beyond one-off applications by making it easier to register, upload a resume, and become visible for current and future opportunities. Whether you are actively job searching, exploring better roles, or preparing for a smarter candidate experience through reverse recruitment and premium support, this is your starting point.
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up animate-delay-300">
              <a 
                href="#registration-form" 
                className="btn-rotating-border group relative px-8 py-4 bg-white/5 hover:bg-white/10 text-white hover:text-gold font-bold rounded-full transition-all duration-300 overflow-hidden shadow-2xl shadow-gold/20 btn-auto-sheen border border-white/5"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Register Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <Link 
                href="/job-openings" 
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 transition-all duration-300 backdrop-blur-xl btn-sheen"
              >
                Browse Job Openings
              </Link>
            </div>
            <div className="pt-10 border-t border-white/5 mt-10 max-w-xl mx-auto text-center animate-fade-in-up animate-delay-400">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 leading-loose">
                Built for candidates who want stronger visibility, better positioning, and a more structured path into opportunity.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-20">
          <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold to-transparent"></div>
        </div>
      </section>

      {/* 2. WHY REGISTER / UPLOAD RESUME */}
      <section className="py-24 relative overflow-hidden bg-navy-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 lg:gap-12 xl:gap-20 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
                Ongoing Visibility
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                Why Registering <br className="hidden md:inline" />
                <span className="text-gold">Matters</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                Many candidates limit themselves by only applying to jobs one by one. That approach can work, but it also means visibility resets every time. Registering and uploading a resume creates a more stable candidate presence inside the system, which gives employers and recruiters a clearer way to consider the candidate for both current and future opportunities.
              </p>
              <p>
                Uploading a resume is not just an admin step. It is part of a smarter candidate experience. It helps transform the job seeker from someone sending isolated applications into someone who is visible within a broader opportunity flow.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                That matters especially because our wider website plan already aims to support a fuller candidate platform and database, not just a static jobs page. Registering is the candidate’s entry point into that system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT CANDIDATES GAIN BY REGISTERING */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">
              What You Gain <span className="text-gold">by Registering</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              We translate form actions into real, long-term candidate visibility and job matching value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6">
                  <div className="btn-rotating-border w-14 h-14 bg-white/5 border border-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/5 group-hover:text-white hover:text-gold transition-all duration-500 btn-auto-sheen border border-white/5">
                    <Check className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-white font-black text-xl leading-snug group-hover:text-gold transition-colors tracking-tight uppercase">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT HAPPENS AFTER YOU REGISTER */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">
              What Happens <span className="text-gold">After You Register</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              This is one of our key trust-building features. We make onboarding safe, simple, and purposeful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 xl:gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-[#0B132B]/50 border border-white/5 hover:border-gold/30 transition-all duration-500 flex flex-col h-full justify-between">
                <div className="space-y-4">
                  <span className="text-gold font-bold text-xs">Step 0{idx + 1}</span>
                  <h4 className="text-white font-black text-base group-hover:text-gold transition-colors tracking-tight uppercase">
                    {step.title}
                  </h4>
                  <p className="text-slate-400 text-xs font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. REGISTRATION & UPLOAD RESUME FORM */}
      <section id="registration-form" className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass-panel p-8 md:p-16 rounded-[48px] border-white/5 shadow-2xl relative">
            <div className="btn-rotating-border absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-white/5 rounded-full flex items-center justify-center text-white hover:text-gold shadow-2xl animate-bounce btn-auto-sheen border border-white/5">
              <Upload className="w-10 h-10" />
            </div>

            <div className="text-center mt-6 mb-12">
              <h2 className="text-4xl font-black text-white tracking-tight uppercase">Candidate Onboarding <span className="text-gold">Registration</span></h2>
              <p className="text-slate-400 font-medium leading-relaxed mt-2">
                Upload your resume and tell us what kind of opportunity you are looking for so we can position you more effectively in the system.
              </p>
            </div>

            {formSubmitted ? (
              <div className="text-center py-16 space-y-6">
                <div className="btn-rotating-border w-20 h-20 bg-white/10 border border-gold/30 rounded-full flex items-center justify-center text-gold mx-auto btn-auto-sheen border border-white/5">
                  <Check className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-black uppercase text-white">Registration Complete!</h3>
                <p className="text-slate-400 font-semibold max-w-md mx-auto">
                  Thank you for registering. Your resume has been uploaded successfully and added to our candidate network. A recruiter will review your profile and match it with active roles.
                </p>
                <button 
                  onClick={() => {
                    setFormSubmitted(false);
                    setFileName('');
                  }}
                  className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white font-bold rounded-full border border-white/10 transition-all text-xs uppercase tracking-widest btn-sheen"
                >
                  Submit Another Profile
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 mt-4">
                <div className="grid md:grid-cols-2 gap-6 xl:gap-8">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gold ml-2">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Full Name" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all btn-sheen"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    />
                  </div>
                  {/* Email Address */}
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gold ml-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="email@domain.com" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all btn-sheen"
                      value={formData.emailAddress}
                      onChange={(e) => setFormData({...formData, emailAddress: e.target.value})}
                    />
                  </div>
                  {/* Phone Number */}
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gold ml-2">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+1 (555) 000-0000" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all btn-sheen"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                    />
                  </div>
                  {/* Current Location */}
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gold ml-2">Current Location</label>
                    <input 
                      type="text" 
                      placeholder="City, State / Country" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all btn-sheen"
                      value={formData.currentLocation}
                      onChange={(e) => setFormData({...formData, currentLocation: e.target.value})}
                    />
                  </div>
                  {/* Preferred Role / Job Title */}
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gold ml-2">Preferred Role / Job Title</label>
                    <input 
                      type="text" 
                      placeholder="E.g. Senior Software Engineer" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all btn-sheen"
                      value={formData.preferredRole}
                      onChange={(e) => setFormData({...formData, preferredRole: e.target.value})}
                    />
                  </div>
                  {/* Industry of Interest */}
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gold ml-2">Industry of Interest</label>
                    <select 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-gold/50 focus:bg-white/10 outline-none transition-all appearance-none cursor-pointer btn-sheen"
                      value={formData.industry}
                      onChange={(e) => setFormData({...formData, industry: e.target.value})}
                    >
                      <option value="" className="bg-navy text-gray-400">Select Industry</option>
                      {industries.map((ind, i) => (
                        <option key={i} value={ind} className="bg-navy text-white">{ind}</option>
                      ))}
                    </select>
                  </div>
                  {/* Years of Experience */}
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gold ml-2">Years of Experience</label>
                    <select 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-gold/50 focus:bg-white/10 outline-none transition-all appearance-none cursor-pointer btn-sheen"
                      value={formData.yearsExperience}
                      onChange={(e) => setFormData({...formData, yearsExperience: e.target.value})}
                    >
                      <option value="" className="bg-navy text-gray-400">Select Experience</option>
                      <option value="0-1" className="bg-navy text-white">Entry Level (0-1 yrs)</option>
                      <option value="2-4" className="bg-navy text-white">Junior / Mid (2-4 yrs)</option>
                      <option value="5-8" className="bg-navy text-white">Senior (5-8 yrs)</option>
                      <option value="9+" className="bg-navy text-white">Principal / Executive (9+ yrs)</option>
                    </select>
                  </div>
                  {/* Employment Status */}
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gold ml-2">Employment Status</label>
                    <select 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-gold/50 focus:bg-white/10 outline-none transition-all appearance-none cursor-pointer btn-sheen"
                      value={formData.employmentStatus}
                      onChange={(e) => setFormData({...formData, employmentStatus: e.target.value})}
                    >
                      <option value="" className="bg-navy text-gray-400">Select Status</option>
                      {employmentStatuses.map((st, i) => (
                        <option key={i} value={st} className="bg-navy text-white">{st}</option>
                      ))}
                    </select>
                  </div>
                  {/* Preferred Work Model */}
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gold ml-2">Preferred Work Model</label>
                    <select 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-gold/50 focus:bg-white/10 outline-none transition-all appearance-none cursor-pointer btn-sheen"
                      value={formData.workModel}
                      onChange={(e) => setFormData({...formData, workModel: e.target.value})}
                    >
                      <option value="" className="bg-navy text-gray-400">Select Work Model</option>
                      {workModels.map((wm, i) => (
                        <option key={i} value={wm} className="bg-navy text-white">{wm}</option>
                      ))}
                    </select>
                  </div>
                  {/* Availability / Notice Period */}
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gold ml-2">Availability / Notice Period</label>
                    <input 
                      type="text" 
                      placeholder="E.g. Immediate, 2 weeks, 1 month" 
                      required 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all btn-sheen"
                      value={formData.availability}
                      onChange={(e) => setFormData({...formData, availability: e.target.value})}
                    />
                  </div>
                  {/* Salary Expectations (Optional) */}
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gold ml-2">Salary Expectations (Optional)</label>
                    <input 
                      type="text" 
                      placeholder="E.g. $80,000 - $100,000 / year" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all btn-sheen"
                      value={formData.salaryExpectations}
                      onChange={(e) => setFormData({...formData, salaryExpectations: e.target.value})}
                    />
                  </div>
                  {/* LinkedIn Profile (Optional) */}
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gold ml-2">LinkedIn Profile (Optional)</label>
                    <input 
                      type="url" 
                      placeholder="https://linkedin.com/in/username" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all btn-sheen"
                      value={formData.linkedinProfile}
                      onChange={(e) => setFormData({...formData, linkedinProfile: e.target.value})}
                    />
                  </div>
                </div>

                {/* Resume Upload (file selector) */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gold ml-2">Resume Upload (PDF, Word) *</label>
                  <div 
                    onClick={triggerFileSelect}
                    className="w-full bg-white/5 border-2 border-dashed border-white/10 hover:border-gold/40 hover:bg-white/10 rounded-2xl px-6 py-10 flex flex-col items-center justify-center cursor-pointer transition-all gap-4 btn-sheen"
                  >
                    <input 
                      type="file" 
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      required={!fileName}
                    />
                    <div className="btn-rotating-border w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gold btn-auto-sheen border border-white/5">
                      <FileText className="w-6 h-6" />
                    </div>
                    {fileName ? (
                      <div className="text-center">
                        <p className="text-sm font-semibold text-white">{fileName}</p>
                        <p className="text-xs text-gold font-bold mt-1 uppercase">Click to change file</p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <p className="text-sm font-semibold text-white">Drag &amp; drop or click to upload resume file</p>
                        <p className="text-xs text-white/30 mt-1">Accepts PDF, DOCX, DOC files (max 5MB)</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Cover Note / Career Summary (Optional) */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gold ml-2">Cover Note / Career Summary (Optional)</label>
                  <textarea 
                    rows={4} 
                    placeholder="Briefly summarize your career goals, key strengths, or message to recruiters…" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:border-gold/50 focus:bg-white/10 outline-none transition-all resize-none btn-sheen"
                    value={formData.coverNote}
                    onChange={(e) => setFormData({...formData, coverNote: e.target.value})}
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-3 pl-2">
                  <input 
                    type="checkbox" 
                    id="consent"
                    required
                    className="accent-gold mt-1.5 cursor-pointer"
                    checked={formData.consent}
                    onChange={(e) => setFormData({...formData, consent: e.target.checked})}
                  />
                  <label htmlFor="consent" className="text-xs text-slate-400 font-semibold leading-relaxed cursor-pointer select-none">
                    I consent to NAYA Staffing storing my personal information and resume file, and sharing my credentials with prospective matching employers for current and future career matches.
                  </label>
                </div>

                <div className="pt-4 flex flex-col items-center">
                  <button 
                    type="submit" 
                    className="btn-rotating-border group w-full md:w-auto px-20 py-8 bg-white/5 hover:bg-white/10 text-white hover:text-gold font-black rounded-[32px] transition-all flex items-center justify-center gap-4 shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-[0.3em] text-[10px] btn-auto-sheen border border-white/5"
                  >
                    Register Now <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-500" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 6. NOT JUST FOR ONE JOB. FOR ONGOING VISIBILITY. */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 lg:gap-12 xl:gap-20 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen border border-white/5">
                The Network Advantage
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                Not Just for One Job. <br className="hidden md:inline" />
                <span className="text-gold">For Ongoing Visibility.</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen border border-white/5"></div>
            </div>

            <div className="lg:col-span-7 space-y-8 text-slate-300 font-medium text-base md:text-lg leading-relaxed">
              <p>
                One of the biggest weaknesses of a normal application flow is that every opportunity starts from zero. The candidate applies, waits, and often disappears from view if that single vacancy does not move forward.
              </p>
              <p>
                Registering and uploading a resume changes that. It gives the candidate a more lasting presence and helps position them for opportunities beyond just one application cycle. This is especially important for passive candidates, emerging professionals, and people who want better long-term visibility.
              </p>
              <p className="text-slate-200 border-l-2 border-gold/45 pl-6 font-semibold italic">
                This page reinforces that registration is the beginning of a broader candidate relationship, which matches the overall site vision of building a larger database and platform-driven opportunity system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. RELATED CANDIDATE PATHS */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">
              What You Can <span className="text-gold">Do Next</span>
            </h2>
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              Understand how registration connects with the rest of the NAYA Staffing Job Seekers experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
            {nextPaths.map((path, idx) => (
              <div key={idx} className="group p-8 rounded-[36px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-500 hover:shadow-xl flex flex-col h-full justify-between">
                <div className="space-y-4">
                  <span className="text-gold font-bold text-xs">Path 0{idx + 1}</span>
                  <h4 className="text-white font-black text-lg group-hover:text-gold transition-colors tracking-tight uppercase">
                    {path.title}
                  </h4>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">
                    {path.desc}
                  </p>
                </div>
                
                <Link 
                  href={path.href} 
                  className="group/btn inline-flex items-center gap-2 text-xs font-black tracking-widest text-gold hover:text-white uppercase transition-colors pt-6 border-t border-white/5 mt-6"
                >
                  Explore <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA BLOCK */}
      <section className="py-24 bg-navy-dark relative border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-[64px] p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-8 xl:gap-12 border-white/10 hover:border-gold/20 transition-all duration-700 btn-sheen">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black text-white leading-[0.9] tracking-tighter mb-4 uppercase">
                Ready to Get Into the <br /> <span className="text-gold">Candidate Pipeline?</span>
              </h2>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed mt-4">
                Uploading your resume is one of the clearest ways to move from passive searching to active visibility. NAYA Staffing helps candidates start a smarter, more structured journey by making registration simple and worthwhile.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 shrink-0 w-full lg:w-auto">
              <a href="#registration-form" className="btn-rotating-border px-12 py-6 bg-white/5 text-white hover:text-gold font-black rounded-full hover:bg-white/10 hover:-translate-y-2 transition-all text-center shadow-xl uppercase tracking-[0.2em] text-xs btn-auto-sheen border border-white/5">
                Register Now
              </a>
              <Link href="/job-openings" className="px-12 py-6 bg-white/5 border border-white/10 text-white font-black rounded-full hover:bg-white/10 hover:-translate-y-2 transition-all text-center uppercase tracking-[0.2em] text-xs backdrop-blur-md btn-sheen">
                Browse Job Openings
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="bg-navy py-32 overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="text-center mb-20 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-6 shadow-xl backdrop-blur-md btn-auto-sheen border border-white/5">
                FAQ
              </div>
              <h2 className="text-5xl font-black mb-6 uppercase">Frequently <span className="text-gold">Asked Questions</span></h2>
              <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen border border-white/5"></div>
           </div>
           
           <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <FAQItem 
                  key={idx}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
           </div>
        </div>
      </section>

      {/* 10. FINAL CTA SECTION */}
      <section className="py-32 relative overflow-hidden bg-navy-dark border-t border-white/5">
        <div className="absolute inset-0 z-0">
          <div className="btn-rotating-border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.03] blur-[200px] rounded-full btn-auto-sheen border border-white/5"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-panel p-12 md:p-24 rounded-[4rem] text-center border border-gold/20 shadow-2xl shadow-gold/10">
            <div className="btn-rotating-border inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 text-white hover:text-gold mb-10 shadow-2xl shadow-gold/30 btn-auto-sheen border border-white/5">
              <Briefcase className="w-12 h-12" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85] uppercase">
              Start With Visibility. <br/>
              <span className="text-gold">Then Move Toward Opportunity.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              A better job-search experience starts with being seen. NAYA Staffing helps candidates take that first step through a more structured, premium, and opportunity-focused registration experience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 xl:gap-8">
              <a 
                href="#registration-form" 
                className="btn-rotating-border group w-full sm:w-auto px-16 py-8 bg-white/5 hover:bg-white/10 text-white hover:text-gold font-black rounded-[32px] transition-all flex items-center justify-center gap-4 shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-[0.3em] text-[10px] btn-auto-sheen border border-white/5"
              >
                Register Now <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-500" />
              </a>
              <Link 
                href="/job-openings" 
                className="w-full sm:w-auto px-16 py-8 bg-white/5 hover:bg-white/10 text-white font-black rounded-[32px] border border-white/10 transition-all backdrop-blur-xl uppercase tracking-[0.3em] text-[10px] btn-sheen"
              >
                Browse Job Openings
              </Link>
              <Link 
                href="/contact-us" 
                className="w-full sm:w-auto px-16 py-8 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-gold hover:text-gold font-black rounded-[32px] transition-all uppercase tracking-[0.3em] text-[10px] btn-sheen"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 11. RELATED SERVICES / INTERNAL LINKS */}
      <section className="py-32 bg-navy border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 xl:gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.95]">
                Candidate <br/>
                Hiring <span className="text-gold">Services</span>
              </h2>
              <div className="btn-rotating-border h-1 w-20 bg-white/5 rounded-full btn-auto-sheen border border-white/5"></div>
              <p className="text-slate-400 text-sm font-semibold leading-relaxed">
                Learn how we help candidates beyond direct job application postings with reverse recruitment, pricing structures, and career advice.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedLinks.map((service, idx) => (
                <Link 
                  key={idx} 
                  href={service.href}
                  className="group p-6 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-gold/30 hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white font-bold text-base group-hover:text-gold transition-colors">
                        {service.name}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-gold transition-colors" />
                    </div>
                    <p className="text-slate-400 text-xs font-semibold leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking Footer Block */}
      <section className="py-12 bg-[#040814] border-t border-white/5 text-sm font-bold text-slate-500">
        <div className="container mx-auto px-6 flex flex-wrap gap-x-8 gap-y-4 justify-center">
          <Link href="/services" className="hover:text-gold transition-colors">Services Overview</Link>
          <Link href="/our-industries" className="hover:text-gold transition-colors">Industries Overview</Link>
          <Link href="/job-seekers" className="hover:text-gold transition-colors">Job Seekers Overview</Link>
          <Link href="/job-seekers/why-choose-us" className="hover:text-gold transition-colors">Why Choose Us?</Link>
          <Link href="/job-seekers/reverse-recruitment" className="hover:text-gold transition-colors">Reverse Recruitment</Link>
          <Link href="/job-seekers/pricing" className="hover:text-gold transition-colors">Pricing</Link>
          <Link href="/job-openings" className="hover:text-gold transition-colors">Job Openings</Link>
          <Link href="/career-advice" className="hover:text-gold transition-colors">Career Advice</Link>
        </div>
      </section>
    </main>
  );
}
