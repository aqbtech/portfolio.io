'use client';

import { useI18n } from '@/lib/i18n';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <button
      onClick={() => setLocale(locale === 'en' ? 'vi' : 'en')}
      className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-primary-600 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
      aria-label="Switch language"
    >
      <span className={locale === 'en' ? 'font-semibold text-primary-600' : ''}>EN</span>
      <span className="text-slate-400">/</span>
      <span className={locale === 'vi' ? 'font-semibold text-primary-600' : ''}>VI</span>
    </button>
  );
}
