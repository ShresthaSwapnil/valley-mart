"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import AddToCartButton from "@/components/add-to-cart-button";
import { getProducts } from "@/lib/products";

export default function ProductList({
  category = "",
  price = "",
  sort = "featured",
  page = 1,
}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      try {
        // In a real app, this would fetch from an API
        const result = await getProducts({
          category,
          price,
          sort,
          page,
          limit: 12,
        });

        setProducts(result.products);
        setTotalPages(result.totalPages);
      } catch (error) {
        console.error("Failed to load products:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, [category, price, sort, page]);

  if (loading) {
    return (
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(9)
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
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium mb-2">No products found</h3>
        <p className="text-muted-foreground mb-6">
          Try adjusting your filters or search terms.
        </p>
        <Button asChild>
          <Link href="/products">View All Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {totalPages > 1 && (
        <div className="flex justify-center mt-12">
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNum) => (
                <Link
                  key={pageNum}
                  href={`/products?category=${category}&price=${price}&sort=${sort}&page=${pageNum}`}
                >
                  <Button
                    variant={pageNum === page ? "default" : "outline"}
                    size="sm"
                  >
                    {pageNum}
                  </Button>
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
