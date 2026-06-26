import type { Metadata } from "next";
import IsolationRenovationEnergetiquePageClient from "./IsolationRenovationEnergetiquePageClient";

const BASE_URL = "https://atcrenovation.com";
const SLUG = "isolation-renovation-energetique";

export const metadata: Metadata = {
  title: "Isolation Thermique & Rénovation Énergétique à Nancy (RGE) — ATC Rénovation",
  description:
    "Isolation certifiée RGE à Nancy : combles, murs, planchers. Éligible MaPrimeRénov', jusqu'à 80% d'aides. ATC Rénovation, artisan qualifié. Devis gratuit.",
  openGraph: {
    title: "Isolation Thermique & Rénovation Énergétique à Nancy (RGE) — ATC Rénovation",
    description:
      "Isolation certifiée RGE à Nancy : combles, murs, planchers. Éligible MaPrimeRénov', jusqu'à 80% d'aides.",
    url: `${BASE_URL}/${SLUG}`,
    type: "website",
    locale: "fr_FR",
    siteName: "ATC Rénovation",
    images: [
      {
        url: `${BASE_URL}/images/service-isolation.jpg`,
        width: 1200,
        height: 630,
        alt: "Isolation thermique RGE à Nancy — ATC Rénovation",
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/${SLUG}`,
  },
};

export default function IsolationPage() {
  return <IsolationRenovationEnergetiquePageClient />;
}
