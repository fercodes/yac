'use client';

import { useTranslations } from 'next-intl';
import Button from './button';
import Card from './card';
import ImagePlaceholder from './image-placeholder';

interface ProjectsPreviewProps {
  locale: string;
}

export default function ProjectsPreview({ locale }: ProjectsPreviewProps) {
  const t = useTranslations('projects');

  return (
    <section className="bg-white py-24 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-xs font-bold text-primary tracking-widest uppercase">
            {t('eyebrow')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mt-3 mb-6 text-balance">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl text-pretty">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {t.raw('items').map((project: any, index: number) => (
            <Card key={index}>
              <ImagePlaceholder aspectRatio="4:3" alt={project.title} />
              <h3 className="text-xl font-bold text-primary mt-4">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </Card>
          ))}
        </div>

        <Button href={t('linkUrl')} variant="primary">
          {t('linkText')}
        </Button>
      </div>
    </section>
  );
}
