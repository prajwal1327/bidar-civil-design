'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  const t = testimonials[index];

  return (
    <div className="relative">
      <div className="max-w-3xl mx-auto text-center">
        <div className="text-[#c4922a] text-8xl font-serif leading-none mb-2 opacity-40 select-none">"</div>
        <p className="text-xl md:text-2xl font-serif text-white leading-relaxed mb-8">
          {t.quote}
        </p>
        <div className="w-12 h-0.5 bg-[#c4922a] mx-auto mb-6" />
        <p className="font-semibold text-white text-base">{t.name}</p>
        <p className="text-sm text-slate-400 mt-1">{t.title}</p>
      </div>

      <div className="flex justify-center items-center gap-4 mt-12">
        <button
          onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
          className="rounded-full border border-white/20 p-3 text-white hover:border-[#c4922a] hover:text-[#c4922a] transition"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'bg-[#c4922a] w-6' : 'bg-white/30 w-1.5'}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
          className="rounded-full border border-white/20 p-3 text-white hover:border-[#c4922a] hover:text-[#c4922a] transition"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
