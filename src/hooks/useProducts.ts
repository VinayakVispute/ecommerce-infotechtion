import { useQuery } from "@tanstack/react-query";
import { Product } from "../types";

interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const LIMIT: number = 9; // Set a default pagination limit
const BASE_URL = "http://localhost:3000";

interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

interface FetchProductsParams {
  page: number;
  category: string | null;
  sortBy?: string;
  order?: string;
  minPrice?: number;
  maxPrice?: number;
  searchQuery?: string;
}

async function fetchProducts({
  page,
  category,
  sortBy,
  order,
  minPrice,
  maxPrice,
  searchQuery,
}: FetchProductsParams): Promise<ProductResponse> {
  const skip = (page - 1) * LIMIT;

  const params = new URLSearchParams({
    limit: LIMIT.toString(),
    skip: skip.toString(),
  });

  if (category) params.append("category", category);
  if (sortBy) params.append("sortBy", sortBy);
  if (order) params.append("order", order);
  if (minPrice !== undefined) params.append("minPrice", minPrice.toString());
  if (maxPrice !== undefined) params.append("maxPrice", maxPrice.toString());

  console.log({
    page,
    category,
    sortBy,
    order,
    minPrice,
    maxPrice,
    searchQuery,
  });

  let url: string;

  if (searchQuery) {
    // Use the search endpoint if there's a search query
    url = `${BASE_URL}/products/search?q=${encodeURIComponent(
      searchQuery
    )}&${params.toString()}`;
  } else {
    // Use the regular products endpoint for other operations
    url = `${BASE_URL}/products?${params.toString()}`;
  }
  console.log("his is url", url);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export function useProducts({
  page,
  category,
  sortBy,
  order,
  minPrice,
  maxPrice,
  searchQuery,
}: FetchProductsParams) {
  return useQuery<ProductResponse>({
    queryKey: [
      "products",
      page,
      category,
      sortBy,
      order,
      minPrice,
      maxPrice,
      searchQuery,
    ],
    queryFn: () =>
      fetchProducts({
        page,
        category,
        sortBy,
        order,
        minPrice,
        maxPrice,
        searchQuery,
      }),
    staleTime: 15000, // Data is fresh for 15 seconds
  });
}
