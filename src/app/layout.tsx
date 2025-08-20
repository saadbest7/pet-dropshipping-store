import './globals.css'
import Link from 'next/link'
import { CartProvider } from '@/context/CartContext'

export const metadata = {
  title: 'Pet Dropshipping Store',
  description: 'Starter store built with Next.js and Tailwind',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                PetStore
              </Link>
              <div className="flex space-x-6">
                <Link href="/" className="hover:text-blue-600">
                  Home
                </Link>
                <Link href="/products" className="hover:text-blue-600">
                  Products
                </Link>
                <Link href="/cart" className="hover:text-blue-600">
                  Cart
                </Link>
                <Link href="/contact" className="hover:text-blue-600">
                  Contact
                </Link>
              </div>
            </nav>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="bg-gray-100 text-sm text-gray-600">
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <p>&copy; {new Date().getFullYear()} Pet Dropshipping Store</p>
              <div className="flex space-x-4">
                <Link href="/about" className="hover:text-blue-600">
                  About
                </Link>
                <Link href="/privacy" className="hover:text-blue-600">
                  Privacy
                </Link>
                <Link href="/terms" className="hover:text-blue-600">
                  Terms
                </Link>
                <Link href="/contact" className="hover:text-blue-600">
                  Contact
                </Link>
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  )
}
