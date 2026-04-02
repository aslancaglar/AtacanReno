import type { Metadata } from "next";
import DevisPageClient from "./DevisPageClient";

export const metadata: Metadata = {
  title: "Demande de Devis Gratuit — ATC Rénovation Nancy",
  description:
    "Demandez votre devis gratuit en ligne pour vos travaux de rénovation intérieure à Nancy. Réponse sous 48h, sans engagement. Salle de bains, cuisine, appartement, isolation RGE.",
  openGraph: {
    title: "Demande de Devis Gratuit — ATC Rénovation Nancy",
    description:
      "Demandez votre devis gratuit en ligne pour vos travaux de rénovation intérieure à Nancy. Réponse sous 48h.",
  },
};

export default function DevisPage() {
  return <DevisPageClient />;
}
