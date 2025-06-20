// src/lib/cart.ts

export interface CartItem {
  id: string
  name: string
  price: number
  image_url: string
  quantity: number
}

export function getCart(): CartItem[] {
  if (typeof window === 'undefined') return []
  const stored = localStorage.getItem('cart')
  return stored ? JSON.parse(stored) : []
}

export function saveCart(cart: CartItem[]) {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export function addToCart(item: CartItem) {
  const cart = getCart()
  const existing = cart.find(p => p.id === item.id)

  if (existing) {
    existing.quantity += item.quantity
  } else {
    cart.push(item)
  }

  saveCart(cart)
}

export function removeFromCart(id: string) {
  const cart = getCart().filter(item => item.id !== id)
  saveCart(cart)
}

export function updateCartQuantity(id: string, quantity: number) {
  const cart = getCart().map(item =>
    item.id === id ? { ...item, quantity } : item
  )
  saveCart(cart)
}

export function getCartCount(): number {
  return getCart().reduce((total, item) => total + item.quantity, 0)
}
