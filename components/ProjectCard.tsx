import Image from 'next/image';
import React from 'react';

interface ProjectCardProps {
  title: string;
  category: string;
  location: string;
  client?: string;
  area?: string;
  duration?: string;
  budget?: string;
  image: string;
  services: string[];
}

export function ProjectCard({ title, category, location, client, image, services }: ProjectCardProps) {
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
        <h3 className="text-xl font-semibold text-[#0d1117] mb-1">{title}</h3>
        {client && (
          <p className="text-sm text-[#c4922a] font-medium mb-3">{client}</p>
        )}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-5">
          <svg className="h-4 w-4 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          {location}
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
