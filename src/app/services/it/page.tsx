'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { createClient } from '@supabase/supabase-js'
import { Cpu, ShieldCheck } from 'lucide-react'

export default function ITConsultancyPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const fullMessage = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`

    const { error } = await supabase.from('service_requests').insert({
      type: 'it',
      message: fullMessage,
    })

    if (error) {
      toast.error('Failed to send consultation request. Please try again.')
      console.error(error)
    } else {
      toast.success('Consultation request sent!')
      setForm({ name: '', email: '', message: '' })
    }
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-blue-700">IT Consultancy</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our IT experts help you optimize your tech stack, implement solutions, and drive growth through digital transformation.
        </p>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-2 gap-10 text-center">
        <div className="p-6 border shadow rounded-lg hover:shadow-md transition">
          <Cpu className="w-10 h-10 text-blue-600 mx-auto mb-3" />
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Strategy & Planning</h2>
          <p className="text-gray-600">
            We analyze your business needs and create custom IT roadmaps that align with your goals.
          </p>
        </div>

        <div className="p-6 border shadow rounded-lg hover:shadow-md transition">
          <ShieldCheck className="w-10 h-10 text-blue-600 mx-auto mb-3" />
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Implementation & Security</h2>
          <p className="text-gray-600">
            From software deployment to cyber risk audits, we provide hands-on support every step of the way.
          </p>
        </div>
      </section>

      {/* Consultation Form */}
      <section className="bg-white p-6 shadow rounded-lg space-y-4">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">Request a Consultation</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            placeholder="Describe your needs or challenges"
            value={form.message}
            onChange={handleChange}
            rows={5}
            required
          />
          <Button type="submit" className="w-full">
            Send Request
          </Button>
        </form>
      </section>
    </main>
  )
}
