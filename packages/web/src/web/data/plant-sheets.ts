/**
 * Fiches techniques détaillées de certaines matières premières (page /plantes/:slug).
 */
import type { L } from "../lib/i18n";

export interface PlantSheet {
  subtitle: L;
  meta: { label: L; value: L }[];
  presentation: L<string[]>;
  interestIntro: L;
  interests: L<string[]>;
  research: L;
  specs: { label: L; value: L }[];
}

const t = (fr: string, en: string, ar: string): L => ({ fr, en, ar });

export const PLANT_SHEETS: Record<string, PlantSheet> = {
  "safran-noir-femelle": {
    subtitle: t(
      "Matière première naturelle pour la recherche et le développement",
      "Natural raw material for research and development",
      "مادة خام طبيعية للبحث والتطوير",
    ),
    meta: [
      { label: t("Dénomination commerciale", "Trade name", "الاسم التجاري"), value: t("Safran Noir Femelle", "Safran Noir Femelle (Female Black Saffron)", "الزعفران الأسود الأنثى") },
      { label: t("Catégorie", "Category", "الفئة"), value: t("Matière première naturelle séchée", "Dried natural raw material", "مادة خام طبيعية مجففة") },
      {
        label: t("Secteurs ciblés", "Target sectors", "القطاعات المستهدفة"),
        value: t(
          "Cosmétique • Nutraceutique • Recherche pharmaceutique • Biotechnologie",
          "Cosmetics • Nutraceuticals • Pharmaceutical research • Biotechnology",
          "مستحضرات التجميل • المكملات الغذائية • البحث الصيدلاني • التكنولوجيا الحيوية",
        ),
      },
      { label: t("Forme", "Form", "الشكل"), value: t("Entière / fragments séchés", "Whole / dried fragments", "كاملة / قطع مجففة") },
    ],
    presentation: {
      fr: [
        "Le Safran Noir Femelle est une matière première naturelle séchée présentant une coloration brun foncé à noire et une structure souple, plissée et irrégulière.",
        "Sa morphologie évoque les espèces du genre Auricularia, un groupe de champignons appartenant aux Basidiomycota et connu pour ses fructifications caractéristiques en forme d’oreille.",
        "Commercialisé sous l'appellation Safran Noir Femelle, ce produit est destiné aux professionnels souhaitant étudier, transformer ou valoriser des matières premières naturelles dans le cadre de leurs activités de recherche et de développement.",
      ],
      en: [
        "Safran Noir Femelle is a dried natural raw material with a dark brown to black colour and a supple, wrinkled and irregular structure.",
        "Its morphology is reminiscent of species of the genus Auricularia, a group of fungi belonging to the Basidiomycota and known for their characteristic ear-shaped fruiting bodies.",
        "Marketed under the name Safran Noir Femelle, this product is intended for professionals wishing to study, process or add value to natural raw materials as part of their research and development activities.",
      ],
      ar: [
        "الزعفران الأسود الأنثى مادة خام طبيعية مجففة ذات لون بني داكن إلى أسود، وبنية مرنة ومجعّدة وغير منتظمة.",
        "يذكّر شكلها بأنواع جنس Auricularia، وهي مجموعة من الفطريات تنتمي إلى الفطريات الدعامية (Basidiomycota) وتُعرف بأجسامها الثمرية المميزة على شكل أذن.",
        "يُسوَّق هذا المنتج تحت اسم الزعفران الأسود الأنثى، وهو موجّه إلى المهنيين الراغبين في دراسة المواد الخام الطبيعية أو تحويلها أو تثمينها في إطار أنشطة البحث والتطوير.",
      ],
    },
    interestIntro: t(
      "Le Safran Noir Femelle peut notamment être étudié pour :",
      "Safran Noir Femelle may in particular be studied for:",
      "يمكن دراسة الزعفران الأسود الأنثى على وجه الخصوص من أجل:",
    ),
    interests: {
      fr: [
        "le développement d'extraits naturels ;",
        "la recherche de composés bioactifs ;",
        "la formulation cosmétique ;",
        "la recherche nutraceutique ;",
        "les travaux de caractérisation en laboratoire ;",
        "l'extraction et la purification de fractions naturelles ;",
        "le développement de nouveaux ingrédients.",
      ],
      en: [
        "the development of natural extracts;",
        "research into bioactive compounds;",
        "cosmetic formulation;",
        "nutraceutical research;",
        "laboratory characterisation work;",
        "the extraction and purification of natural fractions;",
        "the development of new ingredients.",
      ],
      ar: [
        "تطوير المستخلصات الطبيعية؛",
        "البحث عن المركّبات النشطة بيولوجياً؛",
        "تركيب مستحضرات التجميل؛",
        "البحث في المكملات الغذائية؛",
        "أعمال التوصيف المخبري؛",
        "استخلاص الأجزاء الطبيعية وتنقيتها؛",
        "تطوير مكوّنات جديدة.",
      ],
    },
    research: t(
      "Des recherches scientifiques sur les Auricularia portent notamment sur leur composition en polysaccharides, protéines, polyphénols et autres composés d'intérêt biologique.",
      "Scientific research on Auricularia focuses in particular on their composition in polysaccharides, proteins, polyphenols and other compounds of biological interest.",
      "تتناول الأبحاث العلمية حول فطريات Auricularia على وجه الخصوص تركيبها من السكريات المتعددة والبروتينات والبوليفينولات وغيرها من المركّبات ذات الأهمية البيولوجية.",
    ),
    specs: [
      { label: t("Nom commercial", "Trade name", "الاسم التجاري"), value: t("Safran Noir Femelle", "Safran Noir Femelle", "الزعفران الأسود الأنثى") },
      { label: t("Identification scientifique", "Scientific identification", "التعريف العلمي"), value: t("À confirmer par analyse", "To be confirmed by analysis", "يُؤكَّد بالتحليل") },
      { label: t("Nature", "Nature", "الطبيعة"), value: t("Matière première naturelle", "Natural raw material", "مادة خام طبيعية") },
      { label: t("État", "State", "الحالة"), value: t("Séché", "Dried", "مجفف") },
      { label: t("Couleur", "Colour", "اللون"), value: t("Brun foncé à noir", "Dark brown to black", "بني داكن إلى أسود") },
      { label: t("Forme", "Form", "الشكل"), value: t("Fragments entiers ou irréguliers", "Whole or irregular fragments", "قطع كاملة أو غير منتظمة") },
      { label: t("Humidité", "Moisture", "الرطوبة"), value: t("À déterminer par analyse", "To be determined by analysis", "تُحدَّد بالتحليل") },
      { label: t("Microbiologie", "Microbiology", "الميكروبيولوجيا"), value: t("Analyse sur demande", "Analysis on request", "التحليل عند الطلب") },
      { label: t("Métaux lourds", "Heavy metals", "المعادن الثقيلة"), value: t("Analyse sur demande", "Analysis on request", "التحليل عند الطلب") },
      { label: t("Pesticides", "Pesticides", "المبيدات"), value: t("Analyse sur demande", "Analysis on request", "التحليل عند الطلب") },
      { label: t("Origine", "Origin", "المنشأ"), value: t("À préciser selon le lot", "To be specified per batch", "يُحدَّد حسب الدفعة") },
      { label: t("Conditionnement", "Packaging", "التعبئة"), value: t("Selon demande client", "According to customer request", "حسب طلب العميل") },
    ],
  },
};
