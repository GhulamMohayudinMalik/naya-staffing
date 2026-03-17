'use client';

import { Check, X, HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const tiers = [
  {
    name: "Standard",
    price: "$2,999",
    description: "Perfect for small businesses looking for specialized talent.",
    features: [
      "Single Role Search",
      "Candidate Screening",
      "Background Checks",
      "60-Day Guarantee",
      "Direct Support"
    ],
    notIncluded: [
      "Dedicated Account Manager",
      "Branding Services",
      "Executive Search"
    ],
    buttonText: "Start Hiring",
    highlight: false
  },
  {
    name: "Professional",
    price: "$7,499",
    description: "Optimized for growing teams with multiple hiring needs.",
    features: [
      "Up to 3 Role Searches",
      "Advanced Skill Assessments",
      "Priority Support",
      "90-Day Guarantee",
      "Market Analysis Report",
      "Dedicated Recruiter"
    ],
    notIncluded: [
      "Employer Branding",
      "Global Executive Search"
    ],
    buttonText: "Get Professional",
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Total recruitment outsourcing for large scale operations.",
    features: [
      "Unlimited Role Searches",
      "Total RPO Solutions",
      "Employer Branding",
      "Executive Search",
      "Global Talent Access",
      "White-Glove Support",
      "Custom Integration"
    ],
    notIncluded: [],
    buttonText: "Contact Sales",
    highlight: false
  }
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-[#212121]">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#081120] overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EF6A0B] opacity-5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">Transparent <span className="text-[#EF6A0B]">Pricing</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium">
            Invest in the right talent. No hidden fees, just results-driven recruitment solutions tailored to your scale.
          </p>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-24 -mt-32 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tiers.map((tier, idx) => (
              <div key={idx} className={`bg-white rounded-[40px] p-10 shadow-xl border ${tier.highlight ? 'border-[#EF6A0B] ring-4 ring-[#EF6A0B]/10' : 'border-gray-100'} flex flex-col h-full transform hover:-translate-y-2 transition-all duration-300`}>
                {tier.highlight && (
                  <div className="bg-[#EF6A0B] text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full self-start mb-6">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-extrabold text-[#081120] mb-2">{tier.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-extrabold text-[#081120]">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-gray-500 ml-2 font-medium">/ project</span>}
                </div>
                <p className="text-gray-600 mb-8">{tier.description}</p>
                
                <div className="space-y-4 mb-10 flex-grow">
                  {tier.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3">
                      <div className="bg-green-100 p-1 rounded-full">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                  {tier.notIncluded.map((feature, nIdx) => (
                    <div key={nIdx} className="flex items-center gap-3 opacity-40">
                      <div className="bg-gray-100 p-1 rounded-full">
                        <X className="w-4 h-4 text-gray-400" />
                      </div>
                      <span className="text-gray-400 font-medium line-through">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  href={tier.price === "Custom" ? "/contact-us" : "/become-a-client"} 
                  className={`w-full py-5 rounded-2xl font-bold text-center transition-all ${
                    tier.highlight 
                      ? 'bg-[#EF6A0B] text-white shadow-lg shadow-[#EF6A0B]/30 hover:bg-[#d55e0a]' 
                      : 'bg-[#081120] text-white hover:bg-[#1a2a44]'
                  }`}
                >
                  {tier.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#081120] mb-4">Detailed Comparison</h2>
            <p className="text-gray-600 font-medium">Choose the plan that's right for your organization's growth.</p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="py-6 px-4 text-gray-400 font-bold uppercase text-xs tracking-widest">Feature</th>
                  <th className="py-6 px-4 text-[#081120] font-extrabold text-lg">Standard</th>
                  <th className="py-6 px-4 text-[#EF6A0B] font-extrabold text-lg">Professional</th>
                  <th className="py-6 px-4 text-[#081120] font-extrabold text-lg">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { name: "Candidate Replacement", s: "60 Days", p: "90 Days", e: "180 Days" },
                  { name: "Sourcing Channels", s: "Basic", p: "Multi-Channel", e: "Premium + Global" },
                  { name: "Psychometric Testing", s: false, p: true, e: true },
                  { name: "Market Intelligence", s: false, p: true, e: true },
                  { name: "Employer Branding", s: false, p: false, e: true },
                  { name: "ATS Integration", s: false, p: "Optional", e: true }
                ].map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-[#F8F9FA] transition-colors">
                    <td className="py-6 px-4 font-bold text-[#081120]">{row.name}</td>
                    <td className="py-6 px-4 text-gray-600 font-medium">
                      {typeof row.s === 'boolean' ? (row.s ? <Check className="text-green-500" /> : <X className="text-gray-300" />) : row.s}
                    </td>
                    <td className="py-6 px-4 text-gray-600 font-medium">
                      {typeof row.p === 'boolean' ? (row.p ? <Check className="text-[#EF6A0B]" /> : <X className="text-gray-300" />) : row.p}
                    </td>
                    <td className="py-6 px-4 text-gray-600 font-medium">
                      {typeof row.e === 'boolean' ? (row.e ? <Check className="text-green-500" /> : <X className="text-gray-300" />) : row.e}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Small Section */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-extrabold text-[#081120] mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "Is there a setup fee?", a: "No, we don't charge any upfront setup fees. You only pay for the recruitment services described in your chosen tier." },
              { q: "How long does a typical search take?", a: "Standard searches usually take 2-4 weeks, while Professional and Enterprise searches benefit from priority sourcing and can often find top talent within 10-21 days." },
              { q: "What if the candidate doesn't work out?", a: "Every project comes with a guarantee period. If the candidate leaves or is terminated within that period, we will replace them at no additional cost." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="flex items-center text-lg font-bold text-[#081120] mb-4">
                  <HelpCircle className="w-5 h-5 mr-3 text-[#EF6A0B]" />
                  {faq.q}
                </h4>
                <p className="text-gray-600 leading-relaxed pl-8">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-gray-500 font-medium mb-6">Still have questions?</p>
            <Link href="/contact-us" className="inline-flex items-center text-[#EF6A0B] font-bold group">
              Speak to a Pricing Expert <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
