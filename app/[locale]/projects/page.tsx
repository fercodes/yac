import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Card from '@/components/card'
import ImagePlaceholder from '@/components/image-placeholder'

interface PageProps {
  params: Promise<{ locale: string }>
}

export default async function ProjectsPage({ params }: PageProps) {
  const { locale } = await params

  const projects = [
    {
      title: 'Education Access Initiative',
      category: 'Education',
      description:
        'Providing educational resources and scholarships to underprivileged students across rural communities.',
    },
    {
      title: 'Healthcare Capacity Building',
      category: 'Health',
      description:
        'Building sustainable healthcare infrastructure and training medical professionals in underserved regions.',
    },
    {
      title: 'Women Entrepreneurship Program',
      category: 'Economic Empowerment',
      description:
        'Supporting women entrepreneurs with funding, mentorship, and market access.',
    },
    {
      title: 'Climate & Sustainability',
      category: 'Environment',
      description:
        'Implementing renewable energy and sustainable agriculture projects in climate-vulnerable areas.',
    },
    {
      title: 'Digital Skills Training',
      category: 'Technology',
      description:
        'Training youth in digital literacy and coding to open new economic opportunities.',
    },
    {
      title: 'Clean Water & Sanitation',
      category: 'Health',
      description:
        'Constructing water and sanitation facilities for communities lacking access to clean water.',
    },
  ]

  return (
    <main>
      <Navbar locale={locale} />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Transforming lives through targeted interventions across education,
            health, and economic sectors.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index}>
                <ImagePlaceholder aspectRatio="4:3" alt={project.title} />
                <span className="text-xs font-bold text-secondary uppercase tracking-widest mt-4">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-primary mt-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-3">{project.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer locale={locale} />
    </main>
  )
}
