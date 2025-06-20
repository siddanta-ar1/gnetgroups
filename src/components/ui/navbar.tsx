'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Menu, X, ChevronDown, ChevronUp, ShoppingCart,
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { getCartCount } from '@/lib/cart'
import { supabase } from '@/lib/supabaseClient'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [user, setUser] = useState<import('@supabase/supabase-js').User | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    setCartCount(getCartCount())
  }, [])

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null)
    })

    return () => {
      listener?.subscription.unsubscribe()
    }
  }, [])

  const navLinkStyle = (href: string) =>
    `text-sm font-medium hover:text-blue-600 ${
      pathname === href ? 'text-blue-600 underline' : 'text-gray-700'
    }`

  return (
    <header className="w-full backdrop-blur-md bg-white/80 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-blue-600 border-2 border-blue-100 rounded-xl px-3 py-1 shadow-sm hover:shadow-md transition"
        >
          <Image
            src="/gnet.png"
            alt="GnetGroup Logo"
            width={40}
            height={40}
            className="rounded-full border border-blue-200 bg-white"
            priority
          />
          GnetGroup
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={navLinkStyle(item.href) + ' px-4 py-2 rounded-lg hover:bg-blue-50 transition'}
            >
              {item.label}
            </Link>
          ))}

          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600">
              Services <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52">
              <DropdownMenuItem asChild><Link href="/services/domains">Domain & Hosting</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href="/services/it">IT Consultancy</Link></DropdownMenuItem>
              <DropdownMenuItem asChild><Link href="/services/business-setup">Business Setup</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/cart" className="relative group">
            <ShoppingCart className="w-5 h-5 text-gray-700 hover:text-blue-600" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {user ? (
            <>
              <span className="ml-2 text-sm text-gray-700">Hi, {user.email}</span>
              <Button variant="outline" size="sm" className="ml-2" onClick={async () => {
                await supabase.auth.signOut()
                setUser(null)
              }}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button variant="default" size="sm" className="ml-2" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button variant="outline" size="sm" className="ml-2" asChild>
                <Link href="/register">Register</Link>
              </Button>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 pb-6 pt-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-gray-700 text-sm font-medium py-2"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {/* Collapsible Services */}
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="flex justify-between items-center w-full text-sm font-medium text-gray-700 py-2"
          >
            Services
            {mobileServicesOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          {mobileServicesOpen && (
            <div className="pl-4 flex flex-col space-y-2">
              <Link href="/services/domains" className="text-sm text-gray-700" onClick={() => setOpen(false)}>
                Domain & Hosting
              </Link>
              <Link href="/services/it" className="text-sm text-gray-700" onClick={() => setOpen(false)}>
                IT Consultancy
              </Link>
              <Link href="/services/business-setup" className="text-sm text-gray-700" onClick={() => setOpen(false)}>
                Business Setup
              </Link>
            </div>
          )}

          <div className="pt-4 flex flex-col space-y-3">
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-5 h-5 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {user ? (
              <>
                <span className="text-sm text-gray-700">Hi, {user.email}</span>
                <Button variant="outline" size="sm" onClick={async () => {
                  await supabase.auth.signOut()
                  setUser(null)
                  setOpen(false)
                }}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="default" size="sm" className="w-full" asChild>
                  <Link href="/login" onClick={() => setOpen(false)}>Login</Link>
                </Button>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="/register" onClick={() => setOpen(false)}>Register</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
