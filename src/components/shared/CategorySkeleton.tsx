import { Skeleton } from "@/components/ui/skeleton";

export function CategorySkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-6 w-24 bg-gray-300" />
      <div className="space-y-3">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Skeleton className="h-4 w-4 rounded bg-gray-300" />
            <Skeleton className="h-4 w-32 bg-gray-300" />
          </div>
        ))}
      </div>
      <Skeleton className="h-8 w-full bg-gray-300" />
    </div>
  );
}
