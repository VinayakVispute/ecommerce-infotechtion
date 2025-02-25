import { useState } from "react";
import { Slider } from "@/components/ui/slider";

export function PriceRange() {
  const [selectedPriceRange, setSelectedPriceRange] = useState([150, 500]);
  const [priceRange] = useState([50, 1000]);

  const handlePriceChange = (values: number[]) => {
    setSelectedPriceRange(values);
  };
  return (
    <div className=" border-t border-custom-color pt-4">
      <div className="mb-2 flex justify-between items-start">
        <h3 className="mb-4 text-gray-800 font-light leading-[21px] tracking-wide">
          Price
        </h3>
        <div className="text-sm text-muted-foreground font-light leading-[21px] tracking-wide">
          <span>${selectedPriceRange[0]}</span> -
          <span>${selectedPriceRange[1]}</span>
        </div>
      </div>
      <div className="space-y-4">
        <Slider
          defaultValue={[50, 500]}
          max={1000}
          min={50}
          step={10}
          className="w-full"
          minStepsBetweenThumbs={1}
          onValueChange={handlePriceChange}
        />
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}+</span>
        </div>
      </div>
    </div>
  );
}
