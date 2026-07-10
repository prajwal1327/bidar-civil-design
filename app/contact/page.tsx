import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactDetails = [
  {
    icon: MapPin,
    label: 'Office Address',
    value: 'Bidar, Karnataka, India',
    sub: 'Head office serving all of Karnataka',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 97384 17053',
    sub: 'Mon – Sat, 9:00 AM – 6:00 PM',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@hatkarconstruction.com',
    sub: 'We respond within one business day',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon – Sat: 9 AM – 6 PM',
    sub: 'Sunday: Closed',
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white text-[#0d1117]">
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="bg-[#0f1b33] py-24">
          <div className="container">
            <p className="text-xs uppercase tracking-[0.45em] text-[#c4922a] mb-4">Contact Us</p>
            <div className="w-12 h-0.5 bg-[#c4922a] mb-7" />
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight max-w-2xl">
              Let's Build Something Exceptional Together
            </h1>
            <p className="mt-6 text-slate-300 text-base leading-8 max-w-xl">
              Get in touch for construction planning, architectural consultation, AutoCAD services and site visits across Karnataka. Our team is ready to discuss your project.
            </p>
          </div>
        </section>

        {/* ── CONTACT INFO ── */}
        <section className="bg-[#0d1117] border-b border-white/5">
          <div className="container py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactDetails.map(({ icon: Icon, label, value, sub }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#c4922a]/10 border border-[#c4922a]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="h-4 w-4 text-[#c4922a]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">{label}</p>
                    <p className="text-white font-medium text-sm">{value}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FORM + INFO ── */}
        <section className="py-24 bg-white">
          <div className="container grid gap-16 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-card">
              <div className="mb-8">
                <h2 className="font-serif text-2xl font-semibold text-[#0d1117] mb-2">Send Us a Message</h2>
                <p className="text-sm text-slate-500">Fill in your details and project brief — we'll get back to you within one business day.</p>
              </div>
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[#c4922a] mb-4">Why Work With Us</p>
                <div className="w-12 h-0.5 bg-[#c4922a] mb-6" />
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#0d1117] mb-5 leading-tight">
                  A Premium Construction Partner in Karnataka
                </h2>
                <p className="text-slate-600 text-sm leading-8 mb-6">
                  Hatkar Construction & Consulting has delivered 210+ projects across residential, commercial and interior segments over 18 years. We bring engineering precision, local approvals expertise and a client-first approach to every engagement.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { title: 'Free Initial Consultation', description: 'We offer a complimentary project discussion to understand your scope and budget.' },
                  { title: 'Transparent Pricing', description: 'Detailed BOQ, material specifications and milestone-based payment schedules.' },
                  { title: 'Approval Support', description: 'Complete Karnataka municipal permit documentation prepared and submitted on your behalf.' },
                  { title: 'Site Visits Available', description: 'On-site consultations for projects in Bidar and surrounding regions by appointment.' },
                ].map((item) => (
                  <div key={item.title} className="border-l-2 border-[#c4922a] pl-4 py-1">
                    <p className="font-semibold text-[#0d1117] text-sm mb-1">{item.title}</p>
                    <p className="text-xs text-slate-500 leading-5">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#f8f4ee] border border-slate-200 rounded-lg p-6">
                <p className="text-xs uppercase tracking-widest text-[#c4922a] mb-3">Quick Connect</p>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+919738417053"
                    className="flex items-center gap-3 text-sm font-medium text-[#0d1117] hover:text-[#c4922a] transition-colors"
                  >
                    <Phone className="h-4 w-4 text-[#c4922a]" /> +91 97384 17053
                  </a>
                  <a
                    href="https://wa.me/919738417053"
                    className="flex items-center gap-3 text-sm font-medium text-[#0d1117] hover:text-[#c4922a] transition-colors"
                  >
                    <Mail className="h-4 w-4 text-[#c4922a]" /> WhatsApp Chat
                  </a>
                  <a
                    href="mailto:contact@hatkarconstruction.com"
                    className="flex items-center gap-3 text-sm font-medium text-[#0d1117] hover:text-[#c4922a] transition-colors"
                  >
                    <Mail className="h-4 w-4 text-[#c4922a]" /> contact@hatkarconstruction.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MAP ── */}
        <section className="py-16 bg-[#f8f4ee]">
          <div className="container">
            <div className="mb-10">
              <p className="text-xs uppercase tracking-[0.35em] text-[#c4922a] mb-4">Find Us</p>
              <div className="w-12 h-0.5 bg-[#c4922a] mb-6" />
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#0d1117]">
                Visit Our Office in Bidar
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Schedule your in-person consultation or project walkthrough at our local office in Bidar, Karnataka.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden border border-slate-200 shadow-card">
              <iframe
                title="Hatkar Construction office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.316440280448!2d76.13309327528483!3d17.913629272309564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc7f0d806fa4e35%3A0xcdff3d8b8f903e72!2sBidar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="h-[440px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
