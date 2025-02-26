import { useState } from "react";
import { Footer } from "./components/shared/Footer";
import Header from "./components/shared/Header";
import { ProductGrid } from "./components/shared/ProductGrid";
import { Sidebar } from "./components/shared/Sidebar";
import { Breadcrumb } from "./components/ui/breadCrumb";

const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Men" }];

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string | undefined>(undefined);
  const [order, setOrder] = useState<string | undefined>(undefined);
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handlePriceChange = (
    min: number | undefined,
    max: number | undefined
  ) => {
    setMinPrice(min);
    setMaxPrice(max);
  };
  const handleSortChange = (newSort: string) => {
    if (newSort === "price_asc") {
      setSortBy("price");
      setOrder("asc");
    } else if (newSort === "price_desc") {
      setSortBy("price");
      setOrder("desc");
    } else {
      setSortBy(undefined);
      setOrder(undefined);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-[#f5f4f4] flex flex-col">
      <Header onSearch={handleSearch} />
      <div className="flex flex-1 w-full overflow-x-hidden">
        <div className="w-full flex flex-col md:flex-row">
          <Sidebar
            className="pb-2 md:pb-6 md:block md:w-64 md:fixed md:h-screen md:overflow-y-auto"
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            currentSort={sortBy && order ? `${sortBy}_${order}` : undefined}
            onSortChange={handleSortChange}
            minPrice={minPrice}
            maxPrice={maxPrice}
            onPriceChange={handlePriceChange}
          />
          <div className="flex-1 md:ml-64">
            <div className="container mx-auto px-4 py-8 max-w-full">
              <Breadcrumb items={breadcrumbItems} />
              <main>
                <div className="text-black text-[32px] font-normal leading-10">
                  {selectedCategory
                    ? selectedCategory.charAt(0).toUpperCase() +
                      selectedCategory.slice(1)
                    : "All Products"}
                </div>
                <div className="text-black text-base font-normal leading-normal tracking-wide">
                  Featured
                </div>
                <ProductGrid
                  category={selectedCategory}
                  sortBy={sortBy}
                  order={order}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  searchQuery={searchQuery}
                />
              </main>
            </div>
          </div>
        </div>
      </div>
      <Footer className="md:ml-64" />
    </div>
  );
}
