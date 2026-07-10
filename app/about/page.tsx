import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SectionHeader } from '@/components/SectionHeader';

const team = [
  { name: 'Aarav Kulkarni', role: 'Lead Architect' },
  { name: 'Priya Banerjee', role: 'Interior Design Director' },
  { name: 'Sanjeev Patil', role: 'Senior Structural Engineer' },
  { name: 'Maya Reddy', role: 'Project Manager' },
];

const standards = [
  'IS 456: Structural Concrete Design',
  'IS 800: Steel Design',
  'National Building Code of India',
  'Karnataka Municipality Approval Standards',
  'LEED-inspired sustainability guidance',
];

const values = [
  'Precision planning and architectural intelligence.',
  'Transparent documentation and site governance.',
  'Human-centered luxury design with practical engineering.',
  'Safety-first execution and quality assurance.',
];

export default function AboutPage() {
  return (
    <div className="bg-brand.dark text-white">
      <Navbar />
      <main className="space-y-20 py-16">
        <section className="container">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_0.9fr] items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-brand.gold">About Bidar Civil Design</p>
              <h1 className="text-4xl font-semibold leading-tight">A premium construction and architecture firm shaping modern living in Bidar and Karnataka.</h1>
              <p className="max-w-2xl text-sm leading-8 text-slate-300">We combine luxury home construction, structural engineering, interior architecture and civil consultancy to deliver end-to-end, permit-ready buildings with exceptional finishes.</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[2rem] border border-white/10 bg-[#09121c] p-7">
                  <p className="text-sm text-slate-400">Headquarters</p>
                  <p className="mt-2 text-lg font-semibold text-white">Bidar, Karnataka</p>
                </div>
                <div className="rounded-[2rem] border border-white/10 bg-[#09121c] p-7">
                  <p className="text-sm text-slate-400">Industry</p>
                  <p className="mt-2 text-lg font-semibold text-white">Construction, Architecture, Engineering, Interior Design</p>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-[2rem] border border-white/10 overflow-hidden bg-white/5">
              <Image src="/assets/hero.jpg" alt="Our firm" width={900} height={900} className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#061116]">
          <div className="container">
            <SectionHeader eyebrow="Our mission" title="Deliver inspiring architecture with strong engineering intelligence" description="We build beautiful, functional homes and commercial spaces with disciplined project delivery, structural reliability and unmatched client care." />
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { title: 'Vision', description: 'To be the benchmark for luxury construction and intelligent design across bidar region and beyond.' },
                { title: 'Mission', description: 'To deliver premium, safe and sustainable built environments with modern aesthetics and local expertise.' },
                { title: 'Values', description: 'Precision, trust, transparency, and design-led engineering are central to every decision we make.' },
              ].map((item) => (
                <div key={item.title} className="glass-card rounded-[2rem] border border-white/10 p-7">
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-sm leading-7 text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <SectionHeader eyebrow="Meet our team" title="Engineers, architects and design leaders" description="A multidisciplinary team aligned on quality, approvals, timelines and luxury execution." />
              <div className="grid gap-4 sm:grid-cols-2">
                {team.map((member) => (
                  <div key={member.name} className="glass-card rounded-[2rem] border border-white/10 p-6">
                    <p className="text-lg font-semibold text-white">{member.name}</p>
                    <p className="mt-2 text-sm text-slate-400">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6 rounded-[2rem] border border-white/10 bg-[#08121d] p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-brand.gold">Quality & Safety</p>
              <h2 className="text-3xl font-semibold text-white">Certifications, standards and safety controls</h2>
              <p className="text-sm leading-7 text-slate-300">Our team follows best practices across civil engineering, structural design, MEP planning and construction management to keep every project safe, compliant and built for lifespan.</p>
              <ul className="space-y-3 text-sm text-slate-300">
                {standards.map((item) => (
                  <li key={item} className="flex gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand.gold" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#061016]">
          <div className="container grid gap-8 md:grid-cols-2">
            {values.map((value) => (
              <div key={value} className="glass-card rounded-[2rem] border border-white/10 p-8">
                <p className="text-lg font-semibold text-white mb-3">{value.split('.')[0]}</p>
                <p className="text-sm leading-7 text-slate-300">{value}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
