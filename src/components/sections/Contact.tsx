'use client';

import { useState, FormEvent } from 'react';
import { useI18n } from '@/lib/i18n';

export default function Contact() {
  const { t } = useI18n();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/tvnaquan@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-slate-600">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                name="name"
                required
                placeholder={t.contact.namePlaceholder}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-shadow text-slate-700 placeholder:text-slate-400"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                required
                placeholder={t.contact.emailPlaceholder}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-shadow text-slate-700 placeholder:text-slate-400"
              />
            </div>
            <div>
              <textarea
                name="message"
                required
                rows={5}
                placeholder={t.contact.messagePlaceholder}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-shadow resize-none text-slate-700 placeholder:text-slate-400"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-3 px-6 text-white font-medium bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </>
              ) : (
                t.contact.sendButton
              )}
            </button>
          </form>

          {/* Status messages */}
          {status === 'success' && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-center">
              {t.contact.successMessage}
            </div>
          )}
          {status === 'error' && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-center">
              {t.contact.errorMessage}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
