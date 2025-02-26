import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "./button";

interface PriceRangeProps {
  onPriceChange: (
    minPrice: number | undefined,
    maxPrice: number | undefined
  ) => void;
  minPrice?: number;
  maxPrice?: number;
}

export function PriceRange({
  onPriceChange,
  minPrice,
  maxPrice,
}: PriceRangeProps) {
  const [priceRange, setPriceRange] = useState<[number, number]>([
    minPrice || 0,
    maxPrice || 1000,
  ]);
  useEffect(() => {
    setPriceRange([minPrice || 0, maxPrice || 1000]);
  }, [minPrice, maxPrice]);

  const handlePriceChange = (values: number[]) => {
    setPriceRange(values as [number, number]);
    onPriceChange(values[0], values[1]);
  };

  const handleClearPrice = () => {
    setPriceRange([0, 1000]);
    onPriceChange(undefined, undefined);
  };

  return (
    <div className=" border-t border-custom-color pt-4">
      <div className="mb-2 flex justify-between items-start">
        <h3 className="mb-4 text-gray-800 font-light leading-[21px] tracking-wide">
          Price
        </h3>
        <div className="text-sm text-muted-foreground font-light leading-[21px] tracking-wide">
          <span>${priceRange[0]}</span> -
          <span>{`$${priceRange[1]}${priceRange[1] === 1000 ? "+" : ""}`}</span>
        </div>
      </div>
      <div className="space-y-4">
        <Slider
          defaultValue={priceRange}
          value={priceRange}
          max={1000}
          min={0}
          step={10}
          className="w-full"
          minStepsBetweenThumbs={1}
          onValueChange={handlePriceChange}
        />
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>$0</span>
          <span>$1000+</span>
        </div>
        <Button variant="outline" size="sm" onClick={handleClearPrice}>
          Clear Price Filter
        </Button>
      </div>
    </div>
  );
}
