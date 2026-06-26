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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Rénovation de Chambre & Salon à Nancy",
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
    "description": "Rénovation chambre et salon à Nancy : peinture, sols, cloisons, faux plafonds. Aménagement sur mesure, finitions soignées par ATC Rénovation."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RenovationChambreSalonPageClient />
    </>
  );
}
