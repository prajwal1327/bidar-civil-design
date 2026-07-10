'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  return (
    <div className="glass-card rounded-[2rem] border border-white/10 p-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-brand.gold">
          <Quote className="h-6 w-6" />
          <p className="text-xs uppercase tracking-[0.3em]">Client Review</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)} className="rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:border-brand.gold/40">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)} className="rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:border-brand.gold/40">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <p className="mt-8 text-xl leading-9 text-slate-100">“{current.quote}”</p>
      <div className="mt-7 text-sm text-slate-300">
        <p className="font-semibold text-white">{current.name}</p>
        <p>{current.title}</p>
      </div>
    </div>
  );
}
