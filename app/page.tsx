import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SectionHeader } from '@/components/SectionHeader';
import { ServiceCard } from '@/components/ServiceCard';
import { ProjectCard } from '@/components/ProjectCard';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { ContactForm } from '@/components/ContactForm';
import { EstimatorPanel } from '@/components/EstimatorPanel';
import { companyHighlights, partnerLogos, serviceList, featuredProjects, testimonials, blogPosts } from '@/lib/data';

export default function HomePage() {
  return (
    <div className="bg-brand.surface text-slate-900">
      <Navbar />
      <main className="space-y-28 pt-8">
        <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.12),_transparent_24%)] py-24">
          <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-3 rounded-full border border-brand.gold/35 bg-white/90 px-4 py-2 text-xs uppercase tracking-[0.3em] text-brand.gold">Hatkar Construction & Consulting Firm</span>
              <h1 className="text-5xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">Crafting high-grade luxury homes, smart engineering and turnkey build solutions.</h1>
              <p className="max-w-2xl text-sm leading-8 text-slate-600">Er. Pramod Hatkar leads a premium construction firm delivering modern residences, commercial spaces and approval-ready designs across Karnataka with engineering intelligence and refined finishes.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="rounded-full bg-brand.gold px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-[#b08f5d]">Get Free Quote</Link>
                <a href="tel:+919738417053" className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-4 text-sm text-slate-900 transition hover:border-brand.primary/40">+91 97384 17053</a>
                <a href="https://wa.me/919738417053" className="inline-flex items-center rounded-full border border-brand.gold/20 bg-white px-6 py-4 text-sm text-brand.gold transition hover:bg-brand.gold/10">WhatsApp</a>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {['Luxury Residences', 'Structural Reliability', 'Permit-ready Delivery', 'Interior Engineering', 'AutoCAD & BIM', 'Turnkey Project Management'].map((skill) => (
                  <div key={skill} className="glass-card rounded-[2rem] border border-slate-200 p-5 text-sm text-slate-700">{skill}</div>
                ))}
              </div>
            </div>

            <div className="relative rounded-[2rem] border border-slate-200 bg-white p-6 shadow-glass overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(245,158,11,0.12),_transparent_32%)]" />
              <div className="relative overflow-hidden rounded-[2rem]">
                <Image src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80" alt="Hatkar Construction luxury building" width={900} height={900} className="h-full w-full rounded-[2rem] object-cover" />
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {companyHighlights.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-center">
                    <p className="text-3xl font-semibold text-slate-900">{stat.value}</p>
                    <p className="text-sm text-slate-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <SectionHeader eyebrow="Trusted by excellence" title="Partnered with premium builders and architectural teams" description="Our workflow ensures safety, approvals, high-quality materials and timely delivery for every project." />
            <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
              {partnerLogos.map((logo, index) => (
                <div key={`${logo}-${index}`} className="glass-card rounded-3xl border border-slate-200 p-6 text-center">
                  <Image src={logo} alt={`Partner ${index + 1}`} width={150} height={100} className="mx-auto h-16 w-auto object-cover opacity-80" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <SectionHeader eyebrow="Our services" title="Complete construction, design and engineering services" description="From site planning to 3D visualization, we create holistic project experiences for luxury homes, offices and commercial developments." />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {serviceList.map((service) => (
                <ServiceCard key={service.title} title={service.title} subtitle={service.subtitle} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container">
            <SectionHeader eyebrow="Featured work" title="Signature projects executed with precision" description="A curated selection of our residential, commercial and interior projects demonstrating premium craftsmanship and operational excellence." />
            <div className="grid gap-8 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/projects" className="inline-flex rounded-full border border-brand.gold/40 bg-white px-7 py-4 text-sm font-semibold text-brand.gold transition hover:bg-brand.gold/10">View All Projects</Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-100">
          <div className="container">
            <SectionHeader eyebrow="Why choose us" title="A trusted partner for luxury construction and consulting" description="We deliver modern architecture, intelligent planning, approvals and quality assurance for every scale of work." />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                { title: 'Integrated Project Delivery', description: 'Architecture, engineering, interiors and construction managed as one cohesive experience.' },
                { title: 'Structured Quality Control', description: 'On-site supervision, material validation and safety audits for reliable builds.' },
                { title: 'Local approvals expertise', description: 'Government approvals, building standards and site compliance across Karnataka.' },
                { title: 'Smart home-ready designs', description: 'Future-proof planning with modern MEP, energy efficiency and lifestyle flows.' },
              ].map((item) => (
                <div key={item.title} className="glass-card rounded-[2rem] border border-slate-200 p-7">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container grid gap-12 lg:grid-cols-[0.9fr_0.8fr] items-center">
            <div>
              <SectionHeader eyebrow="Design innovation" title="Interactive planning tools for modern homeowners" description="Explore a rough floor plan designer and cost estimator that guide your early planning, budgets and layout decisions." />
              <p className="max-w-2xl text-sm leading-7 text-slate-600">Responsible conceptual guidance with realistic cost benchmarks, room layouts and package recommendations for premium home construction.</p>
            </div>
            <EstimatorPanel />
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container">
            <SectionHeader eyebrow="Client feedback" title="What our customers say" description="Premium service and reliable execution backed by strong reviews from homeowners, consultants and commercial clients." />
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container">
            <SectionHeader eyebrow="Insights" title="Latest articles from engineering and design" description="Actionable guidance for homeowners, developers and architects on construction budgets, materials and trends." />
            <div className="grid gap-6 md:grid-cols-3">
              {blogPosts.map((post) => (
                <article key={post.title} className="glass-card rounded-[2rem] border border-slate-200 p-6 transition hover:-translate-y-1">
                  <p className="text-xs uppercase tracking-[0.3em] text-brand.gold mb-4">{post.category}</p>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{post.title}</h3>
                  <p className="text-sm leading-7 text-slate-600 mb-5">{post.excerpt}</p>
                  <p className="text-xs uppercase tracking-[0.32em] text-slate-500">{post.date}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.12),_transparent_24%),radial-gradient(circle_at_bottom,_rgba(37,99,235,0.08),_transparent_20%)]">
          <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.34em] text-brand.primary mb-4">Let’s build your next signature project</p>
              <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-6">Book an on-site consultation with our Hatkar engineering team.</h2>
              <p className="max-w-2xl text-sm leading-8 text-slate-600 mb-8">Schedule a walkthrough, receive an early concept, and begin your luxury construction journey with expert planning, approvals and full project supervision.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="rounded-full bg-brand.gold px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-[#b08f5d]">Request Callback</Link>
                <a href="mailto:contact@hatkarconstruction.com" className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-4 text-sm text-slate-900 transition hover:border-brand.primary/40">Email Us</a>
              </div>
            </div>
            <div className="glass-card rounded-[2rem] border border-slate-200 p-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
