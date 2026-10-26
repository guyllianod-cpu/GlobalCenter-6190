/**
 * Logo Global Center Pharma.
 * - "horizontal" : emblème + texte à droite (en-tête)
 * - "stacked"    : emblème au-dessus du texte (hero, pied de page)
 * - "emblem"     : emblème seul
 * L'emblème est l'image d'origine détourée (ni déformée, ni recolorée).
 * Toujours en dir="ltr" pour ne pas être inversé en arabe.
 */
interface LogoProps {
  variant?: "horizontal" | "stacked" | "emblem";
  /** Hauteur de l'emblème en px */
  size?: number;
  /** Texte clair pour fonds sombres */
  inverted?: boolean;
  className?: string;
}

export function Logo({ variant = "horizontal", size = 48, inverted = false, className = "" }: LogoProps) {
  const emblem = (
    <img
      src="/brand/emblem.webp"
      alt={variant === "emblem" ? "Global Center Pharma" : ""}
      width={size}
      height={Math.round(size * 1.043)}
      style={{ width: size, height: "auto" }}
      className="shrink-0 select-none"
      draggable={false}
    />
  );
  if (variant === "emblem") return <span className={className}>{emblem}</span>;

  const blue = inverted ? "#ffffff" : "#0B5C8C";
  const green = "#6DB33F";
  const stacked = variant === "stacked";

  return (
    <span
      dir="ltr"
      className={`inline-flex ${stacked ? "flex-col items-center text-center" : "flex-row items-center"} ${className}`}
      style={{ gap: stacked ? size * 0.12 : size * 0.22 }}
    >
      {emblem}
      <span className="flex flex-col leading-none" style={{ fontFamily: "Montserrat, sans-serif" }}>
        <span
          style={{ color: blue, fontWeight: 800, fontSize: stacked ? size * 0.3 : size * 0.36, letterSpacing: "0.01em" }}
        >
          GLOBAL CENTER
        </span>
        <span
          style={{
            color: green,
            fontWeight: 800,
            fontSize: stacked ? size * 0.3 : size * 0.36,
            letterSpacing: stacked ? "0.18em" : "0.2em",
            marginTop: size * 0.05,
          }}
        >
          PHARMA
        </span>
      </span>
    </span>
  );
}
