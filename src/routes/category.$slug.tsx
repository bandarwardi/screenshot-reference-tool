import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/lib/products";
import sideSmart from "@/assets/side-smartphone.jpg";

export const Route = createFileRoute("/category/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${cap(params.slug)} — EN Store` },
      { name: "description", content: `Browse ${cap(params.slug)} at EN Store.` },
    ],
  }),
  component: CategoryPage,
});

function cap(s: string) {
  return s === "all" ? "All Products" : s[0].toUpperCase() + s.slice(1);
}

function CategoryPage() {
  const { slug } = Route.useParams();
  const list = slug === "all" ? products : products.filter((p) => p.category.toLowerCase() === slug.toLowerCase());
  const filtered = list.length ? list : products;

  return (
    <SiteShell>
      <div className="bg-accent py-3">
        <div className="container mx-auto px-4 text-sm font-semibold text-accent-foreground">Home  |  {cap(slug)}</div>
      </div>

      <section className="container mx-auto mt-6 grid gap-6 px-4 lg:grid-cols-[260px_1fr]">
        {/* SIDEBAR */}
        <aside className="space-y-4">
          <div className="rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-accent-foreground">REFINE SEARCH</div>
          <Filter title="Color" options={["Black (3)", "Red (3)", "Blue (2)"]} />
          <Filter title="Size" options={["Large (3)", "Small (3)", "Medium (2)"]} />
          <Filter title="Brand" options={["Atelier", "Sonox", "Mi", "Plesano"]} />
          <button className="w-full rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Refine Search</button>
          <div className="rounded-lg border border-border p-4 text-sm">
            <p className="mb-3 font-semibold text-primary">▾ ACCOUNT SETTINGS</p>
            {["Login", "Register", "Forgotten Password", "My Account"].map((l) => (
              <Link key={l} to="/account" className="block py-1 text-muted-foreground hover:text-primary">{l}</Link>
            ))}
          </div>
          <div className="overflow-hidden rounded-lg bg-foreground p-5 text-background">
            <p className="text-xs font-semibold text-accent">Up to 50% off</p>
            <h3 className="mt-2 text-lg font-bold leading-tight">NEW SMARTPHONE 2026</h3>
            <p className="mt-1 text-xs font-bold text-accent">SHOP NOW →</p>
            <img src={sideSmart} alt="Promo" loading="lazy" className="mt-3 w-full object-contain" />
          </div>
        </aside>

        <div>
          <h1 className="border-b border-border pb-3 text-2xl font-semibold">{cap(slug)}</h1>
          <p className="mt-2 text-sm text-muted-foreground">Discover our curated {cap(slug).toLowerCase()} selection.</p>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border bg-strip/50 px-4 py-3 text-sm">
            <div className="text-muted-foreground">Compare (0)</div>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">Sort By: <select className="rounded border border-border bg-background px-2 py-1"><option>Default</option><option>Price low → high</option></select></label>
              <label className="flex items-center gap-2">Show: <select className="rounded border border-border bg-background px-2 py-1"><option>15</option></select></label>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>

          <p className="mt-6 text-right text-sm text-muted-foreground">Showing 1 to {filtered.length} of {filtered.length} (1 Pages)</p>
        </div>
      </section>
    </SiteShell>
  );
}

function Filter({ title, options }: { title: string; options: string[] }) {
  return (
    <div className="rounded-lg border border-border p-4 text-sm">
      <p className="mb-2 font-semibold">{title}</p>
      {options.map((o) => (
        <label key={o} className="flex items-center gap-2 py-1 text-muted-foreground">
          <input type="checkbox" className="accent-primary" /> {o}
        </label>
      ))}
    </div>
  );
}