import { notFound } from 'next/navigation';
import { getSubIndustryBySlug, industriesData } from '@/data/industries';
import IndustryHero from '@/components/industry/IndustryHero';
import Link from 'next/link';

export function generateStaticParams() {
  const params: { industry: string; subIndustry: string }[] = [];
  industriesData.forEach((ind) => {
    ind.subIndustries.forEach((sub) => {
      params.push({ industry: ind.slug, subIndustry: sub.slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ industry: string; subIndustry: string }> }) {
  const { industry, subIndustry } = await params;
  const data = getSubIndustryBySlug(industry, subIndustry);
  if (!data) return { title: 'Practice Not Found | NAYA Staffing' };
  
  return {
    title: `${data.name} Jobs & Recruitment | NAYA Staffing`,
    description: data.description,
  }
}

export default async function SubIndustryPage({ params }: { params: Promise<{ industry: string; subIndustry: string }> }) {
  const { industry, subIndustry } = await params;
  const parentIndustry = industriesData.find(ind => ind.slug === industry);
  const data = getSubIndustryBySlug(industry, subIndustry);
  
  if (!data || !parentIndustry) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-navy-dark">
      <IndustryHero 
        title={data.name}
        tagline={`${parentIndustry.name} Specialty`}
        description={data.description}
        breadcrumbs={[
          { name: "Industries", href: "/our-industries" },
          { name: parentIndustry.name, href: `/industries/${parentIndustry.slug}` },
          { name: data.name, href: `/industries/${parentIndustry.slug}/${data.slug}` }
        ]}
      />

      {/* Target Roles Grid */}
      <section className="py-24 bg-[#0B132B] relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">Elite Talent within <span className="text-transparent bg-clip-text bg-linear-to-r from-gold to-yellow-600">{data.name}</span></h2>
              <p className="text-xl text-gray-400">Our deep network allows us to source passive, high-impact candidates across the following critical roles and beyond.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.keyRoles.map((role) => (
              <div 
                key={role}
                className="group p-6 rounded-2xl bg-[#040814]/50 border border-white/5 hover:bg-white/[0.04] hover:border-gold/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors">{role}</h3>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-400 italic">Don't see the specific role listed? Our bespoke search process covers the entire {data.name} spectrum.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy-dark text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-black text-white mb-8">Architect Your Dream Team Today</h2>
          <p className="text-xl text-gray-400 mb-12">Whether you need a single impact hire or want to scale an entire {data.name} department, our executive search team is ready to execute.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/contact-us"
              className="px-8 py-4 bg-gold hover:bg-gold-hover text-navy-dark font-black uppercase tracking-widest text-sm rounded-xl transition-all hover:scale-105"
            >
              Hire Elite Talent
            </Link>
            <Link 
              href="/register-upload-resume"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-black uppercase tracking-widest text-sm rounded-xl transition-all"
            >
              Submit Resume
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
