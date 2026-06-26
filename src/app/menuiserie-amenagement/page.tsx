import type { Metadata } from "next";
import MenuiserieAmenagementPageClient from "./MenuiserieAmenagementPageClient";

const BASE_URL = "https://atcrenovation.com";
const SLUG = "menuiserie-amenagement";

export const metadata: Metadata = {
  title: "Installation de Portes Intérieures à Nancy — ATC Rénovation",
  description:
    "Pose de portes intérieures à Nancy : blocs-portes, fin de chantier, réglages précis. Confort acoustique optimal. ATC Rénovation. Devis gratuit.",
  openGraph: {
    title: "Installation de Portes Intérieures à Nancy — ATC Rénovation",
    description:
      "Pose de portes intérieures à Nancy : blocs-portes, fin de chantier, réglages précis. Confort acoustique optimal.",
    url: `${BASE_URL}/${SLUG}`,
    type: "website",
    locale: "fr_FR",
    siteName: "ATC Rénovation",
    images: [
      {
        url: `${BASE_URL}/images/service-menuiserie.jpg`,
        width: 1200,
        height: 630,
        alt: "Menuiserie et portes intérieures à Nancy — ATC Rénovation",
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/${SLUG}`,
  },
};

export default function PortesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Installation de Portes Intérieures à Nancy",
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
    "description": "Pose de portes intérieures à Nancy : blocs-portes, fin de chantier, réglages précis. Confort acoustique optimal par ATC Rénovation."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MenuiserieAmenagementPageClient />
    </>
  );
}
