'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'
import { getCart } from '@/lib/cart'


type CartItem = {
  id: string | number
  name: string
  price: number
  quantity: number
}

export default function CheckoutPage() {
useEffect(() => {
  const items = getCart()
  setCartItems(items)
}, [])


  const router = useRouter()
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('cart')
    if (stored) setCartItems(JSON.parse(stored))
  }, [])

  const handleCheckout = async () => {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
    const user = (await supabase.auth.getUser()).data.user
    if (!user) {
      return router.push('/login')
    }

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

    // Store order in Supabase
    const { data: order } = await supabase
      .from('orders')
      .insert({ user_id: user.id, total_amount: total, status: 'pending' })
      .select()
      .single()

    if (order) {
      for (const item of cartItems) {
        await supabase.from('order_items').insert({
          order_id: order.id,
          product_id: item.id,
          quantity: item.quantity,
          unit_price: item.price,
        })
      }
      localStorage.removeItem('cart')
      router.push('/success')
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between border-b py-2">
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
              </div>
              <p>${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
          <button
            onClick={handleCheckout}
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Confirm & Pay
          </button>
        </div>
      )}
    </div>
  )
}
