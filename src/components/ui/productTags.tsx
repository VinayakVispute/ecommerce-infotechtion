interface ProductTagsProps {
  tags: string[];
}

export function ProductTags({ tags }: ProductTagsProps) {
  return (
    <div className="flex items-center gap-2 mt-3">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center px-2 py-1 text-[10px] uppercase tracking-wide bg-[#dddbdc] text-[#262626] whitespace-nowrap rounded"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
