'use client';

import Image from 'next/image';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface Props {
  params: { id: string };
}

export default function ProductDetail({ params }: Props) {
  const product = products.find((p) => p.id === params.id);
  const { addToCart } = useCart();

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 flex flex-col md:flex-row gap-8">
      <Image
        src={product.image}
        alt={product.title}
        width={600}
        height={400}
        className="rounded-lg shadow md:w-1/2 object-cover"
      />
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-xl font-semibold mb-6">${product.price.toFixed(2)}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
