import React from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl text-center mx-auto mb-10">
      <p className="text-sm uppercase tracking-[0.35em] text-brand.primary font-semibold mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">{title}</h2>
      {description ? (
        <p className="mt-4 text-sm md:text-base text-slate-600 leading-7">{description}</p>
      ) : null}
    </div>
  );
}
