/**
 * Distributeurs & partenaires : avantages, profils recherchés, formulaire.
 */
import { Store, Building2, Sparkles, Truck, BadgePercent, GraduationCap, Megaphone, PackageCheck, FileDown } from "lucide-react";
import { useI18n, type L } from "../lib/i18n";
import { Seo, breadcrumbLd } from "../components/seo";
import { PageHero, SectionHeading } from "../components/section";
import { Reveal } from "../components/reveal";
import { PartnershipForm } from "../components/forms";
import { SITE } from "../data/site";

type Content = {
  title: string; text: string; desc: string; formCta: string;
  profilesEyebrow: string; profilesTitle: string; profiles: { t: string; d: string }[];
  perksEyebrow: string; perksTitle: string; perks: { t: string; d: string }[];
  formEyebrow: string; formTitle: string; formText: string;
  labels: { company: string; contactName: string; country: string; activity: string; volume: string; message: string; submit: string };
  activities: string[]; volumes: string[];
};

const T: L<Content> = {
  fr: {
    title: "Distributeurs & partenaires",
    text: "Pharmacies, parapharmacies, instituts et distributeurs : rejoignez le réseau Global Center Pharma et proposez à vos clients des soins naturels de qualité.",
    desc: "Devenez partenaire ou distributeur Global Center Pharma : pharmacies, parapharmacies, instituts de beauté et distributeurs.",
    formCta: "Remplir le formulaire",
    profilesEyebrow: "Qui peut nous rejoindre ?",
    profilesTitle: "Un réseau de professionnels",
    profiles: [
      { t: "Pharmacies", d: "Une gamme sérieuse et documentée pour conseiller vos patients au comptoir." },
      { t: "Parapharmacies", d: "Des soins naturels attractifs, à forte rotation." },
      { t: "Instituts & spas", d: "Des soins bio pour vos cabines et la revente." },
      { t: "Distributeurs & grossistes", d: "Des conditions dédiées pour couvrir une région ou un pays." },
    ],
    perksEyebrow: "Vos avantages",
    perksTitle: "Pourquoi devenir partenaire ?",
    perks: [
      { t: "Conditions tarifaires", d: "Remises professionnelles adaptées à vos volumes." },
      { t: "Formation", d: "Sessions de formation sur nos produits et nos plantes pour vos équipes." },
      { t: "Supports marketing", d: "PLV, fiches produits, visuels et échantillons." },
      { t: "Logistique fiable", d: "Délais maîtrisés et suivi des commandes." },
    ],
    formEyebrow: "Demande de partenariat",
    formTitle: "Parlons de votre projet",
    formText: "Remplissez ce formulaire : notre service commercial vous recontacte sous 48 h ouvrées.",
    labels: { company: "Raison sociale", contactName: "Nom du contact", country: "Pays / ville", activity: "Type d'activité", volume: "Volume annuel estimé", message: "Présentez votre activité", submit: "Envoyer ma demande" },
    activities: ["Pharmacie", "Parapharmacie", "Institut / spa", "Distributeur / grossiste", "Boutique bio", "Autre"],
    volumes: ["Moins de 500 unités", "500 à 2 000 unités", "2 000 à 10 000 unités", "Plus de 10 000 unités"],
  },
  en: {
    title: "Distributors & partners",
    text: "Pharmacies, drugstores, beauty institutes and distributors: join the Global Center Pharma network and offer your customers high-quality natural care.",
    desc: "Become a Global Center Pharma partner or distributor: pharmacies, drugstores, beauty institutes and distributors.",
    formCta: "Fill in the form",
    profilesEyebrow: "Who can join?",
    profilesTitle: "A network of professionals",
    profiles: [
      { t: "Pharmacies", d: "A serious, well-documented range to advise your patients at the counter." },
      { t: "Drugstores", d: "Attractive, fast-moving natural care products." },
      { t: "Institutes & spas", d: "Organic care for treatments and retail." },
      { t: "Distributors & wholesalers", d: "Dedicated terms to cover a region or a country." },
    ],
    perksEyebrow: "Your benefits",
    perksTitle: "Why become a partner?",
    perks: [
      { t: "Pricing terms", d: "Professional discounts tailored to your volumes." },
      { t: "Training", d: "Training sessions on our products and plants for your teams." },
      { t: "Marketing support", d: "Point-of-sale materials, product sheets, visuals and samples." },
      { t: "Reliable logistics", d: "Controlled lead times and order tracking." },
    ],
    formEyebrow: "Partnership request",
    formTitle: "Let's talk about your project",
    formText: "Fill in this form: our sales team will get back to you within 2 business days.",
    labels: { company: "Company name", contactName: "Contact name", country: "Country / city", activity: "Type of business", volume: "Estimated annual volume", message: "Tell us about your business", submit: "Send my request" },
    activities: ["Pharmacy", "Drugstore", "Institute / spa", "Distributor / wholesaler", "Organic shop", "Other"],
    volumes: ["Under 500 units", "500 to 2,000 units", "2,000 to 10,000 units", "Over 10,000 units"],
  },
  ar: {
    title: "الموزعون والشركاء",
    text: "الصيدليات وشبه الصيدليات ومعاهد التجميل والموزعون: انضموا إلى شبكة غلوبال سنتر فارما وقدّموا لزبائنكم منتجات عناية طبيعية عالية الجودة.",
    desc: "كن شريكاً أو موزعاً لغلوبال سنتر فارما: صيدليات، شبه صيدليات، معاهد تجميل وموزعون.",
    formCta: "املأ الاستمارة",
    profilesEyebrow: "من يمكنه الانضمام؟",
    profilesTitle: "شبكة من المهنيين",
    profiles: [
      { t: "الصيدليات", d: "مجموعة جادة وموثّقة لتقديم النصح لزبائنكم." },
      { t: "شبه الصيدليات", d: "منتجات عناية طبيعية جذابة وسريعة الدوران." },
      { t: "المعاهد والمنتجعات", d: "منتجات عضوية للعلاجات وإعادة البيع." },
      { t: "الموزعون وتجار الجملة", d: "شروط خاصة لتغطية منطقة أو بلد." },
    ],
    perksEyebrow: "مزاياكم",
    perksTitle: "لماذا تصبح شريكاً؟",
    perks: [
      { t: "شروط الأسعار", d: "تخفيضات مهنية تتناسب مع حجم مشترياتكم." },
      { t: "التكوين", d: "دورات تكوينية حول منتجاتنا ونباتاتنا لفرقكم." },
      { t: "دعم تسويقي", d: "مواد العرض، بطاقات المنتجات، صور وعينات." },
      { t: "لوجستيك موثوق", d: "آجال مضبوطة وتتبّع الطلبيات." },
    ],
    formEyebrow: "طلب شراكة",
    formTitle: "لنتحدث عن مشروعك",
    formText: "املأ هذه الاستمارة: سيتصل بك فريقنا التجاري خلال 48 ساعة عمل.",
    labels: { company: "اسم الشركة", contactName: "اسم المسؤول", country: "البلد / المدينة", activity: "نوع النشاط", volume: "الحجم السنوي التقديري", message: "عرّفنا بنشاطك", submit: "إرسال طلبي" },
    activities: ["صيدلية", "شبه صيدلية", "معهد / منتجع", "موزع / تاجر جملة", "متجر عضوي", "أخرى"],
    volumes: ["أقل من 500 وحدة", "من 500 إلى 2000 وحدة", "من 2000 إلى 10000 وحدة", "أكثر من 10000 وحدة"],
  },
};

