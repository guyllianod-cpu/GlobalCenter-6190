/**
 * Contact : implantations (siège social Londres, bureau Paris), formulaire,
 * téléphones, e-mail, horaires, carte et réseaux sociaux.
 */
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Building2, Navigation } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { useI18n, type L } from "../lib/i18n";
import { Seo, breadcrumbLd } from "../components/seo";
import { Eyebrow, SectionHeading } from "../components/section";
import { Reveal } from "../components/reveal";
import { ContactForm } from "../components/forms";
import { SITE } from "../data/site";

type Copy = {
  title: string; text: string; desc: string; formTitle: string; formText: string; infoTitle: string;
  hours: string; follow: string; map: string; subjects: string[];
  officesEyebrow: string; officesTitle: string; officesText: string;
  hq: string; hqCity: string; branch: string; branchCity: string;
  phone: string; email: string; directions: string; showMap: string; mapNote: string;
};

const T: L<Copy> = {
  fr: {
    title: "Contactez-nous",
    text: "Une question sur un produit, une demande professionnelle ou un besoin de conseil ? Notre équipe vous répond avec plaisir.",
    desc: "Contactez Global Center Pharma : siège social à Londres, bureau à Paris, formulaire, téléphone, e-mail et WhatsApp.",
    formTitle: "Écrivez-nous",
    formText: "Remplissez le formulaire : nous vous répondons sous 48 heures ouvrées.",
    infoTitle: "Contact direct",
    hours: "Horaires",
    follow: "Suivez-nous",
    map: "Carte de localisation de Global Center Pharma",
    subjects: ["Question sur un produit", "Demande de devis", "Partenariat / distribution", "Presse", "Recrutement", "Autre"],
    officesEyebrow: "Nos implantations",
    officesTitle: "Une présence internationale, un interlocuteur unique",
    officesText: "Global Center Pharma vous accueille depuis son siège social de Londres et son bureau de Paris.",
    hq: "Siège social",
    hqCity: "Londres",
    branch: "Bureau France",
    branchCity: "Paris",
    phone: "Téléphone",
    email: "E-mail",
    directions: "Itinéraire",
    showMap: "Voir sur la carte",
    mapNote: "Carte indicative — l'emplacement exact du siège sera précisé.",
  },
  en: {
    title: "Contact us",
    text: "A question about a product, a professional enquiry or need advice? Our team will be happy to help.",
    desc: "Contact Global Center Pharma: head office in London, office in Paris, form, phone, email and WhatsApp.",
    formTitle: "Write to us",
    formText: "Fill in the form: we reply within 48 working hours.",
    infoTitle: "Direct contact",
    hours: "Opening hours",
    follow: "Follow us",
    map: "Map showing the location of Global Center Pharma",
    subjects: ["Product question", "Quote request", "Partnership / distribution", "Press", "Careers", "Other"],
    officesEyebrow: "Our locations",
    officesTitle: "An international presence, a single point of contact",
    officesText: "Global Center Pharma welcomes you at its head office in London and its office in Paris.",
    hq: "Head office",
    hqCity: "London",
    branch: "France office",
    branchCity: "Paris",
    phone: "Phone",
    email: "Email",
    directions: "Directions",
    showMap: "Show on map",
    mapNote: "Indicative map — the exact location of the head office will be specified.",
  },
  ar: {
    title: "اتصل بنا",
    text: "سؤال حول منتج، طلب مهني أو حاجة إلى نصيحة؟ يسعد فريقنا بالرد عليك.",
    desc: "تواصل مع غلوبال سنتر فارما: المقر الرئيسي في لندن، مكتب في باريس، استمارة، هاتف، بريد إلكتروني وواتساب.",
    formTitle: "راسلنا",
    formText: "املأ الاستمارة وسنرد عليك خلال 48 ساعة عمل.",
    infoTitle: "اتصال مباشر",
    hours: "أوقات العمل",
    follow: "تابعونا",
    map: "خريطة موقع غلوبال سنتر فارما",
    subjects: ["سؤال حول منتج", "طلب عرض سعر", "شراكة / توزيع", "صحافة", "توظيف", "أخرى"],
    officesEyebrow: "مقرّاتنا",
    officesTitle: "حضور دولي ومحاور واحد",
    officesText: "تستقبلكم غلوبال سنتر فارما في مقرها الرئيسي بلندن ومكتبها في باريس.",
    hq: "المقر الرئيسي",
    hqCity: "لندن",
    branch: "مكتب فرنسا",
    branchCity: "باريس",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    directions: "الاتجاهات",
    showMap: "عرض على الخريطة",
    mapNote: "خريطة إرشادية — سيتم تحديد الموقع الدقيق للمقر لاحقاً.",
  },
};

type OfficeKey = "london" | "paris";

