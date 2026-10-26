/**
 * Articles du blog « Conseils santé et beauté naturelle » (exemples).
 * Corps rédigé en français ; titre et chapô traduits en anglais et arabe.
 */
import type { L } from "../lib/i18n";

export type Block = { h: string } | { p: string } | { ul: string[] };

export interface Post {
  slug: string;
  date: string;
  minutes: number;
  image: string;
  category: L;
  title: L;
  excerpt: L;
  body: Block[];
}

const BEAUTY: L = { fr: "Beauté naturelle", en: "Natural beauty", ar: "جمال طبيعي" };
const WELLNESS: L = { fr: "Bien-être", en: "Wellbeing", ar: "العافية" };
const ENGAGE: L = { fr: "Engagements", en: "Commitments", ar: "التزامات" };

export const POSTS: Post[] = [
  {
    slug: "routine-visage-naturelle-en-4-etapes",
    date: "2026-09-28",
    minutes: 5,
    image: "/images/blog/routine.webp",
    category: BEAUTY,
    title: {
      fr: "Une routine visage naturelle en 4 étapes",
      en: "A natural skincare routine in 4 steps",
      ar: "روتين طبيعي للعناية بالوجه في 4 خطوات",
    },
    excerpt: {
      fr: "Nettoyer, tonifier, traiter, hydrater : les gestes essentiels pour une peau éclatante avec des soins à base de plantes.",
      en: "Cleanse, tone, treat, moisturise: the essential steps for radiant skin with plant-based care.",
      ar: "التنظيف، التنشيط، العلاج، الترطيب: الخطوات الأساسية لبشرة مشرقة بمنتجات نباتية.",
    },
    body: [
      { p: "Une belle peau ne demande pas forcément une longue liste de produits. Quelques gestes réguliers, choisis selon votre type de peau, suffisent souvent à la garder confortable et lumineuse." },
      { h: "1. Nettoyer en douceur" },
      { p: "Matin et soir, éliminez impuretés et résidus avec un nettoyant doux, sans sulfates agressifs. Une eau tiède est préférable à une eau trop chaude, qui dessèche." },
      { h: "2. Tonifier" },
      { p: "Une eau florale – rose de Damas ou camomille – rééquilibre la peau après le nettoyage et prépare l'application des soins suivants." },
      { h: "3. Traiter selon vos besoins" },
      { p: "Le sérum est l'étape « ciblée » : éclat, hydratation, confort. Quelques gouttes suffisent, appliquées en pressions légères." },
      { h: "4. Hydrater et protéger" },
      { p: "Terminez par une crème adaptée. Le jour, pensez à une protection solaire : c'est le geste qui préserve le mieux la peau dans le temps." },
      { ul: ["Testez tout nouveau produit sur une petite zone.", "Soyez régulier·ère : la peau se renouvelle en environ 28 jours.", "En cas de réaction ou de problème de peau persistant, consultez un dermatologue."] },
    ],
  },
  {
    slug: "bien-choisir-ses-infusions",
    date: "2026-09-14",
    minutes: 4,
    image: "/images/blog/infusions.webp",
    category: WELLNESS,
    title: {
      fr: "Bien choisir ses infusions selon les moments de la journée",
      en: "Choosing the right herbal infusion for every moment of the day",
      ar: "كيف تختار منقوعك العشبي حسب أوقات اليوم",
    },
    excerpt: {
      fr: "Menthe, thym, camomille… chaque plante a ses usages traditionnels. Notre guide pour composer vos pauses tisane.",
      en: "Mint, thyme, chamomile… each plant has its traditional uses. Our guide to your herbal tea breaks.",
      ar: "النعناع، الزعتر، البابونج… لكل نبتة استعمالاتها التقليدية. دليلنا لاستراحاتك العشبية.",
    },
    body: [
      { p: "Les infusions de plantes accompagnent depuis toujours les rituels du quotidien. Bien préparées, elles sont aussi un moyen agréable de s'hydrater." },
      { h: "Après le repas" },
      { p: "La menthe poivrée et le fenouil sont traditionnellement utilisés pour favoriser le confort digestif." },
      { h: "En saison froide" },
      { p: "Le thym, associé à une cuillère de miel, est un classique pour adoucir la gorge." },
      { h: "Le soir" },
      { p: "La camomille et la lavande se prêtent bien aux moments de détente avant le coucher." },
      { h: "Les bons gestes" },
      { ul: ["Utilisez une eau frémissante, pas bouillante, pour les fleurs et feuilles délicates.", "Couvrez la tasse pendant l'infusion pour préserver les arômes.", "Femmes enceintes, personnes sous traitement : demandez conseil à votre pharmacien."] },
    ],
  },
  {
    slug: "lire-une-etiquette-cosmetique",
    date: "2026-08-30",
    minutes: 6,
    image: "/images/blog/etiquette.webp",
    category: BEAUTY,
    title: {
      fr: "Comment lire une étiquette cosmétique ?",
      en: "How to read a cosmetic label",
      ar: "كيف تقرأ ملصق مستحضر التجميل؟",
    },
    excerpt: {
      fr: "Liste INCI, mentions bio, pictogrammes : les clés pour comprendre ce que contient vraiment votre soin.",
      en: "INCI list, organic claims, symbols: the keys to understanding what your product really contains.",
      ar: "قائمة INCI، إشارات العضوي، الرموز: مفاتيح فهم ما يحتويه منتجك فعلاً.",
    },
    body: [
      { p: "La transparence est l'un de nos engagements. Savoir lire une étiquette vous permet de choisir vos soins en connaissance de cause." },
      { h: "La liste INCI" },
      { p: "Les ingrédients sont listés par ordre décroissant de concentration, sous leur nom international. Les extraits de plantes apparaissent sous leur nom latin : Aloe Barbadensis Leaf Juice, Calendula Officinalis Flower Extract…" },
      { h: "Les mentions bio" },
      { p: "Un astérisque renvoie généralement aux ingrédients issus de l'agriculture biologique, avec le pourcentage total d'ingrédients bio indiqué en fin de liste." },
      { h: "Les pictogrammes utiles" },
      { ul: ["Le pot ouvert (PAO) : durée d'utilisation après ouverture, par exemple 6M ou 12M.", "Le sablier : date de durabilité minimale.", "Le numéro de lot : il garantit la traçabilité de chaque fabrication."] },
    ],
  },
  {
    slug: "romarin-allie-des-cheveux",
    date: "2026-08-12",
    minutes: 4,
    image: "/images/blog/cheveux.webp",
    category: BEAUTY,
    title: {
      fr: "Le romarin, allié traditionnel des cheveux",
      en: "Rosemary, a traditional ally for hair",
      ar: "إكليل الجبل، حليف تقليدي للشعر",
    },
    excerpt: {
      fr: "Utilisé depuis l'Antiquité autour de la Méditerranée, le romarin a toute sa place dans une routine capillaire naturelle.",
      en: "Used around the Mediterranean since antiquity, rosemary belongs in a natural hair routine.",
      ar: "يُستعمل حول المتوسط منذ العصور القديمة، ولإكليل الجبل مكانه في روتين طبيعي للشعر.",
    },
    body: [
      { p: "Plante emblématique des garrigues, le romarin est apprécié pour son parfum tonique et sa richesse en antioxydants naturels." },
      { h: "Dans quels soins ?" },
      { p: "On le retrouve dans les shampooings, lotions et huiles pour le cuir chevelu, où il apporte une sensation de fraîcheur et de tonicité." },
      { h: "Nos conseils" },
      { ul: ["Massez le cuir chevelu quelques minutes lors du shampooing.", "Rincez à l'eau tiède, puis terminez par un filet d'eau fraîche.", "En cas de chute de cheveux importante ou soudaine, consultez un médecin ou un dermatologue."] },
    ],
  },
  {
    slug: "de-la-culture-a-l-emballage-nos-choix-durables",
    date: "2026-07-25",
    minutes: 5,
    image: "/images/blog/durable.webp",
    category: ENGAGE,
    title: {
      fr: "De la culture à l'emballage : nos choix durables",
      en: "From farming to packaging: our sustainable choices",
      ar: "من الزراعة إلى التغليف: خياراتنا المستدامة",
    },
    excerpt: {
      fr: "Producteurs partenaires, extraction douce, emballages recyclables : comment nous réduisons notre impact à chaque étape.",
      en: "Partner growers, gentle extraction, recyclable packaging: how we reduce our footprint at every step.",
      ar: "منتجون شركاء، استخلاص لطيف، تغليف قابل لإعادة التدوير: كيف نقلّل أثرنا في كل مرحلة.",
    },
    body: [
      { p: "Respecter les plantes, c'est aussi respecter les sols, l'eau et les personnes qui les cultivent. Voici les choix concrets qui guident notre activité." },
      { h: "Des filières de proximité" },
      { p: "Nous privilégions des producteurs partenaires engagés en agriculture biologique, avec lesquels nous construisons des relations durables et équitables." },
      { h: "Des procédés sobres" },
      { p: "Nos extractions douces limitent la consommation d'énergie et de solvants, tout en préservant les actifs des plantes." },
      { h: "Des emballages pensés pour durer" },
      { ul: ["Verre et papier recyclables privilégiés.", "Réduction des suremballages.", "Recherche continue de matériaux recyclés et rechargeables."] },
    ],
  },
  {
    slug: "plantes-et-medicaments-precautions",
    date: "2026-07-08",
    minutes: 4,
    image: "/images/blog/conseil.webp",
    category: WELLNESS,
    title: {
      fr: "Plantes et traitements : les bons réflexes",
      en: "Plants and medication: the right reflexes",
      ar: "النباتات والأدوية: التصرفات الصحيحة",
    },
    excerpt: {
      fr: "Naturel ne veut pas dire sans précaution. Pourquoi parler à votre pharmacien avant d'associer plantes et médicaments.",
      en: "Natural does not mean without precautions. Why talk to your pharmacist before combining plants and medicines.",
      ar: "الطبيعي لا يعني بلا احتياطات. لماذا يجب استشارة الصيدلي قبل الجمع بين النباتات والأدوية.",
    },
    body: [
      { p: "Les plantes contiennent des substances actives. C'est ce qui fait leur intérêt, mais c'est aussi pourquoi elles doivent être utilisées avec discernement." },
      { h: "Signalez toujours votre traitement" },
      { p: "Certaines plantes peuvent interagir avec des médicaments (anticoagulants, traitements hormonaux, antidépresseurs…). Votre médecin ou votre pharmacien pourra vous conseiller." },
      { h: "Situations particulières" },
      { ul: ["Grossesse et allaitement.", "Enfants en bas âge.", "Maladies chroniques ou intervention chirurgicale prévue."] },
      { p: "Nos produits ne remplacent pas un avis médical. En cas de doute, consultez un professionnel de santé." },
    ],
  },
];

export const postBySlug = (slug: string) => POSTS.find((p) => p.slug === slug);
