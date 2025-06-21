import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-gray-600">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-bold text-blue-600 mb-2">GnetGroups.com</h2>
          <p>Empowering businesses with e-commerce, hosting, and IT solutions.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/services/domains">Domain Services</Link></li>
            <li><Link href="/services/it">IT Consultancy</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-2">Legal</h3>
          <ul className="space-y-1">
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Contact */}
         <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="text-sm">Email: info@gnetgroups.com</p>
          <p className="text-sm">Phone: +1 (800) 123-4567</p>
          <p className="text-sm">Address: Toronto, Canada</p>
        </div>
        {/** Social Media */}
                <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4 text-blue-600 text-xl">
            <Link href="#" aria-label="Facebook"><FaFacebookF /></Link>
            <Link href="#" aria-label="Twitter"><FaTwitter /></Link>
            <Link href="#" aria-label="LinkedIn"><FaLinkedinIn /></Link>
            <Link href="#" aria-label="Instagram"><FaInstagram /></Link>
          </div>
        </div>


      <div className="text-center text-xs text-gray-500 mt-6">
        © {new Date().getFullYear()} GnetGroups.com. All rights reserved.
      </div>
      </div>
    </footer>
  )
}
