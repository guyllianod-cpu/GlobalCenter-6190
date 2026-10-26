/**
 * À propos : histoire, mission, vision, valeurs.
 * Contenu d'exemple — à personnaliser (dates, chiffres, équipe).
 */
import { Link } from "wouter";
import { Leaf, Scale, Lightbulb, BadgeCheck, Target, Eye, ArrowRight } from "lucide-react";
import { useI18n, type L } from "../lib/i18n";
import { Seo, breadcrumbLd } from "../components/seo";
import { PageHero, SectionHeading } from "../components/section";
import { Reveal } from "../components/reveal";

const T = {
  fr: {
    seoDesc: "Découvrez l'histoire, la mission, la vision et les valeurs de Global Center Pharma : bio, éthique, innovation et qualité.",
    eyebrow: "À propos",
    title: "Une passion pour les plantes, une exigence de laboratoire",
    text: "Global Center Pharma réunit le savoir traditionnel des plantes médicinales et la rigueur scientifique pour créer des soins naturels, sûrs et efficaces.",
    historyEyebrow: "Notre histoire",
    historyTitle: "Des plantes, des femmes et des hommes",
    history: [
      "Global Center Pharma est née d'une conviction simple : les plantes médicinales, utilisées depuis des générations, méritent d'être travaillées avec les exigences de la pharmacie moderne.",
      "Fondée par une équipe de pharmaciens, de formulateurs et de passionnés de botanique, l'entreprise a d'abord développé quelques soins à base d'huiles végétales. Elle propose aujourd'hui deux gammes complètes, cosmétique et pharmaceutique, élaborées dans son propre laboratoire.",
      "Notre force : une relation directe avec les producteurs, une maîtrise de chaque étape de fabrication et une attention constante portée à la qualité.",
    ],
    timeline: [
      { y: "Création", d: "Fondation de l'entreprise et premiers soins à base d'huiles végétales." },
      { y: "Laboratoire", d: "Ouverture de notre laboratoire de formulation et de contrôle." },
      { y: "Deux gammes", d: "Lancement de la gamme pharmaceutique bio à base de plantes." },
      { y: "Aujourd'hui", d: "Un réseau de pharmacies, parapharmacies et distributeurs partenaires." },
    ],
    missionTitle: "Notre mission",
    mission: "Rendre accessibles des produits naturels de qualité, formulés à partir de plantes médicinales soigneusement sélectionnées, pour accompagner la beauté et le bien-être de chacun au quotidien.",
    visionTitle: "Notre vision",
    vision: "Devenir une référence des soins à base de plantes, reconnue pour sa transparence, sa traçabilité et la fiabilité de ses formulations.",
    valuesEyebrow: "Nos valeurs",
    valuesTitle: "Quatre engagements qui guident chacun de nos choix",
    values: [
      { t: "Bio", d: "Des ingrédients d'origine naturelle, privilégiant l'agriculture biologique et les filières responsables." },
      { t: "Éthique", d: "Des relations équitables avec nos producteurs, une communication honnête et sans allégation trompeuse." },
      { t: "Innovation", d: "La recherche au service des plantes : nouveaux extraits, procédés plus doux, formules mieux tolérées." },
      { t: "Qualité", d: "Des contrôles à chaque étape, de la matière première au produit fini, selon des standards reconnus." },
    ],
    ctaTitle: "Envie d'en savoir plus sur notre savoir-faire ?",
    ctaBtn: "Fabrication & qualité",
  },
  en: {
    seoDesc: "Discover the story, mission, vision and values of Global Center Pharma: organic, ethics, innovation and quality.",
    eyebrow: "About us",
    title: "A passion for plants, laboratory-grade standards",
    text: "Global Center Pharma brings together traditional knowledge of medicinal plants and scientific rigour to create natural, safe and effective care.",
    historyEyebrow: "Our story",
    historyTitle: "Plants and people",
    history: [
      "Global Center Pharma was born from a simple belief: medicinal plants, used for generations, deserve to be crafted to the standards of modern pharmacy.",
      "Founded by a team of pharmacists, formulators and botany enthusiasts, the company first developed a few care products based on plant oils. Today it offers two complete ranges, cosmetic and pharmaceutical, developed in its own laboratory.",
      "Our strength: direct relationships with growers, control over every manufacturing stage and constant attention to quality.",
    ],
    timeline: [
      { y: "Founding", d: "The company is founded and launches its first plant-oil care products." },
      { y: "Laboratory", d: "Opening of our formulation and quality-control laboratory." },
      { y: "Two ranges", d: "Launch of the organic plant-based pharmaceutical range." },
      { y: "Today", d: "A network of partner pharmacies, drugstores and distributors." },
    ],
    missionTitle: "Our mission",
    mission: "To make high-quality natural products accessible, formulated from carefully selected medicinal plants, to support everyone's everyday beauty and well-being.",
    visionTitle: "Our vision",
    vision: "To become a benchmark for plant-based care, recognised for transparency, traceability and reliable formulations.",
    valuesEyebrow: "Our values",
    valuesTitle: "Four commitments that guide every choice we make",
    values: [
      { t: "Organic", d: "Ingredients of natural origin, favouring organic farming and responsible supply chains." },
      { t: "Ethics", d: "Fair relationships with our growers and honest communication with no misleading claims." },
      { t: "Innovation", d: "Research serving plants: new extracts, gentler processes, better-tolerated formulas." },
      { t: "Quality", d: "Checks at every stage, from raw material to finished product, to recognised standards." },
    ],
    ctaTitle: "Want to learn more about our know-how?",
    ctaBtn: "Manufacturing & quality",
  },
  ar: {
    seoDesc: "اكتشف تاريخ غلوبال سنتر فارما ورسالتها ورؤيتها وقيمها: العضوي، الأخلاقيات، الابتكار والجودة.",
    eyebrow: "من نحن",
    title: "شغف بالنباتات، وصرامة المختبر",
    text: "تجمع غلوبال سنتر فارما بين المعرفة التقليدية بالنباتات الطبية والدقة العلمية لابتكار منتجات عناية طبيعية وآمنة وفعّالة.",
    historyEyebrow: "قصتنا",
    historyTitle: "نباتات وأشخاص",
    history: [
      "وُلدت غلوبال سنتر فارما من قناعة بسيطة: النباتات الطبية المستعملة منذ أجيال تستحق أن تُعالَج وفق متطلبات الصيدلة الحديثة.",
      "أسّسها فريق من الصيادلة والمركّبين وعشّاق علم النبات، وطوّرت في البداية بعض منتجات العناية بالزيوت النباتية. وهي تقدّم اليوم مجموعتين متكاملتين، تجميلية وصيدلانية، تُعدّان في مختبرها الخاص.",
      "قوتنا: علاقة مباشرة مع المنتجين، وتحكّم في كل مرحلة من مراحل التصنيع، واهتمام دائم بالجودة.",
    ],
    timeline: [
      { y: "التأسيس", d: "تأسيس الشركة وإطلاق أولى منتجات العناية بالزيوت النباتية." },
      { y: "المختبر", d: "افتتاح مختبرنا للتركيب ومراقبة الجودة." },
      { y: "مجموعتان", d: "إطلاق المجموعة الصيدلانية العضوية القائمة على النباتات." },
      { y: "اليوم", d: "شبكة من الصيدليات وشبه الصيدليات والموزعين الشركاء." },
    ],
    missionTitle: "رسالتنا",
    mission: "إتاحة منتجات طبيعية عالية الجودة، مركّبة من نباتات طبية مختارة بعناية، لمرافقة جمال الجميع وعافيتهم يومياً.",
    visionTitle: "رؤيتنا",
    vision: "أن نصبح مرجعاً في منتجات العناية النباتية، معروفين بالشفافية والتتبّع وموثوقية تركيباتنا.",
    valuesEyebrow: "قيمنا",
    valuesTitle: "أربعة التزامات توجّه كل اختياراتنا",
    values: [
      { t: "عضوي", d: "مكونات من أصل طبيعي، مع إعطاء الأولوية للزراعة العضوية والسلاسل المسؤولة." },
      { t: "الأخلاقيات", d: "علاقات عادلة مع منتجينا وتواصل صادق دون ادعاءات مضلّلة." },
      { t: "الابتكار", d: "البحث في خدمة النباتات: مستخلصات جديدة، عمليات ألطف، تركيبات أفضل تحمّلاً." },
      { t: "الجودة", d: "مراقبة في كل مرحلة، من المادة الأولية إلى المنتج النهائي، وفق معايير معترف بها." },
    ],
    ctaTitle: "هل تريد معرفة المزيد عن خبرتنا؟",
    ctaBtn: "التصنيع والجودة",
  },
} satisfies L<Record<string, unknown>>;

