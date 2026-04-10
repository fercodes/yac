import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import AboutSnapshot from '@/components/about-snapshot'
import ProjectsPreview from '@/components/projects-preview'
import ResearchPreview from '@/components/research-preview'
import ActSection from '@/components/act-section'
import Footer from '@/components/footer'

interface PageProps {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params

  return (
    <main>
      <Navbar locale={locale} />
      <HeroSection locale={locale} />
      <AboutSnapshot locale={locale} />
      <ProjectsPreview locale={locale} />
      <ResearchPreview locale={locale} />
      <ActSection locale={locale} />
      <Footer locale={locale} />
    </main>
  )
}
