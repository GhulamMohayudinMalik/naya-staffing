import { notFound } from 'next/navigation';
import { getIndustryBySlug, industriesData } from '@/data/industries';
import IndustryHero from '@/components/industry/IndustryHero';
import Link from 'next/link';

export function generateStaticParams() {
  return industriesData.map((industry) => ({
    industry: industry.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ industry: string }> }) {
  const resolvedParams = await params;
  const data = getIndustryBySlug(resolvedParams.industry);
  if (!data) return { title: 'Industry Not Found | NAYA Staffing' };
  
  return {
    title: `${data.name} Recruitment & Executive Search | NAYA Staffing`,
    description: data.description,
  }
}

export default async function IndustryPage({ params }: { params: Promise<{ industry: string }> }) {
  const resolvedParams = await params;
  const data = getIndustryBySlug(resolvedParams.industry);
  
  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-navy-dark">
      <IndustryHero 
        title={data.name}
        tagline={data.tagline}
        description={data.description}
        breadcrumbs={[
          { name: "Industries", href: "/our-industries" },
          { name: data.name, href: `/industries/${data.slug}` }
        ]}
      />

      {/* Specializations Grid */}
      <section className="py-24 bg-[#0B132B] relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">Our Specialized <span className="text-transparent bg-clip-text bg-linear-to-r from-gold to-yellow-600">Practice Areas</span></h2>
            <p className="text-xl text-gray-400 max-w-3xl">Deep domain expertise across the {data.name} spectrum. Select a specialization to learn more about our targeted recruitment capabilities.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.subIndustries.map((sub) => (
              <Link 
                href={`/industries/${data.slug}/${sub.slug}`}
                key={sub.slug}
                className="group p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-gold/30 transition-all duration-300 flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-2xl bg-gold/10 text-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors">{sub.name}</h3>
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">{sub.description}</p>
                <div className="mt-auto flex justify-between items-center text-sm font-bold uppercase tracking-widest text-gold">
                  <span>Explore Practice</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Key Roles Banner */}
      <section className="py-24 bg-navy-dark relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-12 lg:p-16 rounded-[40px] bg-linear-to-br from-[#0B132B] to-[#040814] border border-white/10 shadow-2xl relative overflow-hidden">
            {/* Decals */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/10 rounded-full blur-[80px]"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">Ready to secure top {data.name} talent?</h2>
                <p className="text-lg text-gray-400 mb-8">Stop settling for average candidates. Partner with NAYA Staffing to architecture an elite workforce that drives compounding growth and innovation.</p>
                <Link 
                  href="/contact-us"
                  className="inline-flex px-8 py-4 bg-white text-navy-dark hover:bg-gold font-black uppercase tracking-widest text-sm rounded-xl transition-all"
                >
                  Schedule Consultation
                </Link>
              </div>
              <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
                {/* Aggregate all roles just for visual flair in the parent generic template */}
                 {Array.from(new Set(data.subIndustries.flatMap(s => s.keyRoles))).slice(0, 6).map((role) => (
                    <div key={role} className="p-4 bg-white/5 border border-white/10 rounded-xl text-center shadow-lg">
                      <span className="text-sm font-bold text-gray-300">{role}</span>
                    </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
