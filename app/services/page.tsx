import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SectionHeader } from '@/components/SectionHeader';
import { ServiceCard } from '@/components/ServiceCard';
import { serviceList } from '@/lib/data';

const serviceDetails = [
  { title: 'Residential Construction', description: 'Turnkey luxury homes, villas, farmhouses and premium apartment projects with architectural finesse.' },
  { title: 'Commercial Construction', description: 'Office buildings, retail spaces and hospitality interiors designed for strong brand impact.' },
  { title: 'Interior Design', description: 'End-to-end interiors, furniture planning, lighting design and curated materials.' },
  { title: 'Landscape Design', description: 'Private gardens, deck areas and site features tailored to each home and resort setting.' },
  { title: 'Structural Design', description: 'Concrete, steel and hybrid structural systems designed for function, seismic performance and longevity.' },
  { title: 'AutoCAD Drafting & BIM', description: 'Architectural drawings, MEP coordination sets, Revit modeling and permit-ready documentation.' },
];

export default function ServicesPage() {
  return (
    <div className="bg-brand.surface text-slate-900">
      <Navbar />
      <main className="space-y-20 py-16">
        <section className="container">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-brand.primary">Our capabilities</p>
            <h1 className="text-4xl font-semibold leading-tight">Comprehensive construction and design services for every project stage.</h1>
            <p className="max-w-2xl text-sm leading-8 text-slate-600">From a luxury villa concept to full interior execution and civil engineering consultancy, our services cover planning, approvals, costing and delivery.</p>
          </div>
        </section>

        <section className="container">
          <SectionHeader eyebrow="Featured services" title="Specialized services for architecture, engineering and home design" description="Each service is delivered with premium attention to detail, technical compliance and aesthetic clarity." />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceDetails.map((service) => (
              <div key={service.title} className="glass-card rounded-[2rem] border border-slate-200 bg-slate-50 p-7">
                <h2 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h2>
                <p className="text-sm leading-7 text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container">
            <SectionHeader eyebrow="Service stack" title="Every modern project needs these capabilities" description="We integrate planning, drafting, engineering, approvals and construction supervision under one premium service umbrella." />
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {serviceList.map((service) => (
                <ServiceCard key={service.title} title={service.title} subtitle={service.subtitle} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
