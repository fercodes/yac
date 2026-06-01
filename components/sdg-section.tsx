'use client';

import { useTranslations } from 'next-intl';
import Button from './button';
import Image from 'next/image';

interface SdgsSectionProps {
  locale: string;
}

export default function SdgsSection({ locale }: SdgsSectionProps) {
  const t = useTranslations('sdgs');

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-bold text-primary tracking-widest uppercase mb-4 block">
            {t('eyebrow')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            {t('heading')}
          </h2>
        </div>

        {/* SDG Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {(t.raw('items') as any[]).map((item: any, index: number) => (
            <div
              key={index}
              className="border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="relative w-16 h-16 mb-4">
                <Image
                  src={'/images/' + item.icon}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="border-t border-gray-100 pt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-2xl md:text-3xl font-bold text-primary max-w-xl">
            {t('cta')}
          </p>
          <Button href={t('ctaLinkUrl')} variant="primary">
            {t('ctaLinkText')}
          </Button>
        </div>
      </div>

      {/* Sponsors */}
      <div className="mt-20 pt-16 border-t border-gray-100">
        <p className="text-xs font-bold text-primary tracking-widest uppercase mb-10 text-center">
          {t('sponsorsEyebrow')}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {(t.raw('sponsors') as any[]).map((sponsor: any, index: number) => (
            <div
              key={index}
              className="relative h-10 w-32"
            >
              <Image
                src={'/images/' + sponsor.image}
                alt={sponsor.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
