'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import MobileMenu from './mobile-menu';
import Image from 'next/image';

interface NavbarProps {
  locale: string;
}

export default function Navbar({ locale }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations('nav');

  const navLinks = [
    { label: t('home'), href: `/${locale}` },
    { label: t('about'), href: `/${locale}/about` },
    { label: t('board'), href: `/${locale}/board` },
    { label: t('projects'), href: `/${locale}/projects` },
    { label: t('act'), href: `/${locale}/notnormal` },
  ];

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-primary text-primary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              href={`/${locale}`}
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/logo5.png"
                alt="Logo"
                width={120}
                height={40}
                className="h-14 w-auto object-contain rounded-md"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium hover:opacity-80 transition-opacity relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:opacity-80 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <MobileMenu
          links={navLinks}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