const PROFILE_ICONS = [Store, Building2, Sparkles, Truck];
const PERK_ICONS = [BadgePercent, GraduationCap, Megaphone, PackageCheck];

export default function Partners() {
  const { l, ui } = useI18n();
  const t = l(T);
  return (
    <>
      <Seo
        title={t.title}
        description={t.desc}
        path="/partenaires"
        jsonLd={breadcrumbLd([{ name: ui.nav.home, path: "/" }, { name: t.title, path: "/partenaires" }])}
      />
      <PageHero eyebrow={ui.nav.partners} title={t.title} text={t.text} image="/images/partners.webp">
        <a href="#formulaire" className="btn btn-primary">{t.formCta}</a>
        <a href={SITE.catalogPdf} download className="btn btn-outline"><FileDown className="size-5" aria-hidden="true" />{ui.cta.catalog}</a>
      </PageHero>

      <section className="section" aria-labelledby="profiles">
        <div className="container-gcp">
          <SectionHeading id="profiles" eyebrow={t.profilesEyebrow} title={t.profilesTitle} align="center" />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.profiles.map((p, i) => {
              const Icon = PROFILE_ICONS[i];
              return (
                <Reveal as="li" key={p.t} delay={i * 80} className="card p-7">
                  <span className="grid size-12 place-items-center rounded-2xl bg-blue text-white"><Icon className="size-6" aria-hidden="true" /></span>
                  <h3 className="mt-5 text-lg font-bold">{p.t}</h3>
                  <p className="mt-2 text-sm text-slate">{p.d}</p>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section bg-mint/60 leaf-pattern" aria-labelledby="perks">
        <div className="container-gcp">
          <SectionHeading id="perks" eyebrow={t.perksEyebrow} title={t.perksTitle} align="center" />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.perks.map((p, i) => {
              const Icon = PERK_ICONS[i];
              return (
                <Reveal as="li" key={p.t} delay={i * 80} className="card p-7">
                  <span className="grid size-12 place-items-center rounded-2xl bg-mint text-leaf-ink"><Icon className="size-6" aria-hidden="true" /></span>
                  <h3 className="mt-5 text-lg font-bold">{p.t}</h3>
                  <p className="mt-2 text-sm text-slate">{p.d}</p>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <section id="formulaire" className="section scroll-mt-24" aria-labelledby="partner-form">
        <div className="container-gcp grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <SectionHeading id="partner-form" eyebrow={t.formEyebrow} title={t.formTitle} text={t.formText} />
          <Reveal className="card p-6 sm:p-9">
            <PartnershipForm labels={t.labels} activities={t.activities} volumes={t.volumes} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
