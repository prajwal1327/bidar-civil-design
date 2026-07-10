import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProjectCard } from '@/components/ProjectCard';
import { featuredProjects, companyHighlights } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

const projectTypes = [
  {
    type: 'Residential',
    description: 'Luxury villas, independent homes and premium residences built to your exact specification with superior finishes.',
    count: '80+',
  },
  {
    type: 'Commercial',
    description: 'Office buildings, retail spaces and hospitality projects engineered for performance and brand identity.',
    count: '45+',
  },
  {
    type: 'Apartments',
    description: 'Multi-floor apartment complexes with structural coordination, MEP planning and complete common-area design.',
    count: '30+',
  },
  {
    type: 'Interiors',
    description: 'End-to-end interior fit-outs for homes, offices and hospitality spaces with bespoke furniture and lighting.',
    count: '60+',
  },
  {
    type: 'Luxury Villas',
    description: 'Signature villa projects with landscape integration, smart home systems and premium exterior treatment.',
    count: '25+',
  },
  {
    type: 'Office Spaces',
    description: 'Corporate interiors, collaborative workspaces and executive office fit-outs designed for modern business culture.',
    count: '20+',
  },
];

export default function ProjectsPage() {
  return (
    <div className="bg-white text-[#0d1117]">
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="relative bg-[#0f1b33] overflow-hidden py-28">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80"
              alt="Construction portfolio"
              fill
              style={{ objectFit: 'cover' }}
              className="opacity-20"
            />
          </div>
          <div className="absolute inset-0 bg-[#0f1b33]/60" />
          <div className="relative container">
            <p className="text-xs uppercase tracking-[0.45em] text-[#c4922a] mb-4">Our Portfolio</p>
            <div className="w-12 h-0.5 bg-[#c4922a] mb-7" />
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight max-w-3xl">
              Completed & Ongoing Projects That Define Modern Living
            </h1>
            <p className="mt-6 text-slate-300 text-base leading-8 max-w-2xl">
              210+ projects delivered across residential, commercial, interiors and luxury villa segments — each one a demonstration of engineering precision and architectural vision.
            </p>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="bg-[#0d1117] border-b border-white/5">
          <div className="container py-10">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {companyHighlights.map((stat, i) => (
                <div key={stat.label} className={`text-center ${i > 0 ? 'md:pl-6' : ''}`}>
                  <p className="font-serif text-4xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECT CATEGORIES ── */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.35em] text-[#c4922a] mb-4">Project Segments</p>
              <div className="w-12 h-0.5 bg-[#c4922a] mx-auto mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#0d1117]">
                Our Work Spans Every Building Typology
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {projectTypes.map((pt) => (
                <div key={pt.type} className="group border border-slate-200 rounded-lg p-7 hover:border-[#c4922a]/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-0.5 bg-[#c4922a] mt-3" />
                    <span className="font-serif font-bold text-3xl text-[#c4922a]/20 group-hover:text-[#c4922a]/40 transition-colors">
                      {pt.count}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[#0d1117] text-lg mb-3">{pt.type}</h3>
                  <p className="text-sm text-slate-600 leading-7">{pt.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURED PROJECTS ── */}
        <section className="py-24 bg-[#f8f4ee]">
          <div className="container">
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.35em] text-[#c4922a] mb-4">Selected Work</p>
              <div className="w-12 h-0.5 bg-[#c4922a] mx-auto mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#0d1117]">
                Featured Projects
              </h2>
              <p className="mt-5 text-sm md:text-base leading-8 text-slate-600 max-w-2xl mx-auto">
                Each project showcases architecture, structural coordination and interior finishes crafted for modern premium living and working environments.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        </section>

        {/* ── LARGE FEATURE ── */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-premium">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"
                  alt="Luxury villa by Hatkar Construction"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="bg-[#c4922a] text-white text-xs uppercase tracking-widest px-3 py-1 rounded-sm">
                    Showcase
                  </span>
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[#c4922a] mb-4">Signature Work</p>
                <div className="w-12 h-0.5 bg-[#c4922a] mb-6" />
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#0d1117] mb-6 leading-tight">
                  Every Project Is a Statement of Our Craft
                </h2>
                <p className="text-slate-600 text-sm leading-8 mb-5">
                  From a 6,400 sq.ft luxury villa in Bidar to an 18,500 sq.ft apartment complex in Bangalore — Hatkar Construction brings the same level of engineering rigour and aesthetic refinement to every project, regardless of scale.
                </p>
                <p className="text-slate-600 text-sm leading-8 mb-8">
                  We integrate structural design, MEP coordination, interior planning and landscape design into a seamless delivery experience supervised by Er. Pramod Hatkar and his senior engineering team.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#c4922a] text-white text-sm font-semibold px-7 py-4 rounded-sm hover:bg-[#a87924] transition-colors"
                >
                  Discuss Your Project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-[#0f1b33]">
          <div className="container text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[#c4922a] mb-4">Start Building</p>
            <div className="w-12 h-0.5 bg-[#c4922a] mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-5 max-w-xl mx-auto">
              Your Project Could Be Our Next Signature Work
            </h2>
            <p className="text-slate-300 text-sm leading-8 mb-8 max-w-lg mx-auto">
              Whether it is a luxury home, a commercial complex or an interior renovation, we bring the same commitment to quality and excellence.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#c4922a] text-white text-sm font-semibold px-8 py-4 rounded-sm hover:bg-[#a87924] transition-colors"
              >
                Get Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-semibold px-8 py-4 rounded-sm hover:border-white/60 hover:bg-white/5 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
