import { Link } from "@tanstack/react-router";
import {
  ChevronDown,
  Globe,
  Headset,
  Heart,
  Menu,
  Repeat2,
  Search,
  ShoppingBag,
  Tag,
  User,
} from "lucide-react";

const nav = [
  { label: "Home", to: "/" },
  { label: "Specials", to: "/specials" },
  { label: "Categories", to: "/category/all" },
  { label: "Brands", to: "/brands" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background">
      {/* announcement */}
      <div className="bg-strip text-xs">
        <div className="container mx-auto flex h-9 items-center justify-between px-4">
          <div className="flex items-center gap-2 font-medium text-foreground/80">
            <Tag size={14} className="text-accent-foreground" />
            Free Shipping Worldwide On Orders Over <span className="font-semibold">$199</span>
          </div>
          <div className="hidden items-center gap-5 text-muted-foreground md:flex">
            <button className="flex items-center gap-1 hover:text-primary"><span>USD</span><ChevronDown size={12} /></button>
            <button className="flex items-center gap-1 hover:text-primary"><Globe size={12} /><span>English</span><ChevronDown size={12} /></button>
            <Link to="/compare" className="flex items-center gap-1 hover:text-primary"><Repeat2 size={12} />Compare</Link>
            <Link to="/wishlist" className="flex items-center gap-1 hover:text-primary"><Heart size={12} />Wishlist</Link>
          </div>
        </div>
      </div>

      {/* main header */}
      <div className="border-b border-border bg-background">
        <div className="container mx-auto flex items-center justify-between gap-6 px-4 py-5">
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary text-primary-foreground font-bold">EN</div>
            <span className="text-2xl font-bold tracking-tight">
              EN <span className="text-primary">STORE</span>
              <span className="text-accent-foreground">.</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm font-semibold uppercase tracking-wide text-foreground/80 transition-colors hover:text-primary"
                activeProps={{ className: "text-primary" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <Link to="/account" className="hidden items-center gap-2 md:flex">
              <User size={28} strokeWidth={1.4} className="text-foreground/70" />
              <div className="text-left text-xs leading-tight">
                <div className="font-semibold">My Account</div>
                <div className="text-muted-foreground">Register</div>
              </div>
            </Link>
            <Link to="/cart" className="flex items-center gap-2">
              <div className="relative">
                <ShoppingBag size={28} strokeWidth={1.4} className="text-foreground/70" />
                <span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">0</span>
              </div>
              <div className="hidden text-left text-xs leading-tight md:block">
                <div className="font-semibold">My Cart</div>
                <div className="text-muted-foreground">(0 items)</div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* search bar */}
      <div className="border-b border-border bg-strip/60">
        <div className="container mx-auto flex items-center gap-3 px-4 py-3">
          <button className="hidden items-center gap-3 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground lg:flex">
            <Menu size={18} />
            ALL CATEGORIES
            <ChevronDown size={14} />
          </button>
          <div className="flex flex-1 items-center overflow-hidden rounded-md border border-border bg-background">
            <input
              type="text"
              placeholder="Search products, brands and categories"
              className="h-12 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-muted-foreground"
            />
            <div className="hidden items-center gap-1 border-l border-border px-4 text-sm text-muted-foreground md:flex">
              Categories <ChevronDown size={14} />
            </div>
            <button className="grid h-12 w-14 place-items-center bg-primary text-primary-foreground hover:bg-primary/90">
              <Search size={18} />
            </button>
          </div>
          <div className="hidden items-center gap-2 px-2 md:flex">
            <Headset size={32} className="text-primary" strokeWidth={1.4} />
            <div className="text-xs leading-tight">
              <div className="font-semibold">(+1) 800 154 4489</div>
              <div className="text-muted-foreground">Customer Support</div>
            </div>
          </div>
          <Link to="/specials" className="hidden rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground hover:brightness-95 lg:block">
            Special Offer !
          </Link>
        </div>
      </div>
    </header>
  );
}