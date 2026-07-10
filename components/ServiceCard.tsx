import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  subtitle: string;
}

export function ServiceCard({ title, subtitle }: ServiceCardProps) {
  return (
    <article className="glass-card p-6 rounded-[2rem] border border-slate-200 transition-transform duration-500 hover:-translate-y-2 hover:border-brand.secondary/30">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-brand.primary/10 text-brand.primary">
        <ArrowRight className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-6">{subtitle}</p>
    </article>
  );
}
