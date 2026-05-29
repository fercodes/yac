import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { getTranslations } from 'next-intl/server';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations('terms');

  return (
    <main>
      <Navbar locale={locale} />

      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('heading')}
          </h1>
          <p className="text-gray-300">{t('lastUpdated')}</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            {t('s1.heading')}
          </h2>
          <p className="text-gray-600 leading-relaxed">{t('s1.body')}</p>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            {t('s2.heading')}
          </h2>
          <p className="text-gray-600 leading-relaxed">{t('s2.body')}</p>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            {t('s3.heading')}
          </h2>
          <p className="text-gray-600 leading-relaxed">{t('s3.body')}</p>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            {t('s4.heading')}
          </h2>
          <p className="text-gray-600 leading-relaxed">{t('s4.body')}</p>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            {t('s5.heading')}
          </h2>
          <p className="text-gray-600 leading-relaxed">{t('s5.body')}</p>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            {t('s6.heading')}
          </h2>
          <p className="text-gray-600 leading-relaxed">{t('s6.body')}</p>

          <h2 className="text-2xl font-bold text-primary mt-10 mb-4">
            {t('s7.heading')}
          </h2>
          <p className="text-gray-600 leading-relaxed">{t('s7.body')}</p>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
