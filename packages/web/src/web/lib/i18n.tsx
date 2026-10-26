/**
 * Internationalisation légère : FR (défaut, sans préfixe), EN (/en), AR (/ar, RTL).
 *
 * - <LangProvider lang="..."> fixe la langue courante, met à jour <html lang/dir>.
 * - useI18n() expose : lang, dir, isRtl, l() pour choisir une traduction,
 *   ui (dictionnaire d'interface) et href() pour construire un lien absolu
 *   vers une autre langue.
 */
import { createContext, useContext, useEffect, useMemo } from "react";
import { ui, type UiDict } from "../i18n/ui";

export type Lang = "fr" | "en" | "ar";
export const LANGS: Lang[] = ["fr", "en", "ar"];
export const LANG_LABELS: Record<Lang, { short: string; name: string }> = {
  fr: { short: "FR", name: "Français" },
  en: { short: "EN", name: "English" },
  ar: { short: "ع", name: "العربية" },
};

/** Texte localisé dans les trois langues */
export type L<T = string> = Record<Lang, T>;

/** Préfixe d'URL d'une langue ("" pour le français) */
export const langPrefix = (lang: Lang) => (lang === "fr" ? "" : `/${lang}`);

interface I18nValue {
  lang: Lang;
  dir: "ltr" | "rtl";
  isRtl: boolean;
  ui: UiDict;
  /** Sélectionne la valeur pour la langue courante */
  l: <T>(value: L<T>) => T;
  /** Chemin absolu (préfixé par la langue) pour usage hors <Link> relatif */
  abs: (path: string, target?: Lang) => string;
}

const I18nContext = createContext<I18nValue | null>(null);

export function LangProvider({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const value = useMemo<I18nValue>(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    return {
      lang,
      dir,
      isRtl: dir === "rtl",
      ui: ui[lang],
      l: (v) => v[lang],
      abs: (path, target = lang) => {
        const p = path === "/" ? "" : path;
        return `${langPrefix(target)}${p}` || "/";
      },
    };
  }, [lang]);

  // Attributs <html> pour l'accessibilité et le RTL
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = value.dir;
  }, [lang, value.dir]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n doit être utilisé dans <LangProvider>");
  return ctx;
}

/** Formate une date ISO selon la langue */
export function formatDate(iso: string, lang: Lang) {
  const locale = lang === "ar" ? "ar-MA" : lang === "en" ? "en-GB" : "fr-FR";
  return new Date(iso).toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" });
}
