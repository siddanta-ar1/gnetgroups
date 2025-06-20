import Testimonials from '@/components/Testimonial'
import FeaturedProducts from '@/components/ui/FeaturedProduct'
import Overview from '@/components/ui/overview'
import WhyChooseUs from '@/components/ui/whyus'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 space-y-20">
      {/* Hero */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-extrabold text-blue-700">
          Your One-Stop Solution for E-Commerce, Hosting & IT Consulting
        </h1>
        <p className="text-lg text-gray-600">
          Empowering businesses across the US & Canada with tailored digital services.
        </p>
        <div className="flex justify-center gap-6">
        <Link href="/products" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Explore Products
        </Link>
         <Link href="/services/it" className="px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition">
            Get a Quote
          </Link>

        </div>
      </section>

      {/* Overview */}
      <Overview/>
      {/* Featured Product */}
      <FeaturedProducts/>
      {/* Why Choose us */}
      <WhyChooseUs/>
      {/** Testimonial */}
      <Testimonials/>
    </main>
  )
}
