/**
 * Briques de mise en page réutilisables : titre de section, en-tête de page.
 */
import type { ReactNode } from "react";
import { Leaf } from "lucide-react";
import { Reveal } from "./reveal";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span className="eyebrow" style={light ? { color: "#bfe3a3" } : undefined}>
      <Leaf className="size-4" aria-hidden="true" />
      {children}
    </span>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  align?: "start" | "center";
  light?: boolean;
  id?: string;
}

export function SectionHeading({ eyebrow, title, text, align = "start", light = false, id }: SectionHeadingProps) {
  const center = align === "center";
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} max-w-2xl`}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2 id={id} className="h2 mt-3" style={light ? { color: "#fff" } : undefined}>
        {title}
      </h2>
      {text && (
        <p className="lead mt-4" style={light ? { color: "rgba(255,255,255,.82)" } : undefined}>
          {text}
        </p>
      )}
    </Reveal>
  );
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  children?: ReactNode;
}

/** En-tête des pages intérieures : texte + image arrondie */
export function PageHero({ eyebrow, title, text, image, children }: PageHeroProps) {
  return (
    <section className="mesh relative overflow-hidden pt-28 pb-14 lg:pt-36 lg:pb-20">
      <div className="container-gcp grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <div className="hero-in">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="h1 mt-4 text-[clamp(2.1rem,4.4vw,3.5rem)]">{title}</h1>
          <p className="lead mt-5 max-w-xl">{text}</p>
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
        <div className="hero-in relative" style={{ animationDelay: "150ms" }}>
          <div className="absolute -inset-3 -z-0 rounded-[40px] bg-leaf/15 rotate-2" aria-hidden="true" />
          <img
            src={image}
            alt=""
            className="relative aspect-[4/3] w-full rounded-[32px] object-cover shadow-[var(--shadow-lift)]"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
