'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const plotOptions = ['30x40', '30x50', '40x60', '50x80', 'Custom'];
const constructionTypes = ['Standard', 'Premium', 'Luxury', 'Ultra Luxury'];
const rateMap: Record<string, number> = {
  Standard: 2100,
  Premium: 2950,
  Luxury: 3900,
  'Ultra Luxury': 4700,
};

function NumInput({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
}) {
  const [raw, setRaw] = useState(String(value));

  const commit = (str: string) => {
    const n = parseInt(str.replace(/\D/g, ''), 10);
    if (isNaN(n)) { setRaw(String(value)); return; }
    const clamped = Math.min(Math.max(n, min), max);
    setRaw(String(clamped));
    onChange(clamped);
  };

  return (
    <label className="block text-sm font-medium text-slate-700">
      {label}
      <div className="mt-2 flex items-center border border-slate-300 rounded-md bg-white overflow-hidden">
        <button
          type="button"
          onClick={() => { const n = Math.max(value - 1, min); setRaw(String(n)); onChange(n); }}
          className="px-3 py-2.5 text-slate-500 hover:bg-slate-100 transition text-lg leading-none select-none"
        >−</button>
        <input
          type="text"
          inputMode="numeric"
          value={raw}
          onFocus={(e) => e.target.select()}
          onChange={(e) => setRaw(e.target.value.replace(/\D/g, ''))}
          onBlur={(e) => commit(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') commit(raw); }}
          className="w-full text-center py-2.5 text-sm font-semibold text-slate-900 outline-none bg-transparent"
        />
        <button
          type="button"
          onClick={() => { const n = Math.min(value + 1, max); setRaw(String(n)); onChange(n); }}
          className="px-3 py-2.5 text-slate-500 hover:bg-slate-100 transition text-lg leading-none select-none"
        >+</button>
      </div>
    </label>
  );
}

export function EstimatorPanel() {
  const [tab, setTab] = useState<'floor' | 'cost'>('floor');
  const [plotSize, setPlotSize] = useState('30x40');
  const [customPlot, setCustomPlot] = useState('36x52');
  const [floors, setFloors] = useState(2);
  const [bedrooms, setBedrooms] = useState(3);
  const [bathrooms, setBathrooms] = useState(2);
  const [kitchen, setKitchen] = useState(1);
  const [maidRoom, setMaidRoom] = useState(false);
  const [swimmingPool, setSwimmingPool] = useState(false);
  const [constructionType, setConstructionType] = useState('Premium');
  const [includeInterior, setIncludeInterior] = useState(true);
  const [includeElevation, setIncludeElevation] = useState(true);
  const [includeLandscape, setIncludeLandscape] = useState(false);

  const actualPlot = plotSize === 'Custom' ? customPlot : plotSize;

  const builtArea = useMemo(() => {
    const parts = actualPlot.split('x').map(Number);
    const w = parts[0] || 0;
    const d = parts[1] || 0;
    return Math.round(w * d * floors * 0.65);
  }, [actualPlot, floors]);

  const estimate = useMemo(() => {
    const rate = rateMap[constructionType] ?? 2950;
    const base = builtArea * rate;
    const extras = (includeInterior ? 0.15 : 0) + (includeElevation ? 0.08 : 0) + (includeLandscape ? 0.07 : 0);
    const total = Math.round(base * (1 + extras));
    return {
      total,
      material: Math.round(total * 0.62),
      labor: Math.round(total * 0.28),
      gst: Math.round(total * 0.18),
      timeline: `${10 + floors * 3} months`,
    };
  }, [builtArea, constructionType, includeInterior, includeElevation, includeLandscape]);

  const fmt = (n: number) => `₹${n.toLocaleString('en-IN')}`;

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-slate-200">
        <button
          onClick={() => setTab('floor')}
          className={`flex-1 py-3.5 text-sm font-semibold transition ${
            tab === 'floor'
              ? 'bg-[#c4922a] text-white'
              : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
          }`}
        >
          Floor Plan
        </button>
        <button
          onClick={() => setTab('cost')}
          className={`flex-1 py-3.5 text-sm font-semibold transition ${
            tab === 'cost'
              ? 'bg-[#c4922a] text-white'
              : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
          }`}
        >
          Cost Estimator
        </button>
      </div>

      <div className="p-6">
        <AnimatePresence mode="wait">
          {tab === 'floor' ? (
            <motion.div
              key="floor"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="space-y-5"
            >
              {/* Plot Size */}
              <label className="block text-sm font-medium text-slate-700">
                Plot Size
                <select
                  value={plotSize}
                  onChange={(e) => setPlotSize(e.target.value)}
                  className="mt-2 w-full border border-slate-300 rounded-md bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-[#c4922a]"
                >
                  {plotOptions.map((o) => <option key={o} value={o}>{o === 'Custom' ? 'Custom Size' : `${o} ft`}</option>)}
                </select>
              </label>

              {plotSize === 'Custom' && (
                <label className="block text-sm font-medium text-slate-700">
                  Custom Dimensions (e.g. 45x60)
                  <input
                    value={customPlot}
                    onChange={(e) => setCustomPlot(e.target.value)}
                    placeholder="40x60"
                    className="mt-2 w-full border border-slate-300 rounded-md bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-[#c4922a]"
                  />
                </label>
              )}

              <div className="grid grid-cols-3 gap-4">
                <NumInput label="Floors" value={floors} min={1} max={5} onChange={setFloors} />
                <NumInput label="Bedrooms" value={bedrooms} min={1} max={8} onChange={setBedrooms} />
                <NumInput label="Bathrooms" value={bathrooms} min={1} max={6} onChange={setBathrooms} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <NumInput label="Kitchens" value={kitchen} min={1} max={3} onChange={setKitchen} />
                <div className="text-sm font-medium text-slate-700">
                  <p className="mb-2">Extras</p>
                  <div className="space-y-2.5">
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={maidRoom}
                        onChange={(e) => setMaidRoom(e.target.checked)}
                        className="w-4 h-4 accent-[#c4922a]"
                      />
                      <span className="text-slate-600">Maid Room</span>
                    </label>
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={swimmingPool}
                        onChange={(e) => setSwimmingPool(e.target.checked)}
                        className="w-4 h-4 accent-[#c4922a]"
                      />
                      <span className="text-slate-600">Swimming Pool</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Summary card */}
              <div className="rounded-lg bg-slate-50 border border-slate-200 p-5">
                <p className="text-xs uppercase tracking-widest text-[#c4922a] font-medium mb-3">Layout Summary</p>
                <p className="text-sm text-slate-600 leading-6 mb-4">
                  {actualPlot} ft plot · {floors} floor{floors > 1 ? 's' : ''} · {bedrooms} BR · {bathrooms} BA · {kitchen} Kitchen
                  {maidRoom ? ' · Maid Room' : ''}
                  {swimmingPool ? ' · Pool' : ''}
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-white border border-slate-200 rounded-md p-3">
                    <p className="text-xs text-slate-400 mb-1">Built-up Area</p>
                    <p className="font-bold text-[#0d1117]">{builtArea.toLocaleString()} sq.ft</p>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-md p-3">
                    <p className="text-xs text-slate-400 mb-1">Indicative Cost</p>
                    <p className="font-bold text-[#0d1117]">{fmt(estimate.total)}</p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-slate-400">Indicative only. Final drawings prepared by licensed architects.</p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="cost"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="space-y-5"
            >
              {/* Construction grade */}
              <div>
                <p className="text-sm font-medium text-slate-700 mb-3">Construction Grade</p>
                <div className="grid grid-cols-2 gap-2">
                  {constructionTypes.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setConstructionType(t)}
                      className={`py-2.5 px-3 text-xs font-semibold rounded-md border transition ${
                        constructionType === t
                          ? 'bg-[#c4922a] border-[#c4922a] text-white'
                          : 'bg-white border-slate-300 text-slate-600 hover:border-[#c4922a] hover:text-[#c4922a]'
                      }`}
                    >
                      {t}
                      <span className="block text-[10px] font-normal opacity-80">
                        {fmt(rateMap[t])}/sq.ft
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Plot size */}
              <label className="block text-sm font-medium text-slate-700">
                Plot Size
                <select
                  value={plotSize}
                  onChange={(e) => setPlotSize(e.target.value)}
                  className="mt-2 w-full border border-slate-300 rounded-md bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-[#c4922a]"
                >
                  {plotOptions.map((o) => <option key={o} value={o}>{o === 'Custom' ? 'Custom Size' : `${o} ft`}</option>)}
                </select>
              </label>

              {plotSize === 'Custom' && (
                <label className="block text-sm font-medium text-slate-700">
                  Custom Dimensions
                  <input
                    value={customPlot}
                    onChange={(e) => setCustomPlot(e.target.value)}
                    placeholder="40x60"
                    className="mt-2 w-full border border-slate-300 rounded-md bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-[#c4922a]"
                  />
                </label>
              )}

              {/* Add-ons */}
              <div className="rounded-lg bg-slate-50 border border-slate-200 p-4">
                <p className="text-xs uppercase tracking-widest text-[#c4922a] font-medium mb-3">Include in Estimate</p>
                <div className="space-y-2.5 text-sm text-slate-600">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="flex items-center gap-2.5">
                      <input type="checkbox" checked={includeInterior} onChange={(e) => setIncludeInterior(e.target.checked)} className="w-4 h-4 accent-[#c4922a]" />
                      Interior Design
                    </span>
                    <span className="text-xs text-slate-400">+15%</span>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="flex items-center gap-2.5">
                      <input type="checkbox" checked={includeElevation} onChange={(e) => setIncludeElevation(e.target.checked)} className="w-4 h-4 accent-[#c4922a]" />
                      Elevation & Façade
                    </span>
                    <span className="text-xs text-slate-400">+8%</span>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="flex items-center gap-2.5">
                      <input type="checkbox" checked={includeLandscape} onChange={(e) => setIncludeLandscape(e.target.checked)} className="w-4 h-4 accent-[#c4922a]" />
                      Landscape & Outdoor
                    </span>
                    <span className="text-xs text-slate-400">+7%</span>
                  </label>
                </div>
              </div>

              {/* Cost breakdown */}
              <div className="rounded-lg border-2 border-[#c4922a]/30 bg-[#c4922a]/5 p-5">
                <div className="flex items-baseline justify-between mb-4">
                  <p className="text-xs uppercase tracking-widest text-[#c4922a] font-medium">Total Estimate</p>
                  <p className="font-serif text-2xl font-bold text-[#0d1117]">{fmt(estimate.total)}</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-slate-600">
                    <span>Built-up area ({builtArea.toLocaleString()} sq.ft)</span>
                    <span className="font-medium text-slate-800">{fmt(rateMap[constructionType] * builtArea)}</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Materials (~62%)</span>
                    <span>{fmt(estimate.material)}</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Labour (~28%)</span>
                    <span>{fmt(estimate.labor)}</span>
                  </div>
                  <div className="border-t border-slate-200 mt-2 pt-2 flex justify-between text-slate-500">
                    <span>GST (18%)</span>
                    <span>{fmt(estimate.gst)}</span>
                  </div>
                  <div className="border-t border-slate-200 mt-1 pt-2 flex justify-between font-semibold text-slate-700">
                    <span>Timeline</span>
                    <span>{estimate.timeline}</span>
                  </div>
                </div>
                <p className="mt-4 text-xs text-slate-400">Estimates are approximate. Contact us for a detailed BOQ and quotation.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
