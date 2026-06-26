import type { Metadata } from "next";
import IsolationThermiqueEtRenovationEnergetiquePageClient from "./IsolationThermiqueEtRenovationEnergetiquePageClient";

const BASE_URL = "https://atcrenovation.com";
const SLUG = "isolation-thermique-et-renovation-energetique";

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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Isolation Thermique & Rénovation Énergétique à Nancy (RGE)",
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
    "description": "Isolation certifiée RGE à Nancy : combles, murs, planchers. Éligible MaPrimeRénov', jusqu'à 80% d'aides. ATC Rénovation, artisan qualifié."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IsolationThermiqueEtRenovationEnergetiquePageClient />
    </>
  );
}
