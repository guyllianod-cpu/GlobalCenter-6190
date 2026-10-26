/**
 * Couches globales : dialogue de devis, recherche, bannière cookies,
 * bouton WhatsApp. Exposées via le contexte useOverlays().
 */
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Link } from "wouter";
import { Cookie, Search, X, Leaf, Package } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useI18n } from "../lib/i18n";
import { QuoteForm } from "./forms";
import { PRODUCTS } from "../data/products";
import { PLANTS } from "../data/plants";
import { SITE } from "../data/site";

interface OverlayApi {
  openQuote: (products?: string) => void;
  openSearch: () => void;
  openCookies: () => void;
}
const OverlayContext = createContext<OverlayApi | null>(null);
export const useOverlays = () => {
  const ctx = useContext(OverlayContext);
  if (!ctx) throw new Error("useOverlays hors OverlayProvider");
  return ctx;
};

/** Boîte de dialogue native accessible (<dialog>) */
function Modal({ open, onClose, labelledBy, children, wide = false }: { open: boolean; onClose: () => void; labelledBy: string; children: ReactNode; wide?: boolean }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);
  return (
    <dialog
      ref={ref}
      aria-labelledby={labelledBy}
      onClose={onClose}
      className={`m-auto w-[calc(100%-1.5rem)] ${wide ? "max-w-2xl" : "max-w-xl"} rounded-[24px] bg-white p-0 shadow-2xl`}
    >
      {open && children}
    </dialog>
  );
}

/* ---------------- Recherche ---------------- */

const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

