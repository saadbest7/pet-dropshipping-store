'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col overflow-hidden">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4 flex-1 flex flex-col">
        <Link href={`/products/${product.id}`} className="flex-1">
          <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
        </Link>
        <p className="text-gray-600 mb-1">${product.price.toFixed(2)}</p>
        <p className="text-yellow-500 mb-4">{'\u2605'.repeat(5)}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-auto bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
