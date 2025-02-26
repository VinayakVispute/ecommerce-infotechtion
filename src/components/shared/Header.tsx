"use client";

import type React from "react";
import { useDebounce } from "use-debounce";
import { useState, useEffect, useCallback, useMemo, memo } from "react";
import { Search, ShoppingBag, Menu } from "lucide-react";
import { Link } from "react-router";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { throttle } from "lodash";
interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header = memo(function Header({ onSearch }: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery] = useDebounce(searchQuery, 300);

  const throttledSearch = useMemo(
    () =>
      throttle((query: string) => {
        onSearch(query);
      }, 1000),
    [onSearch]
  );

  useEffect(() => {
    if (debouncedSearchQuery) {
      throttledSearch(debouncedSearchQuery);
    } else {
      onSearch("");
    }
  }, [debouncedSearchQuery, throttledSearch, onSearch]);

  const handleSearchClick = useCallback(() => {
    setIsSearchOpen((prev) => !prev);
  }, []);

  const handleCancelClick = useCallback(() => {
    setIsSearchOpen(false);
    setSearchQuery("");
    onSearch("");
  }, [onSearch]);

  useEffect(() => {
    onSearch(debouncedSearchQuery);
  }, [debouncedSearchQuery, onSearch]);

  const handleSearchInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    },
    []
  );

  return (
    <header className="w-full sticky top-0 z-50 bg-white">
      <div className="w-full bg-black text-white text-sm py-2 px-4">
        <div className="container flex justify-around xs:justify-between items-center gap-x-2">
          <div className="w-full flex text-center flex-col xs:flex-row justify-center ">
            <span>Get early access on launches and offers.</span>
            <Link to="#" className="ml-1 underline hover:no-underline">
              Sign Up For Texts →
            </Link>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <img
              className="w-[21px] relative h-[15px] overflow-hidden shrink-0"
              width={21}
              height={15}
              alt=""
              src="/assets/united-states.png"
            />
            <div className="relative tracking-[0.2px] leading-[16px]">USD</div>
          </div>
        </div>
      </div>

      <div className="border-b">
        <div className="container flex items-center h-16 px-4 text-gray-500">
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-transparent"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link to="/" className="text-base hover:opacity-70">
                    Home
                  </Link>
                  <Link to="/products" className="text-base hover:opacity-70">
                    Products
                  </Link>
                  <Link to="/about" className="text-base hover:opacity-70">
                    About
                  </Link>
                  <Link to="/contact" className="text-base hover:opacity-70">
                    Contact Us
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:inline-flex justify-start items-end h-16">
            <div className="px-3 py-5 flex-col justify-start items-end gap-3 inline-flex">
              <div className="text-center text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                Home
              </div>
            </div>
            <div className="px-3 pt-5 flex-col justify-start items-end gap-[18px] inline-flex">
              <div className="text-center text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                Products
              </div>
              <div className="self-stretch h-0.5 bg-neutral-800" />
            </div>
            <div className="px-3 py-5 flex-col justify-start items-end gap-3 inline-flex">
              <div className="text-center text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                About
              </div>
            </div>
            <div className="px-3 py-5 flex-col justify-start items-end gap-3 inline-flex">
              <div className="text-center text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
                Contact Us
              </div>
            </div>
          </div>

          {/* Logo or Search Bar */}
          <div className="flex-1 flex justify-center items-center">
            {isSearchOpen ? (
              <div className="w-full max-w-2xl">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    placeholder="Search"
                    className="w-full h-10 px-4 text-sm text-center bg-[#fafafa] border border-[#dddbdc] rounded-sm focus:outline-none focus:border-[#262626]"
                    autoFocus={isSearchOpen}
                  />
                  <button
                    type="button"
                    onClick={handleCancelClick}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-[#262626] hover:text-[#737373] transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/"
                className="text-xl font-normal tracking-widest text-black hover:text-black"
              >
                EVERLANE
              </Link>
            )}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-transparent"
              onClick={handleSearchClick}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-transparent"
            >
              <span className="sr-only">Account</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" />
                <path
                  d="M20 20C20 20 20 17.7909 20 16C20 14.2091 16.4183 13 12 13C7.58172 13 4 14.2091 4 16C4 17.7909 4 20 4 20"
                  strokeLinecap="round"
                />
              </svg>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-transparent"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
});
export { Header };
