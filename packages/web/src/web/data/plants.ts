/**
 * Catalogue des plantes médicinales (contenu d'exemple).
 * Les propriétés sont décrites selon les usages traditionnels reconnus,
 * sans allégation thérapeutique.
 */
import type { L } from "../lib/i18n";

export interface Plant {
  slug: string;
  latin: string;
  image: string;
  featured?: boolean;
  name: L;
  family: L;
  origin: L;
  part: L;
  properties: L<string[]>;
  uses: L;
}

export const PLANTS: Plant[] = [
  {
    slug: "safran-noir-femelle",
    latin: "",
    image: "/images/plants/safran-noir-femelle.webp",
    name: { fr: "Safran Noir Femelle", en: "Safran Noir Femelle", ar: "الزعفران الأسود الأنثى" },
    family: { fr: "Identification scientifique à confirmer par analyse", en: "Scientific identification to be confirmed by analysis", ar: "التعريف العلمي يُؤكَّد بالتحليل" },
    origin: { fr: "À préciser selon le lot", en: "To be specified per batch", ar: "يُحدَّد حسب الدفعة" },
    part: { fr: "Entière / fragments séchés", en: "Whole / dried fragments", ar: "كاملة / قطع مجففة" },
    properties: {
      fr: ["Matière première naturelle séchée", "Recherche & développement"],
      en: ["Dried natural raw material", "Research & development"],
      ar: ["مادة خام طبيعية مجففة", "البحث والتطوير"],
    },
    uses: {
      fr: "Cosmétique • Nutraceutique • Recherche pharmaceutique • Biotechnologie.",
      en: "Cosmetics • Nutraceuticals • Pharmaceutical research • Biotechnology.",
      ar: "مستحضرات التجميل • المكملات الغذائية • البحث الصيدلاني • التكنولوجيا الحيوية.",
    },
  },
  {
    slug: "argan",
    latin: "Argania spinosa",
    image: "/images/plants/argan.webp",
    featured: true,
    name: { fr: "Arganier", en: "Argan", ar: "الأركان" },
    family: { fr: "Sapotacées", en: "Sapotaceae", ar: "السابوتية" },
    origin: { fr: "Afrique du Nord (régions arides)", en: "North Africa (arid regions)", ar: "شمال إفريقيا (المناطق الجافة)" },
    part: { fr: "Amandons (huile pressée à froid)", en: "Kernels (cold-pressed oil)", ar: "اللوز (زيت معصور على البارد)" },
    properties: {
      fr: ["Riche en acides gras essentiels", "Source de vitamine E", "Nourrissante et assouplissante"],
      en: ["Rich in essential fatty acids", "Source of vitamin E", "Nourishing and softening"],
      ar: ["غني بالأحماض الدهنية الأساسية", "مصدر لفيتامين E", "مغذٍّ ومليّن"],
    },
    uses: {
      fr: "Soin de la peau sèche, des cheveux et des ongles ; base d'huiles de soin.",
      en: "Care for dry skin, hair and nails; base for care oils.",
      ar: "العناية بالبشرة الجافة والشعر والأظافر؛ قاعدة لزيوت العناية.",
    },
  },
  {
    slug: "aloe-vera",
    latin: "Aloe barbadensis Miller",
    image: "/images/plants/aloe.webp",
    featured: true,
    name: { fr: "Aloe vera", en: "Aloe vera", ar: "الصبار (ألوفيرا)" },
    family: { fr: "Asphodélacées", en: "Asphodelaceae", ar: "الأسفوديلية" },
    origin: { fr: "Péninsule arabique, bassin méditerranéen", en: "Arabian Peninsula, Mediterranean basin", ar: "شبه الجزيرة العربية وحوض المتوسط" },
    part: { fr: "Gel des feuilles", en: "Leaf gel", ar: "هلام الأوراق" },
    properties: {
      fr: ["Hydratant", "Apaisant", "Rafraîchissant"],
      en: ["Moisturising", "Soothing", "Refreshing"],
      ar: ["مرطّب", "مهدّئ", "منعش"],
    },
    uses: {
      fr: "Soins hydratants du visage et du corps, gels après-soleil et après-rasage.",
      en: "Moisturising face and body care, after-sun and after-shave gels.",
      ar: "منتجات ترطيب الوجه والجسم، جل ما بعد الشمس وما بعد الحلاقة.",
    },
  },
  {
    slug: "lavande",
    latin: "Lavandula angustifolia",
    image: "/images/plants/lavande.webp",
    featured: true,
    name: { fr: "Lavande vraie", en: "True lavender", ar: "الخزامى الحقيقية" },
    family: { fr: "Lamiacées", en: "Lamiaceae", ar: "الشفوية" },
    origin: { fr: "Bassin méditerranéen", en: "Mediterranean basin", ar: "حوض البحر المتوسط" },
    part: { fr: "Sommités fleuries", en: "Flowering tops", ar: "القمم المزهرة" },
    properties: {
      fr: ["Parfum relaxant", "Purifiante", "Douce pour la peau"],
      en: ["Relaxing scent", "Purifying", "Gentle on skin"],
      ar: ["رائحة مريحة", "منقّية", "لطيفة على البشرة"],
    },
    uses: {
      fr: "Savons, soins du corps, ambiances de détente ; traditionnellement utilisée pour favoriser la relaxation.",
      en: "Soaps, body care, relaxing atmospheres; traditionally used to support relaxation.",
      ar: "الصابون ومنتجات الجسم وأجواء الاسترخاء؛ تُستعمل تقليدياً لدعم الاسترخاء.",
    },
  },
  {
    slug: "romarin",
    latin: "Salvia rosmarinus",
    image: "/images/plants/romarin.webp",
    name: { fr: "Romarin", en: "Rosemary", ar: "إكليل الجبل" },
    family: { fr: "Lamiacées", en: "Lamiaceae", ar: "الشفوية" },
    origin: { fr: "Bassin méditerranéen", en: "Mediterranean basin", ar: "حوض البحر المتوسط" },
    part: { fr: "Feuilles", en: "Leaves", ar: "الأوراق" },
    properties: {
      fr: ["Tonifiant", "Riche en antioxydants naturels", "Stimulant du cuir chevelu"],
      en: ["Toning", "Rich in natural antioxidants", "Scalp stimulating"],
      ar: ["منشّط", "غني بمضادات الأكسدة الطبيعية", "منشّط لفروة الرأس"],
    },
    uses: {
      fr: "Soins capillaires fortifiants, lotions tonifiantes, infusions digestives traditionnelles.",
      en: "Strengthening hair care, toning lotions, traditional digestive infusions.",
      ar: "منتجات تقوية الشعر، غسولات منشّطة، منقوعات هضمية تقليدية.",
    },
  },
  {
    slug: "curcuma",
    latin: "Curcuma longa",
    image: "/images/plants/curcuma.webp",
    featured: true,
    name: { fr: "Curcuma", en: "Turmeric", ar: "الكركم" },
    family: { fr: "Zingibéracées", en: "Zingiberaceae", ar: "الزنجبيلية" },
    origin: { fr: "Asie du Sud", en: "South Asia", ar: "جنوب آسيا" },
    part: { fr: "Rhizome", en: "Rhizome", ar: "الجذمور" },
    properties: {
      fr: ["Riche en curcuminoïdes", "Antioxydant", "Associé au poivre noir pour une meilleure assimilation"],
      en: ["Rich in curcuminoids", "Antioxidant", "Paired with black pepper for better absorption"],
      ar: ["غني بالكركمينويدات", "مضاد للأكسدة", "يُقرن بالفلفل الأسود لامتصاص أفضل"],
    },
    uses: {
      fr: "Compléments alimentaires contribuant au confort articulaire et digestif.",
      en: "Food supplements supporting joint and digestive comfort.",
      ar: "مكمّلات غذائية تساهم في راحة المفاصل والهضم.",
    },
  },
  {
    slug: "thym",
    latin: "Thymus vulgaris",
    image: "/images/plants/thym.webp",
    name: { fr: "Thym", en: "Thyme", ar: "الزعتر" },
    family: { fr: "Lamiacées", en: "Lamiaceae", ar: "الشفوية" },
    origin: { fr: "Garrigues méditerranéennes", en: "Mediterranean scrubland", ar: "الأحراش المتوسطية" },
    part: { fr: "Parties aériennes fleuries", en: "Flowering aerial parts", ar: "الأجزاء الهوائية المزهرة" },
    properties: {
      fr: ["Aromatique", "Purifiant", "Adoucissant pour la gorge"],
      en: ["Aromatic", "Purifying", "Soothing for the throat"],
      ar: ["عطري", "منقٍّ", "ملطّف للحلق"],
    },
    uses: {
      fr: "Sirops et infusions traditionnellement utilisés pour adoucir la gorge en période hivernale.",
      en: "Syrups and infusions traditionally used to soothe the throat in winter.",
      ar: "شرابات ومنقوعات تُستعمل تقليدياً لتلطيف الحلق في فصل الشتاء.",
    },
  },
  {
    slug: "nigelle",
    latin: "Nigella sativa",
    image: "/images/plants/nigelle.webp",
    featured: true,
    name: { fr: "Nigelle", en: "Black seed", ar: "الحبة السوداء" },
    family: { fr: "Renonculacées", en: "Ranunculaceae", ar: "الحوذانية" },
    origin: { fr: "Moyen-Orient, Afrique du Nord", en: "Middle East, North Africa", ar: "الشرق الأوسط وشمال إفريقيا" },
    part: { fr: "Graines (huile)", en: "Seeds (oil)", ar: "البذور (الزيت)" },
    properties: {
      fr: ["Riche en acides gras insaturés", "Contient de la thymoquinone", "Plante de tradition millénaire"],
      en: ["Rich in unsaturated fatty acids", "Contains thymoquinone", "Plant with a millennia-old tradition"],
      ar: ["غنية بالأحماض الدهنية غير المشبعة", "تحتوي على الثيموكينون", "نبتة ذات تقاليد عريقة"],
    },
    uses: {
      fr: "Capsules d'huile en complément d'une alimentation équilibrée ; soins pour peaux sèches.",
      en: "Oil capsules alongside a balanced diet; care for dry skin.",
      ar: "كبسولات زيت كمكمّل لنظام غذائي متوازن؛ عناية بالبشرة الجافة.",
    },
  },
  {
    slug: "moringa",
    latin: "Moringa oleifera",
    image: "/images/plants/moringa.webp",
    name: { fr: "Moringa", en: "Moringa", ar: "المورينجا" },
    family: { fr: "Moringacées", en: "Moringaceae", ar: "المورينجية" },
    origin: { fr: "Inde, Afrique subsaharienne", en: "India, sub-Saharan Africa", ar: "الهند وإفريقيا جنوب الصحراء" },
    part: { fr: "Feuilles séchées", en: "Dried leaves", ar: "الأوراق المجففة" },
    properties: {
      fr: ["Source naturelle de fer et de vitamines", "Riche en protéines végétales", "Antioxydant"],
      en: ["Natural source of iron and vitamins", "Rich in plant protein", "Antioxidant"],
      ar: ["مصدر طبيعي للحديد والفيتامينات", "غنية بالبروتين النباتي", "مضادة للأكسدة"],
    },
    uses: {
      fr: "Compléments alimentaires pour accompagner la vitalité au quotidien.",
      en: "Food supplements to support everyday vitality.",
      ar: "مكمّلات غذائية لدعم الحيوية اليومية.",
    },
  },
  {
    slug: "camomille",
    latin: "Matricaria chamomilla",
    image: "/images/plants/camomille.webp",
    name: { fr: "Camomille", en: "Chamomile", ar: "البابونج" },
    family: { fr: "Astéracées", en: "Asteraceae", ar: "النجمية" },
    origin: { fr: "Europe, Afrique du Nord", en: "Europe, North Africa", ar: "أوروبا وشمال إفريقيا" },
    part: { fr: "Capitules floraux", en: "Flower heads", ar: "الرؤوس الزهرية" },
    properties: {
      fr: ["Apaisante", "Adoucissante", "Adaptée aux peaux sensibles"],
      en: ["Calming", "Softening", "Suitable for sensitive skin"],
      ar: ["مهدّئة", "مليّنة", "مناسبة للبشرة الحساسة"],
    },
    uses: {
      fr: "Baumes et soins pour peaux sensibles ; infusions du soir.",
      en: "Balms and care for sensitive skin; evening infusions.",
      ar: "مراهم ومنتجات للبشرة الحساسة؛ منقوعات المساء.",
    },
  },
  {
    slug: "menthe-poivree",
    latin: "Mentha × piperita",
    image: "/images/plants/menthe.webp",
    name: { fr: "Menthe poivrée", en: "Peppermint", ar: "النعناع الفلفلي" },
    family: { fr: "Lamiacées", en: "Lamiaceae", ar: "الشفوية" },
    origin: { fr: "Europe, Afrique du Nord", en: "Europe, North Africa", ar: "أوروبا وشمال إفريقيا" },
    part: { fr: "Feuilles", en: "Leaves", ar: "الأوراق" },
    properties: {
      fr: ["Rafraîchissante", "Aromatique", "Traditionnellement digestive"],
      en: ["Refreshing", "Aromatic", "Traditionally digestive"],
      ar: ["منعش", "عطري", "هاضم تقليدياً"],
    },
    uses: {
      fr: "Infusions d'après-repas, soins rafraîchissants.",
      en: "After-meal infusions, refreshing care.",
      ar: "منقوعات ما بعد الوجبات، منتجات منعشة.",
    },
  },
  {
    slug: "calendula",
    latin: "Calendula officinalis",
    image: "/images/plants/calendula.webp",
    name: { fr: "Calendula", en: "Calendula", ar: "الأقحوان (الكالندولا)" },
    family: { fr: "Astéracées", en: "Asteraceae", ar: "النجمية" },
    origin: { fr: "Bassin méditerranéen", en: "Mediterranean basin", ar: "حوض البحر المتوسط" },
    part: { fr: "Fleurs", en: "Flowers", ar: "الأزهار" },
    properties: {
      fr: ["Adoucissant", "Réconfortant pour les peaux sèches", "Riche en caroténoïdes"],
      en: ["Softening", "Comforting for dry skin", "Rich in carotenoids"],
      ar: ["مليّن", "مريح للبشرة الجافة", "غني بالكاروتينات"],
    },
    uses: {
      fr: "Crèmes, macérats huileux et baumes pour peaux sèches ou fragilisées.",
      en: "Creams, oil macerates and balms for dry or delicate skin.",
      ar: "كريمات ونقائع زيتية ومراهم للبشرة الجافة أو الحساسة.",
    },
  },
  {
    slug: "rose-de-damas",
    latin: "Rosa × damascena",
    image: "/images/plants/rose.webp",
    name: { fr: "Rose de Damas", en: "Damask rose", ar: "الورد الدمشقي" },
    family: { fr: "Rosacées", en: "Rosaceae", ar: "الوردية" },
    origin: { fr: "Moyen-Orient, Afrique du Nord", en: "Middle East, North Africa", ar: "الشرق الأوسط وشمال إفريقيا" },
    part: { fr: "Pétales (eau florale, extrait)", en: "Petals (floral water, extract)", ar: "البتلات (ماء الورد، مستخلص)" },
    properties: {
      fr: ["Tonifiante", "Éclat du teint", "Parfum délicat"],
      en: ["Toning", "Radiance", "Delicate scent"],
      ar: ["منشّط", "إشراقة البشرة", "عطر رقيق"],
    },
    uses: {
      fr: "Sérums, lotions et brumes pour le visage.",
      en: "Serums, lotions and face mists.",
      ar: "سيرومات وغسولات ورذاذ للوجه.",
    },
  },
];

export const plantBySlug = (slug: string) => PLANTS.find((p) => p.slug === slug);
