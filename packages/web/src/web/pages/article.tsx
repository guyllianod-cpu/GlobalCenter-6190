/**
 * Article de blog. Corps rédigé en français (mention affichée en EN/AR).
 * JSON-LD Article.
 */
import { Link, useParams } from "wouter";
import { ArrowLeft, Clock, Info } from "lucide-react";
import { formatDate, useI18n } from "../lib/i18n";
import { Seo, breadcrumbLd } from "../components/seo";
import { PostCard } from "../components/cards";
import { POSTS, postBySlug } from "../data/posts";
import { SITE } from "../data/site";
import NotFound from "./not-found";

export default function Article() {
  const { slug = "" } = useParams<{ slug: string }>();
  const { l, ui, lang } = useI18n();
  const p = postBySlug(slug);
  if (!p) return <NotFound />;

  const title = l(p.title);
  const others = POSTS.filter((x) => x.slug !== p.slug).slice(0, 3);
  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: l(p.excerpt),
    image: `${SITE.url}${p.image}`,
    datePublished: p.date,
    inLanguage: "fr",
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name, logo: { "@type": "ImageObject", url: `${SITE.url}/brand/icon-512.png` } },
  };

  return (
    <>
      <Seo
        title={title}
        description={l(p.excerpt)}
        path={`/blog/${p.slug}`}
        image={p.image}
        type="article"
        jsonLd={[ld, breadcrumbLd([{ name: ui.nav.home, path: "/" }, { name: ui.nav.blog, path: "/blog" }, { name: title, path: `/blog/${p.slug}` }])]}
      />
      <article className="pt-28 lg:pt-36">
        <header className="container-gcp max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-blue">
            <ArrowLeft className="size-4 rtl:-scale-x-100" aria-hidden="true" />
            {ui.cta.back}
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate">
            <span className="chip">{l(p.category)}</span>
            <time dateTime={p.date}>{formatDate(p.date, lang)}</time>
            <span className="inline-flex items-center gap-1"><Clock className="size-4" aria-hidden="true" />{p.minutes} {ui.blog.minutes}</span>
          </div>
          <h1 className="h1 mt-4 text-[clamp(1.9rem,4vw,3rem)]">{title}</h1>
          <p className="lead mt-4">{l(p.excerpt)}</p>
        </header>
        <div className="container-gcp mt-10 max-w-5xl">
          <img src={p.image} alt="" fetchPriority="high" className="aspect-[2/1] w-full rounded-[32px] object-cover" />
        </div>
        <div className="container-gcp max-w-3xl py-12">
          {lang !== "fr" && ui.blog.frOnly && (
            <p className="mb-8 flex gap-3 rounded-2xl bg-mist p-4 text-sm"><Info className="size-5 shrink-0 text-blue" aria-hidden="true" />{ui.blog.frOnly}</p>
          )}
          <div className="prose-gcp" lang="fr" dir="ltr">
            {p.body.map((b, i) =>
              "h" in b ? <h2 key={i}>{b.h}</h2> : "p" in b ? <p key={i}>{b.p}</p> : <ul key={i}>{b.ul.map((x) => <li key={x}>{x}</li>)}</ul>,
            )}
          </div>
          <p className="mt-10 rounded-2xl bg-mint/70 p-5 text-sm">{ui.footer.medical}</p>
        </div>
      </article>
      <section className="section bg-mist">
        <div className="container-gcp">
          <h2 className="h2">{ui.blog.all}</h2>
          <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => <li key={o.slug}><PostCard p={o} /></li>)}
          </ul>
        </div>
      </section>
    </>
  );
}
