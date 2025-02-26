import { useQuery } from "@tanstack/react-query";

export interface categoriesResponse {
  slug: string;
  name: string;
}

async function fetchCategories(): Promise<categoriesResponse[]> {
  const response = await fetch("http://localhost:3000/categories");

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json();
}

export function useCategories() {
  return useQuery<categoriesResponse[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: 15000,
  });
}
