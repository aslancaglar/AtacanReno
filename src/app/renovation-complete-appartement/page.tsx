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
    url: `${BASE_URL}/${SLUG}`,
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
    canonical: `${BASE_URL}/${SLUG}`,
  },
};

export default function AppartementPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Rénovation Complète d'Appartement à Nancy",
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "ATC Rénovation",
      "url": "https://atcrenovation.com"
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Nancy" },
      { "@type": "AdministrativeArea", "name": "Vandœuvre-lès-Nancy" },
      { "@type": "AdministrativeArea", "name": "Laxou" },
      { "@type": "AdministrativeArea", "name": "Villers-lès-Nancy" },
      { "@type": "AdministrativeArea", "name": "Meurthe-et-Moselle" }
    ],
    "description": "Rénovation complète d'appartement à Nancy, clé en main : tous corps de métier. Plomberie, électricité, peinture, sols par ATC Rénovation."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RenovationCompleteAppartementPageClient />
    </>
  );
}
