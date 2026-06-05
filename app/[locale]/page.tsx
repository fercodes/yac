import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import AboutSnapshot from '@/components/about-snapshot';
import BoardPreview from '@/components/board-preview';
import ProjectsPreview from '@/components/projects-preview';
import FrameworkSection from '@/components/framework-section';
import SdgsSection from '@/components/sdg-section';
import SponsorsSection from '@/components/sponsors-section';
import PhotoCarousel from '@/components/photo-carousel';
import CallToActionSection from '@/components/call-to-action';
import FormSection from '@/components/form-section';
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
      <SdgsSection locale={locale} />
      <SponsorsSection locale={locale} />
      <PhotoCarousel locale={locale} />
      <CallToActionSection locale={locale} />
      <FormSection />
      <Footer locale={locale} />
    </main>
  );
}
