import { notFound } from 'next/navigation';
import { getIndustryBySlug, industriesData } from '@/data/industries';
import IndustryHero from '@/components/industry/IndustryHero';
import Link from 'next/link';
import Image from 'next/image';

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

  // Aggregate all remaining images for the gallery
  const galleryImages = data.subIndustries.flatMap(sub => sub.images.slice(1));

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {data.subIndustries.map((sub) => (
              <Link 
                href={`/industries/${data.slug}/${sub.slug}`}
                key={sub.slug}
                className="group rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-gold/30 transition-all duration-300 flex flex-col h-full overflow-hidden"
              >
                {/* Cover Image */}
                {sub.images && sub.images.length > 0 ? (
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image 
                      src={sub.images[0]} 
                      alt={sub.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0B132B] to-transparent opacity-80"></div>
                  </div>
                ) : (
                  <div className="h-48 bg-white/5 flex items-center justify-center">
                    <span className="text-white/20 font-bold uppercase tracking-widest text-xs">No Image</span>
                  </div>
                )}
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors">{sub.name}</h3>
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">{sub.description}</p>
                <div className="mt-auto flex justify-between items-center text-sm font-bold uppercase tracking-widest text-gold">
                  <span>Explore Practice</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Image Gallery */}
      {galleryImages.length > 0 && (
        <section className="py-24 bg-navy-dark relative overflow-hidden border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-black text-white mb-4 uppercase tracking-tight">{data.name} <span className="text-gold">in Action</span></h2>
              <div className="btn-rotating-border h-1 w-20 bg-white/10 mx-auto rounded-full"></div>
            </div>
            
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {galleryImages.map((src, idx) => (
                <div key={idx} className="relative break-inside-avoid rounded-3xl overflow-hidden group border border-white/10 shadow-2xl">
                  <Image 
                    src={src}
                    alt={`${data.name} gallery image ${idx + 1}`}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Key Roles Banner */}
      <section className="py-24 bg-navy-dark relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-12 lg:p-16 rounded-[40px] bg-linear-to-br from-[#0B132B] to-[#040814] border border-white/10 shadow-2xl relative overflow-hidden btn-sheen">
            {/* Decals */}
            <div className="btn-rotating-border absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-[80px] btn-auto-sheen border border-white/5"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 xl:gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-6">Ready to secure top {data.name} talent?</h2>
                <p className="text-lg text-gray-400 mb-8">Stop settling for average candidates. Partner with NAYA Staffing to architecture an elite workforce that drives compounding growth and innovation.</p>
                <Link 
                  href="/contact-us"
                  className="btn-rotating-border inline-flex px-8 py-4 bg-white text-white hover:text-gold hover:bg-white/5 font-black uppercase tracking-widest text-sm rounded-xl transition-all btn-auto-sheen border border-white/5"
                >
                  Schedule Consultation
                </Link>
              </div>
              <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
                {/* Aggregate all roles just for visual flair in the parent generic template */}
                 {Array.from(new Set(data.subIndustries.flatMap(s => s.keyRoles))).slice(0, 6).map((role) => (
                    <div key={role} className="p-4 bg-white/5 border border-white/10 rounded-xl text-center shadow-lg btn-sheen">
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
