/**
 * <Seo> : met à jour titre, méta description, Open Graph, canonique,
 * hreflang et données structurées JSON-LD pour chaque page.
 */
import { useEffect } from "react";
import { LANGS, langPrefix, useI18n } from "../lib/i18n";
import { SITE } from "../data/site";

interface SeoProps {
  title: string;
  description: string;
  /** Chemin de la page sans préfixe de langue, ex. "/produits" */
  path: string;
  image?: string;
  type?: "website" | "article" | "product";
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

export function Seo({ title, description, path, image = "/og-image.jpg", type = "website", jsonLd }: SeoProps) {
  const { lang } = useI18n();

  useEffect(() => {
    const origin = window.location.origin || SITE.url;
    const full = title.includes("Global Center Pharma") ? title : `${title} | Global Center Pharma`;
    const url = (l: string) => `${origin}${langPrefix(l as never)}${path === "/" ? "" : path}` || origin;

    document.title = full;
    setMeta("name", "description", description);
    setMeta("property", "og:title", full);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type === "product" ? "product" : type);
    setMeta("property", "og:url", url(lang));
    setMeta("property", "og:image", image.startsWith("http") ? image : `${origin}${image}`);
    setMeta("property", "og:locale", lang === "fr" ? "fr_FR" : lang === "en" ? "en_US" : "ar_AR");

    // Canonique + hreflang
    document.head.querySelectorAll('link[data-seo="1"]').forEach((n) => n.remove());
    const addLink = (rel: string, href: string, hreflang?: string) => {
      const link = document.createElement("link");
      link.rel = rel;
      link.href = href;
      if (hreflang) link.hreflang = hreflang;
      link.dataset.seo = "1";
      document.head.appendChild(link);
    };
    addLink("canonical", url(lang));
    LANGS.forEach((l) => addLink("alternate", url(l), l));
    addLink("alternate", url("fr"), "x-default");

    // JSON-LD propre à la page
    document.head.querySelectorAll('script[data-seo="1"]').forEach((n) => n.remove());
    if (jsonLd) {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.dataset.seo = "1";
      s.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(s);
    }
  }, [title, description, path, image, type, lang, jsonLd]);

  return null;
}

/** Fil d'Ariane schema.org */
export function breadcrumbLd(items: { name: string; path: string }[]) {
  const origin = typeof window !== "undefined" ? window.location.origin : SITE.url;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${origin}${it.path}`,
    })),
  };
}
