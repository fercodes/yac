import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import Button from '@/components/button';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function ProjectsPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations('projectsPage');

  const projects = t.raw('items') as Array<{
    title: string;
    subtitle: string;
    body: string[];
    buttonText: string;
    buttonUrl: string;
    image: string;
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
                src="/images/photo32.jpg"
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
          <div className="space-y-32">
            {projects.map((project, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src={'/images/' + project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                    {project.title}
                  </h2>
                  <p className="text-secondary font-semibold mb-6">
                    {project.subtitle}
                  </p>
                  <div className="space-y-4">
                    {project.body.map((paragraph, i) => (
                      <p key={i} className="text-gray-600 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Button href={project.buttonUrl} variant="primary">
                      {project.buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
