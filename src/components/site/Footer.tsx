import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20">
      {/* sale strip */}
      <div className="bg-primary py-6 text-primary-foreground">
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 sm:flex-row">
          <p className="text-lg font-semibold tracking-wide">
            SALE BACK FRIDAY OFFER <span className="text-accent">BUY 1 GET 2 FREE</span>
          </p>
          <Link to="/specials" className="rounded-md bg-accent px-5 py-2 text-sm font-bold text-accent-foreground">
            SHOP NOW!
          </Link>
        </div>
      </div>

      {/* newsletter */}
      <div className="border-b border-border bg-strip py-10">
        <div className="container mx-auto grid gap-6 px-4 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-2xl font-semibold">Sign Up For Newsletter</h3>
            <p className="mt-1 text-sm text-muted-foreground">Get the latest deals, drops and exclusives, direct to your inbox.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="flex overflow-hidden rounded-md border border-border bg-background">
            <input className="h-12 flex-1 px-4 text-sm outline-none placeholder:text-muted-foreground" placeholder="Your email address" />
            <button className="bg-accent px-6 text-sm font-bold uppercase text-accent-foreground">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="space-y-3 text-sm">
          <h4 className="text-base font-semibold uppercase tracking-wide">Contact Us</h4>
          <p className="flex items-start gap-2 text-muted-foreground"><MapPin size={16} className="mt-0.5 text-primary" />EN Store HQ<br />Brooklyn, NY 11201, United States</p>
          <p className="flex items-center gap-2 text-muted-foreground"><Phone size={16} className="text-primary" />(+1) 800 154 4489</p>
          <p className="flex items-center gap-2 text-muted-foreground"><Mail size={16} className="text-primary" />hello@enstore.com</p>
          <div className="pt-3">
            <h5 className="mb-2 font-semibold">Follow Us</h5>
            <div className="flex gap-2">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {[
          { title: "Information", links: ["About Us", "Delivery Information", "Privacy Policy", "Terms & Conditions"] },
          { title: "Our Company", links: ["My Account", "Order History", "Wish List", "Newsletter", "Specials"] },
          { title: "Category", links: ["Electronics", "Fashion", "Furniture", "Audio", "Bags", "Shoes"] },
          { title: "Customer Service", links: ["Contact Us", "Returns", "Site Map", "Gift Certificates", "Affiliate"] },
        ].map((col) => (
          <div key={col.title} className="space-y-3 text-sm">
            <h4 className="text-base font-semibold uppercase tracking-wide">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-muted-foreground transition-colors hover:text-primary">› {l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border bg-strip/60 py-6">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} EN Store. All Rights Reserved. Made in the United States.</p>
          <div className="flex items-center gap-3 opacity-70">
            <span className="rounded bg-background px-3 py-1.5 font-semibold">VISA</span>
            <span className="rounded bg-background px-3 py-1.5 font-semibold">MC</span>
            <span className="rounded bg-background px-3 py-1.5 font-semibold">AMEX</span>
            <span className="rounded bg-background px-3 py-1.5 font-semibold">PAYPAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}