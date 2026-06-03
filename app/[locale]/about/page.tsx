import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations('aboutPage');

  const missionParagraphs = t.raw('missionParagraphs') as string[];
  const values = t.raw('values') as Array<{
    title: string;
    description: string;
  }>;

  return (
    <main>
      <Navbar locale={locale} />

      <section className="bg-primary text-primary-foreground py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase opacity-60 mb-4 block">
                {t('eyebrow')}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t('heading')}
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                {t('subheading')}
              </p>
            </div>
            <div className="relative w-full max-w-md ml-auto aspect-[4/3] overflow-hidden rounded-xl hidden md:block">
              <Image
                src="/images/photo30.jpg"
                alt={t('heading')}
                fill
                className="object-cover opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                {t('missionHeading')}
              </h2>
              {missionParagraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md">
              <Image
                src="/images/photo31.jpg"
                alt="About us"
                width="500"
                height="600"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-light py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            {t('valuesHeading')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
