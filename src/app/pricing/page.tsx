'use client';

import { Check, X, HelpCircle, ArrowRight, Stars, ShieldCheck, Zap, TrendingUp, HelpCircleIcon } from 'lucide-react';
import Link from 'next/link';

const tiers = [
  {
    name: "Standard",
    price: "$2,999",
    description: "Perfect for high-growth firms looking for specialized expertise.",
    features: [
      "Single Elite Role Search",
      "Executive Candidate Screening",
      "Global Background Checks",
      "60-Day Quality Guarantee",
      "Direct Strategic Support"
    ],
    notIncluded: [
      "Dedicated Account Manager",
      "Employer Branding Services",
      "Global Executive Search"
    ],
    buttonText: "Initiate Search",
    highlight: false
  },
  {
    name: "Professional",
    price: "$7,499",
    description: "Optimized for scaling teams requiring high-velocity results.",
    features: [
      "Up to 3 Active Role Searches",
      "Advanced DNA Assessments",
      "Priority Circuit Access",
      "120-Day Quality Guarantee",
      "Deep Market Analysis Reports",
      "Dedicated Talent Architect"
    ],
    notIncluded: [
      "Full Employer Branding",
      "Unlimited Global Search"
    ],
    buttonText: "Ascend to Professional",
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Total infrastructure outsourcing for global market leaders.",
    features: [
      "Unlimited Strategic Searches",
      "Total RPO Infrastructure",
      "Architectural Branding",
      "V-Level Executive Search",
      "Global Circuit Priority",
      "White-Glove Support",
      "Custom Tech Integration"
    ],
    notIncluded: [],
    buttonText: "Consult Enterprise",
    highlight: false
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-navy-dark flex flex-col font-sans selection:bg-gold selection:text-navy-dark overflow-x-hidden">
      {/* Hero Section - Elite Financial Focus */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 blur-[120px] rounded-full animate-pulse transition-all duration-[5000ms]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-navy-light/10 blur-[150px] rounded-full animate-float"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-transparent to-navy-dark"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center space-y-12 animate-fade-up">
          <div className="space-y-6">
            <div className="inline-block px-6 py-2 bg-gold/10 border border-gold/20 rounded-full text-xs font-black uppercase tracking-[0.4em] text-gold mb-4">
              Resource Allocation
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] drop-shadow-2xl">
              Investment <br /> <span className="text-shimmer">Architectures.</span>
            </h1>
          </div>
          <p className="text-lg md:text-2xl font-bold text-slate-400 max-w-4xl mx-auto leading-tight tracking-tight opacity-90">
            Invest in the absolute best talent. No hidden overheads, just <span className="text-white">Results-Driven Recruitment</span> precision engineered for your scale.
          </p>
        </div>
      </section>

      {/* Pricing Cards Section - Glassmorphic Stack */}
      <section className="py-24 -mt-32 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {tiers.map((tier, idx) => (
              <div key={idx} className={`glass-panel group p-12 rounded-[52px] ${tier.highlight ? 'border-gold/50 shadow-gold/10 bg-gold/5' : 'border-white/5'} flex flex-col h-full transform hover:-translate-y-4 transition-all duration-700`}>
                {tier.highlight && (
                  <div className="bg-gold text-navy-dark text-[10px] font-black uppercase tracking-widest py-1.5 px-6 rounded-full self-start mb-8 shadow-xl">
                    Market Standard
                  </div>
                )}
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-gold transition-colors tracking-tight uppercase">{tier.name}</h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-5xl font-black text-white tracking-tighter group-hover:text-shimmer transition-all">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-slate-500 ml-4 font-bold text-base uppercase tracking-widest">/ Project</span>}
                </div>
                <p className="text-base text-slate-400 font-bold mb-12 italic leading-relaxed">{tier.description}</p>
                
                <div className="space-y-6 mb-12 flex-grow">
                  {tier.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-4">
                      <div className="w-6 h-6 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-gold" />
                      </div>
                      <span className="text-white font-bold tracking-tight">{feature}</span>
                    </div>
                  ))}
                  {tier.notIncluded.map((feature, nIdx) => (
                    <div key={nIdx} className="flex items-center gap-4 opacity-20">
                      <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                        <X className="w-3.5 h-3.5 text-slate-400" />
                      </div>
                      <span className="text-slate-400 font-bold tracking-tight line-through">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  href={tier.price === "Custom" ? "/contact-us" : "/become-a-client"} 
                  className={`w-full py-6 rounded-3xl font-black text-center transition-all uppercase tracking-[0.3em] text-xs ${
                    tier.highlight 
                      ? 'bg-gold text-navy-dark shadow-[0_4px_40px_rgba(212,175,55,0.4)] hover:bg-gold-hover' 
                      : 'bg-white/5 text-white border border-white/10 hover:bg-gold hover:text-navy-dark'
                  }`}
                >
                  {tier.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table - Elite Detail Grid */}
      <section className="py-32 bg-navy border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 flex flex-col items-center">
            <h6 className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6 px-4 py-1 bg-gold/5 rounded-full border border-gold/10">Full Transparency</h6>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-tight italic">Detailed <span className="text-shimmer">Archetype</span> Analysis</h2>
            <div className="h-1 w-24 bg-gold rounded-full opacity-50"></div>
          </div>

          <div className="glass-panel rounded-[48px] overflow-hidden border-white/5">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/5">
                      <th className="py-10 px-10 text-slate-500 font-black uppercase text-xs tracking-[0.4em]">Strategic Vector</th>
                      <th className="py-10 px-10 text-white font-black text-xl uppercase tracking-tight">Standard</th>
                      <th className="py-10 px-10 text-gold font-black text-xl uppercase tracking-tight bg-gold/5">Professional</th>
                      <th className="py-10 px-10 text-white font-black text-xl uppercase tracking-tight">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { name: "Candidate Replacement", s: "60 Days", p: "120 Days", e: "240 Days" },
                      { name: "Sourcing Channels", s: "Domestic", p: "Multi-Circuit", e: "Global Intelligence" },
                      { name: "Psychometric DNA Testing", s: false, p: true, e: true },
                      { name: "Market Intelligence Access", s: false, p: true, e: true },
                      { name: "Strategic Branding", s: false, p: false, e: true },
                      { name: "ERP / ATS Orchestration", s: false, p: "Optional", e: true }
                    ].map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-white/5 transition-colors group">
                        <td className="py-8 px-10 font-bold text-white text-base tracking-tight uppercase group-hover:text-gold transition-colors">{row.name}</td>
                        <td className="py-8 px-10 text-slate-400 font-bold text-base">
                          {typeof row.s === 'boolean' ? (row.s ? <Check className="text-gold" /> : <X className="text-white/10" />) : row.s}
                        </td>
                        <td className="py-8 px-10 text-gold font-black text-base bg-gold/5">
                          {typeof row.p === 'boolean' ? (row.p ? <Check className="text-gold" /> : <X className="text-white/10" />) : row.p}
                        </td>
                        <td className="py-8 px-10 text-slate-400 font-bold text-base">
                          {typeof row.e === 'boolean' ? (row.e ? <Check className="text-gold" /> : <X className="text-white/10" />) : row.e}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Clean Grid */}
      <section className="py-32 bg-navy-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 flex flex-col items-center">
            <h6 className="text-gold font-black uppercase tracking-[0.4em] text-xs mb-6 px-4 py-1 bg-gold/5 rounded-full border border-gold/10">Inquiry Ledger</h6>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 italic">Frequently <span className="text-shimmer">Asked.</span></h2>
          </div>
          <div className="space-y-8">
            {[
              { q: "Is there a strategy initiation fee?", a: "No. We operate with absolute transparency. There are zero upfront setup or hidden surcharges. You only invest in the expert recruitment services defined in your selected tier." },
              { q: "What is the typical velocity of a search?", a: "Standard searches reach shortlist status in 14-21 days. Professional and Enterprise searches bypass standard queues, leveraging our priority circuit to find elite talent in 7-14 days." },
              { q: "What defines the quality guarantee?", a: "Every placement is backed by a rigorous performance window. If a candidate fails to meet benchmarks within the defined period, we initiate an immediate replacement search at zero cost." }
            ].map((faq, idx) => (
              <div key={idx} className="glass-panel p-10 rounded-[40px] border-white/5 hover:border-gold/20 transition-all group">
                <h4 className="flex items-center text-xl font-black text-white mb-6 uppercase tracking-tight group-hover:text-gold transition-colors">
                  <HelpCircle className="w-6 h-6 mr-6 text-gold opacity-50 group-hover:opacity-100 transition-all" />
                  {faq.q}
                </h4>
                <p className="text-slate-400 font-bold leading-relaxed text-base pl-12">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-24 text-center">
            <p className="text-slate-500 font-black uppercase tracking-widest text-xs mb-8">Required further clarification?</p>
            <Link href="/contact-us" className="inline-flex items-center text-gold font-black uppercase tracking-[0.4em] text-xs hover:gap-6 gap-4 transition-all">
              Speak to a Talent Architect <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

       {/* Massive Final CTA */}
      <section className="py-32 bg-navy relative border-y border-white/5 overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold/5 blur-[150px] animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10 space-y-12 max-w-5xl">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.8] tracking-tighter">
            Initiate <br /> <span className="text-shimmer">The Search.</span>
          </h2>
          <p className="text-xl text-slate-400 font-black max-w-2xl mx-auto leading-relaxed">
            Acquiring the world's most elusive 1% of talent is a high-return investment. Secure your competitive edge now.
          </p>
          <div className="pt-8 flex justify-center">
            <Link href="/become-a-client" className="bg-gold hover:bg-gold-hover text-navy-dark px-20 py-7 rounded-full font-black text-xs uppercase tracking-[0.4em] transition-all transform hover:-translate-y-2 shadow-[0_4px_50px_rgba(212,175,55,0.4)] flex items-center justify-center gap-4 group">
              Consult Pricing <TrendingUp className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
