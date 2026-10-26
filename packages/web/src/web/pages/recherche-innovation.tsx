/**
 * Recherche & innovation : axes de R&D, démarche, partenariats scientifiques.
 */
import { Link } from "wouter";
import { Microscope, Leaf, Droplets, Recycle, Users, GraduationCap, ArrowRight, FlaskConical } from "lucide-react";
import { useI18n, type L } from "../lib/i18n";
import { Seo, breadcrumbLd } from "../components/seo";
import { PageHero, SectionHeading } from "../components/section";
import { Reveal } from "../components/reveal";

type Content = {
  title: string; text: string; desc: string;
  axesEyebrow: string; axesTitle: string; axes: { t: string; d: string }[];
  methodEyebrow: string; methodTitle: string; method: string[];
  partnersEyebrow: string; partnersTitle: string; partnersText: string; partners: { t: string; d: string }[];
  ctaText: string; ctaBtn: string;
};

const T: L<Content> = {
  fr: {
    title: "Recherche & innovation",
    text: "La recherche au service de la tradition des plantes : nous étudions, testons et améliorons sans cesse nos formules pour allier naturalité, sécurité et efficacité.",
    desc: "Axes de recherche, démarche scientifique et partenariats de Global Center Pharma pour des produits à base de plantes toujours plus sûrs et innovants.",
    axesEyebrow: "Nos axes de recherche",
    axesTitle: "Ce sur quoi nous travaillons",
    axes: [
      { t: "Valorisation des plantes locales", d: "Étude de plantes médicinales de notre région et de leurs usages traditionnels." },
      { t: "Extraction douce", d: "Procédés à basse température et solvants naturels pour préserver les actifs." },
      { t: "Formules plus courtes", d: "Moins d'ingrédients, mieux choisis, pour une meilleure tolérance." },
      { t: "Éco-conception", d: "Emballages recyclables, réduction des déchets et de l'empreinte carbone." },
    ],
    methodEyebrow: "Notre démarche",
    methodTitle: "Une méthode rigoureuse, de l'idée au produit",
    method: [
      "Veille scientifique et revue de la littérature sur chaque plante",
      "Prototypes en laboratoire et tests de stabilité",
      "Évaluations de tolérance et de sécurité",
      "Validation réglementaire avant toute mise sur le marché",
    ],
    partnersEyebrow: "Collaborations",
    partnersTitle: "Une recherche ouverte",
    partnersText: "Nous collaborons avec des acteurs scientifiques et agricoles pour faire progresser la connaissance des plantes.",
    partners: [
      { t: "Universités et laboratoires", d: "Projets de recherche, stages et thèses en botanique, chimie et pharmacie." },
      { t: "Coopératives agricoles", d: "Amélioration des pratiques de culture et de récolte des plantes." },
      { t: "Professionnels de santé", d: "Retours de terrain pour concevoir des produits adaptés aux besoins." },
    ],
    ctaText: "Vous êtes chercheur, étudiant ou institution et souhaitez collaborer ?",
    ctaBtn: "Contactez notre équipe R&D",
  },
  en: {
    title: "Research & innovation",
    text: "Research serving the tradition of plants: we constantly study, test and improve our formulas to combine naturalness, safety and effectiveness.",
    desc: "Research areas, scientific approach and partnerships at Global Center Pharma for ever safer, more innovative plant-based products.",
    axesEyebrow: "Our research areas",
    axesTitle: "What we are working on",
    axes: [
      { t: "Local plants", d: "Studying medicinal plants from our region and their traditional uses." },
      { t: "Gentle extraction", d: "Low-temperature processes and natural solvents to preserve active compounds." },
      { t: "Shorter formulas", d: "Fewer, better-chosen ingredients for better tolerance." },
      { t: "Eco-design", d: "Recyclable packaging, less waste and a smaller carbon footprint." },
    ],
    methodEyebrow: "Our approach",
    methodTitle: "A rigorous method, from idea to product",
    method: [
      "Scientific monitoring and literature review for each plant",
      "Laboratory prototypes and stability testing",
      "Tolerance and safety assessments",
      "Regulatory validation before any market launch",
    ],
    partnersEyebrow: "Collaborations",
    partnersTitle: "Open research",
    partnersText: "We work with scientific and agricultural partners to advance knowledge of plants.",
    partners: [
      { t: "Universities and laboratories", d: "Research projects, internships and theses in botany, chemistry and pharmacy." },
      { t: "Farming cooperatives", d: "Improving plant cultivation and harvesting practices." },
      { t: "Healthcare professionals", d: "Field feedback to design products that meet real needs." },
    ],
    ctaText: "Are you a researcher, student or institution interested in working with us?",
    ctaBtn: "Contact our R&D team",
  },
  ar: {
    title: "البحث والابتكار",
    text: "البحث في خدمة تقاليد النباتات: ندرس تركيباتنا ونختبرها ونحسّنها باستمرار لنجمع بين الطبيعة والسلامة والفعالية.",
    desc: "محاور البحث والمنهجية العلمية وشراكات غلوبال سنتر فارما لمنتجات نباتية أكثر أماناً وابتكاراً.",
    axesEyebrow: "محاور بحثنا",
    axesTitle: "ما نعمل عليه",
    axes: [
      { t: "تثمين النباتات المحلية", d: "دراسة النباتات الطبية في منطقتنا واستعمالاتها التقليدية." },
      { t: "الاستخلاص اللطيف", d: "عمليات بدرجات حرارة منخفضة ومذيبات طبيعية للحفاظ على المواد الفعالة." },
      { t: "تركيبات أقصر", d: "مكونات أقل ومختارة بعناية لتحمّل أفضل." },
      { t: "التصميم البيئي", d: "عبوات قابلة لإعادة التدوير وتقليل النفايات والبصمة الكربونية." },
    ],
    methodEyebrow: "منهجيتنا",
    methodTitle: "منهج صارم، من الفكرة إلى المنتج",
    method: [
      "رصد علمي ومراجعة المراجع حول كل نبتة",
      "نماذج أولية في المختبر واختبارات الثبات",
      "تقييمات التحمّل والسلامة",
      "مصادقة تنظيمية قبل أي طرح في السوق",
    ],
    partnersEyebrow: "تعاون",
    partnersTitle: "بحث منفتح",
    partnersText: "نتعاون مع فاعلين علميين وفلاحيين لتطوير المعرفة بالنباتات.",
    partners: [
      { t: "الجامعات والمختبرات", d: "مشاريع بحث وتدريب وأطروحات في علم النبات والكيمياء والصيدلة." },
      { t: "التعاونيات الفلاحية", d: "تحسين ممارسات زراعة النباتات وحصادها." },
      { t: "مهنيو الصحة", d: "ملاحظات ميدانية لتصميم منتجات ملائمة للاحتياجات." },
    ],
    ctaText: "هل أنت باحث أو طالب أو مؤسسة وترغب في التعاون؟",
    ctaBtn: "تواصل مع فريق البحث والتطوير",
  },
};

