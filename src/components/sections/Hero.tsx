'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n';

export default function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-primary-50"
    >
      <div className="container-narrow text-center py-20">
        <p className="text-primary-600 font-medium mb-4 animate-fade-in">
          {t.hero.greeting}
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-4">
          {t.hero.name}
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-600 mb-6">
          {t.hero.title}
        </h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10">
          {t.hero.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors shadow-lg shadow-primary-600/25"
          >
            {t.hero.viewWork}
          </Link>
          <a
            href="/My-Resume-CV-Tu-Van-Nguyen-Anh-Quan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {t.hero.viewResume || 'View Resume'}
          </a>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-primary-600 hover:text-primary-700 hover:underline transition-colors"
          >
            {t.hero.contactMe}
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <Link href="#about" className="text-slate-400 hover:text-primary-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
