import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Award, Clock, Shield, Truck } from "lucide-react";
import FeaturedProducts from "@/components/featured-products";
import AgeVerificationModal from "@/components/age-verification-modal";

export default function Home() {
  return (
    <>
      <AgeVerificationModal />

      <section className="hero-section text-white py-24 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Premium Spirits Delivered to Your Door
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Discover Nepal's finest collection of imported and local
                spirits, wines, and beers.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/products">
                  Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent text-white border-white hover:bg-white/10"
              >
                View Offers
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Our Collection
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Browse through our extensive collection of premium spirits
              </p>
            </div>
          </div>

          <Tabs defaultValue="all" className="mt-8">
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="whiskey">Whiskey</TabsTrigger>
                <TabsTrigger value="vodka">Vodka</TabsTrigger>
                <TabsTrigger value="rum">Rum</TabsTrigger>
                <TabsTrigger value="wine">Wine</TabsTrigger>
                <TabsTrigger value="beer">Beer</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="all" className="mt-6">
              <FeaturedProducts />
            </TabsContent>
            <TabsContent value="whiskey" className="mt-6">
              <FeaturedProducts category="whiskey" />
            </TabsContent>
            <TabsContent value="vodka" className="mt-6">
              <FeaturedProducts category="vodka" />
            </TabsContent>
            <TabsContent value="rum" className="mt-6">
              <FeaturedProducts category="rum" />
            </TabsContent>
            <TabsContent value="wine" className="mt-6">
              <FeaturedProducts category="wine" />
            </TabsContent>
            <TabsContent value="beer" className="mt-6">
              <FeaturedProducts category="beer" />
            </TabsContent>
          </Tabs>

          <div className="mt-10 text-center">
            <Button asChild size="lg">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Truck className="h-10 w-10 mb-4 text-primary" />
                <h3 className="text-lg font-semibold">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Delivery within Kathmandu Valley in 24 hours
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Shield className="h-10 w-10 mb-4 text-primary" />
                <h3 className="text-lg font-semibold">Secure Payments</h3>
                <p className="text-sm text-muted-foreground">
                  Multiple secure payment options
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Award className="h-10 w-10 mb-4 text-primary" />
                <h3 className="text-lg font-semibold">Quality Guarantee</h3>
                <p className="text-sm text-muted-foreground">
                  100% authentic products guaranteed
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <Clock className="h-10 w-10 mb-4 text-primary" />
                <h3 className="text-lg font-semibold">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">
                  Customer support available round the clock
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Popular Categories
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Explore our most popular categories
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
            {[
              {
                name: "Whiskey",
                image: "/placeholder.svg?height=200&width=200",
              },
              { name: "Vodka", image: "/placeholder.svg?height=200&width=200" },
              { name: "Rum", image: "/placeholder.svg?height=200&width=200" },
              { name: "Wine", image: "/placeholder.svg?height=200&width=200" },
              { name: "Beer", image: "/placeholder.svg?height=200&width=200" },
              { name: "Gin", image: "/placeholder.svg?height=200&width=200" },
            ].map((category) => (
              <Link
                key={category.name}
                href={`/products?category=${category.name.toLowerCase()}`}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-square relative">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h3 className="text-white text-xl font-semibold">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
                Join Our Newsletter
              </h2>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter to receive updates on new arrivals,
                special offers, and exclusive discounts.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Newsletter"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
