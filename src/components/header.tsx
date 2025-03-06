"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  Menu,
  Search,
  ShoppingCart,
  User,
  Wine,
  X,
  Sun,
  Moon,
} from "lucide-react";
import { useCart } from "@/components/cart-provider";
import { useTheme } from "next-themes";

export default function Header() {
  const pathname = usePathname();
  const { cart } = useCart();
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b shadow-sm"
          : "bg-background"
      }`}
    >
      <div className="container px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-semibold"
                  >
                    <Wine className="h-6 w-6" />
                    <span>Nepal Spirits</span>
                  </Link>
                  <Link
                    href="/"
                    className={`${
                      pathname === "/"
                        ? "text-primary"
                        : "text-muted-foreground"
                    } hover:text-primary`}
                  >
                    Home
                  </Link>
                  <Link
                    href="/products"
                    className={`${
                      pathname === "/products" ||
                      pathname.startsWith("/products/")
                        ? "text-primary"
                        : "text-muted-foreground"
                    } hover:text-primary`}
                  >
                    Products
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center text-muted-foreground hover:text-primary">
                      Categories
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=whiskey">Whiskey</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=vodka">Vodka</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=rum">Rum</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=wine">Wine</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/products?category=beer">Beer</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Link
                    href="/about"
                    className={`${
                      pathname === "/about"
                        ? "text-primary"
                        : "text-muted-foreground"
                    } hover:text-primary`}
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className={`${
                      pathname === "/contact"
                        ? "text-primary"
                        : "text-muted-foreground"
                    } hover:text-primary`}
                  >
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center gap-2">
              <Wine className="h-6 w-6" />
              <span className="font-semibold hidden md:inline-block">
                Nepal Spirits
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`text-sm font-medium ${
                pathname === "/" ? "text-primary" : "text-muted-foreground"
              } hover:text-primary`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`text-sm font-medium ${
                pathname === "/products" || pathname.startsWith("/products/")
                  ? "text-primary"
                  : "text-muted-foreground"
              } hover:text-primary`}
            >
              Products
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-primary">
                Categories
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/products?category=whiskey">Whiskey</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products?category=vodka">Vodka</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products?category=rum">Rum</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products?category=wine">Wine</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/products?category=beer">Beer</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/about"
              className={`text-sm font-medium ${
                pathname === "/about" ? "text-primary" : "text-muted-foreground"
              } hover:text-primary`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium ${
                pathname === "/contact"
                  ? "text-primary"
                  : "text-muted-foreground"
              } hover:text-primary`}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            {isSearchOpen ? (
              <div className="flex items-center">
                <Input
                  placeholder="Search products..."
                  className="w-full md:w-[200px] h-9"
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsSearchOpen(false)}
                  className="ml-1"
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close search</span>
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            )}

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/account">My Account</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/orders">My Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/wishlist">Wishlist</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/login">Login</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" asChild className="relative">
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {cartItemsCount}
                  </Badge>
                )}
                <span className="sr-only">Cart</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
