'use client';

import { useTranslations } from 'next-intl';
import Button from './button';

interface CallToActionSectionProps {
  locale: string;
}

export default function CallToActionSection({
  locale,
}: CallToActionSectionProps) {
  const t = useTranslations('callToAction');

  return (
    <section className="bg-white pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-100 pt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-2xl md:text-3xl font-bold text-primary max-w-xl">
            {t('cta')}
          </p>
          <Button href={t('ctaLinkUrl')} variant="primary">
            {t('ctaLinkText')}
          </Button>
        </div>
      </div>
    </section>
  );
}
