import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { companyHighlights } from '@/lib/data';

const standards = [
  'IS 456: Plain & Reinforced Concrete Design',
  'IS 800: General Construction in Steel',
  'National Building Code of India (NBC)',
  'Karnataka Municipal Approval Standards',
  'LEED-inspired Sustainability Practices',
];

const milestones = [
  { year: '2006', event: 'Hatkar Construction founded in Bidar, Karnataka by Er. Pramod Hatker.' },
  { year: '2011', event: 'Expanded into commercial construction and interior design services.' },
  { year: '2016', event: 'Introduced AutoCAD drafting and BIM coordination capabilities.' },
  { year: '2020', event: 'Crossed 150 projects milestone with a team of 45 engineers and architects.' },
  { year: '2026', event: '210+ completed projects across residential, commercial and infrastructure segments.' },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-[#0d1117]">
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="relative bg-[#0f1b33] overflow-hidden py-28">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
              alt="Construction site"
              fill
              style={{ objectFit: 'cover' }}
              className="opacity-20"
            />
          </div>
          <div className="absolute inset-0 bg-[#0f1b33]/60" />
          <div className="relative container">
            <p className="text-xs uppercase tracking-[0.45em] text-[#c4922a] mb-4">About Us</p>
            <div className="w-12 h-0.5 bg-[#c4922a] mb-7" />
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight max-w-3xl">
              A Premium Construction Firm Shaping Karnataka's Built Environment
            </h1>
            <p className="mt-6 text-slate-300 text-base leading-8 max-w-2xl">
              Founded by Er. Pramod Hatker, we combine luxury home building, structural engineering, interior architecture and civil consultancy to deliver world-class buildings with modern aesthetics and lasting performance.
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

        {/* ── STORY ── */}
        <section className="py-24 bg-white">
          <div className="container grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#c4922a] mb-4">Our Story</p>
              <div className="w-12 h-0.5 bg-[#c4922a] mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#0d1117] mb-6 leading-tight">
                Two Decades of Engineering Excellence in Karnataka
              </h2>
              <p className="text-slate-600 text-sm leading-8 mb-5">
                Hatkar Construction & Consulting was established in 2006 with a single conviction: that superior construction must combine engineering discipline with architectural vision. Today, 18 years later, that conviction drives every project we undertake.
              </p>
              <p className="text-slate-600 text-sm leading-8 mb-8">
                From luxury residences in Bidar to commercial spaces in Bangalore and Hyderabad, our work spans geography but maintains a single standard — precision, quality and client-centric delivery.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="border border-slate-200 rounded-sm p-5">
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">Headquarters</p>
                  <p className="font-semibold text-[#0d1117]">Bidar, Karnataka</p>
                </div>
                <div className="border border-slate-200 rounded-sm p-5">
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">Founded By</p>
                  <p className="font-semibold text-[#0d1117]">Er. Pramod Hatker</p>
                </div>
                <div className="border border-slate-200 rounded-sm p-5">
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">Established</p>
                  <p className="font-semibold text-[#0d1117]">2006</p>
                </div>
                <div className="border border-slate-200 rounded-sm p-5">
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">Service Area</p>
                  <p className="font-semibold text-[#0d1117]">Karnataka & Beyond</p>
                </div>
              </div>
            </div>
            <div className="relative h-[540px] rounded-lg overflow-hidden shadow-premium">
              <Image
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
                alt="Hatkar Construction project"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        {/* ── VMV ── */}
        <section className="py-24 bg-[#f8f4ee]">
          <div className="container">
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.35em] text-[#c4922a] mb-4">Our Foundation</p>
              <div className="w-12 h-0.5 bg-[#c4922a] mx-auto mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#0d1117]">
                Vision, Mission & Values
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: 'Vision',
                  description: 'To be the benchmark for luxury construction and intelligent architectural design throughout Karnataka and South India, recognized for engineering excellence and client trust.',
                },
                {
                  title: 'Mission',
                  description: 'To deliver premium, safe and sustainable built environments with modern aesthetics, rigorous quality control and complete local approvals expertise on every project.',
                },
                {
                  title: 'Values',
                  description: 'Precision, transparency, integrity and design-led engineering are the principles at the heart of every decision, every drawing and every structure we build.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className="w-10 h-0.5 bg-[#c4922a] mb-5" />
                  <h3 className="text-xl font-semibold text-[#0d1117] mb-4">{item.title}</h3>
                  <p className="text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="mb-14">
              <p className="text-xs uppercase tracking-[0.35em] text-[#c4922a] mb-4">Our Journey</p>
              <div className="w-12 h-0.5 bg-[#c4922a] mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#0d1117]">
                Milestones That Define Us
              </h2>
            </div>
            <div className="space-y-0">
              {milestones.map((m, i) => (
                <div key={m.year} className="grid grid-cols-[80px_1fr] gap-8 items-start">
                  <div className="text-right">
                    <span className="font-serif font-bold text-lg text-[#c4922a]">{m.year}</span>
                  </div>
                  <div className={`pl-8 border-l-2 border-slate-200 pb-10 ${i === milestones.length - 1 ? '' : ''}`}>
                    <div className="w-3 h-3 rounded-full bg-[#c4922a] -ml-[1.45rem] mb-3 mt-1" />
                    <p className="text-sm text-slate-700 leading-7">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STANDARDS & DIFFERENCE ── */}
        <section className="py-24 bg-[#0f1b33]">
          <div className="container grid gap-16 lg:grid-cols-2 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#c4922a] mb-4">The Hatkar Difference</p>
              <div className="w-12 h-0.5 bg-[#c4922a] mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
                Quality, Approvals & Modern Construction Managed End-to-End
              </h2>
              <p className="text-slate-300 text-sm leading-8 mb-8">
                We bring civil engineering control, architectural design and build management together for high-grade residential and commercial outcomes. Every project is supervised, documented and delivered to specification.
              </p>
              <div className="grid gap-5">
                {[
                  { title: 'Turnkey Delivery', description: 'From concept to final handover, all disciplines aligned under one project workflow.' },
                  { title: 'Performance-First Design', description: 'Structural efficiency, modern materials and elegant finishes combined with durable execution.' },
                  { title: 'Approval-Ready Documentation', description: 'Complete drawings, calculations and permit support for Karnataka authorities.' },
                  { title: 'Premium Client Care', description: 'Transparent budgets, timelines and on-site governance for every build.' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#c4922a] mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-white text-sm mb-1">{item.title}</p>
                      <p className="text-sm text-slate-400 leading-6">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-[#c4922a] mb-6">Standards We Follow</p>
              <h3 className="font-serif text-2xl font-semibold text-white mb-5">
                Certifications, Standards & Safety Controls
              </h3>
              <p className="text-sm leading-7 text-slate-400 mb-7">
                Our approach follows best practices across civil engineering, structural design, MEP planning and construction management so every project is safe, compliant and built for its full lifespan.
              </p>
              <ul className="space-y-4">
                {standards.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[#c4922a] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-[#f8f4ee]">
          <div className="container text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[#c4922a] mb-4">Work With Us</p>
            <div className="w-12 h-0.5 bg-[#c4922a] mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#0d1117] mb-5 max-w-2xl mx-auto">
              Ready to Begin Your Project with Hatkar Construction?
            </h2>
            <p className="text-slate-600 text-sm leading-8 mb-8 max-w-xl mx-auto">
              Speak with our team for a free consultation on your luxury home, commercial space or structural engineering project.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#c4922a] text-white text-sm font-semibold px-8 py-4 rounded-sm hover:bg-[#a87924] transition-colors"
              >
                Get Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 border border-[#0f1b33] text-[#0f1b33] text-sm font-semibold px-8 py-4 rounded-sm hover:bg-[#0f1b33] hover:text-white transition-colors"
              >
                View Our Projects
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
