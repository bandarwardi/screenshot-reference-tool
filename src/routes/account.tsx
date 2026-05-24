import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/account")({
  head: () => ({ meta: [{ title: "My Account — EN Store" }] }),
  component: () => (
    <SiteShell>
      <div className="container mx-auto mt-10 grid max-w-md gap-4 rounded-xl border border-border p-8">
        <h1 className="text-2xl font-semibold">Sign In</h1>
        <input className="h-11 rounded-md border border-border bg-background px-4 text-sm outline-none focus:border-primary" placeholder="Email" />
        <input type="password" className="h-11 rounded-md border border-border bg-background px-4 text-sm outline-none focus:border-primary" placeholder="Password" />
        <button className="rounded-md bg-primary py-3 text-sm font-semibold text-primary-foreground">Login</button>
        <p className="text-center text-xs text-muted-foreground">No account? <Link to="/account" className="text-primary">Register</Link></p>
      </div>
    </SiteShell>
  ),
});