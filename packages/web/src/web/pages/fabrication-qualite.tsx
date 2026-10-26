/**
 * Fabrication & qualité : chaîne de la récolte au produit fini,
 * laboratoire, contrôle qualité, certifications.
 * ⚠ Les certifications listées sont des exemples : n'afficher que celles
 *   réellement obtenues par l'entreprise.
 */
import { Sprout, Truck, Droplets, FlaskConical, Factory, ShieldCheck, Package, Microscope, ClipboardCheck, BadgeCheck, Leaf, Award } from "lucide-react";
import { useI18n, type L } from "../lib/i18n";
import { Seo, breadcrumbLd } from "../components/seo";
import { PageHero, SectionHeading } from "../components/section";
import { Reveal } from "../components/reveal";

type Content = {
  title: string; text: string; desc: string;
  chainEyebrow: string; chainTitle: string; chain: { t: string; d: string }[];
  labEyebrow: string; labTitle: string; labText: string; labPoints: string[];
  qcEyebrow: string; qcTitle: string; qc: { t: string; d: string }[];
  certEyebrow: string; certTitle: string; certText: string; certs: { t: string; d: string }[];
};

const T: L<Content> = {
  fr: {
    title: "Fabrication & qualité",
    text: "De la récolte des plantes jusqu'au produit fini, chaque étape est maîtrisée, documentée et contrôlée par nos équipes.",
    desc: "De la récolte au produit fini : découvrez le laboratoire, les contrôles qualité et les certifications (bio, ISO, BPF/GMP) de Global Center Pharma.",
    chainEyebrow: "Notre chaîne de production",
    chainTitle: "De la récolte au produit fini",
    chain: [
      { t: "Récolte", d: "Plantes cultivées ou cueillies auprès de producteurs sélectionnés, au moment optimal de leur cycle." },
      { t: "Réception & traçabilité", d: "Chaque lot de matière première est identifié, enregistré et mis en quarantaine avant analyse." },
      { t: "Extraction", d: "Pression à froid, macération, distillation douce : des procédés qui préservent les principes actifs." },
      { t: "Formulation", d: "Nos formulateurs développent des formules stables, sûres et agréables à utiliser." },
      { t: "Fabrication", d: "Production en zones contrôlées, selon des procédures écrites et validées." },
      { t: "Contrôle libératoire", d: "Aucun lot n'est libéré sans analyses conformes et validation du responsable qualité." },
      { t: "Conditionnement", d: "Emballages protecteurs, étiquetage complet et numéro de lot pour une traçabilité totale." },
    ],
    labEyebrow: "Notre laboratoire",
    labTitle: "Un laboratoire équipé pour formuler et contrôler",
    labText: "Notre laboratoire réunit formulation, analyses physico-chimiques et microbiologiques. Il nous permet de développer nos produits et de contrôler chaque lot en interne.",
    labPoints: [
      "Analyses physico-chimiques (pH, viscosité, densité, aspect)",
      "Contrôles microbiologiques des matières premières et produits finis",
      "Études de stabilité et de compatibilité avec l'emballage",
      "Identification botanique des plantes et contrôle des extraits",
    ],
    qcEyebrow: "Contrôle qualité",
    qcTitle: "Des contrôles à chaque étape",
    qc: [
      { t: "Matières premières", d: "Identité, pureté et conformité aux spécifications vérifiées avant toute utilisation." },
      { t: "En cours de fabrication", d: "Contrôles des paramètres critiques à chaque étape du procédé." },
      { t: "Produit fini", d: "Analyses complètes et échantillothèque conservée pour chaque lot." },
      { t: "Après commercialisation", d: "Suivi des retours clients et cosmétovigilance / pharmacovigilance." },
    ],
    certEyebrow: "Certifications",
    certTitle: "Des standards reconnus",
    certText: "Nous appliquons des référentiels internationaux de qualité. (Liste indicative à confirmer selon les certifications obtenues.)",
    certs: [
      { t: "Bio", d: "Ingrédients issus de l'agriculture biologique, certifiés par un organisme indépendant." },
      { t: "ISO 22716", d: "Bonnes pratiques de fabrication des produits cosmétiques." },
      { t: "BPF / GMP", d: "Bonnes pratiques de fabrication pour les produits pharmaceutiques et compléments." },
      { t: "ISO 9001", d: "Système de management de la qualité et amélioration continue." },
    ],
  },
  en: {
    title: "Manufacturing & quality",
    text: "From harvesting the plants to the finished product, every stage is controlled, documented and checked by our teams.",
    desc: "From harvest to finished product: discover Global Center Pharma's laboratory, quality controls and certifications (organic, ISO, GMP).",
    chainEyebrow: "Our production chain",
    chainTitle: "From harvest to finished product",
    chain: [
      { t: "Harvest", d: "Plants grown or gathered by selected growers, at the optimal point in their cycle." },
      { t: "Receipt & traceability", d: "Each batch of raw material is identified, recorded and quarantined before analysis." },
      { t: "Extraction", d: "Cold pressing, maceration, gentle distillation: processes that preserve active compounds." },
      { t: "Formulation", d: "Our formulators develop stable, safe formulas that are pleasant to use." },
      { t: "Manufacturing", d: "Production in controlled areas, following written, validated procedures." },
      { t: "Release testing", d: "No batch is released without compliant analyses and approval by the quality manager." },
      { t: "Packaging", d: "Protective packaging, complete labelling and batch number for full traceability." },
    ],
    labEyebrow: "Our laboratory",
    labTitle: "A laboratory equipped to formulate and test",
    labText: "Our laboratory combines formulation with physico-chemical and microbiological testing, enabling us to develop our products and check every batch in-house.",
    labPoints: [
      "Physico-chemical analyses (pH, viscosity, density, appearance)",
      "Microbiological testing of raw materials and finished products",
      "Stability and packaging-compatibility studies",
      "Botanical identification of plants and extract testing",
    ],
    qcEyebrow: "Quality control",
    qcTitle: "Checks at every stage",
    qc: [
      { t: "Raw materials", d: "Identity, purity and compliance with specifications verified before use." },
      { t: "In-process", d: "Critical parameters checked at each step of the process." },
      { t: "Finished product", d: "Full analyses and retained samples kept for every batch." },
      { t: "Post-market", d: "Monitoring of customer feedback and cosmetovigilance / pharmacovigilance." },
    ],
    certEyebrow: "Certifications",
    certTitle: "Recognised standards",
    certText: "We apply international quality standards. (Indicative list, to be confirmed according to certifications held.)",
    certs: [
      { t: "Organic", d: "Ingredients from organic farming, certified by an independent body." },
      { t: "ISO 22716", d: "Good manufacturing practice for cosmetic products." },
      { t: "GMP", d: "Good manufacturing practice for pharmaceutical products and supplements." },
      { t: "ISO 9001", d: "Quality management system and continuous improvement." },
    ],
  },
  ar: {
    title: "التصنيع والجودة",
    text: "من حصاد النباتات إلى المنتج النهائي، كل مرحلة متحكَّم فيها وموثّقة ومراقَبة من طرف فرقنا.",
    desc: "من الحصاد إلى المنتج النهائي: اكتشف مختبر غلوبال سنتر فارما ومراقبة الجودة والشهادات (عضوي، ISO، GMP).",
    chainEyebrow: "سلسلة إنتاجنا",
    chainTitle: "من الحصاد إلى المنتج النهائي",
    chain: [
      { t: "الحصاد", d: "نباتات مزروعة أو مقطوفة لدى منتجين مختارين، في الوقت الأمثل من دورتها." },
      { t: "الاستلام والتتبّع", d: "تُعرَّف كل دفعة من المواد الأولية وتُسجَّل وتُعزل قبل التحليل." },
      { t: "الاستخلاص", d: "عصر على البارد، نقع، تقطير لطيف: عمليات تحافظ على المواد الفعالة." },
      { t: "التركيب", d: "يطوّر مركّبونا تركيبات مستقرة وآمنة ومريحة الاستعمال." },
      { t: "التصنيع", d: "إنتاج في مناطق مراقَبة وفق إجراءات مكتوبة ومعتمدة." },
      { t: "مراقبة الإفراج", d: "لا تُطرح أي دفعة دون تحاليل مطابقة وموافقة مسؤول الجودة." },
      { t: "التعبئة", d: "تغليف واقٍ، ووسم كامل، ورقم دفعة لتتبّع كامل." },
    ],
    labEyebrow: "مختبرنا",
    labTitle: "مختبر مجهّز للتركيب والمراقبة",
    labText: "يجمع مختبرنا بين التركيب والتحاليل الفيزيائية الكيميائية والميكروبيولوجية، ما يتيح لنا تطوير منتجاتنا ومراقبة كل دفعة داخلياً.",
    labPoints: [
      "تحاليل فيزيائية كيميائية (الحموضة، اللزوجة، الكثافة، المظهر)",
      "مراقبة ميكروبيولوجية للمواد الأولية والمنتجات النهائية",
      "دراسات الثبات والتوافق مع العبوة",
      "التعرّف النباتي على النباتات ومراقبة المستخلصات",
    ],
    qcEyebrow: "مراقبة الجودة",
    qcTitle: "مراقبة في كل مرحلة",
    qc: [
      { t: "المواد الأولية", d: "التحقق من الهوية والنقاء والمطابقة للمواصفات قبل أي استعمال." },
      { t: "أثناء التصنيع", d: "مراقبة المعايير الحرجة في كل خطوة من العملية." },
      { t: "المنتج النهائي", d: "تحاليل كاملة والاحتفاظ بعينات مرجعية لكل دفعة." },
      { t: "بعد التسويق", d: "متابعة ملاحظات الزبائن واليقظة التجميلية والدوائية." },
    ],
    certEyebrow: "الشهادات",
    certTitle: "معايير معترف بها",
    certText: "نطبّق مرجعيات دولية للجودة. (قائمة إرشادية تُؤكَّد حسب الشهادات المحصَّل عليها.)",
    certs: [
      { t: "عضوي", d: "مكونات من الزراعة العضوية، معتمدة من هيئة مستقلة." },
      { t: "ISO 22716", d: "ممارسات التصنيع الجيدة لمستحضرات التجميل." },
      { t: "GMP", d: "ممارسات التصنيع الجيدة للمنتجات الصيدلانية والمكمّلات." },
      { t: "ISO 9001", d: "نظام إدارة الجودة والتحسين المستمر." },
    ],
  },
};

