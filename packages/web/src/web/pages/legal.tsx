/**
 * Pages légales : mentions légales, politique de confidentialité,
 * avertissement santé. Texte de référence en français (mention en EN/AR).
 * ⚠ Modèles à faire valider par un juriste et à compléter (RC, NIF, hébergeur…).
 */
import type { ReactNode } from "react";
import { Info } from "lucide-react";
import { useI18n, type L } from "../lib/i18n";
import { Seo, breadcrumbLd } from "../components/seo";
import { Eyebrow } from "../components/section";
import { SITE } from "../data/site";

function LegalPage({ path, title, desc, children }: { path: string; title: L; desc: string; children: ReactNode }) {
  const { l, ui, lang } = useI18n();
  return (
    <>
      <Seo title={l(title)} description={desc} path={path} jsonLd={breadcrumbLd([{ name: ui.nav.home, path: "/" }, { name: l(title), path }])} />
      <section className="mesh pt-28 pb-10 lg:pt-36">
        <div className="container-gcp max-w-3xl">
          <Eyebrow>Global Center Pharma</Eyebrow>
          <h1 className="h1 mt-4 text-[clamp(2rem,4vw,3rem)]">{l(title)}</h1>
          <p className="mt-3 text-sm text-slate">{lang === "fr" ? "Dernière mise à jour : 18 octobre 2026" : lang === "en" ? "Last updated: 18 October 2026" : "آخر تحديث: 18 أكتوبر 2026"}</p>
        </div>
      </section>
      <section className="pb-20">
        <div className="container-gcp max-w-3xl">
          {lang !== "fr" && ui.langNotice && (
            <p className="mb-8 flex gap-3 rounded-2xl bg-mist p-4 text-sm"><Info className="size-5 shrink-0 text-blue" aria-hidden="true" />{ui.langNotice}</p>
          )}
          <div className="prose-gcp" lang="fr" dir="ltr">{children}</div>
        </div>
      </section>
    </>
  );
}

const addr = `${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}, ${SITE.address.country}`;

