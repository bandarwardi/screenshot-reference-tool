import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [{ title: "Blog — EN Store" }, { name: "description", content: "Stories, trends and guides from EN Store." }] }),
  component: Blog,
});

const posts = [
  { img: blog1, title: "Rhoncus Ac Finibus Sit Amet", excerpt: "Sed libero massa, rhoncus ac finibus sit amet, ullamcorper eu magna. Ut elementum volutpat placerat.", comments: 1 },
  { img: blog2, title: "Sed At Volutpat Ante Mauris A Laoreet", excerpt: "Mauris at libero felis. Etiam vel convallis nunc, vitae sodales turpis. Aliquam sed imperdiet odio.", comments: 0 },
  { img: blog3, title: "Fusce Quis Luctus Arcu Quis Vulputate", excerpt: "Nulla ultricies quam dignissim risus porta, at fringilla erat tempus. Fusce quis luctus arcu.", comments: 2 },
  { img: blog4, title: "Nulla Ultricies Quam Dignissim Risus", excerpt: "Praesent malesuada urna sapien, mollis finibus leo sollicitudin mattis. Etiam sollicitudin facilisis.", comments: 0 },
];

function Blog() {
  return (
    <SiteShell>
      <div className="bg-accent py-3">
        <div className="container mx-auto px-4 text-sm font-semibold text-accent-foreground">Home  |  Blogs</div>
      </div>
      <section className="container mx-auto mt-8 space-y-8 px-4">
        {posts.map((p) => (
          <article key={p.title} className="grid gap-6 rounded-xl border border-border bg-card p-4 md:grid-cols-[320px_1fr]">
            <img src={p.img} alt={p.title} loading="lazy" className="h-56 w-full rounded-lg object-cover" />
            <div>
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="mt-2 text-xs text-muted-foreground">04/16/2026  |  {p.comments} Comments  |  Leave Comments</p>
              <p className="mt-3 text-sm text-foreground/80">{p.excerpt}</p>
              <button className="mt-4 rounded-md bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground">READ MORE</button>
            </div>
          </article>
        ))}
      </section>
    </SiteShell>
  );
}