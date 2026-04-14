import certMaprimerenov from "@/assets/cert-maprimerenov.jpg";
import certDecennale from "@/assets/cert-garantie-decennale.jpg";
import certRge from "@/assets/cert-rge-qualibat.jpg";

export const certs = [
  { src: certRge.src, alt: "Certification RGE Qualibat", title: "RGE Qualibat" },
  { src: certDecennale.src, alt: "Garantie Décennale", title: "Garantie Décennale" },
  { src: certMaprimerenov.src, alt: "MaPrimeRénov'", title: "MaPrimeRénov'" },
] as const;
