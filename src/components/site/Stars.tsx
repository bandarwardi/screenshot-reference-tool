import { Star } from "lucide-react";

export function Stars({ value = 5, size = 14 }: { value?: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < value ? "fill-rating text-rating" : "text-muted-foreground/30"}
        />
      ))}
    </div>
  );
}