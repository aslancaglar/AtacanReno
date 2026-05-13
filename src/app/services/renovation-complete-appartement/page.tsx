import type { Metadata } from "next";
import RenovationCompleteAppartementPageClient from "./RenovationCompleteAppartementPageClient";

const BASE_URL = "https://atcrenovation.com";
const SLUG = "renovation-complete-appartement";

export const metadata: Metadata = {
  title: "Rénovation Complète d'Appartement à Nancy — ATC Rénovation",
  description:
    "Rénovation complète d'appartement à Nancy, clé en main : tous corps de métier. Plomberie, électricité, peinture, sols. ATC Rénovation. Devis gratuit.",
  openGraph: {
    title: "Rénovation Complète d'Appartement à Nancy — ATC Rénovation",
    description:
      "Rénovation complète d'appartement à Nancy, clé en main : tous corps de métier. Plomberie, électricité, peinture, sols.",
    url: `${BASE_URL}/services/${SLUG}`,
    type: "website",
    locale: "fr_FR",
    siteName: "ATC Rénovation",
    images: [
      {
        url: `${BASE_URL}/images/service-appart.jpg`,
        width: 1200,
        height: 630,
        alt: "Rénovation complète d'appartement à Nancy — ATC Rénovation",
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/services/${SLUG}`,
  },
};

export default function AppartementPage() {
  return <RenovationCompleteAppartementPageClient />;
}
