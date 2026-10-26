/**
 * Catalogue produits : filtres par gamme et par besoin + recherche texte.
 * Les filtres sont synchronisés avec l'URL (?gamme=cosmetic|pharma&besoin=…&q=…)
 * pour pouvoir partager un lien filtré.
 */
import { useMemo } from "react";
import { useLocation, useSearch } from "wouter";
import { Search, X, FileDown, FileText } from "lucide-react";
import { useI18n, type L } from "../lib/i18n";
import { Seo, breadcrumbLd } from "../components/seo";
import { PageHero } from "../components/section";
import { ProductCard } from "../components/cards";
import { Reveal } from "../components/reveal";
import { useOverlays } from "../components/overlays";
import { NEEDS, PRODUCTS, type Need, type Range } from "../data/products";
import { plantBySlug } from "../data/plants";
import { SITE } from "../data/site";

const T: L<{ desc: string; title: string; text: string; range: string }> = {
  fr: {
    desc: "Découvrez nos cosmétiques bio et nos produits pharmaceutiques bio à base de plantes médicinales : soins visage, corps, cheveux, compléments et préparations.",
    title: "Nos produits",
    text: "Deux gammes complémentaires, formulées à partir de plantes médicinales sélectionnées : des soins cosmétiques pour sublimer la peau et les cheveux, et des produits pharmaceutiques pour accompagner le bien-être au quotidien.",
    range: "Gamme",
  },
  en: {
    desc: "Discover our organic cosmetics and organic pharmaceutical products based on medicinal plants: face, body and hair care, supplements and preparations.",
    title: "Our products",
    text: "Two complementary ranges formulated from selected medicinal plants: cosmetic care to enhance skin and hair, and pharmaceutical products to support everyday well-being.",
    range: "Range",
  },
  ar: {
    desc: "اكتشف مستحضرات التجميل العضوية والمنتجات الصيدلانية العضوية القائمة على النباتات الطبية: العناية بالوجه والجسم والشعر والمكمّلات.",
    title: "منتجاتنا",
    text: "مجموعتان متكاملتان مركّبتان من نباتات طبية مختارة: منتجات تجميل لإبراز جمال البشرة والشعر، ومنتجات صيدلانية لمرافقة العافية اليومية.",
    range: "المجموعة",
  },
};

const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

