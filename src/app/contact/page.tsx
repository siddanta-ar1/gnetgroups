'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { error } = await supabase.from('contact_requests').insert([
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
    ])

    if (error) {
      toast.error('Failed to send message.')
    } else {
      toast.success('Message sent successfully!')
      setForm({ name: '', email: '', message: '' })
    }
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-12">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-3">Contact Us</h1>
        <p className="text-gray-600">Have questions? Reach out to us anytime.</p>
      </section>

      {/* Form + Info */}
      <section className="grid md:grid-cols-2 gap-8">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 shadow rounded-lg">
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
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            required
          />
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>

        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-blue-700">Office Address</h2>
            <p className="text-gray-700">
              GnetGroup HQ<br />
              1234 Innovation Way<br />
              Toronto, ON, Canada
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-blue-700">Email</h2>
            <p className="text-gray-700">support@gnetgroup.com</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-blue-700">Phone</h2>
            <p className="text-gray-700">+1 (800) 123-4567</p>
          </div>
        </div>
      </section>

      {/* Map */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-center">Our Location</h2>
        <div className="w-full h-64 md:h-96 rounded-md overflow-hidden shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1589722763926!2d85.3198734!3d27.7089554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1913ff46ef9f%3A0xfbd3e203587aaedd!2sKathmandu!5e0!3m2!1sen!2snp!4v1718788888888!5m2!1sen!2snp"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>What services does GnetGroup offer?</AccordionTrigger>
            <AccordionContent>
              We offer web development, e-commerce solutions, domain & hosting, IT consulting, and more.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How can I request a quote?</AccordionTrigger>
            <AccordionContent>
              Navigate to our services page and click on (Request a Quote) or reach out using this contact form.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Where is your office located?</AccordionTrigger>
            <AccordionContent>
              Our main office is located in Kathmandu, Nepal. We also operate remotely across several countries.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  )
}
