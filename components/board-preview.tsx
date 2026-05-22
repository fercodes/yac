'use client';
import ImagePlaceholder from '@/components/image-placeholder';
import Card from '@/components/card';
import Button from '@/components/button';
import { useTranslations } from 'next-intl';

interface BoardPreviewProps {
  locale: string;
}

export default function BoardPreview({ locale }: BoardPreviewProps) {
  const t = useTranslations('board');

  const members = t.raw('members') as Array<{
    name: string;
    role: string;
    country: string;
    oneLiner: string;
  }>;

  return (
    <section className="bg-white py-20 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-secondary font-semibold text-sm uppercase tracking-widest mb-2">
              {t('eyebrow')}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              {t('heading')}
            </h2>
          </div>
        </div>

        {/* Cards grid — 5 cards: 3 on top, 2 centered below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(t.raw('members') as any[])
            .slice(0, 3)
            .map((member: any, index: number) => (
              <MemberCard key={index} member={member} />
            ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:max-w-2xl md:mx-auto">
          {(t.raw('members') as any[])
            .slice(3, 5)
            .map((member: any, index: number) => (
              <MemberCard key={index} member={member} />
            ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <Button href={t('linkUrl')} variant="primary">
            {t('linkText')}
          </Button>
        </div>
      </div>
    </section>
  );
}

function MemberCard({
  member,
}: {
  member: { name: string; role: string; country: string; oneLiner: string };
}) {
  return (
    <Card>
      <ImagePlaceholder aspectRatio="square" alt={member.name} />
      <div className="mt-4">
        <h3 className="text-lg font-bold text-primary">{member.name}</h3>
        <p className="text-secondary font-semibold text-sm mt-0.5">
          {member.role}
        </p>
        <p className="text-gray-400 text-xs mt-0.5">{member.country}</p>
        <p className="text-gray-600 text-sm mt-3 italic">"{member.oneLiner}"</p>
      </div>
    </Card>
  );
}
