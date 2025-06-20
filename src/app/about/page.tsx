// src/app/about/page.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">About GnetGroup</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Empowering businesses with innovative digital solutions – from e-commerce to IT consulting.
        </p>
      </section>

      {/* Who We Are */}
      <section className="md:flex items-center gap-10">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold">Who We Are</h2>
          <p className="text-gray-600">
            GnetGroup is a multi-service platform serving clients across the US and Canada.
            We specialize in providing reliable and scalable solutions in e-commerce, domain hosting,
            business setup, and IT consultancy.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/gnet.png"
            alt="GnetGroup logo"
            width={400}
            height={300}
            className="rounded-md mx-auto"
          />
        </div>
      </section>

      {/* What We Do */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            { title: 'E-commerce', desc: 'Retail & wholesale sales through a secure online platform.' },
            { title: 'Domain & Hosting', desc: 'Domain registration, hosting plans, and support.' },
            { title: 'IT Consultancy', desc: 'Expert advice and support for your business IT needs.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white shadow p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Why Choose GnetGroup?</h2>
        <ul className="text-gray-700 space-y-2">
          <li>✅ Fast, secure, and scalable platforms</li>
          <li>✅ Personalized service & consultation</li>
          <li>✅ Transparent pricing and honest support</li>
          <li>✅ Trusted by startups and SMEs across North America</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <p className="text-lg font-medium mb-4">Ready to grow with GnetGroup?</p>
        <Link href="/contact">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Contact Us
          </button>
        </Link>
      </section>
    </main>
  )
}
