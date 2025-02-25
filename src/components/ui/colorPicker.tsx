interface ColorPickerProps {
  colors: string[];
}

export function ColorPicker({ colors }: ColorPickerProps) {
  return (
    <div className="flex gap-1.5 mt-2">
      {colors.map((color, i) => (
        <button
          key={i}
          className="w-3.5 h-3.5 rounded-full border border-[#dddbdc] hover:ring-1 hover:ring-[#262626] transition-all"
          style={{ backgroundColor: color }}
          aria-label={`Select color ${i + 1}`}
        />
      ))}
    </div>
  );
}
