import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';

export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`} className="bg-white shadow rounded p-4 hover:shadow-lg transition block">
            <Image src={product.image} alt={product.title} width={400} height={300} className="rounded mb-2 object-cover" />
            <h3 className="text-lg font-medium">{product.title}</h3>
            <p className="text-sm text-gray-500">${product.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
