import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SectionHeader } from '@/components/SectionHeader';
import { StatisticCard } from '@/components/StatisticCard';
import { ServiceCard } from '@/components/ServiceCard';
import { ProjectCard } from '@/components/ProjectCard';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { ContactForm } from '@/components/ContactForm';
import { EstimatorPanel } from '@/components/EstimatorPanel';
import { companyHighlights, partnerLogos, serviceList, featuredProjects, testimonials, blogPosts } from '@/lib/data';

export default function HomePage() {
  return (
    <div className="bg-brand.dark text-white">
      <Navbar />
      <main className="space-y-28 pt-8">
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(201,161,111,0.12),_transparent_30%)] py-20">
          <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-3 rounded-full border border-brand.gold/35 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-brand.gold">Premium architecture & construction | Bidar, Karnataka</span>
              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-5xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">Luxury construction, modern architecture and turnkey civil design crafted for premium living.</motion.h1>
              <p className="max-w-2xl text-sm leading-8 text-slate-300">Bidar Civil Design delivers elegant residential, commercial and institutional projects with end-to-end planning, structural engineering, interior design and AutoCAD drafting expertise.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="rounded-full bg-brand.gold px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-[#b08f5d]">Get Free Quote</Link>
                <a href="tel:+918000000000" className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm text-white transition hover:border-brand.gold/40">Call Now</a>
                <a href="https://wa.me/918000000000" className="inline-flex items-center rounded-full border border-brand.gold/20 bg-white/5 px-6 py-4 text-sm text-brand.gold transition hover:bg-brand.gold/10">WhatsApp</a>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {['Architecture', 'Interior Design', 'Engineering', 'Project Management', 'AutoCAD & BIM', '3D Visualization'].map((skill) => (
                  <div key={skill} className="glass-card rounded-[2rem] border border-white/10 p-5 text-sm text-slate-200">{skill}</div>
                ))}
              </div>
            </div>

            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glass overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(201,161,111,0.12),_transparent_32%)]" />
              <div className="relative">
                <Image src="/assets/hero.jpg" alt="Architectural project" width={900} height={900} className="rounded-[2rem] object-cover shadow-2xl" />
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {companyHighlights.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-white/10 bg-[#08101a]/90 p-5 text-center">
                    <p className="text-3xl font-semibold text-white">{stat.value}</p>
                    <p className="text-sm text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <SectionHeader eyebrow="Trusted by excellence" title="Partnered with premium builders and architectural teams" description="Our workflow ensures safety, approvals, high-quality materials, and timely delivery for every project." />
            <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
              {partnerLogos.map((logo, index) => (
                <div key={`${logo}-${index}`} className="glass-card rounded-3xl border border-white/10 p-6 text-center">
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

        <section className="py-16 bg-[#061016]">
          <div className="container">
            <SectionHeader eyebrow="Featured work" title="Signature projects executed with precision" description="A curated selection of our residential, commercial and interior projects demonstrating premium craftsmanship and operational excellence." />
            <div className="grid gap-8 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link href="/projects" className="inline-flex rounded-full border border-brand.gold/40 bg-white/5 px-7 py-4 text-sm font-semibold text-brand.gold transition hover:bg-brand.gold/10">View All Projects</Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <SectionHeader eyebrow="Why choose us" title="A trusted team for luxury construction and design" description="We deliver modern architecture, smart planning, approvals, and quality assurance for every scale of work." />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                { title: 'Integrated Project Delivery', description: 'Architecture, engineering, interiors and construction managed as one cohesive experience.' },
                { title: 'Structured Quality Control', description: 'On-site supervision, material validation and safety audits for reliable builds.' },
                { title: 'Local approvals expertise', description: 'Government approvals, building standards and site compliance in Bidar and Karnataka.' },
                { title: 'Smart home-ready designs', description: 'Future-proof planning with modern MEP, energy efficiency and lifestyle flows.' },
              ].map((item) => (
                <div key={item.title} className="glass-card rounded-[2rem] border border-white/10 p-7">
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-sm leading-7 text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#061216]">
          <div className="container grid gap-12 lg:grid-cols-[0.9fr_0.8fr] items-center">
            <div>
              <SectionHeader eyebrow="Design innovation" title="Interactive planning tools for modern home owners" description="Explore a rough floor plan designer and cost estimator that guide your early planning, budgets and layout decisions." />
              <p className="max-w-2xl text-sm leading-7 text-slate-300">Responsible conceptual guidance with realistic cost benchmarks, room layouts, and package recommendations for luxury home construction.</p>
            </div>
            <EstimatorPanel />
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <SectionHeader eyebrow="Client feedback" title="What our customers say" description="Premium service and reliable execution backed by strong reviews from homeowners, consultants and commercial clients." />
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </section>

        <section className="py-16 bg-[#080f17]">
          <div className="container">
            <SectionHeader eyebrow="Insights" title="Latest articles from engineering and design" description="Actionable guidance for homeowners, developers and architects on construction budgets, materials and trends." />
            <div className="grid gap-6 md:grid-cols-3">
              {blogPosts.map((post) => (
                <article key={post.title} className="glass-card rounded-[2rem] border border-white/10 p-6 transition hover:-translate-y-1">
                  <p className="text-xs uppercase tracking-[0.3em] text-brand.gold mb-4">{post.category}</p>
                  <h3 className="text-xl font-semibold text-white mb-3">{post.title}</h3>
                  <p className="text-sm leading-7 text-slate-300 mb-5">{post.excerpt}</p>
                  <p className="text-xs uppercase tracking-[0.32em] text-slate-500">{post.date}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[radial-gradient(circle_at_top,_rgba(201,161,111,0.06),_transparent_24%),radial-gradient(circle_at_bottom,_rgba(255,255,255,0.08),_transparent_20%)]">
          <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.34em] text-brand.gold mb-4">Let’s build your next signature project</p>
              <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">Book an on-site consultation with our Bidar design team.</h2>
              <p className="max-w-2xl text-sm leading-8 text-slate-300 mb-8">Schedule a walkthrough, receive an early concept, and begin your luxury construction journey with expert planning, approvals and full project supervision.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="rounded-full bg-brand.gold px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-[#b08f5d]">Request Callback</Link>
                <a href="mailto:contact@bidarcivildesign.com" className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm text-white transition hover:border-brand.gold/40">Email Us</a>
              </div>
            </div>
            <div className="glass-card rounded-[2rem] border border-white/10 p-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
