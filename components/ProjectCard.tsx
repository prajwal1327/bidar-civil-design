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
    <article className="glass-card overflow-hidden rounded-[2rem] border border-white/10 shadow-glass">
      <div className="relative h-72 w-full">
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} className="brightness-90" />
      </div>
      <div className="p-6">
        <p className="text-xs uppercase tracking-[0.32em] text-brand.gold mb-3">{category}</p>
        <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-sm text-slate-300 leading-6 mb-5">Complete residential and commercial delivery with architecture, structural engineering and interior integration.</p>
        <div className="grid gap-3 sm:grid-cols-2 text-sm text-slate-300 mb-5">
          <p><span className="font-semibold text-white">Location:</span> {location}</p>
          <p><span className="font-semibold text-white">Budget:</span> {budget}</p>
          <p><span className="font-semibold text-white">Area:</span> {area}</p>
          <p><span className="font-semibold text-white">Duration:</span> {duration}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {services.map((service) => (
            <span key={service} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{service}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
