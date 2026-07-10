'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Sparkles } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl shadow-sm shadow-slate-200/40">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
            <Image src="/assets/logo.jpg" alt="Hatkar Construction & Consulting" fill style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-brand.gold">Hatkar Construction</p>
            <p className="text-sm text-slate-300">Construction & Consulting Firm</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href as any} className="transition hover:text-brand.primary">{item.label}</Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link href="tel:+919738417053" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm text-slate-900 transition hover:border-brand.primary/40 hover:text-brand.primary">
            <Phone className="h-4 w-4" /> +91 97384 17053
          </Link>
          <Link href="/contact" className="rounded-full bg-brand.primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand.secondary">Get Free Quote</Link>
        </div>

        <button className="md:hidden text-slate-900" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="md:hidden border-t border-slate-200 bg-white/95 px-6 py-6 backdrop-blur-xl">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-base font-medium text-slate-700" onClick={() => setOpen(false)}>{item.label}</Link>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <Link href="tel:+919738417053" className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-900">
                <Phone className="h-4 w-4" /> +91 97384 17053
              </Link>
              <Link href="https://wa.me/919738417053" className="inline-flex items-center gap-2 rounded-2xl bg-brand.primary px-4 py-3 text-sm font-semibold text-white hover:bg-brand.secondary">
                <Sparkles className="h-4 w-4" /> WhatsApp
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
