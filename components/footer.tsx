'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

interface FooterProps {
  locale: string
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations('footer')

  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Youth Against Corruption</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>
                <span className="font-semibold">{t('contact')}:</span>
              </p>
              <p>📧 {t('email')}</p>
              <p>📞 {t('phone')}</p>
              <p>📍 {t('address')}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t('quickLinks')}</h4>
            <div className="space-y-2">
              <Link
                href={`/${locale}`}
                className="block hover:opacity-80 transition-opacity"
              >
                Home
              </Link>
              <Link
                href={`/${locale}/about`}
                className="block hover:opacity-80 transition-opacity"
              >
                About
              </Link>
              <Link
                href={`/${locale}/projects`}
                className="block hover:opacity-80 transition-opacity"
              >
                Projects
              </Link>
              <Link
                href={`/${locale}/research`}
                className="block hover:opacity-80 transition-opacity"
              >
                Research
              </Link>
            </div>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t('followUs')}</h4>
            <div className="space-y-2 mb-6">
              <a href="#" className="block hover:opacity-80 transition-opacity">
                Facebook
              </a>
              <a href="#" className="block hover:opacity-80 transition-opacity">
                Twitter
              </a>
              <a href="#" className="block hover:opacity-80 transition-opacity">
                LinkedIn
              </a>
            </div>
            <div className="space-y-2 text-sm">
              <Link
                href="#"
                className="block hover:opacity-80 transition-opacity"
              >
                {t('privacy')}
              </Link>
              <Link
                href="#"
                className="block hover:opacity-80 transition-opacity"
              >
                {t('terms')}
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary pt-8 text-center text-sm text-gray-300">
          <p>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
