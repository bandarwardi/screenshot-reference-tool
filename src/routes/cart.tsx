import { createFileRoute, Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Cart — EN Store" }] }),
  component: () => (
    <SiteShell>
      <div className="container mx-auto px-4 py-20 text-center">
        <ShoppingBag size={56} className="mx-auto text-primary" />
        <h1 className="mt-4 text-2xl font-semibold">Your cart is empty</h1>
        <p className="mt-2 text-sm text-muted-foreground">Browse our latest collections and find your next favorite.</p>
        <Link to="/category/$slug" params={{ slug: "all" }} className="mt-6 inline-block rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">Continue Shopping</Link>
      </div>
    </SiteShell>
  ),
});