import { Suspense } from "react";
import ProductList from "@/components/product-list";
import ProductFilters from "@/components/product-filters";
import ProductSort from "@/components/product-sort";
import { Skeleton } from "@/components/ui/skeleton";
import AgeVerificationModal from "@/components/age-verification-modal";

export default function ProductsPage({
  searchParams,
}: {
  searchParams: {
    category?: string;
    price?: string;
    sort?: string;
    page?: string;
  };
}) {
  const category = searchParams.category || "";
  const price = searchParams.price || "";
  const sort = searchParams.sort || "featured";
  const page = Number(searchParams.page) || 1;

  return (
    <>
      <AgeVerificationModal />

      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Products</h1>
            <p className="text-muted-foreground">
              Browse our collection of premium spirits
            </p>
          </div>
          <ProductSort productId="default" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
          <div className="order-last md:order-first">
            <ProductFilters />
          </div>

          <div>
            <Suspense fallback={<ProductListSkeleton />}>
              <ProductList
                category={category}
                price={price}
                sort={sort}
                page={page}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}

function ProductListSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array(9)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="h-[200px] w-full rounded-lg" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/4" />
          </div>
        ))}
    </div>
  );
}
