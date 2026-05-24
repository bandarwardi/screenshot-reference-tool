import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — EN Store" }, { name: "description", content: "Get in touch with EN Store customer support." }] }),
  component: Contact,
});

function Contact() {
  return (
    <SiteShell>
      <div className="bg-accent py-3">
        <div className="container mx-auto px-4 text-sm font-semibold text-accent-foreground">Home  |  Contact</div>
      </div>
      <section className="container mx-auto mt-10 grid gap-10 px-4 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-semibold">Get in touch</h1>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">We'd love to hear from you. Our friendly team is always ready to help.</p>
          <div className="mt-6 space-y-4 text-sm">
            <p className="flex items-start gap-3"><MapPin className="text-primary" size={18} />EN Store HQ, Brooklyn, NY 11201, United States</p>
            <p className="flex items-center gap-3"><Phone className="text-primary" size={18} />(+1) 800 154 4489</p>
            <p className="flex items-center gap-3"><Mail className="text-primary" size={18} />hello@enstore.com</p>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4 rounded-xl border border-border bg-card p-6">
          <input className="h-11 w-full rounded-md border border-border bg-background px-4 text-sm outline-none focus:border-primary" placeholder="Your name" />
          <input className="h-11 w-full rounded-md border border-border bg-background px-4 text-sm outline-none focus:border-primary" placeholder="Email address" />
          <input className="h-11 w-full rounded-md border border-border bg-background px-4 text-sm outline-none focus:border-primary" placeholder="Subject" />
          <textarea rows={5} className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Message" />
          <button className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">Send Message</button>
        </form>
      </section>
    </SiteShell>
  );
}