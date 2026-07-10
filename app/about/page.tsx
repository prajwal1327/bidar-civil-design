import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SectionHeader } from '@/components/SectionHeader';

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
    <div className="bg-brand.surface text-slate-900">
      <Navbar />
      <main className="space-y-20 py-16">
        <section className="container">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_0.9fr] items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-brand.primary">About Hatkar Construction</p>
              <h1 className="text-4xl font-semibold leading-tight">A premium construction and consulting firm shaping intelligent living spaces across Karnataka.</h1>
              <p className="max-w-2xl text-sm leading-8 text-slate-600">Hatkar Construction & Consulting combines luxury home building, structural engineering, interior architecture and civil consultancy to deliver turnkey buildings with modern aesthetics, approvals and long-term performance.</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7">
                  <p className="text-sm text-slate-500">Headquarters</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">Bidar, Karnataka</p>
                </div>
                <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7">
                  <p className="text-sm text-slate-500">Firm leader</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">Er. Pramod Hatkar</p>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-[2rem] border border-slate-200 overflow-hidden bg-white">
              <Image src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80" alt="Hatkar Construction team" width={900} height={900} className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container">
            <SectionHeader eyebrow="Our mission" title="Deliver inspiring architecture with strong engineering intelligence" description="We build beautiful, functional homes and commercial spaces with disciplined project delivery, structural reliability and unmatched client care." />
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { title: 'Vision', description: 'To be the benchmark for luxury construction and intelligent design throughout Karnataka and beyond.' },
                { title: 'Mission', description: 'To deliver premium, safe and sustainable built environments with modern aesthetics and local approvals expertise.' },
                { title: 'Values', description: 'Precision, trust, transparency and design-led engineering are central to every decision we make.' },
              ].map((item) => (
                <div key={item.title} className="glass-card rounded-[2rem] border border-slate-200 p-7">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <SectionHeader eyebrow="Hatkar difference" title="Quality, approvals and modern construction managed end-to-end" description="We bring civil engineering control, architectural design and build management together for high-grade residential and commercial outcomes." />
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: 'Turnkey delivery', description: 'From concept to final handover, all disciplines aligned under one project workflow.' },
                  { title: 'Performance-first design', description: 'Structural efficiency, modern materials and elegant finishes combined with durable execution.' },
                  { title: 'Approval-ready documentation', description: 'Complete drawings, calculations and permit support for Karnataka authorities.' },
                  { title: 'Premium client care', description: 'Transparent budgets, timelines and on-site governance for every build.' },
                ].map((item) => (
                  <div key={item.title} className="glass-card rounded-[2rem] border border-slate-200 p-7">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-sm leading-7 text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-brand.primary">Quality & Safety</p>
              <h2 className="text-3xl font-semibold text-slate-900">Certifications, standards and safety controls</h2>
              <p className="text-sm leading-7 text-slate-600">Our approach follows best practices across civil engineering, structural design, MEP planning and construction management so every project is safe, compliant and built for lifespan.</p>
              <ul className="space-y-3 text-sm text-slate-700">
                {standards.map((item) => (
                  <li key={item} className="flex gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand.gold" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-100">
          <div className="container grid gap-8 md:grid-cols-2">
            {values.map((value) => (
              <div key={value} className="glass-card rounded-[2rem] border border-slate-200 p-8">
                <p className="text-lg font-semibold text-slate-900 mb-3">{value.split('.')[0]}</p>
                <p className="text-sm leading-7 text-slate-600">{value}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
