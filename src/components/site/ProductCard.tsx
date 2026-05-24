import { Link } from "@tanstack/react-router";
import { Heart, Repeat2, ShoppingCart } from "lucide-react";
import { Stars } from "./Stars";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/product/$slug"
      params={{ slug: product.slug }}
      className="group relative flex flex-col rounded-xl border border-border bg-card p-4 transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(91,75,219,0.25)]"
    >
      <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary/40">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-3 bottom-3 flex justify-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
          <button onClick={(e) => e.preventDefault()} className="grid h-9 w-9 place-items-center rounded-full bg-background text-foreground shadow-md hover:bg-primary hover:text-primary-foreground">
            <Heart size={16} />
          </button>
          <button onClick={(e) => e.preventDefault()} className="grid h-9 w-9 place-items-center rounded-full bg-background text-foreground shadow-md hover:bg-primary hover:text-primary-foreground">
            <ShoppingCart size={16} />
          </button>
          <button onClick={(e) => e.preventDefault()} className="grid h-9 w-9 place-items-center rounded-full bg-background text-foreground shadow-md hover:bg-primary hover:text-primary-foreground">
            <Repeat2 size={16} />
          </button>
        </div>
      </div>
      <div className="mt-4 text-center">
        <h3 className="line-clamp-1 text-sm font-medium text-foreground">{product.name}</h3>
        <div className="mt-2 flex justify-center"><Stars value={product.rating} /></div>
        <div className="mt-2 flex items-center justify-center gap-2">
          <span className="text-sm font-semibold text-primary">${product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="text-xs text-muted-foreground line-through">${product.oldPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </Link>
  );
}