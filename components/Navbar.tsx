'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Mail, Sparkles } from 'lucide-react';
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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080d12]/90 backdrop-blur-xl">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <Image src="/assets/logo.jpg" alt="Bidar Civil Design" fill style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-brand.gold">Bidar Civil Design</p>
            <p className="text-sm text-slate-300">Bidar, Karnataka</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href as any} className="transition hover:text-brand.gold">{item.label}</Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link href="tel:+918000000000" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-brand.gold/40 hover:text-brand.gold">
            <Phone className="h-4 w-4" /> Call Now
          </Link>
          <button className="rounded-full bg-brand.gold px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-[#b08f5d]">Get Free Quote</button>
        </div>

        <button className="md:hidden text-slate-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="md:hidden border-t border-white/10 bg-[#061014]/95 px-6 py-6 backdrop-blur-xl">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-base font-medium text-slate-100" onClick={() => setOpen(false)}>{item.label}</Link>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <Link href="tel:+918000000000" className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white">
                <Phone className="h-4 w-4" /> Call Now
              </Link>
              <Link href="https://wa.me/918000000000" className="inline-flex items-center gap-2 rounded-2xl bg-brand.gold px-4 py-3 text-sm font-semibold text-slate-950">
                <Sparkles className="h-4 w-4" /> WhatsApp
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
