/**
 * Catalogue produits (contenu d'exemple à adapter).
 * Les textes évitent toute allégation thérapeutique : formulations
 * « contribue à », « traditionnellement utilisé », etc.
 */
import type { L } from "../lib/i18n";

export type Range = "cosmetic" | "pharma";
export type Need = "face" | "body" | "hair" | "joints" | "digestion" | "winter" | "vitality" | "muscles";
export type Cert = "organic" | "gmp" | "iso22716" | "iso9001" | "crueltyFree" | "dermaTested" | "vegan";

export interface Product {
  slug: string;
  range: Range;
  need: Need;
  image: string;
  plants: string[];
  certs: Cert[];
  featured?: boolean;
  name: L;
  tagline: L;
  description: L;
  benefits: L<string[]>;
  usage: L;
  precautions: L;
  format: L;
}

export const NEEDS: Record<Need, { range: Range; label: L }> = {
  face: { range: "cosmetic", label: { fr: "Visage", en: "Face", ar: "الوجه" } },
  body: { range: "cosmetic", label: { fr: "Corps", en: "Body", ar: "الجسم" } },
  hair: { range: "cosmetic", label: { fr: "Cheveux", en: "Hair", ar: "الشعر" } },
  joints: { range: "pharma", label: { fr: "Articulations", en: "Joints", ar: "المفاصل" } },
  digestion: { range: "pharma", label: { fr: "Digestion", en: "Digestion", ar: "الهضم" } },
  winter: { range: "pharma", label: { fr: "Hiver & gorge", en: "Winter & throat", ar: "الشتاء والحلق" } },
  vitality: { range: "pharma", label: { fr: "Vitalité", en: "Vitality", ar: "الحيوية" } },
  muscles: { range: "pharma", label: { fr: "Muscles", en: "Muscles", ar: "العضلات" } },
};

export const CERTS: Record<Cert, L> = {
  organic: { fr: "Ingrédients issus de l'agriculture biologique", en: "Ingredients from organic farming", ar: "مكونات من الزراعة العضوية" },
  gmp: { fr: "Fabriqué selon les BPF (GMP)", en: "Manufactured to GMP", ar: "مصنّع وفق ممارسات التصنيع الجيدة (GMP)" },
  iso22716: { fr: "BPF cosmétiques ISO 22716", en: "Cosmetic GMP ISO 22716", ar: "ممارسات التصنيع الجيدة للتجميل ISO 22716" },
  iso9001: { fr: "Système qualité ISO 9001", en: "ISO 9001 quality system", ar: "نظام الجودة ISO 9001" },
  crueltyFree: { fr: "Non testé sur les animaux", en: "Not tested on animals", ar: "غير مختبر على الحيوانات" },
  dermaTested: { fr: "Testé sous contrôle dermatologique", en: "Dermatologically tested", ar: "مختبر تحت إشراف طب الجلد" },
  vegan: { fr: "Formule végane", en: "Vegan formula", ar: "تركيبة نباتية" },
};

const COSMETIC_PRECAUTION: L = {
  fr: "Usage externe uniquement. Éviter le contour des yeux. Faire un test sur une petite zone avant la première utilisation. Conserver à l'abri de la chaleur.",
  en: "For external use only. Avoid the eye area. Patch test before first use. Store away from heat.",
  ar: "للاستعمال الخارجي فقط. تجنّب محيط العينين. اختبر المنتج على منطقة صغيرة قبل الاستعمال الأول. يُحفظ بعيداً عن الحرارة.",
};

const SUPPLEMENT_PRECAUTION: L = {
  fr: "Complément alimentaire : ne pas dépasser la dose journalière recommandée. Ne se substitue pas à une alimentation variée et équilibrée ni à un mode de vie sain. Déconseillé aux femmes enceintes ou allaitantes et aux enfants sans avis médical. Tenir hors de portée des enfants.",
  en: "Food supplement: do not exceed the recommended daily dose. Not a substitute for a varied, balanced diet and a healthy lifestyle. Not recommended for pregnant or breastfeeding women or children without medical advice. Keep out of reach of children.",
  ar: "مكمّل غذائي: لا تتجاوز الجرعة اليومية الموصى بها. لا يغني عن نظام غذائي متنوع ومتوازن ونمط حياة صحي. لا يُنصح به للحوامل والمرضعات والأطفال دون استشارة طبية. يُحفظ بعيداً عن متناول الأطفال.",
};

