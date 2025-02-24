interface ColorPickerProps {
  colors: string[];
}

export function ColorPicker({ colors }: ColorPickerProps) {
  return (
    <div className="flex gap-2 mt-2">
      {colors.map((color, i) => (
        <button
          key={i}
          className="w-4 h-4 rounded-full border border-border"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}
