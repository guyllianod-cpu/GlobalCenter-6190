# Global Center Pharma — Design system

## Positionnement
Médical-naturel, premium, rassurant. Blanc dominant, beaucoup d'air, coins arrondis, ombres très légères. La photo (plantes, laboratoire, flacons) porte l'émotion ; l'interface reste sobre.

## Couleurs (CSS variables dans `packages/web/src/web/styles.css`)
| Rôle | Token | Valeur |
|---|---|---|
| Bleu profond (primaire, texte titres, boutons) | `--gcp-blue` | #0B5C8C |
| Bleu nuit (fonds sombres, footer) | `--gcp-navy` | #073A59 |
| Vert feuille (décor, pictos, fonds, logo) | `--gcp-leaf` | #6DB33F |
| Vert encre (texte vert accessible AA) | `--gcp-leaf-ink` | #3B7A1C |
| Vert clair (fonds de sections) | `--gcp-mint` | #EEF6E7 |
| Bleu brume (fonds alternés) | `--gcp-mist` | #EEF5FA |
| Gris doux (texte secondaire) | `--gcp-slate` | #5B6B78 |
| Encre (texte principal) | `--gcp-ink` | #13293D |

Règle AA : le vert #6DB33F n'est jamais utilisé pour du texte sur blanc ; utiliser `--gcp-leaf-ink`.

## Typographie
- Titres : **Montserrat** 600–800, interlettrage légèrement serré.
- Texte : **Open Sans** 400/600, line-height 1.7.
- Arabe (RTL) : **Cairo** pour titres et texte.
- Échelle : h1 clamp(2.4rem, 5vw, 4.2rem) · h2 clamp(1.8rem, 3.2vw, 2.7rem) · h3 1.25rem.

## Formes & ombres
- Rayons : 14px (champs), 20px (cartes), 32px (grandes images), pilule pour boutons et badges.
- Ombre carte : `0 10px 30px -12px rgba(11,92,140,.18)`.

## Composants
- Bouton primaire : bleu plein, texte blanc, pilule. Secondaire : contour bleu. Sur fond sombre : blanc plein.
- Eyebrow : petit libellé uppercase vert encre précédé d'une feuille.
- Cartes produit : image carrée sur fond clair, badge gamme, nom, accroche, plantes.
- Logo : version horizontale (en-tête), empilée (hero, pied de page), emblème seul (favicon). Jamais déformé ni recoloré ; toujours `dir="ltr"`.

## Mouvement
Apparitions discrètes au scroll (fade + translate 16px, 600ms, décalage 80ms). Désactivées avec `prefers-reduced-motion`.

## Mise en page
Mobile-first. Conteneur 1240px. Sections espacées de 96–128px desktop / 64px mobile. Alternance blanc / brume / menthe. Mise en miroir complète en arabe (logical properties `ms-/me-/ps-/pe-`, `start/end`).
