import { products } from "@/data/products";
import ProductCard from "@/components/cards/ProductCard";

export default function Products() {
  return (
    <section id="products" className="px-8 py-20">
      <h2 className="text-3xl font-bold">AI Products</h2>

      <p className="mt-3 text-gray-400">
        Reusable AI tools and solutions for businesses.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </section>
  );
}