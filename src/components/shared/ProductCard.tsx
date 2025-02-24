import type { Product } from "@/types";
import { ColorPicker } from "../ui/colorPicker";
import { ProductTags } from "../ui/productTags";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group">
      <div className="relative aspect-[3/4] mb-4">
        {product.discount && (
          <span className="absolute top-4 left-4 bg-sale text-white text-sm px-2 py-1 rounded">
            {product.discount}% off
          </span>
        )}
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-2">
        <h3 className="font-medium">{product.name}</h3>
        <div className="flex items-center gap-2">
          <span className="text-foreground">${product.salePrice}</span>
          {product.originalPrice && (
            <span className="text-muted-foreground line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground">{product.description}</p>
        <ColorPicker colors={product.colors} />
        {product.tags && <ProductTags tags={product.tags} />}
      </div>
    </div>
  );
}
