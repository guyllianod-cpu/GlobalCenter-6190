/**
 * Fiche produit : image, description, plantes, bienfaits, usage,
 * précautions, certifications, demande de devis. JSON-LD Product.
 */
import { Link, useParams } from "wouter";
import { ArrowLeft, Check, AlertTriangle, BadgeCheck, FileText, MessageCircle, Leaf } from "lucide-react";
import { useI18n } from "../lib/i18n";
import { Seo, breadcrumbLd } from "../components/seo";
import { ProductCard } from "../components/cards";
import { Reveal } from "../components/reveal";
import { useOverlays } from "../components/overlays";
import { CERTS, NEEDS, PRODUCTS, productBySlug } from "../data/products";
import { plantBySlug } from "../data/plants";
import { SITE } from "../data/site";
import NotFound from "./not-found";

export default function ProductPage() {
  const { slug = "" } = useParams<{ slug: string }>();
  const { l, ui } = useI18n();
  const { openQuote } = useOverlays();
  const p = productBySlug(slug);
  if (!p) return <NotFound />;

  const name = l(p.name);
  const related = PRODUCTS.filter((x) => x.range === p.range && x.slug !== p.slug).slice(0, 4);
  const plants = p.plants.map(plantBySlug).filter((x) => !!x);
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`${name} — ${ui.cta.quote}`)}`;

  const ld = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description: l(p.description),
    image: `${SITE.url}${p.image}`,
    sku: p.slug,
    brand: { "@type": "Brand", name: SITE.name },
    category: ui.ranges[p.range],
  };

  return (
    <>
      <Seo
        title={name}
        description={l(p.tagline) + ". " + l(p.description).slice(0, 120)}
        path={`/produits/${p.slug}`}
        image={p.image}
        type="product"
        jsonLd={[
          ld,
          breadcrumbLd([
            { name: ui.nav.home, path: "/" },
            { name: ui.nav.products, path: "/produits" },
            { name, path: `/produits/${p.slug}` },
          ]),
        ]}
      />

      <section className="pt-28 pb-14 lg:pt-36">
        <div className="container-gcp">
          {/* Fil d'Ariane */}
          <nav aria-label="Breadcrumb" className="text-sm text-slate">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-blue">{ui.nav.home}</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/produits" className="hover:text-blue">{ui.nav.products}</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-ink">{name}</li>
            </ol>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="hero-in">
              <div className="relative overflow-hidden rounded-[32px] bg-mist">
                <img src={p.image} alt={name} fetchPriority="high" className="aspect-square w-full object-cover" />
                <span className={`chip absolute top-4 start-4 bg-white/95 ${p.range === "pharma" ? "chip-blue" : ""}`}>{ui.ranges[p.range]}</span>
              </div>
            </div>

            <div className="hero-in" style={{ animationDelay: "120ms" }}>
              <p className="text-sm font-semibold text-leaf-ink">{l(NEEDS[p.need].label)}</p>
              <h1 className="h1 mt-2 text-[clamp(1.9rem,3.6vw,2.8rem)]">{name}</h1>
              <p className="mt-2 text-lg font-medium text-blue">{l(p.tagline)}</p>
              <p className="lead mt-5">{l(p.description)}</p>

              <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm">
                <div><dt className="inline font-semibold">{ui.product.format} : </dt><dd className="inline text-slate">{l(p.format)}</dd></div>
              </dl>

              <div className="mt-8 flex flex-wrap gap-3">
                <button type="button" onClick={() => openQuote(name)} className="btn btn-primary">
                  <FileText className="size-5" aria-hidden="true" />
                  {ui.cta.quote}
                </button>
                <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <MessageCircle className="size-5" aria-hidden="true" />
                  {ui.cta.whatsapp}
                </a>
              </div>

              {/* Bienfaits */}
              <div className="mt-10">
                <h2 className="text-lg font-bold">{ui.product.benefits}</h2>
                <ul className="mt-3 space-y-2">
                  {l(p.benefits).map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-mint text-leaf-ink"><Check className="size-4" aria-hidden="true" /></span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Détails */}
      <section className="section bg-mist">
        <div className="container-gcp grid gap-6 lg:grid-cols-3">
          <Reveal className="card p-7">
            <h2 className="flex items-center gap-2 text-lg font-bold"><Leaf className="size-5 text-leaf" aria-hidden="true" />{ui.product.plants}</h2>
            <ul className="mt-4 space-y-3">
              {plants.map((pl) => (
                <li key={pl.slug}>
                  <Link href={`/plantes#${pl.slug}`} className="flex items-center gap-3 rounded-xl p-1.5 hover:bg-mist">
                    <img src={pl.image} alt="" loading="lazy" className="size-12 rounded-xl object-cover" />
                    <span>
                      <span className="block font-semibold text-ink">{l(pl.name)}</span>
                      {pl.latin && <span className="block text-xs italic text-slate" lang="la">{pl.latin}</span>}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-6 font-bold">{ui.product.usage}</h3>
            <p className="mt-2 text-sm text-slate">{l(p.usage)}</p>
          </Reveal>

          <Reveal delay={100} className="card p-7">
            <h2 className="flex items-center gap-2 text-lg font-bold"><BadgeCheck className="size-5 text-blue" aria-hidden="true" />{ui.product.certifications}</h2>
            <ul className="mt-4 space-y-2.5">
              {p.certs.map((c) => (
                <li key={c} className="flex gap-2.5 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-leaf-ink" aria-hidden="true" />{l(CERTS[c])}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200} className="card border-amber-200 bg-amber-50/60 p-7">
            <h2 className="flex items-center gap-2 text-lg font-bold"><AlertTriangle className="size-5 text-amber-700" aria-hidden="true" />{ui.product.precautions}</h2>
            <p className="mt-4 text-sm text-ink">{l(p.precautions)}</p>
            <p className="mt-4 text-sm font-semibold text-ink">{ui.footer.medical}</p>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section">
          <div className="container-gcp">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="h2">{ui.product.related}</h2>
              <Link href={`/produits?gamme=${p.range}`} className="inline-flex items-center gap-2 font-semibold text-blue">
                <ArrowLeft className="size-4 ltr:rotate-180" aria-hidden="true" />
                {ui.cta.seeAll}
              </Link>
            </div>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((r) => <li key={r.slug}><ProductCard p={r} /></li>)}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
