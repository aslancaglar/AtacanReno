import type { Metadata } from "next";
import RevetementsSolsMursPageClient from "./RevetementsSolsMursPageClient";

const BASE_URL = "https://atcrenovation.com";
const SLUG = "revetements-sols-murs";

export const metadata: Metadata = {
  title: "Revêtements de Sols & Murs à Nancy — ATC Rénovation",
  description:
    "Pose de carrelage, parquet et sols souples à Nancy. Faïence, grand format, ragréage. ATC Rénovation, artisan qualifié RGE. Devis gratuit sous 48h.",
  openGraph: {
    title: "Revêtements de Sols & Murs à Nancy — ATC Rénovation",
    description:
      "Pose de carrelage, parquet et sols souples à Nancy. Faïence, grand format, ragréage.",
    url: `${BASE_URL}/${SLUG}`,
    type: "website",
    locale: "fr_FR",
    siteName: "ATC Rénovation",
    images: [
      {
        url: `${BASE_URL}/images/service-sols.jpg`,
        width: 1200,
        height: 630,
        alt: "Revêtements de sols et murs à Nancy — ATC Rénovation",
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/${SLUG}`,
  },
};

export default function RevêtementsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Revêtements de Sols & Murs à Nancy",
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
    "description": "Pose de carrelage, parquet et sols souples à Nancy. Faïence, grand format, ragréage par ATC Rénovation, artisan qualifié RGE."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RevetementsSolsMursPageClient />
    </>
  );
}
