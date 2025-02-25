import type { Product } from "@/types";
import { ProductCard } from "./ProductCard";
import { useProducts } from "@/hooks/useProducts";
import { useState } from "react";
import { Pagination } from "../ui/pagination";

interface ProductGridProps {
  category: string | null;
}

export function ProductGrid({ category }: ProductGridProps) {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useProducts(page, category);

  if (isLoading)
    return <div className="text-center text-[#262626]">Loading...</div>;
  if (isError)
    return (
      <div className="text-center text-[#d72727]">Error fetching products</div>
    );

  const totalPages = Math.ceil((data?.total || 0) / 9);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data?.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(newPage: number) => setPage(newPage)}
      />
    </div>
  );
}
