import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function Home() {
  return (
    <main>
      <section className="bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">🐾 Pet Dropshipping Store</h1>
            <p className="text-lg text-gray-600 mb-6">Everything your furry friend needs, delivered.</p>
            <Link href="/products" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700">
              Shop Now
            </Link>
          </div>
          <Image
            src="https://placekitten.com/600/400"
            alt="Happy pet"
            width={600}
            height={400}
            className="rounded-lg shadow"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
