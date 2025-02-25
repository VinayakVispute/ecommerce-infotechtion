import { useQuery } from "@tanstack/react-query";
import { Product } from "../types";

interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const LIMIT: number = 9; // Set a default pagination limit

async function fetchProducts(
  page: number,
  category: string | null
): Promise<ProductResponse> {
  let baseUrl = `https://dummyjson.com/products?limit=${LIMIT}&skip=${
    (page - 1) * LIMIT
  }&select=id,title,description,price,discountPercentage,category,thumbnail,tags`;

  if (category) {
    baseUrl = `https://dummyjson.com/products/category/${category}?limit=${LIMIT}&skip=${
      (page - 1) * LIMIT
    }`;
  }

  const response = await fetch(baseUrl);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export function useProducts(page: number, category: string | null) {
  return useQuery<ProductResponse>({
    queryKey: ["products", page, category],
    queryFn: () => fetchProducts(page, category),
    staleTime: 15000, // Data is fresh for 15 seconds
  });
}
