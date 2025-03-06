"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function ProductFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get("category")?.split(",") || []
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const handlePriceChange = (values: number[]) => {
    setPriceRange(values);
  };

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams);

    if (selectedCategories.length > 0) {
      params.set("category", selectedCategories.join(","));
    } else {
      params.delete("category");
    }

    params.set("price", `${priceRange[0]}-${priceRange[1]}`);

    router.push(`/products?${params.toString()}`);
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 10000]);
    router.push("/products");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Button variant="ghost" size="sm" onClick={resetFilters}>
          Reset
        </Button>
      </div>

      <Accordion type="multiple" defaultValue={["categories", "price"]}>
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {[
                "Whiskey",
                "Vodka",
                "Rum",
                "Wine",
                "Beer",
                "Gin",
                "Tequila",
                "Brandy",
              ].map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={selectedCategories.includes(
                      category.toLowerCase()
                    )}
                    onCheckedChange={() =>
                      handleCategoryChange(category.toLowerCase())
                    }
                  />
                  <Label htmlFor={`category-${category}`}>{category}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider
                defaultValue={[0, 10000]}
                max={10000}
                step={100}
                value={priceRange}
                onValueChange={handlePriceChange}
              />
              <div className="flex items-center justify-between">
                <span>NPR {priceRange[0].toLocaleString()}</span>
                <span>NPR {priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="brands">
          <AccordionTrigger>Brands</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {[
                "Johnnie Walker",
                "Jack Daniel's",
                "Absolut",
                "Bacardi",
                "Heineken",
                "Yellow Tail",
                "Bombay Sapphire",
                "Jose Cuervo",
              ].map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox id={`brand-${brand}`} />
                  <Label htmlFor={`brand-${brand}`}>{brand}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="country">
          <AccordionTrigger>Country</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {[
                "Scotland",
                "USA",
                "France",
                "Italy",
                "Japan",
                "Australia",
                "Mexico",
                "Nepal",
              ].map((country) => (
                <div key={country} className="flex items-center space-x-2">
                  <Checkbox id={`country-${country}`} />
                  <Label htmlFor={`country-${country}`}>{country}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className="w-full" onClick={applyFilters}>
        Apply Filters
      </Button>
    </div>
  );
}
