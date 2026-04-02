import type { Metadata } from "next";
import RealisationsPageClient from "./RealisationsPageClient";

export const metadata: Metadata = {
  title: "Nos Réalisations — ATC Rénovation | Portfolio Rénovation Nancy",
  description:
    "Découvrez nos projets de rénovation intérieure réalisés à Nancy et ses environs. Avant/après, salles de bains, cuisines, salons — chaque chantier reflète notre savoir-faire.",
  openGraph: {
    title: "Nos Réalisations — ATC Rénovation | Portfolio Rénovation Nancy",
    description:
      "Découvrez nos projets de rénovation intérieure réalisés à Nancy et ses environs. Avant/après, salles de bains, cuisines, salons.",
  },
};

export default function RealisationsPage() {
  return <RealisationsPageClient />;
}