const mapUrl = (lat: number, lng: number, d: number, marker: boolean) =>
  `https://www.openstreetmap.org/export/embed.html?bbox=${lng - d}%2C${lat - d}%2C${lng + d}%2C${lat + d}&layer=mapnik${marker ? `&marker=${lat}%2C${lng}` : ""}`;

export default function Contact() {
  const { l, ui, lang } = useI18n();
  const t = l(T);
  const [office, setOffice] = useState<OfficeKey>("london");
  const a = SITE.address;
  const hq = SITE.headOffice;
  const parisLine = `${a.street}, ${a.postalCode} ${a.city}, ${a.country}`;
  const [phoneFr, phoneUk] = SITE.phones;

  const offices = [
    {
      key: "london" as const,
      badge: t.hq,
      city: t.hqCity,
      code: "UK",
      address: hq.display,
      phone: phoneUk,
      dark: true,
      directions: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${hq.street}, ${hq.city}, ${hq.country}`)}`,
    },
    {
      key: "paris" as const,
      badge: t.branch,
      city: t.branchCity,
      code: "FR",
      address: parisLine,
      phone: phoneFr,
      dark: false,
      directions: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(parisLine)}`,
    },
  ];

  const mapSrc = office === "london"
    ? mapUrl(hq.geo.lat, hq.geo.lng, 0.05, false)
    : mapUrl(SITE.geo.lat, SITE.geo.lng, 0.012, true);

  const postal = (o: { street: string; city: string; postalCode?: string; countryCode: string }) => ({
    "@type": "PostalAddress", streetAddress: o.street, addressLocality: o.city, ...(o.postalCode ? { postalCode: o.postalCode } : {}), addressCountry: o.countryCode,
  });

  const ld = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    inLanguage: lang,
    mainEntity: {
      "@type": "Organization",
      name: SITE.name,
      email: SITE.email,
      telephone: SITE.phones.map((p) => p.href),
      address: postal(hq),
      location: [
        { "@type": "Place", name: `${SITE.name} — ${t.hq}`, address: postal(hq) },
        { "@type": "Place", name: `${SITE.name} — ${t.branch}`, address: postal(a) },
      ],
    },
  };

  const socials = [
    { href: SITE.social.facebook, label: "Facebook", Icon: FaFacebookF },
    { href: SITE.social.instagram, label: "Instagram", Icon: FaInstagram },
    { href: SITE.social.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
    { href: SITE.social.youtube, label: "YouTube", Icon: FaYoutube },
  ];

  return (
    <>
      <Seo title={t.title} description={t.desc} path="/contact" jsonLd={[ld, breadcrumbLd([{ name: ui.nav.home, path: "/" }, { name: ui.nav.contact, path: "/contact" }])]} />

      <section className="mesh pt-28 pb-10 lg:pt-36">
        <div className="container-gcp hero-in max-w-3xl text-center">
          <Eyebrow>{ui.nav.contact}</Eyebrow>
          <h1 className="h1 mt-4 text-[clamp(2.1rem,4.4vw,3.4rem)]">{t.title}</h1>
          <p className="lead mt-5">{t.text}</p>
        </div>
      </section>

      {/* Implantations */}
      <section className="section pt-6" aria-labelledby="offices-title">
        <div className="container-gcp">
          <SectionHeading eyebrow={t.officesEyebrow} title={t.officesTitle} text={t.officesText} align="center" id="offices-title" />
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {offices.map((o, i) => (
              <Reveal as="li" key={o.key} delay={i * 100} className="h-full">
                <article
                  className={`relative flex h-full flex-col overflow-hidden rounded-[26px] border p-7 shadow-[0_18px_50px_-30px_rgba(11,92,140,.45)] sm:p-9 ${
                    o.dark ? "border-navy bg-navy text-white" : "border-line bg-white text-ink"
                  }`}
                >
                  <span aria-hidden="true" className={`pointer-events-none absolute -end-6 -top-8 text-[7.5rem] font-extrabold leading-none tracking-tight ${o.dark ? "text-white/[.06]" : "text-navy/[.05]"}`}>
                    {o.code}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className={`grid size-12 place-items-center rounded-2xl ${o.dark ? "bg-white/10 text-[#bfe3a3]" : "bg-mint text-leaf-ink"}`}>
                      <Building2 className="size-6" aria-hidden="true" />
                    </span>
                    <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${o.dark ? "bg-leaf text-white" : "bg-blue/10 text-blue"}`}>
                      {o.badge}
                    </span>
                  </div>
                  <h3 className="mt-6 text-3xl font-extrabold" style={o.dark ? { color: "#fff" } : undefined}>{o.city}</h3>
                  <ul className={`mt-6 space-y-4 text-[15px] ${o.dark ? "text-white/85" : "text-slate"}`}>
                    <li className="flex gap-3">
                      <MapPin className={`mt-0.5 size-5 shrink-0 ${o.dark ? "text-[#bfe3a3]" : "text-blue"}`} aria-hidden="true" />
                      <address className="not-italic" dir="ltr">{o.address}</address>
                    </li>
                    <li className="flex gap-3">
                      <Phone className={`mt-0.5 size-5 shrink-0 ${o.dark ? "text-[#bfe3a3]" : "text-blue"}`} aria-hidden="true" />
                      <span>
                        <span className="sr-only">{t.phone} : </span>
                        <a href={`tel:${o.phone.href}`} dir="ltr" className={`font-semibold ${o.dark ? "text-white hover:text-[#bfe3a3]" : "text-ink hover:text-blue"}`}>{o.phone.display}</a>
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Mail className={`mt-0.5 size-5 shrink-0 ${o.dark ? "text-[#bfe3a3]" : "text-blue"}`} aria-hidden="true" />
                      <span>
                        <span className="sr-only">{t.email} : </span>
                        <a href={`mailto:${SITE.email}`} className={`break-all font-semibold ${o.dark ? "text-white hover:text-[#bfe3a3]" : "text-ink hover:text-blue"}`}>{SITE.email}</a>
                      </span>
                    </li>
                  </ul>
                  <div className="mt-auto flex flex-wrap gap-3 pt-8">
                    <a href={o.directions} target="_blank" rel="noopener noreferrer" className={`btn min-h-11 px-5 text-sm ${o.dark ? "bg-white text-navy hover:bg-mint" : "btn-primary"}`}>
                      <Navigation className="size-4" aria-hidden="true" />
                      {t.directions}
                    </a>
                    <a
                      href="#carte"
                      onClick={() => setOffice(o.key)}
                      className={`btn min-h-11 px-5 text-sm ${o.dark ? "border border-white/40 text-white hover:bg-white/10" : "btn-outline"}`}
                    >
                      <MapPin className="size-4" aria-hidden="true" />
                      {t.showMap}
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Formulaire + contact direct */}
      <section className="section bg-mist">
        <div className="container-gcp grid gap-8 lg:grid-cols-[1.25fr_.75fr]">
          <Reveal className="card p-6 sm:p-9">
            <h2 className="text-2xl font-bold">{t.formTitle}</h2>
            <p className="mt-2 text-sm text-slate">{t.formText}</p>
            <div className="mt-6"><ContactForm subjects={t.subjects} /></div>
          </Reveal>

          <Reveal delay={100} className="space-y-5">
            <div className="card p-7">
              <h2 className="text-xl font-bold">{t.infoTitle}</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex gap-3"><Phone className="mt-0.5 size-5 shrink-0 text-blue" aria-hidden="true" /><span className="flex flex-col gap-1"><strong>{t.phone}</strong>{SITE.phones.map((p) => <a key={p.href} href={`tel:${p.href}`} dir="ltr" className="font-semibold hover:text-blue">{p.display}</a>)}</span></li>
                <li className="flex gap-3"><Mail className="mt-0.5 size-5 shrink-0 text-blue" aria-hidden="true" /><span className="flex flex-col gap-1"><strong>{t.email}</strong><a href={`mailto:${SITE.email}`} className="break-all font-semibold hover:text-blue">{SITE.email}</a></span></li>
                <li className="flex gap-3"><Clock className="mt-0.5 size-5 shrink-0 text-blue" aria-hidden="true" /><span><strong className="block">{t.hours}</strong>{l(SITE.hours)}</span></li>
              </ul>
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn mt-6 w-full bg-[#1f8f4e] text-white hover:bg-[#177a41]">
                <MessageCircle className="size-5" aria-hidden="true" />
                {ui.cta.whatsapp}
              </a>
            </div>
            <div className="card p-7">
              <h2 className="text-xl font-bold">{t.follow}</h2>
              <ul className="mt-4 flex gap-3">
                {socials.map(({ href, label, Icon }) => (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid size-11 place-items-center rounded-full bg-mist text-blue transition hover:bg-blue hover:text-white">
                      <Icon aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Carte */}
      <section id="carte" className="section scroll-mt-24">
        <div className="container-gcp">
          <fieldset className="flex flex-wrap justify-center gap-2">
            <legend className="sr-only">{t.showMap}</legend>
            {offices.map((o) => (
              <button
                key={o.key}
                type="button"
                aria-pressed={office === o.key}
                onClick={() => setOffice(o.key)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${office === o.key ? "bg-navy text-white" : "bg-mist text-ink hover:bg-mint"}`}
              >
                {o.badge} — {o.city}
              </button>
            ))}
          </fieldset>
          <Reveal className="mt-6 overflow-hidden rounded-[28px] border border-line">
            <iframe key={office} title={t.map} src={mapSrc} loading="lazy" className="block h-[400px] w-full" referrerPolicy="no-referrer-when-downgrade" />
          </Reveal>
          {office === "london" && <p className="mt-3 text-center text-xs text-slate">{t.mapNote}</p>}
        </div>
      </section>
    </>
  );
}
