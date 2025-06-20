import { notFound } from 'next/navigation'
import ProductClient from './ProductClient'
import { createClient } from '@supabase/supabase-js'

export default async function ProductPage({ params }: { params: { id: string } }) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
  const { data: product } = await supabase
    .from('products')
    .select('*')
    .eq('id', params.id)
    .single()

  if (!product) return notFound()

  return <ProductClient product={product} />
}
