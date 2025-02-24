interface ProductTagsProps {
  tags: string[];
}

export function ProductTags({ tags }: ProductTagsProps) {
  return (
    <div className="flex gap-2 mt-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-block px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
