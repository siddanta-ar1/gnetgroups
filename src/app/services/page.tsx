'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

const services = [
  {
    title: 'Domain & Hosting',
    description:
      'Register your domain and host your website with lightning-fast, reliable servers.',
    link: '/services/domains',
  },
  {
    title: 'IT Consultancy',
    description:
      'Expert guidance for IT infrastructure, software solutions, and digital transformation.',
    link: '/services/it',
  },
  {
    title: 'Business Setup',
    description:
      'Launch your company with legal registration, branding, and operational support.',
    link: '/services/business-setup',
  },
]

export default function ServicesPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-3">Our Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We provide a full range of digital services to empower your business from domain setup to full IT consulting and beyond.
        </p>
      </section>

      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-gray-100 p-6 rounded-lg shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-2">{service.title}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <Button asChild>
              <Link href={service.link}>Learn More</Link>
            </Button>
          </div>
        ))}
      </section>
    </main>
  )
}
