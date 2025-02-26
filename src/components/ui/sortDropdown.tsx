"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

interface SortDropdownProps {
  onSortChange: (sort: string) => void;
  currentSort?: string;
}

export function SortDropdown({ onSortChange, currentSort }: SortDropdownProps) {
  const getSortLabel = () => {
    switch (currentSort) {
      case "price_asc":
        return "Low to High";
      case "price_desc":
        return "High to Low";
      default:
        return "Select";
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-[#262626] whitespace-nowrap">
        Sort By:
      </span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="w-[120px] justify-between text-sm font-normal bg-white"
          >
            {getSortLabel()}
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[120px]">
          <DropdownMenuItem onClick={() => onSortChange("price_asc")}>
            Low to High
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSortChange("price_desc")}>
            High to Low
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onSortChange("")}>
            Clear
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
