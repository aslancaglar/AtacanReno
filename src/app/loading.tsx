import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="font-[family-name:var(--font-manrope)]">
      {/* Hero skeleton */}
      <div className="relative min-h-[65vh] max-h-[900px]">
        <Skeleton className="absolute inset-0 rounded-none" />
      </div>

      {/* Stats skeleton */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-28 rounded-2xl" />
          ))}
        </div>
      </div>

      {/* Content skeleton */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <Skeleton className="h-8 w-64 mb-4" />
        <Skeleton className="h-4 w-96 mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-72 rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
