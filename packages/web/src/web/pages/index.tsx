/**
 * Page d'accueil — textes FR fournis par le client, repris à l'identique.
 * Ordre : hero, bannière, chiffres clés, deux gammes, plantes, pourquoi nous,
 * de la plante au produit fini, témoignages, partenaires, appel final.
 */
import { Link } from "wouter";
import {
  ArrowRight, Leaf, FlaskConical, Route as RouteIcon, Lightbulb, Recycle,
  Sprout, Droplets, TestTubes, ShieldCheck, Package, Quote, Handshake, Sparkles, Pill,
} from "lucide-react";
import { useI18n, type L } from "../lib/i18n";
import { Logo } from "../components/logo";
import { Reveal } from "../components/reveal";
import { Eyebrow, SectionHeading } from "../components/section";
import { PlantCard } from "../components/cards";
import { Seo } from "../components/seo";
import { PLANTS } from "../data/plants";
import { SITE } from "../data/site";

/* ---------------- Contenus trilingues ---------------- */

const T = {
  fr: {
    seoTitle: "Global Center Pharma — Cosmétiques et produits pharmaceutiques bio à base de plantes",
    seoDesc: "Global Center Pharma conçoit des produits cosmétiques et pharmaceutiques biologiques, issus de plantes médicinales sélectionnées avec soin.",
    heroTitle: "La nature qui soigne, la science qui garantit.",
    heroText: "Global Center Pharma conçoit des produits cosmétiques et pharmaceutiques biologiques, issus de plantes médicinales sélectionnées avec soin.",
    heroCta1: "Découvrir nos produits",
    heroCta2: "Nous contacter",
    bannerAlt: "Bannière Global Center Pharma",
    figuresTitle: "Chiffres clés",
    figures: [
      { v: "+50", t: "plantes médicinales sélectionnées" },
      { v: "100 %", t: "ingrédients d'origine naturelle" },
      { v: "+100", t: "produits dans nos deux gammes" },
      { v: "✓", t: "Contrôle qualité à chaque étape" },
    ],
    rangesEyebrow: "Nos gammes",
    rangesTitle: "Nos deux gammes",
    cosmeticTitle: "Cosmétiques bio",
    cosmeticText: "Soins du visage, du corps et des cheveux formulés avec des extraits de plantes, pour une beauté respectueuse de la peau et de l'environnement.",
    pharmaTitle: "Produits pharmaceutiques bio",
    pharmaText: "Des formulations à base de plantes médicinales, élaborées selon des standards rigoureux de qualité et de sécurité.",
    rangeCta: "Voir la gamme",
    plantsEyebrow: "Nos plantes",
    plantsTitle: "Le pouvoir des plantes",
    plantsText: "Chaque plante est choisie pour ses propriétés reconnues, récoltée avec respect et transformée avec précision. De la graine au flacon, nous préservons ce que la nature offre de meilleur.",
    plantsCta: "Explorer nos plantes",
    whyEyebrow: "Nos engagements",
    whyTitle: "Pourquoi Global Center Pharma ?",
    why: [
      { t: "Naturel et bio", d: "des ingrédients d'origine végétale, sans compromis." },
      { t: "Qualité maîtrisée", d: "un laboratoire équipé et des contrôles rigoureux." },
      { t: "Traçabilité", d: "nous connaissons l'origine de chaque matière première." },
      { t: "Innovation", d: "la recherche au service de la tradition des plantes." },
      { t: "Respect de l'environnement", d: "des pratiques durables, de la culture à l'emballage." },
    ],
    stepsEyebrow: "Notre savoir-faire",
    stepsTitle: "De la plante au produit fini",
    steps: [
      { t: "Sélection", d: "choix des plantes et des producteurs." },
      { t: "Extraction", d: "procédés doux qui préservent les principes actifs." },
      { t: "Formulation", d: "conception en laboratoire par nos experts." },
      { t: "Contrôle", d: "tests de qualité et de sécurité." },
      { t: "Conditionnement", d: "emballages soignés, pensés pour durer." },
    ],
    stepsCta: "Fabrication & qualité",
    testiEyebrow: "Ils nous font confiance",
    testiTitle: "Témoignages",
    testimonials: [
      { q: "Des produits efficaces, doux, et une vraie transparence sur les ingrédients.", a: "Client" },
      { q: "Une gamme sérieuse, bien documentée, que je recommande volontiers au comptoir.", a: "Pharmacien" },
      { q: "Des délais respectés et une équipe disponible : un partenariat de confiance.", a: "Partenaire distributeur" },
    ],
    partnerEyebrow: "Réseau",
    partnerTitle: "Devenez partenaire",
    partnerText: "Pharmacies, parapharmacies, instituts et distributeurs : rejoignez le réseau Global Center Pharma.",
    partnerCta: "Devenir partenaire",
    finalTitle: "Prenez soin de vous, naturellement.",
    finalText: "Découvrez nos gammes ou contactez-nous pour toute demande.",
    finalCta1: "Voir les produits",
    finalCta2: "Nous écrire",
  },
  en: {
    seoTitle: "Global Center Pharma — Organic plant-based cosmetics and pharmaceutical products",
    seoDesc: "Global Center Pharma designs organic cosmetic and pharmaceutical products made from carefully selected medicinal plants.",
    heroTitle: "Nature that heals, science that guarantees.",
    heroText: "Global Center Pharma designs organic cosmetic and pharmaceutical products made from carefully selected medicinal plants.",
    heroCta1: "Discover our products",
    heroCta2: "Contact us",
    bannerAlt: "Global Center Pharma banner",
    figuresTitle: "Key figures",
    figures: [
      { v: "50+", t: "selected medicinal plants" },
      { v: "100%", t: "ingredients of natural origin" },
      { v: "100+", t: "products across our two ranges" },
      { v: "✓", t: "Quality control at every stage" },
    ],
    rangesEyebrow: "Our ranges",
    rangesTitle: "Our two ranges",
    cosmeticTitle: "Organic cosmetics",
    cosmeticText: "Face, body and hair care formulated with plant extracts, for beauty that respects your skin and the environment.",
    pharmaTitle: "Organic pharmaceutical products",
    pharmaText: "Formulations based on medicinal plants, developed to rigorous quality and safety standards.",
    rangeCta: "See the range",
    plantsEyebrow: "Our plants",
    plantsTitle: "The power of plants",
    plantsText: "Each plant is chosen for its recognised properties, harvested with respect and processed with precision. From seed to bottle, we preserve the very best that nature has to offer.",
    plantsCta: "Explore our plants",
    whyEyebrow: "Our commitments",
    whyTitle: "Why Global Center Pharma?",
    why: [
      { t: "Natural and organic", d: "ingredients of plant origin, without compromise." },
      { t: "Controlled quality", d: "a fully equipped laboratory and rigorous testing." },
      { t: "Traceability", d: "we know the origin of every raw material." },
      { t: "Innovation", d: "research serving the tradition of plants." },
      { t: "Respect for the environment", d: "sustainable practices, from cultivation to packaging." },
    ],
    stepsEyebrow: "Our know-how",
    stepsTitle: "From plant to finished product",
    steps: [
      { t: "Selection", d: "choosing plants and growers." },
      { t: "Extraction", d: "gentle processes that preserve active compounds." },
      { t: "Formulation", d: "designed in the laboratory by our experts." },
      { t: "Control", d: "quality and safety testing." },
      { t: "Packaging", d: "carefully crafted packaging, made to last." },
    ],
    stepsCta: "Manufacturing & quality",
    testiEyebrow: "They trust us",
    testiTitle: "Testimonials",
    testimonials: [
      { q: "Effective, gentle products and real transparency about ingredients.", a: "Customer" },
      { q: "A serious, well-documented range that I happily recommend at the counter.", a: "Pharmacist" },
      { q: "Deadlines met and a responsive team: a partnership built on trust.", a: "Distribution partner" },
    ],
    partnerEyebrow: "Network",
    partnerTitle: "Become a partner",
    partnerText: "Pharmacies, drugstores, beauty institutes and distributors: join the Global Center Pharma network.",
    partnerCta: "Become a partner",
    finalTitle: "Take care of yourself, naturally.",
    finalText: "Discover our ranges or contact us with any request.",
    finalCta1: "See the products",
    finalCta2: "Write to us",
  },
  ar: {
    seoTitle: "غلوبال سنتر فارما — مستحضرات تجميل ومنتجات صيدلانية عضوية من النباتات",
    seoDesc: "تصمّم غلوبال سنتر فارما منتجات تجميلية وصيدلانية عضوية، مستخلصة من نباتات طبية مختارة بعناية.",
    heroTitle: "الطبيعة تعتني، والعلم يضمن.",
    heroText: "تصمّم غلوبال سنتر فارما منتجات تجميلية وصيدلانية عضوية، مستخلصة من نباتات طبية مختارة بعناية.",
    heroCta1: "اكتشف منتجاتنا",
    heroCta2: "اتصل بنا",
    bannerAlt: "لافتة غلوبال سنتر فارما",
    figuresTitle: "أرقام رئيسية",
    figures: [
      { v: "+50", t: "نبتة طبية مختارة" },
      { v: "100٪", t: "مكونات من أصل طبيعي" },
      { v: "+100", t: "منتج في مجموعتينا" },
      { v: "✓", t: "مراقبة الجودة في كل مرحلة" },
    ],
    rangesEyebrow: "مجموعاتنا",
    rangesTitle: "مجموعتانا",
    cosmeticTitle: "مستحضرات تجميل عضوية",
    cosmeticText: "منتجات للعناية بالوجه والجسم والشعر مركّبة من مستخلصات نباتية، لجمال يحترم البشرة والبيئة.",
    pharmaTitle: "منتجات صيدلانية عضوية",
    pharmaText: "تركيبات أساسها النباتات الطبية، مُعدّة وفق معايير صارمة للجودة والسلامة.",
    rangeCta: "عرض المجموعة",
    plantsEyebrow: "نباتاتنا",
    plantsTitle: "قوة النباتات",
    plantsText: "نختار كل نبتة لخصائصها المعروفة، ونحصدها باحترام ونحوّلها بدقة. من البذرة إلى القارورة، نحافظ على أفضل ما تقدّمه الطبيعة.",
    plantsCta: "استكشف نباتاتنا",
    whyEyebrow: "التزاماتنا",
    whyTitle: "لماذا غلوبال سنتر فارما؟",
    why: [
      { t: "طبيعي وعضوي", d: "مكونات من أصل نباتي، دون أي تنازل." },
      { t: "جودة متحكَّم فيها", d: "مختبر مجهّز ومراقبة صارمة." },
      { t: "التتبّع", d: "نعرف مصدر كل مادة أولية." },
      { t: "الابتكار", d: "البحث في خدمة تقاليد النباتات." },
      { t: "احترام البيئة", d: "ممارسات مستدامة، من الزراعة إلى التغليف." },
    ],
    stepsEyebrow: "خبرتنا",
    stepsTitle: "من النبتة إلى المنتج النهائي",
    steps: [
      { t: "الاختيار", d: "انتقاء النباتات والمنتجين." },
      { t: "الاستخلاص", d: "عمليات لطيفة تحافظ على المواد الفعالة." },
      { t: "التركيب", d: "تصميم في المختبر على يد خبرائنا." },
      { t: "المراقبة", d: "اختبارات الجودة والسلامة." },
      { t: "التعبئة", d: "تغليف متقن مصمّم ليدوم." },
    ],
    stepsCta: "التصنيع والجودة",
    testiEyebrow: "يثقون بنا",
    testiTitle: "شهادات",
    testimonials: [
      { q: "منتجات فعّالة ولطيفة، وشفافية حقيقية في المكونات.", a: "زبون" },
      { q: "مجموعة جادة وموثّقة جيداً، أنصح بها بكل سرور في الصيدلية.", a: "صيدلي" },
      { q: "احترام للآجال وفريق متاح دائماً: شراكة قائمة على الثقة.", a: "شريك موزّع" },
    ],
    partnerEyebrow: "الشبكة",
    partnerTitle: "كن شريكاً",
    partnerText: "الصيدليات وشبه الصيدليات ومعاهد التجميل والموزعون: انضموا إلى شبكة غلوبال سنتر فارما.",
    partnerCta: "كن شريكاً",
    finalTitle: "اعتنِ بنفسك، بشكل طبيعي.",
    finalText: "اكتشف مجموعاتنا أو تواصل معنا لأي طلب.",
    finalCta1: "عرض المنتجات",
    finalCta2: "راسلنا",
  },
} satisfies L<Record<string, unknown>>;

