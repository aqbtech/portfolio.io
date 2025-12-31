'use client';

import { useI18n } from '@/lib/i18n';

export default function Experience() {
  const { t } = useI18n();

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t.experience.title}
          </h2>
          <p className="text-lg text-slate-600">
            {t.experience.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-primary-200">
            {/* Timeline dot */}
            <div className="absolute left-0 top-0 w-4 h-4 bg-primary-600 rounded-full -translate-x-1/2 ring-4 ring-white" />

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 font-medium rounded-full text-sm">
                  {t.experience.period}
                </span>
                <span className="text-sm text-slate-500">{t.experience.duration}</span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1">
                {t.experience.role}
              </h3>
              <h4 className="text-primary-600 font-medium mb-2">
                {t.experience.company}
              </h4>
              <p className="text-sm text-slate-600 mb-4">
                {t.experience.scope}
              </p>

              {/* Key Contributions */}
              <div className="mb-4">
                <h5 className="font-semibold text-slate-800 mb-2">{t.experience.contributionsTitle}</h5>
                <ul className="space-y-2 text-sm text-slate-600">
                  {t.experience.contributions.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact */}
              <div className="mb-4">
                <h5 className="font-semibold text-slate-800 mb-2">{t.experience.impactTitle}</h5>
                <ul className="space-y-2 text-sm text-slate-600">
                  {t.experience.impact.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div className="pt-4 border-t border-slate-200">
                <div className="flex flex-wrap gap-2">
                  {t.experience.tools.map((tool: string, index: number) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-md"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