export const PRODUCTS: Product[] = [
  // ---------------- Cosmétiques bio ----------------
  {
    slug: "huile-seche-argan-figue-de-barbarie",
    range: "cosmetic",
    need: "body",
    image: "/images/products/huile-argan.webp",
    plants: ["argan"],
    certs: ["organic", "iso22716", "crueltyFree", "vegan"],
    featured: true,
    name: { fr: "Huile sèche Argan & Figue de Barbarie", en: "Argan & Prickly Pear Dry Oil", ar: "زيت جاف بالأركان والتين الشوكي" },
    tagline: { fr: "Nutrition intense, fini non gras", en: "Intense nourishment, non-greasy finish", ar: "تغذية مكثفة بلمسة غير دهنية" },
    description: {
      fr: "Une huile légère qui pénètre rapidement pour nourrir la peau, les cheveux et les ongles. L'argan pressé à froid s'associe à l'huile de pépins de figue de Barbarie pour une peau visiblement plus souple et satinée.",
      en: "A light oil that absorbs quickly to nourish skin, hair and nails. Cold-pressed argan meets prickly pear seed oil for visibly softer, satin-smooth skin.",
      ar: "زيت خفيف سريع الامتصاص يغذّي البشرة والشعر والأظافر. يجتمع زيت الأركان المعصور على البارد مع زيت بذور التين الشوكي لبشرة أكثر ليونة ونعومة بشكل ملحوظ.",
    },
    benefits: {
      fr: ["Nourrit et assouplit la peau", "Apporte brillance aux longueurs", "Toucher sec et non collant"],
      en: ["Nourishes and softens skin", "Adds shine to lengths", "Dry, non-sticky touch"],
      ar: ["يغذّي البشرة ويليّنها", "يمنح الشعر لمعاناً", "ملمس جاف غير لزج"],
    },
    usage: {
      fr: "Appliquer quelques gouttes sur peau propre et masser jusqu'à absorption. Sur cheveux, en touche finale sur les pointes.",
      en: "Apply a few drops to clean skin and massage until absorbed. On hair, use as a finishing touch on the ends.",
      ar: "ضع بضع قطرات على بشرة نظيفة ودلّك حتى الامتصاص. على الشعر، استعمله كلمسة نهائية على الأطراف.",
    },
    precautions: COSMETIC_PRECAUTION,
    format: { fr: "Flacon pompe 50 ml / 100 ml", en: "50 ml / 100 ml pump bottle", ar: "عبوة بمضخة 50 مل / 100 مل" },
  },
  {
    slug: "creme-hydratante-aloe-vera-calendula",
    range: "cosmetic",
    need: "face",
    image: "/images/products/creme-aloe.webp",
    plants: ["aloe-vera", "calendula"],
    certs: ["organic", "iso22716", "dermaTested", "crueltyFree"],
    featured: true,
    name: { fr: "Crème hydratante Aloe vera & Calendula", en: "Aloe Vera & Calendula Moisturising Cream", ar: "كريم مرطّب بالصبار والكالندولا" },
    tagline: { fr: "Hydratation et confort 24 h", en: "24-hour moisture and comfort", ar: "ترطيب وراحة طوال اليوم" },
    description: {
      fr: "Texture fondante pour le visage, formulée avec du gel d'aloe vera bio et un macérat de calendula. Elle hydrate, apaise les sensations d'inconfort et convient aux peaux sensibles.",
      en: "A melting face cream made with organic aloe vera gel and calendula macerate. It moisturises, eases feelings of discomfort and suits sensitive skin.",
      ar: "قوام ذائب للوجه، مركّب من هلام الصبار العضوي ونقيع الكالندولا. يرطّب ويخفّف الإحساس بعدم الراحة ويناسب البشرة الحساسة.",
    },
    benefits: {
      fr: ["Hydrate durablement", "Apaise les peaux sensibles", "Laisse la peau douce et confortable"],
      en: ["Long-lasting hydration", "Soothes sensitive skin", "Leaves skin soft and comfortable"],
      ar: ["ترطيب يدوم طويلاً", "يهدّئ البشرة الحساسة", "يترك البشرة ناعمة ومرتاحة"],
    },
    usage: {
      fr: "Matin et soir, appliquer sur le visage et le cou nettoyés.",
      en: "Morning and evening, apply to cleansed face and neck.",
      ar: "صباحاً ومساءً، يُوضع على الوجه والرقبة بعد التنظيف.",
    },
    precautions: COSMETIC_PRECAUTION,
    format: { fr: "Pot 50 ml", en: "50 ml jar", ar: "علبة 50 مل" },
  },
  {
    slug: "serum-eclat-rose-de-damas",
    range: "cosmetic",
    need: "face",
    image: "/images/products/serum-rose.webp",
    plants: ["rose-de-damas", "aloe-vera"],
    certs: ["organic", "iso22716", "dermaTested", "vegan"],
    featured: true,
    name: { fr: "Sérum éclat Rose de Damas", en: "Damask Rose Radiance Serum", ar: "سيروم الإشراقة بالورد الدمشقي" },
    tagline: { fr: "Un teint lumineux, naturellement", en: "Naturally luminous skin", ar: "بشرة مشرقة بشكل طبيعي" },
    description: {
      fr: "Concentré d'eau florale et d'extrait de rose de Damas, ce sérum léger révèle l'éclat du teint et prépare la peau à recevoir son soin hydratant.",
      en: "Concentrated in Damask rose water and extract, this light serum reveals radiance and preps skin for its moisturiser.",
      ar: "سيروم خفيف مركّز بماء ومستخلص الورد الدمشقي، يُبرز إشراقة البشرة ويهيّئها لتلقي الكريم المرطّب.",
    },
    benefits: {
      fr: ["Ravive l'éclat du teint", "Tonifie la peau", "Texture légère, absorption rapide"],
      en: ["Revives radiance", "Tones the skin", "Light texture, fast absorption"],
      ar: ["يُعيد إشراقة البشرة", "يشدّ البشرة", "قوام خفيف وامتصاص سريع"],
    },
    usage: {
      fr: "Appliquer 3 à 4 gouttes sur le visage avant la crème, matin et/ou soir.",
      en: "Apply 3–4 drops to the face before your cream, morning and/or evening.",
      ar: "ضع 3 إلى 4 قطرات على الوجه قبل الكريم، صباحاً و/أو مساءً.",
    },
    precautions: COSMETIC_PRECAUTION,
    format: { fr: "Flacon compte-gouttes 30 ml", en: "30 ml dropper bottle", ar: "قارورة بقطّارة 30 مل" },
  },
  {
    slug: "shampooing-fortifiant-romarin-ortie",
    range: "cosmetic",
    need: "hair",
    image: "/images/products/shampoing-romarin.webp",
    plants: ["romarin"],
    certs: ["organic", "iso22716", "crueltyFree", "vegan"],
    name: { fr: "Shampooing fortifiant Romarin & Ortie", en: "Rosemary & Nettle Strengthening Shampoo", ar: "شامبو مقوٍّ بإكليل الجبل والقرّاص" },
    tagline: { fr: "Cheveux plus forts dès la racine", en: "Stronger hair from the roots", ar: "شعر أقوى من الجذور" },
    description: {
      fr: "Une base lavante douce d'origine végétale enrichie en extraits de romarin et d'ortie, pour nettoyer le cuir chevelu en respectant son équilibre et redonner vigueur à la fibre.",
      en: "A gentle plant-based cleansing base enriched with rosemary and nettle extracts to cleanse the scalp while respecting its balance and revive the hair fibre.",
      ar: "قاعدة غسل لطيفة من أصل نباتي غنية بمستخلصات إكليل الجبل والقرّاص، لتنظيف فروة الرأس مع احترام توازنها وإعادة الحيوية للشعر.",
    },
    benefits: {
      fr: ["Nettoie en douceur", "Fortifie la fibre capillaire", "Sans sulfates ni silicones"],
      en: ["Cleanses gently", "Strengthens the hair fibre", "Sulphate- and silicone-free"],
      ar: ["ينظّف بلطف", "يقوّي ألياف الشعر", "خالٍ من الكبريتات والسيليكون"],
    },
    usage: {
      fr: "Appliquer sur cheveux mouillés, masser le cuir chevelu, laisser agir 1 minute puis rincer.",
      en: "Apply to wet hair, massage the scalp, leave for 1 minute then rinse.",
      ar: "يُوضع على شعر مبلل، دلّك فروة الرأس، اتركه دقيقة ثم اشطفه.",
    },
    precautions: COSMETIC_PRECAUTION,
    format: { fr: "Flacon 250 ml", en: "250 ml bottle", ar: "عبوة 250 مل" },
  },
  {
    slug: "baume-levres-karite-camomille",
    range: "cosmetic",
    need: "face",
    image: "/images/products/baume-karite.webp",
    plants: ["camomille"],
    certs: ["organic", "iso22716", "crueltyFree"],
    name: { fr: "Baume lèvres Karité & Camomille", en: "Shea & Chamomile Lip Balm", ar: "مرطّب شفاه بالشيا والبابونج" },
    tagline: { fr: "Réconfort des lèvres sèches", en: "Comfort for dry lips", ar: "راحة للشفاه الجافة" },
    description: {
      fr: "Un baume fondant au beurre de karité et à l'extrait de camomille, qui protège et nourrit les lèvres exposées au froid et au vent.",
      en: "A melting balm with shea butter and chamomile extract that protects and nourishes lips exposed to cold and wind.",
      ar: "مرهم ذائب بزبدة الشيا ومستخلص البابونج يحمي ويغذّي الشفاه المعرّضة للبرد والرياح.",
    },
    benefits: {
      fr: ["Nourrit intensément", "Protège du froid", "Apaise les lèvres gercées"],
      en: ["Deeply nourishing", "Protects from the cold", "Soothes chapped lips"],
      ar: ["تغذية عميقة", "حماية من البرد", "يهدّئ الشفاه المتشققة"],
    },
    usage: {
      fr: "Appliquer sur les lèvres aussi souvent que nécessaire.",
      en: "Apply to lips as often as needed.",
      ar: "يُوضع على الشفاه كلما دعت الحاجة.",
    },
    precautions: COSMETIC_PRECAUTION,
    format: { fr: "Stick 4,5 g", en: "4.5 g stick", ar: "أصبع 4.5 غ" },
  },
  {
    slug: "savon-surgras-lavande",
    range: "cosmetic",
    need: "body",
    image: "/images/products/savon-lavande.webp",
    plants: ["lavande"],
    certs: ["organic", "crueltyFree", "vegan"],
    name: { fr: "Savon surgras à la Lavande", en: "Lavender Superfatted Soap", ar: "صابون غني بالزيوت بالخزامى" },
    tagline: { fr: "Saponifié à froid, doux pour la peau", en: "Cold-processed, gentle on skin", ar: "مصنوع على البارد، لطيف على البشرة" },
    description: {
      fr: "Fabriqué selon la méthode de saponification à froid, ce savon conserve la glycérine naturelle et les huiles végétales. La lavande vraie lui offre un parfum apaisant.",
      en: "Made by cold saponification, this soap retains natural glycerine and plant oils. True lavender gives it a calming scent.",
      ar: "مصنوع بطريقة التصبين على البارد، يحتفظ بالجلسرين الطبيعي والزيوت النباتية. وتمنحه الخزامى الحقيقية رائحة مهدّئة.",
    },
    benefits: {
      fr: ["Nettoie sans dessécher", "Parfum relaxant naturel", "Emballage papier recyclable"],
      en: ["Cleanses without drying", "Natural relaxing scent", "Recyclable paper wrap"],
      ar: ["ينظّف دون تجفيف", "رائحة طبيعية مريحة", "تغليف ورقي قابل لإعادة التدوير"],
    },
    usage: {
      fr: "Faire mousser entre les mains humides, appliquer sur le corps puis rincer.",
      en: "Lather between wet hands, apply to the body and rinse.",
      ar: "تُصنع رغوة بين اليدين المبللتين، تُوضع على الجسم ثم تُشطف.",
    },
    precautions: COSMETIC_PRECAUTION,
    format: { fr: "Pain 100 g", en: "100 g bar", ar: "قطعة 100 غ" },
  },

  // ---------------- Produits pharmaceutiques bio ----------------
  {
    slug: "gelules-curcuma-poivre-noir",
    range: "pharma",
    need: "joints",
    image: "/images/products/gelules-curcuma.webp",
    plants: ["curcuma"],
    certs: ["organic", "gmp", "iso9001", "vegan"],
    featured: true,
    name: { fr: "Gélules Curcuma & Poivre noir", en: "Turmeric & Black Pepper Capsules", ar: "كبسولات الكركم والفلفل الأسود" },
    tagline: { fr: "Confort articulaire au quotidien", en: "Everyday joint comfort", ar: "راحة المفاصل يومياً" },
    description: {
      fr: "Complément alimentaire associant la poudre de rhizome de curcuma bio à l'extrait de poivre noir, qui favorise l'assimilation des curcuminoïdes. Le curcuma contribue au confort articulaire.",
      en: "A food supplement combining organic turmeric rhizome powder with black pepper extract, which supports curcuminoid absorption. Turmeric contributes to joint comfort.",
      ar: "مكمّل غذائي يجمع مسحوق جذمور الكركم العضوي مع مستخلص الفلفل الأسود الذي يعزّز امتصاص الكركمينويدات. يساهم الكركم في راحة المفاصل.",
    },
    benefits: {
      fr: ["Contribue au confort articulaire", "Source d'antioxydants naturels", "Gélules végétales"],
      en: ["Contributes to joint comfort", "Source of natural antioxidants", "Plant-based capsules"],
      ar: ["يساهم في راحة المفاصل", "مصدر لمضادات الأكسدة الطبيعية", "كبسولات نباتية"],
    },
    usage: {
      fr: "2 gélules par jour au cours d'un repas, avec un grand verre d'eau.",
      en: "2 capsules a day with a meal and a large glass of water.",
      ar: "كبسولتان يومياً مع الوجبة وكوب كبير من الماء.",
    },
    precautions: {
      fr: `${SUPPLEMENT_PRECAUTION.fr} Déconseillé en cas de calculs biliaires ou de traitement anticoagulant.`,
      en: `${SUPPLEMENT_PRECAUTION.en} Not recommended in case of gallstones or anticoagulant treatment.`,
      ar: `${SUPPLEMENT_PRECAUTION.ar} لا يُنصح به في حالة حصى المرارة أو العلاج بمضادات التخثر.`,
    },
    format: { fr: "Pilulier de 60 gélules", en: "Jar of 60 capsules", ar: "علبة 60 كبسولة" },
  },
  {
    slug: "sirop-thym-miel",
    range: "pharma",
    need: "winter",
    image: "/images/products/sirop-thym.webp",
    plants: ["thym"],
    certs: ["organic", "gmp", "iso9001"],
    featured: true,
    name: { fr: "Sirop Thym & Miel", en: "Thyme & Honey Syrup", ar: "شراب الزعتر والعسل" },
    tagline: { fr: "Douceur pour la gorge", en: "Gentle on the throat", ar: "لطف للحلق" },
    description: {
      fr: "Un sirop à base d'extrait de thym et de miel, traditionnellement utilisé pour adoucir la gorge pendant la saison froide.",
      en: "A syrup made with thyme extract and honey, traditionally used to soothe the throat during the cold season.",
      ar: "شراب بمستخلص الزعتر والعسل، يُستعمل تقليدياً لتلطيف الحلق خلال الموسم البارد.",
    },
    benefits: {
      fr: ["Adoucit la gorge", "Goût agréable", "Sans colorant ni arôme artificiel"],
      en: ["Soothes the throat", "Pleasant taste", "No colourings or artificial flavours"],
      ar: ["يلطّف الحلق", "طعم لذيذ", "بدون ملوّنات أو منكّهات صناعية"],
    },
    usage: {
      fr: "Adultes : 1 cuillère à soupe, 3 fois par jour. Enfants de plus de 6 ans : 1 cuillère à café, 3 fois par jour.",
      en: "Adults: 1 tablespoon, 3 times a day. Children over 6: 1 teaspoon, 3 times a day.",
      ar: "البالغون: ملعقة كبيرة 3 مرات يومياً. الأطفال فوق 6 سنوات: ملعقة صغيرة 3 مرات يومياً.",
    },
    precautions: {
      fr: "Contient du miel : ne pas donner aux enfants de moins d'un an. Si les symptômes persistent plus de 5 jours, consultez un médecin. Tenir hors de portée des enfants.",
      en: "Contains honey: do not give to children under one year. If symptoms persist for more than 5 days, see a doctor. Keep out of reach of children.",
      ar: "يحتوي على العسل: لا يُعطى للأطفال دون سنة. إذا استمرت الأعراض أكثر من 5 أيام، استشر الطبيب. يُحفظ بعيداً عن متناول الأطفال.",
    },
    format: { fr: "Flacon 150 ml avec cuillère doseuse", en: "150 ml bottle with measuring spoon", ar: "عبوة 150 مل مع ملعقة قياس" },
  },
  {
    slug: "infusion-digestive-menthe-fenouil",
    range: "pharma",
    need: "digestion",
    image: "/images/products/infusion-digestive.webp",
    plants: ["menthe-poivree", "camomille"],
    certs: ["organic", "gmp", "vegan"],
    name: { fr: "Infusion digestive Menthe & Fenouil", en: "Mint & Fennel Digestive Infusion", ar: "منقوع هضمي بالنعناع والشمر" },
    tagline: { fr: "Légèreté après les repas", en: "Lightness after meals", ar: "خفة بعد الوجبات" },
    description: {
      fr: "Un mélange de plantes bio – menthe poivrée, graines de fenouil et camomille – traditionnellement utilisé pour favoriser le confort digestif.",
      en: "A blend of organic herbs – peppermint, fennel seeds and chamomile – traditionally used to support digestive comfort.",
      ar: "مزيج من الأعشاب العضوية – النعناع الفلفلي وبذور الشمر والبابونج – يُستعمل تقليدياً لدعم راحة الهضم.",
    },
    benefits: {
      fr: ["Favorise le confort digestif", "Saveur fraîche et douce", "Sachet kraft compostable"],
      en: ["Supports digestive comfort", "Fresh, mild flavour", "Compostable kraft pouch"],
      ar: ["يدعم راحة الهضم", "نكهة منعشة ولطيفة", "كيس كرافت قابل للتحلّل"],
    },
    usage: {
      fr: "1 cuillère à café pour 250 ml d'eau frémissante, infuser 5 à 7 minutes. 1 à 3 tasses par jour.",
      en: "1 teaspoon per 250 ml of simmering water, steep 5–7 minutes. 1–3 cups a day.",
      ar: "ملعقة صغيرة لكل 250 مل من الماء الساخن، يُنقع 5 إلى 7 دقائق. من 1 إلى 3 أكواب يومياً.",
    },
    precautions: {
      fr: "Déconseillé aux femmes enceintes ou allaitantes sans avis médical. En cas de troubles persistants, consultez un professionnel de santé.",
      en: "Not recommended for pregnant or breastfeeding women without medical advice. If symptoms persist, consult a healthcare professional.",
      ar: "لا يُنصح به للحوامل والمرضعات دون استشارة طبية. في حال استمرار الأعراض، استشر أخصائياً صحياً.",
    },
    format: { fr: "Sachet vrac 100 g", en: "100 g loose-leaf pouch", ar: "كيس 100 غ" },
  },
  {
    slug: "gelules-moringa",
    range: "pharma",
    need: "vitality",
    image: "/images/products/gelules-moringa.webp",
    plants: ["moringa"],
    certs: ["organic", "gmp", "iso9001", "vegan"],
    name: { fr: "Gélules Moringa", en: "Moringa Capsules", ar: "كبسولات المورينجا" },
    tagline: { fr: "La vitalité venue des feuilles", en: "Vitality from the leaves", ar: "حيوية من الأوراق" },
    description: {
      fr: "Poudre de feuilles de moringa bio, naturellement riche en fer, en vitamines et en protéines végétales, pour accompagner votre énergie au quotidien dans le cadre d'une alimentation équilibrée.",
      en: "Organic moringa leaf powder, naturally rich in iron, vitamins and plant protein, to support your everyday energy as part of a balanced diet.",
      ar: "مسحوق أوراق المورينجا العضوية، غني طبيعياً بالحديد والفيتامينات والبروتين النباتي، لدعم طاقتك اليومية ضمن نظام غذائي متوازن.",
    },
    benefits: {
      fr: ["Source naturelle de nutriments", "100 % feuilles, sans additif", "Gélules végétales"],
      en: ["Natural source of nutrients", "100% leaves, no additives", "Plant-based capsules"],
      ar: ["مصدر طبيعي للمغذيات", "أوراق 100% بدون إضافات", "كبسولات نباتية"],
    },
    usage: {
      fr: "2 à 3 gélules par jour, le matin, avec un verre d'eau.",
      en: "2–3 capsules a day in the morning with a glass of water.",
      ar: "من 2 إلى 3 كبسولات يومياً صباحاً مع كوب ماء.",
    },
    precautions: SUPPLEMENT_PRECAUTION,
    format: { fr: "Pilulier de 90 gélules", en: "Jar of 90 capsules", ar: "علبة 90 كبسولة" },
  },
  {
    slug: "gel-apaisant-arnica",
    range: "pharma",
    need: "muscles",
    image: "/images/products/gel-arnica.webp",
    plants: ["menthe-poivree"],
    certs: ["organic", "gmp", "dermaTested"],
    name: { fr: "Gel de massage Arnica", en: "Arnica Massage Gel", ar: "جل تدليك بالأرنيكا" },
    tagline: { fr: "Fraîcheur après l'effort", en: "Freshness after exercise", ar: "انتعاش بعد المجهود" },
    description: {
      fr: "Gel frais à l'extrait de fleurs d'arnica et à la menthe poivrée, idéal pour le massage des muscles et articulations après l'effort ou une longue journée.",
      en: "A cooling gel with arnica flower extract and peppermint, ideal for massaging muscles and joints after exercise or a long day.",
      ar: "جل منعش بمستخلص أزهار الأرنيكا والنعناع الفلفلي، مثالي لتدليك العضلات والمفاصل بعد المجهود أو يوم طويل.",
    },
    benefits: {
      fr: ["Effet frais immédiat", "Pénètre sans graisser", "Idéal pour le massage"],
      en: ["Instant cooling effect", "Absorbs without greasiness", "Ideal for massage"],
      ar: ["إحساس فوري بالانتعاش", "يمتص دون أن يترك أثراً دهنياً", "مثالي للتدليك"],
    },
    usage: {
      fr: "Appliquer en massage sur la zone concernée, 2 à 3 fois par jour. Se laver les mains après usage.",
      en: "Massage into the area 2–3 times a day. Wash hands after use.",
      ar: "يُدلّك على المنطقة المعنية 2 إلى 3 مرات يومياً. اغسل يديك بعد الاستعمال.",
    },
    precautions: {
      fr: "Usage externe. Ne pas appliquer sur une peau lésée ou les muqueuses. Déconseillé aux enfants de moins de 6 ans et aux femmes enceintes. Si la gêne persiste, consultez un professionnel de santé.",
      en: "External use. Do not apply to broken skin or mucous membranes. Not recommended for children under 6 or pregnant women. If discomfort persists, consult a healthcare professional.",
      ar: "للاستعمال الخارجي. لا يُوضع على بشرة مجروحة أو على الأغشية المخاطية. لا يُنصح به للأطفال دون 6 سنوات والحوامل. إذا استمر الانزعاج، استشر أخصائياً صحياً.",
    },
    format: { fr: "Tube 100 ml", en: "100 ml tube", ar: "أنبوب 100 مل" },
  },
  {
    slug: "capsules-huile-de-nigelle",
    range: "pharma",
    need: "vitality",
    image: "/images/products/capsules-nigelle.webp",
    plants: ["nigelle"],
    certs: ["organic", "gmp", "iso9001"],
    name: { fr: "Capsules d'huile de Nigelle", en: "Black Seed Oil Capsules", ar: "كبسولات زيت الحبة السوداء" },
    tagline: { fr: "Une tradition millénaire, en capsules", en: "An ancient tradition, in capsules", ar: "تقليد عريق في كبسولات" },
    description: {
      fr: "Huile de graines de nigelle bio pressée à froid, conditionnée en capsules pour une prise simple. Une plante de tradition, intégrée à une alimentation équilibrée.",
      en: "Cold-pressed organic black seed oil in capsules for easy intake. A traditional plant, as part of a balanced diet.",
      ar: "زيت بذور الحبة السوداء العضوي المعصور على البارد في كبسولات لتناول سهل. نبتة تقليدية ضمن نظام غذائي متوازن.",
    },
    benefits: {
      fr: ["Huile vierge pressée à froid", "Riche en acides gras insaturés", "Sans goût prononcé"],
      en: ["Virgin cold-pressed oil", "Rich in unsaturated fatty acids", "No strong taste"],
      ar: ["زيت بكر معصور على البارد", "غني بالأحماض الدهنية غير المشبعة", "بدون طعم قوي"],
    },
    usage: {
      fr: "2 capsules par jour au cours d'un repas.",
      en: "2 capsules a day with a meal.",
      ar: "كبسولتان يومياً مع الوجبة.",
    },
    precautions: SUPPLEMENT_PRECAUTION,
    format: { fr: "Flacon de 60 capsules", en: "Bottle of 60 capsules", ar: "عبوة 60 كبسولة" },
  },
];

export const productBySlug = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
