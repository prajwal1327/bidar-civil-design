'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().min(10, 'Enter your mobile number'),
  message: z.string().min(10, 'Enter a short project brief'),
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

  const onSubmit = async (data: ContactFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitted(true);
    reset();
  };

  return (
    <div className="glass-card rounded-[2rem] border border-slate-200 p-8">
      <p className="text-sm uppercase tracking-[0.3em] text-brand.primary mb-3">Request Consultation</p>
      <h3 className="text-2xl font-semibold text-slate-900 mb-6">Start your build with a free quote</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm text-slate-700">
            Name
            <input {...register('name')} className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand.primary" />
            {errors.name ? <span className="mt-2 block text-xs text-rose-600">{errors.name.message}</span> : null}
          </label>
          <label className="block text-sm text-slate-700">
            Email
            <input {...register('email')} className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand.primary" />
            {errors.email ? <span className="mt-2 block text-xs text-rose-600">{errors.email.message}</span> : null}
          </label>
        </div>
        <label className="block text-sm text-slate-700">
          Phone
          <input {...register('phone')} className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand.primary" />
          {errors.phone ? <span className="mt-2 block text-xs text-rose-600">{errors.phone.message}</span> : null}
        </label>
        <label className="block text-sm text-slate-700">
          Project Brief
          <textarea {...register('message')} rows={4} className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-brand.primary" />
          {errors.message ? <span className="mt-2 block text-xs text-rose-600">{errors.message.message}</span> : null}
        </label>
        <button type="submit" disabled={isSubmitting} className="inline-flex w-full items-center justify-center rounded-full bg-brand.gold px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-[#b08f5d] disabled:cursor-not-allowed disabled:opacity-70">
          {isSubmitting ? 'Sending...' : 'Send Inquiry'}
        </button>
        {submitted ? <p className="text-sm text-emerald-600">Thank you! Your inquiry has been sent. We will contact you shortly.</p> : null}
      </form>
    </div>
  );
}
