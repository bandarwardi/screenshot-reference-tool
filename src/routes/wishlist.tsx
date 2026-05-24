import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/wishlist")({
  head: () => ({ meta: [{ title: "Wishlist — EN Store" }] }),
  component: () => (
    <SiteShell>
      <div className="container mx-auto px-4 py-20 text-center">
        <Heart size={56} className="mx-auto text-primary" />
        <h1 className="mt-4 text-2xl font-semibold">Your wishlist is empty</h1>
        <Link to="/category/$slug" params={{ slug: "all" }} className="mt-6 inline-block rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">Start Shopping</Link>
      </div>
    </SiteShell>
  ),
});