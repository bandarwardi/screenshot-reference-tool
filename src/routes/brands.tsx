import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/brands")({
  head: () => ({ meta: [{ title: "Brands — EN Store" }, { name: "description", content: "Shop by brand at EN Store." }] }),
  component: Brands,
});

const brands = ["EVERYDAY", "ORGANIC", "natural", "JANE&CO", "ICONIC", "URBAN", "ATELIER", "LUMIÈRE", "NORTHBOUND", "STRIDER", "SONOX", "BOTANIK"];

function Brands() {
  return (
    <SiteShell>
      <div className="bg-accent py-3">
        <div className="container mx-auto px-4 text-sm font-semibold text-accent-foreground">Home  |  Brands</div>
      </div>
      <section className="container mx-auto mt-8 px-4">
        <h1 className="border-b border-border pb-3 text-2xl font-semibold">All Brands</h1>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((b) => (
            <div key={b} className="grid aspect-[3/2] place-items-center rounded-lg border border-border bg-card text-lg font-semibold tracking-widest text-muted-foreground transition-colors hover:border-primary hover:text-primary">
              {b}
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}