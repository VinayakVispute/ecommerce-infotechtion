import { CategoryFilter } from "../ui/categoryFilter";
import { PriceRange } from "../ui/priceRange";

interface SidebarProps {
  className?: string;
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}
export function Sidebar({
  className,
  selectedCategory,
  onCategoryChange,
}: SidebarProps) {
  return (
    <div className={`bg-[#f5f4f4] p-6 ${className}`}>
      <div className="space-y-6">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
        />
        <PriceRange />
      </div>
    </div>
  );
}
