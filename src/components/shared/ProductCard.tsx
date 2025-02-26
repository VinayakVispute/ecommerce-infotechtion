import type { Product } from "@/types";
import { ColorPicker } from "../ui/colorPicker";
import { ProductTags } from "../ui/productTags";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { memo } from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = memo(function ProductCard({ product }: ProductCardProps) {
  const discountedPercentage = Math.round(product.discountPercentage);
  const originalPrice = Math.round(
    product.price / (1 - product.discountPercentage / 100)
  );

  return (
    <div className="group flex flex-col">
      <div className="relative aspect-[3/4] mb-4 bg-[#f5f4f4]">
        {discountedPercentage > 0 && (
          <span className="absolute top-4 left-4 text-[#d72727] bg-white text-xs px-2 py-1 rounded">
            {discountedPercentage}% off
          </span>
        )}
        <LazyLoadImage
          src={product.thumbnail || "/assets/placeholder.svg"}
          alt={product.title}
          className="w-full h-full object-cover"
          effect="blur"
        />
      </div>
      <div className="flex flex-col flex-grow space-y-1">
        <h3 className="font-medium text-[#262626] text-sm truncate">
          {product.title}
        </h3>
        <p className="text-[#737373] text-xs">{product.category}</p>
        <p className="text-[#737373] text-sm line-clamp-2 mb-2">
          {product.description}
        </p>
        <div className="flex items-center gap-2 mt-auto">
          <span className="text-[#262626] text-sm">
            ${product.price.toFixed(0)}
          </span>
          {discountedPercentage > 0 && (
            <span className="text-[#737373] text-sm line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        <ColorPicker colors={[]} />
        {product.tags && <ProductTags tags={product.tags} />}
      </div>
    </div>
  );
});
export { ProductCard };
