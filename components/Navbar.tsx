'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
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
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-4">
          <div className="relative h-11 w-11 overflow-hidden rounded-md border border-slate-200 bg-slate-100">
            <Image src="/assets/logo.jpg" alt="Hatkar Construction" fill style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.12em] uppercase text-[#0f1b33]">Hatkar Construction</p>
            <p className="text-xs text-[#c4922a] tracking-[0.08em]">& Consulting Firm</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href as string} className="transition hover:text-[#c4922a]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href="tel:+919738417053" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-[#0f1b33] transition">
            <Phone className="h-4 w-4" />
            +91 97384 17053
          </a>
          <Link
            href="/contact"
            className="rounded-sm bg-[#c4922a] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#a87924]"
          >
            Get Free Quote
          </Link>
        </div>

        <button className="md:hidden text-slate-800" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white px-6 py-6">
          <nav className="flex flex-col gap-5 text-base text-slate-700">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href as string}
                className="font-medium hover:text-[#c4922a] transition"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3 border-t border-slate-200">
              <a href="tel:+919738417053" className="inline-flex items-center gap-2 text-sm text-slate-600">
                <Phone className="h-4 w-4" /> +91 97384 17053
              </a>
              <Link
                href="/contact"
                className="inline-block bg-[#c4922a] text-white text-sm font-semibold py-3 px-5 rounded-sm text-center hover:bg-[#a87924] transition"
                onClick={() => setOpen(false)}
              >
                Get Free Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
