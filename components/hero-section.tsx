'use client';

import { useTranslations } from 'next-intl';
import NextImage from 'next/image';
import Button from './button';

interface HeroSectionProps {
  locale: string;
}

export default function HeroSection({ locale }: HeroSectionProps) {
  const t = useTranslations('hero');

  return (
    <>
      <section className="relative bg-white min-h-150 md:min-h-175 flex items-center">
        <NextImage
          src="/images/photo18.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-white/70" />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-items-center">
            {/* Content */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight text-balance">
                {t('headline')}
              </h1>
              <p className="text-lg text-gray-800 font-semibold mb-10 leading-relaxed text-pretty">
                {t('subtitle')}
              </p>
              <div className="flex justify-center md:justify-start">
                <Button href={t('ctaUrl')} size="lg">
                  {t('ctaText')}
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden md:block rounded-xl overflow-hidden shadow-lg">
              <NextImage
                src="/images/photo12.jpg"
                alt="Hero image"
                width={600}
                height={800}
                className="object-cover w-auto max-h-96"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="relative w-full bg-primary text-primary-foreground py-12 my-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold pb-2">
                <span className="border-b-3 border-primary-foreground">
                  500+
                </span>
              </p>
              <p className="text-sm mt-1 opacity-80">Leaders in this mission</p>
            </div>
            <div>
              <p className="text-4xl font-bold pb-2">
                <span className="border-b-3 border-primary-foreground">
                  15+
                </span>
              </p>
              <p className="text-sm mt-1 opacity-80">
                Affiliated organizations
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold pb-2">
                <span className="border-b-3 border-primary-foreground">15</span>
              </p>
              <p className="text-sm mt-1 opacity-80">Countries and growing</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
