'use client';

import Image from 'next/image';
import { useI18n } from '@/lib/i18n';

export default function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t.about.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-primary-100">
              <Image
                src="/images/avatar.jpg"
                alt="Profile Photo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="flex-1">
            <p className="text-lg text-slate-600 leading-relaxed">
              {t.about.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
