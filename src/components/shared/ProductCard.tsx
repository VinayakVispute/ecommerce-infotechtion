import type { Product } from "@/types";
import { ColorPicker } from "../ui/colorPicker";
import { ProductTags } from "../ui/productTags";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col">
      <div className="relative aspect-[3/4] mb-4 bg-[#f5f4f4]">
        {product.discount && (
          <span className="absolute top-4 left-4 text-[#d72727] bg-white text-xs px-2 py-1 rounded">
            {product.discount}% off
          </span>
        )}
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col flex-grow space-y-1">
        <h3 className="font-medium text-[#262626] text-sm truncate">
          {product.name}
        </h3>
        <p className="text-[#737373] text-sm line-clamp-2 mb-2">
          {product.description}
        </p>
        <div className="flex items-center gap-2 mt-auto">
          <span className="text-[#262626] text-sm">${product.salePrice}</span>
          {product.originalPrice && (
            <span className="text-[#737373] text-sm line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
        <ColorPicker colors={product.colors} />
        {product.tags && <ProductTags tags={product.tags} />}
      </div>
    </div>
  );
}
