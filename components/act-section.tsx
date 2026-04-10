'use client'

import { useTranslations } from 'next-intl'
import Card from './card'

interface ActSectionProps {
  locale: string
}

export default function ActSection({ locale }: ActSectionProps) {
  const t = useTranslations('act')

  const getIcon = (index: number) => {
    const icons = [
      '💝', // Donate
      '🤝', // Volunteer
      '🌍', // Partner
    ]
    return icons[index] || '→'
  }

  return (
    <section className="bg-primary text-primary-foreground py-24 md:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-300 text-pretty">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.raw('actions').map((action: any, index: number) => (
            <div
              key={index}
              className="bg-secondary rounded-lg p-8 text-center hover:bg-accent hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-6xl mb-4">{getIcon(index)}</div>
              <h3 className="text-2xl font-bold mb-3">{action.title}</h3>
              <p className="text-gray-300">{action.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
