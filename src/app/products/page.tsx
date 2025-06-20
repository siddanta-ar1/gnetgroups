'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Input } from '@/components/ui/input' // assuming you installed shadcn input

interface Product {
  id: number
  name: string
  price: number
  image_url: string
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      )
      const { data } = await supabase.from('products').select('*')
      setProducts(data || [])
    }
    fetchProducts()
  }, [])

  // Filter products by name
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="py-8 px-4 max-w-7xl mx-auto">
      <div className="mb-8 max-w-full flex justify-center">
        <div className="relative w-full max-w-lg">
          <Input
        type="text"
        placeholder="🔍 Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pl-10 pr-4 py-3 rounded-xl border-2 border-blue-300 focus:border-blue-500 transition-all shadow-sm focus:shadow-lg bg-white text-gray-800 placeholder-gray-400"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 pointer-events-none">
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
          <path d="M20 20L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="block bg-white shadow rounded-md p-4"
            >
              <Image
                src={product.image_url}
                alt={product.name}
                width={300}
                height={200}
                className="rounded-md w-full h-48 object-cover mb-3"
              />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-blue-600">${product.price}</p>
            </Link>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </section>
  )
}