const WHY_ICONS = [Leaf, FlaskConical, RouteIcon, Lightbulb, Recycle];
const STEP_ICONS = [Sprout, Droplets, TestTubes, ShieldCheck, Package];

/* ---------------- Sections ---------------- */

function Hero({ t }: { t: (typeof T)["fr"] }) {
  const { isRtl } = useI18n();
  return (
    <section className="relative isolate overflow-hidden pt-24 lg:pt-28" aria-labelledby="hero-title">
      {/* Photo de fond : l'espace vide de l'image accueille le texte */}
      <img
        src="/images/hero.webp"
        alt=""
        fetchPriority="high"
        className={`absolute inset-0 -z-20 h-full w-full object-cover object-[70%_center] ${isRtl ? "-scale-x-100" : ""}`}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/95 via-white/85 to-white/70 lg:bg-gradient-to-r lg:from-white lg:via-white/85 lg:to-white/0 rtl:lg:bg-gradient-to-l" aria-hidden="true" />

      <div className="container-gcp flex min-h-[calc(100svh-6rem)] flex-col justify-center py-14 lg:min-h-[640px] lg:py-20">
        <div className="max-w-xl">
          <div className="hero-in">
            <Logo variant="stacked" size={96} />
          </div>
          <h1 id="hero-title" className="h1 hero-in mt-8 text-[clamp(2.2rem,5vw,3.9rem)]" style={{ animationDelay: "120ms" }}>
            {t.heroTitle}
          </h1>
          <p className="lead hero-in mt-6" style={{ animationDelay: "240ms" }}>{t.heroText}</p>
          <div className="hero-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: "360ms" }}>
            <Link href="/produits" className="btn btn-primary">
              {t.heroCta1}
              <ArrowRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
            </Link>
            <Link href="/contact" className="btn btn-outline bg-white/70">{t.heroCta2}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Bannière fournie par le client — affichée entière, sans déformation */
function Banner({ alt }: { alt: string }) {
  return (
    <section className="bg-white py-8 lg:py-12" aria-label={alt}>
      <div className="container-gcp">
        <Reveal className="overflow-hidden rounded-[28px] bg-white shadow-[var(--shadow-lift)] ring-1 ring-line">
          <img
            src="/images/banner.webp"
            alt={alt}
            width={1080}
            height={405}
            loading="lazy"
            className="block aspect-[1080/405] h-auto w-full object-contain"
          />
        </Reveal>
      </div>
    </section>
  );
}

function Figures({ t }: { t: (typeof T)["fr"] }) {
  return (
    <section className="pb-6" aria-labelledby="figures-title">
      <h2 id="figures-title" className="sr-only">{t.figuresTitle}</h2>
      <div className="container-gcp">
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {t.figures.map((f, i) => (
            <Reveal as="li" key={f.t} delay={i * 80} className="card flex flex-col items-center p-6 text-center">
              <span className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold text-blue" style={{ fontFamily: "var(--font-display)" }} dir="ltr">
                {f.v}
              </span>
              <span className="mt-2 text-sm font-medium text-slate">{f.t}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Ranges({ t }: { t: (typeof T)["fr"] }) {
  const ranges = [
    { key: "cosmetic", title: t.cosmeticTitle, text: t.cosmeticText, img: "/images/collection.webp", Icon: Sparkles, tone: "bg-leaf" },
    { key: "pharma", title: t.pharmaTitle, text: t.pharmaText, img: "/images/lab.webp", Icon: Pill, tone: "bg-blue" },
  ];
  return (
    <section className="section" aria-labelledby="ranges-title">
      <div className="container-gcp">
        <SectionHeading id="ranges-title" eyebrow={t.rangesEyebrow} title={t.rangesTitle} align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {ranges.map((r, i) => (
            <Reveal key={r.key} delay={i * 120}>
              <Link href={`/produits?gamme=${r.key}`} className="group relative block h-full overflow-hidden rounded-[28px] text-white">
                <img src={r.img} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:aspect-[5/4]" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/65 to-navy/5" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 p-7 lg:p-9">
                  <span className={`inline-grid size-12 place-items-center rounded-2xl ${r.tone}`}>
                    <r.Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-2xl font-bold lg:text-[1.75rem]">{r.title}</h3>
                  <p className="mt-2 max-w-md text-white/90">{r.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-semibold">
                    {t.rangeCta}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Plants({ t }: { t: (typeof T)["fr"] }) {
  const featured = PLANTS.filter((p) => p.featured).slice(0, 4);
  const list = featured.length >= 4 ? featured : PLANTS.slice(0, 4);
  return (
    <section className="section leaf-pattern bg-mint/60" aria-labelledby="plants-title">
      <div className="container-gcp grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <Reveal>
          <Eyebrow>{t.plantsEyebrow}</Eyebrow>
          <h2 id="plants-title" className="h2 mt-3">{t.plantsTitle}</h2>
          <p className="lead mt-5">{t.plantsText}</p>
          <Link href="/plantes" className="btn btn-primary mt-8">
            {t.plantsCta}
            <ArrowRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
          </Link>
        </Reveal>
        <div className="grid grid-cols-2 gap-4">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90} className={i % 2 ? "translate-y-6" : ""}>
              <Link href={`/plantes#${p.slug}`} className="block">
                <PlantCard p={p} compact />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why({ t }: { t: (typeof T)["fr"] }) {
  return (
    <section className="section" aria-labelledby="why-title">
      <div className="container-gcp">
        <SectionHeading id="why-title" eyebrow={t.whyEyebrow} title={t.whyTitle} align="center" />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {t.why.map((w, i) => {
            const Icon = WHY_ICONS[i];
            return (
              <Reveal as="li" key={w.t} delay={i * 70} className="card p-6">
                <span className="grid size-12 place-items-center rounded-2xl bg-mint text-leaf-ink">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{w.t}</h3>
                <p className="mt-2 text-sm text-slate">{w.d}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Steps({ t }: { t: (typeof T)["fr"] }) {
  return (
    <section className="section bg-navy text-white" aria-labelledby="steps-title">
      <div className="container-gcp">
        <SectionHeading id="steps-title" eyebrow={t.stepsEyebrow} title={t.stepsTitle} align="center" light />
        <ol className="relative mt-14 grid gap-8 md:grid-cols-5 md:gap-4">
          {/* Ligne de liaison (desktop) */}
          <span className="absolute inset-x-[10%] top-8 hidden h-px bg-white/25 md:block" aria-hidden="true" />
          {t.steps.map((s, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <Reveal as="li" key={s.t} delay={i * 100} className="relative flex gap-4 md:flex-col md:items-center md:text-center">
                <span className="relative grid size-16 shrink-0 place-items-center rounded-full bg-leaf text-white ring-8 ring-navy">
                  <Icon className="size-7" aria-hidden="true" />
                  <span className="absolute -top-1 -end-1 grid size-6 place-items-center rounded-full bg-white text-xs font-bold text-navy">{i + 1}</span>
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white md:mt-4">{s.t}</h3>
                  <p className="mt-1 text-sm text-white/80">{s.d}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
        <div className="mt-12 text-center">
          <Link href="/fabrication-qualite" className="btn btn-ghost-white">
            {t.stepsCta}
            <ArrowRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Testimonials({ t }: { t: (typeof T)["fr"] }) {
  return (
    <section className="section" aria-labelledby="testi-title">
      <div className="container-gcp">
        <SectionHeading id="testi-title" eyebrow={t.testiEyebrow} title={t.testiTitle} align="center" />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {t.testimonials.map((x, i) => (
            <Reveal as="li" key={x.q} delay={i * 100} className="card relative p-7">
              <Quote className="size-9 text-leaf/40 rtl:-scale-x-100" aria-hidden="true" />
              <blockquote className="mt-3 text-[1.05rem] leading-relaxed text-ink">« {x.q} »</blockquote>
              <p className="mt-5 text-sm font-semibold text-blue">— {x.a}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Partner({ t }: { t: (typeof T)["fr"] }) {
  return (
    <section className="pb-6" aria-labelledby="partner-title">
      <div className="container-gcp">
        <Reveal className="relative grid overflow-hidden rounded-[32px] bg-mint lg:grid-cols-2">
          <div className="p-8 sm:p-12 lg:p-14">
            <Eyebrow>{t.partnerEyebrow}</Eyebrow>
            <h2 id="partner-title" className="h2 mt-3">{t.partnerTitle}</h2>
            <p className="lead mt-4">{t.partnerText}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/partenaires" className="btn btn-primary">
                <Handshake className="size-5" aria-hidden="true" />
                {t.partnerCta}
              </Link>
            </div>
          </div>
          <img src="/images/partners.webp" alt="" loading="lazy" className="h-64 w-full object-cover lg:h-full" />
        </Reveal>
      </div>
    </section>
  );
}

function FinalCta({ t }: { t: (typeof T)["fr"] }) {
  return (
    <section className="section" aria-labelledby="final-title">
      <div className="container-gcp">
        <Reveal className="mesh relative overflow-hidden rounded-[32px] border border-line px-6 py-14 text-center sm:px-12 lg:py-20">
          <Leaf className="float-soft mx-auto size-10 text-leaf" aria-hidden="true" />
          <h2 id="final-title" className="h2 mx-auto mt-5 max-w-2xl">{t.finalTitle}</h2>
          <p className="lead mx-auto mt-4 max-w-xl">{t.finalText}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/produits" className="btn btn-primary">{t.finalCta1}</Link>
            <Link href="/contact" className="btn btn-outline">{t.finalCta2}</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */

export default function Home() {
  const { l, lang } = useI18n();
  const t = l(T);
  const ld = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    inLanguage: lang,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/produits?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <>
      <Seo title={t.seoTitle} description={t.seoDesc} path="/" jsonLd={ld} />
      <Hero t={t} />
      <Banner alt={t.bannerAlt} />
      <Figures t={t} />
      <Ranges t={t} />
      <Plants t={t} />
      <Why t={t} />
      <Steps t={t} />
      <Testimonials t={t} />
      <Partner t={t} />
      <FinalCta t={t} />
    </>
  );
}
