'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface FrameworkSectionProps {
  locale: string;
}

export default function FrameworkSection({ locale }: FrameworkSectionProps) {
  const t = useTranslations('framework');

  return (
    <section className="bg-primary text-primary-foreground py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase opacity-60 mb-4 block">
              {t('eyebrow')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              {t('heading')}
            </h2>
            <div className="space-y-6">
              {(t.raw('paragraphs') as string[]).map(
                (paragraph: string, index: number) => (
                  <p
                    key={index}
                    className={`text-lg leading-relaxed ${index === 1 ? 'font-bold text-white' : 'text-gray-300'}`}
                  >
                    {paragraph}
                  </p>
                ),
              )}
            </div>
          </div>

          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl hidden md:block">
            <Image
              src={'/images/' + t('image')}
              alt={t('imageAlt')}
              fill
              className="object-cover opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
