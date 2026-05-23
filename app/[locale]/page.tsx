import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import AboutSnapshot from '@/components/about-snapshot';
import BoardPreview from '@/components/board-preview';
import ProjectsPreview from '@/components/projects-preview';
import FrameworkSection from '@/components/framework-section';
import ResearchPreview from '@/components/research-preview';
import ActSection from '@/components/act-section';
import Footer from '@/components/footer';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <main>
      <Navbar locale={locale} />
      <HeroSection locale={locale} />
      <AboutSnapshot locale={locale} />
      <BoardPreview locale={locale} />
      <ProjectsPreview locale={locale} />
      <FrameworkSection locale={locale} />
      <ResearchPreview locale={locale} />
      <ActSection locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
