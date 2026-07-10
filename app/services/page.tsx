import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ServiceCard } from '@/components/ServiceCard';
import { serviceList } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

const serviceDetails = [
  {
    title: 'Residential Construction',
    description: 'Turnkey luxury homes, villas, farmhouses and premium apartment projects with architectural finesse, superior materials and complete interior integration. We manage every phase from site preparation to final handover.',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Commercial Construction',
    description: 'Office buildings, retail spaces, hospitality interiors and institutional projects designed for strong brand impact, operational efficiency and modern aesthetics that reflect your organizational identity.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Interior Design & Architecture',
    description: 'End-to-end interior planning with curated materials, custom furniture, ambient lighting design and spatial optimization. We create living and working environments that blend beauty with function.',
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Structural & Civil Engineering',
    description: 'Concrete, steel and hybrid structural systems engineered for seismic performance, load-bearing efficiency and long-term durability. Complete site planning, soil analysis and foundation design included.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'AutoCAD Drafting & BIM',
    description: 'Architectural drawings, MEP coordination sets, Revit BIM modeling and permit-ready documentation packages. We support approvals from Karnataka Municipal bodies with complete drawing sets.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Landscape Design',
    description: 'Private gardens, courtyard planning, deck areas, water features and site landscapes tailored to each home and resort setting. Sustainable planting strategies and maintenance-friendly designs.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80',
  },
];

const process = [
  { step: '01', title: 'Consultation', description: 'We begin with a free discussion of your project goals, timeline and budget parameters.' },
  { step: '02', title: 'Design & Planning', description: 'Our architects and engineers develop concept designs, structural plans and cost estimates.' },
  { step: '03', title: 'Approvals', description: 'We prepare and submit all required permit documentation to Karnataka authorities.' },
  { step: '04', title: 'Construction', description: 'Supervised on-site execution with regular quality checks, material validation and progress reports.' },
  { step: '05', title: 'Handover', description: 'Final inspection, snagging resolution and complete handover with as-built documentation.' },
];

export default function ServicesPage() {
  return (
    <div className="bg-white text-[#0d1117]">
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="relative bg-[#0f1b33] overflow-hidden py-28">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80"
              alt="Construction services"
              fill
              style={{ objectFit: 'cover' }}
              className="opacity-20"
            />
          </div>
          <div className="absolute inset-0 bg-[#0f1b33]/60" />
          <div className="relative container">
            <p className="text-xs uppercase tracking-[0.45em] text-[#c4922a] mb-4">Our Capabilities</p>
            <div className="w-12 h-0.5 bg-[#c4922a] mb-7" />
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight max-w-3xl">
              Comprehensive Construction & Design Services
            </h1>
            <p className="mt-6 text-slate-300 text-base leading-8 max-w-2xl">
              From a luxury villa concept to full interior execution and civil engineering consultancy — our services cover every stage of planning, approvals, costing and delivery.
            </p>
          </div>
        </section>

        {/* ── DETAILED SERVICES ── */}
        <section className="py-24 bg-white">
          <div className="container">
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.35em] text-[#c4922a] mb-4">What We Offer</p>
              <div className="w-12 h-0.5 bg-[#c4922a] mx-auto mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#0d1117]">
                Specialised Services for Architecture, Engineering & Design
              </h2>
            </div>
            <div className="space-y-5">
              {serviceDetails.map((service, i) => (
                <div
                  key={service.title}
                  className={`grid gap-0 md:grid-cols-[1fr_360px] overflow-hidden rounded-lg border border-slate-200 hover:shadow-lg transition-shadow ${i % 2 === 1 ? 'md:grid-cols-[360px_1fr]' : ''}`}
                >
                  <div className={`p-8 md:p-10 flex flex-col justify-center ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="w-10 h-0.5 bg-[#c4922a] mb-5" />
                    <h3 className="font-serif text-2xl font-semibold text-[#0d1117] mb-4">{service.title}</h3>
                    <p className="text-sm text-slate-600 leading-7">{service.description}</p>
                  </div>
                  <div className={`relative h-56 md:h-auto ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="py-24 bg-[#0f1b33]">
          <div className="container">
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.35em] text-[#e8b84b] mb-4">How We Work</p>
              <div className="w-12 h-0.5 bg-[#c4922a] mx-auto mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white">
                Our Project Delivery Process
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-5">
              {process.map((p) => (
                <div key={p.step} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-[#c4922a]/40 bg-[#c4922a]/10 mb-5">
                    <span className="font-serif font-bold text-[#c4922a] text-lg">{p.step}</span>
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-3">{p.title}</h3>
                  <p className="text-xs text-slate-400 leading-5">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICE CARDS ── */}
        <section className="py-24 bg-[#f8f4ee]">
          <div className="container">
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.35em] text-[#c4922a] mb-4">Service Summary</p>
              <div className="w-12 h-0.5 bg-[#c4922a] mx-auto mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#0d1117]">
                Every Modern Project Needs These Capabilities
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {serviceList.map((service) => (
                <ServiceCard key={service.title} title={service.title} subtitle={service.subtitle} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="container text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#0d1117] mb-5 max-w-xl mx-auto">
              Ready to Discuss Your Project Requirements?
            </h2>
            <p className="text-slate-600 text-sm leading-8 mb-8 max-w-lg mx-auto">
              Contact our team for a free consultation — from a single room renovation to a full luxury villa or commercial complex.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#c4922a] text-white text-sm font-semibold px-8 py-4 rounded-sm hover:bg-[#a87924] transition-colors"
              >
                Get Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+919738417053"
                className="inline-flex items-center gap-2 border border-[#0f1b33] text-[#0f1b33] text-sm font-semibold px-8 py-4 rounded-sm hover:bg-[#0f1b33] hover:text-white transition-colors"
              >
                Call +91 97384 17053
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
