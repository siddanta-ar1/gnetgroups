'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Truck, Briefcase, ShoppingCart } from 'lucide-react'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <ShoppingCart size={32} className="text-blue-600" />,
      title: 'All-in-One E-Commerce',
      desc: 'Wholesale + retail with tailored pricing and fast checkout.',
    },
    {
      icon: <Truck size={32} className="text-blue-600" />,
      title: 'Fast Delivery',
      desc: 'Efficient shipping across US and Canada.',
    },
    {
      icon: <ShieldCheck size={32} className="text-blue-600" />,
      title: 'Secure & Trusted',
      desc: 'Powered by Supabase, Stripe, and modern infrastructure.',
    },
    {
      icon: <Briefcase size={32} className="text-blue-600" />,
      title: 'IT & Business Experts',
      desc: 'Get consulting and setup support from real professionals.',
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-2xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose GnetGroup?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-all border"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
