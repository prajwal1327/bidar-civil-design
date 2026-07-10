import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  subtitle: string;
}

export function ServiceCard({ title, subtitle }: ServiceCardProps) {
  return (
    <article className="glass-card p-6 rounded-[2rem] border border-white/10 transition-transform duration-500 hover:-translate-y-2 hover:border-brand.gold/30">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-white/5 text-brand.gold">
        <ArrowRight className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-300 leading-6">{subtitle}</p>
    </article>
  );
}
