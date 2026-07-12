import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

const FULL_ADDRESS = 'Shop No 02, 19-1-193/1, Yadav Vomplex, Airport Road, New Adarsh Colony, Bidar – 585401, Karnataka';
const MAPS_SEARCH = 'https://www.google.com/maps/search/?api=1&query=Shop+No+02+19-1-193%2F1+Yadav+Complex+Airport+Road+New+Adarsh+Colony+Bidar+585401+Karnataka';
const MAPS_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3893.316440280448!2d76.13309327528483!3d17.913629272309564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc7f0d806fa4e35%3A0xcdff3d8b8f903e72!2sBidar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin';

const contactDetails = [
  {
    icon: MapPin,
    label: 'Office Address',
    value: 'Shop No 02, Yadav Vomplex',
    sub: 'Airport Road, New Adarsh Colony, Bidar – 585401',
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
    value: 'hatkarcncs@gmail.com',
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

        {/* ── CONTACT INFO STRIP ── */}
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
              <div className="mb-6">
                <h2 className="font-serif text-2xl font-semibold text-[#0d1117] mb-2">Send Us a Message</h2>
                <p className="text-sm text-slate-500">Fill in the details below — your inquiry opens directly in WhatsApp so we respond faster.</p>
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
                  Hatkar Construction & Consulting has delivered 252+ projects over 15+ years. We bring engineering precision, Karnataka approvals expertise and a client-first approach to every engagement.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { title: 'Free Initial Consultation', description: 'A complimentary project discussion covering scope, budget and timeline.' },
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
                <p className="text-xs uppercase tracking-widest text-[#c4922a] mb-4">Quick Connect</p>
                <div className="flex flex-col gap-3">
                  <a href="tel:+919738417053" className="flex items-center gap-3 text-sm font-medium text-[#0d1117] hover:text-[#c4922a] transition-colors">
                    <Phone className="h-4 w-4 text-[#c4922a]" /> +91 97384 17053
                  </a>
                  <a href="https://wa.me/919738417053" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-medium text-[#0d1117] hover:text-[#c4922a] transition-colors">
                    <svg className="h-4 w-4 text-[#c4922a]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp Chat
                  </a>
                  <a href="mailto:hatkarcncs@gmail.com" className="flex items-center gap-3 text-sm font-medium text-[#0d1117] hover:text-[#c4922a] transition-colors">
                    <Mail className="h-4 w-4 text-[#c4922a]" /> hatkarcncs@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MAP + LOCATE ME ── */}
        <section className="py-16 bg-[#f8f4ee]">
          <div className="container">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-8">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-[#c4922a] mb-3">Find Us</p>
                <div className="w-12 h-0.5 bg-[#c4922a] mb-4" />
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-[#0d1117]">
                  Visit Our Office in Bidar
                </h2>
                <p className="mt-2 text-sm text-slate-600 max-w-md">
                  {FULL_ADDRESS}
                </p>
              </div>
              <a
                href={MAPS_SEARCH}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#c4922a] text-white text-sm font-semibold px-6 py-3.5 rounded-sm hover:bg-[#a87924] transition-colors shrink-0"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
            </div>
            <div className="rounded-lg overflow-hidden border border-slate-200 shadow-card">
              <iframe
                title="Hatkar Construction office location"
                src={MAPS_EMBED}
                className="h-[460px] w-full border-0"
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
