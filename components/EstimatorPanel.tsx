'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const plotOptions = ['30x40', '30x50', '40x60', '50x80', 'Custom'];
const floorTypes = ['Standard', 'Premium', 'Luxury', 'Ultra Luxury'];

export function EstimatorPanel() {
  const [tab, setTab] = useState<'floor' | 'cost'>('floor');
  const [plotSize, setPlotSize] = useState('30x40');
  const [customPlot, setCustomPlot] = useState('36x52');
  const [floors, setFloors] = useState(2);
  const [bedrooms, setBedrooms] = useState(4);
  const [bathrooms, setBathrooms] = useState(3);
  const [kitchen, setKitchen] = useState(1);
  const [maidRoom, setMaidRoom] = useState(false);
  const [swimmingPool, setSwimmingPool] = useState(false);
  const [floorType, setFloorType] = useState('Premium');
  const [includeInterior, setIncludeInterior] = useState(true);
  const [includeElevation, setIncludeElevation] = useState(true);
  const [includeLandscape, setIncludeLandscape] = useState(false);

  const actualPlot = plotSize === 'Custom' ? customPlot : plotSize;

  const basicArea = useMemo(() => {
    const [width, depth] = actualPlot.split('x').map(Number);
    return Math.round((width * depth) * floors * 0.65);
  }, [actualPlot, floors]);

  const costEstimate = useMemo(() => {
    const baseRate = floorType === 'Standard' ? 2100 : floorType === 'Premium' ? 2950 : floorType === 'Luxury' ? 3900 : 4700;
    const projectCost = basicArea * baseRate;
    const extraPackage = (includeInterior ? 0.15 : 0) + (includeElevation ? 0.08 : 0) + (includeLandscape ? 0.07 : 0);
    const estimate = Math.round(projectCost * (1 + extraPackage));
    return {
      buildCost: estimate,
      material: Math.round(estimate * 0.62),
      labor: Math.round(estimate * 0.28),
      gst: Math.round(estimate * 0.18),
      timeline: `${10 + floors * 3} months`,
    };
  }, [basicArea, floorType, includeInterior, includeElevation, includeLandscape]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
      <div className="glass-card rounded-[2rem] border border-slate-200 p-8">
        <div className="flex flex-wrap gap-3">
          <button onClick={() => setTab('floor')} className={`rounded-full px-4 py-2 text-sm transition ${tab === 'floor' ? 'bg-brand.gold text-slate-950' : 'bg-slate-100 text-slate-700'}`}>Floor Plan Designer</button>
          <button onClick={() => setTab('cost')} className={`rounded-full px-4 py-2 text-sm transition ${tab === 'cost' ? 'bg-brand.gold text-slate-950' : 'bg-slate-100 text-slate-700'}`}>Cost Estimator</button>
        </div>

        <AnimatePresence mode="wait">
          {tab === 'floor' ? (
            <motion.div key="floor" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="mt-8 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-slate-700">Plot Size</label>
                <select value={plotSize} onChange={(event) => setPlotSize(event.target.value)} className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none">
                  {plotOptions.map((option) => (<option key={option} value={option}>{option}</option>))}
                </select>
              </div>
              {plotSize === 'Custom' ? (
                <label className="block text-sm text-slate-700">Custom Plot <input value={customPlot} onChange={(event) => setCustomPlot(event.target.value)} className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none" /></label>
              ) : null}
              <div className="grid gap-4 sm:grid-cols-3">
                <label className="text-sm text-slate-700">Floors<input type="number" min={1} max={5} value={floors} onChange={(event) => setFloors(Number(event.target.value))} className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none" /></label>
                <label className="text-sm text-slate-700">Bedrooms<input type="number" min={1} max={8} value={bedrooms} onChange={(event) => setBedrooms(Number(event.target.value))} className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none" /></label>
                <label className="text-sm text-slate-700">Bathrooms<input type="number" min={1} max={6} value={bathrooms} onChange={(event) => setBathrooms(Number(event.target.value))} className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none" /></label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-slate-700">Kitchen<input type="number" min={0} max={3} value={kitchen} onChange={(event) => setKitchen(Number(event.target.value))} className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none" /></label>
                <div className="space-y-3 text-sm text-slate-700">
                  <label className="flex items-center gap-3"><input type="checkbox" checked={maidRoom} onChange={(event) => setMaidRoom(event.target.checked)} className="h-4 w-4 rounded border-slate-300 bg-white text-brand.gold" /> Maid Room</label>
                  <label className="flex items-center gap-3"><input type="checkbox" checked={swimmingPool} onChange={(event) => setSwimmingPool(event.target.checked)} className="h-4 w-4 rounded border-slate-300 bg-white text-brand.gold" /> Swimming Pool</label>
                </div>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-brand.primary mb-4">Concept Summary</p>
                <p className="text-slate-700 leading-7">This conceptual layout is based on a {actualPlot} plot with {floors} floors, {bedrooms} bedrooms, {bathrooms} bathrooms and {kitchen} kitchen{ kitchen > 1 ? 's' : '' }. {maidRoom ? 'A maid room is included.' : 'No maid room included.'} {swimmingPool ? 'Swimming pool provision is shown.' : 'Swimming pool is omitted.'}</p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 text-sm text-slate-700">
                  <div className="rounded-3xl bg-white p-4">Estimated built-up area: <span className="font-semibold text-slate-900">{basicArea} sq.ft</span></div>
                  <div className="rounded-3xl bg-white p-4">Estimated construction cost: <span className="font-semibold text-slate-900">₹{costEstimate.buildCost.toLocaleString()}</span></div>
                </div>
                <p className="mt-4 text-xs text-slate-500">Disclaimer: This is a conceptual layout only. Final drawings will be prepared by licensed architects and engineers.</p>
              </div>
            </motion.div>
          ) : (
            <motion.div key="cost" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="mt-8 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm text-slate-700">Construction Type</label>
                <select value={floorType} onChange={(event) => setFloorType(event.target.value)} className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none">
                  {floorTypes.map((type) => (<option key={type} value={type}>{type}</option>))}
                </select>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm text-slate-700">Plot Size</label>
                <select value={plotSize} onChange={(event) => setPlotSize(event.target.value)} className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none">
                  {plotOptions.map((option) => (<option key={option} value={option}>{option}</option>))}
                </select>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.25em] text-brand.primary">Estimated Cost</p>
                    <p className="text-3xl font-semibold text-slate-900">₹{costEstimate.buildCost.toLocaleString()}</p>
                  </div>
                  <div className="space-y-3 text-sm text-slate-700">
                    <p>Material breakdown: ₹{costEstimate.material.toLocaleString()}</p>
                    <p>Labor cost: ₹{costEstimate.labor.toLocaleString()}</p>
                    <p>GST: ₹{costEstimate.gst.toLocaleString()}</p>
                    <p>Timeline: {costEstimate.timeline}</p>
                  </div>
                </div>
                <div className="mt-5 space-y-3 text-sm text-slate-700">
                  <label className="flex items-center gap-3"><input type="checkbox" checked={includeInterior} onChange={(event) => setIncludeInterior(event.target.checked)} className="h-4 w-4 rounded border-slate-300 bg-white text-brand.gold" /> Interior included</label>
                  <label className="flex items-center gap-3"><input type="checkbox" checked={includeElevation} onChange={(event) => setIncludeElevation(event.target.checked)} className="h-4 w-4 rounded border-slate-300 bg-white text-brand.gold" /> Elevation included</label>
                  <label className="flex items-center gap-3"><input type="checkbox" checked={includeLandscape} onChange={(event) => setIncludeLandscape(event.target.checked)} className="h-4 w-4 rounded border-slate-300 bg-white text-brand.gold" /> Landscape included</label>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="glass-card rounded-[2rem] border border-slate-200 p-8">
        <h3 className="text-xl font-semibold text-slate-900 mb-4">Quick Estimate Summary</h3>
        <div className="space-y-4 text-sm text-slate-700">
          <p>Region: Karnataka</p>
          <p>Plot Dimensions: {actualPlot}</p>
          <p>Number of Floors: {floors}</p>
          <p>Room distribution: {bedrooms} BR, {bathrooms} BA, {kitchen} Kitchen{ kitchen > 1 ? 's' : '' }</p>
          <p>Estimated built-up area: {basicArea} sq.ft</p>
          <p>Package tier: {floorType}</p>
          <p>Final conceptual cost: ₹{costEstimate.buildCost.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
