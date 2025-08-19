import './globals.css';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import Link from 'next/link';
import { CartProvider } from '@/context/CartContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pet Dropshipping Store',
  description: 'Online store for pet products',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <header className="bg-white shadow">
            <div className="container mx-auto flex justify-between items-center p-4">
              <Link href="/" className="text-xl font-bold">Pet Store</Link>
              <nav className="space-x-4">
                <Link href="/products">Products</Link>
                <Link href="/cart">Cart</Link>
              </nav>
            </div>
          </header>
          <main className="container mx-auto p-4">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
