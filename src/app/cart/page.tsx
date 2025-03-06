"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/cart-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, ArrowLeft, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import AgeVerificationModal from "@/components/age-verification-modal";

export default function CartPage() {
  const { cart, updateQuantity, removeItem, clearCart } = useCart();
  const [couponCode, setCouponCode] = useState("");

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const deliveryFee = subtotal > 5000 ? 0 : 200;
  const total = subtotal + deliveryFee;

  if (cart.length === 0) {
    return (
      <>
        <AgeVerificationModal />
        <div className="container px-4 py-16 md:px-6 text-center">
          <h1 className="text-3xl font-bold mb-6">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Button asChild>
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>
      </>
    );
  }

  return (
    <>
      <AgeVerificationModal />
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="rounded-lg border shadow-sm">
              <div className="p-6">
                <div className="hidden md:grid md:grid-cols-6 text-sm text-muted-foreground mb-4">
                  <div className="col-span-3">Product</div>
                  <div className="text-center">Price</div>
                  <div className="text-center">Quantity</div>
                  <div className="text-right">Total</div>
                </div>

                <Separator className="mb-4 md:hidden" />

                {cart.map((item) => (
                  <div key={item.id} className="py-4 border-t first:border-t-0">
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                      <div className="md:col-span-3 flex items-center gap-4">
                        <div className="relative w-16 h-16 rounded overflow-hidden bg-muted">
                          <Image
                            src={
                              item.image ||
                              "/placeholder.svg?height=64&width=64"
                            }
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {item.size}
                          </p>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-sm text-red-500 flex items-center mt-1 md:hidden"
                          >
                            <Trash2 className="h-3 w-3 mr-1" />
                            Remove
                          </button>
                        </div>
                      </div>

                      <div className="md:text-center">
                        <div className="md:hidden text-sm text-muted-foreground mb-1">
                          Price
                        </div>
                        <div>NPR {item.price.toLocaleString()}</div>
                      </div>

                      <div className="md:text-center">
                        <div className="md:hidden text-sm text-muted-foreground mb-1">
                          Quantity
                        </div>
                        <div className="flex items-center md:justify-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                Math.max(1, item.quantity - 1)
                              )
                            }
                          >
                            -
                          </Button>
                          <span className="w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </Button>
                        </div>
                      </div>

                      <div className="md:text-right">
                        <div className="md:hidden text-sm text-muted-foreground mb-1">
                          Total
                        </div>
                        <div>
                          NPR {(item.price * item.quantity).toLocaleString()}
                        </div>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="hidden md:block text-sm text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-muted/50 border-t flex flex-wrap gap-4 justify-between items-center">
                <Button variant="outline" asChild>
                  <Link href="/products" className="flex items-center">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Continue Shopping
                  </Link>
                </Button>

                <Button variant="outline" onClick={() => clearCart()}>
                  Clear Cart
                </Button>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-lg border shadow-sm">
              <div className="p-6">
                <h2 className="font-semibold text-lg mb-4">Order Summary</h2>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>NPR {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery Fee</span>
                    <span>
                      {deliveryFee === 0
                        ? "Free"
                        : `NPR ${deliveryFee.toLocaleString()}`}
                    </span>
                  </div>

                  <Separator />

                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>NPR {total.toLocaleString()}</span>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Coupon Code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <Button variant="outline">Apply</Button>
                  </div>

                  <Button className="w-full" asChild>
                    <Link href="/checkout">
                      Proceed to Checkout
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
