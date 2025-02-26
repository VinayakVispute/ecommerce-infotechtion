import { ProductCard } from "./ProductCard";
import { useProducts } from "@/hooks/useProducts";
import { useCallback, useEffect, useState } from "react";
import { Pagination } from "../ui/pagination";
import { ProductSkeleton } from "./ProductSkeleton";
import { ErrorDisplay } from "./ErrorDisplay";

interface ProductGridProps {
  category: string | null;
  sortBy?: string;
  order?: string;
  minPrice?: number;
  maxPrice?: number;
  searchQuery?: string;
}

export function ProductGrid({
  category,
  sortBy,
  order,
  minPrice,
  maxPrice,
  searchQuery,
}: ProductGridProps) {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error, refetch } = useProducts({
    page,
    category,
    sortBy,
    order,
    minPrice,
    maxPrice,
    searchQuery,
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

  const resetPage = useCallback(() => {
    setPage(1);
  }, []);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(9)].map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    );
  }
  if (isError) {
    return (
      <ErrorDisplay
        message={
          error instanceof Error
            ? error.message
            : "Failed to load products. Please try again."
        }
        onRetry={() => refetch()}
      />
    );
  }
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
