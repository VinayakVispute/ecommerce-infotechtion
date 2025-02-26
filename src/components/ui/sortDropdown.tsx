"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown } from "lucide-react";

interface SortDropdownProps {
  onSortChange: (sort: string) => void;
  currentSort?: string;
}

export function SortDropdown({ onSortChange, currentSort }: SortDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          {currentSort === "price_asc"
            ? "Price: Low to High"
            : currentSort === "price_desc"
            ? "Price: High to Low"
            : "Sort By"}
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        <DropdownMenuItem onClick={() => onSortChange("price_asc")}>
          Price: Low to High
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onSortChange("price_desc")}>
          Price: High to Low
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onSortChange("")}>
          Clear Sort
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
