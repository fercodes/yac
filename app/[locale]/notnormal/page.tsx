import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Button from '@/components/button';
import SdgsSection from '@/components/sdg-section';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function NotNormalPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations('notNormalPage');

  const stats = t.raw('stats') as Array<{ icon: string; text: string }>;

  return (
    <main>
      <Navbar locale={locale} />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <span className="text-xs font-bold tracking-widest uppercase opacity-60 mb-4 block">
                {t('eyebrow')}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('heading')}
              </h1>
              <p className="text-xl text-gray-300 mb-6">{t('subheading')}</p>
              <p className="text-gray-300 mb-4">{t('intro1')}</p>
              <p className="text-gray-300 mb-10">{t('intro2')}</p>
              <div className="inline-block border border-white rounded-lg">
                <Button href={t('ctaUrl')} variant="primary">
                  {t('ctaText')}
                </Button>
              </div>
            </div>
            <div className="relative w-full max-w-md ml-auto aspect-[4/3] overflow-hidden rounded-xl hidden md:block">
              <Image
                src="/images/photo33.jpg"
                alt={t('heading')}
                fill
                className="object-cover opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      <SdgsSection locale={locale} />

      {/* Why this matters */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
            {t('statsHeading')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex gap-6 p-8 border border-gray-100 rounded-xl hover:shadow-md transition-shadow"
              >
                <span className="text-3xl flex-shrink-0">{stat.icon}</span>
                <p className="text-gray-700 leading-relaxed">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment section */}
      <section className="bg-primary/90 text-primary-foreground py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('commitmentHeading')}
          </h2>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              {t('commitmentBody')}
            </p>
            <div className="border-2 border-white rounded-lg flex-shrink-0">
              <Button href={t('joinUrl')} variant="primary">
                {t('joinText')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
