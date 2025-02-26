import { CategoryFilter } from "../ui/categoryFilter";
import { PriceRange } from "../ui/priceRange";
import { SortDropdown } from "../ui/sortDropdown";

interface SidebarProps {
  className?: string;
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  currentSort: string;
  onSortChange: (sort: string) => void;
  minPrice?: number;
  maxPrice?: number;
  onPriceChange: (
    minPrice: number | undefined,
    maxPrice: number | undefined
  ) => void;
}
export function Sidebar({
  className,
  selectedCategory,
  onCategoryChange,
  currentSort,
  onSortChange,
  minPrice,
  maxPrice,
  onPriceChange,
}: SidebarProps) {
  return (
    <div className={`bg-[#f5f4f4] p-6 ${className}`}>
      <div className="space-y-6">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
        />
        <PriceRange
          onPriceChange={onPriceChange}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
        <div>
          <h3 className="font-medium mb-4 text-[#262626]">Sort By</h3>
          <SortDropdown currentSort={currentSort} onSortChange={onSortChange} />
        </div>
      </div>
    </div>
  );
}
