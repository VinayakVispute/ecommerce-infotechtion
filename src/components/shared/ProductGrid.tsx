import { ProductCard } from "./ProductCard";
import { useProducts } from "@/hooks/useProducts";
import { useEffect, useState } from "react";
import { Pagination } from "../ui/pagination";

interface ProductGridProps {
  category: string | null;
  sortBy?: string;
  order?: string;
  minPrice?: number;
  maxPrice?: number;
}

export function ProductGrid({
  category,
  sortBy,
  order,
  minPrice,
  maxPrice,
}: ProductGridProps) {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useProducts({
    page,
    category,
    sortBy,
    order,
    minPrice,
    maxPrice,
  });

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page, isLoading]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  if (isLoading)
    return <div className="text-center text-[#262626]">Loading...</div>;
  if (isError)
    return (
      <div className="text-center text-[#d72727]">Error fetching products</div>
    );

  const totalPages = Math.ceil((data?.total || 0) / 9);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
