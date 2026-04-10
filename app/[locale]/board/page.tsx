import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Card from '@/components/card'
import ImagePlaceholder from '@/components/image-placeholder'

interface PageProps {
  params: Promise<{ locale: string }>
}

export default async function BoardPage({ params }: PageProps) {
  const { locale } = await params

  const boardMembers = [
    {
      name: 'Jane Doe',
      role: 'Executive Director',
      bio: 'Jane brings 20+ years of nonprofit leadership experience and a passion for community-driven solutions.',
    },
    {
      name: 'John Smith',
      role: 'Board Chair',
      bio: 'John is a seasoned social entrepreneur with expertise in scaling impact-driven initiatives.',
    },
    {
      name: 'Sarah Johnson',
      role: 'Director of Programs',
      bio: 'Sarah leads our project initiatives across multiple regions with a focus on sustainable outcomes.',
    },
    {
      name: 'Michael Chen',
      role: 'Chief Financial Officer',
      bio: 'Michael ensures fiscal responsibility and strategic resource allocation across all programs.',
    },
    {
      name: 'Dr. Maria Rodriguez',
      role: 'Head of Research',
      bio: 'Dr. Rodriguez directs our research initiatives and evidence-based program development.',
    },
    {
      name: 'David Wilson',
      role: 'Community Engagement Lead',
      bio: 'David builds strategic partnerships and ensures community voices shape our work.',
    },
  ]

  return (
    <main>
      <Navbar locale={locale} />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Board</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Meet the visionary leaders guiding our organization toward greater impact.
          </p>
        </div>
      </section>

      {/* Board Members Grid */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <Card key={index}>
                <ImagePlaceholder aspectRatio="square" alt={member.name} />
                <h3 className="text-xl font-bold text-primary mt-6">
                  {member.name}
                </h3>
                <p className="text-secondary font-semibold text-sm mt-1">
                  {member.role}
                </p>
                <p className="text-gray-600 mt-4 text-sm">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  )
}
