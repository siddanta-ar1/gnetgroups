import Image from 'next/image'
import Link from 'next/link'

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: 'Modern Office Chair',
      price: '$149.00',
      image:
        'https://media.istockphoto.com/id/185076940/photo/3d-modern-chair-on-white-wall.webp?a=1&b=1&s=612x612&w=0&k=20&c=2dgQs4-XCVoqRHE5Z2xYOwrx2l4Ls2YfnbMNO4rcZH4=',
    },
    {
      id: 2,
      name: 'Desk Lamp',
      price: '$49.00',
      image:
        'https://images.unsplash.com/photo-1601642964568-1917224f4e4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzayUyMGxhbXB8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 3,
      name: 'Wireless Keyboard',
      price: '$89.00',
      image:
        'https://media.istockphoto.com/id/1172999500/photo/modern-clean-workspace-mockup-with-blank-screen-desktop-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=2mMO8QS3S9P9zYx4vkFtEExxMk2oNzwRGfbYymAE0LM=',
    },
    {
      id: 4,
      name: 'Minimalist Desk',
      price: '$299.00',
      image:
        'https://media.istockphoto.com/id/811843986/photo/modern-business-office-space-with-lobby.webp?a=1&b=1&s=612x612&w=0&k=20&c=NJL-Sam__ZuYLv91HvGKnUVXiNJ0W46asqOiu6T2EvY=',
    },
  ]

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-8 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-4"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={400}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
            <p className="text-blue-600 font-medium mb-2">{product.price}</p>
            <Link
              href={`/products/${product.id}`}
              className="inline-block text-sm text-blue-600 hover:underline"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
