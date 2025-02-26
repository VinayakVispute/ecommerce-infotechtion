import type React from "react";

import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const handleCancelClick = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  // Focus input when search opens
  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <div className="relative">
      {!isSearchOpen ? (
        <Button
          variant="ghost"
          size="icon"
          className="text-[#262626] hover:bg-[#f5f4f4]"
          onClick={handleSearchClick}
          aria-label="Search"
        >
          <Search className="h-5 w-5" />
        </Button>
      ) : (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black/20">
          <div className="w-full max-w-3xl bg-white rounded-md shadow-lg overflow-hidden">
            <form onSubmit={handleSubmit} className="flex items-center">
              <div className="flex-1 flex items-center bg-[#f5f4f4] rounded-l-md">
                <Search className="h-5 w-5 ml-4 text-[#737373]" />
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search"
                  className="w-full py-4 px-3 bg-transparent border-none focus:outline-none text-[#262626]"
                />
              </div>
              <button
                type="button"
                onClick={handleCancelClick}
                className="py-4 px-6 text-[#262626] hover:bg-[#f5f4f4] transition-colors"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
