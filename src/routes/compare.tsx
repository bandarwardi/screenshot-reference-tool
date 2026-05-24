import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/compare")({
  head: () => ({ meta: [{ title: "Compare — EN Store" }] }),
  component: () => (
    <SiteShell>
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-semibold">Product Compare</h1>
        <p className="mt-2 text-sm text-muted-foreground">You haven't added any products to compare yet.</p>
        <Link to="/category/$slug" params={{ slug: "all" }} className="mt-6 inline-block rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">Browse Products</Link>
      </div>
    </SiteShell>
  ),
});