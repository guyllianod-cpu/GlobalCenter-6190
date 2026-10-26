/**
 * Fiche technique détaillée d'une matière première (ex. Safran Noir Femelle).
 */
import { Link, useParams } from "wouter";
import { ArrowLeft, Check, FileText, FlaskConical, MessageCircle } from "lucide-react";
import { useI18n, type L } from "../lib/i18n";
import { Seo, breadcrumbLd } from "../components/seo";
import { Eyebrow } from "../components/section";
import { Reveal } from "../components/reveal";
import { useOverlays } from "../components/overlays";
import { plantBySlug } from "../data/plants";
import { PLANT_SHEETS } from "../data/plant-sheets";
import { SITE } from "../data/site";
import NotFound from "./not-found";

const T: L<{ back: string; presentation: string; interests: string; specs: string; param: string; spec: string; note: string; quote: string; sheet: string }> = {
  fr: {
    back: "Toutes nos plantes",
    presentation: "Présentation",
    interests: "Domaines d'intérêt",
    specs: "Spécifications techniques",
    param: "Paramètre",
    spec: "Spécification",
    note: "Produit destiné aux professionnels (recherche, développement, transformation). Les informations présentées sont descriptives et ne constituent pas des allégations thérapeutiques.",
    quote: "Demander un devis",
    sheet: "Fiche technique",
  },
  en: {
    back: "All our plants",
    presentation: "Overview",
    interests: "Areas of interest",
    specs: "Technical specifications",
    param: "Parameter",
    spec: "Specification",
    note: "Product intended for professionals (research, development, processing). The information shown is descriptive and does not constitute therapeutic claims.",
    quote: "Request a quote",
    sheet: "Technical sheet",
  },
  ar: {
    back: "جميع نباتاتنا",
    presentation: "تقديم",
    interests: "مجالات الاهتمام",
    specs: "المواصفات التقنية",
    param: "المعيار",
    spec: "المواصفة",
    note: "منتج موجّه إلى المهنيين (البحث والتطوير والتحويل). المعلومات المعروضة وصفية ولا تُعدّ ادعاءات علاجية.",
    quote: "طلب عرض سعر",
    sheet: "البطاقة التقنية",
  },
};

export default function PlantPage() {
  const { slug = "" } = useParams<{ slug: string }>();
  const { l, ui } = useI18n();
  const { openQuote } = useOverlays();
  const p = plantBySlug(slug);
  const s = PLANT_SHEETS[slug];
  if (!p || !s) return <NotFound />;

  const t = l(T);
  const name = l(p.name);
  const wa = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`${name} — ${t.quote}`)}`;

  return (
    <>
      <Seo
        title={`${name} — ${t.sheet}`}
        description={`${name} : ${l(s.subtitle)}. ${l(s.presentation)[0]}`.slice(0, 160)}
        path={`/plantes/${p.slug}`}
        image={p.image}
        jsonLd={breadcrumbLd([
          { name: ui.nav.home, path: "/" },
          { name: ui.nav.plants, path: "/plantes" },
          { name, path: `/plantes/${p.slug}` },
        ])}
      />

      <section className="mesh pt-28 pb-14 lg:pt-36">
        <div className="container-gcp">
          <Link href="/plantes" className="inline-flex items-center gap-2 text-sm font-semibold text-blue">
            <ArrowLeft className="size-4 rtl:rotate-180" aria-hidden="true" />
            {t.back}
          </Link>
          <div className="mt-6 grid items-start gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <Reveal className="overflow-hidden rounded-[28px] border border-line bg-white">
              <img src={p.image} alt={name} className="aspect-[3/4] w-full object-contain p-4" />
            </Reveal>
            <div className="hero-in">
              <Eyebrow>{t.sheet}</Eyebrow>
              <h1 className="h1 mt-4 text-[clamp(2.1rem,4.4vw,3.4rem)]">{name}</h1>
              <p className="lead mt-4">{l(s.subtitle)}</p>

              <dl className="card mt-8 grid gap-4 p-6 sm:grid-cols-2">
                {s.meta.map((m) => (
                  <div key={m.label.fr}>
                    <dt className="text-xs font-bold uppercase tracking-wider text-leaf-ink">{l(m.label)}</dt>
                    <dd className="mt-1 font-semibold text-ink">{l(m.value)}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-wrap gap-3">
                <button type="button" className="btn btn-primary" onClick={() => openQuote(name)}>
                  <FileText className="size-5" aria-hidden="true" />
                  {t.quote}
                </button>
                <a href={wa} target="_blank" rel="noopener noreferrer" className="btn bg-[#1f8f4e] text-white hover:bg-[#177a41]">
                  <MessageCircle className="size-5" aria-hidden="true" />
                  {ui.cta.whatsapp}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-gcp grid gap-8 lg:grid-cols-2">
          <Reveal className="card p-7">
            <h2 className="text-xl font-bold">{t.presentation}</h2>
            <div className="mt-4 space-y-4 text-slate">
              {l(s.presentation).map((para) => <p key={para}>{para}</p>)}
            </div>
          </Reveal>
          <Reveal delay={100} className="card p-7">
            <h2 className="text-xl font-bold">{t.interests}</h2>
            <p className="mt-4 text-slate">{l(s.interestIntro)}</p>
            <ul className="mt-3 space-y-2">
              {l(s.interests).map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-mint text-leaf-ink"><Check className="size-4" aria-hidden="true" /></span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 flex gap-3 rounded-2xl bg-mist p-4 text-sm text-ink">
              <FlaskConical className="mt-0.5 size-5 shrink-0 text-blue" aria-hidden="true" />
              {l(s.research)}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container-gcp">
          <Reveal>
            <h2 className="h2">{t.specs}</h2>
            <div className="mt-8 overflow-x-auto rounded-[22px] border border-line bg-white">
              <table className="w-full min-w-[480px] text-start text-sm">
                <thead className="bg-navy text-white">
                  <tr>
                    <th scope="col" className="px-5 py-3.5 text-start font-bold">{t.param}</th>
                    <th scope="col" className="px-5 py-3.5 text-start font-bold">{t.spec}</th>
                  </tr>
                </thead>
                <tbody>
                  {s.specs.map((r) => (
                    <tr key={r.label.fr} className="border-t border-line even:bg-mist/50">
                      <th scope="row" className="px-5 py-3 text-start font-semibold text-ink">{l(r.label)}</th>
                      <td className="px-5 py-3 text-slate">{l(r.value)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 rounded-2xl bg-mint/70 p-5 text-sm text-ink">{t.note}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
