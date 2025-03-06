"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import AddToCartButton from "@/components/add-to-cart-button";
import { getProducts } from "@/lib/products";

export default function RelatedProducts({ category, currentProductId }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        // In a real app, this would fetch from an API
        const result = await getProducts({
          category,
          limit: 4,
          exclude: currentProductId,
        });

        // Handle the array result from getProducts when exclude is provided
        if (Array.isArray(result)) {
          setProducts(result);
        } else if (result && Array.isArray(result.products)) {
          setProducts(result.products);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error("Failed to load related products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, [category, currentProductId]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <div className="relative aspect-square">
                <Skeleton className="absolute inset-0" />
              </div>
              <CardContent className="p-4">
                <Skeleton className="h-4 w-1/2 mb-2" />
                <Skeleton className="h-4 w-1/4" />
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Skeleton className="h-10 w-full" />
              </CardFooter>
            </Card>
          ))}
      </div>
    );
  }

  if (products.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden group">
          <div className="relative aspect-square bg-muted">
            <Link
              href={`/products/${product.id}`}
              className="absolute inset-0 z-10"
            >
              <span className="sr-only">View {product.name}</span>
            </Link>
            <Image
              src={product.image || "/placeholder.svg?height=300&width=300"}
              alt={product.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-medium truncate">{product.name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-bold">
                NPR {product.price.toLocaleString()}
              </span>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <AddToCartButton product={product} />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
