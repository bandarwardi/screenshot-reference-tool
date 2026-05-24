import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Heart, Minus, Plus, Repeat2, Share2 } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Stars } from "@/components/site/Stars";
import { ProductCard } from "@/components/site/ProductCard";
import { getProduct, products } from "@/lib/products";
import { useState } from "react";

export const Route = createFileRoute("/product/$slug")({
  head: ({ params }) => {
    const p = getProduct(params.slug);
    return {
      meta: [
        { title: `${p?.name ?? "Product"} — EN Store` },
        { name: "description", content: p ? `Buy ${p.name} by ${p.brand} at EN Store.` : "Product details." },
        { property: "og:image", content: p?.image ?? "" },
      ],
    };
  },
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  notFoundComponent: () => (
    <SiteShell>
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-semibold">Product not found</h1>
        <Link to="/" className="mt-4 inline-block text-primary">Back to home</Link>
      </div>
    </SiteShell>
  ),
  errorComponent: () => (
    <SiteShell>
      <div className="container mx-auto px-4 py-20 text-center">Something went wrong.</div>
    </SiteShell>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [qty, setQty] = useState(1);
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 6);

  return (
    <SiteShell>
      <div className="bg-accent py-3">
        <div className="container mx-auto px-4 text-sm font-semibold text-accent-foreground">
          Home  |  {product.name}
        </div>
      </div>

      <section className="container mx-auto mt-8 grid gap-10 px-4 lg:grid-cols-2">
        <div>
          <div className="overflow-hidden rounded-xl border border-border bg-secondary/40">
            <img src={product.image} alt={product.name} className="h-[480px] w-full object-contain p-8" />
          </div>
          <div className="mt-4 grid grid-cols-5 gap-2">
            {[product, ...related.slice(0, 4)].map((p, i) => (
              <div key={i} className="overflow-hidden rounded-md border border-border bg-secondary/40 p-2">
                <img src={p.image} alt={p.name} loading="lazy" className="h-16 w-full object-contain" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <div className="mt-6 space-y-2 border-y border-border py-4 text-sm">
            <Row label="Brand"><span className="text-primary">{product.brand}</span></Row>
            <Row label="Product Code"><span>SKU-{product.slug.slice(0, 6).toUpperCase()}</span></Row>
            <Row label="Reward Points"><span>600</span></Row>
            <Row label="Availability"><span className="text-primary">In Stock</span></Row>
          </div>

          <p className="mt-6 text-3xl font-semibold text-primary">${product.price.toFixed(2)}</p>

          <div className="mt-6 flex items-center gap-4">
            <span className="text-sm font-semibold">Qty :</span>
            <div className="flex items-center overflow-hidden rounded-md border border-border">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="grid h-10 w-10 place-items-center hover:bg-secondary"><Minus size={14} /></button>
              <input value={qty} readOnly className="h-10 w-12 border-x border-border text-center text-sm" />
              <button onClick={() => setQty(qty + 1)} className="grid h-10 w-10 place-items-center hover:bg-secondary"><Plus size={14} /></button>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Add To Cart</button>
            <button className="grid h-12 w-12 place-items-center rounded-md bg-primary text-primary-foreground"><Heart size={18} /></button>
            <button className="grid h-12 w-12 place-items-center rounded-md bg-primary text-primary-foreground"><Repeat2 size={18} /></button>
          </div>

          <div className="mt-6 flex items-center gap-4 border-t border-border pt-4">
            <Stars value={product.rating} />
            <span className="text-sm text-muted-foreground">0 Reviews</span>
            <span className="text-sm text-primary">| Write A Review</span>
          </div>

          <div className="mt-4 flex items-center gap-2 text-sm">
            <Share2 size={16} className="text-primary" /> Share this product
          </div>
        </div>
      </section>

      {/* TABS */}
      <section className="container mx-auto mt-12 px-4">
        <div className="rounded-xl border border-border">
          <div className="flex gap-6 border-b border-border px-6 text-sm font-semibold">
            {["Description", "Specification", "Reviews (0)"].map((t, i) => (
              <button key={t} className={`py-4 ${i === 0 ? "border-b-2 border-primary text-primary" : "text-muted-foreground"}`}>{t}</button>
            ))}
          </div>
          <div className="space-y-4 px-6 py-6 text-sm text-foreground/80">
            <h3 className="font-semibold text-foreground">Premium build, modern craftsmanship</h3>
            <p>Engineered for daily use, the {product.name.toLowerCase()} combines refined materials with a clean, modern silhouette. Built to last and designed to fit effortlessly into your home.</p>
            <h3 className="font-semibold text-foreground">In the box</h3>
            <p>One {product.name}, owner's manual, and a 1-year limited warranty card.</p>
            <h3 className="font-semibold text-foreground">Care & support</h3>
            <p>Wipe with a soft, dry cloth. For service or returns within 30 days, contact our US-based customer support team.</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-12 px-4">
        <h2 className="border-b border-border pb-3 text-2xl font-semibold">Related Products</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {related.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>
    </SiteShell>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-semibold">{label}:</span>
      {children}
    </div>
  );
}