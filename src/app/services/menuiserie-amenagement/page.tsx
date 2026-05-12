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
    url: `${BASE_URL}/services/${SLUG}`,
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
    canonical: `${BASE_URL}/services/${SLUG}`,
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Installation de Portes Intérieures à Nancy",
    description:
      "Pose de portes intérieures à Nancy : blocs-portes, fin de chantier, réglages précis. Confort acoustique optimal.",
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
      { "@type": "ListItem", position: 3, name: "Portes", item: `${BASE_URL}/services/${SLUG}` },
    ],
  },
];

export default function PortesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <MenuiserieAmenagementPageClient />
    </>
  );
}