const CHAIN_ICONS = [Sprout, Truck, Droplets, FlaskConical, Factory, ShieldCheck, Package];
const QC_ICONS = [Microscope, ClipboardCheck, BadgeCheck, ShieldCheck];
const CERT_ICONS = [Leaf, Award, ShieldCheck, BadgeCheck];

export default function Quality() {
  const { l, ui } = useI18n();
  const t = l(T);
  return (
    <>
      <Seo
        title={t.title}
        description={t.desc}
        path="/fabrication-qualite"
        jsonLd={breadcrumbLd([{ name: ui.nav.home, path: "/" }, { name: t.title, path: "/fabrication-qualite" }])}
      />
      <PageHero eyebrow={ui.nav.quality} title={t.title} text={t.text} image="/images/ligne-production.webp" />

      {/* Chaîne */}
      <section className="section" aria-labelledby="chain">
        <div className="container-gcp">
          <SectionHeading id="chain" eyebrow={t.chainEyebrow} title={t.chainTitle} align="center" />
          <ol className="mx-auto mt-12 max-w-3xl">
            {t.chain.map((s, i) => {
              const Icon = CHAIN_ICONS[i];
              const last = i === t.chain.length - 1;
              return (
                <Reveal as="li" key={s.t} delay={i * 60} className="relative flex gap-5 pb-8">
                  {!last && <span className="absolute start-7 top-14 bottom-0 w-px bg-line" aria-hidden="true" />}
                  <span className="relative grid size-14 shrink-0 place-items-center rounded-2xl bg-mint text-leaf-ink">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <div className="pt-2">
                    <h3 className="text-lg font-bold"><span className="me-2 text-blue">{String(i + 1).padStart(2, "0")}</span>{s.t}</h3>
                    <p className="mt-1 text-slate">{s.d}</p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Laboratoire */}
      <section className="section bg-mist" aria-labelledby="lab">
        <div className="container-gcp grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img src="/images/conditionnement.webp" alt="Conditionnement des produits dans notre unité de production" loading="lazy" className="aspect-[4/3] w-full rounded-[32px] object-cover shadow-[var(--shadow-lift)]" />
          </Reveal>
          <div>
            <SectionHeading id="lab" eyebrow={t.labEyebrow} title={t.labTitle} text={t.labText} />
            <ul className="mt-6 space-y-3">
              {t.labPoints.map((x) => (
                <li key={x} className="flex gap-3"><BadgeCheck className="mt-0.5 size-5 shrink-0 text-leaf-ink" aria-hidden="true" /><span>{x}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contrôle qualité */}
      <section className="section" aria-labelledby="qc">
        <div className="container-gcp">
          <SectionHeading id="qc" eyebrow={t.qcEyebrow} title={t.qcTitle} align="center" />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.qc.map((q, i) => {
              const Icon = QC_ICONS[i];
              return (
                <Reveal as="li" key={q.t} delay={i * 80} className="card p-6">
                  <Icon className="size-8 text-blue" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-bold">{q.t}</h3>
                  <p className="mt-2 text-sm text-slate">{q.d}</p>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Certifications */}
      <section className="section bg-navy text-white" aria-labelledby="certs">
        <div className="container-gcp">
          <SectionHeading id="certs" eyebrow={t.certEyebrow} title={t.certTitle} text={t.certText} align="center" light />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.certs.map((c, i) => {
              const Icon = CERT_ICONS[i];
              return (
                <Reveal as="li" key={c.t} delay={i * 80} className="rounded-[22px] border border-white/15 bg-white/5 p-6 text-center">
                  <span className="mx-auto grid size-16 place-items-center rounded-full bg-leaf"><Icon className="size-8" aria-hidden="true" /></span>
                  <h3 className="mt-4 text-xl font-bold text-white">{c.t}</h3>
                  <p className="mt-2 text-sm text-white/80">{c.d}</p>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
