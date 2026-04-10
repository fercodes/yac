import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Card from '@/components/card'
import ImagePlaceholder from '@/components/image-placeholder'

interface PageProps {
  params: Promise<{ locale: string }>
}

export default async function ResearchPage({ params }: PageProps) {
  const { locale } = await params

  const researchItems = [
    {
      title: 'Impact of Remote Learning on Student Outcomes',
      date: 'Published: March 2024',
      description:
        'A comprehensive study examining the effectiveness of remote learning models and their long-term impact on student achievement.',
      type: 'Research Paper',
    },
    {
      title: 'Community Health Worker Effectiveness Study',
      date: 'Published: February 2024',
      description:
        'Evaluating the role of community health workers in improving health outcomes in rural areas.',
      type: 'Research Paper',
    },
    {
      title: 'Annual Impact Report 2023',
      date: 'Published: January 2024',
      description:
        'Comprehensive report detailing our organization&apos;s achievements, challenges, and plans for the coming year.',
      type: 'Report',
    },
    {
      title: 'Women Entrepreneurs: Barriers & Opportunities',
      date: 'Published: December 2023',
      description:
        'An in-depth analysis of the obstacles women face in entrepreneurship and evidence-based solutions.',
      type: 'Research Paper',
    },
    {
      title: 'Climate Resilience Policy Brief',
      date: 'Published: November 2023',
      description:
        'Policy recommendations for building climate-resilient communities and supporting vulnerable populations.',
      type: 'Policy Brief',
    },
    {
      title: 'Digital Divide: Access and Affordability',
      date: 'Published: October 2023',
      description:
        'Examining the digital divide in developing nations and strategies for inclusive technology access.',
      type: 'Research Paper',
    },
  ]

  return (
    <main>
      <Navbar locale={locale} />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Evidence & Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Our research drives innovation and informs policy recommendations for
            greater impact.
          </p>
        </div>
      </section>

      {/* Research Items */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchItems.map((item, index) => (
              <Card key={index}>
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-bold text-secondary uppercase tracking-widest">
                    {item.type}
                  </span>
                  <span className="text-xs text-gray-500">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                <a
                  href="#"
                  className="inline-block mt-4 text-primary font-semibold hover:opacity-70 transition-opacity"
                >
                  Read More →
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  )
}
