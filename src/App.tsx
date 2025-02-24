// import { ProductGrid } from "@/components/product-grid";
// import { Sidebar } from "@/components/sidebar";
import Header from "./components/shared/Header";
import { ProductGrid } from "./components/shared/ProductGrid";
import { Breadcrumb } from "./components/ui/breadCrumb";
import { Product } from "./types";

const products: Product[] = [
  {
    id: 1,
    name: "The Classic Relaxed Cardigan",
    description:
      "A comfortable and stylish long-sleeve crew neck featuring our signature waffle knit texture. Perfect for layering or wearing on its own.",
    image: "/placeholder.svg?height=400&width=300",
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
    image: "/placeholder.svg?height=400&width=300",
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
    image: "/placeholder.svg?height=400&width=300",
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
        <Breadcrumb items={breadcrumbItems} />
        <div className="flex flex-col md:flex-row gap-8">
          {/* <Sidebar /> */}
          <main className="flex-1">
            <ProductGrid products={products} />
          </main>
        </div>
      </div>
    </div>
  );
}
