import { notFound } from "next/navigation";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Truck, Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";
import AddToCartButton from "@/components/add-to-cart-button";
import ProductReviews from "@/components/product-reviews";
import RelatedProducts from "@/components/related-products";
import AgeVerificationModal from "@/components/age-verification-modal";
import { getProductById } from "@/lib/products";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <AgeVerificationModal />

      <div className="container px-4 py-8 md:px-6 md:py-12">
        <Link
          href="/products"
          className="flex items-center text-sm mb-6 hover:underline"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
            <Image
              src={product.image || "/placeholder.svg?height=600&width=600"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col">
            <div className="mb-4">
              <Badge variant="outline" className="mb-2">
                {product.category}
              </Badge>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < product.rating
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-2xl font-bold">
                NPR {product.price.toLocaleString()}
              </p>
              {product.oldPrice && (
                <p className="text-sm text-muted-foreground line-through">
                  NPR {product.oldPrice.toLocaleString()}
                </p>
              )}
            </div>

            <div className="mb-6">
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-2">Volume</h3>
              <div className="flex gap-2">
                {["750ml", "1L", "1.5L"].map((size) => (
                  <Button
                    key={size}
                    variant={size === product.size ? "default" : "outline"}
                    size="sm"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon">
                  -
                </Button>
                <span className="w-12 text-center">1</span>
                <Button variant="outline" size="icon">
                  +
                </Button>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <AddToCartButton product={product} />
              <Button variant="outline">Add to Wishlist</Button>
            </div>

            <div className="border-t pt-6 space-y-4">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-muted-foreground" />
                <span>Free delivery within Kathmandu Valley</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-muted-foreground" />
                <span>Secure payment and authentic products guaranteed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Tabs defaultValue="description">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-6">
              <div className="prose max-w-none">
                <p>{product.fullDescription}</p>
              </div>
            </TabsContent>
            <TabsContent value="details" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Brand</span>
                    <span>{product.brand}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Country</span>
                    <span>{product.country}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Volume</span>
                    <span>{product.size}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Alcohol Content</span>
                    <span>{product.alcoholContent}%</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Type</span>
                    <span>{product.type}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Age</span>
                    <span>{product.age || "N/A"}</span>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-6">
              <ProductReviews productId={product.id} />
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <RelatedProducts
            category={product.category}
            currentProductId={product.id}
          />
        </div>
      </div>
    </>
  );
}
