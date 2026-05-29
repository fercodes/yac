'use client';
import { useTranslations } from 'next-intl';
import MemberCard from '@/components/ui/member-card';
import Button from '@/components/button';

interface BoardPreviewProps {
  locale: string;
}

interface Member {
  name: string;
  role: string;
  country: string;
  photo: string;
  bio: string;
  linkedin: string;
  type: string;
}

export default function BoardPreview({ locale }: BoardPreviewProps) {
  const t = useTranslations('boardPage');

  const allMembers = t.raw('members') as Member[];
  const council = allMembers
    .filter((m) => m.type === 'high council')
    .slice(0, 6);

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

        {/* Cards grid — 6 cards: 3 on top, 3 on bottom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {council.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <Button href={'/' + locale + '/board'} variant="primary">
            {t('linkText')}
          </Button>
        </div>
      </div>
    </section>
  );
}
