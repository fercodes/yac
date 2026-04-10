import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Button from '@/components/button'

interface PageProps {
  params: Promise<{ locale: string }>
}

export default async function ActPage({ params }: PageProps) {
  const { locale } = await params

  const actions = [
    {
      title: 'Make a Donation',
      description: 'Support our mission with a financial contribution',
      icon: '💝',
      details: [
        'One-time or recurring donations',
        'Tax-deductible contributions',
        'Corporate matching available',
      ],
    },
    {
      title: 'Volunteer Your Time',
      description: 'Contribute your skills and expertise',
      icon: '🤝',
      details: [
        'Field work opportunities',
        'Remote volunteering',
        'Skills-based assignments',
      ],
    },
    {
      title: 'Partner With Us',
      description: 'Collaborate on impactful initiatives',
      icon: '🌍',
      details: [
        'Corporate partnerships',
        'Government collaborations',
        'International networks',
      ],
    },
    {
      title: 'Advocate for Change',
      description: 'Help amplify our message',
      icon: '📢',
      details: [
        'Share our stories',
        'Attend events',
        'Support policy initiatives',
      ],
    },
    {
      title: 'Join Our Board',
      description: 'Guide our organization&apos;s future',
      icon: '🎯',
      details: [
        'Strategic leadership',
        'Board meetings quarterly',
        'Committee participation',
      ],
    },
    {
      title: 'Intern With Us',
      description: 'Gain experience while making impact',
      icon: '📚',
      details: [
        'Structured programs',
        'Mentorship included',
        'Flexible placements',
      ],
    },
  ]

  return (
    <main>
      <Navbar locale={locale} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-900 to-navy-800 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Join Us in Making a Difference
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            There are many ways to be part of our mission to create meaningful
            social change. Find the opportunity that fits you best.
          </p>
        </div>
      </section>

      {/* Actions Grid */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {actions.map((action, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-light rounded-lg p-8 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="text-5xl mb-4">{action.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {action.title}
                </h3>
                <p className="text-gray-600 mb-4">{action.description}</p>
                <ul className="space-y-2 mb-6">
                  {action.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-primary font-bold">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-light py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Get in touch with our team to learn more about opportunities that
            match your interests and expertise.
          </p>
          <Button size="lg" variant="primary">
            Contact Us Today
          </Button>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  )
}
