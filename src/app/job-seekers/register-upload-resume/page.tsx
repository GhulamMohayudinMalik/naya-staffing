'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import api from '@/lib/api';
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
  Info,
  ShieldCheck,
  Lock,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { Typewriter } from "@/components/Typewriter";
import VideoBackground from '@/components/VideoBackground';
import FAQItem from '@/components/FAQItem';

export default function RegisterAndUploadResumePage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>('');
  const [dragActive, setDragActive] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    // Attach the role explicitly
    data.role = 'job_seeker';
    
    try {
      const response = await api.post('/auth/register', data);
      console.log('Candidate Registration Submitted', response.data);
      // Auto-login (save token)
      if (response.data.access_token) {
        localStorage.setItem('token', response.data.access_token);
      }
      setFormSubmitted(true);
    } catch (error) {
      console.error("Registration failed", error);
      alert("Registration failed. Please check console.");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFileName(e.dataTransfer.files[0].name);
    }
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

  return (
    <main className="bg-[#040814] text-white min-h-screen selection:bg-gold selection:text-navy-dark font-sans overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 md:pt-32 xl:pt-40 pb-16 md:pb-20 xl:pb-24 overflow-hidden">
        <VideoBackground 
          src="/videos/hero.mp4" 
          overlayOpacity="bg-navy-dark/80"
        />
        
        {/* Ambient Glows */}
        <div className="btn-rotating-border absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 blur-[120px] rounded-full animate-pulse transition-all duration-[5000ms]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-navy-light/10 blur-[150px] rounded-full animate-float"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <div className="btn-rotating-border inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-gold/20 mb-6 backdrop-blur-md animate-fade-in-up btn-auto-sheen">
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
                className="btn-rotating-border group relative px-8 py-4 bg-white/5 hover:bg-white/10 text-white hover:text-gold font-bold rounded-full transition-all duration-300 overflow-hidden shadow-2xl shadow-gold/20 btn-auto-sheen"
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
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen">
                Ongoing Visibility
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                Why Registering <br className="hidden md:inline" />
                <span className="text-gold">Matters</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen"></div>
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
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen"></div>
            <p className="text-lg md:text-xl text-slate-400 font-semibold leading-relaxed">
              We translate form actions into real, long-term candidate visibility and job matching value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="group relative p-10 rounded-[40px] bg-white/[0.01] border border-white/5 hover:border-gold/30 transition-all duration-700 hover:shadow-2xl flex flex-col justify-between h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]"></div>
                <div className="relative z-10 space-y-6">
                  <div className="btn-rotating-border w-14 h-14 bg-white/5 border border-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/5 group-hover:text-white hover:text-gold transition-all duration-500 btn-auto-sheen">
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
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen"></div>
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

      {/* 5. REGISTRATION & UPLOAD RESUME FORM (IMPROVED FULL WIDTH LAYOUT) */}
      <section className="py-24 relative z-20 border-t border-white/5" id="registration-form">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto glass-panel rounded-[48px] shadow-2xl overflow-hidden border-white/5 hover:border-white/10 transition-all duration-700 bg-navy-dark/60 backdrop-blur-3xl p-8 sm:p-12 lg:p-16">
            
            {/* Top Heading & Features Section */}
            <div className="mb-16 text-center">
              <h6 className="text-gold font-black uppercase tracking-[0.3em] text-[10px] mb-4">The Advantage</h6>
              <h2 className="text-3xl lg:text-5xl font-black tracking-tighter uppercase leading-tight text-white mb-12">Your Career Growth</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                {/* Feature 1 */}
                <div className="p-8 bg-navy/50 rounded-3xl border border-white/5 hover:border-gold/20 transition-colors group">
                  <div className="w-12 h-12 bg-gold/5 border border-gold/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-500">
                    <Target className="w-6 h-6 text-gold group-hover:text-navy-dark transition-colors" />
                  </div>
                  <h4 className="font-black text-white text-base uppercase tracking-tight mb-3">Tailored Matches</h4>
                  <p className="text-slate-400 font-bold leading-relaxed text-sm">We only curate opportunities that align with your unique DNA and ambition.</p>
                </div>
                
                {/* Feature 2 */}
                <div className="p-8 bg-navy/50 rounded-3xl border border-white/5 hover:border-gold/20 transition-colors group">
                  <div className="w-12 h-12 bg-gold/5 border border-gold/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-500">
                    <Zap className="w-6 h-6 text-gold group-hover:text-navy-dark transition-colors" />
                  </div>
                  <h4 className="font-black text-white text-base uppercase tracking-tight mb-3">Fast Tracking</h4>
                  <p className="text-slate-400 font-bold leading-relaxed text-sm">Direct, low-latency access to global industry leaders and hiring managers.</p>
                </div>

                {/* Feature 3 */}
                <div className="p-8 bg-navy/50 rounded-3xl border border-white/5 hover:border-gold/20 transition-colors group">
                  <div className="w-12 h-12 bg-gold/5 border border-gold/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-500">
                    <Lock className="w-6 h-6 text-gold group-hover:text-navy-dark transition-colors" />
                  </div>
                  <h4 className="font-black text-white text-base uppercase tracking-tight mb-3">Absolute Privacy</h4>
                  <p className="text-slate-400 font-bold leading-relaxed text-sm">Your professional identity is safe. Data is never shared without explicit consent.</p>
                </div>
              </div>
            </div>

            {/* Success State vs Form */}
            {formSubmitted ? (
              <div className="text-center py-16 space-y-6">
                <div className="w-20 h-20 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center text-gold mx-auto animate-bounce">
                  <Check className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-black uppercase text-white">Registration Complete!</h3>
                <p className="text-slate-400 font-semibold max-w-md mx-auto">
                  Thank you for registering. Your professional details have been logged and your career assets uploaded. A NAYA Staffing representative will review your application for matched opportunities.
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
              <div className="border-t border-white/5 pt-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                    
                    {/* 1. Full Name */}
                    <div className="col-span-1 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                      <div className="relative group">
                        <input required type="text" placeholder="Enter Full Name" className="w-full pl-6 pr-6 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-gold/40 text-white text-sm font-bold placeholder:text-slate-600 transition-all" name="full_name" />
                      </div>
                    </div>

                    {/* 2. Email */}
                    <div className="col-span-1 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email</label>
                      <div className="relative group">
                        <input required type="email" placeholder="Enter Email" className="w-full pl-6 pr-6 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-gold/40 text-white text-sm font-bold placeholder:text-slate-600 transition-all" name="email" />
                      </div>
                    </div>

                    {/* 3. Password */}
                    <div className="col-span-1 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Password</label>
                      <div className="relative group">
                        <input required type="password" placeholder="Enter Password" className="w-full pl-6 pr-6 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-gold/40 text-white text-sm font-bold placeholder:text-slate-600 transition-all" name="password" />
                      </div>
                    </div>

                    {/* 4. Phone number */}
                    <div className="col-span-1 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone number</label>
                      <div className="relative group">
                        <input required type="tel" placeholder="Enter Phone number" className="w-full pl-6 pr-6 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-gold/40 text-white text-sm font-bold placeholder:text-slate-600 transition-all" name="phone" />
                      </div>
                    </div>

                    {/* 5. Gender */}
                    <div className="col-span-1 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Gender</label>
                      <div className="relative group">
                        <select className="w-full pl-6 pr-10 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-gold/40 text-white text-sm font-bold appearance-none cursor-pointer transition-all" name="gender">
                          <option value="" className="bg-navy text-slate-400">Select...</option>
                          <option className="bg-navy">Male</option>
                          <option className="bg-navy">Female</option>
                          <option className="bg-navy">Other</option>
                          <option className="bg-navy">Prefer not to say</option>
                        </select>
                      </div>
                    </div>

                    {/* 6. Do you need any visa? */}
                    <div className="col-span-1 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Do you need any visa?</label>
                      <div className="relative group">
                        <select className="w-full pl-6 pr-10 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-gold/40 text-white text-sm font-bold appearance-none cursor-pointer transition-all">
                          <option value="" className="bg-navy text-slate-400">Select...</option>
                          <option className="bg-navy">Yes</option>
                          <option className="bg-navy">No</option>
                        </select>
                      </div>
                    </div>

                    {/* 7. Previous Completed project */}
                    <div className="col-span-1 md:col-span-2 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Previous Completed project</label>
                      <div className="relative group">
                        <input type="text" placeholder="Enter Previous Completed project" className="w-full pl-6 pr-6 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-gold/40 text-white text-sm font-bold placeholder:text-slate-600 transition-all" name="previous_projects" />
                      </div>
                    </div>

                    {/* 8. Disability Status */}
                    <div className="col-span-1 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Disability Status</label>
                      <div className="relative group">
                        <select className="w-full pl-6 pr-10 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-gold/40 text-white text-sm font-bold appearance-none cursor-pointer transition-all" name="disability_status">
                          <option value="" className="bg-navy text-slate-400">Select...</option>
                          <option className="bg-navy">Yes</option>
                          <option className="bg-navy">No</option>
                          <option className="bg-navy">Prefer not to say</option>
                        </select>
                      </div>
                    </div>

                    {/* 9. Are you a Hispanic/Latino */}
                    <div className="col-span-1 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Are you a Hispanic/Latino</label>
                      <div className="relative group">
                        <select className="w-full pl-6 pr-10 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-gold/40 text-white text-sm font-bold appearance-none cursor-pointer transition-all" name="hispanic_latino">
                          <option value="" className="bg-navy text-slate-400">Select...</option>
                          <option className="bg-navy">Yes</option>
                          <option className="bg-navy">No</option>
                          <option className="bg-navy">Prefer not to say</option>
                        </select>
                      </div>
                    </div>

                    {/* 10. previous Job title */}
                    <div className="col-span-1 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">previous Job title</label>
                      <div className="relative group">
                        <input type="text" placeholder="Enter previous Job title" className="w-full pl-6 pr-6 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-gold/40 text-white text-sm font-bold placeholder:text-slate-600 transition-all" name="previous_job_title" />
                      </div>
                    </div>

                    {/* 11. Country */}
                    <div className="col-span-1 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Country</label>
                      <div className="relative group">
                        <input type="text" placeholder="Enter Country" className="w-full pl-6 pr-6 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-gold/40 text-white text-sm font-bold placeholder:text-slate-600 transition-all" name="country" />
                      </div>
                    </div>

                    {/* 12. permanant address */}
                    <div className="col-span-1 md:col-span-2 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">permanant address</label>
                      <div className="relative group">
                        <input type="text" placeholder="Enter permanant address" className="w-full pl-6 pr-6 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-gold/40 text-white text-sm font-bold placeholder:text-slate-600 transition-all" name="permanent_address" />
                      </div>
                    </div>

                    {/* 13. Veteran Status */}
                    <div className="col-span-1 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Veteran Status</label>
                      <div className="relative group">
                        <select className="w-full pl-6 pr-10 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-gold/40 text-white text-sm font-bold appearance-none cursor-pointer transition-all" name="veteran_status">
                          <option value="" className="bg-navy text-slate-400">Select...</option>
                          <option className="bg-navy">Yes</option>
                          <option className="bg-navy">No</option>
                          <option className="bg-navy">Prefer not to say</option>
                        </select>
                      </div>
                    </div>

                    {/* 14. Postal Code */}
                    <div className="col-span-1 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Postal Code</label>
                      <div className="relative group">
                        <input type="text" placeholder="Enter Postal Code" className="w-full pl-6 pr-6 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-gold/40 text-white text-sm font-bold placeholder:text-slate-600 transition-all" name="postal_code" />
                      </div>
                    </div>

                    {/* 15. City */}
                    <div className="col-span-1 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">City</label>
                      <div className="relative group">
                        <input type="text" placeholder="Enter City" className="w-full pl-6 pr-6 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-gold/40 text-white text-sm font-bold placeholder:text-slate-600 transition-all" name="city" />
                      </div>
                    </div>

                    {/* 16. Please identify your race */}
                    <div className="col-span-1 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Please identify your race</label>
                      <div className="relative group">
                        <select className="w-full pl-6 pr-10 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-gold/40 text-white text-sm font-bold appearance-none cursor-pointer transition-all" name="race">
                          <option value="" className="bg-navy text-slate-400">Select...</option>
                          <option className="bg-navy">American Indian or Alaska Native</option>
                          <option className="bg-navy">Asian</option>
                          <option className="bg-navy">Black or African American</option>
                          <option className="bg-navy">Native Hawaiian or Other Pacific Islander</option>
                          <option className="bg-navy">White</option>
                          <option className="bg-navy">Two or More Races</option>
                          <option className="bg-navy">Prefer not to say</option>
                        </select>
                      </div>
                    </div>

                    {/* 17. Salary Range */}
                    <div className="col-span-1 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Salary Range</label>
                      <div className="relative group">
                        <input type="text" placeholder="Enter Salary Range" className="w-full pl-6 pr-6 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-gold/40 text-white text-sm font-bold placeholder:text-slate-600 transition-all" name="salary_range" />
                      </div>
                    </div>

                    {/* 18. Current working ? */}
                    <div className="col-span-1 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Current working ?</label>
                      <div className="relative group">
                        <select className="w-full pl-6 pr-10 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-gold/40 text-white text-sm font-bold appearance-none cursor-pointer transition-all">
                          <option value="" className="bg-navy text-slate-400">Select...</option>
                          <option className="bg-navy">Yes</option>
                          <option className="bg-navy">No</option>
                        </select>
                      </div>
                    </div>

                    {/* 19. State/Province */}
                    <div className="col-span-1 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">State/Province</label>
                      <div className="relative group">
                        <input type="text" placeholder="Enter State/Province" className="w-full pl-6 pr-6 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-gold/40 text-white text-sm font-bold placeholder:text-slate-600 transition-all" name="state_province" />
                      </div>
                    </div>

                    {/* 20. Job Type preference (Like as Remote, Hybrid, On-site) */}
                    <div className="col-span-1 md:col-span-2 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Job Type preference (Like as Remote, Hybrid, On-site)</label>
                      <div className="relative group">
                        <select className="w-full pl-6 pr-10 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-gold/40 text-white text-sm font-bold appearance-none cursor-pointer transition-all">
                          <option value="" className="bg-navy text-slate-400">Select...</option>
                          <option className="bg-navy">Remote</option>
                          <option className="bg-navy">Hybrid</option>
                          <option className="bg-navy">On-site</option>
                        </select>
                      </div>
                    </div>

                    {/* 21. Can you please specify the target countries for remote job application */}
                    <div className="col-span-1 md:col-span-2 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Can you please specify the target countries for remote job application</label>
                      <div className="relative group">
                        <input type="text" placeholder="Enter Can you please specify the target countries for remote job application" className="w-full pl-6 pr-6 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-gold/40 text-white text-sm font-bold placeholder:text-slate-600 transition-all" name="remote_target_countries" />
                      </div>
                    </div>

                    {/* 22. Do you currently or in future require work sponsorship? */}
                    <div className="col-span-1 md:col-span-2 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Do you currently or in future require work sponsorship?</label>
                      <div className="relative group">
                        <select className="w-full pl-6 pr-10 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-gold/40 text-white text-sm font-bold appearance-none cursor-pointer transition-all">
                          <option value="" className="bg-navy text-slate-400">Select...</option>
                          <option className="bg-navy">Yes</option>
                          <option className="bg-navy">No</option>
                        </select>
                      </div>
                    </div>

                    {/* 23. County */}
                    <div className="col-span-1 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">County</label>
                      <div className="relative group">
                        <input type="text" placeholder="Enter County" className="w-full pl-6 pr-6 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-gold/40 text-white text-sm font-bold placeholder:text-slate-600 transition-all" name="county" />
                      </div>
                    </div>

                    {/* 24. Desire start date */}
                    <div className="col-span-1 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Desire start date</label>
                      <div className="relative group">
                        <input type="date" className="w-full pl-6 pr-6 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-gold/40 text-white text-sm font-bold placeholder:text-slate-600 transition-all" name="desire_start_date" />
                      </div>
                    </div>

                    {/* 25. GIT Hub Link */}
                    <div className="col-span-1 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">GIT Hub Link</label>
                      <div className="relative group">
                        <input type="url" placeholder="Enter GIT Hub Link" className="w-full pl-6 pr-6 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-gold/40 text-white text-sm font-bold placeholder:text-slate-600 transition-all" name="github_link" />
                      </div>
                    </div>

                    {/* 26. LinkedIn URL */}
                    <div className="col-span-1 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">LinkedIn URL</label>
                      <div className="relative group">
                        <input type="url" placeholder="Enter LinkedIn URL" className="w-full pl-6 pr-6 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-gold/40 text-white text-sm font-bold placeholder:text-slate-600 transition-all" name="linkedin_url" />
                      </div>
                    </div>

                    {/* 27. Which position are you looking for */}
                    <div className="col-span-1 md:col-span-2 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Which position are you looking for</label>
                      <div className="relative group">
                        <input type="text" placeholder="Enter Which position are you looking for" className="w-full pl-6 pr-6 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-gold/40 text-white text-sm font-bold placeholder:text-slate-600 transition-all" name="desired_position" />
                      </div>
                    </div>

                    {/* 28. Date of Birth */}
                    <div className="col-span-1 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Date of Birth</label>
                      <div className="relative group">
                        <input type="date" className="w-full pl-6 pr-6 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-gold/40 text-white text-sm font-bold placeholder:text-slate-600 transition-all" name="date_of_birth" />
                      </div>
                    </div>

                    {/* 29. Age */}
                    <div className="col-span-1 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Age</label>
                      <div className="relative group">
                        <input type="number" placeholder="Enter Age" className="w-full pl-6 pr-6 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-gold/40 text-white text-sm font-bold placeholder:text-slate-600 transition-all" name="age" />
                      </div>
                    </div>

                    {/* 30. Working hours */}
                    <div className="col-span-1 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Working hours</label>
                      <div className="relative group">
                        <input type="text" placeholder="Enter Working hours" className="w-full pl-6 pr-6 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-gold/40 text-white text-sm font-bold placeholder:text-slate-600 transition-all" name="working_hours" />
                      </div>
                    </div>

                    {/* 31. Expected Salary Hourly and Yearly */}
                    <div className="col-span-1 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Expected Salary Hourly and Yearly</label>
                      <div className="relative group">
                        <input type="text" placeholder="Enter Expected Salary Hourly and Yearly" className="w-full pl-6 pr-6 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-gold/40 text-white text-sm font-bold placeholder:text-slate-600 transition-all" name="expected_salary_hourly_yearly" />
                      </div>
                    </div>

                    {/* 32. Do you have any employment restrictions such as a non compete */}
                    <div className="col-span-1 md:col-span-2 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Do you have any employment restrictions such as a non compete</label>
                      <div className="relative group">
                        <input type="text" placeholder="Enter Do you have any employment restrictions such as a non compete" className="w-full pl-6 pr-6 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-gold/40 text-white text-sm font-bold placeholder:text-slate-600 transition-all" name="employment_restrictions" />
                      </div>
                    </div>

                    {/* 33. Did you have any security clearance */}
                    <div className="col-span-1 md:col-span-2 space-y-3">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Did you have any security clearance</label>
                      <div className="relative group">
                        <select className="w-full pl-6 pr-10 py-5 bg-white/5 border border-white/5 rounded-2xl focus:outline-none focus:border-gold/40 text-white text-sm font-bold appearance-none cursor-pointer transition-all" name="security_clearance">
                          <option value="" className="bg-navy text-slate-400">Select...</option>
                          <option className="bg-navy">Yes</option>
                          <option className="bg-navy">No</option>
                        </select>
                      </div>
                    </div>

                  </div>

                  {/* Drag and drop resume upload zone */}
                  <div className="space-y-4 pt-12">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Asset Upload (PDF, DOCX) *</label>
                    <div 
                      onClick={triggerFileSelect}
                      onDragOver={handleDrag}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDrop={handleDrop}
                      className={`border-2 border-dashed rounded-[48px] p-12 text-center transition-all cursor-pointer group/upload ${
                        dragActive ? 'border-gold bg-gold/5' : 'border-white/10 bg-white/5'
                      }`}
                    >
                      <input 
                        type="file" 
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        required={!fileName}
                      />
                      <div className="w-20 h-20 bg-gold/10 rounded-3xl flex items-center justify-center mx-auto mb-6 text-gold group-hover/upload:scale-110 group-hover/upload:bg-gold group-hover/upload:text-navy-dark transition-all duration-500 shadow-xl">
                        <Upload className="w-10 h-10" />
                      </div>
                      {fileName ? (
                        <div>
                          <p className="text-white font-black text-xl mb-2 tracking-tight">{fileName}</p>
                          <p className="text-xs text-gold font-black uppercase tracking-widest">Click to change file</p>
                        </div>
                      ) : (
                        <div>
                          <p className="text-white font-black text-xl mb-2 tracking-tight group-hover/upload:text-gold transition-colors">Drag and Drop Career Assets</p>
                          <p className="text-slate-500 font-bold">Accepts PDF, DOC, DOCX files (max 10MB)</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-8">
                    <div className="flex items-start gap-4 mb-10 p-6 glass-panel rounded-3xl border-white/5">
                      <ShieldCheck className="w-6 h-6 text-gold shrink-0 mt-1" />
                      <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest leading-loose">
                        By initiating registration, you sanction our <span className="text-white">Terms of Engagement</span> and <span className="text-white">Privacy Protocols</span>. We handle all personal data with absolute encryption and regulatory compliance.
                      </p>
                    </div>
                    <button type="submit" className="w-full bg-gold hover:bg-gold-hover text-navy-dark py-7 rounded-[32px] font-black text-xs uppercase tracking-[0.4em] shadow-[0_4px_50px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-2 flex items-center justify-center gap-6 group">
                      Submit Registration <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
                    </button>
                  </div>

                </form>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* 6. NOT JUST FOR ONE JOB. FOR ONGOING VISIBILITY. */}
      <section className="py-32 bg-navy-dark border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 xl:gap-12 lg:gap-12 xl:gap-20 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold btn-auto-sheen">
                The Network Advantage
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] uppercase">
                Not Just for One Job. <br className="hidden md:inline" />
                <span className="text-gold">For Ongoing Visibility.</span>
              </h2>
              <div className="btn-rotating-border h-1.5 w-20 bg-white/5 rounded-full opacity-60 btn-auto-sheen"></div>
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
            <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen"></div>
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
              <a href="#registration-form" className="btn-rotating-border px-12 py-6 bg-white/5 text-white hover:text-gold font-black rounded-full hover:bg-white/10 hover:-translate-y-2 transition-all text-center shadow-xl uppercase tracking-[0.2em] text-xs btn-auto-sheen">
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
              <div className="btn-rotating-border inline-block px-4 py-1.5 bg-white/10 border border-gold/20 rounded-full text-[10px] font-black uppercase tracking-[0.5em] text-gold mb-6 shadow-xl backdrop-blur-md btn-auto-sheen">
                FAQ
              </div>
              <h2 className="text-5xl font-black mb-6 uppercase">Frequently <span className="text-gold">Asked Questions</span></h2>
              <div className="btn-rotating-border h-1.5 w-24 bg-white/5 mx-auto rounded-full btn-auto-sheen"></div>
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
          <div className="btn-rotating-border absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.03] blur-[200px] rounded-full btn-auto-sheen"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="glass-panel p-12 md:p-24 rounded-[4rem] text-center border border-gold/20 shadow-2xl shadow-gold/10">
            <div className="btn-rotating-border inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 text-white hover:text-gold mb-10 shadow-2xl shadow-gold/30 btn-auto-sheen">
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
                className="btn-rotating-border group w-full sm:w-auto px-16 py-8 bg-white/5 hover:bg-white/10 text-white hover:text-gold font-black rounded-[32px] transition-all flex items-center justify-center gap-4 shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-[0.3em] text-[10px] btn-auto-sheen"
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
              <div className="btn-rotating-border h-1 w-20 bg-white/5 rounded-full btn-auto-sheen"></div>
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
