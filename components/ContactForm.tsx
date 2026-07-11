'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const WHATSAPP_NUMBER = '919738417053';

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().min(10, 'Enter your 10-digit mobile number'),
  message: z.string().min(10, 'Enter a short project brief (min 10 chars)'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormValues) => {
    const text = [
      `🏗️ *New Inquiry — Hatkar Construction*`,
      ``,
      `*Name:* ${data.name}`,
      `*Phone:* ${data.phone}`,
      `*Email:* ${data.email}`,
      ``,
      `*Project Brief:*`,
      data.message,
      ``,
      `_Sent from hatkarconstruction.com_`,
    ].join('\n');

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="font-semibold text-[#0d1117] text-lg mb-2">Opening WhatsApp…</h4>
        <p className="text-sm text-slate-500 mb-5">Your message has been pre-filled in WhatsApp. Just tap Send to reach us instantly.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-sm text-[#c4922a] underline underline-offset-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700">
          Full Name
          <input
            {...register('name')}
            placeholder="Er. Rakesh Sharma"
            className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#c4922a] focus:ring-1 focus:ring-[#c4922a]"
          />
          {errors.name && <span className="mt-1.5 block text-xs text-red-600">{errors.name.message}</span>}
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Email Address
          <input
            {...register('email')}
            type="email"
            placeholder="you@example.com"
            className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#c4922a] focus:ring-1 focus:ring-[#c4922a]"
          />
          {errors.email && <span className="mt-1.5 block text-xs text-red-600">{errors.email.message}</span>}
        </label>
      </div>
      <label className="block text-sm font-medium text-slate-700">
        Phone Number
        <input
          {...register('phone')}
          type="tel"
          placeholder="+91 98765 43210"
          className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#c4922a] focus:ring-1 focus:ring-[#c4922a]"
        />
        {errors.phone && <span className="mt-1.5 block text-xs text-red-600">{errors.phone.message}</span>}
      </label>
      <label className="block text-sm font-medium text-slate-700">
        Project Brief
        <textarea
          {...register('message')}
          rows={4}
          placeholder="Tell us about your project — type, location, budget range, timeline…"
          className="mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#c4922a] focus:ring-1 focus:ring-[#c4922a] resize-none"
        />
        {errors.message && <span className="mt-1.5 block text-xs text-red-600">{errors.message.message}</span>}
      </label>
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 bg-[#c4922a] px-6 py-3.5 text-sm font-semibold text-white rounded-md transition hover:bg-[#a87924] disabled:cursor-not-allowed disabled:opacity-60"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        {isSubmitting ? 'Preparing…' : 'Send via WhatsApp'}
      </button>
      <p className="text-xs text-slate-400 text-center">
        Your inquiry opens in WhatsApp — just tap Send. We respond within a few hours.
      </p>
    </form>
  );
}
