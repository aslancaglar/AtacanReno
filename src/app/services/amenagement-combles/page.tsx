import type { Metadata } from "next";
import AmenagementComblesPageClient from "./AmenagementComblesPageClient";

const BASE_URL = "https://atcrenovation.com";
const SLUG = "amenagement-combles";

export const metadata: Metadata = {
  title: "Aménagement des Combles à Nancy — ATC Rénovation",
  description:
    "Aménagement de combles à Nancy, clé en main : isolation, plâtrerie, électricité, sols, peinture. Chambre ou bureau sous les toits. Devis gratuit.",
  openGraph: {
    title: "Aménagement des Combles à Nancy — ATC Rénovation",
    description:
      "Aménagement de combles à Nancy, clé en main : isolation, plâtrerie, électricité, sols, peinture. Chambre ou bureau sous les toits.",
    url: `${BASE_URL}/services/${SLUG}`,
    type: "website",
    locale: "fr_FR",
    siteName: "ATC Rénovation",
    images: [
      {
        url: `${BASE_URL}/images/service-combles.jpg`,
        width: 1200,
        height: 630,
        alt: "Aménagement des combles à Nancy — ATC Rénovation",
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/services/${SLUG}`,
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Aménagement des Combles à Nancy",
    description:
      "Aménagement de combles à Nancy, clé en main : isolation, plâtrerie, électricité, sols, peinture. Chambre ou bureau sous les toits.",
    url: `${BASE_URL}/services/${SLUG}`,
    provider: {
      "@type": "LocalBusiness",
      name: "ATC Rénovation",
      url: BASE_URL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nancy",
        addressRegion: "Grand Est",
        postalCode: "54000",
        addressCountry: "FR",
      },
    },
    areaServed: [
      { "@type": "City", name: "Nancy" },
      { "@type": "AdministrativeArea", name: "Meurthe-et-Moselle" },
    ],
    offers: {
      "@type": "Offer",
      description: "Devis gratuit sous 48h",
      price: "0",
      priceCurrency: "EUR",
      url: `${BASE_URL}/devis`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Combles", item: `${BASE_URL}/services/${SLUG}` },
    ],
  },
];

export default function ComblesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <AmenagementComblesPageClient />
    </>
  );
}
