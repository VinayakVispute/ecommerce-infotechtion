import Header from "./components/shared/Header";
import { ProductGrid } from "./components/shared/ProductGrid";
import { Sidebar } from "./components/shared/Sidebar";
import { Breadcrumb } from "./components/ui/breadCrumb";
import { Product } from "./types";

const products: Product[] = [
  {
    id: 1,
    name: "The Classic Relaxed Cardigan",
    description:
      "A comfortable and stylish long-sleeve crew neck featuring our signature waffle knit texture. Perfect for layering or wearing on its own.",
    image: "/assets/25dbf625f116ff6a8d3cee8aa3b621a4.png",
    salePrice: 132,
    originalPrice: 188,
    discount: 30,
    colors: ["#262525", "#8c7058", "#4a4e4f"],
    tags: ["ORGANIC COTTON"],
  },
  {
    id: 2,
    name: "The Organic Cotton Long-Sleeve Turtleneck",
    description:
      "A comfortable and stylish long-sleeve crew neck featuring our signature waffle knit texture. Perfect for layering or wearing on its own.",
    image: "/assets/989c64be1e68ca3847425c4b3d6da976.png",
    salePrice: 94,
    originalPrice: 134,
    discount: 30,
    colors: ["#262525", "#8c7058"],
    tags: ["ORGANIC COTTON"],
  },
  {
    id: 3,
    name: "The Wool Flannel Pant",
    description:
      "A comfortable and stylish long-sleeve crew neck featuring our signature waffle knit texture. Perfect for layering or wearing on its own.",
    image: "/assets/c3b217d63e01d21375564970596429c6.png",
    salePrice: 167,
    originalPrice: 238,
    discount: 30,
    colors: ["#262525", "#514535"],
    tags: ["REFINED MATERIALS", "CLEANER CHEMISTRY"],
  },
  {
    id: 1,
    name: "The Classic Relaxed Cardigan",
    description:
      "A comfortable and stylish long-sleeve crew neck featuring our signature waffle knit texture. Perfect for layering or wearing on its own.",
    image: "/assets/25dbf625f116ff6a8d3cee8aa3b621a4.png",
    salePrice: 132,
    originalPrice: 188,
    discount: 30,
    colors: ["#262525", "#8c7058", "#4a4e4f"],
    tags: ["ORGANIC COTTON"],
  },
  {
    id: 2,
    name: "The Organic Cotton Long-Sleeve Turtleneck",
    description:
      "A comfortable and stylish long-sleeve crew neck featuring our signature waffle knit texture. Perfect for layering or wearing on its own.",
    image: "/assets/989c64be1e68ca3847425c4b3d6da976.png",
    salePrice: 94,
    originalPrice: 134,
    discount: 30,
    colors: ["#262525", "#8c7058"],
    tags: ["ORGANIC COTTON"],
  },
  {
    id: 3,
    name: "The Wool Flannel Pant",
    description:
      "A comfortable and stylish long-sleeve crew neck featuring our signature waffle knit texture. Perfect for layering or wearing on its own.",
    image: "/assets/c3b217d63e01d21375564970596429c6.png",
    salePrice: 167,
    originalPrice: 238,
    discount: 30,
    colors: ["#262525", "#514535"],
    tags: ["REFINED MATERIALS", "CLEANER CHEMISTRY"],
  },
];

const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "Men" }];

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar />
          <main className="flex-1">
            <div className="py-4  gap-y-2">
              <Breadcrumb items={breadcrumbItems} />
              <div className="text-black text-[32px] font-normal leading-10">
                Men's Clothing & Apparel - New Arrivals
              </div>
              <div className="text-black text-base font-normal leading-normal tracking-wide">
                Featured
              </div>
            </div>
            <ProductGrid products={products} />
          </main>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
