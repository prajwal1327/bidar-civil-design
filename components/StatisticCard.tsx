import React from 'react';

interface StatisticCardProps {
  value: string;
  label: string;
}

export function StatisticCard({ value, label }: StatisticCardProps) {
  return (
    <div className="glass-card p-6 rounded-3xl border border-white/10 text-center">
      <p className="text-3xl md:text-4xl font-semibold text-white">{value}</p>
      <p className="mt-3 text-sm text-slate-300">{label}</p>
    </div>
  );
}
