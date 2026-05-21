'use client';

import { useTranslations } from 'next-intl';
import Button from './button';
import NextImage from 'next/image';

interface AboutSnapshotProps {
  locale: string;
}

export default function AboutSnapshot({ locale }: AboutSnapshotProps) {
  const t = useTranslations('about');

  return (
    <section className="bg-gray-light py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <span className="text-xs font-bold text-primary tracking-widest uppercase">
            {t('eyebrow')}
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
          {t('title')}
        </h2>

        <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-3xl text-pretty">
          {t('description')}
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {t.raw('bullets').map((bullet: string, index: number) => (
            <li key={index} className="flex items-start gap-3 text-gray-700">
              <span className="text-primary font-bold text-lg shrink-0">✓</span>
              <span className="text-base">{bullet}</span>
            </li>
          ))}
        </ul>

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center mb-10">
          <div className="w-full overflow-hidden rounded-xl shadow-md">
            <NextImage
              src="/images/photo14.jpg"
              alt=""
              width={600}
              height={400}
              className="w-full h-80 object-cover object-center"
            />
          </div>
          <div className="w-full overflow-hidden rounded-xl shadow-md">
            <NextImage
              src="/images/photo6.jpg"
              alt=""
              width={600}
              height={400}
              className="w-full h-80 object-cover object-bottom"
            />
          </div>
        </div>

        <Button href={t('linkUrl')} variant="outline">
          {t('linkText')}
        </Button>
      </div>
    </section>
  );
}
