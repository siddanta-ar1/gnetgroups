
import Link from 'next/link'

export default function Overview(){
  return (
          <section>
  <h2 className="text-2xl font-semibold mb-8 text-center">Our Services</h2>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* Card 1 */}
    <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
      <div className="mb-4">
        {/* Replace with your icon */}
        <svg
          className="w-12 h-12 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M3 7h18M3 12h18M3 17h18" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-2">Retail & Wholesale E-Commerce</h3>
      <p className="text-gray-600">
        Shop from thousands of quality products or get wholesale pricing for your business.
      </p>
      <Link
        href="/products"
        className="text-blue-600 mt-4 inline-block hover:underline"
      >
        Learn More →
      </Link>
    </div>

    {/* Card 2 */}
    <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
      <div className="mb-4">
        <svg
          className="w-12 h-12 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-2">Domain & Hosting Services</h3>
      <p className="text-gray-600">
        Register your domain and enjoy secure, fast web hosting solutions.
      </p>
      <Link
        href="/services/domains"
        className="text-blue-600 mt-4 inline-block hover:underline"
      >
        Learn More →
      </Link>
    </div>

    {/* Card 3 */}
    <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
      <div className="mb-4">
        <svg
          className="w-12 h-12 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M3 3h18v18H3z" />
          <path d="M9 9h6v6H9z" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-2">IT Consultancy</h3>
      <p className="text-gray-600">
        Expert advice and solutions to grow your business digitally.
      </p>
      <Link
        href="/services/it"
        className="text-blue-600 mt-4 inline-block hover:underline"
      >
        Learn More →
      </Link>
    </div>

    {/* Optional Card 4 */}
    <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
      <div className="mb-4">
        <svg
          className="w-12 h-12 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M4 4h16v16H4z" />
          <path d="M4 8h16M8 4v16" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-2">Business Setup & Essentials</h3>
      <p className="text-gray-600">
        Complete business setup support and supply of essential materials.
      </p>
      <Link
        href="/services/business-setup"
        className="text-blue-600 mt-4 inline-block hover:underline"
      >
        Learn More →
      </Link>
    </div>
  </div>
</section>
  )
}

