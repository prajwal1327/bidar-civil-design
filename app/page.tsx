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
import { companyHighlights, serviceList, featuredProjects, testimonials, blogPosts } from '@/lib/data';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { HeroImage } from '@/components/HeroImage';

export default function HomePage() {
  return (
    <div className="bg-white text-[#0d1117]">
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="relative flex items-center justify-start bg-[#0f1b33] overflow-hidden" style={{ minHeight: '92vh' }}>
          <div className="absolute inset-0 overflow-hidden">
            <HeroImage />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1b33]/80 via-[#0f1b33]/50 to-transparent" />
          <div className="relative container py-28">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.45em] text-[#c4922a] mb-5">
                Hatkar Construction & Consulting — Est. 2015 · Bidar, Karnataka
              </p>
              <div className="w-14 h-0.5 bg-[#c4922a] mb-8" />
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.07] mb-8">
                Building Karnataka's<br />Future, One<br />Structure at a Time.
              </h1>
              <p className="text-base md:text-lg text-slate-300 leading-8 max-w-xl mb-10">
                Er. Pramod Hatker leads a premium construction firm delivering luxury homes, structural engineering and turnkey build solutions across Karnataka — on time, on budget, with superior craftsmanship.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#c4922a] text-white text-sm font-semibold px-8 py-4 rounded-sm hover:bg-[#a87924] transition-colors"
                >
                  Get Free Consultation <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-medium px-8 py-4 rounded-sm hover:border-white/60 hover:bg-white/5 transition-colors"
                >
                  View Our Projects
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 pointer-events-none">
            <div className="w-px h-14 bg-gradient-to-b from-transparent to-white/30" />
          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <section className="bg-[#0d1117] border-b border-white/5">
          <div className="container py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {companyHighlights.map((stat, i) => (
                <div key={stat.label} className={`text-center ${i > 0 ? 'md:pl-6' : ''}`}>
                  <p className="font-serif text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="py-24 bg-white">
          <div className="container">
            <SectionHeader
              eyebrow="What We Do"
              title="Complete Construction & Engineering Services"
              description="From site planning to 3D visualization, we deliver holistic project experiences for luxury homes, offices and commercial developments across Karnataka."
            />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {serviceList.map((service) => (
                <ServiceCard key={service.title} title={service.title} subtitle={service.subtitle} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#c4922a] border-b border-[#c4922a]/60 pb-0.5 hover:opacity-70 transition"
              >
                Explore All Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── WHY US ── */}
        <section className="py-24 bg-[#f8f4ee]">
          <div className="container">
            <div className="grid gap-16 lg:grid-cols-2 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[#c4922a] mb-4">Why Choose Us</p>
                <div className="w-12 h-0.5 bg-[#c4922a] mb-6" />
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#0d1117] mb-6 leading-tight">
                  A Trusted Partner for Luxury Construction & Consulting
                </h2>
                <p className="text-slate-600 text-sm leading-8 mb-8">
                  With 15+ years of engineering expertise and 252+ projects delivered, Hatkar Construction brings architecture, structural engineering and project management under one roof — ensuring precision, quality and compliance at every stage.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    'Integrated Architecture, Engineering & Construction',
                    'ISO-standard Quality Control & Site Supervision',
                    'Government Approvals & Building Compliance Across Karnataka',
                    'Smart Home-Ready MEP & Energy-Efficient Designs',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-[#c4922a] mt-0.5 shrink-0" />
                      <p className="text-sm text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-[#0f1b33] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-[#162040] transition-colors"
                >
                  Learn About Us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="relative h-[520px] rounded-lg overflow-hidden shadow-premium">
                <Image
                  src="/assets/pramod-hatker.jpg"
                  alt="Er. Pramod Hatker — Founder, Hatkar Construction"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white font-serif text-lg font-semibold">Er. Pramod Hatker</p>
                  <p className="text-slate-300 text-sm">Founder & Principal Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section className="py-24 bg-white">
          <div className="container">
            <SectionHeader
              eyebrow="Our Work"
              title="Signature Projects Executed with Precision"
              description="A curated selection of our residential, commercial and interior projects demonstrating premium craftsmanship and operational excellence."
            />
            <div className="grid gap-8 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 border border-[#0f1b33] text-[#0f1b33] text-sm font-semibold px-8 py-3.5 rounded-sm hover:bg-[#0f1b33] hover:text-white transition-colors"
              >
                View All Projects <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── VIDEO ── */}
        <section className="py-24 bg-[#0d1117]">
          <div className="container">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.35em] text-[#c4922a] mb-4">Watch Us Build</p>
              <div className="w-12 h-0.5 bg-[#c4922a] mx-auto mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">
                Craftsmanship in Action
              </h2>
              <p className="text-sm text-slate-400 max-w-xl mx-auto leading-7">
                A glimpse into the quality, precision and dedication that goes into every Hatkar Construction project.
              </p>
            </div>
            <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
              <video
                controls
                preload="metadata"
                poster="/assets/site-sunset.jpg"
                className="w-full"
              >
                <source src="/assets/work-video.mov" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        {/* ── ESTIMATOR ── */}
        <section className="py-24 bg-[#0f1b33]">
          <div className="container grid gap-16 lg:grid-cols-2 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#c4922a] mb-4">Plan Your Build</p>
              <div className="w-12 h-0.5 bg-[#c4922a] mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
                Interactive Planning Tools for Modern Homeowners
              </h2>
              <p className="text-slate-300 text-sm leading-8 mb-8">
                Explore our floor plan designer and cost estimator to guide your early planning, budgets and layout decisions. Get realistic cost benchmarks based on construction grade.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Standard', value: '₹2,100 / sq.ft' },
                  { label: 'Premium', value: '₹2,950 / sq.ft' },
                  { label: 'Luxury', value: '₹3,900 / sq.ft' },
                  { label: 'Ultra Luxury', value: '₹4,700 / sq.ft' },
                ].map((tier) => (
                  <div key={tier.label} className="border border-white/10 p-4 rounded-sm bg-white/5">
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">{tier.label}</p>
                    <p className="text-white font-semibold text-sm">{tier.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <EstimatorPanel />
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="py-24 bg-[#0d1117]">
          <div className="container">
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.35em] text-[#c4922a] mb-4">Client Feedback</p>
              <div className="w-12 h-0.5 bg-[#c4922a] mx-auto mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white">
                What Our Clients Say
              </h2>
            </div>
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </section>

        {/* ── BLOG ── */}
        <section className="py-24 bg-white">
          <div className="container">
            <SectionHeader
              eyebrow="Insights"
              title="Latest Articles from Engineering & Design"
              description="Actionable guidance for homeowners, developers and architects on construction budgets, materials and trends."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {blogPosts.map((post) => (
                <article key={post.title} className="group border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="p-7">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#c4922a] mb-4">{post.category}</p>
                    <h3 className="text-lg font-semibold text-[#0d1117] mb-3 leading-snug group-hover:text-[#c4922a] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-7 mb-5">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <p className="text-xs text-slate-400 uppercase tracking-widest">{post.date}</p>
                      <ArrowRight className="h-4 w-4 text-[#c4922a] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA + CONTACT ── */}
        <section className="py-24 bg-[#f8f4ee]">
          <div className="container grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#c4922a] mb-4">Start Your Project</p>
              <div className="w-12 h-0.5 bg-[#c4922a] mb-6" />
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-[#0d1117] mb-6 leading-tight">
                Book a Consultation with Our Engineering Team
              </h2>
              <p className="text-slate-600 text-sm leading-8 mb-8 max-w-lg">
                Schedule a walkthrough, receive an early concept, and begin your construction journey with expert planning, government approvals and full project supervision from Hatkar Construction.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <a
                  href="tel:+919738417053"
                  className="inline-flex items-center gap-2 bg-[#0f1b33] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-[#162040] transition-colors"
                >
                  Call +91 97384 17053
                </a>
                <a
                  href="https://wa.me/919738417053"
                  className="inline-flex items-center gap-2 border border-[#0f1b33] text-[#0f1b33] text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-[#0f1b33] hover:text-white transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                {[
                  { label: 'Address', value: 'Shop No 02, Airport Road, Bidar 585401' },
                  { label: 'Phone', value: '+91 97384 17053' },
                  { label: 'Email', value: 'hatkarcncs@gmail.com' },
                  { label: 'Availability', value: 'Mon – Sat, 9 AM – 6 PM' },
                ].map((info) => (
                  <div key={info.label} className="bg-white border border-slate-200 p-4 rounded-sm">
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">{info.label}</p>
                    <p className="font-medium text-[#0d1117] text-sm">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-card">
              <h3 className="font-semibold text-[#0d1117] mb-2 text-lg">Send Us a Message</h3>
              <p className="text-sm text-slate-500 mb-6">We respond within one business day.</p>
              <ContactForm />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
