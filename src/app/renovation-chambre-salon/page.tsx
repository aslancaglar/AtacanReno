import type { Metadata } from "next";
import RenovationChambreSalonPageClient from "./RenovationChambreSalonPageClient";

const BASE_URL = "https://atcrenovation.com";
const SLUG = "renovation-chambre-salon";

export const metadata: Metadata = {
  title: "Rénovation de Chambre & Salon à Nancy — ATC Rénovation",
  description:
    "Rénovation chambre et salon à Nancy : peinture, sols, cloisons, faux plafonds. Aménagement sur mesure, finitions soignées. ATC Rénovation. Devis gratuit.",
  openGraph: {
    title: "Rénovation de Chambre & Salon à Nancy — ATC Rénovation",
    description:
      "Rénovation chambre et salon à Nancy : peinture, sols, cloisons, faux plafonds. Aménagement sur mesure, finitions soignées.",
    url: `${BASE_URL}/${SLUG}`,
    type: "website",
    locale: "fr_FR",
    siteName: "ATC Rénovation",
    images: [
      {
        url: `${BASE_URL}/images/service-salon.jpg`,
        width: 1200,
        height: 630,
        alt: "Rénovation chambre et salon à Nancy — ATC Rénovation",
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/${SLUG}`,
  },
};

export default function ChambreSalonPage() {
  return <RenovationChambreSalonPageClient />;
}