const AXES_ICONS = [Leaf, Droplets, FlaskConical, Recycle];
const PARTNER_ICONS = [GraduationCap, Users, Microscope];

export default function Research() {
  const { l, ui } = useI18n();
  const t = l(T);
  return (
    <>
      <Seo
        title={t.title}
        description={t.desc}
        path="/recherche-innovation"
        jsonLd={breadcrumbLd([{ name: ui.nav.home, path: "/" }, { name: t.title, path: "/recherche-innovation" }])}
      />
      <PageHero eyebrow={ui.nav.research} title={t.title} text={t.text} image="/images/laboratoire-recherche.webp" />

      <section className="section" aria-labelledby="axes">
        <div className="container-gcp">
          <SectionHeading id="axes" eyebrow={t.axesEyebrow} title={t.axesTitle} align="center" />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.axes.map((a, i) => {
              const Icon = AXES_ICONS[i];
              return (
                <Reveal as="li" key={a.t} delay={i * 80} className="card p-7">
                  <span className="grid size-12 place-items-center rounded-2xl bg-mint text-leaf-ink"><Icon className="size-6" aria-hidden="true" /></span>
                  <h3 className="mt-5 text-lg font-bold">{a.t}</h3>
                  <p className="mt-2 text-sm text-slate">{a.d}</p>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section bg-mist" aria-labelledby="method">
        <div className="container-gcp grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="method" eyebrow={t.methodEyebrow} title={t.methodTitle} />
            <ol className="mt-8 space-y-4">
              {t.method.map((m, i) => (
                <Reveal as="li" key={m} delay={i * 80} className="flex items-start gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-blue font-bold text-white">{i + 1}</span>
                  <span className="pt-2">{m}</span>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal>
            <img src="/images/research.webp" alt="" loading="lazy" className="aspect-[4/3] w-full rounded-[32px] object-cover shadow-[var(--shadow-lift)]" />
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="collab">
        <div className="container-gcp">
          <SectionHeading id="collab" eyebrow={t.partnersEyebrow} title={t.partnersTitle} text={t.partnersText} align="center" />
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {t.partners.map((p, i) => {
              const Icon = PARTNER_ICONS[i];
              return (
                <Reveal as="li" key={p.t} delay={i * 90} className="card p-7">
                  <Icon className="size-8 text-blue" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-bold">{p.t}</h3>
                  <p className="mt-2 text-sm text-slate">{p.d}</p>
                </Reveal>
              );
            })}
          </ul>
          <Reveal className="mt-14 flex flex-col items-center gap-4 text-center">
            <p className="text-xl font-semibold">{t.ctaText}</p>
            <Link href="/contact" className="btn btn-primary">
              {t.ctaBtn}
              <ArrowRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
