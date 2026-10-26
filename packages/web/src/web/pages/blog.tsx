/**
 * Blog / Conseils : liste des articles avec filtre par catégorie.
 */
import { useState } from "react";
import { useI18n, type L } from "../lib/i18n";
import { Seo, breadcrumbLd } from "../components/seo";
import { PageHero } from "../components/section";
import { PostCard } from "../components/cards";
import { Reveal } from "../components/reveal";
import { POSTS } from "../data/posts";

const T: L<{ title: string; text: string; desc: string }> = {
  fr: {
    title: "Conseils & actualités",
    text: "Routines beauté au naturel, bien-être au fil des saisons, décryptage des étiquettes : nos experts partagent leurs conseils pour prendre soin de vous avec les plantes.",
    desc: "Conseils beauté et bien-être au naturel, plantes médicinales et coulisses du laboratoire Global Center Pharma.",
  },
  en: {
    title: "Advice & news",
    text: "Natural beauty routines, seasonal well-being, how to read labels: our experts share their advice on caring for yourself with plants.",
    desc: "Natural beauty and well-being advice, medicinal plants and behind the scenes at the Global Center Pharma laboratory.",
  },
  ar: {
    title: "نصائح ومستجدات",
    text: "روتين جمال طبيعي، عافية على مدار الفصول، قراءة الملصقات: يشاركك خبراؤنا نصائحهم للعناية بنفسك بالنباتات.",
    desc: "نصائح الجمال والعافية الطبيعية، النباتات الطبية وكواليس مختبر غلوبال سنتر فارما.",
  },
};

export default function Blog() {
  const { l, ui } = useI18n();
  const t = l(T);
  const cats = Array.from(new Set(POSTS.map((p) => l(p.category))));
  const [cat, setCat] = useState<string | null>(null);
  const list = POSTS.filter((p) => !cat || l(p.category) === cat).sort((a, b) => b.date.localeCompare(a.date));

  const chip = (active: boolean) =>
    `min-h-11 rounded-full border px-4 text-sm font-semibold transition ${active ? "border-blue bg-blue text-white" : "border-line bg-white hover:border-blue hover:text-blue"}`;

  return (
    <>
      <Seo
        title={t.title}
        description={t.desc}
        path="/blog"
        jsonLd={breadcrumbLd([{ name: ui.nav.home, path: "/" }, { name: ui.nav.blog, path: "/blog" }])}
      />
      <PageHero eyebrow={ui.nav.blog} title={t.title} text={t.text} image="/images/blog/conseil.webp" />
      <section className="section pt-6">
        <div className="container-gcp">
          <fieldset className="flex flex-wrap gap-2">
            <legend className="sr-only">{ui.blog.category}</legend>
            <button type="button" className={chip(!cat)} aria-pressed={!cat} onClick={() => setCat(null)}>{ui.blog.all}</button>
            {cats.map((c) => (
              <button key={c} type="button" className={chip(cat === c)} aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>
            ))}
          </fieldset>
          <ul className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={(i % 3) * 80}><PostCard p={p} /></Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
