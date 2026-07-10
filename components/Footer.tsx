import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060a0f] py-16">
      <div className="container grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr]">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.32em] text-brand.gold">Hatkar Construction</p>
          <h3 className="text-2xl font-semibold text-white">Premium construction, consulting and engineering in Karnataka</h3>
          <p className="text-sm leading-7 text-slate-300">Delivering luxury homes, commercial build solutions, structural design and consulting with refined finishes and high grade execution.</p>
          <div className="space-y-3 text-sm text-slate-300">
            <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-brand.gold" /> Bidar, Karnataka, India</p>
            <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-brand.gold" /> +91 97384 17053</p>
            <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-brand.gold" /> contact@hatkarconstruction.com</p>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-brand.gold mb-5">Quick Links</p>
          <div className="grid gap-3 text-sm text-slate-300">
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href as any} className="transition hover:text-white">{item.label}</Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-brand.gold mb-5">Working Hours</p>
          <div className="space-y-3 text-sm text-slate-300">
            <p>Mon - Sat: 09:00 AM - 06:00 PM</p>
            <p>Sunday: Closed</p>
            <p>Appointment-based project visits in Bidar and surrounding regions.</p>
          </div>
        </div>
      </div>

      <div className="container mt-10 border-t border-white/10 pt-6 text-sm text-slate-500 text-center">© 2026 Hatkar Construction & Consulting. Designed for construction, architecture and engineering excellence.</div>
    </footer>
  );
}
