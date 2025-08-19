import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';

export default function Home() {
  return (
    <section className="text-center">
      <div className="py-20 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Pet Store</h1>
        <p className="mb-6">Find everything your pet needs.</p>
        <Link href="/products" className="bg-white text-blue-600 px-4 py-2 rounded">Shop Now</Link>
      </div>
      <h2 className="text-2xl font-semibold mt-12 mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.slice(0, 3).map((product) => (
          <Link key={product.id} href={`/products/${product.id}`} className="bg-white shadow rounded p-4 hover:shadow-lg transition block">
            <Image src={product.image} alt={product.title} width={400} height={300} className="rounded mb-2 object-cover" />
            <h3 className="text-lg font-medium">{product.title}</h3>
            <p className="text-sm text-gray-500">${product.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
