export function ProductSkeleton() {
  return (
    <div className="group flex flex-col">
      <div className="relative aspect-[3/4] mb-4">
        <div className="absolute inset-0 animate-pulse bg-gray-200 rounded-lg" />
      </div>
      <div className="flex flex-col flex-grow space-y-3">
        <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
        <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2" />
        <div className="h-20 bg-gray-200 rounded animate-pulse w-full" />
        <div className="flex items-center gap-2">
          <div className="h-4 bg-gray-200 rounded animate-pulse w-16" />
          <div className="h-4 bg-gray-200 rounded animate-pulse w-16" />
        </div>
        <div className="flex gap-1.5 mt-2">
          <div className="w-3.5 h-3.5 rounded-full bg-gray-200 animate-pulse" />
          <div className="w-3.5 h-3.5 rounded-full bg-gray-200 animate-pulse" />
          <div className="w-3.5 h-3.5 rounded-full bg-gray-200 animate-pulse" />
        </div>
        <div className="flex gap-2 mt-3">
          <div className="h-6 bg-gray-200 rounded animate-pulse w-12" />
          <div className="h-6 bg-gray-200 rounded animate-pulse w-12" />
        </div>
      </div>
    </div>
  );
}