export default function Products() {
  const { l, ui, lang } = useI18n();
  const t = l(T);
  const { openQuote } = useOverlays();
  const search = useSearch();
  const [loc, navigate] = useLocation();

  // État dérivé de l'URL
  const params = new URLSearchParams(search);
  const range = (["cosmetic", "pharma"].includes(params.get("gamme") ?? "") ? params.get("gamme") : null) as Range | null;
  const need = (params.get("besoin") as Need | null) ?? null;
  const q = params.get("q") ?? "";

  const update = (patch: Record<string, string | null>) => {
    const next = new URLSearchParams(search);
    Object.entries(patch).forEach(([k, v]) => (v ? next.set(k, v) : next.delete(k)));
    const s = next.toString();
    navigate(`${loc}${s ? `?${s}` : ""}`, { replace: true });
  };

  const needs = (Object.keys(NEEDS) as Need[]).filter((n) => !range || NEEDS[n].range === range);

  const list = useMemo(() => {
    const nq = norm(q.trim());
    return PRODUCTS.filter((p) => {
      if (range && p.range !== range) return false;
      if (need && p.need !== need) return false;
      if (nq.length < 2) return true;
      const hay = [
        p.name[lang], p.tagline[lang], p.description[lang], p.name.fr,
        ...p.plants.map((s) => plantBySlug(s)?.name[lang] ?? s),
      ].join(" ");
      return norm(hay).includes(nq);
    });
  }, [range, need, q, lang]);

  const chip = (active: boolean) =>
    `min-h-11 rounded-full border px-4 text-sm font-semibold transition ${
      active ? "border-blue bg-blue text-white" : "border-line bg-white text-ink hover:border-blue hover:text-blue"
    }`;

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: PRODUCTS.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE.url}/produits/${p.slug}`, name: p.name[lang] })),
  };

  return (
    <>
      <Seo
        title={t.title}
        description={t.desc}
        path="/produits"
        jsonLd={[itemList, breadcrumbLd([{ name: ui.nav.home, path: "/" }, { name: ui.nav.products, path: "/produits" }])]}
      />
      <PageHero eyebrow={ui.nav.products} title={t.title} text={t.text} image="/images/collection.webp">
        <a href={SITE.catalogPdf} download className="btn btn-primary">
          <FileDown className="size-5" aria-hidden="true" />
          {ui.cta.catalogLong}
        </a>
        <button type="button" onClick={() => openQuote()} className="btn btn-outline">
          <FileText className="size-5" aria-hidden="true" />
          {ui.cta.quote}
        </button>
      </PageHero>

      <section className="section pt-6" aria-label={ui.product.filters}>
        <div className="container-gcp">
          {/* Barre de filtres */}
          <div className="card sticky top-[76px] z-20 space-y-4 p-4 sm:p-5 lg:top-[84px]">
            <div className="relative">
              <label htmlFor="catalog-q" className="sr-only">{ui.product.searchLabel}</label>
              <Search className="pointer-events-none absolute start-4 top-1/2 size-5 -translate-y-1/2 text-slate" aria-hidden="true" />
              <input
                id="catalog-q"
                type="search"
                value={q}
                onChange={(e) => update({ q: e.target.value || null })}
                placeholder={ui.search.placeholder}
                aria-label={ui.product.searchLabel}
                className="field ps-12"
              />
            </div>
            <fieldset className="flex flex-wrap items-center gap-2">
              <legend className="sr-only">{t.range}</legend>
              <span aria-hidden="true" className="me-1 text-sm font-semibold text-slate">{t.range} :</span>
              <button type="button" className={chip(!range)} aria-pressed={!range} onClick={() => update({ gamme: null, besoin: null })}>{ui.product.all}</button>
              {(["cosmetic", "pharma"] as Range[]).map((r) => (
                <button key={r} type="button" className={chip(range === r)} aria-pressed={range === r} onClick={() => update({ gamme: r, besoin: null })}>
                  {ui.ranges[r]}
                </button>
              ))}
            </fieldset>
            <fieldset className="flex flex-wrap items-center gap-2">
              <legend className="sr-only">{ui.product.need}</legend>
              <span aria-hidden="true" className="me-1 text-sm font-semibold text-slate">{ui.product.need} :</span>
              <button type="button" className={chip(!need)} aria-pressed={!need} onClick={() => update({ besoin: null })}>{ui.product.all}</button>
              {needs.map((n) => (
                <button key={n} type="button" className={chip(need === n)} aria-pressed={need === n} onClick={() => update({ besoin: n })}>
                  {l(NEEDS[n].label)}
                </button>
              ))}
            </fieldset>
          </div>

          <p className="mt-8 text-sm text-slate" aria-live="polite">
            <strong className="text-ink">{list.length}</strong> {ui.product.results}
          </p>

          {list.length ? (
            <ul className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {list.map((p, i) => (
                <Reveal as="li" key={p.slug} delay={(i % 4) * 60}>
                  <ProductCard p={p} />
                </Reveal>
              ))}
            </ul>
          ) : (
            <div className="mt-8 rounded-[24px] border border-dashed border-line p-12 text-center">
              <p className="text-slate">{ui.product.noResult}</p>
              <button type="button" className="btn btn-outline mt-5" onClick={() => update({ q: null, gamme: null, besoin: null })}>
                <X className="size-4" aria-hidden="true" />
                {ui.product.reset}
              </button>
            </div>
          )}

          <p className="mt-12 rounded-2xl bg-mint/70 p-5 text-sm text-ink">{ui.footer.medical}</p>
        </div>
      </section>
    </>
  );
}
