/**
 * Mise en page commune : en-tête (logo horizontal, navigation, recherche,
 * langues), pied de page (logo empilé, liens, newsletter, avertissement).
 */
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, Globe, Menu, Search, X, Phone, Mail, MapPin, FileDown } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { LANGS, LANG_LABELS, useI18n, type Lang } from "../lib/i18n";
import { Logo } from "./logo";
import { NewsletterForm } from "./forms";
import { useOverlays } from "./overlays";
import { SITE } from "../data/site";

/* ---------------- Navigation ---------------- */

function useNav() {
  const { ui } = useI18n();
  return {
    main: [
      { href: "/produits", label: ui.nav.products },
      { href: "/plantes", label: ui.nav.plants },
    ],
    company: [
      { href: "/a-propos", label: ui.nav.about },
      { href: "/fabrication-qualite", label: ui.nav.quality },
      { href: "/recherche-innovation", label: ui.nav.research },
    ],
    tail: [
      { href: "/blog", label: ui.nav.blog },
      { href: "/partenaires", label: ui.nav.partners },
    ],
  };
}

function isActive(loc: string, href: string) {
  return href === "/" ? loc === "/" : loc === href || loc.startsWith(`${href}/`);
}

function LangSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, ui, abs } = useI18n();
  const [loc, navigate] = useLocation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => ref.current && !ref.current.contains(e.target as Node) && setOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const go = (target: Lang) => {
    setOpen(false);
    navigate(`~${abs(loc, target)}${window.location.hash}`);
    window.scrollTo(0, 0);
  };

  if (compact) {
    return (
      <fieldset className="flex gap-2">
        <legend className="sr-only">{ui.nav.language}</legend>
        {LANGS.map((l) => (
          <button
            key={l}
            onClick={() => go(l)}
            lang={l}
            aria-current={l === lang ? "true" : undefined}
            className={`min-h-11 flex-1 rounded-full border px-3 text-sm font-semibold ${l === lang ? "border-blue bg-blue text-white" : "border-line text-ink"}`}
          >
            {LANG_LABELS[l].name}
          </button>
        ))}
      </fieldset>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={`${ui.nav.language} : ${LANG_LABELS[lang].name}`}
        className="flex min-h-11 items-center gap-1.5 rounded-full px-3 text-sm font-semibold text-ink hover:bg-mist"
      >
        <Globe className="size-4" aria-hidden="true" />
        {LANG_LABELS[lang].short}
        <ChevronDown className="size-3.5" aria-hidden="true" />
      </button>
      {open && (
        <ul className="card absolute top-full mt-2 w-40 overflow-hidden p-1.5 end-0">
          {LANGS.map((l) => (
            <li key={l}>
              <button
                onClick={() => go(l)}
                lang={l}
                aria-current={l === lang ? "true" : undefined}
                className={`w-full rounded-xl px-3 py-2 text-start text-sm ${l === lang ? "bg-mist font-bold text-blue" : "hover:bg-mist"}`}
              >
                {LANG_LABELS[l].name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function CompanyMenu({ items, active }: { items: { href: string; label: string }[]; active: boolean }) {
  const { ui } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const close = (e: MouseEvent) => ref.current && !ref.current.contains(e.target as Node) && setOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);
  return (
    <div ref={ref} className="relative" onMouseLeave={() => setOpen(false)}>
      <button
        onClick={() => setOpen((o) => !o)}
        onMouseEnter={() => setOpen(true)}
        aria-expanded={open}
        className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.92rem] font-semibold transition-colors ${active ? "text-blue" : "text-ink hover:text-blue"}`}
      >
        {ui.footer.company}
        <ChevronDown className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      {open && (
        <div className="absolute top-full pt-2 start-0">
          <ul className="card w-64 p-2">
            {items.map((it) => (
              <li key={it.href}>
                <Link href={it.href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-ink hover:bg-mist hover:text-blue">
                  {it.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Header() {
  const { ui } = useI18n();
  const nav = useNav();
  const [loc] = useLocation();
  const { openSearch } = useOverlays();
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setMobile(false), [loc]);
  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
  }, [mobile]);

  const linkCls = (href: string) =>
    `rounded-full px-3.5 py-2 text-[0.92rem] font-semibold transition-colors ${isActive(loc, href) ? "text-blue" : "text-ink hover:text-blue"}`;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/92 shadow-[0_6px_24px_-14px_rgba(11,92,140,.35)] backdrop-blur-md" : "bg-white/70 backdrop-blur-sm"}`}>
      <div className="container-gcp flex h-[76px] items-center justify-between gap-4">
        <Link href="/" aria-label={`Global Center Pharma — ${ui.nav.home}`} className="shrink-0">
          <Logo variant="horizontal" size={46} />
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center lg:flex">
          {nav.main.map((it) => (
            <Link key={it.href} href={it.href} className={linkCls(it.href)} aria-current={isActive(loc, it.href) ? "page" : undefined}>
              {it.label}
            </Link>
          ))}
          <CompanyMenu items={nav.company} active={nav.company.some((c) => isActive(loc, c.href))} />
          {nav.tail.map((it) => (
            <Link key={it.href} href={it.href} className={linkCls(it.href)} aria-current={isActive(loc, it.href) ? "page" : undefined}>
              {it.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button onClick={openSearch} className="grid size-11 place-items-center rounded-full text-ink hover:bg-mist" aria-label={ui.nav.search}>
            <Search className="size-5" />
          </button>
          <div className="hidden sm:block">
            <LangSwitcher />
          </div>
          <Link href="/contact" className="btn btn-primary ms-2 hidden min-h-11 px-5 text-sm lg:inline-flex">
            {ui.nav.contact}
          </Link>
          <button
            onClick={() => setMobile(true)}
            className="grid size-11 place-items-center rounded-full text-ink hover:bg-mist lg:hidden"
            aria-label={ui.nav.menu}
            aria-expanded={mobile}
            aria-controls="mobile-menu"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </div>

      {/* Menu mobile plein écran */}
      {mobile && (
        <dialog open id="mobile-menu" className="fixed inset-0 z-[70] m-0 flex h-full max-h-none w-full max-w-none flex-col border-0 bg-white p-0 lg:hidden" aria-modal="true" aria-label={ui.nav.menu}>
          <div className="container-gcp flex h-[76px] items-center justify-between">
            <Logo variant="horizontal" size={42} />
            <button onClick={() => setMobile(false)} className="grid size-11 place-items-center rounded-full hover:bg-mist" aria-label={ui.nav.close} autoFocus>
              <X className="size-6" />
            </button>
          </div>
          <nav className="container-gcp flex-1 overflow-y-auto pb-8" aria-label={ui.nav.menu}>
            <ul className="divide-y divide-line">
              {[{ href: "/", label: ui.nav.home }, ...nav.main, ...nav.company, ...nav.tail, { href: "/contact", label: ui.nav.contact }].map((it) => (
                <li key={it.href}>
                  <Link href={it.href} className={`flex min-h-14 items-center text-lg font-semibold ${isActive(loc, it.href) ? "text-blue" : "text-ink"}`} style={{ fontFamily: "var(--font-display)" }}>
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="mb-2 text-sm font-semibold text-slate">{ui.nav.language}</p>
              <LangSwitcher compact />
            </div>
            <a href={SITE.catalogPdf} download className="btn btn-outline mt-6 w-full">
              <FileDown className="size-4" aria-hidden="true" /> {ui.cta.catalogLong}
            </a>
          </nav>
        </dialog>
      )}
    </header>
  );
}

/* ---------------- Pied de page ---------------- */

const HQ_LABEL = { fr: "Siège social — Londres", en: "Head office — London", ar: "المقر الرئيسي — لندن" } as const;
const PARIS_LABEL = { fr: "Bureau France — Paris", en: "France office — Paris", ar: "مكتب فرنسا — باريس" } as const;

function Footer() {
  const { ui, l, lang } = useI18n();
  const nav = useNav();
  const { openCookies } = useOverlays();

  const socials = [
    { href: SITE.social.facebook, label: "Facebook", Icon: FaFacebookF },
    { href: SITE.social.instagram, label: "Instagram", Icon: FaInstagram },
    { href: SITE.social.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
    { href: SITE.social.youtube, label: "YouTube", Icon: FaYoutube },
  ];

  return (
    <footer className="relative mt-auto bg-navy text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="container-gcp grid items-center gap-6 py-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-white">{ui.newsletter.title}</h2>
            <p className="mt-2 max-w-lg text-white/80">{ui.newsletter.text}</p>
          </div>
          <NewsletterForm dark />
        </div>
      </div>

      <div className="container-gcp grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div>
          {/* Logo empilé sur pastille blanche pour préserver ses couleurs */}
          <div className="inline-flex rounded-[24px] bg-white px-6 py-5">
            <Logo variant="stacked" size={78} />
          </div>
          <p className="mt-5 max-w-xs text-sm text-white/80">{ui.footer.tagline}</p>
          <p className="mt-5 text-sm font-semibold text-white">{ui.footer.follow}</p>
          <ul className="mt-3 flex gap-2">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid size-11 place-items-center rounded-full bg-white/10 transition hover:bg-leaf">
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#bfe3a3]">{ui.footer.company}</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[...nav.company, ...nav.tail, { href: "/contact", label: ui.nav.contact }].map((it) => (
              <li key={it.href}><Link href={it.href} className="text-white/85 hover:text-white hover:underline">{it.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#bfe3a3]">{ui.footer.ranges}</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/produits?gamme=cosmetic" className="text-white/85 hover:text-white hover:underline">{ui.ranges.cosmetic}</Link></li>
            <li><Link href="/produits?gamme=pharma" className="text-white/85 hover:text-white hover:underline">{ui.ranges.pharma}</Link></li>
            <li><Link href="/plantes" className="text-white/85 hover:text-white hover:underline">{ui.nav.plants}</Link></li>
            <li>
              <a href={SITE.catalogPdf} download className="inline-flex items-center gap-1.5 text-white/85 hover:text-white hover:underline">
                <FileDown className="size-4" aria-hidden="true" /> {ui.cta.catalog}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#bfe3a3]">{ui.nav.contact}</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/85">
            <li className="flex gap-2.5"><MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" /><span><strong className="block text-white">{HQ_LABEL[lang]}</strong><span dir="ltr" className="block">{SITE.headOffice.display}</span></span></li>
            <li className="flex gap-2.5"><MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" /><span><strong className="block text-white">{PARIS_LABEL[lang]}</strong><span dir="ltr" className="block">{SITE.address.street}, {SITE.address.postalCode} {SITE.address.city}, {SITE.address.country}</span></span></li>
            <li className="flex gap-2.5"><Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" /><span className="flex flex-col gap-1">{SITE.phones.map((p) => <a key={p.href} href={`tel:${p.href}`} dir="ltr" className="hover:text-white">{p.display}</a>)}</span></li>
            <li className="flex gap-2.5"><Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" /><a href={`mailto:${SITE.email}`} className="break-all hover:text-white">{SITE.email}</a></li>
            <li className="text-white/70">{l(SITE.hours)}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-gcp py-6">
          <p className="rounded-2xl bg-white/5 px-4 py-3 text-center text-sm text-white/90">
            <strong className="font-semibold">⚕ </strong>
            {ui.footer.medical}
          </p>
          <div className="mt-5 flex flex-col items-center justify-between gap-3 text-xs text-white/70 sm:flex-row">
            <p>© 2006 Global Center Pharma. {ui.footer.rights}</p>
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
              <li><Link href="/mentions-legales" className="hover:text-white hover:underline">{ui.footer.legal}</Link></li>
              <li><Link href="/confidentialite" className="hover:text-white hover:underline">{ui.footer.privacy}</Link></li>
              <li><Link href="/avertissement" className="hover:text-white hover:underline">{ui.footer.disclaimer}</Link></li>
              <li><button onClick={openCookies} className="hover:text-white hover:underline">{ui.footer.cookies}</button></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Layout ---------------- */

export function Layout({ children }: { children: ReactNode }) {
  const { ui } = useI18n();
  const [loc] = useLocation();
  // Remonter en haut à chaque changement de page (sauf ancre)
  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
    else {
      const el = document.getElementById(window.location.hash.slice(1));
      setTimeout(() => el?.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
    }
  }, [loc]);

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main" className="skip-link">{ui.skip}</a>
      <Header />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        {children}
      </main>
      <Footer />
    </div>
  );
}