function SearchPanel({ onClose }: { onClose: () => void }) {
  const { ui, l } = useI18n();
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  // Focus du champ à l'ouverture (remplace autoFocus)
  useEffect(() => inputRef.current?.focus(), []);
  const query = norm(q.trim());

  const results = useMemo(() => {
    if (query.length < 2) return null;
    const products = PRODUCTS.filter((p) =>
      norm([l(p.name), l(p.tagline), l(p.description), ...p.plants].join(" ")).includes(query),
    ).slice(0, 6);
    const plants = PLANTS.filter((p) => norm([l(p.name), p.latin, l(p.uses)].join(" ")).includes(query)).slice(0, 4);
    return { products, plants };
  }, [query, l]);

  return (
    <div className="p-5 sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <h2 id="search-title" className="text-lg font-bold">{ui.search.title}</h2>
        <button onClick={onClose} className="rounded-full p-2 hover:bg-mist" aria-label={ui.nav.close}>
          <X className="size-5" />
        </button>
      </div>
      <div className="relative mt-4">
        <Search className="pointer-events-none absolute top-1/2 size-5 -translate-y-1/2 text-slate start-4" aria-hidden="true" />
        <input
          ref={inputRef}
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={ui.search.placeholder}
          aria-label={ui.search.title}
          className="field ps-12"
        />
      </div>
      <div className="mt-5 max-h-[55vh] overflow-y-auto" aria-live="polite">
        {!results && <p className="text-sm text-slate">{ui.search.hint}</p>}
        {results && results.products.length + results.plants.length === 0 && <p className="text-sm text-slate">{ui.search.empty}</p>}
        {results && results.products.length > 0 && (
          <div>
            <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate">{ui.search.products}</h3>
            <ul className="space-y-1">
              {results.products.map((p) => (
                <li key={p.slug}>
                  <Link href={`/produits/${p.slug}`} onClick={onClose} className="flex items-center gap-3 rounded-xl p-2 hover:bg-mist">
                    <img src={p.image} alt="" className="size-12 rounded-lg object-cover" loading="lazy" />
                    <span>
                      <span className="block font-semibold text-ink">{l(p.name)}</span>
                      <span className="block text-sm text-slate">{p.range === "cosmetic" ? ui.ranges.cosmetic : ui.ranges.pharma}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        {results && results.plants.length > 0 && (
          <div className="mt-4">
            <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate">{ui.search.plants}</h3>
            <ul className="space-y-1">
              {results.plants.map((p) => (
                <li key={p.slug}>
                  <Link href={`/plantes#${p.slug}`} onClick={onClose} className="flex items-center gap-3 rounded-xl p-2 hover:bg-mint">
                    <Leaf className="size-5 text-leaf-ink" aria-hidden="true" />
                    <span className="font-semibold text-ink">{l(p.name)}</span>
                    {p.latin && <span className="text-sm italic text-slate">{p.latin}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------------- Cookies ---------------- */

type Consent = { necessary: true; analytics: boolean; preferences: boolean; date: string };
const CONSENT_KEY = "gcp-cookie-consent";

function readConsent(): Consent | null {
  try {
    return JSON.parse(localStorage.getItem(CONSENT_KEY) || "null");
  } catch {
    return null;
  }
}

function CookieBanner({ forceOpen, onClosed }: { forceOpen: boolean; onClosed: () => void }) {
  const { ui } = useI18n();
  const [visible, setVisible] = useState(false);
  const [custom, setCustom] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [prefs, setPrefs] = useState(false);

  useEffect(() => {
    const c = readConsent();
    if (!c) setVisible(true);
    else {
      setAnalytics(c.analytics);
      setPrefs(c.preferences);
    }
  }, []);
  useEffect(() => {
    if (forceOpen) {
      setVisible(true);
      setCustom(true);
    }
  }, [forceOpen]);

  const save = (a: boolean, p: boolean) => {
    const c: Consent = { necessary: true, analytics: a, preferences: p, date: new Date().toISOString() };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(c));
    window.dispatchEvent(new CustomEvent("gcp-consent", { detail: c }));
    setVisible(false);
    setCustom(false);
    onClosed();
  };

  if (!visible) return null;

  return (
    <section aria-labelledby="cookie-title" className="fixed inset-x-3 bottom-14 z-[60] sm:inset-x-auto sm:end-5 sm:bottom-16 sm:max-w-md">
      <div className="card max-h-[60vh] overflow-y-auto p-4 shadow-2xl sm:max-h-none sm:p-6">
        <div className="flex items-center gap-2">
          <Cookie className="size-5 text-leaf-ink" aria-hidden="true" />
          <h2 id="cookie-title" className="text-base font-bold">{ui.cookies.title}</h2>
        </div>
        <p className="mt-2 text-sm text-slate">
          {ui.cookies.text}{" "}
          <Link href="/confidentialite" className="text-blue underline">{ui.cookies.learnMore}</Link>
        </p>

        {custom && (
          <fieldset className="mt-4 space-y-3 border-t border-line pt-4">
            <legend className="sr-only">{ui.cookies.customize}</legend>
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold">{ui.cookies.necessary}</p>
                <p className="text-xs text-slate">{ui.cookies.necessaryDesc}</p>
              </div>
              <span className="chip chip-blue shrink-0 text-xs">{ui.cookies.alwaysOn}</span>
            </div>
            {[
              { k: "a", label: ui.cookies.analytics, desc: ui.cookies.analyticsDesc, v: analytics, set: setAnalytics },
              { k: "p", label: ui.cookies.preferences, desc: ui.cookies.preferencesDesc, v: prefs, set: setPrefs },
            ].map((o) => (
              <label key={o.k} className="flex cursor-pointer items-start justify-between gap-3">
                <span>
                  <span className="block text-sm font-semibold">{o.label}</span>
                  <span className="block text-xs text-slate">{o.desc}</span>
                </span>
                <input type="checkbox" checked={o.v} onChange={(e) => o.set(e.target.checked)} aria-label={o.label} className="mt-1 size-5 accent-[#0B5C8C]" />
              </label>
            ))}
          </fieldset>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {custom ? (
            <button className="btn btn-primary min-h-11 flex-1 px-4 text-sm" onClick={() => save(analytics, prefs)}>{ui.cookies.save}</button>
          ) : (
            <>
              {/* Refuser aussi visible qu'accepter (recommandations CNIL / RGPD) */}
              <button className="btn btn-outline min-h-11 flex-1 px-4 text-sm" onClick={() => save(false, false)}>{ui.cookies.reject}</button>
              <button className="btn btn-primary min-h-11 flex-1 px-4 text-sm" onClick={() => save(true, true)}>{ui.cookies.accept}</button>
              <button className="w-full text-center text-sm font-semibold text-blue underline" onClick={() => setCustom(true)}>{ui.cookies.customize}</button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WhatsApp ---------------- */

function WhatsAppButton() {
  const { ui } = useI18n();
  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ui.cta.whatsapp}
      title={ui.cta.whatsapp}
      className="fixed bottom-5 z-50 grid size-14 place-items-center rounded-full bg-[#1f9e57] text-white shadow-[0_12px_30px_-8px_rgba(31,158,87,.7)] transition-transform hover:scale-105 start-5"
    >
      <FaWhatsapp className="size-7" aria-hidden="true" />
    </a>
  );
}

/* ---------------- Provider ---------------- */

export function OverlayProvider({ children }: { children: ReactNode }) {
  const { ui } = useI18n();
  const [quote, setQuote] = useState<{ open: boolean; products: string }>({ open: false, products: "" });
  const [search, setSearch] = useState(false);
  const [cookies, setCookies] = useState(false);

  const openQuote = useCallback((products = "") => setQuote({ open: true, products }), []);
  const openSearch = useCallback(() => setSearch(true), []);
  const openCookies = useCallback(() => setCookies(true), []);
  const api = useMemo(() => ({ openQuote, openSearch, openCookies }), [openQuote, openSearch, openCookies]);

  return (
    <OverlayContext.Provider value={api}>
      {children}

      <Modal open={quote.open} onClose={() => setQuote({ open: false, products: "" })} labelledBy="quote-title" wide>
        <div className="max-h-[90vh] overflow-y-auto p-5 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full bg-mint text-leaf-ink"><Package className="size-5" aria-hidden="true" /></span>
              <h2 id="quote-title" className="text-xl font-bold">{ui.quote.title}</h2>
            </div>
            <button onClick={() => setQuote({ open: false, products: "" })} className="rounded-full p-2 hover:bg-mist" aria-label={ui.nav.close}>
              <X className="size-5" />
            </button>
          </div>
          <p className="mt-3 mb-6 text-slate">{ui.quote.intro}</p>
          <QuoteForm defaultProducts={quote.products} />
        </div>
      </Modal>

      <Modal open={search} onClose={() => setSearch(false)} labelledBy="search-title">
        <SearchPanel onClose={() => setSearch(false)} />
      </Modal>

      <WhatsAppButton />
      <CookieBanner forceOpen={cookies} onClosed={() => setCookies(false)} />
    </OverlayContext.Provider>
  );
}
