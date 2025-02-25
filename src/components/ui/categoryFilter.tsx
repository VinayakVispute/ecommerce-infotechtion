import { Checkbox } from "@/components/ui/checkbox";
import { categoriesResponse, useCategories } from "@/hooks/useCategories";

interface CategoryFilterProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const { data: categories, isLoading, isError } = useCategories();

  if (isLoading) return <div>Loading categories...</div>;
  if (isError) return <div>Error loading categories</div>;

  return (
    <div>
      <h3 className="font-medium mb-4 text-[#262626]">Category</h3>
      <div className="space-y-3">
        <div className="flex items-center">
          <Checkbox
            id="all-categories"
            checked={selectedCategory === null}
            onCheckedChange={() => onCategoryChange(null)}
          />
          <label
            htmlFor="all-categories"
            className="ml-2 text-sm text-[#737373]"
          >
            All Categories
          </label>
        </div>
        {categories?.map(({ slug, name }: categoriesResponse, index) => (
          <div key={index} className="flex items-center">
            <Checkbox
              id={slug}
              checked={selectedCategory === slug}
              onCheckedChange={() => onCategoryChange(slug)}
            />
            <label
              htmlFor={slug}
              className="ml-2 text-sm text-[#737373] capitalize"
            >
              {name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
