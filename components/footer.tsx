'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

interface FooterProps {
  locale: string;
}

export default function Footer({ locale }: FooterProps) {
  const t = useTranslations('footer');

  const email = t('email');
  const linkedinUrl = t('linkedinUrl');
  const instagramUrl = t('instagramUrl');

  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              YAC FOUNDATION | YOUTH AGAINST CORRUPTION
            </h3>
            <p className="text-sm text-gray-300 mb-4 italic">{t('tagline')}</p>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="font-semibold">{t('contact')}:</p>
              <a
                href={'mailto:' + email}
                className="block hover:opacity-80 transition-opacity"
              >
                {email}
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">{t('quickLinks')}</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <Link
                href={'/' + locale}
                className="block hover:opacity-80 transition-opacity"
              >
                {t('links.home')}
              </Link>
              <Link
                href={'/' + locale + '/about'}
                className="block hover:opacity-80 transition-opacity"
              >
                {t('links.about')}
              </Link>
              <Link
                href={'/' + locale + '/board'}
                className="block hover:opacity-80 transition-opacity"
              >
                {t('links.board')}
              </Link>
              <Link
                href={'/' + locale + '/projects'}
                className="block hover:opacity-80 transition-opacity"
              >
                {t('links.projects')}
              </Link>
              <Link
                href={'/' + locale + '/notnormal'}
                className="block hover:opacity-80 transition-opacity"
              >
                {t('links.notnormal')}
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">{t('followUs')}</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity"
              >
                LinkedIn
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity"
              >
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">{t('legal')}</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <Link
                href={'/' + locale + '/privacy'}
                className="block hover:opacity-80 transition-opacity"
              >
                {t('privacy')}
              </Link>
              <Link
                href={'/' + locale + '/terms'}
                className="block hover:opacity-80 transition-opacity"
              >
                {t('terms')}
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-secondary pt-8 text-center text-sm text-gray-300">
          <p>{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
