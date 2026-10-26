/**
 * Coordonnées et réglages de l'entreprise.
 * ⚠️ Valeurs d'exemple : remplacez-les par vos informations réelles avant publication.
 */
export const SITE = {
  name: "Global Center Pharma",
  /** URL publique du site (utilisée pour les balises canoniques, le sitemap et schema.org) */
  url: "https://www.globalcenterpharma.com",
  email: "contact@globalcenterpharma.com",
  partnersEmail: "partenaires@globalcenterpharma.com",
  /** Numéros de téléphone (le premier est le numéro principal) */
  phones: [
    { display: "+33 6 47 68 13 27", href: "+33647681327" },
    { display: "+44 7404 515728", href: "+447404515728" },
  ],
  /** Numéro WhatsApp au format international, chiffres uniquement */
  whatsapp: "33647681327",
  address: {
    street: "54 Rue Vienne",
    city: "Paris",
    postalCode: "75007",
    country: "France",
    countryCode: "FR",
  },
  /** Siège social (Londres) — adresse affichée telle que fournie */
  headOffice: {
    street: "23, street Carel van Bylandtlan",
    city: "London",
    country: "United Kingdom, England",
    countryCode: "GB",
    display: "23, street Carel van Bylandtlan - United Kingdom, England",
    /** Centre de Londres (carte indicative) */
    geo: { lat: 51.5074, lng: -0.1278 },
  },
  /** Coordonnées GPS du site (carte) */
  geo: { lat: 48.8776, lng: 2.3222 },
  hours: { fr: "Du lundi au vendredi, 8h30 – 17h00", en: "Monday to Friday, 8:30am – 5:00pm", ar: "من الاثنين إلى الجمعة، 8:30 – 17:00" },
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    youtube: "https://www.youtube.com/",
  },
  catalogPdf: "/catalogue/catalogue-global-center-pharma-2026.pdf",
} as const;
