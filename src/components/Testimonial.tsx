'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Jane Smith',
    role: 'Founder, TechNova Inc.',
    message: 'GnetGroup transformed how we do business online. From hosting to product sourcing, everything just works.',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww',
  },
  {
    name: 'David Johnson',
    role: 'CEO, NorthCommerce',
    message: 'Fast, reliable, and expert IT consultancy! We loved working with the GnetGroup team.',
    image: 'https://images.unsplash.com/photo-1615109398623-88346a601842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fHww',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          className="text-2xl font-bold mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={256}
                  height={256}
                  className="w-64 h-64 rounded-full object-cover border"
                />
              </div>
              <p className="text-gray-700 italic mb-3">&quot;{t.message}&quot;</p>
              <div className="flex justify-center gap-1 text-yellow-400 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" stroke="none" />
                ))}
              </div>
              <p className="text-sm font-medium">{t.name}</p>
              <p className="text-xs text-gray-500">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
