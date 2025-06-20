'use client'
import { createClient } from '@supabase/supabase-js'

import { removeFromCart, updateCartQuantity } from '@/lib/cart'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

// Define the CartItem type if not already imported
type CartItem = {
  id: string
  name: string
  price: number
  quantity: number
  image_url: string
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    setCartItems(getCart())
  }, [])

  const handleRemove = (id: string) => {
    removeFromCart(id)
    setCartItems(getCart())
  }

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity)
    setCartItems(getCart())
  }

  const getCart = () => {
  if (typeof window !== 'undefined') {
    const cart = localStorage.getItem('cart')
    return cart ? JSON.parse(cart) : []
  }
  return []
}

const clearCart = () => {
  localStorage.removeItem('cart')
 
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const handlePlaceOrder = async () => {
  const cartItems = getCart() // your custom function to get cart items from localStorage

  if (cartItems.length === 0) return toast.error('Cart is empty')

  const total: number = (cartItems as CartItem[]).reduce(
    (sum: number, item: CartItem) => sum + item.price * item.quantity,
    0
  )

  const {
    data: { user }
  } = await supabase.auth.getUser()

  if (!user) return toast.error('Please log in to place an order')

  // 1. Create order
  const { data: order, error: orderError } = await supabase
    .from('orders')
    .insert({
      user_id: user.id,
      total_amount: total,
      status: 'pending',
    })
    .select()
    .single()

  if (orderError) return toast.error('Failed to create order')

  // 2. Create order_items
  interface Order {
    id: string
    user_id: string
    total_amount: number
    status: string
  }

  interface OrderItem {
    order_id: string
    product_id: string
    quantity: number
    unit_price: number
  }

  const orderItems: OrderItem[] = (cartItems as CartItem[]).map((item: CartItem): OrderItem => ({
    order_id: (order as Order).id,
    product_id: item.id,
    quantity: item.quantity,
    unit_price: item.price,
  }))

  const { error: itemsError } = await supabase.from('order_items').insert(orderItems)

  if (itemsError) return toast.error('Failed to add order items')

  // 3. Clear Cart & Notify
  clearCart() // your helper function to clear localStorage
  toast.success('Order placed successfully!')
}


  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
      <p>Your cart is empty.</p>
      ) : (
      <ul className="space-y-4">
        {cartItems.map(item => (
        <li
          key={item.id}
          className="flex flex-col sm:flex-row items-center gap-4 border-b pb-4"
        >
          <Image
          src={item.image_url}
          alt={item.name}
          width={80}
          height={80}
          className="rounded"
          />
          <div className="flex-1 w-full sm:w-auto text-center sm:text-left">
          <h2 className="font-semibold">{item.name}</h2>
          <p className="text-blue-600">${item.price}</p>
          <input
            type="number"
            min={1}
            value={item.quantity}
            onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
            className="border rounded w-16 p-1 mt-2"
          />
          </div>
          <div className="flex gap-2 mt-2 sm:mt-0">
          <Button
            onClick={handlePlaceOrder}
            className="px-3 py-1 bg-black text-white rounded hover:bg-gray-600 transition-colors duration-200 shadow"
          >
            Place Order
          </Button>
          <button
            onClick={() => handleRemove(item.id)}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200 shadow flex items-center gap-1"
            title="Remove from cart"
          >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            Remove
          </button>
          </div>
        </li>
        ))}
      </ul>
      )}
    </div>
  )
}
