"use client";

import { useState } from "react";
import Checkbox from "@/components/ui/Checkbox";
import RadioButton from "@/components/ui/RadioButton";
import Select from "@/components/ui/FilterSelect";
import RangeSlider from "@/components/ui/RangeSlider";

const CATEGORIES = ["Men", "Women", "Accessories"] as const;
type Category = (typeof CATEGORIES)[number];

export interface FilterSidebarProps {
  /** Wire this up to useProductFilterStore if you want filters to persist
   *  across navigation — kept as local state here so the component stays
   *  drop-in usable on its own. */
  onChange?: (filters: {
    categories: Category[];
    maxPrice: number;
    inStockOnly: boolean;
  }) => void;
  isOpen: boolean;
}

export default function FilterSidebar({ onChange, isOpen }: FilterSidebarProps) {
  const [categories, setCategories] = useState<Category[]>(["Men"]);
  const [maxPrice, setMaxPrice] = useState(45);
  const [inStockOnly, setInStockOnly] = useState(false);

  function toggleCategory(cat: Category) {
    const next = categories.includes(cat)
      ? categories.filter((c) => c !== cat)
      : [...categories, cat];
    setCategories(next);
    onChange?.({ categories: next, maxPrice, inStockOnly });
  }

  function handlePriceChange(value: number) {
    setMaxPrice(value);
    onChange?.({ categories, maxPrice: value, inStockOnly });
  }

  function handleAvailabilityChange(value: boolean) {
    setInStockOnly(value);
    onChange?.({ categories, maxPrice, inStockOnly: value });
  }

  function clearAll() {
    setCategories([]);
    setMaxPrice(100);
    setInStockOnly(false);
    onChange?.({ categories: [], maxPrice: 100, inStockOnly: false });
  }

  return (
    <aside className={`block md:sticky md:top-35 rounded-2xl h-fit p-8 bg-white w-full max-w-100 transition-all duration-3000 ease-in-out z-50 ${isOpen ? "left-0" : "-left-full"}`}>
      <div className="flex items-baseline justify-between pb-4 border-b border-b-foreground/10">
        <h4 className="font-serif font-light text-foreground text-[24px]">Filters</h4>
        <button
          onClick={clearAll}
          className="uppercase text-xs text-foreground/60 hover:text-foreground cursor-pointer tracking-widest"
        >
          Clear All
        </button>
      </div>
      <div className="flex flex-col gap-8 py-4 text-sm">
        <div className="flex flex-col gap-4">
          <div className="uppercase text-xs tracking-widest">
            Category
          </div>
          <div className="flex flex-col gap-2">
            {CATEGORIES.map((cat) => (
              <Checkbox
                key={cat}
                label={cat}
                checked={categories.includes(cat)}
                onChange={() => toggleCategory(cat)}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="uppercase text-xs tracking-widest">
            Price Range
          </div>
          <RangeSlider
            min={0}
            max={100}
            value={maxPrice}
            onChange={(e) => handlePriceChange(Number(e.target.value))}
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="uppercase text-xs tracking-widest">
            Availability
          </div>
          <div className="flex flex-col gap-2">
            <RadioButton
              label="All Items"
              name="availability"
              checked={!inStockOnly}
              onChange={() => handleAvailabilityChange(false)}
            />
            <RadioButton
              label="In Stock Only"
              name="availability"
              checked={inStockOnly}
              onChange={() => handleAvailabilityChange(true)}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
