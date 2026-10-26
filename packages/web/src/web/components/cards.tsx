/** Cartes réutilisables : produit, plante, article */
import { Link } from "wouter";
import { ArrowRight, Clock } from "lucide-react";
import { formatDate, useI18n } from "../lib/i18n";
import type { Product } from "../data/products";
import { plantBySlug, type Plant } from "../data/plants";
import type { Post } from "../data/posts";
import { PLANT_SHEETS } from "../data/plant-sheets";

export function ProductCard({ p }: { p: Product }) {
  const { ui, l } = useI18n();
  return (
    <article className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
      <Link href={`/produits/${p.slug}`} className="relative block overflow-hidden bg-mist" tabIndex={-1} aria-hidden="true">
        <img src={p.image} alt="" loading="lazy" className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
        <span className={`chip absolute top-3 start-3 ${p.range === "pharma" ? "chip-blue" : ""} bg-white/95`}>
          {p.range === "cosmetic" ? ui.ranges.cosmetic : ui.ranges.pharma}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[1.08rem] font-bold">
          <Link href={`/produits/${p.slug}`} className="hover:text-blue">{l(p.name)}</Link>
        </h3>
        <p className="mt-1 text-sm text-slate">{l(p.tagline)}</p>
        <p className="mt-3 text-xs font-semibold text-leaf-ink">
          {p.plants.map((s) => (plantBySlug(s) ? l(plantBySlug(s)!.name) : s)).join(" · ")}
        </p>
        <Link href={`/produits/${p.slug}`} className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-blue">
          {ui.cta.seeProduct}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" aria-hidden="true" />
          <span className="sr-only">: {l(p.name)}</span>
        </Link>
      </div>
    </article>
  );
}

const SHEET_CTA = { fr: "Voir la fiche technique", en: "View the technical sheet", ar: "عرض البطاقة التقنية" } as const;

export function PlantCard({ p, compact = false }: { p: Plant; compact?: boolean }) {
  const { ui, l, lang } = useI18n();
  return (
    <article id={p.slug} className="card group h-full scroll-mt-28 overflow-hidden">
      <div className="relative overflow-hidden">
        <img src={p.image} alt={p.latin ? `${l(p.name)} (${p.latin})` : l(p.name)} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 pt-12">
          <h3 className="text-lg font-bold text-white">{l(p.name)}</h3>
          {p.latin && <p className="text-sm italic text-white/90" lang="la">{p.latin}</p>}
        </div>
      </div>
      {!compact && (
        <div className="space-y-3 p-5 text-sm">
          <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5">
            <dt className="font-semibold text-ink">{ui.plant.origin}</dt>
            <dd className="text-slate">{l(p.origin)}</dd>
            <dt className="font-semibold text-ink">{ui.plant.part}</dt>
            <dd className="text-slate">{l(p.part)}</dd>
            <dt className="font-semibold text-ink">{ui.plant.family}</dt>
            <dd className="text-slate">{l(p.family)}</dd>
          </dl>
          <div>
            <p className="font-semibold text-ink">{ui.plant.properties}</p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {l(p.properties).map((x) => <li key={x} className="chip">{x}</li>)}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-ink">{ui.plant.uses}</p>
            <p className="mt-1 text-slate">{l(p.uses)}</p>
          </div>
          {PLANT_SHEETS[p.slug] && (
            <Link href={`/plantes/${p.slug}`} className="inline-flex items-center gap-1.5 pt-1 font-semibold text-blue hover:underline">
              {SHEET_CTA[lang]} <ArrowRight className="size-4 rtl:rotate-180" aria-hidden="true" />
            </Link>
          )}
        </div>
      )}
      {compact && (
        <div className="p-5">
          <ul className="flex flex-wrap gap-1.5">
            {l(p.properties).slice(0, 2).map((x) => <li key={x} className="chip">{x}</li>)}
          </ul>
        </div>
      )}
    </article>
  );
}

export function PostCard({ p }: { p: Post }) {
  const { ui, l, lang } = useI18n();
  return (
    <article className="group flex h-full flex-col">
      <Link href={`/blog/${p.slug}`} className="block overflow-hidden rounded-[22px]" tabIndex={-1} aria-hidden="true">
        <img src={p.image} alt="" loading="lazy" className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
      </Link>
      <div className="flex flex-1 flex-col pt-5">
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate">
          <span className="chip">{l(p.category)}</span>
          <time dateTime={p.date}>{formatDate(p.date, lang)}</time>
          <span className="inline-flex items-center gap-1"><Clock className="size-3.5" aria-hidden="true" />{p.minutes} {ui.blog.minutes}</span>
        </div>
        <h3 className="mt-3 text-xl font-bold">
          <Link href={`/blog/${p.slug}`} className="hover:text-blue">{l(p.title)}</Link>
        </h3>
        <p className="mt-2 text-slate">{l(p.excerpt)}</p>
        <Link href={`/blog/${p.slug}`} className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-blue">
          {ui.cta.readMore}
          <ArrowRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
          <span className="sr-only">: {l(p.title)}</span>
        </Link>
      </div>
    </article>
  );
}
