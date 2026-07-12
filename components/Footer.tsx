import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
] as const;

const services = [
  'Luxury Home Construction',
  'Architecture & Interior Design',
  'Civil Engineering Consultancy',
  'AutoCAD Drafting & BIM',
  'Project Management',
  '3D Visualization',
];

export function Footer() {
  return (
    <footer className="bg-[#0d1117] text-white">
      <div className="container pt-16 pb-12">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1.2fr]">
          <div className="space-y-5">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#c4922a] mb-2">Hatkar Construction</p>
              <h3 className="text-xl font-semibold text-white leading-snug">
                Premium Construction & Consulting in Karnataka
              </h3>
            </div>
            <p className="text-sm leading-7 text-slate-400">
              Delivering luxury homes, commercial build solutions, structural design and engineering consulting with refined finishes and high-grade execution across Bidar and Karnataka.
            </p>
            <div className="space-y-3 text-sm text-slate-400">
              <p className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#c4922a] mt-0.5 shrink-0" />
                Shop No 02, 19-1-193/1, Yadav Vomplex,<br />Airport Road, New Adarsh Colony,<br />Bidar – 585401, Karnataka
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#c4922a] shrink-0" />
                +91 97384 17053
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#c4922a] shrink-0" />
                hatkarcncs@gmail.com
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#c4922a] mb-6">Quick Links</p>
            <div className="flex flex-col gap-3.5 text-sm text-slate-400">
              {footerLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href as string}
                  className="flex items-center gap-2 transition hover:text-white group"
                >
                  <ArrowRight className="h-3 w-3 text-[#c4922a] opacity-0 group-hover:opacity-100 transition" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#c4922a] mb-6">Services</p>
            <div className="flex flex-col gap-3.5 text-sm text-slate-400">
              {services.map((s) => (
                <p key={s} className="leading-snug">{s}</p>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#c4922a] mb-6">Working Hours</p>
            <div className="space-y-3 text-sm text-slate-400">
              <div>
                <p className="text-white font-medium">Monday – Saturday</p>
                <p>09:00 AM – 06:00 PM</p>
              </div>
              <div>
                <p className="text-white font-medium">Sunday</p>
                <p>Closed</p>
              </div>
              <p className="mt-4 text-xs leading-6 text-slate-500">
                Site visits and project consultations available by prior appointment in Bidar and surrounding regions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <p>© 2026 Hatkar Construction & Consulting. Est. 2015. All rights reserved.</p>
          <p>Engineering excellence in architecture, construction and design.</p>
        </div>
      </div>
    </footer>
  );
}
