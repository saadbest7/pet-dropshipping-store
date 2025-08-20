import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center md:text-left">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
