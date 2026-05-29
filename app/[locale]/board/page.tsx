import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Button from '@/components/button';
import MemberCard from '@/components/ui/member-card';
import { getTranslations } from 'next-intl/server';

interface PageProps {
  params: Promise<{ locale: string }>;
}

interface Member {
  name: string;
  role: string;
  country: string;
  bio: string;
  photo: string;
  linkedin: string;
  type: string;
}

function MemberGrid({ members }: { members: Member[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {members.map((member, index) => (
        <MemberCard key={index} member={member} />
      ))}
    </div>
  );
}

export default async function BoardPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations('boardPage');

  const allMembers = t.raw('members') as Member[];
  const council = allMembers.filter((m) => m.type === 'high council');
  const fellows = allMembers.filter((m) => m.type === 'fellow');

  return (
    <main>
      <Navbar locale={locale} />

      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold tracking-widest uppercase opacity-60 mb-4 block">
            {t('eyebrow')}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('heading')}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">{t('subheading')}</p>
        </div>
      </section>

      {/* High Council */}
      {council.length > 0 && (
        <section className="bg-white py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary mb-12">
              {t('councilHeading')}
            </h2>
            <MemberGrid members={council} />
          </div>
        </section>
      )}

      {/* Fellows */}
      {fellows.length > 0 && (
        <section className="bg-gray-50 py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary mb-12">
              {t('fellowsHeading')}
            </h2>
            <MemberGrid members={fellows} />
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-2xl md:text-3xl font-bold max-w-xl">
            {t('ctaText')}
          </p>
          <Button href={'/' + locale + '/notnormal'} variant="primary">
            {t('ctaButtonText')}
          </Button>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  );
}
