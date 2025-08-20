'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { items, clearCart } = useCart();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <p className="mb-4">Your cart is empty.</p>
        <Link href="/products" className="text-blue-600 hover:underline">
          Browse products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-center md:text-left">Your Cart</h1>
      <ul className="space-y-4 mb-6">
        {items.map((item) => (
          <li key={item.id} className="flex items-center space-x-4 bg-white p-4 rounded shadow">
            <Image src={item.image} alt={item.title} width={80} height={80} className="rounded" />
            <div className="flex-1">
              <p className="font-medium">{item.title}</p>
              <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
            </div>
            <p>${(item.price * item.quantity).toFixed(2)}</p>
          </li>
        ))}
      </ul>
      <p className="text-xl font-semibold mb-6 text-right md:text-left">Total: ${total.toFixed(2)}</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button onClick={clearCart} className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
          Clear Cart
        </button>
        <Link href="/checkout" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-center">
          Checkout
        </Link>
      </div>
    </div>
  );
}
