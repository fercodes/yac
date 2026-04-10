'use client'

import { useTranslations } from 'next-intl'
import Button from './button'
import ImagePlaceholder from './image-placeholder'

interface HeroSectionProps {
  locale: string
}

export default function HeroSection({ locale }: HeroSectionProps) {
  const t = useTranslations('hero')

  return (
    <section className="bg-white py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight text-balance">
              {t('headline')}
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed text-pretty">
              {t('subtitle')}
            </p>
            <Button href={t('ctaUrl')} size="lg">
              {t('ctaText')}
            </Button>
          </div>

          {/* Image Placeholder */}
          <div className="hidden md:block">
            <ImagePlaceholder aspectRatio="16:9" alt="Hero image" />
          </div>
        </div>
      </div>
    </section>
  )
}
