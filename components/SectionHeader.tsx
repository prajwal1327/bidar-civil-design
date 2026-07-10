import React from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  light?: boolean;
}

export function SectionHeader({ eyebrow, title, description, align = 'center', light = false }: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <div className={`max-w-3xl mb-14 ${isCenter ? 'mx-auto text-center' : ''}`}>
      <p className={`text-xs uppercase tracking-[0.35em] font-medium mb-4 ${light ? 'text-[#e8b84b]' : 'text-[#c4922a]'}`}>
        {eyebrow}
      </p>
      <div className={`w-12 h-0.5 bg-[#c4922a] mb-5 ${isCenter ? 'mx-auto' : ''}`} />
      <h2 className={`font-serif text-3xl md:text-4xl font-semibold leading-tight ${light ? 'text-white' : 'text-[#0d1117]'}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-sm md:text-base leading-8 ${light ? 'text-slate-300' : 'text-slate-600'}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
