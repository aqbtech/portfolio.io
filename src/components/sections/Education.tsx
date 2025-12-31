'use client';

import { useI18n } from '@/lib/i18n';

export default function Education() {
  const { t } = useI18n();

  return (
    <section id="education" className="section-padding bg-slate-50">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t.education.title}
          </h2>
          <p className="text-lg text-slate-600">
            {t.education.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 -translate-x-1/2 hidden md:block" />

            {/* Education card */}
            <div className="relative flex flex-col md:flex-row items-start gap-6 md:gap-12">
              {/* Year badge */}
              <div className="md:w-1/2 md:text-right">
                <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 font-semibold rounded-full text-sm">
                  {t.education.period}
                </span>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-3 w-4 h-4 bg-primary-600 rounded-full -translate-x-1/2 ring-4 ring-white hidden md:block" />

              {/* Content */}
              <div className="md:w-1/2 bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {t.education.degree}
                </h3>
                <h4 className="text-primary-600 font-medium mb-3">
                  {t.education.university}
                </h4>
                <p className="text-slate-600 mb-4">
                  {t.education.description}
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 mt-0.5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{t.education.gpa}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-4 h-4 mt-0.5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{t.education.english}</span>
                  </li>
                  {t.education.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-4 h-4 mt-0.5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Award badge */}
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-yellow-500">🏆</span>
                    <span className="font-medium text-slate-700">{t.education.award}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
