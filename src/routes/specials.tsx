import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/lib/products";

export const Route = createFileRoute("/specials")({
  head: () => ({ meta: [{ title: "Special Offers — EN Store" }, { name: "description", content: "Limited time deals on premium products at EN Store." }] }),
  component: Specials,
});

function Specials() {
  const specials = products.filter((p) => p.oldPrice).concat(products.slice(0, 4));
  return (
    <SiteShell>
      <Crumbs label="Special Offers" />
      <section className="container mx-auto mt-6 px-4">
        <h1 className="border-b border-border pb-3 text-2xl font-semibold">Special Offers</h1>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {specials.map((p, i) => <ProductCard key={p.slug + i} product={p} />)}
        </div>
      </section>
    </SiteShell>
  );
}

function Crumbs({ label }: { label: string }) {
  return (
    <div className="bg-accent py-3">
      <div className="container mx-auto px-4 text-sm font-semibold text-accent-foreground">
        Home  |  {label}
      </div>
    </div>
  );
}