const VALUE_ICONS = [Leaf, Scale, Lightbulb, BadgeCheck];

export default function About() {
  const { l, ui } = useI18n();
  const t = l(T);
  return (
    <>
      <Seo
        title={ui.nav.about}
        description={t.seoDesc}
        path="/a-propos"
        jsonLd={breadcrumbLd([{ name: ui.nav.home, path: "/" }, { name: ui.nav.about, path: "/a-propos" }])}
      />
      <PageHero eyebrow={t.eyebrow} title={t.title} text={t.text} image="/images/harvest.webp" />

      {/* Histoire + frise */}
      <section className="section" aria-labelledby="history">
        <div className="container-gcp grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading id="history" eyebrow={t.historyEyebrow} title={t.historyTitle} />
            <Reveal className="mt-6 space-y-4 text-slate">
              {t.history.map((p) => <p key={p}>{p}</p>)}
            </Reveal>
          </div>
          <ol className="relative space-y-6 border-s-2 border-mint ps-8">
            {t.timeline.map((s, i) => (
              <Reveal as="li" key={s.y} delay={i * 90} className="relative">
                <span className="absolute -start-[41px] top-1 size-4 rounded-full border-4 border-white bg-leaf shadow" aria-hidden="true" />
                <h3 className="text-lg font-bold text-blue">{s.y}</h3>
                <p className="mt-1 text-slate">{s.d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="section bg-mist" aria-label={`${t.missionTitle} — ${t.visionTitle}`}>
        <div className="container-gcp grid gap-6 md:grid-cols-2">
          {[
            { Icon: Target, title: t.missionTitle, text: t.mission, tone: "bg-blue" },
            { Icon: Eye, title: t.visionTitle, text: t.vision, tone: "bg-leaf" },
          ].map((b, i) => (
            <Reveal key={b.title} delay={i * 100} className="card p-8 lg:p-10">
              <span className={`grid size-14 place-items-center rounded-2xl text-white ${b.tone}`}>
                <b.Icon className="size-7" aria-hidden="true" />
              </span>
              <h2 className="mt-6 text-2xl font-bold">{b.title}</h2>
              <p className="lead mt-3">{b.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Valeurs */}
      <section className="section" aria-labelledby="values">
        <div className="container-gcp">
          <SectionHeading id="values" eyebrow={t.valuesEyebrow} title={t.valuesTitle} align="center" />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.values.map((v, i) => {
              const Icon = VALUE_ICONS[i];
              return (
                <Reveal as="li" key={v.t} delay={i * 80} className="card p-7">
                  <span className="grid size-12 place-items-center rounded-2xl bg-mint text-leaf-ink">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{v.t}</h3>
                  <p className="mt-2 text-sm text-slate">{v.d}</p>
                </Reveal>
              );
            })}
          </ul>
          <Reveal className="mt-14 flex flex-col items-center gap-4 text-center">
            <p className="text-xl font-semibold text-ink">{t.ctaTitle}</p>
            <Link href="/fabrication-qualite" className="btn btn-primary">
              {t.ctaBtn}
              <ArrowRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
