'use client'

import { useTranslations } from 'next-intl'
import Button from './button'
import ImagePlaceholder from './image-placeholder'

interface ResearchPreviewProps {
  locale: string
}

export default function ResearchPreview({ locale }: ResearchPreviewProps) {
  const t = useTranslations('research')

  return (
    <section className="bg-gray-light py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-xs font-bold text-primary tracking-widest uppercase">
              {t('eyebrow')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3 mb-6 text-balance">
              {t('title')}
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed text-pretty">
              {t('description')}
            </p>
            <Button href={t('linkUrl')} variant="outline">
              {t('linkText')}
            </Button>
          </div>

          {/* Image Placeholder */}
          <div className="hidden md:block">
            <ImagePlaceholder aspectRatio="4:3" alt="Research image" />
          </div>
        </div>
      </div>
    </section>
  )
}
