/**
 * Nos plantes : fiche de chaque plante (nom, origine, propriétés, usages)
 * et produits dans lesquels elle est présente.
 */
import { Link } from "wouter";
import { useI18n, type L } from "../lib/i18n";
import { Seo, breadcrumbLd } from "../components/seo";
import { PageHero } from "../components/section";
import { PlantCard } from "../components/cards";
import { Reveal } from "../components/reveal";
import { PLANTS } from "../data/plants";
import { PRODUCTS } from "../data/products";

const T: L<{ title: string; text: string; desc: string; note: string }> = {
  fr: {
    title: "Nos plantes médicinales",
    text: "Arganier, aloe vera, curcuma, nigelle… Découvrez les plantes au cœur de nos formules : leur origine, la partie utilisée, leurs propriétés et leurs usages traditionnels.",
    desc: "Découvrez les plantes médicinales utilisées par Global Center Pharma : origine, partie utilisée, propriétés et usages.",
    note: "Les propriétés présentées correspondent à des usages traditionnels et à la composition connue des plantes. Elles ne constituent pas des allégations thérapeutiques.",
  },
  en: {
    title: "Our medicinal plants",
    text: "Argan, aloe vera, turmeric, black seed… Discover the plants at the heart of our formulas: their origin, the part used, their properties and traditional uses.",
    desc: "Discover the medicinal plants used by Global Center Pharma: origin, part used, properties and uses.",
    note: "The properties shown reflect traditional uses and the known composition of the plants. They are not therapeutic claims.",
  },
  ar: {
    title: "نباتاتنا الطبية",
    text: "الأركان، الصبار، الكركم، حبة البركة… اكتشف النباتات التي تشكّل قلب تركيباتنا: أصلها، الجزء المستعمل، خصائصها واستعمالاتها التقليدية.",
    desc: "اكتشف النباتات الطبية التي تستعملها غلوبال سنتر فارما: الأصل، الجزء المستعمل، الخصائص والاستعمالات.",
    note: "تعكس الخصائص المعروضة الاستعمالات التقليدية والتركيب المعروف للنباتات، ولا تُعدّ ادعاءات علاجية.",
  },
};

export default function Plants() {
  const { l, ui } = useI18n();
  const t = l(T);
  return (
    <>
      <Seo
        title={t.title}
        description={t.desc}
        path="/plantes"
        jsonLd={breadcrumbLd([{ name: ui.nav.home, path: "/" }, { name: ui.nav.plants, path: "/plantes" }])}
      />
      <PageHero eyebrow={ui.nav.plants} title={t.title} text={t.text} image="/images/harvest.webp" />

      <section className="section pt-6">
        <div className="container-gcp">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PLANTS.map((p, i) => {
              const used = PRODUCTS.filter((x) => x.plants.includes(p.slug));
              return (
                <Reveal as="li" key={p.slug} delay={(i % 3) * 70} className="flex flex-col">
                  <PlantCard p={p} />
                  {used.length > 0 && (
                    <div className="-mt-4 rounded-b-[22px] border border-t-0 border-line bg-mist px-5 pt-7 pb-4 text-sm">
                      <span className="font-semibold text-ink">{ui.plant.inProducts} : </span>
                      {used.map((u, j) => (
                        <span key={u.slug}>
                          {j > 0 && ", "}
                          <Link href={`/produits/${u.slug}`} className="text-blue underline-offset-2 hover:underline">{l(u.name)}</Link>
                        </span>
                      ))}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </ul>
          <p className="mt-12 rounded-2xl bg-mint/70 p-5 text-sm text-ink">{t.note} {ui.footer.medical}</p>
        </div>
      </section>
    </>
  );
}
