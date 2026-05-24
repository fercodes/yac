import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

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
            About us
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            We are the generation that refuses to accept public corruption as an inevitable feature of public life.
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
                While the world addresses symptoms, we target the root cause.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                YAC Foundation is the first youth-led international organization to treat public corruption as what the evidence shows it to be: the structural barrier behind slow development, weakened institutions, and unrealized potential across Latin America and beyond.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We were founded in 2024 by Nicolas Crow Muñoz and youth advocates from across Latin America who identified a gap that was not being adequately addressed: the direct, measurable connection between public corruption and every major development challenge facing our region and our generation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The development community discusses climate. The education community discusses access. The health community discusses coverage. But the structural force that undermines progress across all of these areas — public corruption — has not received the serious, sustained attention it deserves.
              </p>
              <p className="text-gray-600 leading-relaxed">
                YAC Foundation exists to change that. We bring together young people from every background, ideology, and country. We do not ask where you stand politically. We ask whether you believe that public resources should reach the people they are meant to serve. That public institutions should be accountable to the citizens they represent. That the next generation of leaders should be held — and hold themselves — to a higher standard.
              </p>
              <p className="text-gray-600 leading-relaxed">
                That conviction is what unites us.
              </p>
               <p className="text-gray-600 leading-relaxed">
                Through rigorous research, youth-generated data, and principled engagement with international institutions, we are building the evidence base that makes public corruption impossible to ignore — and the network of leaders committed to ending it.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today we operate across 12 countries with 200+ fellows producing research and contributing to accountability processes in their communities. We are present at the United Nations ECOSOC Youth Forum and working toward ECOSOC consultative status.
              </p>
            </div>
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md">
              <Image
                src="/images/photo16.jpg"
                alt="About us"
                width="500"
                height="600"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-light py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Our values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: 'Integrity as a standard, not an aspiration.',
                description: 'We hold ourselves to the same principles we advocate for in public institutions. Our credibility as an organization depends on it.',
              },
              {
                title: 'Evidence as our instrument.',
                description: 'Our engagement with governments and international organizations is grounded in data, research, and rigorous methodology. We build arguments that cannot be dismissed.',
              },
              {
                title: 'Youth as a serious voice.',
                description: 'We engage at the highest levels of multilateral and national policy not as observers, but as contributors — with evidence, proposals, and the commitment to follow through.',
              },
              {
                title: 'Unity beyond ideology.',
                description: 'The fight against public corruption belongs to everyone. We bring together young people from across the political spectrum because integrity in public life is not a left or right issue — it is a generational one.',
              },
              {
                title: 'Local knowledge, global relevance.',
                description: 'Our fellows are embedded in the communities they research. The data reflects lived reality — and that is what gives it its authority.',
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
