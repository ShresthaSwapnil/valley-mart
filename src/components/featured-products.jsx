"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import AddToCartButton from "@/components/add-to-cart-button";
import { getProducts } from "@/lib/products";

export default function FeaturedProducts({ category = "" }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        // In a real app, this would fetch from an API
        const result = await getProducts({
          category,
          featured: true,
          limit: 6,
        });

        // Handle both return types from getProducts
        if (Array.isArray(result)) {
          setProducts(result);
        } else if (result && Array.isArray(result.products)) {
          setProducts(result.products);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error("Failed to load products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, [category]);

  if (loading) {
    return (
      <div className="product-grid">
        {Array(6)
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
    return <p className="text-center py-8">No products found.</p>;
  }

  return (
    <div className="product-grid">
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
              src={product.image || "/placeholder.svg?height=400&width=400"}
              alt={product.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            {product.isNew && (
              <Badge className="absolute top-2 right-2 bg-primary">New</Badge>
            )}
            {product.discount > 0 && (
              <Badge className="absolute top-2 left-2 bg-destructive">
                {product.discount}% OFF
              </Badge>
            )}
          </div>
          <CardContent className="p-4">
            <h3 className="font-medium truncate">{product.name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-bold">
                NPR {product.price.toLocaleString()}
              </span>
              {product.oldPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  NPR {product.oldPrice.toLocaleString()}
                </span>
              )}
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
