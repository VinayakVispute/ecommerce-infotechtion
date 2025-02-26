"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { type categoriesResponse, useCategories } from "@/hooks/useCategories";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CategoryFilterProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const { data: categories, isLoading, isError } = useCategories();
  const [isExpanded, setIsExpanded] = useState(false);

  if (isLoading)
    return <div className="text-[#737373]">Loading categories...</div>;
  if (isError)
    return <div className="text-[#d72727]">Error loading categories</div>;

  const visibleCategories = isExpanded ? categories : categories?.slice(0, 5);
  const remainingCount = categories ? categories.length - 5 : 0;

  return (
    <div className="overflow-y-auto">
      <h3 className="font-medium mb-4 text-[#262626]">Category</h3>
      <ScrollArea className="max-h-[250px] overflow-y-auto">
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-3">
            {visibleCategories?.map(
              ({ slug, name }: categoriesResponse, index) => (
                <div key={index} className="flex items-center min-w-0">
                  <Checkbox
                    id={slug}
                    checked={selectedCategory === slug}
                    onCheckedChange={() => onCategoryChange(slug)}
                  />
                  <label
                    htmlFor={slug}
                    className="ml-2 text-sm text-[#737373] capitalize truncate"
                  >
                    {name}
                  </label>
                </div>
              )
            )}
          </div>
          {!isExpanded && remainingCount > 0 && (
            <Button
              variant="ghost"
              className="w-full justify-start p-0 h-auto text-sm font-normal text-[#737373] hover:text-[#262626] hover:bg-transparent"
              onClick={() => setIsExpanded(true)}
            >
              <ChevronDown className="h-4 w-4 mr-1" />
              Show {remainingCount} more
            </Button>
          )}
          {isExpanded && (
            <Button
              variant="ghost"
              className="w-full justify-start p-0 h-auto text-sm font-normal text-[#737373] hover:text-[#262626] hover:bg-transparent"
              onClick={() => setIsExpanded(false)}
            >
              <ChevronUp className="h-4 w-4 mr-1" />
              Show less
            </Button>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
