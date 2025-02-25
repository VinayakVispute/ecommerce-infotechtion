import { CategoryFilter } from "../ui/categoryFilter";
import { PriceRange } from "../ui/priceRange";

export function Sidebar() {
  return (
    <aside className="w-full md:w-64 shrink-0">
      <div className="w-[196px] h-12 py-4 border-b border-custom-color justify-center items-center gap-2.5 inline-flex">
        <div className="w-full mb-4 text-gray-800 font-light leading-[21px] tracking-wide inline-flex text-left">
          249 Products
        </div>
      </div>
      <div className="space-y-6 py-4">
        <CategoryFilter />
        <PriceRange />
      </div>
    </aside>
  );
}
