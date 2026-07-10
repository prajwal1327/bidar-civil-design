import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SectionHeader } from '@/components/SectionHeader';
import { ProjectCard } from '@/components/ProjectCard';
import { featuredProjects } from '@/lib/data';

const projectTypes = [
  'Residential',
  'Commercial',
  'Interiors',
  'Luxury Villas',
  'Apartments',
  'Office Spaces',
];

export default function ProjectsPage() {
  return (
    <div className="bg-brand.dark text-white">
      <Navbar />
      <main className="space-y-20 py-16">
        <section className="container">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-brand.gold">Our portfolio</p>
            <h1 className="text-4xl font-semibold leading-tight">Completed and ongoing projects that define modern living.</h1>
            <p className="max-w-2xl text-sm leading-8 text-slate-300">We deliver curated projects across residential, commercial, interiors and luxury villa segments with a strong local presence in Karnataka.</p>
          </div>
        </section>

        <section className="container">
          <div className="grid gap-4 sm:grid-cols-3">
            {projectTypes.map((type) => (
              <div key={type} className="glass-card rounded-[2rem] border border-white/10 p-6 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">{type}</h3>
                <p className="text-sm text-slate-400">Tailored planning, design and delivery for the {type.toLowerCase()} segment.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container">
          <SectionHeader eyebrow="Featured projects" title="Projects under construction and recently completed" description="Each project showcases architecture, structural coordination and interior finishes for modern premium spaces." />
          <div className="grid gap-8 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
