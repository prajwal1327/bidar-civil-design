import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SectionHeader } from '@/components/SectionHeader';
import { ContactForm } from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="bg-brand.dark text-white">
      <Navbar />
      <main className="space-y-20 py-16">
        <section className="container grid gap-12 lg:grid-cols-[0.9fr_0.9fr] items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-brand.gold">Contact us</p>
            <h1 className="text-4xl font-semibold leading-tight">Get in touch for construction planning, architectural consultation and site visits.</h1>
            <p className="max-w-2xl text-sm leading-8 text-slate-300">Our Bidar team is ready to discuss luxury home designs, commercial projects, approvals and engineering consulting services.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass-card rounded-[2rem] border border-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-brand.gold">Office</p>
                <p className="mt-3 text-lg font-semibold text-white">Bidar, Karnataka</p>
                <p className="mt-3 text-sm text-slate-300">Plot no. 12, Main Road, Bidar, Karnataka, 585401</p>
              </div>
              <div className="glass-card rounded-[2rem] border border-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-brand.gold">Reach us</p>
                <p className="mt-3 text-lg font-semibold text-white">+91 80000 00000</p>
                <p className="mt-3 text-sm text-slate-300">contact@bidarcivildesign.com</p>
              </div>
            </div>
          </div>
          <div className="glass-card rounded-[2rem] border border-white/10 bg-[#08131f] p-8">
            <ContactForm />
          </div>
        </section>

        <section className="container py-16">
          <SectionHeader eyebrow="Office map" title="Visit our studio in Bidar" description="Schedule your site meeting or consultation in person at our local office." />
          <div className="rounded-[2rem] border border-white/10 overflow-hidden bg-[#08131f]">
            <iframe
              title="Bidar office location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.316440280448!2d76.13309327528483!3d17.913629272309564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc7f0d806fa4e35%3A0xcdff3d8b8f903e72!2sBidar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
