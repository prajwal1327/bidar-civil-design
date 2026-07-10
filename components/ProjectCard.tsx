import Image from 'next/image';
import React from 'react';

interface ProjectCardProps {
  title: string;
  category: string;
  location: string;
  area: string;
  duration: string;
  budget: string;
  image: string;
  services: string[];
}

export function ProjectCard({ title, category, location, area, duration, budget, image, services }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-400">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="inline-block bg-[#c4922a] text-white text-xs uppercase tracking-widest px-3 py-1 rounded-sm">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#0d1117] mb-2">{title}</h3>
        <p className="text-sm text-slate-600 leading-6 mb-5">
          Complete delivery with architecture, structural engineering and interior integration.
        </p>
        <div className="grid grid-cols-2 gap-3 text-sm text-slate-600 mb-5">
          <div>
            <span className="block text-xs text-slate-400 uppercase tracking-wider mb-1">Location</span>
            {location}
          </div>
          <div>
            <span className="block text-xs text-slate-400 uppercase tracking-wider mb-1">Budget</span>
            {budget}
          </div>
          <div>
            <span className="block text-xs text-slate-400 uppercase tracking-wider mb-1">Area</span>
            {area}
          </div>
          <div>
            <span className="block text-xs text-slate-400 uppercase tracking-wider mb-1">Duration</span>
            {duration}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
          {services.map((s) => (
            <span key={s} className="text-xs text-slate-600 border border-slate-200 px-3 py-1 rounded-sm">
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
