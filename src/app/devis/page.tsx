import type { Metadata } from "next";
import DevisPageClient from "./DevisPageClient";

export const metadata: Metadata = {
  title: "Demande de Devis Gratuit — ATC Rénovation Nancy",
  description:
    "Demandez votre devis gratuit en ligne pour vos travaux de rénovation intérieure à Nancy. Réponse sous 48h, sans engagement. Peinture, isolation RGE, plâtrerie, revêtements de sols, combles.",
  openGraph: {
    title: "Demande de Devis Gratuit — ATC Rénovation Nancy",
    description:
      "Demandez votre devis gratuit en ligne pour vos travaux de rénovation intérieure à Nancy. Réponse sous 48h.",
  },
};

export default function DevisPage() {
  return <DevisPageClient />;
}
