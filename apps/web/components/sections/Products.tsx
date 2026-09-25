"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/cards/ProductCard";
import { getProducts } from "@/lib/api-client";

type Product = {
  id: number;
  name: string;
  description: string;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts()
      .then((data: Product[]) => {
        setProducts(data);
      })
      .catch(() => {
        setError("Products load nahi ho paaye. Backend check karo.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section id="products" className="px-8 py-20">
      <h2 className="text-3xl font-bold">AI Products</h2>

      <p className="mt-3 text-gray-400">
        Reusable AI tools and solutions for businesses.
      </p>

      {loading && <p className="mt-8 text-gray-400">Loading products...</p>}

      {error && <p className="mt-8 text-red-400">{error}</p>}

      {!loading && !error && products.length === 0 && (
        <p className="mt-8 text-gray-400">Abhi koi product available nahi hai.</p>
      )}

      {!loading && !error && products.length > 0 && (
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.name}
              description={product.description}
            />
          ))}
        </div>
      )}
    </section>
  );
}