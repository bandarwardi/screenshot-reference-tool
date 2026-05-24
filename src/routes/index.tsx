import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Gift, Headset, ShieldCheck, Truck } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/lib/products";
import heroTv from "@/assets/hero-tv.jpg";
import sideSmart from "@/assets/side-smartphone.jpg";
import promoWatch from "@/assets/promo-watch.jpg";
import promoHeels from "@/assets/p-heels.jpg";
import promoHp from "@/assets/p-headphones.jpg";
import promoSpeakers from "@/assets/promo-speakers.jpg";
import promoHandbag from "@/assets/promo-handbag.jpg";
import promoChair from "@/assets/promo-chair.jpg";
import promoShoe from "@/assets/promo-shoe.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EN Store — Premium Multi-Category Marketplace" },
      { name: "description", content: "Shop electronics, fashion, furniture, audio and more at EN Store. Free shipping on orders over $199." },
    ],
  }),
  component: Index,
});

function Index() {
  const popular = products.slice(0, 6);
  const arrivals = [...products].slice(2, 8);
  const topRated = [...products].reverse().slice(0, 6);

  return (
    <SiteShell>
      {/* HERO */}
      <section className="container mx-auto px-4 pt-6">
        <div className="relative overflow-hidden rounded-2xl bg-[oklch(0.94_0.04_200)]">
          <div className="grid items-center gap-6 p-8 md:grid-cols-2 md:p-14">
            <div className="order-2 md:order-1">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Featured</p>
              <h1 className="mt-3 text-4xl font-bold leading-tight text-foreground md:text-6xl">
                Mi LED Smart TV
              </h1>
              <p className="mt-2 text-xl text-foreground/70">The Bigger Picture.</p>
              <p className="mt-4 max-w-md text-sm text-muted-foreground">
                Cinema-grade visuals, lifelike sound, and effortless smart features. Save up to 30% this season.
              </p>
              <Link
                to="/category/all"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Shop Now <ChevronRight size={16} />
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <img src={heroTv} alt="LED Smart TV" className="mx-auto max-h-[420px] w-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR PRODUCTS */}
      <Section title="Popular Products" tabs={["FEATURED", "BESTSELLER", "LATEST"]}>
        <Grid>{popular.map((p) => <ProductCard key={p.slug} product={p} />)}</Grid>
      </Section>

      {/* ARRIVALS */}
      <Section title="New Arrivals">
        <Grid>{arrivals.map((p) => <ProductCard key={p.slug} product={p} />)}</Grid>
      </Section>

      {/* PROMO TRIPLE */}
      <section className="container mx-auto mt-12 grid gap-4 px-4 md:grid-cols-3">
        {[
          { img: promoWatch, eyebrow: "NEW COLLECTION 2026", title: "New Smart Watch" },
          { img: promoHeels, eyebrow: "NEW COLLECTION 2026", title: "Women HighHeels" },
          { img: promoHp, eyebrow: "PREMIUM SOUND", title: "New Headphones" },
        ].map((b) => (
          <div key={b.title} className="flex items-center gap-4 rounded-xl bg-secondary/60 p-6">
            <img src={b.img} alt={b.title} loading="lazy" className="h-32 w-32 object-contain" />
            <div>
              <p className="text-[10px] font-semibold tracking-widest text-accent-foreground">{b.eyebrow}</p>
              <h3 className="mt-1 text-lg font-semibold">{b.title}</h3>
              <Link to="/category/all" className="mt-3 inline-block rounded-md bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground">Shop Now</Link>
            </div>
          </div>
        ))}
      </section>

      {/* FEATURES STRIP */}
      <section className="container mx-auto mt-10 grid grid-cols-2 gap-4 rounded-xl border border-border px-4 py-6 md:grid-cols-4 md:px-8">
        {[
          { icon: Headset, t: "24/7 Free Support", s: "Available all day" },
          { icon: ShieldCheck, t: "Secure Payment", s: "100% protected checkout" },
          { icon: Gift, t: "Special Gift Cards", s: "Send love to anyone" },
          { icon: Truck, t: "Worldwide Shipping", s: "Free over $199" },
        ].map((f) => (
          <div key={f.t} className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-primary-soft text-primary">
              <f.icon size={22} />
            </div>
            <div>
              <p className="text-sm font-semibold">{f.t}</p>
              <p className="text-xs text-muted-foreground">{f.s}</p>
            </div>
          </div>
        ))}
      </section>

      {/* TOP RATED + SIDE BANNER */}
      <section className="container mx-auto mt-12 grid gap-6 px-4 lg:grid-cols-[280px_1fr]">
        <div className="relative flex flex-col justify-between overflow-hidden rounded-xl bg-foreground p-6 text-background">
          <div>
            <p className="text-xs font-semibold text-accent">Up to 50% off all Products</p>
            <h3 className="mt-2 text-2xl font-bold leading-tight">NEW<br />SMARTPHONE<br />2026</h3>
            <button className="mt-3 text-xs font-bold text-accent">SHOP NOW →</button>
          </div>
          <img src={sideSmart} alt="Smartphones" loading="lazy" className="mt-4 w-full object-contain" />
        </div>
        <div>
          <SectionHeader title="Top Rated" />
          <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {topRated.slice(0, 6).map((p) => (
              <Link
                key={p.slug}
                to="/product/$slug"
                params={{ slug: p.slug }}
                className="flex items-center gap-4 rounded-lg border border-border bg-card p-3 transition-shadow hover:shadow-md"
              >
                <img src={p.image} alt={p.name} loading="lazy" className="h-20 w-20 rounded-md bg-secondary/40 object-contain p-2" />
                <div>
                  <p className="line-clamp-1 text-sm font-medium">{p.name}</p>
                  <p className="mt-1 text-sm font-semibold text-primary">${p.price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROMO DUOS */}
      <section className="container mx-auto mt-12 grid gap-4 px-4 md:grid-cols-2">
        <PromoBlock title="New JBL Eon Speaker" img={promoSpeakers} eyebrow="20% OFF" />
        <PromoBlock title="Fashion Handbags" img={promoHandbag} eyebrow="NEW COLLECTION" />
      </section>
      <section className="container mx-auto mt-4 grid gap-4 px-4 md:grid-cols-2">
        <PromoBlock title="New Furniture Chair" img={promoChair} eyebrow="UP TO 30% OFF" />
        <PromoBlock title="Designed For The Run" img={promoShoe} eyebrow="WHAT'S IN STORE" reverse />
      </section>

      {/* BRANDS */}
      <section className="container mx-auto mt-14 px-4">
        <div className="grid grid-cols-3 items-center gap-6 border-y border-border py-6 text-center text-xl font-semibold tracking-widest text-muted-foreground md:grid-cols-6">
          {["EVERYDAY", "ORGANIC", "natural", "JANE&CO", "ICONIC", "URBAN"].map((b) => (
            <span key={b} className="opacity-70 transition-opacity hover:opacity-100">{b}</span>
          ))}
        </div>
      </section>

      {/* BLOG */}
      <Section title="Latest Blog">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { img: blog1, title: "Rhoncus Ac Finibus Sit Amet" },
            { img: blog2, title: "Sed At Volutpat Ante Mauris" },
            { img: blog3, title: "Fusce Quis Luctus Arcu Vulputate" },
            { img: blog4, title: "Nulla Ultricies Quam Dignissim" },
          ].map((b) => (
            <Link to="/blog" key={b.title} className="group block overflow-hidden rounded-xl border border-border bg-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={b.img} alt={b.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h4 className="line-clamp-2 text-sm font-semibold">{b.title}</h4>
                <p className="mt-3 text-xs font-semibold text-primary">Read More →</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </SiteShell>
  );
}

function SectionHeader({ title, tabs }: { title: string; tabs?: string[] }) {
  return (
    <div className="flex items-center justify-between border-b border-border pb-3">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {tabs && (
        <div className="hidden gap-6 text-xs font-semibold tracking-wider text-muted-foreground md:flex">
          {tabs.map((t, i) => (
            <button key={t} className={i === 0 ? "text-primary" : "hover:text-primary"}>{t}</button>
          ))}
        </div>
      )}
    </div>
  );
}

function Section({ title, children, tabs }: { title: string; children: React.ReactNode; tabs?: string[] }) {
  return (
    <section className="container mx-auto mt-12 px-4">
      <SectionHeader title={title} tabs={tabs} />
      <div className="mt-6">{children}</div>
    </section>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">{children}</div>;
}

function PromoBlock({
  title,
  img,
  eyebrow,
  reverse,
}: {
  title: string;
  img: string;
  eyebrow: string;
  reverse?: boolean;
}) {
  return (
    <div className={`flex items-center gap-4 rounded-xl bg-secondary/60 p-6 ${reverse ? "flex-row-reverse" : ""}`}>
      <img src={img} alt={title} loading="lazy" className="h-40 w-1/2 object-contain" />
      <div className="flex-1">
        <p className="text-[10px] font-semibold tracking-widest text-accent-foreground">{eyebrow}</p>
        <h3 className="mt-1 text-2xl font-semibold leading-tight">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">Premium picks, hand-curated for modern living.</p>
        <Link to="/category/all" className="mt-4 inline-block rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground">Shop Now</Link>
      </div>
    </div>
  );
}
}
