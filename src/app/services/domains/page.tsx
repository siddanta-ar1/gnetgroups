'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import { createClient } from '@supabase/supabase-js'
import { Globe, Server } from 'lucide-react'

export default function DomainHostingPage() {
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
    const fullMessage = `Name: ${form.name}\nEmail: ${form.email}\nMessage:\n${form.message}`

    const { error } = await supabase.from('service_requests').insert({
      type: 'domain',
      message: fullMessage,
    })

    if (error) {
      toast.error('Failed to send request. Please try again.')
      console.error(error)
    } else {
      toast.success('Inquiry sent successfully!')
      setForm({ name: '', email: '', message: '' })
    }
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-10">
      {/* Intro */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-3">Domain & Hosting</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We provide secure, reliable, and fast domain registration and hosting services to get your business online.
        </p>
      </section>

      {/* Features */}
      <section className="grid sm:grid-cols-2 gap-8">
        <div className="p-6 border rounded shadow hover:shadow-md transition">
          <Globe className="w-8 h-8 text-blue-600 mb-3 mx-auto" />
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Domain Registration</h2>
          <p className="text-gray-600 mb-4">
            Choose from a wide range of domain extensions and register your preferred domain with ease.
          </p>
          <Button variant="outline" className="w-full">Register a Domain</Button>
        </div>

        <div className="p-6 border rounded shadow hover:shadow-md transition">
          <Server className="w-8 h-8 text-blue-600 mb-3 mx-auto" />
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Web Hosting</h2>
          <p className="text-gray-600 mb-4">
            Enjoy high-speed and secure hosting solutions, backed by 24/7 support and 99.9% uptime guarantee.
          </p>
          <Button variant="outline" className="w-full">Explore Hosting Plans</Button>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="bg-white p-6 shadow rounded-lg space-y-4 mt-10">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">
          Request Domain/Hosting Support
        </h2>
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
            placeholder="What domain or hosting service do you need?"
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
