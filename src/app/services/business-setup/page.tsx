'use client'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { useState } from 'react'
import { Briefcase, Building2 } from 'lucide-react'
import { createClient } from '@supabase/supabase-js'

export default function BusinessSetupPage() {
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

    const { error } = await supabase.from('sersvice_requests').insert({
      type: 'other', // 'domain', 'it', or 'other' (as per schema)
      message: fullMessage,
    })

    if (error) {
      toast.error('Failed to send request. Please try again.')
      console.error('Supabase insert error:', error)
    } else {
      toast.success('Quote request sent!')
      setForm({ name: '', email: '', message: '' })
    }
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
      {/* Hero */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-blue-700">Business Setup Services</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          We help you set up your business from scratch—registration, legal compliance, and branding.
        </p>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-2 gap-10 text-center">
        <div className="p-6 rounded-lg border shadow hover:shadow-md transition">
          <Briefcase className="w-10 h-10 text-blue-600 mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-1">Company Registration</h3>
          <p className="text-gray-600">We handle official registration and government formalities.</p>
        </div>
        <div className="p-6 rounded-lg border shadow hover:shadow-md transition">
          <Building2 className="w-10 h-10 text-blue-600 mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-1">Office & Branding Setup</h3>
          <p className="text-gray-600">From logo to location setup, we manage the essentials.</p>
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="bg-white p-6 shadow rounded-lg space-y-4">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Request a Quote</h2>
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
            placeholder="Tell us your requirements"
            value={form.message}
            onChange={handleChange}
            rows={5}
            required
          />
          <Button type="submit" className="w-full">Send Request</Button>
        </form>
      </section>
    </main>
  )
}
