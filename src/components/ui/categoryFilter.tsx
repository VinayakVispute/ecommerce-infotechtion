import { Checkbox } from "@/components/ui/checkbox";

const categories = [
  "Everyone - All Gender Collection",
  "Accessories & Gift Cards",
  "Backpacks, Weekenders & Duffle Bags",
  "Dress Shirts & Button Downs",
];

export function CategoryFilter() {
  return (
    <div>
      <h3 className="mb-4 text-gray-800 font-light leading-[21px] tracking-wide">
        Category
      </h3>
      <div className="space-y-3">
        {categories.map((category) => (
          <div key={category} className="flex items-center">
            <Checkbox id={category} />
            <label
              htmlFor={category}
              className="ml-2 text-sm text-muted-foreground"
            >
              {category}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
