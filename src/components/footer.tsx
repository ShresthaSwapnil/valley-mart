import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Wine,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Wine className="h-6 w-6" />
              <span className="font-semibold">Nepal Spirits</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Nepal's premier online destination for premium liquor and spirits.
              We offer a wide selection of imported and local brands with secure
              delivery.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-muted-foreground hover:text-primary"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-primary"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-muted-foreground hover:text-primary"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products?category=whiskey"
                  className="text-muted-foreground hover:text-primary"
                >
                  Whiskey
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=vodka"
                  className="text-muted-foreground hover:text-primary"
                >
                  Vodka
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=rum"
                  className="text-muted-foreground hover:text-primary"
                >
                  Rum
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=wine"
                  className="text-muted-foreground hover:text-primary"
                >
                  Wine
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=beer"
                  className="text-muted-foreground hover:text-primary"
                >
                  Beer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  123 Durbar Marg, Kathmandu, Nepal
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <Link
                  href="tel:+9771234567"
                  className="text-muted-foreground hover:text-primary"
                >
                  +977 1 234 567
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <Link
                  href="mailto:info@nepalspirits.com"
                  className="text-muted-foreground hover:text-primary"
                >
                  info@nepalspirits.com
                </Link>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-medium mb-2">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <Input placeholder="Your email" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Nepal Spirits. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/shipping"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
