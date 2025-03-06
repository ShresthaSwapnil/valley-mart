"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/components/cart-provider";
import { toast } from "sonner";

type Product = {
  id: string;
  name: string;
  price: number;
  image?: string;
  size: string;
};

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);

    toast.success("Added to cart", {
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Button onClick={handleAddToCart} className="flex-1">
      <ShoppingCart className="mr-2 h-4 w-4" />
      Add to Cart
    </Button>
  );
}
