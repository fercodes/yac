import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ImagePlaceholder from '@/components/image-placeholder'
import { useTranslations } from 'next-intl'

interface PageProps {
  params: Promise<{ locale: string }>
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params

  return (
    <main>
      <Navbar locale={locale} />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Our Organization
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Dedicated to creating sustainable change through innovative solutions
            and community partnerships.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We are committed to addressing critical social challenges through
                evidence-based programs and innovative partnerships.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our work spans education, health, and economic empowerment,
                touching the lives of thousands across multiple regions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe in the power of collective action and the potential
                within every community to drive meaningful change.
              </p>
            </div>
            <div>
              <ImagePlaceholder aspectRatio="4:3" alt="Mission image" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-light py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: 'Integrity',
                description: 'Transparent and ethical in all our actions',
              },
              {
                title: 'Impact',
                description: 'Measurable outcomes that create lasting change',
              },
              {
                title: 'Inclusion',
                description: 'Diverse voices driving our mission forward',
              },
              {
                title: 'Innovation',
                description: 'Creative solutions to complex challenges',
              },
            ].map((value, index) => (
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
  )
}
