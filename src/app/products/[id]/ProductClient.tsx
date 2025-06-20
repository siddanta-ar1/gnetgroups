'use client'

import Image from 'next/image'
import { addToCart } from '@/lib/cart'
import { toast } from 'sonner'
import Link from 'next/link'

interface Product {
  id: string | number
  name: string
  description: string
  price: number
  image_url: string
  is_wholesale: boolean
  wholesale_price?: number
}

export default function ProductClient({ product }: { product: Product }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="relative w-full h-64 md:h-96 rounded-md overflow-hidden">
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-2xl font-bold mb-3">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>

          {product.is_wholesale ? (
            <div className="space-y-2">
              <p><strong>Retail Price:</strong> ${product.price}</p>
              <p className="text-blue-600 font-semibold">
                <strong>Wholesale Price:</strong> ${product.wholesale_price}
              </p>
              <Link
                href="/services/domains"
                className="inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
              >
                Request a Quote
              </Link>
            </div>
          ) : (
            <div>
              <p className="text-blue-600 font-semibold text-xl mb-4">${product.price}</p>
              <button
                onClick={() => {
                  addToCart({
                    id: String(product.id),
                    name: product.name,
                    price: product.price,
                    image_url: product.image_url,
                    quantity: 1
                  })
                  toast.success('Added to cart!')
                }}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
