'use client';

import { useTranslations } from 'next-intl';
import Button from './button';
import Image from 'next/image';

interface CallToActionSectionProps {
  locale: string;
}

export default function CallToActionSection({
  locale,
}: CallToActionSectionProps) {
  const t = useTranslations('callToAction');

  return (
    <section className="bg-white pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 px-4 sm:px-6 lg:px-8">
          {(t.raw('sponsors') as any[]).map((sponsor: any, index: number) => (
            <div key={index} className="relative h-10 w-32">
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
