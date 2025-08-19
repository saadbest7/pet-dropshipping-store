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
    <div className="max-w-2xl mx-auto">
      <Image src={product.image} alt={product.title} width={600} height={400} className="rounded mb-4 object-cover" />
      <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-xl font-semibold mb-6">${product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
