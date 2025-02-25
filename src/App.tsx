import { useState } from "react";
import { Footer } from "./components/shared/Footer";
import Header from "./components/shared/Header";
import { ProductGrid } from "./components/shared/ProductGrid";
import { Sidebar } from "./components/shared/Sidebar";
import { Breadcrumb } from "./components/ui/breadCrumb";

const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Men" }];

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-[#f5f4f4] flex flex-col">
      <Header />
      <div className="flex flex-1">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar
            className="hidden md:block w-64 fixed h-screen overflow-y-auto "
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <div className="flex-1 md:ml-64">
            <div className="container mx-auto px-4 py-8">
              <Breadcrumb items={breadcrumbItems} />
              <main>
                <div className="text-black text-[32px] font-normal leading-10">
                  Men's Clothing & Apparel - New Arrivals
                </div>
                <div className="text-black text-base font-normal leading-normal tracking-wide">
                  Featured
                </div>
                <ProductGrid category={selectedCategory} />
              </main>
            </div>
          </div>
        </div>
      </div>
      <Footer className="md:ml-64" />
    </div>
  );
}
