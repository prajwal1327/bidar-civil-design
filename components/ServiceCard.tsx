import React from 'react';

interface ServiceCardProps {
  title: string;
  subtitle: string;
}

export function ServiceCard({ title, subtitle }: ServiceCardProps) {
  return (
    <article className="group border border-slate-200 bg-white p-8 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#c4922a]/50 hover:shadow-xl">
      <div className="w-10 h-0.5 bg-[#c4922a] mb-6 transition-all duration-300 group-hover:w-16" />
      <h3 className="text-lg font-semibold text-[#0d1117] mb-3 leading-snug">{title}</h3>
      <p className="text-sm text-slate-600 leading-7">{subtitle}</p>
    </article>
  );
}