export function Legal() {
  return (
    <LegalPage path="/mentions-legales" title={{ fr: "Mentions légales", en: "Legal notice", ar: "الإشعار القانوني" }} desc="Mentions légales du site Global Center Pharma : éditeur, hébergeur, propriété intellectuelle.">
      <h2>Éditeur du site</h2>
      <p>
        Le présent site est édité par <strong>{SITE.name}</strong>, [forme juridique] au capital de [montant], dont le siège social est situé {SITE.headOffice.display} (Londres), avec un bureau en France situé {addr}.<br />
        Registre du commerce : [numéro] — NIF : [numéro] — NIS : [numéro].<br />
        Téléphone : <span dir="ltr">{SITE.phones.map((p) => p.display).join(" / ")}</span> — E-mail : {SITE.email}.<br />
        Directeur de la publication : [nom et prénom].
      </p>
      <h2>Pharmacien responsable</h2>
      <p>[Nom du pharmacien responsable], [numéro d'inscription à l'ordre].</p>
      <h2>Hébergement</h2>
      <p>Le site est hébergé par [nom de l'hébergeur], [adresse], [téléphone].</p>
      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble des contenus du site (textes, logos, marques, photographies, illustrations, mises en page) est la propriété exclusive de {SITE.name} ou de ses partenaires.
        Toute reproduction, représentation ou adaptation, totale ou partielle, sans autorisation écrite préalable est interdite.
      </p>
      <h2>Responsabilité</h2>
      <p>
        {SITE.name} s'efforce de fournir des informations exactes et à jour. Elle ne saurait toutefois garantir l'exhaustivité des informations publiées.
        Les informations présentées sur ce site ont une vocation informative et ne remplacent en aucun cas l'avis d'un professionnel de santé.
      </p>
      <h2>Liens externes</h2>
      <p>Le site peut contenir des liens vers des sites tiers. {SITE.name} n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.</p>
      <h2>Droit applicable</h2>
      <p>Les présentes mentions sont régies par le droit en vigueur au lieu du siège social de l'éditeur.</p>
    </LegalPage>
  );
}

export function Privacy() {
  return (
    <LegalPage path="/confidentialite" title={{ fr: "Politique de confidentialité", en: "Privacy policy", ar: "سياسة الخصوصية" }} desc="Politique de confidentialité et de gestion des cookies de Global Center Pharma.">
      <p>
        {SITE.name} attache une grande importance à la protection de vos données personnelles. Cette politique explique quelles données nous collectons, pourquoi, et quels sont vos droits.
      </p>
      <h2>Responsable du traitement</h2>
      <p>{SITE.name}, {addr} — {SITE.email}.</p>
      <h2>Données collectées</h2>
      <ul>
        <li>Formulaire de contact : nom, e-mail, téléphone (facultatif), objet et message.</li>
        <li>Demande de devis et de partenariat : coordonnées professionnelles, activité, produits et volumes souhaités.</li>
        <li>Newsletter : adresse e-mail.</li>
        <li>Navigation : données techniques et, avec votre accord, statistiques de fréquentation anonymisées.</li>
      </ul>
      <h2>Finalités et bases légales</h2>
      <ul>
        <li>Répondre à vos demandes (mesures précontractuelles / intérêt légitime).</li>
        <li>Envoyer la newsletter (consentement, retirable à tout moment).</li>
        <li>Mesurer l'audience du site (consentement).</li>
      </ul>
      <h2>Durée de conservation</h2>
      <p>Les demandes sont conservées 3 ans après le dernier contact. Les données de newsletter sont conservées jusqu'à votre désinscription.</p>
      <h2>Destinataires</h2>
      <p>Vos données sont destinées aux seules équipes habilitées de {SITE.name} et à ses sous-traitants techniques (hébergement). Elles ne sont jamais vendues.</p>
      <h2>Vos droits</h2>
      <p>
        Vous disposez d'un droit d'accès, de rectification, d'effacement, d'opposition, de limitation et de portabilité de vos données, conformément à la réglementation applicable
        (notamment le Règlement général sur la protection des données — RGPD — et la loi Informatique et Libertés). Pour les exercer : {SITE.email}.
      </p>
      <h2>Cookies</h2>
      <p>
        Les cookies nécessaires (langue, mémorisation de vos choix) sont toujours actifs. Les cookies de mesure d'audience et de préférences ne sont déposés qu'avec votre accord.
        Vous pouvez modifier votre choix à tout moment via le lien « Gérer les cookies » en bas de chaque page. Votre choix est conservé 6 mois.
      </p>
    </LegalPage>
  );
}

export function Disclaimer() {
  return (
    <LegalPage path="/avertissement" title={{ fr: "Avertissement santé", en: "Health disclaimer", ar: "تنبيه صحي" }} desc="Avertissement : les produits Global Center Pharma ne remplacent pas un avis médical.">
      <p><strong>Ces produits ne remplacent pas un avis médical.</strong> En cas de doute, de symptômes persistants ou de traitement en cours, consultez un médecin ou un pharmacien.</p>
      <h2>Nature des informations</h2>
      <p>
        Les informations présentées sur ce site (fiches produits, fiches plantes, articles de conseils) sont fournies à titre informatif. Elles reposent sur les usages traditionnels
        des plantes et sur l'état des connaissances, et ne constituent ni un diagnostic, ni une prescription, ni une allégation thérapeutique.
      </p>
      <h2>Précautions d'emploi</h2>
      <ul>
        <li>Respectez les conseils d'utilisation et les doses indiquées sur l'emballage.</li>
        <li>Les compléments alimentaires ne se substituent pas à une alimentation variée et équilibrée ni à un mode de vie sain.</li>
        <li>Femmes enceintes ou allaitantes, enfants, personnes sous traitement : demandez l'avis d'un professionnel de santé avant utilisation.</li>
        <li>Les produits naturels peuvent provoquer des réactions chez les personnes sensibles : réalisez un test préalable pour les cosmétiques.</li>
        <li>Tenir hors de portée des enfants.</li>
      </ul>
      <h2>Signaler un effet indésirable</h2>
      <p>Si vous constatez un effet indésirable, cessez l'utilisation et contactez-nous à {SITE.email} ainsi que votre professionnel de santé.</p>
    </LegalPage>
  );
}
