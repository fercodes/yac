'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface SponsorsSectionProps {
  locale: string;
}

export default function SponsorsSection({ locale }: SponsorsSectionProps) {
  const t = useTranslations('sponsors');

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-bold text-primary tracking-widest uppercase mb-10 text-center">
          {t('sponsorsEyebrow')}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
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
          <span className="text-6xl font-bold text-primary">+</span>
        </div>
      </div>
    </section>
  );
}
