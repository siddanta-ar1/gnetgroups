'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { toast } from 'sonner'
import Link from 'next/link'


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    setLoading(false)
    if (error) {
      toast.error(error.message)
    } else {
      toast.success('Logged in successfully!')
      setEmail('')
      setPassword('')
      // Redirect to home or dashboard after successful login
      window.location.href = '/'
    }
  }

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
    if (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow space-y-4">
      <form onSubmit={handleLogin} className="space-y-4">
        <h1 className="text-xl font-bold">Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
        <button disabled={loading} className="w-full bg-blue-600 text-white py-2 rounded">
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <p className="text-sm text-right">
        <Link href="/forgot-password" className="text-blue-600 hover:underline">
          Forgot password?
        </Link>
      </p>
      <div className="mt-4 text-center">
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 text-white py-2 rounded flex items-center justify-center gap-2"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M44.5 20H24V28.5H36.9C35.5 33.1 31.2 36 24 36C16.3 36 10 29.7 10 22C10 14.3 16.3 8 24 8C27.3 8 30.1 9.1 32.3 11L38.1 5.2C34.5 2.1 29.7 0 24 0C10.7 0 0 10.7 0 24C0 37.3 10.7 48 24 48C37.3 48 48 37.3 48 24C48 22.3 47.8 21.1 47.5 20H44.5Z"
                fill="#FFC107"
              />
              <path
                d="M6.3 14.7L13.7 20.2C15.7 15.7 19.5 12.5 24 12.5C26.6 12.5 29 13.4 30.9 15L37.1 9.1C33.6 5.9 29 4 24 4C16.3 4 10 10.3 10 18C10 19.3 10.2 20.5 10.5 21.7L6.3 14.7Z"
                fill="#FF3D00"
              />
              <path
                d="M24 44C31.2 44 36.5 39.1 36.9 33.1H24V28.5H44.5C44.8 29.7 45 30.9 45 32C45 39.7 37.3 44 24 44Z"
                fill="#4CAF50"
              />
              <path
                d="M6.3 33.3L13.7 27.8C15.7 32.3 19.5 35.5 24 35.5C29 35.5 33.6 33.6 37.1 30.4L30.9 24.5C29 26.1 26.6 27 24 27C19.5 27 15.7 23.8 13.7 19.3L6.3 33.3Z"
                fill="#1976D2"
              />
            </g>
          </svg>
          Login with Google
        </button>
      </div>
    </div>
  )
}
