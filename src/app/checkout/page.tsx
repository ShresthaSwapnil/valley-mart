"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/cart-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, CreditCard, Landmark, Wallet } from "lucide-react";
import AgeVerificationModal from "@/components/age-verification-modal";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isAgeVerified, setIsAgeVerified] = useState(false);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const deliveryFee = subtotal > 5000 ? 0 : 200;
  const total = subtotal + deliveryFee;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isAgeVerified) {
      toast.error("Age verification required", {
        description:
          "You must confirm that you are at least 21 years old to complete your purchase.",
      });
      return;
    }

    // In a real application, this would process the payment and create the order
    toast.success("Order placed successfully!", {
      description: "Your order has been placed and will be processed shortly.",
    });

    // Clear the cart after successful order
    clearCart();

    // Redirect to success page (in a real app)
    // router.push("/checkout/success")
  };

  if (cart.length === 0) {
    return (
      <>
        <AgeVerificationModal />
        <div className="container px-4 py-16 md:px-6 text-center">
          <h1 className="text-3xl font-bold mb-6">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8">
            You need to add items to your cart before checkout.
          </p>
          <Button asChild>
            <Link href="/products">Browse Products</Link>
          </Button>
        </div>
      </>
    );
  }

  return (
    <>
      <AgeVerificationModal />
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="space-y-8">
                <div className="rounded-lg border shadow-sm p-6">
                  <h2 className="font-semibold text-lg mb-4">
                    Contact Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" required />
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border shadow-sm p-6">
                  <h2 className="font-semibold text-lg mb-4">
                    Shipping Address
                  </h2>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">Street Address</Label>
                      <Input id="address" required />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="district">District</Label>
                        <Input id="district" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">
                        Delivery Instructions (Optional)
                      </Label>
                      <Textarea
                        id="notes"
                        placeholder="Any special instructions for delivery"
                      />
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border shadow-sm p-6">
                  <h2 className="font-semibold text-lg mb-4">Payment Method</h2>

                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                  >
                    <div className="flex items-center space-x-2 mb-3">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center">
                        <CreditCard className="mr-2 h-4 w-4" />
                        Credit/Debit Card
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 mb-3">
                      <RadioGroupItem value="bank" id="bank" />
                      <Label htmlFor="bank" className="flex items-center">
                        <Landmark className="mr-2 h-4 w-4" />
                        Bank Transfer
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod" className="flex items-center">
                        <Wallet className="mr-2 h-4 w-4" />
                        Cash on Delivery
                      </Label>
                    </div>
                  </RadioGroup>

                  {paymentMethod === "card" && (
                    <div className="mt-4 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" required />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "bank" && (
                    <div className="mt-4 p-4 bg-muted rounded-lg">
                      <p className="text-sm">
                        Please transfer the total amount to:
                      </p>
                      <p className="font-medium mt-2">Bank: Nepal Bank Ltd</p>
                      <p className="font-medium">Account: 0123456789</p>
                      <p className="font-medium">
                        Name: Nepal Spirits Pvt. Ltd.
                      </p>
                      <p className="text-sm mt-2">
                        Please use your order number as the payment reference.
                      </p>
                    </div>
                  )}
                </div>

                <div className="rounded-lg border shadow-sm p-6">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="ageVerification"
                      checked={isAgeVerified}
                      onCheckedChange={(checked) =>
                        setIsAgeVerified(checked === true)
                      }
                      className="mt-1"
                    />
                    <Label htmlFor="ageVerification" className="text-sm">
                      I confirm that I am at least 21 years old and eligible to
                      purchase alcoholic beverages according to Nepalese law. I
                      understand that a valid ID will be required upon delivery.
                    </Label>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 justify-between items-center">
                  <Button variant="outline" type="button" asChild>
                    <Link href="/cart" className="flex items-center">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Cart
                    </Link>
                  </Button>

                  <Button type="submit">Place Order</Button>
                </div>
              </div>
            </form>
          </div>

          <div>
            <div className="rounded-lg border shadow-sm sticky top-6">
              <div className="p-6">
                <h2 className="font-semibold text-lg mb-4">Order Summary</h2>

                <div className="space-y-4 mb-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="relative w-16 h-16 rounded overflow-hidden bg-muted flex-shrink-0">
                        <Image
                          src={
                            item.image || "/placeholder.svg?height=64&width=64"
                          }
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {item.size} × {item.quantity}
                        </p>
                        <p className="text-sm">
                          NPR {(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
